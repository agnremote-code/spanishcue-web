import type { Module } from "../../types";

/** Original A2 week: authored scenario, skills and retrieval. */
export const a2w11: Module = {
  "id": "a2-11",
  "level": "a2",
  "week": 11,
  "kind": "core",
  "title": "Sigo aprendiendo, pero de otra manera",
  "subtitle": "Describir acciones en curso y cambios en la rutina de estudio o trabajo.",
  "stop": {
    "place": "Santa Ana",
    "country": "El Salvador"
  },
  "minutes": 105,
  "newObjectives": [
    "a2.gram.estar-gerundio",
    "a2.gram.perifrasis-fase",
    "a2.voc.cambios-habitos",
    "a2.pron.asimilacion-nasal",
    "a2.fun.describir-cambios",
    "a2.spk.videollamada"
  ],
  "reviewObjectives": [
    "a2.rev.checkpoint-1",
    "a2.lis.podcast-recuerdos",
    "a2.gram.imperativo-afirmativo",
    "a2.gram.imperativo-pronombres",
    "a2.voc.cocina-recetas",
    "a2.pron.entonacion-imperativo",
    "a2.fun.instrucciones",
    "a2.lis.receta"
  ],
  "prerequisites": [
    "a2-10"
  ],
  "goal": {
    "canDo": "Puedo describir acciones en curso y cambios en la rutina de estudio o trabajo.",
    "steps": [
      "Prepara la misión y recupera lo que ya sabes.",
      "Escucha primero; localiza después los datos de la lectura.",
      "Ensaya, escribe, revisa y lleva una intervención a clase."
    ]
  },
  "theory": {
    "intro": "Trabaja las formas como herramientas para resolver esta misión. Las escenas y los textos son originales y ficticios.",
    "parts": [
      {
        "heading": "Sigo aprendiendo, pero de otra manera · formas que necesitas",
        "body": [
          "Estar + gerundio presenta una acción en curso o una situación temporal: estoy estudiando, estamos buscando. -ar forma -ando; -er/-ir, -iendo. Leer → leyendo; pedir → pidiendo; dormir → durmiendo. No uses esta perífrasis para cada hábito: trabajo los lunes describe una rutina."
        ],
        "support": [
          "Estar + gerund tells what is happening or temporarily in progress. Seguir + gerund means continue; acabar de + infinitive means have just done."
        ],
        "examples": [
          {
            "es": "Esta semana estoy trabajando desde casa."
          },
          {
            "es": "Acabo de empezar un curso y sigo buscando un horario cómodo."
          }
        ],
        "mistakes": [
          {
            "wrong": "Sigo estudiar por mi cuenta.",
            "right": "Sigo estudiando por mi cuenta.",
            "why": "Seguir necesita gerundio para una actividad que continúa."
          }
        ]
      },
      {
        "heading": "Del sistema al mensaje",
        "body": [
          "Las perífrasis muestran fases: empezar a estudiar, acabar de llegar, volver a intentarlo, dejar de fumar y seguir aprendiendo. Después de seguir va gerundio; después de empezar a, volver a y dejar de va infinitivo. Acabo de llegar expresa pasado muy reciente. Une el cambio con una consecuencia concreta."
        ],
        "examples": [
          {
            "es": "He dejado de estudiar de noche; vuelvo a leer por la mañana."
          },
          {
            "es": "Estamos leyendo las instrucciones, no viendo un vídeo."
          }
        ]
      }
    ]
  },
  "grammar": {
    "exercises": [
      {
        "id": "grammar-gap",
        "type": "gap",
        "prompt": "Completa según la forma y el contexto indicados.",
        "items": [
          {
            "q": "Ahora estamos ___ un horario. (preparar)",
            "answers": [
              [
                "preparando"
              ]
            ]
          },
          {
            "q": "Sigo ___ español cada día. (leer)",
            "answers": [
              [
                "leyendo"
              ]
            ]
          },
          {
            "q": "He empezado ___ estudiar por la mañana.",
            "answers": [
              [
                "a"
              ]
            ]
          }
        ]
      },
      {
        "id": "grammar-transform",
        "type": "transform",
        "prompt": "Reformulación controlada: respeta las palabras y el orden indicados. En las tareas abiertas posteriores puedes elegir otras formulaciones.",
        "items": [
          {
            "source": "Estudio en este momento.",
            "instruction": "Sustituye Estudio por estar + gerundio en primera persona singular; conserva en este momento al final, sin añadir sujeto.",
            "answers": [
              "Estoy estudiando en este momento."
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          },
          {
            "source": "Todavía leo diez minutos al día.",
            "instruction": "Sustituye Todavía leo por seguir + gerundio en primera persona singular; conserva diez minutos al día al final.",
            "answers": [
              "Sigo leyendo diez minutos al día."
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          },
          {
            "source": "He enviado el mensaje hace un minuto.",
            "instruction": "Sustituye He enviado por acabar de + infinitivo y elimina hace un minuto. Conserva el mensaje al final.",
            "answers": [
              "Acabo de enviar el mensaje."
            ],
            "why": "Esta actividad controla una forma concreta. La respuesta conserva los datos y sigue las palabras y el orden indicados; otras formulaciones se practican en producción abierta."
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Aprende cada expresión como un bloque y úsala después con un dato propio.",
    "groups": [
      {
        "title": "Acciones y relaciones",
        "items": [
          {
            "es": "cambiar de horario",
            "en": "change schedule"
          },
          {
            "es": "hacer una pausa",
            "en": "take a break"
          },
          {
            "es": "organizar el tiempo",
            "en": "organise time"
          },
          {
            "es": "trabajar desde casa",
            "en": "work from home"
          }
        ]
      },
      {
        "title": "Datos para resolver la misión",
        "items": [
          {
            "es": "apuntarse a un curso",
            "en": "sign up for a course"
          },
          {
            "es": "mantener un hábito",
            "en": "keep a habit"
          },
          {
            "es": "probar otro método",
            "en": "try another method"
          },
          {
            "es": "concentrarse mejor",
            "en": "concentrate better"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "vocabulary-match",
        "type": "match",
        "prompt": "Relaciona cada expresión con su significado; después úsala oralmente en una situación nueva.",
        "pairs": [
          {
            "left": "cambiar de horario",
            "right": "change schedule"
          },
          {
            "left": "hacer una pausa",
            "right": "take a break"
          },
          {
            "left": "organizar el tiempo",
            "right": "organise time"
          },
          {
            "left": "trabajar desde casa",
            "right": "work from home"
          },
          {
            "left": "apuntarse a un curso",
            "right": "sign up for a course"
          },
          {
            "left": "mantener un hábito",
            "right": "keep a habit"
          },
          {
            "left": "probar otro método",
            "right": "try another method"
          },
          {
            "left": "concentrarse mejor",
            "right": "concentrate better"
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "La nasal se adapta al sonido siguiente",
    "explanation": [
      "En un beso o con Pablo, la n puede acercarse a una m porque los labios se preparan para b o p. Es una adaptación de la pronunciación, no un cambio de ortografía. Mantén escrito un y con; practica el enlace sin hacer una pausa artificial."
    ],
    "perceive": {
      "id": "pronunciation-perceive",
      "type": "listen",
      "prompt": "Escucha primero y decide; usa también el contexto.",
      "items": [
        {
          "audio": "Estoy hablando con Pablo.",
          "q": "¿Qué consonante sigue a con?",
          "options": [
            "p",
            "s"
          ],
          "answer": 0,
          "why": "Escucha de nuevo la frase completa y compara el dato con su forma escrita."
        },
        {
          "audio": "Tengo un bolígrafo nuevo.",
          "q": "¿Qué se escribe antes de bolígrafo?",
          "options": [
            "un",
            "um"
          ],
          "answer": 0,
          "why": "Escucha de nuevo la frase completa y compara el dato con su forma escrita."
        }
      ]
    },
    "produce": [
      {
        "text": "Estoy hablando con Pablo.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      },
      {
        "text": "Acabo de comprar un bolígrafo.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      },
      {
        "text": "Seguimos en contacto con Marta.",
        "tip": "Graba, escucha y repite. Pide a una persona que confirme lo que entendió; no hay evaluación automática de calidad oral."
      }
    ]
  },
  "listening": {
    "title": "¿Qué estás haciendo ahora?",
    "context": "Escena original de comunicación cotidiana. Escucha antes de abrir la transcripción. La reproducción disponible puede usar síntesis del navegador; no acredita una variedad regional ni una grabación humana.",
    "speakers": [
      {
        "id": "a",
        "name": "Persona A",
        "voice": "es-ES-f"
      },
      {
        "id": "b",
        "name": "Persona B",
        "voice": "es-ES-m"
      }
    ],
    "script": [
      {
        "speaker": "a",
        "text": "Hola, ¿puedes hablar un momento? Estoy preparando el calendario del curso y necesito saber si sigues viniendo los martes. Hemos empezado a usar una sala distinta."
      },
      {
        "speaker": "b",
        "text": "Sí, sigo yendo. Ahora estoy terminando un informe, pero tengo cinco minutos. He dejado de trabajar los martes por la tarde, así que ese horario me viene bien."
      },
      {
        "speaker": "a",
        "text": "Estupendo. Acabo de enviar un mensaje con la nueva dirección. Esta semana estamos probando un grupo más pequeño. Queremos dar más tiempo para hablar a cada persona."
      },
      {
        "speaker": "b",
        "text": "Lo estoy leyendo ahora. Veo que la sala está cerca de la estación. ¿Tengo que llevar el libro? He vuelto a estudiar las páginas del capítulo anterior, pero todavía no he hecho la última actividad."
      },
      {
        "speaker": "a",
        "text": "Trae el libro y tus preguntas. Seguimos usando las mismas páginas. El martes explicaremos las dudas antes de empezar el nuevo tema."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Primera escucha: busca la situación general sin abrir la transcripción.",
        "exercise": {
          "id": "listen-gist",
          "type": "choice",
          "prompt": "Escucha «¿Qué estás haciendo ahora?» y reconoce la intención.",
          "items": [
            {
              "q": "¿Para qué llaman?",
              "options": [
                "Para vender un libro",
                "Para confirmar asistencia y cambios del curso",
                "Para cancelar un informe"
              ],
              "answer": 1,
              "why": "La información de la situación corresponde a «Para confirmar asistencia y cambios del curso»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Qué mantiene la persona que estudia?",
              "options": [
                "La obligación de terminar un informe en clase",
                "La asistencia de los martes",
                "Su trabajo del martes por la tarde"
              ],
              "answer": 1,
              "why": "Comprueba el contexto y los datos de la escena: La asistencia de los martes."
            }
          ]
        }
      },
      {
        "stage": "detail",
        "prompt": "Segunda escucha: anota los datos necesarios; después comprueba tus respuestas.",
        "exercise": {
          "id": "listen-detail",
          "type": "choice",
          "prompt": "Localiza dos datos concretos en «¿Qué estás haciendo ahora?».",
          "items": [
            {
              "q": "¿Qué ha cambiado esta semana?",
              "options": [
                "La sala y el tamaño del grupo",
                "El idioma del curso",
                "El libro obligatorio"
              ],
              "answer": 0,
              "why": "La información de la situación corresponde a «La sala y el tamaño del grupo»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "¿Qué hace la segunda persona durante la llamada?",
              "options": [
                "Viaja en tren",
                "Da una clase",
                "Lee el mensaje"
              ],
              "answer": 2,
              "why": "La información de la situación corresponde a «Lee el mensaje»; comprueba la frase completa antes de volver a responder."
            }
          ]
        }
      },
      {
        "stage": "notice",
        "prompt": "Tercera escucha: atiende a las formas y a cómo se comprueba la información. La transcripción es opcional después de escuchar.",
        "exercise": {
          "id": "listen-notice",
          "type": "choice",
          "prompt": "Interpreta las palabras clave de «¿Qué estás haciendo ahora?».",
          "items": [
            {
              "q": "Acabo de enviar significa…",
              "options": [
                "Lo enviaré mañana",
                "He dejado de enviarlo",
                "Lo he enviado hace muy poco"
              ],
              "answer": 2,
              "why": "La información de la situación corresponde a «Lo he enviado hace muy poco»; comprueba la frase completa antes de volver a responder."
            },
            {
              "q": "En he vuelto a estudiar las páginas, ¿qué indica vuelto a?",
              "options": [
                "Repetición de la actividad",
                "Abandono definitivo",
                "Inicio de un tema desconocido"
              ],
              "answer": 0,
              "why": "Comprueba el contexto y los datos de la escena: Repetición de la actividad."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "Un mes con otro horario",
    "genre": "Diario de aprendizaje",
    "frame": "Texto original de práctica en una situación ficticia.",
    "text": [
      "Este mes estoy probando un horario nuevo. Antes estudiaba después de cenar, pero me dormía sobre el cuaderno. He dejado de trabajar con el ordenador por la noche y he empezado a escuchar audios durante el viaje al trabajo. No intento entender todas las palabras. Primero busco el tema y después escucho otra vez para encontrar un dato.",
      "Sigo leyendo diez minutos al día. Ahora estoy leyendo una historia sencilla que elegí en la biblioteca. Acabo de terminar el primer capítulo y he vuelto a mirar las palabras que marqué el lunes. Algunas ya me resultan familiares. Los viernes hablo con una compañera del curso. Ella está preparando una entrevista y necesita practicar preguntas.",
      "No todo funciona. A veces el autobús tiene demasiado ruido y no puedo escuchar bien. Por eso llevo también una libreta pequeña. Si no puedo usar los auriculares, escribo dos preguntas para la conversación del viernes. Mi objetivo es mantener una rutina posible, no estudiar muchas horas un solo día."
    ],
    "glossary": [
      {
        "es": "cambiar de horario",
        "en": "change schedule"
      },
      {
        "es": "hacer una pausa",
        "en": "take a break"
      },
      {
        "es": "organizar el tiempo",
        "en": "organise time"
      }
    ],
    "tasks": [
      {
        "id": "reading-choice",
        "type": "choice",
        "prompt": "Lee «Un mes con otro horario» y localiza la evidencia para cada respuesta.",
        "items": [
          {
            "q": "¿Qué actividad ha dejado la narradora?",
            "options": [
              "Hablar con una compañera",
              "Trabajar con el ordenador por la noche",
              "Leer diariamente"
            ],
            "answer": 1,
            "why": "La información de la situación corresponde a «Trabajar con el ordenador por la noche»; comprueba la frase completa antes de volver a responder."
          },
          {
            "q": "¿Qué hace si hay mucho ruido?",
            "options": [
              "Escribe preguntas en una libreta",
              "Escucha más fuerte siempre",
              "Abandona el curso"
            ],
            "answer": 0,
            "why": "La información de la situación corresponde a «Escribe preguntas en una libreta»; comprueba la frase completa antes de volver a responder."
          }
        ]
      },
      {
        "id": "reading-transfer",
        "type": "open",
        "prompt": "Usa la información de «Un mes con otro horario» para otra persona.",
        "items": [
          {
            "prompt": "Resume el dato más útil del texto para esta misión: Describir acciones en curso y cambios en la rutina de estudio o trabajo. Explica qué frase lo demuestra y qué pregunta harías después.",
            "model": "Primero selecciono la información que necesita mi interlocutor. Después explico el dato con mis palabras y señalo dónde aparece; si falta información, la pregunto sin inventarla.",
            "checklist": [
              "Seleccionas información que aparece en el texto.",
              "Separas un dato confirmado de una pregunta o una opinión."
            ]
          }
        ]
      }
    ],
    "noticing": {
      "prompt": "Vuelve al texto: interpreta estas dos frases y relaciona sus formas con el propósito del mensaje.",
      "items": [
        {
          "quote": "Este mes estoy probando un horario nuevo.",
          "note": "Explica qué información aporta esta frase y cómo prepara los datos siguientes. Después localiza una forma de la semana en este párrafo."
        },
        {
          "quote": "Sigo leyendo diez minutos al día.",
          "note": "Explica qué información aporta esta frase y cómo prepara los datos siguientes. Después localiza una forma de la semana en este párrafo."
        }
      ]
    }
  },
  "practice": {
    "intro": "La práctica combina reconstrucción, decisiones y producción breve. Haz la recuperación antes de volver a los apuntes. Para un reto con pareja, usa el modelo y las condiciones escritas como apoyo. Si estudias a solas, interpreta los dos papeles y graba primero las preguntas; después responde sin leer el modelo. Las voces sintéticas no verifican acentos regionales ni matices expresivos.",
    "exercises": [
      {
        "id": "transfer-order",
        "type": "order",
        "prompt": "Reconstruye estas intervenciones de la misión; después explica cuándo las usarías.",
        "items": [
          {
            "words": [
              "Esta",
              "semana",
              "estoy",
              "trabajando",
              "desde",
              "casa."
            ]
          },
          {
            "words": [
              "He",
              "dejado",
              "de",
              "estudiar",
              "de",
              "noche;",
              "vuelvo",
              "a",
              "leer",
              "por",
              "la",
              "mañana."
            ]
          }
        ]
      },
      {
        "id": "transfer-context",
        "type": "context",
        "prompt": "Elige una respuesta que haga avanzar la gestión, no solo una frase correcta.",
        "items": [
          {
            "options": [
              "Lo estoy leyendo ahora; normalmente leo por la noche.",
              "Siempre estoy leyéndolo ayer.",
              "Voy a dejar de seguir empezando."
            ],
            "answer": 0,
            "why": "Comprueba el contexto y los datos de la escena: Lo estoy leyendo ahora; normalmente leo por la noche..",
            "context": "Tu compañero interpreta estoy leyendo como un hábito permanente.",
            "q": "¿Qué respuesta resuelve esta dificultad?"
          },
          {
            "context": "Cuenta dos cambios en tu forma de estudiar. Tu compañero propone una rutina difícil; adapta la propuesta a tu horario y explica qué vas a mantener.",
            "q": "En esta interacción de «Sigo aprendiendo, pero de otra manera», ¿cómo compruebas que puedes continuar?",
            "options": [
              "Resumir el acuerdo o la información y pedir confirmación.",
              "Dar por supuesto que la otra persona ha entendido todos los detalles."
            ],
            "answer": 0,
            "why": "Confirmar evita que una diferencia de interpretación quede sin resolver."
          }
        ]
      },
      {
        "id": "guided-production",
        "type": "open",
        "prompt": "Ensaya dos partes breves antes de producir tu texto completo.",
        "items": [
          {
            "prompt": "Para «Sigo aprendiendo, pero de otra manera», escribe una apertura que sitúe a tu destinatario. Añade un dato nuevo elegido por ti.",
            "model": "Hola, profesora.",
            "checklist": [
              "Se entiende quién habla y por qué.",
              "Incluyes un dato concreto que no contradice la situación."
            ]
          },
          {
            "prompt": "Prepara una pregunta de seguimiento para esta interacción: Cuenta dos cambios en tu forma de estudiar. Tu compañero propone una rutina difícil; adapta la propuesta a tu horario y explica qué vas a mantener.",
            "model": "¿Puedes confirmar ese dato? Quiero comprobar que he entendido bien antes de continuar.",
            "checklist": [
              "La pregunta pide un dato útil para esta situación.",
              "Mantienes el mismo trato y respondes después a la información recibida."
            ]
          }
        ]
      },
      {
        "id": "retrieval-week-05",
        "type": "open",
        "prompt": "Recuperación sin mirar · semana 5. Usa un caso diferente de los textos anteriores.",
        "items": [
          {
            "prompt": "Reto de recuperación en la semana 11: Crea una nueva cartela para un objeto familiar. Cuenta cómo lo has encontrado, un hecho con fecha y una costumbre de su dueño. Tu pareja lee la cartela en voz alta y tú identificas qué era habitual y qué ocurrió una sola vez. Corrige después un tiempo que no encaje.",
            "model": "Esta semana he encontrado una taza. Mi tío la compró en 1998. Antes la usaba todos los domingos cuando desayunaba con sus vecinos.",
            "checklist": [
              "Resuelves todas las partes del reto con ejemplos propios.",
              "Después comparas con tus apuntes y corriges una forma o un dato."
            ]
          },
          {
            "prompt": "Comprueba la recuperación 5→11: cambia un dato de tu respuesta y reformula la parte afectada. Explica qué cambió a tu compañero.",
            "model": "En mi nueva versión cambia el lugar o la persona: Esta semana he encontrado una taza. Debo revisar también las referencias para que mi oyente entienda el cambio.",
            "checklist": [
              "El nuevo dato es coherente con el resto de la situación.",
              "Repites la parte necesaria y compruebas que el oyente lo entiende."
            ]
          }
        ]
      },
      {
        "id": "retrieval-week-09",
        "type": "open",
        "prompt": "Recuperación sin mirar · semana 9. Usa un caso diferente de los textos anteriores.",
        "items": [
          {
            "prompt": "Reto de recuperación en la semana 11: Explica una receta distinta en seis pasos, con cantidades, herramientas y dos pronombres unidos al imperativo. Da una instrucción en tú, usted, vosotros, ustedes y vos. Tu pareja altera el orden de dos pasos: escucha y corrige amablemente. Pide que repita la cantidad antes de continuar.",
            "model": "Primero lava las frutas y córtalas. Mezcla el yogur y añádelo. Tú prueba la mezcla; usted pruébela; vosotros probadla; ustedes pruébenla; vos probala. ¿Puedes repetir cuántas cucharadas, por favor?",
            "checklist": [
              "Resuelves todas las partes del reto con ejemplos propios.",
              "Después comparas con tus apuntes y corriges una forma o un dato."
            ]
          },
          {
            "prompt": "Comprueba la recuperación 9→11: cambia un dato de tu respuesta y reformula la parte afectada. Explica qué cambió a tu compañero.",
            "model": "En mi nueva versión cambia el lugar o la persona: Primero lava las frutas y córtalas. Debo revisar también las referencias para que mi oyente entienda el cambio.",
            "checklist": [
              "El nuevo dato es coherente con el resto de la situación.",
              "Repites la parte necesaria y compruebas que el oyente lo entiende."
            ]
          }
        ]
      }
    ]
  },
  "writing": {
    "task": "Escribe a tu profesor sobre tu rutina de estudio: qué estás probando, qué has dejado de hacer, qué sigues haciendo y qué acabas de terminar. Pide una recomendación concreta.",
    "context": "Escribe una primera versión propia; el modelo es una posibilidad, no un texto para copiar. Puedes usar datos ficticios.",
    "steps": [
      "Anota destinatario, propósito y tres datos necesarios.",
      "Organiza los datos en un orden que ayude a la otra persona.",
      "Escribe el borrador con apoyo de las expresiones útiles.",
      "Revisa si has respondido a todas las partes, corrige las formas y escribe una segunda versión."
    ],
    "useLanguage": [
      "Esta semana estoy trabajando desde casa.",
      "Acabo de empezar un curso y sigo buscando un horario cómodo.",
      "He dejado de estudiar de noche; vuelvo a leer por la mañana.",
      "Estamos leyendo las instrucciones, no viendo un vídeo."
    ],
    "model": [
      "Hola, profesora. Esta semana estoy estudiando por la mañana porque por la noche estoy cansada. He dejado de hacer todas las actividades el domingo y he empezado a repartirlas entre varios días. Sigo escuchando los diálogos en el autobús. Acabo de terminar la lectura sobre el horario y he vuelto a escribir mi resumen. Todavía me cuesta hablar sin leer. ¿Puede recomendarme una actividad corta para practicar antes de nuestra próxima clase? Me gustaría mantener este horario durante un mes y después comprobar qué actividades me ayudan más a recordar."
    ],
    "checklist": [
      "El destinatario puede entender el propósito sin preguntar de qué hablas.",
      "Incluyes todos los datos pedidos y no inventas confirmaciones.",
      "Los verbos y pronombres se refieren a las personas y tiempos correctos.",
      "Relacionas las ideas y mantienes un trato coherente.",
      "Relees y corriges al menos una frase después de comparar con el modelo."
    ],
    "words": [
      80,
      120
    ]
  },
  "speaking": {
    "intro": "Planifica con palabras clave, no con un texto completo. Habla, escucha tu grabación local si quieres y repite una parte más claramente.",
    "tasks": [
      {
        "title": "Tu intervención con un propósito",
        "prompt": "Describe en directo una escena real o imaginada con cuatro acciones en curso; después explica qué haces normalmente en ese lugar.",
        "prep": [
          "Elige tres datos y ordénalos.",
          "Prepara una frase inicial y un cierre que invite a responder."
        ],
        "seconds": 90,
        "selfCheck": [
          "Se entiende la situación y el orden de las ideas.",
          "Mantengo claras las palabras clave y reformulo si hace falta."
        ]
      },
      {
        "title": "Interacción con un cambio",
        "prompt": "Cuenta dos cambios en tu forma de estudiar. Tu compañero propone una rutina difícil; adapta la propuesta a tu horario y explica qué vas a mantener.",
        "prep": [
          "Prepara una pregunta de seguimiento.",
          "Imagina una respuesta inesperada y una alternativa."
        ],
        "seconds": 90,
        "selfCheck": [
          "Escucho y respondo a la necesidad del otro.",
          "Confirmo un dato o acuerdo y cedo el turno."
        ]
      }
    ]
  },
  "useInClass": {
    "intro": "La clase continúa el trabajo: lleva tu versión revisada y una duda concreta, no una lista de respuestas.",
    "cards": [
      {
        "move": "Presenta",
        "task": "Describe en directo una escena real o imaginada con cuatro acciones en curso; después explica qué haces normalmente en ese lugar."
      },
      {
        "move": "Negocia",
        "task": "Cuenta dos cambios en tu forma de estudiar. Tu compañero propone una rutina difícil; adapta la propuesta a tu horario y explica qué vas a mantener."
      },
      {
        "move": "Reformula",
        "task": "Pide al profesor que cambie un dato de la situación. Adapta tu respuesta sin leer el modelo y comprueba que el mensaje sigue siendo claro."
      },
      {
        "move": "Comprueba",
        "task": "El profesor resume lo que entendió. Corrige una diferencia de información y repite una frase cuyo sonido o ritmo quieras mejorar."
      }
    ],
    "bring": "Tu borrador revisado, tres palabras clave para hablar y una pregunta sobre la misión."
  },
  "quiz": {
    "items": [
      {
        "type": "gap",
        "q": "Mi compañero está ___ un libro. (leer)",
        "answers": [
          [
            "leyendo"
          ]
        ]
      },
      {
        "type": "gap",
        "q": "Acabo ___ terminar el informe.",
        "answers": [
          [
            "de"
          ]
        ]
      },
      {
        "type": "error",
        "sentence": "Hemos dejado de estudiando por la noche.",
        "answers": [
          "Hemos dejado de estudiar por la noche."
        ],
        "why": "Después de dejar de se usa infinitivo: estudiar."
      },
      {
        "type": "order",
        "words": [
          "Vuelvo",
          "a",
          "practicar",
          "después",
          "de",
          "la",
          "pausa."
        ]
      },
      {
        "type": "choice",
        "q": "¿Qué frase describe continuidad?",
        "options": [
          "Acabo de llegar",
          "Sigo aprendiendo"
        ],
        "answer": 1,
        "why": "La opción elegida cumple la función comunicativa indicada."
      },
      {
        "q": "¿Qué buscan las personas?",
        "options": [
          "Un libro nuevo",
          "Un informe de trabajo",
          "Otra sala para el curso"
        ],
        "answer": 2,
        "why": "Comprueba el contexto y los datos de la escena: Otra sala para el curso.",
        "type": "listen",
        "audio": "Estamos buscando otra sala para el curso."
      },
      {
        "type": "open",
        "prompt": "Evaluación de transferencia 11: Describe en directo una escena real o imaginada con cuatro acciones en curso; después explica qué haces normalmente en ese lugar.",
        "model": "Hola, profesora. Esta semana estoy estudiando por la mañana porque por la noche estoy cansada. He dejado de hacer todas las actividades el domingo y he empezado a repartirlas entre varios días. Sigo escuchando los diálogos en el autobús. Acabo de terminar la lectura sobre el horario y he vuelto a escribir mi resumen. Todavía me cuesta hablar sin leer. ¿Puede recomendarme una actividad corta para practicar antes de nuestra próxima clase? Me gustaría mantener este horario durante un mes y después comprobar qué actividades me ayudan más a recordar.",
        "checklist": [
          "Cumples el propósito con datos comprensibles.",
          "Usas las formas de la semana y revisas una duda."
        ]
      },
      {
        "type": "open",
        "prompt": "Resolución final 11: Cuenta dos cambios en tu forma de estudiar. Tu compañero propone una rutina difícil; adapta la propuesta a tu horario y explica qué vas a mantener. Añade una pregunta para comprobar la respuesta.",
        "checklist": [
          "Reaccionas a lo que dice tu interlocutor.",
          "Confirmas el dato o el acuerdo antes de terminar."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Describir acciones en curso y cambios en la rutina de estudio o trabajo.",
      "Seleccionar datos de una conversación y de un texto práctico.",
      "Producir un mensaje propio, revisarlo y responder a otra persona."
    ],
    "review": [
      "En dos días, repite la misión «Sigo aprendiendo, pero de otra manera» con personas y datos diferentes.",
      "Antes de la próxima clase, recupera las expresiones sin mirar y comprueba después una duda.",
      "Compara tu primera versión con la revisada: ¿qué entiende mejor ahora tu interlocutor?"
    ]
  }
};
