import type { LiveLesson } from '../types';

/**
 * Lesson 382 · A2 · Construcciones con infinitivo, gerundio y participio (course unit G082).
 * One scene runs through the class: Marina Robles has a small neighbourhood
 * bookshop, La Hoja, closed for two weeks of renovation. It is Friday, seven in
 * the evening; tomorrow she reopens. Her friend Gabriel comes to help; Rubén,
 * the painter, is still painting the back wall. On Saturday the first customers
 * arrive (señora Luna, usted). In the voice message Marina (Colombian voice, tú)
 * tells Gabriel how the reopening went.
 * Content: the three non-finite forms in frequent A2 constructions.
 * INFINITIVO: after a conjugated verb (prefiero abrir), after a preposition
 * (antes de / después de / para / sin + inf.), al + infinitivo (al entrar),
 * the infinitive as subject (Leer en papel es un placer), and the periphrases
 * empezar a, acabar de, volver a + inf. (with ir a, tener que from 039/040).
 * GERUNDIO: seguir + gerundio (sigue pintando), llevar + tiempo + gerundio
 * (class 055), estar + gerundio (class 041), and the gerund of manner (llegó
 * corriendo, aprendió trabajando). PARTICIPIO: estar + participio for a state
 * or result, agreeing like an adjective (la puerta está cerrada, las luces
 * están encendidas), contrasted with haber + participio (always -o, classes
 * 045/046) and with estar + gerundio; posture: está sentado (not *sentando).
 * Anchor: Prefiero salir; sigo leyendo; está cerrado. Mistakes: *antes de
 * saliendo, *Leyendo es bueno (English -ing), *sigo a leer, *acabo de llegué,
 * *la tienda está cerrado, *hemos abiertas. Ampliación: dejar de + inf., seguir
 * sin + inf., ponerse a + inf. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 382,
  level: 'A2',
  title: 'Construcciones con infinitivo, gerundio y participio',
  subtitle: 'Decir qué acabas de hacer, qué sigue en marcha y cómo está algo ahora con infinitivo, gerundio y participio.',
  legend: [
    { tone: 'blue', label: 'INFINITIVO · el nombre de la acción (abrir, salir: acabo de abrir, antes de salir)' },
    { tone: 'teal', label: 'GERUNDIO · la acción en marcha o cómo (pintando: sigue pintando, llegó corriendo)' },
    { tone: 'orange', label: 'PARTICIPIO · el resultado, un estado (cerrado/a: la puerta está cerrada)' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Tres formas sin persona', coach: 'Abrir, abriendo, abierto. Three forms, three jobs.',
      steps: [
        { title: 'La librería vuelve a abrir · The bookshop reopens', blocks: [
          { kind: 'lead', text: 'Marina Robles tiene una pequeña librería en su barrio: La Hoja. Lleva dos semanas cerrada por obras y mañana, sábado, abre otra vez. Es viernes, las siete de la tarde. Marina dice tres frases: «**Prefiero abrir** a las diez», «Rubén **sigue pintando**» y «La puerta **está cerrada**». Hoy aprendes a usar tres formas del verbo que no dicen la persona: el **infinitivo**, el **gerundio** y el **participio**.', en: 'Marina Robles has a small bookshop in her neighbourhood: La Hoja. It has been closed for two weeks for renovation and tomorrow, Saturday, it opens again. It is Friday, seven in the evening. Marina says three sentences: “I prefer to open at ten”, “Rubén is still painting” and “The door is closed”. Today you learn to use three verb forms that do not show the person: the infinitive, the gerund and the participle.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases de Marina y tu alumno repite. Después tu alumno dice qué forma del verbo ve en cada frase: abrir, pintando, cerrada.', self: 'Lee las tres frases en voz alta. ¿Qué forma del verbo ves en cada una: -ar/-er/-ir, -ando/-iendo o -ado/-ido? (Which verb form do you see in each one?)' } },
          { kind: 'compare', title: 'Tres formas, tres trabajos · Three forms, three jobs', columns: [
            { tone: 'blue', label: 'INFINITIVO · -ar, -er, -ir', sentence: 'Marina [[prefiere abrir|blue]] a las diez.', idea: 'El nombre de la acción: va después de otro verbo o de una preposición.', en: 'Marina prefers to open at ten. (the name of the action)' },
            { tone: 'teal', label: 'GERUNDIO · -ando, -iendo', sentence: 'Rubén [[sigue pintando|teal]].', idea: 'La acción en marcha: todavía no ha terminado.', en: 'Rubén is still painting. (an action in progress)' },
            { tone: 'orange', label: 'PARTICIPIO · -ado, -ido', sentence: 'La puerta [[está cerrada|orange]].', idea: 'El resultado: cómo está algo ahora. Funciona como un adjetivo.', en: 'The door is closed. (a result, a state)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Rubén sigue pintando» significa…', options: ['Rubén ya ha terminado de pintar.', 'Rubén empieza a pintar ahora.', 'Rubén pinta todavía: no ha terminado.'], answer: 2, why: '«Seguir» + gerundio: la acción continúa, todavía no ha terminado.', en: '“Rubén sigue pintando” means…' },
            { prompt: '«La puerta está cerrada» habla de…', options: ['el estado de la puerta ahora.', 'un plan para mañana.', 'una acción en marcha ahora.'], answer: 0, why: 'Estar + participio describe un estado, el resultado de cerrar.', en: '“La puerta está cerrada” is about…' },
            { prompt: 'Mañana Marina prefiere ___ a las diez.', options: ['abierto', 'abrir', 'abriendo'], answer: 1, why: 'Después de un verbo como «preferir», el segundo verbo va en infinitivo: prefiere abrir.', en: 'Tomorrow Marina prefers to open at ten.' },
          ] },
        ] },
        { title: 'El infinitivo · The infinitive', mascot: '/brand/mascot/studying.webp', coach: 'Después de preposición, infinitivo. After a preposition, the infinitive.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'INFINITIVO', question: '¿Qué forma va después de otro verbo o de una preposición?', en: 'Which form goes after another verb or after a preposition?', formula: ['verbo + infinitivo: prefiero / quiero / puedo / necesito + abrir', 'preposición + infinitivo: antes de · después de · para · sin + salir', 'al + infinitivo = en el momento en que…: al entrar, al llegar', 'infinitivo como sujeto: Leer es un placer · Me gusta leer'],
            meaning: 'El infinitivo es el **nombre de la acción**. Va después de un verbo conjugado (prefiero salir), después de una preposición (antes de abrir) y puede ser el sujeto de la frase (Leer en papel es un placer). **Al + infinitivo** significa «en el momento en que»: Al entrar, ves el café nuevo.',
            examples: [
              { es: 'Marina [[necesita terminar|blue]] los carteles hoy.', en: 'Marina needs to finish the posters today.' },
              { es: '[[Antes de abrir|blue]], tiene que limpiar el suelo.', en: 'Before opening, she has to clean the floor.' },
              { es: '[[Al entrar|blue]], los clientes ven el café nuevo.', en: 'When they come in, customers see the new café.' },
              { es: '[[Leer|blue]] en papel es un placer.', en: 'Reading on paper is a pleasure.' },
            ],
            note: 'Atención: en inglés dices «before opening» o «reading is…», con -ing. En español, después de una preposición y como sujeto va el **infinitivo**: antes de abrir, leer es…' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Marina apaga las luces antes de ___.', options: ['salir', 'sale', 'saliendo'], answer: 0, why: 'Después de la preposición «de» va el infinitivo: antes de salir.', en: 'Marina turns off the lights before leaving.' },
            { prompt: '___ es la parte favorita de su trabajo.', options: ['Recomendando libros', 'Recomendado libros', 'Recomendar libros'], answer: 2, why: 'La acción es el sujeto de la frase: en español, infinitivo (recomendar), no gerundio.', en: 'Recommending books is her favourite part of the job.' },
            { prompt: '___ a la librería, Gabriel saluda a Rubén.', options: ['Al llegar', 'Al llegando', 'A llegar'], answer: 0, why: 'Al + infinitivo = en el momento en que llega: al llegar.', en: 'When he arrives at the bookshop, Gabriel says hello to Rubén.' },
          ] },
        ] },
        { title: 'Verbo + a / de + infinitivo · Verb + a / de + infinitive', mascot: '/brand/mascot/standing.webp', coach: 'Empezar a, acabar de, volver a.', blocks: [
          { kind: 'table', title: 'Construcciones frecuentes · Frequent constructions', head: ['Construcción', 'Significado · Meaning', 'Ejemplo'], rows: [
            ['**ir a** + infinitivo (clase 039)', 'un plan · a plan', 'Mañana [[voy a abrir|blue]] a las diez.'],
            ['**tener que** + infinitivo (clase 040)', 'obligación · obligation', '[[Tengo que poner|blue]] los precios.'],
            ['**empezar a** + infinitivo', 'el principio · to start doing', 'Rubén [[empezó a pintar|blue]] el martes.'],
            ['**acabar de** + infinitivo', 'hace muy poco · to have just done', '[[Acabo de volver|blue]] de la imprenta.'],
            ['**volver a** + infinitivo', 'otra vez · to do again', 'Mañana [[vuelvo a abrir|blue]] la librería.'],
          ], note: 'Cuidado con la preposición: empezar **a**, volver **a**, acabar **de**. Y después, siempre infinitivo. Con querer, poder, preferir y necesitar no hay preposición: prefiero abrir.' },
          { kind: 'tip', icon: '💡', title: 'Acabo de llegar · I have just arrived', text: '«Acabar» va en presente, pero la frase habla de algo **muy reciente**: «Acabo de llegar» = llegué hace un momento. Y no confundas: «Vuelvo **a casa**» (vuelvo a un lugar) y «Vuelvo **a abrir**» (abro otra vez).', en: '“Acabar” is in the present, but the sentence is about something very recent: “Acabo de llegar” = I arrived a moment ago. And do not mix them up: “Vuelvo a casa” (I go back to a place) and “Vuelvo a abrir” (I open again).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Gabriel ya está en la librería? —Sí, ___ llegar.', options: ['acaba de', 'acaba', 'acaba a'], answer: 0, why: 'Algo muy reciente: acabar **de** + infinitivo, acaba de llegar.', en: 'Is Gabriel already at the bookshop? —Yes, he has just arrived.' },
            { prompt: 'La impresora falló y Marina ___ imprimir los carteles.', options: ['volvió', 'volvió a', 'volvió de'], answer: 1, why: 'Imprimió otra vez: volver **a** + infinitivo.', en: 'The printer failed and Marina printed the posters again.' },
            { prompt: 'Rubén ___ pintar el martes por la mañana. (to start)', options: ['empezó', 'empezó a', 'empezó de'], answer: 1, why: 'El principio de una acción: empezar **a** + infinitivo.', en: 'Rubén started painting on Tuesday morning.' },
          ] },
        ] },
        { title: 'El gerundio · The gerund', mascot: '/brand/mascot/speaking.webp', coach: 'Todavía, en marcha, y cómo. Still going, and how.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'GERUNDIO', question: '¿La acción continúa? ¿Cómo pasa algo?', en: 'Is the action still going on? How does something happen?', formula: ['seguir + gerundio: sigue pintando (todavía)', 'llevar + tiempo + gerundio: lleva tres días pintando (clase 055)', 'estar + gerundio: está pintando (ahora, clase 041)', 'verbo + gerundio = cómo: llegó corriendo'],
            meaning: 'El gerundio presenta la acción **en marcha**. Con **seguir** dices que la acción continúa: no ha terminado. Con **llevar** + tiempo dices cuánto tiempo dura ya. Después de otro verbo, el gerundio dice **cómo** se hace algo: llegó corriendo, aprendió trabajando.',
            examples: [
              { es: 'Son las siete y Rubén [[sigue pintando|teal]].', en: 'It is seven o’clock and Rubén is still painting.' },
              { es: 'Rubén [[lleva tres días pintando|teal]] la librería.', en: 'Rubén has been painting the bookshop for three days.' },
              { es: 'Gabriel [[llegó corriendo|teal]] porque llovía.', en: 'Gabriel came running because it was raining.' },
              { es: 'Marina aprendió el oficio [[trabajando|teal]] con su padre.', en: 'Marina learned the trade by working with her father.' },
            ],
            note: '**Seguir** es irregular: sigo, sigues, sigue, seguimos, siguen. Gerundios especiales: leyendo, durmiendo, diciendo, pidiendo, siguiendo.' },
          { kind: 'compare', title: '¿Sin parar u otra vez? · Without stopping or again?', columns: [
            { tone: 'teal', label: 'SEGUIR + GERUNDIO', sentence: 'Rubén [[sigue pintando|teal]].', idea: 'No ha parado: la acción continúa.', en: 'Rubén is still painting. (he has not stopped)' },
            { tone: 'blue', label: 'VOLVER A + INFINITIVO', sentence: 'Rubén [[vuelve a pintar|blue]] la puerta.', idea: 'Terminó, y ahora la pinta otra vez.', en: 'Rubén is painting the door again. (he finished, now he does it again)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Son las nueve de la noche y Marina ___ trabajando.', options: ['sigue', 'vuelve', 'acaba'], answer: 0, why: 'Todavía trabaja, no ha parado: seguir + gerundio.', en: 'It is nine at night and Marina is still working.' },
            { prompt: 'Rubén ___ cuatro días pintando.', options: ['sigue', 'está', 'lleva'], answer: 2, why: 'Con una cantidad de tiempo: llevar + tiempo + gerundio.', en: 'Rubén has been painting for four days.' },
            { prompt: 'Gabriel entró en la tienda ___: «¡Qué bonita!».', options: ['decir', 'dicho', 'diciendo'], answer: 2, why: 'El gerundio dice cómo entró: diciendo algo (decir → diciendo).', en: 'Gabriel came into the shop saying: “How lovely!”.' },
          ] },
        ] },
        { title: 'El participio: un estado · The participle: a state', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Cerrado, cerrada, cerrados, cerradas.', blocks: [
          { kind: 'compare', title: 'Tres frases con «cerrar» · Three sentences with “cerrar”', columns: [
            { tone: 'orange', label: 'HABER + PARTICIPIO · la acción hecha', sentence: 'Marina [[ha cerrado|orange]] la puerta.', idea: 'Una acción ya hecha (clases 045 y 046). El participio no cambia: siempre -o.', en: 'Marina has closed the door. (the action; the participle never changes)' },
            { tone: 'orange', label: 'ESTAR + PARTICIPIO · el resultado', sentence: 'La puerta [[está cerrada|orange]].', idea: 'El estado ahora, como un adjetivo. Concuerda: cerrado, cerrada, cerrados, cerradas.', en: 'The door is closed. (the state; it agrees like an adjective)' },
            { tone: 'teal', label: 'ESTAR + GERUNDIO · en marcha', sentence: 'Marina [[está cerrando|teal]] la puerta.', idea: 'La acción pasa ahora mismo.', en: 'Marina is closing the door. (it is happening right now)' },
          ] },
          { kind: 'table', title: 'El participio concuerda · The participle agrees', head: ['', 'masculino', 'femenino'], rows: [
            ['singular', 'el libro está **abierto**', 'la caja está **abierta**'],
            ['plural', 'los libros están **ordenados**', 'las luces están **encendidas**'],
          ], note: 'Participios irregulares de la clase 046: abierto, dicho, escrito, hecho, puesto, roto, visto, vuelto. Con estar también concuerdan: «la cena está hecha», «las ventanas están rotas». Sin estar, junto al nombre: «una caja abierta», «libros usados».' },
          { kind: 'tip', icon: '🔑', title: 'Está sentado · He is sitting', text: 'Para la **postura** usas estar + participio: «Rubén **está sentado** en la escalera», «Gabriel **está acostado** en el sofá». En inglés dices «is sitting», pero en español no es «está sentando».', en: 'For posture you use estar + participle: “Rubén está sentado en la escalera” (Rubén is sitting on the stairs), “Gabriel está acostado en el sofá” (Gabriel is lying on the sofa). In English you say “is sitting”, but in Spanish it is not “está sentando”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Las ventanas ya están ___.', options: ['abierto', 'abriendo', 'abiertas'], answer: 2, why: 'Estado con estar: el participio concuerda con «las ventanas» (femenino plural): abiertas.', en: 'The windows are already open.' },
            { prompt: 'Marina ya ___ los carteles en el escaparate.', options: ['está puesto', 'ha puesto', 'ha puestos'], answer: 1, why: 'Con haber, el participio no cambia: ha puesto. «Está puesto» no lleva objeto.', en: 'Marina has already put the posters in the shop window.' },
            { prompt: 'Mira, Rubén está ___ en la escalera: descansa un poco.', options: ['sentar', 'sentando', 'sentado'], answer: 2, why: 'La postura es un estado: estar + participio, está sentado.', en: 'Look, Rubén is sitting on the stairs: he is having a little rest.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/kneeling.webp', coach: '¿Infinitivo, gerundio o participio?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué forma falta: infinitivo, gerundio o participio. Después aparece la corrección.', self: 'Lee cada frase y piensa: ¿qué forma necesita? Toca para ver la corrección. (Which form does it need?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Antes de saliendo, apago las luces.', right: 'Antes de salir, apago las luces.', why: 'Después de una preposición, infinitivo. En inglés «before leaving», en español «antes de salir».' },
            { wrong: 'Leyendo antes de dormir es bueno.', right: 'Leer antes de dormir es bueno.', why: 'La acción como sujeto va en infinitivo. (Reading is… = Leer es…)' },
            { wrong: 'Rubén sigue a pintar la pared.', right: 'Rubén sigue pintando la pared.', why: 'Seguir va con gerundio y sin preposición: sigue pintando.' },
            { wrong: 'Acabo de llegué a la tienda.', right: 'Acabo de llegar a la tienda.', why: 'Solo se conjuga «acabar»; el segundo verbo va en infinitivo.' },
            { wrong: 'La librería está cerrado hasta mañana.', right: 'La librería está cerrada hasta mañana.', why: 'Con estar, el participio concuerda: la librería (femenino) → cerrada.' },
            { wrong: 'Hemos abiertas las cajas.', right: 'Hemos abierto las cajas.', why: 'Con haber, el participio no cambia nunca: hemos abierto.' },
          ] },
          { kind: 'decide', title: '¿Qué forma uso? · Which form do I use?', steps: [
            { q: '¿Va después de una preposición (antes de, después de, para, sin, al) o de querer, poder, preferir, empezar a, acabar de, volver a?', yes: '**Infinitivo**: antes de salir, acabo de llegar, vuelvo a abrir.', no: 'next' },
            { q: '¿Dices que una acción continúa o está en marcha (seguir, llevar, estar) o cómo se hace algo?', yes: '**Gerundio**: sigue pintando, lleva tres días pintando, llegó corriendo.', no: 'next' },
            { q: '¿Describes un estado o un resultado, como un adjetivo?', yes: '**Participio** con estar, y concuerda: la puerta está cerrada, las cajas están abiertas.', no: 'Mira el verbo de antes: con haber, participio en -o: hemos abierto.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Después de ___, Marina y Gabriel cenan algo.', options: ['trabajando', 'trabajar', 'trabajado'], answer: 1, why: 'Después de la preposición: infinitivo, después de trabajar.', en: 'After working, Marina and Gabriel have something for dinner.' },
            { prompt: 'Las paredes ya están ___.', options: ['pintados', 'pintando', 'pintadas'], answer: 2, why: 'Un resultado con estar: el participio concuerda con «las paredes» (femenino plural).', en: 'The walls are already painted.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice tres frases sobre su casa o su trabajo ahora mismo: una con «acabo de», una con «sigo» + gerundio y una con «está / están» + participio.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Viernes por la tarde en La Hoja', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'La noche antes de abrir · The night before opening', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Gabriel y tu alumno es Marina. Después tu alumno toca cada expresión marcada y dice si es infinitivo, gerundio o participio.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿infinitivo, gerundio o participio? (Infinitive, gerund or participle?)' } },
          { kind: 'explore', title: 'Mañana abrimos', setting: 'Viernes, siete de la tarde, en la librería La Hoja. Gabriel, el amigo de Marina, llega para ayudar. Rubén, el pintor, trabaja al fondo. Usan tú. (Friday, 7 p.m., at La Hoja bookshop. Gabriel, Marina’s friend, comes to help. Rubén, the painter, is working at the back.)', lines: [
            { who: 'Gabriel', text: '¡Hola, Marina! La puerta [[está cerrada|orange]], pero veo luz. ¿Puedo pasar?', en: 'Hi, Marina! The door is closed, but I can see a light. Can I come in?' },
            { who: 'Marina', text: '¡Pasa, pasa! [[Acabo de volver|blue]] de la imprenta con los carteles.', en: 'Come in, come in! I’ve just got back from the print shop with the posters.' },
            { who: 'Gabriel', text: '¡Qué bien! ¿Y Rubén? ¿Todavía está aquí?', en: 'Great! And Rubén? Is he still here?' },
            { who: 'Marina', text: 'Sí, [[sigue pintando|teal]] la pared del fondo. [[Lleva tres días pintando|teal]], pero hoy termina.', en: 'Yes, he’s still painting the back wall. He’s been painting for three days, but he finishes today.' },
            { who: 'Gabriel', text: '¡Qué bonito está todo! Las estanterías nuevas ya [[están instaladas|orange]].', en: 'Everything looks so nice! The new shelves are already up.' },
            { who: 'Marina', text: 'Sí, y los libros [[están ordenados|orange]] por temas. Mañana a las diez [[vuelvo a abrir|blue]].', en: 'Yes, and the books are sorted by subject. Tomorrow at ten I open again.' },
            { who: 'Gabriel', text: '¿Y qué [[tienes que hacer|blue]] todavía?', en: 'And what do you still have to do?' },
            { who: 'Marina', text: '[[Antes de abrir|blue]], quiero limpiar el suelo y poner los precios. [[Para terminar|blue]] pronto, necesito ayuda.', en: 'Before opening, I want to clean the floor and put the prices on. To finish soon, I need help.' },
            { who: 'Gabriel', text: 'Yo te ayudo. Mañana trabajo, así que [[prefiero ayudarte|blue]] hoy.', en: 'I’ll help you. I’m working tomorrow, so I’d rather help you today.' },
            { who: 'Marina', text: '¡Gracias! Oye, ¿por qué [[llegaste corriendo|teal]]?', en: 'Thanks! Hey, why did you come running?' },
            { who: 'Gabriel', text: 'Porque [[empezó a llover|blue]] en la calle. Mira: [[estoy mojado|orange]] de pies a cabeza.', en: 'Because it started to rain outside. Look: I’m wet from head to toe.' },
            { who: 'Marina', text: '[[Al salir|blue]], te doy un paraguas. Tengo uno detrás de la puerta.', en: 'When you leave, I’ll give you an umbrella. I have one behind the door.' },
          ], notes: {
            'está cerrada': 'Estar + participio: el **estado** de la puerta. Concuerda con «la puerta»: cerrada.',
            'Acabo de volver': 'Acabar de + infinitivo: Marina volvió **hace un momento**. (I have just got back.)',
            'sigue pintando': 'Seguir + gerundio: Rubén pinta **todavía**, no ha parado.',
            'Lleva tres días pintando': 'Llevar + tiempo + gerundio (clase 055): cuánto tiempo dura ya la acción.',
            'están instaladas': 'Estar + participio: el resultado. Concuerda con «las estanterías» (femenino plural). Instalar = to put in, to install.',
            'están ordenados': 'Estar + participio: los libros (masculino plural) → ordenados. Así están ahora.',
            'vuelvo a abrir': 'Volver a + infinitivo: abrir **otra vez**, después de las obras.',
            'tienes que hacer': 'Tener que + infinitivo (clase 040): obligación.',
            'Antes de abrir': 'Preposición + **infinitivo**. No «antes de abriendo».',
            'Para terminar': 'Para + infinitivo: la finalidad (the purpose). In order to finish.',
            'prefiero ayudarte': 'Preferir + infinitivo, sin preposición. El pronombre va unido al infinitivo: ayudar**te** (clase 065).',
            'llegaste corriendo': 'Verbo + gerundio: **cómo** llegó Gabriel. (You came running.)',
            'empezó a llover': 'Empezar a + infinitivo: el principio de la lluvia. (It started to rain.)',
            'estoy mojado': 'Estar + participio (mojar → mojado): el estado de Gabriel. Una mujer diría «estoy mojada».',
            'Al salir': 'Al + infinitivo = en el momento en que sales. (When you leave.)',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿De dónde acaba de volver Marina?', options: ['De la imprenta.', 'De su casa.', 'Del banco.'], answer: 0, why: '«Acabo de volver de la imprenta con los carteles».', en: 'Where has Marina just come back from?' },
            { prompt: '¿Rubén ya ha terminado?', options: ['Sí, terminó ayer.', 'No, sigue pintando, pero hoy termina.', 'No, empieza mañana.'], answer: 1, why: '«Sigue pintando la pared del fondo… pero hoy termina».', en: 'Has Rubén finished yet?' },
            { prompt: '¿Por qué llegó Gabriel corriendo?', options: ['Porque llegaba tarde.', 'Porque la puerta estaba cerrada.', 'Porque empezó a llover.'], answer: 2, why: '«Porque empezó a llover en la calle».', en: 'Why did Gabriel come running?' },
          ] },
        ] },
        { title: '¿Qué forma es? · Which form is it?', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'classify', title: 'Expresiones del diálogo · Expressions from the dialogue', categories: [
            { id: 'inf', label: 'INFINITIVO · -ar, -er, -ir', tone: 'blue' },
            { id: 'ger', label: 'GERUNDIO · -ando, -iendo', tone: 'teal' },
            { id: 'part', label: 'PARTICIPIO · -ado, -ido', tone: 'orange' },
          ], items: [
            { text: 'antes de abrir', answer: 'inf', why: 'Preposición + infinitivo.' },
            { text: 'sigue pintando', answer: 'ger', why: 'Seguir + gerundio: la acción continúa.' },
            { text: 'los libros están ordenados', answer: 'part', why: 'Estar + participio: un estado, concuerda.' },
            { text: 'acabo de volver', answer: 'inf', why: 'Acabar de + infinitivo: algo muy reciente.' },
            { text: 'llegaste corriendo', answer: 'ger', why: 'El gerundio dice cómo llegó.' },
            { text: 'estoy mojado', answer: 'part', why: 'Estar + participio: cómo está Gabriel.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué tiene que hacer Marina antes de abrir? ¿Cómo está la librería ahora?». Tu alumno responde con «antes de» + infinitivo y con dos frases de «está / están» + participio.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Abrir, abriendo, abierto: elige bien.',
      steps: [
        { title: 'Sábado por la mañana · Saturday morning', blocks: [
          { kind: 'choice', items: [
            { context: 'Sábado, 9:50. Marina llega a la librería. (Saturday, 9:50.)', prompt: '___ la puerta, Marina ve una carta en el suelo.', options: ['A abrir', 'Al abrir', 'Al abierto'], answer: 1, why: 'En el momento en que abre: al + infinitivo, al abrir.', en: 'As she opens the door, Marina sees a letter on the floor.' },
            { context: 'Marina enciende todas las luces. (She switches on all the lights.)', prompt: 'Ahora las luces ___.', options: ['han encendidas', 'están encendidas', 'están encendiendo'], answer: 1, why: 'El resultado, un estado: estar + participio que concuerda con «las luces».', en: 'Now the lights are on.' },
            { context: 'Una clienta pregunta. (A customer asks.)', prompt: '—¿Ustedes ___ abrir? —Sí, hace cinco minutos.', options: ['siguen', 'acaban', 'acaban de'], answer: 2, why: '«Hace cinco minutos»: algo muy reciente, acabar de + infinitivo.', en: '—Have you just opened? —Yes, five minutes ago.' },
            { context: 'Un señor mayor lee en el sillón. (An older man reads in the armchair.)', prompt: 'El señor Ortiz lee ___ en el sillón nuevo.', options: ['sentar', 'sentado', 'sentando'], answer: 1, why: 'La postura: participio, sentado. «Sentando» no describe una postura.', en: 'Mr Ortiz reads sitting in the new armchair.' },
            { context: 'Mediodía. (Midday.)', prompt: 'Son las doce y Gabriel ___ cafés: no para.', options: ['sigue sirviendo', 'sigue a servir', 'sigue servido'], answer: 0, why: 'La acción continúa: seguir + gerundio, sin preposición (servir → sirviendo).', en: 'It is twelve o’clock and Gabriel is still serving coffees: he does not stop.' },
          ] },
        ] },
        { title: '¿Qué forma es? · Which form is it?', blocks: [
          { kind: 'classify', title: 'Frases de la librería · Sentences from the bookshop', categories: [
            { id: 'inf', label: 'INFINITIVO', tone: 'blue' },
            { id: 'ger', label: 'GERUNDIO', tone: 'teal' },
            { id: 'part', label: 'PARTICIPIO', tone: 'orange' },
          ], items: [
            { text: 'Marina abre pronto para atender a los primeros clientes.', answer: 'inf', why: 'Para + infinitivo: atender.' },
            { text: 'Fuera sigue lloviendo.', answer: 'ger', why: 'Seguir + gerundio: la lluvia no para.' },
            { text: 'Ese libro está agotado: no quedan.', answer: 'part', why: 'Estar + participio: un estado (sold out).' },
            { text: 'Un niño salió corriendo con un cómic.', answer: 'ger', why: 'El gerundio dice cómo salió.' },
            { text: 'Las cajas de libros usados ya están vacías y abiertas.', answer: 'part', why: 'Estar + participio que concuerda: abiertas.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Después de comiendo, Marina vuelve a la tienda.', ok: false, options: ['Después comer, Marina vuelve a la tienda.', 'Después de comer, Marina vuelve a la tienda.', 'Después de comido, Marina vuelve a la tienda.'], answer: 1, why: 'Después de la preposición «de» va el infinitivo: después de comer.' },
            { sentence: 'Gabriel lleva una hora atendiendo a los clientes.', ok: true, why: 'Correcta: llevar + tiempo + gerundio (atender → atendiendo).' },
            { sentence: 'La librería está abierto de diez a ocho.', ok: false, options: ['La librería está abierta de diez a ocho.', 'La librería es abierta de diez a ocho.', 'La librería está abriendo de diez a ocho.'], answer: 0, why: 'Estado con estar: el participio concuerda con «la librería» → abierta.' },
            { sentence: 'Una clienta dice: «Quiero volver a leer este libro».', ok: true, why: 'Correcta: volver a + infinitivo = leerlo otra vez.' },
            { sentence: 'Comprando libros usados es más barato.', ok: false, options: ['Compra libros usados es más barato.', 'Comprado libros usados es más barato.', 'Comprar libros usados es más barato.'], answer: 2, why: 'La acción es el sujeto: infinitivo, comprar. En inglés «buying», en español «comprar».' },
          ] },
        ] },
        { title: 'Una clienta en la librería · A customer in the bookshop', blocks: [
          { kind: 'chat-fill', title: 'Marina habla con la señora Luna (usted) · Marina talks to Mrs Luna', lines: [
            { who: 'Señora Luna', text: 'Buenos días. ¿La librería ___ abierta todo el día?', options: ['ha', 'es', 'está'], answer: 2, why: 'Un estado: estar + participio, está abierta.' },
            { who: 'Marina', text: 'Sí, de diez a ocho. ___ a abrir hoy, después de dos semanas de obras.', options: ['Volvemos', 'Acabamos', 'Seguimos'], answer: 0, why: 'Abren otra vez: volver a + infinitivo.' },
            { who: 'Señora Luna', text: '¡Qué bien! Busco un libro de cocina mexicana. ¿Lo tiene?' },
            { who: 'Marina', text: 'Lo siento, ese libro está ___: no quedan.', options: ['agotar', 'agotado', 'agotando'], answer: 1, why: 'Un estado: estar + participio, está agotado (sold out).' },
            { who: 'Señora Luna', text: 'Vaya. ¿Y puedo pedirlo?' },
            { who: 'Marina', text: 'Claro. ___ pedirlo, necesito su nombre y su teléfono.', options: ['Sin', 'Para', 'Por'], answer: 1, why: 'La finalidad: para + infinitivo.' },
            { who: 'Marina', text: 'Y si quiere, puede tomar un café: Gabriel ___ preparando cafés para todos.', options: ['vuelve', 'sigue', 'acaba'], answer: 1, why: 'La acción continúa: seguir + gerundio.' },
            { who: 'Señora Luna', text: '¡Qué amable! ___ el café, me voy: tengo prisa.', options: ['Después de tomando', 'Después tomar', 'Después de tomar'], answer: 2, why: 'Después de + infinitivo: después de tomar.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Acabo', 'de', 'abrir', 'la', 'librería'], accept: ['Acabo de abrir la librería'], en: 'I have just opened the bookshop.' },
            { tiles: ['Gabriel', 'sigue', 'sirviendo', 'cafés'], accept: ['Gabriel sigue sirviendo cafés'], en: 'Gabriel is still serving coffees.' },
            { tiles: ['Marina', 'apaga', 'las', 'luces', 'antes', 'de', 'salir'], accept: ['Marina apaga las luces antes de salir', 'Antes de salir Marina apaga las luces'], en: 'Marina turns off the lights before leaving.' },
            { tiles: ['Las', 'cajas', 'ya', 'están', 'abiertas'], accept: ['Las cajas ya están abiertas', 'Las cajas están ya abiertas', 'Ya están abiertas las cajas'], en: 'The boxes are already open.' },
          ] },
        ] },
        { title: 'Transforma · Transform', blocks: [
          { kind: 'rewrite', title: 'Una idea, otra forma · One idea, another form', items: [
            { prompt: 'Marina volvió de la imprenta hace dos minutos.', instruction: 'Usa acabar de + infinitivo, en presente. Empieza con «Marina».', accept: ['Marina acaba de volver de la imprenta'] },
            { prompt: 'Rubén pinta. Todavía no ha terminado.', instruction: 'Usa seguir + gerundio. Empieza con «Rubén».', accept: ['Rubén sigue pintando', 'Rubén todavía sigue pintando'] },
            { prompt: 'Marina ha cerrado las ventanas.', instruction: 'Di el resultado con estar + participio. Empieza con «Las ventanas».', accept: ['Las ventanas están cerradas'] },
            { prompt: 'Cuando entras en la librería, ves el café nuevo.', instruction: 'Usa al + infinitivo. Empieza con «Al».', accept: ['Al entrar en la librería, ves el café nuevo', 'Al entrar en la librería ves el café nuevo'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno describe su habitación o su lugar de trabajo ahora: dos cosas con «está / están» + participio (abierto, ordenado, encendido…) y una cosa que «sigue» + gerundio.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio de Marina', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Así fue el primer día · How the first day went', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿cómo fue el día?). Segunda escucha: tu alumno dice «¡infinitivo!», «¡gerundio!» o «¡participio!» con cada forma que oye. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Busca las formas: acabo de…, al…, siguió…, está… (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un audio de Marina', channel: 'MENSAJE DE VOZ · DE MARINA PARA GABRIEL', src: '/audio/grammar-live/382.mp3',
            before: 'Es sábado por la noche. Marina manda un audio a Gabriel después del primer día. ¿Qué crees que cuenta: si fue bien, si vino mucha gente, qué pasa ahora…? (Marina sends Gabriel a voice message after the first day. What do you think she says?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Marina tiene un problema con el pintor.', 'Marina pide ayuda porque la tienda sigue cerrada.', 'Marina cuenta que el primer día fue muy bien y da las gracias.'], answer: 2, why: 'Está «muy feliz», cuenta cómo fue el día y dice «¡Mil gracias por todo!».', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Cuántas personas esperaban en la puerta al abrir?', options: ['Ninguna.', 'Seis.', 'Diez.'], answer: 1, why: '«Al abrir, a las diez, ya había seis personas en la puerta».', en: 'How many people were waiting at the door when she opened?' },
              { prompt: '¿Por qué llegó corriendo una vecina?', options: ['Porque llegaba tarde al trabajo.', 'Porque quería ser la primera clienta.', 'Porque llovía.'], answer: 1, why: '«Una vecina llegó corriendo porque quería ser la primera clienta».', en: 'Why did a neighbour come running?' },
              { prompt: '¿Qué pasó con los libros de cocina?', options: ['A las dos ya estaban vendidos.', 'No llegaron a tiempo.', 'Están en el mostrador.'], answer: 0, why: '«A las dos ya estaban vendidos todos los libros de cocina».', en: 'What happened with the cookery books?' },
              { prompt: '¿Cuándo vuelve a abrir la librería?', options: ['El lunes por la tarde.', 'El domingo a las diez.', 'El lunes a las diez.'], answer: 2, why: '«Mañana es domingo y la tienda está cerrada… El lunes vuelvo a abrir a las diez».', en: 'When does the bookshop open again?' },
              { prompt: '¿Qué dejó Marina para Gabriel?', options: ['Un libro con su nombre.', 'Un paraguas.', 'Las llaves de la tienda.'], answer: 0, why: '«Te dejé un regalo en el mostrador: es un libro, con tu nombre en la primera página».', en: 'What did Marina leave for Gabriel?' },
            ],
            transcript: 'Hola, Gabriel, soy Marina. [[Acabo de cerrar|blue]] la librería y estoy muy cansada, pero muy feliz. [[Al abrir|blue]], a las diez, ya había seis personas en la puerta. Una vecina [[llegó corriendo|teal]] porque quería ser la primera clienta. La gente [[siguió entrando|teal]] toda la mañana y a las dos ya [[estaban vendidos|orange]] todos los libros de cocina. Rubén pasó por la tarde y dice que la pared [[está muy bien pintada|orange]]. Mañana es domingo y la tienda [[está cerrada|orange]], así que descanso. El lunes [[vuelvo a abrir|blue]] a las diez. Ah, y [[antes de irme|blue]] te dejé un regalo en el mostrador: es un libro, con tu nombre en la primera página. ¡Mil gracias por todo!',
            reply: { teacher: 'Tú eres Marina. Tu alumno es Gabriel y responde al audio con tres frases: una con «acabo de», una con «está / están» + participio y una con «al» o «antes de» + infinitivo.', self: 'Responde a Marina en voz alta como Gabriel: qué acabas de hacer tú, cómo está tu casa ahora y qué vas a hacer antes de ir a la librería el lunes. (Answer as Gabriel.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu día, tus cambios, tus cosas', coach: 'Habla de ti. Talk about yourself.',
      steps: [
        { title: 'Antes, ahora, todavía · Before, now, still', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con frases completas. Si tu alumno usa una forma equivocada («antes de saliendo»), tú repites su frase con la forma correcta y sigues con la repregunta.', self: 'Lee la pregunta, responde en voz alta y, si quieres, escribe tu respuesta. Mira las frases de ayuda. (Read the question and answer aloud.)' } },
          { kind: 'talk', cards: [
            { q: '¿Qué haces antes de salir de casa? ¿Y al llegar al trabajo o a clase? · What do you do before leaving home? And when you get to work or class?', followUps: ['¿Y después de comer? (And after lunch?)', '¿Qué haces para empezar bien el día? (What do you do to start the day well?)'], phrases: ['[[Antes de salir|blue]], siempre…', '[[Al llegar|blue]] al trabajo, …', '[[Después de comer|blue]], …'], hint: 'Después de antes de, después de, para y al: siempre infinitivo.', example: 'Antes de salir, desayuno y miro el móvil. Al llegar al trabajo, tomo un café con mis compañeros.', next: 'Ahora, algo muy reciente.', teacher: 'Responde tú también: «Antes de dar clase, siempre…». Así tu alumno oye otra vez la estructura.' },
            { q: '¿Qué acabas de hacer hoy? ¿Y qué empezaste a hacer este año? · What have you just done today? And what did you start doing this year?', followUps: ['¿Por qué empezaste? (Why did you start?)', '¿Te gusta? ¿Es difícil? (Do you like it? Is it hard?)'], phrases: ['[[Acabo de|blue]] comer / llegar / hablar con…', 'Este año [[empecé a|blue]] correr / estudiar…'], hint: 'Acabar **de** y empezar **a**, y después infinitivo.', example: 'Acabo de terminar una reunión. Este año empecé a correr los domingos con una amiga.', next: 'Ahora, lo que sigue igual.' },
            { q: '¿Qué sigues haciendo desde hace años? ¿Cuánto tiempo llevas haciéndolo? · What do you still do after many years? How long have you been doing it?', followUps: ['¿Por qué sigues? (Why do you keep doing it?)', '¿Con quién lo haces? (Who do you do it with?)'], phrases: ['[[Sigo|teal]] + gerundio: sigo jugando, sigo viviendo en…', '[[Llevo|teal]] diez años + gerundio…'], hint: 'Seguir + gerundio, sin «a». Llevar + tiempo + gerundio.', example: 'Sigo jugando al baloncesto con mis amigos de la universidad. Llevo quince años jugando con ellos.', next: 'Ahora, algo que quieres repetir.' },
            { q: '¿Qué quieres volver a hacer? Un viaje, un deporte, un libro… · What would you like to do again?', followUps: ['¿Cuándo lo hiciste la primera vez? (When did you do it the first time?)', '¿Qué necesitas para hacerlo otra vez? (What do you need to do it again?)'], phrases: ['Quiero [[volver a|blue]] + infinitivo…', 'La primera vez…', '[[Para|blue]] hacerlo, necesito…'], hint: 'Volver a + infinitivo = hacer algo otra vez.', example: 'Quiero volver a visitar Lima. La primera vez fui con mi hermana. Para volver, necesito unos días de vacaciones.', next: 'Ahora, cómo aprendes.' },
            { q: '¿Cómo aprendiste algo importante: a cocinar, a nadar, un idioma? · How did you learn something important?', followUps: ['¿Y cómo aprendes español? (And how do you learn Spanish?)', '¿Cómo vas al trabajo o a clase? (How do you get to work or class?)'], phrases: ['Aprendí a cocinar [[mirando|teal]] a…', 'Aprendo español [[escuchando|teal]] / [[leyendo|teal]]…', 'Voy al trabajo [[caminando|teal]].'], hint: 'El gerundio dice cómo: aprendí cocinando, voy caminando.', example: 'Aprendí a cocinar mirando a mi abuela. Ahora aprendo español escuchando pódcasts y hablando con amigos.', next: 'Ahora, tú eres Marina.' },
            { q: 'Tú eres Marina. Gabriel llama el sábado por la noche: «¿Cómo está la librería ahora?». Describe el estado con estar + participio. · You are Marina: describe the shop now.', followUps: ['¿Qué está abierto o cerrado mañana? (What is open or closed tomorrow?)', '¿Qué acabas de hacer? (What have you just done?)'], phrases: ['La puerta [[está cerrada|orange]] y las luces [[están apagadas|orange]].', 'Los libros [[están ordenados|orange]]…', '[[Acabo de|blue]] + infinitivo…'], hint: 'Con estar, el participio concuerda: la puerta cerrada, las luces apagadas, los libros ordenados.', example: 'La puerta está cerrada y las luces están apagadas. Los libros están ordenados, pero las mesas están sucias. Acabo de contar el dinero.', teacher: 'Tú eres Gabriel y preguntas: «¿Y la caja? ¿Y las ventanas?». Tu alumno responde con la concordancia correcta.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas («¿Qué acabas de hacer?», «¿Qué sigues haciendo?», «¿Cómo está tu casa ahora?») y tú respondes.', self: 'Ahora haz tú las preguntas en voz alta y respóndelas con otras ideas: «¿Qué acabas de hacer?», «¿Qué sigues haciendo?». (Now ask the questions and answer them with new ideas.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje para el barrio', coach: 'Acabar de, seguir, estar + participio.',
      steps: [
        { title: 'Volvemos a abrir · We are opening again', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada forma: ¿infinitivo, gerundio o participio? ¿Concuerda el participio? Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después, mira cada participio: ¿concuerda con su nombre? (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Mensaje al grupo de vecinos · Message to the neighbours’ group', situation: 'Eres Marina (o eres tú, con un lugar que abre otra vez: un café, una tienda, un gimnasio, tu casa después de una reforma). Escribe un mensaje al grupo de vecinos del barrio: da la noticia, describe cómo está el lugar ahora e invita a la gente. Usa ustedes. (You are Marina, or yourself with a place that is reopening. Write a message to the neighbours’ group: give the news, describe the place now and invite people.)', task: [
            'Saluda, di quién eres y da la noticia con «acabar de» y «volver a» + infinitivo. (Say hello, who you are, and give the news with acabar de and volver a.)',
            'Describe el lugar ahora con dos frases de estar + participio; cuidado con la concordancia. (Describe the place with two estar + participle sentences; watch the agreement.)',
            'Di qué sigue en marcha con seguir + gerundio. (Say what is still going on with seguir + gerund.)',
            'Usa una preposición + infinitivo: antes de, después de, para o al. (Use a preposition + infinitive.)',
            'Da el horario y despídete. (Give the opening hours and say goodbye.)',
          ], starters: ['¡Hola, vecinos!', 'Soy…, de…', 'Acabamos de terminar…', 'Mañana volvemos a abrir…', 'Las estanterías están…', '… sigue + gerundio…', 'Al entrar, van a ver…', '¡Los espero!'],
            words: ['acabar de', 'volver a', 'empezar a', 'seguir', 'antes de', 'al entrar', 'para', 'abierto/a', 'cerrado/a', 'pintado/a', 'ordenado/a', 'instalado/a', 'terminado/a'],
            model: '¡Hola, vecinos! Soy Marina, de la librería La Hoja. [[Acabamos de terminar|blue]] la obra y mañana, sábado, [[volvemos a abrir|blue]]. Rubén, el pintor, [[sigue pintando|teal]] la puerta, pero la tienda está casi lista: las estanterías [[están instaladas|orange]] y los libros [[están ordenados|orange]] por temas. [[Al entrar|blue]], van a ver un pequeño café. [[Antes de abrir|blue]], voy a preparar café gratis para los primeros clientes. Estamos abiertos de diez a ocho. ¡Los espero! Marina',
            minWords: 60,
            checks: [
              { label: 'Acabar de o volver a + infinitivo (just done / again)', pattern: '(?<!\\p{L})(?:acab(?:o|as|a|amos|áis|an)\\s+de|vuelv(?:o|es|e|en)\\s+a|volvemos\\s+a|volvéis\\s+a)\\s+\\p{L}+(?:ar|er|ir)(?!\\p{L})', tip: 'Da la noticia: «Acabamos de terminar la obra», «Mañana volvemos a abrir».' },
              { label: 'Seguir + gerundio (still going on)', pattern: '(?<!\\p{L})(?:sig(?:o|ues|ue|uen)|seguimos)\\s+\\p{L}+(?:ando|iendo|yendo)(?!\\p{L})', tip: 'Di qué continúa: «Rubén sigue pintando la puerta».' },
              { label: 'Estar + participio (a state)', pattern: '(?<!\\p{L})(?:estoy|estás|está|estamos|están)\\s+(?:\\p{L}+\\s+)?(?:\\p{L}+(?:ad|id)[oa]s?|abiert[oa]s?|puest[oa]s?|hech[oa]s?|escrit[oa]s?|rot[oa]s?)(?!\\p{L})', tip: 'Describe el lugar: «Las estanterías están instaladas», «La puerta está pintada».' },
              { label: 'Preposición + infinitivo (antes de, después de, para, al)', pattern: '(?<!\\p{L})(?:antes\\s+de|después\\s+de|despues\\s+de|para|al|sin)\\s+\\p{L}+(?:ar|er|ir)(?:l[oae]s?|me|te|nos)?(?!\\p{L})', tip: 'Ordena las acciones: «Antes de abrir, voy a preparar café», «Al entrar, van a ver…».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:antes|después|despues)\\s+de\\s+\\p{L}+(?:ando|iendo)(?!\\p{L})', why: 'Después de una preposición va el infinitivo: **antes de abrir**, no «antes de abriendo».' },
              { pattern: '(?<!\\p{L})(?:sig(?:o|ues|ue|uen)|seguimos)\\s+a\\s+\\p{L}+(?:ar|er|ir)(?!\\p{L})', why: 'Seguir va con gerundio, sin «a»: **sigue pintando**, no «sigue a pintar».' },
              { pattern: '(?<!\\p{L})(?:la|una)\\s+(?:librería|tienda|puerta|ventana|cocina|casa)\\s+está\\s+(?:abierto|cerrado|pintado|terminado)(?!\\p{L})', why: 'Con estar, el participio concuerda: **la tienda está abierta**, **la puerta está pintada**.' },
            ] },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy? What do you take with you?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'INFINITIVO', formula: 'prefiero / antes de / para / al + abrir · empezar a · acabar de · volver a', example: 'Acabo de volver. Antes de abrir, limpio el suelo.', caption: 'después de otro verbo, de una preposición, o como sujeto', en: 'after another verb, after a preposition, or as the subject' },
            { tone: 'teal', label: 'GERUNDIO', formula: 'seguir / llevar + tiempo / estar + pintando · verbo + gerundio', example: 'Rubén sigue pintando. Gabriel llegó corriendo.', caption: 'la acción en marcha, o cómo se hace algo', en: 'an action in progress, or how something is done' },
            { tone: 'orange', label: 'PARTICIPIO', formula: 'estar + cerrado / cerrada / cerrados / cerradas', example: 'La puerta está cerrada. Los libros están ordenados.', caption: 'un estado, como un adjetivo: concuerda (con haber, no: he cerrado)', en: 'a state, like an adjective: it agrees (with haber it does not: he cerrado)' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Después de una preposición, **infinitivo**: antes de salir, nunca «antes de saliendo». Para algo que continúa, **seguir + gerundio**: sigo leyendo. Para un estado, **estar + participio**, y concuerda: la tienda está cerrada.', en: 'After a preposition, the infinitive: antes de salir, never “antes de saliendo”. For something that continues, seguir + gerund: sigo leyendo. For a state, estar + participle, and it agrees: la tienda está cerrada.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Siempre leo un poco antes de ___.', options: ['dormido', 'dormir', 'durmiendo'], answer: 1, why: 'Después de la preposición: infinitivo, antes de dormir.', en: 'I always read a little before going to sleep.' },
            { prompt: 'Mi vecino ___ trabajando en la misma empresa después de veinte años.', options: ['sigue', 'vuelve', 'acaba'], answer: 0, why: 'La acción continúa: seguir + gerundio.', en: 'My neighbour is still working at the same company after twenty years.' },
            { prompt: '¡Cuidado! El suelo está ___.', options: ['mojando', 'mojado', 'mojar'], answer: 1, why: 'Un estado: estar + participio, mojado.', en: 'Careful! The floor is wet.' },
            { prompt: '¿Laura? ___ salir: está en la calle.', options: ['Acaba', 'Sigue', 'Acaba de'], answer: 2, why: 'Algo muy reciente: acabar de + infinitivo.', en: 'Laura? She has just gone out: she is outside.' },
            { prompt: 'Las tiendas del centro están ___ los domingos.', options: ['cerradas', 'cerrando', 'cerrados'], answer: 0, why: 'Estado con estar: concuerda con «las tiendas» (femenino plural).', en: 'The shops in the centre are closed on Sundays.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/walking.webp', coach: 'Ahora, una casa nueva.', blocks: [
          { kind: 'lead', text: 'Un mes después, Gabriel se muda a una casa nueva. Cuenta cómo va la mudanza: transforma las frases.', en: 'A month later, Gabriel moves into a new home. Tell how the move is going: transform the sentences.' },
          { kind: 'rewrite', title: 'La mudanza de Gabriel · Gabriel’s move', items: [
            { prompt: 'Gabriel ha pintado la cocina.', instruction: 'Di el resultado con estar + participio. Empieza con «La cocina».', accept: ['La cocina está pintada'] },
            { prompt: 'Gabriel desayuna. Después, abre las cajas.', instruction: 'Usa después de + infinitivo. Empieza con «Después de».', accept: ['Después de desayunar, Gabriel abre las cajas', 'Después de desayunar abre las cajas'] },
            { prompt: 'Gabriel ordena los libros. Todavía no ha terminado.', instruction: 'Usa seguir + gerundio. Empieza con «Gabriel».', accept: ['Gabriel sigue ordenando los libros', 'Gabriel todavía sigue ordenando los libros'] },
          ] },
        ] },
        { title: 'Ampliación · Dejar de, seguir sin, ponerse a', mascot: '/autoestudio/mascot/noting.webp', coach: 'Opcional: tres construcciones más. Optional: three more.', blocks: [
          { kind: 'lead', text: 'Tres construcciones más con infinitivo: **dejar de** + infinitivo (no hacer algo más: «Rubén dejó de fumar»), **seguir sin** + infinitivo (todavía no: «La impresora sigue sin funcionar») y **ponerse a** + infinitivo (empezar de repente: «Se puso a llover»).', en: 'Three more constructions with the infinitive: dejar de + infinitive (to stop doing something: “Rubén stopped smoking”), seguir sin + infinitive (still not: “The printer still isn’t working”) and ponerse a + infinitive (to start suddenly: “It started to rain”).' },
          { kind: 'choice', title: 'Para estudiantes rápidos · For fast learners', items: [
            { prompt: 'Marina ___ trabajar los domingos: ahora descansa.', options: ['volvió a', 'dejó de', 'siguió'], answer: 1, why: 'Ya no trabaja los domingos: dejar de + infinitivo.', en: 'Marina stopped working on Sundays: now she rests.' },
            { prompt: 'Llamé al técnico, pero la impresora ___ funcionar.', options: ['sigue', 'sigue sin', 'deja'], answer: 1, why: 'Todavía no funciona: seguir sin + infinitivo.', en: 'I called the technician, but the printer still isn’t working.' },
            { prompt: 'Estábamos en la terraza y de repente ___ llover.', options: ['siguió sin', 'se puso a', 'dejó'], answer: 1, why: 'Empezó de repente: ponerse a + infinitivo.', en: 'We were on the terrace and suddenly it started to rain.' },
          ] },
          { kind: 'rewrite', title: 'Una más · One more', items: [
            { prompt: 'Rubén todavía no ha terminado la puerta.', instruction: 'Usa seguir sin + infinitivo. Empieza con «Rubén».', accept: ['Rubén sigue sin terminar la puerta', 'Rubén todavía sigue sin terminar la puerta'] },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si hay tiempo o tu alumno va rápido. Si no, pasan directamente a la revisión.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 083 · Preguntas indirectas iniciales: no sé dónde', text: 'Ya unes un verbo con otro y describes estados: «Acabo de llegar», «Sigue pintando», «La puerta está cerrada». En la clase 083 aprendes a meter una pregunta dentro de otra frase: «No sé dónde está la imprenta», «¿Sabes a qué hora abre la librería?». Es el paso natural: de unir dos verbos pasas a unir dos ideas en una frase.', en: 'You can now join one verb with another and describe states: “Acabo de llegar”, “Sigue pintando”, “La puerta está cerrada”. In class 083 you learn to put a question inside another sentence: “I don’t know where the print shop is”, “Do you know what time the bookshop opens?”. It is the natural next step: from joining two verbs you move on to joining two ideas in one sentence.', href: '/gramatica/preguntas-indirectas-iniciales-no-se-donde', label: 'Ir a la clase 083' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué acabas de hacer, qué sigues haciendo y cómo está tu mesa ahora?». Respuesta esperada: tres frases, una con cada forma. Tarea: escribir el mensaje de Escribir sobre un lugar real.' },
        ] },
      ],
    },
  ],
};
