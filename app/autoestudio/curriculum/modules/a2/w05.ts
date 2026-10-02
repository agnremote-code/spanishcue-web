import type { Module } from "../../types";

/** Original A2 week: authored scenario, skills and retrieval. */
export const a2w05: Module = {
  "id": "a2-05",
  "level": "a2",
  "week": 5,
  "kind": "checkpoint",
  "title": "Checkpoint: un museo de recuerdos",
  "subtitle": "Crear una pequeña exposición que reúna experiencias recientes, una biografía y hábitos de infancia.",
  "stop": {
    "place": "Masaya",
    "country": "Nicaragua"
  },
  "minutes": 140,
  "newObjectives": [
    "a2.rev.checkpoint-1",
    "a2.lis.podcast-recuerdos"
  ],
  "reviewObjectives": [
    "a2.gram.perfecto-compuesto",
    "a2.gram.participios-irregulares",
    "a2.gram.ya-todavia",
    "a2.voc.experiencias-viaje",
    "a2.pron.sinalefa-compuestos",
    "a2.fun.experiencias",
    "a2.spk.nunca-he",
    "a2.gram.indefinido-regular",
    "a2.gram.marcadores-pasado",
    "a2.voc.fin-de-semana",
    "a2.pron.acento-tiempos",
    "a2.fun.contar-ayer",
    "a2.lis.relato-breve",
    "a2.gram.indefinido-irregular",
    "a2.gram.ser-ir-indefinido",
    "a2.voc.etapas-vida",
    "a2.pron.tilde-diacritica",
    "a2.fun.biografia",
    "a2.read.biografia",
    "a2.gram.imperfecto",
    "a2.gram.soler",
    "a2.voc.infancia",
    "a2.pron.s-aspirada",
    "a2.fun.comparar-antes",
    "a2.wri.recuerdo",
    "a2.gram.indefinido-ortografia",
    "a2.gram.indefinido-ver-dar"
  ],
  "prerequisites": [
    "a2-04"
  ],
  "goal": {
    "canDo": "Puedo crear una pequeña exposición que reúna experiencias recientes, una biografía y hábitos de infancia.",
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
        "heading": "Checkpoint: un museo de recuerdos · formas que necesitas",
        "body": [
          "En este checkpoint eliges el tiempo por el mensaje: he visto conecta una experiencia con el presente; vi sitúa un hecho terminado; veía describe una costumbre. No cambies de tiempo solo para evitar repetir una forma. Escribe primero los marcadores y decide si cuentas una experiencia, un hecho o un hábito."
        ],
        "support": [
          "Choose the past form for its job: experience linked to now, completed event, or past habit. Keep dates and background separate in your exhibit."
        ],
        "examples": [
          {
            "es": "Este año he encontrado una foto de mi abuela."
          },
          {
            "es": "En 1980 abrió una tienda cerca de casa."
          }
        ],
        "mistakes": [
          {
            "wrong": "Mi abuela ha abrió una tienda.",
            "right": "Mi abuela abrió una tienda.",
            "why": "No combines un auxiliar del perfecto con un verbo conjugado en indefinido."
          }
        ]
      },
      {
        "heading": "Del sistema al mensaje",
        "body": [
          "Una exposición necesita información breve y comprensible para quien no conoce a la familia. Combina un título, una fecha y un recuerdo concreto. En la entrevista escucha el contexto antes de escribir fechas. Si no entiendes un dato, compruébalo: ¿has dicho en 1980? La revisión incluye auxiliares, participios, raíces irregulares y acentos."
        ],
        "examples": [
          {
            "es": "Antes trabajaba allí todos los sábados."
          },
          {
            "es": "Mi hermano ya ha escrito el cartel; yo todavía no lo he visto."
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
            "q": "Este mes hemos ___ al vecino. (ver)",
            "answers": [
              [
                "visto"
              ]
            ]
          },
          {
            "q": "En 1985 Alicia ___ el puesto. (abrir)",
            "answers": [
              [
                "abrió"
              ]
            ]
          },
          {
            "q": "Sus hijos ___ los sábados. (venir, hábito)",
            "answers": [
              [
                "venían"
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
            "source": "Mi tío guarda fotos.",
            "instruction": "Cambia guarda al imperfecto y añade cuando era joven al final. Mantén Mi tío al principio.",
            "answers": [
              "Mi tío guardaba fotos cuando era joven."
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          },
          {
            "source": "Yo he hecho un cartel.",
            "instruction": "Sustituye Yo por Ellas y ajusta solo el auxiliar; conserva el resto.",
            "answers": [
              "Ellas han hecho un cartel."
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          },
          {
            "source": "Alicia va al mercado.",
            "instruction": "Pon Ayer al principio y cambia va al indefinido; mantén Alicia y al mercado en ese orden.",
            "answers": [
              "Ayer Alicia fue al mercado."
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
            "es": "una foto de familia",
            "en": "a family photo"
          },
          {
            "es": "guardar un recuerdo",
            "en": "keep a memory"
          },
          {
            "es": "escribir un pie de foto",
            "en": "write a caption"
          },
          {
            "es": "ordenar por fechas",
            "en": "sort by dates"
          }
        ]
      },
      {
        "title": "Datos para resolver la misión",
        "items": [
          {
            "es": "reconocer a alguien",
            "en": "recognise someone"
          },
          {
            "es": "una caja de recuerdos",
            "en": "a box of keepsakes"
          },
          {
            "es": "contar una historia familiar",
            "en": "tell a family story"
          },
          {
            "es": "preparar una exposición",
            "en": "prepare an exhibition"
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
            "left": "una foto de familia",
            "right": "a family photo"
          },
          {
            "left": "guardar un recuerdo",
            "right": "keep a memory"
          },
          {
            "left": "escribir un pie de foto",
            "right": "write a caption"
          },
          {
            "left": "ordenar por fechas",
            "right": "sort by dates"
          },
          {
            "left": "reconocer a alguien",
            "right": "recognise someone"
          },
          {
            "left": "una caja de recuerdos",
            "right": "a box of keepsakes"
          },
          {
            "left": "contar una historia familiar",
            "right": "tell a family story"
          },
          {
            "left": "preparar una exposición",
            "right": "prepare an exhibition"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Una fecha debe llegar clara",
    "explanation": [
      "En una entrevista, las fechas y las terminaciones verbales contienen información esencial. Divide tu respuesta en una fecha, una acción y un detalle. Destaca la fecha corregida sin gritar. Repite la frase completa para que el oyente no pierda el contexto."
    ],
    "perceive": {
      "id": "pronunciation-perceive",
      "type": "listen",
      "prompt": "Escucha primero y decide; usa también el contexto.",
      "items": [
        {
          "audio": "Abrió el puesto en mil novecientos ochenta y cinco.",
          "q": "¿Qué año escuchas?",
          "options": [
            "1985",
            "1984"
          ],
          "answer": 0,
          "why": "Escucha de nuevo la frase completa y compara el dato con su forma escrita."
        },
        {
          "audio": "Todos los sábados venían sus hijos.",
          "q": "¿Qué verbo expresa la costumbre?",
          "options": [
            "venían",
            "vinieron"
          ],
          "answer": 0,
          "why": "Escucha de nuevo la frase completa y compara el dato con su forma escrita."
        }
      ]
    },
    "produce": [
      {
        "text": "En mil novecientos ochenta y cuatro empezó el curso.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      },
      {
        "text": "Abrió el puesto en ochenta y cinco.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      },
      {
        "text": "Antes cocinaba en casa; después vendió en el mercado.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      }
    ]
  },
  "listening": {
    "title": "La grabación de Alicia",
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
        "text": "Alicia, hemos preparado la exposición, pero tenemos una duda. En el cuaderno pone 1984. ¿Ese año abriste el puesto del mercado o empezaste el curso de cocina?"
      },
      {
        "speaker": "b",
        "text": "Empecé el curso. Abrí el puesto en 1985. Antes trabajaba en una oficina y cocinaba solo para mi familia. Solía llevar comida a mis compañeras y ellas me animaron."
      },
      {
        "speaker": "a",
        "text": "Ya hemos puesto esa fecha en el cartel. También hemos encontrado una foto con tus hijos. ¿Te ayudaban todos los días? Uno parece muy pequeño para trabajar."
      },
      {
        "speaker": "b",
        "text": "No, venían los sábados. Mi hija mayor limpiaba las mesas y el pequeño dibujaba. Una vez él hizo un cartel precioso con el nombre del puesto. Todavía no lo hemos encontrado, pero recuerdo sus letras rojas."
      },
      {
        "speaker": "a",
        "text": "¿Podemos incluir también cómo era un día normal en el puesto? Ya hemos contado el primer día, pero queremos que los visitantes imaginen tu rutina. ¿A qué hora empezabas y quién compraba primero?"
      },
      {
        "speaker": "b",
        "text": "Llegaba antes de las siete y preparaba las mesas con mi hermana. Los primeros clientes eran trabajadores del mercado. Solían pedir algo caliente. Un día llegó una cantante conocida, pero eso fue una excepción, no nuestra vida de todos los días."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Primera escucha: busca la situación general sin abrir la transcripción.",
        "exercise": {
          "id": "listen-gist",
          "type": "choice",
          "prompt": "Escucha «La grabación de Alicia» y reconoce la intención.",
          "items": [
            {
              "q": "¿Qué hacen los interlocutores?",
              "options": [
                "Organizan un curso de cocina",
                "Comprueban datos para una exposición",
                "Reservan una mesa"
              ],
              "answer": 1,
              "why": "La información de la situación corresponde a «Comprueban datos para una exposición»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Qué papel tiene quien pregunta?",
              "options": [
                "Comprar un puesto del mercado",
                "Preparar información correcta para visitantes",
                "Elegir un menú para comer"
              ],
              "answer": 1,
              "why": "Comprueba el contexto y los datos de la escena: Preparar información correcta para visitantes."
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
          "prompt": "Localiza dos datos concretos en «La grabación de Alicia».",
          "items": [
            {
              "q": "¿En qué año abrió Alicia el puesto?",
              "options": [
                "1985",
                "1984",
                "1990"
              ],
              "answer": 0,
              "why": "La información de la situación corresponde a «1985»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Con qué frecuencia iban sus hijos?",
              "options": [
                "Todos los días",
                "Solo una vez",
                "Los sábados"
              ],
              "answer": 2,
              "why": "La información de la situación corresponde a «Los sábados»; comprueba la frase completa antes de volver a responder."
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
          "prompt": "Interpreta las palabras clave de «La grabación de Alicia».",
          "items": [
            {
              "q": "¿Qué diferencia hay entre venían e hizo?",
              "options": [
                "Dos acciones futuras",
                "Dos formas de pedir ayuda",
                "Costumbre frente a una acción concreta"
              ],
              "answer": 2,
              "why": "La información de la situación corresponde a «Costumbre frente a una acción concreta»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "En todavía no lo hemos encontrado, lo se refiere a…",
              "options": [
                "El cartel",
                "El curso",
                "El puesto"
              ],
              "answer": 0,
              "why": "Comprueba el contexto y los datos de la escena: El cartel."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "Tres objetos, una historia",
    "genre": "Cartelas de una exposición familiar",
    "frame": "Texto original de práctica en una situación ficticia.",
    "text": [
      "La maleta azul. En 1976 Alicia salió de su pueblo para trabajar en una ciudad cercana. Llevó esta maleta, dos vestidos y una libreta con direcciones de familiares. Durante los primeros meses vivió con una prima. Todos los domingos escribía una carta a sus padres. La maleta ya no cierra bien, pero su nieto la ha limpiado para la exposición.",
      "El cuaderno verde. Alicia empezó un curso de cocina en 1984. En este cuaderno apuntaba las recetas y hacía dibujos de los platos. Solía practicar por la noche, después del trabajo. Un año después puso un pequeño puesto de comida junto al mercado. El primer día vendió todo antes de mediodía.",
      "La fotografía del mercado. Esta foto es de 1990. Alicia aparece con sus dos hijos detrás del puesto. Este mes la familia ha vuelto al mercado y ha encontrado a un antiguo vecino. Él les ha contado más historias, pero todavía no han escrito todas. Quieren añadir un audio a la exposición.",
      "Para visitar la exposición, empieza por la maleta y sigue las fechas de las cartelas. Al lado de cada objeto hay una pregunta para el público. No todas tienen una respuesta escrita: la familia quiere escuchar recuerdos de otras personas del barrio. Si reconoces a alguien en la fotografía, habla con la persona responsable antes de escribir su nombre en el libro de visitas."
    ],
    "glossary": [
      {
        "es": "una foto de familia",
        "en": "a family photo"
      },
      {
        "es": "guardar un recuerdo",
        "en": "keep a memory"
      },
      {
        "es": "escribir un pie de foto",
        "en": "write a caption"
      }
    ],
    "tasks": [
      {
        "id": "reading-choice",
        "type": "choice",
        "prompt": "Lee «Tres objetos, una historia» y localiza la evidencia para cada respuesta.",
        "items": [
          {
            "q": "¿Qué objeto se relaciona con el viaje de 1976?",
            "options": [
              "La fotografía",
              "La maleta",
              "El cuaderno"
            ],
            "answer": 1,
            "why": "La información de la situación corresponde a «La maleta»; comprueba la frase completa antes de volver a responder."
          },
          {
            "q": "¿Qué tarea de la exposición no está terminada?",
            "options": [
              "Escribir todas las historias del vecino",
              "Limpiar la maleta",
              "Encontrar la fotografía"
            ],
            "answer": 0,
            "why": "La información de la situación corresponde a «Escribir todas las historias del vecino»; comprueba la frase completa antes de volver a responder."
          }
        ]
      },
      {
        "id": "reading-transfer",
        "type": "open",
        "prompt": "Usa la información de «Tres objetos, una historia» para otra persona.",
        "items": [
          {
            "prompt": "Resume el dato más útil del texto para esta misión: Crear una pequeña exposición que reúna experiencias recientes, una biografía y hábitos de infancia. Explica qué frase lo demuestra y qué pregunta harías después.",
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
          "quote": "La maleta azul.",
          "note": "Explica qué información aporta esta frase y cómo prepara los datos siguientes. Después localiza una forma de la semana en este párrafo."
        },
        {
          "quote": "El cuaderno verde.",
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
              "Este",
              "año",
              "he",
              "encontrado",
              "una",
              "foto",
              "de",
              "mi",
              "abuela."
            ]
          },
          {
            "words": [
              "Antes",
              "trabajaba",
              "allí",
              "todos",
              "los",
              "sábados."
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
              "El curso empezó en 1984; el puesto abrió un año después.",
              "Las dos fechas son exactamente la misma.",
              "El puesto está en el mercado, que es grande."
            ],
            "answer": 0,
            "why": "Comprueba el contexto y los datos de la escena: El curso empezó en 1984; el puesto abrió un año después..",
            "context": "Un visitante confunde el inicio del curso y la apertura del puesto.",
            "q": "¿Qué respuesta resuelve esta dificultad?"
          },
          {
            "context": "Entrevista al profesor, que interpreta a la persona de una foto. Comprueba dos fechas y una costumbre; presenta después la información a un visitante.",
            "q": "En esta interacción de «Checkpoint: un museo de recuerdos», ¿cómo compruebas que puedes continuar?",
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
            "prompt": "Para «Checkpoint: un museo de recuerdos», escribe una apertura que sitúe a tu destinatario. Añade un dato nuevo elegido por ti.",
            "model": "Este mes he encontrado un cuaderno de mi padre.",
            "checklist": [
              "Se entiende quién habla y por qué.",
              "Incluyes un dato concreto que no contradice la situación."
            ]
          },
          {
            "prompt": "Prepara una pregunta de seguimiento para esta interacción: Entrevista al profesor, que interpreta a la persona de una foto. Comprueba dos fechas y una costumbre; presenta después la información a un visitante.",
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
            "prompt": "Reto de recuperación en la semana 5: En un intercambio de experiencias, pregunta por una actividad hecha alguna vez y reacciona. Cuenta tres experiencias reales y una inventada con ya, todavía no y nunca; utiliza hecho, dicho, visto, escrito, puesto, vuelto, abierto y roto entre tus ejemplos. Enlaza he estado y lo he visto sin borrar el auxiliar. Tu pareja debe adivinar la experiencia inventada.",
            "model": "Ya he hecho una ruta nocturna y he visto el amanecer. Nunca he roto una mochila. Todavía no he escrito la reseña. He puesto las fotos en una carpeta, he abierto el mapa y he vuelto al pueblo. Mi amiga ha dicho que la ruta es fácil.",
            "checklist": [
              "Resuelves todas las partes del reto con ejemplos propios.",
              "Después comparas con tus apuntes y corriges una forma o un dato."
            ]
          },
          {
            "prompt": "Comprueba la recuperación 1→5: cambia un dato de tu respuesta y reformula la parte afectada. Explica qué cambió a tu compañero.",
            "model": "En mi nueva versión cambia el lugar o la persona: Ya he hecho una ruta nocturna y he visto el amanecer. Debo revisar también las referencias para que mi oyente entienda el cambio.",
            "checklist": [
              "El nuevo dato es coherente con el resto de la situación.",
              "Repites la parte necesaria y compruebas que el oyente lo entiende."
            ]
          }
        ]
      },
      {
        "id": "retrieval-week-02",
        "type": "open",
        "prompt": "Recuperación sin mirar · semana 2. Usa un caso diferente de los textos anteriores.",
        "items": [
          {
            "prompt": "Reto de recuperación en la semana 5: Sin mirar la semana 2, relata otro domingo con desayunar, caminar, comer, recibir y salir. Incluye ayer o hace dos días y ordena cuatro hechos. Compara hablo/habló en voz alta. Tu compañero escucha y reconstruye el orden; explica por qué esta mañana puede combinarse con tiempos distintos según la variedad y el contexto. Añade tres acciones con buscar, llegar y empezar en primera persona del pasado.",
            "model": "Hace dos días desayuné temprano, caminé hasta el puerto, comí con una amiga y recibí una llamada. Después salí hacia casa. Hoy hablo del viaje; ayer habló mi amiga. Busqué la dirección, llegué temprano y empecé la visita.",
            "checklist": [
              "Resuelves todas las partes del reto con ejemplos propios.",
              "Después comparas con tus apuntes y corriges una forma o un dato."
            ]
          },
          {
            "prompt": "Comprueba la recuperación 2→5: cambia un dato de tu respuesta y reformula la parte afectada. Explica qué cambió a tu compañero.",
            "model": "En mi nueva versión cambia el lugar o la persona: Hace dos días desayuné temprano, caminé hasta el puerto, comí con una amiga y recibí una llamada. Debo revisar también las referencias para que mi oyente entienda el cambio.",
            "checklist": [
              "El nuevo dato es coherente con el resto de la situación.",
              "Repites la parte necesaria y compruebas que el oyente lo entiende."
            ]
          }
        ]
      },
      {
        "id": "retrieval-week-03",
        "type": "open",
        "prompt": "Recuperación sin mirar · semana 3. Usa un caso diferente de los textos anteriores.",
        "items": [
          {
            "prompt": "Reto de recuperación en la semana 5: Presenta una biografía inventada con cuatro fechas y los verbos ir, estar, tener, hacer, poder, poner, venir y decir en indefinido. Incluye fue como ser y como ir. Escribe un pie de foto que distinga tú/tu, él/el, sí/si, mí/mi y sé/se; explica más/mas. Tu oyente ordena los hitos y pide una fecha que falte. Añade un hecho con ver y otro con dar, alternando yo y él o ella.",
            "model": "En 2001 fue cocinero y después fue a Lima. Estuvo allí un año, tuvo un hijo e hizo un curso. Pudo volver en 2003, puso una tienda, vino su hermana y dijo: sí, sé que este lugar es para mí. Vi el anuncio y di mi respuesta. Ella vio el cartel y dio una explicación.",
            "checklist": [
              "Resuelves todas las partes del reto con ejemplos propios.",
              "Después comparas con tus apuntes y corriges una forma o un dato."
            ]
          },
          {
            "prompt": "Comprueba la recuperación 3→5: cambia un dato de tu respuesta y reformula la parte afectada. Explica qué cambió a tu compañero.",
            "model": "En mi nueva versión cambia el lugar o la persona: En 2001 fue cocinero y después fue a Lima. Debo revisar también las referencias para que mi oyente entienda el cambio.",
            "checklist": [
              "El nuevo dato es coherente con el resto de la situación.",
              "Repites la parte necesaria y compruebas que el oyente lo entiende."
            ]
          }
        ]
      },
      {
        "id": "retrieval-week-04",
        "type": "open",
        "prompt": "Recuperación sin mirar · semana 4. Usa un caso diferente de los textos anteriores.",
        "items": [
          {
            "prompt": "Reto de recuperación en la semana 5: Describe un colegio de antes y compáralo con uno actual. Usa era, iba, veía, solía y suelo; incluye juegos, habitación o patio y dos costumbres. Escribe un recuerdo de cuatro frases. Al oír una palabra poco clara, confirma singular o plural por el contexto y pide repetición; explica por qué un audio sintético no prueba una s regional.",
            "model": "Mi colegio era pequeño. Iba andando y veía a mis amigos en la plaza. Solíamos jugar en el patio. Ahora suelo leer en una biblioteca. ¿Has dicho los patios o el patio?",
            "checklist": [
              "Resuelves todas las partes del reto con ejemplos propios.",
              "Después comparas con tus apuntes y corriges una forma o un dato."
            ]
          },
          {
            "prompt": "Comprueba la recuperación 4→5: cambia un dato de tu respuesta y reformula la parte afectada. Explica qué cambió a tu compañero.",
            "model": "En mi nueva versión cambia el lugar o la persona: Mi colegio era pequeño. Debo revisar también las referencias para que mi oyente entienda el cambio.",
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
    "task": "Redacta tres cartelas conectadas para tu exposición: una experiencia reciente al encontrar un objeto, un hecho con fecha y una costumbre de la persona. Revisa la coherencia de todos los tiempos.",
    "context": "Escribe una primera versión propia; el modelo es una posibilidad, no un texto para copiar. Puedes usar datos ficticios.",
    "steps": [
      "Anota destinatario, propósito y tres datos necesarios.",
      "Organiza los datos en un orden que ayude a la otra persona.",
      "Escribe el borrador con apoyo de las expresiones útiles.",
      "Revisa si has respondido a todas las partes, corrige las formas y escribe una segunda versión."
    ],
    "useLanguage": [
      "Este año he encontrado una foto de mi abuela.",
      "En 1980 abrió una tienda cerca de casa.",
      "Antes trabajaba allí todos los sábados.",
      "Mi hermano ya ha escrito el cartel; yo todavía no lo he visto."
    ],
    "model": [
      "Este mes he encontrado un cuaderno de mi padre. En 1992 él fue a otra ciudad para estudiar. En el cuaderno escribía los gastos de cada semana y las direcciones de sus amigos. Solía dibujar los edificios que veía desde el autobús. En 1994 hizo su primera exposición en la biblioteca. Nunca he visto aquellas obras, pero ya he hablado con una antigua compañera suya. Ella ha guardado dos dibujos y quiere prestarlos a nuestra familia. La próxima semana vamos a entrevistarlo otra vez para preguntar por sus costumbres. Después escribiremos una cartela con las fechas confirmadas y dejaremos aparte las que todavía no sabemos."
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
        "prompt": "Presenta tres objetos de tu exposición. Sitúa un hecho, describe una costumbre y cuenta lo que has descubierto recientemente.",
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
        "prompt": "Entrevista al profesor, que interpreta a la persona de una foto. Comprueba dos fechas y una costumbre; presenta después la información a un visitante.",
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
        "task": "Presenta tres objetos de tu exposición. Sitúa un hecho, describe una costumbre y cuenta lo que has descubierto recientemente."
      },
      {
        "move": "Negocia",
        "task": "Entrevista al profesor, que interpreta a la persona de una foto. Comprueba dos fechas y una costumbre; presenta después la información a un visitante."
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
        "q": "Hace diez años nosotros ___ un álbum. (hacer)",
        "answers": [
          [
            "hicimos"
          ]
        ]
      },
      {
        "type": "gap",
        "q": "Últimamente yo he ___ muchas fotos. (ver)",
        "answers": [
          [
            "visto"
          ]
        ]
      },
      {
        "type": "error",
        "sentence": "Cuando era niña, he iba al río cada domingo.",
        "answers": [
          "Cuando era niña, iba al río cada domingo."
        ],
        "why": "Un hábito de infancia se presenta con imperfecto, iba, sin auxiliar he."
      },
      {
        "type": "order",
        "words": [
          "Primero",
          "encontré",
          "la",
          "foto",
          "y",
          "después",
          "llamé",
          "a",
          "mi",
          "tía."
        ]
      },
      {
        "type": "choice",
        "q": "¿Qué pregunta ayuda a confirmar una fecha?",
        "options": [
          "¿Te gustan las fotos?",
          "¿Has dicho en 1995?"
        ],
        "answer": 1,
        "why": "La opción elegida cumple la función comunicativa indicada."
      },
      {
        "q": "¿Qué guardaba la persona en una caja?",
        "options": [
          "Fotografías de un mercado",
          "Recetas de cocina",
          "Entradas de cine"
        ],
        "answer": 2,
        "why": "Comprueba el contexto y los datos de la escena: Entradas de cine.",
        "type": "listen",
        "audio": "De pequeña guardaba entradas de cine en una caja."
      },
      {
        "type": "open",
        "prompt": "Evaluación de transferencia 5: Presenta tres objetos de tu exposición. Sitúa un hecho, describe una costumbre y cuenta lo que has descubierto recientemente.",
        "model": "Este mes he encontrado un cuaderno de mi padre. En 1992 él fue a otra ciudad para estudiar. En el cuaderno escribía los gastos de cada semana y las direcciones de sus amigos. Solía dibujar los edificios que veía desde el autobús. En 1994 hizo su primera exposición en la biblioteca. Nunca he visto aquellas obras, pero ya he hablado con una antigua compañera suya. Ella ha guardado dos dibujos y quiere prestarlos a nuestra familia. La próxima semana vamos a entrevistarlo otra vez para preguntar por sus costumbres. Después escribiremos una cartela con las fechas confirmadas y dejaremos aparte las que todavía no sabemos.",
        "checklist": [
          "Cumples el propósito con datos comprensibles.",
          "Usas las formas de la semana y revisas una duda."
        ]
      },
      {
        "type": "open",
        "prompt": "Resolución final 5: Entrevista al profesor, que interpreta a la persona de una foto. Comprueba dos fechas y una costumbre; presenta después la información a un visitante. Añade una pregunta para comprobar la respuesta.",
        "checklist": [
          "Reaccionas a lo que dice tu interlocutor.",
          "Confirmas el dato o el acuerdo antes de terminar."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Crear una pequeña exposición que reúna experiencias recientes, una biografía y hábitos de infancia.",
      "Seleccionar datos de una conversación y de un texto práctico.",
      "Producir un mensaje propio, revisarlo y responder a otra persona."
    ],
    "review": [
      "En dos días, repite la misión «Checkpoint: un museo de recuerdos» con personas y datos diferentes.",
      "Antes de la próxima clase, recupera las expresiones sin mirar y comprueba después una duda.",
      "Compara tu primera versión con la revisada: ¿qué entiende mejor ahora tu interlocutor?"
    ]
  }
};
