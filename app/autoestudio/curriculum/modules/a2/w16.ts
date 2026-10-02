import type { Module } from "../../types";

/** Original A2 week: authored scenario, skills and retrieval. */
export const a2w16: Module = {
  "id": "a2-16",
  "level": "a2",
  "week": 16,
  "kind": "core",
  "title": "Elegí estudiar por la tarde",
  "subtitle": "Explicar una decisión de estudio o trabajo con causas, consecuencias y orden temporal.",
  "stop": {
    "place": "Managua",
    "country": "Nicaragua"
  },
  "minutes": 105,
  "newObjectives": [
    "a2.disc.conectores-causa-consecuencia",
    "a2.gram.antes-despues-inf",
    "a2.voc.estudio-trabajo",
    "a2.pron.conectores-entonacion",
    "a2.fun.explicar-decisiones",
    "a2.wri.historia-conectada"
  ],
  "reviewObjectives": [
    "a2.rev.checkpoint-2",
    "a2.read.blog-viaje",
    "a2.gram.condicional-cortesia",
    "a2.voc.hotel-transporte",
    "a2.pron.cortesia-entonacion",
    "a2.fun.reclamar",
    "a2.wri.correo-reserva",
    "a2.read.condiciones"
  ],
  "prerequisites": [
    "a2-15"
  ],
  "goal": {
    "canDo": "Puedo explicar una decisión de estudio o trabajo con causas, consecuencias y orden temporal.",
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
        "heading": "Elegí estudiar por la tarde · formas que necesitas",
        "body": [
          "Porque introduce una causa después de la idea: elegí el curso porque era práctico. Como puede presentar la causa al principio: como trabajaba por la mañana, elegí el turno de tarde. Por eso y así que presentan una consecuencia. No los cambies sin reorganizar el sentido de la frase."
        ],
        "support": [
          "Porque and como give a cause; por eso and así que give a result. Antes de and después de are followed by an infinitive in these patterns."
        ],
        "examples": [
          {
            "es": "Elegí ese curso porque tenía prácticas."
          },
          {
            "es": "Como trabajaba por la mañana, estudiaba por la tarde."
          }
        ],
        "mistakes": [
          {
            "wrong": "Antes de envié el formulario, lo revisé.",
            "right": "Antes de enviar el formulario, lo revisé.",
            "why": "Después de la preposición de usamos infinitivo en este patrón."
          }
        ]
      },
      {
        "heading": "Del sistema al mensaje",
        "body": [
          "Antes de y después de van con infinitivo cuando hablas de la acción: antes de enviar el formulario, lo revisé. Al + infinitivo sitúa una acción próxima a otra: al llegar, saludé. Cuando introduce una oración conjugada: cuando llegué, saludé. Esta semana usamos cuando con hábitos y hechos pasados, sin adelantar usos futuros del subjuntivo."
        ],
        "examples": [
          {
            "es": "El horario cambió; por eso pedí otro grupo."
          },
          {
            "es": "Después de terminar las prácticas, preparé una entrevista."
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
            "q": "Elegí el turno de tarde ___ trabajo por la mañana.",
            "answers": [
              [
                "porque"
              ]
            ]
          },
          {
            "q": "___ de enviar el formulario, lo revisé. (anterioridad)",
            "answers": [
              [
                "Antes"
              ]
            ]
          },
          {
            "q": "El grupo estaba lleno, ___ que pedí otra fecha.",
            "answers": [
              [
                "así"
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
            "source": "Trabajaba lejos. Llegaba tarde.",
            "instruction": "Empieza con Como trabajaba lejos y coloca la consecuencia después de una coma; conserva los tiempos originales.",
            "answers": [
              "Como trabajaba lejos, llegaba tarde."
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          },
          {
            "source": "Terminé el curso. Busqué prácticas.",
            "instruction": "Empieza con Después de terminar el curso y conserva Busqué prácticas como segunda parte, después de una coma.",
            "answers": [
              "Después de terminar el curso, busqué prácticas."
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          },
          {
            "source": "Llegué al centro y saludé a la profesora.",
            "instruction": "Sustituye Llegué al centro y por Al llegar al centro, y conserva saludé a la profesora.",
            "answers": [
              "Al llegar al centro, saludé a la profesora."
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
            "es": "solicitar una plaza",
            "en": "apply for a place"
          },
          {
            "es": "hacer prácticas",
            "en": "do work experience"
          },
          {
            "es": "preparar una entrevista",
            "en": "prepare for an interview"
          },
          {
            "es": "la experiencia laboral",
            "en": "work experience"
          }
        ]
      },
      {
        "title": "Datos para resolver la misión",
        "items": [
          {
            "es": "el turno de tarde",
            "en": "afternoon shift"
          },
          {
            "es": "entregar un formulario",
            "en": "submit a form"
          },
          {
            "es": "cumplir un plazo",
            "en": "meet a deadline"
          },
          {
            "es": "recibir una confirmación",
            "en": "receive confirmation"
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
            "left": "solicitar una plaza",
            "right": "apply for a place"
          },
          {
            "left": "hacer prácticas",
            "right": "do work experience"
          },
          {
            "left": "preparar una entrevista",
            "right": "prepare for an interview"
          },
          {
            "left": "la experiencia laboral",
            "right": "work experience"
          },
          {
            "left": "el turno de tarde",
            "right": "afternoon shift"
          },
          {
            "left": "entregar un formulario",
            "right": "submit a form"
          },
          {
            "left": "cumplir un plazo",
            "right": "meet a deadline"
          },
          {
            "left": "recibir una confirmación",
            "right": "receive confirmation"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Una pausa separa causa y consecuencia",
    "explanation": [
      "Como introduce una causa que el oyente necesita antes de la decisión. Mantén el tono abierto al final de esa primera parte y cierra la idea en la consecuencia. Con por eso y así que, una pausa breve ayuda a reconocer que empieza el resultado."
    ],
    "perceive": {
      "id": "pronunciation-perceive",
      "type": "listen",
      "prompt": "Escucha primero y decide; usa también el contexto.",
      "items": [
        {
          "audio": "Como llegaba tarde, cambié de turno.",
          "q": "¿Cuál es la causa?",
          "options": [
            "Llegar tarde",
            "Cambiar de turno"
          ],
          "answer": 0,
          "why": "Escucha de nuevo la frase completa y compara el dato con su forma escrita."
        },
        {
          "audio": "No quedaban plazas. Por eso esperé un mes.",
          "q": "¿Cuál es la consecuencia?",
          "options": [
            "Esperar un mes",
            "La falta de plazas"
          ],
          "answer": 0,
          "why": "Escucha de nuevo la frase completa y compara el dato con su forma escrita."
        }
      ]
    },
    "produce": [
      {
        "text": "Como trabajaba lejos / elegí otro horario.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      },
      {
        "text": "El curso estaba lleno / por eso esperé.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      },
      {
        "text": "Después de hablar con ella / envié el formulario.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      }
    ]
  },
  "listening": {
    "title": "Cambiar de turno",
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
        "text": "Estoy pensando en cambiar de curso. El contenido me interesa, pero salgo del trabajo a las seis y llego siempre tarde. Por eso no entiendo la primera actividad y me cuesta seguir al grupo."
      },
      {
        "speaker": "b",
        "text": "¿Has hablado con la profesora? Antes de dejar el curso, podrías preguntar por otro turno. Yo cambié el año pasado porque tenía el mismo problema. Había un grupo los sábados."
      },
      {
        "speaker": "a",
        "text": "Todavía no. Como mañana tengo una reunión cerca del centro, voy a pasar después. Quiero saber si el grupo del sábado trabaja con el mismo libro y si quedan plazas."
      },
      {
        "speaker": "b",
        "text": "Buena idea. Después de hablar con ella, comprueba también el transporte. El año pasado yo terminaba a la una y el autobús salía a la una y diez, así que tenía que salir rápido. Ahora voy en bicicleta."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Primera escucha: busca la situación general sin abrir la transcripción.",
        "exercise": {
          "id": "listen-gist",
          "type": "choice",
          "prompt": "Escucha «Cambiar de turno» y reconoce la intención.",
          "items": [
            {
              "q": "¿Qué problema tiene la primera persona?",
              "options": [
                "El precio del libro",
                "La distancia a una reunión",
                "El horario del curso"
              ],
              "answer": 2,
              "why": "La información de la situación corresponde a «El horario del curso»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Qué busca quien quiere cambiar de curso?",
              "options": [
                "Un curso sin ninguna práctica",
                "Un empleo dentro del centro",
                "Un horario compatible con el trabajo"
              ],
              "answer": 2,
              "why": "Comprueba el contexto y los datos de la escena: Un horario compatible con el trabajo."
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
          "prompt": "Localiza dos datos concretos en «Cambiar de turno».",
          "items": [
            {
              "q": "¿Qué aconseja el compañero hacer primero?",
              "options": [
                "Comprar una bicicleta",
                "Preguntar por otro turno",
                "Dejar el curso sin preguntar"
              ],
              "answer": 1,
              "why": "La información de la situación corresponde a «Preguntar por otro turno»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Qué debe comprobar además del libro?",
              "options": [
                "El transporte",
                "El menú del centro",
                "El clima del próximo mes"
              ],
              "answer": 0,
              "why": "La información de la situación corresponde a «El transporte»; comprueba la frase completa antes de volver a responder."
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
          "prompt": "Interpreta las palabras clave de «Cambiar de turno».",
          "items": [
            {
              "q": "Por eso conecta…",
              "options": [
                "Un problema con su consecuencia",
                "Dos objetos iguales",
                "Una pregunta con una orden"
              ],
              "answer": 0,
              "why": "La información de la situación corresponde a «Un problema con su consecuencia»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Qué relación introduce como mañana tengo una reunión cerca?",
              "options": [
                "La consecuencia de dejar el curso",
                "La causa de pasar por el centro",
                "Una comparación entre dos reuniones"
              ],
              "answer": 1,
              "why": "Comprueba el contexto y los datos de la escena: La causa de pasar por el centro."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "La decisión de Elena",
    "genre": "Testimonio de una estudiante adulta",
    "frame": "Texto original de práctica en una situación ficticia.",
    "text": [
      "Hace un año Elena trabajaba por la mañana en una tienda y quería aprender a llevar las cuentas del negocio. Encontró dos cursos: uno en línea, sin horario fijo, y otro presencial por la tarde. El primero era más barato, pero Elena estudiaba mejor con otras personas. Como necesitaba practicar preguntas, eligió el curso presencial.",
      "Antes de apuntarse, habló con la profesora y visitó el aula. Después de recibir el programa, comprobó las fechas de las prácticas. Había una semana en la que tenía que trabajar también por la tarde, así que pidió permiso con tiempo. Su encargada cambió algunos turnos y Elena pudo asistir.",
      "Al terminar el curso, preparó un pequeño informe sobre la tienda. Explicó qué productos se vendían más y qué gastos podían revisarse. La encargada le ofreció ayudar con las cuentas dos días por semana. Elena todavía está aprendiendo, pero ya usa lo que estudió. Dice que lo más importante fue elegir un horario posible y preguntar antes de pagar."
    ],
    "glossary": [
      {
        "es": "solicitar una plaza",
        "en": "apply for a place"
      },
      {
        "es": "hacer prácticas",
        "en": "do work experience"
      },
      {
        "es": "preparar una entrevista",
        "en": "prepare for an interview"
      }
    ],
    "tasks": [
      {
        "id": "reading-choice",
        "type": "choice",
        "prompt": "Lee «La decisión de Elena» y localiza la evidencia para cada respuesta.",
        "items": [
          {
            "q": "¿Por qué eligió el curso presencial?",
            "options": [
              "Era el más barato",
              "No trabajaba por la mañana",
              "Aprendía mejor con otras personas"
            ],
            "answer": 2,
            "why": "La información de la situación corresponde a «Aprendía mejor con otras personas»; comprueba la frase completa antes de volver a responder."
          },
          {
            "q": "¿Qué hizo antes de apuntarse?",
            "options": [
              "Preparó el informe final",
              "Habló con la profesora y visitó el aula",
              "Terminó las prácticas"
            ],
            "answer": 1,
            "why": "La información de la situación corresponde a «Habló con la profesora y visitó el aula»; comprueba la frase completa antes de volver a responder."
          }
        ]
      },
      {
        "id": "reading-transfer",
        "type": "open",
        "prompt": "Usa la información de «La decisión de Elena» para otra persona.",
        "items": [
          {
            "prompt": "Resume el dato más útil del texto para esta misión: Explicar una decisión de estudio o trabajo con causas, consecuencias y orden temporal. Explica qué frase lo demuestra y qué pregunta harías después.",
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
          "quote": "Hace un año Elena trabajaba por la mañana en una tienda y quería aprender a llevar las cuentas del negocio.",
          "note": "Explica qué información aporta esta frase y cómo prepara los datos siguientes. Después localiza una forma de la semana en este párrafo."
        },
        {
          "quote": "Antes de apuntarse, habló con la profesora y visitó el aula.",
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
              "Elegí",
              "ese",
              "curso",
              "porque",
              "tenía",
              "prácticas."
            ]
          },
          {
            "words": [
              "El",
              "horario",
              "cambió;",
              "por",
              "eso",
              "pedí",
              "otro",
              "grupo."
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
              "Elegí el curso porque por eso así que.",
              "Antes de dejarlo, preguntaré por otro turno.",
              "Dejaré el curso sin mirar otras opciones."
            ],
            "answer": 1,
            "why": "Comprueba el contexto y los datos de la escena: Antes de dejarlo, preguntaré por otro turno..",
            "context": "Tu horario choca con el curso actual.",
            "q": "¿Qué respuesta resuelve esta dificultad?"
          },
          {
            "context": "Ayuda a un compañero que tiene dos cursos posibles. Haz preguntas sobre horario y necesidades; resume su decisión sin elegir por él.",
            "q": "En esta interacción de «Elegí estudiar por la tarde», ¿cómo compruebas que puedes continuar?",
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
            "prompt": "Para «Elegí estudiar por la tarde», escribe una apertura que sitúe a tu destinatario. Añade un dato nuevo elegido por ti.",
            "model": "El año pasado decidí hacer un curso de atención al público.",
            "checklist": [
              "Se entiende quién habla y por qué.",
              "Incluyes un dato concreto que no contradice la situación."
            ]
          },
          {
            "prompt": "Prepara una pregunta de seguimiento para esta interacción: Ayuda a un compañero que tiene dos cursos posibles. Haz preguntas sobre horario y necesidades; resume su decisión sin elegir por él.",
            "model": "¿Puedes confirmar ese dato? Quiero comprobar que he entendido bien antes de continuar.",
            "checklist": [
              "La pregunta pide un dato útil para esta situación.",
              "Mantienes el mismo trato y respondes después a la información recibida."
            ]
          }
        ]
      },
      {
        "id": "retrieval-week-10",
        "type": "open",
        "prompt": "Recuperación sin mirar · semana 10. Usa un caso diferente de los textos anteriores.",
        "items": [
          {
            "prompt": "Reto de recuperación en la semana 16: Organiza una segunda salida con lluvia posible. Cuenta un problema de una salida anterior, compara dos lugares y pide un objeto prestado. Escribe tres instrucciones y explica quién devuelve el material. Tu compañero resume la historia y distingue descripción de hechos.",
            "model": "Antes salíamos sin mirar el tiempo. Una vez llovió y cambiamos el recorrido. La biblioteca es más cercana que el parque. Nos prestan una caja y se la devolveremos mañana. Primero confirma el horario.",
            "checklist": [
              "Resuelves todas las partes del reto con ejemplos propios.",
              "Después comparas con tus apuntes y corriges una forma o un dato."
            ]
          },
          {
            "prompt": "Comprueba la recuperación 10→16: cambia un dato de tu respuesta y reformula la parte afectada. Explica qué cambió a tu compañero.",
            "model": "En mi nueva versión cambia el lugar o la persona: Antes salíamos sin mirar el tiempo. Debo revisar también las referencias para que mi oyente entienda el cambio.",
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
            "prompt": "Reto de recuperación en la semana 16: En otro alojamiento, la reserva incluye desayuno pero te lo cobran aparte. Lee esos dos datos en voz alta, escribe un correo breve y reclama con podría, me gustaría y quería. Propón una solución y comprueba el precio final. Mantén un trato coherente y una entonación amable.",
            "model": "Quería consultar la cuenta. Mi reserva incluye desayuno, pero aparecen doce euros más. ¿Podría comprobarlo? Me gustaría recibir una cuenta corregida por escrito. Gracias por su ayuda.",
            "checklist": [
              "Resuelves todas las partes del reto con ejemplos propios.",
              "Después comparas con tus apuntes y corriges una forma o un dato."
            ]
          },
          {
            "prompt": "Comprueba la recuperación 14→16: cambia un dato de tu respuesta y reformula la parte afectada. Explica qué cambió a tu compañero.",
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
    "task": "Escribe unas 100 palabras sobre una decisión de estudio o trabajo. Explica la situación inicial, dos razones, los pasos antes y después de decidir y una consecuencia.",
    "context": "Escribe una primera versión propia; el modelo es una posibilidad, no un texto para copiar. Puedes usar datos ficticios.",
    "steps": [
      "Anota destinatario, propósito y tres datos necesarios.",
      "Organiza los datos en un orden que ayude a la otra persona.",
      "Escribe el borrador con apoyo de las expresiones útiles.",
      "Revisa si has respondido a todas las partes, corrige las formas y escribe una segunda versión."
    ],
    "useLanguage": [
      "Elegí ese curso porque tenía prácticas.",
      "Como trabajaba por la mañana, estudiaba por la tarde.",
      "El horario cambió; por eso pedí otro grupo.",
      "Después de terminar las prácticas, preparé una entrevista."
    ],
    "model": [
      "El año pasado decidí hacer un curso de atención al público. Trabajaba en una tienda, pero me costaba responder a las preguntas de los clientes. Como quería practicar con otras personas, elegí un grupo presencial. Antes de pagar, visité el centro y hablé con la profesora. Después de comprobar el horario, pedí cambiar un turno en el trabajo. Mi encargada aceptó, así que pude asistir todas las semanas. Al terminar, empecé a atender pedidos por teléfono. Todavía cometo errores, pero ahora pido aclaraciones con más seguridad. Por eso he decidido continuar con otro curso el próximo trimestre. Antes de apuntarme, comprobaré si el horario es posible para mí."
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
        "prompt": "Explica una decisión importante con dos causas y una consecuencia. Tu oyente debe distinguir qué hiciste antes y después de decidir.",
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
        "prompt": "Ayuda a un compañero que tiene dos cursos posibles. Haz preguntas sobre horario y necesidades; resume su decisión sin elegir por él.",
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
        "task": "Explica una decisión importante con dos causas y una consecuencia. Tu oyente debe distinguir qué hiciste antes y después de decidir."
      },
      {
        "move": "Negocia",
        "task": "Ayuda a un compañero que tiene dos cursos posibles. Haz preguntas sobre horario y necesidades; resume su decisión sin elegir por él."
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
        "q": "Estaba cansada; por ___ volví a casa.",
        "answers": [
          [
            "eso"
          ]
        ]
      },
      {
        "type": "gap",
        "q": "Después de ___ el formulario, lo envié. (revisar)",
        "answers": [
          [
            "revisar"
          ]
        ]
      },
      {
        "type": "error",
        "sentence": "Como no tenía tiempo, porque elegí otro curso.",
        "answers": [
          "Como no tenía tiempo, elegí otro curso."
        ],
        "why": "Como introduce ya la causa; no se añade porque a la consecuencia."
      },
      {
        "type": "order",
        "words": [
          "Al",
          "llegar",
          "a",
          "la",
          "oficina,",
          "pedí",
          "información."
        ]
      },
      {
        "type": "choice",
        "q": "¿Qué frase introduce una consecuencia?",
        "options": [
          "Así que cambié de turno",
          "Porque trabajaba lejos"
        ],
        "answer": 0,
        "why": "La opción elegida cumple la función comunicativa indicada."
      },
      {
        "q": "¿Qué preguntó antes de aceptar el empleo?",
        "options": [
          "El horario",
          "El color de la oficina",
          "La fecha de la última reunión"
        ],
        "answer": 0,
        "why": "Comprueba el contexto y los datos de la escena: El horario.",
        "type": "listen",
        "audio": "Antes de aceptar el empleo, pregunté por el horario."
      },
      {
        "type": "open",
        "prompt": "Evaluación de transferencia 16: Explica una decisión importante con dos causas y una consecuencia. Tu oyente debe distinguir qué hiciste antes y después de decidir.",
        "model": "El año pasado decidí hacer un curso de atención al público. Trabajaba en una tienda, pero me costaba responder a las preguntas de los clientes. Como quería practicar con otras personas, elegí un grupo presencial. Antes de pagar, visité el centro y hablé con la profesora. Después de comprobar el horario, pedí cambiar un turno en el trabajo. Mi encargada aceptó, así que pude asistir todas las semanas. Al terminar, empecé a atender pedidos por teléfono. Todavía cometo errores, pero ahora pido aclaraciones con más seguridad. Por eso he decidido continuar con otro curso el próximo trimestre. Antes de apuntarme, comprobaré si el horario es posible para mí.",
        "checklist": [
          "Cumples el propósito con datos comprensibles.",
          "Usas las formas de la semana y revisas una duda."
        ]
      },
      {
        "type": "open",
        "prompt": "Resolución final 16: Ayuda a un compañero que tiene dos cursos posibles. Haz preguntas sobre horario y necesidades; resume su decisión sin elegir por él. Añade una pregunta para comprobar la respuesta.",
        "checklist": [
          "Reaccionas a lo que dice tu interlocutor.",
          "Confirmas el dato o el acuerdo antes de terminar."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Explicar una decisión de estudio o trabajo con causas, consecuencias y orden temporal.",
      "Seleccionar datos de una conversación y de un texto práctico.",
      "Producir un mensaje propio, revisarlo y responder a otra persona."
    ],
    "review": [
      "En dos días, repite la misión «Elegí estudiar por la tarde» con personas y datos diferentes.",
      "Antes de la próxima clase, recupera las expresiones sin mirar y comprueba después una duda.",
      "Compara tu primera versión con la revisada: ¿qué entiende mejor ahora tu interlocutor?"
    ]
  }
};
