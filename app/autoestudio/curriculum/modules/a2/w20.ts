import type { Module } from "../../types";

/** Original A2 week: authored scenario, skills and retrieval. */
export const a2w20: Module = {
  "id": "a2-20",
  "level": "a2",
  "week": 20,
  "kind": "checkpoint",
  "title": "Checkpoint final: una semana en común",
  "subtitle": "Organizar una actividad realista integrando experiencias, decisiones, gestiones y opiniones.",
  "stop": {
    "place": "San José",
    "country": "Costa Rica"
  },
  "minutes": 140,
  "newObjectives": [
    "a2.rev.checkpoint-final",
    "a2.wri.texto-a2"
  ],
  "reviewObjectives": [
    "a2.disc.conectores-causa-consecuencia",
    "a2.gram.antes-despues-inf",
    "a2.voc.estudio-trabajo",
    "a2.pron.conectores-entonacion",
    "a2.fun.explicar-decisiones",
    "a2.wri.historia-conectada",
    "a2.gram.por-para",
    "a2.voc.compras-online",
    "a2.pron.palabras-largas",
    "a2.fun.finalidad",
    "a2.lis.atencion-cliente",
    "a2.gram.indefinidos",
    "a2.gram.relativo-que",
    "a2.voc.objetos-perdidos",
    "a2.pron.diptongos-verbales",
    "a2.fun.describir-objeto",
    "a2.read.objetos-perdidos",
    "a2.gram.opinion-indicativo",
    "a2.fun.acuerdo-desacuerdo",
    "a2.voc.temas-sociales",
    "a2.pron.entonacion-duda",
    "a2.disc.turnos",
    "a2.spk.opinion-breve",
    "a2.gram.posesivos-tonicos"
  ],
  "prerequisites": [
    "a2-19"
  ],
  "goal": {
    "canDo": "Puedo organizar una actividad realista integrando experiencias, decisiones, gestiones y opiniones.",
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
        "heading": "Checkpoint final: una semana en común · formas que necesitas",
        "body": [
          "El proyecto final reúne información de varias fuentes. Recupera pasado para explicar una experiencia y su consecuencia; comparaciones para elegir; por y para para justificar; relativos para describir; pronombres para coordinar material; condiciones y cortesía para resolver cambios. El objetivo es que otra persona pueda actuar con tu mensaje."
        ],
        "support": [
          "Use both sources, distinguish what is confirmed and ask for missing facts. Your final message should allow another person to act on the plan."
        ],
        "examples": [
          {
            "es": "El año pasado llegamos tarde; por eso cambiaremos el punto de encuentro."
          },
          {
            "es": "Buscamos la sala que tiene acceso sin escaleras."
          }
        ],
        "mistakes": [
          {
            "wrong": "No vino nadie porque por eso cancelamos la charla.",
            "right": "No vino nadie; por eso cancelamos la charla.",
            "why": "Por eso ya presenta la consecuencia; no se combina aquí con porque."
          }
        ]
      },
      {
        "heading": "Del sistema al mensaje",
        "body": [
          "Trabaja en tres momentos: lee y escucha sin producir todavía, selecciona los datos que necesita tu interlocutor y prepara tu propuesta. Después revisa si cada decisión tiene una razón y si queda algún dato pendiente. No inventes una confirmación. Puedes decir todavía no lo sabemos y formular la pregunta necesaria."
        ],
        "examples": [
          {
            "es": "Le pedí el proyector a Ana y me lo prestó para la actividad."
          },
          {
            "es": "Si el grupo crece, preguntaremos por otra sala."
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
            "q": "Ana presta las cajas: nos ___ presta.",
            "answers": [
              [
                "las"
              ]
            ]
          },
          {
            "q": "Elegimos la biblioteca ___ tener un espacio cubierto. (finalidad)",
            "answers": [
              [
                "para"
              ]
            ]
          },
          {
            "q": "Si confirmamos hoy, ___ el cartel mañana. (imprimir, yo, futuro)",
            "answers": [
              [
                "imprimiré"
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
            "source": "La sala es pequeña. No caben treinta personas.",
            "instruction": "Conserva las dos oraciones en el orden original y enlázalas con por eso después de punto o punto y coma.",
            "answers": [
              "La sala es pequeña; por eso no caben treinta personas."
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          },
          {
            "source": "Elegimos la sala A. La sala A tiene acceso sin escaleras.",
            "instruction": "Conserva Elegimos la sala A y sustituye la segunda mención de la sala A por que, después de una coma; mantén el resto.",
            "answers": [
              "Elegimos la sala A, que tiene acceso sin escaleras."
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          },
          {
            "source": "Quiero confirmar el precio.",
            "instruction": "Empieza con ¿Podría y conserva confirmar el precio; no añadas sujeto ni otra fórmula de cortesía.",
            "answers": [
              "¿Podría confirmar el precio?"
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
            "es": "una propuesta final",
            "en": "a final proposal"
          },
          {
            "es": "un dato confirmado",
            "en": "a confirmed detail"
          },
          {
            "es": "una pregunta pendiente",
            "en": "an outstanding question"
          },
          {
            "es": "un acuerdo de grupo",
            "en": "a group agreement"
          }
        ]
      },
      {
        "title": "Datos para resolver la misión",
        "items": [
          {
            "es": "una experiencia útil",
            "en": "a useful experience"
          },
          {
            "es": "adaptar el plan",
            "en": "adapt the plan"
          },
          {
            "es": "comunicar un cambio",
            "en": "communicate a change"
          },
          {
            "es": "revisar el resultado",
            "en": "review the outcome"
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
            "left": "una propuesta final",
            "right": "a final proposal"
          },
          {
            "left": "un dato confirmado",
            "right": "a confirmed detail"
          },
          {
            "left": "una pregunta pendiente",
            "right": "an outstanding question"
          },
          {
            "left": "un acuerdo de grupo",
            "right": "a group agreement"
          },
          {
            "left": "una experiencia útil",
            "right": "a useful experience"
          },
          {
            "left": "adaptar el plan",
            "right": "adapt the plan"
          },
          {
            "left": "comunicar un cambio",
            "right": "communicate a change"
          },
          {
            "left": "revisar el resultado",
            "right": "review the outcome"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Un plan claro de principio a fin",
    "explanation": [
      "Organiza la presentación en bloques: experiencia anterior, decisión, instrucciones y preguntas. Pronuncia despacio los horarios y destaca los cambios. Si el oyente pide repetición, reformula una parte concreta. Valora tu inteligibilidad con una persona; la grabación local no es una nota automática de pronunciación."
    ],
    "perceive": {
      "id": "pronunciation-perceive",
      "type": "listen",
      "prompt": "Escucha primero y decide; usa también el contexto.",
      "items": [
        {
          "audio": "La sala todavía no está reservada.",
          "q": "¿La reserva está confirmada?",
          "options": [
            "No",
            "Sí"
          ],
          "answer": 0,
          "why": "Escucha de nuevo la frase completa y compara el dato con su forma escrita."
        },
        {
          "audio": "Se las devolvemos el lunes.",
          "q": "¿Qué dato debes anotar?",
          "options": [
            "El día de devolución",
            "El precio de compra"
          ],
          "answer": 0,
          "why": "Escucha de nuevo la frase completa y compara el dato con su forma escrita."
        }
      ]
    },
    "produce": [
      {
        "text": "La sala se mantiene / pero todavía no está reservada.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      },
      {
        "text": "Confirmaremos hoy / antes de las doce.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      },
      {
        "text": "Las cajas se devuelven el lunes / en el centro.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      }
    ]
  },
  "listening": {
    "title": "La última información antes de decidir",
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
        "text": "He preguntado en el grupo. Dieciocho personas pueden venir el jueves. Cuatro solo pueden el sábado. La mayoría prefiere la biblioteca porque no depende del tiempo y tiene proyector."
      },
      {
        "speaker": "b",
        "text": "Yo también la prefiero, pero no quiero dejar fuera a las otras cuatro personas. ¿Podemos preparar un resumen y llevar algunos libros al centro el sábado? Sería una actividad más pequeña."
      },
      {
        "speaker": "a",
        "text": "Buena idea. Ana nos presta dos cajas para transportar los libros. Se las devolvemos el lunes. Acabo de hablar con la biblioteca: mantienen la sala hasta mañana a las doce, pero todavía no está reservada."
      },
      {
        "speaker": "b",
        "text": "Entonces tenemos que confirmar hoy. Antes de hacerlo, preguntemos si podemos colocar un cartel en la entrada. El año pasado algunas personas no vieron el aviso. También necesitamos explicar el horario de devolución."
      },
      {
        "speaker": "a",
        "text": "Me encargo del cartel. Si confirmamos esta tarde, lo imprimiré mañana y pasaré por el mercado para dejar otra copia."
      },
      {
        "speaker": "b",
        "text": "Antes de terminar, hay un detalle de la sala. La responsable me ha dicho que veinte sillas es el máximo. Ahora somos dieciocho, pero si vienen más personas no podemos añadir sillas junto a la puerta. Tendremos que ofrecerles la actividad del sábado."
      },
      {
        "speaker": "a",
        "text": "Entonces el cartel debe decir que hay que confirmar la asistencia. Podemos pedir que hablen con recepción. No hace falta publicar teléfonos personales ni una lista con nombres. Y quiero comprobar el proyector el miércoles, porque no conozco el ordenador del centro."
      },
      {
        "speaker": "b",
        "text": "Yo puedo acompañarte a probarlo. Llevaré una presentación corta y veremos si las imágenes se abren bien. Si no funciona, imprimiremos algunas fotografías con el dinero que queda. La conversación sobre los libros puede hacerse sin pantalla."
      },
      {
        "speaker": "a",
        "text": "Perfecto. Después de las dos actividades, reuniremos las opiniones de los participantes. Me interesa saber si recibieron el aviso a tiempo y si entendieron cuándo devolver los libros. Así tendremos información concreta para mejorar la próxima edición."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Primera escucha: busca la situación general sin abrir la transcripción.",
        "exercise": {
          "id": "listen-gist",
          "type": "choice",
          "prompt": "Escucha «La última información antes de decidir» y reconoce la intención.",
          "items": [
            {
              "q": "¿Cuál es la propuesta principal?",
              "options": [
                "Cancelar por falta de interés",
                "Biblioteca el jueves y una actividad pequeña el sábado",
                "Patio todos los días"
              ],
              "answer": 1,
              "why": "La información de la situación corresponde a «Biblioteca el jueves y una actividad pequeña el sábado»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Qué intenta hacer la propuesta del sábado?",
              "options": [
                "Devolver las cajas antes de usarlas",
                "Incluir a quienes no pueden asistir el jueves",
                "Sustituir toda la actividad de la biblioteca"
              ],
              "answer": 1,
              "why": "Comprueba el contexto y los datos de la escena: Incluir a quienes no pueden asistir el jueves."
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
          "prompt": "Localiza dos datos concretos en «La última información antes de decidir».",
          "items": [
            {
              "q": "¿Cuántas personas pueden venir el jueves?",
              "options": [
                "Dieciocho",
                "Veinte",
                "Cuatro"
              ],
              "answer": 0,
              "why": "La información de la situación corresponde a «Dieciocho»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Está reservada la sala?",
              "options": [
                "Sí, ya está pagada",
                "No está disponible",
                "No, falta confirmar"
              ],
              "answer": 2,
              "why": "La información de la situación corresponde a «No, falta confirmar»; comprueba la frase completa antes de volver a responder."
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
          "prompt": "Interpreta las palabras clave de «La última información antes de decidir».",
          "items": [
            {
              "q": "¿Qué problema anterior intenta resolver el cartel?",
              "options": [
                "La falta de libros",
                "El precio de las cajas",
                "La falta de información fuera de redes"
              ],
              "answer": 2,
              "why": "La información de la situación corresponde a «La falta de información fuera de redes»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Qué diferencia hay entre mantienen la sala y está reservada?",
              "options": [
                "La mantienen provisionalmente, pero falta confirmación",
                "Ambas expresiones aseguran que está pagada",
                "La sala ya no puede usarse"
              ],
              "answer": 0,
              "why": "Comprueba el contexto y los datos de la escena: La mantienen provisionalmente, pero falta confirmación."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "La próxima semana del barrio",
    "genre": "Dossier de organización",
    "frame": "Texto original de práctica en una situación ficticia.",
    "text": [
      "El año pasado organizamos una tarde de intercambio de libros. Había mucho interés, pero la sala era pequeña y algunas personas no encontraron sitio. Además, el aviso solo estaba en redes y varios vecinos se enteraron después. Este año queremos mejorar la organización sin gastar más de sesenta euros.",
      "Opción A: sala de la biblioteca, cuarenta euros por tres horas, veinte sillas, proyector incluido. Está cerca de dos paradas de autobús y tiene acceso sin escaleras. Solo está disponible el jueves de cinco a ocho. Opción B: patio del centro cultural, gratuito, treinta sillas, sin proyector. Puede usarse el sábado por la mañana, pero no hay espacio cubierto si llueve.",
      "Podemos pedir libros prestados a varias familias. Cada objeto debe tener una tarjeta con un alias y la fecha de devolución; no hacen falta datos de contacto públicos. La actividad debe incluir una presentación breve, tiempo para conversar y una recogida organizada. Antes de confirmar, necesitamos conocer cuántas personas pueden venir el jueves y quién puede prestar material si elegimos el patio.",
      "La responsable de la biblioteca explica que las veinte sillas son el límite de la sala. No se puede añadir otra fila junto a la puerta porque debe quedar libre. El proyector funciona con el ordenador del centro; antes de la actividad conviene enviar una presentación en un formato sencillo y probarla allí. No hace falta llevar una pantalla ni comprar material nuevo. Si usamos esta opción, podemos dedicar los veinte euros que quedan del presupuesto a imprimir carteles y tarjetas.",
      "Una vecina propone añadir una mesa de recomendaciones: cada participante escribe dos frases sobre un libro que ha leído y explica a quién puede gustarle. Quien todavía no ha terminado su libro puede contar de qué trata y qué espera encontrar después. No se valorará hablar sin ningún error; interesa que la otra persona comprenda la recomendación y pueda hacer una pregunta.",
      "Para revisar el resultado, el equipo guardará solo el número de asistentes y una lista de mejoras para la próxima vez. Al final preguntaremos si el horario fue cómodo, si los avisos llegaron a tiempo y si se entendieron las instrucciones para devolver los libros. No necesitamos una lista pública con datos personales. Después compararemos las respuestas del jueves con las del grupo pequeño del sábado. La siguiente actividad se decidirá a partir de esas dos experiencias, no solo de la opinión de quienes hablaron más en la reunión."
    ],
    "glossary": [
      {
        "es": "una propuesta final",
        "en": "a final proposal"
      },
      {
        "es": "un dato confirmado",
        "en": "a confirmed detail"
      },
      {
        "es": "una pregunta pendiente",
        "en": "an outstanding question"
      }
    ],
    "tasks": [
      {
        "id": "reading-choice",
        "type": "choice",
        "prompt": "Lee «La próxima semana del barrio» y localiza la evidencia para cada respuesta.",
        "items": [
          {
            "q": "¿Qué opción garantiza un proyector?",
            "options": [
              "Ninguna",
              "La biblioteca",
              "El patio"
            ],
            "answer": 1,
            "why": "La información de la situación corresponde a «La biblioteca»; comprueba la frase completa antes de volver a responder."
          },
          {
            "q": "¿Qué dato falta antes de elegir la biblioteca?",
            "options": [
              "Cuántas personas pueden asistir el jueves",
              "El precio de la sala",
              "El número de sillas"
            ],
            "answer": 0,
            "why": "La información de la situación corresponde a «Cuántas personas pueden asistir el jueves»; comprueba la frase completa antes de volver a responder."
          }
        ]
      },
      {
        "id": "reading-transfer",
        "type": "open",
        "prompt": "Usa la información de «La próxima semana del barrio» para otra persona.",
        "items": [
          {
            "prompt": "Resume el dato más útil del texto para esta misión: Organizar una actividad realista integrando experiencias, decisiones, gestiones y opiniones. Explica qué frase lo demuestra y qué pregunta harías después.",
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
          "quote": "El año pasado organizamos una tarde de intercambio de libros.",
          "note": "Explica qué información aporta esta frase y cómo prepara los datos siguientes. Después localiza una forma de la semana en este párrafo."
        },
        {
          "quote": "Opción A: sala de la biblioteca, cuarenta euros por tres horas, veinte sillas, proyector incluido.",
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
              "El",
              "año",
              "pasado",
              "llegamos",
              "tarde;",
              "por",
              "eso",
              "cambiaremos",
              "el",
              "punto",
              "de",
              "encuentro."
            ]
          },
          {
            "words": [
              "Le",
              "pedí",
              "el",
              "proyector",
              "a",
              "Ana",
              "y",
              "me",
              "lo",
              "prestó",
              "para",
              "la",
              "actividad."
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
              "La mantienen hasta mañana, pero todavía debemos confirmar.",
              "Sí, ya hemos pagado aunque no aparece ese dato.",
              "No podemos usar ninguna sala nunca."
            ],
            "answer": 0,
            "why": "Comprueba el contexto y los datos de la escena: La mantienen hasta mañana, pero todavía debemos confirmar..",
            "context": "El grupo cree que mantener la sala significa reserva confirmada.",
            "q": "¿Qué respuesta resuelve esta dificultad?"
          },
          {
            "context": "El profesor introduce un cambio: cinco asistentes más o un proyector averiado. Pide información, negocia una solución y comunica al grupo el acuerdo revisado.",
            "q": "En esta interacción de «Checkpoint final: una semana en común», ¿cómo compruebas que puedes continuar?",
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
            "prompt": "Para «Checkpoint final: una semana en común», escribe una apertura que sitúe a tu destinatario. Añade un dato nuevo elegido por ti.",
            "model": "El año pasado la sala era demasiado pequeña y algunos vecinos no vieron el aviso.",
            "checklist": [
              "Se entiende quién habla y por qué.",
              "Incluyes un dato concreto que no contradice la situación."
            ]
          },
          {
            "prompt": "Prepara una pregunta de seguimiento para esta interacción: El profesor introduce un cambio: cinco asistentes más o un proyector averiado. Pide información, negocia una solución y comunica al grupo el acuerdo revisado.",
            "model": "¿Puedes confirmar ese dato? Quiero comprobar que he entendido bien antes de continuar.",
            "checklist": [
              "La pregunta pide un dato útil para esta situación.",
              "Mantienes el mismo trato y respondes después a la información recibida."
            ]
          }
        ]
      },
      {
        "id": "retrieval-week-16",
        "type": "open",
        "prompt": "Recuperación sin mirar · semana 16. Usa un caso diferente de los textos anteriores.",
        "items": [
          {
            "prompt": "Reto de recuperación en la semana 20: Escribe y cuenta una decisión nueva de estudio o trabajo. Da causas con porque y como, consecuencias con por eso y así que, y pasos con antes de, después de, al + infinitivo y cuando + pasado. Incluye una entrevista o prácticas y marca con pausas las relaciones entre ideas.",
            "model": "Como quería cambiar de empleo, preparé una entrevista. Antes de enviar el formulario, lo revisé. Después de hablar con la encargada, acepté las prácticas. Cuando llegué, saludé al equipo. Aprendí mucho; por eso seguí allí.",
            "checklist": [
              "Resuelves todas las partes del reto con ejemplos propios.",
              "Después comparas con tus apuntes y corriges una forma o un dato."
            ]
          },
          {
            "prompt": "Comprueba la recuperación 16→20: cambia un dato de tu respuesta y reformula la parte afectada. Explica qué cambió a tu compañero.",
            "model": "En mi nueva versión cambia el lugar o la persona: Como quería cambiar de empleo, preparé una entrevista. Debo revisar también las referencias para que mi oyente entienda el cambio.",
            "checklist": [
              "El nuevo dato es coherente con el resto de la situación.",
              "Repites la parte necesaria y compruebas que el oyente lo entiende."
            ]
          }
        ]
      },
      {
        "id": "retrieval-week-17",
        "type": "open",
        "prompt": "Recuperación sin mirar · semana 17. Usa un caso diferente de los textos anteriores.",
        "items": [
          {
            "prompt": "Reto de recuperación en la semana 20: Un envío de un regalo está retrasado: explica para quién es, para qué lo compraste, para cuándo lo necesitas, por qué reclamas, por qué medio contactas y por dónde pasó el paquete. Escucha tres opciones que inventa tu pareja y elige la adecuada. Pronuncia seguimiento y devolución sin perder sílabas.",
            "model": "Compré una caja para mi abuelo, para guardar sus fotos. La necesito para el domingo. Reclamo por el retraso y envío el recibo por correo. El paquete pasó por otra ciudad. Quiero consultar el seguimiento antes de pedir la devolución.",
            "checklist": [
              "Resuelves todas las partes del reto con ejemplos propios.",
              "Después comparas con tus apuntes y corriges una forma o un dato."
            ]
          },
          {
            "prompt": "Comprueba la recuperación 17→20: cambia un dato de tu respuesta y reformula la parte afectada. Explica qué cambió a tu compañero.",
            "model": "En mi nueva versión cambia el lugar o la persona: Compré una caja para mi abuelo, para guardar sus fotos. Debo revisar también las referencias para que mi oyente entienda el cambio.",
            "checklist": [
              "El nuevo dato es coherente con el resto de la situación.",
              "Repites la parte necesaria y compruebas que el oyente lo entiende."
            ]
          }
        ]
      },
      {
        "id": "retrieval-week-18",
        "type": "open",
        "prompt": "Recuperación sin mirar · semana 18. Usa un caso diferente de los textos anteriores.",
        "items": [
          {
            "prompt": "Reto de recuperación en la semana 20: Describe un objeto sin nombrarlo: material, forma, uso y dos detalles con que. Sitúa el lugar con donde. Usa alguien, nadie, algo, nada, algún y ningún dentro de una búsqueda; comprueba coincidencias con dos avisos inventados. Alterna puedo/podemos y quiero/queremos al pedir ayuda. Identifica la propiedad con mío, tuyo y suyo; aclara suyo con de él o de ella.",
            "model": "Busco algo de metal que sirve para abrir botellas. Lo dejé donde esperamos el tren. ¿Alguien lo ha visto? No hay ningún nombre. Nadie sabe nada. ¿Tienen algún objeto parecido? Yo puedo describirlo y podemos comprobar los detalles. Esta funda es mía; aquella es tuya. La de la mesa es suya, de Elena.",
            "checklist": [
              "Resuelves todas las partes del reto con ejemplos propios.",
              "Después comparas con tus apuntes y corriges una forma o un dato."
            ]
          },
          {
            "prompt": "Comprueba la recuperación 18→20: cambia un dato de tu respuesta y reformula la parte afectada. Explica qué cambió a tu compañero.",
            "model": "En mi nueva versión cambia el lugar o la persona: Busco algo de metal que sirve para abrir botellas. Debo revisar también las referencias para que mi oyente entienda el cambio.",
            "checklist": [
              "El nuevo dato es coherente con el resto de la situación.",
              "Repites la parte necesaria y compruebas que el oyente lo entiende."
            ]
          }
        ]
      },
      {
        "id": "retrieval-week-19",
        "type": "open",
        "prompt": "Recuperación sin mirar · semana 19. Usa un caso diferente de los textos anteriores.",
        "items": [
          {
            "prompt": "Reto de recuperación en la semana 20: Da una opinión de dos minutos sobre transporte o redes con creo que, pienso que o me parece que. Aporta dos razones y un ejemplo. Pide turno, reconoce una razón contraria, discrepa con respeto y devuelve la palabra. Expresa una duda con depende y una pregunta de seguimiento; vuelve al tema si te desvías.",
            "model": "Creo que el aviso necesita un cartel porque no todos usan redes. Por ejemplo, mi vecina pregunta en la biblioteca. Entiendo tu razón, pero prefiero usar los dos medios. ¿Puedo añadir algo? Depende del horario. ¿Tú qué piensas?",
            "checklist": [
              "Resuelves todas las partes del reto con ejemplos propios.",
              "Después comparas con tus apuntes y corriges una forma o un dato."
            ]
          },
          {
            "prompt": "Comprueba la recuperación 19→20: cambia un dato de tu respuesta y reformula la parte afectada. Explica qué cambió a tu compañero.",
            "model": "En mi nueva versión cambia el lugar o la persona: Creo que el aviso necesita un cartel porque no todos usan redes. Debo revisar también las referencias para que mi oyente entienda el cambio.",
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
    "task": "Redacta un informe de 120–150 palabras para el equipo: experiencia anterior y consecuencia, opción elegida con dos razones, material prestado, instrucciones y una pregunta pendiente. Usa solo datos confirmados y señala lo provisional.",
    "context": "Escribe una primera versión propia; el modelo es una posibilidad, no un texto para copiar. Puedes usar datos ficticios.",
    "steps": [
      "Anota destinatario, propósito y tres datos necesarios.",
      "Organiza los datos en un orden que ayude a la otra persona.",
      "Escribe el borrador con apoyo de las expresiones útiles.",
      "Revisa si has respondido a todas las partes, corrige las formas y escribe una segunda versión."
    ],
    "useLanguage": [
      "El año pasado llegamos tarde; por eso cambiaremos el punto de encuentro.",
      "Buscamos la sala que tiene acceso sin escaleras.",
      "Le pedí el proyector a Ana y me lo prestó para la actividad.",
      "Si el grupo crece, preguntaremos por otra sala."
    ],
    "model": [
      "El año pasado la sala era demasiado pequeña y algunos vecinos no vieron el aviso. Por eso este año propongo la biblioteca el jueves de cinco a ocho. Cuesta cuarenta euros, tiene proyector y está bien comunicada. Dieciocho personas pueden asistir. Para las cuatro que solo pueden el sábado, prepararemos un resumen y llevaremos algunos libros al centro. Ana nos presta dos cajas y se las devolveremos el lunes. Antes de empezar, coloca una tarjeta en cada libro y comprueba la fecha de devolución. Todavía tenemos que confirmar la sala y preguntar si podemos poner un cartel en la entrada. Si confirmamos hoy, imprimiremos el aviso mañana. Creo que este plan permite participar a más personas sin superar el presupuesto."
    ],
    "checklist": [
      "El destinatario puede entender el propósito sin preguntar de qué hablas.",
      "Incluyes todos los datos pedidos y no inventas confirmaciones.",
      "Los verbos y pronombres se refieren a las personas y tiempos correctos.",
      "Relacionas las ideas y mantienes un trato coherente.",
      "Relees y corriges al menos una frase después de comparar con el modelo."
    ],
    "words": [
      120,
      150
    ]
  },
  "speaking": {
    "intro": "Planifica con palabras clave, no con un texto completo. Habla, escucha tu grabación local si quieres y repite una parte más claramente.",
    "tasks": [
      {
        "title": "Tu intervención con un propósito",
        "prompt": "Presenta en dos minutos el proyecto final con dos fuentes: dossier y llamada. Explica una experiencia pasada, compara opciones y justifica tu decisión.",
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
        "prompt": "El profesor introduce un cambio: cinco asistentes más o un proyector averiado. Pide información, negocia una solución y comunica al grupo el acuerdo revisado.",
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
        "task": "Presenta en dos minutos el proyecto final con dos fuentes: dossier y llamada. Explica una experiencia pasada, compara opciones y justifica tu decisión."
      },
      {
        "move": "Negocia",
        "task": "El profesor introduce un cambio: cinco asistentes más o un proyector averiado. Pide información, negocia una solución y comunica al grupo el acuerdo revisado."
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
        "q": "El aviso es ___ las personas que no usan redes.",
        "answers": [
          [
            "para"
          ]
        ]
      },
      {
        "type": "gap",
        "q": "No hay ___ confirmado todavía. (ningún objeto o dato)",
        "answers": [
          [
            "nada"
          ]
        ]
      },
      {
        "type": "error",
        "sentence": "Le las devolveremos el lunes.",
        "answers": [
          "Se las devolveremos el lunes."
        ],
        "why": "Le pasa a se cuando aparece delante de las."
      },
      {
        "type": "order",
        "words": [
          "Como",
          "faltaba",
          "espacio,",
          "cambiamos",
          "de",
          "sala."
        ]
      },
      {
        "type": "choice",
        "q": "¿Qué información no puedes presentar como confirmada?",
        "options": [
          "La reserva de la biblioteca",
          "El precio de cuarenta euros"
        ],
        "answer": 0,
        "why": "La opción elegida cumple la función comunicativa indicada."
      },
      {
        "q": "¿Qué harán si aumenta el grupo?",
        "options": [
          "Cerrar la actividad inmediatamente",
          "Quitar todas las sillas",
          "Preguntar por otra sala"
        ],
        "answer": 2,
        "why": "Comprueba el contexto y los datos de la escena: Preguntar por otra sala.",
        "type": "listen",
        "audio": "Si vienen más personas, preguntaremos por otra sala."
      },
      {
        "type": "open",
        "prompt": "Evaluación de transferencia 20: Presenta en dos minutos el proyecto final con dos fuentes: dossier y llamada. Explica una experiencia pasada, compara opciones y justifica tu decisión.",
        "model": "El año pasado la sala era demasiado pequeña y algunos vecinos no vieron el aviso. Por eso este año propongo la biblioteca el jueves de cinco a ocho. Cuesta cuarenta euros, tiene proyector y está bien comunicada. Dieciocho personas pueden asistir. Para las cuatro que solo pueden el sábado, prepararemos un resumen y llevaremos algunos libros al centro. Ana nos presta dos cajas y se las devolveremos el lunes. Antes de empezar, coloca una tarjeta en cada libro y comprueba la fecha de devolución. Todavía tenemos que confirmar la sala y preguntar si podemos poner un cartel en la entrada. Si confirmamos hoy, imprimiremos el aviso mañana. Creo que este plan permite participar a más personas sin superar el presupuesto.",
        "checklist": [
          "Cumples el propósito con datos comprensibles.",
          "Usas las formas de la semana y revisas una duda."
        ]
      },
      {
        "type": "open",
        "prompt": "Resolución final 20: El profesor introduce un cambio: cinco asistentes más o un proyector averiado. Pide información, negocia una solución y comunica al grupo el acuerdo revisado. Añade una pregunta para comprobar la respuesta.",
        "checklist": [
          "Reaccionas a lo que dice tu interlocutor.",
          "Confirmas el dato o el acuerdo antes de terminar."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Organizar una actividad realista integrando experiencias, decisiones, gestiones y opiniones.",
      "Seleccionar datos de una conversación y de un texto práctico.",
      "Producir un mensaje propio, revisarlo y responder a otra persona."
    ],
    "review": [
      "En dos días, repite la misión «Checkpoint final: una semana en común» con personas y datos diferentes.",
      "Antes de la próxima clase, recupera las expresiones sin mirar y comprueba después una duda.",
      "Compara tu primera versión con la revisada: ¿qué entiende mejor ahora tu interlocutor?"
    ]
  }
};
