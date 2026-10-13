import type { LiveLesson } from '../types';

/**
 * Lesson 48 · A1 · Ser, estar y hay.
 * Core: ser identifies and characterises, estar locates and describes states,
 * hay presents existence. Julia's new office runs through the class.
 */
export const lesson: LiveLesson = {
  id: 48,
  level: 'A1',
  title: 'Ser, estar y hay',
  subtitle: 'Describir personas y lugares: decir qué es algo, dónde está, cómo está hoy y qué hay en un lugar.',
  legend: [
    { tone: 'blue', label: 'Ser · qué es, cómo es' },
    { tone: 'teal', label: 'Estar · dónde está, cómo está' },
    { tone: 'orange', label: 'Hay · qué cosas existen en un lugar' },
  ],
  optionNotes: {
    es: '«Es» (ser) dice qué es algo o cómo es: la profesión, el origen, una característica.',
    son: '«Son» (ser) dice qué son o cómo son varias cosas o personas.',
    soy: '«Soy» (ser) es para «yo»: mi nombre, mi profesión, mi origen.',
    está: '«Está» (estar) dice dónde está algo concreto o cómo está ahora.',
    están: '«Están» (estar) dice dónde están varias cosas concretas o cómo están ahora.',
    estoy: '«Estoy» (estar) es para «yo»: dónde estoy o cómo estoy.',
    hay: '«Hay» presenta algo nuevo en un lugar: hay una mesa, hay dos sillas. Nunca cambia.',
    Hay: '«Hay» presenta algo nuevo en un lugar: hay una mesa, hay dos sillas. Nunca cambia.',
    han: '«Han» no sirve aquí: para presentar cosas, siempre «hay», también en plural.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Ser, estar y hay', coach: 'Tres verbos, tres preguntas.',
      steps: [
        { title: 'Tres verbos, tres preguntas', blocks: [
          { kind: 'lead', text: 'Julia tiene una oficina nueva. Mira estas tres frases: cada verbo responde a **una pregunta diferente**.', en: 'Ser: what is it? Estar: where is it / how is it now? Hay: what is there?' },
          { kind: 'guide', text: { teacher: 'Lee las tres frases en voz alta. Antes de explicar, pregunta: «¿Qué pregunta responde cada frase?».', self: 'Lee las tres frases y piensa: ¿qué pregunta responde cada una?' } },
          { kind: 'compare', title: 'La misma oficina, tres informaciones', columns: [
            { tone: 'blue', label: 'SER', sentence: 'La oficina [[es|blue]] pequeña.', idea: '¿Cómo es? Una característica de la oficina.', en: 'The office is small.' },
            { tone: 'teal', label: 'ESTAR', sentence: 'La oficina [[está|teal]] en una calle tranquila.', idea: '¿Dónde está? La ubicación.', en: 'The office is on a quiet street.' },
            { tone: 'orange', label: 'HAY', sentence: 'En la oficina [[hay|orange]] dos mesas.', idea: '¿Qué hay? Las cosas que existen allí.', en: 'There are two tables in the office.' },
          ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '¿Qué frase dice **dónde** está algo?', options: ['La oficina es pequeña.', 'La oficina está cerca de mi casa.', 'Hay una panadería.'], answer: 1, why: 'La ubicación va con estar: está cerca de mi casa.' },
            { prompt: '¿Qué frase presenta **algo nuevo** en un lugar?', options: ['Hay una panadería en la esquina.', 'La panadería es grande.', 'La panadería está en la esquina.'], answer: 0, why: '«Hay» presenta algo que existe en un lugar.' },
          ] },
        ] },
        { title: 'Ser: qué es y cómo es', mascot: '/brand/mascot/studying.webp', coach: 'Ser dice qué es algo o alguien.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'SER', question: '¿Qué es? ¿Quién es? ¿Cómo es?', en: 'to be (identity, description)', formula: ['sujeto + ser + nombre', 'sujeto + ser + adjetivo'],
            meaning: '**Ser** identifica: dice el nombre, la profesión, el origen. También dice **cómo es** algo o alguien: sus características.',
            examples: [
              { es: '[[Soy|blue]] Julia.', en: 'I am Julia.' },
              { es: 'Mi compañero [[es|blue]] diseñador.', en: 'My colleague is a designer.' },
              { es: 'Mis vecinos [[son|blue]] de Perú.', en: 'My neighbours are from Peru.' },
              { es: 'La oficina [[es|blue]] pequeña y moderna.', en: 'The office is small and modern.' },
            ] },
          { kind: 'table', title: 'Ser en presente', head: ['Persona', 'Ser', 'Ejemplo'], rows: [
            ['yo', '[[soy|blue]]', '[[Soy|blue]] profesora.'],
            ['tú', '[[eres|blue]]', '[[Eres|blue]] muy simpático.'],
            ['él, ella, usted', '[[es|blue]]', 'Julia [[es|blue]] diseñadora.'],
            ['nosotros, nosotras', '[[somos|blue]]', '[[Somos|blue]] compañeros.'],
            ['vosotros, vosotras', '[[sois|blue]]', '[[Sois|blue]] de Madrid.'],
            ['ellos, ellas, ustedes', '[[son|blue]]', 'Las sillas [[son|blue]] azules.'],
          ], note: '**Ser** es irregular: sus formas no se parecen al infinitivo. Apréndelas de memoria. «Vosotros» se usa en España; en América se dice «ustedes».' },
          { kind: 'tip', icon: '!', title: 'La profesión, sin «un»', text: 'Con la profesión no usamos «un» ni «una»: «Julia es diseñadora», no «Julia es una diseñadora».', en: 'She is a designer → Es diseñadora.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Mi hermana ___ médica.', options: ['es', 'está', 'hay'], answer: 0, why: 'La profesión va con ser.' },
            { prompt: 'Nosotros ___ de Colombia.', options: ['somos', 'estamos', 'son'], answer: 0, why: 'El origen va con ser; para «nosotros», somos.' },
            { prompt: 'La biblioteca ___ muy bonita.', options: ['es', 'hay', 'son'], answer: 0, why: '«Bonita» es una característica de la biblioteca: ser.' },
          ] },
        ] },
        { title: 'Estar: dónde está y cómo está', mascot: '/brand/mascot/speaking.webp', coach: 'Estar dice dónde y cómo está algo ahora.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'ESTAR', question: '¿Dónde está? ¿Cómo está hoy?', en: 'to be (location, state)', formula: ['el / la / mi + nombre + estar + lugar', 'sujeto + estar + estado'],
            meaning: '**Estar** dice **dónde** está algo o alguien concreto. También dice **cómo está** en este momento: ordenado, abierto, cansado, listo.',
            examples: [
              { es: 'Mi mesa [[está|teal]] junto a la ventana.', en: 'My desk is next to the window.' },
              { es: 'Hoy la oficina [[está|teal]] muy ordenada.', en: 'Today the office is very tidy.' },
              { es: 'La puerta azul [[está|teal]] abierta.', en: 'The blue door is open.' },
              { es: '[[Estoy|teal]] cansada: trabajo mucho.', en: 'I am tired: I work a lot.' },
            ] },
          { kind: 'table', title: 'Estar en presente', head: ['Persona', 'Estar', 'Ejemplo'], rows: [
            ['yo', '[[estoy|teal]]', '[[Estoy|teal]] en casa.'],
            ['tú', '[[estás|teal]]', '¿Dónde [[estás|teal]]?'],
            ['él, ella, usted', '[[está|teal]]', 'La mesa [[está|teal]] aquí.'],
            ['nosotros, nosotras', '[[estamos|teal]]', '[[Estamos|teal]] listos.'],
            ['vosotros, vosotras', '[[estáis|teal]]', '[[Estáis|teal]] en la oficina.'],
            ['ellos, ellas, ustedes', '[[están|teal]]', 'Las llaves [[están|teal]] en el bolso.'],
          ], note: 'Atención a las tildes: est**á**s, est**á**, est**á**n. «Estoy» termina en **-oy**, como «soy».' },
          { kind: 'tip', icon: '🔑', title: 'Ubicación: siempre estar', text: 'Para decir dónde está algo concreto, usa **estar**, aunque no cambie de lugar: «Madrid **está** en España», «La oficina **está** en el centro».', en: 'Location → estar' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Las llaves ___ en mi bolso.', options: ['son', 'están', 'hay'], answer: 1, why: 'Dónde están las llaves concretas: estar.' },
            { prompt: 'Hoy ___ muy cansado.', options: ['soy', 'estoy', 'hay'], answer: 1, why: 'Cómo estoy ahora, un estado: estar.' },
            { prompt: 'La ventana ___ abierta.', options: ['es', 'está', 'hay'], answer: 1, why: '«Abierta» es un estado ahora: estar.' },
          ] },
        ] },
        { title: 'Hay: qué cosas hay', mascot: '/autoestudio/mascot/noting.webp', coach: 'Hay presenta cosas nuevas.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'HAY', question: '¿Qué hay?', en: 'there is · there are', formula: ['hay + un / una + nombre', 'hay + número / muchos + nombre', 'hay + nombre (sin artículo)'],
            meaning: '**Hay** presenta cosas o personas **nuevas** en un lugar: dice que existen. **Nunca cambia**: hay una silla, hay dos sillas.',
            examples: [
              { es: '[[Hay|orange]] una panadería en la esquina.', en: 'There is a bakery on the corner.' },
              { es: '[[Hay|orange]] dos cafeterías frente al edificio.', en: 'There are two cafés in front of the building.' },
              { es: 'En la sala [[hay|orange]] muchas sillas libres.', en: 'There are a lot of free chairs in the room.' },
              { es: '¿[[Hay|orange]] agua en la nevera?', en: 'Is there water in the fridge?' },
            ],
            note: 'Después de «hay» **no** va «el», «la», «los» ni «las». Va «un», «una», un número, «mucho» o el nombre solo.' },
          { kind: 'compare', title: 'Hay o está: algo nuevo o algo conocido', columns: [
            { tone: 'orange', label: 'HAY + UNA', sentence: '[[Hay|orange]] **una** mesa junto a la puerta.', idea: 'Presento la mesa: es nueva en la conversación.', en: 'There is a table…' },
            { tone: 'teal', label: 'LA + ESTÁ', sentence: '**La** mesa [[está|teal]] junto a la puerta.', idea: 'Ya sabemos qué mesa es: digo dónde está.', en: 'The table is…' },
          ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'En mi barrio ___ tres parques.', options: ['hay', 'están', 'son'], answer: 0, why: 'Presentas los parques con un número: hay.' },
            { prompt: '¿Dónde ___ el baño, por favor?', options: ['hay', 'está', 'es'], answer: 1, why: '«El baño» es concreto: preguntas dónde está.' },
            { prompt: 'En la oficina ___ una silla para las visitas.', options: ['está', 'hay', 'es'], answer: 1, why: '«Una silla»: algo nuevo, con «una». Hay.' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/seated.webp', coach: 'Tres preguntas y ya sabes cuál usar.', blocks: [
          { kind: 'decide', title: 'Piensa en una frase y responde', steps: [
            { q: '¿Presentas algo nuevo con «un», «una», un número o sin artículo?', yes: 'Usa **hay**: «[[Hay|orange]] una cafetería cerca».', no: 'next' },
            { q: '¿Dices dónde está algo, o cómo está ahora (abierto, cansado, ordenado)?', yes: 'Usa **estar**: «La cafetería [[está|teal]] cerca» · «[[Está|teal]] cerrada».', no: 'next' },
            { q: '¿Dices qué es, quién es, de dónde es o cómo es?', yes: 'Usa **ser**: «[[Es|blue]] una cafetería pequeña» · «[[Es|blue]] muy bonita».', no: 'Lee otra vez la frase: casi siempre es una de estas tres preguntas.' },
          ] },
          { kind: 'tip', icon: '👀', title: 'Dos frases juntas', text: 'Primero presentamos con **hay**, después damos detalles con **ser** y **estar**: «[[Hay|orange]] una cafetería nueva. [[Es|blue]] pequeña y [[está|teal]] frente al edificio».' },
          { kind: 'tip', icon: '⚖', title: '¿Es o está + adjetivo?', text: '**Ser** describe cómo es algo normalmente: «La oficina **es** pequeña». **Estar** describe cómo está en este momento: «Hoy la oficina **está** ordenada».', en: 'es = what it is like · está = how it is now' },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Estos errores son muy comunes.', blocks: [
          { kind: 'guide', text: { teacher: 'Pide al alumno que encuentre el error antes de mostrar la corrección. Pregunta: «¿Qué pregunta responde la frase?».', self: 'Lee cada frase, busca el error y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'La oficina es en el centro.', right: 'La oficina está en el centro.', why: 'Para la ubicación usamos estar.' },
            { wrong: 'Hay la cafetería cerca.', right: 'Hay una cafetería cerca. / La cafetería está cerca.', why: 'Después de «hay» no va «la». Con «la», usa estar.' },
            { wrong: 'Están dos sillas en la sala.', right: 'Hay dos sillas en la sala.', why: 'Para presentar cosas con un número, usa hay.' },
            { wrong: 'Mi compañero está diseñador.', right: 'Mi compañero es diseñador.', why: 'La profesión va con ser.' },
            { wrong: 'Julia es una diseñadora.', right: 'Julia es diseñadora.', why: 'Con la profesión, sin «una».' },
            { wrong: 'Hoy soy muy cansada.', right: 'Hoy estoy muy cansada.', why: 'Cansada es un estado de ahora: estar.' },
          ] },
          { kind: 'teacher', text: 'Pide al alumno tres frases sobre la habitación donde está: una con hay, una con estar (ubicación) y una con ser (característica).' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Ser, estar y hay en situaciones reales', coach: 'Toca los verbos marcados.',
      steps: [
        { title: 'La oficina nueva de Julia', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada verbo marcado y explica por qué se usó.', self: 'Lee el diálogo. Después toca cada verbo marcado para descubrir por qué se usó.' } },
          { kind: 'explore', title: 'Una visita a la oficina', setting: 'Julia enseña su oficina nueva a su amiga Clara.', lines: [
            { who: 'Clara', text: '¡Qué bonita! ¿Esta [[es|blue]] tu oficina nueva?' },
            { who: 'Julia', text: 'Sí. [[Es|blue]] pequeña, pero me gusta mucho.' },
            { who: 'Clara', text: '¿Y [[está|teal]] cerca de tu casa?' },
            { who: 'Julia', text: 'Sí, a diez minutos. [[Está|teal]] en una calle muy tranquila.' },
            { who: 'Clara', text: '¿Qué [[hay|orange]] en el barrio?' },
            { who: 'Julia', text: '[[Hay|orange]] una panadería en la esquina y dos cafeterías frente al edificio.' },
            { who: 'Clara', text: '¿Dónde [[está|teal]] tu mesa?' },
            { who: 'Julia', text: 'Allí, junto a la ventana. Y [[hay|orange]] una silla libre para las visitas.' },
            { who: 'Clara', text: 'Todo [[está|teal]] muy ordenado.' },
            { who: 'Julia', text: '¡Hoy sí! Mi compañero Iván [[es|blue]] diseñador y [[es|blue]] muy ordenado.' },
            { who: 'Clara', text: '¿Y él dónde [[está|teal]] ahora?' },
            { who: 'Julia', text: '[[Está|teal]] en la cafetería. ¿Vamos con él?' },
          ], notes: {
            'es': '**Ser** identifica (esta es tu oficina) o dice cómo es alguien: diseñador, ordenado.',
            'Es': '**Ser** + adjetivo: «pequeña» es una característica de la oficina.',
            'está': '**Estar** para la ubicación (cerca, dónde) o para un estado de hoy: todo está ordenado.',
            'Está': '**Estar** dice dónde está algo o alguien concreto: la oficina, Iván.',
            'hay': '**Hay** presenta cosas que existen en un lugar: qué hay en el barrio, una silla libre.',
            'Hay': '**Hay** + una / dos: presenta la panadería y las cafeterías por primera vez.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Cómo es la oficina de Julia?', options: ['Grande.', 'Pequeña.', 'Ruidosa.'], answer: 1, why: '«Es pequeña, pero me gusta mucho.»' },
            { prompt: '¿Qué hay frente al edificio?', options: ['Una panadería.', 'Dos cafeterías.', 'Una silla libre.'], answer: 1, why: '«Hay una panadería en la esquina y dos cafeterías frente al edificio.»' },
            { prompt: '¿Dónde está Iván ahora?', options: ['En su mesa.', 'En la cafetería.', 'En la panadería.'], answer: 1, why: '«Está en la cafetería.»' },
          ] },
        ] },
        { title: 'Un mensaje para encontrarse', blocks: [
          { kind: 'explore', title: '¿Dónde estás?', setting: 'Clara y Julia quieren ir a la cafetería, pero Clara no la encuentra.', lines: [
            { who: 'Clara', text: 'Julia, [[estoy|teal]] en la plaza. ¿Dónde [[está|teal]] la cafetería?' },
            { who: 'Julia', text: '¿Ves la farmacia? La cafetería [[está|teal]] al lado.' },
            { who: 'Clara', text: 'Aquí [[hay|orange]] dos farmacias.' },
            { who: 'Julia', text: 'La farmacia verde. La cafetería [[es|blue]] muy pequeña.' },
            { who: 'Clara', text: '¡Ah, sí! ¿[[Es|blue]] la cafetería de la puerta roja?' },
            { who: 'Julia', text: 'Sí, esa. [[Estamos|teal]] en la terraza.' },
            { who: 'Clara', text: 'Perfecto. ¿[[Hay|orange]] mesas libres?' },
            { who: 'Julia', text: 'Sí, [[hay|orange]] una mesa para ti. Iván y yo [[estamos|teal]] listos para pedir.' },
          ], notes: {
            'estoy': 'Clara dice **dónde está** ella: en la plaza.',
            'está': 'Pregunta y respuesta sobre la **ubicación** de una cafetería concreta.',
            'hay': '**Hay** presenta cosas: dos farmacias, una mesa. Con un número o con «una».',
            'es': '«Pequeña» es una **característica** de la cafetería: ser.',
            'Es': '**Ser** identifica: ¿es esta la cafetería? Clara quiere saber **cuál** es.',
            'Estamos': '**Estar** + lugar: dónde están Julia e Iván ahora.',
            'Hay': '¿**Hay** mesas libres? Preguntamos si existen, sin artículo.',
            'estamos': '**Estar** + listos: un estado en este momento.',
          } },
          { kind: 'teacher', text: 'Pregunta: «¿Qué hay cerca de tu casa? ¿Dónde está?». Pide dos frases: una con hay y otra con está.' },
        ] },
        { title: '¿Ser, estar o hay?', blocks: [
          { kind: 'classify', title: 'Clasifica las frases de las dos conversaciones', categories: [
            { id: 'ser', label: 'Ser · qué es, cómo es', tone: 'blue' },
            { id: 'estar', label: 'Estar · dónde, cómo está', tone: 'teal' },
            { id: 'hay', label: 'Hay · qué existe', tone: 'orange' },
          ], items: [
            { text: 'La oficina ___ pequeña.', answer: 'ser', why: 'Una característica: es pequeña.' },
            { text: 'La oficina ___ en una calle tranquila.', answer: 'estar', why: 'Ubicación: está.' },
            { text: '___ una panadería en la esquina.', answer: 'hay', why: 'Presenta algo nuevo con «una»: hay.' },
            { text: 'Iván ___ diseñador.', answer: 'ser', why: 'Profesión: es.' },
            { text: 'Todo ___ muy ordenado hoy.', answer: 'estar', why: 'Un estado de hoy: está.' },
            { text: 'Aquí ___ dos farmacias.', answer: 'hay', why: 'Presenta cosas con un número: hay.' },
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
            { context: 'Julia diseña carteles: es su trabajo.', prompt: 'Julia ___ diseñadora.', options: ['es', 'está', 'hay'], answer: 0, why: 'La profesión va con ser.' },
            { context: 'Sabemos qué mesa es: la mesa de siempre.', prompt: 'La mesa ___ junto a la ventana.', options: ['es', 'hay', 'está'], answer: 2, why: 'Ubicación de una mesa conocida: está.' },
            { context: 'Presentas las sillas por primera vez.', prompt: 'En la oficina ___ dos sillas libres.', options: ['están', 'hay', 'son'], answer: 1, why: 'Hay presenta cosas nuevas y no cambia en plural.' },
            { context: 'Después de la limpieza, la oficina tiene todo en su lugar.', prompt: 'La oficina ___ ordenada.', options: ['está', 'es', 'hay'], answer: 0, why: 'Es un estado de ahora, después de limpiar: está.' },
            { context: 'Hablas de tu origen.', prompt: 'Yo ___ de Chile.', options: ['estoy', 'soy', 'hay'], answer: 1, why: 'El origen va con ser: soy de Chile.' },
            { context: 'Preguntas a un amigo por teléfono.', prompt: '¿Dónde ___ ahora?', options: ['eres', 'estás', 'hay'], answer: 1, why: 'La ubicación de una persona: estás.' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿Qué frase dice cómo es la oficina **normalmente**?', options: ['La oficina es tranquila.', 'Hoy la oficina está tranquila.'], answer: 0, why: '«Es tranquila» describe una característica. «Está tranquila hoy» habla de este momento.' },
            { prompt: '¿Qué frase presenta una cafetería **por primera vez**?', options: ['Hay una cafetería cerca.', 'La cafetería está cerca.'], answer: 0, why: '«Hay una…» presenta algo nuevo. «La cafetería está…» habla de una cafetería conocida.' },
            { prompt: '«La puerta azul está abierta.» ¿Qué significa?', options: ['Ahora la puerta no está cerrada.', 'La puerta es de color abierto.', 'Hay una puerta azul nueva.'], answer: 0, why: '«Está abierta» es un estado en este momento.' },
            { prompt: '¿Qué frase habla de la **profesión** de Iván?', options: ['Iván está en la oficina.', 'Iván es diseñador.', 'Hay un diseñador.'], answer: 1, why: 'La profesión va con ser.' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'Buscando apartamento', lines: [
            { who: 'Ana', text: 'Hola, llamo por el apartamento. ¿___ grande?', options: ['Es', 'Está', 'Hay'], answer: 0, why: 'Ana pregunta por una característica del apartamento: es.' },
            { who: 'Señor Ruiz', text: 'No muy grande, pero ___ dos habitaciones.', options: ['hay', 'están', 'son'], answer: 0, why: 'Presenta las habitaciones con un número: hay.' },
            { who: 'Ana', text: '¿Y dónde ___ el apartamento?', options: ['es', 'está', 'hay'], answer: 1, why: 'Ubicación: está.' },
            { who: 'Señor Ruiz', text: '___ en el centro, cerca del metro.', options: ['Es', 'Está', 'Hay'], answer: 1, why: 'Ubicación: está.' },
            { who: 'Ana', text: '¿___ un supermercado cerca?', options: ['Está', 'Es', 'Hay'], answer: 2, why: 'Pregunta si existe un supermercado, con «un»: hay.' },
            { who: 'Señor Ruiz', text: 'Sí, en la esquina. Y hoy el apartamento ___ limpio y listo para visitar.', options: ['es', 'está', 'hay'], answer: 1, why: '«Limpio y listo» describen cómo está el apartamento hoy: está.' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'El museo es en la plaza.', ok: false, options: ['El museo está en la plaza.', 'El museo hay en la plaza.', 'Hay el museo en la plaza.'], answer: 0, why: 'Ubicación: estar.' },
            { sentence: 'Hay una farmacia en mi calle.', ok: true, why: 'Correcta: hay + una + nombre.' },
            { sentence: 'Hay los libros en la mesa.', ok: false, options: ['Los libros hay en la mesa.', 'Los libros están en la mesa.', 'Los libros son en la mesa.'], answer: 1, why: 'Con «los», no usamos hay. Los libros concretos: están.' },
            { sentence: 'Mi madre es profesora.', ok: true, why: 'Correcta: profesión con ser, sin «una».' },
            { sentence: 'Hoy soy muy contento.', ok: false, options: ['Hoy estoy muy contento.', 'Hoy hay muy contento.', 'Hoy es muy contento.'], answer: 0, why: 'Un estado de hoy: estoy.' },
            { sentence: 'En el parque están muchos niños.', ok: false, options: ['En el parque son muchos niños.', 'En el parque hay muchos niños.', 'En el parque hay los niños.'], answer: 1, why: 'Presentas a los niños con «muchos»: hay.' },
          ] },
        ] },
        { title: 'Construye frases', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['una mesa', 'Hay', 'junto a', 'la puerta'], accept: ['Hay una mesa junto a la puerta', 'Junto a la puerta hay una mesa'], en: 'There is a table next to the door.' },
            { tiles: ['está', 'La oficina', 'el centro', 'en'], accept: ['La oficina está en el centro'], en: 'The office is in the city centre.' },
            { tiles: ['es', 'Mi compañero', 'diseñador'], accept: ['Mi compañero es diseñador'], en: 'My colleague is a designer.' },
            { tiles: ['hay', 'En mi calle', 'dos', 'cafeterías'], accept: ['En mi calle hay dos cafeterías', 'Hay dos cafeterías en mi calle'], en: 'There are two cafés on my street.' },
          ] },
          { kind: 'rewrite', title: 'Presenta y después localiza', items: [
            { prompt: 'una mesa · junto a la puerta', instruction: 'Escribe dos frases: primero con «hay», después con «está».', accept: ['Hay una mesa La mesa está junto a la puerta', 'Hay una mesa y está junto a la puerta'] },
            { prompt: 'Julia · diseñadora', instruction: 'Escribe una frase con el verbo correcto.', accept: ['Julia es diseñadora'] },
            { prompt: 'La cafetería está cerca.', instruction: 'Presenta la cafetería con «hay».', accept: ['Hay una cafetería cerca', 'Cerca hay una cafetería'] },
            { prompt: 'La oficina · pequeña · dos ventanas', instruction: 'Escribe una frase con «es» y «hay».', accept: ['La oficina es pequeña y hay dos ventanas', 'La oficina es pequeña y en la oficina hay dos ventanas', 'La oficina es pequeña En la oficina hay dos ventanas'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'La primera visita', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'La primera visita', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha con la idea general. En la segunda, el alumno anota qué hay y dónde está cada cosa antes de responder.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Puedes bajar la velocidad.' } },
          { kind: 'listen', title: 'Un compañero llega a la oficina', channel: 'NOTA DE VOZ · PARA JULIA', src: '/audio/grammar-classroom/48.mp3',
            before: 'Un compañero va por primera vez a la oficina de Julia y le deja una nota de voz. ¿Qué problema puede tener?',
            gist: { prompt: '¿Por qué llama el compañero?', options: ['No sabe cuál es la entrada de la oficina.', 'No encuentra la calle.', 'Su computadora no funciona.'], answer: 0, why: '«Hay dos puertas y no sé cuál es la entrada de la oficina.»' },
            details: [
              { prompt: '¿Dónde está el compañero?', options: ['Frente al edificio.', 'En la cafetería.', 'Dentro de la oficina.'], answer: 0, why: '«Estoy frente a tu edificio.»' },
              { prompt: '¿Cuántas puertas hay?', options: ['Una.', 'Dos.', 'Tres.'], answer: 1, why: '«Hay dos puertas.»' },
              { prompt: '¿Qué puerta está abierta?', options: ['La roja.', 'La azul.', 'La verde.'], answer: 1, why: '«La puerta azul está abierta.»' },
              { prompt: '¿Cómo es la calle de Julia?', options: ['Ruidosa.', 'Tranquila.', 'Muy grande.'], answer: 1, why: '«Tu calle es tranquila.»' },
              { prompt: '¿Dónde está su computadora?', options: ['En la oficina.', 'En su bolso.', 'En la cafetería.'], answer: 1, why: '«Mi computadora está en mi bolso.»' },
            ],
            transcript: 'Hola, Julia. [[Estoy|teal]] frente a tu edificio. [[Hay|orange]] dos puertas y no sé cuál [[es|blue]] la entrada de la oficina. La puerta azul [[está|teal]] abierta. ¿[[Es|blue]] esa? Tu calle [[es|blue]] tranquila y [[hay|orange]] una cafetería cerca. Tengo tiempo para un café. Mi computadora [[está|teal]] en mi bolso y [[estoy|teal]] listo para trabajar.',
            reply: { teacher: 'El alumno responde en voz alta como si fuera Julia: ¿cuál es la entrada? ¿Dónde está la oficina? ¿Qué hay en la cafetería?', self: 'Responde a la nota de voz como si fueras Julia: di cuál es la puerta, dónde está la oficina y qué hay cerca. Usa ser, estar y hay.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tus lugares y tu gente', coach: 'Una pregunta por vez. Describe tu mundo.',
      steps: [
        { title: 'Tus lugares y tu gente', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Sigue lo que el alumno quiere contar, repregunta y comparte también tu experiencia.', self: 'Responde cada pregunta en voz alta, con frases cortas. Si quieres, escribe tu respuesta.' } },
          { kind: 'talk', cards: [
            { q: '¿Quién eres? Preséntate en tres frases.', followUps: ['¿De dónde eres?', '¿Cuál es tu profesión?', '¿Cómo eres: tranquilo, activo, ordenado?'], phrases: ['[[Soy|blue]]…', '[[Soy|blue]] de…', '[[Soy|blue]] profesora / ingeniero…'], hint: 'Con la profesión, sin «un» ni «una»: «Soy enfermera».', example: 'Soy Marco. Soy de Lima, pero vivo en Madrid. Soy ingeniero y soy muy tranquilo.', next: 'Ahora, el lugar donde estás.' },
            { q: '¿Dónde estás ahora? ¿Cómo es ese lugar?', followUps: ['¿Qué hay en la habitación?', '¿Dónde está tu mesa?', '¿Hoy está ordenada o desordenada?'], phrases: ['[[Estoy|teal]] en…', '[[Hay|orange]] una mesa y…', 'La habitación [[es|blue]]…', 'Hoy [[está|teal]]…'], hint: 'Primero presenta las cosas con «hay». Después di dónde están con «está».', example: 'Estoy en mi habitación. Es pequeña, pero tiene mucha luz. Hay una cama, una mesa y una silla. La mesa está junto a la ventana. Hoy está un poco desordenada.', next: 'Hablemos de tu barrio.', teacher: 'Pide al alumno que te «guíe» por la habitación: «¿Qué hay a tu derecha? ¿Dónde está la puerta?».' },
            { q: '¿Cómo es tu barrio? ¿Qué hay cerca de tu casa?', followUps: ['¿Hay un parque?', '¿Dónde está el supermercado?', '¿Es un barrio tranquilo?'], phrases: ['Mi barrio [[es|blue]]…', '[[Hay|orange]] un / una…', 'El supermercado [[está|teal]]…'], hint: 'Usa «hay» para las cosas nuevas y «está» para decir dónde.', example: 'Mi barrio es tranquilo y bonito. Hay un parque y dos panaderías. El supermercado está en la esquina.', next: 'Ahora, tu lugar de trabajo o de estudio.' },
            { q: '¿Dónde trabajas o estudias? Descríbelo.', followUps: ['¿Está cerca o lejos de tu casa?', '¿Cuántas personas hay?', '¿Cómo son tus compañeros?'], phrases: ['Mi oficina / escuela [[está|teal]]…', '[[Hay|orange]]… personas.', 'Mis compañeros [[son|blue]]…'], hint: '«Mis compañeros son simpáticos»: ser para cómo son las personas.', example: 'Mi escuela está lejos de mi casa. Es grande y hay muchos estudiantes. Mis compañeros son muy simpáticos.', next: 'Y hoy, ¿cómo estás tú?' },
            { q: '¿Cómo estás hoy? ¿Por qué?', followUps: ['¿Estás cansado o con energía?', '¿Estás contento con tu semana?', '¿Cómo es un día normal para ti?'], phrases: ['Hoy [[estoy|teal]]…', '[[Estoy|teal]] cansada porque…', 'Normalmente [[soy|blue]]…'], hint: 'Cómo estás hoy: «estoy». Cómo eres siempre: «soy».', example: 'Hoy estoy un poco cansada porque trabajo mucho. Normalmente soy una persona muy activa.', next: 'Para terminar, imagina un lugar ideal.' },
            { q: '¿Cómo es tu casa ideal? ¿Dónde está?', followUps: ['¿Qué hay en tu casa ideal?', '¿Está en el campo, en la playa o en la ciudad?', '¿Es grande o pequeña?'], phrases: ['Mi casa ideal [[es|blue]]…', '[[Está|teal]] en…', '[[Hay|orange]]…'], hint: 'Usa los tres verbos: cómo es, dónde está y qué hay.', example: 'Mi casa ideal es grande y blanca. Está cerca de la playa. Hay un jardín con muchas flores y una cocina muy bonita.', teacher: 'Pide al alumno que compare con su casa real: «Mi casa real es pequeña y está en el centro».' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno te pregunta por tu barrio y tu casa con «¿Qué hay…?» y «¿Dónde está…?».', self: 'Escribe tres preguntas con «¿Cómo es…?», «¿Dónde está…?» y «¿Qué hay…?» y házselas a alguien esta semana.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Presenta tu espacio', coach: 'Describe tu lugar real.',
      steps: [
        { title: 'Presenta tu espacio', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Usen la revisión automática y después revisen juntos cada ser, estar y hay.', self: 'Escribe tu texto y toca «Revisar mi texto». Corrige lo que te indique y vuelve a revisarlo.' } },
          { kind: 'write', title: 'Bienvenido a mi espacio', situation: 'Una persona va a visitar tu oficina o tu habitación por primera vez. Escríbele un mensaje para presentar el lugar.', task: [
            'Di qué lugar es y **cómo es** (ser).',
            'Presenta **qué hay** en el lugar (hay).',
            'Di **dónde está** tu mesa u otro objeto (estar).',
            'Di **cómo está** hoy el lugar (estar).',
          ], starters: ['Esta es mi…', 'Es…', 'Hay…', 'Mi mesa está…', 'Hoy la habitación está…', 'Cerca hay…'],
            words: ['pequeño', 'grande', 'tranquilo', 'junto a', 'frente a', 'al lado de', 'ordenado', 'abierto', 'una silla libre'],
            model: 'Esta [[es|blue]] mi oficina. [[Es|blue]] pequeña y tranquila. [[Hay|orange]] dos mesas y una silla libre para ti. Mi mesa [[está|teal]] junto a la ventana. Hoy la oficina [[está|teal]] ordenada. [[Hay|orange]] una cafetería frente al edificio.',
            minWords: 30 },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy?',
      steps: [
        { title: 'Lo esencial', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'SER', formula: 'ser + nombre / adjetivo', example: 'Julia es diseñadora. La oficina es pequeña.', caption: 'Qué es, quién es, cómo es.', en: 'identity, description' },
            { tone: 'teal', label: 'ESTAR', formula: 'el / la + nombre + estar + lugar / estado', example: 'La mesa está junto a la ventana.', caption: 'Dónde está y cómo está ahora.', en: 'location, state' },
            { tone: 'orange', label: 'HAY', formula: 'hay + un / una / número + nombre', example: 'Hay dos sillas libres.', caption: 'Qué existe en un lugar. No cambia.', en: 'there is / there are' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Primero hay, después está', text: 'Presenta algo nuevo con **hay** y después localízalo con **estar**: «Hay una mesa. La mesa está junto a la ventana».' },
        ] },
        { title: 'Desafío final', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: 'Mi hermano ___ cocinero.', options: ['es', 'está', 'hay'], answer: 0, why: 'Profesión: ser.' },
            { prompt: 'En la plaza ___ una fuente.', options: ['está', 'es', 'hay'], answer: 2, why: 'Presentas la fuente con «una»: hay.' },
            { prompt: 'La fuente ___ en el centro de la plaza.', options: ['es', 'está', 'hay'], answer: 1, why: 'Ubicación de una fuente conocida: está.' },
            { prompt: 'Hoy la cocina ___ muy limpia.', options: ['es', 'está', 'hay'], answer: 1, why: 'Un estado de hoy: está.' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: presenta una mesa y luego localízala. Respuesta modelo: «Hay una mesa. La mesa está junto a la ventana». Pide una frase más con ser.' },
        ] },
      ],
    },
  ],
};
