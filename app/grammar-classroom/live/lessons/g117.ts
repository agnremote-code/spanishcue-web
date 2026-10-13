import type { LiveLesson } from '../types';

/**
 * Lesson 117 · B2 · Verbos con preposición (de / en) y su término.
 * A design team (Julia, Andrés, the coordinator Pilar and the photographer)
 * reorganises the review of a catalogue; their project runs through every section.
 */
export const lesson: LiveLesson = {
  id: 117,
  level: 'B2',
  title: 'Verbos con preposición',
  subtitle: 'Usar depender de, darse cuenta de, insistir en y confiar en con un nombre, un infinitivo o una oración, sin perder la preposición.',
  legend: [
    { tone: 'blue', label: 'Verbo + de' },
    { tone: 'teal', label: 'Verbo + en' },
    { tone: 'orange', label: '+ infinitivo · el mismo sujeto' },
    { tone: 'violet', label: '+ que + oración · otro sujeto o una situación' },
  ],
  optionNotes: {
    'que': 'Este verbo lleva preposición, y la preposición se mantiene delante de «que».',
    'de que': 'Revisa el verbo: si no lleva «de» con un nombre, tampoco lo lleva delante de «que».',
    'en que': '«En que» solo corresponde a verbos como insistir, confiar o reparar.',
    'depende a': '«Depender» se construye siempre con «de».',
    'depende en': '«Depender» se construye siempre con «de».',
    'insiste de': '«Insistir» se construye con «en».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Verbos que piden una preposición', coach: 'La preposición viaja con el verbo, siempre.',
      steps: [
        { title: 'Verbos con «de»', blocks: [
          { kind: 'lead', text: 'El equipo de Julia prepara un catálogo. «Nos **dimos cuenta de que** la fecha **depende de** las fotos nuevas.» Algunos verbos llevan una preposición fija. Si la quitas, la frase suena descuidada o cambia de sentido.' },
          { kind: 'guide', text: { teacher: 'Antes de la teoría, pregunta: «¿De qué depende tu horario esta semana?». Observa si el alumno mantiene «de» en la pregunta y en la respuesta.', self: 'Antes de leer, responde en voz alta: «¿De qué depende tu horario esta semana?». Fíjate en si usas «de».' } },
          { kind: 'concept', tone: 'blue', label: 'DEPENDER DE · DARSE CUENTA DE · ACORDARSE DE', question: '¿De qué?',
            formula: ['verbo + de + nombre', 'verbo + de + infinitivo', 'verbo + de + que + oración'],
            meaning: 'Estos verbos llevan **de** delante de su complemento, sea un nombre, un infinitivo o una oración con «que». **Depender de** presenta lo que condiciona un resultado; **darse cuenta de** y **acordarse de**, lo que descubrimos o recordamos.',
            examples: [
              { es: 'La fecha [[depende de|blue]] la llegada de las imágenes.' },
              { es: 'El equipo [[se dio cuenta de que|blue]] el catálogo necesitaba otra revisión.' },
              { es: '¿Te [[acordaste de|blue]] enviar el archivo?' },
              { es: 'Todo [[depende de que|blue]] haya tiempo.' },
            ],
            note: '«Acordarse de» lleva preposición; **recordar**, no: «Me acuerdo **de** la reunión» = «Recuerdo la reunión».' },
          { kind: 'table', title: 'El mismo verbo con tres tipos de complemento', head: ['Verbo', '+ nombre', '+ infinitivo', '+ que + oración'], rows: [
            ['depender **de**', 'Depende **del** clima.', 'Depende **de** tener tiempo.', 'Depende **de que** llegue a tiempo.'],
            ['darse cuenta **de**', 'Me di cuenta **del** error.', '—', 'Me di cuenta **de que** faltaba una página.'],
            ['acordarse **de**', 'Me acuerdo **de** Ana.', 'Me acordé **de** llamar.', 'Me acordé **de que** era su cumpleaños.'],
          ], note: '**de + el = del**: «depende del clima», «me di cuenta del error».' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'El plazo ___ la llegada de las fotos.', options: ['depende a', 'depende en', 'depende de'], answer: 2, why: '«Depender» se construye con «de».' },
            { prompt: 'El equipo se dio cuenta ___ el catálogo necesitaba otra revisión.', options: ['que', 'de que', 'en que'], answer: 1, why: '«Darse cuenta de» mantiene «de» delante de «que».' },
            { prompt: '¿Qué frase es correcta?', options: ['Recuerdo de la reunión.', 'Me acuerdo de la reunión.', 'Me acuerdo la reunión.'], answer: 1, why: '«Acordarse» lleva «de»; «recordar» no lleva preposición.' },
          ] },
        ] },
        { title: 'Verbos con «en»', mascot: '/brand/mascot/studying.webp', coach: 'Insistencia, confianza, atención: «en».', blocks: [
          { kind: 'concept', tone: 'teal', label: 'INSISTIR EN · CONFIAR EN · REPARAR EN', question: '¿En qué?',
            formula: ['verbo + en + nombre', 'verbo + en + infinitivo', 'verbo + en + que + oración'],
            meaning: 'Estos verbos llevan **en**: señalan aquello que recibe nuestra **insistencia**, nuestra **confianza** o nuestra **atención**. **Reparar en** es más culto: significa «darse cuenta de un detalle, notarlo».',
            examples: [
              { es: 'Julia [[insistió en|teal]] revisar primero una muestra.' },
              { es: 'La coordinadora [[confía en|teal]] el criterio del equipo.' },
              { es: 'Nadie [[reparó en|teal]] ese detalle.' },
              { es: '[[Confío en que|teal]] encontraremos una solución.' },
            ] },
          { kind: 'tip', icon: '❓', title: 'También en las preguntas', text: 'La preposición va **delante** de la palabra interrogativa: «¿**De qué** depende?», «¿**En quién** confías?», «¿**En qué** insiste tu jefe?». Nunca «¿Qué depende?».' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Mi madre siempre insiste ___ pagar la cena.', options: ['de', 'en', 'a'], answer: 1, why: '«Insistir» se construye con «en».' },
            { prompt: '¿___ confías más en tu trabajo?', options: ['Quién', 'En quién', 'De quién'], answer: 1, why: 'Confiar en alguien → ¿En quién confías?' },
          ] },
        ] },
        { title: '¿Infinitivo o «que»?', mascot: '/brand/mascot/speaking.webp', coach: '¿Quién hace la acción?', blocks: [
          { kind: 'concept', tone: 'orange', label: 'EL TAMAÑO DEL COMPLEMENTO', question: '¿Actúa la misma persona?',
            formula: ['mismo sujeto → preposición + infinitivo', 'otro sujeto o situación completa → preposición + que + oración'],
            meaning: 'El **infinitivo** compacta una acción del **mismo sujeto** del verbo principal. Con **que + oración** construimos una situación completa, normalmente con **otro sujeto**. La preposición se mantiene en los dos casos.',
            examples: [
              { es: 'Julia insiste en [[revisar|orange]] una muestra. (Julia revisa.)' },
              { es: 'Julia insiste en [[que la fotógrafa envíe|violet]] una selección. (La fotógrafa envía.)' },
              { es: 'Confío en [[resolverlo|orange]] pronto. (Yo lo resuelvo.)' },
              { es: 'Confío en [[que lo resolvamos|violet]] juntos. (Lo resolvemos nosotros.)' },
            ] },
          { kind: 'compare', title: 'Misma propuesta, otra persona responsable', columns: [
            { tone: 'orange', label: 'INFINITIVO', sentence: 'Insisto en [[preparar|orange]] el acuerdo.', idea: 'Yo insisto y yo lo preparo. Asumo la tarea.' },
            { tone: 'violet', label: 'QUE + SUBJUNTIVO', sentence: 'Insisto en [[que el equipo prepare|violet]] el acuerdo.', idea: 'Yo insisto, pero lo prepara el equipo. Asigno la tarea.' },
          ] },
          { kind: 'table', title: '¿Indicativo o subjuntivo después de «que»?', head: ['Verbo', 'Modo', 'Ejemplo'], rows: [
            ['darse cuenta de que', 'indicativo (un hecho)', 'Me di cuenta de que **faltaba** una página.'],
            ['acordarse de que', 'indicativo', 'Me acordé de que **era** su cumpleaños.'],
            ['depender de que', 'subjuntivo (una condición)', 'Depende de que **haya** tiempo.'],
            ['insistir en que (pedir)', 'subjuntivo', 'Insisto en que **revises** la muestra.'],
            ['insistir en que (afirmar)', 'indicativo', 'Insiste en que no **estuvo** allí.'],
            ['confiar en que', 'indicativo futuro o subjuntivo', 'Confío en que **encontraremos** / **encontremos** una solución.'],
          ], note: 'El modo depende del verbo y de la intención: pedir algo a otra persona va en subjuntivo; constatar un hecho, en indicativo.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Julia quiere revisar ella misma una muestra. ¿Qué frase lo dice?', options: ['Julia insiste en revisar una muestra.', 'Julia insiste de revisar una muestra.', 'Julia insiste en que la fotógrafa revise una muestra.'], answer: 0, why: 'Mismo sujeto: insistir en + infinitivo.' },
            { prompt: 'Quieres que otra persona actúe: Insisto ___ la fotógrafa envíe una selección.', options: ['que', 'en que', 'de que'], answer: 1, why: 'Insistir mantiene «en», y «que» introduce otro sujeto.' },
            { prompt: 'Todo depende de que ___ las fotos a tiempo.', options: ['llegan', 'lleguen', 'llegar'], answer: 1, why: '«Depender de que» presenta una condición: subjuntivo.' },
          ] },
        ] },
        { title: 'La preposición no desaparece', mascot: '/autoestudio/mascot/noting.webp', coach: 'Ni de más, ni de menos.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'DELANTE DE «QUE»', question: '¿Se mantiene la preposición?',
            formula: ['verbo con preposición → preposición + que', 'verbo sin preposición → que (sin «de»)'],
            meaning: 'Si un verbo lleva preposición con un nombre, **la conserva** delante de «que»: «me di cuenta **del** error» → «me di cuenta **de que**…». Si el verbo **no** lleva preposición, no la añadas: «pienso **que**…», «creo **que**…», «digo **que**…».',
            examples: [
              { es: 'Me di cuenta [[de que|blue]] faltaba una foto.' },
              { es: 'Insisto [[en que|teal]] lo revisemos.' },
              { es: 'Pienso que es una buena idea.' },
              { es: 'Creo que el plazo es corto.' },
            ],
            note: 'Quitar la preposición necesaria se llama **queísmo** («me di cuenta que»). Añadir una que no corresponde se llama **dequeísmo** («pienso de que»). Los dos se notan en un texto cuidado.' },
          { kind: 'tip', icon: '🔍', title: 'La prueba del «eso»', text: 'Cambia la oración por **eso**. «Me di cuenta **de** eso» → me di cuenta **de que**. «Pienso eso» (no «pienso de eso») → pienso **que**. «Insisto **en** eso» → insisto **en que**.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '¿Qué frase está bien construida?', options: ['Pienso de que el plan funciona.', 'Pienso que el plan funciona.', 'Pienso en que el plan funciona.'], answer: 1, why: '«Pienso eso» → pienso que. Sin «de».' },
            { prompt: '¿Cuál es la forma cuidada?', options: ['Me acordé que tenía cita.', 'Me acordé de que tenía cita.'], answer: 1, why: '«Me acordé de eso» → me acordé de que.' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/seated.webp', coach: 'Tres decisiones: preposición, tamaño y modo.', blocks: [
          { kind: 'decide', title: 'Antes de escribir la frase, decide', steps: [
            { q: '¿El verbo lleva preposición con un nombre? (Prueba con «eso».)', yes: 'next', no: 'Sin preposición: «Pienso **que**…», «Creo **que**…».' },
            { q: '¿La acción la hace el mismo sujeto del verbo principal?', yes: 'Preposición + **infinitivo**: «Insisto [[en revisar|orange]] la muestra».', no: 'next' },
            { q: '¿Pides algo o presentas una condición?', yes: 'Preposición + que + **subjuntivo**: «Insisto [[en que revises|violet]]…», «Depende [[de que haya|violet]] tiempo».', no: 'Preposición + que + **indicativo**: «Me di cuenta [[de que faltaba|violet]] una página».' },
          ] },
          { kind: 'tip', icon: '🤝', title: 'La gramática aclara responsabilidades', text: 'En un correo de trabajo, «insisto **en revisar**» y «insisto **en que revises**» asignan la tarea a personas distintas. Elegir bien el complemento evita malentendidos sobre quién hace qué.' },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Estos errores se notan en un texto cuidado.', blocks: [
          { kind: 'guide', text: { teacher: 'Pide al alumno que aplique la prueba del «eso» antes de ver la corrección.', self: 'Lee cada frase, aplica la prueba del «eso» y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'Me di cuenta que faltaba una página.', right: 'Me di cuenta de que faltaba una página.', why: '«Me di cuenta de eso»: la preposición se mantiene delante de «que».' },
            { wrong: 'Pienso de que es una buena idea.', right: 'Pienso que es una buena idea.', why: '«Pienso eso», sin «de»: no añadas la preposición.' },
            { wrong: 'La fecha depende a la llegada de las fotos.', right: 'La fecha depende de la llegada de las fotos.', why: '«Depender» se construye con «de».' },
            { wrong: 'Insisto de revisar la muestra primero.', right: 'Insisto en revisar la muestra primero.', why: '«Insistir» se construye con «en».' },
            { wrong: 'Insisto en que yo revise la muestra.', right: 'Insisto en revisar la muestra.', why: 'Si actúa el mismo sujeto, usa el infinitivo.' },
            { wrong: '¿Qué depende el precio?', right: '¿De qué depende el precio?', why: 'La preposición va delante de la palabra interrogativa.' },
          ] },
          { kind: 'teacher', text: 'Pide al alumno tres frases verdaderas: algo de lo que se dio cuenta este año, algo de lo que depende una decisión suya y algo en lo que insiste con su familia o su equipo.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Preposiciones en contexto', coach: 'Toca las expresiones marcadas.',
      steps: [
        { title: 'Reunión del catálogo', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada expresión y explica la preposición, el tipo de complemento y, si lo hay, el modo.', self: 'Lee el diálogo. Después toca cada expresión marcada para descubrir por qué se usó.' } },
          { kind: 'explore', title: 'Una revisión más', setting: 'Julia y Andrés hablan con Pilar, la coordinadora, sobre el catálogo de primavera.', lines: [
            { who: 'Pilar', text: '¿Cómo va el catálogo? ¿Lo publicamos el lunes?' },
            { who: 'Andrés', text: 'No estoy seguro. Ayer [[nos dimos cuenta de que|blue]] necesita otra revisión.' },
            { who: 'Pilar', text: '¿Y [[de qué depende|blue]] la fecha?' },
            { who: 'Julia', text: '[[Depende de|blue]] la llegada de las imágenes nuevas. Nadie había relacionado los dos plazos.' },
            { who: 'Pilar', text: 'Entiendo. ¿Qué proponen?' },
            { who: 'Julia', text: 'Yo [[insisto en revisar|orange]] primero una muestra. Así no repetimos todo el trabajo.' },
            { who: 'Andrés', text: 'Y yo [[insisto en que la fotógrafa envíe|violet]] una selección breve antes del jueves.' },
            { who: 'Pilar', text: 'Me parecen bien las dos cosas. [[Confío en|teal]] el criterio del equipo.' },
            { who: 'Andrés', text: 'Gracias. ¿Necesitas algo por escrito?' },
            { who: 'Pilar', text: 'Sí. [[Confío en que|teal]] me enviarán un acuerdo breve con responsables y plazos.' },
            { who: 'Julia', text: 'Hoy mismo. Y [[me acordaré de|blue]] incluir a la fotógrafa en el correo.' },
          ], notes: {
            'nos dimos cuenta de que': '**Darse cuenta de que** + indicativo: un descubrimiento. La preposición «de» se mantiene delante de «que».',
            'de qué depende': 'La preposición **de** va delante de la palabra interrogativa: «¿De qué depende?».',
            'Depende de': '**Depender de** + nombre: la llegada de las imágenes condiciona la fecha.',
            'insisto en revisar': '**Insistir en + infinitivo**: Julia insiste y Julia revisa. Mismo sujeto.',
            'insisto en que la fotógrafa envíe': '**Insistir en que + subjuntivo**: Andrés pide que **otra persona** actúe.',
            'Confío en': '**Confiar en** + nombre: el criterio del equipo recibe su confianza.',
            'Confío en que': '**Confiar en que** + indicativo futuro: Pilar expresa una expectativa sobre lo que hará el equipo.',
            'me acordaré de': '**Acordarse de** + infinitivo: Julia se acordará y Julia incluirá a la fotógrafa.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Quién tiene que enviar una selección breve?', options: ['Julia.', 'La fotógrafa.', 'Pilar.'], answer: 1, why: '«Insisto en que la fotógrafa envíe una selección breve».' },
            { prompt: '¿Quién va a revisar la muestra?', options: ['Julia.', 'La fotógrafa.', 'Pilar.'], answer: 0, why: '«Yo insisto en revisar primero una muestra»: mismo sujeto, infinitivo.' },
          ] },
        ] },
        { title: 'Una decisión personal', mascot: '/brand/mascot/standing.webp', blocks: [
          { kind: 'explore', title: '¿Aceptar o no?', setting: 'Inés le cuenta a su hermano Diego que le ofrecieron un trabajo en otra ciudad.', lines: [
            { who: 'Inés', text: 'Me ofrecieron el puesto en Bogotá, pero no sé qué hacer.' },
            { who: 'Diego', text: '¿Y [[de qué depende|blue]] tu decisión?' },
            { who: 'Inés', text: 'Sobre todo [[depende de que|violet]] Andrea pueda trabajar a distancia.' },
            { who: 'Diego', text: '¿Ya lo hablaron?' },
            { who: 'Inés', text: 'Sí. Ella [[insiste en que|violet]] acepte. Dice que es mi oportunidad.' },
            { who: 'Diego', text: '¿Y tú qué piensas?' },
            { who: 'Inés', text: 'Que tiene razón. Además, ayer [[reparé en|teal]] algo: llevo años hablando de un cambio.' },
            { who: 'Diego', text: 'Yo [[confío en|teal]] ti. Siempre tomas buenas decisiones.' },
            { who: 'Inés', text: 'Gracias. Solo [[me di cuenta del|blue]] miedo que tenía cuando me hicieron la oferta.' },
            { who: 'Diego', text: 'Es normal. Pero [[insisto en ayudarte|orange]] con la mudanza, ¿eh?' },
          ], notes: {
            'de qué depende': 'Pregunta con **depender de**: la preposición va delante de «qué».',
            'depende de que': '**Depender de que + subjuntivo** (pueda): una condición que todavía no se sabe si se cumple.',
            'insiste en que': '**Insistir en que + subjuntivo** (acepte): Andrea insiste, pero quien acepta es Inés. Otro sujeto.',
            'reparé en': '**Reparar en**: notar un detalle. Es un registro algo más culto que «darse cuenta de».',
            'confío en': '**Confiar en** + persona: «en ti».',
            'me di cuenta del': '**Darse cuenta de + el** = del. Complemento nominal: el miedo.',
            'insisto en ayudarte': '**Insistir en + infinitivo**: Diego insiste y Diego ayuda.',
          } },
          { kind: 'teacher', text: 'Pregunta al alumno: «¿De qué dependió una decisión importante de tu vida? ¿Quién insistió en algo?». Pide que use al menos un «que» con otro sujeto.' },
        ] },
        { title: '¿Infinitivo o «que»?', blocks: [
          { kind: 'classify', title: 'Clasifica según quién realiza la acción', categories: [
            { id: 'mismo', label: 'Mismo sujeto (infinitivo)', tone: 'orange' },
            { id: 'otro', label: 'Otro sujeto o situación (que)', tone: 'violet' },
          ], items: [
            { text: 'Julia insiste en revisar una muestra.', answer: 'mismo', why: 'Julia insiste y Julia revisa.' },
            { text: 'Andrés insiste en que la fotógrafa envíe una selección.', answer: 'otro', why: 'Andrés insiste; la fotógrafa envía.' },
            { text: 'Andrea insiste en que Inés acepte.', answer: 'otro', why: 'Andrea insiste; Inés acepta.' },
            { text: 'Diego insiste en ayudar a su hermana.', answer: 'mismo', why: 'Diego insiste y Diego ayuda.' },
            { text: 'Me acordaré de incluir a la fotógrafa.', answer: 'mismo', why: 'Yo me acuerdo y yo incluyo.' },
            { text: 'Depende de que Andrea pueda trabajar a distancia.', answer: 'otro', why: 'Una condición con otro sujeto: Andrea.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Si te equivocas, lee la pista y prueba otra vez.',
      steps: [
        { title: 'Elige según el contexto', blocks: [
          { kind: 'choice', items: [
            { context: 'Revisas un informe y notas un error.', prompt: 'Me di cuenta ___ los datos de marzo estaban mal.', options: ['que', 'de que', 'en que'], answer: 1, why: '«Darse cuenta de eso» → de que.' },
            { context: 'Tu jefe tiene fe en tu trabajo.', prompt: 'Mi jefe confía ___ mi criterio.', options: ['de', 'en', 'a'], answer: 1, why: '«Confiar en» + nombre.' },
            { context: 'Das tu opinión en una reunión.', prompt: 'Creo ___ deberíamos esperar.', options: ['que', 'de que', 'en que'], answer: 0, why: '«Creo eso» → creo que, sin preposición.' },
            { context: 'No sabes si vas a viajar: necesitas un permiso.', prompt: 'El viaje depende de que me ___ el permiso.', options: ['dan', 'den', 'dar'], answer: 1, why: '«Depender de que» presenta una condición: subjuntivo.' },
            { context: 'Quieres pagar tú la cena.', prompt: 'Insisto ___.', options: ['en pagar yo', 'en que pague yo', 'de pagar'], answer: 0, why: 'Mismo sujeto: insistir en + infinitivo.' },
            { context: 'Quieres que tu compañero revise el texto.', prompt: 'Insisto en que ___ el texto antes de enviarlo.', options: ['revisas', 'revises', 'revisar'], answer: 1, why: 'Pides algo a otra persona: insistir en que + subjuntivo.' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '«Insisto en preparar el acuerdo» y «Insisto en que el equipo prepare el acuerdo». ¿Qué cambia?', options: ['Quién prepara el acuerdo.', 'Nada, es lo mismo.', 'El tiempo verbal del acuerdo.'], answer: 0, why: 'En la primera lo preparo yo; en la segunda, el equipo.' },
            { prompt: '«Insiste en que no estuvo allí.» ¿Qué hace esta persona?', options: ['Afirma algo repetidamente.', 'Pide que alguien no vaya.', 'Se da cuenta de algo.'], answer: 0, why: 'Con indicativo, «insistir en que» afirma un hecho.' },
            { prompt: '«Me acuerdo de la reunión» y «Recuerdo la reunión». ¿Significan lo mismo?', options: ['Sí: «acordarse» lleva «de»; «recordar», no.', 'No: la segunda es incorrecta.', 'No: la primera es incorrecta.'], answer: 0, why: 'Los dos verbos significan lo mismo, con distinta construcción.' },
            { prompt: '«Reparé en un detalle» significa…', options: ['Noté un detalle.', 'Arreglé un detalle.', 'Hablé mucho de un detalle.'], answer: 0, why: '«Reparar en» = notar, darse cuenta. «Reparar algo» (sin «en») = arreglar.' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'Correo rápido entre compañeros', lines: [
            { who: 'Andrés', text: 'Julia, ¿de qué ___ la entrega del viernes?', options: ['depende', 'depende de', 'dependes'], answer: 0, why: 'La preposición ya va delante de «qué»: «¿De qué depende…?».' },
            { who: 'Julia', text: 'Depende ___ la fotógrafa termine la selección.', options: ['de que', 'que', 'en que'], answer: 0, why: '«Depender de que» + subjuntivo.' },
            { who: 'Andrés', text: '¿Y tú qué propones?', },
            { who: 'Julia', text: 'Insisto ___ revisar una muestra antes.', options: ['en', 'de', 'a'], answer: 0, why: '«Insistir en» + infinitivo: lo hace Julia.' },
            { who: 'Andrés', text: 'Perfecto. Yo me di cuenta ___ faltan los créditos de las fotos.', options: ['que', 'de que', 'en que'], answer: 1, why: '«Darse cuenta de que».' },
            { who: 'Julia', text: 'Buena observación. Confío en que lo ___ antes del jueves.', options: ['resolveremos', 'resolver', 'resolvemos de'], answer: 0, why: '«Confiar en que» + indicativo futuro: una expectativa.' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Me acordé que tenía una cita con el médico.', ok: false, options: ['Me acordé de que tenía una cita con el médico.', 'Me acordé en que tenía una cita con el médico.', 'Recordé de que tenía una cita con el médico.'], answer: 0, why: '«Acordarse de eso» → de que.' },
            { sentence: 'Opino de que el proyecto necesita más tiempo.', ok: false, options: ['Opino que el proyecto necesita más tiempo.', 'Opino en que el proyecto necesita más tiempo.', 'Opino del que el proyecto necesita más tiempo.'], answer: 0, why: '«Opino eso»: sin preposición.' },
            { sentence: 'Confío en que encontraremos una solución.', ok: true, why: 'Correcta: confiar en que + indicativo futuro.' },
            { sentence: 'Todo depende en el presupuesto.', ok: false, options: ['Todo depende del presupuesto.', 'Todo depende al presupuesto.', 'Todo depende el presupuesto.'], answer: 0, why: '«Depender de» + el = del.' },
            { sentence: 'Nadie reparó en el error del título.', ok: true, why: 'Correcta: reparar en = notar.' },
            { sentence: 'Mi madre insiste de que coma más verdura.', ok: false, options: ['Mi madre insiste en que coma más verdura.', 'Mi madre insiste que coma más verdura.', 'Mi madre insiste en comer más verdura yo.'], answer: 0, why: '«Insistir en que» + subjuntivo: ella insiste, yo como.' },
          ] },
        ] },
        { title: 'Construye frases', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['El', 'equipo', 'se', 'dio', 'cuenta', 'de', 'que', 'faltaban', 'fotos'], accept: ['El equipo se dio cuenta de que faltaban fotos'] },
            { tiles: ['La', 'fecha', 'depende', 'de', 'la', 'llegada', 'de', 'las', 'imágenes'], accept: ['La fecha depende de la llegada de las imágenes'] },
            { tiles: ['Insisto', 'en', 'que', 'el', 'equipo', 'revise', 'una', 'muestra'], accept: ['Insisto en que el equipo revise una muestra'] },
            { tiles: ['De', 'qué', 'depende', 'tu', 'decisión'], accept: ['De qué depende tu decisión', 'Tu decisión de qué depende'] },
          ] },
        ] },
        { title: 'Escribe la misma idea de otra forma', blocks: [
          { kind: 'rewrite', items: [
            { prompt: 'El equipo comprendió que faltaban fotos.', instruction: 'Usa «darse cuenta».', accept: ['El equipo se dio cuenta de que faltaban fotos'] },
            { prompt: 'Insisto en revisar una muestra.', instruction: 'Cambia el agente: que la revise el equipo.', accept: ['Insisto en que el equipo revise una muestra', 'Insisto en que el equipo revise la muestra'] },
            { prompt: 'Si hay tiempo, publicamos el lunes.', instruction: 'Empieza con «Publicar el lunes depende…».', accept: ['Publicar el lunes depende de que haya tiempo', 'Publicar el lunes depende de si hay tiempo', 'Publicar el lunes depende del tiempo'] },
            { prompt: 'Recordé que era su cumpleaños.', instruction: 'Usa «acordarse».', accept: ['Me acordé de que era su cumpleaños'] },
            { prompt: 'Tengo fe en mi equipo.', instruction: 'Usa «confiar».', accept: ['Confío en mi equipo'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'La propuesta de Julia', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'La propuesta de Julia', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno anota cada verbo con preposición y quién realiza cada acción.', self: 'Escucha una vez para la idea general. En la segunda, anota cada verbo con preposición y quién hace cada acción. Puedes bajar la velocidad.' } },
          { kind: 'listen', title: 'Julia escribe al equipo', channel: 'NOTA DE VOZ · EQUIPO DEL CATÁLOGO', src: '/audio/grammar-classroom/117.mp3',
            before: 'Julia deja una nota de voz al equipo después de la reunión con Pilar. ¿Qué crees que propone para no repetir el trabajo?',
            gist: { prompt: '¿Qué propone Julia?', options: ['Organizar la revisión con un acuerdo breve de responsabilidades y plazo.', 'Retrasar el catálogo un mes.', 'Escribir un informe largo para la coordinación.'], answer: 0, why: '«Propongo escribir un acuerdo breve con las responsabilidades y el plazo».' },
            details: [
              { prompt: '¿De qué se dieron cuenta?', options: ['De que el problema no era solo el número de fotos.', 'De que faltaba la fotógrafa.', 'De que el plazo era el lunes.'], answer: 0, why: '«Nos dimos cuenta de que el problema no era solo el número de fotos».' },
              { prompt: '¿De qué depende la entrega?', options: ['De cómo repartan la revisión.', 'De la coordinadora.', 'Del número de páginas.'], answer: 0, why: '«La entrega depende de cómo repartamos la revisión».' },
              { prompt: '¿Qué tiene que confirmar cada persona?', options: ['Qué imágenes ha revisado.', 'Su horario.', 'El plazo final.'], answer: 0, why: '«Insistiré en que cada persona confirme qué imágenes ha revisado».' },
              { prompt: '¿Qué notó Julia en algunos mensajes?', options: ['Que omitían «de» delante de «que».', 'Que eran demasiado largos.', 'Que no tenían plazo.'], answer: 0, why: '«Algunos mensajes omitían de delante de que y podían sonar poco cuidados».' },
              { prompt: '«Insisto en empezar» e «insistiré en que cada persona confirme»: ¿por qué cambia la estructura?', options: ['En la segunda, la acción la hace otra persona.', 'La segunda está en futuro.', 'La primera es incorrecta.'], answer: 0, why: 'Julia empieza (infinitivo); cada persona confirma (que + subjuntivo).' },
            ],
            transcript: 'Hola, creo que ya [[nos dimos cuenta de que|blue]] el problema no era solo el número de fotos. La entrega [[depende de|blue]] cómo repartamos la revisión. Yo [[insisto en empezar|orange]] con una muestra y [[confío en que|teal]] el equipo encontrará una solución. También [[insistiré en que cada persona confirme|violet]] qué imágenes ha revisado. Así no repetimos el mismo trabajo. [[Me di cuenta de que|blue]] algunos mensajes omitían de delante de que y podían sonar poco cuidados. Propongo escribir un acuerdo breve con las responsabilidades y el plazo. No necesitamos un informe largo, pero sí saber [[de qué depende|blue]] cada paso y [[en quién podemos confiar|teal]] para completarlo. Después compartimos la versión final con la coordinación.',
            reply: { teacher: 'El alumno responde a Julia como si fuera Andrés: acepta la propuesta, dice de qué depende su parte y en qué insiste él, asignando una tarea a otra persona.', self: 'Responde a Julia como si fueras Andrés. Usa «depende de», «insisto en» con infinitivo y «insisto en que» con otra persona.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Decisiones, confianza e insistencia', coach: 'Cuenta de qué dependen tus decisiones.',
      steps: [
        { title: 'Decisiones, confianza e insistencia', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Sigue lo que cuenta el alumno. Si omite o añade una preposición, repite su frase con la forma correcta, sin interrumpir la conversación.', self: 'Responde cada pregunta en voz alta, como en una conversación. Después revisa: ¿mantuviste la preposición delante de «que»?' } },
          { kind: 'talk', cards: [
            { q: '¿De qué depende una buena decisión en tu trabajo o en tus estudios?', followUps: ['¿Y una mala decisión?', '¿Quién decide normalmente?', '¿Alguna decisión dependió de algo que no controlabas?'], phrases: ['[[Depende de|blue]] tener información…', '[[Depende de que|violet]] todos estén de acuerdo.', 'Casi todo [[depende del|blue]] presupuesto.'], hint: 'Usa «depende de» con un nombre y con «que» + subjuntivo.', example: 'En mi trabajo, una buena decisión depende de tener datos claros. Pero muchas veces depende de que el cliente responda a tiempo, y eso no lo controlo.', next: 'Hablemos de momentos de descubrimiento.' },
            { q: 'Cuéntame un momento en que te diste cuenta de un problema antes que los demás.', followUps: ['¿Cómo lo notaste?', '¿Qué hiciste?', '¿Te escucharon?'], phrases: ['[[Me di cuenta de que|blue]]…', 'Nadie [[había reparado en|teal]]…', '[[Me acordé de|blue]]…'], hint: 'Cuenta el descubrimiento con «me di cuenta de que» + indicativo.', example: 'En un viaje con amigos me di cuenta de que el vuelo salía de otro aeropuerto. Nadie había reparado en ese detalle. Por suerte, me acordé de revisar los datos del vuelo la noche anterior.', next: 'Ahora, la insistencia.', teacher: 'Si el alumno dice «me di cuenta que», aplica la prueba del «eso» con él en el momento.' },
            { q: '¿En qué insiste siempre alguien de tu familia o de tu equipo?', followUps: ['¿Tiene razón?', '¿Tú también insistes en algo?', '¿Cómo reaccionas?'], phrases: ['Mi madre [[insiste en que|violet]] yo…', 'Mi jefe [[insiste en revisar|orange]]…', 'Yo [[insisto en|teal]]…'], hint: 'Distingue: «insiste en llamar» (lo hace ella) / «insiste en que yo llame» (lo hago yo).', example: 'Mi madre insiste en que la llame todos los domingos. Y mi jefe insiste en revisar cada correo antes de enviarlo. Yo insisto en tener las reuniones por la mañana.', next: 'Ahora, la confianza.' },
            { q: '¿En quién confías cuando tienes un problema? ¿Por qué?', followUps: ['¿Siempre fue así?', '¿Alguien confió en ti cuando no lo esperabas?', '¿Es fácil para ti confiar en otras personas?'], phrases: ['[[Confío en|teal]] mi hermana porque…', '[[Confío en que|teal]] siempre me dirá la verdad.', 'Me costó [[confiar en|teal]]…'], hint: 'Pon la preposición también en la pregunta: «¿En quién confías?».', example: 'Confío en mi mejor amiga. La conozco desde la escuela y confío en que siempre me dirá la verdad, aunque no me guste.', next: 'Imagina una situación de trabajo.' },
            { q: 'Imagina que tu equipo tiene una semana para un proyecto urgente. ¿Qué propones?', followUps: ['¿De qué depende el éxito?', '¿Qué tarea asumes tú?', '¿Qué tarea das a otra persona?'], phrases: ['[[Insisto en preparar|orange]] yo…', '[[Insisto en que|violet]] Marcos…', 'Todo [[depende de que|violet]]…'], hint: 'Asigna una tarea a ti (infinitivo) y otra a otra persona (que + subjuntivo).', example: 'Insisto en preparar yo el calendario. También insisto en que Marcos hable con el cliente hoy. Todo depende de que tengamos los datos el martes.', next: 'Para terminar, una reflexión.' },
            { q: 'Piensa en una decisión importante de tu vida. ¿De qué dependió? ¿Te diste cuenta de algo después?', followUps: ['¿Alguien insistió en que la tomaras?', '¿Confiabas en el resultado?', '¿Qué harías hoy?'], phrases: ['La decisión [[dependió de|blue]]…', 'Después [[me di cuenta de que|blue]]…', 'Mi familia [[insistió en que|violet]]…'], hint: 'Combina varios verbos: depender de, darse cuenta de, insistir en, confiar en.', example: 'Estudiar en otro país dependió de una beca. Mi padre insistió en que la pidiera. Después me di cuenta de que fue la mejor decisión de mi vida.' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno pregunta al profesor «¿De qué depende…?», «¿En quién confías…?» y «¿En qué insistes…?».', self: 'Escribe tres preguntas con «¿De qué…?», «¿En quién…?» y «¿En qué…?» y házselas a alguien esta semana.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un acuerdo de trabajo', coach: 'Cada preposición en su sitio; cada tarea, con su responsable.',
      steps: [
        { title: 'Un acuerdo de trabajo', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Usen la revisión automática y después comprueben juntos que cada tarea tiene un responsable claro.', self: 'Escribe tu acuerdo y toca «Revisar mi texto». Después aplica la prueba del «eso» a cada «que».' } },
          { kind: 'write', title: 'Acuerdo para el equipo', situation: 'Tu equipo (de trabajo, de estudios o de un voluntariado) tiene un proyecto con un plazo cercano. Escribes un acuerdo breve para organizarse.', task: [
            'Explica **de qué depende** el plazo o el resultado.',
            'Cuenta algo de lo que el equipo **se dio cuenta**.',
            'Haz dos propuestas: una tarea para ti (**insisto en** + infinitivo) y otra para otra persona (**insisto en que** + subjuntivo).',
            'Cierra con una frase de **confianza** (**confío en**, **confío en que**).',
          ], starters: ['Nos dimos cuenta de que…', 'El plazo depende de…', 'Insisto en revisar…', 'También insisto en que…', 'Confío en que…'],
            words: ['depender de que', 'darse cuenta de', 'acordarse de', 'insistir en', 'confiar en', 'reparar en', 'responsable', 'plazo'],
            model: '[[Nos dimos cuenta de que|blue]] la fecha de publicación [[depende de|blue]] la llegada de las imágenes. [[Insisto en revisar|orange]] primero una muestra para evitar trabajo duplicado. También [[insisto en que cada compañero confirme|violet]] qué fotos ha comprobado. [[Confío en|teal]] el criterio del equipo y [[en que|teal]] encontraremos una forma clara de repartir las tareas. Propongo enviar un acuerdo breve con responsables y plazos antes del jueves. Así podremos saber [[de qué depende|blue]] cada paso y ajustar el plan si falta algún archivo, sin rehacer todo el catálogo.',
            minWords: 100 },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy?',
      steps: [
        { title: 'Lo esencial', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'VERBOS CON «DE»', formula: 'depender de · darse cuenta de · acordarse de', example: 'Me di cuenta de que faltaba una foto.', caption: 'La preposición se mantiene delante de «que».' },
            { tone: 'teal', label: 'VERBOS CON «EN»', formula: 'insistir en · confiar en · reparar en', example: 'Confío en que lo resolveremos.', caption: 'También en las preguntas: ¿En quién…?' },
            { tone: 'orange', label: 'MISMO SUJETO', formula: 'preposición + infinitivo', example: 'Insisto en revisar la muestra.', caption: 'Yo insisto y yo reviso.' },
            { tone: 'violet', label: 'OTRO SUJETO', formula: 'preposición + que + oración', example: 'Insisto en que revises la muestra.', caption: 'Yo insisto; tú revisas.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La prueba del «eso»', text: '«Me di cuenta **de** eso» → **de que**. «Pienso eso» → **que**. Si el verbo lleva preposición con «eso», la lleva también con «que».' },
        ] },
        { title: 'Desafío final', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: 'No me había dado cuenta ___ era tan tarde.', options: ['que', 'de que', 'en que'], answer: 1, why: '«Darse cuenta de que».' },
            { prompt: 'Supongo ___ vendrá mañana.', options: ['que', 'de que', 'en que'], answer: 0, why: '«Supongo eso» → que, sin preposición.' },
            { prompt: 'Los médicos insisten en que ___ más agua.', options: ['bebemos', 'bebamos', 'beber'], answer: 1, why: 'Piden algo a otras personas: subjuntivo.' },
            { prompt: '¿___ depende el resultado?', options: ['Qué', 'De qué', 'En qué'], answer: 1, why: 'Depender de → ¿De qué depende?' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Me doy cuenta de que falta algo; insisto en que lo revisemos». ¿Por qué se mantiene la preposición? ¿Por qué «revisemos» y no «revisamos»? Pide al alumno que cambie la frase para que la revisión la haga él solo.' },
        ] },
      ],
    },
  ],
};
