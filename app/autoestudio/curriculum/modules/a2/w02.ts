import type { Module } from "../../types";

/** Original A2 week: authored scenario, skills and retrieval. */
export const a2w02: Module = {
  "id": "a2-02",
  "level": "a2",
  "week": 2,
  "kind": "core",
  "title": "El sábado cambió de plan",
  "subtitle": "Contar un día terminado en orden y distinguir lo que hiciste de lo que haces habitualmente.",
  "stop": {
    "place": "Alajuela",
    "country": "Costa Rica"
  },
  "minutes": 105,
  "newObjectives": [
    "a2.gram.indefinido-regular",
    "a2.gram.marcadores-pasado",
    "a2.voc.fin-de-semana",
    "a2.pron.acento-tiempos",
    "a2.fun.contar-ayer",
    "a2.lis.relato-breve",
    "a2.gram.indefinido-ortografia"
  ],
  "reviewObjectives": [
    "a2.gram.perfecto-compuesto",
    "a2.gram.participios-irregulares",
    "a2.gram.ya-todavia",
    "a2.voc.experiencias-viaje",
    "a2.pron.sinalefa-compuestos",
    "a2.fun.experiencias",
    "a2.spk.nunca-he"
  ],
  "prerequisites": [
    "a2-01"
  ],
  "goal": {
    "canDo": "Puedo contar un día terminado en orden y distinguir lo que hiciste de lo que haces habitualmente.",
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
        "heading": "El sábado cambió de plan · formas que necesitas",
        "body": [
          "El indefinido presenta acciones terminadas: ayer, el sábado pasado, en 2022 o hace dos días. Verbos en -ar: visité, visitaste, visitó, visitamos, visitasteis, visitaron. En -er/-ir: comí, comiste, comió, comimos, comisteis, comieron; salí, saliste, salió, salimos, salisteis, salieron.",
          "En la primera persona cambian algunas letras para conservar el sonido: buscar → busqué, llegar → llegué, empezar → empecé. Son cambios ortográficos; el resto de las terminaciones sigue el patrón regular."
        ],
        "support": [
          "Use the preterite to report completed events in a finished time period. Stress distinguishes hablo from habló."
        ],
        "examples": [
          {
            "es": "Ayer preparé una mochila y salí temprano."
          },
          {
            "es": "El domingo comimos junto al río."
          }
        ],
        "mistakes": [
          {
            "wrong": "Ayer yo camino al centro.",
            "right": "Ayer yo caminé al centro.",
            "why": "Ayer sitúa una acción acabada; caminé lleva el acento en la última sílaba."
          }
        ]
      },
      {
        "heading": "Del sistema al mensaje",
        "body": [
          "Primero sitúa el día; después organiza las acciones con por la mañana, después, por la tarde y al final. No traduzcas automáticamente esta mañana como perfecto: según la región y cómo se presenta el periodo, puedes oír he desayunado o desayuné. Para contar este sábado terminado practicaremos el indefinido con marcadores claros."
        ],
        "examples": [
          {
            "es": "Hace dos días recibí una invitación."
          },
          {
            "es": "Esta semana he descansado; el lunes terminé el trabajo."
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
            "q": "Ayer Julia ___ tarde. (llegar)",
            "answers": [
              [
                "llegó"
              ]
            ]
          },
          {
            "q": "Nosotros ___ junto al puente. (comer)",
            "answers": [
              [
                "comimos"
              ]
            ]
          },
          {
            "q": "El domingo yo ___ un mapa. (comprar)",
            "answers": [
              [
                "compré"
              ]
            ]
          },
          {
            "q": "Ayer yo ___ la dirección. (buscar)",
            "answers": [
              [
                "busqué"
              ]
            ],
            "why": "c cambia a qu ante é para mantener el sonido de buscar."
          },
          {
            "q": "El sábado yo ___ temprano. (llegar)",
            "answers": [
              [
                "llegué"
              ]
            ],
            "why": "g cambia a gu ante é."
          },
          {
            "q": "Ayer yo ___ a leer el diario. (empezar)",
            "answers": [
              [
                "empecé"
              ]
            ],
            "why": "z cambia a c ante é."
          }
        ]
      },
      {
        "id": "grammar-transform",
        "type": "transform",
        "prompt": "Reformulación controlada: respeta las palabras y el orden indicados. En las tareas abiertas posteriores puedes elegir otras formulaciones.",
        "items": [
          {
            "source": "Camino hasta la estación.",
            "instruction": "Pon Ayer al principio y cambia camino al indefinido; conserva el resto sin añadir sujeto.",
            "answers": [
              "Ayer caminé hasta la estación."
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          },
          {
            "source": "Recibimos una carta.",
            "instruction": "Cambia recibimos a primera persona singular del indefinido. Puedes escribir Yo o dejar el sujeto implícito.",
            "answers": [
              "Recibí una carta.",
              "Yo recibí una carta."
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          },
          {
            "source": "Preparaste una sopa.",
            "instruction": "Cambia el verbo a tercera persona plural del indefinido. Puedes escribir Ellas o dejar el sujeto implícito.",
            "answers": [
              "Ellas prepararon una sopa.",
              "Prepararon una sopa."
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
            "es": "pasear por el centro",
            "en": "walk around the centre"
          },
          {
            "es": "quedar con amigos",
            "en": "meet friends"
          },
          {
            "es": "preparar una mochila",
            "en": "pack a backpack"
          },
          {
            "es": "recibir una invitación",
            "en": "receive an invitation"
          }
        ]
      },
      {
        "title": "Datos para resolver la misión",
        "items": [
          {
            "es": "pasar la tarde",
            "en": "spend the afternoon"
          },
          {
            "es": "descansar un rato",
            "en": "rest for a while"
          },
          {
            "es": "volver temprano",
            "en": "return early"
          },
          {
            "es": "al final del día",
            "en": "at the end of the day"
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
            "left": "pasear por el centro",
            "right": "walk around the centre"
          },
          {
            "left": "quedar con amigos",
            "right": "meet friends"
          },
          {
            "left": "preparar una mochila",
            "right": "pack a backpack"
          },
          {
            "left": "recibir una invitación",
            "right": "receive an invitation"
          },
          {
            "left": "pasar la tarde",
            "right": "spend the afternoon"
          },
          {
            "left": "descansar un rato",
            "right": "rest for a while"
          },
          {
            "left": "volver temprano",
            "right": "return early"
          },
          {
            "left": "al final del día",
            "right": "at the end of the day"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "La sílaba fuerte cuenta el tiempo",
    "explanation": [
      "Hablo y habló tienen las mismas letras, pero el acento cambia el tiempo y la persona. Mantén las vocales claras y da más fuerza a la sílaba final de habló, compré y llegó. Compara tu grabación con un presente antes de repetir el relato."
    ],
    "perceive": {
      "id": "pronunciation-perceive",
      "type": "listen",
      "prompt": "Escucha primero y decide; usa también el contexto.",
      "items": [
        {
          "audio": "Ayer habló Marta.",
          "q": "¿Qué forma escuchas?",
          "options": [
            "habló",
            "hablo"
          ],
          "answer": 0,
          "why": "Escucha de nuevo la frase completa y compara el dato con su forma escrita."
        },
        {
          "audio": "Ahora trabajo en casa.",
          "q": "¿Dónde recae la fuerza en trabajo?",
          "options": [
            "En tra",
            "En jó"
          ],
          "answer": 0,
          "why": "Escucha de nuevo la frase completa y compara el dato con su forma escrita."
        }
      ]
    },
    "produce": [
      {
        "text": "Hoy trabajo; ayer trabajó mi hermana.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      },
      {
        "text": "Yo compro pan; él compró arroz.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      },
      {
        "text": "Primero caminé y después descansé.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      }
    ]
  },
  "listening": {
    "title": "El paseo que duró poco",
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
        "text": "¿Qué hiciste ayer? Yo esperé tu mensaje para salir a caminar, pero no recibí nada. Al final limpié la cocina y terminé un libro que empecé hace un mes."
      },
      {
        "speaker": "b",
        "text": "Perdona. Dejé el móvil en casa. Salí a las nueve, caminé hasta el río y esperé a Julia delante del puente. Ella llegó tarde porque perdió el autobús."
      },
      {
        "speaker": "a",
        "text": "¿Y caminaron mucho? Por la tarde llovió en mi barrio. Cerré todas las ventanas y preparé chocolate caliente. Pensé que ustedes regresaron completamente mojados."
      },
      {
        "speaker": "b",
        "text": "No. Primero paseamos media hora y después comimos cerca de la estación. A las dos empezó la lluvia. Entramos en una librería y compramos un mapa. Regresamos en autobús antes de las cuatro."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Primera escucha: busca la situación general sin abrir la transcripción.",
        "exercise": {
          "id": "listen-gist",
          "type": "choice",
          "prompt": "Escucha «El paseo que duró poco» y reconoce la intención.",
          "items": [
            {
              "q": "¿De qué trata la conversación?",
              "options": [
                "De un curso de cocina",
                "De las actividades de ayer",
                "De un plan para mañana"
              ],
              "answer": 1,
              "why": "La información de la situación corresponde a «De las actividades de ayer»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Cómo reaccionan ante la falta de mensaje?",
              "options": [
                "Preparan un viaje para la semana siguiente",
                "Aclaran qué ocurrió el día anterior",
                "Deciden cancelar la amistad"
              ],
              "answer": 1,
              "why": "Comprueba el contexto y los datos de la escena: Aclaran qué ocurrió el día anterior."
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
          "prompt": "Localiza dos datos concretos en «El paseo que duró poco».",
          "items": [
            {
              "q": "¿Por qué no llegó el mensaje?",
              "options": [
                "El móvil quedó en casa",
                "No había internet en la librería",
                "Julia tenía el móvil"
              ],
              "answer": 0,
              "why": "La información de la situación corresponde a «El móvil quedó en casa»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Qué hicieron después de comer?",
              "options": [
                "Cruzaron el puente por primera vez",
                "Prepararon chocolate",
                "Entraron en una librería"
              ],
              "answer": 2,
              "why": "La información de la situación corresponde a «Entraron en una librería»; comprueba la frase completa antes de volver a responder."
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
          "prompt": "Interpreta las palabras clave de «El paseo que duró poco».",
          "items": [
            {
              "q": "¿Qué sitúa una acción terminada?",
              "options": [
                "Ustedes regresan temprano",
                "Yo camino cada día",
                "A las dos empezó la lluvia"
              ],
              "answer": 2,
              "why": "La información de la situación corresponde a «A las dos empezó la lluvia»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Qué expresión introduce el resultado del primer día relatado?",
              "options": [
                "Al final",
                "Siempre",
                "Cada día"
              ],
              "answer": 0,
              "why": "Comprueba el contexto y los datos de la escena: Al final."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "Un sábado sin pantalla",
    "genre": "Entrada de diario",
    "frame": "Texto original de práctica en una situación ficticia.",
    "text": [
      "El sábado pasado apagué el teléfono durante seis horas. Primero desayuné en casa y preparé una mochila con agua y un libro. Caminé hasta el parque y esperé a mi amiga Elisa junto a la fuente. Ella llegó diez minutos después. Hablamos de nuestros trabajos, pero no miramos ningún mensaje. Después visitamos una pequeña exposición de fotografías de la ciudad. La entrada costó muy poco y la visita duró una hora.",
      "A mediodía comimos en un restaurante del barrio. Elisa pidió una sopa y yo probé un plato de verduras. Por la tarde regresamos al parque y leímos nuestros libros en silencio. A las cinco encendí el móvil. Recibí varios mensajes, pero ninguno era urgente. Al final del día escribí una nota para recordar la experiencia. Descansé mejor que otros sábados y decidí repetir el plan una vez al mes."
    ],
    "glossary": [
      {
        "es": "pasear por el centro",
        "en": "walk around the centre"
      },
      {
        "es": "quedar con amigos",
        "en": "meet friends"
      },
      {
        "es": "preparar una mochila",
        "en": "pack a backpack"
      }
    ],
    "tasks": [
      {
        "id": "reading-choice",
        "type": "choice",
        "prompt": "Lee «Un sábado sin pantalla» y localiza la evidencia para cada respuesta.",
        "items": [
          {
            "q": "¿Dónde esperó la narradora a Elisa?",
            "options": [
              "En su casa",
              "Junto a una fuente",
              "Dentro del restaurante"
            ],
            "answer": 1,
            "why": "La información de la situación corresponde a «Junto a una fuente»; comprueba la frase completa antes de volver a responder."
          },
          {
            "q": "¿Qué decidió después de la experiencia?",
            "options": [
              "Repetirla una vez al mes",
              "Apagar el móvil todos los días",
              "Dejar de leer en el parque"
            ],
            "answer": 0,
            "why": "La información de la situación corresponde a «Repetirla una vez al mes»; comprueba la frase completa antes de volver a responder."
          }
        ]
      },
      {
        "id": "reading-transfer",
        "type": "open",
        "prompt": "Usa la información de «Un sábado sin pantalla» para otra persona.",
        "items": [
          {
            "prompt": "Resume el dato más útil del texto para esta misión: Contar un día terminado en orden y distinguir lo que hiciste de lo que haces habitualmente. Explica qué frase lo demuestra y qué pregunta harías después.",
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
          "quote": "El sábado pasado apagué el teléfono durante seis horas.",
          "note": "Explica qué información aporta esta frase y cómo prepara los datos siguientes. Después localiza una forma de la semana en este párrafo."
        },
        {
          "quote": "A mediodía comimos en un restaurante del barrio.",
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
              "Ayer",
              "preparé",
              "una",
              "mochila",
              "y",
              "salí",
              "temprano."
            ]
          },
          {
            "words": [
              "Hace",
              "dos",
              "días",
              "recibí",
              "una",
              "invitación."
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
              "Primero visitamos la exposición; después comimos.",
              "Sí, todas las semanas como allí.",
              "La exposición es interesante y tiene fotos."
            ],
            "answer": 0,
            "why": "Comprueba el contexto y los datos de la escena: Primero visitamos la exposición; después comimos..",
            "context": "Un amigo cree que comiste antes de visitar la exposición.",
            "q": "¿Qué respuesta resuelve esta dificultad?"
          },
          {
            "context": "Pregunta a un compañero por su fin de semana. Pide una hora, un lugar y una aclaración: ¿antes o después de comer?",
            "q": "En esta interacción de «El sábado cambió de plan», ¿cómo compruebas que puedes continuar?",
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
            "prompt": "Para «El sábado cambió de plan», escribe una apertura que sitúe a tu destinatario. Añade un dato nuevo elegido por ti.",
            "model": "Hola, Berta.",
            "checklist": [
              "Se entiende quién habla y por qué.",
              "Incluyes un dato concreto que no contradice la situación."
            ]
          },
          {
            "prompt": "Prepara una pregunta de seguimiento para esta interacción: Pregunta a un compañero por su fin de semana. Pide una hora, un lugar y una aclaración: ¿antes o después de comer?",
            "model": "¿Puedes confirmar ese dato? Quiero comprobar que he entendido bien antes de continuar.",
            "checklist": [
              "La pregunta pide un dato útil para esta situación.",
              "Mantienes el mismo trato y respondes después a la información recibida."
            ]
          }
        ]
      },
      {
        "id": "retrieval-week-01",
        "type": "open",
        "prompt": "Recuperación sin mirar · semana 1. Usa un caso diferente de los textos anteriores.",
        "items": [
          {
            "prompt": "Reto de recuperación en la semana 2: En un intercambio de experiencias, pregunta por una actividad hecha alguna vez y reacciona. Cuenta tres experiencias reales y una inventada con ya, todavía no y nunca; utiliza hecho, dicho, visto, escrito, puesto, vuelto, abierto y roto entre tus ejemplos. Enlaza he estado y lo he visto sin borrar el auxiliar. Tu pareja debe adivinar la experiencia inventada.",
            "model": "Ya he hecho una ruta nocturna y he visto el amanecer. Nunca he roto una mochila. Todavía no he escrito la reseña. He puesto las fotos en una carpeta, he abierto el mapa y he vuelto al pueblo. Mi amiga ha dicho que la ruta es fácil.",
            "checklist": [
              "Resuelves todas las partes del reto con ejemplos propios.",
              "Después comparas con tus apuntes y corriges una forma o un dato."
            ]
          },
          {
            "prompt": "Comprueba la recuperación 1→2: cambia un dato de tu respuesta y reformula la parte afectada. Explica qué cambió a tu compañero.",
            "model": "En mi nueva versión cambia el lugar o la persona: Ya he hecho una ruta nocturna y he visto el amanecer. Debo revisar también las referencias para que mi oyente entienda el cambio.",
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
    "task": "Escribe un mensaje a alguien que no vino contigo el sábado. Cuenta cinco acciones en orden, indica una hora y explica qué actividad te gustó más.",
    "context": "Escribe una primera versión propia; el modelo es una posibilidad, no un texto para copiar. Puedes usar datos ficticios.",
    "steps": [
      "Anota destinatario, propósito y tres datos necesarios.",
      "Organiza los datos en un orden que ayude a la otra persona.",
      "Escribe el borrador con apoyo de las expresiones útiles.",
      "Revisa si has respondido a todas las partes, corrige las formas y escribe una segunda versión."
    ],
    "useLanguage": [
      "Ayer preparé una mochila y salí temprano.",
      "El domingo comimos junto al río.",
      "Hace dos días recibí una invitación.",
      "Esta semana he descansado; el lunes terminé el trabajo."
    ],
    "model": [
      "Hola, Berta. El sábado llegué al centro a las diez y esperé a Raúl junto al teatro. Primero visitamos el mercado y compramos fruta. Después caminamos por el parque. A la una comimos en una terraza y hablamos de nuestras vacaciones. Por la tarde regresé a casa y descansé un rato. Me gustó mucho el paseo porque hablamos sin prisa. La próxima vez puedes venir con nosotros."
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
        "prompt": "Reconstruye tu último día libre con cinco acciones. Tu oyente necesita saber qué ocurrió primero y a qué hora terminó el plan.",
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
        "prompt": "Pregunta a un compañero por su fin de semana. Pide una hora, un lugar y una aclaración: ¿antes o después de comer?",
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
        "task": "Reconstruye tu último día libre con cinco acciones. Tu oyente necesita saber qué ocurrió primero y a qué hora terminó el plan."
      },
      {
        "move": "Negocia",
        "task": "Pregunta a un compañero por su fin de semana. Pide una hora, un lugar y una aclaración: ¿antes o después de comer?"
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
        "q": "Ayer ellas ___ el museo. (visitar)",
        "answers": [
          [
            "visitaron"
          ]
        ]
      },
      {
        "type": "gap",
        "q": "Hace un mes yo ___ el curso. (terminar)",
        "answers": [
          [
            "terminé"
          ]
        ]
      },
      {
        "type": "error",
        "sentence": "Ayer trabajé en casa y cenar temprano.",
        "answers": [
          "Ayer trabajé en casa y cené temprano."
        ],
        "why": "Las dos acciones terminadas requieren formas conjugadas: trabajé y cené."
      },
      {
        "type": "order",
        "words": [
          "Después",
          "comí",
          "con",
          "mi",
          "familia."
        ]
      },
      {
        "type": "choice",
        "q": "¿Qué marcador indica un periodo terminado?",
        "options": [
          "El año pasado",
          "Normalmente"
        ],
        "answer": 0,
        "why": "La opción elegida cumple la función comunicativa indicada."
      },
      {
        "q": "¿Qué hizo antes de salir?",
        "options": [
          "Comer en el parque",
          "Llamar a una amiga",
          "Limpiar la casa"
        ],
        "answer": 2,
        "why": "Comprueba el contexto y los datos de la escena: Limpiar la casa.",
        "type": "listen",
        "audio": "El domingo limpié la casa antes de salir."
      },
      {
        "type": "open",
        "prompt": "Evaluación de transferencia 2: Reconstruye tu último día libre con cinco acciones. Tu oyente necesita saber qué ocurrió primero y a qué hora terminó el plan.",
        "model": "Hola, Berta. El sábado llegué al centro a las diez y esperé a Raúl junto al teatro. Primero visitamos el mercado y compramos fruta. Después caminamos por el parque. A la una comimos en una terraza y hablamos de nuestras vacaciones. Por la tarde regresé a casa y descansé un rato. Me gustó mucho el paseo porque hablamos sin prisa. La próxima vez puedes venir con nosotros.",
        "checklist": [
          "Cumples el propósito con datos comprensibles.",
          "Usas las formas de la semana y revisas una duda."
        ]
      },
      {
        "type": "open",
        "prompt": "Resolución final 2: Pregunta a un compañero por su fin de semana. Pide una hora, un lugar y una aclaración: ¿antes o después de comer? Añade una pregunta para comprobar la respuesta.",
        "checklist": [
          "Reaccionas a lo que dice tu interlocutor.",
          "Confirmas el dato o el acuerdo antes de terminar."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Contar un día terminado en orden y distinguir lo que hiciste de lo que haces habitualmente.",
      "Seleccionar datos de una conversación y de un texto práctico.",
      "Producir un mensaje propio, revisarlo y responder a otra persona."
    ],
    "review": [
      "En dos días, repite la misión «El sábado cambió de plan» con personas y datos diferentes.",
      "Antes de la próxima clase, recupera las expresiones sin mirar y comprueba después una duda.",
      "Compara tu primera versión con la revisada: ¿qué entiende mejor ahora tu interlocutor?"
    ]
  }
};
