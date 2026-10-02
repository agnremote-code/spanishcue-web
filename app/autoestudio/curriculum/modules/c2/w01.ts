import type { Module } from "../../types";

/** Material original C2. Audio mediante síntesis; sin acreditación regional. */
export const c2w01: Module = {
  "id": "c2-01",
  "level": "c2",
  "week": 1,
  "kind": "core",
  "title": "Dos lecturas, una responsabilidad",
  "subtitle": "Alcance, adjunción y responsabilidad editorial",
  "stop": {
    "place": "Zaragoza",
    "country": "España"
  },
  "minutes": 135,
  "newObjectives": [
    "c2.gram.ambiguedad-sintactica",
    "c2.disc.desambiguar",
    "c2.voc.polisemia-avanzada",
    "c2.pron.prosodia-desambiguadora",
    "c2.read.textos-ambiguos"
  ],
  "reviewObjectives": [
    "c1.disc.sintesis",
    "c1.wri.revision-registro"
  ],
  "prerequisites": [],
  "goal": {
    "canDo": "Puedo eliminar una ambigüedad institucional sin confundir aclaración y justificación.",
    "steps": [
      "Lee las fuentes y distingue dato, inferencia y evaluación.",
      "Escucha el intercambio antes de consultar su transcripción.",
      "Aplica alcance, adjunción y responsabilidad editorial a una decisión comunicativa concreta.",
      "Produce el dossier escrito, revisa una elección y defiéndela oralmente."
    ]
  },
  "theory": {
    "intro": "Los casos, documentos y voces de esta semana son originales y ficticios. La dificultad está en controlar relaciones de significado, no en acumular palabras raras.",
    "parts": [
      {
        "heading": "Alcance, adjunción y responsabilidad editorial",
        "body": [
          "Una relativa puede modificar más de un antecedente compatible: la técnica de la empresa que presentó el recurso. La cercanía favorece una lectura, pero no cancela la otra. La puntuación explicativa cambia además qué información se presupone: las solicitudes, que llegaron tarde excluye la selección que sí permite las solicitudes que llegaron tarde. Para desambiguar conviene repetir un sustantivo preciso o dividir la oración; sustituir todo por pronombres suele empeorar el problema.",
          "En este caso, La claridad del aviso no sustituye la justificación del criterio municipal. La formulación elegida debe permitir al destinatario reconstruir la diferencia relevante y reconocer qué no se ha demostrado.",
          "Polisemia no significa que cualquier lectura sea igualmente defendible. Revisión puede nombrar un examen o una corrección; admisión puede ser acceso a una institución o aceptación de un trámite. En «se admite la queja» no se afirma todavía que se estime su contenido. Distingue estos sentidos antes de sustituir palabras aparentemente equivalentes."
        ],
        "examples": [
          {
            "es": "La comisión entrevistó a la asesora de la asociación que denunció el cierre."
          },
          {
            "es": "La asociación denunció el cierre; la comisión entrevistó a su asesora."
          },
          {
            "es": "Solo se revisarán los informes incompletos."
          }
        ],
        "mistakes": [
          {
            "wrong": "Las alegaciones cuyo envío llegaron tarde serán revisadas.",
            "right": "Las alegaciones cuyo envío llegó tarde serán revisadas.",
            "why": "La concordancia se establece con envío, núcleo singular del sujeto de llegó."
          }
        ]
      },
      {
        "heading": "Interpretar, atribuir y revisar en este caso",
        "body": [
          "El temor al titular influye en la resistencia a precisar el texto. Para defender esa lectura, identifica una formulación y el detalle que la sostiene. Prueba después una explicación rival y señala qué dato necesitarías para preferirla.",
          "La versión para un público nuevo puede cambiar léxico, orden y longitud, pero debe conservar esta condición: Tres alegaciones se enviaron a una dirección recién desactivada. Un cambio de registro que la elimina cambia también el contenido."
        ],
        "examples": [
          {
            "es": "La claridad del aviso no sustituye la justificación del criterio municipal.",
            "note": "Síntesis con alcance delimitado."
          },
          {
            "es": "Todas las asociaciones perdieron automáticamente sus permisos.",
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
        "id": "c2-01-gramatica-alcance",
        "type": "choice",
        "prompt": "Selecciona la interpretación defendible de Dos lecturas, una responsabilidad.",
        "items": [
          {
            "q": "En el caso de Dos lecturas, una responsabilidad, ¿qué formulación preserva el alcance?",
            "options": [
              "La asociación denunció el cierre; la comisión entrevistó a su asesora.",
              "La revisión ya equivale a una sanción firme."
            ],
            "answer": 0,
            "why": "Una relativa puede modificar más de un antecedente compatible: la técnica de la empresa que presentó el recurso. La cercanía favorece una lectura, pero no cancela la otra. La puntuación explicativa cambia además qué información se presupone: las solicitudes, que llegaron tarde excluye la selección que sí permite las solicitudes que llegaron tarde. Para desambiguar conviene repetir un sustantivo preciso o dividir la oración; sustituir todo por pronombres suele empeorar el problema."
          },
          {
            "q": "¿Qué cautela lingüística resulta necesaria al explicar Dos lecturas, una responsabilidad?",
            "options": [
              "El temor al titular influye en la resistencia a precisar el texto.",
              "Todas las asociaciones perdieron automáticamente sus permisos."
            ],
            "answer": 0,
            "why": "Relaciona forma, contexto y efecto; evita ampliar una conclusión más allá de su base."
          }
        ]
      },
      {
        "id": "c2-01-gramatica-forma",
        "type": "gap",
        "prompt": "Completa las relaciones gramaticales del caso Dos lecturas, una responsabilidad.",
        "items": [
          {
            "q": "Se revisarán los permisos de las asociaciones ___ alegaron tarde.",
            "answers": [
              [
                "que"
              ]
            ],
            "why": "Una relativa puede modificar más de un antecedente compatible: la técnica de la empresa que presentó el recurso. La cercanía favorece una lectura, pero no cancela la otra. La puntuación explicativa cambia además qué información se presupone: las solicitudes, que llegaron tarde excluye la selección que sí permite las solicitudes que llegaron tarde. Para desambiguar conviene repetir un sustantivo preciso o dividir la oración; sustituir todo por pronombres suele empeorar el problema."
          },
          {
            "q": "La recepción no equivale ___ la admisión.",
            "answers": [
              [
                "a"
              ]
            ],
            "why": "Una relativa puede modificar más de un antecedente compatible: la técnica de la empresa que presentó el recurso. La cercanía favorece una lectura, pero no cancela la otra. La puntuación explicativa cambia además qué información se presupone: las solicitudes, que llegaron tarde excluye la selección que sí permite las solicitudes que llegaron tarde. Para desambiguar conviene repetir un sustantivo preciso o dividir la oración; sustituir todo por pronombres suele empeorar el problema."
          },
          {
            "q": "La nota distingue el trámite ___ la decisión.",
            "answers": [
              [
                "de"
              ]
            ],
            "why": "Una relativa puede modificar más de un antecedente compatible: la técnica de la empresa que presentó el recurso. La cercanía favorece una lectura, pero no cancela la otra. La puntuación explicativa cambia además qué información se presupone: las solicitudes, que llegaron tarde excluye la selección que sí permite las solicitudes que llegaron tarde. Para desambiguar conviene repetir un sustantivo preciso o dividir la oración; sustituir todo por pronombres suele empeorar el problema."
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Usa estas unidades para describir diferencias que el caso exige. La definición orienta el uso; contrástala con la frase completa.",
    "groups": [
      {
        "title": "Precisión para Dos lecturas, una responsabilidad",
        "items": [
          {
            "es": "admitir a trámite",
            "note": "aceptar examinar, sin dar la razón"
          },
          {
            "es": "resolver el fondo",
            "note": "decidir la cuestión sustantiva"
          },
          {
            "es": "alcance",
            "note": "conjunto de casos afectados"
          },
          {
            "es": "salvedad",
            "note": "excepción expresamente señalada"
          },
          {
            "es": "lectura restrictiva",
            "note": "selección de un subconjunto"
          },
          {
            "es": "referente",
            "note": "entidad a la que remite una expresión"
          },
          {
            "es": "dar por sentado",
            "note": "tratar como información compartida"
          },
          {
            "es": "dejar constancia",
            "note": "registrar de manera explícita"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "c2-01-lexico",
        "type": "match",
        "prompt": "Relaciona cada unidad con la distinción que aporta al expediente de Dos lecturas, una responsabilidad.",
        "pairs": [
          {
            "left": "admitir a trámite",
            "right": "aceptar examinar, sin dar la razón"
          },
          {
            "left": "resolver el fondo",
            "right": "decidir la cuestión sustantiva"
          },
          {
            "left": "alcance",
            "right": "conjunto de casos afectados"
          },
          {
            "left": "salvedad",
            "right": "excepción expresamente señalada"
          },
          {
            "left": "lectura restrictiva",
            "right": "selección de un subconjunto"
          },
          {
            "left": "referente",
            "right": "entidad a la que remite una expresión"
          },
          {
            "left": "dar por sentado",
            "right": "tratar como información compartida"
          },
          {
            "left": "dejar constancia",
            "right": "registrar de manera explícita"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "Pausas que separan condición y consecuencia",
    "explanation": [
      "Agrupa la relativa con su antecedente y evita una pausa que la convierta en comentario explicativo. Contrasta después una lectura restrictiva con una explicación separada.",
      "El audio utiliza síntesis disponible en el navegador: no certifica acento regional, ironía natural ni calidad de pronunciación. Escucha el contenido, ensaya contrastes y comprueba el efecto con una persona. El objetivo es inteligibilidad y control expresivo, no eliminar tu acento."
    ],
    "examples": [
      {
        "es": "Las asociaciones que alegaron tarde tendrán una revisión."
      },
      {
        "es": "Todas las asociaciones alegaron tarde y tendrán una revisión."
      }
    ],
    "perceive": {
      "id": "c2-01-percepcion",
      "type": "listen",
      "prompt": "Escucha el contraste antes de leer las opciones en «Dos lecturas, una responsabilidad».",
      "items": [
        {
          "q": "Escucha la primera formulación sobre Dos lecturas, una responsabilidad. ¿Qué contenido permite recuperar?",
          "options": [
            "Todas las asociaciones alegaron tarde y tendrán una revisión.",
            "Las asociaciones que alegaron tarde tendrán una revisión."
          ],
          "answer": 1,
          "why": "La respuesta depende de las palabras y de su agrupación; no atribuyas a la síntesis una intención o variedad verificada.",
          "audio": "Las asociaciones que alegaron tarde tendrán una revisión.",
          "voice": "es-ES-f"
        },
        {
          "q": "Escucha ahora el contraste de Dos lecturas, una responsabilidad. ¿Qué formulación aparece?",
          "options": [
            "Todas las asociaciones alegaron tarde y tendrán una revisión.",
            "Las asociaciones que alegaron tarde tendrán una revisión."
          ],
          "answer": 0,
          "why": "Compara después tus dos lecturas con una persona: una pausa puede favorecer una lectura sin demostrarla.",
          "audio": "Todas las asociaciones alegaron tarde y tendrán una revisión.",
          "voice": "es-ES-m"
        }
      ]
    },
    "produce": [
      {
        "text": "Las asociaciones que alegaron tarde tendrán una revisión.",
        "tip": "Marca grupos fónicos y explica qué interpretación favoreces.",
        "voice": "es-ES-f"
      },
      {
        "text": "Todas las asociaciones alegaron tarde y tendrán una revisión.",
        "tip": "Cambia el foco sin cambiar las palabras; pide una interpretación a tu interlocutor.",
        "voice": "es-ES-m"
      },
      {
        "text": "La claridad del aviso no sustituye la justificación del criterio municipal.",
        "tip": "Lee a velocidad cómoda, conserva la reserva y compara tu grabación local con tu intención.",
        "voice": "es-ES-f"
      }
    ]
  },
  "listening": {
    "title": "Mesa de trabajo: Dos lecturas, una responsabilidad",
    "context": "Dos participantes preparan una intervención sobre el caso. Escucha primero sin transcripción. Las voces son sintéticas y no se presentan como variedades regionales verificadas.",
    "speakers": [
      {
        "id": "a",
        "name": "Alicia",
        "voice": "es-ES-f",
        "role": "Primera perspectiva"
      },
      {
        "id": "b",
        "name": "Bruno",
        "voice": "es-ES-m",
        "role": "Contraste y reformulación"
      }
    ],
    "script": [
      {
        "speaker": "a",
        "text": "Antes de votar, necesito saber qué estamos aprobando. El acta dice que se revisarán los permisos de las asociaciones que alegaron tarde. Si lo leo sin el expediente, entiendo que el retraso pertenece a todas las asociaciones incluidas, y eso no es cierto en tres casos. No es una preferencia de estilo: estamos atribuyendo una conducta y esa atribución puede perjudicarlas."
      },
      {
        "speaker": "b",
        "text": "Entiendo la objeción, aunque el acta no pretende narrar cada incidencia. Cuando dijimos fuera de plazo, incluimos la recepción efectiva en la oficina competente. Admito que enviar y recibir no son lo mismo. Tampoco quisiera que la corrección pareciera una declaración de que las siete asociaciones cumplieron todos los requisitos. Hay cuatro expedientes distintos y todavía no tenemos una decisión de fondo."
      },
      {
        "speaker": "a",
        "text": "Precisamente por eso propongo distinguir. Podemos decir que hay siete permisos en revisión; después, que tres alegaciones se enviaron a una dirección desactivada y que las otras cuatro requieren un examen diferente. No necesitamos publicar nombres. Y quisiera retirar únicamente de la frase sobre autorizaciones: nadie ha propuesto revocar las definitivas, aunque la posición de ese adverbio permita entenderlo."
      },
      {
        "speaker": "b",
        "text": "De acuerdo con retirar esa palabra. Sobre lo demás, aprobaría una nota provisional que describa la incidencia técnica, siempre que conste que no prejuzga la validez de las solicitudes. Me preocupa el titular de mañana: el ayuntamiento reconoce su error. Pues bien, si hubo un error, habrá que reconocerlo; pero no aceptaría que se transformara una corrección del canal de recepción en una concesión automática de los permisos."
      },
      {
        "speaker": "a",
        "text": "Queda una objeción que no quiero despachar: una lista puede parecer definitiva aunque describa un estado provisional. Añadiré la fecha de revisión y el hecho que permitiría modificar cada caso. No basta escribir actualmente si el aviso se reenvía dentro de tres meses. La persona que lo recibe debe poder saber a qué momento corresponde y dónde comprobar si sigue vigente."
      },
      {
        "speaker": "b",
        "text": "Eso mejora la propuesta porque no promete eliminar todo contexto. Establece el contexto mínimo para una decisión concreta. En el acta dejaré también la razón de la rectificación: evitar dos lecturas con consecuencias diferentes. No la presentaré como un simple cambio de estilo, porque entonces parecería que el contenido nunca estuvo en discusión y perderíamos la oportunidad de mejorar el procedimiento. Para el cierre, conservaré esta distinción: La claridad del aviso no sustituye la justificación del criterio municipal."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha el intercambio completo sin abrir la transcripción. Reconstruye el desacuerdo central.",
        "exercise": {
          "id": "c2-01-escucha-gist",
          "type": "choice",
          "prompt": "Interpreta el diálogo: Dos lecturas, una responsabilidad",
          "items": [
            {
              "q": "¿Qué problema organiza la conversación de Dos lecturas, una responsabilidad?",
              "options": [
                "Todas las asociaciones perdieron automáticamente sus permisos.",
                "La claridad del aviso no sustituye la justificación del criterio municipal."
              ],
              "answer": 1,
              "why": "Reconstruye el propósito común antes de buscar detalles."
            },
            {
              "q": "En esta fase, ¿qué conclusión sería excesiva sobre Dos lecturas, una responsabilidad?",
              "options": [
                "La claridad del aviso no sustituye la justificación del criterio municipal.",
                "La revisión ya equivale a una sanción firme."
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
          "id": "c2-01-escucha-detail",
          "type": "choice",
          "prompt": "Interpreta el diálogo: Dos lecturas, una responsabilidad",
          "items": [
            {
              "q": "¿Qué límite deben conservar los interlocutores de Dos lecturas, una responsabilidad?",
              "options": [
                "Tres alegaciones se enviaron a una dirección recién desactivada.",
                "La nota demuestra que las siete alegaciones fueron puntuales."
              ],
              "answer": 0,
              "why": "La conversación vuelve sobre el límite que evita una promesa o inferencia excesiva."
            },
            {
              "q": "En esta fase, ¿qué conclusión sería excesiva sobre Dos lecturas, una responsabilidad?",
              "options": [
                "Tres alegaciones se enviaron a una dirección recién desactivada.",
                "La revisión ya equivale a una sanción firme."
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
          "id": "c2-01-escucha-notice",
          "type": "choice",
          "prompt": "Interpreta el diálogo: Dos lecturas, una responsabilidad",
          "items": [
            {
              "q": "¿Qué inferencia pragmática permite el diálogo de Dos lecturas, una responsabilidad?",
              "options": [
                "El temor al titular influye en la resistencia a precisar el texto.",
                "La revisión ya equivale a una sanción firme."
              ],
              "answer": 0,
              "why": "La inferencia se apoya en una reformulación y su contexto; no es una lectura literal de una palabra."
            },
            {
              "q": "En esta fase, ¿qué conclusión sería excesiva sobre Dos lecturas, una responsabilidad?",
              "options": [
                "El temor al titular influye en la resistencia a precisar el texto.",
                "La revisión ya equivale a una sanción firme."
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
    "title": "Dos lecturas, una responsabilidad · expediente de lectura",
    "genre": "Dossier original: texto principal y documento de contraste",
    "frame": "Situación ficticia para lectura crítica y mediación. Identifica qué voz afirma cada cosa antes de integrar las fuentes.",
    "text": [
      "El aviso cabía en una pantalla: «La comisión revisará los permisos de las asociaciones que presentaron alegaciones fuera de plazo». A primera vista, el ayuntamiento había anunciado una decisión, acaso discutible, pero comprensible. Bastaron dos llamadas para comprobar que no todos habían leído la misma decisión. Una asociación entendió que solo se revisarían los permisos correspondientes a las entidades cuyas alegaciones llegaron tarde. Otra sostuvo que todas las asociaciones habían alegado tarde y que, por tanto, la revisión sería general. La ausencia de una coma parecía distribuir derechos.",
      "El secretario añadió una precisión que, sin quererlo, abrió un segundo problema: «Se mantendrán únicamente las autorizaciones provisionales». ¿Se mantendrían esas autorizaciones y se retirarían las definitivas, o las autorizaciones continuarían siendo provisionales, sin convertirse todavía en definitivas? Quien conociera el expediente podía reconstruir una intención probable. Quien hubiera recibido el aviso reenviado carecía de ese auxilio. El problema no era que el público leyera mal, sino que la institución había encargado a sus lectores la tarea de completar lo que le correspondía decir.",
      "Una redactora propuso sustituir el párrafo por dos listas: permisos sometidos a revisión y permisos no afectados. El responsable de comunicación objetó que aquello haría demasiado visible una excepción para tres entidades. La observación alteró la discusión. Hasta entonces, la ambigüedad parecía un accidente de redacción; ahora podía ser una manera de no asumir públicamente el reparto. No toda frase confusa encubre una maniobra, desde luego. Pero, cuando se rechaza una aclaración porque aclararía demasiado, la defensa de la concisión empieza a parecer una defensa de la opacidad.",
      "La rectificación llegó esa tarde: «La comisión revisará los permisos de siete asociaciones. Sus alegaciones se recibieron después del plazo. La revisión no supone la retirada automática del permiso». El texto corregía el alcance y separaba procedimiento de resultado; no explicaba, sin embargo, por qué se había seleccionado a esas siete entidades. Aclarar una frase no equivale a justificar una decisión. La lectura crítica necesita conservar esa diferencia para no confundir un progreso lingüístico con una respuesta política completa.",
      "Documento complementario. La nota interna indicaba que tres de las siete asociaciones habían enviado sus alegaciones dentro del plazo, pero a una dirección que dejó de utilizarse el día anterior. El acuse automático no advertía del cambio. La nota recomendaba admitir esos escritos y conservar el correo original. No afirmaba que los otros cuatro expedientes fueran equivalentes ni proponía anular todos los permisos. Publicar la nota entera podía revelar datos innecesarios; ocultar la incidencia impedía evaluar la selección. Una versión pública debía explicar el criterio, preservar la excepción y evitar identificar a quienes habían utilizado la dirección antigua.",
      "Voto particular. Una integrante de la comisión defendió mantener la primera redacción porque el expediente completo permitía interpretarla correctamente. Su argumento planteaba una cuestión distinta de la corrección gramatical: cuánto conocimiento puede exigir un aviso a su destinatario. Un documento interno puede apoyarse en antecedentes compartidos; una comunicación pública reenviada fuera de su contexto no dispone del mismo suelo común. La integrante aceptó esa diferencia, pero advirtió que una lista demasiado minuciosa podía convertir situaciones cambiantes en categorías aparentemente definitivas. La redactora propuso entonces fechar el estado de cada caso y nombrar el procedimiento de actualización.",
      "El intercambio muestra que desambiguar no consiste en perseguir una frase capaz de sobrevivir sin contexto alguno. Consiste en proporcionar el contexto necesario para la decisión prevista y hacer visibles sus límites. Incluso la versión corregida podría quedar anticuada al día siguiente si llegara nueva documentación. Por eso el aviso debía distinguir una descripción fechada de una regla permanente. Una palabra como actualmente no sustituye una fecha cuando el texto circula durante meses; una fecha, a su vez, no explica qué hecho desencadena una revisión. La precisión se distribuye entre la oración, el documento y el procedimiento mediante el cual se mantiene vigente."
    ],
    "tasks": [
      {
        "id": "c2-01-lectura",
        "type": "choice",
        "prompt": "Reconstruye la tesis y su límite en Dos lecturas, una responsabilidad.",
        "items": [
          {
            "q": "¿Qué tesis sostiene el dossier «Dos lecturas, una responsabilidad»?",
            "options": [
              "La claridad del aviso no sustituye la justificación del criterio municipal.",
              "Todas las asociaciones perdieron automáticamente sus permisos."
            ],
            "answer": 0,
            "why": "La tesis integra el contraste entre las fuentes, no solo una frase aislada."
          },
          {
            "q": "¿Qué detalle limita la interpretación en «Dos lecturas, una responsabilidad»?",
            "options": [
              "Tres alegaciones se enviaron a una dirección recién desactivada.",
              "La nota demuestra que las siete alegaciones fueron puntuales."
            ],
            "answer": 0,
            "why": "El documento complementario delimita qué está confirmado."
          }
        ]
      },
      {
        "id": "c2-01-lectura-evidencia",
        "type": "open",
        "prompt": "Defiende una interpretación de Dos lecturas, una responsabilidad con pruebas y contraejemplos.",
        "items": [
          {
            "prompt": "Contrasta «La claridad del aviso no sustituye la justificación del criterio municipal.» con «Todas las asociaciones perdieron automáticamente sus permisos.». Cita dos fragmentos breves, atribuye sus voces y explica qué detalle impide sostener la segunda lectura.",
            "model": "La claridad del aviso no sustituye la justificación del criterio municipal. Tres alegaciones se enviaron a una dirección recién desactivada.",
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
          "quote": "El aviso cabía en una pantalla: «La comisión revisará los permisos de las asociaciones que presentaron alegaciones fuera de plazo».",
          "note": "Examina el encuadre inicial y qué información necesitarás para revisarlo."
        },
        {
          "quote": "Documento complementario.",
          "note": "El documento final introduce otra perspectiva; identifica qué interpretación limita y qué deja abierto."
        }
      ]
    }
  },
  "practice": {
    "intro": "Combina orden, clasificación, producción y recuperación espaciada. Las respuestas abiertas se contrastan con criterios y con tu docente.",
    "exercises": [
      {
        "id": "c2-01-orden",
        "type": "order",
        "prompt": "Reconstruye dos relaciones centrales del caso Dos lecturas, una responsabilidad.",
        "items": [
          {
            "words": [
              "La",
              "revisión",
              "no",
              "supone",
              "una",
              "retirada",
              "automática."
            ],
            "why": "La secuencia mantiene el alcance y las relaciones del caso."
          },
          {
            "words": [
              "La",
              "asociación",
              "presentó",
              "el",
              "escrito",
              "a",
              "tiempo."
            ],
            "why": "La secuencia mantiene el alcance y las relaciones del caso."
          }
        ]
      },
      {
        "id": "c2-01-estatuto",
        "type": "classify",
        "prompt": "Clasifica el estatuto de estas formulaciones en «Dos lecturas, una responsabilidad».",
        "categories": [
          "Conclusión respaldada o delimitada",
          "Generalización no autorizada"
        ],
        "items": [
          {
            "text": "La claridad del aviso no sustituye la justificación del criterio municipal.",
            "cat": 0,
            "why": "Resume el razonamiento con sus límites."
          },
          {
            "text": "Todas las asociaciones perdieron automáticamente sus permisos.",
            "cat": 1,
            "why": "Amplía o invierte el alcance de las fuentes."
          },
          {
            "text": "Tres alegaciones se enviaron a una dirección recién desactivada.",
            "cat": 0,
            "why": "Conserva un detalle explícito del expediente."
          },
          {
            "text": "La nota demuestra que las siete alegaciones fueron puntuales.",
            "cat": 1,
            "why": "Contradice la condición documentada."
          }
        ]
      },
      {
        "id": "c2-01-microescritura",
        "type": "open",
        "prompt": "Produce dos versiones breves antes del dossier de Dos lecturas, una responsabilidad.",
        "items": [
          {
            "prompt": "Redacta una apertura de 80–100 palabras para el destinatario de «Dos lecturas, una responsabilidad». Conserva la tesis y una reserva.",
            "model": "La revisión de siete permisos requiere explicar tanto el alcance del procedimiento como el criterio de selección. La nota interna documenta una incidencia de recepción en tres casos; no permite equiparar los otros cuatro ni anticipar su resolución. Por ello, proponemos publicar una relación de situaciones sin identificar a las asociaciones. La fórmula inicial trasladaba al público una ambigüedad que la institución debía resolver. Corregirla es necesario, pero todavía falta justificar por qué cada expediente entra en revisión. Una comunicación responsable separará el envío del escrito, su admisión y la decisión sobre el permiso.",
            "checklist": [
              "Identifico quién necesita decidir y con qué información.",
              "Separo afirmación, atribución e inferencia."
            ]
          },
          {
            "prompt": "Reformula para una persona ajena al debate de «Dos lecturas, una responsabilidad» la condición que más fácilmente se perdería al resumir. Explica el coste de omitirla.",
            "model": "Tres alegaciones se enviaron a una dirección recién desactivada. La claridad del aviso no sustituye la justificación del criterio municipal.",
            "checklist": [
              "No convierto la condición en un dato accesorio.",
              "Mantengo el alcance aunque simplifique el léxico."
            ]
          }
        ]
      },
      {
        "id": "c2-01-recuperacion",
        "type": "open",
        "prompt": "Recupera recursos con materiales suministrados de semanas anteriores. No busques rasgos ausentes en el dossier actual. Contrasta después qué recurso sería pertinente transferir al nuevo caso.",
        "items": [
          {
            "prompt": "Recuperación c1.disc.sintesis. Fuente A: «La revisión no retira automáticamente el permiso». Fuente B: «Tres escritos llegaron a una dirección desactivada». Versión pública defectuosa: «Todos los permisos quedan anulados». \n\nSintetiza ambas fuentes para las asociaciones y explica qué cambia al pasar del registro del expediente a una nota clara. Conserva procedimiento, incidencia y resultado como conceptos distintos. Contraste nuevo suministrado de «Dos lecturas, una responsabilidad»: «La asociación denunció el cierre; la comisión entrevistó a su asesora.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Se revisan siete permisos y todavía no se ha decidido su retirada. En tres expedientes se documenta un problema de recepción. La versión pública debe explicar esa incidencia sin convertirla en anulación general ni en concesión automática. El cambio de registro conserva las condiciones y hace explícitas las relaciones que el expediente daba por conocidas. En el nuevo contraste, «La asociación denunció el cierre; la comisión entrevistó a su asesora.» debe interpretarse dentro de esta cuestión: Alcance, adjunción y responsabilidad editorial. La semejanza de función no convierte ambos casos en hechos equivalentes.",
            "checklist": [
              "Mi respuesta se apoya en el estímulo suministrado o en el audio anterior identificado.",
              "Distingo observación, interpretación y límite de lo que este material permite comprobar."
            ]
          },
          {
            "prompt": "Recuperación c1.wri.revision-registro. Fuente A: «La revisión no retira automáticamente el permiso». Fuente B: «Tres escritos llegaron a una dirección desactivada». Versión pública defectuosa: «Todos los permisos quedan anulados». \n\nSintetiza ambas fuentes para las asociaciones y explica qué cambia al pasar del registro del expediente a una nota clara. Conserva procedimiento, incidencia y resultado como conceptos distintos. Contraste nuevo suministrado de «Dos lecturas, una responsabilidad»: «La asociación denunció el cierre; la comisión entrevistó a su asesora.». Explica qué relación de significado comparte con el material anterior y qué no puedes trasladar sin añadir evidencia.",
            "model": "Se revisan siete permisos y todavía no se ha decidido su retirada. En tres expedientes se documenta un problema de recepción. La versión pública debe explicar esa incidencia sin convertirla en anulación general ni en concesión automática. El cambio de registro conserva las condiciones y hace explícitas las relaciones que el expediente daba por conocidas. En el nuevo contraste, «La asociación denunció el cierre; la comisión entrevistó a su asesora.» debe interpretarse dentro de esta cuestión: Alcance, adjunción y responsabilidad editorial. La semejanza de función no convierte ambos casos en hechos equivalentes.",
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
    "task": "Redacta una nota pública de 450–550 palabras y un comentario editorial integrado que explique dos cambios de alcance. Distingue incidencia técnica, admisión del escrito y decisión sobre el permiso. El público no dispone del expediente.",
    "context": "Entrega un texto independiente y conserva una segunda versión con cambios comentados. El modelo muestra una apertura posible; no sustituye el dossier completo.",
    "steps": [
      "Traza un mapa de fuentes: afirmación, prueba, límite y destinatario.",
      "Decide el orden según la acción que necesita realizar tu lector; reserva espacio para una objeción fuerte.",
      "Redacta sin copiar el modelo. Integra al menos dos fuentes y atribuye sus diferencias.",
      "Revisa el alcance de tres formulaciones, lee un párrafo en voz alta y explica dos cambios de estilo."
    ],
    "useLanguage": [
      "La comisión entrevistó a la asesora de la asociación que denunció el cierre.",
      "La asociación denunció el cierre; la comisión entrevistó a su asesora.",
      "Solo se revisarán los informes incompletos.",
      "admitir a trámite",
      "resolver el fondo",
      "alcance"
    ],
    "model": [
      "Modelo parcial de apertura (no es una entrega completa): La revisión de siete permisos requiere explicar tanto el alcance del procedimiento como el criterio de selección. La nota interna documenta una incidencia de recepción en tres casos; no permite equiparar los otros cuatro ni anticipar su resolución. Por ello, proponemos publicar una relación de situaciones sin identificar a las asociaciones. La fórmula inicial trasladaba al público una ambigüedad que la institución debía resolver. Corregirla es necesario, pero todavía falta justificar por qué cada expediente entra en revisión. Una comunicación responsable separará el envío del escrito, su admisión y la decisión sobre el permiso."
    ],
    "checklist": [
      "La tesis tiene alcance preciso y pruebas identificables.",
      "No convierto una propuesta en decisión ni una inferencia en dato.",
      "El registro responde al destinatario y no borra condiciones.",
      "La cohesión conserva referentes y voces sin repeticiones inútiles.",
      "La revisión explica qué cambia para quien lee."
    ],
    "words": [
      450,
      550
    ]
  },
  "speaking": {
    "intro": "Planifica con palabras clave, no un guion leído. La grabación, si la usas, permanece local; el navegador no califica pronunciación ni calidad oral.",
    "tasks": [
      {
        "title": "Exposición situada",
        "prompt": "Actúa como responsable de edición ante una comisión: defiende dos reformulaciones, responde a la acusación de que suavizas un error y aclara una lectura inesperada propuesta por tu interlocutor.",
        "prep": [
          "Anota tesis, dos pruebas, una objeción y una reserva.",
          "Marca dos focos prosódicos y un punto donde cambiarás de registro."
        ],
        "seconds": 240,
        "model": "La revisión de siete permisos requiere explicar tanto el alcance del procedimiento como el criterio de selección. La nota interna documenta una incidencia de recepción en tres casos; no permite equiparar los otros cuatro ni anticipar su resolución. Por ello, proponemos publicar una relación de situaciones sin identificar a las asociaciones. La fórmula inicial trasladaba al público una ambigüedad que la institución debía resolver. Corregirla es necesario, pero todavía falta justificar por qué cada expediente entra en revisión. Una comunicación responsable separará el envío del escrito, su admisión y la decisión sobre el permiso.",
        "selfCheck": [
          "La condición principal se oye con claridad.",
          "Distingo mi interpretación de las voces citadas.",
          "Puedo reparar una frase sin abandonar el argumento."
        ]
      },
      {
        "title": "Interacción y reformulación",
        "prompt": "Tu interlocutor sostiene: «Todas las asociaciones perdieron automáticamente sus permisos.». Responde sin caricaturizarlo, formula dos preguntas de seguimiento y pide que reformule tu condición principal. Después resume para una persona que no conoce el expediente de Dos lecturas, una responsabilidad.",
        "prep": [
          "Prepara una concesión real y una corrección de alcance.",
          "Anticipa qué término deberás explicar sin jerga."
        ],
        "seconds": 240,
        "model": "La claridad del aviso no sustituye la justificación del criterio municipal. Tres alegaciones se enviaron a una dirección recién desactivada.",
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
        "task": "Presenta tu decisión más discutible sobre Dos lecturas, una responsabilidad y pide un contraejemplo que la ponga a prueba.",
        "phrases": [
          "Mi lectura se apoya en…",
          "Cambiaría de interpretación si…"
        ]
      },
      {
        "move": "Reformula",
        "task": "Explica el límite «Tres alegaciones se enviaron a una dirección recién desactivada.» a otro público sin rebajar su importancia.",
        "phrases": [
          "En otros términos…",
          "Esta versión conserva…"
        ]
      },
      {
        "move": "Negocia",
        "task": "Responde a la objeción «La revisión ya equivale a una sanción firme.» y acuerda una formulación que ambos puedan defender.",
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
        "q": "Balance de Dos lecturas, una responsabilidad: ¿qué conclusión conserva el alcance?",
        "options": [
          "Todas las asociaciones perdieron automáticamente sus permisos.",
          "La claridad del aviso no sustituye la justificación del criterio municipal."
        ],
        "answer": 1,
        "why": "Relaciona el texto principal con el documento complementario."
      },
      {
        "type": "choice",
        "q": "En una revisión final de Dos lecturas, una responsabilidad, ¿qué afirmación debe rechazarse?",
        "options": [
          "La nota demuestra que las siete alegaciones fueron puntuales.",
          "Tres alegaciones se enviaron a una dirección recién desactivada."
        ],
        "answer": 0,
        "why": "La primera opción contradice la condición explícita."
      },
      {
        "type": "listen",
        "q": "Escucha esta síntesis de Dos lecturas, una responsabilidad. ¿Qué interpretación mantiene?",
        "options": [
          "El temor al titular influye en la resistencia a precisar el texto.",
          "La revisión ya equivale a una sanción firme."
        ],
        "answer": 0,
        "why": "La relación expresada limita una generalización.",
        "audio": "El temor al titular influye en la resistencia a precisar el texto.",
        "voice": "es-ES-f"
      },
      {
        "type": "gap",
        "q": "En «Dos lecturas, una responsabilidad», ¿qué unidad expresa «aceptar examinar, sin dar la razón»? ___ .",
        "answers": [
          [
            "admitir a trámite"
          ]
        ],
        "hint": "aceptar examinar, sin dar la razón",
        "why": "Recupera la unidad a partir de su función, no de una traducción."
      },
      {
        "type": "gap",
        "q": "Para nombrar «decidir la cuestión sustantiva» en este expediente usamos ___ .",
        "answers": [
          [
            "resolver el fondo"
          ]
        ],
        "why": "La distinción léxica debe conservarse al mediar."
      },
      {
        "type": "error",
        "sentence": "Las alegaciones cuyo envío llegaron tarde serán revisadas.",
        "answers": [
          "Las alegaciones cuyo envío llegó tarde serán revisadas."
        ],
        "why": "La concordancia se establece con envío, núcleo singular del sujeto de llegó."
      },
      {
        "type": "transform",
        "source": "La asociación retiró la queja. La asesora de esa asociación compareció.",
        "instruction": "Une las dos frases mediante una relativa, dejando inequívoco que la asociación retiró la queja. Empieza con «La asesora de la asociación que…».",
        "answers": [
          "La asesora de la asociación que retiró la queja compareció."
        ],
        "why": "Alcance explícito: conserva la relación solicitada y compara qué se hace explícito."
      },
      {
        "type": "open",
        "prompt": "Cierre de «Dos lecturas, una responsabilidad»: escribe 90–120 palabras para una audiencia nueva. Incluye tesis, condición y una pregunta pendiente; justifica una elección de registro.",
        "model": "La revisión de siete permisos requiere explicar tanto el alcance del procedimiento como el criterio de selección. La nota interna documenta una incidencia de recepción en tres casos; no permite equiparar los otros cuatro ni anticipar su resolución. Por ello, proponemos publicar una relación de situaciones sin identificar a las asociaciones. La fórmula inicial trasladaba al público una ambigüedad que la institución debía resolver. Corregirla es necesario, pero todavía falta justificar por qué cada expediente entra en revisión. Una comunicación responsable separará el envío del escrito, su admisión y la decisión sobre el permiso.",
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
      "Interpreto alcance, adjunción y responsabilidad editorial en fuentes originales.",
      "Puedo explicar por qué «Todas las asociaciones perdieron automáticamente sus permisos.» excede la evidencia.",
      "Defiendo y reviso un dossier escrito y oral con destinatario concreto."
    ],
    "review": [
      "Dentro de dos días, reconstruye sin mirar el límite: Tres alegaciones se enviaron a una dirección recién desactivada.",
      "Dentro de una semana, reescribe el cierre para otro público y contrástalo con tu versión inicial.",
      "En clase, pide una objeción a «La claridad del aviso no sustituye la justificación del criterio municipal.» y registra qué cambiarías."
    ]
  }
};
