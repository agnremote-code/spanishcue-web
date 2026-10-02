import type { Module } from "../../types";

/** Original A2 week: authored scenario, skills and retrieval. */
export const a2w15: Module = {
  "id": "a2-15",
  "level": "a2",
  "week": 15,
  "kind": "checkpoint",
  "title": "Checkpoint: viaje con cambios",
  "subtitle": "Reorganizar un viaje, cambiar una reserva y resolver una cita sin perder la información importante.",
  "stop": {
    "place": "La Ceiba",
    "country": "Honduras"
  },
  "minutes": 140,
  "newObjectives": [
    "a2.rev.checkpoint-3",
    "a2.spk.resolver-problema",
    "a2.fun.transmitir-acuerdo"
  ],
  "reviewObjectives": [
    "a2.gram.estar-gerundio",
    "a2.gram.perifrasis-fase",
    "a2.voc.cambios-habitos",
    "a2.pron.asimilacion-nasal",
    "a2.fun.describir-cambios",
    "a2.spk.videollamada",
    "a2.gram.futuro-simple",
    "a2.gram.si-presente",
    "a2.voc.tecnologia-futuro",
    "a2.pron.vocales-atonas",
    "a2.fun.predecir-prometer",
    "a2.read.horoscopo-predicciones",
    "a2.gram.doler",
    "a2.gram.consejos-deberias",
    "a2.voc.cuerpo-salud",
    "a2.pron.letra-x",
    "a2.fun.medico",
    "a2.lis.consulta",
    "a2.gram.condicional-cortesia",
    "a2.voc.hotel-transporte",
    "a2.pron.cortesia-entonacion",
    "a2.fun.reclamar",
    "a2.wri.correo-reserva",
    "a2.read.condiciones"
  ],
  "prerequisites": [
    "a2-14"
  ],
  "goal": {
    "canDo": "Puedo reorganizar un viaje, cambiar una reserva y resolver una cita sin perder la información importante.",
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
        "heading": "Checkpoint: viaje con cambios · formas que necesitas",
        "body": [
          "Recupera acciones en curso, fases, futuro y cortesía dentro de un mismo problema. Estamos esperando describe el presente; acabamos de llegar sitúa algo muy reciente; si sale otro autobús, llegaremos hoy expresa una alternativa; ¿podría cambiar la reserva? pide una solución."
        ],
        "support": [
          "Keep confirmed information separate from an option still being discussed. On the phone, repeat times and agreements before ending the call."
        ],
        "examples": [
          {
            "es": "Estamos esperando y acabamos de recibir otro aviso."
          },
          {
            "es": "Si el autobús sale a las dos, llegaremos a las seis."
          }
        ],
        "mistakes": [
          {
            "wrong": "Si el autobús saldrá, llegaremos hoy.",
            "right": "Si el autobús sale, llegaremos hoy.",
            "why": "La condición real después de si lleva presente."
          }
        ]
      },
      {
        "heading": "Del sistema al mensaje",
        "body": [
          "Por teléfono el interlocutor no ve tus documentos. Presenta el motivo, da una referencia breve, explica el cambio y confirma el acuerdo. Anota únicamente los datos necesarios para el plan: hora, lugar, precio y acción pendiente. No confundas la hora de llegada a recepción con la de la cita."
        ],
        "examples": [
          {
            "es": "¿Podría mantener la reserva hasta esta noche?"
          },
          {
            "es": "Me duele un pie; tendré que cambiar la excursión."
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
            "q": "Ahora ___ esperando en la estación. (estar, nosotros)",
            "answers": [
              [
                "estamos"
              ]
            ]
          },
          {
            "q": "Si llegamos tarde, ___ al hotel. (llamar, nosotros, futuro)",
            "answers": [
              [
                "llamaremos"
              ]
            ]
          },
          {
            "q": "A Lara le ___ un pie. (doler)",
            "answers": [
              [
                "duele"
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
            "source": "Quiero cambiar la visita.",
            "instruction": "Empieza la pregunta con ¿Podría y conserva cambiar la visita; no añadas sujeto ni otra fórmula de cortesía.",
            "answers": [
              "¿Podría cambiar la visita?"
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          },
          {
            "source": "Hemos recibido un aviso hace un minuto.",
            "instruction": "Sustituye Hemos recibido por acabar de + infinitivo en primera persona plural y elimina hace un minuto. Conserva un aviso al final.",
            "answers": [
              "Acabamos de recibir un aviso."
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          },
          {
            "source": "Llegamos mañana. Avisamos hoy.",
            "instruction": "Empieza con Si llegamos mañana y expresa avisamos hoy en futuro después de una coma; no añadas sujetos.",
            "answers": [
              "Si llegamos mañana, avisaremos hoy."
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
            "es": "un retraso anunciado",
            "en": "an announced delay"
          },
          {
            "es": "mantener una reserva",
            "en": "hold a booking"
          },
          {
            "es": "avisar al alojamiento",
            "en": "notify accommodation"
          },
          {
            "es": "cambiar el recorrido",
            "en": "change the route"
          }
        ]
      },
      {
        "title": "Datos para resolver la misión",
        "items": [
          {
            "es": "la salida alternativa",
            "en": "alternative departure"
          },
          {
            "es": "confirmar por teléfono",
            "en": "confirm by phone"
          },
          {
            "es": "anotar el acuerdo",
            "en": "note the agreement"
          },
          {
            "es": "una gestión pendiente",
            "en": "an unfinished arrangement"
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
            "left": "un retraso anunciado",
            "right": "an announced delay"
          },
          {
            "left": "mantener una reserva",
            "right": "hold a booking"
          },
          {
            "left": "avisar al alojamiento",
            "right": "notify accommodation"
          },
          {
            "left": "cambiar el recorrido",
            "right": "change the route"
          },
          {
            "left": "la salida alternativa",
            "right": "alternative departure"
          },
          {
            "left": "confirmar por teléfono",
            "right": "confirm by phone"
          },
          {
            "left": "anotar el acuerdo",
            "right": "note the agreement"
          },
          {
            "left": "una gestión pendiente",
            "right": "an unfinished arrangement"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Confirmar horas parecidas",
    "explanation": [
      "En una llamada, catorce y dieciséis o seis y siete pueden confundirse si el sonido falla. Repite la hora con otra forma: a las catorce, es decir, a las dos. No es necesario imitar una voz; busca claridad y comprueba que tu interlocutor entiende."
    ],
    "perceive": {
      "id": "pronunciation-perceive",
      "type": "listen",
      "prompt": "Escucha primero y decide; usa también el contexto.",
      "items": [
        {
          "audio": "El autobús sale a las catorce.",
          "q": "¿A qué hora sale?",
          "options": [
            "A las dos de la tarde",
            "A las cuatro de la tarde"
          ],
          "answer": 0,
          "why": "Escucha de nuevo la frase completa y compara el dato con su forma escrita."
        },
        {
          "audio": "La recepción cierra a las diecinueve.",
          "q": "¿Cuál es la hora?",
          "options": [
            "Las siete de la tarde",
            "Las nueve de la noche"
          ],
          "answer": 0,
          "why": "Escucha de nuevo la frase completa y compara el dato con su forma escrita."
        }
      ]
    },
    "produce": [
      {
        "text": "Sale a las catorce / a las dos de la tarde.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      },
      {
        "text": "Llegaremos a las dieciocho / a las seis.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      },
      {
        "text": "El recorrido empieza a las once / mañana.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      }
    ]
  },
  "listening": {
    "title": "Llamada desde la estación",
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
        "text": "Buenas tardes. Tengo una reserva a nombre de Lara para esta noche. Estamos en la estación y nuestro autobús se ha cancelado. Quería avisar de que llegaremos más tarde de lo previsto."
      },
      {
        "speaker": "b",
        "text": "Gracias por llamar. ¿A qué hora sale el siguiente autobús? La recepción cierra a las siete, pero podemos organizar la llave si llegan después. ¿Siguen siendo dos personas?"
      },
      {
        "speaker": "a",
        "text": "Sí, dos. El autobús sale a las dos y el viaje dura cuatro horas. Si no hay más retrasos, llegaremos antes de las siete. ¿Podría mantener la reserva? También quería cambiar la visita guiada de esta tarde."
      },
      {
        "speaker": "b",
        "text": "Mantendremos la habitación. La visita puede cambiarse a mañana a las diez. Si prefieren algo más tranquilo, tenemos un recorrido corto por el centro a las once. Pueden decidir al llegar."
      },
      {
        "speaker": "a",
        "text": "Muchas gracias. Me duele un pie y creo que el recorrido corto será mejor. Confirmaremos al llegar."
      },
      {
        "speaker": "a",
        "text": "Una pregunta más: mi compañero tiene que enviar un documento de su curso antes de las ocho. ¿Hay conexión en la habitación o tenemos que usar el salón? Nos preocupa llegar con poco tiempo."
      },
      {
        "speaker": "b",
        "text": "En el salón suele funcionar mejor. Puede usar una mesa cuando llegue. Si el autobús vuelve a retrasarse, quizá le convenga enviar el documento desde la estación. Así termina la gestión antes de venir al alojamiento."
      },
      {
        "speaker": "a",
        "text": "De acuerdo. Voy a explicarle las dos opciones. Ahora confirmaremos el billete y llamaremos al parque antes de las tres para cambiar la visita. Después le enviaré un mensaje con la hora aproximada de llegada. ¿Es suficiente?"
      },
      {
        "speaker": "b",
        "text": "Sí. Con ese mensaje podremos preparar la llave si hace falta. Recuerde que el desayuno empieza a las siete, pero no es necesario venir a esa hora: pueden descansar y bajar un poco más tarde."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Primera escucha: busca la situación general sin abrir la transcripción.",
        "exercise": {
          "id": "listen-gist",
          "type": "choice",
          "prompt": "Escucha «Llamada desde la estación» y reconoce la intención.",
          "items": [
            {
              "q": "¿Qué gestiona Lara?",
              "options": [
                "La llegada tardía y un cambio de actividad",
                "Una compra de zapatos",
                "La devolución del desayuno"
              ],
              "answer": 0,
              "why": "La información de la situación corresponde a «La llegada tardía y un cambio de actividad»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Qué información aporta el alojamiento?",
              "options": [
                "Opciones para mantener la estancia y adaptar la actividad",
                "Un nuevo horario de autobuses",
                "Un diagnóstico para el pie"
              ],
              "answer": 0,
              "why": "Comprueba el contexto y los datos de la escena: Opciones para mantener la estancia y adaptar la actividad."
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
          "prompt": "Localiza dos datos concretos en «Llamada desde la estación».",
          "items": [
            {
              "q": "¿Qué mantiene el alojamiento?",
              "options": [
                "La visita de hoy obligatoriamente",
                "El autobús de las diez",
                "La habitación"
              ],
              "answer": 2,
              "why": "La información de la situación corresponde a «La habitación»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Qué opción parece mejor para Lara?",
              "options": [
                "La visita de hoy",
                "El recorrido corto de las once",
                "Una caminata larga"
              ],
              "answer": 1,
              "why": "La información de la situación corresponde a «El recorrido corto de las once»; comprueba la frase completa antes de volver a responder."
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
          "prompt": "Interpreta las palabras clave de «Llamada desde la estación».",
          "items": [
            {
              "q": "¿Qué decisión queda abierta?",
              "options": [
                "La reserva de la habitación",
                "La actividad de mañana",
                "El número de personas"
              ],
              "answer": 1,
              "why": "La información de la situación corresponde a «La actividad de mañana»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Qué expresa creo que el recorrido corto será mejor?",
              "options": [
                "Una reserva ya confirmada",
                "Una queja por el precio",
                "Una valoración provisional"
              ],
              "answer": 2,
              "why": "Comprueba el contexto y los datos de la escena: Una valoración provisional."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "Dos avisos antes de salir",
    "genre": "Avisos de transporte y alojamiento",
    "frame": "Texto original de práctica en una situación ficticia.",
    "text": [
      "Transporte Sierra: el servicio de las diez entre Valle y Costa no sale hoy por una avería. Las personas con billete pueden viajar en el servicio de las dos sin pagar una diferencia. El recorrido dura cuatro horas. Si no desean viajar hoy, pueden cambiar el billete para mañana. Deben elegir una opción en el mostrador antes de la una.",
      "Alojamiento La Fuente: su reserva comienza hoy. La recepción cierra a las siete. Si va a llegar más tarde, llame antes de las seis para organizar la entrega de la llave. Las habitaciones se mantienen hasta las ocho si no recibimos ningún aviso. El desayuno de mañana está incluido y se sirve de siete a nueve.",
      "Nota de Lara: estamos esperando en la estación. Mi compañero acaba de volver del mostrador. Podemos tomar el autobús de las dos, pero necesito cancelar la visita del parque de esta tarde. Además, me duele un pie desde ayer. Voy a pedir una actividad más tranquila para mañana. Antes de decidir, tenemos que avisar al alojamiento y confirmar la hora de llegada.",
      "La visita del parque empieza a las cuatro y dura dos horas. El centro permite cambiarla una vez si avisas antes de las tres del mismo día. Puedes elegir otra fecha o un recorrido corto por el centro, que dura cuarenta minutos y tiene varias paradas para sentarse. La diferencia de precio se devuelve en el mostrador; no se entrega dinero al conductor del autobús.",
      "El compañero de Lara también tiene una gestión pendiente: debe enviar un documento de su curso antes de las ocho. El alojamiento ofrece conexión en el salón, pero no garantiza que funcione en todas las habitaciones. Si el autobús llega con retraso, puede utilizar la conexión de la estación antes de ir al alojamiento. Lara propone anotar las tres gestiones en orden: elegir el billete, cambiar la visita y avisar de la llegada. Así no olvidarán ningún plazo mientras esperan."
    ],
    "glossary": [
      {
        "es": "un retraso anunciado",
        "en": "an announced delay"
      },
      {
        "es": "mantener una reserva",
        "en": "hold a booking"
      },
      {
        "es": "avisar al alojamiento",
        "en": "notify accommodation"
      }
    ],
    "tasks": [
      {
        "id": "reading-choice",
        "type": "choice",
        "prompt": "Lee «Dos avisos antes de salir» y localiza la evidencia para cada respuesta.",
        "items": [
          {
            "q": "¿A qué hora está previsto llegar con el segundo autobús?",
            "options": [
              "A las seis",
              "A las dos",
              "A las ocho"
            ],
            "answer": 0,
            "why": "La información de la situación corresponde a «A las seis»; comprueba la frase completa antes de volver a responder."
          },
          {
            "q": "¿Qué debe hacerse antes de la una?",
            "options": [
              "Entrar en la habitación",
              "Tomar el desayuno",
              "Elegir una opción en el mostrador"
            ],
            "answer": 2,
            "why": "La información de la situación corresponde a «Elegir una opción en el mostrador»; comprueba la frase completa antes de volver a responder."
          }
        ]
      },
      {
        "id": "reading-transfer",
        "type": "open",
        "prompt": "Usa la información de «Dos avisos antes de salir» para otra persona.",
        "items": [
          {
            "prompt": "Resume el dato más útil del texto para esta misión: Reorganizar un viaje, cambiar una reserva y resolver una cita sin perder la información importante. Explica qué frase lo demuestra y qué pregunta harías después.",
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
          "quote": "Transporte Sierra: el servicio de las diez entre Valle y Costa no sale hoy por una avería.",
          "note": "Explica qué información aporta esta frase y cómo prepara los datos siguientes. Después localiza una forma de la semana en este párrafo."
        },
        {
          "quote": "Alojamiento La Fuente: su reserva comienza hoy.",
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
              "Estamos",
              "esperando",
              "y",
              "acabamos",
              "de",
              "recibir",
              "otro",
              "aviso."
            ]
          },
          {
            "words": [
              "¿Podría",
              "mantener",
              "la",
              "reserva",
              "hasta",
              "esta",
              "noche?"
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
              "Perfecto, ya está pagada aunque no lo han dicho.",
              "No hace falta avisar de ningún cambio.",
              "Gracias; la confirmaremos al llegar."
            ],
            "answer": 2,
            "why": "Comprueba el contexto y los datos de la escena: Gracias; la confirmaremos al llegar..",
            "context": "El alojamiento ofrece una visita mañana que aún no has aceptado.",
            "q": "¿Qué respuesta resuelve esta dificultad?"
          },
          {
            "context": "El empleado ofrece dos actividades y tu compañero prefiere otra. Compara las opciones, explica la dificultad y negocia una decisión provisional.",
            "q": "En esta interacción de «Checkpoint: viaje con cambios», ¿cómo compruebas que puedes continuar?",
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
            "prompt": "Para «Checkpoint: viaje con cambios», escribe una apertura que sitúe a tu destinatario. Añade un dato nuevo elegido por ti.",
            "model": "Buenas tardes.",
            "checklist": [
              "Se entiende quién habla y por qué.",
              "Incluyes un dato concreto que no contradice la situación."
            ]
          },
          {
            "prompt": "Prepara una pregunta de seguimiento para esta interacción: El empleado ofrece dos actividades y tu compañero prefiere otra. Compara las opciones, explica la dificultad y negocia una decisión provisional.",
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
            "prompt": "Reto de recuperación en la semana 15: Describe una videollamada en directo y después tus hábitos: qué estás haciendo, qué acabas de terminar, qué has empezado a hacer, qué has dejado de hacer, qué vuelves a intentar y qué sigues practicando. Usa leyendo o durmiendo. Enlaza con Pablo y un bolígrafo manteniendo su ortografía.",
            "model": "Estoy leyendo un mensaje. Acabo de terminar una actividad. He empezado a estudiar temprano y he dejado de usar el móvil de noche. Vuelvo a escribir a mano y sigo practicando con Pablo. Tengo un bolígrafo nuevo.",
            "checklist": [
              "Resuelves todas las partes del reto con ejemplos propios.",
              "Después comparas con tus apuntes y corriges una forma o un dato."
            ]
          },
          {
            "prompt": "Comprueba la recuperación 11→15: cambia un dato de tu respuesta y reformula la parte afectada. Explica qué cambió a tu compañero.",
            "model": "En mi nueva versión cambia el lugar o la persona: Estoy leyendo un mensaje. Debo revisar también las referencias para que mi oyente entienda el cambio.",
            "checklist": [
              "El nuevo dato es coherente con el resto de la situación.",
              "Repites la parte necesaria y compruebas que el oyente lo entiende."
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
            "prompt": "Reto de recuperación en la semana 15: Planifica una reunión por videollamada: diferencia intención, predicción y promesa. Incluye haré, tendré y podremos. Prepara dos condiciones reales con si + presente. Tu pareja identifica qué está decidido y qué es solo una predicción. Pronuncia comunicación y universidad con todas sus vocales.",
            "model": "Voy a preparar la reunión. Creo que tendremos diez participantes. Haré una prueba y te enviaré el enlace. Si falla la comunicación, podremos llamar por teléfono. La universidad confirmará el horario.",
            "checklist": [
              "Resuelves todas las partes del reto con ejemplos propios.",
              "Después comparas con tus apuntes y corriges una forma o un dato."
            ]
          },
          {
            "prompt": "Comprueba la recuperación 12→15: cambia un dato de tu respuesta y reformula la parte afectada. Explica qué cambió a tu compañero.",
            "model": "En mi nueva versión cambia el lugar o la persona: Voy a preparar la reunión. Debo revisar también las referencias para que mi oyente entienda el cambio.",
            "checklist": [
              "El nuevo dato es coherente con el resto de la situación.",
              "Repites la parte necesaria y compruebas que el oyente lo entiende."
            ]
          }
        ]
      },
      {
        "id": "retrieval-week-13",
        "type": "open",
        "prompt": "Recuperación sin mirar · semana 13. Usa un caso diferente de los textos anteriores.",
        "items": [
          {
            "prompt": "Reto de recuperación en la semana 15: Representa una cita ficticia: describe dos síntomas, duración y una dificultad con me duele/me duelen, tengo y estoy. La otra persona propone una gestión con deberías, tendrías que o es mejor. Escucha, anota y confirma horario y documento sin dar tratamientos. Compara la x de taxi, México y Xochimilco.",
            "model": "Me duele un pie y me duelen las rodillas desde ayer. Estoy cansado. Quería una cita por la tarde. Deberías confirmar la hora. Entonces llego a las cuatro menos diez y llevo el documento.",
            "checklist": [
              "Resuelves todas las partes del reto con ejemplos propios.",
              "Después comparas con tus apuntes y corriges una forma o un dato."
            ]
          },
          {
            "prompt": "Comprueba la recuperación 13→15: cambia un dato de tu respuesta y reformula la parte afectada. Explica qué cambió a tu compañero.",
            "model": "En mi nueva versión cambia el lugar o la persona: Me duele un pie y me duelen las rodillas desde ayer. Debo revisar también las referencias para que mi oyente entienda el cambio.",
            "checklist": [
              "El nuevo dato es coherente con el resto de la situación.",
              "Repites la parte necesaria y compruebas que el oyente lo entiende."
            ]
          }
        ]
      },
      {
        "id": "retrieval-week-14",
        "type": "open",
        "prompt": "Recuperación sin mirar · semana 14. Usa un caso diferente de los textos anteriores.",
        "items": [
          {
            "prompt": "Reto de recuperación en la semana 15: En otro alojamiento, la reserva incluye desayuno pero te lo cobran aparte. Lee esos dos datos en voz alta, escribe un correo breve y reclama con podría, me gustaría y quería. Propón una solución y comprueba el precio final. Mantén un trato coherente y una entonación amable.",
            "model": "Quería consultar la cuenta. Mi reserva incluye desayuno, pero aparecen doce euros más. ¿Podría comprobarlo? Me gustaría recibir una cuenta corregida por escrito. Gracias por su ayuda.",
            "checklist": [
              "Resuelves todas las partes del reto con ejemplos propios.",
              "Después comparas con tus apuntes y corriges una forma o un dato."
            ]
          },
          {
            "prompt": "Comprueba la recuperación 14→15: cambia un dato de tu respuesta y reformula la parte afectada. Explica qué cambió a tu compañero.",
            "model": "En mi nueva versión cambia el lugar o la persona: Quería consultar la cuenta. Debo revisar también las referencias para que mi oyente entienda el cambio.",
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
    "task": "Envía al alojamiento un resumen del cambio de viaje. Explica qué está pasando, qué acabáis de decidir y qué haréis si hay otro retraso. Solicita una actividad compatible con una dificultad física ficticia.",
    "context": "Escribe una primera versión propia; el modelo es una posibilidad, no un texto para copiar. Puedes usar datos ficticios.",
    "steps": [
      "Anota destinatario, propósito y tres datos necesarios.",
      "Organiza los datos en un orden que ayude a la otra persona.",
      "Escribe el borrador con apoyo de las expresiones útiles.",
      "Revisa si has respondido a todas las partes, corrige las formas y escribe una segunda versión."
    ],
    "useLanguage": [
      "Estamos esperando y acabamos de recibir otro aviso.",
      "Si el autobús sale a las dos, llegaremos a las seis.",
      "¿Podría mantener la reserva hasta esta noche?",
      "Me duele un pie; tendré que cambiar la excursión."
    ],
    "model": [
      "Buenas tardes. Nuestro autobús de las diez se ha cancelado y estamos esperando el siguiente. Acabamos de cambiar los billetes para salir a las dos. Llegaremos a Costa a las seis si no hay otro retraso. ¿Podrían mantener la habitación para dos personas? Si llegamos después de las siete, llamaremos antes de las seis para organizar la llave. También me gustaría cambiar la visita de hoy por el recorrido corto de mañana. Me duele un pie y prefiero caminar menos. Gracias por confirmar estos cambios. Si hay algún coste por el cambio de actividad, les agradecería que me lo indiquen antes de confirmar la nueva reserva."
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
        "prompt": "Explica al teléfono el cambio de viaje con horarios y condiciones. Pide una solución y repite el acuerdo final.",
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
        "prompt": "El empleado ofrece dos actividades y tu compañero prefiere otra. Compara las opciones, explica la dificultad y negocia una decisión provisional.",
        "prep": [
          "Prepara una pregunta de seguimiento.",
          "Imagina una respuesta inesperada y una alternativa."
        ],
        "seconds": 120,
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
        "task": "Explica al teléfono el cambio de viaje con horarios y condiciones. Pide una solución y repite el acuerdo final."
      },
      {
        "move": "Negocia",
        "task": "El empleado ofrece dos actividades y tu compañero prefiere otra. Compara las opciones, explica la dificultad y negocia una decisión provisional."
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
        "q": "Acabamos ___ cambiar los billetes.",
        "answers": [
          [
            "de"
          ]
        ]
      },
      {
        "type": "gap",
        "q": "Si hay otro retraso, ___ antes de las seis. (avisar, yo, futuro)",
        "answers": [
          [
            "avisaré"
          ]
        ]
      },
      {
        "type": "error",
        "sentence": "Me duelen un pie desde ayer.",
        "answers": [
          "Me duele un pie desde ayer."
        ],
        "why": "Un pie es singular y requiere duele."
      },
      {
        "type": "order",
        "words": [
          "Estamos",
          "buscando",
          "una",
          "actividad",
          "más",
          "tranquila."
        ]
      },
      {
        "type": "choice",
        "q": "¿Qué debe confirmar Lara en la llamada?",
        "options": [
          "Que el autobús ya ha llegado",
          "Que mantienen la habitación"
        ],
        "answer": 1,
        "why": "La opción elegida cumple la función comunicativa indicada."
      },
      {
        "q": "¿Qué harán si no llegan a tiempo?",
        "options": [
          "Esperar hasta mañana sin contactar",
          "Llamar desde la estación",
          "Cancelar sin avisar"
        ],
        "answer": 1,
        "why": "Comprueba el contexto y los datos de la escena: Llamar desde la estación.",
        "type": "listen",
        "audio": "Si no llegamos a tiempo, llamaremos desde la estación."
      },
      {
        "type": "open",
        "prompt": "Evaluación de transferencia 15: Explica al teléfono el cambio de viaje con horarios y condiciones. Pide una solución y repite el acuerdo final.",
        "model": "Buenas tardes. Nuestro autobús de las diez se ha cancelado y estamos esperando el siguiente. Acabamos de cambiar los billetes para salir a las dos. Llegaremos a Costa a las seis si no hay otro retraso. ¿Podrían mantener la habitación para dos personas? Si llegamos después de las siete, llamaremos antes de las seis para organizar la llave. También me gustaría cambiar la visita de hoy por el recorrido corto de mañana. Me duele un pie y prefiero caminar menos. Gracias por confirmar estos cambios. Si hay algún coste por el cambio de actividad, les agradecería que me lo indiquen antes de confirmar la nueva reserva.",
        "checklist": [
          "Cumples el propósito con datos comprensibles.",
          "Usas las formas de la semana y revisas una duda."
        ]
      },
      {
        "type": "open",
        "prompt": "Resolución final 15: El empleado ofrece dos actividades y tu compañero prefiere otra. Compara las opciones, explica la dificultad y negocia una decisión provisional. Añade una pregunta para comprobar la respuesta.",
        "checklist": [
          "Reaccionas a lo que dice tu interlocutor.",
          "Confirmas el dato o el acuerdo antes de terminar."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Reorganizar un viaje, cambiar una reserva y resolver una cita sin perder la información importante.",
      "Seleccionar datos de una conversación y de un texto práctico.",
      "Producir un mensaje propio, revisarlo y responder a otra persona."
    ],
    "review": [
      "En dos días, repite la misión «Checkpoint: viaje con cambios» con personas y datos diferentes.",
      "Antes de la próxima clase, recupera las expresiones sin mirar y comprueba después una duda.",
      "Compara tu primera versión con la revisada: ¿qué entiende mejor ahora tu interlocutor?"
    ]
  }
};
