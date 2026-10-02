import type { Module } from "../../types";

/** Material original C2. Audio mediante síntesis; sin acreditación regional. */
export const c2w05: Module = {
  "id": "c2-05",
  "level": "c2",
  "week": 5,
  "kind": "checkpoint",
  "title": "Checkpoint: una plaza, tres versiones",
  "subtitle": "Integrar alcance, ironía, registro y subtexto",
  "stop": {
    "place": "Valencia",
    "country": "España"
  },
  "minutes": 150,
  "newObjectives": [
    "c2.rev.checkpoint-1",
    "c2.read.contrato-cronica"
  ],
  "reviewObjectives": [
    "c2.gram.ambiguedad-sintactica",
    "c2.disc.desambiguar",
    "c2.voc.polisemia-avanzada",
    "c2.pron.prosodia-desambiguadora",
    "c2.read.textos-ambiguos",
    "c2.disc.ironia-productiva",
    "c2.voc.evaluacion-implicita",
    "c2.pron.ironia-variedades",
    "c2.lis.humor-ironico",
    "c2.spk.comentario-ironico",
    "c2.disc.cambio-registro",
    "c2.voc.lenguaje-juridico",
    "c2.gram.futuro-subjuntivo-juridico",
    "c2.pron.registro-voz",
    "c2.wri.traduccion-registro",
    "c2.disc.subtexto",
    "c2.voc.verbos-dicendi-matices",
    "c2.pron.intencion-pragmatica",
    "c2.read.relato-subtexto",
    "c2.wri.dialogo-subtexto"
  ],
  "prerequisites": [
    "c2-04"
  ],
  "goal": {
    "canDo": "Puedo mediar entre acta, crónica y mensaje sin inventar consenso ni borrar desacuerdos.",
    "steps": [
      "Lee las fuentes y distingue dato, inferencia y evaluación.",
      "Escucha el intercambio antes de consultar su transcripción.",
      "Aplica integrar alcance, ironía, registro y subtexto a una decisión comunicativa concreta.",
      "Produce el dossier escrito, revisa una elección y defiéndela oralmente."
    ]
  },
  "theory": {
    "intro": "Los casos, documentos y voces de esta semana son originales y ficticios. La dificultad está en controlar relaciones de significado, no en acumular palabras raras.",
    "parts": [
      {
        "heading": "Integrar alcance, ironía, registro y subtexto",
        "body": [
          "En una síntesis crítica, distinguir lo afirmado de lo inferido evita atribuir al documento institucional la interpretación de una columna. La concesión aunque sea válido reconoce una posibilidad sin aceptarla como hecho; aunque es válido la presenta como asumida. Las expresiones según el acta y a juicio de la autora permiten mantener voces distintas. Recupera la adjunción de relativas, la litote, las condiciones y los verbos de habla de las cuatro semanas anteriores.",
          "En este caso, El documento mediador distingue acuerdo, aplicación pendiente y desacuerdo real. La formulación elegida debe permitir al destinatario reconstruir la diferencia relevante y reconocer qué no se ha demostrado."
        ],
        "examples": [
          {
            "es": "El acta recoge una propuesta que la asociación rechaza."
          },
          {
            "es": "Aunque sea útil limitar el tráfico, falta explicar el reparto."
          },
          {
            "es": "La cronista sugiere un acuerdo previo; el acta no lo confirma."
          }
        ],
        "mistakes": [
          {
            "wrong": "El acta atribuye una aceptación a quien no intervinieron.",
            "right": "El acta atribuye una aceptación a quienes no intervinieron.",
            "why": "El antecedente plural recuperado por la relativa libre exige quienes con intervinieron."
          }
        ]
      },
      {
        "heading": "Interpretar, atribuir y revisar en este caso",
        "body": [
          "No solicitar una votación separada no demuestra entusiasmo ni consenso pleno. Para defender esa lectura, identifica una formulación y el detalle que la sostiene. Prueba después una explicación rival y señala qué dato necesitarías para preferirla.",
          "La versión para un público nuevo puede cambiar léxico, orden y longitud, pero debe conservar esta condición: El plano aún requiere una comprobación sobre vehículos de emergencia. Un cambio de registro que la elimina cambia también el contenido."
        ],
        "examples": [
          {
            "es": "El documento mediador distingue acuerdo, aplicación pendiente y desacuerdo real.",
            "note": "Síntesis con alcance delimitado."
          },
          {
            "es": "El silencio de la reunión demuestra aceptación entusiasta.",
            "note": "Lectura excesiva que el dossier no respalda."
          }
        ],
        "tip": "La mascota te invita a conservar una duda productiva: llévala a clase junto con una prueba, no con una impresión aislada."
      }
    ]
  },
  "grammar": {
    "intro": "Relaciona forma y efecto comunicativo en el expediente; la explicación importa tanto como la respuesta.",
    "exercises": [
      {
        "id": "c2-05-gramatica-alcance",
        "type": "choice",
        "prompt": "Selecciona la interpretación defendible de Checkpoint: una plaza, tres versiones.",
        "items": [
          {
            "q": "En el caso de Checkpoint: una plaza, tres versiones, ¿qué formulación preserva el alcance?",
            "options": [
              "La intención declarada elimina cualquier efecto del mensaje.",
              "Aunque sea útil limitar el tráfico, falta explicar el reparto."
            ],
            "answer": 1,
            "why": "En una síntesis crítica, distinguir lo afirmado de lo inferido evita atribuir al documento institucional la interpretación de una columna. La concesión aunque sea válido reconoce una posibilidad sin aceptarla como hecho; aunque es válido la presenta como asumida. Las expresiones según el acta y a juicio de la autora permiten mantener voces distintas. Recupera la adjunción de relativas, la litote, las condiciones y los verbos de habla de las cuatro semanas anteriores."
          },
          {
            "q": "¿Qué cautela lingüística resulta necesaria al explicar Checkpoint: una plaza, tres versiones?",
            "options": [
              "El silencio de la reunión demuestra aceptación entusiasta.",
              "No solicitar una votación separada no demuestra entusiasmo ni consenso pleno."
            ],
            "answer": 1,
            "why": "Relaciona forma, contexto y efecto; evita ampliar una conclusión más allá de su base."
          }
        ]
      },
      {
        "id": "c2-05-gramatica-forma",
        "type": "gap",
        "prompt": "Completa las relaciones gramaticales del caso Checkpoint: una plaza, tres versiones.",
        "items": [
          {
            "q": "Aunque la propuesta ___ útil, falta precisar el calendario.",
            "answers": [
              [
                "sea",
                "es"
              ]
            ],
            "why": "Sea presenta una concesión posible; es la presenta como asumida. Ambas formas son gramaticales y cambian el compromiso con la utilidad."
          },
          {
            "q": "Según el acta, no ___ votación separada.",
            "answers": [
              [
                "hubo",
                "hay"
              ]
            ],
            "why": "Hubo sitúa la ausencia de votación en la reunión pasada; hay remite al contenido presente del acta."
          },
          {
            "q": "La portavoz no pretendía excluir ___ los residentes.",
            "answers": [
              [
                "a"
              ]
            ],
            "why": "En una síntesis crítica, distinguir lo afirmado de lo inferido evita atribuir al documento institucional la interpretación de una columna. La concesión aunque sea válido reconoce una posibilidad sin aceptarla como hecho; aunque es válido la presenta como asumida. Las expresiones según el acta y a juicio de la autora permiten mantener voces distintas. Recupera la adjunción de relativas, la litote, las condiciones y los verbos de habla de las cuatro semanas anteriores."
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Usa estas unidades para describir diferencias que el caso exige. La definición orienta el uso; contrástala con la frase completa.",
    "groups": [
      {
        "title": "Precisión para Checkpoint: una plaza, tres versiones",
        "items": [
          {
            "es": "discrepancia",
            "note": "desacuerdo delimitado"
          },
          {
            "es": "acta",
            "note": "registro de acuerdos y actuaciones"
          },
          {
            "es": "reserva",
            "note": "limitación al asentimiento"
          },
          {
            "es": "atribución",
            "note": "identificación de una voz o fuente"
          },
          {
            "es": "consenso aparente",
            "note": "acuerdo que oculta diferencias"
          },
          {
            "es": "criterio de reparto",
            "note": "regla para distribuir un recurso"
          },
          {
            "es": "versión contrastada",
            "note": "relato cotejado con otras fuentes"
          },
          {
            "es": "margen interpretativo",
            "note": "espacio que admite más de una lectura"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "c2-05-lexico",
        "type": "match",
        "prompt": "Relaciona cada unidad con la distinción que aporta al expediente de Checkpoint: una plaza, tres versiones.",
        "pairs": [
          {
            "left": "discrepancia",
            "right": "desacuerdo delimitado"
          },
          {
            "left": "acta",
            "right": "registro de acuerdos y actuaciones"
          },
          {
            "left": "reserva",
            "right": "limitación al asentimiento"
          },
          {
            "left": "atribución",
            "right": "identificación de una voz o fuente"
          },
          {
            "left": "consenso aparente",
            "right": "acuerdo que oculta diferencias"
          },
          {
            "left": "criterio de reparto",
            "right": "regla para distribuir un recurso"
          },
          {
            "left": "versión contrastada",
            "right": "relato cotejado con otras fuentes"
          },
          {
            "left": "margen interpretativo",
            "right": "espacio que admite más de una lectura"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Atribuir voces en una audiencia",
    "explanation": [
      "Haz audible según el acta y contrástalo con según la cronista. La pausa debe permitir reconocer un cambio de fuente, no sugerir que la fuente anterior es falsa.",
      "El audio utiliza síntesis disponible en el navegador: no certifica acento regional, ironía natural ni calidad de pronunciación. Escucha el contenido, ensaya contrastes y comprueba el efecto con una persona. El objetivo es inteligibilidad y control expresivo, no eliminar tu acento."
    ],
    "examples": [
      {
        "es": "Según el acta, no hubo votación separada."
      },
      {
        "es": "Según la crónica, hubo aceptación entusiasta."
      }
    ],
    "perceive": {
      "id": "c2-05-percepcion",
      "type": "listen",
      "prompt": "Escucha el contraste antes de leer las opciones en «Checkpoint: una plaza, tres versiones».",
      "items": [
        {
          "q": "Escucha la primera formulación sobre Checkpoint: una plaza, tres versiones. ¿Qué contenido permite recuperar?",
          "options": [
            "Según el acta, no hubo votación separada.",
            "Según la crónica, hubo aceptación entusiasta."
          ],
          "answer": 0,
          "why": "La respuesta depende de las palabras y de su agrupación; no atribuyas a la síntesis una intención o variedad verificada.",
          "audio": "Según el acta, no hubo votación separada.",
          "voice": "es-ES-f"
        },
        {
          "q": "Escucha ahora el contraste de Checkpoint: una plaza, tres versiones. ¿Qué formulación aparece?",
          "options": [
            "Según el acta, no hubo votación separada.",
            "Según la crónica, hubo aceptación entusiasta."
          ],
          "answer": 1,
          "why": "Compara después tus dos lecturas con una persona: una pausa puede favorecer una lectura sin demostrarla.",
          "audio": "Según la crónica, hubo aceptación entusiasta.",
          "voice": "es-ES-m"
        }
      ]
    },
    "produce": [
      {
        "text": "Según el acta, no hubo votación separada.",
        "tip": "Marca grupos fónicos y explica qué interpretación favoreces.",
        "voice": "es-ES-f"
      },
      {
        "text": "Según la crónica, hubo aceptación entusiasta.",
        "tip": "Cambia el foco sin cambiar las palabras; pide una interpretación a tu interlocutor.",
        "voice": "es-ES-m"
      },
      {
        "text": "El documento mediador distingue acuerdo, aplicación pendiente y desacuerdo real.",
        "tip": "Lee a velocidad cómoda, conserva la reserva y compara tu grabación local con tu intención.",
        "voice": "es-ES-f"
      }
    ]
  },
  "listening": {
    "title": "Mesa de trabajo: Checkpoint: una plaza, tres versiones",
    "context": "Dos participantes preparan una intervención sobre el caso. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como variedades regionales verificadas.",
    "speakers": [
      {
        "id": "a",
        "name": "Nora",
        "voice": "es-ES-f",
        "role": "Primera perspectiva"
      },
      {
        "id": "b",
        "name": "Iván",
        "voice": "es-ES-m",
        "role": "Contraste y reformulación"
      }
    ],
    "script": [
      {
        "speaker": "a",
        "text": "Propongo empezar la reunión diciendo qué está acordado: el paso accesible. Si abrimos con la acusación de que todo estaba decidido, perderemos a quienes vinieron a discutir medidas. Eso no significa ocultar que falta un mecanismo de respuesta a las observaciones. Podemos pedirlo sin afirmar que sabemos de antemano qué hará el consejo."
      },
      {
        "speaker": "b",
        "text": "Estoy de acuerdo, con una reserva. La frase se mantendrán las terrazas suena a garantía para unos y a amenaza para otros porque nadie explicó cuándo se comprueba la condición. Necesitamos un plazo de adaptación o una declaración explícita de que no lo habrá. No podemos inventarlo nosotros en nombre de la claridad. Esa decisión le corresponde al consejo."
      },
      {
        "speaker": "a",
        "text": "Y retiraría del resumen que los comerciantes aceptaron gustosos. Aceptaron que el debate continuara, según la portavoz; el acta ni siquiera dice eso, solo que no hubo votación separada. La crónica tiene derecho a interpretar el silencio, pero nuestro informe debe atribuir la interpretación. También explicaría el juego con vivir de la plaza antes de usarlo como prueba de exclusión."
      },
      {
        "speaker": "b",
        "text": "Entonces llevemos dos versiones del cierre. Para el consejo, condiciones, responsables y plazos pendientes. Para la asamblea, una explicación de qué cambia en la vida cotidiana y de qué todavía no se sabe. Si alguien responde con una ironía sobre la plaza donde cabemos todos, reconoceré la crítica y preguntaré qué distribución concreta propone. No le pediré que renuncie al humor para poder escucharlo, pero tampoco dejaré que el guiño sustituya la propuesta. Esa diferencia puede sostener una reunión difícil sin fingir que ya existe un acuerdo."
      },
      {
        "speaker": "a",
        "text": "Hay otra diferencia que debemos introducir: no todas las fachadas permiten la misma adaptación. Eso no significa negociar una excepción privada para cada local. Necesitamos criterios públicos que reconozcan diferencias materiales. Yo no puedo certificar la anchura adecuada, pero sí pedir que el informe técnico explique cómo se aplicará el criterio y cómo podrá revisarse una medición discutida."
      },
      {
        "speaker": "b",
        "text": "Cambiaré entonces el título del comunicado. La plaza alcanza un acuerdo suena completo; acuerdo sobre accesibilidad y consulta sobre distribución refleja mejor lo ocurrido. Un titular puede clausurar una negociación sin que sus participantes lo hayan decidido. Prefiero perder algo de contundencia y conservar el derecho a discrepar sobre lo que sigue abierto. Esa precisión también protege el acuerdo que sí hemos alcanzado."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha el intercambio completo sin abrir la transcripción. Reconstruye el desacuerdo central.",
        "exercise": {
          "id": "c2-05-escucha-gist",
          "type": "choice",
          "prompt": "Interpreta el diálogo: Checkpoint: una plaza, tres versiones",
          "items": [
            {
              "q": "¿Qué problema organiza la conversación de Checkpoint: una plaza, tres versiones?",
              "options": [
                "El documento mediador distingue acuerdo, aplicación pendiente y desacuerdo real.",
                "El silencio de la reunión demuestra aceptación entusiasta."
              ],
              "answer": 0,
              "why": "Reconstruye el propósito común antes de buscar detalles."
            },
            {
              "q": "En esta fase, ¿qué conclusión sería excesiva sobre Checkpoint: una plaza, tres versiones?",
              "options": [
                "La intención declarada elimina cualquier efecto del mensaje.",
                "El documento mediador distingue acuerdo, aplicación pendiente y desacuerdo real."
              ],
              "answer": 0,
              "why": "La primera opción amplía o deforma lo que permite el intercambio."
            }
          ]
        }
      },
      {
        "stage": "detail",
        "prompt": "Escucha otra vez y anota afirmación, condición y fuente. No copies frases todavía.",
        "exercise": {
          "id": "c2-05-escucha-detail",
          "type": "choice",
          "prompt": "Interpreta el diálogo: Checkpoint: una plaza, tres versiones",
          "items": [
            {
              "q": "¿Qué límite deben conservar los interlocutores de Checkpoint: una plaza, tres versiones?",
              "options": [
                "El plano ya tiene todas las comprobaciones técnicas.",
                "El plano aún requiere una comprobación sobre vehículos de emergencia."
              ],
              "answer": 1,
              "why": "La conversación vuelve sobre el límite que evita una promesa o inferencia excesiva."
            },
            {
              "q": "En esta fase, ¿qué conclusión sería excesiva sobre Checkpoint: una plaza, tres versiones?",
              "options": [
                "La intención declarada elimina cualquier efecto del mensaje.",
                "El plano aún requiere una comprobación sobre vehículos de emergencia."
              ],
              "answer": 0,
              "why": "La primera opción amplía o deforma lo que permite el intercambio."
            }
          ]
        }
      },
      {
        "stage": "notice",
        "prompt": "Localiza una reformulación y explica qué inferencia repara. Consulta la transcripción solo después de responder.",
        "exercise": {
          "id": "c2-05-escucha-notice",
          "type": "choice",
          "prompt": "Interpreta el diálogo: Checkpoint: una plaza, tres versiones",
          "items": [
            {
              "q": "¿Qué inferencia pragmática permite el diálogo de Checkpoint: una plaza, tres versiones?",
              "options": [
                "La intención declarada elimina cualquier efecto del mensaje.",
                "No solicitar una votación separada no demuestra entusiasmo ni consenso pleno."
              ],
              "answer": 1,
              "why": "La inferencia se apoya en una reformulación y su contexto; no es una lectura literal de una palabra."
            },
            {
              "q": "En esta fase, ¿qué conclusión sería excesiva sobre Checkpoint: una plaza, tres versiones?",
              "options": [
                "La intención declarada elimina cualquier efecto del mensaje.",
                "No solicitar una votación separada no demuestra entusiasmo ni consenso pleno."
              ],
              "answer": 0,
              "why": "La primera opción amplía o deforma lo que permite el intercambio."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "Checkpoint: una plaza, tres versiones · expediente de lectura",
    "genre": "Dossier original: texto principal y documento de contraste",
    "frame": "Situación ficticia para lectura crítica y mediación. Identifica qué voz afirma cada cosa antes de integrar las fuentes.",
    "text": [
      "El acta del consejo de barrio anunciaba que «se mantendrán las terrazas de los locales que permitan el paso accesible». La asociación de comerciantes leyó una condición que podía cumplir reorganizando las mesas. La asociación vecinal entendió que se retirarían las terrazas de todos los locales que hoy obstaculizaban el paso, sin posibilidad de adaptación. La diferencia no se resolvía mirando una fotografía: afectaba al momento en que debía comprobarse la condición y al procedimiento para subsanar un incumplimiento.",
      "La crónica del semanario celebró «el milagro de una plaza donde caben todos, siempre que algunos aprendan a no ocupar sitio». La ironía apuntaba a la desigual distribución del espacio. Sin embargo, al afirmar después que los comerciantes habían aceptado gustosos las nuevas normas, la cronista convirtió un silencio de la reunión en asentimiento. El acta solo registraba que no se había solicitado una votación separada. No es lo mismo no bloquear un acuerdo, aceptarlo y considerarlo justo. La diferencia parece minuciosa hasta que una institución usa esa supuesta aceptación para cerrar el debate.",
      "Un mensaje de la portavoz comercial añadía otra capa: «Nos alegra que por fin se escuche a quienes vivimos de la plaza». La vecina que recibió el mensaje preguntó si quienes vivían en ella quedaban excluidos. El verbo vivir permitía un juego involuntario entre residencia y sustento. La portavoz respondió que no había pretendido excluir a nadie. Esa aclaración de intención no eliminaba el efecto del contraste, aunque sí ofrecía una base para reparar el intercambio sin acusarla automáticamente de desprecio.",
      "El equipo mediador propuso publicar un documento con tres columnas: acuerdo confirmado, aplicación pendiente y desacuerdo persistente. En la primera figuraba la obligación de mantener un itinerario accesible; en la segunda, las medidas y el calendario de comprobación; en la tercera, la distribución de las horas de carga. La clasificación no fabricaba consenso. Permitía localizarlo y evitar que el desacuerdo sobre las entregas invalidara una obligación que nadie discutía expresamente.",
      "Anexo para la consulta. Un plano provisional reservaba dos metros continuos de paso y desplazaba las mesas hacia una zona sin sombra. El informe técnico advertía que todavía faltaba comprobar la maniobra de los vehículos de emergencia. Los vecinos pedían ampliar el espacio de bancos; los comerciantes ofrecían retirar mobiliario durante ciertas horas si se mantenían las licencias. Ninguna de estas propuestas había sido aprobada. La consulta solicitaba observaciones sobre el plano durante diez días, pero no indicaba cómo se respondería a ellas. La mediación debía hacer visible esa ausencia sin presentar la consulta entera como una simulación demostrada de participación. La propuesta de mediación se sometería a revisión después de la consulta, con las observaciones recogidas y sus respuestas públicas.",
      "Observación posterior de un comerciante. El plano parece ofrecer dos opciones: conservar las mesas o garantizar el paso. Sin embargo, algunas mesas pueden cambiar de lugar y otras no; la geometría de cada fachada importa. Presentar a todos los locales como una unidad borra diferencias que podrían permitir acuerdos parciales. La asociación vecinal aceptó estudiar configuraciones distintas, pero pidió que la evaluación no dependiera solo de la capacidad de cada comerciante para negociar. Un criterio público debía poder aplicarse también a quien no estuviera representado en la mesa.",
      "La mediadora incorporó esta objeción al informe sin convertirla en una solución técnica. No podía certificar anchuras ni maniobras; podía explicar qué información debía producir el equipo competente y cómo afectaría a la decisión. También corrigió el título provisional, La plaza alcanza un acuerdo, por uno que identificaba el alcance real: Acuerdo sobre accesibilidad y consulta sobre distribución. El cambio renunciaba a una noticia más redonda, pero impedía que la presentación del proceso redujera el espacio para discrepar. La integración final exige aquí una doble fidelidad: a lo que las fuentes permiten afirmar y a lo que las personas todavía tienen derecho a discutir sin aparecer como incumplidoras de un consenso que no existe."
    ],
    "tasks": [
      {
        "id": "c2-05-lectura",
        "type": "choice",
        "prompt": "Reconstruye la tesis y su límite en Checkpoint: una plaza, tres versiones.",
        "items": [
          {
            "q": "¿Qué tesis sostiene el dossier «Checkpoint: una plaza, tres versiones»?",
            "options": [
              "El silencio de la reunión demuestra aceptación entusiasta.",
              "El documento mediador distingue acuerdo, aplicación pendiente y desacuerdo real."
            ],
            "answer": 1,
            "why": "La tesis integra el contraste entre las fuentes, no solo una frase aislada."
          },
          {
            "q": "¿Qué detalle limita la interpretación en «Checkpoint: una plaza, tres versiones»?",
            "options": [
              "El plano ya tiene todas las comprobaciones técnicas.",
              "El plano aún requiere una comprobación sobre vehículos de emergencia."
            ],
            "answer": 1,
            "why": "El documento complementario delimita qué está confirmado."
          }
        ]
      },
      {
        "id": "c2-05-lectura-evidencia",
        "type": "open",
        "prompt": "Defiende una interpretación de Checkpoint: una plaza, tres versiones con pruebas y contraejemplos.",
        "items": [
          {
            "prompt": "Contrasta «El documento mediador distingue acuerdo, aplicación pendiente y desacuerdo real.» con «El silencio de la reunión demuestra aceptación entusiasta.». Cita dos fragmentos breves, atribuye sus voces y explica qué detalle impide sostener la segunda lectura.",
            "model": "El documento mediador distingue acuerdo, aplicación pendiente y desacuerdo real. El plano aún requiere una comprobación sobre vehículos de emergencia.",
            "checklist": [
              "Distingo cita e interpretación.",
              "Incluyo una lectura rival y un límite."
            ]
          }
        ]
      }
    ],
    "noticing": {
      "prompt": "Observa cómo las formas del expediente distribuyen certeza, responsabilidad y voz.",
      "items": [
        {
          "quote": "El acta del consejo de barrio anunciaba que «se mantendrán las terrazas de los locales que permitan el paso accesible».",
          "note": "Examina el encuadre inicial y qué información necesitarás para revisarlo."
        },
        {
          "quote": "Anexo para la consulta.",
          "note": "El documento final introduce otra perspectiva; identifica qué interpretación limita y qué deja abierto."
        }
      ]
    }
  },
  "practice": {
    "intro": "Combina orden, clasificación, producción y recuperación espaciada. Las respuestas abiertas se contrastan con criterios y con tu docente.",
    "exercises": [
      {
        "id": "c2-05-orden",
        "type": "order",
        "prompt": "Reconstruye dos relaciones centrales del caso Checkpoint: una plaza, tres versiones.",
        "items": [
          {
            "words": [
              "El",
              "acuerdo",
              "no",
              "resuelve",
              "el",
              "reparto",
              "de",
              "horarios."
            ],
            "why": "La secuencia mantiene el alcance y las relaciones del caso."
          },
          {
            "words": [
              "La",
              "consulta",
              "debe",
              "explicar",
              "cómo",
              "responderá."
            ],
            "why": "La secuencia mantiene el alcance y las relaciones del caso."
          }
        ]
      },
      {
        "id": "c2-05-estatuto",
        "type": "classify",
        "prompt": "Clasifica el estatuto de estas formulaciones en «Checkpoint: una plaza, tres versiones».",
        "categories": [
          "Conclusión respaldada o delimitada",
          "Generalización no autorizada"
        ],
        "items": [
          {
            "text": "El documento mediador distingue acuerdo, aplicación pendiente y desacuerdo real.",
            "cat": 0,
            "why": "Resume el razonamiento con sus límites."
          },
          {
            "text": "El silencio de la reunión demuestra aceptación entusiasta.",
            "cat": 1,
            "why": "Amplía o invierte el alcance de las fuentes."
          },
          {
            "text": "El plano aún requiere una comprobación sobre vehículos de emergencia.",
            "cat": 0,
            "why": "Conserva un detalle explícito del expediente."
          },
          {
            "text": "El plano ya tiene todas las comprobaciones técnicas.",
            "cat": 1,
            "why": "Contradice la condición documentada."
          }
        ]
      },
      {
        "id": "c2-05-microescritura",
        "type": "open",
        "prompt": "Produce dos versiones breves antes del dossier de Checkpoint: una plaza, tres versiones.",
        "items": [
          {
            "prompt": "Redacta una apertura de 80–100 palabras para el destinatario de «Checkpoint: una plaza, tres versiones». Conserva la tesis y una reserva.",
            "model": "Existe acuerdo sobre mantener un paso accesible, pero no sobre su aplicación ni sobre los horarios de carga. La crónica interpreta el silencio comercial como entusiasmo; el acta no permite esa atribución. El plano requiere todavía una comprobación de acceso de emergencias y no constituye una solución aprobada. Proponemos publicar el criterio de adaptación, el responsable de comprobarlo y un mecanismo de respuesta a las observaciones. La consulta ganará credibilidad si explica cómo puede modificar la propuesta. La ironía sobre una plaza donde caben todos expresa una crítica pertinente, pero no sustituye la discusión de una distribución concreta.",
            "checklist": [
              "Identifico quién necesita decidir y con qué información.",
              "Separo afirmación, atribución e inferencia."
            ]
          },
          {
            "prompt": "Reformula para una persona ajena al debate de «Checkpoint: una plaza, tres versiones» la condición que más fácilmente se perdería al resumir. Explica el coste de omitirla.",
            "model": "El plano aún requiere una comprobación sobre vehículos de emergencia. El documento mediador distingue acuerdo, aplicación pendiente y desacuerdo real.",
            "checklist": [
              "No convierto la condición en un dato accesorio.",
              "Mantengo el alcance aunque simplifique el léxico."
            ]
          }
        ]
      },
      {
        "id": "c2-05-recuperacion",
        "type": "open",
        "prompt": "Recupera recursos con materiales suministrados de semanas anteriores. No busques rasgos ausentes en el dossier actual. Contrasta después qué recurso sería pertinente transferir al nuevo caso.",
        "items": [
          {
            "prompt": "Recuperación c2.gram.ambiguedad-sintactica. Recupera la semana 1, «Dos lecturas, una responsabilidad». Contrastes suministrados: La comisión entrevistó a la asesora de la asociación que denunció el cierre. / La asociación denunció el cierre; la comisión entrevistó a su asesora. / Solo se revisarán los informes incompletos.\n\nExplica la estructura y el cambio de interpretación pertinentes para «Ambigüedad sintáctica». Produce una cuarta formulación y señala expresamente qué referente, condición o perspectiva temporal conserva. Contraste nuevo suministrado de «Checkpoint: una plaza, tres versiones»: «Aunque sea útil limitar el tráfico, falta explicar el reparto.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Una relativa puede modificar más de un antecedente compatible: la técnica de la empresa que presentó el recurso. La cercanía favorece una lectura, pero no cancela la otra. La puntuación explicativa cambia además qué información se presupone: las solicitudes, que llegaron tarde excluye la selección que sí permite las solicitudes que llegaron tarde. Para desambiguar conviene repetir un sustantivo preciso o dividir la oración; sustituir todo por pronombres suele empeorar el problema. Aplicación al caso: La revisión de siete permisos requiere explicar tanto el alcance del procedimiento como el criterio de selección. La nota interna documenta una incidencia de recepción en tres casos; no permite equiparar los otros cuatro ni anticipar su resolución. Por ello, proponemos publicar una relación de situaciones sin identificar a las asociaciones. La fórmula inicial trasladaba al público una ambigüedad que la institución debía resolver. Corregirla es necesario, pero todavía falta justificar por qué cada expediente entra en revisión. Una comunicación responsable separará el envío del escrito, su admisión y la decisión sobre el permiso. En el nuevo contraste, «Aunque sea útil limitar el tráfico, falta explicar el reparto.» debe interpretarse dentro de esta cuestión: Integrar alcance, ironía, registro y subtexto. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.disc.desambiguar. Recupera la semana 1, «Dos lecturas, una responsabilidad». Material de contraste: El aviso cabía en una pantalla: «La comisión revisará los permisos de las asociaciones que presentaron alegaciones fuera de plazo». A primera vista, el ayuntamiento había anunciado una decisión, acaso discutible, pero comprensible. Bastaron dos llamadas para comprobar que no todos habían leído la misma decisión. Una asociación entendió que solo se revisarían los permisos correspondientes a las entidades cuyas alegaciones llegaron tarde. Otra sostuvo que todas las asociaciones habían alegado tarde y que, por tanto, la revisión sería general. La ausencia de una coma parecía distribuir derechos. Formulación de trabajo: La asociación denunció el cierre; la comisión entrevistó a su asesora.\n\nRecupera «Desambiguar en la escritura» a partir del material suministrado. Produce una versión de 80–100 palabras que haga visible una relación implícita, mantenga una reserva y responda a una objeción. Explica cuál es tu aportación y cuál procede de la fuente. Contraste nuevo suministrado de «Checkpoint: una plaza, tres versiones»: «Aunque sea útil limitar el tráfico, falta explicar el reparto.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La revisión de siete permisos requiere explicar tanto el alcance del procedimiento como el criterio de selección. La nota interna documenta una incidencia de recepción en tres casos; no permite equiparar los otros cuatro ni anticipar su resolución. Por ello, proponemos publicar una relación de situaciones sin identificar a las asociaciones. La fórmula inicial trasladaba al público una ambigüedad que la institución debía resolver. Corregirla es necesario, pero todavía falta justificar por qué cada expediente entra en revisión. Una comunicación responsable separará el envío del escrito, su admisión y la decisión sobre el permiso. En el nuevo contraste, «Aunque sea útil limitar el tráfico, falta explicar el reparto.» debe interpretarse dentro de esta cuestión: Integrar alcance, ironía, registro y subtexto. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.voc.polisemia-avanzada. Pares originales: «Se admitió la queja a trámite» / «Se admitió que la queja era fundada»; «La revisión examina el texto» / «La revisión modifica el texto».\n\nDistingue los sentidos de admitir y revisión en estos pares. Redacta un aviso donde se admita un trámite sin afirmar que se ha dado la razón a quien reclama. Después produce una frase donde revisión signifique modificación efectiva. Contraste nuevo suministrado de «Checkpoint: una plaza, tres versiones»: «Aunque sea útil limitar el tráfico, falta explicar el reparto.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Admitir a trámite significa aceptar examinar; admitir que la queja es fundada reconoce su contenido. Revisión puede ser examen o modificación. Aviso: la queja se admite a trámite y su fundamento será evaluado. Modificación: la revisión sustituyó la cláusula ambigua por dos condiciones explícitas. En el nuevo contraste, «Aunque sea útil limitar el tráfico, falta explicar el reparto.» debe interpretarse dentro de esta cuestión: Integrar alcance, ironía, registro y subtexto. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.pron.prosodia-desambiguadora. Recupera la semana 1, «Dos lecturas, una responsabilidad». Textos para ensayo oral: «Las asociaciones que alegaron tarde tendrán una revisión.» / «Todas las asociaciones alegaron tarde y tendrán una revisión.».\n\nMarca grupos fónicos, un foco y una pausa en cada texto. Produce dos lecturas propias y pide a tu interlocutor que explique el efecto. Recupera «Prosodia que desambigua» sin atribuir una intención segura ni una variedad a la síntesis. Si trabajas a solas, describe la intención y deja su comprobación perceptiva para clase. Contraste nuevo suministrado de «Checkpoint: una plaza, tres versiones»: «Aunque sea útil limitar el tráfico, falta explicar el reparto.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Agrupa la relativa con su antecedente y evita una pausa que la convierta en comentario explicativo. Contrasta después una lectura restrictiva con una explicación separada. Un ensayo defendible conserva esta distinción del caso: La claridad del aviso no sustituye la justificación del criterio municipal. El resultado perceptivo debe contrastarse con un oyente; no queda acreditado por escribir una marca de pausa. En el nuevo contraste, «Aunque sea útil limitar el tráfico, falta explicar el reparto.» debe interpretarse dentro de esta cuestión: Integrar alcance, ironía, registro y subtexto. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.read.textos-ambiguos. Recupera la semana 1, «Dos lecturas, una responsabilidad». Pasajes que debes contrastar: El aviso cabía en una pantalla: «La comisión revisará los permisos de las asociaciones que presentaron alegaciones fuera de plazo». A primera vista, el ayuntamiento había anunciado una decisión, acaso discutible, pero comprensible. Bastaron dos llamadas para comprobar que no todos habían leído la misma decisión. Una asociación entendió que solo se revisarían los permisos correspondientes a las entidades cuyas alegaciones llegaron tarde. Otra sostuvo que todas las asociaciones habían alegado tarde y que, por tanto, la revisión sería general. La ausencia de una coma parecía distribuir derechos.\n\nEl intercambio muestra que desambiguar no consiste en perseguir una frase capaz de sobrevivir sin contexto alguno. Consiste en proporcionar el contexto necesario para la decisión prevista y hacer visibles sus límites. Incluso la versión corregida podría quedar anticuada al día siguiente si llegara nueva documentación. Por eso el aviso debía distinguir una descripción fechada de una regla permanente. Una palabra como actualmente no sustituye una fecha cuando el texto circula durante meses; una fecha, a su vez, no explica qué hecho desencadena una revisión. La precisión se distribuye entre la oración, el documento y el procedimiento mediante el cual se mantiene vigente.\n\nRelee estos pasajes y recupera «Leer titulares y cláusulas ambiguas». Formula una interpretación, un detalle que la apoye y una lectura rival. Señala qué dato del expediente completo necesitarías para reforzar o limitar tu conclusión. Contraste nuevo suministrado de «Checkpoint: una plaza, tres versiones»: «Aunque sea útil limitar el tráfico, falta explicar el reparto.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La revisión de siete permisos requiere explicar tanto el alcance del procedimiento como el criterio de selección. La nota interna documenta una incidencia de recepción en tres casos; no permite equiparar los otros cuatro ni anticipar su resolución. Por ello, proponemos publicar una relación de situaciones sin identificar a las asociaciones. La fórmula inicial trasladaba al público una ambigüedad que la institución debía resolver. Corregirla es necesario, pero todavía falta justificar por qué cada expediente entra en revisión. Una comunicación responsable separará el envío del escrito, su admisión y la decisión sobre el permiso. En el nuevo contraste, «Aunque sea útil limitar el tráfico, falta explicar el reparto.» debe interpretarse dentro de esta cuestión: Integrar alcance, ironía, registro y subtexto. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.disc.ironia-productiva. Recupera la semana 2, «La cortesía de decir lo contrario». Material de contraste: La inauguración del centro cultural empezó con una disculpa por el retraso y continuó con una celebración de la puntualidad institucional. «Nunca llegamos tarde a lo importante», afirmó la directora, mientras un técnico intentaba abrir la puerta todavía sin terminar. La frase provocó risas. No era necesariamente una burla cruel: algunas personas parecían agradecer que el discurso oficial hubiera ofrecido, por accidente, una descripción suficientemente exacta de la tarde. Otras no rieron; llevaban meses sin un lugar donde ensayar. Formulación de trabajo: La explicación no fue precisamente exhaustiva.\n\nRecupera «Ironía, litote e hipérbole» a partir del material suministrado. Produce una versión de 80–100 palabras que haga visible una relación implícita, mantenga una reserva y responda a una objeción. Explica cuál es tu aportación y cuál procede de la fuente. Contraste nuevo suministrado de «Checkpoint: una plaza, tres versiones»: «Aunque sea útil limitar el tráfico, falta explicar el reparto.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La sala resulta tan abierta que todavía deja pasar la lluvia. La imagen sería solo un chiste si no hubiera talleres pagando otro alquiler mientras esperan. La inauguración no fue precisamente una demostración de previsión; tampoco basta decirlo para recuperar las actividades perdidas. Pedimos un calendario verificable, un espacio provisional y una explicación de los cambios presupuestarios. El humor se dirige a la distancia entre anuncio y realidad, no a quienes soportan esa distancia. En el boletín municipal, esa misma crítica necesita una formulación literal: la apertura anunciada no garantiza todavía el uso del centro. En el nuevo contraste, «Aunque sea útil limitar el tráfico, falta explicar el reparto.» debe interpretarse dentro de esta cuestión: Integrar alcance, ironía, registro y subtexto. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.voc.evaluacion-implicita. Recupera la semana 2, «La cortesía de decir lo contrario». Unidades disponibles: elogio envenenado (aprobación aparente que descalifica); litote (atenuación mediante negación del contrario); hipérbole (exageración reconocible); sobrentendido (contenido inferido y no formulado); condescendencia (superioridad disfrazada de amabilidad); a todas luces (de manera evidente para quien habla); tener su mérito (reconocer un valor, a veces irónicamente); quedarse corto (no alcanzar la intensidad necesaria). Pasaje: La inauguración del centro cultural empezó con una disculpa por el retraso y continuó con una celebración de la puntualidad institucional. «Nunca llegamos tarde a lo importante», afirmó la directora, mientras un técnico intentaba abrir la puerta todavía sin terminar. La frase provocó risas. No era necesariamente una burla cruel: algunas personas parecían agradecer que el discurso oficial hubiera ofrecido, por accidente, una descripción suficientemente exacta de la tarde. Otras no rieron; llevaban meses sin un lugar donde ensayar.\n\nRecupera «Léxico evaluativo implícito»: selecciona dos unidades del material, explica por qué no son intercambiables y redacta una frase sobre el caso con cada una. Contrasta una elección precisa con otra que introduciría una evaluación o un alcance distintos. Contraste nuevo suministrado de «Checkpoint: una plaza, tres versiones»: «Aunque sea útil limitar el tráfico, falta explicar el reparto.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La sala resulta tan abierta que todavía deja pasar la lluvia. La imagen sería solo un chiste si no hubiera talleres pagando otro alquiler mientras esperan. La inauguración no fue precisamente una demostración de previsión; tampoco basta decirlo para recuperar las actividades perdidas. Pedimos un calendario verificable, un espacio provisional y una explicación de los cambios presupuestarios. El humor se dirige a la distancia entre anuncio y realidad, no a quienes soportan esa distancia. En el boletín municipal, esa misma crítica necesita una formulación literal: la apertura anunciada no garantiza todavía el uso del centro. En este contraste, «elogio envenenado» nombra aprobación aparente que descalifica; «litote», atenuación mediante negación del contrario. La elección debe conservar esa diferencia. En el nuevo contraste, «Aunque sea útil limitar el tráfico, falta explicar el reparto.» debe interpretarse dentro de esta cuestión: Integrar alcance, ironía, registro y subtexto. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.pron.ironia-variedades. Recupera la semana 2, «La cortesía de decir lo contrario». Textos para ensayo oral: «Una puntualidad admirable: llegaron antes de abrir.» / «Una puntualidad admirable: llegaron después de cerrar.».\n\nMarca grupos fónicos, un foco y una pausa en cada texto. Produce dos lecturas propias y pide a tu interlocutor que explique el efecto. Recupera «Prosodia e ironía contextual» sin atribuir una intención segura ni una variedad a la síntesis. Si trabajas a solas, describe la intención y deja su comprobación perceptiva para clase. Contraste nuevo suministrado de «Checkpoint: una plaza, tres versiones»: «Aunque sea útil limitar el tráfico, falta explicar el reparto.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Ensaya primero una valoración literal y después una irónica; observa duración, foco y descenso final. El contexto sostiene la inferencia: la síntesis no garantiza interpretar la ironía por la voz. Un ensayo defendible conserva esta distinción del caso: La columna gana precisión al convertir la ironía en demandas verificables. El resultado perceptivo debe contrastarse con un oyente; no queda acreditado por escribir una marca de pausa. En el nuevo contraste, «Aunque sea útil limitar el tráfico, falta explicar el reparto.» debe interpretarse dentro de esta cuestión: Integrar alcance, ironía, registro y subtexto. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.lis.humor-ironico. Recupera la semana 2, «La cortesía de decir lo contrario». Recuperación del contenido escuchado: vuelve al audio de esa semana sin abrir su transcripción. Como pista de contraste, conserva estas dos posiciones: La columna gana precisión al convertir la ironía en demandas verificables. / La tallerista exige prohibir toda ironía.\n\nToma notas de quién sostiene cada posición y de una reserva expresada. Después contrasta tus notas con la transcripción. No deduzcas rasgos regionales ni solapamientos que el audio sintético no acredita. Contraste nuevo suministrado de «Checkpoint: una plaza, tres versiones»: «Aunque sea útil limitar el tráfico, falta explicar el reparto.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La sala resulta tan abierta que todavía deja pasar la lluvia. La imagen sería solo un chiste si no hubiera talleres pagando otro alquiler mientras esperan. La inauguración no fue precisamente una demostración de previsión; tampoco basta decirlo para recuperar las actividades perdidas. Pedimos un calendario verificable, un espacio provisional y una explicación de los cambios presupuestarios. El humor se dirige a la distancia entre anuncio y realidad, no a quienes soportan esa distancia. En el boletín municipal, esa misma crítica necesita una formulación literal: la apertura anunciada no garantiza todavía el uso del centro. La primera posición sintetiza el límite defendido; la segunda es la conclusión excesiva que el diálogo obliga a rechazar. En el nuevo contraste, «Aunque sea útil limitar el tráfico, falta explicar el reparto.» debe interpretarse dentro de esta cuestión: Integrar alcance, ironía, registro y subtexto. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.spk.comentario-ironico. Recupera la semana 2, «La cortesía de decir lo contrario». Situación para retomar: Presenta la columna ante una tallerista y después ante una responsable municipal. Conserva la crítica, modifica el humor y explica qué inferencia no quieres provocar. Objeción suministrada: La tallerista exige prohibir toda ironía.\n\nRecupera «Comentario con ironía controlada». Haz una intervención de dos minutos con tesis y reserva; responde durante un minuto a la objeción. Pide una reformulación de tu idea al interlocutor antes de evaluar si fuiste claro. Contraste nuevo suministrado de «Checkpoint: una plaza, tres versiones»: «Aunque sea útil limitar el tráfico, falta explicar el reparto.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La sala resulta tan abierta que todavía deja pasar la lluvia. La imagen sería solo un chiste si no hubiera talleres pagando otro alquiler mientras esperan. La inauguración no fue precisamente una demostración de previsión; tampoco basta decirlo para recuperar las actividades perdidas. Pedimos un calendario verificable, un espacio provisional y una explicación de los cambios presupuestarios. El humor se dirige a la distancia entre anuncio y realidad, no a quienes soportan esa distancia. En el boletín municipal, esa misma crítica necesita una formulación literal: la apertura anunciada no garantiza todavía el uso del centro. En el nuevo contraste, «Aunque sea útil limitar el tráfico, falta explicar el reparto.» debe interpretarse dentro de esta cuestión: Integrar alcance, ironía, registro y subtexto. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.disc.cambio-registro. Recupera la semana 3, «Lo que la cláusula permite». Material de contraste: El reglamento de la residencia artística ocupaba nueve páginas. La mayoría de las personas admitidas había leído sobre todo una frase: «La estancia podrá prorrogarse hasta treinta días, siempre que exista disponibilidad, sin perjuicio de la revisión de las condiciones económicas». En el grupo de participantes, la frase se convirtió en «tenemos un mes más por el mismo precio». Nadie había mentido de manera deliberada. Al circular, la posibilidad pasó a ser certeza y la reserva económica desapareció por parecer un detalle secundario. Formulación de trabajo: Si alguien incumple el plazo, deberá justificar el retraso.\n\nRecupera «Alternancia de registros» a partir del material suministrado. Produce una versión de 80–100 palabras que haga visible una relación implícita, mantenga una reserva y responda a una objeción. Explica cuál es tu aportación y cuál procede de la fuente. Contraste nuevo suministrado de «Checkpoint: una plaza, tres versiones»: «Aunque sea útil limitar el tráfico, falta explicar el reparto.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La ampliación de la estancia puede solicitarse por un periodo de hasta treinta días. No está garantizada: depende de que haya plazas y de las condiciones que se comuniquen. La cláusula permite revisar el precio, pero no establece un plazo de aviso. Los cinco días solicitados por los residentes siguen siendo una propuesta. Por tanto, esta guía distingue lo vigente de lo negociado y recomienda esperar una confirmación antes de reservar un viaje adicional. Explicar la incertidumbre no la resuelve; evita que la claridad de la redacción se confunda con una garantía que el reglamento no contiene. En el nuevo contraste, «Aunque sea útil limitar el tráfico, falta explicar el reparto.» debe interpretarse dentro de esta cuestión: Integrar alcance, ironía, registro y subtexto. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.voc.lenguaje-juridico. Recupera la semana 3, «Lo que la cláusula permite». Unidades disponibles: sin perjuicio de (sin eliminar otra facultad); a tenor de (según el contenido de una disposición); subsanar (corregir un defecto documental); de pleno derecho (por efecto directo de la norma invocada); incumpliere (incumple, en una condición de estilo jurídico); prórroga (ampliación de un plazo); fehaciente (que permite acreditar un hecho); facultad (posibilidad de actuación reconocida). Pasaje: El reglamento de la residencia artística ocupaba nueve páginas. La mayoría de las personas admitidas había leído sobre todo una frase: «La estancia podrá prorrogarse hasta treinta días, siempre que exista disponibilidad, sin perjuicio de la revisión de las condiciones económicas». En el grupo de participantes, la frase se convirtió en «tenemos un mes más por el mismo precio». Nadie había mentido de manera deliberada. Al circular, la posibilidad pasó a ser certeza y la reserva económica desapareció por parecer un detalle secundario.\n\nRecupera «Lenguaje jurídico-administrativo»: selecciona dos unidades del material, explica por qué no son intercambiables y redacta una frase sobre el caso con cada una. Contrasta una elección precisa con otra que introduciría una evaluación o un alcance distintos. Contraste nuevo suministrado de «Checkpoint: una plaza, tres versiones»: «Aunque sea útil limitar el tráfico, falta explicar el reparto.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La ampliación de la estancia puede solicitarse por un periodo de hasta treinta días. No está garantizada: depende de que haya plazas y de las condiciones que se comuniquen. La cláusula permite revisar el precio, pero no establece un plazo de aviso. Los cinco días solicitados por los residentes siguen siendo una propuesta. Por tanto, esta guía distingue lo vigente de lo negociado y recomienda esperar una confirmación antes de reservar un viaje adicional. Explicar la incertidumbre no la resuelve; evita que la claridad de la redacción se confunda con una garantía que el reglamento no contiene. En este contraste, «sin perjuicio de» nombra sin eliminar otra facultad; «a tenor de», según el contenido de una disposición. La elección debe conservar esa diferencia. En el nuevo contraste, «Aunque sea útil limitar el tráfico, falta explicar el reparto.» debe interpretarse dentro de esta cuestión: Integrar alcance, ironía, registro y subtexto. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.gram.futuro-subjuntivo-juridico. Recupera la semana 3, «Lo que la cláusula permite». Contrastes suministrados: Quien incumpliere el plazo deberá justificar la demora. / Si alguien incumple el plazo, deberá justificar el retraso. / La revisión se efectuará sin perjuicio del derecho a reclamar.\n\nExplica la estructura y el cambio de interpretación pertinentes para «Futuro de subjuntivo y fórmulas arcaizantes». Produce una cuarta formulación y señala expresamente qué referente, condición o perspectiva temporal conserva. Contraste nuevo suministrado de «Checkpoint: una plaza, tres versiones»: «Aunque sea útil limitar el tráfico, falta explicar el reparto.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "En las cláusulas, sin perjuicio de preserva otra facultad; no significa a pesar de que todo quede anulado. Siempre que introduce condición y salvo que una excepción. El futuro de subjuntivo sobreviva en fórmulas como quien incumpliere no obliga a reproducirlo al explicar: si alguien incumple conserva la condición. Una versión clara debe mantener sujeto obligado, acción, plazo, excepción y consecuencia; simplificar no permite ampliar derechos. Aplicación al caso: La ampliación de la estancia puede solicitarse por un periodo de hasta treinta días. No está garantizada: depende de que haya plazas y de las condiciones que se comuniquen. La cláusula permite revisar el precio, pero no establece un plazo de aviso. Los cinco días solicitados por los residentes siguen siendo una propuesta. Por tanto, esta guía distingue lo vigente de lo negociado y recomienda esperar una confirmación antes de reservar un viaje adicional. Explicar la incertidumbre no la resuelve; evita que la claridad de la redacción se confunda con una garantía que el reglamento no contiene. En el nuevo contraste, «Aunque sea útil limitar el tráfico, falta explicar el reparto.» debe interpretarse dentro de esta cuestión: Integrar alcance, ironía, registro y subtexto. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.pron.registro-voz. Recupera la semana 3, «Lo que la cláusula permite». Textos para ensayo oral: «La estancia puede ampliarse, siempre que haya plazas.» / «La estancia se amplía; hay plazas confirmadas.».\n\nMarca grupos fónicos, un foco y una pausa en cada texto. Produce dos lecturas propias y pide a tu interlocutor que explique el efecto. Recupera «Registro y voz» sin atribuir una intención segura ni una variedad a la síntesis. Si trabajas a solas, describe la intención y deja su comprobación perceptiva para clase. Contraste nuevo suministrado de «Checkpoint: una plaza, tres versiones»: «Aunque sea útil limitar el tráfico, falta explicar el reparto.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Separa facultad, condición y reserva con pausas breves. No relegues sin perjuicio de al final con menor volumen si esa reserva cambia la decisión del oyente. Un ensayo defendible conserva esta distinción del caso: Una mediación clara conserva condiciones y señala los vacíos sin inventar garantías. El resultado perceptivo debe contrastarse con un oyente; no queda acreditado por escribir una marca de pausa. En el nuevo contraste, «Aunque sea útil limitar el tráfico, falta explicar el reparto.» debe interpretarse dentro de esta cuestión: Integrar alcance, ironía, registro y subtexto. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.wri.traduccion-registro. Recupera la semana 3, «Lo que la cláusula permite». Modelo parcial que puedes transformar: La ampliación de la estancia puede solicitarse por un periodo de hasta treinta días. No está garantizada: depende de que haya plazas y de las condiciones que se comuniquen. La cláusula permite revisar el precio, pero no establece un plazo de aviso. Los cinco días solicitados por los residentes siguen siendo una propuesta. Por tanto, esta guía distingue lo vigente de lo negociado y recomienda esperar una confirmación antes de reservar un viaje adicional. Explicar la incertidumbre no la resuelve; evita que la claridad de la redacción se confunda con una garantía que el reglamento no contiene.\n\nRecupera «Traducción intralingüística» mediante una nueva versión de 120–160 palabras de este fragmento para otro destinatario. Mantén la reserva principal, cambia el orden de la información y justifica dos decisiones. Si el objetivo exige un texto completo, retoma además tu entrega original de esa semana y revisa su conjunto. Contraste nuevo suministrado de «Checkpoint: una plaza, tres versiones»: «Aunque sea útil limitar el tráfico, falta explicar el reparto.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La ampliación de la estancia puede solicitarse por un periodo de hasta treinta días. No está garantizada: depende de que haya plazas y de las condiciones que se comuniquen. La cláusula permite revisar el precio, pero no establece un plazo de aviso. Los cinco días solicitados por los residentes siguen siendo una propuesta. Por tanto, esta guía distingue lo vigente de lo negociado y recomienda esperar una confirmación antes de reservar un viaje adicional. Explicar la incertidumbre no la resuelve; evita que la claridad de la redacción se confunda con una garantía que el reglamento no contiene. Para una persona ajena al expediente, la información decisiva que debe seguir visible es: Una mediación clara conserva condiciones y señala los vacíos sin inventar garantías. En el nuevo contraste, «Aunque sea útil limitar el tráfico, falta explicar el reparto.» debe interpretarse dentro de esta cuestión: Integrar alcance, ironía, registro y subtexto. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.disc.subtexto. Recupera la semana 4, «Una silla que nadie ocupa». Material de contraste: Cuando volvieron a abrir el taller, Clara había dejado una silla junto a la ventana. Su hermano la apartó para pasar una caja. «Ahí estorba», dijo. Clara contestó que antes no estorbaba. Ninguno precisó antes de qué. El narrador podría habernos ayudado con una fecha o un recuerdo, pero siguió describiendo las manchas que las patas habían dejado sobre el suelo. Esa demora obliga al lector a percibir la importancia de un objeto cuya historia todavía desconoce. Formulación de trabajo: Clara zanjó que la silla sobraba.\n\nRecupera «Subtexto e inferencia» a partir del material suministrado. Produce una versión de 80–100 palabras que haga visible una relación implícita, mantenga una reserva y responda a una objeción. Explica cuál es tu aportación y cuál procede de la fuente. Contraste nuevo suministrado de «Checkpoint: una plaza, tres versiones»: «Aunque sea útil limitar el tráfico, falta explicar el reparto.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La silla vuelve a la ventana, pero la etiqueta de precio permanece. Ese contraste permite leer el final como una tregua más que como reconciliación completa. Clara acepta la presencia del objeto sin retirar su incomodidad. Otra lectura puede ver en el gesto del hermano un reconocimiento afectivo; deberá explicar, sin embargo, por qué el conflicto material sigue visible. El relato no confirma qué ocurrió con el padre. Atribuirle una muerte cerraría una incertidumbre que organiza la escena. Prefiero conservar dos hipótesis y distinguir lo que muestran las acciones de la emoción que yo les atribuyo. En el nuevo contraste, «Aunque sea útil limitar el tráfico, falta explicar el reparto.» debe interpretarse dentro de esta cuestión: Integrar alcance, ironía, registro y subtexto. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.voc.verbos-dicendi-matices. Recupera la semana 4, «Una silla que nadie ocupa». Unidades disponibles: espetar (decir con brusquedad); deslizar (introducir de manera indirecta); zanjar (dar por cerrado un asunto); eludir (evitar abordar algo); reticencia (reserva al decir o actuar); indicio (señal compatible con una hipótesis); atribuir (introducir una responsabilidad o intención); quedar en el aire (permanecer sin respuesta). Pasaje: Cuando volvieron a abrir el taller, Clara había dejado una silla junto a la ventana. Su hermano la apartó para pasar una caja. «Ahí estorba», dijo. Clara contestó que antes no estorbaba. Ninguno precisó antes de qué. El narrador podría habernos ayudado con una fecha o un recuerdo, pero siguió describiendo las manchas que las patas habían dejado sobre el suelo. Esa demora obliga al lector a percibir la importancia de un objeto cuya historia todavía desconoce.\n\nRecupera «Verbos introductores con matiz»: selecciona dos unidades del material, explica por qué no son intercambiables y redacta una frase sobre el caso con cada una. Contrasta una elección precisa con otra que introduciría una evaluación o un alcance distintos. Contraste nuevo suministrado de «Checkpoint: una plaza, tres versiones»: «Aunque sea útil limitar el tráfico, falta explicar el reparto.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La silla vuelve a la ventana, pero la etiqueta de precio permanece. Ese contraste permite leer el final como una tregua más que como reconciliación completa. Clara acepta la presencia del objeto sin retirar su incomodidad. Otra lectura puede ver en el gesto del hermano un reconocimiento afectivo; deberá explicar, sin embargo, por qué el conflicto material sigue visible. El relato no confirma qué ocurrió con el padre. Atribuirle una muerte cerraría una incertidumbre que organiza la escena. Prefiero conservar dos hipótesis y distinguir lo que muestran las acciones de la emoción que yo les atribuyo. En este contraste, «espetar» nombra decir con brusquedad; «deslizar», introducir de manera indirecta. La elección debe conservar esa diferencia. En el nuevo contraste, «Aunque sea útil limitar el tráfico, falta explicar el reparto.» debe interpretarse dentro de esta cuestión: Integrar alcance, ironía, registro y subtexto. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.pron.intencion-pragmatica. Recupera la semana 4, «Una silla que nadie ocupa». Textos para ensayo oral: «Molesta un poco, pero puede quedarse.» / «Molesta un poco; prefiero que la muevas.».\n\nMarca grupos fónicos, un foco y una pausa en cada texto. Produce dos lecturas propias y pide a tu interlocutor que explique el efecto. Recupera «Entonación e intención contextual» sin atribuir una intención segura ni una variedad a la síntesis. Si trabajas a solas, describe la intención y deja su comprobación perceptiva para clase. Contraste nuevo suministrado de «Checkpoint: una plaza, tres versiones»: «Aunque sea útil limitar el tráfico, falta explicar el reparto.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Ensaya un poco como aceptación incómoda y como objeción suave. No asignes una emoción única a una pausa: compara qué lectura permite el conjunto de la escena. Un ensayo defendible conserva esta distinción del caso: El relato sostiene hipótesis de reconciliación y tregua sin resolverlas por completo. El resultado perceptivo debe contrastarse con un oyente; no queda acreditado por escribir una marca de pausa. En el nuevo contraste, «Aunque sea útil limitar el tráfico, falta explicar el reparto.» debe interpretarse dentro de esta cuestión: Integrar alcance, ironía, registro y subtexto. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.read.relato-subtexto. Recupera la semana 4, «Una silla que nadie ocupa». Pasajes que debes contrastar: Cuando volvieron a abrir el taller, Clara había dejado una silla junto a la ventana. Su hermano la apartó para pasar una caja. «Ahí estorba», dijo. Clara contestó que antes no estorbaba. Ninguno precisó antes de qué. El narrador podría habernos ayudado con una fecha o un recuerdo, pero siguió describiendo las manchas que las patas habían dejado sobre el suelo. Esa demora obliga al lector a percibir la importancia de un objeto cuya historia todavía desconoce.\n\nLa autora descartó añadir una explicación al final, pero aceptó revisar un pronombre en el segundo párrafo. Algunos lectores atribuían la propuesta de venta a la vecina, que aún no había entrado. Esa confusión no contribuía al subtexto: impedía reconstruir quién estaba presente. La distinción entre ambigüedad deliberada y referencia defectuosa no puede decidirse solo por la intención del escritor. Debe examinarse qué trabajo interpretativo permite cada dificultad. La incertidumbre sobre el padre abre lecturas pertinentes; la incertidumbre accidental sobre quién habla puede cerrar la posibilidad de seguir el diálogo. El control estilístico consiste en conservar la primera y reparar la segunda, sin convertir el relato en una explicación de sí mismo.\n\nRelee estos pasajes y recupera «Leer un relato con subtexto». Formula una interpretación, un detalle que la apoye y una lectura rival. Señala qué dato del expediente completo necesitarías para reforzar o limitar tu conclusión. Contraste nuevo suministrado de «Checkpoint: una plaza, tres versiones»: «Aunque sea útil limitar el tráfico, falta explicar el reparto.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La silla vuelve a la ventana, pero la etiqueta de precio permanece. Ese contraste permite leer el final como una tregua más que como reconciliación completa. Clara acepta la presencia del objeto sin retirar su incomodidad. Otra lectura puede ver en el gesto del hermano un reconocimiento afectivo; deberá explicar, sin embargo, por qué el conflicto material sigue visible. El relato no confirma qué ocurrió con el padre. Atribuirle una muerte cerraría una incertidumbre que organiza la escena. Prefiero conservar dos hipótesis y distinguir lo que muestran las acciones de la emoción que yo les atribuyo. En el nuevo contraste, «Aunque sea útil limitar el tráfico, falta explicar el reparto.» debe interpretarse dentro de esta cuestión: Integrar alcance, ironía, registro y subtexto. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.wri.dialogo-subtexto. Recupera la semana 4, «Una silla que nadie ocupa». Modelo parcial que puedes transformar: La silla vuelve a la ventana, pero la etiqueta de precio permanece. Ese contraste permite leer el final como una tregua más que como reconciliación completa. Clara acepta la presencia del objeto sin retirar su incomodidad. Otra lectura puede ver en el gesto del hermano un reconocimiento afectivo; deberá explicar, sin embargo, por qué el conflicto material sigue visible. El relato no confirma qué ocurrió con el padre. Atribuirle una muerte cerraría una incertidumbre que organiza la escena. Prefiero conservar dos hipótesis y distinguir lo que muestran las acciones de la emoción que yo les atribuyo.\n\nRecupera «Escribir un diálogo con subtexto» mediante una nueva versión de 120–160 palabras de este fragmento para otro destinatario. Mantén la reserva principal, cambia el orden de la información y justifica dos decisiones. Si el objetivo exige un texto completo, retoma además tu entrega original de esa semana y revisa su conjunto. Contraste nuevo suministrado de «Checkpoint: una plaza, tres versiones»: «Aunque sea útil limitar el tráfico, falta explicar el reparto.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La silla vuelve a la ventana, pero la etiqueta de precio permanece. Ese contraste permite leer el final como una tregua más que como reconciliación completa. Clara acepta la presencia del objeto sin retirar su incomodidad. Otra lectura puede ver en el gesto del hermano un reconocimiento afectivo; deberá explicar, sin embargo, por qué el conflicto material sigue visible. El relato no confirma qué ocurrió con el padre. Atribuirle una muerte cerraría una incertidumbre que organiza la escena. Prefiero conservar dos hipótesis y distinguir lo que muestran las acciones de la emoción que yo les atribuyo. Para una persona ajena al expediente, la información decisiva que debe seguir visible es: El relato sostiene hipótesis de reconciliación y tregua sin resolverlas por completo. En el nuevo contraste, «Aunque sea útil limitar el tráfico, falta explicar el reparto.» debe interpretarse dentro de esta cuestión: Integrar alcance, ironía, registro y subtexto. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          }
        ]
      }
    ]
  },
  "writing": {
    "task": "Elabora un informe de 550–650 palabras para el consejo con un resumen público integrado. Contrasta acta, crónica, mensaje y audio; conserva dos incertidumbres, repara una atribución y propone un mecanismo verificable de respuesta.",
    "context": "Modelo completo de una respuesta posible. Contrasta su organización y sus reservas; tu entrega debe desarrollar una voz propia, no reproducirlo.",
    "steps": [
      "Traza un mapa de fuentes: afirmación, prueba, límite y destinatario.",
      "Decide el orden según la acción que necesita realizar tu lector; reserva espacio para una objeción fuerte.",
      "Redacta sin copiar el modelo. Integra al menos dos fuentes y atribuye sus diferencias.",
      "Revisa el alcance de tres formulaciones, lee un párrafo en voz alta y explica dos cambios de estilo."
    ],
    "useLanguage": [
      "El acta recoge una propuesta que la asociación rechaza.",
      "Aunque sea útil limitar el tráfico, falta explicar el reparto.",
      "La cronista sugiere un acuerdo previo; el acta no lo confirma.",
      "discrepancia",
      "acta",
      "reserva"
    ],
    "model": [
      "Informe al consejo de barrio: alcance del acuerdo y condiciones de la consulta",
      "La documentación permite afirmar que existe un acuerdo sobre la necesidad de mantener un itinerario accesible en la plaza. No permite afirmar que se haya aprobado una distribución definitiva de terrazas ni que los comerciantes acepten con entusiasmo todos los cambios. El acta, la crónica y el mensaje de la portavoz deben leerse como fuentes con funciones diferentes. Integrarlas exige conservar esas diferencias, en lugar de elegir una como resumen suficiente de las demás.",
      "La cláusula sobre las terrazas resulta ambigua en un punto decisivo: no establece cuándo se comprobará la condición de permitir el paso ni qué posibilidad habrá de adaptar el mobiliario. Una lectura entiende que los locales pueden reorganizar sus mesas; otra, que la situación actual determina la retirada. El consejo debe resolver esta cuestión antes de presentar el aviso como instrucción operativa. La mediación puede explicarla, pero no inventar un plazo de adaptación que ninguna fuente ha aprobado.",
      "La crónica interpreta la ausencia de una votación separada como aceptación gustosa. Esa inferencia excede lo registrado. No bloquear un acuerdo puede expresar una reserva, una estrategia de negociación o una disposición a continuar el debate. El informe propone sustituir la atribución de entusiasmo por una descripción de la actuación observada y, si se incluye la interpretación periodística, identificarla expresamente como tal. La precisión no exige eliminar la crónica: exige evitar que su voz se convierta inadvertidamente en la del acta.",
      "El mensaje sobre quienes viven de la plaza activa un contraste entre sustento y residencia. La portavoz niega haber querido excluir a los vecinos. Esa aclaración debe conservarse, aunque no elimina el efecto de la formulación. Una respuesta reparadora podría reconocer ambas relaciones con el espacio: quienes trabajan en él y quienes lo habitan. No sería útil convertir el malentendido en prueba automática de desprecio ni descartarlo como una lectura caprichosa de los receptores.",
      "El plano reserva un paso continuo, pero todavía requiere comprobar las maniobras de emergencia. También desplaza mesas hacia una zona sin sombra y no resuelve la petición de más bancos. Estas consecuencias deben discutirse mediante criterios públicos, no como excepciones negociadas en privado por cada local. Las diferencias entre fachadas pueden justificar soluciones distintas; no justifican que el acceso a una solución dependa de quién tenga mayor capacidad para hacerse oír.",
      "Proponemos publicar tres columnas: acuerdo confirmado, aplicación pendiente y desacuerdo persistente. Junto a ellas deben figurar el responsable de cada comprobación, el calendario y el procedimiento para responder a las observaciones. El plazo de diez días de consulta solo será interpretable si se explica qué decisiones puede modificar y cómo se comunicará la respuesta. No corresponde presentar la consulta como una simulación demostrada; sí corresponde señalar que su mecanismo de efecto aún no está definido.",
      "Resumen para la plaza: se comparte la obligación de garantizar el paso accesible. Todavía se discuten la distribución, los horarios de carga y las condiciones de adaptación. El plano es provisional y requiere una comprobación técnica. Las observaciones deben recibir una respuesta pública que explique qué se modifica y qué se mantiene, con razones. Este resumen conserva las incertidumbres porque afectan a decisiones reales; no las elimina para producir un titular más rotundo. El acuerdo existente merece protección precisamente mediante una descripción que no lo amplíe más allá de lo alcanzado."
    ],
    "checklist": [
      "La tesis tiene alcance preciso y pruebas identificables.",
      "No convierto una propuesta en decisión ni una inferencia en dato.",
      "El registro responde al destinatario y no borra condiciones.",
      "La cohesión conserva referentes y voces sin repeticiones inútiles.",
      "La revisión explica qué cambia para quien lee."
    ],
    "words": [
      550,
      650
    ]
  },
  "speaking": {
    "intro": "Planifica con palabras clave, no un guion leído. La grabación, si la usas, permanece local; el navegador no califica pronunciación ni calidad oral.",
    "tasks": [
      {
        "title": "Exposición situada",
        "prompt": "Preside una audiencia de barrio: abre con lo acordado, responde a una objeción irónica, desambigua la condición de las terrazas y cierra con responsables y cuestiones pendientes.",
        "prep": [
          "Anota tesis, dos pruebas, una objeción y una reserva.",
          "Marca dos focos prosódicos y un punto donde cambiarás de registro."
        ],
        "seconds": 240,
        "model": "Existe acuerdo sobre mantener un paso accesible, pero no sobre su aplicación ni sobre los horarios de carga. La crónica interpreta el silencio comercial como entusiasmo; el acta no permite esa atribución. El plano requiere todavía una comprobación de acceso de emergencias y no constituye una solución aprobada. Proponemos publicar el criterio de adaptación, el responsable de comprobarlo y un mecanismo de respuesta a las observaciones. La consulta ganará credibilidad si explica cómo puede modificar la propuesta. La ironía sobre una plaza donde caben todos expresa una crítica pertinente, pero no sustituye la discusión de una distribución concreta.",
        "selfCheck": [
          "La condición principal se oye con claridad.",
          "Distingo mi interpretación de las voces citadas.",
          "Puedo reparar una frase sin abandonar el argumento."
        ]
      },
      {
        "title": "Interacción y reformulación",
        "prompt": "Tu interlocutor sostiene: «El silencio de la reunión demuestra aceptación entusiasta.». Responde sin caricaturizarlo, formula dos preguntas de seguimiento y pide que reformule tu condición principal. Después resume para una persona que no conoce el expediente de Checkpoint: una plaza, tres versiones.",
        "prep": [
          "Prepara una concesión real y una corrección de alcance.",
          "Anticipa qué término deberás explicar sin jerga."
        ],
        "seconds": 240,
        "model": "El documento mediador distingue acuerdo, aplicación pendiente y desacuerdo real. El plano aún requiere una comprobación sobre vehículos de emergencia.",
        "selfCheck": [
          "La respuesta atiende la preocupación, no solo corrige la forma.",
          "La versión breve conserva el límite decisivo.",
          "Adapto el ritmo después de la interrupción."
        ]
      }
    ]
  },
  "useInClass": {
    "intro": "La mascota te espera con una tarjeta de contraste: lleva tu dossier y una decisión lingüística que quieras poner a prueba con tu docente.",
    "cards": [
      {
        "move": "Defiende",
        "task": "Presenta tu decisión más discutible sobre Checkpoint: una plaza, tres versiones y pide un contraejemplo que la ponga a prueba.",
        "phrases": [
          "Mi lectura se apoya en…",
          "Cambiaría de interpretación si…"
        ]
      },
      {
        "move": "Reformula",
        "task": "Explica el límite «El plano aún requiere una comprobación sobre vehículos de emergencia.» a otro público sin rebajar su importancia.",
        "phrases": [
          "En otros términos…",
          "Esta versión conserva…"
        ]
      },
      {
        "move": "Negocia",
        "task": "Responde a la objeción «La intención declarada elimina cualquier efecto del mensaje.» y acuerda una formulación que ambos puedan defender.",
        "phrases": [
          "Reconozco ese punto; mi reserva es…",
          "Podemos dejar constancia de…"
        ]
      }
    ],
    "bring": "El dossier, una versión revisada, notas de escucha y una grabación local opcional; no se necesita subir audio."
  },
  "quiz": {
    "items": [
      {
        "type": "choice",
        "q": "Balance de Checkpoint: una plaza, tres versiones: ¿qué conclusión conserva el alcance?",
        "options": [
          "El documento mediador distingue acuerdo, aplicación pendiente y desacuerdo real.",
          "El silencio de la reunión demuestra aceptación entusiasta."
        ],
        "answer": 0,
        "why": "Relaciona el texto principal con el documento complementario."
      },
      {
        "type": "choice",
        "q": "En una revisión final de Checkpoint: una plaza, tres versiones, ¿qué afirmación debe rechazarse?",
        "options": [
          "El plano aún requiere una comprobación sobre vehículos de emergencia.",
          "El plano ya tiene todas las comprobaciones técnicas."
        ],
        "answer": 1,
        "why": "La primera opción contradice la condición explícita."
      },
      {
        "type": "listen",
        "q": "Escucha esta síntesis de Checkpoint: una plaza, tres versiones. ¿Qué interpretación mantiene?",
        "options": [
          "La intención declarada elimina cualquier efecto del mensaje.",
          "No solicitar una votación separada no demuestra entusiasmo ni consenso pleno."
        ],
        "answer": 1,
        "why": "La relación expresada limita una generalización.",
        "audio": "No solicitar una votación separada no demuestra entusiasmo ni consenso pleno.",
        "voice": "es-ES-f"
      },
      {
        "type": "gap",
        "q": "En «Checkpoint: una plaza, tres versiones», ¿qué unidad expresa «desacuerdo delimitado»? ___ .",
        "answers": [
          [
            "discrepancia"
          ]
        ],
        "hint": "desacuerdo delimitado",
        "why": "Recupera la unidad a partir de su función, no de una traducción."
      },
      {
        "type": "gap",
        "q": "Para nombrar «registro de acuerdos y actuaciones» en este expediente usamos ___ .",
        "answers": [
          [
            "acta"
          ]
        ],
        "why": "La distinción léxica debe conservarse al mediar."
      },
      {
        "type": "error",
        "sentence": "El acta atribuye una aceptación a quien no intervinieron.",
        "answers": [
          "El acta atribuye una aceptación a quienes no intervinieron."
        ],
        "why": "El antecedente plural recuperado por la relativa libre exige quienes con intervinieron."
      },
      {
        "type": "transform",
        "source": "Los comerciantes aceptaron con entusiasmo, según la cronista.",
        "instruction": "Empieza con «La cronista interpreta que…» para hacer explícito el carácter interpretativo.",
        "answers": [
          "La cronista interpreta que los comerciantes aceptaron con entusiasmo."
        ],
        "why": "Separar la voz del acta: conserva la relación solicitada y compara qué se hace explícito."
      },
      {
        "type": "open",
        "prompt": "Cierre de «Checkpoint: una plaza, tres versiones»: escribe 90–120 palabras para una audiencia nueva. Incluye tesis, condición y una pregunta pendiente; justifica una elección de registro.",
        "model": "Existe acuerdo sobre mantener un paso accesible, pero no sobre su aplicación ni sobre los horarios de carga. La crónica interpreta el silencio comercial como entusiasmo; el acta no permite esa atribución. El plano requiere todavía una comprobación de acceso de emergencias y no constituye una solución aprobada. Proponemos publicar el criterio de adaptación, el responsable de comprobarlo y un mecanismo de respuesta a las observaciones. La consulta ganará credibilidad si explica cómo puede modificar la propuesta. La ironía sobre una plaza donde caben todos expresa una crítica pertinente, pero no sustituye la discusión de una distribución concreta.",
        "checklist": [
          "Conservo la reserva decisiva.",
          "Atribuyo una fuente y delimito mi inferencia.",
          "El destinatario puede identificar el siguiente paso."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Interpreto integrar alcance, ironía, registro y subtexto en fuentes originales.",
      "Puedo explicar por qué «El silencio de la reunión demuestra aceptación entusiasta.» excede la evidencia.",
      "Defiendo y reviso un dossier escrito y oral con destinatario concreto."
    ],
    "review": [
      "Dentro de dos días, reconstruye sin mirar el límite: El plano aún requiere una comprobación sobre vehículos de emergencia.",
      "Dentro de una semana, reescribe el cierre para otro público y contrástalo con tu versión inicial.",
      "En clase, pide una objeción a «El documento mediador distingue acuerdo, aplicación pendiente y desacuerdo real.» y registra qué cambiarías."
    ]
  }
};
