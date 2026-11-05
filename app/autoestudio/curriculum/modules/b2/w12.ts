import type { Module } from "../../types";

/**
 * B2 · semana 12 · Autoestudio espejo de G149 (se pasivo, se impersonal y activo contrastados) y
 * G150 (se accidental y responsabilidad atenuada). Repaso autónomo con una excursión escolar ficticia
 * a un museo paleontológico de Neuquén. Audio mediante síntesis; sin acreditación regional.
 */
export const b2w12: Module = {
  "id": "b2-12",
  "level": "b2",
  "week": 12,
  "kind": "core",
  "title": "Se nos pinchó una rueda, pero el informe se entregó a tiempo",
  "subtitle": "Repaso de la activa, el «se» pasivo y el «se» impersonal, y del «se» accidental para contar percances",
  "stop": {
    "place": "Neuquén",
    "country": "Argentina"
  },
  "minutes": 120,
  "newObjectives": [
    "b2.gram.g149",
    "b2.gram.g150",
    "b2.voc.w12-excursion-yacimiento",
    "b2.pron.w12-clitico-agrupado",
    "b2.lis.w12-informe-excursion",
    "b2.read.w12-diario-campana",
    "b2.wri.w12-correo-disculpa",
    "b2.spk.w12-explicar-percances",
    "b2.fun.w12-disculparse-matizando",
    "b2.disc.w12-informar-y-asumir"
  ],
  "reviewObjectives": [],
  "prerequisites": [],
  "goal": {
    "canDo": "Puedo elegir entre activa, pasiva con «ser», «se» pasivo y «se» impersonal según el texto, y contar percances con el «se» accidental sin esconder la responsabilidad cuando es mía.",
    "steps": [
      "Repasa las cuatro maneras de contar un hecho y cuándo concuerda o no el verbo con «se».",
      "Repasa el «se» accidental: concordancia, pronombre de persona y grados de responsabilidad.",
      "Escucha a dos docentes que repasan una excursión y lee la columna de una técnica de campo.",
      "Escribe un correo de balance y disculpa, revísalo y responde oralmente a una queja."
    ]
  },
  "theory": {
    "intro": "En clase comparaste con tu profesor varias maneras de contar un mismo hecho y viste cómo el «se» puede presentar un percance como involuntario. Aquí lo repasas con una excursión escolar a un museo de dinosaurios de Neuquén: avisos, informes y algún que otro accidente.",
    "parts": [
      {
        "heading": "Un hecho, cuatro maneras de contarlo",
        "body": [
          "El mismo hecho puede contarse poniendo en primer plano a quien actúa o a lo que recibe la acción. La activa nombra al agente; la pasiva con «ser», que repasaste la semana pasada, lo deja en segundo plano; el «se» pasivo y el «se» impersonal lo eliminan. La pregunta clave es: ¿importa quién lo hizo?",
          "Cada forma tiene su texto típico. La activa es la normal en la conversación y cuando el agente es noticia. La pasiva con «ser» es de prensa e informes. El «se» es la forma de los avisos, las recetas, las normas y las descripciones de procesos, porque lo que interesa es la acción misma."
        ],
        "table": {
          "caption": "El hallazgo del museo contado de cuatro maneras",
          "head": [
            "Forma",
            "Ejemplo",
            "Dónde la encuentras"
          ],
          "rows": [
            [
              "activa",
              "El equipo de la doctora Funes encontró una vértebra.",
              "conversación, noticia centrada en las personas"
            ],
            [
              "ser + participio",
              "Una vértebra fue encontrada por el equipo de Funes.",
              "prensa, informes, historia"
            ],
            [
              "se pasivo",
              "Se encontraron tres vértebras en el sector norte.",
              "informes de campo, avisos, procesos"
            ],
            [
              "se impersonal",
              "En el yacimiento se trabaja de madrugada.",
              "normas, costumbres, descripciones generales"
            ]
          ]
        },
        "examples": [
          {
            "es": "Conversación: ¿Viste? Encontraron otra vértebra.",
            "note": "Activa con sujeto general: muy natural entre amigos."
          },
          {
            "es": "Ficha técnica: Se extrajeron doce fragmentos.",
            "note": "Informe de campo: lo que importa es qué y cuánto."
          }
        ],
        "mistakes": [
          {
            "wrong": "Se encontraron tres vértebras por el equipo de Funes.",
            "right": "El equipo de Funes encontró tres vértebras.",
            "why": "El «se» pasivo no admite agente con «por» en el uso habitual: si quieres nombrarlo, usa la activa o la pasiva con «ser»."
          }
        ]
      },
      {
        "heading": "¿Concuerda o no? Se pasivo frente a se impersonal",
        "body": [
          "Con el «se» pasivo, la cosa es el sujeto y el verbo concuerda con ella: «se vende una entrada», «se venden entradas». Con el «se» impersonal no hay sujeto, y el verbo va siempre en singular: «se vive tranquilo en Neuquén», «se trabaja con guantes», «se recomienda llevar agua». Las personas concretas llevan «a» y, por eso, el verbo tampoco concuerda: «se entrevistó a los voluntarios», «se busca a dos padres acompañantes».",
          "En carteles de muchas zonas se ve «se alquila departamentos», pero la norma académica recomienda la concordancia: «se alquilan departamentos». Cuando hay una perífrasis, el verbo auxiliar también concuerda: «se pueden reservar visitas». Y si necesitas hablar de algo general con un verbo que ya lleva «se» («quejarse», «levantarse»), usa «uno» o «la gente»: «uno se levanta temprano»."
        ],
        "examples": [
          {
            "es": "Se necesitan guías con experiencia en grupos escolares.",
            "note": "«Guías» sin «a» funciona como sujeto: plural."
          },
          {
            "es": "Se necesita a los guías del turno tarde en la entrada.",
            "note": "Personas concretas con «a»: singular."
          },
          {
            "es": "En el campamento uno se acuesta a las nueve.",
            "note": "«Acostarse» ya lleva «se»: se recurre a «uno»."
          }
        ],
        "mistakes": [
          {
            "wrong": "Se entrevistaron a los voluntarios.",
            "right": "Se entrevistó a los voluntarios.",
            "why": "Con «a» + personas no hay sujeto: el verbo va en singular."
          },
          {
            "wrong": "Se puede reservar visitas guiadas por teléfono.",
            "right": "Se pueden reservar visitas guiadas por teléfono.",
            "why": "«Visitas» es el sujeto: el auxiliar también concuerda."
          }
        ],
        "tip": "Haz la prueba de la «a»: si delante de las personas aparece «a», el verbo con «se» se queda en singular."
      },
      {
        "heading": "Se me rompió: la cosa manda en el verbo",
        "body": [
          "Para contar algo que pasó sin querer, el español usa «se» + pronombre de la persona afectada + verbo. Funciona como «gustar»: la persona va en el pronombre (me, te, le, nos, os, les) y el verbo concuerda con la cosa. «Se me cayó el casco», «se me cayeron los guantes». Con un infinitivo, singular: «se nos olvidó avisar».",
          "Si nombras a la persona, el pronombre sigue siendo obligatorio: «a Mateo se le cayó el celular». La posesión ya está en el pronombre, así que lo normal es el artículo: «se le rajó la pantalla», no «su pantalla». El orden es siempre «se» primero: «se me», nunca «me se»."
        ],
        "table": {
          "caption": "Quién sufre el percance y qué se pierde",
          "head": [
            "Persona",
            "Una cosa",
            "Varias cosas"
          ],
          "rows": [
            [
              "yo",
              "se me perdió la entrada",
              "se me perdieron las entradas"
            ],
            [
              "tú",
              "se te perdió la entrada",
              "se te perdieron las entradas"
            ],
            [
              "él / ella / usted",
              "se le perdió la entrada",
              "se le perdieron las entradas"
            ],
            [
              "nosotros / nosotras",
              "se nos perdió la entrada",
              "se nos perdieron las entradas"
            ],
            [
              "vosotros / vosotras",
              "se os perdió la entrada",
              "se os perdieron las entradas"
            ],
            [
              "ellos / ellas / ustedes",
              "se les perdió la entrada",
              "se les perdieron las entradas"
            ]
          ]
        },
        "examples": [
          {
            "es": "A la guía se le acabaron los folletos antes del mediodía.",
            "note": "El verbo concuerda con «los folletos»; «le» es la guía."
          },
          {
            "es": "Se me ocurrió llevar sombreros para todos.",
            "note": "«Ocurrírsele» presenta una idea que llega sola."
          }
        ],
        "mistakes": [
          {
            "wrong": "Se me olvidó las autorizaciones.",
            "right": "Se me olvidaron las autorizaciones.",
            "why": "El verbo concuerda con la cosa olvidada: plural."
          },
          {
            "wrong": "A Juli se rompió el martillo.",
            "right": "A Juli se le rompió el martillo.",
            "why": "Si nombras a la persona, el pronombre «le» es obligatorio."
          }
        ]
      },
      {
        "heading": "Rompí, se me rompió, se rompió: ¿cuánta culpa asumes?",
        "body": [
          "Hay tres maneras de contar el mismo daño. «Rompí el molde» asume la acción. «Se me rompió el molde» la presenta como involuntaria, pero me incluye como afectado. «Se rompió el molde» no menciona a nadie. Con «olvidar» pasa algo parecido: «olvidé» y «me olvidé de» son personales; «se me olvidó» suaviza.",
          "El «se» accidental es muy útil en excusas y disculpas, pero no borra la responsabilidad. Si el problema fue una decisión tuya, o si otra persona sufrió las consecuencias, suena evasivo: en ese caso, primera persona. Además, solo funciona con verbos que describen algo que puede ocurrir solo (caerse, perderse, romperse, acabarse, quedarse, borrarse); con verbos que exigen alguien que actúa, no: «escribí mal la dirección», nunca «se me escribió»."
        ],
        "examples": [
          {
            "es": "Perdón, se me quedó la carpeta en la escuela.",
            "note": "Disculpa por un descuido: el «se» suaviza sin negar nada."
          },
          {
            "es": "Decidí no cargar la batería extra y me quedé sin cámara: fue culpa mía.",
            "note": "Hubo una decisión: primera persona."
          },
          {
            "es": "Para un aparato: se me descompuso, se me dañó, se me malogró o se me estropeó, según la zona.",
            "note": "Distintos verbos regionales, la misma estructura."
          }
        ],
        "mistakes": [
          {
            "wrong": "Se me eligió mal el horario del micro.",
            "right": "Elegí mal el horario del micro.",
            "why": "«Elegir» exige alguien que decide: no puede ser accidental."
          }
        ],
        "tip": "Pregúntate: ¿lo hice queriendo, me pasó o pasó sin mí? Esa respuesta elige entre «rompí», «se me rompió» y «se rompió»."
      }
    ]
  },
  "grammar": {
    "intro": "Primero elige el foco según el texto; después cuenta los percances con la responsabilidad justa.",
    "exercises": [
      {
        "id": "b2-12-g-foco",
        "type": "context",
        "prompt": "Lee para qué texto es cada frase y elige la versión más adecuada.",
        "items": [
          {
            "context": "Cartel en la puerta del museo, para todo el público.",
            "q": "¿Qué versión pondrías?",
            "options": [
              "Las mochilas grandes son dejadas por los visitantes en el guardarropa.",
              "Se dejan las mochilas grandes en el guardarropa.",
              "Los visitantes dejaron las mochilas grandes en el guardarropa."
            ],
            "answer": 1,
            "why": "En un aviso interesa la acción, no el agente: «se» pasivo."
          },
          {
            "context": "Noticia del diario local: lo importante es que la autora del hallazgo es una estudiante de 17 años.",
            "q": "¿Qué versión respeta ese foco?",
            "options": [
              "Se halló un diente de dinosaurio en El Chocón.",
              "En El Chocón se trabaja con mucho cuidado.",
              "Una estudiante de 17 años halló un diente de dinosaurio en El Chocón."
            ],
            "answer": 2,
            "why": "El agente es la noticia: activa."
          },
          {
            "context": "Reglamento del campamento: una norma general para cualquiera.",
            "q": "¿Qué frase es correcta?",
            "options": [
              "En el yacimiento se camina solo por los senderos marcados.",
              "En el yacimiento se caminan solo por los senderos marcados.",
              "En el yacimiento son caminados solo los senderos marcados."
            ],
            "answer": 0,
            "why": "«Caminar» sin objeto: «se» impersonal, singular."
          },
          {
            "context": "Informe de la coordinadora: hablaron con todas las familias el lunes.",
            "q": "¿Qué frase es correcta?",
            "options": [
              "El lunes se llamaron a todas las familias.",
              "El lunes se llamó a todas las familias.",
              "El lunes se llamó todas las familias."
            ],
            "answer": 1,
            "why": "Personas con «a»: «se» impersonal en singular."
          }
        ]
      },
      {
        "id": "b2-12-g-formas",
        "type": "gap",
        "prompt": "Completa con la forma correcta del verbo entre paréntesis. Decide si concuerda o no.",
        "items": [
          {
            "q": "En la tienda del museo se ___ (vender, presente) réplicas de huevos de dinosaurio.",
            "answers": [
              [
                "venden"
              ]
            ],
            "why": "«Réplicas» es el sujeto: plural."
          },
          {
            "q": "Durante la visita se ___ (escuchar, pretérito) con atención a la paleontóloga.",
            "answers": [
              [
                "escuchó"
              ]
            ],
            "why": "Persona con «a»: singular."
          },
          {
            "q": "A los chicos se les ___ (acabar, pretérito) las galletitas antes de llegar.",
            "answers": [
              [
                "acabaron"
              ]
            ],
            "why": "Concuerda con «las galletitas»; «les» son los chicos."
          },
          {
            "q": "Perdón, se me ___ (olvidar, pretérito) traer el protector solar.",
            "answers": [
              [
                "olvidó"
              ]
            ],
            "why": "Con un infinitivo, el verbo va en singular."
          },
          {
            "q": "A la profesora se le ___ (quedar, pretérito) las llaves del micro en el museo.",
            "answers": [
              [
                "quedaron"
              ]
            ],
            "why": "«Las llaves»: plural."
          },
          {
            "q": "Desde el mirador se ___ (poder, presente) ver las huellas del lago.",
            "answers": [
              [
                "pueden"
              ]
            ],
            "why": "El auxiliar concuerda con «las huellas»."
          }
        ]
      },
      {
        "id": "b2-12-g-reformular",
        "type": "open",
        "prompt": "Reformula cada texto de partida según la consigna. Después compara con el modelo y la lista: hay más de una versión correcta.",
        "items": [
          {
            "prompt": "Texto de partida: «Los técnicos limpian los huesos con pinceles finos y después los envuelven en yeso». Escríbelo para el panel que explica el proceso, sin nombrar a los técnicos.",
            "model": "Los huesos se limpian con pinceles finos y después se envuelven en yeso.",
            "checklist": [
              "Uso «se» pasivo con el verbo en plural, de acuerdo con «los huesos».",
              "Elimino el agente porque el panel describe un proceso.",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          },
          {
            "prompt": "Texto de partida: «Las autoridades del museo piden a los visitantes que no toquen las vitrinas». Conviértelo en un cartel breve.",
            "model": "Se ruega no tocar las vitrinas.",
            "checklist": [
              "Uso «se» impersonal + infinitivo, en singular.",
              "El cartel es breve y sin agente.",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          },
          {
            "prompt": "Texto de partida: Mateo: «Rompí la pantalla del celular». Fue sin querer: se le resbaló de la mano. Reformula su frase para que suene a percance y cuéntalo tú en tercera persona.",
            "model": "A Mateo se le cayó el celular y se le rajó la pantalla.",
            "checklist": [
              "Uso «se le» + verbo que concuerda con la cosa.",
              "Uso el artículo «la pantalla», no «su pantalla».",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          },
          {
            "prompt": "Texto de partida: La coordinadora, en un correo a la directora: «Se nos perdió tiempo porque se nos fue el micro». En realidad, ella decidió salir media hora tarde del museo. Reescribe la frase asumiendo la responsabilidad.",
            "model": "Perdimos tiempo porque decidí salir del museo media hora más tarde de lo previsto, y el micro ya se había ido.",
            "checklist": [
              "Uso la primera persona para la decisión.",
              "Mantengo los hechos sin exagerar ni esconder nada.",
              "Comparo con el modelo orientativo: no es una respuesta única y otras formulaciones correctas también valen."
            ]
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Palabras para organizar una salida educativa y para contar el trabajo en un yacimiento. Fíjate en las combinaciones.",
    "groups": [
      {
        "title": "Organizar la salida",
        "items": [
          {
            "es": "la autorización firmada",
            "note": "permiso de la familia para que un menor salga con la escuela"
          },
          {
            "es": "el micro",
            "note": "en Argentina, autobús de larga distancia o contratado"
          },
          {
            "es": "los padres acompañantes",
            "note": "familiares que ayudan a cuidar al grupo"
          },
          {
            "es": "sufrir un percance",
            "note": "tener un pequeño accidente o contratiempo"
          },
          {
            "es": "hacerse cargo de un error",
            "note": "reconocerlo y responder por él"
          }
        ]
      },
      {
        "title": "El trabajo de campo",
        "items": [
          {
            "es": "el yacimiento",
            "note": "lugar donde hay restos fósiles o arqueológicos"
          },
          {
            "es": "la campaña de excavación",
            "note": "período de trabajo en el campo"
          },
          {
            "es": "la cuadrícula",
            "note": "cada sector marcado con cuerdas para excavar con orden"
          },
          {
            "es": "quedar a la vista",
            "note": "aparecer en la superficie"
          },
          {
            "es": "la ficha de registro",
            "note": "documento con los datos de cada pieza"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "b2-12-v-relacion",
        "type": "match",
        "prompt": "Relaciona cada expresión con la situación de la excursión o del yacimiento.",
        "pairs": [
          {
            "left": "la autorización firmada",
            "right": "Sin ese papel, un alumno no puede subir al micro."
          },
          {
            "left": "los padres acompañantes",
            "right": "Dos madres y un abuelo ayudan a cuidar al grupo en el museo."
          },
          {
            "left": "hacerse cargo de un error",
            "right": "La coordinadora escribe «fue un descuido mío» en el informe."
          },
          {
            "left": "la cuadrícula",
            "right": "Un sector de un metro por un metro marcado con hilo."
          },
          {
            "left": "quedar a la vista",
            "right": "Después de la tormenta asoma un hueso en la ladera."
          },
          {
            "left": "la ficha de registro",
            "right": "Cada fragmento lleva su número, su profundidad y su foto."
          }
        ],
        "why": "Cada expresión describe un objeto o una acción concreta del caso."
      }
    ]
  },
  "pronunciation": {
    "focus": "«Se me», «se le», «se nos»: pronombres átonos que se apoyan en el verbo.",
    "explanation": [
      "En «se me cayó» solo hay una sílaba fuerte: la del verbo. Los pronombres «se» y «me» son átonos y se pronuncian pegados, como si fueran el principio de la palabra: «semecayó». Si los separas o los acentúas, la frase suena entrecortada.",
      "Como los pronombres son breves, hay que oírlos bien: «se me», «se te», «se le», «se nos» y «se les» cambian a quién le pasó el percance. Escucha, repite y grábate en tu dispositivo; la voz sintética es un apoyo y no evalúa tu pronunciación."
    ],
    "examples": [
      {
        "es": "Se nos pinchó una rueda.",
        "note": "se-nos-pin-CHÓ: un solo grupo, fuerza en «chó»."
      },
      {
        "es": "A Juli se le rompió el martillo.",
        "note": "se-le-rrom-PIÓ: no separes «se» y «le»."
      },
      {
        "es": "Se les olvidaron las gorras.",
        "note": "se-le-sol-vi-DA-ron: la «s» de «les» se une a la vocal siguiente."
      }
    ],
    "perceive": {
      "id": "b2-12-p-oido",
      "type": "listen",
      "prompt": "Escucha cada frase y elige a quién le pasó el percance. Atención a los pronombres breves.",
      "items": [
        {
          "q": "¿A quién se le perdió la entrada?",
          "options": [
            "a mí",
            "a nosotros",
            "a ella"
          ],
          "answer": 2,
          "audio": "En la puerta del museo se le perdió la entrada.",
          "voice": "es-AR-f",
          "why": "«Se le»: a él, a ella o a usted."
        },
        {
          "q": "¿A quién se le acabó la batería?",
          "options": [
            "a nosotros",
            "a ti",
            "a ellos"
          ],
          "answer": 0,
          "audio": "A mitad del sendero se nos acabó la batería de la cámara.",
          "voice": "es-AR-m",
          "why": "«Se nos»: a nosotros."
        },
        {
          "q": "¿A quién se le quedaron los guantes?",
          "options": [
            "a ella",
            "a mí",
            "a ellos"
          ],
          "answer": 1,
          "audio": "Se me quedaron los guantes en el micro.",
          "voice": "es-AR-f",
          "why": "«Se me»: a mí."
        },
        {
          "q": "¿A quién se le cayeron los mapas?",
          "options": [
            "a ti",
            "a ellos",
            "a nosotros"
          ],
          "answer": 1,
          "audio": "Con el viento se les cayeron los mapas al barranco.",
          "voice": "es-AR-m",
          "why": "«Se les»: a ellos, a ellas o a ustedes."
        }
      ]
    },
    "produce": [
      {
        "text": "Perdón, se me olvidaron las autorizaciones.",
        "tip": "Una sola fuerza fuerte en «da»; los pronombres, pegados.",
        "voice": "es-AR-f"
      },
      {
        "text": "A Mateo se le cayó el celular.",
        "tip": "«A Mateo» con una pausa mínima; después, «selecayó» en un impulso.",
        "voice": "es-AR-m"
      },
      {
        "text": "Se ruega no tocar las vitrinas.",
        "tip": "Tono neutro de aviso: la voz baja al final.",
        "voice": "es-AR-f"
      },
      {
        "text": "No se me rompió: lo rompí yo.",
        "tip": "Contraste: destaca «rompí» y sobre todo «yo».",
        "voice": "es-AR-m"
      }
    ]
  },
  "listening": {
    "title": "El informe de la excursión",
    "context": "Es lunes en una escuela secundaria de Neuquén. Valeria, la profesora que coordinó la excursión del sábado al museo de dinosaurios de Villa El Chocón, repasa con Gustavo, el preceptor, todo lo que pasó, porque tiene que mandar un informe a la directora y un aviso a las familias. Escucha primero sin transcripción. Las voces son sintéticas y no representan una variedad regional verificada.",
    "speakers": [
      {
        "id": "va",
        "name": "Valeria",
        "voice": "es-AR-f",
        "role": "Profesora y coordinadora de la excursión"
      },
      {
        "id": "gu",
        "name": "Gustavo",
        "voice": "es-AR-m",
        "role": "Preceptor que acompañó al grupo"
      }
    ],
    "script": [
      {
        "speaker": "va",
        "text": "Gustavo, tengo que mandarle el informe a la directora antes del mediodía y quiero que esté todo. Repasemos el sábado desde el principio."
      },
      {
        "speaker": "gu",
        "text": "Bueno. Salimos a las siete y media, y a la altura de Senillosa se nos pinchó una rueda. Eso no fue culpa de nadie: el chofer la cambió en veinte minutos."
      },
      {
        "speaker": "va",
        "text": "Bien. Después, en el museo, a Mateo se le cayó el celular dentro de la vitrina de las huellas… ¿Cómo pasó eso?"
      },
      {
        "speaker": "gu",
        "text": "No, no fue dentro: se le cayó al lado, y se le rajó la pantalla. El vidrio de la vitrina no se rompió; lo comprobó la guía."
      },
      {
        "speaker": "va",
        "text": "Menos mal. Lo mío lo voy a escribir claro. Iba a poner «se me olvidaron las autorizaciones», pero no: me olvidé de guardarlas en la carpeta. Fue un descuido mío y lo voy a decir así."
      },
      {
        "speaker": "gu",
        "text": "Me parece bien. Igual se resolvió rápido: las familias las mandaron por foto. ¿Y lo del agua?"
      },
      {
        "speaker": "va",
        "text": "Ah, sí: se nos acabó el agua a las tres, con casi cuarenta grados. En el aviso para las familias pongo: «Se recomienda llevar dos botellas por estudiante» y «Se ruega no dejar mochilas en el micro»."
      },
      {
        "speaker": "gu",
        "text": "Añade también que las autorizaciones originales se devuelven el lunes que viene y que se busca a dos padres que puedan acompañar la próxima salida."
      },
      {
        "speaker": "va",
        "text": "Buena idea. Y en el informe, lo del museo lo cuento con datos: se visitaron dos salas, se entrevistó a la técnica de campo y se tomaron más de trescientas fotos. Por cierto, ¿a quién se le rompió el martillo de la guía?"
      },
      {
        "speaker": "gu",
        "text": "A Juli. Pero no «se le rompió»: lo usó para golpear una piedra del estacionamiento. Que lo cuente ella y que pida disculpas."
      },
      {
        "speaker": "va",
        "text": "De acuerdo. Ahí no hay accidente: hay una decisión, y hay que hacerse cargo."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha la conversación entera. ¿Para qué repasan la excursión?",
        "exercise": {
          "id": "b2-12-l-global",
          "type": "choice",
          "prompt": "Elige la respuesta que resume la conversación.",
          "items": [
            {
              "q": "¿Qué preparan Valeria y Gustavo?",
              "options": [
                "Una nueva excursión al museo.",
                "Una queja contra la empresa de micros.",
                "Un informe para la directora y un aviso para las familias."
              ],
              "answer": 2,
              "why": "Valeria lo dice al principio y redacta el aviso durante la conversación."
            },
            {
              "q": "¿Qué criterio sigue Valeria al escribir?",
              "options": [
                "Separa los accidentes de los errores que alguien tiene que asumir.",
                "Atribuye todos los problemas a la mala suerte.",
                "Evita mencionar cualquier problema."
              ],
              "answer": 0,
              "why": "Asume su descuido y pide que Juli asuma el suyo."
            }
          ]
        }
      },
      {
        "stage": "detail",
        "prompt": "Escucha otra vez y localiza los datos concretos.",
        "exercise": {
          "id": "b2-12-l-detalle",
          "type": "choice",
          "prompt": "Responde con la información exacta del audio.",
          "items": [
            {
              "q": "¿Qué le pasó a Mateo?",
              "options": [
                "Rompió el vidrio de una vitrina.",
                "Se le cayó el celular y se le rajó la pantalla.",
                "Se le perdió la entrada."
              ],
              "answer": 1,
              "why": "Gustavo corrige: se le cayó al lado de la vitrina."
            },
            {
              "q": "¿Cómo se resolvió lo de las autorizaciones?",
              "options": [
                "La directora las firmó.",
                "Valeria volvió a buscarlas.",
                "Las familias las mandaron por foto."
              ],
              "answer": 2,
              "why": "«Las familias las mandaron por foto»."
            },
            {
              "q": "¿Qué se pide en el aviso para la próxima salida?",
              "options": [
                "Dos padres acompañantes.",
                "Un chofer nuevo.",
                "Dinero para el agua."
              ],
              "answer": 0,
              "why": "«Se busca a dos padres que puedan acompañar»."
            }
          ]
        }
      },
      {
        "stage": "notice",
        "prompt": "Ahora fíjate en la forma. Puedes leer la transcripción después de responder.",
        "exercise": {
          "id": "b2-12-l-forma",
          "type": "classify",
          "prompt": "Clasifica cada fragmento del diálogo según el tipo de «se».",
          "categories": [
            "Se pasivo (concuerda con la cosa)",
            "Se impersonal (singular, sin sujeto)",
            "Se accidental (le pasa a alguien)"
          ],
          "items": [
            {
              "text": "se tomaron más de trescientas fotos",
              "cat": 0,
              "why": "Concuerda con «fotos»."
            },
            {
              "text": "se entrevistó a la técnica de campo",
              "cat": 1,
              "why": "Persona con «a»: singular."
            },
            {
              "text": "se nos acabó el agua a las tres",
              "cat": 2,
              "why": "Percance que les pasó a ellos."
            },
            {
              "text": "Se recomienda llevar dos botellas",
              "cat": 1,
              "why": "«Se» + verbo + infinitivo: siempre singular."
            },
            {
              "text": "se le rajó la pantalla",
              "cat": 2,
              "why": "«Le» es Mateo; el verbo concuerda con «la pantalla»."
            },
            {
              "text": "se visitaron dos salas",
              "cat": 0,
              "why": "Concuerda con «dos salas»."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "Diario de campaña: lo que se rompe y lo que rompemos",
    "genre": "Columna en la revista de un museo paleontológico",
    "frame": "Texto original de SpanishCue escrito como columna de una técnica de campo en la revista ficticia «Huellas del Comahue». Las personas y el yacimiento son inventados.",
    "text": [
      "En una campaña de excavación se trabaja de madrugada, cuando el sol de la meseta todavía no quema. Se llega al yacimiento en camioneta, se reparten las cuadrículas y, durante horas, se habla poco. Desde afuera parece un trabajo lento, y lo es: la temporada pasada se extrajeron doscientos catorce fragmentos de un saurópodo, y cada uno fue registrado con fotografía, coordenadas y una ficha escrita a mano.",
      "Los visitantes suelen preguntar quién encuentra los huesos. La respuesta honesta es que los encuentra el viento. Después, el equipo de la doctora Laura Funes termina de descubrirlos, los consolida y los envuelve en vendas de yeso. En los informes oficiales escribimos que «se hallaron restos en el sector norte»; en la cocina del campamento decimos que el viento nos los dejó a la vista.",
      "En el campo también hay percances, y con los años aprendí a contarlos bien. A todos se nos cae alguna vez un pincel dentro de la cuadrícula, se nos acaba el yeso antes de tiempo o se nos olvida anotar la profundidad de una pieza. Nadie los busca. Una vez, a un estudiante se le partió en dos una vértebra mientras la levantaba. Estuvo media hora sin hablar; la vértebra ya venía fisurada y se habría partido igual en manos de cualquiera.",
      "Pero hay otra clase de errores. El verano pasado decidí retirar un bloque sin esperar a que se secara el yeso, porque quería terminar antes del viento de la tarde. El bloque se abrió. Durante días, en las conversaciones, dije que «se nos había roto el bloque». Era mentira, o casi: lo rompí yo, por apurada. Cuando por fin lo dije así, la directora no me reprochó nada; solo me pidió que lo anotara en la ficha para que nadie repitiera la decisión.",
      "Desde entonces les digo a los voluntarios lo mismo el primer día: «se me rompió» sirve para lo que de verdad se escapa de nuestras manos; para lo que elegimos, mejor la primera persona. En un museo se exhiben huesos, pero detrás de cada vitrina hay fichas, y una buena ficha dice qué se encontró, dónde se encontró y, cuando hace falta, quién se equivocó y por qué."
    ],
    "glossary": [
      {
        "es": "la meseta",
        "note": "llanura elevada, como la de la Patagonia"
      },
      {
        "es": "consolidar un hueso",
        "note": "endurecerlo con un producto para que no se deshaga"
      },
      {
        "es": "por apurada",
        "note": "por tener prisa; «apurado» es frecuente en América"
      }
    ],
    "tasks": [
      {
        "id": "b2-12-r-comprension",
        "type": "choice",
        "prompt": "Responde según la columna.",
        "items": [
          {
            "q": "Según la autora, ¿quién encuentra los huesos?",
            "options": [
              "La doctora Funes.",
              "Los voluntarios.",
              "El viento, que los deja a la vista."
            ],
            "answer": 2,
            "why": "«La respuesta honesta es que los encuentra el viento»."
          },
          {
            "q": "¿Por qué la autora no culpa al estudiante de la vértebra partida?",
            "options": [
              "Porque la vértebra ya estaba fisurada.",
              "Porque el estudiante era nuevo.",
              "Porque la directora se lo prohibió."
            ],
            "answer": 0,
            "why": "«La vértebra ya venía fisurada»."
          },
          {
            "q": "¿Qué le pidió la directora a la autora?",
            "options": [
              "Que pidiera disculpas a los voluntarios.",
              "Que anotara el error en la ficha.",
              "Que dejara de retirar bloques."
            ],
            "answer": 1,
            "why": "«Me pidió que lo anotara en la ficha»."
          }
        ]
      },
      {
        "id": "b2-12-r-interpretar",
        "type": "open",
        "prompt": "Interpreta el texto con tus palabras y apóyate en citas.",
        "items": [
          {
            "prompt": "Explica en 60–80 palabras por qué la autora dice que su frase «se nos había roto el bloque» era «mentira, o casi». Compárala con el caso de la vértebra y cita el texto.",
            "model": "Con «se nos había roto» presentaba el daño como un accidente compartido, pero en realidad ella decidió retirar el bloque antes de que se secara el yeso: «lo rompí yo, por apurada». En el caso de la vértebra, el «se le partió» es justo, porque el estudiante no tomó ninguna decisión equivocada y la pieza ya estaba fisurada. La diferencia está en si hubo una elección.",
            "checklist": [
              "Explico la diferencia entre percance y decisión.",
              "Cito una frase literal del texto.",
              "Comparo los dos casos con mis palabras."
            ]
          }
        ]
      }
    ],
    "noticing": {
      "prompt": "Observa cómo la columna cambia de forma según lo que quiere decir.",
      "items": [
        {
          "quote": "se llega al yacimiento en camioneta, se reparten las cuadrículas",
          "note": "Dos «se» seguidos: «se llega» es impersonal (singular, sin sujeto) y «se reparten» es pasivo (concuerda con «las cuadrículas»)."
        },
        {
          "quote": "a un estudiante se le partió en dos una vértebra",
          "note": "«Se» accidental con persona nombrada: el pronombre «le» sigue siendo necesario."
        },
        {
          "quote": "lo rompí yo, por apurada",
          "note": "Activa en primera persona, con «yo» al final para destacar la responsabilidad."
        }
      ]
    }
  },
  "practice": {
    "intro": "Combina las dos clases: elige el «se» adecuado y gradúa la responsabilidad en cada percance.",
    "exercises": [
      {
        "id": "b2-12-x-orden",
        "type": "order",
        "prompt": "Ordena las palabras para reconstruir frases del informe y del aviso.",
        "items": [
          {
            "words": [
              "A",
              "la",
              "guía",
              "se",
              "le",
              "rompió",
              "la",
              "lupa",
              "grande."
            ],
            "why": "Persona nombrada + «se le» + verbo en singular."
          },
          {
            "words": [
              "Se",
              "ruega",
              "a",
              "las",
              "familias",
              "confirmar",
              "la",
              "asistencia."
            ],
            "why": "«Se» impersonal con «a» + personas: singular."
          },
          {
            "words": [
              "En",
              "el",
              "museo",
              "se",
              "exhiben",
              "huevos",
              "de",
              "titanosaurio."
            ],
            "why": "«Se» pasivo que concuerda con «huevos»."
          }
        ]
      },
      {
        "id": "b2-12-x-error",
        "type": "error",
        "prompt": "Cada frase tiene un error. Escríbela corregida.",
        "items": [
          {
            "sentence": "Se necesita voluntarios para la campaña de verano.",
            "answers": [
              "Se necesitan voluntarios para la campaña de verano."
            ],
            "why": "Sin «a», «voluntarios» es el sujeto: plural."
          },
          {
            "sentence": "Me se cayó el pincel dentro de la cuadrícula.",
            "answers": [
              "Se me cayó el pincel dentro de la cuadrícula."
            ],
            "why": "El orden es «se me», nunca «me se»."
          },
          {
            "sentence": "A Lucía se le perdió su mochila en el micro.",
            "answers": [
              "A Lucía se le perdió la mochila en el micro."
            ],
            "why": "La posesión ya está en «le»: artículo, no posesivo."
          },
          {
            "sentence": "Se avisaron a los padres por correo.",
            "answers": [
              "Se avisó a los padres por correo."
            ],
            "why": "Con «a» + personas, el verbo va en singular."
          }
        ]
      },
      {
        "id": "b2-12-x-responsabilidad",
        "type": "classify",
        "prompt": "¿Cómo cuenta cada frase la responsabilidad? Clasifícala.",
        "categories": [
          "Asume la acción",
          "Percance que le pasa a alguien",
          "Sin ninguna persona"
        ],
        "items": [
          {
            "text": "Olvidé confirmar la reserva del almuerzo.",
            "cat": 0,
            "why": "Primera persona activa."
          },
          {
            "text": "Se me olvidó confirmar la reserva del almuerzo.",
            "cat": 1,
            "why": "«Se me»: involuntario, pero me incluye."
          },
          {
            "text": "Se rompió una de las réplicas de la sala.",
            "cat": 2,
            "why": "No aparece ninguna persona."
          },
          {
            "text": "Decidimos salir más tarde y perdimos el turno de la visita.",
            "cat": 0,
            "why": "Decisión asumida en primera persona."
          },
          {
            "text": "A los chicos se les acabó el agua.",
            "cat": 1,
            "why": "Percance que afectó a los chicos."
          },
          {
            "text": "Se cortó la luz en la sala de proyecciones.",
            "cat": 2,
            "why": "Hecho sin persona afectada mencionada."
          }
        ]
      },
      {
        "id": "b2-12-x-guiada",
        "type": "open",
        "prompt": "Escribe frases breves antes de la tarea de escritura. El modelo es una posibilidad, no la única.",
        "items": [
          {
            "prompt": "Escribe tres normas para un lugar que conoces (biblioteca, gimnasio, club): una con «se» pasivo, una con «se» impersonal + infinitivo y una con «a» + personas.",
            "model": "En el club se prestan raquetas a los socios. Se ruega devolverlas limpias. Se atiende a los nuevos socios los martes por la tarde.",
            "checklist": [
              "El «se» pasivo concuerda con la cosa.",
              "Con «a» + personas, el verbo va en singular."
            ]
          },
          {
            "prompt": "Cuenta un percance reciente de tres maneras: asumiéndolo, como algo que te pasó y sin ninguna persona. Después di cuál es la más honesta en tu caso.",
            "model": "Quemé el arroz. Se me quemó el arroz. Se quemó el arroz. La más honesta es la segunda: me distraje con una llamada, pero no lo hice a propósito.",
            "checklist": [
              "Uso las tres estructuras con concordancia correcta.",
              "Justifico mi elección con un dato."
            ]
          },
          {
            "prompt": "Escribe una disculpa breve a un compañero por algo que olvidaste y otra por algo que decidiste mal.",
            "model": "Perdona, se me olvidó mandarte el archivo; te lo envío ahora. Y lo de la reunión fue culpa mía: elegí un horario en que tú no podías.",
            "checklist": [
              "Uso el «se» accidental solo para el olvido.",
              "Asumo la decisión en primera persona."
            ]
          }
        ]
      }
    ]
  },
  "writing": {
    "task": "Eres la persona que coordinó una visita de un grupo a un museo, una empresa o una reserva natural. Escribe un correo formal (220–300 palabras) a la persona responsable del lugar: informa sobre la visita con «se» pasivo e impersonal, cuenta los percances que hubo graduando la responsabilidad, discúlpate por lo que fue culpa del grupo y propone cómo repararlo.",
    "context": "La persona que lee el correo fue amable con tu grupo y no estuvo presente en todo momento. Necesita datos claros, una disculpa sincera y una propuesta concreta. Puedes usar la excursión a El Chocón o una salida real.",
    "steps": [
      "Haz una lista de lo que se hizo durante la visita y de los percances, y marca cuáles fueron accidentes y cuáles decisiones.",
      "Organiza el correo: saludo y agradecimiento, balance de la visita, percances, disculpa y propuesta, despedida.",
      "Escribe usando «se» para el balance, «se me/se le…» para los percances involuntarios y la primera persona para lo que asumes.",
      "Revisa la concordancia de cada «se» y corrige cualquier «se me…» que esconda una decisión."
    ],
    "useLanguage": [
      "se visitaron / se realizaron…",
      "se atendió a / se entrevistó a…",
      "se recomienda / se ruega + infinitivo",
      "a uno de los alumnos se le cayó…",
      "se nos acabó / se nos olvidó…",
      "fue un error mío / asumo que…"
    ],
    "model": [
      "Estimada doctora Funes: le escribo para agradecerle la visita del sábado y para darle un breve balance, como quedamos. En total se recorrieron tres salas, se realizó el taller de réplicas y se respondieron todas las preguntas que los estudiantes habían preparado en clase. Además, se entrevistó a la técnica de campo para el periódico escolar, que saldrá a fin de mes.",
      "Durante la jornada hubo algunos percances. A uno de los alumnos se le cayó el celular junto a la vitrina de las huellas; por suerte, el vidrio no sufrió daños. Por la tarde se nos acabó el agua y tuvimos que pedirles botellas a sus empleados, que nos atendieron con mucha paciencia.",
      "Sin embargo, hay un hecho que no fue un accidente y por el que quiero disculparme. Una alumna usó el martillo de la guía para golpear una piedra del estacionamiento y le rompió la punta. Fue también un error mío, porque no vigilé ese momento. La alumna le escribirá una carta y la escuela se hará cargo del martillo nuevo.",
      "Para la próxima visita le propongo dos cambios: que se reparta a cada estudiante una hoja con las normas del museo antes de entrar y que se asigne un adulto a cada grupo de seis. Si le parece bien, se los enviaré por escrito la semana que viene. Le agradezco de nuevo su generosidad y la paciencia de todo su equipo. Esperamos volver en primavera con otro curso. Un cordial saludo, Valeria Sosa."
    ],
    "checklist": [
      "Uso «se» pasivo con concordancia y «se» impersonal en singular con «a» + personas.",
      "Uso el «se» accidental solo para hechos involuntarios.",
      "Asumo en primera persona lo que fue una decisión o un descuido del grupo.",
      "La disculpa va acompañada de una propuesta concreta.",
      "El registro es formal y cordial, con «usted»."
    ],
    "words": [
      220,
      300
    ]
  },
  "speaking": {
    "intro": "Prepara palabras clave, no un texto para leer. Si te grabas, la grabación queda en tu dispositivo; la aplicación no evalúa tu pronunciación.",
    "tasks": [
      {
        "title": "El día en que todo salió al revés",
        "prompt": "Habla durante unos dos minutos y medio de un día en que te pasaron varios percances (un viaje, una mudanza, un evento). Cuenta qué se te olvidó, qué se te rompió o se te perdió, y distingue con claridad al menos una cosa que fue culpa tuya. Termina con lo que aprendiste.",
        "prep": [
          "Anota cuatro percances con el verbo que vas a usar («se me…»).",
          "Elige uno que fue una decisión tuya y prepáralo en primera persona."
        ],
        "seconds": 150,
        "model": "El día de mi mudanza fue un desastre. Por la mañana se me quedaron las llaves del departamento nuevo en la casa de mi madre, así que perdimos una hora. Después, en la escalera, se nos cayó una caja de platos y se rompieron casi todos. Eso fue un accidente. Pero lo peor fue culpa mía: decidí no contratar un flete para ahorrar dinero, y terminamos haciendo seis viajes en el auto de mi hermano. Aprendí que ahorrar en lo importante sale caro.",
        "selfCheck": [
          "Uso al menos tres veces el «se» accidental con concordancia correcta.",
          "Asumo una decisión en primera persona.",
          "Pronuncio «se me» y «se nos» pegados al verbo."
        ]
      },
      {
        "title": "Una llamada incómoda",
        "prompt": "Tu interlocutor es la persona responsable del museo que visitó tu grupo y está molesta por lo que pasó con el martillo de la guía y por el ruido en una sala. Escucha su queja, hazle preguntas para entender qué vio exactamente, explica los hechos graduando la responsabilidad, discúlpate sin evadir y negocia una forma de reparar el daño.",
        "prep": [
          "Prepara dos preguntas para aclarar la queja.",
          "Prepara una disculpa con «fue culpa nuestra» y una explicación con «se le…».",
          "Piensa en dos propuestas de reparación."
        ],
        "seconds": 180,
        "selfCheck": [
          "Hago preguntas reales y respondo a lo que dice mi interlocutor.",
          "No uso el «se» accidental para esconder una decisión.",
          "Cierro con un acuerdo concreto."
        ]
      }
    ]
  },
  "useInClass": {
    "intro": "Lleva a la próxima clase lo que preparaste esta semana y úsalo con tu profesor.",
    "cards": [
      {
        "move": "Cuéntale",
        "task": "Cuéntale a tu profesor tres percances de tu semana con «se me…» y deja que él pregunte si alguno fue en realidad una decisión.",
        "phrases": [
          "Se me olvidó…",
          "Bueno, en realidad decidí…"
        ]
      },
      {
        "move": "Pregúntale",
        "task": "Pregúntale qué normas hay en su lugar de trabajo o en su barrio y cómo se escriben en los carteles.",
        "phrases": [
          "¿Qué se prohíbe en…?",
          "¿Se puede…?"
        ]
      },
      {
        "move": "Comprueba",
        "task": "Lee dos frases de tu correo con «se» y pídele que confirme si el verbo concuerda o no.",
        "phrases": [
          "¿Aquí va en plural?",
          "¿Es pasivo o impersonal?"
        ]
      }
    ],
    "bring": "Trae tu correo con los «se» pasivos, impersonales y accidentales marcados en tres colores."
  },
  "quiz": {
    "items": [
      {
        "type": "gap",
        "q": "En esta tienda se ___ (aceptar, presente) tarjetas de crédito.",
        "answers": [
          [
            "aceptan"
          ]
        ],
        "why": "«Tarjetas» es el sujeto: plural."
      },
      {
        "type": "gap",
        "q": "Ayer se ___ (despedir, pretérito) a los dos guías más antiguos.",
        "answers": [
          [
            "despidió"
          ]
        ],
        "why": "Personas con «a»: singular."
      },
      {
        "type": "gap",
        "q": "A mi abuelo se le ___ (olvidar, pretérito) las pastillas en el hotel.",
        "answers": [
          [
            "olvidaron"
          ]
        ],
        "why": "Concuerda con «las pastillas»."
      },
      {
        "type": "choice",
        "q": "¿Qué frase asume con claridad la responsabilidad?",
        "options": [
          "Se me borró el archivo con las notas.",
          "Borré el archivo porque pensé que había otra copia.",
          "Se borró el archivo con las notas."
        ],
        "answer": 1,
        "why": "Primera persona y explicación de la decisión."
      },
      {
        "type": "choice",
        "q": "¿Qué frase es correcta para un cartel?",
        "options": [
          "Se arreglan bicicletas en el acto.",
          "Se arregla bicicletas en el acto.",
          "Bicicletas son arregladas en el acto por nosotros."
        ],
        "answer": 0,
        "why": "«Se» pasivo con concordancia, como recomienda la norma."
      },
      {
        "type": "listen",
        "q": "Según el audio, ¿qué le pasó a la guía?",
        "audio": "Con las prisas, a la guía se le quedaron las llaves de la sala dentro del coche.",
        "voice": "es-AR-f",
        "options": [
          "Perdió el coche.",
          "Dejó las llaves de la sala dentro del coche sin querer.",
          "Cerró la sala a propósito."
        ],
        "answer": 1,
        "why": "«Se le quedaron»: las dejó sin querer."
      },
      {
        "type": "error",
        "sentence": "Se le cayeron el vaso al camarero.",
        "answers": [
          "Se le cayó el vaso al camarero."
        ],
        "why": "«El vaso» es singular: «se le cayó»."
      },
      {
        "type": "error",
        "sentence": "Se me escribió mal tu apellido en la lista.",
        "answers": [
          "Escribí mal tu apellido en la lista."
        ],
        "why": "«Escribir» exige alguien que actúa: no admite el «se» accidental."
      },
      {
        "type": "order",
        "words": [
          "Se",
          "busca",
          "a",
          "una",
          "persona",
          "que",
          "hable",
          "mapuzungun."
        ],
        "why": "Persona concreta buscada con «a»: singular."
      },
      {
        "type": "open",
        "prompt": "Escribe dos frases: un aviso con «se» para tu edificio y un percance reciente contado con «se me…».",
        "model": "Se ruega cerrar la puerta del garaje después de las diez. Ayer se me olvidó cerrarla y el portero tuvo que bajar.",
        "checklist": [
          "El aviso usa «se» con la concordancia correcta.",
          "El percance usa «se» + pronombre + verbo."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Puedo contar un hecho en activa, con «ser + participio», con «se» pasivo o con «se» impersonal según el texto.",
      "Puedo decidir si el verbo con «se» concuerda o va en singular, también con «a» + personas y con perífrasis.",
      "Puedo contar percances con el «se» accidental y asumir en primera persona lo que fue una decisión."
    ],
    "review": [
      "Mañana, busca cinco carteles en tu calle o en internet y clasifícalos en «se» pasivo o impersonal.",
      "En tres días, cuenta en voz alta tres percances de tu semana y, para cada uno, di si fue accidente o decisión.",
      "Antes de la semana 13, reescribe el primer párrafo de tu correo en activa y compara el efecto."
    ]
  },
  "related": [
    {
      "path": "/gramatica/se-pasivo-se-impersonal-y-activo",
      "label": "Clase: Se pasivo, se impersonal y activo contrastados"
    },
    {
      "path": "/gramatica/se-accidental-y-responsabilidad-atenuada",
      "label": "Clase: Se accidental y responsabilidad atenuada"
    }
  ]
};
