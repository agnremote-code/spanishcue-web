import type { LiveLesson } from '../types';

/**
 * Lesson 145 · A2 · Imperativo de tú (afirmativo y negativo).
 * Marta helps Inés, a new colleague, prepare a video call in a new room:
 * instructions, requests and prohibitions, always with a reason and courtesy.
 */
export const lesson: LiveLesson = {
  id: 145,
  level: 'A2',
  title: 'Imperativo',
  subtitle: 'Dar instrucciones, pedir cosas y decir lo que alguien no debe hacer, con el tono adecuado.',
  legend: [
    { tone: 'blue', label: 'Afirmativo · haz esto' },
    { tone: 'orange', label: 'Negativo · no hagas esto' },
    { tone: 'teal', label: 'Cortesía · por favor, ¿puedes…?' },
  ],
  optionNotes: {
    'No llega': '«Llega» es el afirmativo. En negativo, la vocal cambia: no lleg**ues**.',
    'No llegar': 'El infinitivo no sirve para una instrucción a una persona: no llegues.',
    Abres: '«Abres» es presente: describe, no da una instrucción. Imperativo: abre.',
    Abrir: 'El infinitivo se ve en carteles, pero para hablar con alguien: abre.',
    'No toca': '«Toca» es el afirmativo. En negativo: no to**ques**.',
    'No tocas': '«No tocas» es presente: describe. Para prohibir: no toques.',
    'Vienes mañana.': '«Vienes» es presente. El imperativo de venir es irregular: ven.',
    'Viene mañana.': '«Viene» es para él, ella o usted. Con tú: ven.',
    'No abre': '«Abre» es afirmativo. En negativo, -ir cambia a -as: no abras.',
    'No abres': '«No abres» es presente. Para prohibir: no abras.',
    'No cierra': 'En negativo, -ar cambia a -es: no cierres.',
    'No envías': '«No envías» es presente. Para prohibir: no envíes.',
    Hace: '«Hace» es presente (él, ella). El imperativo de hacer es irregular: haz.',
    Haces: '«Haces» es presente. El imperativo de hacer es irregular: haz.',
    Pone: '«Pone» es presente (él, ella). El imperativo de poner es irregular: pon.',
    Dices: '«Dices» es presente. El imperativo de decir es irregular: di.',
    'No haces': '«No haces» es presente. Negativo de hacer: no hagas (de «hago»).',
    'No sales': '«No sales» es presente. Negativo de salir: no salgas (de «salgo»).',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'El imperativo de tú', coach: 'Para pedir, explicar y avisar.',
      steps: [
        { title: 'Para qué sirve', blocks: [
          { kind: 'lead', text: 'Inés usa una sala nueva para una videollamada. Marta le escribe: «**Abre** la puerta azul y **entra** en la sala pequeña». Con el **imperativo** damos instrucciones, pedimos cosas y avisamos.', en: 'We use the imperative to give instructions and make requests.' },
          { kind: 'guide', text: { teacher: 'Lean los ejemplos y pregunta: «¿Quién debe hacer la acción?». Pide al alumno una instrucción para entrar en su casa.', self: 'Lee los ejemplos. Fíjate: siempre hay una persona (tú) que debe hacer algo.' } },
          { kind: 'concept', tone: 'blue', label: 'AFIRMATIVO REGULAR', question: '¿Qué hago?', en: 'affirmative commands (tú)', formula: ['presente de tú − s', 'hablas → habla · comes → come · abres → abre'],
            meaning: 'Para la mayoría de los verbos, el imperativo afirmativo de tú es **la forma de tú del presente sin la -s**.',
            examples: [
              { es: '[[Abre|blue]] la puerta azul.', en: 'Open the blue door.' },
              { es: '[[Revisa|blue]] el sonido antes de llamar.', en: 'Check the sound before calling.' },
              { es: '[[Escribe|blue]] un mensaje al grupo.', en: 'Write a message to the group.' },
              { es: '[[Enciende|blue]] la computadora.', en: 'Turn on the computer.' },
            ],
            note: 'Si el presente cambia la vocal (enc**ie**ndes, c**ie**rras), el imperativo también: enc**ie**nde, c**ie**rra.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Da una instrucción: ___ la puerta.', options: ['Abre', 'Abres', 'Abrir'], answer: 0, why: 'Abres − s = abre.' },
            { prompt: '___ despacio, por favor.', options: ['Habla', 'Hablas', 'Hablar'], answer: 0, why: 'Hablas − s = habla.' },
          ] },
        ] },
        { title: 'Ocho afirmativos irregulares', mascot: '/brand/mascot/studying.webp', coach: 'Cortos y muy frecuentes.', blocks: [
          { kind: 'table', title: 'Imperativo afirmativo irregular (tú)', head: ['Infinitivo', 'Imperativo', 'Ejemplo'], rows: [
            ['venir', '**ven**', '[[Ven|blue]] conmigo, por favor.'],
            ['tener', '**ten**', '[[Ten|blue]] cuidado con el cable.'],
            ['poner', '**pon**', '[[Pon|blue]] el documento en la carpeta.'],
            ['salir', '**sal**', '[[Sal|blue]] de la reunión a las doce.'],
            ['hacer', '**haz**', '[[Haz|blue]] una lista de preguntas.'],
            ['decir', '**di**', '[[Di|blue]] tu nombre al empezar.'],
            ['ir', '**ve**', '[[Ve|blue]] a la sala pequeña.'],
            ['ser', '**sé**', '[[Sé|blue]] paciente con la cámara.'],
          ], note: 'Ocho verbos, ocho formas cortas. Apréndelas de memoria: ven, ten, pon, sal, haz, di, ve, sé.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Organiza una visita: ___ mañana a las diez.', options: ['Ven', 'Vienes', 'Viene'], answer: 0, why: 'Venir es irregular: ven.' },
            { prompt: '___ una copia del archivo, por favor.', options: ['Haz', 'Hace', 'Haces'], answer: 0, why: 'Hacer es irregular: haz.' },
          ] },
        ] },
        { title: 'El negativo', mascot: '/brand/mascot/speaking.webp', coach: 'Con «no», la vocal cambia.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'NEGATIVO', question: '¿Qué no hago?', en: 'negative commands (tú)', formula: ['no + -ar → -es', 'no + -er / -ir → -as'],
            meaning: 'Para prohibir o avisar, usamos **no** y **cambiamos la vocal**: los verbos en -ar toman **-es**; los verbos en -er e -ir toman **-as**.',
            examples: [
              { es: '[[No cierres|orange]] la ventana del programa.', en: 'Don’t close the program window.' },
              { es: '[[No uses|orange]] la sala grande.', en: 'Don’t use the big room.' },
              { es: '[[No abras|orange]] la puerta.', en: 'Don’t open the door.' },
              { es: '[[No comas|orange]] en la sala, por favor.', en: 'Don’t eat in the room, please.' },
            ] },
          { kind: 'table', title: 'Afirmativo y negativo', head: ['Verbo', 'Afirmativo', 'Negativo'], rows: [
            ['hablar', '[[habla|blue]]', '[[no hables|orange]]'],
            ['comer', '[[come|blue]]', '[[no comas|orange]]'],
            ['abrir', '[[abre|blue]]', '[[no abras|orange]]'],
            ['cerrar', '[[cierra|blue]]', '[[no cierres|orange]]'],
            ['hacer (yo hago)', '[[haz|blue]]', '[[no hagas|orange]]'],
            ['tener (yo tengo)', '[[ten|blue]]', '[[no tengas|orange]]'],
            ['salir (yo salgo)', '[[sal|blue]]', '[[no salgas|orange]]'],
            ['ir', '[[ve|blue]]', '[[no vayas|orange]]'],
          ], note: 'Para el negativo, parte de la forma de **yo** del presente: hag**o** → no hag**as**, teng**o** → no teng**as**. Ir es especial: no vayas.' },
          { kind: 'tip', icon: '✏', title: 'Cambios de letra', text: 'Para mantener el sonido: to**c**ar → no to**qu**es · lle**g**ar → no lle**gu**es · empe**z**ar → no empie**c**es.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Mandato negativo: ___ tarde.', options: ['No llegues', 'No llega', 'No llegar'], answer: 0, why: 'Llegar (-ar) → no llegues, con u.' },
            { prompt: 'No quieres que toque el cable: ___ el cable.', options: ['No toca', 'No toques', 'No tocas'], answer: 1, why: 'Tocar (-ar) → no toques.' },
            { prompt: 'Hay una sorpresa en la caja: ___ la caja todavía.', options: ['No abre', 'No abras', 'No abres'], answer: 1, why: 'Abrir (-ir) → no abras.' },
          ] },
        ] },
        { title: 'Cortesía y pronombres', mascot: '/autoestudio/mascot/noting.webp', coach: 'El tono también cuenta.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'CORTESÍA', question: '¿Cómo lo pido bien?', en: 'polite requests', formula: ['imperativo + por favor', '¿Puedes + infinitivo?'],
            meaning: 'El imperativo no es maleducado: en español es normal entre amigos y compañeros. Con **por favor**, una razón o una pregunta, suena más amable.',
            examples: [
              { es: 'Guarda tus notas, [[por favor|teal]].', en: 'Save your notes, please.' },
              { es: '[[¿Puedes cerrar|teal]] la ventana?', en: 'Can you close the window?' },
              { es: 'No uses la sala grande, [[porque hay una reunión|teal]].', en: 'Don’t use the big room, because there’s a meeting.' },
            ] },
          { kind: 'compare', title: 'Dos tonos', columns: [
            { tone: 'blue', label: 'DIRECTO', sentence: '[[Cierra|blue]] la puerta.', idea: 'Con alguien de confianza o en una instrucción clara.', en: 'Close the door.' },
            { tone: 'teal', label: 'MÁS SUAVE', sentence: '[[¿Puedes cerrar|teal]] la puerta, [[por favor|teal]]?', idea: 'Con alguien nuevo o cuando pides un favor.', en: 'Can you close the door, please?' },
          ] },
          { kind: 'tip', icon: '🧩', title: 'Para reconocer: pronombres', text: 'En afirmativo, el pronombre va **pegado** al verbo: **dime**, **ábrelo**, **guárdalas**. En negativo, va **antes**: **no me digas**, **no lo abras**, **no las borres**.', en: 'Pronouns attach to affirmative commands and go before negative ones.' },
          { kind: 'tip', icon: '👥', title: 'Para reconocer: otras personas', text: 'Con **usted**: hable / no hable. Con **ustedes**: hablen / no hablen. Con **nosotros**: hablemos. En España, con **vosotros**: hablad / no habléis. Hoy practicamos solo **tú**.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '¿Qué petición suena más suave para un compañero nuevo?', options: ['¿Puedes guardar las notas, por favor?', 'Guarda las notas.'], answer: 0, why: 'La pregunta con «¿puedes…?» y «por favor» suaviza la petición.' },
            { prompt: 'Abre el documento, por favor. ___', options: ['No lo borres.', 'No borres lo.', 'Lo no borres.'], answer: 0, why: 'En negativo, el pronombre va antes del verbo: no lo borres.' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/seated.webp', coach: '¿Sí o no? ¿Con quién hablas?', blocks: [
          { kind: 'decide', title: 'Vas a dar una instrucción a alguien con tú. Responde', steps: [
            { q: '¿Quieres que la persona haga la acción?', yes: 'next', no: 'Usa el **negativo**: **no** + -es (verbos en -ar) o -as (en -er / -ir): «[[No cierres|orange]] la ventana».' },
            { q: '¿Es uno de los ocho irregulares (venir, tener, poner, salir, hacer, decir, ir, ser)?', yes: 'Usa la forma corta: «[[Ven|blue]] conmigo» · «[[Haz|blue]] una lista».', no: 'Usa el presente de tú sin -s: «[[Abre|blue]] la puerta». Para un tono más suave, añade «[[por favor|teal]]».' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'El truco', text: 'Afirmativo de -ar termina en **-a**; negativo, en **-es**. Afirmativo de -er / -ir termina en **-e**; negativo, en **-as**. ¡Las vocales se cruzan!', en: 'habla / no hables · come / no comas' },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Mira la vocal del final.', blocks: [
          { kind: 'guide', text: { teacher: 'Pide al alumno que encuentre el error antes de mostrar la corrección.', self: 'Lee cada frase, busca el error y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'No cierra la ventana.', right: 'No cierres la ventana.', why: 'En negativo, -ar cambia a -es: no cierres.' },
            { wrong: 'No abres la puerta.', right: 'No abras la puerta.', why: '«No abres» es presente. Para prohibir: no abras.' },
            { wrong: 'Hace una lista, por favor.', right: 'Haz una lista, por favor.', why: 'Hacer es irregular: haz.' },
            { wrong: 'Vienes conmigo.', right: 'Ven conmigo.', why: '«Vienes» describe. Para invitar o pedir: ven.' },
            { wrong: 'No haces ruido.', right: 'No hagas ruido.', why: 'Negativo de hacer: de «hago» → no hagas.' },
            { wrong: 'No borres lo.', right: 'No lo borres.', why: 'En negativo, el pronombre va antes del verbo.' },
          ] },
          { kind: 'teacher', text: 'Pide al alumno tres instrucciones para usar su cocina: dos afirmativas y una negativa con una razón.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El imperativo en situaciones reales', coach: 'Toca las expresiones marcadas.',
      steps: [
        { title: 'La sala nueva', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada expresión y explica si es una instrucción, una prohibición o una forma de cortesía.', self: 'Lee el diálogo. Después toca cada expresión marcada para descubrir por qué se usó.' } },
          { kind: 'explore', title: 'Antes de la videollamada', setting: 'Inés es nueva en la oficina. Llama a Marta porque tiene una videollamada en una sala que no conoce.', lines: [
            { who: 'Inés', text: 'Hola, Marta. Ya estoy en el pasillo. ¿Cuál es la sala?' },
            { who: 'Marta', text: '[[Abre|blue]] la puerta azul y [[entra|blue]] en la sala pequeña.' },
            { who: 'Inés', text: 'Listo. ¿Y ahora?' },
            { who: 'Marta', text: '[[Enciende|blue]] la computadora y [[conecta|blue]] los auriculares.' },
            { who: 'Inés', text: '¿Uso la sala grande para la llamada? Hay más luz.' },
            { who: 'Marta', text: 'No, [[no uses|orange]] la sala grande, [[porque hay una reunión|teal]].' },
            { who: 'Inés', text: 'De acuerdo. El programa ya está abierto. ¿Lo cierro?' },
            { who: 'Marta', text: '¡[[No lo cierres|orange]]! Allí están los documentos.' },
            { who: 'Inés', text: 'Perfecto. ¿Y si tengo una pregunta durante la llamada?' },
            { who: 'Marta', text: '[[Escribe|blue]] un mensaje al grupo. Y [[ten|blue]] paciencia: a veces la cámara tarda.' },
            { who: 'Inés', text: 'Gracias. ¿Algo más?' },
            { who: 'Marta', text: 'Al terminar, [[guarda|blue]] tus notas y [[apaga|blue]] la luz, [[por favor|teal]].' },
          ], notes: {
            'Abre': 'Una **instrucción**: abres − s = abre.',
            'entra': 'El segundo paso: entras − s = entra.',
            'Enciende': 'Encender cambia la vocal en el presente (enciendes), y también en el imperativo: enciende.',
            'conecta': 'Otro paso de la instrucción: conectas − s = conecta.',
            'no uses': 'Una **prohibición**: usar (-ar) → no uses.',
            'porque hay una reunión': 'Marta da una **razón**. Así la prohibición suena amable y se entiende.',
            'No lo cierres': 'Prohibición con pronombre: «lo» va **antes** del verbo en negativo. Cerrar → no cierres.',
            'Escribe': 'Un consejo para un problema posible: escribes − s = escribe.',
            'ten': 'Tener es irregular: **ten**. Es un consejo, no una orden.',
            'guarda': 'Una instrucción para el final: guardas − s = guarda.',
            'apaga': 'Otra instrucción: apagas − s = apaga.',
            'por favor': '**Por favor** hace la petición más amable. Marta pide un favor, no da una orden.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Por qué Inés no debe usar la sala grande?', options: ['Porque hay una reunión.', 'Porque no tiene luz.', 'Porque está cerrada.'], answer: 0, why: '«No uses la sala grande, porque hay una reunión».' },
            { prompt: '¿Por qué no debe cerrar el programa?', options: ['Porque allí están los documentos.', 'Porque la cámara tarda.', 'Porque Marta lo necesita.'], answer: 0, why: '«¡No lo cierres! Allí están los documentos».' },
            { prompt: '¿Qué debe hacer si tiene una pregunta?', options: ['Escribir un mensaje al grupo.', 'Llamar a Marta.', 'Salir de la sala.'], answer: 0, why: '«Escribe un mensaje al grupo».' },
          ] },
        ] },
        { title: '¿Haz o no hagas?', blocks: [
          { kind: 'classify', title: 'Clasifica las expresiones', categories: [
            { id: 'afirmativo', label: 'Afirmativo', tone: 'blue' },
            { id: 'negativo', label: 'Negativo', tone: 'orange' },
          ], items: [
            { text: 'abre', answer: 'afirmativo', why: 'Abres − s: afirmativo.' },
            { text: 'no uses', answer: 'negativo', why: 'No + -es: negativo de usar.' },
            { text: 'ten', answer: 'afirmativo', why: 'Irregular afirmativo de tener.' },
            { text: 'no lo cierres', answer: 'negativo', why: 'No + pronombre + cierres.' },
            { text: 'guarda', answer: 'afirmativo', why: 'Guardas − s: afirmativo.' },
            { text: 'no comas', answer: 'negativo', why: 'Comer (-er) → no comas.' },
            { text: 'haz', answer: 'afirmativo', why: 'Irregular afirmativo de hacer.' },
            { text: 'no salgas', answer: 'negativo', why: 'De «salgo» → no salgas.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Primero decide: ¿sí o no?',
      steps: [
        { title: 'Elige según el contexto', blocks: [
          { kind: 'choice', items: [
            { context: 'Tu amigo siempre llega tarde a la reunión.', prompt: 'Mañana ___ tarde, por favor.', options: ['no llegues', 'no llegas', 'no llega'], answer: 0, why: 'Una petición negativa: no llegues.' },
            { context: 'Explicas cómo entrar a la sala.', prompt: '___ la puerta y entra.', options: ['Abre', 'Abres', 'Abrir'], answer: 0, why: 'Una instrucción: abre.' },
            { context: 'Invitas a tu compañera a comer.', prompt: '___ a comer con nosotros.', options: ['Ven', 'Vienes', 'Viene'], answer: 0, why: 'Venir es irregular: ven.' },
            { context: 'Hay un cable peligroso.', prompt: '___ ese cable.', options: ['No toques', 'No toca', 'No tocas'], answer: 0, why: 'Una prohibición: no toques.' },
            { context: 'Tu compañero va a enviar un archivo viejo.', prompt: '___ ese archivo: es el viejo.', options: ['No envíes', 'No envías', 'No envía'], answer: 0, why: 'Enviar (-ar) → no envíes.' },
            { context: 'Pides a tu hermano que prepare la mesa.', prompt: '___ los platos en la mesa, por favor.', options: ['Pon', 'Pone', 'Pones'], answer: 0, why: 'Poner es irregular: pon.' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '«Abres la puerta» y «Abre la puerta». ¿Cuál es una instrucción?', options: ['Abre la puerta.', 'Abres la puerta.'], answer: 0, why: '«Abres» describe (presente). «Abre» pide la acción.' },
            { prompt: '«No borres los comentarios.» ¿Qué significa?', options: ['Deja los comentarios: los necesitamos.', 'Borra los comentarios.', 'Ya borraste los comentarios.'], answer: 0, why: 'Es una prohibición: no los quites.' },
            { prompt: '¿Qué frase es más amable para una persona nueva?', options: ['¿Puedes revisar el sonido, por favor?', 'Revisa el sonido.'], answer: 0, why: 'La pregunta con «por favor» suaviza la petición.' },
            { prompt: '«Ve a la sala» y «Ven a la sala». ¿Qué cambia?', options: ['Ve: ir allí. Ven: venir aquí, donde estoy yo.', 'Nada, es lo mismo.', 'Ve es negativo.'], answer: 0, why: '«Ve» es el imperativo de ir; «ven», de venir.' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'No cierras la ventana, por favor.', ok: false, options: ['No cierres la ventana, por favor.', 'No cierra la ventana, por favor.', 'No cerrar la ventana, por favor.'], answer: 0, why: 'Cerrar (-ar) → no cierres.' },
            { sentence: 'Haz una copia del documento.', ok: true, why: 'Correcta: hacer → haz.' },
            { sentence: 'Sales de la reunión a las doce.', ok: false, options: ['Sal de la reunión a las doce.', 'Sale de la reunión a las doce.', 'Salga tú de la reunión a las doce.'], answer: 0, why: 'Para dar la instrucción a tú: sal.' },
            { sentence: 'No comas en la sala de reuniones.', ok: true, why: 'Correcta: comer (-er) → no comas.' },
            { sentence: 'No haces ruido, que la niña duerme.', ok: false, options: ['No hagas ruido, que la niña duerme.', 'No hace ruido, que la niña duerme.', 'No haz ruido, que la niña duerme.'], answer: 0, why: 'De «hago» → no hagas.' },
            { sentence: 'Dime la verdad.', ok: true, why: 'Correcta: decir → di, con el pronombre pegado: dime.' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'Instrucciones para la llamada', lines: [
            { who: 'Inés', text: 'Marta, ¿qué hago primero?' },
            { who: 'Marta', text: '___ el documento y comprueba la cámara.', options: ['Abre', 'Abres', 'No abras'], answer: 0, why: 'Una instrucción: abre.' },
            { who: 'Inés', text: '¿Envío el enlace de ayer?' },
            { who: 'Marta', text: 'No, ___ el enlace viejo. El nuevo está en mi mensaje.', options: ['no envíes', 'no envías', 'envía'], answer: 0, why: 'Una prohibición: no envíes.' },
            { who: 'Inés', text: '¿Algo más?' },
            { who: 'Marta', text: '___ despacio al principio: nuestra compañera está aprendiendo español.', options: ['Habla', 'Hablas', 'No hables'], answer: 0, why: 'Un consejo afirmativo: habla.' },
            { who: 'Inés', text: '¿Y los comentarios del documento?' },
            { who: 'Marta', text: '___, por favor. Los necesitamos.', options: ['No los borres', 'No borres los', 'Los no borres'], answer: 0, why: 'En negativo, el pronombre va antes: no los borres.' },
          ] },
        ] },
        { title: 'Construye y transforma', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['Revisa', 'antes de llamar', 'el sonido'], accept: ['Revisa el sonido antes de llamar', 'Antes de llamar revisa el sonido'], en: 'Check the sound before calling.' },
            { tiles: ['uses', 'No', 'la sala grande'], accept: ['No uses la sala grande'], en: 'Don’t use the big room.' },
            { tiles: ['tus notas', 'Guarda', 'por favor'], accept: ['Guarda tus notas por favor', 'Por favor guarda tus notas'], en: 'Save your notes, please.' },
          ] },
          { kind: 'rewrite', title: 'Cambia la instrucción', items: [
            { prompt: 'Abre la puerta.', instruction: 'Escribe la instrucción en negativo.', accept: ['No abras la puerta'] },
            { prompt: 'Llama a Marta.', instruction: 'Escribe la instrucción en negativo.', accept: ['No llames a Marta'] },
            { prompt: 'No salgas temprano.', instruction: 'Escribe la instrucción en afirmativo.', accept: ['Sal temprano'] },
            { prompt: 'Esperar aquí. No abrir la ventana.', instruction: 'Escribe las dos instrucciones con tú.', accept: ['Espera aquí. No abras la ventana', 'Espera aquí y no abras la ventana', 'Espera aquí, no abras la ventana'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Antes de conectar', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'Antes de conectar', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha con la idea general. En la segunda, el alumno hace dos listas: lo que Marta debe hacer y lo que no debe hacer.', self: 'Escucha una vez para la idea general. En la segunda escucha, anota qué debe hacer Marta y qué no debe hacer.' } },
          { kind: 'listen', title: 'Antes de conectar', channel: 'NOTA DE VOZ · PARA MARTA', src: '/audio/grammar-classroom/145.mp3',
            before: 'Una compañera le deja instrucciones a Marta para una videollamada. ¿Qué crees que le pide?',
            gist: { prompt: '¿Para qué es el mensaje?', options: ['Para dar instrucciones antes de una videollamada.', 'Para cancelar la reunión.', 'Para pedir un documento nuevo.'], answer: 0, why: 'Le dice qué sala usar, qué revisar y qué no hacer en la llamada de hoy.' },
            details: [
              { prompt: '¿Qué sala debe usar Marta?', options: ['La sala pequeña.', 'La sala grande.', 'La sala azul.'], answer: 0, why: '«Usa la sala pequeña, por favor».' },
              { prompt: '¿Qué enlace no debe enviar?', options: ['El enlace viejo.', 'El enlace del último mensaje.', 'El enlace de la carpeta.'], answer: 0, why: '«No envíes el enlace viejo; el nuevo está en mi último mensaje».' },
              { prompt: '¿Por qué debe hablar despacio al principio?', options: ['Porque una compañera todavía aprende español.', 'Porque la cámara no funciona.', 'Porque hay mucho ruido.'], answer: 0, why: '«Habla despacio al principio porque nuestra compañera todavía aprende español».' },
              { prompt: '¿Qué debe hacer si no escucha bien?', options: ['Revisar los auriculares.', 'Cambiar de sala.', 'Escribir al grupo.'], answer: 0, why: '«Si no escuchas bien, revisa los auriculares».' },
              { prompt: '¿Por qué no debe borrar los comentarios?', options: ['Porque los necesitan para la próxima clase.', 'Porque son de la jefa.', 'Porque no se pueden borrar.'], answer: 0, why: '«No borres los comentarios: los necesitamos para preparar la próxima clase».' },
            ],
            transcript: 'Hola, Marta. Para la llamada de hoy, [[usa|blue]] la sala pequeña, [[por favor|teal]]. Primero [[abre|blue]] el documento y [[comprueba|blue]] la cámara. [[No envíes|orange]] el enlace viejo; el nuevo está en mi último mensaje. [[Habla|blue]] despacio al principio porque nuestra compañera todavía aprende español. Si no escuchas bien, [[revisa|blue]] los auriculares. Después de la reunión, [[guarda|blue]] las notas en la carpeta del equipo. [[No borres|orange]] los comentarios: los necesitamos para preparar la próxima clase.',
            reply: { teacher: 'El alumno responde como Marta: confirma dos instrucciones y pide una aclaración con una pregunta amable.', self: 'Responde como Marta en voz alta: confirma dos instrucciones («De acuerdo, uso la sala pequeña…») y haz una pregunta con «¿puedes…?».' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Explica cómo se hace', coach: 'Da instrucciones claras.',
      steps: [
        { title: 'Explica cómo se hace', blocks: [
          { kind: 'guide', text: { teacher: 'Sigue las instrucciones del alumno de verdad (o haz como que las sigues) y equivócate a propósito para que te corrija.', self: 'Responde en voz alta, como si hablaras con un amigo. Si puedes, haz la acción mientras das las instrucciones.' } },
          { kind: 'talk', cards: [
            { q: 'Un amigo va a hacer su primera videollamada de trabajo. ¿Qué tiene que hacer?', followUps: ['¿Qué debe revisar antes?', '¿Qué no debe hacer?', '¿Qué hace si no funciona el sonido?'], phrases: ['Primero [[revisa|blue]]…', '[[No olvides|orange]]…', 'Si no funciona, [[cierra|blue]]…'], hint: 'Ordena los pasos con primero, después y al final.', example: 'Primero revisa la cámara y el sonido. Después abre el enlace cinco minutos antes. No olvides los auriculares. Si no funciona, cierra el programa y entra otra vez.', next: 'Ahora, algo que sabes hacer muy bien.' },
            { q: 'Explica una receta fácil que sabes preparar.', followUps: ['¿Qué ingredientes necesito?', '¿Qué no debo hacer?', '¿Cuánto tiempo tarda?'], phrases: ['[[Pon|blue]] agua en…', '[[Corta|blue]]…', '[[No pongas|orange]] mucha sal.'], hint: 'Usa verbos de cocina: pon, corta, mezcla, añade, espera.', example: 'Pon agua a hervir. Corta dos tomates y una cebolla. Mezcla todo con aceite. No pongas mucha sal. Espera cinco minutos y come.', next: 'Hablemos de tu ciudad.', teacher: 'Haz como que cocinas y equivócate: «¿Pongo mucha sal?». El alumno responde con un negativo.' },
            { q: 'Un turista llega a tu ciudad por primera vez. ¿Qué consejos le das?', followUps: ['¿Qué debe visitar?', '¿Qué no debe hacer?', '¿Dónde debe comer?'], phrases: ['[[Visita|blue]]…', '[[No tomes|orange]] taxis en…', '[[Prueba|blue]] la comida de…'], hint: 'Mezcla consejos afirmativos y negativos, con una razón: «No vayas en agosto, porque hace mucho calor».', example: 'Visita el centro histórico por la mañana. Prueba las empanadas del mercado. No vayas al centro a mediodía, porque hay mucho tráfico.', next: 'Ahora, reglas de casa.' },
            { q: 'Una persona va a cuidar tu casa una semana. ¿Qué le pides?', followUps: ['¿Qué debe hacer cada día?', '¿Qué no debe tocar?', '¿Qué hace si hay un problema?'], phrases: ['[[Riega|blue]] las plantas…', '[[No abras|orange]]…', '[[Llámame|blue]] si…'], hint: 'Para pedir un favor, añade «por favor» y «gracias».', example: 'Riega las plantas cada dos días, por favor. Ponle comida al gato por la mañana. No abras la ventana del baño. Si hay un problema, llámame.', next: 'Hablemos de aprender español.' },
            { q: 'Un amigo empieza a estudiar español. ¿Qué consejos le das?', followUps: ['¿Qué debe hacer cada día?', '¿Qué error no debe cometer?', '¿Qué recurso le recomiendas?'], phrases: ['[[Escucha|blue]] pódcast…', '[[No tengas|orange]] miedo de…', '[[Habla|blue]] con…'], hint: 'Da tres consejos afirmativos y dos negativos.', example: 'Escucha música en español todos los días. Habla con nativos aunque cometas errores. No tengas miedo. No traduzcas todo palabra por palabra.', next: 'Para terminar, cambia el tono.' },
            { q: 'Tu compañero de trabajo pone la música muy alta. ¿Cómo se lo pides de forma directa y de forma amable?', followUps: ['¿Cuál usas con un amigo?', '¿Cuál usas con un compañero nuevo?', '¿Cómo das una razón?'], phrases: ['[[Baja|blue]] la música.', '[[¿Puedes bajar|teal]] la música, [[por favor|teal]]?', '[[No pongas|orange]] la música tan alta, porque…'], hint: 'Compara: imperativo directo; pregunta con «¿puedes…?»; negativo con una razón.', example: 'Directo: «Baja la música». Amable: «¿Puedes bajar la música, por favor? Tengo una llamada». Con razón: «No pongas la música tan alta, porque no me puedo concentrar».' },
          ], swap: { teacher: 'Al final, cambien los papeles: tú das tres instrucciones con errores y el alumno las corrige.', self: 'Escribe cinco instrucciones para una tarea que haces cada día (tres afirmativas y dos negativas) y léelas en voz alta.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Instrucciones para una videollamada', coach: 'Claro, ordenado y amable.',
      steps: [
        { title: 'Instrucciones para una videollamada', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Revisen juntos las vocales del afirmativo y del negativo.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Mira bien el final de cada verbo: ¿afirmativo o negativo?' } },
          { kind: 'write', title: 'Un mensaje para un compañero nuevo', situation: 'Un compañero nuevo va a preparar una reunión por videollamada mañana. Escríbele las instrucciones.', task: [
            'Da **tres instrucciones** en orden: qué hacer antes, durante y después.',
            'Añade **una prohibición** con su razón («No… porque…»).',
            'Usa **por favor** al menos una vez.',
            'Termina con una frase amable.',
          ], starters: ['Hola, …:', 'Primero abre…', 'Después revisa…', 'No uses… porque…', 'Al terminar, guarda…', 'Si tienes dudas, escríbeme.'],
            words: ['abre', 'revisa', 'usa', 'entra', 'guarda', 'apaga', 'no envíes', 'no borres', 'por favor', 'porque'],
            model: '[[Abre|blue]] el documento y [[revisa|blue]] la cámara antes de llamar. [[Usa|blue]] los auriculares, [[por favor|teal]]. [[No envíes|orange]] el enlace viejo, porque no funciona. [[Entra|blue]] con el enlace del último mensaje. Después de la reunión, [[guarda|blue]] tus notas en la carpeta del equipo y [[apaga|blue]] la computadora. [[No borres|orange]] los comentarios de tus compañeros.',
            minWords: 40 },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy?',
      steps: [
        { title: 'Lo esencial', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'AFIRMATIVO', formula: 'presente de tú − s', example: 'Abre la puerta.', caption: 'Irregulares: ven, ten, pon, sal, haz, di, ve, sé.', en: 'do it' },
            { tone: 'orange', label: 'NEGATIVO', formula: 'no + -es (-ar) / -as (-er, -ir)', example: 'No cierres la ventana.', caption: 'Parte de la forma de yo: no hagas.', en: 'don’t do it' },
            { tone: 'teal', label: 'CORTESÍA', formula: 'por favor · ¿puedes…? · porque…', example: 'Guarda tus notas, por favor.', caption: 'Suaviza la petición.', en: 'politeness' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Las vocales se cruzan', text: 'habl**a** → no habl**es** · com**e** → no com**as** · abr**e** → no abr**as**. Pronombres: **ábrelo** / **no lo abras**.' },
        ] },
        { title: 'Desafío final', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: '___ la luz al salir, por favor.', options: ['Apaga', 'Apagas', 'No apagues'], answer: 0, why: 'Una petición afirmativa: apaga.' },
            { prompt: '___ en la sala grande: hay una reunión.', options: ['No entres', 'No entras', 'No entra'], answer: 0, why: 'Una prohibición: no entres.' },
            { prompt: '___ la verdad, por favor.', options: ['Di', 'Dices', 'Dice'], answer: 0, why: 'Decir es irregular: di.' },
            { prompt: 'Es tarde: ___ de casa ahora.', options: ['no salgas', 'no sales', 'no sal'], answer: 0, why: 'De «salgo» → no salgas.' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Pide abrir un documento y prohíbe borrarlo». Respuesta: «Abre el documento, por favor. No lo borres».' },
        ] },
      ],
    },
  ],
};
