import type { Module } from "../../types";

/**
 * B1 · semana 15 · checkpoint · Autoestudio espejo de G116 (consecutivas: así que, por eso, de
 * modo que) y G117 (conectores argumentativos: además, incluso, en cambio), con control integrado
 * de las semanas 11 a 14. Repaso autónomo con Daniela, una ingeniera de La Paz que decide con su
 * familia si acepta un trabajo en Santa Cruz.
 */
export const b1w15: Module = {
  "id": "b1-15",
  "level": "b1",
  "week": 15,
  "kind": "checkpoint",
  "title": "¿Quedarse en La Paz o mudarse? Consecuencias, argumentos y control de las semanas 11 a 14",
  "subtitle": "Repaso de los conectores consecutivos (así que, por eso, por lo tanto) y argumentativos (además, incluso, en cambio, no… sino), y control de las semanas 11 a 14: perífrasis, preposiciones fijas, verbos de cambio, pronombres, relativos, matices y causas.",
  "stop": {
    "place": "La Paz",
    "country": "Bolivia"
  },
  "minutes": 110,
  "newObjectives": [
    "b1.gram.g116",
    "b1.gram.g117",
    "b1.voc.w15-mudanza-ciudad",
    "b1.pron.w15-asi-que-sino",
    "b1.lis.w15-debate-familiar",
    "b1.read.w15-columna-quedarse",
    "b1.wri.w15-texto-argumentativo",
    "b1.spk.w15-defender-decision",
    "b1.fun.w15-argumentar-decidir",
    "b1.disc.w15-argumento-ordenado",
    "b1.rev.w15-semanas-11-15"
  ],
  reviewObjectives: ["b1.gram.g108","b1.gram.g109","b1.voc.w11-habitos-digitales","b1.pron.w11-acento-presente-pasado","b1.lis.w11-charla-teteria","b1.read.w11-blog-dia-31","b1.wri.w11-balance-cambio","b1.spk.w11-contar-reto","b1.fun.w11-contar-cambios","b1.disc.w11-antes-despues","b1.gram.g110","b1.gram.g238","b1.voc.w12-artesania-cambio-vida","b1.pron.w12-preposicion-enlazada","b1.lis.w12-visita-taller","b1.read.w12-perfil-revista","b1.wri.w12-cambio-persona-lugar","b1.spk.w12-mi-cambio","b1.fun.w12-describir-cambios","b1.disc.w12-antes-ahora","b1.gram.g111","b1.gram.g112","b1.gram.g113","b1.voc.w13-cocina-feria","b1.pron.w13-comas-pausas","b1.lis.w13-reunion-cocina","b1.read.w13-cronica-feria","b1.wri.w13-informe-equipo","b1.spk.w13-poner-al-dia-oral","b1.fun.w13-poner-al-dia","b1.disc.w13-temas-ordenados","b1.gram.g114","b1.gram.g115","b1.voc.w14-viajes-resenas","b1.pron.w14-como-porque-tilde","b1.lis.w14-llamada-agencia","b1.read.w14-resena-colca","b1.wri.w14-resena-matizada","b1.spk.w14-reclamar-explicar","b1.fun.w14-valorar-con-matices","b1.disc.w14-equilibrio-opinion"],
  prerequisites: ["b1-14"],
  "goal": {
    "canDo": "Al final de esta semana puedes defender una decisión importante con argumentos ordenados («Además…», «Incluso…», «En cambio…»), sacar consecuencias («así que», «por lo tanto») y combinarlo con todo lo que repasaste desde la semana 11.",
    "steps": [
      "Repasa los conectores consecutivos según el registro, y «de modo que» con indicativo o subjuntivo.",
      "Repasa los conectores para sumar, intensificar, comparar y corregir.",
      "Repasa en dos tablas las clases de las semanas 11 a 14 y haz la práctica integrada.",
      "Escucha el debate de una familia de La Paz y lee la columna de opinión de Daniela.",
      "Escribe un texto de opinión, revísalo y defiende tu decisión en voz alta."
    ]
  },
  "theory": {
    "intro": "Esta es una semana de control. Repasas dos clases nuevas, sobre cómo contar consecuencias y cómo argumentar, y además vuelves a las nueve clases de las semanas 11 a 14 para comprobar que las puedes usar juntas. Te acompaña Daniela, una ingeniera de La Paz que acaba de recibir una oferta de trabajo en Santa Cruz y tiene que decidir con su familia si se muda o se queda.",
    "parts": [
      {
        "heading": "Así que, por eso, por lo tanto: de la causa a la consecuencia",
        "body": [
          "Los conectores consecutivos van detrás de la causa y presentan el resultado. En la conversación, los más frecuentes son «así que», «por eso» y «entonces»: «Me ofrecieron un sueldo mejor, así que acepté». En un texto formal se prefieren «por lo tanto», «por tanto» y «en consecuencia», normalmente tras punto o punto y coma y con coma detrás: «El alquiler ha subido un 30 %; por lo tanto, muchas familias se han ido del centro».",
          "Recuerda la dirección: «como» y «ya que» (semana 14) presentan la causa; «así que» y «por eso», la consecuencia. Puedes contar lo mismo de las dos maneras: «Como no había vuelos, fuimos en bus» = «No había vuelos, así que fuimos en bus»."
        ],
        "table": {
          "caption": "Consecuencias según el registro",
          "head": [
            "Registro",
            "Conector",
            "Ejemplo"
          ],
          "rows": [
            [
              "Conversación",
              "así que, entonces",
              "Se cortó la luz, así que cenamos con velas."
            ],
            [
              "Neutro",
              "por eso, de modo que + indicativo",
              "Trabaja de noche; por eso duerme por la mañana."
            ],
            [
              "Formal, escrito",
              "por lo tanto, en consecuencia",
              "La obra no terminó a tiempo. En consecuencia, la línea abrirá en marzo."
            ],
            [
              "Pregunta que saca una conclusión",
              "¿así que…?",
              "¿Así que te vas a Santa Cruz?"
            ]
          ]
        },
        "mistakes": [
          {
            "wrong": "Así que llovía, nos quedamos en casa.",
            "right": "Llovía, así que nos quedamos en casa.",
            "why": "«Así que» introduce la consecuencia, no la causa: va detrás."
          },
          {
            "wrong": "El precio subió por lo tanto compramos menos.",
            "right": "El precio subió; por lo tanto, compramos menos.",
            "why": "«Por lo tanto» va tras punto o punto y coma, y lleva coma detrás."
          }
        ]
      },
      {
        "heading": "«De modo que»: resultado o finalidad, y «¿así que…?»",
        "body": [
          "«De modo que» y «de manera que» con indicativo cuentan un resultado: «El teleférico une El Alto con el centro, de modo que mucha gente ya no usa el minibús». Con subjuntivo, en cambio, expresan finalidad, como «para que» (semana 7): «Pon el horario en la puerta, de modo que todos lo vean».",
          "Al principio de un turno de conversación, «¿Así que…?» saca una conclusión de lo que acabas de oír y pide confirmación: «—Me han ofrecido un puesto en Santa Cruz. —¿Así que te vas?». Se dice con entonación de pregunta."
        ],
        "examples": [
          {
            "es": "Llegó tarde, de modo que se perdió la reunión.",
            "note": "Indicativo: resultado."
          },
          {
            "es": "Habla más alto, de modo que te oigan al fondo.",
            "note": "Subjuntivo: finalidad."
          },
          {
            "es": "—Ya he firmado el contrato. —¿Así que ya es definitivo?",
            "note": "Pregunta que saca una conclusión."
          }
        ],
        "mistakes": [
          {
            "wrong": "Perdí el teleférico, de modo que llegue tarde.",
            "right": "Perdí el teleférico, de modo que llegué tarde.",
            "why": "Es un resultado que ya ocurrió: indicativo."
          }
        ],
        "tip": "Pregúntate: ¿cuento lo que pasó (indicativo) o lo que quiero conseguir (subjuntivo)?"
      },
      {
        "heading": "Sumar e intensificar: además, encima, incluso, ni siquiera",
        "body": [
          "Para sumar argumentos en la misma dirección tienes «además», «también» y «es más» (que añade uno más fuerte): «Santa Cruz tiene mejor clima. Además, el sueldo es más alto. Es más, la empresa paga la mudanza». «Encima» también suma, pero es coloquial y suele acompañar una queja: «Me subieron el alquiler y encima no arreglan la calefacción».",
          "«Incluso» y «hasta» presentan el dato más sorprendente de una serie: «Vinieron todos a despedirme, incluso mi abuela de noventa años». En negativo se usa «ni siquiera»: «Ni siquiera me preguntaron mi opinión». Para ordenar un texto, sirven «en primer lugar», «por otro lado» y «por último»."
        ],
        "table": {
          "caption": "Conectores para sumar y para destacar",
          "head": [
            "Función",
            "Conectores",
            "Ejemplo"
          ],
          "rows": [
            [
              "Sumar",
              "además, también, por otro lado",
              "El piso es grande. Además, tiene vista al Illimani."
            ],
            [
              "Sumar uno más fuerte",
              "es más",
              "No me molesta la altura. Es más, me sienta bien."
            ],
            [
              "Sumar una queja",
              "encima (coloquial)",
              "Llegó tarde y encima sin disculparse."
            ],
            [
              "Destacar lo inesperado",
              "incluso, hasta / ni siquiera",
              "Ni siquiera me llamó por mi cumpleaños."
            ]
          ]
        },
        "mistakes": [
          {
            "wrong": "No vino nadie, incluso mi hermano.",
            "right": "No vino nadie, ni siquiera mi hermano.",
            "why": "En una frase negativa, el dato extremo va con «ni siquiera»."
          }
        ]
      },
      {
        "heading": "Comparar y corregir: en cambio, mientras que, no… sino",
        "body": [
          "«En cambio» y «mientras que» comparan dos personas, cosas o posturas distintas: «En La Paz hace frío; en Santa Cruz, en cambio, hace calor todo el año», «Mi padre quiere quedarse, mientras que mi madre prefiere probar». Fíjate en la diferencia con «sin embargo» (semana 14): «sin embargo» va contra lo que esperabas; «en cambio» pone dos cosas una al lado de la otra.",
          "Para corregir una idea falsa, usa «no… sino» (con un nombre o un adjetivo) o «no… sino que» (con un verbo conjugado): «No es una decisión fácil, sino muy difícil», «No me voy por dinero, sino que quiero crecer profesionalmente». «Pero» no corrige: añade algo compatible («Es caro, pero bueno»). Y no confundas «sino» con «si no» (condición, semana 9)."
        ],
        "examples": [
          {
            "es": "Mi hermano vive en El Alto, mientras que yo vivo en Sopocachi.",
            "note": "Comparar dos realidades."
          },
          {
            "es": "No se mudaron a Cochabamba, sino a Sucre.",
            "note": "Corregir con un nombre."
          },
          {
            "es": "No alquilaron el piso, sino que lo compraron.",
            "note": "Corregir con un verbo: «sino que»."
          },
          {
            "es": "El piso es pequeño, pero muy luminoso.",
            "note": "«Pero»: no corrige, añade."
          }
        ],
        "mistakes": [
          {
            "wrong": "No vamos en bus, pero en avión.",
            "right": "No vamos en bus, sino en avión.",
            "why": "Se corrige una idea con «no… sino»."
          },
          {
            "wrong": "No lo vendió, sino lo regaló.",
            "right": "No lo vendió, sino que lo regaló.",
            "why": "Delante de un verbo conjugado, «sino que»."
          }
        ]
      },
      {
        "heading": "Control de las semanas 11 y 12: terminar, repetir, preposiciones y cambios",
        "body": [
          "Semana 11: «acabo de» (hace un momento) y «acabé de» (terminé); «dejar de» (abandonar) frente a «terminar de» (completar); «llegar a» (el punto máximo) y «acabar + gerundio» (el resultado); «volver a + infinitivo» (otra vez) y «no volver a» (nunca más), con el pronombre en un solo sitio.",
          "Semana 12: verbos con preposición fija (acostumbrarse a, darse cuenta de, pensar en, contar con, soñar con), que la mantienen delante de «que» y en las preguntas; y los verbos de cambio: hacerse (decisión), volverse (carácter), convertirse en (transformación), llegar a ser (meta) y pasar a ser (categoría)."
        ],
        "table": {
          "caption": "Las clases de las semanas 11 y 12 en una frase",
          "head": [
            "Semana",
            "Clase",
            "Ejemplo de Daniela"
          ],
          "rows": [
            [
              "11",
              "Acabar de, dejar de, llegar a",
              "Acabo de recibir la oferta y llegué a pensar que no me la darían."
            ],
            [
              "11",
              "Volver a + infinitivo",
              "Si me voy, no sé si volveré a vivir en La Paz."
            ],
            [
              "12",
              "Verbos con preposición fija",
              "Me di cuenta de que no quería dejar de pensar en el proyecto."
            ],
            [
              "12",
              "Verbos de cambio",
              "Mi barrio se ha convertido en un lugar caro y me he vuelto más prudente."
            ]
          ]
        }
      },
      {
        "heading": "Control de las semanas 13 y 14: organizar, matizar y explicar causas",
        "body": [
          "Semana 13: el tema delante con su pronombre («La oferta la acepté ayer», «A mis padres les conté todo»); quien, el que y el cual («la persona con la que hablé»); y «lo que», «lo de» y «lo + adjetivo» («Lo que me preocupa es lo del colegio de mi hijo»).",
          "Semana 14: «ni… ni», «pero», «sin embargo» y «aunque» para matizar, recordando que lo último pesa más; y los conectores de causa: es que, porque, como (al principio), ya que, puesto que, debido a, gracias a y por culpa de. Esta semana añades la otra cara: la consecuencia."
        ],
        "table": {
          "caption": "Las clases de las semanas 13 y 14 en una frase",
          "head": [
            "Semana",
            "Clase",
            "Ejemplo de Daniela"
          ],
          "rows": [
            [
              "13",
              "El tema delante",
              "La casa de mis padres no la quiero vender."
            ],
            [
              "13",
              "Relativos y «lo»",
              "Quien más me apoya es mi hermano; lo difícil es lo de mi madre."
            ],
            [
              "14",
              "Matizar",
              "No es ni fácil ni rápido; sin embargo, es una gran oportunidad."
            ],
            [
              "14",
              "Causas",
              "Como el sueldo es mejor, podré ahorrar; gracias a eso, ayudaré a mis padres."
            ]
          ]
        },
        "mistakes": [
          {
            "wrong": "Como el sueldo es mejor, así que me voy.",
            "right": "Como el sueldo es mejor, me voy. / El sueldo es mejor, así que me voy.",
            "why": "No se combinan una causa con «como» y una consecuencia con «así que» en la misma frase."
          }
        ]
      }
    ]
  },
  "grammar": {
    "intro": "Primero practicas las consecuencias y los argumentos; después, mezclas las clases de las semanas 11 a 14.",
    "exercises": [
      {
        "id": "b1-15-gramatica-consecuencia",
        "type": "gap",
        "title": "¿Y qué pasó entonces?",
        "prompt": "Completa con «así que», «por eso», «por lo tanto» o el verbo en la forma correcta.",
        "items": [
          {
            "q": "Se cerró la carretera a Oruro, ___ volvimos en avión.",
            "answers": [
              [
                "así que",
                "por eso",
                "entonces"
              ]
            ],
            "why": "Consecuencia en conversación."
          },
          {
            "q": "El proyecto superó el presupuesto en un 20 %; ___, se aplaza la segunda fase.",
            "answers": [
              [
                "por lo tanto",
                "por tanto",
                "en consecuencia"
              ]
            ],
            "why": "Texto formal: «por lo tanto», tras punto y coma."
          },
          {
            "q": "Mi jefe vive en El Alto. ___ siempre llega en teleférico.",
            "answers": [
              [
                "Por eso",
                "por eso"
              ]
            ],
            "why": "Consecuencia neutra al empezar una frase."
          },
          {
            "q": "Salió sin abrigo, de modo que ___ (resfriarse, él) en el mirador.",
            "answers": [
              [
                "se resfrió"
              ]
            ],
            "why": "Resultado ya ocurrido: indicativo."
          },
          {
            "q": "Escribe el mensaje en mayúsculas, de modo que lo ___ (leer) todos.",
            "answers": [
              [
                "lean"
              ]
            ],
            "why": "Finalidad: subjuntivo."
          }
        ]
      },
      {
        "id": "b1-15-gramatica-argumentos",
        "type": "choice",
        "title": "Sumar, destacar, comparar o corregir",
        "prompt": "Elige el conector adecuado.",
        "items": [
          {
            "q": "Santa Cruz tiene más trabajo. ___, la vida es más barata.",
            "options": [
              "En cambio",
              "Además",
              "Ni siquiera"
            ],
            "answer": 1,
            "why": "Sumar un argumento en la misma dirección: «además»."
          },
          {
            "q": "Toda la familia vino a la despedida, ___ mi tío de Potosí.",
            "options": [
              "incluso",
              "en cambio",
              "sino"
            ],
            "answer": 0,
            "why": "El dato más sorprendente: «incluso»."
          },
          {
            "q": "En La Paz se camina cuesta arriba; en Santa Cruz, ___, todo es llano.",
            "options": [
              "además",
              "encima",
              "en cambio"
            ],
            "answer": 2,
            "why": "Comparar dos lugares distintos: «en cambio»."
          },
          {
            "q": "No me voy por el clima, ___ por el trabajo.",
            "options": [
              "pero",
              "sino",
              "si no"
            ],
            "answer": 1,
            "why": "Corregir una idea: «no… sino»."
          },
          {
            "q": "Me quejé tres veces y ___ me contestaron.",
            "options": [
              "ni siquiera",
              "incluso",
              "es más"
            ],
            "answer": 0,
            "why": "Dato extremo en negativo: «ni siquiera»."
          },
          {
            "q": "No vendieron la casa, ___ la alquilaron a unos estudiantes.",
            "options": [
              "sino",
              "pero que",
              "sino que"
            ],
            "answer": 2,
            "why": "Corregir con un verbo conjugado: «sino que»."
          }
        ]
      },
      {
        "id": "b1-15-gramatica-mezcla-11-14",
        "type": "choice",
        "title": "Control de las semanas 11 a 14",
        "prompt": "Elige la forma correcta. Cada frase repasa una clase de las semanas 11 a 14.",
        "items": [
          {
            "q": "Semana 11. «Daniela ___ hablar con su jefe hace cinco minutos.»",
            "options": [
              "acabó de",
              "acaba de",
              "dejó de"
            ],
            "answer": 1,
            "why": "Pasado muy reciente: «acaba de»."
          },
          {
            "q": "Semana 12. «Con los años, mi padre ___ más tranquilo.»",
            "options": [
              "se ha vuelto",
              "se ha convertido",
              "ha vuelto a"
            ],
            "answer": 0,
            "why": "Cambio de carácter: «volverse»."
          },
          {
            "q": "Semana 13. «La oferta ___ recibí por correo electrónico.»",
            "options": [
              "le",
              "la",
              "lo"
            ],
            "answer": 1,
            "why": "Tema delante, directo femenino: «la»."
          },
          {
            "q": "Semana 13. «El compañero con ___ trabajo es de Tarija.»",
            "options": [
              "que",
              "quien que",
              "el que"
            ],
            "answer": 2,
            "why": "Preposición + «el que» (o «quien»)."
          },
          {
            "q": "Semana 14. «___ el sueldo ___ el horario son el problema.»",
            "options": [
              "Ni… o",
              "Ni… ni",
              "No… ni"
            ],
            "answer": 1,
            "why": "Delante del verbo: «ni… ni», sin «no»."
          }
        ]
      },
      {
        "id": "b1-15-gramatica-errores",
        "type": "error",
        "title": "Corrige el error",
        "prompt": "Cada frase tiene un error de las semanas 11 a 15. Escríbela bien.",
        "items": [
          {
            "sentence": "No me voy por dinero, pero por mi carrera.",
            "answers": [
              "No me voy por dinero, sino por mi carrera."
            ],
            "why": "Para corregir una idea: «no… sino»."
          },
          {
            "sentence": "Así que no había plazas, compramos billetes para el jueves.",
            "answers": [
              "No había plazas, así que compramos billetes para el jueves.",
              "Como no había plazas, compramos billetes para el jueves."
            ],
            "why": "«Así que» va con la consecuencia; para la causa al principio, «como»."
          },
          {
            "sentence": "Todavía no me acostumbro el ruido de los minibuses.",
            "answers": [
              "Todavía no me acostumbro al ruido de los minibuses."
            ],
            "why": "Semana 12: «acostumbrarse a»."
          },
          {
            "sentence": "El que más me preocupa es la altura de El Alto.",
            "answers": [
              "Lo que más me preocupa es la altura de El Alto."
            ],
            "why": "Semana 13: una idea, «lo que»."
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Palabras para debatir sobre mudarse de ciudad. Algunas son muy de Bolivia: te lo indicamos.",
    "groups": [
      {
        "title": "La decisión",
        "items": [
          {
            "es": "la oferta de trabajo"
          },
          {
            "es": "el coste de vida",
            "note": "En gran parte de América se dice «el costo de vida»."
          },
          {
            "es": "echar raíces"
          },
          {
            "es": "el arraigo"
          },
          {
            "es": "pesar más"
          },
          {
            "es": "dar el paso"
          }
        ]
      },
      {
        "title": "La ciudad",
        "items": [
          {
            "es": "la altura",
            "note": "La Paz está a unos 3600 metros."
          },
          {
            "es": "el teleférico",
            "note": "En La Paz, el gran sistema de transporte por cable."
          },
          {
            "es": "el minibús"
          },
          {
            "es": "cuesta arriba / cuesta abajo"
          },
          {
            "es": "el clima templado"
          }
        ]
      },
      {
        "title": "Expresiones útiles",
        "items": [
          {
            "es": "pros y contras"
          },
          {
            "es": "no es para tanto"
          },
          {
            "es": "pensárselo dos veces"
          },
          {
            "es": "harto",
            "note": "En Bolivia y otros países andinos, coloquial: «mucho»."
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "b1-15-vocabulario-definiciones",
        "type": "match",
        "title": "Cada expresión con su definición",
        "prompt": "Une cada expresión con su explicación.",
        "pairs": [
          {
            "left": "echar raíces",
            "right": "quedarse a vivir en un lugar y sentirlo propio"
          },
          {
            "left": "dar el paso",
            "right": "decidirse por fin a hacer algo importante"
          },
          {
            "left": "pesar más",
            "right": "tener más importancia en una decisión"
          },
          {
            "left": "pensárselo dos veces",
            "right": "reflexionar antes de decidir"
          },
          {
            "left": "el coste de vida",
            "right": "lo que cuesta vivir en un lugar"
          }
        ],
        "why": "Fíjate en si la expresión habla de quedarse, de decidir, de comparar, de reflexionar o de dinero."
      },
      {
        "id": "b1-15-vocabulario-huecos",
        "type": "gap",
        "title": "La lista de Daniela",
        "prompt": "Completa con una palabra del banco.",
        "bank": [
          "contras",
          "teleférico",
          "paso",
          "raíces",
          "altura"
        ],
        "items": [
          {
            "q": "Hice una lista de pros y ___ antes de decidir.",
            "answers": [
              [
                "contras"
              ]
            ],
            "why": "«Pros y contras»: ventajas e inconvenientes."
          },
          {
            "q": "Cada mañana bajo al trabajo en ___: tardo veinte minutos.",
            "answers": [
              [
                "teleférico"
              ]
            ],
            "why": "El transporte por cable de La Paz."
          },
          {
            "q": "A mi madre le cuesta respirar por la ___.",
            "answers": [
              [
                "altura"
              ]
            ],
            "why": "La elevación sobre el nivel del mar."
          },
          {
            "q": "Mis abuelos echaron ___ en este barrio hace sesenta años.",
            "answers": [
              [
                "raíces"
              ]
            ],
            "why": "Se quedaron a vivir para siempre."
          },
          {
            "q": "Lo pensé mucho, pero al final di el ___.",
            "answers": [
              [
                "paso"
              ]
            ],
            "why": "«Dar el paso»: decidirse."
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "«Así que» y «¿así que…?», «sino» y «si no»",
    "explanation": [
      "«Así que» como consecuencia se dice en medio de la frase, con un tono que baja al final: «No había vuelos, así que fuimos en bus». En cambio, «¿Así que…?» al principio de un turno sube al final, porque pide confirmación: «¿Así que te vas a Santa Cruz?».",
      "«Sino» es una sola palabra átona: se apoya en lo que sigue («no en bus, sino‿en avión»). «Si no» son dos palabras y el «no» se pronuncia con fuerza: «Si NO llueve, salimos». Esa diferencia te ayuda también a escribirlas bien."
    ],
    "examples": [
      {
        "es": "No había vuelos, así que fuimos en bus. / ¿Así que fueron en bus?",
        "note": "Tono que baja / tono que sube."
      },
      {
        "es": "No es mío, sino de Ana. / Si no es tuyo, devuélvelo.",
        "note": "«Sino» átono / «si NO» con fuerza."
      }
    ],
    "perceive": {
      "id": "b1-15-pronunciacion-asi-que",
      "type": "listen",
      "title": "¿Conclusión o pregunta? ¿Sino o si no?",
      "prompt": "Escucha cada frase y elige lo que oyes.",
      "items": [
        {
          "q": "¿La persona afirma o pregunta?",
          "options": [
            "Afirma una consecuencia.",
            "Pregunta para confirmar."
          ],
          "answer": 1,
          "why": "El tono sube al final: «¿Así que…?».",
          "audio": "¿Así que al final aceptaste el trabajo en Santa Cruz?",
          "voice": "es-PE-m"
        },
        {
          "q": "¿Y aquí?",
          "options": [
            "Afirma una consecuencia.",
            "Pregunta para confirmar."
          ],
          "answer": 0,
          "why": "El tono baja: «así que» presenta el resultado.",
          "audio": "Me ofrecieron el doble de sueldo, así que acepté el trabajo.",
          "voice": "es-PE-f"
        },
        {
          "q": "¿Qué oyes?",
          "options": [
            "si no",
            "sino"
          ],
          "answer": 1,
          "why": "Una palabra átona que corrige: «sino».",
          "audio": "No nos mudamos a Santa Cruz, sino a Tarija.",
          "voice": "es-CO-m"
        },
        {
          "q": "¿Qué oyes ahora?",
          "options": [
            "sino",
            "si no"
          ],
          "answer": 1,
          "why": "«No» con fuerza: condición, «si no».",
          "audio": "Si no encuentro piso este mes, me quedo con mis padres.",
          "voice": "es-MX-f"
        }
      ]
    },
    "produce": [
      {
        "text": "¿Así que te vas? — Sí, me pagan más, así que me voy.",
        "tip": "Primero sube el tono; después baja.",
        "voice": "es-PE-f"
      },
      {
        "text": "No lo hago por dinero, sino por mi familia.",
        "tip": "Liga «sino‿por» sin fuerza en «sino».",
        "voice": "es-PE-m"
      },
      {
        "text": "Si no me lo dices hoy, no me lo digas nunca.",
        "tip": "Fuerza en el «no» de «si no».",
        "voice": "es-CO-m"
      }
    ],
    "spelling": "«Sino» (corrección: «no A, sino B») va junto; «si no» (condición: «si no vienes…») va separado. Y «así que» siempre son dos palabras."
  },
  "listening": {
    "title": "Sobremesa en Sopocachi",
    "context": "Es domingo después de comer en casa de los padres de Daniela, en el barrio de Sopocachi. Daniela acaba de contar que le han ofrecido un trabajo en Santa Cruz. Su padre, Ramiro, y su hermano, Joaquín, dan su opinión.",
    "speakers": [
      {
        "id": "dan",
        "name": "Daniela",
        "voice": "es-PE-f",
        "role": "ingeniera"
      },
      {
        "id": "ram",
        "name": "Ramiro",
        "voice": "es-PE-m",
        "role": "padre de Daniela"
      },
      {
        "id": "joa",
        "name": "Joaquín",
        "voice": "es-CO-m",
        "role": "hermano de Daniela"
      }
    ],
    "script": [
      {
        "speaker": "ram",
        "text": "¿Así que te vas a Santa Cruz? ¿Así, de un día para otro?"
      },
      {
        "speaker": "dan",
        "text": "No es de un día para otro, papá. Acabo de recibir la oferta, pero llevo meses pensando en cambiar. Y no me voy por dinero, sino porque allí podré dirigir un proyecto entero."
      },
      {
        "speaker": "joa",
        "text": "Yo creo que tiene razón. En primer lugar, es una oportunidad que no vuelve a aparecer. Además, en Santa Cruz el clima es mejor. Es más, el médico siempre te dice que la altura no te sienta bien."
      },
      {
        "speaker": "ram",
        "text": "Sí, sí, pero tu hermana nació aquí. Su vida, sus amigos, todo lo tiene en La Paz. En Santa Cruz, en cambio, no conoce a nadie. Ni siquiera ha ido de vacaciones."
      },
      {
        "speaker": "dan",
        "text": "Eso no es verdad: fui dos veces por trabajo. Y la empresa me paga el piso los primeros seis meses, así que no tendré que preocuparme por eso."
      },
      {
        "speaker": "ram",
        "text": "Lo que me preocupa no es lo del piso, hija. Es que tu madre y yo nos estamos haciendo mayores."
      },
      {
        "speaker": "joa",
        "text": "Pero papá, yo me quedo aquí. Y el vuelo dura una hora, de modo que puede volver cuando quiera."
      },
      {
        "speaker": "dan",
        "text": "Exacto. Además, como voy a ganar más, podré venir incluso cada dos semanas. No dejo de quererlos por irme a otra ciudad."
      },
      {
        "speaker": "ram",
        "text": "Bueno… Si ya lo has decidido, entonces solo me queda apoyarte. Aunque te voy a extrañar harto."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha una vez sin leer. ¿Cómo termina la conversación?",
        "exercise": {
          "id": "b1-15-escucha-global",
          "type": "choice",
          "prompt": "Elige la mejor respuesta.",
          "items": [
            {
              "q": "¿De qué discuten?",
              "options": [
                "De si Daniela debe aceptar un trabajo en Santa Cruz.",
                "De la venta de la casa familiar.",
                "De las vacaciones de verano."
              ],
              "answer": 0,
              "why": "Daniela tiene una oferta y la familia da su opinión."
            },
            {
              "q": "¿Cómo termina la conversación?",
              "options": [
                "El padre se niega a hablar más.",
                "Joaquín cambia de opinión.",
                "El padre acepta la decisión, aunque está triste."
              ],
              "answer": 2,
              "why": "«Solo me queda apoyarte. Aunque te voy a extrañar harto.»"
            }
          ]
        }
      },
      {
        "stage": "detail",
        "prompt": "Escucha otra vez y anota los detalles.",
        "exercise": {
          "id": "b1-15-escucha-detalle",
          "type": "choice",
          "prompt": "Responde según la conversación.",
          "items": [
            {
              "q": "¿Por qué quiere irse Daniela, según ella?",
              "options": [
                "Por el dinero.",
                "Para dirigir un proyecto entero.",
                "Por el clima."
              ],
              "answer": 1,
              "why": "«No me voy por dinero, sino porque allí podré dirigir un proyecto entero.»"
            },
            {
              "q": "¿Qué argumento añade Joaquín con «es más»?",
              "options": [
                "Que la altura no le sienta bien a Daniela.",
                "Que el vuelo es barato.",
                "Que él también se va."
              ],
              "answer": 0,
              "why": "«Es más, el médico siempre te dice que la altura no te sienta bien.»"
            },
            {
              "q": "¿Qué le preocupa de verdad al padre?",
              "options": [
                "El precio del piso.",
                "Que Daniela no tenga amigos.",
                "Que él y su mujer se están haciendo mayores."
              ],
              "answer": 2,
              "why": "«Lo que me preocupa no es lo del piso… Es que tu madre y yo nos estamos haciendo mayores.»"
            }
          ]
        }
      },
      {
        "stage": "notice",
        "prompt": "Fíjate en la gramática. Completa lo que dicen exactamente.",
        "exercise": {
          "id": "b1-15-escucha-formas",
          "type": "gap",
          "prompt": "Escribe la palabra o las palabras que usan.",
          "items": [
            {
              "q": "Y no me voy por dinero, ___ porque allí podré dirigir un proyecto entero.",
              "answers": [
                [
                  "sino"
                ]
              ],
              "why": "Corrección: «no… sino»."
            },
            {
              "q": "En Santa Cruz, en ___, no conoce a nadie.",
              "answers": [
                [
                  "cambio"
                ]
              ],
              "why": "«En cambio» compara dos lugares."
            },
            {
              "q": "La empresa me paga el piso los primeros seis meses, ___ ___ no tendré que preocuparme por eso.",
              "answers": [
                [
                  "así"
                ],
                [
                  "que"
                ]
              ],
              "why": "Consecuencia en conversación: «así que»."
            },
            {
              "q": "Tu madre y yo nos estamos ___ mayores.",
              "answers": [
                [
                  "haciendo"
                ]
              ],
              "why": "Semana 12: «hacerse mayor», proceso largo."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "Por qué no me fui (todavía) de La Paz",
    "genre": "Columna de opinión en un diario",
    "frame": "Un diario de La Paz publica cada domingo la columna de un lector. Esta semana escribe Daniela, un año después de la sobremesa en Sopocachi.",
    "text": [
      "Hace un año me ofrecieron un puesto en Santa Cruz y, como tantos paceños de mi edad, estuve a punto de hacer las maletas. No lo hice, y esta columna no es una queja contra quienes se van, sino una explicación de por qué algunos nos quedamos.",
      "En primer lugar, La Paz ha cambiado. Hace quince años, cruzar la ciudad podía llevar dos horas de minibús; hoy el teleférico se ha convertido en la columna vertebral del transporte, así que vivir en El Alto y trabajar en el centro ya no es una tortura. Además, la oferta cultural ha crecido: hay teatros, festivales e incluso una feria del libro que llena las calles cada agosto.",
      "Por otro lado, lo que más pesó en mi decisión no fue la ciudad, sino la gente. Mis padres se están haciendo mayores y mi hermano trabaja fuera casi todo el año. En Santa Cruz, en cambio, yo no tenía a nadie con quien contar. Es verdad que allí el sueldo era mejor y el clima, más amable. Sin embargo, el dinero no me iba a devolver los domingos en familia.",
      "¿Quiere decir esto que nunca me iré? No. Mi empresa abrió una oficina aquí, de modo que pude aceptar un proyecto parecido sin mudarme. Ni la altura ni el frío han dejado de molestarme, pero me he acostumbrado a ellos. Por lo tanto, mi consejo es sencillo: antes de dar el paso, pregúntense qué perderían. A veces la respuesta es «nada», y entonces hay que irse. Otras veces, la respuesta es todo."
    ],
    "glossary": [
      {
        "es": "paceño, paceña",
        "note": "De La Paz."
      },
      {
        "es": "la columna vertebral"
      },
      {
        "es": "estar a punto de"
      }
    ],
    "tasks": [
      {
        "id": "b1-15-lectura-comprension",
        "type": "choice",
        "title": "Comprensión",
        "prompt": "Responde según la columna.",
        "items": [
          {
            "q": "¿Qué intención tiene la columna?",
            "options": [
              "Explicar por qué algunos se quedan.",
              "Criticar a quienes se van de La Paz.",
              "Pedir más teleféricos."
            ],
            "answer": 0,
            "why": "«No es una queja contra quienes se van, sino una explicación de por qué algunos nos quedamos.»"
          },
          {
            "q": "¿Qué consecuencia tuvo el teleférico?",
            "options": [
              "Subieron los alquileres del centro.",
              "Vivir en El Alto y trabajar en el centro dejó de ser una tortura.",
              "Desaparecieron los minibuses."
            ],
            "answer": 1,
            "why": "«…así que vivir en El Alto y trabajar en el centro ya no es una tortura.»"
          },
          {
            "q": "¿Qué permitió a Daniela aceptar un proyecto sin mudarse?",
            "options": [
              "Una oferta de otra empresa.",
              "Un préstamo de su hermano.",
              "Que su empresa abrió una oficina en La Paz."
            ],
            "answer": 2,
            "why": "«Mi empresa abrió una oficina aquí, de modo que pude aceptar un proyecto parecido sin mudarme.»"
          }
        ]
      },
      {
        "id": "b1-15-lectura-funciones",
        "type": "classify",
        "title": "¿Qué hace cada frase?",
        "prompt": "Clasifica cada fragmento según su función en la columna.",
        "categories": [
          "Suma un argumento",
          "Compara o corrige",
          "Presenta una consecuencia"
        ],
        "items": [
          {
            "text": "Además, la oferta cultural ha crecido",
            "cat": 0
          },
          {
            "text": "En Santa Cruz, en cambio, yo no tenía a nadie",
            "cat": 1
          },
          {
            "text": "así que vivir en El Alto y trabajar en el centro ya no es una tortura",
            "cat": 2
          },
          {
            "text": "e incluso una feria del libro que llena las calles",
            "cat": 0
          },
          {
            "text": "no fue la ciudad, sino la gente",
            "cat": 1
          },
          {
            "text": "Por lo tanto, mi consejo es sencillo",
            "cat": 2
          }
        ]
      }
    ],
    "noticing": {
      "prompt": "Fíjate en los conectores de esta semana y en las clases de las semanas 11 a 14.",
      "items": [
        {
          "quote": "el teleférico se ha convertido en la columna vertebral del transporte, así que",
          "note": "Semana 12, «convertirse en», seguido de una consecuencia con «así que»."
        },
        {
          "quote": "no fue la ciudad, sino la gente",
          "note": "Corrección con «no… sino»."
        },
        {
          "quote": "yo no tenía a nadie con quien contar",
          "note": "Semanas 12 y 13: «contar con» y la preposición delante del relativo."
        },
        {
          "quote": "Ni la altura ni el frío han dejado de molestarme",
          "note": "Semanas 11 y 14: «ni… ni» y «dejar de»."
        }
      ]
    }
  },
  "practice": {
    "intro": "Combinas las clases de esta semana con las de las semanas 11 a 14.",
    "exercises": [
      {
        "id": "b1-15-practica-orden",
        "type": "order",
        "title": "Frases del debate",
        "prompt": "Ordena las palabras para formar frases completas.",
        "items": [
          {
            "words": [
              "No",
              "me",
              "mudo",
              "por",
              "el",
              "clima,",
              "sino",
              "por",
              "el",
              "trabajo."
            ]
          },
          {
            "words": [
              "El",
              "vuelo",
              "es",
              "corto,",
              "así",
              "que",
              "vendré",
              "a",
              "menudo."
            ]
          },
          {
            "words": [
              "Mi",
              "padre",
              "quiere",
              "quedarse,",
              "mientras",
              "que",
              "mi",
              "madre",
              "duda."
            ]
          },
          {
            "words": [
              "Ni",
              "siquiera",
              "me",
              "preguntaron",
              "qué",
              "pensaba",
              "yo."
            ]
          }
        ]
      },
      {
        "id": "b1-15-practica-retrieval",
        "type": "gap",
        "title": "Recuperación integrada: semanas 11 a 14",
        "prompt": "Completa cada frase de Daniela. Entre paréntesis tienes la semana que repasas.",
        "items": [
          {
            "q": "(Semana 11) Si me voy, no sé si ___ (volver, yo) a vivir en La Paz.",
            "answers": [
              [
                "volveré",
                "voy a volver"
              ]
            ],
            "why": "«Volver a» en futuro."
          },
          {
            "q": "(Semana 11) Mi hermano ___ (dejar) de fumar cuando nació su hijo.",
            "answers": [
              [
                "dejó"
              ]
            ],
            "why": "«Dejar de»: abandonar un hábito."
          },
          {
            "q": "(Semana 11) Durante el proceso, ___ (llegar, yo) a hacer cuatro entrevistas.",
            "answers": [
              [
                "llegué"
              ]
            ],
            "why": "«Llegar a»: el punto máximo."
          },
          {
            "q": "(Semana 12) Me costó un año acostumbrarme ___ trabajar en casa.",
            "answers": [
              [
                "a"
              ]
            ],
            "why": "«Acostumbrarse a»."
          },
          {
            "q": "(Semana 12) Con la fama, el pintor del barrio ___ (volverse) muy arrogante.",
            "answers": [
              [
                "se volvió",
                "se ha vuelto"
              ]
            ],
            "why": "Cambio de carácter: «volverse»."
          },
          {
            "q": "(Semana 13) A mis padres ___ conté la noticia el domingo.",
            "answers": [
              [
                "les"
              ]
            ],
            "why": "Indirecto plural delante: «les»."
          },
          {
            "q": "(Semana 13) La compañera con ___ comparto oficina es de Sucre.",
            "answers": [
              [
                "la que",
                "quien"
              ]
            ],
            "why": "Preposición + «la que» o «quien»."
          },
          {
            "q": "(Semana 14) ___ no había vuelos directos, hice escala en Cochabamba.",
            "answers": [
              [
                "Como",
                "como"
              ]
            ],
            "why": "Causa al principio: «como»."
          },
          {
            "q": "(Semana 14) Encontré piso rápido ___ una amiga que trabaja en una inmobiliaria.",
            "answers": [
              [
                "gracias a"
              ]
            ],
            "why": "Causa positiva: «gracias a»."
          }
        ]
      },
      {
        "id": "b1-15-practica-errores-integrados",
        "type": "error",
        "title": "Errores de las semanas 11 a 15",
        "prompt": "Corrige el error de cada frase.",
        "items": [
          {
            "sentence": "La casa de mis abuelos se convirtió un hostal para mochileros.",
            "answers": [
              "La casa de mis abuelos se convirtió en un hostal para mochileros."
            ],
            "why": "Semana 12: «convertirse en»."
          },
          {
            "sentence": "Las maletas hice anoche, así que ya estoy lista.",
            "answers": [
              "Las maletas las hice anoche, así que ya estoy lista."
            ],
            "why": "Semana 13: tema delante con su pronombre."
          },
          {
            "sentence": "Acabé de llegar al aeropuerto, ¿dónde estás?",
            "answers": [
              "Acabo de llegar al aeropuerto, ¿dónde estás?"
            ],
            "why": "Semana 11: pasado reciente con «acabo de»."
          },
          {
            "sentence": "Debido a hubo una huelga, el vuelo salió tarde.",
            "answers": [
              "Debido a que hubo una huelga, el vuelo salió tarde.",
              "Debido a una huelga, el vuelo salió tarde."
            ],
            "why": "Semana 14: «debido a» + nombre o «debido a que» + verbo."
          }
        ]
      },
      {
        "id": "b1-15-practica-escritura-guiada",
        "type": "open",
        "title": "Argumentos breves",
        "prompt": "Escribe cada texto en dos o tres frases.",
        "items": [
          {
            "prompt": "Un amigo cree que te mudas por dinero. Corrige su idea y da otro argumento.",
            "model": "No me mudo por dinero, sino por el proyecto que me ofrecen. Además, en la nueva ciudad podré estudiar un máster por las tardes.",
            "checklist": [
              "Corriges con «no… sino».",
              "Sumas un argumento con «además» o «es más»."
            ]
          },
          {
            "prompt": "Compara dos ciudades que conozcas y saca una consecuencia.",
            "model": "En mi ciudad el transporte es muy caro; en la capital, en cambio, hay un abono mensual barato. Por eso mucha gente joven prefiere vivir allí.",
            "checklist": [
              "Comparas con «en cambio» o «mientras que».",
              "Sacas una consecuencia con «por eso», «así que» o «por lo tanto»."
            ]
          },
          {
            "prompt": "Escribe una conclusión formal para un informe sobre el transporte de tu ciudad.",
            "model": "Las líneas de autobús no llegan a los barrios nuevos y el tráfico ha aumentado un 15 %. Por lo tanto, proponemos crear dos líneas más antes de 2027.",
            "checklist": [
              "Usas «por lo tanto» o «en consecuencia» con la puntuación correcta.",
              "Hay una causa clara antes de la consecuencia."
            ]
          }
        ]
      }
    ]
  },
  "writing": {
    "task": "Escribe un texto de opinión para el blog de tu clase sobre una decisión importante (mudarse, cambiar de trabajo, estudiar otra carrera): presenta tu postura, suma y compara argumentos, corrige una idea falsa y saca una conclusión. Usa al menos tres clases de las semanas 11 a 14.",
    "context": "El blog publica textos de estudiantes que contaron una decisión difícil. Los lectores quieren entender tus razones, no solo saber qué decidiste.",
    "steps": [
      "Escribe tu postura en una frase y anota tres argumentos a favor, uno en contra y una idea falsa que quieres corregir.",
      "Primer párrafo: la situación (qué acaba de pasar o qué volviste a pensar) y tus argumentos, con «en primer lugar», «además» e «incluso».",
      "Segundo párrafo: el argumento contrario con «en cambio» o «sin embargo», la corrección con «no… sino» y una conclusión con «por lo tanto» o «así que».",
      "Revisa los conectores: «así que» y «por lo tanto» van con la consecuencia; «sino» corrige y «pero» añade. Corrige también los pronombres de los temas que pongas delante."
    ],
    "useLanguage": [
      "así que, por eso, por lo tanto",
      "de modo que + indicativo / subjuntivo",
      "además, es más, incluso, ni siquiera",
      "en cambio, mientras que",
      "no… sino / sino que",
      "acabar de, volver a, hacerse, lo que, como, ya que"
    ],
    "model": [
      "Hace dos años dejé un trabajo fijo en un banco para estudiar diseño gráfico, y todavía hay gente que piensa que me volví loca. En primer lugar, quiero aclarar que no lo hice por aburrimiento, sino porque llevaba años soñando con dibujar. Además, el banco estaba cerrando oficinas, de modo que mi puesto no era tan seguro como parecía. Es más, me di cuenta de que solo era feliz los fines de semana, cuando volvía a coger los lápices.",
      "Es verdad que ahora gano menos. Mis antiguos compañeros, en cambio, tienen coche nuevo y vacaciones caras. Sin embargo, lo que yo he ganado no se mide en dinero: me he hecho diseñadora, trabajo con personas con las que me río e incluso he expuesto mis ilustraciones en una galería. Acabo de terminar mi primer libro infantil. Por lo tanto, si alguien me pregunta si me arrepiento, la respuesta es clara: no, y lo volvería a hacer."
    ],
    "checklist": [
      "Sumo argumentos con «además», «es más» o «incluso» y comparo con «en cambio» o «mientras que».",
      "Corrijo una idea falsa con «no… sino» (o «sino que» con verbo).",
      "Saco una conclusión con «por lo tanto» o «así que», bien puntuada.",
      "Uso al menos tres clases de las semanas 11 a 14 (perífrasis, verbos de cambio, «lo que», causas…).",
      "El texto tiene dos párrafos: los argumentos y la conclusión."
    ],
    "words": [
      140,
      200
    ]
  },
  "speaking": {
    "intro": "Graba tus respuestas y escúchate: comprueba la entonación de «así que» y «¿así que…?», y que «sino» suena átono.",
    "tasks": [
      {
        "title": "Defiendo mi decisión",
        "prompt": "Habla durante dos minutos y medio para defender una decisión importante que tomaste o que quieres tomar: preséntala, suma argumentos, compara con la otra opción, corrige una idea falsa y termina con una conclusión. Usa también la gramática de las semanas 11 a 14.",
        "prep": [
          "Tres argumentos con «en primer lugar», «además» y «es más» o «incluso».",
          "Una comparación con «en cambio» y una corrección con «no… sino».",
          "Una conclusión con «así que» o «por lo tanto»."
        ],
        "seconds": 150,
        "model": "Hace un año decidí volver a vivir con mis padres, y mucha gente no lo entiende. En primer lugar, no lo hice porque no pudiera pagar un alquiler, sino porque quería ahorrar para comprar un piso. Además, mi padre acababa de jubilarse y necesitaba ayuda con la tienda. Es más, me he dado cuenta de que nos llevamos mejor que nunca. Mis amigos, en cambio, gastan casi la mitad del sueldo en el alquiler, así que…",
        "selfCheck": [
          "¿He hablado al menos dos minutos y medio?",
          "¿He sumado, comparado y corregido con conectores distintos?",
          "¿He usado al menos tres clases de las semanas 11 a 14?"
        ]
      },
      {
        "title": "Respondo a las objeciones",
        "prompt": "Un interlocutor no está de acuerdo con tu decisión y te pone objeciones: «¿Así que lo dejas todo?», «Ni siquiera lo has probado», «Allí no conoces a nadie». Responde a cada objeción, aclara las ideas falsas con «no… sino» y saca una conclusión. Practica con alguien o graba las dos voces.",
        "prep": [
          "Empieza alguna respuesta con «No es que…, sino que…».",
          "Usa «así que» o «de modo que» para sacar una consecuencia."
        ],
        "seconds": 90,
        "model": "¿Que lo dejo todo? No, no lo dejo todo, sino que cambio de ciudad. Además, ya fui tres veces, así que la conozco un poco. Y es verdad que allí no conozco a mucha gente, pero la empresa organiza actividades para los nuevos, de modo que no estaré sola.",
        "selfCheck": [
          "¿He respondido a cada objeción?",
          "¿He aclarado las ideas falsas y sacado una conclusión?"
        ]
      }
    ]
  },
  "useInClass": {
    "intro": "Esta semana es de control: lleva tu texto de opinión y estas tarjetas a la próxima clase con tu profesor.",
    "cards": [
      {
        "move": "Argumenta",
        "task": "Defiende ante tu profesor una opinión sobre tu ciudad con tres argumentos enlazados («En primer lugar…», «Además…», «Incluso…») y una conclusión.",
        "phrases": [
          "En primer lugar, …",
          "Es más, …",
          "Por lo tanto, …"
        ]
      },
      {
        "move": "Corrige",
        "task": "Pide a tu profesor que diga tres ideas falsas sobre tu país y corrígelas con «no… sino» o «no… sino que».",
        "phrases": [
          "No es…, sino…",
          "No…, sino que…"
        ]
      },
      {
        "move": "Concluye",
        "task": "Cuéntale una noticia a tu profesor y pídele que reaccione con «¿Así que…?»; luego cambiad los papeles.",
        "phrases": [
          "¿Así que…?",
          "Sí, así que…"
        ]
      },
      {
        "move": "Repasa",
        "task": "Elige con tu profesor una clase de cada semana (11 a 14) y di una frase sobre tu vida con cada una.",
        "phrases": [
          "Acabo de…",
          "Me he vuelto…",
          "Lo que…",
          "Como…"
        ]
      }
    ],
    "bring": "Tu texto de opinión revisado y la grabación en la que defiendes tu decisión."
  },
  "quiz": {
    "items": [
      {
        "type": "choice",
        "q": "«Perdí el último teleférico, ___ volví a casa en taxi.»",
        "options": [
          "como",
          "así que",
          "sino"
        ],
        "answer": 1,
        "why": "Consecuencia en conversación: «así que»."
      },
      {
        "type": "choice",
        "q": "¿Qué frase corrige una idea falsa?",
        "options": [
          "Es barato, pero lejos.",
          "No es barato, sino carísimo.",
          "Es barato; en cambio, el otro es caro."
        ],
        "answer": 1,
        "why": "«No… sino» corrige."
      },
      {
        "type": "listen",
        "q": "Escucha la opinión sobre el barrio. ¿Qué función tiene «es más»?",
        "options": [
          "Una consecuencia.",
          "Un argumento más fuerte que suma.",
          "Una corrección."
        ],
        "answer": 1,
        "why": "«Es más» añade un argumento más fuerte.",
        "audio": "El barrio es tranquilo. Es más, es el más seguro de toda la ciudad.",
        "voice": "es-PE-f"
      },
      {
        "type": "gap",
        "q": "El informe tiene varios errores; ___, debe revisarse antes de publicarlo.",
        "answers": [
          [
            "por lo tanto",
            "por tanto",
            "en consecuencia"
          ]
        ],
        "why": "Consecuencia formal."
      },
      {
        "type": "gap",
        "q": "Habla despacio, de modo que te ___ (entender) todos.",
        "answers": [
          [
            "entiendan"
          ]
        ],
        "why": "Finalidad: «de modo que» + subjuntivo."
      },
      {
        "type": "gap",
        "q": "No me lo regalaron, sino ___ lo compré con mi primer sueldo.",
        "answers": [
          [
            "que"
          ]
        ],
        "why": "Corrección con verbo conjugado: «sino que»."
      },
      {
        "type": "gap",
        "q": "Semana 11. Desde que vive sola, mi hermana no ha ___ a llamarme ni una vez.",
        "answers": [
          [
            "vuelto"
          ]
        ],
        "why": "«No volver a»: nunca más."
      },
      {
        "type": "order",
        "words": [
          "Mi",
          "madre",
          "prefiere",
          "quedarse,",
          "mientras",
          "que",
          "mi",
          "padre",
          "quiere",
          "irse."
        ],
        "why": "«Mientras que» compara dos posturas."
      },
      {
        "type": "error",
        "sentence": "No hubo nadie en la reunión, incluso el director.",
        "answers": [
          "No hubo nadie en la reunión, ni siquiera el director."
        ],
        "why": "Frase negativa: «ni siquiera»."
      },
      {
        "type": "error",
        "sentence": "Así que el museo estaba cerrado, fuimos al mercado.",
        "answers": [
          "El museo estaba cerrado, así que fuimos al mercado.",
          "Como el museo estaba cerrado, fuimos al mercado."
        ],
        "why": "«Así que» va con la consecuencia."
      },
      {
        "type": "error",
        "sentence": "Semana 12. Me di cuenta que había olvidado el pasaporte.",
        "answers": [
          "Me di cuenta de que había olvidado el pasaporte."
        ],
        "why": "«Darse cuenta de que»."
      },
      {
        "type": "open",
        "prompt": "Reformulación: convierte estas notas en un párrafo argumentado. «Decisión: quedarme en mi ciudad. Argumentos: familia cerca, trabajo nuevo aquí, alquiler barato. Idea falsa: “es por miedo”. Conclusión: me quedo.»",
        "model": "He decidido quedarme en mi ciudad. En primer lugar, mi familia vive cerca; además, acabo de encontrar un trabajo nuevo aquí e incluso el alquiler es barato. No me quedo por miedo, sino porque aquí tengo todo lo que necesito. Por lo tanto, me quedo.",
        "checklist": [
          "Sumas argumentos con al menos dos conectores distintos.",
          "Corriges la idea falsa con «no… sino».",
          "Cierras con una consecuencia («por lo tanto», «así que»)."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Contar consecuencias con así que, por eso, entonces, por lo tanto y en consecuencia, según el registro.",
      "Distinguir «de modo que» + indicativo (resultado) de + subjuntivo (finalidad), y sacar conclusiones con «¿así que…?».",
      "Sumar, intensificar y comparar argumentos con además, es más, incluso, ni siquiera, en cambio y mientras que.",
      "Corregir ideas con «no… sino» y «no… sino que», sin confundirlas con «pero» ni con «si no».",
      "Combinar en un texto las clases de las semanas 11 a 14."
    ],
    "review": [
      "Semana 11: acabo de / acabé de, dejar de, llegar a, volver a.",
      "Semana 12: preposiciones fijas delante de «que» y verbos de cambio.",
      "Semana 13: el tema delante, quien / el que y «lo que», «lo de».",
      "Semana 14: «como» al principio y «así que» detrás: causa y consecuencia."
    ]
  },
  "related": [
    {
      "path": "/gramatica/consecutivas-asi-que-por-eso-de",
      "label": "Clase: Consecutivas: así que, por eso, de modo que"
    },
    {
      "path": "/gramatica/conectores-argumentativos-ademas-incluso-en-cambio",
      "label": "Clase: Conectores argumentativos: además, incluso, en cambio"
    }
  ]
};
