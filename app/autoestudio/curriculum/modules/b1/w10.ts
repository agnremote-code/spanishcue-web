import type { Module } from "../../types";

/**
 * B1 · semana 10 (checkpoint) · Autoestudio espejo de G106 (empezar a, ponerse a)
 * y G107 (seguir + gerundio; soler), integrando las clases de las semanas 6 a 9
 * (G097–G105). Repaso autónomo con una librería-café de barrio en Rosario.
 */
export const b1w10: Module = {
  "id": "b1-10",
  "level": "b1",
  "week": 10,
  "kind": "checkpoint",
  "title": "Un año de librería en Rosario: cómo empezó y qué sigue",
  "subtitle": "Repaso de «empezar a», «ponerse a» y «seguir + gerundio», y control de las semanas 6 a 9: perfecto de subjuntivo, temporales, finalidad, relativas, «aunque», condiciones, condicional y «por / para».",
  "stop": {
    "place": "Rosario",
    "country": "Argentina"
  },
  "minutes": 110,
  "newObjectives": [
    "b1.gram.g106",
    "b1.gram.g107",
    "b1.voc.w10-emprender-barrio",
    "b1.pron.w10-gerundio-vocal",
    "b1.lis.w10-podcast-libreria",
    "b1.read.w10-perfil-diario",
    "b1.wri.w10-correo-un-ano-despues",
    "b1.spk.w10-contar-proyecto",
    "b1.fun.w10-contar-trayectoria",
    "b1.disc.w10-linea-temporal",
    "b1.rev.w10-repaso-semanas-6-9"
  ],
  reviewObjectives: ["b1.gram.g097","b1.gram.g098","b1.voc.w06-teatro-estreno","b1.pron.w06-h-muda-enlace","b1.lis.w06-ensayo-general","b1.read.w06-bitacora-compania","b1.wri.w06-mensaje-elenco","b1.spk.w06-arenga-preguntas","b1.fun.w06-valorar-coordinar","b1.disc.w06-secuencia-pasos","b1.gram.g099","b1.gram.g100","b1.voc.w07-vivienda-alquiler","b1.pron.w07-pausa-relativa","b1.lis.w07-llamada-inmobiliaria","b1.read.w07-foro-recien-llegados","b1.wri.w07-anuncio-busqueda","b1.spk.w07-describir-busqueda","b1.fun.w07-pedir-requisitos","b1.disc.w07-requisito-finalidad","b1.gram.g101","b1.gram.g102","b1.gram.g103","b1.voc.w08-correr-entrenar","b1.pron.w08-ria-ia","b1.lis.w08-consejos-entrenadora","b1.read.w08-guia-primera-carrera","b1.wri.w08-correo-consejos","b1.spk.w08-plan-negociado","b1.fun.w08-animar-aconsejar","b1.disc.w08-obstaculo-decision","b1.gram.g104","b1.gram.g105","b1.voc.w09-naturaleza-voluntariado","b1.pron.w09-por-para-rapido","b1.lis.w09-reunion-voluntarios","b1.read.w09-normas-proyecto","b1.wri.w09-plan-alternativas","b1.spk.w09-resolver-problema","b1.fun.w09-resolver-imprevistos","b1.disc.w09-plan-alternativo"],
  prerequisites: ["b1-09"],
  "goal": {
    "canDo": "Al final de esta semana puedes contar cómo empezaste algo («empecé a…», «me puse a…»), qué sigues haciendo («sigo trabajando…») y combinarlo con todo lo que repasaste desde la semana 6 para valorar, planear, pedir y aconsejar.",
    "steps": [
      "Repasa las perífrasis que marcan el inicio de una acción: «empezar a», «ponerse a», «echarse a».",
      "Repasa «seguir + gerundio», «seguir sin + infinitivo» y «soler + infinitivo».",
      "Repasa en una tabla las clases de las semanas 6 a 9 y haz la práctica integrada.",
      "Escucha la entrevista de radio a Paula y lee su perfil en el diario de Rosario.",
      "Escribe un correo sobre algo que empezaste hace un año, revísalo y cuéntalo en voz alta."
    ]
  },
  "theory": {
    "intro": "Esta es una semana de control. Repasas dos clases nuevas, sobre cómo empieza y cómo continúa una acción, y además vuelves a las nueve clases de las semanas 6 a 9 para comprobar que las puedes usar juntas. Te acompaña Paula, una profesora de Rosario que hace un año abrió una pequeña librería-café en el barrio Pichincha.",
    "parts": [
      {
        "heading": "Empezar a, ponerse a, echarse a: tres maneras de empezar",
        "body": [
          "«Empezar a» (o «comenzar a», más formal) + infinitivo marca el inicio de una acción, un estado o un proceso, sin más matices: «Empecé a trabajar en la librería en marzo», «Empieza a hacer frío». «Ponerse a» + infinitivo indica que alguien decide empezar o empieza de repente una actividad: «Llegué a casa y me puse a escribir». No se usa con estados: no decimos «se puso a saber».",
          "«Echarse a» se usa casi solo con reír, llorar, correr y temblar, para un inicio brusco e incontrolado: «Cuando vio el cartel, se echó a llorar». Y si la acción todavía no ha empezado, pero va a empezar ya, dices «estar a punto de» + infinitivo. Los pronombres van delante del verbo conjugado o pegados al infinitivo, nunca en medio: «me puse a ordenarlos» o «los empecé a ordenar»."
        ],
        "table": {
          "caption": "¿Cómo empieza la acción?",
          "head": [
            "Perífrasis",
            "Matiz",
            "Ejemplo"
          ],
          "rows": [
            [
              "empezar / comenzar a",
              "inicio neutro; también estados",
              "Empecé a vender libros usados en 2024."
            ],
            [
              "ponerse a",
              "inicio decidido o repentino de una actividad",
              "Cerré la puerta y me puse a pintar las paredes."
            ],
            [
              "echarse a",
              "inicio brusco: reír, llorar, correr, temblar",
              "El niño se echó a reír con el cuento."
            ],
            [
              "estar a punto de",
              "la acción va a empezar ya",
              "Estábamos a punto de abrir cuando se cortó la luz."
            ]
          ]
        },
        "mistakes": [
          {
            "wrong": "Empecé trabajar en la librería en marzo.",
            "right": "Empecé a trabajar en la librería en marzo.",
            "why": "Con «empezar», «ponerse» y «echarse» la preposición «a» es obligatoria."
          },
          {
            "wrong": "De repente se puso a estar triste.",
            "right": "De repente se puso triste.",
            "why": "«Ponerse a» va con actividades; para un cambio de estado se usa «ponerse» + adjetivo."
          }
        ]
      },
      {
        "heading": "Seguir + gerundio y soler + infinitivo",
        "body": [
          "«Seguir» (o «continuar») + gerundio dice que una acción que empezó antes no se ha interrumpido: «Sigo dando clases por las mañanas». Lo contrario, que algo que esperabas todavía no ha empezado, se dice con «seguir sin» + infinitivo: «Seguimos sin tener calefacción». Ojo: «seguir» cambia la «e» en «i» (sigo, sigues, siguió) y nunca va con infinitivo: no se dice «sigo trabajar».",
          "«Soler» + infinitivo habla de lo que haces normalmente: «Suelo abrir a las cuatro». Solo se usa en presente («suelo») y en imperfecto («solía»), y siempre con infinitivo. El gerundio se forma con -ando (-ar) e -iendo (-er, -ir); algunos verbos cambian la vocal (durmiendo, pidiendo, diciendo) o usan «y» (leyendo, oyendo, yendo)."
        ],
        "table": {
          "caption": "Presente de «seguir» y «soler»",
          "head": [
            "Persona",
            "seguir + gerundio",
            "soler + infinitivo"
          ],
          "rows": [
            [
              "yo",
              "sigo leyendo",
              "suelo leer"
            ],
            [
              "tú",
              "sigues leyendo",
              "sueles leer"
            ],
            [
              "él / ella / usted",
              "sigue leyendo",
              "suele leer"
            ],
            [
              "nosotros / nosotras",
              "seguimos leyendo",
              "solemos leer"
            ],
            [
              "vosotros / vosotras",
              "seguís leyendo",
              "soléis leer"
            ],
            [
              "ellos / ellas / ustedes",
              "siguen leyendo",
              "suelen leer"
            ]
          ]
        },
        "mistakes": [
          {
            "wrong": "Sigo trabajar en la escuela por las mañanas.",
            "right": "Sigo trabajando en la escuela por las mañanas.",
            "why": "«Seguir» va con gerundio, no con infinitivo."
          },
          {
            "wrong": "Ahora sigo no teniendo tiempo para leer.",
            "right": "Ahora sigo sin tener tiempo para leer.",
            "why": "Para lo que todavía no ocurre, se dice «seguir sin» + infinitivo."
          },
          {
            "wrong": "El año pasado solí cerrar a las ocho.",
            "right": "El año pasado solía cerrar a las ocho.",
            "why": "«Soler» no tiene pretérito indefinido: en pasado se usa «solía»."
          }
        ],
        "tip": "Si en tu lengua dices «still + -ing», piensa en «seguir + gerundio»; si dices «still not», piensa en «seguir sin»."
      },
      {
        "heading": "Control de las semanas 6 y 7: mirar atrás, mirar adelante, buscar y explicar para qué",
        "body": [
          "Semana 6: reaccionas ahora a algo que ya pasó con «haya + participio» («Me alegra que hayan venido tantos vecinos»), y hablas del futuro con «cuando», «en cuanto», «hasta que» y «antes de que» + subjuntivo («Cuando tengamos más espacio, haremos talleres»).",
          "Semana 7: explicas la finalidad con «para» + infinitivo (mismo sujeto) o «para que» + subjuntivo (otro sujeto), y describes con relativas: indicativo si lo conoces («una vecina que hace tortas»), subjuntivo si lo buscas («alguien que sepa de café»), y «, quien…,» para añadir un dato."
        ],
        "table": {
          "caption": "Semanas 6 y 7 en la librería de Paula",
          "head": [
            "Clase",
            "Regla clave",
            "Ejemplo"
          ],
          "rows": [
            [
              "G097",
              "reacción ahora + hecho anterior → haya + participio",
              "Qué bien que hayas traído tus libros viejos."
            ],
            [
              "G098",
              "acción futura tras cuando / en cuanto / hasta que → subjuntivo",
              "En cuanto lleguen las sillas, abrimos el patio."
            ],
            [
              "G099",
              "otro sujeto → para que + subjuntivo",
              "Pusimos un sofá para que la gente lea tranquila."
            ],
            [
              "G100",
              "antecedente buscado → subjuntivo; conocido → indicativo",
              "Busco un ilustrador que dé talleres."
            ]
          ]
        },
        "mistakes": [
          {
            "wrong": "Cuando tendremos más espacio, haremos talleres.",
            "right": "Cuando tengamos más espacio, haremos talleres.",
            "why": "Semana 6: detrás de «cuando» con valor futuro, subjuntivo."
          },
          {
            "wrong": "Busco a alguien que sabe preparar café.",
            "right": "Busco a alguien que sepa preparar café.",
            "why": "Semana 7: antecedente buscado, subjuntivo."
          }
        ]
      },
      {
        "heading": "Control de las semanas 8 y 9: obstáculos, condiciones, consejos, por y para",
        "body": [
          "Semana 8: aceptas un obstáculo real con «aunque» + indicativo, sin añadir «pero» («Aunque gano menos, estoy feliz»); planteas condiciones con «si» + presente («Si las ventas siguen así, abriremos los domingos»), y usas el condicional para pedir, aconsejar e imaginar («Yo que tú, empezaría con poco»).",
          "Semana 9: organizas planes con alternativa («si llueve, la presentación es adentro; si no, en la vereda») y aconsejas con «yo + condicional». Y eliges «por» para la causa, el recorrido, el medio y el precio, y «para» para el objetivo, el destinatario, el destino y el plazo."
        ],
        "table": {
          "caption": "Semanas 8 y 9 en la librería de Paula",
          "head": [
            "Clase",
            "Regla clave",
            "Ejemplo"
          ],
          "rows": [
            [
              "G101",
              "aunque + indicativo, sin «pero»",
              "Aunque el local es pequeño, entra mucha luz."
            ],
            [
              "G102",
              "si + presente, nunca futuro",
              "Si vendemos cien libros, invitamos a un autor."
            ],
            [
              "G103",
              "condicional: cortesía, consejo, hipótesis",
              "¿Podrías dejarme un cartel en tu negocio?"
            ],
            [
              "G104",
              "plan B con «si no»; consejo con «yo + condicional»",
              "Yo haría la feria en el patio; si no, en la vereda."
            ],
            [
              "G105",
              "por = causa, recorrido, precio; para = objetivo, destinatario, plazo",
              "Vendo cada libro usado por tres mil pesos para pagar el alquiler."
            ]
          ]
        },
        "mistakes": [
          {
            "wrong": "Aunque llovía, pero vinieron veinte personas.",
            "right": "Aunque llovía, vinieron veinte personas.",
            "why": "Semana 8: «aunque» y «pero» no van juntos."
          },
          {
            "wrong": "Gracias para venir a la presentación.",
            "right": "Gracias por venir a la presentación.",
            "why": "Semana 9: se agradece «por» algo."
          }
        ],
        "tip": "Antes de escribir, repasa estas dos tablas: el control de esta semana mezcla todas las reglas en los mismos textos."
      }
    ]
  },
  "grammar": {
    "intro": "Primero las dos clases nuevas; después, una mezcla con las semanas 6 a 9.",
    "exercises": [
      {
        "id": "b1-10-gramatica-inicio",
        "type": "context",
        "title": "¿Cómo empezó?",
        "prompt": "Lee la situación y elige la perífrasis más adecuada.",
        "items": [
          {
            "context": "Paula no planeaba nada. Un domingo vio un local vacío y, al llegar a casa, decidió hacer números sin esperar más.",
            "q": "Al llegar a casa, ___ calcular cuánto costaría.",
            "options": [
              "se echó a",
              "se puso a",
              "estaba a punto de"
            ],
            "answer": 1,
            "why": "Decide empezar una actividad en ese momento: «ponerse a»."
          },
          {
            "context": "Durante la inauguración, una señora mayor encontró un libro que había perdido en su infancia.",
            "q": "Emocionada, ___ llorar.",
            "options": [
              "se echó a",
              "empezó",
              "siguió"
            ],
            "answer": 0,
            "why": "Inicio brusco e incontrolado con «llorar»: «echarse a»."
          },
          {
            "context": "En otoño, poco a poco, más vecinos se acercaban a la librería.",
            "q": "En otoño la clientela ___ crecer.",
            "options": [
              "se puso a",
              "se echó a",
              "empezó a"
            ],
            "answer": 2,
            "why": "Proceso gradual: «empezar a»."
          },
          {
            "context": "Faltaban dos minutos para abrir la puerta por primera vez.",
            "q": "Paula ___ abrir cuando llamó su madre.",
            "options": [
              "empezó a",
              "estaba a punto de",
              "se echó a"
            ],
            "answer": 1,
            "why": "La acción va a empezar ya: «estar a punto de»."
          }
        ]
      },
      {
        "id": "b1-10-gramatica-seguir-soler",
        "type": "gap",
        "title": "Lo que sigue igual",
        "prompt": "Completa con «seguir» + gerundio, «seguir sin» + infinitivo o «soler» + infinitivo.",
        "items": [
          {
            "q": "Aunque tiene la librería, Paula ___ ___ clases de literatura por la mañana. (dar)",
            "answers": [
              [
                "sigue"
              ],
              [
                "dando"
              ]
            ],
            "why": "Una acción que no se ha interrumpido: «sigue dando»."
          },
          {
            "q": "Los sábados (nosotros) ___ ___ a las diez, pero en enero cerramos. (abrir)",
            "answers": [
              [
                "solemos"
              ],
              [
                "abrir"
              ]
            ],
            "why": "Costumbre: «soler» + infinitivo."
          },
          {
            "q": "Llevamos un año y ___ ___ ___ cartel en la puerta. (tener, nosotros)",
            "answers": [
              [
                "seguimos"
              ],
              [
                "sin"
              ],
              [
                "tener"
              ]
            ],
            "why": "Algo esperado que todavía no ocurre: «seguir sin» + infinitivo."
          },
          {
            "q": "Mi gato ___ ___ en el escaparate aunque lo saco cada mañana. (dormir)",
            "answers": [
              [
                "sigue"
              ],
              [
                "durmiendo"
              ]
            ],
            "why": "Gerundio con cambio vocálico: «durmiendo»."
          },
          {
            "q": "De joven, Paula ___ ___ en el tren de camino a la facultad. (leer)",
            "answers": [
              [
                "solía"
              ],
              [
                "leer"
              ]
            ],
            "why": "Costumbre del pasado: «solía» + infinitivo."
          }
        ]
      },
      {
        "id": "b1-10-gramatica-mezcla-6-9",
        "type": "choice",
        "title": "Control de las semanas 6 a 9",
        "prompt": "Elige la forma correcta. Cada frase repasa una clase anterior.",
        "items": [
          {
            "q": "G097 · Me sorprende que tantos estudiantes ___ a la presentación.",
            "options": [
              "han venido",
              "hayan venido",
              "vendrán"
            ],
            "answer": 1,
            "why": "Reacción ahora a un hecho anterior: «hayan venido»."
          },
          {
            "q": "G098 · No cierres la caja hasta que ___ el último cliente.",
            "options": [
              "se va",
              "se irá",
              "se vaya"
            ],
            "answer": 2,
            "why": "«Hasta que» + acción futura: subjuntivo."
          },
          {
            "q": "G099 · Pusimos música suave para que los clientes ___ cómodos.",
            "options": [
              "se sientan",
              "se sienten",
              "sentirse"
            ],
            "answer": 0,
            "why": "Otro sujeto: «para que» + subjuntivo."
          },
          {
            "q": "G101 · ___ el café es caro, lo seguimos sirviendo en taza de cerámica.",
            "options": [
              "Si",
              "Aunque",
              "Para que"
            ],
            "answer": 1,
            "why": "Obstáculo real que no impide la acción: «aunque» + indicativo."
          },
          {
            "q": "G105 · Compré la estantería ___ quince mil pesos.",
            "options": [
              "para",
              "por"
            ],
            "answer": 1,
            "why": "Precio: «por»."
          }
        ]
      },
      {
        "id": "b1-10-gramatica-errores",
        "type": "error",
        "title": "Corrige el error",
        "prompt": "Cada frase tiene un error. Escríbela bien.",
        "items": [
          {
            "sentence": "Cuando cerré la tienda, me puse leer en el sofá.",
            "answers": [
              "Cuando cerré la tienda, me puse a leer en el sofá."
            ],
            "why": "«Ponerse a» necesita la preposición «a»."
          },
          {
            "sentence": "Seguimos esperar la licencia del ayuntamiento.",
            "answers": [
              "Seguimos esperando la licencia del ayuntamiento."
            ],
            "why": "«Seguir» + gerundio."
          },
          {
            "sentence": "Si tendré dinero en verano, pintaré la fachada.",
            "answers": [
              "Si tengo dinero en verano, pintaré la fachada."
            ],
            "why": "Semana 8: detrás de «si», presente."
          },
          {
            "sentence": "Yo que tú, contrataré a alguien para los sábados.",
            "answers": [
              "Yo que tú, contrataría a alguien para los sábados."
            ],
            "why": "Semanas 8 y 9: el consejo con «yo que tú» va en condicional."
          }
        ]
      }
    ]
  },
  "vocabulary": {
    "intro": "Palabras para contar cómo nace y crece un pequeño negocio de barrio. Algunas son muy rioplatenses: te lo indicamos.",
    "groups": [
      {
        "title": "Abrir el negocio",
        "items": [
          {
            "es": "el local"
          },
          {
            "es": "alquilar un local"
          },
          {
            "es": "el socio, la socia"
          },
          {
            "es": "los ahorros"
          },
          {
            "es": "el trámite"
          },
          {
            "es": "la habilitación",
            "note": "En Argentina, el permiso municipal para abrir un comercio."
          }
        ]
      },
      {
        "title": "El día a día",
        "items": [
          {
            "es": "la clientela"
          },
          {
            "es": "el escaparate",
            "note": "En Argentina se dice mucho «la vidriera»."
          },
          {
            "es": "la caja"
          },
          {
            "es": "facturar"
          },
          {
            "es": "la vereda",
            "note": "En España, «la acera»."
          },
          {
            "es": "la presentación de un libro"
          }
        ]
      },
      {
        "title": "Salir adelante",
        "items": [
          {
            "es": "sacar adelante un proyecto"
          },
          {
            "es": "salir a flote"
          },
          {
            "es": "llegar a fin de mes"
          },
          {
            "es": "correr la voz"
          },
          {
            "es": "arriesgarse"
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": "b1-10-vocabulario-definiciones",
        "type": "match",
        "title": "Cada expresión con su significado",
        "prompt": "Une cada expresión con su explicación.",
        "pairs": [
          {
            "left": "salir a flote",
            "right": "superar una época difícil sin cerrar"
          },
          {
            "left": "correr la voz",
            "right": "contar algo a muchas personas para que se sepa"
          },
          {
            "left": "llegar a fin de mes",
            "right": "tener dinero suficiente hasta el próximo sueldo"
          },
          {
            "left": "la clientela",
            "right": "el conjunto de personas que compran en un negocio"
          },
          {
            "left": "la habilitación",
            "right": "el permiso oficial para abrir un comercio"
          }
        ],
        "why": "Varias son expresiones fijas: apréndelas enteras."
      },
      {
        "id": "b1-10-vocabulario-huecos",
        "type": "gap",
        "title": "Un año en Pichincha",
        "prompt": "Completa con una palabra o expresión del banco.",
        "bank": [
          "ahorros",
          "vereda",
          "escaparate",
          "trámites",
          "arriesgarse"
        ],
        "items": [
          {
            "q": "Paula invirtió todos sus ___ en la librería.",
            "answers": [
              [
                "ahorros"
              ]
            ],
            "why": "El dinero que tenía guardado."
          },
          {
            "q": "Los ___ para abrir tardaron cuatro meses.",
            "answers": [
              [
                "trámites"
              ]
            ],
            "why": "Los papeles y permisos."
          },
          {
            "q": "Cada semana cambia los libros del ___ para que la gente se pare a mirar.",
            "answers": [
              [
                "escaparate"
              ]
            ],
            "why": "En Argentina, también «vidriera»."
          },
          {
            "q": "En verano pone dos mesas en la ___.",
            "answers": [
              [
                "vereda"
              ]
            ],
            "why": "La acera, en el Río de la Plata."
          },
          {
            "q": "Dice que, aunque da miedo, a veces hay que ___.",
            "answers": [
              [
                "arriesgarse"
              ]
            ],
            "why": "Asumir un riesgo."
          }
        ]
      }
    ]
  },
  "pronunciation": {
    "focus": "El gerundio: -ando, -iendo, -yendo y la vocal que cambia",
    "explanation": [
      "El gerundio lleva siempre el acento en la sílaba «-an-» o «-ien-»: tra-ba-JAN-do, a-pren-DIEN-do. En los verbos en -ir que cambian la vocal en presente, la «e» pasa a «i» y la «o» pasa a «u»: pidiendo, sintiendo, diciendo, siguiendo, durmiendo, muriendo. Esa vocal se oye con claridad y es fácil confundirla si no la esperas.",
      "Cuando la raíz termina en vocal, la «i» de «-iendo» se convierte en «y»: leyendo, oyendo, cayendo, construyendo; y el gerundio de «ir» es «yendo». Pronuncia esa «y» como una consonante suave, igual que en «haya» de la semana 6."
    ],
    "table": {
      "caption": "Gerundios que hay que mirar dos veces",
      "head": [
        "Infinitivo",
        "Gerundio",
        "Qué cambia"
      ],
      "rows": [
        [
          "pedir",
          "pidiendo",
          "e → i"
        ],
        [
          "decir",
          "diciendo",
          "e → i"
        ],
        [
          "seguir",
          "siguiendo",
          "e → i"
        ],
        [
          "dormir",
          "durmiendo",
          "o → u"
        ],
        [
          "leer",
          "leyendo",
          "i → y"
        ],
        [
          "ir",
          "yendo",
          "forma especial"
        ]
      ]
    },
    "perceive": {
      "id": "b1-10-pronunciacion-gerundio",
      "type": "listen",
      "title": "¿Qué gerundio oyes?",
      "prompt": "Escucha cada frase y elige la forma que oyes.",
      "items": [
        {
          "q": "¿Qué forma oyes?",
          "options": [
            "dormiendo",
            "durmiendo"
          ],
          "answer": 1,
          "why": "«Dormir» cambia la «o» en «u»: «durmiendo».",
          "audio": "Mi socio sigue durmiendo en la trastienda.",
          "voice": "es-AR-m"
        },
        {
          "q": "¿Y aquí?",
          "options": [
            "pidiendo",
            "pediendo"
          ],
          "answer": 0,
          "why": "«Pedir» → «pidiendo».",
          "audio": "Los chicos siguen pidiendo cuentos de piratas.",
          "voice": "es-AR-f"
        },
        {
          "q": "¿Qué forma oyes?",
          "options": [
            "leiendo",
            "leyendo"
          ],
          "answer": 1,
          "why": "La raíz termina en vocal: «leyendo», con «y».",
          "audio": "Una clienta se quedó leyendo hasta el cierre.",
          "voice": "es-UY-f"
        },
        {
          "q": "¿Qué forma oyes?",
          "options": [
            "diciendo",
            "deciendo"
          ],
          "answer": 0,
          "why": "«Decir» → «diciendo».",
          "audio": "Seguimos diciendo que el barrio necesita más cultura.",
          "voice": "es-ES-m"
        }
      ]
    },
    "produce": [
      {
        "text": "Sigo durmiendo poco, pero sigo sonriendo.",
        "tip": "Marca la «u» de «dur-» y el acento en «-MIEN-».",
        "voice": "es-AR-f"
      },
      {
        "text": "La gente sigue pidiendo libros de cocina.",
        "tip": "«Pi-DIEN-do»: la primera vocal es «i».",
        "voice": "es-AR-m"
      },
      {
        "text": "Estábamos leyendo cuando empezó a llover.",
        "tip": "Pronuncia la «y» de «leyendo» como en «haya».",
        "voice": "es-UY-f"
      }
    ],
    "spelling": "Escribe «-yendo» cuando la raíz termina en vocal (leyendo, oyendo, construyendo) y nunca «-iiendo»."
  },
  "listening": {
    "title": "Un año de La Hoja Suelta",
    "context": "Paula abrió hace un año la librería-café La Hoja Suelta en el barrio Pichincha de Rosario. Hoy la entrevista Lucas, locutor de una radio local, en un programa sobre proyectos de barrio. Como muchos rosarinos, usan el voseo: «contanos» equivale a «cuéntanos» y «yo que vos», a «yo que tú».",
    "speakers": [
      {
        "id": "luc",
        "name": "Lucas",
        "voice": "es-AR-m",
        "role": "locutor de radio"
      },
      {
        "id": "pau",
        "name": "Paula",
        "voice": "es-AR-f",
        "role": "dueña de la librería"
      }
    ],
    "script": [
      {
        "speaker": "luc",
        "text": "Paula, bienvenida. Contanos, ¿cómo empezó todo?"
      },
      {
        "speaker": "pau",
        "text": "Gracias por invitarme. Empecé a pensar en la librería durante la pandemia, cuando me puse a ordenar los libros de mi abuelo. Eran más de dos mil. Un día vi este local vacío y casi me echo a llorar: era perfecto."
      },
      {
        "speaker": "luc",
        "text": "¿Y dejaste la escuela?"
      },
      {
        "speaker": "pau",
        "text": "No, sigo dando clases por la mañana. Aunque cansa, necesito ese sueldo para llegar a fin de mes. Suelo abrir la librería a las cuatro, y los sábados todo el día."
      },
      {
        "speaker": "luc",
        "text": "¿Qué es lo que más te ha sorprendido en este año?"
      },
      {
        "speaker": "pau",
        "text": "Me sorprende que tantos chicos hayan empezado a venir solos, después del colegio. Por eso armamos un rincón con almohadones, para que puedan leer sin comprar nada."
      },
      {
        "speaker": "luc",
        "text": "¿Y los problemas?"
      },
      {
        "speaker": "pau",
        "text": "Seguimos sin tener calefacción, y en julio fue durísimo. Si este invierno las ventas van bien, instalaremos una estufa. También busco a alguien que sepa preparar buen café, porque yo no tengo tiempo."
      },
      {
        "speaker": "luc",
        "text": "¿Qué le dirías a alguien que quiere abrir un negocio así?"
      },
      {
        "speaker": "pau",
        "text": "Yo que vos, empezaría de a poco y seguiría trabajando en otra cosa hasta que el negocio camine solo. Y le pediría ayuda al barrio: acá todo funciona por el boca a boca."
      }
    ],
    "stages": [
      {
        "stage": "gist",
        "prompt": "Escucha una vez sin leer. ¿De qué habla Paula?",
        "exercise": {
          "id": "b1-10-escucha-global",
          "type": "choice",
          "prompt": "Elige la mejor respuesta.",
          "items": [
            {
              "q": "¿Cuál es el tema principal de la entrevista?",
              "options": [
                "Por qué Paula va a cerrar la librería.",
                "Cómo nació la librería y cómo sigue un año después.",
                "Los libros favoritos de Paula."
              ],
              "answer": 1,
              "why": "Paula cuenta el inicio, el presente y los planes de la librería."
            },
            {
              "q": "¿Cómo valora Paula su primer año?",
              "options": [
                "De forma positiva, aunque reconoce dificultades.",
                "Como un fracaso.",
                "No da ninguna opinión."
              ],
              "answer": 0,
              "why": "Está contenta, pero habla del frío y de la falta de tiempo."
            }
          ]
        }
      },
      {
        "stage": "detail",
        "prompt": "Escucha otra vez y fíjate en los detalles.",
        "exercise": {
          "id": "b1-10-escucha-detalle",
          "type": "choice",
          "prompt": "Responde según la entrevista.",
          "items": [
            {
              "q": "¿Cuándo empezó Paula a pensar en la librería?",
              "options": [
                "Cuando terminó la universidad.",
                "Cuando se jubiló su abuelo.",
                "Durante la pandemia, al ordenar los libros de su abuelo."
              ],
              "answer": 2,
              "why": "«Empecé a pensar en la librería durante la pandemia, cuando me puse a ordenar los libros de mi abuelo.»"
            },
            {
              "q": "¿Para qué armaron el rincón con almohadones?",
              "options": [
                "Para que los chicos puedan leer sin comprar.",
                "Para vender café.",
                "Para hacer presentaciones de libros."
              ],
              "answer": 0,
              "why": "«Para que puedan leer sin comprar nada.»"
            },
            {
              "q": "¿Qué harán si las ventas van bien este invierno?",
              "options": [
                "Abrirán por las mañanas.",
                "Instalarán una estufa.",
                "Contratarán a un locutor."
              ],
              "answer": 1,
              "why": "«Si este invierno las ventas van bien, instalaremos una estufa.»"
            }
          ]
        }
      },
      {
        "stage": "notice",
        "prompt": "Fíjate en la gramática. Completa lo que dice Paula exactamente.",
        "exercise": {
          "id": "b1-10-escucha-formas",
          "type": "gap",
          "prompt": "Escribe la forma que usa.",
          "items": [
            {
              "q": "No, ___ ___ clases por la mañana.",
              "answers": [
                [
                  "sigo"
                ],
                [
                  "dando"
                ]
              ],
              "why": "Continuidad: «seguir» + gerundio."
            },
            {
              "q": "Me sorprende que tantos chicos ___ ___ a venir solos.",
              "answers": [
                [
                  "hayan"
                ],
                [
                  "empezado"
                ]
              ],
              "why": "Semana 6 + semana 10: «haya + participio» de «empezar a»."
            },
            {
              "q": "Busco a alguien que ___ preparar buen café.",
              "answers": [
                [
                  "sepa"
                ]
              ],
              "why": "Semana 7: antecedente buscado, subjuntivo."
            },
            {
              "q": "Seguiría trabajando en otra cosa hasta que el negocio ___ solo.",
              "answers": [
                [
                  "camine"
                ]
              ],
              "why": "Semana 6: «hasta que» + subjuntivo."
            }
          ]
        }
      }
    ]
  },
  "reading": {
    "title": "La Hoja Suelta: libros, café y un barrio que se pone a leer",
    "genre": "Perfil en un diario local",
    "frame": "La sección «Gente de Rosario» del diario de la ciudad publica este perfil por el primer aniversario de la librería.",
    "text": [
      "Hace un año, en una esquina de Pichincha que llevaba tiempo vacía, Paula Ferraro colgó un cartel escrito a mano: «Libros usados, café y charla». Nadie esperaba gran cosa de un local tan pequeño. Sin embargo, en pocas semanas los vecinos empezaron a pasar a curiosear, y muchos se quedaron.",
      "Paula, que es profesora de literatura, sigue trabajando en una escuela secundaria por las mañanas. «Aunque termino agotada, no quiero dejar las clases», explica. Por las tardes suele atender sola, aunque los sábados la ayuda su hermano Tomás, quien se encarga de las presentaciones de libros. La más concurrida fue la de una poeta del barrio: cuando terminó de leer, el público se puso a aplaudir de pie y ella se echó a reír de los nervios.",
      "No todo fue fácil. Los trámites de la habilitación tardaron cuatro meses y el local sigue sin calefacción. «En julio dábamos los talleres con guantes», recuerda entre risas. Para salir a flote, Paula vende café y tortas caseras de una vecina, y cada mes organiza una feria de canje en la vereda: si traes dos libros, te llevas uno.",
      "El proyecto sigue creciendo. Paula está buscando una persona que pueda dar talleres de escritura para adolescentes, y quiere abrir los domingos cuando tenga a alguien de confianza en la caja. «Me alegra que el barrio haya hecho suya la librería», dice. ¿Su consejo para quien quiera arriesgarse? «Yo empezaría con poco y escucharía mucho a la gente.»"
    ],
    "glossary": [
      {
        "es": "curiosear"
      },
      {
        "es": "concurrido"
      },
      {
        "es": "hacer suyo algo"
      }
    ],
    "tasks": [
      {
        "id": "b1-10-lectura-comprension",
        "type": "choice",
        "title": "Comprensión",
        "prompt": "Responde según el perfil.",
        "items": [
          {
            "q": "¿Qué pasó en las primeras semanas?",
            "options": [
              "El local siguió vacío.",
              "Paula decidió cerrar.",
              "Los vecinos empezaron a pasar y muchos se quedaron."
            ],
            "answer": 2,
            "why": "«Los vecinos empezaron a pasar a curiosear, y muchos se quedaron.»"
          },
          {
            "q": "¿Quién es Tomás?",
            "options": [
              "El hermano de Paula, que organiza las presentaciones.",
              "Un poeta del barrio.",
              "El dueño del local."
            ],
            "answer": 0,
            "why": "«Su hermano Tomás, quien se encarga de las presentaciones de libros.»"
          },
          {
            "q": "¿Cuándo abrirá los domingos?",
            "options": [
              "Cuando termine el invierno.",
              "Cuando tenga a alguien de confianza en la caja.",
              "Cuando deje la escuela."
            ],
            "answer": 1,
            "why": "«Quiere abrir los domingos cuando tenga a alguien de confianza en la caja.»"
          }
        ]
      },
      {
        "id": "b1-10-lectura-linea-temporal",
        "type": "classify",
        "title": "¿Empezó, sigue o vendrá?",
        "prompt": "Clasifica cada hecho según la línea temporal del perfil.",
        "categories": [
          "Cómo empezó",
          "Lo que sigue",
          "Lo que vendrá"
        ],
        "items": [
          {
            "text": "Colgar un cartel escrito a mano",
            "cat": 0
          },
          {
            "text": "Trabajar en la escuela por las mañanas",
            "cat": 1
          },
          {
            "text": "Abrir los domingos",
            "cat": 2
          },
          {
            "text": "Los primeros vecinos que entraban a curiosear",
            "cat": 0
          },
          {
            "text": "Atender sola por las tardes",
            "cat": 1
          },
          {
            "text": "Talleres de escritura para adolescentes",
            "cat": 2
          }
        ]
      }
    ],
    "noticing": {
      "prompt": "Fíjate en las perífrasis y en las clases de las semanas 6 a 9 que aparecen en el texto.",
      "items": [
        {
          "quote": "los vecinos empezaron a pasar a curiosear",
          "note": "«Empezar a»: inicio gradual de una costumbre."
        },
        {
          "quote": "el público se puso a aplaudir de pie y ella se echó a reír",
          "note": "«Ponerse a» (inicio decidido) y «echarse a» (inicio brusco)."
        },
        {
          "quote": "sigue trabajando en una escuela secundaria",
          "note": "«Seguir + gerundio»: la acción no se ha interrumpido."
        },
        {
          "quote": "Me alegra que el barrio haya hecho suya la librería",
          "note": "Semana 6: reacción actual con «haya + participio»."
        },
        {
          "quote": "está buscando una persona que pueda dar talleres",
          "note": "Semana 7: antecedente buscado, subjuntivo."
        }
      ]
    }
  },
  "practice": {
    "intro": "Práctica integrada: las dos clases nuevas y las nueve clases de las semanas 6 a 9.",
    "exercises": [
      {
        "id": "b1-10-practica-orden",
        "type": "order",
        "title": "Frases de Paula",
        "prompt": "Ordena las palabras para formar frases completas.",
        "items": [
          {
            "words": [
              "Me",
              "puse",
              "a",
              "ordenar",
              "los",
              "libros",
              "por",
              "colores."
            ]
          },
          {
            "words": [
              "Seguimos",
              "sin",
              "tener",
              "cartel",
              "en",
              "la",
              "puerta."
            ]
          },
          {
            "words": [
              "Suelo",
              "cerrar",
              "la",
              "caja",
              "a",
              "las",
              "nueve."
            ]
          },
          {
            "words": [
              "Los",
              "empecé",
              "a",
              "clasificar",
              "el",
              "lunes."
            ]
          }
        ]
      },
      {
        "id": "b1-10-practica-retrieval",
        "type": "gap",
        "title": "Recuperación integrada: semanas 6 a 9",
        "prompt": "Recuperación: completa cada frase con la forma correcta. La etiqueta indica la clase que repasas.",
        "items": [
          {
            "q": "G097 · Qué pena que no ___ (poder, tú) venir al aniversario.",
            "answers": [
              [
                "hayas podido"
              ]
            ],
            "why": "Reacción a algo que ya pasó: «hayas podido»."
          },
          {
            "q": "G098 · En cuanto ___ (llegar) los libros nuevos, te aviso.",
            "answers": [
              [
                "lleguen"
              ]
            ],
            "why": "Acción futura tras «en cuanto»: subjuntivo."
          },
          {
            "q": "G099 · Bajo los precios para que los estudiantes ___ (comprar) más.",
            "answers": [
              [
                "compren"
              ]
            ],
            "why": "Otro sujeto: «para que» + subjuntivo."
          },
          {
            "q": "G100 · Necesito un estante que ___ (caber) en ese rincón.",
            "answers": [
              [
                "quepa"
              ]
            ],
            "why": "Antecedente buscado: subjuntivo; «caber» → «quepa»."
          },
          {
            "q": "G101 · ___ el local es pequeño, organizamos conciertos.",
            "answers": [
              [
                "Aunque",
                "aunque"
              ]
            ],
            "why": "Obstáculo real: «aunque» + indicativo."
          },
          {
            "q": "G102 · Si ___ (vender, nosotros) cien libros este mes, invitamos a un autor.",
            "answers": [
              [
                "vendemos"
              ]
            ],
            "why": "«Si» + presente."
          },
          {
            "q": "G103 · ¿___ (poder, usted) dejarme un folleto en su negocio?",
            "answers": [
              [
                "Podría"
              ]
            ],
            "why": "Cortesía con el condicional."
          },
          {
            "q": "G104 · Si llueve, la feria es adentro; ___, es en la vereda.",
            "answers": [
              [
                "si no"
              ]
            ],
            "why": "Plan B con «si no»."
          },
          {
            "q": "G105 · Este cuento es ___ los chicos del rincón de lectura.",
            "answers": [
              [
                "para"
              ]
            ],
            "why": "Destinatario: «para»."
          }
        ]
      },
      {
        "id": "b1-10-practica-errores-integrados",
        "type": "error",
        "title": "Un mensaje con errores",
        "prompt": "Tomás escribió estas frases para el grupo de la librería. Cada una tiene un error de las semanas 6 a 10. Corrígelas.",
        "items": [
          {
            "sentence": "Me alegra que habéis venido tantos a la presentación.",
            "answers": [
              "Me alegra que hayáis venido tantos a la presentación.",
              "Me alegra que hayan venido tantos a la presentación."
            ],
            "why": "Semana 6: después de «me alegra que», perfecto de subjuntivo."
          },
          {
            "sentence": "Buscamos un voluntario que tiene coche para traer las cajas.",
            "answers": [
              "Buscamos un voluntario que tenga coche para traer las cajas."
            ],
            "why": "Semana 7: antecedente buscado, subjuntivo."
          },
          {
            "sentence": "Seguimos recibir donaciones de libros.",
            "answers": [
              "Seguimos recibiendo donaciones de libros."
            ],
            "why": "Semana 10: «seguir» + gerundio."
          },
          {
            "sentence": "Gracias para todo vuestro apoyo este año.",
            "answers": [
              "Gracias por todo vuestro apoyo este año.",
              "Gracias por todo su apoyo este año."
            ],
            "why": "Semana 9: «gracias por»."
          }
        ]
      },
      {
        "id": "b1-10-practica-escritura-guiada",
        "type": "open",
        "title": "Respuestas para el diario",
        "prompt": "Imagina que el diario te entrevista sobre una actividad que empezaste. Responde cada pregunta en dos o tres frases.",
        "items": [
          {
            "prompt": "¿Cómo empezaste y qué sigues haciendo igual que al principio?",
            "model": "Empecé a tocar la guitarra hace dos años, cuando me regalaron una vieja. Una noche me puse a buscar tutoriales y no paré. Sigo practicando media hora cada día, aunque tengo poco tiempo.",
            "checklist": [
              "Usas «empezar a» o «ponerse a» para el inicio.",
              "Usas «seguir + gerundio» para lo que continúa."
            ]
          },
          {
            "prompt": "¿Qué te alegra de este tiempo y qué planes tienes?",
            "model": "Me alegra que mis amigos hayan empezado a pedirme canciones. Cuando sepa diez canciones enteras, tocaré en el cumpleaños de mi hermana, para que lo celebre con música en vivo.",
            "checklist": [
              "Hay una reacción con «haya + participio».",
              "Hay un plan con «cuando» + subjuntivo y una finalidad con «para que»."
            ]
          },
          {
            "prompt": "¿Qué consejo le darías a alguien que quiere empezar lo mismo?",
            "model": "Yo que tú, buscaría a alguien que te enseñe lo básico. Si practicas un poco cada día, avanzarás rápido, aunque al principio duelen los dedos.",
            "checklist": [
              "El consejo va en condicional.",
              "Hay una condición con «si» + presente o un obstáculo con «aunque» + indicativo."
            ]
          }
        ]
      }
    ]
  },
  "writing": {
    "task": "Hace un año empezaste algo nuevo (un negocio, un deporte, un instrumento, un voluntariado, un idioma). Escribe un correo a una amiga que vive lejos: cuéntale cómo empezaste, qué sigues haciendo, qué te ha alegrado o sorprendido, qué planes tienes y qué le aconsejarías si quisiera hacer lo mismo.",
    "context": "Es el texto de control de las semanas 6 a 10: intenta usar al menos una estructura de cada semana.",
    "steps": [
      "Haz una línea temporal con tres partes: cómo empezó, qué sigue igual y qué vendrá.",
      "Primer párrafo: el inicio con «empezar a», «ponerse a» o «echarse a», y una reacción con «haya + participio».",
      "Segundo párrafo: lo que sigues haciendo («seguir + gerundio», «soler»), un obstáculo con «aunque», un plan con «cuando» o «si» y una finalidad con «para que».",
      "Cierra con un consejo en condicional y revisa el texto con la lista: modo después de cada conector, «por / para» y la preposición «a» de las perífrasis."
    ],
    "useLanguage": [
      "empezar a / ponerse a / echarse a + infinitivo",
      "seguir + gerundio / seguir sin + infinitivo / soler + infinitivo",
      "me alegra que + haya + participio",
      "cuando / en cuanto + subjuntivo; si + presente",
      "para que + subjuntivo; busco… que + subjuntivo",
      "aunque + indicativo; yo que tú + condicional; por / para"
    ],
    "model": [
      "Querida Inés: ¿te acuerdas de que hace un año empecé a ir a un club de remo? Todo empezó por casualidad: un domingo pasé por el río, vi a un grupo entrenando y me puse a hablar con la entrenadora. La primera vez que subí al bote me eché a reír de los nervios. Me alegra mucho que el grupo me haya recibido tan bien, porque al principio no conocía a nadie.",
      "Sigo entrenando tres veces por semana y los sábados solemos salir temprano, cuando el río está tranquilo. Aunque me duelen los brazos, no pienso dejarlo. Cuando termine la temporada, quiero competir en la regata de otoño, y estoy buscando un compañero que reme a mi ritmo. Si vienes a Rosario en verano, te llevo al club para que pruebes. Yo que tú, empezaría con clases cortas; por cinco mil pesos tienes un mes entero. ¡Escríbeme pronto!"
    ],
    "checklist": [
      "Hay al menos dos perífrasis de inicio y una de continuidad, con sus preposiciones.",
      "Uso subjuntivo después de «me alegra que», «cuando» (futuro), «para que» y en las relativas de algo buscado.",
      "Uso «aunque» + indicativo sin «pero» y «si» + presente.",
      "El consejo va en condicional y «por / para» están bien elegidos.",
      "El correo tiene dos párrafos organizados en el tiempo."
    ],
    "words": [
      140,
      200
    ]
  },
  "speaking": {
    "intro": "Graba tus respuestas. Es la producción oral del control: intenta usar una estructura de cada semana de la 6 a la 10.",
    "tasks": [
      {
        "title": "Mi proyecto, un año después",
        "prompt": "Habla durante dos minutos y medio sobre algo que empezaste en el último año: cómo empezó, qué sigues haciendo, qué te ha alegrado, qué dificultades tienes, qué planes tienes y qué le aconsejarías a alguien que quiere empezar lo mismo.",
        "prep": [
          "Inicio: «empecé a», «me puse a», «me eché a».",
          "Continuidad y costumbre: «sigo + gerundio», «sigo sin», «suelo».",
          "Semanas 6 a 9: una reacción, un plan con «cuando», una finalidad, un «aunque», un «si» y un consejo."
        ],
        "seconds": 150,
        "model": "Hace un año empecé a estudiar portugués. Todo empezó cuando me puse a ver una serie brasileña y no entendía nada. Sigo yendo a clase dos veces por semana y suelo repasar en el colectivo. Me alegra que mi profesora haya sido tan paciente. Aunque la pronunciación me cuesta, no pienso dejarlo. Cuando tenga vacaciones, viajaré a Florianópolis para practicar…",
        "selfCheck": [
          "¿He hablado al menos dos minutos y medio?",
          "¿He usado bien «empezar a», «ponerse a» y «seguir + gerundio»?",
          "¿He incluido al menos cuatro estructuras de las semanas 6 a 9?"
        ]
      },
      {
        "title": "La entrevista de radio",
        "prompt": "Ahora eres tú quien responde en la radio. Un interlocutor te pregunta: «¿Qué sigues haciendo igual que al principio? ¿Qué te sorprendió? ¿Qué harías distinto?». Responde a cada pregunta, aclara lo que no se entienda y termina con una pregunta para el locutor. Practica con un compañero o graba las dos voces.",
        "prep": [
          "Prepara una respuesta con «sigo + gerundio» y otra con «me sorprendió que» o «me sorprende que haya…».",
          "Para «qué harías distinto», usa el condicional."
        ],
        "seconds": 90,
        "model": "Sigo entrenando con el mismo grupo del primer día. Me sorprende que nadie haya abandonado. ¿Qué haría distinto? Empezaría antes, la verdad. Y usted, ¿alguna vez se puso a aprender algo de grande?",
        "selfCheck": [
          "¿He respondido a las tres preguntas?",
          "¿He terminado con una pregunta para el interlocutor?"
        ]
      }
    ]
  },
  "useInClass": {
    "intro": "Es semana de control. Lleva tu correo y estas tarjetas a la próxima clase: tu profesor podrá ver qué dominas ya y qué conviene repasar.",
    "cards": [
      {
        "move": "Cuenta",
        "task": "Cuéntale a tu profesor cómo empezaste a estudiar español y qué sigues haciendo igual desde entonces.",
        "phrases": [
          "Empecé a… cuando…",
          "Sigo…",
          "Suelo…"
        ]
      },
      {
        "move": "Pregunta",
        "task": "Pregúntale a tu profesor qué le hizo echarse a reír o a llorar la última vez, y reacciona con «qué bien que…» o «qué pena que…».",
        "phrases": [
          "¿Cuándo fue la última vez que te echaste a…?"
        ]
      },
      {
        "move": "Revisa",
        "task": "Elige con tu profesor las dos clases de las semanas 6 a 9 que más te cuestan y pídele un ejercicio oral rápido de cada una.",
        "phrases": [
          "Me cuesta elegir entre…",
          "¿Podríamos repasar…?"
        ]
      },
      {
        "move": "Planifica",
        "task": "Explica qué vas a hacer con tu español cuando termines el nivel B1 y para qué lo necesitas.",
        "phrases": [
          "Cuando termine el B1, …",
          "Lo necesito para…"
        ]
      }
    ],
    "bring": "Tu correo revisado, la grabación de tu proyecto y una lista con tus dudas de las semanas 6 a 10."
  },
  "quiz": {
    "items": [
      {
        "type": "choice",
        "q": "Cuando vio el precio, el cliente ___ reír.",
        "options": [
          "se echó a",
          "siguió",
          "solía"
        ],
        "answer": 0,
        "why": "Inicio brusco con «reír»: «echarse a»."
      },
      {
        "type": "choice",
        "q": "¿Qué frase dice que algo todavía no ha ocurrido?",
        "options": [
          "Sigo esperando el permiso.",
          "Sigo sin tener el permiso.",
          "Suelo tener el permiso."
        ],
        "answer": 1,
        "why": "«Seguir sin» + infinitivo: lo esperado aún no ocurre."
      },
      {
        "type": "listen",
        "q": "Escucha a Paula. ¿Qué expresa?",
        "options": [
          "Una duda sobre el futuro.",
          "Un consejo para los vecinos.",
          "Alegría por algo que ya ha empezado a ocurrir."
        ],
        "answer": 2,
        "why": "«Me alegra que hayan empezado»: reacción actual a un cambio ya iniciado.",
        "audio": "Me alegra que hayan empezado a venir familias enteras los sábados.",
        "voice": "es-AR-f"
      },
      {
        "type": "gap",
        "q": "Después del accidente, Marta ___ ___ conduciendo, pero con más cuidado. (seguir)",
        "answers": [
          [
            "siguió"
          ],
          [
            "conduciendo"
          ]
        ],
        "why": "«Seguir» en indefinido: «siguió» + gerundio."
      },
      {
        "type": "gap",
        "q": "Cuando ___ (abrir, nosotros) la cafetería, contrataremos a un ayudante.",
        "answers": [
          [
            "abramos"
          ]
        ],
        "why": "Semana 6: «cuando» + subjuntivo para el futuro."
      },
      {
        "type": "gap",
        "q": "Si ___ (necesitar, tú) ayuda con la mudanza, llámame.",
        "answers": [
          [
            "necesitas"
          ]
        ],
        "why": "Semana 8: «si» + presente."
      },
      {
        "type": "gap",
        "q": "Dejo la llave en la portería ___ que el técnico pueda entrar, porque seguimos sin calefacción.",
        "answers": [
          [
            "para"
          ]
        ],
        "why": "Semana 7: finalidad con otro sujeto («para que»)."
      },
      {
        "type": "order",
        "words": [
          "Aunque",
          "llovía,",
          "la",
          "gente",
          "se",
          "puso",
          "a",
          "bailar."
        ],
        "why": "«Aunque» + indicativo y «ponerse a» + infinitivo."
      },
      {
        "type": "error",
        "sentence": "Los sábados suelemos desayunar en el bar de la esquina.",
        "answers": [
          "Los sábados solemos desayunar en el bar de la esquina."
        ],
        "why": "«Soler» en «nosotros» no diptonga: «solemos»."
      },
      {
        "type": "error",
        "sentence": "Busco un socio que tiene experiencia en librerías.",
        "answers": [
          "Busco un socio que tenga experiencia en librerías."
        ],
        "why": "Semana 7: antecedente buscado, subjuntivo."
      },
      {
        "type": "error",
        "sentence": "Yo que tú, empezaré con un local más pequeño.",
        "answers": [
          "Yo que tú, empezaría con un local más pequeño."
        ],
        "why": "Semana 8: el consejo con «yo que tú» va en condicional."
      },
      {
        "type": "open",
        "prompt": "Reformulación: cuenta la misma historia en una o dos frases con «empezar a», «seguir + gerundio» y una estructura de las semanas 6 a 9. «Paula abrió la librería hace un año. Todavía da clases. Quiere contratar a alguien. Esa persona tiene que saber de café.»",
        "model": "Paula empezó a atender la librería hace un año, aunque sigue dando clases, y ahora busca a alguien que sepa de café.",
        "checklist": [
          "Usas «empezar a» + infinitivo para el inicio.",
          "Usas «seguir + gerundio» para «todavía da clases».",
          "La persona buscada va en una relativa con subjuntivo («que sepa»)."
        ]
      }
    ]
  },
  "complete": {
    "canNow": [
      "Contar cómo empezó una acción con «empezar a», «ponerse a», «echarse a» y «estar a punto de».",
      "Decir que algo continúa con «seguir + gerundio» o que aún no ocurre con «seguir sin».",
      "Hablar de costumbres presentes y pasadas con «suelo» y «solía».",
      "Combinar en un mismo texto las clases de las semanas 6 a 9: valorar, planear, buscar, explicar para qué, conceder, poner condiciones, aconsejar y elegir «por / para»."
    ],
    "review": [
      "Si dudaste en el control de las semanas 6 y 7, vuelve a las tablas de «haya + participio», de los conectores temporales y de las relativas.",
      "Si dudaste en las semanas 8 y 9, repasa «aunque» sin «pero», «si» + presente y los usos de «por» y «para».",
      "Los gerundios con cambio de vocal: durmiendo, pidiendo, diciendo, siguiendo."
    ]
  },
  "related": [
    {
      "path": "/gramatica/perifrasis-incoativas-empezar-a-ponerse-a",
      "label": "Clase: Perífrasis incoativas: empezar a, ponerse a"
    },
    {
      "path": "/empezar-seguir-repetir-dejar-de-hacer",
      "label": "Clase: Perífrasis durativas: seguir + gerundio"
    }
  ]
};
