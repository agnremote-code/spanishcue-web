import type { Module } from "../../types";

/** Material original C2. Audio mediante síntesis; sin acreditación regional. */
export const c2w20: Module = {
  "id": "c2-20",
  "level": "c2",
  "week": 20,
  "kind": "checkpoint",
  "title": "Checkpoint final: una memoria discutida",
  "subtitle": "Síntesis crítica y control expresivo integral",
  "stop": {
    "place": "Madrid",
    "country": "España"
  },
  "minutes": 150,
  "newObjectives": [
    "c2.rev.checkpoint-final",
    "c2.wri.ensayo-final-c2"
  ],
  "reviewObjectives": [
    "c2.gram.modalidad-evidencial",
    "c2.disc.responsabilidad-fuentes",
    "c2.voc.certeza-documental",
    "c2.pron.reserva-epistemica",
    "c2.wri.rectificacion",
    "c2.gram.agencia-reparacion",
    "c2.fun.disculpa-reparacion",
    "c2.pron.serenidad-no-condescendiente",
    "c2.wri.comunicado-reparacion",
    "c2.gram.temporalidad-perspectiva",
    "c2.disc.fiabilidad-narrativa",
    "c2.read.lectura-contrapunto",
    "c2.spk.defensa-interpretacion",
    "c2.disc.compresion-jerarquica",
    "c2.pron.foco-compresion",
    "c2.fun.adaptacion-inmediata",
    "c2.spk.sintesis-tiempo"
  ],
  "prerequisites": [
    "c2-19"
  ],
  "goal": {
    "canDo": "Puedo sintetizar y defender un dossier complejo con precisión, estilo propio y apertura a revisión.",
    "steps": [
      "Lee las fuentes y distingue dato, inferencia y evaluación.",
      "Escucha el intercambio antes de consultar su transcripción.",
      "Aplica síntesis crítica y control expresivo integral a una decisión comunicativa concreta.",
      "Produce el dossier escrito, revisa una elección y defiéndela oralmente."
    ]
  },
  "theory": {
    "intro": "Los casos, documentos y voces de esta semana son originales y ficticios. La dificultad está en controlar relaciones de significado, no en acumular palabras raras.",
    "parts": [
      {
        "heading": "Síntesis crítica y control expresivo integral",
        "body": [
          "En la tarea final, toda elección formal debe servir a una relación precisa entre evidencia, voz y destinatario. Recupera el alcance de relativas, la cautela epistémica, la ironía, el cambio de registro, la cohesión y la reparación de presuposiciones. Una síntesis puede concluir que dos fuentes discrepan sin resolver artificialmente la discrepancia. El estilo propio se manifiesta en decisiones justificables; la precisión no exige borrar toda ambigüedad, sino controlar cuál se conserva y por qué.",
          "En este caso, La revisión responsable integra nuevas voces, criterios explícitos y límites documentales sin simular consenso. La formulación elegida debe permitir al destinatario reconstruir la diferencia relevante y reconocer qué no se ha demostrado."
        ],
        "examples": [
          {
            "es": "El archivo conserva el documento; no confirma por sí solo su interpretación."
          },
          {
            "es": "Aunque el proyecto resulte valioso, debe explicar sus criterios de selección."
          },
          {
            "es": "La comisión reconoce la omisión y propone una revisión, todavía pendiente de aprobación."
          }
        ],
        "mistakes": [
          {
            "wrong": "La comisión reconoce de que la convocatoria fue insuficiente.",
            "right": "La comisión reconoce que la convocatoria fue insuficiente.",
            "why": "Reconocer introduce complemento directo sin de."
          }
        ]
      },
      {
        "heading": "Interpretar, atribuir y revisar en este caso",
        "body": [
          "Una corrección añadida como apéndice puede dejar intacto el relato que produjo la omisión. Para defender esa lectura, identifica una formulación y el detalle que la sostiene. Prueba después una explicación rival y señala qué dato necesitarías para preferirla.",
          "La versión para un público nuevo puede cambiar léxico, orden y longitud, pero debe conservar esta condición: La remuneración del grupo asesor depende de financiación. Un cambio de registro que la elimina cambia también el contenido."
        ],
        "examples": [
          {
            "es": "La revisión responsable integra nuevas voces, criterios explícitos y límites documentales sin simular consenso.",
            "note": "Síntesis con alcance delimitado."
          },
          {
            "es": "La sala añadida resuelve por sí sola toda objeción narrativa.",
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
        "id": "c2-20-gramatica-alcance",
        "type": "choice",
        "prompt": "Selecciona la interpretación defendible de Checkpoint final: una memoria discutida.",
        "items": [
          {
            "q": "En el caso de Checkpoint final: una memoria discutida, ¿qué formulación preserva el alcance?",
            "options": [
              "La carta basta para demostrar que el testigo miente.",
              "Aunque el proyecto resulte valioso, debe explicar sus criterios de selección."
            ],
            "answer": 1,
            "why": "En la tarea final, toda elección formal debe servir a una relación precisa entre evidencia, voz y destinatario. Recupera el alcance de relativas, la cautela epistémica, la ironía, el cambio de registro, la cohesión y la reparación de presuposiciones. Una síntesis puede concluir que dos fuentes discrepan sin resolver artificialmente la discrepancia. El estilo propio se manifiesta en decisiones justificables; la precisión no exige borrar toda ambigüedad, sino controlar cuál se conserva y por qué."
          },
          {
            "q": "¿Qué cautela lingüística resulta necesaria al explicar Checkpoint final: una memoria discutida?",
            "options": [
              "La sala añadida resuelve por sí sola toda objeción narrativa.",
              "Una corrección añadida como apéndice puede dejar intacto el relato que produjo la omisión."
            ],
            "answer": 1,
            "why": "Relaciona forma, contexto y efecto; evita ampliar una conclusión más allá de su base."
          }
        ]
      },
      {
        "id": "c2-20-gramatica-forma",
        "type": "gap",
        "prompt": "Completa las relaciones gramaticales del caso Checkpoint final: una memoria discutida.",
        "items": [
          {
            "q": "El grupo será remunerado siempre que se ___ financiación.",
            "answers": [
              [
                "obtenga"
              ]
            ],
            "why": "En la tarea final, toda elección formal debe servir a una relación precisa entre evidencia, voz y destinatario. Recupera el alcance de relativas, la cautela epistémica, la ironía, el cambio de registro, la cohesión y la reparación de presuposiciones. Una síntesis puede concluir que dos fuentes discrepan sin resolver artificialmente la discrepancia. El estilo propio se manifiesta en decisiones justificables; la precisión no exige borrar toda ambigüedad, sino controlar cuál se conserva y por qué."
          },
          {
            "q": "La carta describe una propuesta, ___ el testigo recuerda una decisión.",
            "answers": [
              [
                "mientras que"
              ]
            ],
            "why": "En la tarea final, toda elección formal debe servir a una relación precisa entre evidencia, voz y destinatario. Recupera el alcance de relativas, la cautela epistémica, la ironía, el cambio de registro, la cohesión y la reparación de presuposiciones. Una síntesis puede concluir que dos fuentes discrepan sin resolver artificialmente la discrepancia. El estilo propio se manifiesta en decisiones justificables; la precisión no exige borrar toda ambigüedad, sino controlar cuál se conserva y por qué."
          },
          {
            "q": "La revisión no exige que desaparezca el ___.",
            "answers": [
              [
                "desacuerdo"
              ]
            ],
            "why": "En la tarea final, toda elección formal debe servir a una relación precisa entre evidencia, voz y destinatario. Recupera el alcance de relativas, la cautela epistémica, la ironía, el cambio de registro, la cohesión y la reparación de presuposiciones. Una síntesis puede concluir que dos fuentes discrepan sin resolver artificialmente la discrepancia. El estilo propio se manifiesta en decisiones justificables; la precisión no exige borrar toda ambigüedad, sino controlar cuál se conserva y por qué."
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Usa estas unidades para describir diferencias que el caso exige. La definición orienta el uso; contrástala con la frase completa.",
    "groups": [
      {
        "title": "Precisión para Checkpoint final: una memoria discutida",
        "items": [
          {
            "es": "criterio curatorial",
            "note": "principio de selección y presentación de materiales"
          },
          {
            "es": "memoria pública",
            "note": "relato compartido y discutido sobre el pasado"
          },
          {
            "es": "omisión significativa",
            "note": "ausencia que afecta a la interpretación"
          },
          {
            "es": "responsabilidad enunciativa",
            "note": "compromiso con lo que se afirma o sugiere"
          },
          {
            "es": "discrepancia documental",
            "note": "divergencia entre registros o testimonios"
          },
          {
            "es": "revisión motivada",
            "note": "cambio acompañado de razones"
          },
          {
            "es": "audiencia heterogénea",
            "note": "público con experiencias y necesidades distintas"
          },
          {
            "es": "síntesis final",
            "note": "integración que conserva relaciones y límites decisivos"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "c2-20-lexico",
        "type": "match",
        "prompt": "Relaciona cada unidad con la distinción que aporta al expediente de Checkpoint final: una memoria discutida.",
        "pairs": [
          {
            "left": "criterio curatorial",
            "right": "principio de selección y presentación de materiales"
          },
          {
            "left": "memoria pública",
            "right": "relato compartido y discutido sobre el pasado"
          },
          {
            "left": "omisión significativa",
            "right": "ausencia que afecta a la interpretación"
          },
          {
            "left": "responsabilidad enunciativa",
            "right": "compromiso con lo que se afirma o sugiere"
          },
          {
            "left": "discrepancia documental",
            "right": "divergencia entre registros o testimonios"
          },
          {
            "left": "revisión motivada",
            "right": "cambio acompañado de razones"
          },
          {
            "left": "audiencia heterogénea",
            "right": "público con experiencias y necesidades distintas"
          },
          {
            "left": "síntesis final",
            "right": "integración que conserva relaciones y límites decisivos"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Control expresivo en una audiencia heterogénea",
    "explanation": [
      "Alterna exposición, atribución y respuesta sin perder el hilo. Conserva audibles las condiciones y las discrepancias; una cadencia solemne no debe convertir el cierre provisional en consenso definitivo.",
      "El audio utiliza síntesis disponible en el navegador: no certifica acento regional, ironía natural ni calidad de pronunciación. Escucha el contenido, ensaya contrastes y comprueba el efecto con una persona. El objetivo es inteligibilidad y control expresivo, no eliminar tu acento."
    ],
    "examples": [
      {
        "es": "Publicaremos los criterios; la remuneración depende de financiación."
      },
      {
        "es": "Publicaremos los criterios y la remuneración ya está garantizada."
      }
    ],
    "perceive": {
      "id": "c2-20-percepcion",
      "type": "listen",
      "prompt": "Escucha el contraste antes de leer las opciones en «Checkpoint final: una memoria discutida».",
      "items": [
        {
          "q": "Escucha la primera formulación sobre Checkpoint final: una memoria discutida. ¿Qué contenido permite recuperar?",
          "options": [
            "Publicaremos los criterios; la remuneración depende de financiación.",
            "Publicaremos los criterios y la remuneración ya está garantizada."
          ],
          "answer": 0,
          "why": "La respuesta depende de las palabras y de su agrupación; no atribuyas a la síntesis una intención o variedad verificada.",
          "audio": "Publicaremos los criterios; la remuneración depende de financiación.",
          "voice": "es-ES-f"
        },
        {
          "q": "Escucha ahora el contraste de Checkpoint final: una memoria discutida. ¿Qué formulación aparece?",
          "options": [
            "Publicaremos los criterios; la remuneración depende de financiación.",
            "Publicaremos los criterios y la remuneración ya está garantizada."
          ],
          "answer": 1,
          "why": "Compara después tus dos lecturas con una persona: una pausa puede favorecer una lectura sin demostrarla.",
          "audio": "Publicaremos los criterios y la remuneración ya está garantizada.",
          "voice": "es-ES-m"
        }
      ]
    },
    "produce": [
      {
        "text": "Publicaremos los criterios; la remuneración depende de financiación.",
        "tip": "Marca grupos fónicos y explica qué interpretación favoreces.",
        "voice": "es-ES-f"
      },
      {
        "text": "Publicaremos los criterios y la remuneración ya está garantizada.",
        "tip": "Cambia el foco sin cambiar las palabras; pide una interpretación a tu interlocutor.",
        "voice": "es-ES-m"
      },
      {
        "text": "La revisión responsable integra nuevas voces, criterios explícitos y límites documentales sin simular consenso.",
        "tip": "Lee a velocidad cómoda, conserva la reserva y compara tu grabación local con tu intención.",
        "voice": "es-ES-f"
      }
    ]
  },
  "listening": {
    "title": "Mesa de trabajo: Checkpoint final: una memoria discutida",
    "context": "Dos participantes preparan una intervención sobre el caso. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como variedades regionales verificadas.",
    "speakers": [
      {
        "id": "a",
        "name": "Ángela",
        "voice": "es-ES-f",
        "role": "Primera perspectiva"
      },
      {
        "id": "b",
        "name": "Ricardo",
        "voice": "es-ES-m",
        "role": "Contraste y reformulación"
      }
    ],
    "script": [
      {
        "speaker": "a",
        "text": "Si resumo el conflicto como una exposición incompleta, parezco decir que bastaría añadir algunas fotografías. La asociación cuestiona también la estructura del relato. Necesitamos explicar la diferencia entre ampliar una colección y revisar la interpretación que la organiza. No debo presentar su propuesta como una demanda de borrar el trabajo ya hecho."
      },
      {
        "speaker": "b",
        "text": "Y al hablar de la carta, conservemos la cronología. La carta describe una propuesta; el testigo recuerda una decisión posterior. No sabemos todavía si hubo un cambio entre ambas. Sería irresponsable afirmar que el documento lo desmiente por completo. También lo sería decir que no existe ningún problema: hay una discrepancia que merece investigación y una pieza que falta."
      },
      {
        "speaker": "a",
        "text": "En el comunicado reconoceré la omisión de la convocatoria sin atribuir una intención que no podemos demostrar. Después separaré lo inmediato de lo condicionado. Publicar los criterios está acordado; remunerar el grupo depende de financiación. La disculpa no debe prometer una reparación ya completa ni pedir que la asociación deje de criticar para poder participar."
      },
      {
        "speaker": "b",
        "text": "Para la presentación final tendrás ocho minutos y una audiencia muy diversa. Empieza con la decisión pendiente, usa un ejemplo documental y explica qué cambiaría para quienes no aparecen. Si te interrumpen diciendo que todo es una censura del pasado, rechaza esa equivalencia y vuelve al criterio de representación. Termina con una reserva real, no con una frase solemne que haga desaparecer el desacuerdo. Tu capacidad de sostener la complejidad se verá también en lo que aceptes no resolver ante el público. Esa reserva también forma parte del resultado."
      },
      {
        "speaker": "a",
        "text": "La nueva participante nos obliga a revisar el límite entre dentro y fuera de la fábrica. Su familia dependía de encargos y no aparece en nuestras categorías. No podemos prometer incluir toda experiencia, pero sí explicar el criterio de selección y permitir que se discuta. A veces una voz nueva no añade un ejemplo: cambia la pregunta con la que estábamos ordenando el conjunto."
      },
      {
        "speaker": "b",
        "text": "Propongo cerrar una versión fechada y dejar un mecanismo de incorporación posterior. Así no confundimos una exposición finita con una historia completa. En la defensa final, responderé a quien diga que reconocer ausencias impide contar nada. Podemos seleccionar responsablemente si mostramos nuestras preguntas, fuentes y límites. La última frase debería invitar a revisar esa construcción, no anunciar que hemos conseguido una memoria definitiva que ya no admite discusión."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha el intercambio completo sin abrir la transcripción. Reconstruye el desacuerdo central.",
        "exercise": {
          "id": "c2-20-escucha-gist",
          "type": "choice",
          "prompt": "Interpreta el diálogo: Checkpoint final: una memoria discutida",
          "items": [
            {
              "q": "¿Qué problema organiza la conversación de Checkpoint final: una memoria discutida?",
              "options": [
                "La revisión responsable integra nuevas voces, criterios explícitos y límites documentales sin simular consenso.",
                "La sala añadida resuelve por sí sola toda objeción narrativa."
              ],
              "answer": 0,
              "why": "Reconstruye el propósito común antes de buscar detalles."
            },
            {
              "q": "En esta fase, ¿qué conclusión sería excesiva sobre Checkpoint final: una memoria discutida?",
              "options": [
                "La carta basta para demostrar que el testigo miente.",
                "La revisión responsable integra nuevas voces, criterios explícitos y límites documentales sin simular consenso."
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
          "id": "c2-20-escucha-detail",
          "type": "choice",
          "prompt": "Interpreta el diálogo: Checkpoint final: una memoria discutida",
          "items": [
            {
              "q": "¿Qué límite deben conservar los interlocutores de Checkpoint final: una memoria discutida?",
              "options": [
                "La remuneración del grupo ya tiene financiación.",
                "La remuneración del grupo asesor depende de financiación."
              ],
              "answer": 1,
              "why": "La conversación vuelve sobre el límite que evita una promesa o inferencia excesiva."
            },
            {
              "q": "En esta fase, ¿qué conclusión sería excesiva sobre Checkpoint final: una memoria discutida?",
              "options": [
                "La carta basta para demostrar que el testigo miente.",
                "La remuneración del grupo asesor depende de financiación."
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
          "id": "c2-20-escucha-notice",
          "type": "choice",
          "prompt": "Interpreta el diálogo: Checkpoint final: una memoria discutida",
          "items": [
            {
              "q": "¿Qué inferencia pragmática permite el diálogo de Checkpoint final: una memoria discutida?",
              "options": [
                "La carta basta para demostrar que el testigo miente.",
                "Una corrección añadida como apéndice puede dejar intacto el relato que produjo la omisión."
              ],
              "answer": 1,
              "why": "La inferencia se apoya en una reformulación y su contexto; no es una lectura literal de una palabra."
            },
            {
              "q": "En esta fase, ¿qué conclusión sería excesiva sobre Checkpoint final: una memoria discutida?",
              "options": [
                "La carta basta para demostrar que el testigo miente.",
                "Una corrección añadida como apéndice puede dejar intacto el relato que produjo la omisión."
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
    "title": "Checkpoint final: una memoria discutida · expediente de lectura",
    "genre": "Dossier original: texto principal y documento de contraste",
    "frame": "Situación ficticia para lectura crítica y mediación. Identifica qué voz afirma cada cosa antes de integrar las fuentes.",
    "text": [
      "La exposición sobre la antigua fábrica se titulaba «Una ciudad que se hizo a sí misma». Reunía herramientas, fotografías de talleres y testimonios de quienes habían trabajado allí. El lema ofrecía una imagen de esfuerzo compartido, pero una asociación señaló que las trabajadoras temporales apenas aparecían. La comisaria respondió que se habían incluido todos los testimonios que llegaron a tiempo. La frase describía un criterio de recepción; no explicaba si todas las personas habían tenido las mismas posibilidades de enterarse de la convocatoria.",
      "Un informe de participación afirmaba que el proyecto había alcanzado una representación amplia. El término se apoyaba en la variedad de oficios presentes, no en la distribución de edades, contratos o trayectorias migratorias. Una crónica celebró «la admirable capacidad de recordar sin incomodar a nadie». La ironía denunciaba una memoria demasiado cómoda, aunque el artículo no distinguía entre ausencia documental y exclusión deliberada. El lector debía reconocer la crítica sin convertir su brillo verbal en prueba suficiente de intención.",
      "El archivo aportó una carta que parecía contradecir el testimonio de un antiguo encargado sobre el cierre de una sección. La carta anunciaba una propuesta, mientras que el testimonio recordaba una decisión posterior. La discrepancia podía deberse al momento de referencia. No quedaba resuelta, porque faltaba el acta de la reunión siguiente, pero tampoco justificaba llamar mentiroso al testigo. La mediación requería conservar la cronología y resistir la tentación de elegir una fuente como vencedora antes de examinar qué afirmaba exactamente cada una.",
      "La comisaria propuso añadir una sala. La asociación pidió primero revisar la narrativa del conjunto: si las trabajadoras temporales aparecían solo en un espacio separado, su presencia podía convertirse en apéndice. El desacuerdo no era entre conservar y destruir la exposición, sino entre dos maneras de integrar una corrección. La dirección aceptó un proceso de revisión, aunque todavía no había aprobado presupuesto. Un comunicado que anunciara una exposición renovada habría convertido una disposición a negociar en compromiso material.",
      "Documento de cierre. Se acordó publicar los criterios iniciales, abrir nuevas entrevistas con consentimiento y formar un grupo asesor remunerado si se obtenía financiación. La institución reconoció que la convocatoria no había llegado de manera suficiente a ciertas redes laborales. No pidió a la asociación que retirara toda crítica como condición para participar. El siguiente informe debía separar acciones inmediatas, propuestas condicionadas y preguntas históricas abiertas. El reto final era escribir y hablar de esa memoria sin fingir una voz situada fuera del conflicto: una voz responsable debía mostrar qué elegía, en qué se apoyaba y qué estaba dispuesta a revisar.",
      "Intervención de una participante nueva. No trabajé en la fábrica, explicó, pero mi familia dependía de los encargos que salían de ella y no encuentro esa relación en el relato. Su testimonio cuestionaba el límite entre dentro y fuera que había organizado la recopilación. Ampliar las entrevistas no consistía únicamente en buscar más personas dentro de las categorías existentes; podía exigir revisar las categorías. El grupo asesor debía discutir qué vínculos laborales y domésticos contaban como parte de aquella memoria, sin pretender incluir toda experiencia en una exposición finita.",
      "La dirección pidió un criterio de cierre para evitar una revisión interminable. La asociación aceptó fijar una versión fechada con un mecanismo de incorporación posterior. La finitud del montaje no obligaba a declarar completa la historia, del mismo modo que reconocer incompletitud no impedía seleccionar y presentar un relato. El dossier final debía sostener esa tensión. Se decidió explicar qué preguntas guiaban cada sección, qué tipos de fuente se habían utilizado y qué ausencias seguían abiertas. La última frase del comunicado no anunció que la ciudad por fin se reconocía entera. Invitó a examinar una versión revisada y a discutir sus criterios. Ese cierre renunciaba a una totalidad retórica para ofrecer una responsabilidad concreta: mostrar cómo se construye la memoria que se propone compartir."
    ],
    "tasks": [
      {
        "id": "c2-20-lectura",
        "type": "choice",
        "prompt": "Reconstruye la tesis y su límite en Checkpoint final: una memoria discutida.",
        "items": [
          {
            "q": "¿Qué tesis sostiene el dossier «Checkpoint final: una memoria discutida»?",
            "options": [
              "La sala añadida resuelve por sí sola toda objeción narrativa.",
              "La revisión responsable integra nuevas voces, criterios explícitos y límites documentales sin simular consenso."
            ],
            "answer": 1,
            "why": "La tesis integra el contraste entre las fuentes, no solo una frase aislada."
          },
          {
            "q": "¿Qué detalle limita la interpretación en «Checkpoint final: una memoria discutida»?",
            "options": [
              "La remuneración del grupo ya tiene financiación.",
              "La remuneración del grupo asesor depende de financiación."
            ],
            "answer": 1,
            "why": "El documento complementario delimita qué está confirmado."
          }
        ]
      },
      {
        "id": "c2-20-lectura-evidencia",
        "type": "open",
        "prompt": "Defiende una interpretación de Checkpoint final: una memoria discutida con pruebas y contraejemplos.",
        "items": [
          {
            "prompt": "Contrasta «La revisión responsable integra nuevas voces, criterios explícitos y límites documentales sin simular consenso.» con «La sala añadida resuelve por sí sola toda objeción narrativa.». Cita dos fragmentos breves, atribuye sus voces y explica qué detalle impide sostener la segunda lectura.",
            "model": "La revisión responsable integra nuevas voces, criterios explícitos y límites documentales sin simular consenso. La remuneración del grupo asesor depende de financiación.",
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
          "quote": "La exposición sobre la antigua fábrica se titulaba «Una ciudad que se hizo a sí misma».",
          "note": "Examina el encuadre inicial y qué información necesitarás para revisarlo."
        },
        {
          "quote": "Documento de cierre.",
          "note": "El documento final introduce otra perspectiva; identifica qué interpretación limita y qué deja abierto."
        }
      ]
    }
  },
  "practice": {
    "intro": "Combina orden, clasificación, producción y recuperación espaciada. Las respuestas abiertas se contrastan con criterios y con tu docente.",
    "exercises": [
      {
        "id": "c2-20-orden",
        "type": "order",
        "prompt": "Reconstruye dos relaciones centrales del caso Checkpoint final: una memoria discutida.",
        "items": [
          {
            "words": [
              "La",
              "memoria",
              "pública",
              "admite",
              "una",
              "revisión",
              "motivada."
            ],
            "why": "La secuencia mantiene el alcance y las relaciones del caso."
          },
          {
            "words": [
              "El",
              "cierre",
              "distingue",
              "acciones",
              "y",
              "propuestas",
              "condicionadas."
            ],
            "why": "La secuencia mantiene el alcance y las relaciones del caso."
          }
        ]
      },
      {
        "id": "c2-20-estatuto",
        "type": "classify",
        "prompt": "Clasifica el estatuto de estas formulaciones en «Checkpoint final: una memoria discutida».",
        "categories": [
          "Conclusión respaldada o delimitada",
          "Generalización no autorizada"
        ],
        "items": [
          {
            "text": "La revisión responsable integra nuevas voces, criterios explícitos y límites documentales sin simular consenso.",
            "cat": 0,
            "why": "Resume el razonamiento con sus límites."
          },
          {
            "text": "La sala añadida resuelve por sí sola toda objeción narrativa.",
            "cat": 1,
            "why": "Amplía o invierte el alcance de las fuentes."
          },
          {
            "text": "La remuneración del grupo asesor depende de financiación.",
            "cat": 0,
            "why": "Conserva un detalle explícito del expediente."
          },
          {
            "text": "La remuneración del grupo ya tiene financiación.",
            "cat": 1,
            "why": "Contradice la condición documentada."
          }
        ]
      },
      {
        "id": "c2-20-microescritura",
        "type": "open",
        "prompt": "Produce dos versiones breves antes del dossier de Checkpoint final: una memoria discutida.",
        "items": [
          {
            "prompt": "Redacta una apertura de 80–100 palabras para el destinatario de «Checkpoint final: una memoria discutida». Conserva la tesis y una reserva.",
            "model": "La exposición puede reconocer su valor y revisar una representación insuficiente sin presentar ambas acciones como incompatibles. La convocatoria no llegó de manera adecuada a ciertas redes laborales; esa omisión requiere reconocimiento y nuevas vías de participación. La carta y el testimonio se refieren a momentos distintos y no permiten todavía cerrar la discrepancia. Publicar los criterios está acordado; la remuneración del grupo asesor depende de financiación. La revisión narrativa debe discutir cómo se integran las nuevas voces, no solo dónde se añaden. Un cierre responsable conserva esa cuestión y permite comprobar los próximos compromisos.",
            "checklist": [
              "Identifico quién necesita decidir y con qué información.",
              "Separo afirmación, atribución e inferencia."
            ]
          },
          {
            "prompt": "Reformula para una persona ajena al debate de «Checkpoint final: una memoria discutida» la condición que más fácilmente se perdería al resumir. Explica el coste de omitirla.",
            "model": "La remuneración del grupo asesor depende de financiación. La revisión responsable integra nuevas voces, criterios explícitos y límites documentales sin simular consenso.",
            "checklist": [
              "No convierto la condición en un dato accesorio.",
              "Mantengo el alcance aunque simplifique el léxico."
            ]
          }
        ]
      },
      {
        "id": "c2-20-recuperacion",
        "type": "open",
        "prompt": "Recupera recursos con materiales suministrados de semanas anteriores. No busques rasgos ausentes en el dossier actual. Contrasta después qué recurso sería pertinente transferir al nuevo caso.",
        "items": [
          {
            "prompt": "Recuperación c2.gram.modalidad-evidencial. Recupera la semana 16, «Lo probable no es lo probado». Contrastes suministrados: La dirección habría recibido el informe, según una fuente no identificada. / El registro confirma la recepción, pero no quién leyó el documento. / Debe de haber una copia; es una inferencia, no una comprobación.\n\nExplica la estructura y el cambio de interpretación pertinentes para «Modalidad y fuente». Produce una cuarta formulación y señala expresamente qué referente, condición o perspectiva temporal conserva. Contraste nuevo suministrado de «Checkpoint final: una memoria discutida»: «Aunque el proyecto resulte valioso, debe explicar sus criterios de selección.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "El condicional de información no confirmada, habría recibido, distancia al redactor del hecho, pero no sustituye la identificación de una fuente. Debe de expresar una inferencia no equivale a debe con obligación, aunque el uso real presenta variación. Al parecer y según una fuente anónima sitúan de forma distinta la base del enunciado. La precisión exige indicar qué está documentado, qué se infiere y qué permanece sin confirmar; acumular cautelas no neutraliza una acusación. Aplicación al caso: La primera noticia atribuyó a la dirección un conocimiento que la evidencia entonces disponible no demostraba. El registro confirmaba la recepción de un envío; el correo incorporado después confirma que la oficina disponía del informe adjunto. Sigue pendiente establecer quién accedió a él y cómo se distribuyó. Rectificamos el alcance del titular y mantenemos la investigación sobre el procedimiento interno. La cautela del condicional no sustituía esa distinción. Publicar la cronología de las pruebas permite comprender tanto el avance de la investigación como el error de la formulación inicial sin borrar ninguno de los dos. En el nuevo contraste, «Aunque el proyecto resulte valioso, debe explicar sus criterios de selección.» debe interpretarse dentro de esta cuestión: Síntesis crítica y control expresivo integral. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.disc.responsabilidad-fuentes. Recupera la semana 16, «Lo probable no es lo probado». Material de contraste: La noticia afirmaba que la dirección del teatro habría recibido una advertencia sobre el deterioro del escenario. El condicional ocupaba un lugar estratégico: permitía publicar una acusación relevante sin presentarla como confirmada. Sin embargo, el titular omitía la fuente y el cuerpo del texto solo mencionaba personas conocedoras del asunto. El lector podía recordar el contenido de la acusación y olvidar la cautela verbal. La distancia gramatical no garantiza una distancia equivalente en la memoria pública. Formulación de trabajo: El registro confirma la recepción, pero no quién leyó el documento.\n\nRecupera «Responsabilidad de atribución» a partir del material suministrado. Produce una versión de 80–100 palabras que haga visible una relación implícita, mantenga una reserva y responda a una objeción. Explica cuál es tu aportación y cuál procede de la fuente. Contraste nuevo suministrado de «Checkpoint final: una memoria discutida»: «Aunque el proyecto resulte valioso, debe explicar sus criterios de selección.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La primera noticia atribuyó a la dirección un conocimiento que la evidencia entonces disponible no demostraba. El registro confirmaba la recepción de un envío; el correo incorporado después confirma que la oficina disponía del informe adjunto. Sigue pendiente establecer quién accedió a él y cómo se distribuyó. Rectificamos el alcance del titular y mantenemos la investigación sobre el procedimiento interno. La cautela del condicional no sustituía esa distinción. Publicar la cronología de las pruebas permite comprender tanto el avance de la investigación como el error de la formulación inicial sin borrar ninguno de los dos. En el nuevo contraste, «Aunque el proyecto resulte valioso, debe explicar sus criterios de selección.» debe interpretarse dentro de esta cuestión: Síntesis crítica y control expresivo integral. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.voc.certeza-documental. Recupera la semana 16, «Lo probable no es lo probado». Unidades disponibles: evidencialidad (marca de la base informativa de un enunciado); corroborar (confirmar con evidencia adicional); conjetura (explicación provisional no demostrada); atribución anónima (referencia a una fuente no identificada públicamente); desmentir (negar o refutar una afirmación); rectificación (corrección pública de información); grado de certeza (intensidad del compromiso con una afirmación); indicio convergente (señal que coincide con otras hacia una hipótesis). Pasaje: La noticia afirmaba que la dirección del teatro habría recibido una advertencia sobre el deterioro del escenario. El condicional ocupaba un lugar estratégico: permitía publicar una acusación relevante sin presentarla como confirmada. Sin embargo, el titular omitía la fuente y el cuerpo del texto solo mencionaba personas conocedoras del asunto. El lector podía recordar el contenido de la acusación y olvidar la cautela verbal. La distancia gramatical no garantiza una distancia equivalente en la memoria pública.\n\nRecupera «Léxico de la prueba»: selecciona dos unidades del material, explica por qué no son intercambiables y redacta una frase sobre el caso con cada una. Contrasta una elección precisa con otra que introduciría una evaluación o un alcance distintos. Contraste nuevo suministrado de «Checkpoint final: una memoria discutida»: «Aunque el proyecto resulte valioso, debe explicar sus criterios de selección.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La primera noticia atribuyó a la dirección un conocimiento que la evidencia entonces disponible no demostraba. El registro confirmaba la recepción de un envío; el correo incorporado después confirma que la oficina disponía del informe adjunto. Sigue pendiente establecer quién accedió a él y cómo se distribuyó. Rectificamos el alcance del titular y mantenemos la investigación sobre el procedimiento interno. La cautela del condicional no sustituía esa distinción. Publicar la cronología de las pruebas permite comprender tanto el avance de la investigación como el error de la formulación inicial sin borrar ninguno de los dos. En este contraste, «evidencialidad» nombra marca de la base informativa de un enunciado; «corroborar», confirmar con evidencia adicional. La elección debe conservar esa diferencia. En el nuevo contraste, «Aunque el proyecto resulte valioso, debe explicar sus criterios de selección.» debe interpretarse dentro de esta cuestión: Síntesis crítica y control expresivo integral. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.pron.reserva-epistemica. Recupera la semana 16, «Lo probable no es lo probado». Textos para ensayo oral: «La oficina habría recibido el informe, según una fuente anónima.» / «El registro confirma la recepción de un envío.».\n\nMarca grupos fónicos, un foco y una pausa en cada texto. Produce dos lecturas propias y pide a tu interlocutor que explique el efecto. Recupera «Prosodia de la reserva» sin atribuir una intención segura ni una variedad a la síntesis. Si trabajas a solas, describe la intención y deja su comprobación perceptiva para clase. Contraste nuevo suministrado de «Checkpoint final: una memoria discutida»: «Aunque el proyecto resulte valioso, debe explicar sus criterios de selección.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Atribuye la fuente antes de la afirmación y conserva la reserva en un grupo propio. No susurres según una fuente anónima mientras enfatizas una acusación todavía no corroborada. Un ensayo defendible conserva esta distinción del caso: La modalidad de cautela no sustituye la identificación de la evidencia y su alcance. El resultado perceptivo debe contrastarse con un oyente; no queda acreditado por escribir una marca de pausa. En el nuevo contraste, «Aunque el proyecto resulte valioso, debe explicar sus criterios de selección.» debe interpretarse dentro de esta cuestión: Síntesis crítica y control expresivo integral. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.wri.rectificacion. Recupera la semana 16, «Lo probable no es lo probado». Modelo parcial que puedes transformar: La primera noticia atribuyó a la dirección un conocimiento que la evidencia entonces disponible no demostraba. El registro confirmaba la recepción de un envío; el correo incorporado después confirma que la oficina disponía del informe adjunto. Sigue pendiente establecer quién accedió a él y cómo se distribuyó. Rectificamos el alcance del titular y mantenemos la investigación sobre el procedimiento interno. La cautela del condicional no sustituía esa distinción. Publicar la cronología de las pruebas permite comprender tanto el avance de la investigación como el error de la formulación inicial sin borrar ninguno de los dos.\n\nRecupera «Rectificación periodística» mediante una nueva versión de 120–160 palabras de este fragmento para otro destinatario. Mantén la reserva principal, cambia el orden de la información y justifica dos decisiones. Si el objetivo exige un texto completo, retoma además tu entrega original de esa semana y revisa su conjunto. Contraste nuevo suministrado de «Checkpoint final: una memoria discutida»: «Aunque el proyecto resulte valioso, debe explicar sus criterios de selección.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La primera noticia atribuyó a la dirección un conocimiento que la evidencia entonces disponible no demostraba. El registro confirmaba la recepción de un envío; el correo incorporado después confirma que la oficina disponía del informe adjunto. Sigue pendiente establecer quién accedió a él y cómo se distribuyó. Rectificamos el alcance del titular y mantenemos la investigación sobre el procedimiento interno. La cautela del condicional no sustituía esa distinción. Publicar la cronología de las pruebas permite comprender tanto el avance de la investigación como el error de la formulación inicial sin borrar ninguno de los dos. Para una persona ajena al expediente, la información decisiva que debe seguir visible es: La modalidad de cautela no sustituye la identificación de la evidencia y su alcance. En el nuevo contraste, «Aunque el proyecto resulte valioso, debe explicar sus criterios de selección.» debe interpretarse dentro de esta cuestión: Síntesis crítica y control expresivo integral. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.gram.agencia-reparacion. Recupera la semana 17, «Pedir disculpas y reparar». Contrastes suministrados: Lamentamos haber publicado una información incompleta. / Se omitió el aviso; la coordinación asume esa omisión. / Si alguien se sintió excluido, lo sentimos: la condición debilita el reconocimiento.\n\nExplica la estructura y el cambio de interpretación pertinentes para «Agencia y reconocimiento». Produce una cuarta formulación y señala expresamente qué referente, condición o perspectiva temporal conserva. Contraste nuevo suministrado de «Checkpoint final: una memoria discutida»: «Aunque el proyecto resulte valioso, debe explicar sus criterios de selección.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Sentimos que se haya sentido excluida desplaza el objeto de la disculpa hacia la reacción del destinatario. Lamentamos haber omitido la información identifica una actuación propia. Una pasiva refleja como se cometieron errores puede ser pertinente si el agente es desconocido, pero también ocultarlo cuando sí se conoce. La reparación combina reconocimiento, explicación sin excusa, acción y seguimiento; no exige que la persona afectada conceda perdón para recibir una solución. Aplicación al caso: Omitimos en el anuncio principal un requisito de entrega que figuraba en las bases completas. Esa diferencia afectó a la preparación de las solicitudes. Reabriremos el plazo para quienes cumplan las condiciones originales y conservaremos las candidaturas ya presentadas. La explicación del fallo de coordinación se publicará con medidas preventivas; no sustituye la reparación. Los gastos de envío podrán reclamarse por el canal indicado y recibirán una respuesta motivada en la fecha anunciada, sin que hoy podamos garantizar su reembolso. Esta comunicación no exige que las personas afectadas den el asunto por cerrado. En el nuevo contraste, «Aunque el proyecto resulte valioso, debe explicar sus criterios de selección.» debe interpretarse dentro de esta cuestión: Síntesis crítica y control expresivo integral. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.fun.disculpa-reparacion. Recupera la semana 17, «Pedir disculpas y reparar». Material de contraste: La convocatoria de una beca exigía entregar una carpeta presencialmente, aunque el anuncio principal solo mencionaba el formulario digital. Varias personas quedaron fuera por no cumplir un requisito que descubrieron después del cierre. La institución publicó una disculpa: «Sentimos que algunas personas se hayan sentido desinformadas». El texto no reconocía todavía la omisión. Presentaba como experiencia subjetiva lo que podía comprobarse comparando dos versiones de las bases. Formulación de trabajo: Se omitió el aviso; la coordinación asume esa omisión.\n\nRecupera «Disculpa y reparación» a partir del material suministrado. Produce una versión de 80–100 palabras que haga visible una relación implícita, mantenga una reserva y responda a una objeción. Explica cuál es tu aportación y cuál procede de la fuente. Contraste nuevo suministrado de «Checkpoint final: una memoria discutida»: «Aunque el proyecto resulte valioso, debe explicar sus criterios de selección.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Omitimos en el anuncio principal un requisito de entrega que figuraba en las bases completas. Esa diferencia afectó a la preparación de las solicitudes. Reabriremos el plazo para quienes cumplan las condiciones originales y conservaremos las candidaturas ya presentadas. La explicación del fallo de coordinación se publicará con medidas preventivas; no sustituye la reparación. Los gastos de envío podrán reclamarse por el canal indicado y recibirán una respuesta motivada en la fecha anunciada, sin que hoy podamos garantizar su reembolso. Esta comunicación no exige que las personas afectadas den el asunto por cerrado. En el nuevo contraste, «Aunque el proyecto resulte valioso, debe explicar sus criterios de selección.» debe interpretarse dentro de esta cuestión: Síntesis crítica y control expresivo integral. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.pron.serenidad-no-condescendiente. Recupera la semana 17, «Pedir disculpas y reparar». Textos para ensayo oral: «Lamentamos haber omitido el requisito.» / «Lamentamos que se hayan sentido desinformados.».\n\nMarca grupos fónicos, un foco y una pausa en cada texto. Produce dos lecturas propias y pide a tu interlocutor que explique el efecto. Recupera «Serenidad y cortesía» sin atribuir una intención segura ni una variedad a la síntesis. Si trabajas a solas, describe la intención y deja su comprobación perceptiva para clase. Contraste nuevo suministrado de «Checkpoint final: una memoria discutida»: «Aunque el proyecto resulte valioso, debe explicar sus criterios de selección.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Ensaya una primera persona clara y evita enfatizar vosotros como si el problema fuera la reacción ajena. Deja una pausa para la respuesta: no uses un cierre melódico para impedir que continúe la queja. Un ensayo defendible conserva esta distinción del caso: Una disculpa responsable reconoce la actuación y separa reparación, explicación y asuntos pendientes. El resultado perceptivo debe contrastarse con un oyente; no queda acreditado por escribir una marca de pausa. En el nuevo contraste, «Aunque el proyecto resulte valioso, debe explicar sus criterios de selección.» debe interpretarse dentro de esta cuestión: Síntesis crítica y control expresivo integral. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.wri.comunicado-reparacion. Recupera la semana 17, «Pedir disculpas y reparar». Modelo parcial que puedes transformar: Omitimos en el anuncio principal un requisito de entrega que figuraba en las bases completas. Esa diferencia afectó a la preparación de las solicitudes. Reabriremos el plazo para quienes cumplan las condiciones originales y conservaremos las candidaturas ya presentadas. La explicación del fallo de coordinación se publicará con medidas preventivas; no sustituye la reparación. Los gastos de envío podrán reclamarse por el canal indicado y recibirán una respuesta motivada en la fecha anunciada, sin que hoy podamos garantizar su reembolso. Esta comunicación no exige que las personas afectadas den el asunto por cerrado.\n\nRecupera «Comunicado de reparación» mediante una nueva versión de 120–160 palabras de este fragmento para otro destinatario. Mantén la reserva principal, cambia el orden de la información y justifica dos decisiones. Si el objetivo exige un texto completo, retoma además tu entrega original de esa semana y revisa su conjunto. Contraste nuevo suministrado de «Checkpoint final: una memoria discutida»: «Aunque el proyecto resulte valioso, debe explicar sus criterios de selección.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Omitimos en el anuncio principal un requisito de entrega que figuraba en las bases completas. Esa diferencia afectó a la preparación de las solicitudes. Reabriremos el plazo para quienes cumplan las condiciones originales y conservaremos las candidaturas ya presentadas. La explicación del fallo de coordinación se publicará con medidas preventivas; no sustituye la reparación. Los gastos de envío podrán reclamarse por el canal indicado y recibirán una respuesta motivada en la fecha anunciada, sin que hoy podamos garantizar su reembolso. Esta comunicación no exige que las personas afectadas den el asunto por cerrado. Para una persona ajena al expediente, la información decisiva que debe seguir visible es: Una disculpa responsable reconoce la actuación y separa reparación, explicación y asuntos pendientes. En el nuevo contraste, «Aunque el proyecto resulte valioso, debe explicar sus criterios de selección.» debe interpretarse dentro de esta cuestión: Síntesis crítica y control expresivo integral. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.gram.temporalidad-perspectiva. Recupera la semana 18, «Quien cuenta también se cuenta». Contrastes suministrados: Ya había cerrado la puerta cuando oyó la llamada. / Habría vuelto antes si hubiera entendido el mensaje. / Claro que todos estaban de acuerdo. ¿Quién iba a oponerse ahora?\n\nExplica la estructura y el cambio de interpretación pertinentes para «Temporalidad y perspectiva». Produce una cuarta formulación y señala expresamente qué referente, condición o perspectiva temporal conserva. Contraste nuevo suministrado de «Checkpoint final: una memoria discutida»: «Aunque el proyecto resulte valioso, debe explicar sus criterios de selección.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Un narrador no fiable no tiene por qué mentir deliberadamente: puede interpretar mal, recordar selectivamente o justificarse. El pluscuamperfecto sitúa un hecho anterior al punto narrativo; el condicional compuesto puede expresar una hipótesis retrospectiva. El estilo indirecto libre aproxima la voz del personaje sin una fórmula explícita de cita. Analiza qué cambia entre el hecho, el recuerdo y la explicación actual; una contradicción no siempre se resuelve eligiendo una única versión. Aplicación al caso: La seguridad inicial del narrador se debilita al contrastarla con los gestos familiares y el sobre sin sello. No basta para demostrar una mentira deliberada, pero sí para cuestionar la unanimidad que da por sentada. El pluscuamperfecto sitúa una promesa anterior que su explicación posterior minimiza. La carta de la hermana formula una alternativa, no una prueba de lo que necesariamente habría ocurrido. Su fuerza está en señalar una posibilidad de decisión perdida. El cierre puede ser admisión oblicua y evasión simultáneamente: el personaje se acerca a una responsabilidad mientras evita nombrarla de forma directa. En el nuevo contraste, «Aunque el proyecto resulte valioso, debe explicar sus criterios de selección.» debe interpretarse dentro de esta cuestión: Síntesis crítica y control expresivo integral. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.disc.fiabilidad-narrativa. Recupera la semana 18, «Quien cuenta también se cuenta». Material de contraste: El narrador empieza asegurando que nadie se opuso a vender la casa. Lo recuerda con la tranquilidad de quien cree haber conservado todos los papeles. Después describe a su hermana doblando una carta sin abrirla y a su madre preguntando dos veces por el limonero. Ninguno de esos gestos constituye por sí solo una negativa; juntos, sin embargo, vuelven demasiado cómoda la unanimidad inicial. El relato no nos entrega una mentira demostrada, sino una seguridad que empieza a necesitar más apoyo del que recibe. Formulación de trabajo: Habría vuelto antes si hubiera entendido el mensaje.\n\nRecupera «Fiabilidad narrativa» a partir del material suministrado. Produce una versión de 80–100 palabras que haga visible una relación implícita, mantenga una reserva y responda a una objeción. Explica cuál es tu aportación y cuál procede de la fuente. Contraste nuevo suministrado de «Checkpoint final: una memoria discutida»: «Aunque el proyecto resulte valioso, debe explicar sus criterios de selección.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La seguridad inicial del narrador se debilita al contrastarla con los gestos familiares y el sobre sin sello. No basta para demostrar una mentira deliberada, pero sí para cuestionar la unanimidad que da por sentada. El pluscuamperfecto sitúa una promesa anterior que su explicación posterior minimiza. La carta de la hermana formula una alternativa, no una prueba de lo que necesariamente habría ocurrido. Su fuerza está en señalar una posibilidad de decisión perdida. El cierre puede ser admisión oblicua y evasión simultáneamente: el personaje se acerca a una responsabilidad mientras evita nombrarla de forma directa. En el nuevo contraste, «Aunque el proyecto resulte valioso, debe explicar sus criterios de selección.» debe interpretarse dentro de esta cuestión: Síntesis crítica y control expresivo integral. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.read.lectura-contrapunto. Recupera la semana 18, «Quien cuenta también se cuenta». Pasajes que debes contrastar: El narrador empieza asegurando que nadie se opuso a vender la casa. Lo recuerda con la tranquilidad de quien cree haber conservado todos los papeles. Después describe a su hermana doblando una carta sin abrirla y a su madre preguntando dos veces por el limonero. Ninguno de esos gestos constituye por sí solo una negativa; juntos, sin embargo, vuelven demasiado cómoda la unanimidad inicial. El relato no nos entrega una mentira demostrada, sino una seguridad que empieza a necesitar más apoyo del que recibe.\n\nLa docente pidió reescribir la escena desde una tercera persona que solo pudiera observar acciones. La versión resultante eliminaba explicaciones interiores, pero no se volvía neutral: seguía eligiendo qué gestos mostrar y en qué orden. Una descripción del sobre antes de la firma orientaba al lector de modo distinto que su aparición al final. El ejercicio permitió separar tres decisiones que suelen confundirse: quién habla, quién percibe y cuándo recibe información el lector. La defensa de una interpretación debía nombrar cuál de ellas producía el efecto discutido. No bastaba afirmar que el autor quería sorprender. Había que explicar qué expectativa se construía, mediante qué omisión y cómo el dato posterior obligaba a revisar una relación ya leída. Esa revisión podía modificar la responsabilidad atribuida sin resolver por completo las motivaciones del personaje.\n\nRelee estos pasajes y recupera «Lectura en contrapunto». Formula una interpretación, un detalle que la apoye y una lectura rival. Señala qué dato del expediente completo necesitarías para reforzar o limitar tu conclusión. Contraste nuevo suministrado de «Checkpoint final: una memoria discutida»: «Aunque el proyecto resulte valioso, debe explicar sus criterios de selección.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La seguridad inicial del narrador se debilita al contrastarla con los gestos familiares y el sobre sin sello. No basta para demostrar una mentira deliberada, pero sí para cuestionar la unanimidad que da por sentada. El pluscuamperfecto sitúa una promesa anterior que su explicación posterior minimiza. La carta de la hermana formula una alternativa, no una prueba de lo que necesariamente habría ocurrido. Su fuerza está en señalar una posibilidad de decisión perdida. El cierre puede ser admisión oblicua y evasión simultáneamente: el personaje se acerca a una responsabilidad mientras evita nombrarla de forma directa. En el nuevo contraste, «Aunque el proyecto resulte valioso, debe explicar sus criterios de selección.» debe interpretarse dentro de esta cuestión: Síntesis crítica y control expresivo integral. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.spk.defensa-interpretacion. Recupera la semana 18, «Quien cuenta también se cuenta». Situación para retomar: Presenta dos interpretaciones del cierre, lee un fragmento con entonación deliberadamente abierta y responde a quien exige clasificar al narrador simplemente como mentiroso o inocente. Objeción suministrada: El sobre aparece enviado y sellado.\n\nRecupera «Defensa de una interpretación». Haz una intervención de dos minutos con tesis y reserva; responde durante un minuto a la objeción. Pide una reformulación de tu idea al interlocutor antes de evaluar si fuiste claro. Contraste nuevo suministrado de «Checkpoint final: una memoria discutida»: «Aunque el proyecto resulte valioso, debe explicar sus criterios de selección.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La seguridad inicial del narrador se debilita al contrastarla con los gestos familiares y el sobre sin sello. No basta para demostrar una mentira deliberada, pero sí para cuestionar la unanimidad que da por sentada. El pluscuamperfecto sitúa una promesa anterior que su explicación posterior minimiza. La carta de la hermana formula una alternativa, no una prueba de lo que necesariamente habría ocurrido. Su fuerza está en señalar una posibilidad de decisión perdida. El cierre puede ser admisión oblicua y evasión simultáneamente: el personaje se acerca a una responsabilidad mientras evita nombrarla de forma directa. En el nuevo contraste, «Aunque el proyecto resulte valioso, debe explicar sus criterios de selección.» debe interpretarse dentro de esta cuestión: Síntesis crítica y control expresivo integral. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.disc.compresion-jerarquica. Recupera la semana 19, «Lo esencial bajo presión de tiempo». Material de contraste: La comisión recibió un informe de cuarenta páginas sobre la conversión de una antigua estación en centro de barrio. La arquitecta tenía diez minutos para presentarlo; al llegar, le comunicaron que dispondría de tres. La reducción no era solo cuantitativa. Debía decidir qué relación entre datos conservar para que el público no confundiera una posibilidad técnica con una decisión política ya tomada. Leer más deprisa las mismas notas habría trasladado esa decisión a la capacidad de escucha de la audiencia. Formulación de trabajo: Dicho esto, la apertura depende de una evaluación pendiente.\n\nRecupera «Compresión con jerarquía» a partir del material suministrado. Produce una versión de 80–100 palabras que haga visible una relación implícita, mantenga una reserva y responda a una objeción. Explica cuál es tu aportación y cuál procede de la fuente. Contraste nuevo suministrado de «Checkpoint final: una memoria discutida»: «Aunque el proyecto resulte valioso, debe explicar sus criterios de selección.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La comisión decide hoy si financia un estudio, no si inicia obras. El equipo recomienda explorar la segunda opción para un uso anual, sujeta a financiación. La primera limita la actividad invernal; la tercera depende de ingresos comerciales aún no estudiados. En una exposición breve conservaré esas diferencias y omitiré los detalles de materiales. La consulta patrimonial debe incorporarse al siguiente encargo, porque conservar el edificio no equivale a contar su historia. La frase del acta mantendrá la condición presupuestaria para que la circulación posterior del resumen no convierta una recomendación en una aprobación. En el nuevo contraste, «Aunque el proyecto resulte valioso, debe explicar sus criterios de selección.» debe interpretarse dentro de esta cuestión: Síntesis crítica y control expresivo integral. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.pron.foco-compresion. Recupera la semana 19, «Lo esencial bajo presión de tiempo». Textos para ensayo oral: «La comisión autoriza estudiar la financiación.» / «La comisión autoriza iniciar las obras.».\n\nMarca grupos fónicos, un foco y una pausa en cada texto. Produce dos lecturas propias y pide a tu interlocutor que explique el efecto. Recupera «Foco en la síntesis oral» sin atribuir una intención segura ni una variedad a la síntesis. Si trabajas a solas, describe la intención y deja su comprobación perceptiva para clase. Contraste nuevo suministrado de «Checkpoint final: una memoria discutida»: «Aunque el proyecto resulte valioso, debe explicar sus criterios de selección.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Ensaya treinta segundos con menos ejemplos y velocidad estable. Destaca estudiar frente a iniciar; la prominencia sobre la acción autorizada impide que el público complete una decisión distinta. Un ensayo defendible conserva esta distinción del caso: La compresión conserva las relaciones que delimitan una decisión, aunque suprima ejemplos. El resultado perceptivo debe contrastarse con un oyente; no queda acreditado por escribir una marca de pausa. En el nuevo contraste, «Aunque el proyecto resulte valioso, debe explicar sus criterios de selección.» debe interpretarse dentro de esta cuestión: Síntesis crítica y control expresivo integral. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.fun.adaptacion-inmediata. Recupera la semana 19, «Lo esencial bajo presión de tiempo». Material de contraste: La comisión recibió un informe de cuarenta páginas sobre la conversión de una antigua estación en centro de barrio. La arquitecta tenía diez minutos para presentarlo; al llegar, le comunicaron que dispondría de tres. La reducción no era solo cuantitativa. Debía decidir qué relación entre datos conservar para que el público no confundiera una posibilidad técnica con una decisión política ya tomada. Leer más deprisa las mismas notas habría trasladado esa decisión a la capacidad de escucha de la audiencia. Formulación de trabajo: Dicho esto, la apertura depende de una evaluación pendiente.\n\nRecupera «Adaptación durante la interacción» a partir del material suministrado. Produce una versión de 80–100 palabras que haga visible una relación implícita, mantenga una reserva y responda a una objeción. Explica cuál es tu aportación y cuál procede de la fuente. Contraste nuevo suministrado de «Checkpoint final: una memoria discutida»: «Aunque el proyecto resulte valioso, debe explicar sus criterios de selección.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La comisión decide hoy si financia un estudio, no si inicia obras. El equipo recomienda explorar la segunda opción para un uso anual, sujeta a financiación. La primera limita la actividad invernal; la tercera depende de ingresos comerciales aún no estudiados. En una exposición breve conservaré esas diferencias y omitiré los detalles de materiales. La consulta patrimonial debe incorporarse al siguiente encargo, porque conservar el edificio no equivale a contar su historia. La frase del acta mantendrá la condición presupuestaria para que la circulación posterior del resumen no convierta una recomendación en una aprobación. En el nuevo contraste, «Aunque el proyecto resulte valioso, debe explicar sus criterios de selección.» debe interpretarse dentro de esta cuestión: Síntesis crítica y control expresivo integral. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.spk.sintesis-tiempo. Recupera la semana 19, «Lo esencial bajo presión de tiempo». Situación para retomar: Expón durante cuatro minutos; repite en noventa y treinta segundos. Atiende una interrupción sobre patrimonio y adapta el cierre a un público que pregunta por la fecha de apertura. Objeción suministrada: Se autorizó iniciar las obras inmediatamente.\n\nRecupera «Síntesis con tiempo limitado». Haz una intervención de dos minutos con tesis y reserva; responde durante un minuto a la objeción. Pide una reformulación de tu idea al interlocutor antes de evaluar si fuiste claro. Contraste nuevo suministrado de «Checkpoint final: una memoria discutida»: «Aunque el proyecto resulte valioso, debe explicar sus criterios de selección.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "La comisión decide hoy si financia un estudio, no si inicia obras. El equipo recomienda explorar la segunda opción para un uso anual, sujeta a financiación. La primera limita la actividad invernal; la tercera depende de ingresos comerciales aún no estudiados. En una exposición breve conservaré esas diferencias y omitiré los detalles de materiales. La consulta patrimonial debe incorporarse al siguiente encargo, porque conservar el edificio no equivale a contar su historia. La frase del acta mantendrá la condición presupuestaria para que la circulación posterior del resumen no convierta una recomendación en una aprobación. En el nuevo contraste, «Aunque el proyecto resulte valioso, debe explicar sus criterios de selección.» debe interpretarse dentro de esta cuestión: Síntesis crítica y control expresivo integral. La semejanza de función no convierte ambos casos en hechos equivalentes.",
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
    "task": "Entrega un dossier final de 650–800 palabras: ensayo crítico, comunicado claro y propuesta de revisión. Integra lectura y audio, contrasta cuatro voces, conserva la discrepancia documental y justifica dos elecciones de estilo para audiencias distintas.",
    "context": "Modelo completo de una respuesta posible. Contrasta su organización y sus reservas; tu entrega debe desarrollar una voz propia, no reproducirlo.",
    "steps": [
      "Traza un mapa de fuentes: afirmación, prueba, límite y destinatario.",
      "Decide el orden según la acción que necesita realizar tu lector; reserva espacio para una objeción fuerte.",
      "Redacta sin copiar el modelo. Integra al menos dos fuentes y atribuye sus diferencias.",
      "Revisa el alcance de tres formulaciones, lee un párrafo en voz alta y explica dos cambios de estilo."
    ],
    "useLanguage": [
      "El archivo conserva el documento; no confirma por sí solo su interpretación.",
      "Aunque el proyecto resulte valioso, debe explicar sus criterios de selección.",
      "La comisión reconoce la omisión y propone una revisión, todavía pendiente de aprobación.",
      "criterio curatorial",
      "memoria pública",
      "omisión significativa"
    ],
    "model": [
      "Una memoria revisable: dossier para la comisión de la exposición",
      "La exposición sobre la fábrica ofrece materiales valiosos y, al mismo tiempo, una representación insuficiente de ciertas trayectorias laborales. Reconocer ambas afirmaciones permite discutir una revisión sin convertir el conflicto en una elección entre conservar intacto el proyecto o destruirlo. El problema no se limita a añadir testimonios: afecta también a las categorías con las que se ha definido quién forma parte de aquella historia y a la narrativa que organiza sus materiales.",
      "La comisaria afirma que se incluyeron los testimonios recibidos a tiempo. Ese criterio describe el cierre de una recepción, pero no demuestra igualdad de oportunidades para participar. La institución reconoce que la convocatoria no llegó suficientemente a determinadas redes laborales. La disculpa debe nombrar esa omisión sin condicionar su validez a que las personas afectadas se hayan sentido excluidas. La explicación del procedimiento puede ayudar a prevenir la repetición, pero no sustituye la apertura de vías nuevas de participación.",
      "El informe llama amplia a la representación por la variedad de oficios. La asociación pregunta por contratos, edades y trayectorias migratorias. No están midiendo exactamente la misma amplitud. Una síntesis responsable debe hacer visible esa diferencia antes de decidir si las fuentes se contradicen. La crónica, por su parte, ironiza sobre una memoria que no incomoda a nadie. La frase señala una posible comodidad narrativa, pero no demuestra por sí sola una exclusión deliberada. El brillo de la ironía no debe ocupar el lugar de la evidencia sobre intención.",
      "La carta del archivo y el testimonio del encargado requieren una lectura cronológica. La primera anuncia una propuesta; el segundo recuerda una decisión posterior. Falta el acta intermedia que permitiría reconstruir si hubo un cambio. La discrepancia merece investigación y debe conservarse en la explicación pública. No autoriza a llamar mentiroso al testigo ni a afirmar que todos los documentos coinciden. La condición de documento escrito tampoco garantiza que una fuente responda a cualquier pregunta histórica: importa qué registra, cuándo y para quién.",
      "Añadir una sala puede aumentar la presencia de trabajadoras temporales y dejar intacto el relato central que las omitía. La asociación propone revisar el conjunto. Esa objeción no debe reformularse como una exigencia de borrar el trabajo anterior. Una solución posible consiste en examinar qué preguntas organiza cada sección y cómo los nuevos testimonios alteran esas preguntas. La intervención de una participante cuya familia dependía de encargos externos muestra que una voz nueva puede exigir revisar el límite entre dentro y fuera de la fábrica, no simplemente ocupar un espacio disponible.",
      "Proponemos publicar los criterios iniciales, abrir entrevistas con consentimiento y explicar los usos previstos de los testimonios. El grupo asesor debe tener un mandato claro y discutir representación, selección y contexto. Su remuneración depende todavía de financiación: el comunicado debe conservar esa condición y señalar quién decidirá y en qué momento. No corresponde presentar una disposición a negociar como presupuesto aprobado. Tampoco debe exigirse a la asociación retirar toda crítica para participar en la revisión.",
      "La dirección necesita un cierre operativo. Puede fijarse una versión fechada de la exposición y un mecanismo de incorporación posterior. Una selección finita no tiene que fingir una historia completa. A la inversa, reconocer ausencias no impide construir un relato defendible. Su legitimidad depende de mostrar preguntas, fuentes, decisiones y límites. La evaluación posterior deberá examinar tanto los materiales incorporados como los cambios de interpretación, para evitar que el número de testimonios añadidos sustituya la discusión de su función.",
      "Comunicado propuesto: la exposición iniciará una revisión de sus criterios y de la participación. La institución reconoce que la convocatoria no llegó adecuadamente a ciertas redes laborales. Publicará los criterios iniciales y abrirá nuevas entrevistas. La creación remunerada del grupo asesor está sujeta a financiación. La revisión conservará preguntas históricas abiertas y explicará los desacuerdos documentales, sin prometer una memoria única ni definitiva.",
      "Dos elecciones de estilo sostienen este dossier. Se emplea reconoce para atribuir una aceptación explícita de la omisión, y propone para acciones todavía condicionadas. El cierre evita la imagen de una ciudad que por fin se reconoce entera. Prefiere invitar a examinar una versión revisada. Esa renuncia a la totalidad retórica no debilita la voz: delimita una responsabilidad que las distintas audiencias pueden comprender, discutir y comprobar."
    ],
    "checklist": [
      "La tesis tiene alcance preciso y pruebas identificables.",
      "No convierto una propuesta en decisión ni una inferencia en dato.",
      "El registro responde al destinatario y no borra condiciones.",
      "La cohesión conserva referentes y voces sin repeticiones inútiles.",
      "La revisión explica qué cambia para quien lee."
    ],
    "words": [
      650,
      800
    ]
  },
  "speaking": {
    "intro": "Planifica con palabras clave, no un guion leído. La grabación, si la usas, permanece local; el navegador no califica pronunciación ni calidad oral.",
    "tasks": [
      {
        "title": "Exposición situada",
        "prompt": "Defiende el dossier durante ocho minutos, atiende preguntas hostiles y literales, reformula en noventa segundos para nuevos participantes y cierra con acuerdos, condiciones y una pregunta histórica abierta.",
        "prep": [
          "Anota tesis, dos pruebas, una objeción y una reserva.",
          "Marca dos focos prosódicos y un punto donde cambiarás de registro."
        ],
        "seconds": 480,
        "model": "La exposición puede reconocer su valor y revisar una representación insuficiente sin presentar ambas acciones como incompatibles. La convocatoria no llegó de manera adecuada a ciertas redes laborales; esa omisión requiere reconocimiento y nuevas vías de participación. La carta y el testimonio se refieren a momentos distintos y no permiten todavía cerrar la discrepancia. Publicar los criterios está acordado; la remuneración del grupo asesor depende de financiación. La revisión narrativa debe discutir cómo se integran las nuevas voces, no solo dónde se añaden. Un cierre responsable conserva esa cuestión y permite comprobar los próximos compromisos.",
        "selfCheck": [
          "La condición principal se oye con claridad.",
          "Distingo mi interpretación de las voces citadas.",
          "Puedo reparar una frase sin abandonar el argumento."
        ]
      },
      {
        "title": "Interacción y reformulación",
        "prompt": "Tu interlocutor sostiene: «La sala añadida resuelve por sí sola toda objeción narrativa.». Responde sin caricaturizarlo, formula dos preguntas de seguimiento y pide que reformule tu condición principal. Después resume para una persona que no conoce el expediente de Checkpoint final: una memoria discutida.",
        "prep": [
          "Prepara una concesión real y una corrección de alcance.",
          "Anticipa qué término deberás explicar sin jerga."
        ],
        "seconds": 240,
        "model": "La revisión responsable integra nuevas voces, criterios explícitos y límites documentales sin simular consenso. La remuneración del grupo asesor depende de financiación.",
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
        "task": "Presenta tu decisión más discutible sobre Checkpoint final: una memoria discutida y pide un contraejemplo que la ponga a prueba.",
        "phrases": [
          "Mi lectura se apoya en…",
          "Cambiaría de interpretación si…"
        ]
      },
      {
        "move": "Reformula",
        "task": "Explica el límite «La remuneración del grupo asesor depende de financiación.» a otro público sin rebajar su importancia.",
        "phrases": [
          "En otros términos…",
          "Esta versión conserva…"
        ]
      },
      {
        "move": "Negocia",
        "task": "Responde a la objeción «La carta basta para demostrar que el testigo miente.» y acuerda una formulación que ambos puedan defender.",
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
        "q": "Balance de Checkpoint final: una memoria discutida: ¿qué conclusión conserva el alcance?",
        "options": [
          "La revisión responsable integra nuevas voces, criterios explícitos y límites documentales sin simular consenso.",
          "La sala añadida resuelve por sí sola toda objeción narrativa."
        ],
        "answer": 0,
        "why": "Relaciona el texto principal con el documento complementario."
      },
      {
        "type": "choice",
        "q": "En una revisión final de Checkpoint final: una memoria discutida, ¿qué afirmación debe rechazarse?",
        "options": [
          "La remuneración del grupo asesor depende de financiación.",
          "La remuneración del grupo ya tiene financiación."
        ],
        "answer": 1,
        "why": "La primera opción contradice la condición explícita."
      },
      {
        "type": "listen",
        "q": "Escucha esta síntesis de Checkpoint final: una memoria discutida. ¿Qué interpretación mantiene?",
        "options": [
          "La carta basta para demostrar que el testigo miente.",
          "Una corrección añadida como apéndice puede dejar intacto el relato que produjo la omisión."
        ],
        "answer": 1,
        "why": "La relación expresada limita una generalización.",
        "audio": "Una corrección añadida como apéndice puede dejar intacto el relato que produjo la omisión.",
        "voice": "es-ES-f"
      },
      {
        "type": "gap",
        "q": "En «Checkpoint final: una memoria discutida», ¿qué unidad expresa «principio de selección y presentación de materiales»? ___ .",
        "answers": [
          [
            "criterio curatorial"
          ]
        ],
        "hint": "principio de selección y presentación de materiales",
        "why": "Recupera la unidad a partir de su función, no de una traducción."
      },
      {
        "type": "gap",
        "q": "Para nombrar «relato compartido y discutido sobre el pasado» en este expediente usamos ___ .",
        "answers": [
          [
            "memoria pública"
          ]
        ],
        "why": "La distinción léxica debe conservarse al mediar."
      },
      {
        "type": "error",
        "sentence": "La comisión reconoce de que la convocatoria fue insuficiente.",
        "answers": [
          "La comisión reconoce que la convocatoria fue insuficiente."
        ],
        "why": "Reconocer introduce complemento directo sin de."
      },
      {
        "type": "transform",
        "source": "El grupo asesor será remunerado. Hace falta obtener financiación.",
        "instruction": "Une ambas proposiciones con «siempre que» y «se obtenga».",
        "answers": [
          "El grupo asesor será remunerado siempre que se obtenga financiación."
        ],
        "why": "Reservar la financiación: conserva la relación solicitada y compara qué se hace explícito."
      },
      {
        "type": "open",
        "prompt": "Cierre de «Checkpoint final: una memoria discutida»: escribe 90–120 palabras para una audiencia nueva. Incluye tesis, condición y una pregunta pendiente; justifica una elección de registro.",
        "model": "La exposición puede reconocer su valor y revisar una representación insuficiente sin presentar ambas acciones como incompatibles. La convocatoria no llegó de manera adecuada a ciertas redes laborales; esa omisión requiere reconocimiento y nuevas vías de participación. La carta y el testimonio se refieren a momentos distintos y no permiten todavía cerrar la discrepancia. Publicar los criterios está acordado; la remuneración del grupo asesor depende de financiación. La revisión narrativa debe discutir cómo se integran las nuevas voces, no solo dónde se añaden. Un cierre responsable conserva esa cuestión y permite comprobar los próximos compromisos.",
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
      "Interpreto síntesis crítica y control expresivo integral en fuentes originales.",
      "Puedo explicar por qué «La sala añadida resuelve por sí sola toda objeción narrativa.» excede la evidencia.",
      "Defiendo y reviso un dossier escrito y oral con destinatario concreto."
    ],
    "review": [
      "Dentro de dos días, reconstruye sin mirar el límite: La remuneración del grupo asesor depende de financiación.",
      "Dentro de una semana, reescribe el cierre para otro público y contrástalo con tu versión inicial.",
      "En clase, pide una objeción a «La revisión responsable integra nuevas voces, criterios explícitos y límites documentales sin simular consenso.» y registra qué cambiarías."
    ]
  }
};
