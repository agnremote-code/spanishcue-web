import type { LiveLesson } from '../types';

/**
 * Lesson 112 · A2 · Descripciones precisas.
 * Core: participles used as adjectives (agreement), singular collective nouns
 * (la gente, el equipo, la familia, el grupo) and comparing qualities with
 * más / menos… que and tan… como. A team chooses a study room through the class.
 */
export const lesson: LiveLesson = {
  id: 112,
  level: 'A2',
  title: 'Descripciones precisas',
  subtitle: 'Describir el estado de las cosas con participios, hablar de grupos con la concordancia correcta y comparar dos opciones para elegir.',
  legend: [
    { tone: 'blue', label: 'Participio como adjetivo · ordenado, cerrada' },
    { tone: 'teal', label: 'Nombre colectivo + verbo en singular' },
    { tone: 'orange', label: 'Comparación · más, menos, tan… como' },
  ],
  optionNotes: {
    que: '«Que» completa las comparaciones con **más** y **menos**: más grande que, menos cara que.',
    como: '«Como» completa la comparación con **tan**: tan tranquila como.',
    tan: '«Tan» dice que las dos cosas son iguales y va con «como».',
    más: '«Más… que» dice que la primera cosa tiene **más** de una cualidad.',
    menos: '«Menos… que» dice que la primera cosa tiene **menos** de una cualidad.',
    es: '«Es» va con un sujeto singular: la gente, el equipo, la familia.',
    son: '«Son» va con un sujeto plural. «La gente», «el equipo» y «la familia» son singulares.',
    está: '«Está» va con un sujeto singular: el equipo, la sala, la gente.',
    están: '«Están» va con un sujeto plural: las mesas, los documentos.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Describir con precisión', coach: 'Una buena descripción ayuda a elegir.',
      steps: [
        { title: 'Dos salas, tres herramientas', blocks: [
          { kind: 'lead', text: 'Un equipo busca una sala para trabajar. Para elegir, necesita decir **cómo están** las cosas, hablar del **grupo** y **comparar** las dos salas.', en: 'State with participles, groups with singular agreement, and comparisons.' },
          { kind: 'guide', text: { teacher: 'Lee las tres frases y pregunta: «¿Qué información necesita el equipo para elegir?». El alumno señala la palabra clave de cada frase.', self: 'Lee las tres frases. ¿Qué palabra da la información más importante en cada una?' } },
          { kind: 'compare', title: 'Tres informaciones para elegir', columns: [
            { tone: 'blue', label: 'ESTADO', sentence: 'Las mesas están [[ordenadas|blue]].', idea: 'Un participio describe cómo están las mesas.' },
            { tone: 'teal', label: 'GRUPO', sentence: '[[La gente del equipo prefiere|teal]] la primera sala.', idea: '«La gente» es singular: prefiere.' },
            { tone: 'orange', label: 'COMPARACIÓN', sentence: 'La primera sala es [[más tranquila que|orange]] la segunda.', idea: 'Compara una cualidad de las dos salas.' },
          ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '¿Qué frase **compara** dos cosas?', options: ['La sala está iluminada.', 'La sala es más grande que la otra.', 'El equipo está contento.'], answer: 1, why: '«Más grande que» compara las dos salas.' },
            { prompt: '¿Qué frase describe el **estado** de algo?', options: ['La puerta está cerrada.', 'La gente prefiere esta sala.', 'Es tan tranquila como la biblioteca.'], answer: 0, why: '«Cerrada» es un participio que describe la puerta.' },
          ] },
        ] },
        { title: 'El participio que describe', mascot: '/brand/mascot/studying.webp', coach: 'Un verbo que funciona como adjetivo.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'PARTICIPIO COMO ADJETIVO', question: '¿Cómo está? ¿Cómo es?', en: 'past participle as adjective', formula: ['nombre + participio', 'estar + participio (estado)'],
            meaning: 'El **participio** (ordenado, cerrado, conocido) viene de un verbo, pero aquí funciona como un **adjetivo**: describe una característica o el resultado de una acción. Por eso **concuerda** con el nombre en género y número.',
            examples: [
              { es: 'una película [[conocida|blue]]', en: 'a well-known film' },
              { es: 'unas puertas [[cerradas|blue]]', en: 'some closed doors' },
              { es: 'un restaurante [[recomendado|blue]]', en: 'a recommended restaurant' },
              { es: 'Las sillas están [[ordenadas|blue]].', en: 'The chairs are tidy.' },
            ],
            note: 'Con **estar**, el participio describe el **resultado** de una acción: alguien ordenó las sillas → las sillas están ordenadas.' },
          { kind: 'table', title: 'Cómo se forma', head: ['Verbo', 'Participio', 'Ejemplo'], rows: [
            ['-ar: preparar, ordenar', 'prepar[[ado|blue]], orden[[ado|blue]]', 'la sala [[preparada|blue]]'],
            ['-er: conocer, perder', 'conoc[[ido|blue]], perd[[ido|blue]]', 'un autor [[conocido|blue]]'],
            ['-ir: prohibir, dormir', 'prohib[[ido|blue]], dorm[[ido|blue]]', 'una entrada [[prohibida|blue]]'],
          ], note: 'Después cambia como un adjetivo en **-o**: ordenad**o**, ordenad**a**, ordenad**os**, ordenad**as**.' },
          { kind: 'table', title: 'Participios irregulares frecuentes', head: ['Verbo', 'Participio', 'Ejemplo'], rows: [
            ['abrir', '[[abierto|blue]]', 'la ventana [[abierta|blue]]'],
            ['escribir', '[[escrito|blue]]', 'un mensaje [[escrito|blue]] a mano'],
            ['romper', '[[roto|blue]]', 'unas sillas [[rotas|blue]]'],
            ['hacer', '[[hecho|blue]]', 'una mesa [[hecha|blue]] de madera'],
            ['imprimir', '[[impreso|blue]]', 'los documentos [[impresos|blue]]'],
          ], note: 'Los irregulares también concuerdan: abiert**a**, rot**as**, impres**os**.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '¿Qué participio concuerda?', options: ['una película conocido', 'una película conocida', 'una película conocidas'], answer: 1, why: '«Película» es femenino singular: conocida.' },
            { prompt: 'Las ventanas están ___.', options: ['abiertas', 'abiertos', 'abridas'], answer: 0, why: '«Abrir» tiene participio irregular, abierto; con «ventanas»: abiertas.' },
            { prompt: 'Los documentos ___ están en la entrada.', options: ['impreso', 'impresos', 'impresas'], answer: 1, why: '«Documentos»: masculino plural, impresos.' },
          ] },
        ] },
        { title: 'La gente, el equipo, la familia', mascot: '/brand/mascot/speaking.webp', coach: 'Muchas personas, pero un nombre singular.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'NOMBRES COLECTIVOS', question: '¿Singular o plural?', en: 'collective nouns', formula: ['la gente / el equipo / la familia / el grupo + verbo en singular'],
            meaning: 'Algunos nombres hablan de **muchas personas**, pero son **singulares**. El verbo y el adjetivo van en singular. El género también es el del nombre: «la gente» es femenino, «el equipo» es masculino.',
            examples: [
              { es: '[[La gente es|teal]] muy amable aquí.', en: 'People are very friendly here.' },
              { es: '[[Mi familia es|teal]] grande.', en: 'My family is big.' },
              { es: '[[El equipo está|teal]] preparado.', en: 'The team is ready.' },
              { es: '[[El grupo prefiere|teal]] la sala del primer piso.', en: 'The group prefers the room on the first floor.' },
            ] },
          { kind: 'compare', title: 'Atención: «gente» y «personas»', columns: [
            { tone: 'teal', label: 'LA GENTE · SINGULAR', sentence: '[[La gente está|teal]] cansad**a**.', idea: 'Un nombre singular y femenino.', en: 'People are tired.' },
            { tone: 'neutral', label: 'LAS PERSONAS · PLURAL', sentence: 'Las personas están cansad**as**.', idea: '«Personas» es plural: el verbo también.', en: 'The people are tired.' },
          ] },
          { kind: 'tip', icon: '!', title: 'En inglés es diferente', text: 'En inglés dices «people **are**». En español, «la gente **es**», «la gente **está**». Nunca «las gentes son» para hablar de un grupo.', en: 'people are → la gente es' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '¿Qué concordancia es adecuada?', options: ['La gente es amable.', 'La gente son amables.', 'Las gente es amable.'], answer: 0, why: '«Gente» es un nombre singular femenino.' },
            { prompt: 'Mi familia ___ en Valencia.', options: ['vive', 'viven', 'vivimos'], answer: 0, why: '«Mi familia» es singular: vive.' },
            { prompt: 'El equipo está muy ___.', options: ['contentos', 'contento', 'contenta'], answer: 1, why: '«El equipo» es masculino singular: contento.' },
          ] },
        ] },
        { title: 'Comparar cualidades', mascot: '/autoestudio/mascot/noting.webp', coach: 'Más, menos o igual.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'MÁS / MENOS… QUE', question: '¿Cuál tiene más? ¿Cuál tiene menos?', en: 'more / less … than', formula: ['más + adjetivo + que', 'menos + adjetivo + que'],
            meaning: 'Para decir que una cosa tiene **más** o **menos** de una cualidad que otra. El adjetivo concuerda con la **primera** cosa.',
            examples: [
              { es: 'La segunda sala es [[más grande que|orange]] la primera.', en: 'The second room is bigger than the first.' },
              { es: 'Este barrio es [[menos ruidoso que|orange]] el centro.', en: 'This neighbourhood is less noisy than the centre.' },
              { es: 'Las sillas nuevas son [[más cómodas que|orange]] las viejas.', en: 'The new chairs are more comfortable than the old ones.' },
            ] },
          { kind: 'concept', tone: 'orange', label: 'TAN… COMO', question: '¿Son iguales?', en: 'as … as', formula: ['tan + adjetivo + como', 'igual de + adjetivo (que)'],
            meaning: 'Para decir que dos cosas son **iguales** en una cualidad. También se dice **igual de** + adjetivo.',
            examples: [
              { es: 'Esta sala es [[tan tranquila como|orange]] la biblioteca.', en: 'This room is as quiet as the library.' },
              { es: 'El segundo libro es [[tan interesante como|orange]] el primero.', en: 'The second book is as interesting as the first.' },
              { es: 'Las dos salas son [[igual de tranquilas|orange]].', en: 'Both rooms are equally quiet.' },
            ] },
          { kind: 'table', title: 'Formas especiales', head: ['Adjetivo', 'Comparativo', 'Ejemplo'], rows: [
            ['bueno', '[[mejor|orange]] que', 'Esta opción es [[mejor que|orange]] la otra.'],
            ['malo', '[[peor|orange]] que', 'El ruido aquí es [[peor que|orange]] en casa.'],
          ], note: 'No decimos «más bueno» para la calidad: **mejor**. En plural: mejores, peores.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '¿Qué comparación está completa?', options: ['Es tan tranquila que esa.', 'Es tan tranquila como esa.', 'Es más tranquila como esa.'], answer: 1, why: 'Igualdad: tan + adjetivo + como.' },
            { prompt: 'Mi casa es ___ grande que la tuya: la tuya tiene cinco habitaciones y la mía, dos.', options: ['más', 'menos', 'tan'], answer: 1, why: 'Mi casa tiene menos habitaciones: menos grande que.' },
            { prompt: 'Este café es ___ que el de ayer: está delicioso.', options: ['más bueno', 'mejor', 'tan bueno'], answer: 1, why: 'El comparativo de «bueno» es «mejor».' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/seated.webp', coach: 'Tres preguntas para una descripción precisa.', blocks: [
          { kind: 'decide', title: 'Revisa tu descripción', steps: [
            { q: '¿Usas un participio (ordenado, abierto) para describir?', yes: 'Hazlo concordar con el nombre: «las mesas [[ordenadas|blue]]», «la ventana [[abierta|blue]]».', no: 'next' },
            { q: '¿El sujeto es gente, equipo, familia o grupo?', yes: 'Verbo y adjetivo en **singular**: «[[El equipo está|teal]] preparado».', no: 'next' },
            { q: '¿Comparas dos cosas?', yes: 'Diferentes: **más / menos + adjetivo + que**. Iguales: **tan + adjetivo + como**: «[[tan tranquila como|orange]]».', no: 'Tu descripción ya está completa: revisa solo la concordancia.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Que y como', text: '**Más** y **menos** van con **que**. **Tan** va con **como**. Nunca «tan… que» para comparar.' },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Estos errores son muy comunes.', blocks: [
          { kind: 'guide', text: { teacher: 'Pide al alumno que encuentre el error antes de mostrar la corrección. Pregunta: «¿Con qué palabra concuerda?».', self: 'Lee cada frase, busca el error y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'La gente son muy amables.', right: 'La gente es muy amable.', why: '«Gente» es singular.' },
            { wrong: 'Las ventanas están cerrados.', right: 'Las ventanas están cerradas.', why: 'El participio concuerda con «ventanas»: femenino plural.' },
            { wrong: 'La puerta está abrida.', right: 'La puerta está abierta.', why: '«Abrir» tiene participio irregular: abierto.' },
            { wrong: 'Es tan grande que la otra sala.', right: 'Es tan grande como la otra sala.', why: '«Tan» va con «como».' },
            { wrong: 'Esta sala es más mejor.', right: 'Esta sala es mejor.', why: '«Mejor» ya es comparativo: sin «más».' },
            { wrong: 'El equipo están preparados.', right: 'El equipo está preparado.', why: '«El equipo» es singular y masculino.' },
          ] },
          { kind: 'teacher', text: 'Pide al alumno que compare su habitación con otra de su casa usando un participio y una comparación: «Mi habitación está ordenada y es más pequeña que la sala».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Descripciones en situaciones reales', coach: 'Toca las expresiones marcadas.',
      steps: [
        { title: 'Elegir una sala de estudio', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada expresión marcada y explica por qué tiene esa forma.', self: 'Lee el diálogo. Después toca cada expresión marcada para descubrir por qué se usó.' } },
          { kind: 'explore', title: 'Dos salas en la biblioteca', setting: 'Paula, la coordinadora, visita dos salas con Nicolás. El equipo necesita un lugar para trabajar por las tardes.', lines: [
            { who: 'Paula', text: 'Mira la sala del primer piso: está [[iluminada|blue]] y las mesas están [[ordenadas|blue]].' },
            { who: 'Nicolás', text: 'Sí, pero la del segundo piso es [[más grande que|orange]] esta.' },
            { who: 'Paula', text: 'Es verdad, pero está [[menos organizada|orange]]. Hay sillas [[rotas|blue]] al fondo.' },
            { who: 'Nicolás', text: '¿Y el ruido? La calle es muy ruidosa.' },
            { who: 'Paula', text: 'Aquí las ventanas [[cerradas|blue]] reducen el ruido. Es [[tan tranquila como|orange]] la biblioteca.' },
            { who: 'Nicolás', text: '¿Qué piensa el equipo?' },
            { who: 'Paula', text: '[[La gente del equipo prefiere|teal]] esta sala. Dicen que es [[mejor que|orange]] la otra para concentrarse.' },
            { who: 'Nicolás', text: 'Perfecto. ¿Y los documentos [[impresos|blue]]?' },
            { who: 'Paula', text: 'Están cerca de la entrada. Todo está [[preparado|blue]] para mañana.' },
            { who: 'Nicolás', text: 'Entonces, el primer piso. [[El grupo está|teal]] de acuerdo.' },
          ], notes: {
            'iluminada': 'Participio de **iluminar**. Concuerda con «sala»: femenino singular.',
            'ordenadas': 'Participio de **ordenar**: el resultado. Concuerda con «mesas»: femenino plural.',
            'más grande que': '**Más + adjetivo + que**: la segunda sala tiene más espacio.',
            'menos organizada': '**Menos + participio**: la comparación se entiende sin «que» porque ya hablamos de la otra sala.',
            'rotas': 'Participio irregular de **romper**: roto → rotas, como «sillas».',
            'cerradas': 'Participio de **cerrar**, como adjetivo de «ventanas».',
            'tan tranquila como': '**Tan + adjetivo + como**: las dos tienen la misma tranquilidad.',
            'La gente del equipo prefiere': '«La gente» es **singular**: prefiere, no «prefieren». «Del equipo» no cambia el núcleo.',
            'mejor que': 'Comparativo de **bueno**: mejor que, sin «más».',
            'impresos': 'Participio irregular de **imprimir**. Concuerda con «documentos».',
            'preparado': 'Participio de **preparar**. Concuerda con «todo»: masculino singular.',
            'El grupo está': '«El grupo» es **singular**: está.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Qué sala es más grande?', options: ['La del primer piso.', 'La del segundo piso.', 'Son iguales.'], answer: 1, why: '«La del segundo piso es más grande que esta.»' },
            { prompt: '¿Por qué hay menos ruido en la primera sala?', options: ['Porque las ventanas están cerradas.', 'Porque es más grande.', 'Porque no hay gente.'], answer: 0, why: '«Las ventanas cerradas reducen el ruido.»' },
            { prompt: '¿Qué sala elige el equipo?', options: ['La del primer piso.', 'La del segundo piso.', 'Ninguna.'], answer: 0, why: '«Entonces, el primer piso. El grupo está de acuerdo.»' },
          ] },
        ] },
        { title: 'Comparar dos restaurantes', blocks: [
          { kind: 'explore', title: '¿Dónde celebramos?', setting: 'Sara y su hermano Óscar eligen un restaurante para el cumpleaños de su madre.', lines: [
            { who: 'Sara', text: 'Mira, este restaurante está muy [[recomendado|blue]] en internet.' },
            { who: 'Óscar', text: 'Sí, pero es [[más caro que|orange]] el restaurante de la plaza.' },
            { who: 'Sara', text: 'El de la plaza es [[menos conocido|orange]], pero la comida es [[igual de buena|orange]].' },
            { who: 'Óscar', text: '¿Tiene mesas [[reservadas|blue]] para grupos?' },
            { who: 'Sara', text: 'Sí. [[Nuestra familia es|teal]] grande: somos doce.' },
            { who: 'Óscar', text: 'Y [[la gente de la plaza es|teal]] muy amable. Mamá conoce al dueño.' },
            { who: 'Sara', text: 'Entonces, el de la plaza. Es [[tan bonito como|orange]] el otro y más barato.' },
            { who: 'Óscar', text: 'Perfecto. Llamo ahora: el salón del fondo está [[decorado|blue]] con flores.' },
          ], notes: {
            'recomendado': 'Participio de **recomendar**: describe el restaurante. Masculino singular.',
            'más caro que': '**Más + adjetivo + que**: diferencia de precio.',
            'menos conocido': '**Menos + participio**: «conocido» funciona como adjetivo.',
            'igual de buena': '**Igual de + adjetivo**: las dos comidas son iguales. «Buena» concuerda con «comida».',
            'reservadas': 'Participio de **reservar**. Concuerda con «mesas».',
            'Nuestra familia es': '«La familia» es **singular**: es grande, aunque son doce personas.',
            'la gente de la plaza es': '«La gente» es **singular**: es amable.',
            'tan bonito como': '**Tan + adjetivo + como**: igualdad.',
            'decorado': 'Participio de **decorar**. Concuerda con «el salón».',
          } },
          { kind: 'teacher', text: 'Pregunta: «¿Qué restaurante de tu ciudad es mejor que los otros? ¿Por qué?». Pide una comparación y un participio.' },
        ] },
        { title: '¿Qué herramienta es?', blocks: [
          { kind: 'classify', title: 'Clasifica las expresiones de las dos conversaciones', categories: [
            { id: 'part', label: 'Participio', tone: 'blue' },
            { id: 'col', label: 'Colectivo singular', tone: 'teal' },
            { id: 'comp', label: 'Comparación', tone: 'orange' },
          ], items: [
            { text: 'las mesas están ordenadas', answer: 'part', why: '«Ordenadas» es un participio que describe.' },
            { text: 'la gente del equipo prefiere', answer: 'col', why: '«La gente» con verbo en singular.' },
            { text: 'es más caro que el otro', answer: 'comp', why: 'Más + adjetivo + que.' },
            { text: 'nuestra familia es grande', answer: 'col', why: '«La familia» con verbo en singular.' },
            { text: 'unas sillas rotas', answer: 'part', why: '«Rotas», participio irregular de romper.' },
            { text: 'tan tranquila como la biblioteca', answer: 'comp', why: 'Tan + adjetivo + como.' },
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
            { context: 'Alguien cerró las ventanas.', prompt: 'Las ventanas están ___.', options: ['cerrado', 'cerradas', 'cerrada'], answer: 1, why: '«Ventanas»: femenino plural.' },
            { context: 'Todos los vecinos ayudan a los nuevos.', prompt: 'La gente del barrio ___ muy amable.', options: ['es', 'son', 'están'], answer: 0, why: '«La gente» es singular: es.' },
            { context: 'La primera sala tiene 40 m²; la segunda, 60 m².', prompt: 'La primera sala es ___ grande que la segunda.', options: ['más', 'menos', 'tan'], answer: 1, why: 'La primera es más pequeña: menos grande que.' },
            { context: 'Las dos playas son tranquilas.', prompt: 'Esta playa es tan tranquila ___ la otra.', options: ['que', 'como', 'de'], answer: 1, why: 'Tan + adjetivo + como.' },
            { context: 'El equipo terminó todo el trabajo.', prompt: 'El equipo está ___ para la presentación.', options: ['preparados', 'preparado', 'preparada'], answer: 1, why: '«El equipo»: masculino singular.' },
            { context: 'El hotel nuevo tiene mejores habitaciones.', prompt: 'El hotel nuevo es ___ el viejo.', options: ['más bueno que', 'mejor que', 'tan mejor como'], answer: 1, why: 'El comparativo de «bueno» es «mejor».' },
            { context: 'Alguien escribió la carta a mano.', prompt: 'Es una carta ___ a mano.', options: ['escribida', 'escrita', 'escrito'], answer: 1, why: 'Participio irregular: escrito → escrita, con «carta».' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '«La sala A es menos ruidosa que la B.» ¿Qué sala tiene más ruido?', options: ['La A.', 'La B.', 'Las dos igual.'], answer: 1, why: 'La A es menos ruidosa, así que la B tiene más ruido.' },
            { prompt: '«Este libro es tan interesante como el primero.» ¿Qué significa?', options: ['Los dos son igual de interesantes.', 'El primero es más interesante.', 'Este es más interesante.'], answer: 0, why: 'Tan… como = igualdad.' },
            { prompt: '¿Qué frase dice que alguien **ya ordenó** las mesas?', options: ['Las mesas están ordenadas.', 'Las mesas son grandes.'], answer: 0, why: '«Están ordenadas»: el resultado de la acción de ordenar.' },
            { prompt: '¿Qué frase es correcta?', options: ['La gente están contentos.', 'La gente está contenta.'], answer: 1, why: '«La gente»: singular y femenino.' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'Buscando apartamento', lines: [
            { who: 'Elisa', text: 'Vi dos apartamentos hoy. El primero es ___ grande que el segundo.', options: ['más', 'tan', 'como'], answer: 0, why: 'Más + adjetivo + que.' },
            { who: 'Javier', text: '¿Y el segundo? ¿Cómo está?', },
            { who: 'Elisa', text: 'Está muy bien. La cocina está ___ y todo está limpio.', options: ['renovada', 'renovado', 'renovadas'], answer: 0, why: '«Cocina»: femenino singular.' },
            { who: 'Javier', text: '¿Es tan luminoso ___ el primero?', options: ['que', 'como', 'de'], answer: 1, why: 'Tan + adjetivo + como.' },
            { who: 'Elisa', text: 'Sí, y la gente del edificio ___ muy simpática.', options: ['es', 'son', 'están'], answer: 0, why: '«La gente» es singular: es.' },
            { who: 'Javier', text: 'Entonces el segundo es ___ opción.', options: ['la mejor', 'la más buena', 'la más mejor'], answer: 0, why: '«Mejor» ya es comparativo: la mejor opción.' },
            { who: 'Elisa', text: 'Sí. Las ventanas están ___ hacia el parque.', options: ['abiertas', 'abridas', 'abiertos'], answer: 0, why: 'Participio irregular de abrir: abiertas, como «ventanas».' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Mi familia es muy grande.', ok: true, why: 'Correcta: «mi familia» es singular.' },
            { sentence: 'Los documentos están imprimidos y ordenadas.', ok: false, options: ['Los documentos están impresos y ordenados.', 'Los documentos están impresas y ordenados.', 'Los documentos están impreso y ordenado.'], answer: 0, why: '«Documentos»: masculino plural en los dos participios.' },
            { sentence: 'Esta ciudad es tan bonita que Lima.', ok: false, options: ['Esta ciudad es tan bonita como Lima.', 'Esta ciudad es más bonita como Lima.', 'Esta ciudad es tan bonita de Lima.'], answer: 0, why: '«Tan» va con «como».' },
            { sentence: 'El grupo están cansados.', ok: false, options: ['El grupo está cansado.', 'El grupo está cansados.', 'El grupo son cansados.'], answer: 0, why: '«El grupo» es singular y masculino.' },
            { sentence: 'Este restaurante es menos caro que el otro.', ok: true, why: 'Correcta: menos + adjetivo + que.' },
            { sentence: 'La ventana está rompida.', ok: false, options: ['La ventana está rota.', 'La ventana está roto.', 'La ventana es rompida.'], answer: 0, why: 'Participio irregular de romper: roto → rota.' },
          ] },
        ] },
        { title: 'Construye y transforma', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['es', 'La primera sala', 'más tranquila', 'que la segunda'], accept: ['La primera sala es más tranquila que la segunda'], en: 'The first room is quieter than the second.' },
            { tiles: ['está', 'El equipo', 'preparado'], accept: ['El equipo está preparado'], en: 'The team is ready.' },
            { tiles: ['son', 'Las sillas', 'tan cómodas', 'como los sillones'], accept: ['Las sillas son tan cómodas como los sillones'], en: 'The chairs are as comfortable as the armchairs.' },
            { tiles: ['ordenadas', 'Las mesas', 'están'], accept: ['Las mesas están ordenadas'], en: 'The tables are tidy.' },
          ] },
          { kind: 'rewrite', title: 'Escribe la frase de otra forma', items: [
            { prompt: 'un restaurante recomendado y conocido', instruction: 'Pásalo a plural con «unos».', accept: ['unos restaurantes recomendados y conocidos'] },
            { prompt: 'Alguien abrió la puerta.', instruction: 'Describe el resultado: «La puerta está…».', accept: ['La puerta está abierta'] },
            { prompt: 'La sala A es grande. La sala B es igual de grande.', instruction: 'Une las dos ideas con «tan… como».', accept: ['La sala A es tan grande como la sala B', 'La sala A es tan grande como la B', 'La sala B es tan grande como la sala A', 'La sala B es tan grande como la A'] },
            { prompt: 'Las personas del equipo están contentas.', instruction: 'Empieza con «La gente del equipo…».', accept: ['La gente del equipo está contenta'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'La visita a las dos salas', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'La visita a las dos salas', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha con la idea general. En la segunda, el alumno anota las ventajas de cada sala en dos columnas antes de responder.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Puedes bajar la velocidad.' } },
          { kind: 'listen', title: 'Paula visita las salas', channel: 'NOTA DE VOZ · PARA EL EQUIPO', src: '/audio/grammar-classroom/112.mp3',
            before: 'La coordinadora visita las dos salas y deja un mensaje al equipo. ¿Qué crees que va a recomendar: la sala grande o la sala preparada?',
            gist: { prompt: '¿Qué recomienda la coordinadora?', options: ['La primera sala para la reunión de mañana.', 'La segunda sala para todo.', 'Buscar otra sala.'], answer: 0, why: '«Yo elegiría la primera para la reunión de mañana.»' },
            details: [
              { prompt: '¿Cómo está la primera sala?', options: ['Preparada.', 'Desordenada.', 'Cerrada.'], answer: 0, why: '«La primera está preparada y las sillas están ordenadas.»' },
              { prompt: '¿Cómo es la primera sala comparada con la segunda?', options: ['Más grande.', 'Menos grande, pero igual de tranquila.', 'Más ruidosa.'], answer: 1, why: '«Es menos grande que la segunda, pero igual de tranquila.»' },
              { prompt: '¿Qué ventaja tiene la segunda sala?', options: ['Más luz.', 'Sillas ordenadas.', 'Documentos preparados.'], answer: 0, why: '«La segunda tiene más luz.»' },
              { prompt: '¿Qué problema tiene la segunda sala?', options: ['Los documentos están mezclados.', 'No tiene ventanas.', 'Es muy pequeña.'], answer: 0, why: '«Los documentos están mezclados y la gente necesita tiempo para organizarla.»' },
              { prompt: '¿Para qué puede servir la sala grande?', options: ['Para un curso con más participantes.', 'Para la reunión de mañana.', 'Para guardar documentos.'], answer: 0, why: '«…pensar si la sala grande sirve para un curso con más participantes.»' },
            ],
            transcript: 'Hola, ya vi las dos salas. La primera está [[preparada|blue]] y las sillas están [[ordenadas|blue]]. Es [[menos grande que|orange]] la segunda, pero [[igual de tranquila|orange]]. [[El equipo está contento|teal]] con esa opción. La segunda tiene [[más luz|orange]], aunque los documentos están [[mezclados|blue]] y [[la gente necesita|teal]] tiempo para organizarla. Yo elegiría la primera para la reunión de mañana. Después podemos comparar las fotos y pensar si la sala grande sirve para un curso con más participantes.',
            reply: { teacher: 'El alumno responde a la coordinadora en voz alta: ¿está de acuerdo? Compara las dos salas con una frase con «más / menos… que» y otra con un participio.', self: 'Responde al mensaje: ¿qué sala prefieres para mañana y por qué? Usa una comparación y un participio («está preparada»).' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Comparar y elegir', coach: 'Una pregunta por vez. Compara y decide.',
      steps: [
        { title: 'Comparar y elegir', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Pide siempre una razón concreta para cada elección y comparte también tu opinión.', self: 'Responde cada pregunta en voz alta. En cada respuesta, usa una comparación o un participio.' } },
          { kind: 'talk', cards: [
            { q: '¿Dónde estudias o trabajas mejor: en casa o en una biblioteca? ¿Por qué?', followUps: ['¿Qué lugar es más tranquilo?', '¿Cuál es más cómodo?', '¿Son igual de prácticos?'], phrases: ['Mi casa es [[más cómoda que|orange]]…', 'La biblioteca es [[tan tranquila como|orange]]…', 'Estudio [[mejor|orange]] en…'], hint: 'Elige dos cualidades: una con «más / menos… que» y otra con «tan… como».', example: 'Estudio mejor en la biblioteca. Mi casa es más cómoda que la biblioteca, pero es menos tranquila: mis hijos hacen ruido.', next: 'Ahora, describe tu espacio.' },
            { q: '¿Cómo está tu espacio de trabajo hoy?', followUps: ['¿Está ordenado o desordenado?', '¿Las ventanas están abiertas o cerradas?', '¿Hay algo roto?'], phrases: ['Mi mesa está [[ordenada|blue]].', 'Las ventanas están [[cerradas|blue]].', 'Hay una lámpara [[rota|blue]].'], hint: 'Con «estar» + participio describes el resultado. Mira el género y el número.', example: 'Hoy mi mesa está ordenada, pero los libros están mezclados. La ventana está abierta porque hace calor.', next: 'Hablemos de grupos de personas.', teacher: 'Pide un antes y un después: «Antes estaba desordenada; ahora está ordenada».' },
            { q: '¿Cómo es la gente de tu ciudad o de tu barrio?', followUps: ['¿Y tu familia? ¿Es grande?', '¿Tu equipo de trabajo está contento?', '¿Tu grupo de amigos sale mucho?'], phrases: ['[[La gente es|teal]]…', '[[Mi familia es|teal]]…', '[[Mi equipo está|teal]]…'], hint: 'Gente, familia, equipo y grupo: verbo y adjetivo en singular.', example: 'La gente de mi barrio es muy amable. Mi familia es pequeña: somos tres. Mi equipo está contento con el nuevo proyecto.', next: 'Ahora compara dos lugares de tu ciudad.' },
            { q: 'Recomienda un restaurante o un café de tu ciudad. Compáralo con otro.', followUps: ['¿Es más caro o más barato?', '¿Está recomendado en internet?', '¿Es tan conocido como el otro?'], phrases: ['Es [[más barato que|orange]]…', 'Está muy [[recomendado|blue]].', 'Es [[menos conocido|orange]], pero…'], hint: 'Un participio (recomendado, conocido) y una comparación.', example: 'Recomiendo un café pequeño cerca de mi casa. Es menos conocido que los cafés del centro, pero es más barato y el café es mejor.', next: 'Imagina ahora una decisión de grupo.' },
            { q: 'Tu grupo tiene que elegir una sala para una fiesta. ¿Qué es más importante?', followUps: ['¿Grande o bonita?', '¿Preparada o barata?', '¿Qué prefiere la gente de tu grupo?'], phrases: ['Una sala [[decorada|blue]] es…', 'Es [[más importante que|orange]]…', '[[El grupo prefiere|teal]]…'], hint: 'Explica tu elección con una comparación y di qué prefiere el grupo (singular).', example: 'Para mí, una sala preparada es más importante que una sala grande. El grupo prefiere un lugar tan bonito como el del año pasado.', next: 'Para terminar, una comparación personal.' },
            { q: '¿Tu vida es más tranquila o menos tranquila que hace cinco años?', followUps: ['¿Qué es mejor ahora?', '¿Qué es peor?', '¿Qué es igual?'], phrases: ['Mi vida es [[más tranquila que|orange]] antes.', 'Ahora estoy [[mejor|orange]]…', 'Es [[igual de|orange]]…'], hint: 'Puedes comparar con «antes»: «más tranquila que antes».', example: 'Mi vida es menos tranquila que antes porque tengo un trabajo nuevo, pero es más interesante. Mi familia es igual de importante para mí.', teacher: 'Deja hablar al alumno con libertad; corrige solo la concordancia y la estructura de la comparación.' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno te pide comparar dos lugares de tu ciudad.', self: 'Escribe dos preguntas con «¿Qué es más… : … o …?» y «¿Es tan… como…?» y házselas a alguien esta semana.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una recomendación para el equipo', coach: 'Compara, describe y recomienda.',
      steps: [
        { title: 'Una recomendación para el equipo', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Usen la revisión automática y después revisen juntos la concordancia de los participios y de los colectivos.', self: 'Escribe tu recomendación y toca «Revisar mi texto». Comprueba que cada participio concuerda y que «la gente», «el equipo» van en singular.' } },
          { kind: 'write', title: '¿Qué opción recomiendas?', situation: 'Tu equipo, tu familia o tu grupo de amigos necesita elegir un lugar: una sala, un apartamento de vacaciones o un restaurante. Escribe una recomendación.', task: [
            'Presenta las **dos opciones** y **compáralas** con más / menos… que.',
            'Describe el **estado** de las cosas con participios: preparada, ordenadas, reservadas.',
            'Di qué **prefiere** el grupo (la gente, el equipo, la familia).',
            'Usa **tan… como** y termina con tu recomendación.',
          ], starters: ['Recomiendo…', 'La primera opción es más… que…', 'La segunda está…', 'La gente del equipo…', 'Es tan… como…', 'Por eso…'],
            words: ['preparado', 'ordenado', 'reservado', 'cerrado', 'abierto', 'mejor que', 'menos… que', 'tan… como', 'el grupo prefiere'],
            model: 'Recomiendo la sala del primer piso. Es [[más pequeña que|orange]] la otra, pero está [[preparada|blue]]. Las mesas están [[ordenadas|blue]] y los documentos [[impresos|blue]] están cerca de la puerta. [[La gente del equipo está|teal]] contenta con esta opción. Es [[tan tranquila como|orange]] la biblioteca y sirve para la reunión de mañana.',
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
            { tone: 'blue', label: 'PARTICIPIO', formula: 'nombre + participio · estar + participio', example: 'Las mesas están ordenadas.', caption: 'Describe un estado. Concuerda.', en: 'participle as adjective' },
            { tone: 'teal', label: 'COLECTIVO', formula: 'la gente / el equipo + verbo singular', example: 'La gente del equipo está contenta.', caption: 'Muchas personas, nombre singular.', en: 'collective noun' },
            { tone: 'orange', label: 'COMPARAR', formula: 'más / menos + adj. + que · tan + adj. + como', example: 'Es tan tranquila como la biblioteca.', caption: 'Diferencia o igualdad.', en: 'comparison' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Revisa la concordancia', text: 'El participio concuerda con su nombre. Con **gente, equipo, familia, grupo**: singular. Con **más / menos**: que. Con **tan**: como.' },
        ] },
        { title: 'Desafío final', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: 'Las puertas están ___.', options: ['abiertas', 'abridas', 'abiertos'], answer: 0, why: 'Participio irregular de abrir, femenino plural.' },
            { prompt: 'La gente de este pueblo ___ muy tranquila.', options: ['son', 'es', 'están'], answer: 1, why: '«La gente» es singular.' },
            { prompt: 'Mi coche es menos rápido ___ el tuyo.', options: ['como', 'que', 'de'], answer: 1, why: 'Menos + adjetivo + que.' },
            { prompt: 'Este hotel es ___ cómodo como el otro.', options: ['más', 'tan', 'menos'], answer: 1, why: 'Con «como», la igualdad: tan.' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: describe el estado de varias mesas y elige una comparación. Respuesta modelo: «Las mesas están ordenadas; la sala es más tranquila que la otra».' },
        ] },
      ],
    },
  ],
};
