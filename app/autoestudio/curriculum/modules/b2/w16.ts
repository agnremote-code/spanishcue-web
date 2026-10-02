import type { Module } from "../../types";

/** Original B2 material; see docs/autoestudio/b2-audit.md. */
export const b2w16: Module = {
  "id": "b2-16",
  "level": "b2",
  "week": 16,
  "kind": "core",
  "title": "La precisión también facilita el acceso",
  "subtitle": "Reformular conceptos y revisar colocaciones.",
  "stop": {
    "place": "Temuco",
    "country": "Chile"
  },
  "minutes": 120,
  "newObjectives": [
    "b2.voc.colocaciones",
    "b2.voc.formacion-palabras",
    "b2.gram.nominalizacion",
    "b2.pron.acento-derivados",
    "b2.wri.reescritura-precisa",
    "b2.fun.definir"
  ],
  "reviewObjectives": [
    "b2.gram.verbos-cambio-sistema",
    "b2.gram.ser-estar-matices",
    "b2.voc.personalidad",
    "b2.pron.chile",
    "b2.fun.describir-transformacion",
    "b2.lis.voces-chile",
    "b2.rev.checkpoint-3",
    "b2.read.dossier"
  ],
  "prerequisites": [
    "b2-15"
  ],
  "goal": {
    "canDo": "Puedo reformular conceptos y revisar colocaciones con razones, matices y condiciones claras.",
    "steps": [
      "Recupera decisiones lingüísticas anteriores y contrástalas con este caso.",
      "Escucha sin transcripción y reconstruye las posiciones: hacer comprensible un servicio sin prometer resultados ajenos.",
      "Lee las fuentes, identifica límites de la evidencia y prepara tu respuesta.",
      "Escribe, revisa y ensaya una interacción que continuarás con tu docente."
    ]
  },
  "theory": {
    "intro": "La mascota te propone una misión: reformular conceptos y revisar colocaciones. Decide qué quieres comunicar antes de elegir una forma.",
    "parts": [
      {
        "heading": "Reformular conceptos y revisar colocaciones",
        "body": [
          "Las colocaciones son combinaciones habituales: plantear un problema, adoptar una medida, sacar conclusiones. No se deducen siempre de sinónimos aislados. Los prefijos y sufijos ayudan a inferir significados, pero deben comprobarse en contexto: reutilización indica nuevo uso; inutilizable niega la posibilidad de utilizar."
        ],
        "examples": [
          {
            "es": "La comisión decidió adoptar una medida provisional.",
            "note": "Colocación habitual con medida."
          },
          {
            "es": "Revisar el contrato: la revisión del contrato.",
            "note": "Nominalización de revisar."
          },
          {
            "es": "Un envase que puede usarse otra vez es reutilizable.",
            "note": "Prefijo re- y sufijo -ble."
          }
        ],
        "mistakes": [
          {
            "wrong": "Debemos hacer una conclusión basada en el folleto.",
            "right": "Debemos sacar una conclusión basada en el folleto.",
            "why": "Sacar una conclusión es la colocación idiomática."
          }
        ]
      },
      {
        "heading": "Interpretación, registro y efecto",
        "body": [
          "La nominalización convierte una acción en un nombre: se revisó el acuerdo, la revisión del acuerdo. Puede condensar y enlazar ideas, pero varias nominalizaciones seguidas ocultan agentes y dificultan la lectura. Define un concepto con categoría, rasgo distintivo y ejemplo; después comprueba qué relación se perdió al resumir."
        ],
        "examples": [
          {
            "es": "La comisión decidió adoptar una medida provisional.",
            "note": "Explica qué información afirma y cuál deja abierta."
          },
          {
            "es": "Un envase que puede usarse otra vez es reutilizable.",
            "note": "Reformula sin cambiar participantes ni tiempo."
          }
        ]
      }
    ]
  },
  "grammar": {
    "intro": "Elige formas por su función y por el momento desde el que se habla.",
    "exercises": [
      {
        "id": "g-contexto",
        "type": "gap",
        "prompt": "Completa estas decisiones lingüísticas de la precisión también facilita el acceso; justifica el modo, la forma o la combinación.",
        "items": [
          {
            "q": "La comisión decidió ___ una medida provisional.",
            "answers": [
              [
                "adoptar"
              ]
            ],
            "why": "Colocación habitual con medida."
          },
          {
            "q": "Revisar el contrato: la ___ del contrato.",
            "answers": [
              [
                "revisión"
              ]
            ],
            "why": "Nominalización de revisar."
          },
          {
            "q": "Un envase que puede usarse otra vez es ___.",
            "answers": [
              [
                "reutilizable"
              ]
            ],
            "why": "Prefijo re- y sufijo -ble."
          }
        ]
      },
      {
        "id": "g-reconstruir",
        "type": "open",
        "prompt": "Reformula con autonomía. Lee el texto de partida y la consigna de cada ítem; después contrasta tu respuesta con el modelo orientativo y la lista de revisión. Otras soluciones pueden ser válidas.",
        "items": [
          {
            "prompt": "Texto de partida: «La oficina revisó el formulario y eso evitó errores.» Nominaliza revisar sin perder el efecto.",
            "model": "La revisión del formulario evitó errores.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          },
          {
            "prompt": "Texto de partida: «Hicimos una medida para aclarar la inscripción.» Sustituye el verbo comodín por una colocación adecuada.",
            "model": "Adoptamos una medida para aclarar la inscripción.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          },
          {
            "prompt": "Texto de partida: «El envase puede utilizarse otra vez.» Condensa con un adjetivo formado por prefijo y sufijo.",
            "model": "El envase es reutilizable.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Aprende combinaciones en contexto y comprueba qué matiz aportan al caso.",
    "groups": [
      {
        "title": "Reformular conceptos y revisar colocaciones",
        "items": [
          {
            "es": "plantear un problema",
            "note": "formular una dificultad"
          },
          {
            "es": "adoptar medidas",
            "note": "decidir acciones concretas"
          },
          {
            "es": "sacar conclusiones",
            "note": "deducir resultados"
          },
          {
            "es": "prestar atención",
            "note": "concentrarse en algo"
          },
          {
            "es": "llevar a cabo",
            "note": "realizar una acción"
          },
          {
            "es": "dar por concluido",
            "note": "considerar terminado"
          },
          {
            "es": "poner de manifiesto",
            "note": "hacer evidente"
          },
          {
            "es": "tomar una decisión",
            "note": "elegir entre alternativas"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "v-relaciones",
        "type": "match",
        "prompt": "Relaciona las expresiones útiles para reformular conceptos y revisar colocaciones con su significado.",
        "pairs": [
          {
            "left": "plantear un problema",
            "right": "formular una dificultad"
          },
          {
            "left": "adoptar medidas",
            "right": "decidir acciones concretas"
          },
          {
            "left": "sacar conclusiones",
            "right": "deducir resultados"
          },
          {
            "left": "prestar atención",
            "right": "concentrarse en algo"
          },
          {
            "left": "llevar a cabo",
            "right": "realizar una acción"
          },
          {
            "left": "dar por concluido",
            "right": "considerar terminado"
          },
          {
            "left": "poner de manifiesto",
            "right": "hacer evidente"
          },
          {
            "left": "tomar una decisión",
            "right": "elegir entre alternativas"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Practica carácter/caracteres, régimen/regímenes y claramente: en -mente conserva la prominencia de la base y evita mover todos los acentos por analogía.",
    "explanation": [
      "Practica carácter/caracteres, régimen/regímenes y claramente: en -mente conserva la prominencia de la base y evita mover todos los acentos por analogía.",
      "Escucha primero la secuencia verbal. Después lee la misma frase con una intención distinta, grábate localmente y compara con tu docente. La voz sintética es apoyo de escucha: no certifica variedad regional, ironía ni evaluación automática de tu pronunciación."
    ],
    "examples": [
      {
        "es": "La comisión decidió adoptar una medida provisional."
      },
      {
        "es": "Revisar el contrato: la revisión del contrato."
      },
      {
        "es": "Un envase que puede usarse otra vez es reutilizable."
      }
    ],
    "perceive": {
      "id": "p-percepcion",
      "type": "listen",
      "prompt": "Escucha sin leer el ejemplo previo si quieres comprobar tu percepción; identifica el fragmento verbal y después marca su sílaba tónica.",
      "items": [
        {
          "q": "En la muestra 1 de la precisión también facilita el acceso, ¿qué fragmento se oye?",
          "options": [
            "hacer",
            "prestar",
            "adoptar"
          ],
          "answer": 2,
          "why": "Colocación habitual con medida.",
          "audio": "La comisión decidió adoptar una medida provisional.",
          "voice": "es-ES-f"
        },
        {
          "q": "En la muestra 2 de la precisión también facilita el acceso, ¿qué fragmento se oye?",
          "options": [
            "revisor",
            "revisión",
            "revisado"
          ],
          "answer": 1,
          "why": "Nominalización de revisar.",
          "audio": "Revisar el contrato: la revisión del contrato.",
          "voice": "es-ES-f"
        }
      ]
    },
    "produce": [
      {
        "text": "La comisión decidió adoptar una medida provisional.",
        "tip": "Practica carácter/caracteres, régimen/regímenes y claramente: en -mente conserva la prominencia de la base y evita mover todos los acentos por analogía.",
        "voice": "es-ES-f"
      },
      {
        "text": "Revisar el contrato: la revisión del contrato.",
        "tip": "Practica carácter/caracteres, régimen/regímenes y claramente: en -mente conserva la prominencia de la base y evita mover todos los acentos por analogía.",
        "voice": "es-ES-f"
      },
      {
        "text": "Un envase que puede usarse otra vez es reutilizable.",
        "tip": "Practica carácter/caracteres, régimen/regímenes y claramente: en -mente conserva la prominencia de la base y evita mover todos los acentos por analogía.",
        "voice": "es-ES-f"
      }
    ]
  },
  "listening": {
    "title": "Voces y decisiones: La precisión también facilita el acceso",
    "context": "Guion original de interacción. Primera escucha sin transcripción: identifica propósito y posiciones; segunda: datos y condiciones; tercera: inferencias. Reproducción sintética, sin verificación de acento regional.",
    "speakers": [
      {
        "id": "s1",
        "name": "Orientadora",
        "voice": "es-ES-f",
        "role": "Interlocutor del guion original; voz sintética disponible"
      },
      {
        "id": "s2",
        "name": "Redactor",
        "voice": "es-MX-m",
        "role": "Interlocutor del guion original; voz sintética disponible"
      },
      {
        "id": "s3",
        "name": "Usuaria",
        "voice": "es-ES-f",
        "role": "Interlocutor del guion original; voz sintética disponible"
      }
    ],
    "script": [
      {
        "speaker": "s1",
        "text": "Tenemos que revisar la frase sobre la optimización de la intermediación. Quienes participaron en la prueba no pudieron decir qué debían hacer después de leerla. ¿Podemos explicar el servicio con un verbo y una persona responsable sin perder información importante?"
      },
      {
        "speaker": "s2",
        "text": "Propongo: una orientadora revisará tu experiencia y te ayudará a contactar con empresas. Después podemos definir intermediación en un recuadro. Me preocupa que eliminar todos los términos técnicos dificulte reconocerlos cuando aparezcan en formularios de otras instituciones."
      },
      {
        "speaker": "s3",
        "text": "A mí me sirve que la palabra esté si se explica. Lo que me confundió fue inscripción. Pensé que, al inscribirme, ya estaba seleccionada para el curso. Necesitaba un ejemplo de las dos etapas y una indicación clara de cuándo recibiría una respuesta."
      },
      {
        "speaker": "s1",
        "text": "Entonces añadiremos que inscribirse permite participar en el proceso, pero no garantiza una plaza. También debemos corregir la promesa de mejorar el futuro. Podemos comprometernos a revisar una candidatura; no podemos decidir por una empresa ni asegurar un resultado laboral."
      },
      {
        "speaker": "s2",
        "text": "Hay otra frase: hacer conclusiones después de la entrevista. La combinación habitual sería sacar conclusiones, aunque quizá convenga precisar cuáles. Podríamos decir que identificaremos dos aspectos que mejorar y un siguiente paso. Así evitamos una fórmula correcta pero demasiado general."
      },
      {
        "speaker": "s3",
        "text": "Eso me ayuda más. No necesito que el folleto suene informal ni que me trate como si no entendiera nada. Necesito saber qué ofrece, qué espera de mí y qué decisiones dependen de otras personas. Si conserva esos límites, puedo organizarme con más autonomía."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha la conversación completa; identifica el problema y la intención antes de buscar palabras aisladas.",
        "exercise": {
          "id": "l-global",
          "type": "choice",
          "prompt": "¿Qué organiza la conversación situada en Temuco?",
          "items": [
            {
              "q": "¿Cuál es el propósito global de esta conversación: La precisión también facilita el acceso?",
              "options": [
                "Leer una lista de instrucciones sin responder a nadie.",
                "Contar una única versión sin permitir preguntas.",
                "Hacer comprensible un servicio sin prometer resultados ajenos"
              ],
              "answer": 2,
              "why": "Las intervenciones se responden y matizan sus posiciones."
            },
            {
              "q": "¿Qué relación predomina entre las voces en «La precisión también facilita el acceso»?",
              "options": [
                "Ninguna intervención tiene relación con la anterior.",
                "Las personas aclaran interpretaciones y conservan algunos límites.",
                "Todas repiten exactamente la misma opinión desde el inicio."
              ],
              "answer": 1,
              "why": "Identifica un turno que responda al anterior."
            }
          ]
        }
      },
      {
        "stage": "detail",
        "prompt": "Escucha otra vez y anota quién sostiene cada afirmación.",
        "exercise": {
          "id": "l-detalle",
          "type": "choice",
          "prompt": "Localiza una intervención concreta en «La precisión también facilita el acceso».",
          "items": [
            {
              "q": "¿Qué confusión tuvo la usuaria?",
              "options": [
                "No sabía que trabajaban orientadoras.",
                "Equiparó inscripción y selección.",
                "Pensó que no existía un curso."
              ],
              "answer": 1,
              "why": "La respuesta conserva la condición o información expresada por esa persona."
            },
            {
              "q": "¿Qué frase aparece en la intervención inicial de «La precisión también facilita el acceso»?",
              "options": [
                "Tenemos que revisar la frase sobre la optimización de la intermediación.",
                "Ya está todo decidido y no necesitamos escuchar a ninguna parte.",
                "No hay información que podamos discutir en esta reunión."
              ],
              "answer": 0,
              "why": "Vuelve al inicio y comprueba la formulación exacta."
            }
          ]
        }
      },
      {
        "stage": "notice",
        "prompt": "Distingue lo dicho de lo inferido; consulta la transcripción solo después de responder.",
        "exercise": {
          "id": "l-inferencia",
          "type": "open",
          "prompt": "Interpreta postura, reserva y efecto sobre la otra persona.",
          "items": [
            {
              "prompt": "En «La precisión también facilita el acceso», cita una reserva o una reformulación del diálogo, explica qué interpretación evita y qué quedaría sin resolver si se omitiera.",
              "model": "Eso me ayuda más. No necesito que el folleto suene informal ni que me trate como si no entendiera nada. Necesito saber qué ofrece, qué espera de mí y qué decisiones dependen de otras personas. Si conserva esos límites, puedo organizarme con más autonomía.",
              "checklist": [
                "Atribuyo la intervención a su hablante.",
                "Distingo palabras explícitas e inferencia.",
                "Conservo una condición o un límite de la conversación."
              ]
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "La precisión también facilita el acceso: texto para interpretar",
    "genre": "Artículo, correspondencia o relato original",
    "frame": "Material original de SpanishCue; las situaciones y los datos son didácticos, no noticias reales ni textos oficiales de examen.",
    "text": [
      "El folleto de la oficina de empleo anunciaba «la implementación de mecanismos de optimización de la intermediación». Varias personas lo leyeron sin poder explicar qué servicio se ofrecía. La oficina no había inventado palabras ni cometido errores gramaticales. Había acumulado nombres abstractos hasta ocultar la acción principal: ayudar a que quienes buscan trabajo contacten con empresas. La precisión administrativa no siempre coincide con la claridad para la persona que necesita utilizar un servicio.",
      "Un equipo revisó el texto con usuarios del centro. Sustituyó algunas nominalizaciones por verbos e identificó agentes: «Una orientadora revisará tu experiencia y te ayudará a preparar una candidatura». No eliminó todos los términos técnicos. Conservó intermediación en un apartado donde se definía y se diferenciaba de formación. Aprender una palabra nueva puede ser útil si el contexto permite comprenderla; cambiarla por una expresión vaga no mejora necesariamente el texto. El objetivo era reducir obstáculos, no empobrecer el contenido.",
      "La revisión también detectó colocaciones poco naturales, como «hacer una conclusión», y promesas imprecisas, como «garantizamos mejorar tu futuro». La primera se cambió por sacar una conclusión; la segunda se reformuló para describir acciones que la oficina sí podía cumplir. Un servicio puede revisar un currículo y ofrecer información, pero no asegurar que una empresa contrate a cada participante. La elección de palabras influye en las expectativas y, por tanto, en la confianza que una institución puede sostener.",
      "La nueva versión fue más breve, aunque no en todos sus apartados. Explicar la diferencia entre inscripción y selección exigió añadir un ejemplo. Esa ampliación evitó que las personas interpretaran su registro como aceptación automática en un programa. La claridad no se mide únicamente contando palabras: también importa cuántas inferencias se exige hacer al lector. Un texto preciso permite actuar, distingue conceptos cercanos y hace visibles los límites de lo que promete."
    ],
    "glossary": [
      {
        "es": "plantear un problema",
        "note": "formular una dificultad"
      },
      {
        "es": "adoptar medidas",
        "note": "decidir acciones concretas"
      },
      {
        "es": "sacar conclusiones",
        "note": "deducir resultados"
      }
    ],
    "tasks": [
      {
        "id": "r-comprender",
        "type": "choice",
        "prompt": "Interpreta tesis y alcance; descarta respuestas que exageren la conclusión.",
        "items": [
          {
            "q": "¿Cómo define la claridad el artículo?",
            "options": [
              "Por eliminar todo término técnico.",
              "Por utilizar únicamente nombres abstractos.",
              "Por la posibilidad de comprender y actuar, no solo por la brevedad."
            ],
            "answer": 2,
            "why": "Comprueba esta interpretación con el texto completo y no solo con una palabra aislada."
          },
          {
            "q": "¿Por qué cambia la promesa sobre el futuro?",
            "options": [
              "No contenía ninguna nominalización.",
              "Describía un resultado que la oficina no podía garantizar.",
              "Era demasiado corta para un folleto."
            ],
            "answer": 1,
            "why": "Comprueba esta interpretación con el texto completo y no solo con una palabra aislada."
          }
        ]
      },
      {
        "id": "r-evidencia",
        "type": "open",
        "prompt": "Apoya tu lectura con evidencia y distingue la postura de la fuente de la tuya.",
        "items": [
          {
            "prompt": "En «La precisión también facilita el acceso», resume dos posiciones en 60–80 palabras, cita una evidencia y explica un límite que el texto no permite resolver.",
            "model": "La inscripción permite participar en la selección, pero no garantiza una plaza. Una orientadora revisará tu experiencia y te ayudará a preparar la candidatura. Esta intermediación facilita el contacto con empresas; la decisión de contratar corresponde a cada empresa. He sustituido dos nominalizaciones por acciones con responsable y he añadido un ejemplo de las etapas. Conservo el término técnico porque será útil en otros documentos, pero lo explico antes de pedir al lector que actúe.",
            "checklist": [
              "Identifico las dos posiciones sin inventar consenso.",
              "Utilizo una evidencia concreta.",
              "Marco una inferencia como tal."
            ]
          }
        ]
      }
    ],
    "noticing": {
      "prompt": "Observa cómo la forma lingüística limita o precisa el mensaje.",
      "items": [
        {
          "quote": "El folleto de la oficina de empleo anunciaba «la implementación de mecanismos de optimización de la intermediación».",
          "note": "Identifica qué establece el inicio y cómo prepara la interpretación posterior."
        },
        {
          "quote": "Un texto preciso permite actuar, distingue conceptos cercanos y hace visibles los límites de lo que promete.",
          "note": "Relaciona el cierre con la tesis o con el giro narrativo; explica qué no afirma."
        }
      ]
    }
  },
  "practice": {
    "intro": "Reescribe un párrafo del informe de la plaza: mejora colocaciones, atribuye agentes y conserva el grado de certeza y la condición.",
    "exercises": [
      {
        "id": "x-orden",
        "type": "order",
        "prompt": "Reconstruye los mensajes del caso de Temuco y conserva sus relaciones.",
        "items": [
          {
            "words": [
              "En",
              "«La precisión también facilita el acceso»,",
              "La",
              "comisión",
              "decidió",
              "adoptar",
              "una",
              "medida",
              "provisional."
            ],
            "why": "Colocación habitual con medida."
          },
          {
            "words": [
              "En",
              "«La precisión también facilita el acceso»,",
              "Un",
              "envase",
              "que",
              "puede",
              "usarse",
              "otra",
              "vez",
              "es",
              "reutilizable."
            ],
            "why": "Prefijo re- y sufijo -ble."
          }
        ]
      },
      {
        "id": "x-edicion",
        "type": "error",
        "prompt": "Revisa tres borradores de la precisión también facilita el acceso; cada uno tiene un único error deliberado.",
        "items": [
          {
            "sentence": "Debemos hacer una conclusión basada en el folleto.",
            "answers": [
              "Debemos sacar una conclusión basada en el folleto."
            ],
            "why": "Sacar una conclusión es la colocación idiomática."
          },
          {
            "sentence": "Debemos prestar de atención a las instrucciones.",
            "answers": [
              "Debemos prestar atención a las instrucciones."
            ],
            "why": "La colocación no lleva de."
          },
          {
            "sentence": "La revisión el formulario evitó la confusión.",
            "answers": [
              "La revisión del formulario evitó la confusión."
            ],
            "why": "La nominalización revisión introduce su complemento mediante de."
          }
        ]
      },
      {
        "id": "x-produccion",
        "type": "open",
        "prompt": "Prepara dos fragmentos antes de tu entrega independiente; el modelo es una posibilidad, no una respuesta única.",
        "items": [
          {
            "prompt": "Abre tu respuesta sobre reformular conceptos y revisar colocaciones con una postura y una razón; adapta el destinatario.",
            "model": "La inscripción permite participar en la selección, pero no garantiza una plaza.",
            "checklist": [
              "Presento una postura concreta.",
              "Ajusto el registro a quien recibirá el mensaje."
            ]
          },
          {
            "prompt": "Reformula una objeción o una reserva de «La precisión también facilita el acceso» sin debilitarla, y responde con una condición verificable.",
            "model": "La inscripción permite participar en la selección, pero no garantiza una plaza. Una orientadora revisará tu experiencia y te ayudará a preparar la candidatura. Esta intermediación facilita el contacto con empresas; la decisión de contratar corresponde a cada empresa. He sustituido dos nominalizaciones por acciones con responsable y he añadido un ejemplo de las etapas. Conservo el término técnico porque será útil en otros documentos, pero lo explico antes de pedir al lector que actúe.",
            "checklist": [
              "La objeción conserva su sentido.",
              "Mi respuesta no promete lo que no controlo."
            ]
          }
        ]
      },
      {
        "id": "x-recuperacion",
        "type": "open",
        "prompt": "Recuperación espaciada: selecciona y produce los recursos señalados sin mirar sus explicaciones. En el checkpoint distribúyelos entre informe y ensayo oral.",
        "items": [
          {
            "prompt": "Recupera la semana 13 sin abrir su explicación y aplica sus recursos a «La precisión también facilita el acceso»: El sistema de los verbos de cambio; Ser y estar: matices de percepción; Personalidad y transformaciones; Rasgos del español de Chile; Describir una transformación; Comprender una conversación sobre cambio y variación chilena. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo elegir entre ponerse, volverse, hacerse, convertirse en, llegar a ser y quedarse. Puedo usar estar para percepciones y cambios: está muy joven, está carísimo. Puedo describir rasgos de carácter con matices. Puedo describir rasgos variables del habla chilena y contrastarlos con una muestra real en clase, sin atribuirlos a una voz sintética. Puedo contar cómo cambió una persona o un lugar y valorarlo. Puedo seguir posiciones sobre cambios sociales y explicar marcadores locales; contrasto la fonética chilena con una muestra real en clase.",
            "checklist": [
              "Integro los recursos indicados en una respuesta al caso actual.",
              "Conservo personas, tiempo, postura y límites de las fuentes.",
              "Marco una elección que tuve que corregir después de comprobarla."
            ]
          },
          {
            "prompt": "Recupera la semana 15 sin abrir su explicación y aplica sus recursos a «La precisión también facilita el acceso»: Checkpoint 3: argumentar y especular; Leer un dossier. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo argumentar, especular sobre el pasado, describir cambios y asumir responsabilidad. Puedo comparar posturas en varios textos breves sobre un mismo tema.",
            "checklist": [
              "Integro los recursos indicados en una respuesta al caso actual.",
              "Conservo personas, tiempo, postura y límites de las fuentes.",
              "Marco una elección que tuve que corregir después de comprobarla."
            ]
          }
        ]
      }
    ]
  },
  "writing": {
    "task": "Reescribe un folleto institucional para personas nuevas en el servicio. Define dos conceptos cercanos, sustituye verbos vagos por colocaciones precisas y justifica tres decisiones de revisión en una nota final.",
    "context": "Destinatario, propósito y límites de la información forman parte de la evaluación. El modelo muestra una respuesta completa posible: analiza su organización y escribe después tu propio texto.",
    "steps": [
      "Extrae dos datos y dos posiciones de las fuentes; marca lo que no está confirmado.",
      "Planifica apertura, desarrollo, objeción o complicación y cierre antes de redactar.",
      "Escribe sin copiar el modelo; integra recursos nuevos y los recuperados.",
      "Revisa referentes, modo, tiempo, colocaciones y registro; reescribe un párrafo y explica el cambio."
    ],
    "useLanguage": [
      "Las colocaciones son combinaciones habituales: plantear un problema, adoptar una medida, sacar conclusiones. No se deducen siempre de sinónimos aislados. Los prefijos y sufijos ayudan a inferir significados, pero deben comprobarse en contexto: reutilización indica nuevo uso; inutilizable niega la posibilidad de utilizar.",
      "La nominalización convierte una acción en un nombre: se revisó el acuerdo, la revisión del acuerdo. Puede condensar y enlazar ideas, pero varias nominalizaciones seguidas ocultan agentes y dificultan la lectura. Define un concepto con categoría, rasgo distintivo y ejemplo; después comprueba qué relación se perdió al resumir.",
      "Reescribe un párrafo del informe de la plaza: mejora colocaciones, atribuye agentes y conserva el grado de certeza y la condición."
    ],
    "model": [
      "La oficina te ayuda a preparar una candidatura y a conocer ofertas de empleo. Una orientadora revisará tu experiencia, identificará contigo aspectos que puedes mejorar y acordará un siguiente paso. Este servicio se llama intermediación: facilita el contacto entre personas que buscan trabajo y empresas. No equivale a formación, aunque la orientadora puede informarte sobre cursos si necesitas desarrollar una competencia.",
      "Para participar en un curso, primero debes inscribirte. La inscripción permite entrar en el proceso de selección, pero no garantiza una plaza. Por ejemplo, puedes registrar tu solicitud hoy y recibir después una petición de documentación. Solo cuando termine la selección sabrás si has sido admitido. La oficina indicará el plazo de respuesta y el canal por el que te comunicará el resultado.",
      "Tampoco podemos prometer que una empresa te contrate. Sí podemos comprometernos a revisar tu candidatura y explicarte las condiciones conocidas de una oferta. La decisión final corresponde a cada empresa. Si una condición no está clara, pide una aclaración antes de enviar información adicional. Nuestro objetivo es que puedas tomar una decisión con datos suficientes, no crear expectativas sobre resultados que otras personas controlan.",
      "Nota de revisión: he sustituido dos nominalizaciones por verbos con una persona responsable para hacer visible quién actúa. Conservo intermediación porque aparecerá en otros documentos, pero la defino y la diferencio de formación. Finalmente, añado un ejemplo que separa inscripción y selección. El texto crece en ese punto, aunque reduce una confusión que podría llevar a interpretar una solicitud como una aceptación definitiva."
    ],
    "checklist": [
      "Respondo al propósito y al destinatario concreto.",
      "Organizo párrafos con relaciones claras, no conectores decorativos.",
      "Distingo datos, opiniones, hipótesis y compromisos.",
      "Integro una perspectiva distinta sin deformarla.",
      "Reviso concordancia, modo, tiempos y léxico.",
      "Explico una mejora entre borrador y versión final."
    ],
    "words": [
      220,
      280
    ]
  },
  "speaking": {
    "intro": "Prepara notas breves, no un texto para leer. Puedes grabarte localmente; la aplicación no califica automáticamente pronunciación ni calidad oral.",
    "tasks": [
      {
        "title": "Exposición con evidencia",
        "prompt": "Presenta el caso de «La precisión también facilita el acceso» a alguien que no conoce las fuentes. Defiende una interpretación, menciona una evidencia y una reserva, y termina con una pregunta que permita continuar.",
        "prep": [
          "Anota tesis, evidencia y límite en cinco palabras clave.",
          "Ensaya una transición y una reformulación."
        ],
        "seconds": 180,
        "model": "La inscripción permite participar en la selección, pero no garantiza una plaza. Una orientadora revisará tu experiencia y te ayudará a preparar la candidatura. Esta intermediación facilita el contacto con empresas; la decisión de contratar corresponde a cada empresa. He sustituido dos nominalizaciones por acciones con responsable y he añadido un ejemplo de las etapas. Conservo el término técnico porque será útil en otros documentos, pero lo explico antes de pedir al lector que actúe.",
        "selfCheck": [
          "Se entiende mi postura sin leer un guion.",
          "No convierto una conjetura en hecho.",
          "Uso pausas para organizar el mensaje."
        ]
      },
      {
        "title": "Interacción y mediación",
        "prompt": "Tu docente representa a una persona que cuestiona tu interpretación de reformular conceptos y revisar colocaciones. Resume su postura antes de responder. Pregunta qué condición cambiaría su opinión; negocia un acuerdo parcial o explica respetuosamente por qué no lo hay.",
        "prep": [
          "Prepara una objeción probable y una pregunta de aclaración.",
          "Incorpora una pregunta inesperada: ¿qué evidencia haría cambiar tu conclusión?",
          "Al terminar, reformula en un minuto el resultado para una persona nueva."
        ],
        "seconds": 240,
        "selfCheck": [
          "Respondo a la objeción real.",
          "Pido y cedo el turno.",
          "Adapto una explicación sin inventar consenso."
        ]
      }
    ]
  },
  "useInClass": {
    "intro": "La mascota te acompaña al siguiente paso: convierte tu trabajo independiente en una conversación con consecuencias claras.",
    "cards": [
      {
        "move": "Defiende",
        "task": "Presenta tu entrega de «La precisión también facilita el acceso» en tres minutos y responde a una objeción inesperada.",
        "phrases": [
          "Mi interpretación se apoya en…",
          "La reserva que mantengo es…"
        ]
      },
      {
        "move": "Reformula",
        "task": "Explica a otra persona lo que sostiene una voz del caso de Temuco; pídele a tu docente que compruebe si has conservado el matiz.",
        "phrases": [
          "Si te he entendido bien…",
          "No afirma que…; lo que plantea es…"
        ]
      },
      {
        "move": "Negocia",
        "task": "Acuerda un criterio para valorar tu propuesta sobre reformular conceptos y revisar colocaciones; identifica una condición que todavía necesita confirmación.",
        "phrases": [
          "Lo aceptaría siempre que…",
          "Queda pendiente comprobar…"
        ]
      }
    ],
    "bring": "Lleva borrador y versión revisada, cinco palabras clave para hablar y una duda de comprensión o prosodia."
  },
  "quiz": {
    "items": [
      {
        "q": "En la evaluación final de «La precisión también facilita el acceso», ¿qué resume mejor el propósito?",
        "options": [
          "Sustituir toda evidencia por una opinión rotunda.",
          "Evitar cualquier intercambio entre personas.",
          "Hacer comprensible un servicio sin prometer resultados ajenos"
        ],
        "answer": 2,
        "why": "Relaciona comprensión y propósito.",
        "type": "choice"
      },
      {
        "type": "listen",
        "audio": "Propongo: una orientadora revisará tu experiencia y te ayudará a contactar con empresas. Después podemos definir intermediación en un recuadro. Me preocupa que eliminar todos los términos técnicos dificulte reconocerlos cuando aparezcan en formularios de otras instituciones.",
        "voice": "es-MX-m",
        "q": "Al escuchar de nuevo a Redactor en «La precisión también facilita el acceso», ¿qué intervención reconoces?",
        "options": [
          "No hay ninguna condición pendiente y todas las partes aceptaron.",
          "Me niego a explicar mi punto de vista sobre este asunto.",
          "Propongo: una orientadora revisará tu experiencia y te ayudará a contactar con empresas"
        ],
        "answer": 2,
        "why": "Atiende a la formulación y a la posición, no solo al tema."
      },
      {
        "type": "gap",
        "q": "El comité acordó ___ a cabo una revisión.",
        "answers": [
          [
            "llevar"
          ]
        ],
        "why": "Colocación llevar a cabo."
      },
      {
        "type": "open",
        "prompt": "Texto de partida: «El equipo mejoró las instrucciones y eso facilitó el acceso.» Nominaliza mejorar.",
        "model": "La mejora de las instrucciones facilitó el acceso.",
        "checklist": [
          "Conservo participantes, referencia temporal y contenido pertinente.",
          "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
          "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
        ]
      },
      {
        "type": "error",
        "sentence": "Hay que tomar atención a las condiciones de selección.",
        "answers": [
          "Hay que prestar atención a las condiciones de selección."
        ],
        "why": "Revisa la función, la construcción y la coherencia con el contexto; compara con el modelo de corrección."
      },
      {
        "type": "open",
        "prompt": "Sintetiza en 50 palabras lo que sabes y lo que no puedes concluir sobre «La precisión también facilita el acceso».",
        "model": "La inscripción permite participar en la selección, pero no garantiza una plaza. Una orientadora revisará tu experiencia y te ayudará a preparar la candidatura. Esta intermediación facilita el contacto con empresas; la decisión de contratar corresponde a cada empresa. He sustituido dos nominalizaciones por acciones con responsable y he añadido un ejemplo de las etapas. Conservo el término técnico porque será útil en otros documentos, pero lo explico antes de pedir al lector que actúe.",
        "checklist": [
          "Atribuyo una fuente.",
          "Explicito una reserva."
        ]
      },
      {
        "type": "open",
        "prompt": "Contesta a quien sostiene lo contrario de tu postura sobre reformular conceptos y revisar colocaciones; concede una razón y conserva tu argumento.",
        "model": "La inscripción permite participar en la selección, pero no garantiza una plaza. Una orientadora revisará tu experiencia y te ayudará a preparar la candidatura. Esta intermediación facilita el contacto con empresas; la decisión de contratar corresponde a cada empresa. He sustituido dos nominalizaciones por acciones con responsable y he añadido un ejemplo de las etapas. Conservo el término técnico porque será útil en otros documentos, pero lo explico antes de pedir al lector que actúe.",
        "checklist": [
          "Conservo la postura contraria sin exagerarla.",
          "Respondo con una razón o condición."
        ]
      },
      {
        "type": "open",
        "prompt": "Explica dos cambios que harías para adaptar tu entrega de la semana 16 a un mensaje cercano y a un informe formal.",
        "model": "Cambiaría el tratamiento y algunas fórmulas, pero conservaría las fuentes, los límites y las condiciones acordadas.",
        "checklist": [
          "Cambio recursos de registro.",
          "No cambio el contenido del compromiso."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Puedo reformular conceptos y revisar colocaciones.",
      "Puedo sostener una interpretación con evidencia y una reserva.",
      "Puedo revisar mi producción y continuarla mediante interacción."
    ],
    "review": [
      "Reescribe un párrafo del informe de la plaza: mejora colocaciones, atribuye agentes y conserva el grado de certeza y la condición.",
      "Dentro de 48 horas, sin consultar el texto, reconstruye dos posiciones y un recurso lingüístico; comprueba después qué omitiste.",
      "Una semana después, adapta tu respuesta a otro destinatario y recupera los objetivos marcados en la práctica."
    ]
  }
};
