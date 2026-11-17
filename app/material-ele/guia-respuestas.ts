/**
 * «En pocas palabras»: the short answer shown at the top of each long guide,
 * before the full prose. It answers the guide's query in two or three
 * sentences a teacher can read in ten seconds and a search assistant can
 * quote whole. Kept apart from ./guias so the daily guide work and these
 * answers do not edit the same file. Every guide must have one (tests).
 */
export const guiaRespuestas: Record<string, { answer: string; steps: string[] }> = {
  "materiales-para-ensenar-espanol": {
    answer:
      "Un buen material para enseñar español tiene un objetivo comunicativo, una secuencia completa (presentar, practicar, producir) y un nivel MCER declarado. Lo que cambia por nivel es el apoyo: imágenes y frases mínimas en A1, textos y contraste de tiempos en B1, matiz y registro en C1.",
    steps: [
      "Elige el objetivo de la clase antes que el material.",
      "Comprueba que el material termina con producción oral o escrita, no solo con huecos.",
      "Prueba primero el material gratis de tu nivel y completa con clases interactivas cuando te falte la secuencia entera.",
    ],
  },
  "preparar-una-clase-de-espanol-rapido": {
    answer:
      "Una clase de español se prepara en diez minutos si partes de un objetivo comunicativo y de un material que ya trae la secuencia. El tiempo se va en buscar y montar piezas sueltas, no en decidir qué enseñar.",
    steps: [
      "Escribe en una frase qué podrá hacer el alumno al terminar.",
      "Elige una clase o ficha de su nivel que ya tenga contexto, práctica y cierre.",
      "Prepara dos preguntas personales para el cierre y una actividad de reserva.",
    ],
  },
  "fichas-ele-para-imprimir-y-proyectar": {
    answer:
      "Una ficha ELE útil cabe en una clase, declara su nivel y trae soluciones. Para imprimir conviene una ficha de una o dos páginas con teoría breve y ejercicios; para proyectar, una que se lea a distancia y permita corregir en pantalla con el alumno.",
    steps: [
      "Filtra por nivel y por tema antes de descargar.",
      "Revisa que incluya soluciones y un ejercicio de producción.",
      "Imprime en PDF para el aula o proyecta la misma ficha en la clase online.",
    ],
  },
  "actividades-de-conversacion-en-espanol-para-adultos": {
    answer:
      "Las actividades de conversación funcionan con adultos cuando hay un motivo real para hablar: resolver un problema, tomar una decisión o defender una postura. Una lista de preguntas sirve para calentar; una situación con desenlace sostiene la hora entera.",
    steps: [
      "Empieza con dos o tres preguntas personales del tema.",
      "Plantea una situación con un problema que resolver entre los dos.",
      "Cierra con una opinión razonada y corrige los errores al final, no durante.",
    ],
  },
  "ejercicios-ele-con-soluciones": {
    answer:
      "Los ejercicios ELE con soluciones sirven para practicar una forma y corregirla en el momento. Rinden más cuando van después de un contexto y antes de una tarea de producción: el ejercicio fija la forma, la conversación comprueba que el alumno la usa.",
    steps: [
      "Elige ejercicios del nivel y del tema que acabas de presentar.",
      "Corrige con las soluciones a la vista y pide al alumno que explique su elección.",
      "Termina con dos frases propias del alumno usando la misma estructura.",
    ],
  },
  "como-dar-clases-de-espanol-online": {
    answer:
      "Dar clases de español online funciona cuando la pantalla compartida es la pizarra y el material de la clase a la vez. Hace falta una plataforma de videollamada, un material pensado para verse en pantalla y un ritmo que cambie de actividad cada diez o quince minutos.",
    steps: [
      "Comparte pantalla con una clase interactiva en lugar de un PDF estático.",
      "Alterna explicación breve, práctica guiada y conversación.",
      "Guarda lo trabajado para retomar en la clase siguiente.",
    ],
  },
  "recursos-ele-gratis": {
    answer:
      "Hay recursos ELE gratis de calidad en cuatro formatos: fichas de gramática para imprimir, ejercicios con soluciones, preguntas de conversación por nivel y clases interactivas completas. Lo difícil no es encontrarlos, sino elegir los que tienen nivel declarado y secuencia de clase.",
    steps: [
      "Busca por nivel MCER y por objetivo, no por formato.",
      "Prefiere recursos con soluciones y con cierre de producción.",
      "Combina una ficha gratis con una clase interactiva gratis del mismo tema.",
    ],
  },
  "como-ensenar-el-subjuntivo": {
    answer:
      "El subjuntivo se enseña por usos, no por listas de verbos. Se empieza en B1 con deseos y peticiones («quiero que vengas»), se sigue con opinión negada, emoción y finalidad, y solo después se introducen el imperfecto de subjuntivo y las condicionales irreales.",
    steps: [
      "Presenta un uso a la vez dentro de una situación real.",
      "Contrasta con el indicativo en pares mínimos («creo que viene» / «no creo que venga»).",
      "Termina con una tarea en la que el alumno necesite ese uso para decir algo propio.",
    ],
  },
  "como-ensenar-ser-y-estar": {
    answer:
      "Ser y estar se enseñan por lo que hacen: ser identifica y define (quién es, qué es, cómo es), estar sitúa y describe estados (dónde está, cómo está ahora). La regla «permanente o temporal» falla pronto, así que conviene evitarla desde A1.",
    steps: [
      "Empieza con identidad, origen y profesión con ser.",
      "Añade lugar y estados de ánimo con estar.",
      "Deja para A2 y B1 los adjetivos que cambian de significado («ser listo» / «estar listo»).",
    ],
  },
  "como-ensenar-indefinido-e-imperfecto": {
    answer:
      "El indefinido cuenta lo que pasó, los hechos que hacen avanzar la historia; el imperfecto describe cómo eran las cosas, el decorado y las costumbres. Se enseñan primero por separado en A2 y después juntos, dentro de un relato.",
    steps: [
      "Practica el indefinido con una secuencia de acciones terminadas.",
      "Practica el imperfecto con descripciones y hábitos del pasado.",
      "Une los dos en una anécdota: qué pasó y cómo era la situación.",
    ],
  },
  "como-ensenar-por-y-para": {
    answer:
      "Para mira hacia delante: finalidad, destinatario, destino y plazo. Por mira hacia atrás o alrededor: causa, medio, intercambio, duración y lugar aproximado. Esa imagen sirve más que memorizar una lista de usos.",
    steps: [
      "Empieza en A1 con «para» de finalidad y destinatario.",
      "Añade «por» de causa y de medio en A2.",
      "Contrasta los dos en B1 con pares como «lo hice por ti» y «lo hice para ti».",
    ],
  },
  "como-ensenar-gustar": {
    answer:
      "Gustar no funciona como «to like»: lo que gusta es el sujeto y la persona es un complemento indirecto («me gusta el café», «me gustan los libros»). Se enseña como bloque desde A1 y se amplía después a verbos de la misma familia, como encantar, interesar o molestar.",
    steps: [
      "Presenta «me gusta» y «me gustan» con cosas reales del alumno.",
      "Añade «te», «le», «nos» y el refuerzo «a mí», «a ti».",
      "Pasa a acuerdo y desacuerdo: «a mí también», «a mí tampoco», «a mí sí», «a mí no».",
    ],
  },
  "como-ensenar-pronombres-de-objeto": {
    answer:
      "Los pronombres de objeto sustituyen algo ya mencionado: lo, la, los, las para el objeto directo; le, les para el indirecto. Se enseñan primero por separado, luego combinados («se lo doy»), y siempre a partir de una frase donde repetir el nombre suena raro.",
    steps: [
      "Empieza con el objeto directo en respuestas cortas («¿Tienes las llaves?» «Sí, las tengo»).",
      "Introduce el indirecto con verbos de dar y decir.",
      "Combina los dos y explica el cambio de «le» a «se».",
    ],
  },
  "como-ensenar-el-preterito-perfecto": {
    answer:
      "El pretérito perfecto habla de un pasado que el hablante conecta con el presente: experiencias («he estado en Perú») y acciones dentro de un tiempo que no ha terminado («hoy he trabajado mucho»). Su uso varía entre España y América, y conviene decírselo al alumno.",
    steps: [
      "Presenta la forma con haber y el participio, y los participios irregulares frecuentes.",
      "Practica con marcadores como «hoy», «esta semana», «alguna vez» y «todavía no».",
      "Contrasta con el indefinido cuando el alumno ya domine los dos por separado.",
    ],
  },
  "como-ensenar-el-imperativo": {
    answer:
      "El imperativo sirve para dar instrucciones, consejos, invitaciones y órdenes. Se empieza con el afirmativo de tú y usted en situaciones amables («pasa», «siéntate»), y se deja el negativo para cuando el alumno conoce el presente de subjuntivo, porque comparte sus formas.",
    steps: [
      "Presenta el afirmativo con instrucciones reales: una receta, una dirección.",
      "Añade los irregulares frecuentes (ven, pon, di, haz) y los pronombres pegados al verbo.",
      "Introduce el negativo junto con el subjuntivo y contrasta «hazlo» con «no lo hagas».",
    ],
  },
  "como-ensenar-los-conectores": {
    answer:
      "Un conector dice qué relación hay entre dos ideas: sumar, oponer, explicar la causa o sacar una consecuencia. Se enseña mejor partiendo de dos ideas sin unir y preguntando por esa relación, y no con una lista. En cada nivel bastan cinco o seis: de «y, pero, porque» en A1 a «ahora bien» o «es decir» en C1.",
    steps: [
      "Escribe dos ideas separadas y pregunta qué relación hay entre ellas.",
      "Presenta dos conectores para esa relación, uno conocido y uno nuevo, con su lugar y su puntuación.",
      "Cambia una de las ideas y comprueba si el conector todavía sirve.",
      "Practica hablando: una opinión, una objeción y una conclusión.",
    ],
  },
  "como-ensenar-el-futuro": {
    answer:
      "El español habla del futuro con tres formas: ir a + infinitivo para intenciones, el presente para lo ya acordado y el futuro simple para predicciones y promesas. Se enseña en ese orden: ir a en A1, el futuro simple con sus doce irregulares en A2, y en B2 el futuro de probabilidad, como en «serán las diez».",
    steps: [
      "Empieza por los planes con ir a + infinitivo y el presente con marcador de tiempo.",
      "Presenta el futuro simple con una predicción: infinitivo entero más terminaciones, y los irregulares en tres grupos.",
      "Contrasta las tres formas con frases sobre el mismo día.",
      "Practica hablando: predicciones, promesas y suposiciones sobre alguien que falta.",
    ],
  },
  "como-ensenar-el-condicional": {
    answer:
      "El condicional sirve para poner distancia: pedir con cortesía, aconsejar, imaginar algo que no es real o dar una información sin confirmarla. Se enseña por necesidad: fórmulas como «me gustaría» en A2, la conjugación completa y los consejos en B1, y las oraciones con si + imperfecto de subjuntivo en B2. Los irregulares son los del futuro.",
    steps: [
      "Empieza por fórmulas que el alumno ya usa: «me gustaría» y «¿podrías?».",
      "Presenta la forma: infinitivo entero más las terminaciones del imperfecto, con las raíces irregulares del futuro.",
      "Practica consejos e hipótesis sencillas antes de la oración con «si».",
      "Añade si + imperfecto de subjuntivo y recuerda que después de «si» nunca va condicional.",
    ],
  },
  "como-ensenar-las-preposiciones": {
    answer:
      "Las preposiciones se enseñan mejor en tres capas que con una lista de usos: primero las que tienen significado espacial, con un dibujo; después las expresiones fijas, como bloques; y por último los verbos que exigen una preposición, aprendidos como una unidad. El orden habitual va de «a, de, en, con» en A1 a los relativos con preposición en B2.",
    steps: [
      "Presenta lugar y movimiento con objetos o un plano, sin traducir.",
      "Enseña las expresiones de tiempo completas: «a las ocho», «por la mañana».",
      "Anota cada verbo con su preposición: «depender de», «pensar en».",
      "Pide una frase personal con cada verbo y repásalas en la clase siguiente.",
    ],
  },
};
