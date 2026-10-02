import type { Module } from "../../types";

/** Original B2 material; see docs/autoestudio/b2-audit.md. */
export const b2w17: Module = {
  "id": "b2-17",
  "level": "b2",
  "week": 17,
  "kind": "core",
  "title": "Decir que no sin cerrar la puerta",
  "subtitle": "Mitigar un desacuerdo profesional con claridad.",
  "stop": {
    "place": "Puerto Montt",
    "country": "Chile"
  },
  "minutes": 120,
  "newObjectives": [
    "b2.fun.mitigacion",
    "b2.gram.importar-que",
    "b2.voc.correspondencia-formal",
    "b2.pron.mitigacion-prosodia",
    "b2.wri.correo-delicado",
    "b2.lis.reunion"
  ],
  "reviewObjectives": [
    "b2.gram.valores-se",
    "b2.voc.accidentes-cotidianos",
    "b2.pron.cliticos-cadena",
    "b2.fun.disculparse-responsabilidad",
    "b2.spk.disculpa",
    "b2.voc.colocaciones",
    "b2.voc.formacion-palabras",
    "b2.gram.nominalizacion",
    "b2.pron.acento-derivados",
    "b2.wri.reescritura-precisa",
    "b2.fun.definir"
  ],
  "prerequisites": [
    "b2-16"
  ],
  "goal": {
    "canDo": "Puedo mitigar un desacuerdo profesional con claridad con razones, matices y condiciones claras.",
    "steps": [
      "Recupera decisiones lingüísticas anteriores y contrástalas con este caso.",
      "Escucha sin transcripción y reconstruye las posiciones: rechazar un formato y mantener una alternativa condicionada.",
      "Lee las fuentes, identifica límites de la evidencia y prepara tu respuesta.",
      "Escribe, revisa y ensaya una interacción que continuarás con tu docente."
    ]
  },
  "theory": {
    "intro": "La mascota te propone una misión: mitigar un desacuerdo profesional con claridad. Decide qué quieres comunicar antes de elegir una forma.",
    "parts": [
      {
        "heading": "Mitigar un desacuerdo profesional con claridad",
        "body": [
          "¿Te importa que revise…? pide permiso con presente de subjuntivo; ¿te importaría que revisara…? añade distancia cortés mediante condicional e imperfecto de subjuntivo. Con el mismo sujeto puede usarse infinitivo: ¿te importaría revisar…? La mitigación debe permitir identificar qué se acepta, qué se rechaza y qué se propone."
        ],
        "examples": [
          {
            "es": "¿Te importaría que revisáramos el plazo?",
            "note": "Petición mitigada con sujeto nosotros."
          },
          {
            "es": "Quizá no sea la opción más adecuada.",
            "note": "Valoración presentada con cautela."
          },
          {
            "es": "Le agradecería que nos enviara una alternativa.",
            "note": "Petición formal a usted."
          }
        ],
        "mistakes": [
          {
            "wrong": "Le agradecería que nos envía el presupuesto.",
            "right": "Le agradecería que nos enviara el presupuesto.",
            "why": "La petición mitigada selecciona subjuntivo."
          }
        ]
      },
      {
        "heading": "Interpretación, registro y efecto",
        "body": [
          "Convendría, quizá no sea lo más adecuado y me temo que pueden suavizar una crítica. Una acumulación de fórmulas evasivas también puede ocultar un no y producir falsas expectativas. Ajusta saludo, tratamiento y cierre a la relación; conserva los límites concretos y ofrece alternativas únicamente si puedes sostenerlas."
        ],
        "examples": [
          {
            "es": "¿Te importaría que revisáramos el plazo?",
            "note": "Explica qué información afirma y cuál deja abierta."
          },
          {
            "es": "Le agradecería que nos enviara una alternativa.",
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
        "prompt": "Completa estas decisiones lingüísticas de decir que no sin cerrar la puerta; justifica el modo, la forma o la combinación.",
        "items": [
          {
            "q": "¿Te importaría que ___ el plazo?",
            "answers": [
              [
                "revisáramos"
              ]
            ],
            "why": "Petición mitigada con sujeto nosotros."
          },
          {
            "q": "Quizá no ___ la opción más adecuada.",
            "answers": [
              [
                "sea"
              ]
            ],
            "why": "Valoración presentada con cautela."
          },
          {
            "q": "Le agradecería que nos ___ una alternativa.",
            "answers": [
              [
                "enviara"
              ]
            ],
            "why": "Petición formal a usted."
          }
        ]
      },
      {
        "id": "g-reconstruir",
        "type": "open",
        "prompt": "Reformula con autonomía. Lee el texto de partida y la consigna de cada ítem; después contrasta tu respuesta con el modelo orientativo y la lista de revisión. Otras soluciones pueden ser válidas.",
        "items": [
          {
            "prompt": "Texto de partida: «Quiero que revisemos el plazo.» Pide permiso con te importaría que.",
            "model": "¿Te importaría que revisáramos el plazo?",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          },
          {
            "prompt": "Texto de partida: «Envíenos una alternativa.» Mitiga con le agradecería que.",
            "model": "Le agradecería que nos enviara una alternativa.",
            "checklist": [
              "Conservo participantes, referencia temporal y contenido pertinente.",
              "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
              "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
            ]
          },
          {
            "prompt": "Texto de partida: «Esta opción no es la más adecuada.» Presenta una reserva con quizá.",
            "model": "Quizá esta opción no sea la más adecuada.",
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
        "title": "Mitigar un desacuerdo profesional con claridad",
        "items": [
          {
            "es": "agradecer una propuesta",
            "note": "reconocer una iniciativa"
          },
          {
            "es": "expresar una reserva",
            "note": "señalar una dificultad"
          },
          {
            "es": "rechazar con tacto",
            "note": "negar sin descalificar"
          },
          {
            "es": "mantener el contacto",
            "note": "conservar una relación"
          },
          {
            "es": "ofrecer una alternativa",
            "note": "presentar otra posibilidad"
          },
          {
            "es": "ajustar el alcance",
            "note": "modificar lo incluido"
          },
          {
            "es": "evitar falsas expectativas",
            "note": "no sugerir compromisos inexistentes"
          },
          {
            "es": "confirmar por escrito",
            "note": "dejar un acuerdo registrado"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "v-relaciones",
        "type": "match",
        "prompt": "Relaciona las expresiones útiles para mitigar un desacuerdo profesional con claridad con su significado.",
        "pairs": [
          {
            "left": "agradecer una propuesta",
            "right": "reconocer una iniciativa"
          },
          {
            "left": "expresar una reserva",
            "right": "señalar una dificultad"
          },
          {
            "left": "rechazar con tacto",
            "right": "negar sin descalificar"
          },
          {
            "left": "mantener el contacto",
            "right": "conservar una relación"
          },
          {
            "left": "ofrecer una alternativa",
            "right": "presentar otra posibilidad"
          },
          {
            "left": "ajustar el alcance",
            "right": "modificar lo incluido"
          },
          {
            "left": "evitar falsas expectativas",
            "right": "no sugerir compromisos inexistentes"
          },
          {
            "left": "confirmar por escrito",
            "right": "dejar un acuerdo registrado"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Practica la cortesía sin desdibujar el no: reduce la tensión del inicio, pero conserva una frontera entonativa clara en el límite principal.",
    "explanation": [
      "Practica la cortesía sin desdibujar el no: reduce la tensión del inicio, pero conserva una frontera entonativa clara en el límite principal.",
      "Escucha primero la secuencia verbal. Después lee la misma frase con una intención distinta, grábate localmente y compara con tu docente. La voz sintética es apoyo de escucha: no certifica variedad regional, ironía ni evaluación automática de tu pronunciación."
    ],
    "examples": [
      {
        "es": "¿Te importaría que revisáramos el plazo?"
      },
      {
        "es": "Quizá no sea la opción más adecuada."
      },
      {
        "es": "Le agradecería que nos enviara una alternativa."
      }
    ],
    "perceive": {
      "id": "p-percepcion",
      "type": "listen",
      "prompt": "Escucha sin leer el ejemplo previo si quieres comprobar tu percepción; identifica el fragmento verbal y después marca su sílaba tónica.",
      "items": [
        {
          "q": "En la muestra 1 de decir que no sin cerrar la puerta, ¿qué fragmento se oye?",
          "options": [
            "revisaremos",
            "revisáramos",
            "revisamos"
          ],
          "answer": 1,
          "why": "Petición mitigada con sujeto nosotros.",
          "audio": "¿Te importaría que revisáramos el plazo?",
          "voice": "es-ES-f"
        },
        {
          "q": "En la muestra 2 de decir que no sin cerrar la puerta, ¿qué fragmento se oye?",
          "options": [
            "sea",
            "es",
            "era"
          ],
          "answer": 0,
          "why": "Valoración presentada con cautela.",
          "audio": "Quizá no sea la opción más adecuada.",
          "voice": "es-ES-f"
        }
      ]
    },
    "produce": [
      {
        "text": "¿Te importaría que revisáramos el plazo?",
        "tip": "Practica la cortesía sin desdibujar el no: reduce la tensión del inicio, pero conserva una frontera entonativa clara en el límite principal.",
        "voice": "es-ES-f"
      },
      {
        "text": "Quizá no sea la opción más adecuada.",
        "tip": "Practica la cortesía sin desdibujar el no: reduce la tensión del inicio, pero conserva una frontera entonativa clara en el límite principal.",
        "voice": "es-ES-f"
      },
      {
        "text": "Le agradecería que nos enviara una alternativa.",
        "tip": "Practica la cortesía sin desdibujar el no: reduce la tensión del inicio, pero conserva una frontera entonativa clara en el límite principal.",
        "voice": "es-ES-f"
      }
    ]
  },
  "listening": {
    "title": "Voces y decisiones: Decir que no sin cerrar la puerta",
    "context": "Guion original de interacción. Primera escucha sin transcripción: identifica propósito y posiciones; segunda: datos y condiciones; tercera: inferencias. Reproducción sintética, sin verificación de acento regional.",
    "speakers": [
      {
        "id": "s1",
        "name": "Marina",
        "voice": "es-ES-f",
        "role": "Interlocutor del guion original; voz sintética disponible"
      },
      {
        "id": "s2",
        "name": "Paula",
        "voice": "es-MX-m",
        "role": "Interlocutor del guion original; voz sintética disponible"
      }
    ],
    "script": [
      {
        "speaker": "s1",
        "text": "Gracias por preparar la propuesta. Me temo que no podemos asumir cuatro sesiones en octubre. La sala está compartida y el equipo de retransmisión no está disponible. Sí podríamos valorar una sesión presencial en noviembre, aunque todavía necesitaríamos revisar el presupuesto."
      },
      {
        "speaker": "s2",
        "text": "Entiendo el límite de fechas. ¿Te importaría que mantuviéramos provisionalmente el nombre del centro en el programa mientras buscamos otra sala para las sesiones restantes? Nos ayudaría a mostrar continuidad y después podríamos aclarar qué actividad se celebra en cada sitio."
      },
      {
        "speaker": "s1",
        "text": "Preferiría que no apareciera hasta confirmar la colaboración. No es una valoración negativa del proyecto; necesitamos evitar que parezca que organizamos actividades sobre las que no tendremos control. Podemos darte una respuesta sobre noviembre cuando recibamos la versión ajustada y sepamos qué personal requiere."
      },
      {
        "speaker": "s2",
        "text": "De acuerdo. Quizá yo había interpretado valorar una sesión como una aceptación casi cerrada. Gracias por aclararlo. Enviaré un presupuesto más pequeño y limitaré el aforo a cincuenta personas. ¿Sería posible que ustedes se encargaran de las inscripciones si reducimos la difusión?"
      },
      {
        "speaker": "s1",
        "text": "Lo siento, esa parte tendría que asumirla tu equipo. Nosotras aportaríamos sala y apoyo durante el encuentro. Si esa distribución no te sirve, comprenderé que busques otra alternativa. Prefiero concretarlo ahora a que una respuesta amable termine creando un problema más adelante."
      },
      {
        "speaker": "s2",
        "text": "Me sirve para decidir. Hablaré con mi equipo y confirmaré el viernes si podemos asumir la inscripción. Mientras tanto, retiraré el logotipo del borrador público. Mantendremos la conversación abierta, pero sin presentar como acordado algo que aún depende de varias condiciones."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha la conversación completa; identifica el problema y la intención antes de buscar palabras aisladas.",
        "exercise": {
          "id": "l-global",
          "type": "choice",
          "prompt": "¿Qué organiza la conversación situada en Puerto Montt?",
          "items": [
            {
              "q": "¿Cuál es el propósito global de esta conversación: Decir que no sin cerrar la puerta?",
              "options": [
                "Contar una única versión sin permitir preguntas.",
                "Rechazar un formato y mantener una alternativa condicionada",
                "Leer una lista de instrucciones sin responder a nadie."
              ],
              "answer": 1,
              "why": "Las intervenciones se responden y matizan sus posiciones."
            },
            {
              "q": "¿Qué relación predomina entre las voces en «Decir que no sin cerrar la puerta»?",
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
          "prompt": "Localiza una intervención concreta en «Decir que no sin cerrar la puerta».",
          "items": [
            {
              "q": "¿Qué había interpretado Paula de manera excesiva?",
              "options": [
                "Que valorar una sesión equivalía casi a aceptarla.",
                "Que la sala estaba disponible siempre.",
                "Que Marina exigía cuatro charlas."
              ],
              "answer": 0,
              "why": "La respuesta conserva la condición o información expresada por esa persona."
            },
            {
              "q": "¿Qué frase aparece en la intervención inicial de «Decir que no sin cerrar la puerta»?",
              "options": [
                "Ya está todo decidido y no necesitamos escuchar a ninguna parte.",
                "No hay información que podamos discutir en esta reunión.",
                "Gracias por preparar la propuesta."
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
              "prompt": "En «Decir que no sin cerrar la puerta», cita una reserva o una reformulación del diálogo, explica qué interpretación evita y qué quedaría sin resolver si se omitiera.",
              "model": "Me sirve para decidir. Hablaré con mi equipo y confirmaré el viernes si podemos asumir la inscripción. Mientras tanto, retiraré el logotipo del borrador público. Mantendremos la conversación abierta, pero sin presentar como acordado algo que aún depende de varias condiciones.",
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
    "title": "Decir que no sin cerrar la puerta: texto para interpretar",
    "genre": "Artículo, correspondencia o relato original",
    "frame": "Material original de SpanishCue; las situaciones y los datos son didácticos, no noticias reales ni textos oficiales de examen.",
    "text": [
      "Estimada Paula: gracias por la propuesta de organizar un ciclo de charlas en nuestro espacio. El tema coincide con una de nuestras líneas de trabajo y valoramos especialmente que incluya encuentros abiertos al barrio. Después de revisar el calendario, me temo que no podemos asumir el ciclo completo en las fechas planteadas. Durante ese periodo compartimos la sala con otra asociación y no disponemos del equipo necesario para retransmitir todas las sesiones. Preferimos explicar estos límites antes de reservar fechas que quizá no podamos sostener.",
      "Sí podríamos estudiar una sesión presencial en noviembre, siempre que se limite a cincuenta asistentes y que la organización se encargue de la inscripción. Esta posibilidad no constituye todavía una confirmación: necesitaríamos conocer el presupuesto y comprobar la disponibilidad del personal. ¿Le importaría enviarnos una versión ajustada antes del día quince? Si ese formato no responde a sus objetivos, entenderemos que busque otra sede. No quisiéramos que nuestra propuesta parcial retrasara decisiones que usted necesita tomar ahora.",
      "En relación con la difusión, convendría distinguir la colaboración en una actividad de la adhesión institucional a todo el programa. Podemos incluir el encuentro confirmado en nuestra agenda, pero no autorizar el uso del logotipo en materiales de sesiones que no organizamos. Quizá no sea la solución más cómoda para la campaña, aunque creemos que evitará confusiones sobre responsabilidades y recursos. Si finalmente avanzamos, acordaremos por escrito el texto de presentación y las condiciones de uso de la imagen.",
      "Agradezco que haya pensado en nosotros y espero que esta respuesta permita valorar una alternativa realista. Mantendremos la posibilidad de noviembre abierta hasta recibir su propuesta, sin reservar todavía la sala. Quedo a su disposición para aclarar las condiciones expuestas. Atentamente, Marina, coordinación del centro. La cortesía del mensaje no elimina el rechazo del ciclo completo; ayuda a expresarlo de forma que la otra parte pueda decidir con información suficiente."
    ],
    "glossary": [
      {
        "es": "agradecer una propuesta",
        "note": "reconocer una iniciativa"
      },
      {
        "es": "expresar una reserva",
        "note": "señalar una dificultad"
      },
      {
        "es": "rechazar con tacto",
        "note": "negar sin descalificar"
      }
    ],
    "tasks": [
      {
        "id": "r-comprender",
        "type": "choice",
        "prompt": "Interpreta tesis y alcance; descarta respuestas que exageren la conclusión.",
        "items": [
          {
            "q": "¿Qué rechaza inequívocamente el correo?",
            "options": [
              "Toda sesión presencial posible.",
              "El ciclo completo en las fechas propuestas.",
              "Cualquier contacto futuro."
            ],
            "answer": 1,
            "why": "Comprueba esta interpretación con el texto completo y no solo con una palabra aislada."
          },
          {
            "q": "¿Qué función tiene la alternativa de noviembre?",
            "options": [
              "Ofrecer una posibilidad condicionada y realista.",
              "Garantizar una reserva ya cerrada.",
              "Ocultar que el calendario no se revisó."
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
            "prompt": "En «Decir que no sin cerrar la puerta», resume dos posiciones en 60–80 palabras, cita una evidencia y explica un límite que el texto no permite resolver.",
            "model": "Estimada Paula: agradecemos que el ciclo incluya actividades abiertas al barrio. Me temo que no podemos asumir las cuatro sesiones en octubre. Sí podríamos estudiar un encuentro en noviembre, siempre que su equipo gestione las inscripciones. ¿Le importaría enviarnos un presupuesto ajustado antes del día quince? Esta posibilidad queda pendiente de confirmar la disponibilidad del personal. Si el formato no responde a sus necesidades, comprenderemos que valore otra sede. Gracias por ayudarnos a concretar una colaboración que podamos sostener.",
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
          "quote": "Estimada Paula: gracias por la propuesta de organizar un ciclo de charlas en nuestro espacio.",
          "note": "Identifica qué establece el inicio y cómo prepara la interpretación posterior."
        },
        {
          "quote": "La cortesía del mensaje no elimina el rechazo del ciclo completo; ayuda a expresarlo de forma que la otra parte pueda decidir con información suficiente.",
          "note": "Relaciona el cierre con la tesis o con el giro narrativo; explica qué no afirma."
        }
      ]
    }
  },
  "practice": {
    "intro": "Rechaza una cláusula del local usando mitigación; después revisa una nominalización del folleto sin perder claridad ni responsabilidad.",
    "exercises": [
      {
        "id": "x-orden",
        "type": "order",
        "prompt": "Reconstruye los mensajes del caso de Puerto Montt y conserva sus relaciones.",
        "items": [
          {
            "words": [
              "En",
              "«Decir que no sin cerrar la puerta»,",
              "¿Te",
              "importaría",
              "que",
              "revisáramos",
              "el",
              "plazo?"
            ],
            "why": "Petición mitigada con sujeto nosotros."
          },
          {
            "words": [
              "En",
              "«Decir que no sin cerrar la puerta»,",
              "Le",
              "agradecería",
              "que",
              "nos",
              "enviara",
              "una",
              "alternativa."
            ],
            "why": "Petición formal a usted."
          }
        ]
      },
      {
        "id": "x-edicion",
        "type": "error",
        "prompt": "Revisa tres borradores de decir que no sin cerrar la puerta; cada uno tiene un único error deliberado.",
        "items": [
          {
            "sentence": "Le agradecería que nos envía el presupuesto.",
            "answers": [
              "Le agradecería que nos enviara el presupuesto."
            ],
            "why": "La petición mitigada selecciona subjuntivo."
          },
          {
            "sentence": "¿Te importaría que revisamos el aforo?",
            "answers": [
              "¿Te importaría que revisáramos el aforo?"
            ],
            "why": "Mitigación con imperfecto de subjuntivo."
          },
          {
            "sentence": "Convendría de aclarar el uso del logotipo.",
            "answers": [
              "Convendría aclarar el uso del logotipo."
            ],
            "why": "Convenir en esta construcción no exige de."
          }
        ]
      },
      {
        "id": "x-produccion",
        "type": "open",
        "prompt": "Prepara dos fragmentos antes de tu entrega independiente; el modelo es una posibilidad, no una respuesta única.",
        "items": [
          {
            "prompt": "Abre tu respuesta sobre mitigar un desacuerdo profesional con claridad con una postura y una razón; adapta el destinatario.",
            "model": "Estimada Paula: agradecemos que el ciclo incluya actividades abiertas al barrio.",
            "checklist": [
              "Presento una postura concreta.",
              "Ajusto el registro a quien recibirá el mensaje."
            ]
          },
          {
            "prompt": "Reformula una objeción o una reserva de «Decir que no sin cerrar la puerta» sin debilitarla, y responde con una condición verificable.",
            "model": "Estimada Paula: agradecemos que el ciclo incluya actividades abiertas al barrio. Me temo que no podemos asumir las cuatro sesiones en octubre. Sí podríamos estudiar un encuentro en noviembre, siempre que su equipo gestione las inscripciones. ¿Le importaría enviarnos un presupuesto ajustado antes del día quince? Esta posibilidad queda pendiente de confirmar la disponibilidad del personal. Si el formato no responde a sus necesidades, comprenderemos que valore otra sede. Gracias por ayudarnos a concretar una colaboración que podamos sostener.",
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
            "prompt": "Recupera la semana 14 sin abrir su explicación y aplica sus recursos a «Decir que no sin cerrar la puerta»: Valores de se; Accidentes y descuidos; Clíticos en cadena; Disculparse y asumir responsabilidad; Disculpa difícil. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo distinguir se reflexivo, recíproco, involuntario (se me olvidó) y pronominal con cambio de significado. Puedo contar descuidos con se me cayó, se nos olvidó, se le rompió. Puedo decir se me cayó o se nos fue con el ritmo de una sola palabra. Puedo disculparme, presentar algo como involuntario y ofrecer una reparación. Puedo resolver oralmente una situación en la que tengo parte de la culpa.",
            "checklist": [
              "Integro los recursos indicados en una respuesta al caso actual.",
              "Conservo personas, tiempo, postura y límites de las fuentes.",
              "Marco una elección que tuve que corregir después de comprobarla."
            ]
          },
          {
            "prompt": "Recupera la semana 16 sin abrir su explicación y aplica sus recursos a «Decir que no sin cerrar la puerta»: Colocaciones frecuentes; Formación de palabras; Nominalización; Acento en derivados; Reescribir con precisión; Definir y explicar conceptos. Integra los recursos en un párrafo o un turno de 60–90 segundos; señala las decisiones lingüísticas en tus notas.",
            "model": "Guía de revisión, no texto para copiar: Puedo combinar palabras de forma natural: tomar una decisión, plantear un problema, sacar conclusiones. Puedo deducir y crear palabras con prefijos y sufijos frecuentes. Puedo transformar verbos en sustantivos para escribir con concisión. Puedo pronunciar carácter/caracteres, régimen/regímenes y adverbios en -mente con dos acentos. Puedo mejorar un texto sustituyendo verbos comodín y repeticiones. Puedo definir un concepto, dar un ejemplo y diferenciarlo de otro parecido.",
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
    "task": "Escribe un correo profesional que rechace una colaboración en su formato actual. Agradece aspectos concretos, explica dos límites, ofrece una alternativa condicionada y evita sugerir una aceptación inexistente.",
    "context": "Destinatario, propósito y límites de la información forman parte de la evaluación. El modelo muestra una respuesta completa posible: analiza su organización y escribe después tu propio texto.",
    "steps": [
      "Extrae dos datos y dos posiciones de las fuentes; marca lo que no está confirmado.",
      "Planifica apertura, desarrollo, objeción o complicación y cierre antes de redactar.",
      "Escribe sin copiar el modelo; integra recursos nuevos y los recuperados.",
      "Revisa referentes, modo, tiempo, colocaciones y registro; reescribe un párrafo y explica el cambio."
    ],
    "useLanguage": [
      "¿Te importa que revise…? pide permiso con presente de subjuntivo; ¿te importaría que revisara…? añade distancia cortés mediante condicional e imperfecto de subjuntivo. Con el mismo sujeto puede usarse infinitivo: ¿te importaría revisar…? La mitigación debe permitir identificar qué se acepta, qué se rechaza y qué se propone.",
      "Convendría, quizá no sea lo más adecuado y me temo que pueden suavizar una crítica. Una acumulación de fórmulas evasivas también puede ocultar un no y producir falsas expectativas. Ajusta saludo, tratamiento y cierre a la relación; conserva los límites concretos y ofrece alternativas únicamente si puedes sostenerlas.",
      "Rechaza una cláusula del local usando mitigación; después revisa una nominalización del folleto sin perder claridad ni responsabilidad."
    ],
    "model": [
      "Estimada Paula: agradecemos que el ciclo propuesto incluya encuentros abiertos al barrio y actividades que relacionen cultura y participación. El enfoque coincide con nuestros intereses y valoramos el trabajo dedicado al programa. Sin embargo, después de revisar el calendario, me temo que no podemos asumir las cuatro sesiones previstas para octubre.",
      "Durante ese periodo compartimos la sala con otra asociación y no disponemos del equipo de retransmisión necesario. Mantener las fechas exigiría recursos que no podemos garantizar. Preferimos comunicar estos límites ahora para que pueda estudiar otras sedes, en lugar de reservar provisionalmente un programa que después tendríamos que modificar.",
      "Sí podríamos valorar un encuentro presencial en noviembre, siempre que su equipo gestione las inscripciones y el aforo no supere cincuenta personas. Nosotras aportaríamos la sala y apoyo durante la actividad. ¿Le importaría enviarnos un presupuesto ajustado antes del día quince? Esta posibilidad queda pendiente de confirmar la disponibilidad del personal; todavía no constituye una reserva.",
      "Convendría también esperar a esa confirmación antes de incluir nuestro logotipo en materiales públicos. Si colaboramos en una sesión, podremos anunciarla en nuestra agenda, pero no presentar el centro como organizador de actividades celebradas en otras sedes. Acordaremos por escrito el texto para evitar confusiones sobre responsabilidades.",
      "Si este formato no responde a sus necesidades, comprenderemos que elija otra alternativa. Agradecemos que haya pensado en nosotros y quedamos disponibles para aclarar las condiciones expuestas. Espero que esta respuesta permita decidir con información concreta y conservar la posibilidad de una colaboración que ambas partes podamos sostener."
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
        "prompt": "Presenta el caso de «Decir que no sin cerrar la puerta» a alguien que no conoce las fuentes. Defiende una interpretación, menciona una evidencia y una reserva, y termina con una pregunta que permita continuar.",
        "prep": [
          "Anota tesis, evidencia y límite en cinco palabras clave.",
          "Ensaya una transición y una reformulación."
        ],
        "seconds": 180,
        "model": "Estimada Paula: agradecemos que el ciclo incluya actividades abiertas al barrio. Me temo que no podemos asumir las cuatro sesiones en octubre. Sí podríamos estudiar un encuentro en noviembre, siempre que su equipo gestione las inscripciones. ¿Le importaría enviarnos un presupuesto ajustado antes del día quince? Esta posibilidad queda pendiente de confirmar la disponibilidad del personal. Si el formato no responde a sus necesidades, comprenderemos que valore otra sede. Gracias por ayudarnos a concretar una colaboración que podamos sostener.",
        "selfCheck": [
          "Se entiende mi postura sin leer un guion.",
          "No convierto una conjetura en hecho.",
          "Uso pausas para organizar el mensaje."
        ]
      },
      {
        "title": "Interacción y mediación",
        "prompt": "Tu docente representa a una persona que cuestiona tu interpretación de mitigar un desacuerdo profesional con claridad. Resume su postura antes de responder. Pregunta qué condición cambiaría su opinión; negocia un acuerdo parcial o explica respetuosamente por qué no lo hay.",
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
        "task": "Presenta tu entrega de «Decir que no sin cerrar la puerta» en tres minutos y responde a una objeción inesperada.",
        "phrases": [
          "Mi interpretación se apoya en…",
          "La reserva que mantengo es…"
        ]
      },
      {
        "move": "Reformula",
        "task": "Explica a otra persona lo que sostiene una voz del caso de Puerto Montt; pídele a tu docente que compruebe si has conservado el matiz.",
        "phrases": [
          "Si te he entendido bien…",
          "No afirma que…; lo que plantea es…"
        ]
      },
      {
        "move": "Negocia",
        "task": "Acuerda un criterio para valorar tu propuesta sobre mitigar un desacuerdo profesional con claridad; identifica una condición que todavía necesita confirmación.",
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
        "q": "En la evaluación final de «Decir que no sin cerrar la puerta», ¿qué resume mejor el propósito?",
        "options": [
          "Evitar cualquier intercambio entre personas.",
          "Rechazar un formato y mantener una alternativa condicionada",
          "Sustituir toda evidencia por una opinión rotunda."
        ],
        "answer": 1,
        "why": "Relaciona comprensión y propósito.",
        "type": "choice"
      },
      {
        "type": "listen",
        "audio": "Entiendo el límite de fechas. ¿Te importaría que mantuviéramos provisionalmente el nombre del centro en el programa mientras buscamos otra sala para las sesiones restantes? Nos ayudaría a mostrar continuidad y después podríamos aclarar qué actividad se celebra en cada sitio.",
        "voice": "es-MX-m",
        "q": "Al escuchar de nuevo a Paula en «Decir que no sin cerrar la puerta», ¿qué intervención reconoces?",
        "options": [
          "Me niego a explicar mi punto de vista sobre este asunto.",
          "Entiendo el límite de fechas",
          "No hay ninguna condición pendiente y todas las partes aceptaron."
        ],
        "answer": 1,
        "why": "Atiende a la formulación y a la posición, no solo al tema."
      },
      {
        "type": "gap",
        "q": "¿Le importaría que ___ una sesión más breve?",
        "answers": [
          [
            "propusiéramos"
          ]
        ],
        "why": "Petición mitigada con sujeto nosotros."
      },
      {
        "type": "open",
        "prompt": "Texto de partida: «No podemos autorizar el logotipo.» Introduce el límite con me temo que.",
        "model": "Me temo que no podemos autorizar el logotipo.",
        "checklist": [
          "Conservo participantes, referencia temporal y contenido pertinente.",
          "Aplico la construcción o función solicitada; puedo elegir otro orden o una variante igualmente válida.",
          "Comparo el significado y la forma con el modelo orientativo; no es una respuesta única ni se califica por coincidencia literal."
        ]
      },
      {
        "type": "error",
        "sentence": "¿Le importaría que reducimos el aforo?",
        "answers": [
          "¿Le importaría que redujéramos el aforo?"
        ],
        "why": "La petición mitigada selecciona imperfecto de subjuntivo."
      },
      {
        "type": "open",
        "prompt": "Sintetiza en 50 palabras lo que sabes y lo que no puedes concluir sobre «Decir que no sin cerrar la puerta».",
        "model": "Estimada Paula: agradecemos que el ciclo incluya actividades abiertas al barrio. Me temo que no podemos asumir las cuatro sesiones en octubre. Sí podríamos estudiar un encuentro en noviembre, siempre que su equipo gestione las inscripciones. ¿Le importaría enviarnos un presupuesto ajustado antes del día quince? Esta posibilidad queda pendiente de confirmar la disponibilidad del personal. Si el formato no responde a sus necesidades, comprenderemos que valore otra sede. Gracias por ayudarnos a concretar una colaboración que podamos sostener.",
        "checklist": [
          "Atribuyo una fuente.",
          "Explicito una reserva."
        ]
      },
      {
        "type": "open",
        "prompt": "Contesta a quien sostiene lo contrario de tu postura sobre mitigar un desacuerdo profesional con claridad; concede una razón y conserva tu argumento.",
        "model": "Estimada Paula: agradecemos que el ciclo incluya actividades abiertas al barrio. Me temo que no podemos asumir las cuatro sesiones en octubre. Sí podríamos estudiar un encuentro en noviembre, siempre que su equipo gestione las inscripciones. ¿Le importaría enviarnos un presupuesto ajustado antes del día quince? Esta posibilidad queda pendiente de confirmar la disponibilidad del personal. Si el formato no responde a sus necesidades, comprenderemos que valore otra sede. Gracias por ayudarnos a concretar una colaboración que podamos sostener.",
        "checklist": [
          "Conservo la postura contraria sin exagerarla.",
          "Respondo con una razón o condición."
        ]
      },
      {
        "type": "open",
        "prompt": "Explica dos cambios que harías para adaptar tu entrega de la semana 17 a un mensaje cercano y a un informe formal.",
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
      "Puedo mitigar un desacuerdo profesional con claridad.",
      "Puedo sostener una interpretación con evidencia y una reserva.",
      "Puedo revisar mi producción y continuarla mediante interacción."
    ],
    "review": [
      "Rechaza una cláusula del local usando mitigación; después revisa una nominalización del folleto sin perder claridad ni responsabilidad.",
      "Dentro de 48 horas, sin consultar el texto, reconstruye dos posiciones y un recurso lingüístico; comprueba después qué omitiste.",
      "Una semana después, adapta tu respuesta a otro destinatario y recupera los objetivos marcados en la práctica."
    ]
  }
};
