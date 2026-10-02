import type { Module } from "../../types";

/** Original B2 material; see docs/autoestudio/b2-audit.md. */
export const b2w02: Module = {
  "id": "b2-02",
  "level": "b2",
  "week": 2,
  "kind": "core",
  "title": "Lo que esperaban de nosotros",
  "subtitle": "Contrastar expectativas entre generaciones.",
  "stop": {
    "place": "Rosario",
    "country": "Argentina"
  },
  "minutes": 120,
  "newObjectives": [
    "b2.gram.subjuntivo-imperfecto-usos",
    "b2.gram.como-si",
    "b2.voc.familia-generaciones",
    "b2.pron.acento-ra-ra",
    "b2.fun.recordar-expectativas",
    "b2.lis.entrevista-generaciones"
  ],
  "reviewObjectives": [
    "b2.gram.sustantivas-sistema",
    "b2.gram.decir-doble-valor",
    "b2.voc.trabajo-equipo",
    "b2.pron.influencia-mitigada",
    "b2.fun.pedir-exigir",
    "b2.read.correo-equipo"
  ],
  "prerequisites": [
    "b2-01"
  ],
  "goal": {
    "canDo": "Puedo contrastar expectativas entre generaciones con razones, matices y condiciones claras.",
    "steps": [
      "Recupera decisiones lingüísticas anteriores y contrástalas con este caso.",
      "Escucha sin transcripción y reconstruye las posiciones: comprender expectativas familiares sin decidir por otra persona.",
      "Lee las fuentes, identifica límites de la evidencia y prepara tu respuesta.",
      "Escribe, revisa y ensaya una interacción que continuarás con tu docente."
    ]
  },
  "theory": {
    "intro": "La mascota te propone una misión: contrastar expectativas entre generaciones. Decide qué quieres comunicar antes de elegir una forma.",
    "parts": [
      {
        "heading": "Contrastar expectativas entre generaciones",
        "body": [
          "Un verbo principal en pasado suele situar la subordinada simultánea o posterior en imperfecto de subjuntivo: esperaban que estudiara. Las terminaciones -ra y -se son equivalentes en estos usos. El momento de la expectativa no demuestra que la acción se cumpliera; hay que comprobarlo en el resto del relato."
        ],
        "examples": [
          {
            "es": "Mi abuela esperaba que yo viviera cerca.",
            "note": "Expectativa pasada."
          },
          {
            "es": "Hablaba como si supiera todas las respuestas.",
            "note": "Comparación irreal simultánea."
          },
          {
            "es": "Les pidió que respetaran su decisión.",
            "note": "Petición pasada dirigida a varias personas."
          }
        ],
        "mistakes": [
          {
            "wrong": "Mi familia quería que estudio cerca.",
            "right": "Mi familia quería que estudiara cerca.",
            "why": "Expectativa pasada con imperfecto de subjuntivo."
          }
        ]
      },
      {
        "heading": "Interpretación, registro y efecto",
        "body": [
          "Como si introduce una comparación presentada como irreal: habla como si conociera todo. Usa imperfecto para la situación simultánea y pluscuamperfecto para una anterior. Al mediar entre generaciones, separa lo que alguien deseaba de lo que realmente prohibió y evita atribuir intenciones sin pruebas."
        ],
        "examples": [
          {
            "es": "Mi abuela esperaba que yo viviera cerca.",
            "note": "Explica qué información afirma y cuál deja abierta."
          },
          {
            "es": "Les pidió que respetaran su decisión.",
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
        "prompt": "Completa estas decisiones lingüísticas de lo que esperaban de nosotros; justifica el modo, la forma o la combinación.",
        "items": [
          {
            "q": "Mi abuela esperaba que yo ___ cerca.",
            "answers": [
              [
                "viviera"
              ]
            ],
            "why": "Expectativa pasada."
          },
          {
            "q": "Hablaba como si ___ todas las respuestas.",
            "answers": [
              [
                "supiera"
              ]
            ],
            "why": "Comparación irreal simultánea."
          },
          {
            "q": "Les pidió que ___ su decisión.",
            "answers": [
              [
                "respetaran"
              ]
            ],
            "why": "Petición pasada dirigida a varias personas."
          }
        ]
      },
      {
        "id": "g-reconstruir",
        "type": "open",
        "prompt": "Reformula con autonomía. Lee el texto de partida y la consigna de cada ítem; después contrasta tu respuesta con el modelo orientativo y la lista de revisión. Otras soluciones pueden ser válidas.",
        "items": [
          {
            "prompt": "Texto de partida: «Mi padre: «Necesito que elabores un plan».» Cuenta aquella petición con necesitaba.",
            "model": "Mi padre necesitaba que elaborara un plan.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          },
          {
            "prompt": "Texto de partida: «No lo sabe todo, pero habla con esa seguridad.» Reformula con como si.",
            "model": "Habla como si lo supiera todo.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          },
          {
            "prompt": "Texto de partida: «La tía pidió: «Resuman primero la preocupación del otro».» Pasa a estilo indirecto pasado.",
            "model": "La tía pidió que resumieran primero la preocupación del otro.",
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
        "title": "Contrastar expectativas entre generaciones",
        "items": [
          {
            "es": "abrirse camino",
            "note": "construir una trayectoria"
          },
          {
            "es": "dar por sentado",
            "note": "considerar algo evidente"
          },
          {
            "es": "poner límites",
            "note": "establecer lo aceptable"
          },
          {
            "es": "heredar expectativas",
            "note": "recibir proyectos familiares"
          },
          {
            "es": "romper un patrón",
            "note": "cambiar una conducta repetida"
          },
          {
            "es": "ganarse la vida",
            "note": "obtener ingresos"
          },
          {
            "es": "tener voz",
            "note": "participar en decisiones"
          },
          {
            "es": "ceder terreno",
            "note": "flexibilizar una postura"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "v-relaciones",
        "type": "match",
        "prompt": "Relaciona las expresiones útiles para contrastar expectativas entre generaciones con su significado.",
        "pairs": [
          {
            "left": "abrirse camino",
            "right": "construir una trayectoria"
          },
          {
            "left": "dar por sentado",
            "right": "considerar algo evidente"
          },
          {
            "left": "poner límites",
            "right": "establecer lo aceptable"
          },
          {
            "left": "heredar expectativas",
            "right": "recibir proyectos familiares"
          },
          {
            "left": "romper un patrón",
            "right": "cambiar una conducta repetida"
          },
          {
            "left": "ganarse la vida",
            "right": "obtener ingresos"
          },
          {
            "left": "tener voz",
            "right": "participar en decisiones"
          },
          {
            "left": "ceder terreno",
            "right": "flexibilizar una postura"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Contrasta hablara, hablará y hablaría: localiza la sílaba tónica antes de usar la palabra dentro de una frase.",
    "explanation": [
      "Contrasta hablara, hablará y hablaría: localiza la sílaba tónica antes de usar la palabra dentro de una frase.",
      "Escucha primero la secuencia verbal. Después lee la misma frase con una intención distinta, grábate localmente y compara con tu docente. La voz sintética es apoyo de escucha: no certifica variedad regional, ironía ni evaluación automática de tu pronunciación."
    ],
    "examples": [
      {
        "es": "Mi abuela esperaba que yo viviera cerca."
      },
      {
        "es": "Hablaba como si supiera todas las respuestas."
      },
      {
        "es": "Les pidió que respetaran su decisión."
      }
    ],
    "perceive": {
      "id": "p-percepcion",
      "type": "listen",
      "prompt": "Escucha sin leer el ejemplo previo si quieres comprobar tu percepción; identifica el fragmento verbal y después marca su sílaba tónica.",
      "items": [
        {
          "q": "En la muestra 1 de lo que esperaban de nosotros, ¿qué fragmento se oye?",
          "options": [
            "vivía",
            "viviera",
            "vivirá"
          ],
          "answer": 1,
          "why": "Expectativa pasada.",
          "audio": "Mi abuela esperaba que yo viviera cerca.",
          "voice": "es-ES-f"
        },
        {
          "q": "En la muestra 2 de lo que esperaban de nosotros, ¿qué fragmento se oye?",
          "options": [
            "supiera",
            "sabrá",
            "sabría"
          ],
          "answer": 0,
          "why": "Comparación irreal simultánea.",
          "audio": "Hablaba como si supiera todas las respuestas.",
          "voice": "es-ES-f"
        }
      ]
    },
    "produce": [
      {
        "text": "Mi abuela esperaba que yo viviera cerca.",
        "tip": "Contrasta hablara, hablará y hablaría: localiza la sílaba tónica antes de usar la palabra dentro de una frase.",
        "voice": "es-ES-f"
      },
      {
        "text": "Hablaba como si supiera todas las respuestas.",
        "tip": "Contrasta hablara, hablará y hablaría: localiza la sílaba tónica antes de usar la palabra dentro de una frase.",
        "voice": "es-ES-f"
      },
      {
        "text": "Les pidió que respetaran su decisión.",
        "tip": "Contrasta hablara, hablará y hablaría: localiza la sílaba tónica antes de usar la palabra dentro de una frase.",
        "voice": "es-ES-f"
      }
    ]
  },
  "listening": {
    "title": "Voces y decisiones: Lo que esperaban de nosotros",
    "context": "Guion original de interacción. Primera escucha sin transcripción: identifica propósito y posiciones; segunda: datos y condiciones; tercera: inferencias. Reproducción sintética, sin verificación de acento regional.",
    "speakers": [
      {
        "id": "s1",
        "name": "Periodista",
        "voice": "es-ES-f",
        "role": "Interlocutor del guion original; voz sintética disponible"
      },
      {
        "id": "s2",
        "name": "Elena",
        "voice": "es-MX-m",
        "role": "Interlocutor del guion original; voz sintética disponible"
      },
      {
        "id": "s3",
        "name": "Iván",
        "voice": "es-ES-f",
        "role": "Interlocutor del guion original; voz sintética disponible"
      }
    ],
    "script": [
      {
        "speaker": "s1",
        "text": "Hoy conversamos con Elena y su nieto Iván sobre las decisiones educativas. Elena, ¿qué esperaba su familia cuando usted terminó la escuela? Me interesa distinguir lo que deseaban de lo que le exigían expresamente."
      },
      {
        "speaker": "s2",
        "text": "Querían que empezara a trabajar enseguida. Mi padre no me prohibió estudiar, pero hablaba como si continuar fuera un lujo. Yo necesitaba que alguien me explicara las becas disponibles. Al final, una profesora me ayudó y pude combinar ambas cosas."
      },
      {
        "speaker": "s3",
        "text": "En mi caso ocurre casi lo contrario. Mi familia esperaba que fuera a la universidad y se sorprendió cuando elegí una formación técnica. A veces hablan como si trabajar con las manos significara renunciar a pensar. Sé que no lo hacen para ofenderme, pero me pesa."
      },
      {
        "speaker": "s1",
        "text": "Elena, ¿diría que esa comparación describe su postura? Iván no está diciendo que usted le haya prohibido nada. Está explicando cómo interpreta algunas preguntas sobre su futuro y qué efecto tienen en él."
      },
      {
        "speaker": "s2",
        "text": "Entiendo la diferencia. Yo quería que tuviera opciones que a mí me faltaron. Tal vez confundí ampliar sus posibilidades con elegirlas por él. Le pediría que me enseñara qué se estudia y qué salidas tiene, para no hablar desde mis suposiciones."
      },
      {
        "speaker": "s3",
        "text": "Eso sí me ayudaría. También admito que respondí a la defensiva antes de explicar el programa. Podemos visitar el centro el sábado. No necesito que te entusiasme todo; me basta con que escuches mis razones antes de imaginar un fracaso."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha la conversación completa; identifica el problema y la intención antes de buscar palabras aisladas.",
        "exercise": {
          "id": "l-global",
          "type": "choice",
          "prompt": "¿Qué organiza la conversación situada en Rosario?",
          "items": [
            {
              "q": "¿Cuál es el propósito global de esta conversación: Lo que esperaban de nosotros?",
              "options": [
                "Contar una única versión sin permitir preguntas.",
                "Comprender expectativas familiares sin decidir por otra persona",
                "Leer una lista de instrucciones sin responder a nadie."
              ],
              "answer": 1,
              "why": "Las intervenciones se responden y matizan sus posiciones."
            },
            {
              "q": "¿Qué relación predomina entre las voces en «Lo que esperaban de nosotros»?",
              "options": [
                "Las personas aclaran interpretaciones y conservan algunos límites.",
                "Todas repiten exactamente la misma opinión desde el inicio.",
                "Ninguna intervención tiene relación con la anterior."
              ],
              "answer": 0,
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
          "prompt": "Localiza una intervención concreta en «Lo que esperaban de nosotros».",
          "items": [
            {
              "q": "¿Qué pide Elena al final?",
              "options": [
                "Conocer el programa y sus salidas.",
                "Que Iván abandone el centro.",
                "Que la periodista elija por ellos."
              ],
              "answer": 0,
              "why": "La respuesta conserva la condición o información expresada por esa persona."
            },
            {
              "q": "¿Qué frase aparece en la intervención inicial de «Lo que esperaban de nosotros»?",
              "options": [
                "Ya está todo decidido y no necesitamos escuchar a ninguna parte.",
                "No hay información que podamos discutir en esta reunión.",
                "Hoy conversamos con Elena y su nieto Iván sobre las decisiones educativas."
              ],
              "answer": 2,
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
              "prompt": "En «Lo que esperaban de nosotros», cita una reserva o una reformulación del diálogo, explica qué interpretación evita y qué quedaría sin resolver si se omitiera.",
              "model": "Eso sí me ayudaría. También admito que respondí a la defensiva antes de explicar el programa. Podemos visitar el centro el sábado. No necesito que te entusiasme todo; me basta con que escuches mis razones antes de imaginar un fracaso.",
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
    "title": "Lo que esperaban de nosotros: texto para interpretar",
    "genre": "Artículo, correspondencia o relato original",
    "frame": "Material original de SpanishCue; las situaciones y los datos son didácticos, no noticias reales ni textos oficiales de examen.",
    "text": [
      "Cuando su hija anunció que quería dedicarse a restaurar instrumentos musicales, Ernesto reaccionó con una pregunta: «¿Y de qué vas a vivir?». Clara escuchó una prohibición, aunque su padre nunca le dijo que renunciara. Durante meses discutieron sobre una frase cuyo significado ambos creían evidente. Él esperaba que ella elaborara un plan; ella necesitaba que él reconociera la seriedad de una elección que llevaba años preparando. La conversación no avanzó hasta que dejaron de defender palabras y empezaron a explicar preocupaciones.",
      "Ernesto había crecido en una familia para la que tener un empleo estable era una conquista reciente. Sus padres querían que estudiara una carrera que le permitiera independizarse pronto. No le exigieron que fuera abogado, pero celebraron su elección como si hubiera resuelto para siempre todos los problemas de la familia. Ahora comprende que transmitió esa misma presión a su hija, aunque utilizara un lenguaje aparentemente más abierto. Asegurar que cada cual puede hacer lo que quiera no elimina las expectativas que se comunican mediante silencios, bromas o comparaciones.",
      "Clara, por su parte, reconoce que interpretó cualquier duda como una descalificación. Había investigado escuelas y talleres, pero no había calculado cuánto costaría mantenerse durante la formación. Le molestaba que la trataran como si siguiera siendo una niña; sin embargo, cuando le pedían datos concretos, respondía que nadie confiaba en ella. Una tía intervino sin decidir quién tenía razón. Pidió a cada uno que resumiera la preocupación del otro antes de formular una respuesta.",
      "No llegaron a pensar lo mismo. Ernesto sigue considerando arriesgada la profesión y Clara conserva su proyecto. Acordaron revisar juntos un presupuesto y limitar la ayuda familiar a un periodo definido. El cambio fue más modesto que una reconciliación de película: aprendieron a discrepar sin convertir cada desacuerdo en una prueba de afecto. Para ambos, esa fue una forma bastante concreta de respeto."
    ],
    "glossary": [
      {
        "es": "abrirse camino",
        "note": "construir una trayectoria"
      },
      {
        "es": "dar por sentado",
        "note": "considerar algo evidente"
      },
      {
        "es": "poner límites",
        "note": "establecer lo aceptable"
      }
    ],
    "tasks": [
      {
        "id": "r-comprender",
        "type": "choice",
        "prompt": "Interpreta tesis y alcance; descarta respuestas que exageren la conclusión.",
        "items": [
          {
            "q": "¿Qué permite avanzar en el texto?",
            "options": [
              "Cambiar obligatoriamente de profesión.",
              "Reformular las preocupaciones de ambas partes.",
              "Eliminar toda ayuda familiar."
            ],
            "answer": 1,
            "why": "Comprueba esta interpretación con el texto completo y no solo con una palabra aislada."
          },
          {
            "q": "¿Qué implica como si fuera un lujo?",
            "options": [
              "Así se presentaba estudiar, sin afirmar que lo fuera.",
              "Estudiar estaba legalmente prohibido.",
              "La familia tenía abundantes recursos."
            ],
            "answer": 0,
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
            "prompt": "En «Lo que esperaban de nosotros», resume dos posiciones en 60–80 palabras, cita una evidencia y explica un límite que el texto no permite resolver.",
            "model": "Mi familia esperaba que eligiera una profesión conocida. Durante mucho tiempo entendí sus preguntas como si fueran órdenes, aunque nunca me prohibieron buscar otra salida. Ahora veo que necesitaban información y que yo necesitaba reconocimiento. Propongo que cada uno exponga primero qué le preocupa y después repita la preocupación del otro. No se trata de aceptar cualquier argumento, sino de comprobar que estamos discutiendo sobre la misma cuestión.",
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
          "quote": "Cuando su hija anunció que quería dedicarse a restaurar instrumentos musicales, Ernesto reaccionó con una pregunta: «¿Y de qué vas a vivir?».",
          "note": "Identifica qué establece el inicio y cómo prepara la interpretación posterior."
        },
        {
          "quote": "Para ambos, esa fue una forma bastante concreta de respeto.",
          "note": "Relaciona el cierre con la tesis o con el giro narrativo; explica qué no afirma."
        }
      ]
    }
  },
  "practice": {
    "intro": "Sin mirar la semana 1, transforma dos órdenes familiares en peticiones y distingue qué se afirmó de qué se esperaba.",
    "exercises": [
      {
        "id": "x-orden",
        "type": "order",
        "prompt": "Reconstruye los mensajes del caso de Rosario y conserva sus relaciones.",
        "items": [
          {
            "words": [
              "En",
              "«Lo que esperaban de nosotros»,",
              "Mi",
              "abuela",
              "esperaba",
              "que",
              "yo",
              "viviera",
              "cerca."
            ],
            "why": "Expectativa pasada."
          },
          {
            "words": [
              "En",
              "«Lo que esperaban de nosotros»,",
              "Les",
              "pidió",
              "que",
              "respetaran",
              "su",
              "decisión."
            ],
            "why": "Petición pasada dirigida a varias personas."
          }
        ]
      },
      {
        "id": "x-edicion",
        "type": "error",
        "prompt": "Revisa tres borradores de lo que esperaban de nosotros; cada uno tiene un único error deliberado.",
        "items": [
          {
            "sentence": "Mi familia quería que estudio cerca.",
            "answers": [
              "Mi familia quería que estudiara cerca."
            ],
            "why": "Expectativa pasada con imperfecto de subjuntivo."
          },
          {
            "sentence": "Actuaba como si sabe todo.",
            "answers": [
              "Actuaba como si supiera todo."
            ],
            "why": "Como si introduce una comparación irreal con subjuntivo."
          },
          {
            "sentence": "Esperaba que mis padres comprenden la decisión.",
            "answers": [
              "Esperaba que mis padres comprendieran la decisión."
            ],
            "why": "Correlación de expectativa pasada."
          }
        ]
      },
      {
        "id": "x-produccion",
        "type": "open",
        "prompt": "Prepara dos fragmentos antes de tu entrega independiente; el modelo es una posibilidad, no una respuesta única.",
        "items": [
          {
            "prompt": "Abre tu respuesta sobre contrastar expectativas entre generaciones con una postura y una razón; adapta el destinatario.",
            "model": "Mi familia esperaba que eligiera una profesión conocida.",
            "checklist": [
              "Presento una postura concreta.",
              "Ajusto el registro a quien recibirá el mensaje."
            ]
          },
          {
            "prompt": "Reformula una objeción o una reserva de «Lo que esperaban de nosotros» sin debilitarla, y responde con una condición verificable.",
            "model": "Mi familia esperaba que eligiera una profesión conocida. Durante mucho tiempo entendí sus preguntas como si fueran órdenes, aunque nunca me prohibieron buscar otra salida. Ahora veo que necesitaban información y que yo necesitaba reconocimiento. Propongo que cada uno exponga primero qué le preocupa y después repita la preocupación del otro. No se trata de aceptar cualquier argumento, sino de comprobar que estamos discutiendo sobre la misma cuestión.",
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
            "prompt": "Recupera la semana 1 sin abrir su explicación y aplica sus recursos a «Lo que esperaban de nosotros»: Subjuntivo en oraciones sustantivas; Decir, insistir, recordar: informar o pedir; Trabajo en equipo y liderazgo; Entonación de peticiones indirectas; Pedir, exigir y negociar tareas; Leer un correo de coordinación. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo elegir el modo según el verbo principal: influencia, valoración, emoción, percepción o comunicación. Puedo distinguir me dice que viene (información) de me dice que venga (orden). Puedo hablar de delegar, coordinar, exigir, plazos y responsabilidades. Puedo pedir algo de forma indirecta sin sonar autoritario. Puedo transmitir peticiones y negociar responsabilidades en un equipo. Puedo distinguir información, peticiones y obligaciones en un correo de trabajo.",
            "checklist": [
              "Integro los recursos indicados en una respuesta al caso actual.",
              "Conservo personas, tiempo, postura y límites de las fuentes.",
              "Marco una elección que tuve que corregir después de comprobarla."
            ]
          },
          {
            "prompt": "Contrasta tu recuperación de la semana 1 con otra posible formulación en «Lo que esperaban de nosotros»: cambia una forma y explica qué efecto produce para el destinatario.",
            "model": "Mi familia esperaba que eligiera una profesión conocida. Durante mucho tiempo entendí sus preguntas como si fueran órdenes, aunque nunca me prohibieron buscar otra salida. Ahora veo que necesitaban información y que yo necesitaba reconocimiento. Propongo que cada uno exponga primero qué le preocupa y después repita la preocupación del otro. No se trata de aceptar cualquier argumento, sino de comprobar que estamos discutiendo sobre la misma cuestión.",
            "checklist": [
              "Comparo dos formas con intención distinta.",
              "Explico si cambia información, registro o grado de certeza."
            ]
          }
        ]
      }
    ]
  },
  "writing": {
    "task": "Redacta una entrada para un foro familiar sobre una expectativa pasada. Reconstruye dos interpretaciones, utiliza comparaciones irreales y propone una conversación que no obligue a ninguna parte a renunciar a su postura.",
    "context": "Destinatario, propósito y límites de la información forman parte de la evaluación. El modelo muestra una respuesta completa posible: analiza su organización y escribe después tu propio texto.",
    "steps": [
      "Extrae dos datos y dos posiciones de las fuentes; marca lo que no está confirmado.",
      "Planifica apertura, desarrollo, objeción o complicación y cierre antes de redactar.",
      "Escribe sin copiar el modelo; integra recursos nuevos y los recuperados.",
      "Revisa referentes, modo, tiempo, colocaciones y registro; reescribe un párrafo y explica el cambio."
    ],
    "useLanguage": [
      "Un verbo principal en pasado suele situar la subordinada simultánea o posterior en imperfecto de subjuntivo: esperaban que estudiara. Las terminaciones -ra y -se son equivalentes en estos usos. El momento de la expectativa no demuestra que la acción se cumpliera; hay que comprobarlo en el resto del relato.",
      "Como si introduce una comparación presentada como irreal: habla como si conociera todo. Usa imperfecto para la situación simultánea y pluscuamperfecto para una anterior. Al mediar entre generaciones, separa lo que alguien deseaba de lo que realmente prohibió y evita atribuir intenciones sin pruebas.",
      "Sin mirar la semana 1, transforma dos órdenes familiares en peticiones y distingue qué se afirmó de qué se esperaba."
    ],
    "model": [
      "Durante años, mi familia esperaba que eligiera una profesión conocida. Cuando anuncié que quería formarme en restauración musical, mi padre preguntó de qué iba a vivir. Yo escuché una prohibición, aunque él nunca me dijo que abandonara el proyecto. Respondí como si aquella pregunta demostrara que no confiaba en mí y dejamos de hablar de los aspectos concretos de la decisión.",
      "Ahora entiendo mejor las dos interpretaciones. Mi padre había crecido en una época de mucha inseguridad laboral y quería que tuviera estabilidad. Yo necesitaba que reconociera la preparación que había realizado antes de contarle mi idea. Ninguno expresó esa necesidad directamente. Él insistía en que presentara un presupuesto y yo repetía que tenía derecho a decidir, como si una afirmación excluyera necesariamente la otra.",
      "Propongo retomar la conversación con una regla: antes de responder, cada persona resumirá la preocupación de la otra y preguntará si la ha entendido. Después podremos revisar los costes de formación y las posibilidades de trabajo. Eso no obliga a mi padre a entusiasmarse con la profesión ni me obliga a elegir otra. Sí nos permite distinguir una advertencia razonable de una expectativa que quizá deba revisar.",
      "También quisiera reconocer mi parte: investigué escuelas, pero evité calcular algunos gastos porque temía que debilitaran mi argumento. Presentarlos con claridad no significa renunciar al proyecto. Significa defenderlo con información y aceptar que la autonomía incluye hacerse cargo de sus dificultades."
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
        "prompt": "Presenta el caso de «Lo que esperaban de nosotros» a alguien que no conoce las fuentes. Defiende una interpretación, menciona una evidencia y una reserva, y termina con una pregunta que permita continuar.",
        "prep": [
          "Anota tesis, evidencia y límite en cinco palabras clave.",
          "Ensaya una transición y una reformulación."
        ],
        "seconds": 180,
        "model": "Mi familia esperaba que eligiera una profesión conocida. Durante mucho tiempo entendí sus preguntas como si fueran órdenes, aunque nunca me prohibieron buscar otra salida. Ahora veo que necesitaban información y que yo necesitaba reconocimiento. Propongo que cada uno exponga primero qué le preocupa y después repita la preocupación del otro. No se trata de aceptar cualquier argumento, sino de comprobar que estamos discutiendo sobre la misma cuestión.",
        "selfCheck": [
          "Se entiende mi postura sin leer un guion.",
          "No convierto una conjetura en hecho.",
          "Uso pausas para organizar el mensaje."
        ]
      },
      {
        "title": "Interacción y mediación",
        "prompt": "Tu docente representa a una persona que cuestiona tu interpretación de contrastar expectativas entre generaciones. Resume su postura antes de responder. Pregunta qué condición cambiaría su opinión; negocia un acuerdo parcial o explica respetuosamente por qué no lo hay.",
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
        "task": "Presenta tu entrega de «Lo que esperaban de nosotros» en tres minutos y responde a una objeción inesperada.",
        "phrases": [
          "Mi interpretación se apoya en…",
          "La reserva que mantengo es…"
        ]
      },
      {
        "move": "Reformula",
        "task": "Explica a otra persona lo que sostiene una voz del caso de Rosario; pídele a tu docente que compruebe si has conservado el matiz.",
        "phrases": [
          "Si te he entendido bien…",
          "No afirma que…; lo que plantea es…"
        ]
      },
      {
        "move": "Negocia",
        "task": "Acuerda un criterio para valorar tu propuesta sobre contrastar expectativas entre generaciones; identifica una condición que todavía necesita confirmación.",
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
        "q": "En la evaluación final de «Lo que esperaban de nosotros», ¿qué resume mejor el propósito?",
        "options": [
          "Evitar cualquier intercambio entre personas.",
          "Comprender expectativas familiares sin decidir por otra persona",
          "Sustituir toda evidencia por una opinión rotunda."
        ],
        "answer": 1,
        "why": "Relaciona comprensión y propósito.",
        "type": "choice"
      },
      {
        "type": "listen",
        "audio": "Querían que empezara a trabajar enseguida. Mi padre no me prohibió estudiar, pero hablaba como si continuar fuera un lujo. Yo necesitaba que alguien me explicara las becas disponibles. Al final, una profesora me ayudó y pude combinar ambas cosas.",
        "voice": "es-MX-m",
        "q": "Al escuchar de nuevo a Elena en «Lo que esperaban de nosotros», ¿qué intervención reconoces?",
        "options": [
          "Me niego a explicar mi punto de vista sobre este asunto.",
          "Querían que empezara a trabajar enseguida",
          "No hay ninguna condición pendiente y todas las partes aceptaron."
        ],
        "answer": 1,
        "why": "Atiende a la formulación y a la posición, no solo al tema."
      },
      {
        "type": "gap",
        "q": "Mi profesor me animó a que ___ la beca.",
        "answers": [
          [
            "solicitara"
          ]
        ],
        "why": "Influencia pasada."
      },
      {
        "type": "open",
        "prompt": "Texto de partida: «Respondía con la seguridad de alguien que conocía mi futuro, pero no lo conocía.» Usa como si con conocer.",
        "model": "Respondía como si conociera mi futuro.",
        "checklist": [
          "Conservo participantes, referencia temporal y contenido pertinente.",
          "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
          "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
        ]
      },
      {
        "type": "error",
        "sentence": "Mis abuelos deseaban que seríamos independientes.",
        "answers": [
          "Mis abuelos deseaban que fuéramos independientes."
        ],
        "why": "Revisa la función, la construcción y la coherencia con el contexto; compara con el modelo de corrección."
      },
      {
        "type": "open",
        "prompt": "Sintetiza en 50 palabras lo que sabes y lo que no puedes concluir sobre «Lo que esperaban de nosotros».",
        "model": "Mi familia esperaba que eligiera una profesión conocida. Durante mucho tiempo entendí sus preguntas como si fueran órdenes, aunque nunca me prohibieron buscar otra salida. Ahora veo que necesitaban información y que yo necesitaba reconocimiento. Propongo que cada uno exponga primero qué le preocupa y después repita la preocupación del otro. No se trata de aceptar cualquier argumento, sino de comprobar que estamos discutiendo sobre la misma cuestión.",
        "checklist": [
          "Atribuyo una fuente.",
          "Explicito una reserva."
        ]
      },
      {
        "type": "open",
        "prompt": "Contesta a quien sostiene lo contrario de tu postura sobre contrastar expectativas entre generaciones; concede una razón y conserva tu argumento.",
        "model": "Mi familia esperaba que eligiera una profesión conocida. Durante mucho tiempo entendí sus preguntas como si fueran órdenes, aunque nunca me prohibieron buscar otra salida. Ahora veo que necesitaban información y que yo necesitaba reconocimiento. Propongo que cada uno exponga primero qué le preocupa y después repita la preocupación del otro. No se trata de aceptar cualquier argumento, sino de comprobar que estamos discutiendo sobre la misma cuestión.",
        "checklist": [
          "Conservo la postura contraria sin exagerarla.",
          "Respondo con una razón o condición."
        ]
      },
      {
        "type": "open",
        "prompt": "Explica dos cambios que harías para adaptar tu entrega de la semana 2 a un mensaje cercano y a un informe formal.",
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
      "Puedo contrastar expectativas entre generaciones.",
      "Puedo sostener una interpretación con evidencia y una reserva.",
      "Puedo revisar mi producción y continuarla mediante interacción."
    ],
    "review": [
      "Sin mirar la semana 1, transforma dos órdenes familiares en peticiones y distingue qué se afirmó de qué se esperaba.",
      "Dentro de 48 horas, sin consultar el texto, reconstruye dos posiciones y un recurso lingüístico; comprueba después qué omitiste.",
      "Una semana después, adapta tu respuesta a otro destinatario y recupera los objetivos marcados en la práctica."
    ]
  }
};
