import type { Module } from "../../types";

/** Original B2 material; see docs/autoestudio/b2-audit.md. */
export const b2w09: Module = {
  "id": "b2-09",
  "level": "b2",
  "week": 9,
  "kind": "core",
  "title": "Quién lo dice y quién responde",
  "subtitle": "Informar con distancia sin ocultar responsabilidades.",
  "stop": {
    "place": "La Plata",
    "country": "Argentina"
  },
  "minutes": 120,
  "newObjectives": [
    "b2.gram.pasiva-impersonalidad",
    "b2.voc.prensa",
    "b2.pron.lectura-noticias",
    "b2.fun.informar-objetivamente",
    "b2.read.noticia"
  ],
  "reviewObjectives": [
    "b2.gram.concesivas",
    "b2.voc.tecnologia-etica",
    "b2.pron.concesion",
    "b2.fun.conceder-objetar",
    "b2.read.columna",
    "b2.gram.condicionales-conectores",
    "b2.gram.consecutivas",
    "b2.voc.acuerdos-contratos",
    "b2.pron.foco-solo-si",
    "b2.fun.negociar-condiciones",
    "b2.spk.negociacion"
  ],
  "prerequisites": [
    "b2-08"
  ],
  "goal": {
    "canDo": "Puedo informar con distancia sin ocultar responsabilidades con razones, matices y condiciones claras.",
    "steps": [
      "Recupera decisiones lingüísticas anteriores y contrástalas con este caso.",
      "Escucha sin transcripción y reconstruye las posiciones: limitar un titular al alcance de sus pruebas.",
      "Lee las fuentes, identifica límites de la evidencia y prepara tu respuesta.",
      "Escribe, revisa y ensaya una interacción que continuarás con tu docente."
    ]
  },
  "theory": {
    "intro": "La mascota te propone una misión: informar con distancia sin ocultar responsabilidades. Decide qué quieres comunicar antes de elegir una forma.",
    "parts": [
      {
        "heading": "Informar con distancia sin ocultar responsabilidades",
        "body": [
          "La pasiva con ser destaca el proceso y permite nombrar el agente: las muestras fueron analizadas por el laboratorio. La pasiva refleja concuerda: se analizaron las muestras. La impersonal con se mantiene singular ante personas con a: se entrevistó a las vecinas. La tercera plural sin sujeto también oculta un agente no identificado."
        ],
        "examples": [
          {
            "es": "Se publicaron los resultados ayer.",
            "note": "Pasiva refleja con sujeto plural."
          },
          {
            "es": "Se entrevistó a las personas afectadas.",
            "note": "Impersonal con complemento de persona."
          },
          {
            "es": "Las muestras fueron analizadas por el laboratorio.",
            "note": "Participio concordado en pasiva con ser."
          }
        ],
        "mistakes": [
          {
            "wrong": "Se publicó los horarios nuevos.",
            "right": "Se publicaron los horarios nuevos.",
            "why": "La pasiva refleja concuerda con su sujeto plural."
          }
        ]
      },
      {
        "heading": "Interpretación, registro y efecto",
        "body": [
          "La distancia informativa no garantiza objetividad. Según el informe atribuye una afirmación; se sabe puede borrar su procedencia. Uno o una generaliza una experiencia, pero no constituye prueba. Al redactar una noticia distingue hechos observados, datos documentados, declaraciones e información todavía no contrastada."
        ],
        "examples": [
          {
            "es": "Se publicaron los resultados ayer.",
            "note": "Explica qué información afirma y cuál deja abierta."
          },
          {
            "es": "Las muestras fueron analizadas por el laboratorio.",
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
        "prompt": "Completa estas decisiones lingüísticas de quién lo dice y quién responde; justifica el modo, la forma o la combinación.",
        "items": [
          {
            "q": "Se ___ los resultados ayer.",
            "answers": [
              [
                "publicaron"
              ]
            ],
            "why": "Pasiva refleja con sujeto plural."
          },
          {
            "q": "Se ___ a las personas afectadas.",
            "answers": [
              [
                "entrevistó"
              ]
            ],
            "why": "Impersonal con complemento de persona."
          },
          {
            "q": "Las muestras fueron ___ por el laboratorio.",
            "answers": [
              [
                "analizadas"
              ]
            ],
            "why": "Participio concordado en pasiva con ser."
          }
        ]
      },
      {
        "id": "g-reconstruir",
        "type": "open",
        "prompt": "Reformula con autonomía. Lee el texto de partida y la consigna de cada ítem; después contrasta tu respuesta con el modelo orientativo y la lista de revisión. Otras soluciones pueden ser válidas.",
        "items": [
          {
            "prompt": "Texto de partida: «La comisión revisará los datos.» Destaca los datos con pasiva con ser y conserva el agente.",
            "model": "Los datos serán revisados por la comisión.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          },
          {
            "prompt": "Texto de partida: «Entrevistamos a tres conductores.» Suprime el agente mediante se impersonal.",
            "model": "Se entrevistó a tres conductores.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          },
          {
            "prompt": "Texto de partida: «Publicaron dos horarios nuevos.» Usa pasiva refleja.",
            "model": "Se publicaron dos horarios nuevos.",
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
        "title": "Informar con distancia sin ocultar responsabilidades",
        "items": [
          {
            "es": "contrastar una fuente",
            "note": "comprobar una información"
          },
          {
            "es": "publicar una rectificación",
            "note": "corregir públicamente un dato"
          },
          {
            "es": "redactar una entradilla",
            "note": "resumir lo esencial de una noticia"
          },
          {
            "es": "atribuir una declaración",
            "note": "indicar quién la hizo"
          },
          {
            "es": "recabar testimonios",
            "note": "obtener versiones personales"
          },
          {
            "es": "preservar el anonimato",
            "note": "no revelar una identidad"
          },
          {
            "es": "omitir un agente",
            "note": "no mencionar quién actúa"
          },
          {
            "es": "verificar un documento",
            "note": "comprobar su autenticidad y alcance"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "v-relaciones",
        "type": "match",
        "prompt": "Relaciona las expresiones útiles para informar con distancia sin ocultar responsabilidades con su significado.",
        "pairs": [
          {
            "left": "contrastar una fuente",
            "right": "comprobar una información"
          },
          {
            "left": "publicar una rectificación",
            "right": "corregir públicamente un dato"
          },
          {
            "left": "redactar una entradilla",
            "right": "resumir lo esencial de una noticia"
          },
          {
            "left": "atribuir una declaración",
            "right": "indicar quién la hizo"
          },
          {
            "left": "recabar testimonios",
            "right": "obtener versiones personales"
          },
          {
            "left": "preservar el anonimato",
            "right": "no revelar una identidad"
          },
          {
            "left": "omitir un agente",
            "right": "no mencionar quién actúa"
          },
          {
            "left": "verificar un documento",
            "right": "comprobar su autenticidad y alcance"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Lee cifras, fuentes e incisos en grupos diferenciados; una pausa no debe separar el sujeto de su verbo sin motivo discursivo.",
    "explanation": [
      "Lee cifras, fuentes e incisos en grupos diferenciados; una pausa no debe separar el sujeto de su verbo sin motivo discursivo.",
      "Escucha primero la secuencia verbal. Después lee la misma frase con una intención distinta, grábate localmente y compara con tu docente. La voz sintética es apoyo de escucha: no certifica variedad regional, ironía ni evaluación automática de tu pronunciación."
    ],
    "examples": [
      {
        "es": "Se publicaron los resultados ayer."
      },
      {
        "es": "Se entrevistó a las personas afectadas."
      },
      {
        "es": "Las muestras fueron analizadas por el laboratorio."
      }
    ],
    "perceive": {
      "id": "p-percepcion",
      "type": "listen",
      "prompt": "Escucha sin leer el ejemplo previo si quieres comprobar tu percepción; identifica el fragmento verbal y después marca su sílaba tónica.",
      "items": [
        {
          "q": "En la muestra 1 de quién lo dice y quién responde, ¿qué fragmento se oye?",
          "options": [
            "publicaron",
            "publicó",
            "publicaba"
          ],
          "answer": 0,
          "why": "Pasiva refleja con sujeto plural.",
          "audio": "Se publicaron los resultados ayer.",
          "voice": "es-ES-f"
        },
        {
          "q": "En la muestra 2 de quién lo dice y quién responde, ¿qué fragmento se oye?",
          "options": [
            "entrevistaron",
            "entrevistara",
            "entrevistó"
          ],
          "answer": 2,
          "why": "Impersonal con complemento de persona.",
          "audio": "Se entrevistó a las personas afectadas.",
          "voice": "es-ES-f"
        }
      ]
    },
    "produce": [
      {
        "text": "Se publicaron los resultados ayer.",
        "tip": "Lee cifras, fuentes e incisos en grupos diferenciados; una pausa no debe separar el sujeto de su verbo sin motivo discursivo.",
        "voice": "es-ES-f"
      },
      {
        "text": "Se entrevistó a las personas afectadas.",
        "tip": "Lee cifras, fuentes e incisos en grupos diferenciados; una pausa no debe separar el sujeto de su verbo sin motivo discursivo.",
        "voice": "es-ES-f"
      },
      {
        "text": "Las muestras fueron analizadas por el laboratorio.",
        "tip": "Lee cifras, fuentes e incisos en grupos diferenciados; una pausa no debe separar el sujeto de su verbo sin motivo discursivo.",
        "voice": "es-ES-f"
      }
    ]
  },
  "listening": {
    "title": "Voces y decisiones: Quién lo dice y quién responde",
    "context": "Guion original de interacción. Primera escucha sin transcripción: identifica propósito y posiciones; segunda: datos y condiciones; tercera: inferencias. Reproducción sintética, sin verificación de acento regional.",
    "speakers": [
      {
        "id": "s1",
        "name": "Editora",
        "voice": "es-ES-f",
        "role": "Interlocutor del guion original; voz sintética disponible"
      },
      {
        "id": "s2",
        "name": "Reportero",
        "voice": "es-MX-m",
        "role": "Interlocutor del guion original; voz sintética disponible"
      }
    ],
    "script": [
      {
        "speaker": "s1",
        "text": "El titular dice que se solucionaron los retrasos. ¿Qué hemos comprobado para afirmarlo? Veo dos servicios nuevos en el horario, pero eso no demuestra que todos los recorridos vuelvan a cumplir los tiempos anunciados. Necesitamos ajustar el alcance."
      },
      {
        "speaker": "s2",
        "text": "Tienes razón. La empresa me dijo que habían reforzado la línea y yo resumí demasiado. Se observaron dos jornadas sin cancelaciones, aunque hubo retrasos menores. También se entrevistó a varias personas en la parada, pero no hicimos una encuesta representativa."
      },
      {
        "speaker": "s1",
        "text": "Entonces escribamos que se añadieron servicios y que seguimos evaluando el resultado. ¿Podemos identificar quién tomó la decisión? La pasiva sirve para ordenar la información, pero si repetimos se decidió y se revisará, desaparecen todas las responsabilidades del relato."
      },
      {
        "speaker": "s2",
        "text": "La concejalía autorizó el refuerzo y la empresa reorganizó los turnos. Eso está en un documento firmado. Sobre la comisión técnica, todavía no me han dado los nombres. Podría incluir que fueron solicitados y que la respuesta sigue pendiente."
      },
      {
        "speaker": "s1",
        "text": "Bien. Y con los conductores anónimos, explica por qué no aparecen sus nombres sin dar detalles que permitan reconocerlos. Sus versiones son relevantes, pero no las presentes como una explicación definitiva. ¿Hay algún documento que apoye la falta de vehículos?"
      },
      {
        "speaker": "s2",
        "text": "Solo una hoja de incidencias de un día. La mencionaré con ese límite. Prefiero que la noticia conserve una pregunta abierta a que una frase rotunda convierta un indicio parcial en una conclusión sobre todo el mes."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha la conversación completa; identifica el problema y la intención antes de buscar palabras aisladas.",
        "exercise": {
          "id": "l-global",
          "type": "choice",
          "prompt": "¿Qué organiza la conversación situada en La Plata?",
          "items": [
            {
              "q": "¿Cuál es el propósito global de esta conversación: Quién lo dice y quién responde?",
              "options": [
                "Limitar un titular al alcance de sus pruebas",
                "Leer una lista de instrucciones sin responder a nadie.",
                "Contar una única versión sin permitir preguntas."
              ],
              "answer": 0,
              "why": "Las intervenciones se responden y matizan sus posiciones."
            },
            {
              "q": "¿Qué relación predomina entre las voces en «Quién lo dice y quién responde»?",
              "options": [
                "Todas repiten exactamente la misma opinión desde el inicio.",
                "Ninguna intervención tiene relación con la anterior.",
                "Las personas aclaran interpretaciones y conservan algunos límites."
              ],
              "answer": 2,
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
          "prompt": "Localiza una intervención concreta en «Quién lo dice y quién responde».",
          "items": [
            {
              "q": "¿Qué corrige la editora?",
              "options": [
                "La necesidad de identificar fuentes.",
                "La publicación de cualquier dato firmado.",
                "La equivalencia entre añadir servicios y resolver todos los retrasos."
              ],
              "answer": 2,
              "why": "La respuesta conserva la condición o información expresada por esa persona."
            },
            {
              "q": "¿Qué frase aparece en la intervención inicial de «Quién lo dice y quién responde»?",
              "options": [
                "No hay información que podamos discutir en esta reunión.",
                "El titular dice que se solucionaron los retrasos.",
                "Ya está todo decidido y no necesitamos escuchar a ninguna parte."
              ],
              "answer": 1,
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
              "prompt": "En «Quién lo dice y quién responde», cita una reserva o una reformulación del diálogo, explica qué interpretación evita y qué quedaría sin resolver si se omitiera.",
              "model": "Solo una hoja de incidencias de un día. La mencionaré con ese límite. Prefiero que la noticia conserve una pregunta abierta a que una frase rotunda convierta un indicio parcial en una conclusión sobre todo el mes.",
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
    "title": "Quién lo dice y quién responde: texto para interpretar",
    "genre": "Artículo, correspondencia o relato original",
    "frame": "Material original de SpanishCue; las situaciones y los datos son didácticos, no noticias reales ni textos oficiales de examen.",
    "text": [
      "Se han detectado diferencias entre los horarios anunciados y los recorridos reales de una línea de autobús. Así comienza el comunicado municipal difundido ayer. La frase informa de un problema, pero no permite saber quién lo detectó ni durante cuánto tiempo se mantuvo. Una plataforma vecinal había entregado, dos semanas antes, un registro de cuarenta trayectos con retrasos. El ayuntamiento confirma que recibió ese documento, aunque sostiene que no todos los casos pueden atribuirse a la misma causa.",
      "Según la empresa operadora, las obras de una avenida obligaron a modificar el recorrido durante cinco días. Los registros vecinales incluyen fechas posteriores, cuando las obras ya habían terminado. Este periódico consultó las hojas de servicio y entrevistó a tres conductores. Dos señalaron que faltaban vehículos; el tercero habló de dificultades para cubrir algunos turnos. Ninguno autorizó la publicación de su nombre. Sus testimonios coinciden parcialmente, pero no bastan para establecer cuántas salidas se cancelaron por cada motivo.",
      "La concejalía anunció que los datos serán revisados por una comisión técnica. No precisó quién la integrará ni cuándo se publicarán sus conclusiones. La plataforma pide que se mantengan disponibles los horarios anteriores para poder comparar cambios y que se identifique cada modificación con una fecha. No reclama que se prometa puntualidad absoluta, sino que la información permita planificar un desplazamiento con un margen razonable de confianza.",
      "Mientras se completa la revisión, la empresa ha añadido dos servicios en la franja de mayor demanda. Este dato fue comprobado en el nuevo horario y confirmado en dos jornadas de observación. Todavía no puede afirmarse que la medida haya resuelto el problema general. Informar con cautela no exige escribir como si los hechos carecieran de responsables: exige explicar de dónde sale cada afirmación, qué parte se ha verificado y qué preguntas siguen abiertas. La actualización de esta noticia dependerá de esas respuestas, no únicamente de nuevos comunicados."
    ],
    "glossary": [
      {
        "es": "contrastar una fuente",
        "note": "comprobar una información"
      },
      {
        "es": "publicar una rectificación",
        "note": "corregir públicamente un dato"
      },
      {
        "es": "redactar una entradilla",
        "note": "resumir lo esencial de una noticia"
      }
    ],
    "tasks": [
      {
        "id": "r-comprender",
        "type": "choice",
        "prompt": "Interpreta tesis y alcance; descarta respuestas que exageren la conclusión.",
        "items": [
          {
            "q": "¿Qué limita la conclusión de la noticia?",
            "options": [
              "La evidencia comprobada cubre solo parte del periodo.",
              "No existe ningún horario publicado.",
              "Todos los conductores dieron la misma explicación."
            ],
            "answer": 0,
            "why": "Comprueba esta interpretación con el texto completo y no solo con una palabra aislada."
          },
          {
            "q": "¿Qué riesgo tiene repetir se decidió?",
            "options": [
              "Siempre revela datos personales.",
              "Impide utilizar el pasado.",
              "Puede ocultar agentes y responsabilidades."
            ],
            "answer": 2,
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
            "prompt": "En «Quién lo dice y quién responde», resume dos posiciones en 60–80 palabras, cita una evidencia y explica un límite que el texto no permite resolver.",
            "model": "La línea incorporó dos salidas adicionales tras las reclamaciones vecinales. La medida fue autorizada por la concejalía y aplicada por la empresa esta semana. Se observaron dos jornadas sin cancelaciones, aunque ese seguimiento no permite evaluar el mes completo. Según la operadora, el refuerzo responde al aumento de demanda. La composición de la comisión que revisará los horarios aún no ha sido comunicada. Este medio ha solicitado esa información y actualizará la noticia cuando reciba respuesta.",
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
          "quote": "Se han detectado diferencias entre los horarios anunciados y los recorridos reales de una línea de autobús.",
          "note": "Identifica qué establece el inicio y cómo prepara la interpretación posterior."
        },
        {
          "quote": "La actualización de esta noticia dependerá de esas respuestas, no únicamente de nuevos comunicados.",
          "note": "Relaciona el cierre con la tesis o con el giro narrativo; explica qué no afirma."
        }
      ]
    }
  },
  "practice": {
    "intro": "Convierte el acuerdo del local en noticia: atribuye la decisión y conserva la condición, una relativa y una concesión sin convertirlas en hechos.",
    "exercises": [
      {
        "id": "x-orden",
        "type": "order",
        "prompt": "Reconstruye los mensajes del caso de La Plata y conserva sus relaciones.",
        "items": [
          {
            "words": [
              "En",
              "«Quién lo dice y quién responde»,",
              "Se",
              "publicaron",
              "los",
              "resultados",
              "ayer."
            ],
            "why": "Pasiva refleja con sujeto plural."
          },
          {
            "words": [
              "En",
              "«Quién lo dice y quién responde»,",
              "Las",
              "muestras",
              "fueron",
              "analizadas",
              "por",
              "el",
              "laboratorio."
            ],
            "why": "Participio concordado en pasiva con ser."
          }
        ]
      },
      {
        "id": "x-edicion",
        "type": "error",
        "prompt": "Revisa tres borradores de quién lo dice y quién responde; cada uno tiene un único error deliberado.",
        "items": [
          {
            "sentence": "Se publicó los horarios nuevos.",
            "answers": [
              "Se publicaron los horarios nuevos."
            ],
            "why": "La pasiva refleja concuerda con su sujeto plural."
          },
          {
            "sentence": "Se entrevistaron a tres conductores.",
            "answers": [
              "Se entrevistó a tres conductores."
            ],
            "why": "Impersonal singular con complemento de persona introducido por a."
          },
          {
            "sentence": "Las muestras fueron analizado por el equipo.",
            "answers": [
              "Las muestras fueron analizadas por el equipo."
            ],
            "why": "El participio concuerda en la pasiva con ser."
          }
        ]
      },
      {
        "id": "x-produccion",
        "type": "open",
        "prompt": "Prepara dos fragmentos antes de tu entrega independiente; el modelo es una posibilidad, no una respuesta única.",
        "items": [
          {
            "prompt": "Abre tu respuesta sobre informar con distancia sin ocultar responsabilidades con una postura y una razón; adapta el destinatario.",
            "model": "La línea incorporó dos salidas adicionales tras las reclamaciones vecinales.",
            "checklist": [
              "Presento una postura concreta.",
              "Ajusto el registro a quien recibirá el mensaje."
            ]
          },
          {
            "prompt": "Reformula una objeción o una reserva de «Quién lo dice y quién responde» sin debilitarla, y responde con una condición verificable.",
            "model": "La línea incorporó dos salidas adicionales tras las reclamaciones vecinales. La medida fue autorizada por la concejalía y aplicada por la empresa esta semana. Se observaron dos jornadas sin cancelaciones, aunque ese seguimiento no permite evaluar el mes completo. Según la operadora, el refuerzo responde al aumento de demanda. La composición de la comisión que revisará los horarios aún no ha sido comunicada. Este medio ha solicitado esa información y actualizará la noticia cuando reciba respuesta.",
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
            "prompt": "Recupera la semana 6 sin abrir su explicación y aplica sus recursos a «Quién lo dice y quién responde»: Oraciones concesivas; Tecnología y ética; Prosodia de la concesión; Conceder y objetar; Leer una columna de opinión. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo usar aunque + indicativo o subjuntivo según la información, a pesar de (que), por mucho que y si bien. Puedo hablar de inteligencia artificial, privacidad, vigilancia y responsabilidad. Puedo marcar con la voz la parte concedida y la parte que defiendo. Puedo conceder una parte del argumento contrario y mantener mi postura. Puedo identificar concesiones, objeciones y la tesis del autor.",
            "checklist": [
              "Integro los recursos indicados en una respuesta al caso actual.",
              "Conservo personas, tiempo, postura y límites de las fuentes.",
              "Marco una elección que tuve que corregir después de comprobarla."
            ]
          },
          {
            "prompt": "Recupera la semana 8 sin abrir su explicación y aplica sus recursos a «Quién lo dice y quién responde»: Conectores condicionales; Oraciones consecutivas; Acuerdos, contratos y condiciones; Foco en la condición; Negociar condiciones; Negociación breve. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo usar siempre que, con tal de que, a no ser que, en caso de que y salvo que. Puedo expresar consecuencia con tan… que, tanto que, de modo que y así que. Puedo negociar cláusulas, plazos, garantías y penalizaciones. Puedo poner el foco en la condición: SOLO si firmamos hoy. Puedo proponer, aceptar con condiciones y rechazar una propuesta. Puedo negociar un acuerdo de alquiler o de trabajo con condiciones claras.",
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
    "task": "Redacta una noticia con titular, entradilla y desarrollo sobre un cambio de servicio. Atribuye dos declaraciones, identifica al menos un agente y explicita qué información falta por verificar.",
    "context": "Destinatario, propósito y límites de la información forman parte de la evaluación. El modelo muestra una respuesta completa posible: analiza su organización y escribe después tu propio texto.",
    "steps": [
      "Extrae dos datos y dos posiciones de las fuentes; marca lo que no está confirmado.",
      "Planifica apertura, desarrollo, objeción o complicación y cierre antes de redactar.",
      "Escribe sin copiar el modelo; integra recursos nuevos y los recuperados.",
      "Revisa referentes, modo, tiempo, colocaciones y registro; reescribe un párrafo y explica el cambio."
    ],
    "useLanguage": [
      "La pasiva con ser destaca el proceso y permite nombrar el agente: las muestras fueron analizadas por el laboratorio. La pasiva refleja concuerda: se analizaron las muestras. La impersonal con se mantiene singular ante personas con a: se entrevistó a las vecinas. La tercera plural sin sujeto también oculta un agente no identificado.",
      "La distancia informativa no garantiza objetividad. Según el informe atribuye una afirmación; se sabe puede borrar su procedencia. Uno o una generaliza una experiencia, pero no constituye prueba. Al redactar una noticia distingue hechos observados, datos documentados, declaraciones e información todavía no contrastada.",
      "Convierte el acuerdo del local en noticia: atribuye la decisión y conserva la condición, una relativa y una concesión sin convertirlas en hechos."
    ],
    "model": [
      "La línea de autobús incorpora dos salidas tras las reclamaciones vecinales",
      "La empresa operadora añadió dos servicios en la franja de mayor demanda después de que una plataforma vecinal comunicara diferencias entre los horarios publicados y los recorridos reales. La medida fue autorizada por la concejalía. Todavía no se dispone de información suficiente para afirmar que haya resuelto el problema general de puntualidad.",
      "Según la empresa, las obras de una avenida obligaron a modificar el trayecto durante cinco días. La plataforma señala que su registro incluye retrasos posteriores a ese periodo. Este medio consultó las hojas disponibles y observó dos jornadas sin cancelaciones, aunque con algunas demoras menores. Ese seguimiento permite describir lo ocurrido en esas fechas, pero no evaluar por sí solo todo el mes.",
      "También se entrevistó a tres conductores que solicitaron mantener el anonimato. Dos mencionaron falta de vehículos y otro, dificultades para cubrir turnos. Sus testimonios aportan posibles explicaciones, pero no permiten calcular cuántas incidencias corresponden a cada causa. Una hoja de servicio recoge un problema de disponibilidad en un día concreto; extrapolarlo al conjunto del periodo exigiría documentación adicional.",
      "La concejalía anunció una revisión técnica sin precisar todavía quién integrará la comisión ni cuándo publicará sus conclusiones. La plataforma pide conservar los horarios anteriores y fechar cada modificación para facilitar comparaciones. Este periódico ha solicitado esos datos. La información se actualizará cuando sea posible contrastar el alcance del refuerzo y las causas de los retrasos, distinguiendo los resultados comprobados de las declaraciones de cada parte."
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
        "prompt": "Presenta el caso de «Quién lo dice y quién responde» a alguien que no conoce las fuentes. Defiende una interpretación, menciona una evidencia y una reserva, y termina con una pregunta que permita continuar.",
        "prep": [
          "Anota tesis, evidencia y límite en cinco palabras clave.",
          "Ensaya una transición y una reformulación."
        ],
        "seconds": 180,
        "model": "La línea incorporó dos salidas adicionales tras las reclamaciones vecinales. La medida fue autorizada por la concejalía y aplicada por la empresa esta semana. Se observaron dos jornadas sin cancelaciones, aunque ese seguimiento no permite evaluar el mes completo. Según la operadora, el refuerzo responde al aumento de demanda. La composición de la comisión que revisará los horarios aún no ha sido comunicada. Este medio ha solicitado esa información y actualizará la noticia cuando reciba respuesta.",
        "selfCheck": [
          "Se entiende mi postura sin leer un guion.",
          "No convierto una conjetura en hecho.",
          "Uso pausas para organizar el mensaje."
        ]
      },
      {
        "title": "Interacción y mediación",
        "prompt": "Tu docente representa a una persona que cuestiona tu interpretación de informar con distancia sin ocultar responsabilidades. Resume su postura antes de responder. Pregunta qué condición cambiaría su opinión; negocia un acuerdo parcial o explica respetuosamente por qué no lo hay.",
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
        "task": "Presenta tu entrega de «Quién lo dice y quién responde» en tres minutos y responde a una objeción inesperada.",
        "phrases": [
          "Mi interpretación se apoya en…",
          "La reserva que mantengo es…"
        ]
      },
      {
        "move": "Reformula",
        "task": "Explica a otra persona lo que sostiene una voz del caso de La Plata; pídele a tu docente que compruebe si has conservado el matiz.",
        "phrases": [
          "Si te he entendido bien…",
          "No afirma que…; lo que plantea es…"
        ]
      },
      {
        "move": "Negocia",
        "task": "Acuerda un criterio para valorar tu propuesta sobre informar con distancia sin ocultar responsabilidades; identifica una condición que todavía necesita confirmación.",
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
        "q": "En la evaluación final de «Quién lo dice y quién responde», ¿qué resume mejor el propósito?",
        "options": [
          "Limitar un titular al alcance de sus pruebas",
          "Sustituir toda evidencia por una opinión rotunda.",
          "Evitar cualquier intercambio entre personas."
        ],
        "answer": 0,
        "why": "Relaciona comprensión y propósito.",
        "type": "choice"
      },
      {
        "type": "listen",
        "audio": "Tienes razón. La empresa me dijo que habían reforzado la línea y yo resumí demasiado. Se observaron dos jornadas sin cancelaciones, aunque hubo retrasos menores. También se entrevistó a varias personas en la parada, pero no hicimos una encuesta representativa.",
        "voice": "es-MX-m",
        "q": "Al escuchar de nuevo a Reportero en «Quién lo dice y quién responde», ¿qué intervención reconoces?",
        "options": [
          "Tienes razón",
          "No hay ninguna condición pendiente y todas las partes aceptaron.",
          "Me niego a explicar mi punto de vista sobre este asunto."
        ],
        "answer": 0,
        "why": "Atiende a la formulación y a la posición, no solo al tema."
      },
      {
        "type": "gap",
        "q": "Se ___ a dos supervisoras antes de publicar la noticia.",
        "answers": [
          [
            "consultó"
          ]
        ],
        "why": "Impersonal singular con complemento de persona."
      },
      {
        "type": "open",
        "prompt": "Texto de partida: «El ayuntamiento aprobó las modificaciones.» Usa pasiva con ser y conserva el agente.",
        "model": "Las modificaciones fueron aprobadas por el ayuntamiento.",
        "checklist": [
          "Conservo participantes, referencia temporal y contenido pertinente.",
          "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
          "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
        ]
      },
      {
        "type": "error",
        "sentence": "Se comunicó las nuevas frecuencias esta mañana.",
        "answers": [
          "Se comunicaron las nuevas frecuencias esta mañana."
        ],
        "why": "Revisa la función, la construcción y la coherencia con el contexto; compara con el modelo de corrección."
      },
      {
        "type": "open",
        "prompt": "Sintetiza en 50 palabras lo que sabes y lo que no puedes concluir sobre «Quién lo dice y quién responde».",
        "model": "La línea incorporó dos salidas adicionales tras las reclamaciones vecinales. La medida fue autorizada por la concejalía y aplicada por la empresa esta semana. Se observaron dos jornadas sin cancelaciones, aunque ese seguimiento no permite evaluar el mes completo. Según la operadora, el refuerzo responde al aumento de demanda. La composición de la comisión que revisará los horarios aún no ha sido comunicada. Este medio ha solicitado esa información y actualizará la noticia cuando reciba respuesta.",
        "checklist": [
          "Atribuyo una fuente.",
          "Explicito una reserva."
        ]
      },
      {
        "type": "open",
        "prompt": "Contesta a quien sostiene lo contrario de tu postura sobre informar con distancia sin ocultar responsabilidades; concede una razón y conserva tu argumento.",
        "model": "La línea incorporó dos salidas adicionales tras las reclamaciones vecinales. La medida fue autorizada por la concejalía y aplicada por la empresa esta semana. Se observaron dos jornadas sin cancelaciones, aunque ese seguimiento no permite evaluar el mes completo. Según la operadora, el refuerzo responde al aumento de demanda. La composición de la comisión que revisará los horarios aún no ha sido comunicada. Este medio ha solicitado esa información y actualizará la noticia cuando reciba respuesta.",
        "checklist": [
          "Conservo la postura contraria sin exagerarla.",
          "Respondo con una razón o condición."
        ]
      },
      {
        "type": "open",
        "prompt": "Explica dos cambios que harías para adaptar tu entrega de la semana 9 a un mensaje cercano y a un informe formal.",
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
      "Puedo informar con distancia sin ocultar responsabilidades.",
      "Puedo sostener una interpretación con evidencia y una reserva.",
      "Puedo revisar mi producción y continuarla mediante interacción."
    ],
    "review": [
      "Convierte el acuerdo del local en noticia: atribuye la decisión y conserva la condición, una relativa y una concesión sin convertirlas en hechos.",
      "Dentro de 48 horas, sin consultar el texto, reconstruye dos posiciones y un recurso lingüístico; comprueba después qué omitiste.",
      "Una semana después, adapta tu respuesta a otro destinatario y recupera los objetivos marcados en la práctica."
    ]
  }
};
