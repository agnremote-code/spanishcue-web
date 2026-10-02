import type { Module } from "../../types";

/** Original A2 week: authored scenario, skills and retrieval. */
export const a2w03: Module = {
  "id": "a2-03",
  "level": "a2",
  "week": 3,
  "kind": "core",
  "title": "Una vida en cuatro fechas",
  "subtitle": "Leer y contar una biografía breve utilizando hitos y pasados irregulares.",
  "stop": {
    "place": "Granada",
    "country": "Nicaragua"
  },
  "minutes": 105,
  "newObjectives": [
    "a2.gram.indefinido-irregular",
    "a2.gram.ser-ir-indefinido",
    "a2.voc.etapas-vida",
    "a2.pron.tilde-diacritica",
    "a2.fun.biografia",
    "a2.read.biografia",
    "a2.gram.indefinido-ver-dar"
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
    "a2-02"
  ],
  "goal": {
    "canDo": "Puedo leer y contar una biografía breve utilizando hitos y pasados irregulares.",
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
        "heading": "Una vida en cuatro fechas · formas que necesitas",
        "body": [
          "Los pasados fui, estuve, tuve, hice, pude, puse, vine y dije son frecuentes. Algunas raíces cambian: estar → estuv-, tener → tuv-, poder → pud-, poner → pus-, venir → vin-, decir → dij-. Con ellas usamos -e, -iste, -o, -imos, -isteis, -ieron; decir forma dijeron. Hacer tiene hizo en tercera persona.",
          "Ver y dar tienen formas breves sin tilde: vi, viste, vio, vimos, visteis, vieron; di, diste, dio, dimos, disteis, dieron. Por ejemplo: vi un anuncio y di mi respuesta; ella vio el cartel y dio una charla."
        ],
        "support": [
          "Fui and fue can mean was or went. The surrounding words tell you which verb is intended; irregular preterite roots do not need written stress marks."
        ],
        "examples": [
          {
            "es": "En 2016 tuvo su primer trabajo y se mudó."
          },
          {
            "es": "Fue guía durante tres años; después fue a otra ciudad."
          }
        ],
        "mistakes": [
          {
            "wrong": "Ella hació un curso.",
            "right": "Ella hizo un curso.",
            "why": "La tercera persona del indefinido de hacer es hizo."
          }
        ]
      },
      {
        "heading": "Del sistema al mensaje",
        "body": [
          "Fui, fuiste, fue, fuimos, fuisteis y fueron corresponden a ser y a ir. El contexto resuelve el sentido: fue profesora describe un papel; fue a León expresa movimiento. Al escribir, distingue tú/tu, él/el, mí/mi, sí/si y sé/se. Mas sin tilde significa pero y es poco habitual; más expresa cantidad."
        ],
        "examples": [
          {
            "es": "Dijo que no pudo continuar el curso."
          },
          {
            "es": "Él me dijo: sí, sé la fecha; está en mi cuaderno."
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
            "q": "Rosa ___ los trajes. (hacer)",
            "answers": [
              [
                "hizo"
              ]
            ]
          },
          {
            "q": "Yo ___ en León cuatro años. (estar)",
            "answers": [
              [
                "estuve"
              ]
            ]
          },
          {
            "q": "Ellos ___ la verdad. (decir)",
            "answers": [
              [
                "dijeron"
              ]
            ]
          },
          {
            "q": "Ayer yo ___ un anuncio. (ver)",
            "answers": [
              [
                "vi"
              ]
            ]
          },
          {
            "q": "Ella ___ una charla en 2017. (dar)",
            "answers": [
              [
                "dio"
              ]
            ]
          },
          {
            "q": "Ellos ___ la película la semana pasada. (ver)",
            "answers": [
              [
                "vieron"
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
            "source": "Tengo mi primer empleo.",
            "instruction": "Pon En 2020 al principio y cambia tengo al indefinido; conserva el resto sin añadir sujeto.",
            "answers": [
              "En 2020 tuve mi primer empleo."
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          },
          {
            "source": "Ella vino en marzo.",
            "instruction": "Sustituye Ella por Nosotros y ajusta el verbo; conserva en marzo al final.",
            "answers": [
              "Nosotros vinimos en marzo."
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          },
          {
            "source": "Puedo estudiar por la noche.",
            "instruction": "Pon En 2018 al principio y cambia puedo al indefinido; conserva el resto sin añadir sujeto.",
            "answers": [
              "En 2018 pude estudiar por la noche."
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
            "es": "nacer en un pueblo",
            "en": "be born in a village"
          },
          {
            "es": "terminar los estudios",
            "en": "finish studies"
          },
          {
            "es": "conseguir un trabajo",
            "en": "get a job"
          },
          {
            "es": "mudarse de ciudad",
            "en": "move city"
          }
        ]
      },
      {
        "title": "Datos para resolver la misión",
        "items": [
          {
            "es": "formar una familia",
            "en": "start a family"
          },
          {
            "es": "jubilarse",
            "en": "retire"
          },
          {
            "es": "volver a estudiar",
            "en": "study again"
          },
          {
            "es": "abrir un negocio",
            "en": "open a business"
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
            "left": "nacer en un pueblo",
            "right": "be born in a village"
          },
          {
            "left": "terminar los estudios",
            "right": "finish studies"
          },
          {
            "left": "conseguir un trabajo",
            "right": "get a job"
          },
          {
            "left": "mudarse de ciudad",
            "right": "move city"
          },
          {
            "left": "formar una familia",
            "right": "start a family"
          },
          {
            "left": "jubilarse",
            "right": "retire"
          },
          {
            "left": "volver a estudiar",
            "right": "study again"
          },
          {
            "left": "abrir un negocio",
            "right": "open a business"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Tildes pequeñas, referencias claras",
    "explanation": [
      "Los pronombres tú, él y mí suelen llevar acento propio; tu, el y mi acompañan a otra palabra. La tilde diacrítica ayuda al leer, pero no todas las parejas tienen un contraste audible fiable. Usa también el contexto; nunca decidas solo por la voz sintética."
    ],
    "perceive": {
      "id": "pronunciation-perceive",
      "type": "listen",
      "prompt": "Escucha primero y decide; usa también el contexto.",
      "items": [
        {
          "audio": "Tú abriste tu tienda.",
          "q": "¿Qué palabra representa a la persona?",
          "options": [
            "Tú",
            "Tu tienda"
          ],
          "answer": 0,
          "why": "Escucha de nuevo la frase completa y compara el dato con su forma escrita."
        },
        {
          "audio": "Él fue al mercado.",
          "q": "¿Qué escribe el pronombre del comienzo?",
          "options": [
            "Él con tilde",
            "El sin tilde"
          ],
          "answer": 0,
          "why": "Escucha de nuevo la frase completa y compara el dato con su forma escrita."
        }
      ]
    },
    "produce": [
      {
        "text": "Tú trajiste tu cuaderno.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      },
      {
        "text": "Él abrió el taller.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      },
      {
        "text": "Sí, sé la fecha de mi viaje.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      }
    ]
  },
  "listening": {
    "title": "Preguntas para una entrevista",
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
        "text": "Abuelo, tengo que presentar una biografía en clase. ¿Puedo hablar de ti? Sé que naciste aquí, pero no sé cuándo fuiste a vivir a otra ciudad ni cuál fue tu primer trabajo."
      },
      {
        "speaker": "b",
        "text": "Claro. En 1978 fui a León con mi hermano. Estuve allí cuatro años. Primero trabajé en una panadería. No pude estudiar por la mañana, así que hice un curso por la noche."
      },
      {
        "speaker": "a",
        "text": "¿Y después volviste aquí? Mi madre me dijo que también tuviste una tienda. ¿Fue antes o después de conocer a la abuela? Quiero poner las fechas en orden."
      },
      {
        "speaker": "b",
        "text": "Volví en 1982 y abrí la tienda dos años después. Conocí a tu abuela en 1985. Ella vino a comprar un cuaderno y hablamos toda la tarde. No pongas que fui un gran vendedor: ¡ese día olvidé cobrar el cuaderno!"
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Primera escucha: busca la situación general sin abrir la transcripción.",
        "exercise": {
          "id": "listen-gist",
          "type": "choice",
          "prompt": "Escucha «Preguntas para una entrevista» y reconoce la intención.",
          "items": [
            {
              "q": "¿Para qué pregunta el nieto?",
              "options": [
                "Para preparar una biografía",
                "Para comprar una tienda",
                "Para buscar un empleo"
              ],
              "answer": 0,
              "why": "La información de la situación corresponde a «Para preparar una biografía»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Qué necesita el nieto de su abuelo?",
              "options": [
                "Hechos y fechas para ordenar su vida",
                "Consejos para abrir un comercio ahora",
                "Una lista de precios de la panadería"
              ],
              "answer": 0,
              "why": "Comprueba el contexto y los datos de la escena: Hechos y fechas para ordenar su vida."
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
          "prompt": "Localiza dos datos concretos en «Preguntas para una entrevista».",
          "items": [
            {
              "q": "¿Cuándo abrió la tienda el abuelo?",
              "options": [
                "En 1978",
                "En 1985",
                "En 1984"
              ],
              "answer": 2,
              "why": "La información de la situación corresponde a «En 1984»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Qué hizo por la noche en León?",
              "options": [
                "Un viaje",
                "Un curso",
                "Pan para su familia"
              ],
              "answer": 1,
              "why": "La información de la situación corresponde a «Un curso»; comprueba la frase completa antes de volver a responder."
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
          "prompt": "Interpreta las palabras clave de «Preguntas para una entrevista».",
          "items": [
            {
              "q": "En fui a León, fui significa…",
              "options": [
                "Me quedé en casa",
                "Me desplacé",
                "Trabajé como vendedor"
              ],
              "answer": 1,
              "why": "La información de la situación corresponde a «Me desplacé»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "En cuál fue tu primer trabajo, fue corresponde a…",
              "options": [
                "Ir",
                "Venir",
                "Ser"
              ],
              "answer": 2,
              "why": "Comprueba el contexto y los datos de la escena: Ser."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "Rosa volvió al aula",
    "genre": "Perfil en una revista de barrio",
    "frame": "Texto original de práctica en una situación ficticia.",
    "text": [
      "Rosa nació en un pueblo pequeño en 1968. A los dieciocho años fue a la capital para estudiar, pero su padre enfermó y ella volvió a casa. Allí tuvo su primer trabajo en una tienda de telas. Aprendió a coser y, en 1995, abrió un taller con su hermana. Fue una época difícil: tuvieron pocos clientes al principio y pusieron todos sus ahorros en el negocio.",
      "En 2010 una escuela les pidió ropa para una función de teatro. Rosa hizo los trajes y conoció a una profesora de arte. La profesora le habló de un curso para adultos. Rosa no pudo apuntarse ese año, pero guardó la información. Cinco años después volvió a estudiar. Estuvo dos cursos en la escuela y terminó con un proyecto sobre la ropa de su pueblo. Hoy trabaja menos horas y enseña a jóvenes. Dice que su biografía no terminó con su primer empleo."
    ],
    "glossary": [
      {
        "es": "nacer en un pueblo",
        "en": "be born in a village"
      },
      {
        "es": "terminar los estudios",
        "en": "finish studies"
      },
      {
        "es": "conseguir un trabajo",
        "en": "get a job"
      }
    ],
    "tasks": [
      {
        "id": "reading-choice",
        "type": "choice",
        "prompt": "Lee «Rosa volvió al aula» y localiza la evidencia para cada respuesta.",
        "items": [
          {
            "q": "¿Por qué volvió Rosa al pueblo?",
            "options": [
              "Su padre enfermó",
              "Terminó sus estudios",
              "Cerró el taller"
            ],
            "answer": 0,
            "why": "La información de la situación corresponde a «Su padre enfermó»; comprueba la frase completa antes de volver a responder."
          },
          {
            "q": "¿Qué ocurrió en 2015?",
            "options": [
              "Abrió el taller",
              "Nació su hermana",
              "Volvió a estudiar"
            ],
            "answer": 2,
            "why": "La información de la situación corresponde a «Volvió a estudiar»; comprueba la frase completa antes de volver a responder."
          }
        ]
      },
      {
        "id": "reading-transfer",
        "type": "open",
        "prompt": "Usa la información de «Rosa volvió al aula» para otra persona.",
        "items": [
          {
            "prompt": "Resume el dato más útil del texto para esta misión: Leer y contar una biografía breve utilizando hitos y pasados irregulares. Explica qué frase lo demuestra y qué pregunta harías después.",
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
          "quote": "Rosa nació en un pueblo pequeño en 1968.",
          "note": "Explica qué información aporta esta frase y cómo prepara los datos siguientes. Después localiza una forma de la semana en este párrafo."
        },
        {
          "quote": "En 2010 una escuela les pidió ropa para una función de teatro.",
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
              "En",
              "2016",
              "tuvo",
              "su",
              "primer",
              "trabajo",
              "y",
              "se",
              "mudó."
            ]
          },
          {
            "words": [
              "Dijo",
              "que",
              "no",
              "pudo",
              "continuar",
              "el",
              "curso."
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
              "¿Te gustan más las tiendas grandes?",
              "Entonces pondré la fecha que prefiero.",
              "¿Fue en 1982 o en 1984 cuando abriste la tienda?"
            ],
            "answer": 2,
            "why": "Comprueba el contexto y los datos de la escena: ¿Fue en 1982 o en 1984 cuando abriste la tienda?.",
            "context": "Tu entrevista tiene dos fechas distintas para la apertura de una tienda.",
            "q": "¿Qué respuesta resuelve esta dificultad?"
          },
          {
            "context": "Entrevista a tu compañero sobre dos cambios de su vida. Si una fecha no está clara, pregunta si ocurrió antes o después de otro hecho.",
            "q": "En esta interacción de «Una vida en cuatro fechas», ¿cómo compruebas que puedes continuar?",
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
            "prompt": "Para «Una vida en cuatro fechas», escribe una apertura que sitúe a tu destinatario. Añade un dato nuevo elegido por ti.",
            "model": "Amalia nació en 1980 en una ciudad pequeña.",
            "checklist": [
              "Se entiende quién habla y por qué.",
              "Incluyes un dato concreto que no contradice la situación."
            ]
          },
          {
            "prompt": "Prepara una pregunta de seguimiento para esta interacción: Entrevista a tu compañero sobre dos cambios de su vida. Si una fecha no está clara, pregunta si ocurrió antes o después de otro hecho.",
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
            "prompt": "Reto de recuperación en la semana 3: En un intercambio de experiencias, pregunta por una actividad hecha alguna vez y reacciona. Cuenta tres experiencias reales y una inventada con ya, todavía no y nunca; utiliza hecho, dicho, visto, escrito, puesto, vuelto, abierto y roto entre tus ejemplos. Enlaza he estado y lo he visto sin borrar el auxiliar. Tu pareja debe adivinar la experiencia inventada.",
            "model": "Ya he hecho una ruta nocturna y he visto el amanecer. Nunca he roto una mochila. Todavía no he escrito la reseña. He puesto las fotos en una carpeta, he abierto el mapa y he vuelto al pueblo. Mi amiga ha dicho que la ruta es fácil.",
            "checklist": [
              "Resuelves todas las partes del reto con ejemplos propios.",
              "Después comparas con tus apuntes y corriges una forma o un dato."
            ]
          },
          {
            "prompt": "Comprueba la recuperación 1→3: cambia un dato de tu respuesta y reformula la parte afectada. Explica qué cambió a tu compañero.",
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
    "task": "Prepara un perfil para una revista de barrio: nacimiento, estudios, trabajo y un cambio importante. Puedes inventar una persona. Incluye cuatro fechas y un dato que te interese.",
    "context": "Escribe una primera versión propia; el modelo es una posibilidad, no un texto para copiar. Puedes usar datos ficticios.",
    "steps": [
      "Anota destinatario, propósito y tres datos necesarios.",
      "Organiza los datos en un orden que ayude a la otra persona.",
      "Escribe el borrador con apoyo de las expresiones útiles.",
      "Revisa si has respondido a todas las partes, corrige las formas y escribe una segunda versión."
    ],
    "useLanguage": [
      "En 2016 tuvo su primer trabajo y se mudó.",
      "Fue guía durante tres años; después fue a otra ciudad.",
      "Dijo que no pudo continuar el curso.",
      "Él me dijo: sí, sé la fecha; está en mi cuaderno."
    ],
    "model": [
      "Amalia nació en 1980 en una ciudad pequeña. En 1998 fue a la capital y estudió dibujo. Tuvo varios empleos antes de abrir su estudio. En 2007 hizo un cartel para una biblioteca y conoció a su futura compañera de trabajo. Las dos pusieron sus ahorros en un taller. Al principio no pudieron contratar a nadie, pero en 2015 llegó su primera ayudante. Hoy Amalia también enseña a niños."
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
        "prompt": "Presenta la vida de una persona a partir de cuatro fechas anotadas. Explica por qué elegiste a esa persona.",
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
        "prompt": "Entrevista a tu compañero sobre dos cambios de su vida. Si una fecha no está clara, pregunta si ocurrió antes o después de otro hecho.",
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
        "task": "Presenta la vida de una persona a partir de cuatro fechas anotadas. Explica por qué elegiste a esa persona."
      },
      {
        "move": "Negocia",
        "task": "Entrevista a tu compañero sobre dos cambios de su vida. Si una fecha no está clara, pregunta si ocurrió antes o después de otro hecho."
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
        "q": "En 2019 yo ___ a Granada. (ir)",
        "answers": [
          [
            "fui"
          ]
        ]
      },
      {
        "type": "gap",
        "q": "Mis primas ___ una tienda. (poner)",
        "answers": [
          [
            "pusieron"
          ]
        ]
      },
      {
        "type": "error",
        "sentence": "Ayer ella dijó la fecha.",
        "answers": [
          "Ayer ella dijo la fecha."
        ],
        "why": "Dijo no lleva tilde: es llana terminada en vocal."
      },
      {
        "type": "order",
        "words": [
          "Él",
          "tuvo",
          "su",
          "primer",
          "empleo",
          "allí."
        ]
      },
      {
        "type": "choice",
        "q": "En fue al teatro, fue corresponde a…",
        "options": [
          "Ser",
          "Ir"
        ],
        "answer": 1,
        "why": "La opción elegida cumple la función comunicativa indicada."
      },
      {
        "q": "¿Qué sabemos de su tío?",
        "options": [
          "Empezará a cocinar el próximo año",
          "Trabajó como cocinero diez años",
          "Viajó diez veces al mismo lugar"
        ],
        "answer": 1,
        "why": "Comprueba el contexto y los datos de la escena: Trabajó como cocinero diez años.",
        "type": "listen",
        "audio": "Mi tío fue cocinero durante diez años."
      },
      {
        "type": "open",
        "prompt": "Evaluación de transferencia 3: Presenta la vida de una persona a partir de cuatro fechas anotadas. Explica por qué elegiste a esa persona.",
        "model": "Amalia nació en 1980 en una ciudad pequeña. En 1998 fue a la capital y estudió dibujo. Tuvo varios empleos antes de abrir su estudio. En 2007 hizo un cartel para una biblioteca y conoció a su futura compañera de trabajo. Las dos pusieron sus ahorros en un taller. Al principio no pudieron contratar a nadie, pero en 2015 llegó su primera ayudante. Hoy Amalia también enseña a niños.",
        "checklist": [
          "Cumples el propósito con datos comprensibles.",
          "Usas las formas de la semana y revisas una duda."
        ]
      },
      {
        "type": "open",
        "prompt": "Resolución final 3: Entrevista a tu compañero sobre dos cambios de su vida. Si una fecha no está clara, pregunta si ocurrió antes o después de otro hecho. Añade una pregunta para comprobar la respuesta.",
        "checklist": [
          "Reaccionas a lo que dice tu interlocutor.",
          "Confirmas el dato o el acuerdo antes de terminar."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Leer y contar una biografía breve utilizando hitos y pasados irregulares.",
      "Seleccionar datos de una conversación y de un texto práctico.",
      "Producir un mensaje propio, revisarlo y responder a otra persona."
    ],
    "review": [
      "En dos días, repite la misión «Una vida en cuatro fechas» con personas y datos diferentes.",
      "Antes de la próxima clase, recupera las expresiones sin mirar y comprueba después una duda.",
      "Compara tu primera versión con la revisada: ¿qué entiende mejor ahora tu interlocutor?"
    ]
  }
};
