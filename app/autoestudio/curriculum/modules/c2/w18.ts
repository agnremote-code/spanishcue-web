import type { Module } from "../../types";

/** Material original C2. Audio mediante síntesis; sin acreditación regional. */
export const c2w18: Module = {
  "id": "c2-18",
  "level": "c2",
  "week": 18,
  "kind": "core",
  "title": "Quien cuenta también se cuenta",
  "subtitle": "Perspectiva, temporalidad y narrador no fiable",
  "stop": {
    "place": "Oaxaca",
    "country": "México"
  },
  "minutes": 135,
  "newObjectives": [
    "c2.gram.temporalidad-perspectiva",
    "c2.disc.fiabilidad-narrativa",
    "c2.read.lectura-contrapunto",
    "c2.spk.defensa-interpretacion"
  ],
  "reviewObjectives": [
    "c2.disc.debate-hostil",
    "c2.disc.falacias",
    "c2.voc.negociacion-alto-nivel",
    "c2.pron.control-presion",
    "c2.spk.entrevista-hostil",
    "c2.gram.agencia-reparacion",
    "c2.fun.disculpa-reparacion",
    "c2.pron.serenidad-no-condescendiente",
    "c2.wri.comunicado-reparacion"
  ],
  "prerequisites": [
    "c2-17"
  ],
  "goal": {
    "canDo": "Puedo analizar una voz no fiable mediante temporalidad, documentos y omisiones, sin cerrar toda ambigüedad.",
    "steps": [
      "Lee las fuentes y distingue dato, inferencia y evaluación.",
      "Escucha el intercambio antes de consultar su transcripción.",
      "Aplica perspectiva, temporalidad y narrador no fiable a una decisión comunicativa concreta.",
      "Produce el dossier escrito, revisa una elección y defiéndela oralmente."
    ]
  },
  "theory": {
    "intro": "Los casos, documentos y voces de esta semana son originales y ficticios. La dificultad está en controlar relaciones de significado, no en acumular palabras raras.",
    "parts": [
      {
        "heading": "Perspectiva, temporalidad y narrador no fiable",
        "body": [
          "Un narrador no fiable no tiene por qué mentir deliberadamente: puede interpretar mal, recordar selectivamente o justificarse. El pluscuamperfecto sitúa un hecho anterior al punto narrativo; el condicional compuesto puede expresar una hipótesis retrospectiva. El estilo indirecto libre aproxima la voz del personaje sin una fórmula explícita de cita. Analiza qué cambia entre el hecho, el recuerdo y la explicación actual; una contradicción no siempre se resuelve eligiendo una única versión.",
          "En este caso, La fiabilidad se examina contrastando certeza narrativa, documentos y omisiones. La formulación elegida debe permitir al destinatario reconstruir la diferencia relevante y reconocer qué no se ha demostrado."
        ],
        "examples": [
          {
            "es": "Ya había cerrado la puerta cuando oyó la llamada."
          },
          {
            "es": "Habría vuelto antes si hubiera entendido el mensaje."
          },
          {
            "es": "Claro que todos estaban de acuerdo. ¿Quién iba a oponerse ahora?"
          }
        ],
        "mistakes": [
          {
            "wrong": "Si habría visto el plano, habría pedido aplazar la venta.",
            "right": "Si hubiera visto el plano, habría pedido aplazar la venta.",
            "why": "La condición contrafactual pasada se expresa aquí con pluscuamperfecto de subjuntivo."
          }
        ]
      },
      {
        "heading": "Interpretar, atribuir y revisar en este caso",
        "body": [
          "Querer marcharse no equivale a consentir condiciones de venta que no se conocían. Para defender esa lectura, identifica una formulación y el detalle que la sostiene. Prueba después una explicación rival y señala qué dato necesitarías para preferirla.",
          "La versión para un público nuevo puede cambiar léxico, orden y longitud, pero debe conservar esta condición: El plano aparece en un sobre sin sello. Un cambio de registro que la elimina cambia también el contenido."
        ],
        "examples": [
          {
            "es": "La fiabilidad se examina contrastando certeza narrativa, documentos y omisiones.",
            "note": "Síntesis con alcance delimitado."
          },
          {
            "es": "El relato demuestra una mentira deliberada sin margen de discusión.",
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
        "id": "c2-18-gramatica-alcance",
        "type": "choice",
        "prompt": "Selecciona la interpretación defendible de Quien cuenta también se cuenta.",
        "items": [
          {
            "q": "En el caso de Quien cuenta también se cuenta, ¿qué formulación preserva el alcance?",
            "options": [
              "Desear marcharse implica consentir cualquier condición contractual.",
              "Habría vuelto antes si hubiera entendido el mensaje."
            ],
            "answer": 1,
            "why": "Un narrador no fiable no tiene por qué mentir deliberadamente: puede interpretar mal, recordar selectivamente o justificarse. El pluscuamperfecto sitúa un hecho anterior al punto narrativo; el condicional compuesto puede expresar una hipótesis retrospectiva. El estilo indirecto libre aproxima la voz del personaje sin una fórmula explícita de cita. Analiza qué cambia entre el hecho, el recuerdo y la explicación actual; una contradicción no siempre se resuelve eligiendo una única versión."
          },
          {
            "q": "¿Qué cautela lingüística resulta necesaria al explicar Quien cuenta también se cuenta?",
            "options": [
              "El relato demuestra una mentira deliberada sin margen de discusión.",
              "Querer marcharse no equivale a consentir condiciones de venta que no se conocían."
            ],
            "answer": 1,
            "why": "Relaciona forma, contexto y efecto; evita ampliar una conclusión más allá de su base."
          }
        ]
      },
      {
        "id": "c2-18-gramatica-forma",
        "type": "gap",
        "prompt": "Completa las relaciones gramaticales del caso Quien cuenta también se cuenta.",
        "items": [
          {
            "q": "Ya ___ prometido enviar el contrato cuando lo dejó en la mesa.",
            "answers": [
              [
                "había"
              ]
            ],
            "why": "Un narrador no fiable no tiene por qué mentir deliberadamente: puede interpretar mal, recordar selectivamente o justificarse. El pluscuamperfecto sitúa un hecho anterior al punto narrativo; el condicional compuesto puede expresar una hipótesis retrospectiva. El estilo indirecto libre aproxima la voz del personaje sin una fórmula explícita de cita. Analiza qué cambia entre el hecho, el recuerdo y la explicación actual; una contradicción no siempre se resuelve eligiendo una única versión."
          },
          {
            "q": "Ella habría pedido aplazar la venta si hubiera ___ el plano.",
            "answers": [
              [
                "visto"
              ]
            ],
            "why": "Un narrador no fiable no tiene por qué mentir deliberadamente: puede interpretar mal, recordar selectivamente o justificarse. El pluscuamperfecto sitúa un hecho anterior al punto narrativo; el condicional compuesto puede expresar una hipótesis retrospectiva. El estilo indirecto libre aproxima la voz del personaje sin una fórmula explícita de cita. Analiza qué cambia entre el hecho, el recuerdo y la explicación actual; una contradicción no siempre se resuelve eligiendo una única versión."
          },
          {
            "q": "La focalización determina desde ___ perspectiva se cuenta.",
            "answers": [
              [
                "qué"
              ]
            ],
            "why": "Un narrador no fiable no tiene por qué mentir deliberadamente: puede interpretar mal, recordar selectivamente o justificarse. El pluscuamperfecto sitúa un hecho anterior al punto narrativo; el condicional compuesto puede expresar una hipótesis retrospectiva. El estilo indirecto libre aproxima la voz del personaje sin una fórmula explícita de cita. Analiza qué cambia entre el hecho, el recuerdo y la explicación actual; una contradicción no siempre se resuelve eligiendo una única versión."
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Usa estas unidades para describir diferencias que el caso exige. La definición orienta el uso; contrástala con la frase completa.",
    "groups": [
      {
        "title": "Precisión para Quien cuenta también se cuenta",
        "items": [
          {
            "es": "focalización",
            "note": "selección de información desde una perspectiva"
          },
          {
            "es": "retrospección",
            "note": "vuelta narrativa a un momento anterior"
          },
          {
            "es": "autojustificación",
            "note": "explicación que protege la propia imagen"
          },
          {
            "es": "laguna",
            "note": "ausencia de información en un relato"
          },
          {
            "es": "indirecto libre",
            "note": "voz del personaje sin introducción explícita de cita"
          },
          {
            "es": "fiabilidad",
            "note": "grado de confianza justificable en una voz"
          },
          {
            "es": "contrapunto",
            "note": "contraste organizado entre perspectivas"
          },
          {
            "es": "sesgo retrospectivo",
            "note": "lectura del pasado influida por el desenlace"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "c2-18-lexico",
        "type": "match",
        "prompt": "Relaciona cada unidad con la distinción que aporta al expediente de Quien cuenta también se cuenta.",
        "pairs": [
          {
            "left": "focalización",
            "right": "selección de información desde una perspectiva"
          },
          {
            "left": "retrospección",
            "right": "vuelta narrativa a un momento anterior"
          },
          {
            "left": "autojustificación",
            "right": "explicación que protege la propia imagen"
          },
          {
            "left": "laguna",
            "right": "ausencia de información en un relato"
          },
          {
            "left": "indirecto libre",
            "right": "voz del personaje sin introducción explícita de cita"
          },
          {
            "left": "fiabilidad",
            "right": "grado de confianza justificable en una voz"
          },
          {
            "left": "contrapunto",
            "right": "contraste organizado entre perspectivas"
          },
          {
            "left": "sesgo retrospectivo",
            "right": "lectura del pasado influida por el desenlace"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Lectura que conserva la ambigüedad",
    "explanation": [
      "Lee quizá sin cargarlo de culpabilidad automática. Contrasta una pausa dubitativa y una continuidad defensiva, explicando qué lectura favorece cada una sin confundirla con prueba del argumento.",
      "El audio utiliza síntesis disponible en el navegador: no certifica acento regional, ironía natural ni calidad de pronunciación. Escucha el contenido, ensaya contrastes y comprueba el efecto con una persona. El objetivo es inteligibilidad y control expresivo, no eliminar tu acento."
    ],
    "examples": [
      {
        "es": "Quizá el correo había fallado de otra manera."
      },
      {
        "es": "La carta nunca salió: el sobre no tenía sello."
      }
    ],
    "perceive": {
      "id": "c2-18-percepcion",
      "type": "listen",
      "prompt": "Escucha el contraste antes de leer las opciones en «Quien cuenta también se cuenta».",
      "items": [
        {
          "q": "Escucha la primera formulación sobre Quien cuenta también se cuenta. ¿Qué contenido permite recuperar?",
          "options": [
            "Quizá el correo había fallado de otra manera.",
            "La carta nunca salió: el sobre no tenía sello."
          ],
          "answer": 0,
          "why": "La respuesta depende de las palabras y de su agrupación; no atribuyas a la síntesis una intención o variedad verificada.",
          "audio": "Quizá el correo había fallado de otra manera.",
          "voice": "es-ES-f"
        },
        {
          "q": "Escucha ahora el contraste de Quien cuenta también se cuenta. ¿Qué formulación aparece?",
          "options": [
            "Quizá el correo había fallado de otra manera.",
            "La carta nunca salió: el sobre no tenía sello."
          ],
          "answer": 1,
          "why": "Compara después tus dos lecturas con una persona: una pausa puede favorecer una lectura sin demostrarla.",
          "audio": "La carta nunca salió: el sobre no tenía sello.",
          "voice": "es-ES-m"
        }
      ]
    },
    "produce": [
      {
        "text": "Quizá el correo había fallado de otra manera.",
        "tip": "Marca grupos fónicos y explica qué interpretación favoreces.",
        "voice": "es-ES-f"
      },
      {
        "text": "La carta nunca salió: el sobre no tenía sello.",
        "tip": "Cambia el foco sin cambiar las palabras; pide una interpretación a tu interlocutor.",
        "voice": "es-ES-m"
      },
      {
        "text": "La fiabilidad se examina contrastando certeza narrativa, documentos y omisiones.",
        "tip": "Lee a velocidad cómoda, conserva la reserva y compara tu grabación local con tu intención.",
        "voice": "es-ES-f"
      }
    ]
  },
  "listening": {
    "title": "Mesa de trabajo: Quien cuenta también se cuenta",
    "context": "Dos participantes preparan una intervención sobre el caso. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como variedades regionales verificadas.",
    "speakers": [
      {
        "id": "a",
        "name": "Belén",
        "voice": "es-ES-f",
        "role": "Primera perspectiva"
      },
      {
        "id": "b",
        "name": "Julián",
        "voice": "es-ES-m",
        "role": "Contraste y reformulación"
      }
    ],
    "script": [
      {
        "speaker": "a",
        "text": "Al principio pensé que el narrador mentía. Después me pareció más interesante que hubiera convertido su interpretación en recuerdo. Dice que todos conocían las condiciones y usa esa frase para explicar por qué no envió el contrato. Pero no muestra ninguna conversación donde las condiciones se hayan discutido. Esa ausencia debilita su certeza sin probar una intención de engañar."
      },
      {
        "speaker": "b",
        "text": "La carta de la hermana tampoco debe leerse como acceso directo a lo que habría pasado. Cuando dice habría pedido un aplazamiento, formula una alternativa. Sí prueba que ahora considera relevante la división del jardín. Y muestra que querer marcharse no equivale a aceptar cualquier venta. Esa equivalencia es la que el narrador necesita para conservar su versión."
      },
      {
        "speaker": "a",
        "text": "En mi comentario distinguiré el tiempo de los hechos y el tiempo de la explicación. Ya había prometido enviar el contrato sitúa una obligación anterior; quizá el correo había fallado de otra manera transforma después esa obligación en una imagen ambigua. No quiero llamar poética a la frase sin examinar qué responsabilidad deja sin nombrar."
      },
      {
        "speaker": "b",
        "text": "Para la lectura oral probaría una pausa después de quizá, pero sin hacer que el personaje suene culpable de antemano. Si cargamos demasiado la entonación, resolvemos una ambigüedad que el texto trabaja. En clase podemos interpretar el cierre como admisión y como evasión, y pedir a otra persona que señale qué versión encuentra mejor apoyo. No necesitamos que ambas sean igual de convincentes para reconocer que el lenguaje permite discutirlas con argumentos. Esa diferencia es precisamente lo que hace productivo el intercambio."
      },
      {
        "speaker": "a",
        "text": "Una estudiante propone desconfiar también de la carta. Me parece una objeción útil si no termina en que ninguna fuente sirve. La hermana puede interpretar retrospectivamente, pero la carta aporta una afirmación concreta sobre la información que dice no haber recibido. Comparemos qué sabe cada voz y qué reconoce. No asignemos transparencia automática a un texto por llevar fecha y firma."
      },
      {
        "speaker": "b",
        "text": "La reescritura desde fuera tampoco será neutral. Elegiremos qué gesto mostrar y cuándo revelar el sobre. En la exposición distinguiré quién habla, quién percibe y cuándo se entera el lector. Si puedo explicar esas tres decisiones, mi lectura no dependerá de adivinar una intención de la autora. Podré sostener una interpretación fuerte y aceptar que otra explique mejor un detalle que yo había dejado de lado."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha el intercambio completo sin abrir la transcripción. Reconstruye el desacuerdo central.",
        "exercise": {
          "id": "c2-18-escucha-gist",
          "type": "choice",
          "prompt": "Interpreta el diálogo: Quien cuenta también se cuenta",
          "items": [
            {
              "q": "¿Qué problema organiza la conversación de Quien cuenta también se cuenta?",
              "options": [
                "La fiabilidad se examina contrastando certeza narrativa, documentos y omisiones.",
                "El relato demuestra una mentira deliberada sin margen de discusión."
              ],
              "answer": 0,
              "why": "Reconstruye el propósito común antes de buscar detalles."
            },
            {
              "q": "En esta fase, ¿qué conclusión sería excesiva sobre Quien cuenta también se cuenta?",
              "options": [
                "Desear marcharse implica consentir cualquier condición contractual.",
                "La fiabilidad se examina contrastando certeza narrativa, documentos y omisiones."
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
          "id": "c2-18-escucha-detail",
          "type": "choice",
          "prompt": "Interpreta el diálogo: Quien cuenta también se cuenta",
          "items": [
            {
              "q": "¿Qué límite deben conservar los interlocutores de Quien cuenta también se cuenta?",
              "options": [
                "El sobre aparece enviado y sellado.",
                "El plano aparece en un sobre sin sello."
              ],
              "answer": 1,
              "why": "La conversación vuelve sobre el límite que evita una promesa o inferencia excesiva."
            },
            {
              "q": "En esta fase, ¿qué conclusión sería excesiva sobre Quien cuenta también se cuenta?",
              "options": [
                "Desear marcharse implica consentir cualquier condición contractual.",
                "El plano aparece en un sobre sin sello."
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
          "id": "c2-18-escucha-notice",
          "type": "choice",
          "prompt": "Interpreta el diálogo: Quien cuenta también se cuenta",
          "items": [
            {
              "q": "¿Qué inferencia pragmática permite el diálogo de Quien cuenta también se cuenta?",
              "options": [
                "Desear marcharse implica consentir cualquier condición contractual.",
                "Querer marcharse no equivale a consentir condiciones de venta que no se conocían."
              ],
              "answer": 1,
              "why": "La inferencia se apoya en una reformulación y su contexto; no es una lectura literal de una palabra."
            },
            {
              "q": "En esta fase, ¿qué conclusión sería excesiva sobre Quien cuenta también se cuenta?",
              "options": [
                "Desear marcharse implica consentir cualquier condición contractual.",
                "Querer marcharse no equivale a consentir condiciones de venta que no se conocían."
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
    "title": "Quien cuenta también se cuenta · expediente de lectura",
    "genre": "Dossier original: texto principal y documento de contraste",
    "frame": "Situación ficticia para lectura crítica y mediación. Identifica qué voz afirma cada cosa antes de integrar las fuentes.",
    "text": [
      "El narrador empieza asegurando que nadie se opuso a vender la casa. Lo recuerda con la tranquilidad de quien cree haber conservado todos los papeles. Después describe a su hermana doblando una carta sin abrirla y a su madre preguntando dos veces por el limonero. Ninguno de esos gestos constituye por sí solo una negativa; juntos, sin embargo, vuelven demasiado cómoda la unanimidad inicial. El relato no nos entrega una mentira demostrada, sino una seguridad que empieza a necesitar más apoyo del que recibe.",
      "La primera retrospección se sitúa una semana antes de la firma. El narrador había prometido enviar el contrato, pero lo dejó sobre una mesa porque todos conocían ya las condiciones. La justificación aparece incrustada en la narración, sin comillas ni verbo que la presente como pensamiento de entonces. ¿Es la voz actual explicando el descuido o la voz pasada reproduciendo su confianza? La ambigüedad temporal permite oír cómo una explicación se ha repetido hasta adquirir la apariencia de un hecho.",
      "Una carta posterior de la hermana afirma que no recibió el documento y que habría pedido aplazar la venta si hubiera sabido que el jardín se dividiría. El condicional compuesto no demuestra qué habría ocurrido: formula una alternativa desde el presente de la carta. Su valor consiste en mostrar que la falta de información afectó a una posibilidad de decisión. El narrador responde que ella siempre había querido marcharse. Esa información, aun siendo cierta, no equivale a consentir cualquier condición de la venta.",
      "En el último párrafo, el narrador encuentra una copia del plano dentro de un sobre sin sello. No dice que se equivocó. Dice que quizá el correo había fallado de otra manera. La frase protege una explicación anterior desplazando el fallo desde una institución hacia una metáfora. El lector puede percibir una admisión oblicua, una evasión persistente o ambas a la vez. El interés no reside en diagnosticar al personaje, sino en describir cómo el lenguaje le permite acercarse a una responsabilidad sin formularla por completo.",
      "Nota de lectura. Una adaptación teatral eliminó la carta y dio a la hermana una escena directa. Ganó presencia oral, pero perdió la distancia entre documentos y recuerdos que organizaba el original. Otra versión mantuvo el sobre y dejó que el público viera el sello ausente antes que el narrador. Esa anticipación cambiaba la tensión: ya no se esperaba descubrir el hecho, sino observar si la voz acabaría reconociéndolo. Comparar las versiones permite distinguir información narrativa, orden de revelación y juicio moral. La discusión interpretativa no sustituye la atención a las formas: una lectura debe poder volver al tiempo verbal, al referente y al orden exacto de las escenas.",
      "Contralectura de un estudiante. La hermana podría estar reconstruyendo también su versión para no asumir que evitó la conversación. El comentario no pretendía equiparar todas las voces como igualmente sospechosas; señalaba que el documento escrito no queda fuera de la perspectiva por adoptar forma de carta. La lectura debía comparar qué afirma cada voz, qué puede conocer y qué reconoce no haber hecho. La fiabilidad no se distribuye automáticamente entre narrador literario y documento supuestamente transparente.",
      "La docente pidió reescribir la escena desde una tercera persona que solo pudiera observar acciones. La versión resultante eliminaba explicaciones interiores, pero no se volvía neutral: seguía eligiendo qué gestos mostrar y en qué orden. Una descripción del sobre antes de la firma orientaba al lector de modo distinto que su aparición al final. El ejercicio permitió separar tres decisiones que suelen confundirse: quién habla, quién percibe y cuándo recibe información el lector. La defensa de una interpretación debía nombrar cuál de ellas producía el efecto discutido. No bastaba afirmar que el autor quería sorprender. Había que explicar qué expectativa se construía, mediante qué omisión y cómo el dato posterior obligaba a revisar una relación ya leída. Esa revisión podía modificar la responsabilidad atribuida sin resolver por completo las motivaciones del personaje."
    ],
    "tasks": [
      {
        "id": "c2-18-lectura",
        "type": "choice",
        "prompt": "Reconstruye la tesis y su límite en Quien cuenta también se cuenta.",
        "items": [
          {
            "q": "¿Qué tesis sostiene el dossier «Quien cuenta también se cuenta»?",
            "options": [
              "El relato demuestra una mentira deliberada sin margen de discusión.",
              "La fiabilidad se examina contrastando certeza narrativa, documentos y omisiones."
            ],
            "answer": 1,
            "why": "La tesis integra el contraste entre las fuentes, no solo una frase aislada."
          },
          {
            "q": "¿Qué detalle limita la interpretación en «Quien cuenta también se cuenta»?",
            "options": [
              "El sobre aparece enviado y sellado.",
              "El plano aparece en un sobre sin sello."
            ],
            "answer": 1,
            "why": "El documento complementario delimita qué está confirmado."
          }
        ]
      },
      {
        "id": "c2-18-lectura-evidencia",
        "type": "open",
        "prompt": "Defiende una interpretación de Quien cuenta también se cuenta con pruebas y contraejemplos.",
        "items": [
          {
            "prompt": "Contrasta «La fiabilidad se examina contrastando certeza narrativa, documentos y omisiones.» con «El relato demuestra una mentira deliberada sin margen de discusión.». Cita dos fragmentos breves, atribuye sus voces y explica qué detalle impide sostener la segunda lectura.",
            "model": "La fiabilidad se examina contrastando certeza narrativa, documentos y omisiones. El plano aparece en un sobre sin sello.",
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
          "quote": "El narrador empieza asegurando que nadie se opuso a vender la casa.",
          "note": "Examina el encuadre inicial y qué información necesitarás para revisarlo."
        },
        {
          "quote": "Nota de lectura.",
          "note": "El documento final introduce otra perspectiva; identifica qué interpretación limita y qué deja abierto."
        }
      ]
    }
  },
  "practice": {
    "intro": "Combina orden, clasificación, producción y recuperación espaciada. Las respuestas abiertas se contrastan con criterios y con tu docente.",
    "exercises": [
      {
        "id": "c2-18-orden",
        "type": "order",
        "prompt": "Reconstruye dos relaciones centrales del caso Quien cuenta también se cuenta.",
        "items": [
          {
            "words": [
              "El",
              "sobre",
              "sin",
              "sello",
              "debilita",
              "la",
              "explicación."
            ],
            "why": "La secuencia mantiene el alcance y las relaciones del caso."
          },
          {
            "words": [
              "Querer",
              "marcharse",
              "no",
              "implica",
              "aceptar",
              "cualquier",
              "condición."
            ],
            "why": "La secuencia mantiene el alcance y las relaciones del caso."
          }
        ]
      },
      {
        "id": "c2-18-estatuto",
        "type": "classify",
        "prompt": "Clasifica el estatuto de estas formulaciones en «Quien cuenta también se cuenta».",
        "categories": [
          "Conclusión respaldada o delimitada",
          "Generalización no autorizada"
        ],
        "items": [
          {
            "text": "La fiabilidad se examina contrastando certeza narrativa, documentos y omisiones.",
            "cat": 0,
            "why": "Resume el razonamiento con sus límites."
          },
          {
            "text": "El relato demuestra una mentira deliberada sin margen de discusión.",
            "cat": 1,
            "why": "Amplía o invierte el alcance de las fuentes."
          },
          {
            "text": "El plano aparece en un sobre sin sello.",
            "cat": 0,
            "why": "Conserva un detalle explícito del expediente."
          },
          {
            "text": "El sobre aparece enviado y sellado.",
            "cat": 1,
            "why": "Contradice la condición documentada."
          }
        ]
      },
      {
        "id": "c2-18-microescritura",
        "type": "open",
        "prompt": "Produce dos versiones breves antes del dossier de Quien cuenta también se cuenta.",
        "items": [
          {
            "prompt": "Redacta una apertura de 80–100 palabras para el destinatario de «Quien cuenta también se cuenta». Conserva la tesis y una reserva.",
            "model": "La seguridad inicial del narrador se debilita al contrastarla con los gestos familiares y el sobre sin sello. No basta para demostrar una mentira deliberada, pero sí para cuestionar la unanimidad que da por sentada. El pluscuamperfecto sitúa una promesa anterior que su explicación posterior minimiza. La carta de la hermana formula una alternativa, no una prueba de lo que necesariamente habría ocurrido. Su fuerza está en señalar una posibilidad de decisión perdida. El cierre puede ser admisión oblicua y evasión simultáneamente: el personaje se acerca a una responsabilidad mientras evita nombrarla de forma directa.",
            "checklist": [
              "Identifico quién necesita decidir y con qué información.",
              "Separo afirmación, atribución e inferencia."
            ]
          },
          {
            "prompt": "Reformula para una persona ajena al debate de «Quien cuenta también se cuenta» la condición que más fácilmente se perdería al resumir. Explica el coste de omitirla.",
            "model": "El plano aparece en un sobre sin sello. La fiabilidad se examina contrastando certeza narrativa, documentos y omisiones.",
            "checklist": [
              "No convierto la condición en un dato accesorio.",
              "Mantengo el alcance aunque simplifique el léxico."
            ]
          }
        ]
      },
      {
        "id": "c2-18-recuperacion",
        "type": "open",
        "prompt": "Recupera recursos con materiales suministrados de semanas anteriores. No busques rasgos ausentes en el dossier actual. Contrasta después qué recurso sería pertinente transferir al nuevo caso.",
        "items": [
          {
            "prompt": "Recuperación c2.disc.debate-hostil. Recupera la semana 14, «La pregunta que encierra una trampa». Material de contraste: La entrevista sobre el traslado del mercado empezó con una pregunta: «¿Cuándo reconocerán que quieren expulsar a los vendedores?». La responsable del proyecto respondió que no querían expulsar a nadie. El entrevistador insistió en pedir una fecha. La repetición convertía la negativa en evasión porque la pregunta ya contenía una intención atribuida. Una respuesta útil necesitaba salir de ese marco sin abandonar el problema real: varias personas no podían pagar el alquiler del nuevo espacio. Formulación de trabajo: Que una medida tenga límites no demuestra que sea inútil.\n\nRecupera «Debate bajo presión» a partir del material suministrado. Produce una versión de 80–100 palabras que haga visible una relación implícita, mantenga una reserva y responda a una objeción. Explica cuál es tu aportación y cuál procede de la fuente. Contraste nuevo suministrado de «Quien cuenta también se cuenta»: «Habría vuelto antes si hubiera entendido el mensaje.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "No compartimos la premisa de que el proyecto busque expulsar a los vendedores. Sí reconocemos que el alquiler propuesto puede excluir a parte de ellos, y ese efecto necesita una respuesta. La inspección obliga a abandonar el edificio; no fija el precio del nuevo espacio ni impide revisar las ayudas. Publicaremos tres simulaciones de costes y examinaremos los casos de mayor riesgo. No podemos prometer financiación permanente sin una partida aprobada. Ese límite no clausura la negociación: delimita el mandato actual y permite identificar qué decisión adicional sería necesaria para ampliarlo. En el nuevo contraste, «Habría vuelto antes si hubiera entendido el mensaje.» debe interpretarse dentro de esta cuestión: Perspectiva, temporalidad y narrador no fiable. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.disc.falacias. Recupera la semana 14, «La pregunta que encierra una trampa». Material de contraste: La entrevista sobre el traslado del mercado empezó con una pregunta: «¿Cuándo reconocerán que quieren expulsar a los vendedores?». La responsable del proyecto respondió que no querían expulsar a nadie. El entrevistador insistió en pedir una fecha. La repetición convertía la negativa en evasión porque la pregunta ya contenía una intención atribuida. Una respuesta útil necesitaba salir de ese marco sin abandonar el problema real: varias personas no podían pagar el alquiler del nuevo espacio. Formulación de trabajo: Que una medida tenga límites no demuestra que sea inútil.\n\nRecupera «Falacias argumentativas» a partir del material suministrado. Produce una versión de 80–100 palabras que haga visible una relación implícita, mantenga una reserva y responda a una objeción. Explica cuál es tu aportación y cuál procede de la fuente. Contraste nuevo suministrado de «Quien cuenta también se cuenta»: «Habría vuelto antes si hubiera entendido el mensaje.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "No compartimos la premisa de que el proyecto busque expulsar a los vendedores. Sí reconocemos que el alquiler propuesto puede excluir a parte de ellos, y ese efecto necesita una respuesta. La inspección obliga a abandonar el edificio; no fija el precio del nuevo espacio ni impide revisar las ayudas. Publicaremos tres simulaciones de costes y examinaremos los casos de mayor riesgo. No podemos prometer financiación permanente sin una partida aprobada. Ese límite no clausura la negociación: delimita el mandato actual y permite identificar qué decisión adicional sería necesaria para ampliarlo. En el nuevo contraste, «Habría vuelto antes si hubiera entendido el mensaje.» debe interpretarse dentro de esta cuestión: Perspectiva, temporalidad y narrador no fiable. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.voc.negociacion-alto-nivel. Recupera la semana 14, «La pregunta que encierra una trampa». Unidades disponibles: premisa (afirmación de la que parte un razonamiento); reencuadrar (proponer otra delimitación del asunto); falso dilema (reducción injustificada a dos opciones); hombre de paja (deformación de la postura ajena); línea roja (límite que no se acepta traspasar); margen de negociación (espacio de concesiones posibles); contrapartida (compromiso a cambio de una concesión); carga de la prueba (responsabilidad de justificar una afirmación). Pasaje: La entrevista sobre el traslado del mercado empezó con una pregunta: «¿Cuándo reconocerán que quieren expulsar a los vendedores?». La responsable del proyecto respondió que no querían expulsar a nadie. El entrevistador insistió en pedir una fecha. La repetición convertía la negativa en evasión porque la pregunta ya contenía una intención atribuida. Una respuesta útil necesitaba salir de ese marco sin abandonar el problema real: varias personas no podían pagar el alquiler del nuevo espacio.\n\nRecupera «Negociación de alto nivel»: selecciona dos unidades del material, explica por qué no son intercambiables y redacta una frase sobre el caso con cada una. Contrasta una elección precisa con otra que introduciría una evaluación o un alcance distintos. Contraste nuevo suministrado de «Quien cuenta también se cuenta»: «Habría vuelto antes si hubiera entendido el mensaje.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "No compartimos la premisa de que el proyecto busque expulsar a los vendedores. Sí reconocemos que el alquiler propuesto puede excluir a parte de ellos, y ese efecto necesita una respuesta. La inspección obliga a abandonar el edificio; no fija el precio del nuevo espacio ni impide revisar las ayudas. Publicaremos tres simulaciones de costes y examinaremos los casos de mayor riesgo. No podemos prometer financiación permanente sin una partida aprobada. Ese límite no clausura la negociación: delimita el mandato actual y permite identificar qué decisión adicional sería necesaria para ampliarlo. En este contraste, «premisa» nombra afirmación de la que parte un razonamiento; «reencuadrar», proponer otra delimitación del asunto. La elección debe conservar esa diferencia. En el nuevo contraste, «Habría vuelto antes si hubiera entendido el mensaje.» debe interpretarse dentro de esta cuestión: Perspectiva, temporalidad y narrador no fiable. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.pron.control-presion. Recupera la semana 14, «La pregunta que encierra una trampa». Textos para ensayo oral: «No comparto esa intención atribuida; sí reconozco el riesgo.» / «No comparto esa intención atribuida; por tanto, no hay riesgo.».\n\nMarca grupos fónicos, un foco y una pausa en cada texto. Produce dos lecturas propias y pide a tu interlocutor que explique el efecto. Recupera «Control prosódico bajo presión» sin atribuir una intención segura ni una variedad a la síntesis. Si trabajas a solas, describe la intención y deja su comprobación perceptiva para clase. Contraste nuevo suministrado de «Quien cuenta también se cuenta»: «Habría vuelto antes si hubiera entendido el mensaje.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Respira antes de responder, reconoce la preocupación y da una unidad breve de información. La serenidad no consiste en hablar con superioridad ni en dilatar la respuesta hasta agotar el turno. Un ensayo defendible conserva esta distinción del caso: La firmeza consiste en rechazar premisas injustificadas y responder al problema verificable. El resultado perceptivo debe contrastarse con un oyente; no queda acreditado por escribir una marca de pausa. En el nuevo contraste, «Habría vuelto antes si hubiera entendido el mensaje.» debe interpretarse dentro de esta cuestión: Perspectiva, temporalidad y narrador no fiable. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.spk.entrevista-hostil. Recupera la semana 14, «La pregunta que encierra una trampa». Situación para retomar: Simula una entrevista con cinco interrupciones: acusación de ocultación, falso dilema, generalización, cifra incorrecta y exigencia de promesa. Corrige el marco y vuelve a una respuesta comprobable. Objeción suministrada: La inspección determina el precio de cada puesto.\n\nRecupera «Entrevista difícil». Haz una intervención de dos minutos con tesis y reserva; responde durante un minuto a la objeción. Pide una reformulación de tu idea al interlocutor antes de evaluar si fuiste claro. Contraste nuevo suministrado de «Quien cuenta también se cuenta»: «Habría vuelto antes si hubiera entendido el mensaje.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "No compartimos la premisa de que el proyecto busque expulsar a los vendedores. Sí reconocemos que el alquiler propuesto puede excluir a parte de ellos, y ese efecto necesita una respuesta. La inspección obliga a abandonar el edificio; no fija el precio del nuevo espacio ni impide revisar las ayudas. Publicaremos tres simulaciones de costes y examinaremos los casos de mayor riesgo. No podemos prometer financiación permanente sin una partida aprobada. Ese límite no clausura la negociación: delimita el mandato actual y permite identificar qué decisión adicional sería necesaria para ampliarlo. En el nuevo contraste, «Habría vuelto antes si hubiera entendido el mensaje.» debe interpretarse dentro de esta cuestión: Perspectiva, temporalidad y narrador no fiable. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.gram.agencia-reparacion. Recupera la semana 17, «Pedir disculpas y reparar». Contrastes suministrados: Lamentamos haber publicado una información incompleta. / Se omitió el aviso; la coordinación asume esa omisión. / Si alguien se sintió excluido, lo sentimos: la condición debilita el reconocimiento.\n\nExplica la estructura y el cambio de interpretación pertinentes para «Agencia y reconocimiento». Produce una cuarta formulación y señala expresamente qué referente, condición o perspectiva temporal conserva. Contraste nuevo suministrado de «Quien cuenta también se cuenta»: «Habría vuelto antes si hubiera entendido el mensaje.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Sentimos que se haya sentido excluida desplaza el objeto de la disculpa hacia la reacción del destinatario. Lamentamos haber omitido la información identifica una actuación propia. Una pasiva refleja como se cometieron errores puede ser pertinente si el agente es desconocido, pero también ocultarlo cuando sí se conoce. La reparación combina reconocimiento, explicación sin excusa, acción y seguimiento; no exige que la persona afectada conceda perdón para recibir una solución. Aplicación al caso: Omitimos en el anuncio principal un requisito de entrega que figuraba en las bases completas. Esa diferencia afectó a la preparación de las solicitudes. Reabriremos el plazo para quienes cumplan las condiciones originales y conservaremos las candidaturas ya presentadas. La explicación del fallo de coordinación se publicará con medidas preventivas; no sustituye la reparación. Los gastos de envío podrán reclamarse por el canal indicado y recibirán una respuesta motivada en la fecha anunciada, sin que hoy podamos garantizar su reembolso. Esta comunicación no exige que las personas afectadas den el asunto por cerrado. En el nuevo contraste, «Habría vuelto antes si hubiera entendido el mensaje.» debe interpretarse dentro de esta cuestión: Perspectiva, temporalidad y narrador no fiable. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.fun.disculpa-reparacion. Recupera la semana 17, «Pedir disculpas y reparar». Material de contraste: La convocatoria de una beca exigía entregar una carpeta presencialmente, aunque el anuncio principal solo mencionaba el formulario digital. Varias personas quedaron fuera por no cumplir un requisito que descubrieron después del cierre. La institución publicó una disculpa: «Sentimos que algunas personas se hayan sentido desinformadas». El texto no reconocía todavía la omisión. Presentaba como experiencia subjetiva lo que podía comprobarse comparando dos versiones de las bases. Formulación de trabajo: Se omitió el aviso; la coordinación asume esa omisión.\n\nRecupera «Disculpa y reparación» a partir del material suministrado. Produce una versión de 80–100 palabras que haga visible una relación implícita, mantenga una reserva y responda a una objeción. Explica cuál es tu aportación y cuál procede de la fuente. Contraste nuevo suministrado de «Quien cuenta también se cuenta»: «Habría vuelto antes si hubiera entendido el mensaje.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Omitimos en el anuncio principal un requisito de entrega que figuraba en las bases completas. Esa diferencia afectó a la preparación de las solicitudes. Reabriremos el plazo para quienes cumplan las condiciones originales y conservaremos las candidaturas ya presentadas. La explicación del fallo de coordinación se publicará con medidas preventivas; no sustituye la reparación. Los gastos de envío podrán reclamarse por el canal indicado y recibirán una respuesta motivada en la fecha anunciada, sin que hoy podamos garantizar su reembolso. Esta comunicación no exige que las personas afectadas den el asunto por cerrado. En el nuevo contraste, «Habría vuelto antes si hubiera entendido el mensaje.» debe interpretarse dentro de esta cuestión: Perspectiva, temporalidad y narrador no fiable. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.pron.serenidad-no-condescendiente. Recupera la semana 17, «Pedir disculpas y reparar». Textos para ensayo oral: «Lamentamos haber omitido el requisito.» / «Lamentamos que se hayan sentido desinformados.».\n\nMarca grupos fónicos, un foco y una pausa en cada texto. Produce dos lecturas propias y pide a tu interlocutor que explique el efecto. Recupera «Serenidad y cortesía» sin atribuir una intención segura ni una variedad a la síntesis. Si trabajas a solas, describe la intención y deja su comprobación perceptiva para clase. Contraste nuevo suministrado de «Quien cuenta también se cuenta»: «Habría vuelto antes si hubiera entendido el mensaje.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Ensaya una primera persona clara y evita enfatizar vosotros como si el problema fuera la reacción ajena. Deja una pausa para la respuesta: no uses un cierre melódico para impedir que continúe la queja. Un ensayo defendible conserva esta distinción del caso: Una disculpa responsable reconoce la actuación y separa reparación, explicación y asuntos pendientes. El resultado perceptivo debe contrastarse con un oyente; no queda acreditado por escribir una marca de pausa. En el nuevo contraste, «Habría vuelto antes si hubiera entendido el mensaje.» debe interpretarse dentro de esta cuestión: Perspectiva, temporalidad y narrador no fiable. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c2.wri.comunicado-reparacion. Recupera la semana 17, «Pedir disculpas y reparar». Modelo parcial que puedes transformar: Omitimos en el anuncio principal un requisito de entrega que figuraba en las bases completas. Esa diferencia afectó a la preparación de las solicitudes. Reabriremos el plazo para quienes cumplan las condiciones originales y conservaremos las candidaturas ya presentadas. La explicación del fallo de coordinación se publicará con medidas preventivas; no sustituye la reparación. Los gastos de envío podrán reclamarse por el canal indicado y recibirán una respuesta motivada en la fecha anunciada, sin que hoy podamos garantizar su reembolso. Esta comunicación no exige que las personas afectadas den el asunto por cerrado.\n\nRecupera «Comunicado de reparación» mediante una nueva versión de 120–160 palabras de este fragmento para otro destinatario. Mantén la reserva principal, cambia el orden de la información y justifica dos decisiones. Si el objetivo exige un texto completo, retoma además tu entrega original de esa semana y revisa su conjunto. Contraste nuevo suministrado de «Quien cuenta también se cuenta»: «Habría vuelto antes si hubiera entendido el mensaje.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Omitimos en el anuncio principal un requisito de entrega que figuraba en las bases completas. Esa diferencia afectó a la preparación de las solicitudes. Reabriremos el plazo para quienes cumplan las condiciones originales y conservaremos las candidaturas ya presentadas. La explicación del fallo de coordinación se publicará con medidas preventivas; no sustituye la reparación. Los gastos de envío podrán reclamarse por el canal indicado y recibirán una respuesta motivada en la fecha anunciada, sin que hoy podamos garantizar su reembolso. Esta comunicación no exige que las personas afectadas den el asunto por cerrado. Para una persona ajena al expediente, la información decisiva que debe seguir visible es: Una disculpa responsable reconoce la actuación y separa reparación, explicación y asuntos pendientes. En el nuevo contraste, «Habría vuelto antes si hubiera entendido el mensaje.» debe interpretarse dentro de esta cuestión: Perspectiva, temporalidad y narrador no fiable. La semejanza de función no convierte ambos casos en hechos equivalentes.",
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
    "task": "Escribe un ensayo de 500–650 palabras sobre la fiabilidad del narrador. Incluye una reescritura de 120 palabras desde la hermana y explica cómo cambian temporalidad, focalización y responsabilidad.",
    "context": "Entrega un texto independiente y conserva una segunda versión con cambios comentados. El modelo muestra una apertura posible; no sustituye el dossier completo.",
    "steps": [
      "Traza un mapa de fuentes: afirmación, prueba, límite y destinatario.",
      "Decide el orden según la acción que necesita realizar tu lector; reserva espacio para una objeción fuerte.",
      "Redacta sin copiar el modelo. Integra al menos dos fuentes y atribuye sus diferencias.",
      "Revisa el alcance de tres formulaciones, lee un párrafo en voz alta y explica dos cambios de estilo."
    ],
    "useLanguage": [
      "Ya había cerrado la puerta cuando oyó la llamada.",
      "Habría vuelto antes si hubiera entendido el mensaje.",
      "Claro que todos estaban de acuerdo. ¿Quién iba a oponerse ahora?",
      "focalización",
      "retrospección",
      "autojustificación"
    ],
    "model": [
      "Modelo parcial de apertura (no es una entrega completa): La seguridad inicial del narrador se debilita al contrastarla con los gestos familiares y el sobre sin sello. No basta para demostrar una mentira deliberada, pero sí para cuestionar la unanimidad que da por sentada. El pluscuamperfecto sitúa una promesa anterior que su explicación posterior minimiza. La carta de la hermana formula una alternativa, no una prueba de lo que necesariamente habría ocurrido. Su fuerza está en señalar una posibilidad de decisión perdida. El cierre puede ser admisión oblicua y evasión simultáneamente: el personaje se acerca a una responsabilidad mientras evita nombrarla de forma directa."
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
        "prompt": "Presenta dos interpretaciones del cierre, lee un fragmento con entonación deliberadamente abierta y responde a quien exige clasificar al narrador simplemente como mentiroso o inocente.",
        "prep": [
          "Anota tesis, dos pruebas, una objeción y una reserva.",
          "Marca dos focos prosódicos y un punto donde cambiarás de registro."
        ],
        "seconds": 240,
        "model": "La seguridad inicial del narrador se debilita al contrastarla con los gestos familiares y el sobre sin sello. No basta para demostrar una mentira deliberada, pero sí para cuestionar la unanimidad que da por sentada. El pluscuamperfecto sitúa una promesa anterior que su explicación posterior minimiza. La carta de la hermana formula una alternativa, no una prueba de lo que necesariamente habría ocurrido. Su fuerza está en señalar una posibilidad de decisión perdida. El cierre puede ser admisión oblicua y evasión simultáneamente: el personaje se acerca a una responsabilidad mientras evita nombrarla de forma directa.",
        "selfCheck": [
          "La condición principal se oye con claridad.",
          "Distingo mi interpretación de las voces citadas.",
          "Puedo reparar una frase sin abandonar el argumento."
        ]
      },
      {
        "title": "Interacción y reformulación",
        "prompt": "Tu interlocutor sostiene: «El relato demuestra una mentira deliberada sin margen de discusión.». Responde sin caricaturizarlo, formula dos preguntas de seguimiento y pide que reformule tu condición principal. Después resume para una persona que no conoce el expediente de Quien cuenta también se cuenta.",
        "prep": [
          "Prepara una concesión real y una corrección de alcance.",
          "Anticipa qué término deberás explicar sin jerga."
        ],
        "seconds": 240,
        "model": "La fiabilidad se examina contrastando certeza narrativa, documentos y omisiones. El plano aparece en un sobre sin sello.",
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
        "task": "Presenta tu decisión más discutible sobre Quien cuenta también se cuenta y pide un contraejemplo que la ponga a prueba.",
        "phrases": [
          "Mi lectura se apoya en…",
          "Cambiaría de interpretación si…"
        ]
      },
      {
        "move": "Reformula",
        "task": "Explica el límite «El plano aparece en un sobre sin sello.» a otro público sin rebajar su importancia.",
        "phrases": [
          "En otros términos…",
          "Esta versión conserva…"
        ]
      },
      {
        "move": "Negocia",
        "task": "Responde a la objeción «Desear marcharse implica consentir cualquier condición contractual.» y acuerda una formulación que ambos puedan defender.",
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
        "q": "Balance de Quien cuenta también se cuenta: ¿qué conclusión conserva el alcance?",
        "options": [
          "La fiabilidad se examina contrastando certeza narrativa, documentos y omisiones.",
          "El relato demuestra una mentira deliberada sin margen de discusión."
        ],
        "answer": 0,
        "why": "Relaciona el texto principal con el documento complementario."
      },
      {
        "type": "choice",
        "q": "En una revisión final de Quien cuenta también se cuenta, ¿qué afirmación debe rechazarse?",
        "options": [
          "El plano aparece en un sobre sin sello.",
          "El sobre aparece enviado y sellado."
        ],
        "answer": 1,
        "why": "La primera opción contradice la condición explícita."
      },
      {
        "type": "listen",
        "q": "Escucha esta síntesis de Quien cuenta también se cuenta. ¿Qué interpretación mantiene?",
        "options": [
          "Desear marcharse implica consentir cualquier condición contractual.",
          "Querer marcharse no equivale a consentir condiciones de venta que no se conocían."
        ],
        "answer": 1,
        "why": "La relación expresada limita una generalización.",
        "audio": "Querer marcharse no equivale a consentir condiciones de venta que no se conocían.",
        "voice": "es-ES-f"
      },
      {
        "type": "gap",
        "q": "En «Quien cuenta también se cuenta», ¿qué unidad expresa «selección de información desde una perspectiva»? ___ .",
        "answers": [
          [
            "focalización"
          ]
        ],
        "hint": "selección de información desde una perspectiva",
        "why": "Recupera la unidad a partir de su función, no de una traducción."
      },
      {
        "type": "gap",
        "q": "Para nombrar «vuelta narrativa a un momento anterior» en este expediente usamos ___ .",
        "answers": [
          [
            "retrospección"
          ]
        ],
        "why": "La distinción léxica debe conservarse al mediar."
      },
      {
        "type": "error",
        "sentence": "Si habría visto el plano, habría pedido aplazar la venta.",
        "answers": [
          "Si hubiera visto el plano, habría pedido aplazar la venta."
        ],
        "why": "La condición contrafactual pasada se expresa aquí con pluscuamperfecto de subjuntivo."
      },
      {
        "type": "transform",
        "source": "Prometió enviar el plano. Después firmó la venta.",
        "instruction": "Empieza con «Cuando firmó la venta, ya…» y marca la anterioridad.",
        "answers": [
          "Cuando firmó la venta, ya había prometido enviar el plano."
        ],
        "why": "Anterioridad en el relato: conserva la relación solicitada y compara qué se hace explícito."
      },
      {
        "type": "open",
        "prompt": "Cierre de «Quien cuenta también se cuenta»: escribe 90–120 palabras para una audiencia nueva. Incluye tesis, condición y una pregunta pendiente; justifica una elección de registro.",
        "model": "La seguridad inicial del narrador se debilita al contrastarla con los gestos familiares y el sobre sin sello. No basta para demostrar una mentira deliberada, pero sí para cuestionar la unanimidad que da por sentada. El pluscuamperfecto sitúa una promesa anterior que su explicación posterior minimiza. La carta de la hermana formula una alternativa, no una prueba de lo que necesariamente habría ocurrido. Su fuerza está en señalar una posibilidad de decisión perdida. El cierre puede ser admisión oblicua y evasión simultáneamente: el personaje se acerca a una responsabilidad mientras evita nombrarla de forma directa.",
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
      "Interpreto perspectiva, temporalidad y narrador no fiable en fuentes originales.",
      "Puedo explicar por qué «El relato demuestra una mentira deliberada sin margen de discusión.» excede la evidencia.",
      "Defiendo y reviso un dossier escrito y oral con destinatario concreto."
    ],
    "review": [
      "Dentro de dos días, reconstruye sin mirar el límite: El plano aparece en un sobre sin sello.",
      "Dentro de una semana, reescribe el cierre para otro público y contrástalo con tu versión inicial.",
      "En clase, pide una objeción a «La fiabilidad se examina contrastando certeza narrativa, documentos y omisiones.» y registra qué cambiarías."
    ]
  }
};
