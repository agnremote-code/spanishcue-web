import type { Module } from "../../types";

/** Material original C2. Audio mediante síntesis; sin acreditación regional. */
export const c2w16: Module = {
  "id": "c2-16",
  "level": "c2",
  "week": 16,
  "kind": "core",
  "title": "Lo probable no es lo probado",
  "subtitle": "Modalidad epistémica, rumor y responsabilidad de atribución",
  "stop": {
    "place": "Granada",
    "country": "España"
  },
  "minutes": 135,
  "newObjectives": [
    "c2.gram.modalidad-evidencial",
    "c2.disc.responsabilidad-fuentes",
    "c2.voc.certeza-documental",
    "c2.pron.reserva-epistemica",
    "c2.wri.rectificacion"
  ],
  "reviewObjectives": [
    "c2.disc.mediacion",
    "c2.voc.lexico-tecnico-divulgativo",
    "c2.pron.claridad-mediacion",
    "c2.wri.informe-mediacion",
    "c2.lis.fuentes-contradictorias",
    "c2.rev.checkpoint-3",
    "c2.wri.cronica-personal"
  ],
  "prerequisites": [
    "c2-15"
  ],
  "goal": {
    "canDo": "Puedo actualizar una noticia distinguiendo evidencia, conjetura y cronología de comprobación.",
    "steps": [
      "Lee las fuentes y distingue dato, inferencia y evaluación.",
      "Escucha el intercambio antes de consultar su transcripción.",
      "Aplica modalidad epistémica, rumor y responsabilidad de atribución a una decisión comunicativa concreta.",
      "Produce el dossier escrito, revisa una elección y defiéndela oralmente."
    ]
  },
  "theory": {
    "intro": "Los casos, documentos y voces de esta semana son originales y ficticios. La dificultad está en controlar relaciones de significado, no en acumular palabras raras.",
    "parts": [
      {
        "heading": "Modalidad epistémica, rumor y responsabilidad de atribución",
        "body": [
          "El condicional de información no confirmada, habría recibido, distancia al redactor del hecho, pero no sustituye la identificación de una fuente. Debe de expresar una inferencia no equivale a debe con obligación, aunque el uso real presenta variación. Al parecer y según una fuente anónima sitúan de forma distinta la base del enunciado. La precisión exige indicar qué está documentado, qué se infiere y qué permanece sin confirmar; acumular cautelas no neutraliza una acusación.",
          "En este caso, La modalidad de cautela no sustituye la identificación de la evidencia y su alcance. La formulación elegida debe permitir al destinatario reconstruir la diferencia relevante y reconocer qué no se ha demostrado."
        ],
        "examples": [
          {
            "es": "La dirección habría recibido el informe, según una fuente no identificada."
          },
          {
            "es": "El registro confirma la recepción, pero no quién leyó el documento."
          },
          {
            "es": "Debe de haber una copia; es una inferencia, no una comprobación."
          }
        ],
        "mistakes": [
          {
            "wrong": "La prueba confirma de que llegó un envío.",
            "right": "La prueba confirma que llegó un envío.",
            "why": "Confirmar introduce complemento directo sin de."
          }
        ]
      },
      {
        "heading": "Interpretar, atribuir y revisar en este caso",
        "body": [
          "La cronología de la comprobación impide presentar una hipótesis inicial como certeza retrospectiva. Para defender esa lectura, identifica una formulación y el detalle que la sostiene. Prueba después una explicación rival y señala qué dato necesitarías para preferirla.",
          "La versión para un público nuevo puede cambiar léxico, orden y longitud, pero debe conservar esta condición: El correo adjunto prueba disponibilidad institucional, no lectura individual. Un cambio de registro que la elimina cambia también el contenido."
        ],
        "examples": [
          {
            "es": "La modalidad de cautela no sustituye la identificación de la evidencia y su alcance.",
            "note": "Síntesis con alcance delimitado."
          },
          {
            "es": "Habría permite publicar cualquier acusación sin identificar su base.",
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
        "id": "c2-16-gramatica-alcance",
        "type": "choice",
        "prompt": "Selecciona la interpretación defendible de Lo probable no es lo probado.",
        "items": [
          {
            "q": "En el caso de Lo probable no es lo probado, ¿qué formulación preserva el alcance?",
            "options": [
              "El registro confirma la recepción, pero no quién leyó el documento.",
              "La evidencia posterior vuelve exacto retrospectivamente cualquier titular."
            ],
            "answer": 0,
            "why": "El condicional de información no confirmada, habría recibido, distancia al redactor del hecho, pero no sustituye la identificación de una fuente. Debe de expresar una inferencia no equivale a debe con obligación, aunque el uso real presenta variación. Al parecer y según una fuente anónima sitúan de forma distinta la base del enunciado. La precisión exige indicar qué está documentado, qué se infiere y qué permanece sin confirmar; acumular cautelas no neutraliza una acusación."
          },
          {
            "q": "¿Qué cautela lingüística resulta necesaria al explicar Lo probable no es lo probado?",
            "options": [
              "La cronología de la comprobación impide presentar una hipótesis inicial como certeza retrospectiva.",
              "Habría permite publicar cualquier acusación sin identificar su base."
            ],
            "answer": 0,
            "why": "Relaciona forma, contexto y efecto; evita ampliar una conclusión más allá de su base."
          }
        ]
      },
      {
        "id": "c2-16-gramatica-forma",
        "type": "gap",
        "prompt": "Completa las relaciones gramaticales del caso Lo probable no es lo probado.",
        "items": [
          {
            "q": "El registro acredita recepción, ___ no lectura.",
            "answers": [
              [
                "pero"
              ]
            ],
            "why": "El condicional de información no confirmada, habría recibido, distancia al redactor del hecho, pero no sustituye la identificación de una fuente. Debe de expresar una inferencia no equivale a debe con obligación, aunque el uso real presenta variación. Al parecer y según una fuente anónima sitúan de forma distinta la base del enunciado. La precisión exige indicar qué está documentado, qué se infiere y qué permanece sin confirmar; acumular cautelas no neutraliza una acusación."
          },
          {
            "q": "Según una fuente anónima, la oficina ___ recibido el aviso.",
            "answers": [
              [
                "habría"
              ]
            ],
            "why": "El condicional de información no confirmada, habría recibido, distancia al redactor del hecho, pero no sustituye la identificación de una fuente. Debe de expresar una inferencia no equivale a debe con obligación, aunque el uso real presenta variación. Al parecer y según una fuente anónima sitúan de forma distinta la base del enunciado. La precisión exige indicar qué está documentado, qué se infiere y qué permanece sin confirmar; acumular cautelas no neutraliza una acusación."
          },
          {
            "q": "La editora distingue disponibilidad ___ conocimiento.",
            "answers": [
              [
                "de"
              ]
            ],
            "why": "El condicional de información no confirmada, habría recibido, distancia al redactor del hecho, pero no sustituye la identificación de una fuente. Debe de expresar una inferencia no equivale a debe con obligación, aunque el uso real presenta variación. Al parecer y según una fuente anónima sitúan de forma distinta la base del enunciado. La precisión exige indicar qué está documentado, qué se infiere y qué permanece sin confirmar; acumular cautelas no neutraliza una acusación."
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Usa estas unidades para describir diferencias que el caso exige. La definición orienta el uso; contrástala con la frase completa.",
    "groups": [
      {
        "title": "Precisión para Lo probable no es lo probado",
        "items": [
          {
            "es": "evidencialidad",
            "note": "marca de la base informativa de un enunciado"
          },
          {
            "es": "corroborar",
            "note": "confirmar con evidencia adicional"
          },
          {
            "es": "conjetura",
            "note": "explicación provisional no demostrada"
          },
          {
            "es": "atribución anónima",
            "note": "referencia a una fuente no identificada públicamente"
          },
          {
            "es": "desmentir",
            "note": "negar o refutar una afirmación"
          },
          {
            "es": "rectificación",
            "note": "corrección pública de información"
          },
          {
            "es": "grado de certeza",
            "note": "intensidad del compromiso con una afirmación"
          },
          {
            "es": "indicio convergente",
            "note": "señal que coincide con otras hacia una hipótesis"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "c2-16-lexico",
        "type": "match",
        "prompt": "Relaciona cada unidad con la distinción que aporta al expediente de Lo probable no es lo probado.",
        "pairs": [
          {
            "left": "evidencialidad",
            "right": "marca de la base informativa de un enunciado"
          },
          {
            "left": "corroborar",
            "right": "confirmar con evidencia adicional"
          },
          {
            "left": "conjetura",
            "right": "explicación provisional no demostrada"
          },
          {
            "left": "atribución anónima",
            "right": "referencia a una fuente no identificada públicamente"
          },
          {
            "left": "desmentir",
            "right": "negar o refutar una afirmación"
          },
          {
            "left": "rectificación",
            "right": "corrección pública de información"
          },
          {
            "left": "grado de certeza",
            "right": "intensidad del compromiso con una afirmación"
          },
          {
            "left": "indicio convergente",
            "right": "señal que coincide con otras hacia una hipótesis"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Hacer audible la base de la certeza",
    "explanation": [
      "Atribuye la fuente antes de la afirmación y conserva la reserva en un grupo propio. No susurres según una fuente anónima mientras enfatizas una acusación todavía no corroborada.",
      "El audio utiliza síntesis disponible en el navegador: no certifica acento regional, ironía natural ni calidad de pronunciación. Escucha el contenido, ensaya contrastes y comprueba el efecto con una persona. El objetivo es inteligibilidad y control expresivo, no eliminar tu acento."
    ],
    "examples": [
      {
        "es": "La oficina habría recibido el informe, según una fuente anónima."
      },
      {
        "es": "El registro confirma la recepción de un envío."
      }
    ],
    "perceive": {
      "id": "c2-16-percepcion",
      "type": "listen",
      "prompt": "Escucha el contraste antes de leer las opciones en «Lo probable no es lo probado».",
      "items": [
        {
          "q": "Escucha la primera formulación sobre Lo probable no es lo probado. ¿Qué contenido permite recuperar?",
          "options": [
            "El registro confirma la recepción de un envío.",
            "La oficina habría recibido el informe, según una fuente anónima."
          ],
          "answer": 1,
          "why": "La respuesta depende de las palabras y de su agrupación; no atribuyas a la síntesis una intención o variedad verificada.",
          "audio": "La oficina habría recibido el informe, según una fuente anónima.",
          "voice": "es-ES-f"
        },
        {
          "q": "Escucha ahora el contraste de Lo probable no es lo probado. ¿Qué formulación aparece?",
          "options": [
            "El registro confirma la recepción de un envío.",
            "La oficina habría recibido el informe, según una fuente anónima."
          ],
          "answer": 0,
          "why": "Compara después tus dos lecturas con una persona: una pausa puede favorecer una lectura sin demostrarla.",
          "audio": "El registro confirma la recepción de un envío.",
          "voice": "es-ES-m"
        }
      ]
    },
    "produce": [
      {
        "text": "La oficina habría recibido el informe, según una fuente anónima.",
        "tip": "Marca grupos fónicos y explica qué interpretación favoreces.",
        "voice": "es-ES-f"
      },
      {
        "text": "El registro confirma la recepción de un envío.",
        "tip": "Cambia el foco sin cambiar las palabras; pide una interpretación a tu interlocutor.",
        "voice": "es-ES-m"
      },
      {
        "text": "La modalidad de cautela no sustituye la identificación de la evidencia y su alcance.",
        "tip": "Lee a velocidad cómoda, conserva la reserva y compara tu grabación local con tu intención.",
        "voice": "es-ES-f"
      }
    ]
  },
  "listening": {
    "title": "Mesa de trabajo: Lo probable no es lo probado",
    "context": "Dos participantes preparan una intervención sobre el caso. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como variedades regionales verificadas.",
    "speakers": [
      {
        "id": "a",
        "name": "Irene",
        "voice": "es-ES-f",
        "role": "Primera perspectiva"
      },
      {
        "id": "b",
        "name": "Mateo",
        "voice": "es-ES-m",
        "role": "Contraste y reformulación"
      }
    ],
    "script": [
      {
        "speaker": "a",
        "text": "Puse habría recibido para indicar que no estaba confirmado. Ahora veo que el titular no dice según quién. No quiero resolverlo añadiendo presuntamente a cada frase. Tenemos que explicar la base de la información y qué comprobamos nosotros. Si no, la cautela se convierte en una forma de publicar cualquier cosa sin asumirla del todo."
      },
      {
        "speaker": "b",
        "text": "El registro de entrada demuestra un envío recibido. El correo con el adjunto añade que la oficina disponía del informe. Ninguno de los dos documentos, por sí solo, demuestra que la directora lo leyera. Esa distinción puede parecer defensiva, pero permite formular una pregunta mejor sobre el circuito de distribución y las responsabilidades del sistema."
      },
      {
        "speaker": "a",
        "text": "En la actualización separaré tres momentos: lo que sabíamos al publicar, lo que recibimos después y lo que falta comprobar. No diré que el nuevo documento confirma íntegramente el primer titular. Confirma una parte y deja otra abierta. También citaré la negativa con su alcance exacto: la directora dice que no vio el informe; no afirma que nadie lo recibiera."
      },
      {
        "speaker": "b",
        "text": "Y si en la entrevista te piden una respuesta de sí o no sobre si hubo ocultación, explica por qué esa alternativa excede la evidencia. No hace falta sonar evasivo: puedes decir qué procedimiento debe investigarse y qué documento permitiría avanzar. La precisión no consiste en quedarse siempre en quizá. Consiste en aumentar o reducir el compromiso de cada afirmación cuando cambia su base, y en hacer visible ese cambio a quien confía en tu relato. La confianza no exige fingir que la primera versión era perfecta."
      },
      {
        "speaker": "a",
        "text": "La defensora de lectores nos recuerda que no basta corregir la nueva versión: hay que avisar a quienes accedieron a la anterior. Añadiremos un enlace visible y explicaremos qué afirmación retiramos. Tampoco diré prueba definitiva sin completar respecto a qué. El correo resuelve la disponibilidad del archivo; no resuelve automáticamente lectura, decisión ni responsabilidad individual."
      },
      {
        "speaker": "b",
        "text": "Y mantengamos el otro lado de la distinción: no leer personalmente un documento no elimina cualquier responsabilidad organizativa. Si solo repetimos que no hay prueba de lectura, podríamos sugerir una absolución que tampoco está demostrada. La noticia debe investigar el circuito y señalar sus límites. La exactitud exige resistir tanto la acusación más amplia que la prueba como la tranquilidad más amplia que la prueba. Para el cierre, conservaré esta distinción: La modalidad de cautela no sustituye la identificación de la evidencia y su alcance."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha el intercambio completo sin abrir la transcripción. Reconstruye el desacuerdo central.",
        "exercise": {
          "id": "c2-16-escucha-gist",
          "type": "choice",
          "prompt": "Interpreta el diálogo: Lo probable no es lo probado",
          "items": [
            {
              "q": "¿Qué problema organiza la conversación de Lo probable no es lo probado?",
              "options": [
                "Habría permite publicar cualquier acusación sin identificar su base.",
                "La modalidad de cautela no sustituye la identificación de la evidencia y su alcance."
              ],
              "answer": 1,
              "why": "Reconstruye el propósito común antes de buscar detalles."
            },
            {
              "q": "En esta fase, ¿qué conclusión sería excesiva sobre Lo probable no es lo probado?",
              "options": [
                "La modalidad de cautela no sustituye la identificación de la evidencia y su alcance.",
                "La evidencia posterior vuelve exacto retrospectivamente cualquier titular."
              ],
              "answer": 1,
              "why": "La primera opción amplía o deforma lo que permite el intercambio."
            }
          ]
        }
      },
      {
        "stage": "detail",
        "prompt": "Escucha otra vez y anota afirmación, condición y fuente. No copies frases todavía.",
        "exercise": {
          "id": "c2-16-escucha-detail",
          "type": "choice",
          "prompt": "Interpreta el diálogo: Lo probable no es lo probado",
          "items": [
            {
              "q": "¿Qué límite deben conservar los interlocutores de Lo probable no es lo probado?",
              "options": [
                "El correo adjunto prueba disponibilidad institucional, no lectura individual.",
                "El registro demuestra quién leyó el informe."
              ],
              "answer": 0,
              "why": "La conversación vuelve sobre el límite que evita una promesa o inferencia excesiva."
            },
            {
              "q": "En esta fase, ¿qué conclusión sería excesiva sobre Lo probable no es lo probado?",
              "options": [
                "El correo adjunto prueba disponibilidad institucional, no lectura individual.",
                "La evidencia posterior vuelve exacto retrospectivamente cualquier titular."
              ],
              "answer": 1,
              "why": "La primera opción amplía o deforma lo que permite el intercambio."
            }
          ]
        }
      },
      {
        "stage": "notice",
        "prompt": "Localiza una reformulación y explica qué inferencia repara. Consulta la transcripción solo después de responder.",
        "exercise": {
          "id": "c2-16-escucha-notice",
          "type": "choice",
          "prompt": "Interpreta el diálogo: Lo probable no es lo probado",
          "items": [
            {
              "q": "¿Qué inferencia pragmática permite el diálogo de Lo probable no es lo probado?",
              "options": [
                "La cronología de la comprobación impide presentar una hipótesis inicial como certeza retrospectiva.",
                "La evidencia posterior vuelve exacto retrospectivamente cualquier titular."
              ],
              "answer": 0,
              "why": "La inferencia se apoya en una reformulación y su contexto; no es una lectura literal de una palabra."
            },
            {
              "q": "En esta fase, ¿qué conclusión sería excesiva sobre Lo probable no es lo probado?",
              "options": [
                "La cronología de la comprobación impide presentar una hipótesis inicial como certeza retrospectiva.",
                "La evidencia posterior vuelve exacto retrospectivamente cualquier titular."
              ],
              "answer": 1,
              "why": "La primera opción amplía o deforma lo que permite el intercambio."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "Lo probable no es lo probado · expediente de lectura",
    "genre": "Dossier original: texto principal y documento de contraste",
    "frame": "Situación ficticia para lectura crítica y mediación. Identifica qué voz afirma cada cosa antes de integrar las fuentes.",
    "text": [
      "La noticia afirmaba que la dirección del teatro habría recibido una advertencia sobre el deterioro del escenario. El condicional ocupaba un lugar estratégico: permitía publicar una acusación relevante sin presentarla como confirmada. Sin embargo, el titular omitía la fuente y el cuerpo del texto solo mencionaba personas conocedoras del asunto. El lector podía recordar el contenido de la acusación y olvidar la cautela verbal. La distancia gramatical no garantiza una distancia equivalente en la memoria pública.",
      "Al día siguiente apareció un registro de entrada. Confirmaba que un sobre había llegado a la oficina, no qué contenía ni quién lo había leído. Una segunda noticia lo presentó como prueba de que la dirección conocía el riesgo. La cadena había avanzado de recepción material a conocimiento y de conocimiento a responsabilidad sin documentar cada paso. Era posible que la conclusión resultara cierta; el problema consistía en que la evidencia disponible todavía no permitía sostenerla de ese modo.",
      "La dirección respondió que nunca había visto el informe. La frase podía negar una lectura personal, pero no descartaba que otras personas de la organización lo hubieran recibido. Un periodista preguntó por los procedimientos internos. La pregunta desplazaba la discusión de una memoria individual a un sistema verificable: quién registraba documentos, cómo se distribuían y dónde se archivaban. No eliminaba la responsabilidad personal; evitaba convertir una negación amplia en cierre prematuro de la investigación.",
      "La editora decidió corregir el titular y explicar el cambio. No escribió que todo fuera un malentendido, porque seguían existiendo preguntas sustantivas. Precisó que el registro acreditaba la recepción de un envío y que el contenido estaba pendiente de comprobación. El texto añadió la respuesta de la dirección y la solicitud de acceso al protocolo. Esa forma de rectificar renunciaba tanto a defender cada palabra inicial como a borrar el asunto para proteger la reputación del medio.",
      "Documento posterior. Una copia del correo de envío incluía el informe adjunto y el asunto advertencia técnica. El documento fortalecía la hipótesis de que la oficina disponía de la información, pero seguía sin demostrar qué persona abrió el archivo. El equipo investigador distinguió disponibilidad institucional y conocimiento individual. La actualización debía incorporar la evidencia nueva sin fingir que la noticia original ya había demostrado lo que solo después empezó a documentarse. La cronología de la prueba también forma parte de la exactitud. El medio conservó un historial visible de la corrección. No lo presentó como una sanción a la periodista, sino como información necesaria para interpretar la evolución de la noticia.",
      "Observación de la defensora de lectores. La rectificación no debía limitarse a sustituir habría por recibió en la nueva noticia. Quienes hubieran leído únicamente el primer titular podían conservar una acusación más amplia. El medio decidió enlazar la corrección desde la pieza original y explicar qué parte se mantenía, cuál se retiraba y cuál seguía investigándose. Una actualización silenciosa mejora el texto disponible, pero no necesariamente repara la interpretación ya difundida. La responsabilidad enunciativa incluye la circulación de las versiones.",
      "También se examinó la respuesta de la dirección. No haber leído personalmente un archivo no excluye una responsabilidad de organización; a la inversa, tener responsabilidad institucional no demuestra conocimiento individual de cada documento. Ambas distinciones debían mantenerse para evitar dos atajos opuestos. El informe periodístico podía investigar el circuito sin dictar una conclusión jurídica que no le correspondía. La editora retiró la expresión prueba definitiva del subtítulo y añadió qué cuestión resolvía el nuevo correo. La precisión del grado de certeza requiere un complemento: definitivo respecto a qué pregunta. Cuando ese complemento desaparece, una evidencia localizada puede convertirse en una absolución o acusación general. La revisión final comparó cada verbo de conocimiento con la fuente que lo autorizaba y dejó sin resolver lo que todavía no podía documentarse."
    ],
    "tasks": [
      {
        "id": "c2-16-lectura",
        "type": "choice",
        "prompt": "Reconstruye la tesis y su límite en Lo probable no es lo probado.",
        "items": [
          {
            "q": "¿Qué tesis sostiene el dossier «Lo probable no es lo probado»?",
            "options": [
              "La modalidad de cautela no sustituye la identificación de la evidencia y su alcance.",
              "Habría permite publicar cualquier acusación sin identificar su base."
            ],
            "answer": 0,
            "why": "La tesis integra el contraste entre las fuentes, no solo una frase aislada."
          },
          {
            "q": "¿Qué detalle limita la interpretación en «Lo probable no es lo probado»?",
            "options": [
              "El correo adjunto prueba disponibilidad institucional, no lectura individual.",
              "El registro demuestra quién leyó el informe."
            ],
            "answer": 0,
            "why": "El documento complementario delimita qué está confirmado."
          }
        ]
      },
      {
        "id": "c2-16-lectura-evidencia",
        "type": "open",
        "prompt": "Defiende una interpretación de Lo probable no es lo probado con pruebas y contraejemplos.",
        "items": [
          {
            "prompt": "Contrasta «La modalidad de cautela no sustituye la identificación de la evidencia y su alcance.» con «Habría permite publicar cualquier acusación sin identificar su base.». Cita dos fragmentos breves, atribuye sus voces y explica qué detalle impide sostener la segunda lectura.",
            "model": "La modalidad de cautela no sustituye la identificación de la evidencia y su alcance. El correo adjunto prueba disponibilidad institucional, no lectura individual.",
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
          "quote": "La noticia afirmaba que la dirección del teatro habría recibido una advertencia sobre el deterioro del escenario.",
          "note": "Examina el encuadre inicial y qué información necesitarás para revisarlo."
        },
        {
          "quote": "Documento posterior.",
          "note": "El documento final introduce otra perspectiva; identifica qué interpretación limita y qué deja abierto."
        }
      ]
    }
  },
  "practice": {
    "intro": "Combina orden, clasificación, producción y recuperación espaciada. Las respuestas abiertas se contrastan con criterios y con tu docente.",
    "exercises": [
      {
        "id": "c2-16-orden",
        "type": "order",
        "prompt": "Reconstruye dos relaciones centrales del caso Lo probable no es lo probado.",
        "items": [
          {
            "words": [
              "La",
              "prueba",
              "nueva",
              "fortalece",
              "una",
              "parte",
              "de",
              "la",
              "hipótesis."
            ],
            "why": "La secuencia mantiene el alcance y las relaciones del caso."
          },
          {
            "words": [
              "La",
              "rectificación",
              "conserva",
              "preguntas",
              "pendientes."
            ],
            "why": "La secuencia mantiene el alcance y las relaciones del caso."
          }
        ]
      },
      {
        "id": "c2-16-estatuto",
        "type": "classify",
        "prompt": "Clasifica el estatuto de estas formulaciones en «Lo probable no es lo probado».",
        "categories": [
          "Conclusión respaldada o delimitada",
          "Generalización no autorizada"
        ],
        "items": [
          {
            "text": "La modalidad de cautela no sustituye la identificación de la evidencia y su alcance.",
            "cat": 0,
            "why": "Resume el razonamiento con sus límites."
          },
          {
            "text": "Habría permite publicar cualquier acusación sin identificar su base.",
            "cat": 1,
            "why": "Amplía o invierte el alcance de las fuentes."
          },
          {
            "text": "El correo adjunto prueba disponibilidad institucional, no lectura individual.",
            "cat": 0,
            "why": "Conserva un detalle explícito del expediente."
          },
          {
            "text": "El registro demuestra quién leyó el informe.",
            "cat": 1,
            "why": "Contradice la condición documentada."
          }
        ]
      },
      {
        "id": "c2-16-microescritura",
        "type": "open",
        "prompt": "Produce dos versiones breves antes del dossier de Lo probable no es lo probado.",
        "items": [
          {
            "prompt": "Redacta una apertura de 80–100 palabras para el destinatario de «Lo probable no es lo probado». Conserva la tesis y una reserva.",
            "model": "La primera noticia atribuyó a la dirección un conocimiento que la evidencia entonces disponible no demostraba. El registro confirmaba la recepción de un envío; el correo incorporado después confirma que la oficina disponía del informe adjunto. Sigue pendiente establecer quién accedió a él y cómo se distribuyó. Rectificamos el alcance del titular y mantenemos la investigación sobre el procedimiento interno. La cautela del condicional no sustituía esa distinción. Publicar la cronología de las pruebas permite comprender tanto el avance de la investigación como el error de la formulación inicial sin borrar ninguno de los dos.",
            "checklist": [
              "Identifico quién necesita decidir y con qué información.",
              "Separo afirmación, atribución e inferencia."
            ]
          },
          {
            "prompt": "Reformula para una persona ajena al debate de «Lo probable no es lo probado» la condición que más fácilmente se perdería al resumir. Explica el coste de omitirla.",
            "model": "El correo adjunto prueba disponibilidad institucional, no lectura individual. La modalidad de cautela no sustituye la identificación de la evidencia y su alcance.",
            "checklist": [
              "No convierto la condición en un dato accesorio.",
              "Mantengo el alcance aunque simplifique el léxico."
            ]
          }
        ]
      },
      {
        "id": "c2-16-recuperacion",
        "type": "open",
        "prompt": "Recupera recursos con materiales suministrados de semanas anteriores. No busques rasgos ausentes en el dossier actual. Contrasta después qué recurso sería pertinente transferir al nuevo caso.",
        "items": [
          {
            "prompt": "Recuperación c2.disc.mediacion. Recupera la semana 12, «Fuentes que no dicen lo mismo». Material de contraste: El servicio de atención cultural anunció que el tiempo medio de respuesta había bajado de doce a ocho días. Una asociación publicó el mismo día una carta titulada «Esperamos más que nunca». Los comentarios se dividieron entre quienes acusaban al servicio de manipular y quienes acusaban a la asociación de ignorar los datos. La oposición parecía nítida porque nadie había preguntado todavía qué estaba midiendo cada documento. La cifra incluía todas las consultas cerradas; la carta describía solicitudes complejas aún abiertas. Formulación de trabajo: Según el equipo técnico, disminuyó la espera registrada.\n\nRecupera «Mediación de textos» a partir del material suministrado. Produce una versión de 80–100 palabras que haga visible una relación implícita, mantenga una reserva y responda a una objeción. Explica cuál es tu aportación y cuál procede de la fuente. Contraste nuevo suministrado de «Lo probable no es lo probado»: «El registro confirma la recepción, pero no quién leyó el documento.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Las consultas cerradas se responden antes, mientras que varias solicitudes complejas siguen abiertas durante más de un mes. Ambas afirmaciones pueden ser ciertas porque el promedio publicado excluye expedientes pendientes. Los seis testimonios muestran experiencias relevantes, aunque no permiten estimar su frecuencia. La dirección necesita indicadores desagregados y las personas usuarias necesitan saber el estado y el próximo paso de su caso. Proponemos un aviso periódico que no prometa una resolución favorable ni una fecha inexistente. El equilibrio del informe consiste en conservar diferencias entre fuentes, no en repartirles la misma autoridad sobre cualquier pregunta. En el nuevo contraste, «El registro confirma la recepción, pero no quién leyó el documento.» debe interpretarse dentro de esta cuestión: Modalidad epistémica, rumor y responsabilidad de atribución. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.voc.lexico-tecnico-divulgativo. Recupera la semana 12, «Fuentes que no dicen lo mismo». Unidades disponibles: compatibilizar (hacer coexistir elementos sin borrar sus diferencias); dato atípico (observación alejada del patrón habitual); promedio (medida agregada que puede ocultar dispersión); testimonio (relato situado de una experiencia); ponderar (valorar el peso relativo de varios elementos); trazabilidad (posibilidad de reconstruir el origen de una afirmación); síntesis crítica (integración que examina acuerdos y límites); destinatario (persona o grupo para quien se adapta el mensaje). Pasaje: El servicio de atención cultural anunció que el tiempo medio de respuesta había bajado de doce a ocho días. Una asociación publicó el mismo día una carta titulada «Esperamos más que nunca». Los comentarios se dividieron entre quienes acusaban al servicio de manipular y quienes acusaban a la asociación de ignorar los datos. La oposición parecía nítida porque nadie había preguntado todavía qué estaba midiendo cada documento. La cifra incluía todas las consultas cerradas; la carta describía solicitudes complejas aún abiertas.\n\nRecupera «De lo técnico a lo divulgativo»: selecciona dos unidades del material, explica por qué no son intercambiables y redacta una frase sobre el caso con cada una. Contrasta una elección precisa con otra que introduciría una evaluación o un alcance distintos. Contraste nuevo suministrado de «Lo probable no es lo probado»: «El registro confirma la recepción, pero no quién leyó el documento.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Las consultas cerradas se responden antes, mientras que varias solicitudes complejas siguen abiertas durante más de un mes. Ambas afirmaciones pueden ser ciertas porque el promedio publicado excluye expedientes pendientes. Los seis testimonios muestran experiencias relevantes, aunque no permiten estimar su frecuencia. La dirección necesita indicadores desagregados y las personas usuarias necesitan saber el estado y el próximo paso de su caso. Proponemos un aviso periódico que no prometa una resolución favorable ni una fecha inexistente. El equilibrio del informe consiste en conservar diferencias entre fuentes, no en repartirles la misma autoridad sobre cualquier pregunta. En este contraste, «compatibilizar» nombra hacer coexistir elementos sin borrar sus diferencias; «dato atípico», observación alejada del patrón habitual. La elección debe conservar esa diferencia. En el nuevo contraste, «El registro confirma la recepción, pero no quién leyó el documento.» debe interpretarse dentro de esta cuestión: Modalidad epistémica, rumor y responsabilidad de atribución. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.pron.claridad-mediacion. Recupera la semana 12, «Fuentes que no dicen lo mismo». Textos para ensayo oral: «Las consultas cerradas tardan menos; las abiertas no entran en el promedio.» / «Todas las consultas tardan menos, incluidas las abiertas.».\n\nMarca grupos fónicos, un foco y una pausa en cada texto. Produce dos lecturas propias y pide a tu interlocutor que explique el efecto. Recupera «Claridad al mediar» sin atribuir una intención segura ni una variedad a la síntesis. Si trabajas a solas, describe la intención y deja su comprobación perceptiva para clase. Contraste nuevo suministrado de «Lo probable no es lo probado»: «El registro confirma la recepción, pero no quién leyó el documento.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Distingue con pausa el promedio de consultas cerradas y los casos abiertos. No aceleres justo en la excepción, porque ahí reside la diferencia que explica el desacuerdo. Un ensayo defendible conserva esta distinción del caso: Las fuentes son parcialmente compatibles porque describen poblaciones y medidas diferentes. El resultado perceptivo debe contrastarse con un oyente; no queda acreditado por escribir una marca de pausa. En el nuevo contraste, «El registro confirma la recepción, pero no quién leyó el documento.» debe interpretarse dentro de esta cuestión: Modalidad epistémica, rumor y responsabilidad de atribución. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.wri.informe-mediacion. Recupera la semana 12, «Fuentes que no dicen lo mismo». Modelo parcial que puedes transformar: Las consultas cerradas se responden antes, mientras que varias solicitudes complejas siguen abiertas durante más de un mes. Ambas afirmaciones pueden ser ciertas porque el promedio publicado excluye expedientes pendientes. Los seis testimonios muestran experiencias relevantes, aunque no permiten estimar su frecuencia. La dirección necesita indicadores desagregados y las personas usuarias necesitan saber el estado y el próximo paso de su caso. Proponemos un aviso periódico que no prometa una resolución favorable ni una fecha inexistente. El equilibrio del informe consiste en conservar diferencias entre fuentes, no en repartirles la misma autoridad sobre cualquier pregunta.\n\nRecupera «Informe de mediación» mediante una nueva versión de 120–160 palabras de este fragmento para otro destinatario. Mantén la reserva principal, cambia el orden de la información y justifica dos decisiones. Si el objetivo exige un texto completo, retoma además tu entrega original de esa semana y revisa su conjunto. Contraste nuevo suministrado de «Lo probable no es lo probado»: «El registro confirma la recepción, pero no quién leyó el documento.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Las consultas cerradas se responden antes, mientras que varias solicitudes complejas siguen abiertas durante más de un mes. Ambas afirmaciones pueden ser ciertas porque el promedio publicado excluye expedientes pendientes. Los seis testimonios muestran experiencias relevantes, aunque no permiten estimar su frecuencia. La dirección necesita indicadores desagregados y las personas usuarias necesitan saber el estado y el próximo paso de su caso. Proponemos un aviso periódico que no prometa una resolución favorable ni una fecha inexistente. El equilibrio del informe consiste en conservar diferencias entre fuentes, no en repartirles la misma autoridad sobre cualquier pregunta. Para una persona ajena al expediente, la información decisiva que debe seguir visible es: Las fuentes son parcialmente compatibles porque describen poblaciones y medidas diferentes. En el nuevo contraste, «El registro confirma la recepción, pero no quién leyó el documento.» debe interpretarse dentro de esta cuestión: Modalidad epistémica, rumor y responsabilidad de atribución. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.lis.fuentes-contradictorias. Recupera la semana 12, «Fuentes que no dicen lo mismo». Recuperación del contenido escuchado: vuelve al audio de esa semana sin abrir su transcripción. Como pista de contraste, conserva estas dos posiciones: Las fuentes son parcialmente compatibles porque describen poblaciones y medidas diferentes. / El promedio incluye todos los expedientes pendientes.\n\nToma notas de quién sostiene cada posición y de una reserva expresada. Después contrasta tus notas con la transcripción. No deduzcas rasgos regionales ni solapamientos que el audio sintético no acredita. Contraste nuevo suministrado de «Lo probable no es lo probado»: «El registro confirma la recepción, pero no quién leyó el documento.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Las consultas cerradas se responden antes, mientras que varias solicitudes complejas siguen abiertas durante más de un mes. Ambas afirmaciones pueden ser ciertas porque el promedio publicado excluye expedientes pendientes. Los seis testimonios muestran experiencias relevantes, aunque no permiten estimar su frecuencia. La dirección necesita indicadores desagregados y las personas usuarias necesitan saber el estado y el próximo paso de su caso. Proponemos un aviso periódico que no prometa una resolución favorable ni una fecha inexistente. El equilibrio del informe consiste en conservar diferencias entre fuentes, no en repartirles la misma autoridad sobre cualquier pregunta. La primera posición sintetiza el límite defendido; la segunda es la conclusión excesiva que el diálogo obliga a rechazar. En el nuevo contraste, «El registro confirma la recepción, pero no quién leyó el documento.» debe interpretarse dentro de esta cuestión: Modalidad epistémica, rumor y responsabilidad de atribución. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.rev.checkpoint-3. Recupera la semana 15, «Checkpoint: el festival en disputa». Material de contraste: La crónica del festival celebró que la ciudad hubiera aprendido a escucharse. Durante tres noches, músicos de barrios distintos compartieron escenario y la plaza registró una asistencia elevada. El mismo fin de semana, residentes cercanos organizaron una reunión para quejarse del ruido y de las dificultades para entrar en sus casas. La respuesta promocional llegó con un juego de palabras: por fin hacemos ruido cultural. El doble sentido convertía una objeción concreta en una resistencia aparentemente mezquina a la cultura. Formulación de trabajo: No se discute si debe haber cultura, sino cómo se distribuyen sus costes.\n\nRecupera «Checkpoint 3: humor, mediación, estilo y presión» a partir del material suministrado. Produce una versión de 80–100 palabras que haga visible una relación implícita, mantenga una reserva y responda a una objeción. Explica cuál es tu aportación y cuál procede de la fuente. Contraste nuevo suministrado de «Lo probable no es lo probado»: «El registro confirma la recepción, pero no quién leyó el documento.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La calidad artística del festival y las molestias documentadas deben aparecer en el mismo balance. El cuestionario de salida describe al público que respondió, no a todo el barrio. El lema sobre hacer ruido cultural resultó inadecuado como respuesta a una queja y merece una reparación explícita. Se acuerdan un mapa de accesos y un canal atendido; la sede alternativa y el horario final siguen condicionados. La crónica puede conservar el coro improvisado sin convertirlo en prueba de aceptación general. Un cierre provisional será más útil que una unanimidad verbal que nadie pueda sostener después. En el nuevo contraste, «El registro confirma la recepción, pero no quién leyó el documento.» debe interpretarse dentro de esta cuestión: Modalidad epistémica, rumor y responsabilidad de atribución. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.wri.cronica-personal. Recupera la semana 15, «Checkpoint: el festival en disputa». Modelo parcial que puedes transformar: La calidad artística del festival y las molestias documentadas deben aparecer en el mismo balance. El cuestionario de salida describe al público que respondió, no a todo el barrio. El lema sobre hacer ruido cultural resultó inadecuado como respuesta a una queja y merece una reparación explícita. Se acuerdan un mapa de accesos y un canal atendido; la sede alternativa y el horario final siguen condicionados. La crónica puede conservar el coro improvisado sin convertirlo en prueba de aceptación general. Un cierre provisional será más útil que una unanimidad verbal que nadie pueda sostener después.\n\nRecupera «Crónica personal» mediante una nueva versión de 120–160 palabras de este fragmento para otro destinatario. Mantén la reserva principal, cambia el orden de la información y justifica dos decisiones. Si el objetivo exige un texto completo, retoma además tu entrega original de esa semana y revisa su conjunto. Contraste nuevo suministrado de «Lo probable no es lo probado»: «El registro confirma la recepción, pero no quién leyó el documento.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La calidad artística del festival y las molestias documentadas deben aparecer en el mismo balance. El cuestionario de salida describe al público que respondió, no a todo el barrio. El lema sobre hacer ruido cultural resultó inadecuado como respuesta a una queja y merece una reparación explícita. Se acuerdan un mapa de accesos y un canal atendido; la sede alternativa y el horario final siguen condicionados. La crónica puede conservar el coro improvisado sin convertirlo en prueba de aceptación general. Un cierre provisional será más útil que una unanimidad verbal que nadie pueda sostener después. Para una persona ajena al expediente, la información decisiva que debe seguir visible es: La mediación conserva el valor artístico y los costes desiguales sin fabricar un consenso total. En el nuevo contraste, «El registro confirma la recepción, pero no quién leyó el documento.» debe interpretarse dentro de esta cuestión: Modalidad epistémica, rumor y responsabilidad de atribución. La semejanza de función no convierte ambos casos en hechos equivalentes.",
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
    "task": "Escribe una actualización periodística de 500–650 palabras con rectificación visible, cronología de pruebas y preguntas pendientes. Distingue recepción, disponibilidad, lectura y responsabilidad sin absolver ni acusar más allá de la evidencia.",
    "context": "Entrega un texto independiente y conserva una segunda versión con cambios comentados. El modelo muestra una apertura posible; no sustituye el dossier completo.",
    "steps": [
      "Traza un mapa de fuentes: afirmación, prueba, límite y destinatario.",
      "Decide el orden según la acción que necesita realizar tu lector; reserva espacio para una objeción fuerte.",
      "Redacta sin copiar el modelo. Integra al menos dos fuentes y atribuye sus diferencias.",
      "Revisa el alcance de tres formulaciones, lee un párrafo en voz alta y explica dos cambios de estilo."
    ],
    "useLanguage": [
      "La dirección habría recibido el informe, según una fuente no identificada.",
      "El registro confirma la recepción, pero no quién leyó el documento.",
      "Debe de haber una copia; es una inferencia, no una comprobación.",
      "evidencialidad",
      "corroborar",
      "conjetura"
    ],
    "model": [
      "Modelo parcial de apertura (no es una entrega completa): La primera noticia atribuyó a la dirección un conocimiento que la evidencia entonces disponible no demostraba. El registro confirmaba la recepción de un envío; el correo incorporado después confirma que la oficina disponía del informe adjunto. Sigue pendiente establecer quién accedió a él y cómo se distribuyó. Rectificamos el alcance del titular y mantenemos la investigación sobre el procedimiento interno. La cautela del condicional no sustituía esa distinción. Publicar la cronología de las pruebas permite comprender tanto el avance de la investigación como el error de la formulación inicial sin borrar ninguno de los dos."
    ],
    "checklist": [
      "La tesis tiene alcance preciso y pruebas identificables.",
      "No convierto una propuesta en decisión ni una inferencia en dato.",
      "El registro responde al destinatario y no borra condiciones.",
      "La cohesión conserva referentes y voces sin repeticiones inútiles.",
      "La revisión explica qué cambia para quien lee."
    ],
    "words": [
      500,
      650
    ]
  },
  "speaking": {
    "intro": "Planifica con palabras clave, no un guion leído. La grabación, si la usas, permanece local; el navegador no califica pronunciación ni calidad oral.",
    "tasks": [
      {
        "title": "Exposición situada",
        "prompt": "Comparece como editora ante preguntas sobre el titular inicial. Reconoce el salto inferencial, presenta la nueva prueba y responde con precisión a una exigencia de certeza inmediata.",
        "prep": [
          "Anota tesis, dos pruebas, una objeción y una reserva.",
          "Marca dos focos prosódicos y un punto donde cambiarás de registro."
        ],
        "seconds": 240,
        "model": "La primera noticia atribuyó a la dirección un conocimiento que la evidencia entonces disponible no demostraba. El registro confirmaba la recepción de un envío; el correo incorporado después confirma que la oficina disponía del informe adjunto. Sigue pendiente establecer quién accedió a él y cómo se distribuyó. Rectificamos el alcance del titular y mantenemos la investigación sobre el procedimiento interno. La cautela del condicional no sustituía esa distinción. Publicar la cronología de las pruebas permite comprender tanto el avance de la investigación como el error de la formulación inicial sin borrar ninguno de los dos.",
        "selfCheck": [
          "La condición principal se oye con claridad.",
          "Distingo mi interpretación de las voces citadas.",
          "Puedo reparar una frase sin abandonar el argumento."
        ]
      },
      {
        "title": "Interacción y reformulación",
        "prompt": "Tu interlocutor sostiene: «Habría permite publicar cualquier acusación sin identificar su base.». Responde sin caricaturizarlo, formula dos preguntas de seguimiento y pide que reformule tu condición principal. Después resume para una persona que no conoce el expediente de Lo probable no es lo probado.",
        "prep": [
          "Prepara una concesión real y una corrección de alcance.",
          "Anticipa qué término deberás explicar sin jerga."
        ],
        "seconds": 240,
        "model": "La modalidad de cautela no sustituye la identificación de la evidencia y su alcance. El correo adjunto prueba disponibilidad institucional, no lectura individual.",
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
        "task": "Presenta tu decisión más discutible sobre Lo probable no es lo probado y pide un contraejemplo que la ponga a prueba.",
        "phrases": [
          "Mi lectura se apoya en…",
          "Cambiaría de interpretación si…"
        ]
      },
      {
        "move": "Reformula",
        "task": "Explica el límite «El correo adjunto prueba disponibilidad institucional, no lectura individual.» a otro público sin rebajar su importancia.",
        "phrases": [
          "En otros términos…",
          "Esta versión conserva…"
        ]
      },
      {
        "move": "Negocia",
        "task": "Responde a la objeción «La evidencia posterior vuelve exacto retrospectivamente cualquier titular.» y acuerda una formulación que ambos puedan defender.",
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
        "q": "Balance de Lo probable no es lo probado: ¿qué conclusión conserva el alcance?",
        "options": [
          "Habría permite publicar cualquier acusación sin identificar su base.",
          "La modalidad de cautela no sustituye la identificación de la evidencia y su alcance."
        ],
        "answer": 1,
        "why": "Relaciona el texto principal con el documento complementario."
      },
      {
        "type": "choice",
        "q": "En una revisión final de Lo probable no es lo probado, ¿qué afirmación debe rechazarse?",
        "options": [
          "El registro demuestra quién leyó el informe.",
          "El correo adjunto prueba disponibilidad institucional, no lectura individual."
        ],
        "answer": 0,
        "why": "La primera opción contradice la condición explícita."
      },
      {
        "type": "listen",
        "q": "Escucha esta síntesis de Lo probable no es lo probado. ¿Qué interpretación mantiene?",
        "options": [
          "La cronología de la comprobación impide presentar una hipótesis inicial como certeza retrospectiva.",
          "La evidencia posterior vuelve exacto retrospectivamente cualquier titular."
        ],
        "answer": 0,
        "why": "La relación expresada limita una generalización.",
        "audio": "La cronología de la comprobación impide presentar una hipótesis inicial como certeza retrospectiva.",
        "voice": "es-ES-f"
      },
      {
        "type": "gap",
        "q": "En «Lo probable no es lo probado», ¿qué unidad expresa «marca de la base informativa de un enunciado»? ___ .",
        "answers": [
          [
            "evidencialidad"
          ]
        ],
        "hint": "marca de la base informativa de un enunciado",
        "why": "Recupera la unidad a partir de su función, no de una traducción."
      },
      {
        "type": "gap",
        "q": "Para nombrar «confirmar con evidencia adicional» en este expediente usamos ___ .",
        "answers": [
          [
            "corroborar"
          ]
        ],
        "why": "La distinción léxica debe conservarse al mediar."
      },
      {
        "type": "error",
        "sentence": "La prueba confirma de que llegó un envío.",
        "answers": [
          "La prueba confirma que llegó un envío."
        ],
        "why": "Confirmar introduce complemento directo sin de."
      },
      {
        "type": "transform",
        "source": "La oficina habría recibido el envío. Ahora el registro confirma la recepción.",
        "instruction": "Escribe la afirmación confirmada en pretérito indefinido, sin afirmar lectura del contenido.",
        "answers": [
          "La oficina recibió el envío."
        ],
        "why": "Actualizar el grado de certeza: conserva la relación solicitada y compara qué se hace explícito."
      },
      {
        "type": "open",
        "prompt": "Cierre de «Lo probable no es lo probado»: escribe 90–120 palabras para una audiencia nueva. Incluye tesis, condición y una pregunta pendiente; justifica una elección de registro.",
        "model": "La primera noticia atribuyó a la dirección un conocimiento que la evidencia entonces disponible no demostraba. El registro confirmaba la recepción de un envío; el correo incorporado después confirma que la oficina disponía del informe adjunto. Sigue pendiente establecer quién accedió a él y cómo se distribuyó. Rectificamos el alcance del titular y mantenemos la investigación sobre el procedimiento interno. La cautela del condicional no sustituía esa distinción. Publicar la cronología de las pruebas permite comprender tanto el avance de la investigación como el error de la formulación inicial sin borrar ninguno de los dos.",
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
      "Interpreto modalidad epistémica, rumor y responsabilidad de atribución en fuentes originales.",
      "Puedo explicar por qué «Habría permite publicar cualquier acusación sin identificar su base.» excede la evidencia.",
      "Defiendo y reviso un dossier escrito y oral con destinatario concreto."
    ],
    "review": [
      "Dentro de dos días, reconstruye sin mirar el límite: El correo adjunto prueba disponibilidad institucional, no lectura individual.",
      "Dentro de una semana, reescribe el cierre para otro público y contrástalo con tu versión inicial.",
      "En clase, pide una objeción a «La modalidad de cautela no sustituye la identificación de la evidencia y su alcance.» y registra qué cambiarías."
    ]
  }
};
