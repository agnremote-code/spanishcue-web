import type { Module } from "../../types";

/** Original B2 material; see docs/autoestudio/b2-audit.md. */
export const b2w14: Module = {
  "id": "b2-14",
  "level": "b2",
  "week": 14,
  "kind": "core",
  "title": "Se nos pasó: responder por un error",
  "subtitle": "Disculparse y acordar una reparación proporcionada.",
  "stop": {
    "place": "Valparaíso",
    "country": "Chile"
  },
  "minutes": 120,
  "newObjectives": [
    "b2.gram.valores-se",
    "b2.voc.accidentes-cotidianos",
    "b2.pron.cliticos-cadena",
    "b2.fun.disculparse-responsabilidad",
    "b2.spk.disculpa"
  ],
  "reviewObjectives": [
    "b2.disc.argumentacion",
    "b2.disc.posicionamiento",
    "b2.voc.ciudad-sostenible",
    "b2.pron.exposicion-oral",
    "b2.wri.ensayo-argumentativo",
    "b2.spk.exposicion",
    "b2.gram.verbos-cambio-sistema",
    "b2.gram.ser-estar-matices",
    "b2.voc.personalidad",
    "b2.pron.chile",
    "b2.fun.describir-transformacion",
    "b2.lis.voces-chile"
  ],
  "prerequisites": [
    "b2-13"
  ],
  "goal": {
    "canDo": "Puedo disculparse y acordar una reparación proporcionada con razones, matices y condiciones claras.",
    "steps": [
      "Recupera decisiones lingüísticas anteriores y contrástalas con este caso.",
      "Escucha sin transcripción y reconstruye las posiciones: reconocer un perjuicio y ofrecer reparación con seguimiento.",
      "Lee las fuentes, identifica límites de la evidencia y prepara tu respuesta.",
      "Escribe, revisa y ensaya una interacción que continuarás con tu docente."
    ]
  },
  "theory": {
    "intro": "La mascota te propone una misión: disculparse y acordar una reparación proporcionada. Decide qué quieres comunicar antes de elegir una forma.",
    "parts": [
      {
        "heading": "Disculparse y acordar una reparación proporcionada",
        "body": [
          "Se puede ser reflexivo, recíproco, parte de un verbo pronominal o marca de pasiva e impersonalidad. En se me perdió el documento, el documento es sujeto y me identifica a la persona afectada. El plural cambia el verbo: se me perdieron las llaves. La construcción no demuestra que no hubiera responsabilidad."
        ],
        "examples": [
          {
            "es": "Se nos olvidaron las reservas del sábado.",
            "note": "Sujeto plural: las reservas."
          },
          {
            "es": "Me acuerdo de tu petición.",
            "note": "Acordarse requiere de."
          },
          {
            "es": "Las dos responsables se disculparon por teléfono.",
            "note": "Reciprocidad o acción de ambas, según contexto."
          }
        ],
        "mistakes": [
          {
            "wrong": "Se nos olvidó las dos inscripciones.",
            "right": "Se nos olvidaron las dos inscripciones.",
            "why": "El verbo concuerda con las dos inscripciones."
          }
        ]
      },
      {
        "heading": "Interpretación, registro y efecto",
        "body": [
          "Ir e irse, quedar y quedarse, acordar y acordarse de muestran cambios de significado con el pronombre. Una disculpa eficaz identifica el daño, asume lo que depende de ti y ofrece una reparación verificable. Explicar un accidente ayuda a entenderlo; repetir que fue involuntario puede sonar a excusa si evita responder a sus consecuencias."
        ],
        "examples": [
          {
            "es": "Se nos olvidaron las reservas del sábado.",
            "note": "Explica qué información afirma y cuál deja abierta."
          },
          {
            "es": "Las dos responsables se disculparon por teléfono.",
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
        "prompt": "Completa estas decisiones lingüísticas de se nos pasó: responder por un error; justifica el modo, la forma o la combinación.",
        "items": [
          {
            "q": "Se nos ___ las reservas del sábado.",
            "answers": [
              [
                "olvidaron"
              ]
            ],
            "why": "Sujeto plural: las reservas."
          },
          {
            "q": "Me acuerdo ___ tu petición.",
            "answers": [
              [
                "de"
              ]
            ],
            "why": "Acordarse requiere de."
          },
          {
            "q": "Las dos responsables se ___ por teléfono.",
            "answers": [
              [
                "disculparon"
              ]
            ],
            "why": "Reciprocidad o acción de ambas, según contexto."
          }
        ]
      },
      {
        "id": "g-reconstruir",
        "type": "open",
        "prompt": "Reformula con autonomía. Lee el texto de partida y la consigna de cada ítem; después contrasta tu respuesta con el modelo orientativo y la lista de revisión. Otras soluciones pueden ser válidas.",
        "items": [
          {
            "prompt": "Texto de partida: «Olvidamos las inscripciones sin querer.» Reformula con se y nos; conserva el plural.",
            "model": "Se nos olvidaron las inscripciones.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          },
          {
            "prompt": "Texto de partida: «Recuerdo tu reclamación.» Usa acordarse y su preposición.",
            "model": "Me acuerdo de tu reclamación.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          },
          {
            "prompt": "Texto de partida: «No avisamos a tiempo y reconocemos nuestra responsabilidad.» Comienza por asumimos sin borrar el agente de avisar.",
            "model": "Asumimos la responsabilidad de no haber avisado a tiempo.",
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
        "title": "Disculparse y acordar una reparación proporcionada",
        "items": [
          {
            "es": "asumir responsabilidad",
            "note": "reconocer la propia obligación"
          },
          {
            "es": "presentar una disculpa",
            "note": "expresar pesar por un daño"
          },
          {
            "es": "ofrecer una reparación",
            "note": "proponer compensar consecuencias"
          },
          {
            "es": "cometer un descuido",
            "note": "omitir una atención necesaria"
          },
          {
            "es": "hacer seguimiento",
            "note": "comprobar el avance posterior"
          },
          {
            "es": "reconocer el perjuicio",
            "note": "admitir el daño ocasionado"
          },
          {
            "es": "dar una explicación",
            "note": "aclarar qué ocurrió"
          },
          {
            "es": "cumplir lo prometido",
            "note": "realizar el compromiso adquirido"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "v-relaciones",
        "type": "match",
        "prompt": "Relaciona las expresiones útiles para disculparse y acordar una reparación proporcionada con su significado.",
        "pairs": [
          {
            "left": "asumir responsabilidad",
            "right": "reconocer la propia obligación"
          },
          {
            "left": "presentar una disculpa",
            "right": "expresar pesar por un daño"
          },
          {
            "left": "ofrecer una reparación",
            "right": "proponer compensar consecuencias"
          },
          {
            "left": "cometer un descuido",
            "right": "omitir una atención necesaria"
          },
          {
            "left": "hacer seguimiento",
            "right": "comprobar el avance posterior"
          },
          {
            "left": "reconocer el perjuicio",
            "right": "admitir el daño ocasionado"
          },
          {
            "left": "dar una explicación",
            "right": "aclarar qué ocurrió"
          },
          {
            "left": "cumplir lo prometido",
            "right": "realizar el compromiso adquirido"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Une se nos olvidó y se me quedaron en un grupo fluido; después haz una pausa que dé espacio al reconocimiento del daño.",
    "explanation": [
      "Une se nos olvidó y se me quedaron en un grupo fluido; después haz una pausa que dé espacio al reconocimiento del daño.",
      "Escucha primero la secuencia verbal. Después lee la misma frase con una intención distinta, grábate localmente y compara con tu docente. La voz sintética es apoyo de escucha: no certifica variedad regional, ironía ni evaluación automática de tu pronunciación."
    ],
    "examples": [
      {
        "es": "Se nos olvidaron las reservas del sábado."
      },
      {
        "es": "Me acuerdo de tu petición."
      },
      {
        "es": "Las dos responsables se disculparon por teléfono."
      }
    ],
    "perceive": {
      "id": "p-percepcion",
      "type": "listen",
      "prompt": "Escucha sin leer el ejemplo previo si quieres comprobar tu percepción; identifica el fragmento verbal y después marca su sílaba tónica.",
      "items": [
        {
          "q": "En la muestra 1 de se nos pasó: responder por un error, ¿qué fragmento se oye?",
          "options": [
            "olvidaran",
            "olvidaron",
            "olvidó"
          ],
          "answer": 1,
          "why": "Sujeto plural: las reservas.",
          "audio": "Se nos olvidaron las reservas del sábado.",
          "voice": "es-ES-f"
        },
        {
          "q": "En la muestra 2 de se nos pasó: responder por un error, ¿qué fragmento se oye?",
          "options": [
            "de",
            "a",
            "en"
          ],
          "answer": 0,
          "why": "Acordarse requiere de.",
          "audio": "Me acuerdo de tu petición.",
          "voice": "es-ES-f"
        }
      ]
    },
    "produce": [
      {
        "text": "Se nos olvidaron las reservas del sábado.",
        "tip": "Une se nos olvidó y se me quedaron en un grupo fluido; después haz una pausa que dé espacio al reconocimiento del daño.",
        "voice": "es-ES-f"
      },
      {
        "text": "Me acuerdo de tu petición.",
        "tip": "Une se nos olvidó y se me quedaron en un grupo fluido; después haz una pausa que dé espacio al reconocimiento del daño.",
        "voice": "es-ES-f"
      },
      {
        "text": "Las dos responsables se disculparon por teléfono.",
        "tip": "Une se nos olvidó y se me quedaron en un grupo fluido; después haz una pausa que dé espacio al reconocimiento del daño.",
        "voice": "es-ES-f"
      }
    ]
  },
  "listening": {
    "title": "Voces y decisiones: Se nos pasó: responder por un error",
    "context": "Guion original de interacción. Primera escucha sin transcripción: identifica propósito y posiciones; segunda: datos y condiciones; tercera: inferencias. Reproducción sintética, sin verificación de acento regional.",
    "speakers": [
      {
        "id": "s1",
        "name": "Coordinadora",
        "voice": "es-ES-f",
        "role": "Interlocutor del guion original; voz sintética disponible"
      },
      {
        "id": "s2",
        "name": "Participante",
        "voice": "es-MX-m",
        "role": "Interlocutor del guion original; voz sintética disponible"
      },
      {
        "id": "s3",
        "name": "Administrativo",
        "voice": "es-ES-f",
        "role": "Interlocutor del guion original; voz sintética disponible"
      }
    ],
    "script": [
      {
        "speaker": "s1",
        "text": "Gracias por hablar conmigo. Se nos olvidó incluir dos inscripciones en la lista de avisos y ustedes llegaron al edificio equivocado. Quiero reconocer el tiempo que perdieron y explicar qué podemos ofrecer, antes de entrar en cómo ocurrió el fallo."
      },
      {
        "speaker": "s2",
        "text": "Agradezco que lo diga así. En el primer mensaje parecía que yo debía entenderlo porque esas cosas pasan. No estaba pidiendo que nadie fuera perfecto, sino que se reconociera que tuve que cambiar mi turno y pagar un desplazamiento que no sirvió de nada."
      },
      {
        "speaker": "s3",
        "text": "Yo registré su inscripción en papel y no comprobé que pasara al sistema. Me hago cargo de esa parte. También hemos visto que el procedimiento no incluía una segunda revisión. No lo menciono para quitarme responsabilidad, sino para que el mismo error no dependa de quién esté trabajando."
      },
      {
        "speaker": "s1",
        "text": "Podemos ofrecerle una recuperación el viernes o devolverle la parte correspondiente. Si ninguna opción responde al perjuicio que describe, la escuchamos. Además, el próximo cambio de sede se confirmará por dos vías y comprobaremos que todas las personas lo hayan recibido."
      },
      {
        "speaker": "s2",
        "text": "Prefiero la devolución. El viernes no puedo y no quiero reorganizar otra semana para corregir un fallo que no provoqué. Sí les pediría que me confirmen por escrito cuándo se realizará, porque ya he dedicado bastante tiempo a esta gestión."
      },
      {
        "speaker": "s3",
        "text": "Lo haré hoy y fijaré una fecha concreta. También revisaremos dentro de un mes si funciona el nuevo registro. No podemos recuperar su tarde, pero podemos cumplir la reparación acordada y evitar que nuestra explicación termine siendo otra promesa sin seguimiento."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha la conversación completa; identifica el problema y la intención antes de buscar palabras aisladas.",
        "exercise": {
          "id": "l-global",
          "type": "choice",
          "prompt": "¿Qué organiza la conversación situada en Valparaíso?",
          "items": [
            {
              "q": "¿Cuál es el propósito global de esta conversación: Se nos pasó: responder por un error?",
              "options": [
                "Contar una única versión sin permitir preguntas.",
                "Reconocer un perjuicio y ofrecer reparación con seguimiento",
                "Leer una lista de instrucciones sin responder a nadie."
              ],
              "answer": 1,
              "why": "Las intervenciones se responden y matizan sus posiciones."
            },
            {
              "q": "¿Qué relación predomina entre las voces en «Se nos pasó: responder por un error»?",
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
          "prompt": "Localiza una intervención concreta en «Se nos pasó: responder por un error».",
          "items": [
            {
              "q": "¿Por qué el administrativo menciona el procedimiento?",
              "options": [
                "Para prevenir la repetición sin negar su parte.",
                "Para demostrar que nadie debe responder.",
                "Para culpar a la participante."
              ],
              "answer": 0,
              "why": "La respuesta conserva la condición o información expresada por esa persona."
            },
            {
              "q": "¿Qué frase aparece en la intervención inicial de «Se nos pasó: responder por un error»?",
              "options": [
                "Ya está todo decidido y no necesitamos escuchar a ninguna parte.",
                "No hay información que podamos discutir en esta reunión.",
                "Gracias por hablar conmigo."
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
              "prompt": "En «Se nos pasó: responder por un error», cita una reserva o una reformulación del diálogo, explica qué interpretación evita y qué quedaría sin resolver si se omitiera.",
              "model": "Lo haré hoy y fijaré una fecha concreta. También revisaremos dentro de un mes si funciona el nuevo registro. No podemos recuperar su tarde, pero podemos cumplir la reparación acordada y evitar que nuestra explicación termine siendo otra promesa sin seguimiento.",
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
    "title": "Se nos pasó: responder por un error: texto para interpretar",
    "genre": "Artículo, correspondencia o relato original",
    "frame": "Material original de SpanishCue; las situaciones y los datos son didácticos, no noticias reales ni textos oficiales de examen.",
    "text": [
      "La academia cambió de aula un taller y olvidó avisar a dos participantes. Cuando llegaron al edificio anterior, encontraron la puerta cerrada. Una de ellas había pedido salir antes del trabajo; la otra había viajado desde una localidad cercana. El mensaje de disculpa llegó al día siguiente: «Se nos pasó avisarles. Estas cosas ocurren cuando hay mucho movimiento». La frase reconocía el olvido, pero el comentario posterior parecía reducir la experiencia de las afectadas a un inconveniente inevitable.",
      "La coordinadora revisó el caso después de recibir una reclamación. Se habían actualizado los correos de la lista general, pero dos inscripciones realizadas en persona no aparecían en ella. El problema no era únicamente que alguien hubiera olvidado pulsar un botón. Existían dos registros que no se comprobaban entre sí. Presentarlo como un accidente individual habría permitido cerrar la conversación rápidamente, aunque habría dejado intacta la posibilidad de repetirlo con otras personas.",
      "En un segundo mensaje, la academia explicó el fallo y asumió sus consecuencias. Ofreció recuperar la sesión sin coste y devolver el importe proporcional a quienes no pudieran asistir. También se comprometió a confirmar por dos vías los próximos cambios de sede y a unificar los registros. Una participante aceptó recuperar la clase; la otra solicitó la devolución porque el nuevo horario tampoco le servía. La coordinadora no interpretó esa elección como falta de comprensión: una reparación no obliga a continuar una relación.",
      "El equipo acordó comprobar al mes si el procedimiento se cumplía. La disculpa dejó de ser una frase destinada a obtener perdón inmediato y se convirtió en una secuencia de acciones. Decir se nos olvidó puede describir con naturalidad un error involuntario. Su efecto depende de lo que venga después: una excusa que diluya el daño o un compromiso que permita a la otra persona decidir qué solución considera aceptable."
    ],
    "glossary": [
      {
        "es": "asumir responsabilidad",
        "note": "reconocer la propia obligación"
      },
      {
        "es": "presentar una disculpa",
        "note": "expresar pesar por un daño"
      },
      {
        "es": "ofrecer una reparación",
        "note": "proponer compensar consecuencias"
      }
    ],
    "tasks": [
      {
        "id": "r-comprender",
        "type": "choice",
        "prompt": "Interpreta tesis y alcance; descarta respuestas que exageren la conclusión.",
        "items": [
          {
            "q": "¿Qué cambia entre las dos disculpas?",
            "options": [
              "La primera ya incluía una devolución con fecha.",
              "La segunda reconoce daños y ofrece opciones verificables.",
              "La segunda exige aceptar otra clase."
            ],
            "answer": 1,
            "why": "Comprueba esta interpretación con el texto completo y no solo con una palabra aislada."
          },
          {
            "q": "¿Qué revela la elección de devolución?",
            "options": [
              "Aceptar una reparación no obliga a continuar el servicio.",
              "La participante no entendió la explicación.",
              "La academia no ofreció ninguna alternativa."
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
            "prompt": "En «Se nos pasó: responder por un error», resume dos posiciones en 60–80 palabras, cita una evidencia y explica un límite que el texto no permite resolver.",
            "model": "Lamento que el cambio de sede no le fuera comunicado. Se nos quedaron dos inscripciones fuera de la lista y no realizamos la comprobación necesaria. Reconozco que esto le ocasionó un desplazamiento inútil y una modificación de su jornada. Podemos ofrecerle recuperar la sesión o devolverle el importe correspondiente. Si elige la devolución, la tramitaremos antes del jueves. Hemos añadido una revisión de los registros y comprobaremos su cumplimiento dentro de un mes.",
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
          "quote": "La academia cambió de aula un taller y olvidó avisar a dos participantes.",
          "note": "Identifica qué establece el inicio y cómo prepara la interpretación posterior."
        },
        {
          "quote": "Su efecto depende de lo que venga después: una excusa que diluya el daño o un compromiso que permita a la otra persona decidir qué solución considera aceptable.",
          "note": "Relaciona el cierre con la tesis o con el giro narrativo; explica qué no afirma."
        }
      ]
    }
  },
  "practice": {
    "intro": "Retoma la disculpa del comedor y las condiciones del local: ofrece una reparación que respete daños, responsables y límites.",
    "exercises": [
      {
        "id": "x-orden",
        "type": "order",
        "prompt": "Reconstruye los mensajes del caso de Valparaíso y conserva sus relaciones.",
        "items": [
          {
            "words": [
              "En",
              "«Se nos pasó: responder por un error»,",
              "Se",
              "nos",
              "olvidaron",
              "las",
              "reservas",
              "del",
              "sábado."
            ],
            "why": "Sujeto plural: las reservas."
          },
          {
            "words": [
              "En",
              "«Se nos pasó: responder por un error»,",
              "Las",
              "dos",
              "responsables",
              "se",
              "disculparon",
              "por",
              "teléfono."
            ],
            "why": "Reciprocidad o acción de ambas, según contexto."
          }
        ]
      },
      {
        "id": "x-edicion",
        "type": "error",
        "prompt": "Revisa tres borradores de se nos pasó: responder por un error; cada uno tiene un único error deliberado.",
        "items": [
          {
            "sentence": "Se nos olvidó las dos inscripciones.",
            "answers": [
              "Se nos olvidaron las dos inscripciones."
            ],
            "why": "El verbo concuerda con las dos inscripciones."
          },
          {
            "sentence": "Me acuerdo tu reclamación.",
            "answers": [
              "Me acuerdo de tu reclamación."
            ],
            "why": "Acordarse de mantiene su régimen."
          },
          {
            "sentence": "Se me quedaron la ficha en el edificio anterior.",
            "answers": [
              "Se me quedó la ficha en el edificio anterior."
            ],
            "why": "La ficha es sujeto singular."
          }
        ]
      },
      {
        "id": "x-produccion",
        "type": "open",
        "prompt": "Prepara dos fragmentos antes de tu entrega independiente; el modelo es una posibilidad, no una respuesta única.",
        "items": [
          {
            "prompt": "Abre tu respuesta sobre disculparse y acordar una reparación proporcionada con una postura y una razón; adapta el destinatario.",
            "model": "Lamento que el cambio de sede no le fuera comunicado.",
            "checklist": [
              "Presento una postura concreta.",
              "Ajusto el registro a quien recibirá el mensaje."
            ]
          },
          {
            "prompt": "Reformula una objeción o una reserva de «Se nos pasó: responder por un error» sin debilitarla, y responde con una condición verificable.",
            "model": "Lamento que el cambio de sede no le fuera comunicado. Se nos quedaron dos inscripciones fuera de la lista y no realizamos la comprobación necesaria. Reconozco que esto le ocasionó un desplazamiento inútil y una modificación de su jornada. Podemos ofrecerle recuperar la sesión o devolverle el importe correspondiente. Si elige la devolución, la tramitaremos antes del jueves. Hemos añadido una revisión de los registros y comprobaremos su cumplimiento dentro de un mes.",
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
            "prompt": "Recupera la semana 11 sin abrir su explicación y aplica sus recursos a «Se nos pasó: responder por un error»: Estructura argumentativa; Marcar la postura; Urbanismo y movilidad; Ritmo de una exposición oral; Ensayo argumentativo; Exposición de dos minutos. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo organizar tesis, argumentos, contraargumentos y conclusión con conectores variados. Puedo marcar mi postura y el grado de certeza: es indudable que, cabe pensar que, no está tan claro que. Puedo debatir sobre transporte, vivienda, gentrificación y espacio público. Puedo usar pausas estratégicas y énfasis para hacer clara una exposición. Puedo escribir un ensayo de 220 palabras con contraargumento. Puedo defender una propuesta en dos minutos con estructura clara.",
            "checklist": [
              "Integro los recursos indicados en una respuesta al caso actual.",
              "Conservo personas, tiempo, postura y límites de las fuentes.",
              "Marco una elección que tuve que corregir después de comprobarla."
            ]
          },
          {
            "prompt": "Recupera la semana 13 sin abrir su explicación y aplica sus recursos a «Se nos pasó: responder por un error»: El sistema de los verbos de cambio; Ser y estar: matices de percepción; Personalidad y transformaciones; Rasgos del español de Chile; Describir una transformación; Comprender una conversación sobre cambio y variación chilena. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo elegir entre ponerse, volverse, hacerse, convertirse en, llegar a ser y quedarse. Puedo usar estar para percepciones y cambios: está muy joven, está carísimo. Puedo describir rasgos de carácter con matices. Puedo describir rasgos variables del habla chilena y contrastarlos con una muestra real en clase, sin atribuirlos a una voz sintética. Puedo contar cómo cambió una persona o un lugar y valorarlo. Puedo seguir posiciones sobre cambios sociales y explicar marcadores locales; contrasto la fonética chilena con una muestra real en clase.",
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
    "task": "Escribe una respuesta a una reclamación por un aviso omitido. Explica el error sin diluir tu responsabilidad, ofrece dos reparaciones y concreta plazo y seguimiento; evita exigir perdón.",
    "context": "Destinatario, propósito y límites de la información forman parte de la evaluación. El modelo muestra una respuesta completa posible: analiza su organización y escribe después tu propio texto.",
    "steps": [
      "Extrae dos datos y dos posiciones de las fuentes; marca lo que no está confirmado.",
      "Planifica apertura, desarrollo, objeción o complicación y cierre antes de redactar.",
      "Escribe sin copiar el modelo; integra recursos nuevos y los recuperados.",
      "Revisa referentes, modo, tiempo, colocaciones y registro; reescribe un párrafo y explica el cambio."
    ],
    "useLanguage": [
      "Se puede ser reflexivo, recíproco, parte de un verbo pronominal o marca de pasiva e impersonalidad. En se me perdió el documento, el documento es sujeto y me identifica a la persona afectada. El plural cambia el verbo: se me perdieron las llaves. La construcción no demuestra que no hubiera responsabilidad.",
      "Ir e irse, quedar y quedarse, acordar y acordarse de muestran cambios de significado con el pronombre. Una disculpa eficaz identifica el daño, asume lo que depende de ti y ofrece una reparación verificable. Explicar un accidente ayuda a entenderlo; repetir que fue involuntario puede sonar a excusa si evita responder a sus consecuencias.",
      "Retoma la disculpa del comedor y las condiciones del local: ofrece una reparación que respete daños, responsables y límites."
    ],
    "model": [
      "Estimada participante: lamento que el cambio de sede no le fuera comunicado y que encontrara cerrado el edificio al llegar. Reconozco que esto le ocasionó un desplazamiento inútil y la necesidad de modificar su jornada laboral. Nuestra primera respuesta no reflejó adecuadamente ese perjuicio. Explicar que había mucho trabajo no justificaba que usted tuviera que asumir las consecuencias del fallo.",
      "Al revisar los registros, comprobamos que se nos habían quedado dos inscripciones fuera de la lista de avisos. Yo registré esas solicitudes en papel y no verifiqué su incorporación al sistema. Asumo esa omisión. Además, el procedimiento no incluía una comprobación entre ambas listas; señalarlo es necesario para prevenir otros casos, pero no elimina nuestra responsabilidad por lo ocurrido.",
      "Podemos ofrecerle recuperar la sesión sin coste o devolverle el importe correspondiente. La recuperación sería el viernes por la tarde. Si ese horario no le conviene, no necesita reorganizar otra jornada para resolver un error que no provocó. Si elige la devolución, la tramitaremos antes del jueves y le enviaremos confirmación escrita. Le agradecería que indicara cuál de las dos opciones prefiere.",
      "También hemos unificado los registros y añadido una segunda revisión para los cambios de sede. Dentro de un mes comprobaremos si el nuevo procedimiento se ha aplicado en todos los avisos. No podemos recuperar el tiempo que perdió, pero sí cumplir la reparación elegida y explicar las medidas adoptadas. Gracias por comunicar el problema; su reclamación nos permite corregir un fallo que nuestra respuesta inicial había minimizado."
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
        "prompt": "Presenta el caso de «Se nos pasó: responder por un error» a alguien que no conoce las fuentes. Defiende una interpretación, menciona una evidencia y una reserva, y termina con una pregunta que permita continuar.",
        "prep": [
          "Anota tesis, evidencia y límite en cinco palabras clave.",
          "Ensaya una transición y una reformulación."
        ],
        "seconds": 180,
        "model": "Lamento que el cambio de sede no le fuera comunicado. Se nos quedaron dos inscripciones fuera de la lista y no realizamos la comprobación necesaria. Reconozco que esto le ocasionó un desplazamiento inútil y una modificación de su jornada. Podemos ofrecerle recuperar la sesión o devolverle el importe correspondiente. Si elige la devolución, la tramitaremos antes del jueves. Hemos añadido una revisión de los registros y comprobaremos su cumplimiento dentro de un mes.",
        "selfCheck": [
          "Se entiende mi postura sin leer un guion.",
          "No convierto una conjetura en hecho.",
          "Uso pausas para organizar el mensaje."
        ]
      },
      {
        "title": "Interacción y mediación",
        "prompt": "Tu docente representa a una persona que cuestiona tu interpretación de disculparse y acordar una reparación proporcionada. Resume su postura antes de responder. Pregunta qué condición cambiaría su opinión; negocia un acuerdo parcial o explica respetuosamente por qué no lo hay.",
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
        "task": "Presenta tu entrega de «Se nos pasó: responder por un error» en tres minutos y responde a una objeción inesperada.",
        "phrases": [
          "Mi interpretación se apoya en…",
          "La reserva que mantengo es…"
        ]
      },
      {
        "move": "Reformula",
        "task": "Explica a otra persona lo que sostiene una voz del caso de Valparaíso; pídele a tu docente que compruebe si has conservado el matiz.",
        "phrases": [
          "Si te he entendido bien…",
          "No afirma que…; lo que plantea es…"
        ]
      },
      {
        "move": "Negocia",
        "task": "Acuerda un criterio para valorar tu propuesta sobre disculparse y acordar una reparación proporcionada; identifica una condición que todavía necesita confirmación.",
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
        "q": "En la evaluación final de «Se nos pasó: responder por un error», ¿qué resume mejor el propósito?",
        "options": [
          "Evitar cualquier intercambio entre personas.",
          "Reconocer un perjuicio y ofrecer reparación con seguimiento",
          "Sustituir toda evidencia por una opinión rotunda."
        ],
        "answer": 1,
        "why": "Relaciona comprensión y propósito.",
        "type": "choice"
      },
      {
        "type": "listen",
        "audio": "Agradezco que lo diga así. En el primer mensaje parecía que yo debía entenderlo porque esas cosas pasan. No estaba pidiendo que nadie fuera perfecto, sino que se reconociera que tuve que cambiar mi turno y pagar un desplazamiento que no sirvió de nada.",
        "voice": "es-MX-m",
        "q": "Al escuchar de nuevo a Participante en «Se nos pasó: responder por un error», ¿qué intervención reconoces?",
        "options": [
          "Me niego a explicar mi punto de vista sobre este asunto.",
          "Agradezco que lo diga así",
          "No hay ninguna condición pendiente y todas las partes aceptaron."
        ],
        "answer": 1,
        "why": "Atiende a la formulación y a la posición, no solo al tema."
      },
      {
        "type": "gap",
        "q": "Se le ___ el recibo a la coordinadora.",
        "answers": [
          [
            "perdió"
          ]
        ],
        "why": "Sujeto singular: el recibo."
      },
      {
        "type": "open",
        "prompt": "Texto de partida: «Olvidé sin querer los dos números de reserva.» Usa se me.",
        "model": "Se me olvidaron los dos números de reserva.",
        "checklist": [
          "Conservo participantes, referencia temporal y contenido pertinente.",
          "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
          "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
        ]
      },
      {
        "type": "error",
        "sentence": "No me acuerdo cuál era el plazo.",
        "answers": [
          "No me acuerdo de cuál era el plazo."
        ],
        "why": "Revisa la función, la construcción y la coherencia con el contexto; compara con el modelo de corrección."
      },
      {
        "type": "open",
        "prompt": "Sintetiza en 50 palabras lo que sabes y lo que no puedes concluir sobre «Se nos pasó: responder por un error».",
        "model": "Lamento que el cambio de sede no le fuera comunicado. Se nos quedaron dos inscripciones fuera de la lista y no realizamos la comprobación necesaria. Reconozco que esto le ocasionó un desplazamiento inútil y una modificación de su jornada. Podemos ofrecerle recuperar la sesión o devolverle el importe correspondiente. Si elige la devolución, la tramitaremos antes del jueves. Hemos añadido una revisión de los registros y comprobaremos su cumplimiento dentro de un mes.",
        "checklist": [
          "Atribuyo una fuente.",
          "Explicito una reserva."
        ]
      },
      {
        "type": "open",
        "prompt": "Contesta a quien sostiene lo contrario de tu postura sobre disculparse y acordar una reparación proporcionada; concede una razón y conserva tu argumento.",
        "model": "Lamento que el cambio de sede no le fuera comunicado. Se nos quedaron dos inscripciones fuera de la lista y no realizamos la comprobación necesaria. Reconozco que esto le ocasionó un desplazamiento inútil y una modificación de su jornada. Podemos ofrecerle recuperar la sesión o devolverle el importe correspondiente. Si elige la devolución, la tramitaremos antes del jueves. Hemos añadido una revisión de los registros y comprobaremos su cumplimiento dentro de un mes.",
        "checklist": [
          "Conservo la postura contraria sin exagerarla.",
          "Respondo con una razón o condición."
        ]
      },
      {
        "type": "open",
        "prompt": "Explica dos cambios que harías para adaptar tu entrega de la semana 14 a un mensaje cercano y a un informe formal.",
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
      "Puedo disculparse y acordar una reparación proporcionada.",
      "Puedo sostener una interpretación con evidencia y una reserva.",
      "Puedo revisar mi producción y continuarla mediante interacción."
    ],
    "review": [
      "Retoma la disculpa del comedor y las condiciones del local: ofrece una reparación que respete daños, responsables y límites.",
      "Dentro de 48 horas, sin consultar el texto, reconstruye dos posiciones y un recurso lingüístico; comprueba después qué omitiste.",
      "Una semana después, adapta tu respuesta a otro destinatario y recupera los objetivos marcados en la práctica."
    ]
  }
};
