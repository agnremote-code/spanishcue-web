import type { Module } from "../../types";

/**
 * B1 · semana 8 · Autoestudio espejo de G101 (aunque + indicativo), G102 (si +
 * presente y futuro) y G103 (condicional simple). Repaso autónomo con una corredora
 * principiante que prepara su primera media maratón en Málaga.
 */
export const b1w08: Module = {
  "id": "b1-08",
  "level": "b1",
  "week": 8,
  "kind": "core",
  "title": "Mi primera media maratón: aunque cueste, si entreno, yo que tú…",
  "subtitle": "Repaso de «aunque» + indicativo para aceptar un obstáculo real, de «si» + presente para condiciones posibles y del condicional para pedir, aconsejar e imaginar.",
  "stop": {
    "place": "Málaga",
    "country": "España"
  },
  "minutes": 95,
  "newObjectives": [
    "b1.gram.g101",
    "b1.gram.g102",
    "b1.gram.g103",
    "b1.voc.w08-correr-entrenar",
    "b1.pron.w08-ria-ia",
    "b1.lis.w08-consejos-entrenadora",
    "b1.read.w08-guia-primera-carrera",
    "b1.wri.w08-correo-consejos",
    "b1.spk.w08-plan-negociado",
    "b1.fun.w08-animar-aconsejar",
    "b1.disc.w08-obstaculo-decision"
  ],
  "reviewObjectives": [],
  "prerequisites": [],
  "goal": {
    "canDo": "Al final de esta semana puedes reconocer las dificultades de un reto («aunque no tengo experiencia…»), plantear qué pasará en cada caso («si llueve, correremos igual») y dar consejos con cortesía («yo que tú, empezaría despacio»).",
    "steps": [
      "Repasa «aunque» + indicativo y sus compañeros: «pero», «sin embargo», «aun así», «a pesar de».",
      "Repasa «si» + presente y las cinco consecuencias posibles.",
      "Repasa la forma del condicional y sus usos: cortesía, consejo, hipótesis y futuro desde el pasado.",
      "Escucha a una entrenadora de Málaga y lee la guía de su club para principiantes.",
      "Escribe un correo de ánimo y consejos, revísalo y graba tus consejos en voz alta."
    ]
  },
  "theory": {
    "intro": "Esta semana repasas tres clases que suelen aparecer juntas cuando alguien duda ante un reto: aceptas un obstáculo («aunque…»), piensas qué pasará en cada caso («si…») y das o pides consejo («yo que tú…»). Te acompaña Nuria, que se ha apuntado a la media maratón de Málaga sin haber corrido nunca más de cinco kilómetros.",
    "parts": [
      {
        "heading": "«Aunque» + indicativo: acepto el obstáculo y sigo adelante",
        "body": [
          "Con «aunque» + indicativo presentas un obstáculo como un hecho real y dices que no impide la idea principal: «Aunque tengo poco tiempo, entreno cuatro días». Puede ir delante, con coma, o detrás, como una reserva final: «Me encanta correr, aunque me cuesta madrugar». También funciona en pasado: «Aunque llovía, salimos a correr».",
          "El obstáculo va con «aunque»; el resultado puede ir con «pero», «sin embargo» (más formal, tras punto o punto y coma) o «aun así». No combines «aunque» y «pero» en la misma frase. «A pesar de» lleva un nombre o un infinitivo (mismo sujeto), y «a pesar de que», indicativo."
        ],
        "table": {
          "caption": "Un obstáculo, cinco maneras de decirlo",
          "head": [
            "Estructura",
            "Ejemplo"
          ],
          "rows": [
            [
              "aunque + indicativo, …",
              "Aunque hace calor, voy a correr a mediodía."
            ],
            [
              "…, aunque + indicativo",
              "Voy a correr a mediodía, aunque hace calor."
            ],
            [
              "… . Sin embargo, …",
              "Hace calor. Sin embargo, voy a correr a mediodía."
            ],
            [
              "…, pero aun así …",
              "Hace calor, pero aun así voy a correr a mediodía."
            ],
            [
              "a pesar de + nombre / infinitivo",
              "A pesar del calor, voy a correr a mediodía."
            ]
          ]
        },
        "mistakes": [
          {
            "wrong": "Aunque estoy cansada, pero termino la carrera.",
            "right": "Aunque estoy cansada, termino la carrera.",
            "why": "«Aunque» ya introduce el contraste; «pero» sobra."
          },
          {
            "wrong": "A pesar de que no entrené, pero llegué a la meta.",
            "right": "A pesar de que no entrené, llegué a la meta.",
            "why": "Igual que con «aunque», no se añade «pero»."
          }
        ],
        "tip": "Esta semana usas «aunque» con indicativo porque el obstáculo es un hecho que conoces. Si no sabes si es verdad, más adelante verás que se puede usar el subjuntivo."
      },
      {
        "heading": "«Si» + presente: condiciones posibles",
        "body": [
          "En una condición real o posible, detrás de «si» va siempre el presente de indicativo. Lo que cambia es la consecuencia, según tu intención: una verdad general o una costumbre (presente), una predicción o una promesa (futuro o «ir a»), una instrucción (imperativo), un permiso o una obligación («poder», «tener que»).",
          "Nunca uses futuro ni presente de subjuntivo detrás de este «si». Distingue también «si» de «cuando»: «si llueve» deja abierta la posibilidad; «cuando llueva» da por hecho que lloverá (y lleva subjuntivo, como viste en la semana 6). Cuando «si» significa «whether» («no sé si…»), sí admite el futuro: «No sé si llegaré a la meta»."
        ],
        "table": {
          "caption": "«Si» + presente y cinco consecuencias",
          "head": [
            "Intención",
            "Consecuencia",
            "Ejemplo"
          ],
          "rows": [
            [
              "Verdad general",
              "presente",
              "Si no bebes agua, te cansas antes."
            ],
            [
              "Predicción o promesa",
              "futuro / ir a",
              "Si entrenas tres días por semana, llegarás a la meta."
            ],
            [
              "Instrucción",
              "imperativo",
              "Si te duele la rodilla, para y camina."
            ],
            [
              "Permiso",
              "poder + infinitivo",
              "Si llegas tarde, puedes recoger el dorsal el domingo."
            ],
            [
              "Obligación",
              "tener que + infinitivo",
              "Si quieres correr, tienes que inscribirte antes del día 20."
            ]
          ]
        },
        "mistakes": [
          {
            "wrong": "Si lloverá el domingo, correremos con chubasquero.",
            "right": "Si llueve el domingo, correremos con chubasquero.",
            "why": "Detrás del «si» condicional no se usa el futuro."
          },
          {
            "wrong": "Si tengas dudas, pregunta a la entrenadora.",
            "right": "Si tienes dudas, pregunta a la entrenadora.",
            "why": "Detrás de «si» no va presente de subjuntivo."
          }
        ]
      },
      {
        "heading": "El condicional: una forma fácil y doce irregulares",
        "body": [
          "El condicional se forma con el infinitivo completo más las terminaciones -ía, -ías, -ía, -íamos, -íais, -ían, iguales para los tres grupos de verbos. Los verbos irregulares tienen la misma raíz que en el futuro: tendr-, saldr-, podr-, pondr-, vendr-, sabr-, querr-, habr-, dir-, har-, cabr-, valdr-.",
          "Todas las formas llevan tilde en la «í». Atención: el pretérito imperfecto de los verbos en -er e -ir tiene las mismas terminaciones, pero sin la «r» del infinitivo: «corría» (imperfecto) frente a «correría» (condicional)."
        ],
        "table": {
          "caption": "Condicional de tres verbos",
          "head": [
            "Persona",
            "entrenar",
            "correr",
            "tener (irregular)"
          ],
          "rows": [
            [
              "yo",
              "entrenaría",
              "correría",
              "tendría"
            ],
            [
              "tú",
              "entrenarías",
              "correrías",
              "tendrías"
            ],
            [
              "él / ella / usted",
              "entrenaría",
              "correría",
              "tendría"
            ],
            [
              "nosotros / nosotras",
              "entrenaríamos",
              "correríamos",
              "tendríamos"
            ],
            [
              "vosotros / vosotras",
              "entrenaríais",
              "correríais",
              "tendríais"
            ],
            [
              "ellos / ellas / ustedes",
              "entrenarían",
              "correrían",
              "tendrían"
            ]
          ]
        },
        "mistakes": [
          {
            "wrong": "Yo que tú, poneria la alarma a las seis.",
            "right": "Yo que tú, pondría la alarma a las seis.",
            "why": "«Poner» es irregular: «pondría», con tilde en la «í»."
          },
          {
            "wrong": "¿Me deciría a qué hora sale el tren?",
            "right": "¿Me diría a qué hora sale el tren?",
            "why": "La raíz de «decir» en condicional es «dir-»."
          }
        ]
      },
      {
        "heading": "Para qué sirve el condicional",
        "body": [
          "Pedir con cortesía: «¿Podrías apuntarme a la carrera?», «Me gustaría hablar con la entrenadora», «¿Le importaría guardarme la mochila?». Aconsejar: «Deberías descansar», «Yo que tú / Yo en tu lugar, compraría otras zapatillas», «Sería buena idea estirar después».",
          "Imaginar una situación que no es la real: «Con más tiempo, entrenaría todos los días». Y contar un futuro visto desde el pasado, sobre todo después de «dijo que», «prometió que», «pensaba que»: «La entrenadora dijo que el recorrido sería llano»."
        ],
        "examples": [
          {
            "es": "¿Podría decirme dónde recojo el dorsal?",
            "note": "Cortesía con «usted»."
          },
          {
            "es": "Yo en tu lugar, no estrenaría zapatillas el día de la carrera.",
            "note": "Consejo."
          },
          {
            "es": "En un mundo ideal, correríamos siempre junto al mar.",
            "note": "Hipótesis."
          },
          {
            "es": "Nuria pensaba que la carrera empezaría a las diez.",
            "note": "Futuro visto desde el pasado."
          }
        ],
        "mistakes": [
          {
            "wrong": "Yo que tú, iré al médico mañana.",
            "right": "Yo que tú, iría al médico mañana.",
            "why": "«Yo que tú» y «yo en tu lugar» imaginan otra situación: van siempre con condicional."
          }
        ]
      }
    ]
  },
  "grammar": {
    "intro": "Practicas cada clase por separado y después las combinas.",
    "exercises": [
      {
        "id": "b1-08-gramatica-aunque",
        "type": "choice",
        "title": "Obstáculo y resultado",
        "prompt": "Elige la opción correcta.",
        "items": [
          {
            "q": "___ me duelen las piernas, mañana vuelvo a entrenar.",
            "options": [
              "Pero",
              "Aunque",
              "Sin embargo"
            ],
            "answer": 1,
            "why": "El obstáculo va delante con «aunque» y coma."
          },
          {
            "q": "No había entrenado mucho. ___, terminé en dos horas.",
            "options": [
              "Aunque",
              "A pesar de",
              "Aun así"
            ],
            "answer": 2,
            "why": "Tras punto, el resultado inesperado va con «aun así» (o «sin embargo»)."
          },
          {
            "q": "A pesar ___ viento, batí mi récord.",
            "options": [
              "del",
              "de que el",
              "que el"
            ],
            "answer": 0,
            "why": "«A pesar de» + nombre: «a pesar del viento»."
          },
          {
            "q": "Sigo corriendo, ___ ya no tengo veinte años.",
            "options": [
              "a pesar de",
              "aunque",
              "pero aun así"
            ],
            "answer": 1,
            "why": "Reserva final con «aunque» + indicativo."
          }
        ]
      },
      {
        "id": "b1-08-gramatica-si-presente",
        "type": "gap",
        "title": "Condiciones posibles",
        "prompt": "Completa con la forma correcta del verbo entre paréntesis.",
        "items": [
          {
            "q": "Si ___ temprano, encontraremos sitio en el aparcamiento. (salir, nosotros)",
            "answers": [
              [
                "salimos"
              ]
            ],
            "why": "«Si» + presente de indicativo."
          },
          {
            "q": "Si te ___ un calambre, ___ y estira el músculo. (dar / parar, tú)",
            "answers": [
              [
                "da"
              ],
              [
                "para"
              ]
            ],
            "why": "Condición en presente; instrucción en imperativo."
          },
          {
            "q": "Si no ___ antes del viernes, no ___ correr. (inscribirse / poder, tú)",
            "answers": [
              [
                "te inscribes"
              ],
              [
                "podrás",
                "puedes"
              ]
            ],
            "why": "Condición en presente; consecuencia con «poder»."
          },
          {
            "q": "No sé si ___ mañana: la previsión dice que sí. (llover)",
            "answers": [
              [
                "lloverá",
                "va a llover"
              ]
            ],
            "why": "Aquí «si» significa «whether»: admite futuro."
          },
          {
            "q": "Si ___ agua cada veinte minutos, no te deshidratas. (beber, tú)",
            "answers": [
              [
                "bebes"
              ]
            ],
            "why": "Verdad general: presente en las dos partes."
          }
        ]
      },
      {
        "id": "b1-08-gramatica-condicional-uso",
        "type": "classify",
        "title": "¿Para qué usa el condicional?",
        "prompt": "Clasifica cada frase según el uso del condicional.",
        "categories": [
          "Cortesía",
          "Consejo",
          "Hipótesis o futuro desde el pasado"
        ],
        "items": [
          {
            "text": "¿Te importaría correr a mi lado los primeros kilómetros?",
            "cat": 0
          },
          {
            "text": "Yo que tú, cenaría pasta la noche anterior.",
            "cat": 1
          },
          {
            "text": "Me dijeron que habría fruta en el kilómetro quince.",
            "cat": 2
          },
          {
            "text": "Deberías dormir ocho horas antes de la carrera.",
            "cat": 1
          },
          {
            "text": "Con unas zapatillas mejores, iría más rápido.",
            "cat": 2
          },
          {
            "text": "¿Podría decirme dónde está la salida?",
            "cat": 0
          }
        ]
      },
      {
        "id": "b1-08-gramatica-errores",
        "type": "error",
        "title": "Corrige el error",
        "prompt": "Cada frase tiene un error de las tres clases. Escríbela bien.",
        "items": [
          {
            "sentence": "Si querrás mejorar, tienes que descansar también.",
            "answers": [
              "Si quieres mejorar, tienes que descansar también."
            ],
            "why": "Detrás de «si» condicional va el presente."
          },
          {
            "sentence": "Aunque llovía mucho, pero salimos a correr.",
            "answers": [
              "Aunque llovía mucho, salimos a correr.",
              "Llovía mucho, pero salimos a correr."
            ],
            "why": "No se combinan «aunque» y «pero»."
          },
          {
            "sentence": "Yo en tu lugar, haría estiramientos y bebería más agua, y salería antes.",
            "answers": [
              "Yo en tu lugar, haría estiramientos y bebería más agua, y saldría antes."
            ],
            "why": "El condicional de «salir» es irregular: «saldría»."
          },
          {
            "sentence": "Pensaba que la carrera será más fácil, pero fue durísima.",
            "answers": [
              "Pensaba que la carrera sería más fácil, pero fue durísima."
            ],
            "why": "Futuro visto desde un pasado («pensaba»): condicional."
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Palabras para hablar de un plan de entrenamiento y del día de la carrera.",
    "groups": [
      {
        "title": "Prepararse",
        "items": [
          {
            "es": "inscribirse en una carrera"
          },
          {
            "es": "el plan de entrenamiento"
          },
          {
            "es": "la tirada larga",
            "note": "La sesión semanal de más kilómetros."
          },
          {
            "es": "el ritmo"
          },
          {
            "es": "estirar"
          },
          {
            "es": "las agujetas",
            "note": "El dolor muscular del día siguiente."
          }
        ]
      },
      {
        "title": "El día de la carrera",
        "items": [
          {
            "es": "recoger el dorsal"
          },
          {
            "es": "la salida"
          },
          {
            "es": "el avituallamiento"
          },
          {
            "es": "el recorrido"
          },
          {
            "es": "cruzar la meta"
          },
          {
            "es": "la medalla de finalista"
          }
        ]
      },
      {
        "title": "Cómo te sientes",
        "items": [
          {
            "es": "estar en forma"
          },
          {
            "es": "quedarse sin fuerzas"
          },
          {
            "es": "darlo todo"
          },
          {
            "es": "ir a tu aire"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "b1-08-vocabulario-definiciones",
        "type": "match",
        "title": "Cada expresión con su significado",
        "prompt": "Une cada expresión con su explicación.",
        "pairs": [
          {
            "left": "el dorsal",
            "right": "el número que llevas en la camiseta"
          },
          {
            "left": "el avituallamiento",
            "right": "el punto donde dan agua y fruta durante la carrera"
          },
          {
            "left": "las agujetas",
            "right": "el dolor muscular después de un esfuerzo"
          },
          {
            "left": "ir a tu aire",
            "right": "correr a tu ritmo, sin presión"
          },
          {
            "left": "la tirada larga",
            "right": "el entrenamiento semanal con más kilómetros"
          }
        ],
        "why": "Piensa en qué momento del entrenamiento o de la carrera aparece cada cosa."
      },
      {
        "id": "b1-08-vocabulario-huecos",
        "type": "gap",
        "title": "El mensaje de Nuria",
        "prompt": "Completa con una palabra o expresión del banco.",
        "bank": [
          "meta",
          "en forma",
          "recorrido",
          "inscribirme",
          "sin fuerzas"
        ],
        "items": [
          {
            "q": "Por fin me he decidido a ___ en la media maratón.",
            "answers": [
              [
                "inscribirme"
              ]
            ],
            "why": "Apuntarse oficialmente a una carrera."
          },
          {
            "q": "Todavía no estoy ___, pero tengo tres meses.",
            "answers": [
              [
                "en forma"
              ]
            ],
            "why": "Estar en buena condición física."
          },
          {
            "q": "El ___ pasa por el puerto y por el centro histórico.",
            "answers": [
              [
                "recorrido"
              ]
            ],
            "why": "El camino de la carrera."
          },
          {
            "q": "Mi miedo es quedarme ___ en el kilómetro dieciocho.",
            "answers": [
              [
                "sin fuerzas"
              ]
            ],
            "why": "No tener energía para seguir."
          },
          {
            "q": "Si cruzo la ___, lo celebraremos con un espeto de sardinas.",
            "answers": [
              [
                "meta"
              ]
            ],
            "why": "El final de la carrera."
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "«Correría» o «corría»: la «r» que separa el condicional del imperfecto",
    "explanation": [
      "En los verbos en -er e -ir, el condicional y el imperfecto se parecen mucho: «corría / correría», «salía / saldría», «tenía / tendría». La diferencia está en la sílaba «-rí-» del condicional, que conserva la «r» del infinitivo o de la raíz irregular. Escucha si aparece esa sílaba antes de la «-ía» final.",
      "En las dos formas la «í» es tónica y forma hiato con la «a»: co-rre-RÍ-a, co-RRÍ-a. No la conviertas en diptongo («correrya»); pronuncia dos sílabas claras al final. En «-ríamos» el acento sigue en la «í»: co-rre-RÍ-a-mos."
    ],
    "examples": [
      {
        "es": "De niña corría por la playa. / Yo que tú, correría por la playa.",
        "note": "Imperfecto (costumbre) frente a condicional (consejo)."
      },
      {
        "es": "Antes salía a las siete. / Yo saldría a las siete.",
        "note": "Sa-LÍ-a / sal-DRÍ-a."
      }
    ],
    "perceive": {
      "id": "b1-08-pronunciacion-ria-ia",
      "type": "listen",
      "title": "¿Condicional o imperfecto?",
      "prompt": "Escucha y elige la forma que oyes.",
      "items": [
        {
          "q": "¿Qué forma oyes?",
          "options": [
            "corría",
            "correría"
          ],
          "answer": 1,
          "why": "Oyes «-rrería»: condicional de hipótesis.",
          "audio": "Con más tiempo, correría todos los días.",
          "voice": "es-ES-f"
        },
        {
          "q": "¿Y aquí?",
          "options": [
            "salía",
            "saldría"
          ],
          "answer": 0,
          "why": "Sin «dr»: imperfecto de costumbre.",
          "audio": "Cuando vivía en Málaga, salía a correr al amanecer.",
          "voice": "es-ES-m"
        },
        {
          "q": "¿Qué forma oyes?",
          "options": [
            "tenía",
            "tendría"
          ],
          "answer": 1,
          "why": "«Ten-DRÍ-a»: condicional de consejo.",
          "audio": "Yo en tu lugar, tendría paciencia.",
          "voice": "es-MX-f"
        },
        {
          "q": "¿Y en esta frase?",
          "options": [
            "diría",
            "decía"
          ],
          "answer": 1,
          "why": "«De-CÍ-a»: imperfecto.",
          "audio": "Mi abuela decía que el mar lo curaba todo.",
          "voice": "es-AR-f"
        }
      ]
    },
    "produce": [
      {
        "text": "Yo que tú, correría más despacio.",
        "tip": "Marca bien la «í»: co-rre-RÍ-a.",
        "voice": "es-ES-f"
      },
      {
        "text": "Antes corría sola; ahora correría con un grupo.",
        "tip": "Contrasta las dos formas en la misma frase.",
        "voice": "es-ES-m"
      },
      {
        "text": "¿Podríamos salir un poco antes?",
        "tip": "Mantén el acento en la «í»: po-DRÍ-a-mos.",
        "voice": "es-MX-m"
      }
    ],
    "spelling": "Todas las formas del condicional llevan tilde en la «í» porque rompe el diptongo: entrenaría, tendríamos, saldrían."
  },
  "listening": {
    "title": "La primera sesión con la entrenadora",
    "context": "Nuria se ha apuntado a la media maratón de Málaga, que es en diciembre. En el paseo marítimo de la Malagueta se encuentra con Rocío, entrenadora de un club de corredores, para hablar de su plan.",
    "speakers": [
      {
        "id": "roc",
        "name": "Rocío",
        "voice": "es-ES-f",
        "role": "entrenadora"
      },
      {
        "id": "nur",
        "name": "Nuria",
        "voice": "es-MX-f",
        "role": "corredora principiante"
      }
    ],
    "script": [
      {
        "speaker": "nur",
        "text": "Te lo confieso: aunque ya pagué la inscripción, no sé si voy a ser capaz. Nunca he corrido más de cinco kilómetros."
      },
      {
        "speaker": "roc",
        "text": "Tranquila. Aunque te parece mucho, tenemos doce semanas, y eso es tiempo suficiente. Si entrenas cuatro días por semana, llegarás a la meta sin problema."
      },
      {
        "speaker": "nur",
        "text": "¿Y qué hago si un día no puedo? Trabajo por turnos y algunas semanas es imposible."
      },
      {
        "speaker": "roc",
        "text": "Si pierdes un entrenamiento, no intentes recuperarlo al día siguiente: sigue con el plan. Lo que no te puedes saltar es la tirada larga del domingo."
      },
      {
        "speaker": "nur",
        "text": "Vale. Otra cosa: ¿te importaría mirar mis zapatillas? Me las compré hace tres años."
      },
      {
        "speaker": "roc",
        "text": "Uy, yo que tú, me compraría otras ya, porque están muy gastadas por el talón. Eso sí, no las estrenes el día de la carrera: deberías usarlas al menos un mes antes."
      },
      {
        "speaker": "nur",
        "text": "Me dijeron que el recorrido sería muy llano. ¿Es verdad?"
      },
      {
        "speaker": "roc",
        "text": "Sí, es casi todo llano, aunque hay un tramo con viento en el puerto. Si sopla de levante, ponte detrás de otros corredores. Y si te sientes bien en el kilómetro quince, puedes acelerar un poco."
      },
      {
        "speaker": "nur",
        "text": "Me encantaría terminar en menos de dos horas y media."
      },
      {
        "speaker": "roc",
        "text": "Es un objetivo muy razonable. Empezamos el lunes."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha una vez sin leer. ¿Cuál es la idea general?",
        "exercise": {
          "id": "b1-08-escucha-global",
          "type": "choice",
          "prompt": "Elige la mejor respuesta.",
          "items": [
            {
              "q": "¿Cómo se siente Nuria al principio?",
              "options": [
                "Muy segura de terminar.",
                "Insegura, aunque ya se ha inscrito.",
                "Enfadada con la entrenadora."
              ],
              "answer": 1,
              "why": "«Aunque ya pagué la inscripción, no sé si voy a ser capaz.»"
            },
            {
              "q": "¿Qué hace Rocío durante la conversación?",
              "options": [
                "La convence de no correr.",
                "Le vende unas zapatillas.",
                "La tranquiliza y le da consejos prácticos."
              ],
              "answer": 2,
              "why": "Le explica el plan y le da consejos sobre entrenamiento y material."
            }
          ]
        }
      },
      {
        "stage": "detail",
        "prompt": "Escucha otra vez y fíjate en los detalles.",
        "exercise": {
          "id": "b1-08-escucha-detalle",
          "type": "choice",
          "prompt": "Responde según la conversación.",
          "items": [
            {
              "q": "Si Nuria pierde un entrenamiento, ¿qué tiene que hacer?",
              "options": [
                "Seguir con el plan normalmente.",
                "Recuperarlo al día siguiente.",
                "Correr el doble el domingo."
              ],
              "answer": 0,
              "why": "«No intentes recuperarlo al día siguiente: sigue con el plan.»"
            },
            {
              "q": "¿Qué le aconseja Rocío sobre las zapatillas?",
              "options": [
                "Que las arregle.",
                "Que compre otras y las use un mes antes de la carrera.",
                "Que las estrene el día de la carrera."
              ],
              "answer": 1,
              "why": "«Yo que tú, me compraría otras ya… deberías usarlas al menos un mes antes.»"
            },
            {
              "q": "¿Qué dificultad tiene el recorrido?",
              "options": [
                "Una subida muy larga.",
                "Mucho tráfico.",
                "Un tramo con viento en el puerto."
              ],
              "answer": 2,
              "why": "«Hay un tramo con viento en el puerto.»"
            }
          ]
        }
      },
      {
        "stage": "notice",
        "prompt": "Fíjate en la gramática. Completa lo que dicen exactamente.",
        "exercise": {
          "id": "b1-08-escucha-formas",
          "type": "gap",
          "prompt": "Escribe la forma que usan.",
          "items": [
            {
              "q": "Si ___ cuatro días por semana, llegarás a la meta.",
              "answers": [
                [
                  "entrenas"
                ]
              ],
              "why": "«Si» + presente; consecuencia en futuro."
            },
            {
              "q": "Yo que tú, me ___ otras ya.",
              "answers": [
                [
                  "compraría"
                ]
              ],
              "why": "Consejo con «yo que tú» + condicional."
            },
            {
              "q": "Me dijeron que el recorrido ___ muy llano.",
              "answers": [
                [
                  "sería"
                ]
              ],
              "why": "Futuro visto desde el pasado: condicional."
            },
            {
              "q": "Es casi todo llano, ___ hay un tramo con viento.",
              "answers": [
                [
                  "aunque"
                ]
              ],
              "why": "Reserva final con «aunque» + indicativo."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "Tu primera media: guía para no rendirse",
    "genre": "Guía de un club de corredores",
    "frame": "El club Corredores de la Malagueta reparte esta guía a las personas que van a correr su primera media maratón.",
    "text": [
      "Correr 21 kilómetros parece una locura cuando empiezas. Sin embargo, cada año cientos de principiantes cruzan la meta en el paseo del Parque, y la mayoría no son atletas. Aunque no tienes que sufrir para mejorar, sí necesitas constancia: si sales a correr cuatro veces por semana durante tres meses, tu cuerpo se adaptará.",
      "Las dudas más frecuentes tienen respuestas sencillas. Si te duele algo durante más de dos días, deja de correr y consulta a un fisioterapeuta. Si hace mucho calor, entrena temprano o al atardecer. Si un día te sientes sin fuerzas, puedes caminar un rato: caminar no es fracasar. Y si te aburres de correr siempre sola, únete a nuestras salidas de los miércoles por la tarde, que empiezan junto al faro.",
      "¿Y nuestros consejos para el gran día? Nosotros, en tu lugar, cenaríamos algo ligero la noche anterior y llegaríamos a la salida con cuarenta minutos de margen. Tampoco cambiaríamos nada: ni el desayuno, ni la ropa, ni las zapatillas. Muchos corredores nos dicen después que, en una segunda carrera, irían más despacio al principio.",
      "Por último, una petición: ¿podrías avisarnos si dejas el plan? Aunque lo entendemos perfectamente, nos gustaría saberlo para guardar tu plaza a otra persona."
    ],
    "glossary": [
      {
        "es": "la constancia"
      },
      {
        "es": "el fisioterapeuta"
      },
      {
        "es": "con margen"
      }
    ],
    "tasks": [
      {
        "id": "b1-08-lectura-comprension",
        "type": "choice",
        "title": "Comprensión",
        "prompt": "Responde según la guía.",
        "items": [
          {
            "q": "Según la guía, ¿qué hace falta para terminar una media maratón?",
            "options": [
              "Ser atleta.",
              "Sufrir en cada entrenamiento.",
              "Constancia durante unos tres meses."
            ],
            "answer": 2,
            "why": "«Sí necesitas constancia… durante tres meses.»"
          },
          {
            "q": "¿Qué recomienda si te sientes sin fuerzas un día?",
            "options": [
              "Caminar un rato.",
              "Abandonar el plan.",
              "Entrenar el doble al día siguiente."
            ],
            "answer": 0,
            "why": "«Puedes caminar un rato: caminar no es fracasar.»"
          },
          {
            "q": "¿Qué dicen muchos corredores después de su primera media?",
            "options": [
              "Que la cena fue demasiado ligera.",
              "Que en otra carrera empezarían más despacio.",
              "Que llegarían más tarde a la salida."
            ],
            "answer": 1,
            "why": "«En una segunda carrera, irían más despacio al principio.»"
          }
        ]
      },
      {
        "id": "b1-08-lectura-condiciones",
        "type": "match",
        "title": "Cada situación con su respuesta",
        "prompt": "Une cada situación con lo que recomienda la guía.",
        "pairs": [
          {
            "left": "Te duele algo más de dos días.",
            "right": "Deja de correr y consulta a un fisioterapeuta."
          },
          {
            "left": "Hace mucho calor.",
            "right": "Entrena temprano o al atardecer."
          },
          {
            "left": "Un día te sientes sin fuerzas.",
            "right": "Camina un rato."
          },
          {
            "left": "Decides dejar el plan.",
            "right": "Avisa al club para que guarde tu plaza a otra persona."
          }
        ],
        "why": "La guía usa «si» + presente y, en la consecuencia, imperativo o «poder»."
      }
    ],
    "noticing": {
      "prompt": "Fíjate en cómo la guía combina las tres clases de la semana.",
      "items": [
        {
          "quote": "Aunque no tienes que sufrir para mejorar, sí necesitas constancia",
          "note": "«Aunque» + indicativo concede un hecho y lo contrasta con otro."
        },
        {
          "quote": "si sales a correr cuatro veces por semana durante tres meses, tu cuerpo se adaptará",
          "note": "«Si» + presente y consecuencia en futuro: una predicción."
        },
        {
          "quote": "Nosotros, en tu lugar, cenaríamos algo ligero",
          "note": "Consejo con «en tu lugar» + condicional."
        },
        {
          "quote": "¿podrías avisarnos si dejas el plan?",
          "note": "Petición cortés con condicional y una condición con «si» + presente."
        }
      ]
    }
  },
  "practice": {
    "intro": "Combinas las tres clases y recuperas lo de las semanas 6 y 7.",
    "exercises": [
      {
        "id": "b1-08-practica-orden",
        "type": "order",
        "title": "Frases de ánimo",
        "prompt": "Ordena las palabras para formar frases completas.",
        "items": [
          {
            "words": [
              "Aunque",
              "no",
              "eres",
              "rápida,",
              "eres",
              "muy",
              "constante."
            ]
          },
          {
            "words": [
              "Si",
              "te",
              "cansas,",
              "baja",
              "el",
              "ritmo",
              "y",
              "respira."
            ]
          },
          {
            "words": [
              "Yo",
              "que",
              "tú,",
              "dormiría",
              "la",
              "siesta",
              "hoy."
            ]
          },
          {
            "words": [
              "¿Te",
              "importaría",
              "esperarme",
              "en",
              "la",
              "meta?"
            ]
          }
        ]
      },
      {
        "id": "b1-08-practica-retrieval",
        "type": "gap",
        "title": "Recuperación: semanas 6 y 7",
        "prompt": "Recuperación de semanas anteriores. Completa con la forma correcta del verbo entre paréntesis.",
        "items": [
          {
            "q": "Semana 6: Qué bien que por fin te ___ a correr con el club. (animarse)",
            "answers": [
              [
                "hayas animado"
              ]
            ],
            "why": "Reacción a algo ya ocurrido: perfecto de subjuntivo."
          },
          {
            "q": "Semana 6: No te quites la chaqueta hasta que ___ la carrera. (empezar)",
            "answers": [
              [
                "empiece"
              ]
            ],
            "why": "«Hasta que» + acción futura: subjuntivo."
          },
          {
            "q": "Semana 7: Busco unas zapatillas que ___ ligeras y baratas. (ser)",
            "answers": [
              [
                "sean"
              ]
            ],
            "why": "Antecedente buscado: subjuntivo."
          },
          {
            "q": "Semana 7: Te paso el plan para que lo ___ con calma. (leer)",
            "answers": [
              [
                "leas"
              ]
            ],
            "why": "Dos sujetos: «para que» + subjuntivo."
          }
        ]
      },
      {
        "id": "b1-08-practica-contexto",
        "type": "context",
        "title": "¿Qué dirías?",
        "prompt": "Lee la situación y elige la reacción más adecuada.",
        "items": [
          {
            "context": "Un compañero quiere correr la carrera aunque lleva una semana con fiebre.",
            "q": "¿Qué le dices?",
            "options": [
              "Si tienes fiebre, correrás mejor.",
              "Yo que tú, no correría este año.",
              "Aunque tengas fiebre, pero corre."
            ],
            "answer": 1,
            "why": "Consejo con «yo que tú» + condicional."
          },
          {
            "context": "En la recepción del hotel, quieres que te despierten a las seis.",
            "q": "¿Cómo lo pides?",
            "options": [
              "¿Podrían despertarme a las seis, por favor?",
              "Despiértenme a las seis.",
              "Si me despiertan a las seis."
            ],
            "answer": 0,
            "why": "Petición cortés con «podrían»."
          },
          {
            "context": "Hace mucho viento, pero tu amiga ha decidido salir a correr igualmente.",
            "q": "¿Cómo lo cuentas?",
            "options": [
              "Si hace viento, ha salido a correr.",
              "Aunque hace mucho viento, ha salido a correr.",
              "Aunque haga mucho viento, pero ha salido."
            ],
            "answer": 1,
            "why": "El viento es un hecho real: «aunque» + indicativo."
          }
        ]
      },
      {
        "id": "b1-08-practica-escritura-guiada",
        "type": "open",
        "title": "Respuestas breves",
        "prompt": "Escribe cada respuesta en dos o tres frases.",
        "items": [
          {
            "prompt": "Un amigo te escribe: «Quiero aprender a nadar, pero tengo cuarenta años y me da vergüenza». Anímalo y dale un consejo.",
            "model": "Aunque te da vergüenza, muchos adultos aprenden a nadar a tu edad. Yo que tú, me apuntaría a un curso para principiantes; si vas dos veces por semana, en un mes nadarás sin miedo.",
            "checklist": [
              "Reconoces el obstáculo con «aunque» + indicativo.",
              "Das un consejo en condicional y una condición con «si» + presente."
            ]
          },
          {
            "prompt": "Escribe a la organización de una carrera para pedir con cortesía que te cambien la talla de la camiseta.",
            "model": "Buenos días: me inscribí con una talla M, pero me quedaría mejor una L. ¿Podrían cambiármela? Si no es posible, lo entiendo perfectamente.",
            "checklist": [
              "Usas «podrían» o «me gustaría» para pedir.",
              "Hay una condición con «si» + presente."
            ]
          },
          {
            "prompt": "Cuenta qué te prometió alguien una vez y si lo cumplió.",
            "model": "Mi hermano me prometió que vendría a verme correr en mi primera carrera. Aunque llovía muchísimo, estaba en la meta con un paraguas y una pancarta.",
            "checklist": [
              "Usas el condicional después de «prometió que» o «dijo que».",
              "Hay un «aunque» + indicativo en pasado."
            ]
          }
        ]
      }
    ]
  },
  "writing": {
    "task": "Una amiga te escribe que quiere apuntarse a un reto (una carrera, un curso intensivo, un viaje en bicicleta), pero tiene muchas dudas. Escríbele un correo para animarla: reconoce sus dificultades, explícale qué pasará si se prepara bien y dale consejos concretos.",
    "context": "Tu amiga tiene poco tiempo y cree que es demasiado tarde para empezar. Tú ya has hecho un reto parecido.",
    "steps": [
      "Anota sus tres dudas principales y una experiencia tuya parecida.",
      "Primer párrafo: reconoce sus dificultades con «aunque» o «a pesar de» y cuéntale tu experiencia.",
      "Segundo párrafo: plantea condiciones con «si» + presente y dale al menos tres consejos en condicional.",
      "Revisa el correo: busca cada «si» y comprueba que no va seguido de futuro ni de subjuntivo; corrige también las tildes del condicional."
    ],
    "useLanguage": [
      "aunque + indicativo",
      "a pesar de + nombre / infinitivo",
      "si + presente, futuro / imperativo / poder",
      "yo que tú / yo en tu lugar + condicional",
      "deberías / sería buena idea + infinitivo"
    ],
    "model": [
      "¡Hola, Marta! Me alegra mucho tu mensaje. Ya sé que tienes poco tiempo y que nunca has hecho deporte en serio, pero eso no significa que sea tarde. Yo empecé a correr con treinta y ocho años y, aunque los primeros días me costaba subir las escaleras, a los tres meses terminé mi primera media maratón. A pesar de las agujetas, fue una de las mejores experiencias de mi vida.",
      "Si entrenas tres o cuatro días por semana, llegarás a la meta, de verdad. Yo que tú, buscaría un grupo, porque se corre mejor acompañada. También compraría unas zapatillas buenas desde el principio y no haría más kilómetros de los que dice el plan. Si un día estás muy cansada, descansa sin sentirte culpable. ¿Te gustaría salir a correr conmigo el sábado? Si quieres, te espero a las nueve en la puerta del parque y vamos a tu ritmo. ¡Ánimo!"
    ],
    "checklist": [
      "Reconozco al menos dos dificultades con «aunque» o «a pesar de», sin añadir «pero».",
      "Cada «si» de condición va seguido de presente de indicativo.",
      "Doy al menos tres consejos en condicional, con tilde en la «í».",
      "El correo tiene saludo, dos párrafos y una propuesta final."
    ],
    "words": [
      130,
      180
    ]
  },
  "speaking": {
    "intro": "Graba tus respuestas y escúchate: comprueba que pronuncias bien el condicional («-ría») y que no usas futuro detrás de «si».",
    "tasks": [
      {
        "title": "Consejos para un reto",
        "prompt": "Un amigo quiere hacer algo difícil (correr una carrera, aprender un idioma en un año, cambiar de trabajo). Habla durante dos minutos: reconoce las dificultades, explica qué pasará en distintos casos y dale consejos.",
        "prep": [
          "Dos obstáculos con «aunque» y uno con «a pesar de».",
          "Tres condiciones con «si» + presente y consecuencias diferentes.",
          "Tres consejos con «yo que tú», «deberías» y «sería buena idea»."
        ],
        "seconds": 120,
        "model": "Mira, aunque cambiar de trabajo a los cincuenta da miedo, no es imposible. A pesar de la crisis, hay empresas que buscan experiencia. Si actualizas tu currículum esta semana, podrás enviarlo a varias empresas antes de fin de mes. Si te llaman para una entrevista, prepárala con alguien. Yo que tú, hablaría con antiguos compañeros…",
        "selfCheck": [
          "¿He hablado al menos dos minutos?",
          "¿He usado presente detrás de cada «si»?",
          "¿He pronunciado la «í» del condicional?"
        ]
      },
      {
        "title": "Negocia el plan de entrenamiento",
        "prompt": "Tu entrenador quiere que entrenes cinco días por semana, pero tú solo puedes tres. Negocia con cortesía: responde a sus objeciones, pide cambios con el condicional y propone condiciones («si entreno tres días, ¿podría…?»). Practica con un compañero que haga de interlocutor.",
        "prep": [
          "Usa «¿podríamos…?», «me gustaría…» y «¿te importaría…?».",
          "Acepta una objeción con «aunque» antes de proponer otra cosa."
        ],
        "seconds": 90,
        "model": "Aunque entiendo que cinco días es lo ideal, con mi horario es imposible. ¿Podríamos hacer tres sesiones más largas? Si entreno martes, jueves y domingo, ¿me darías ejercicios de fuerza para hacer en casa?",
        "selfCheck": [
          "¿He respondido a las objeciones con cortesía?",
          "¿He propuesto al menos una condición con «si»?"
        ]
      }
    ]
  },
  "useInClass": {
    "intro": "Lleva tu correo y estas tarjetas a la próxima clase con tu profesor.",
    "cards": [
      {
        "move": "Pide",
        "task": "Pídele a tu profesor un consejo sobre un problema real de tu vida y reacciona a su respuesta.",
        "phrases": [
          "¿Tú qué harías en mi lugar?",
          "¿Me aconsejarías…?"
        ]
      },
      {
        "move": "Aconseja",
        "task": "Escucha un problema de tu profesor y dale dos consejos con «yo que tú» y «deberías».",
        "phrases": [
          "Yo que tú…",
          "Deberías…"
        ]
      },
      {
        "move": "Reconoce",
        "task": "Habla de algo que haces aunque no te gusta, y de algo que harás si se cumple una condición este mes.",
        "phrases": [
          "Aunque no me gusta, …",
          "Si este mes…, …"
        ]
      },
      {
        "move": "Imagina",
        "task": "Imagina con tu profesor cómo sería tu vida en otra ciudad, solo con el condicional.",
        "phrases": [
          "Viviría…",
          "Trabajaría…"
        ]
      }
    ],
    "bring": "Tu correo revisado y la grabación de tus consejos."
  },
  "quiz": {
    "items": [
      {
        "type": "choice",
        "q": "«___ estaba cansado, terminó el trabajo.»",
        "options": [
          "Si",
          "Aunque",
          "Pero"
        ],
        "answer": 1,
        "why": "Obstáculo real que no impide el resultado: «aunque» + indicativo."
      },
      {
        "type": "choice",
        "q": "¿Qué frase es correcta?",
        "options": [
          "Si tendré tiempo, te llamaré.",
          "Si tenga tiempo, te llamaré.",
          "Si tengo tiempo, te llamaré."
        ],
        "answer": 2,
        "why": "«Si» + presente de indicativo."
      },
      {
        "type": "listen",
        "q": "Escucha. ¿Qué hace el hablante?",
        "options": [
          "Recuerda una costumbre del pasado.",
          "Da un consejo.",
          "Pide un favor."
        ],
        "answer": 1,
        "why": "«Yo que tú» + condicional: consejo.",
        "audio": "Yo que tú, saldría un poco antes para evitar el tráfico.",
        "voice": "es-ES-m"
      },
      {
        "type": "gap",
        "q": "¿___ (poder, tú) ayudarme a mover la mesa?",
        "answers": [
          [
            "Podrías"
          ]
        ],
        "why": "Petición cortés con el condicional de «poder»."
      },
      {
        "type": "gap",
        "q": "Si ___ (llegar, tú) antes que yo, espérame en la puerta.",
        "answers": [
          [
            "llegas"
          ]
        ],
        "why": "«Si» + presente; instrucción en imperativo."
      },
      {
        "type": "gap",
        "q": "El médico dijo que el resultado ___ (estar) listo el lunes.",
        "answers": [
          [
            "estaría"
          ]
        ],
        "why": "Futuro visto desde el pasado: condicional."
      },
      {
        "type": "order",
        "words": [
          "A",
          "pesar",
          "de",
          "la",
          "lluvia,",
          "el",
          "concierto",
          "fue",
          "un",
          "éxito."
        ],
        "why": "«A pesar de» + nombre."
      },
      {
        "type": "error",
        "sentence": "Aunque es caro, pero me lo compro.",
        "answers": [
          "Aunque es caro, me lo compro.",
          "Es caro, pero me lo compro."
        ],
        "why": "No se usan «aunque» y «pero» en la misma frase."
      },
      {
        "type": "error",
        "sentence": "Con más dinero, viajaremos por todo el mundo.",
        "answers": [
          "Con más dinero, viajaríamos por todo el mundo."
        ],
        "why": "Situación imaginada: condicional."
      },
      {
        "type": "open",
        "prompt": "Reformulación: di lo mismo en una sola frase con «aunque» y un consejo en condicional. «El hotel es caro. Está al lado de la playa. Te recomiendo reservarlo.»",
        "model": "Aunque el hotel es caro, está al lado de la playa; yo que tú, lo reservaría.",
        "checklist": [
          "Usas «aunque» + indicativo para el obstáculo.",
          "No añades «pero» después de «aunque».",
          "El consejo va en condicional («reservaría», «deberías reservarlo»)."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Aceptar un obstáculo real con «aunque» + indicativo y presentar el resultado con «sin embargo» o «aun así».",
      "Plantear condiciones posibles con «si» + presente y elegir la consecuencia según tu intención.",
      "Formar el condicional regular e irregular.",
      "Pedir con cortesía, aconsejar e imaginar con el condicional."
    ],
    "review": [
      "Las raíces irregulares del futuro, que son las mismas del condicional.",
      "«Si llueve» frente a «cuando llueva» (semana 6).",
      "La diferencia de sonido entre «-ría» y «-ía»."
    ]
  },
  "related": [
    {
      "path": "/gramatica/concesivas-iniciales-aunque-indicativo",
      "label": "Clase: Concesivas iniciales: aunque + indicativo"
    },
    {
      "path": "/gramatica/condiciones-reales-si-presente-y-futuro",
      "label": "Clase: Condiciones reales: si + presente y futuro"
    },
    {
      "path": "/sistema-verbal/condicional-simple-indicativo",
      "label": "Clase: Condicional simple: consejos, cortesía e hipótesis"
    }
  ]
};
