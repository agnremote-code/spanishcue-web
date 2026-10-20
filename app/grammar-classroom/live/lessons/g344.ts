import type { LiveLesson } from '../types';

/**
 * Lesson 344 · A1 · Microproducción A1: describir y pedir información (course unit G044).
 * A review-and-produce class: no new rules. One scene runs through the class:
 * Sunday evening. Carmen travels for a week for work and her friend Daniel is
 * going to look after her flat and her cat, Luna. Carmen gives him a tour; he
 * needs to find things (his room, the towels, his key, the wifi password).
 * In the voice message Carmen (Spain voice, tú), already at the airport, says
 * where the things she forgot are. Content: ser (qué es, cómo es, de quién es),
 * hay (existence and quantity: un / una / número / plural without article),
 * estar (where a known thing is, and states), articles, adjectives,
 * demonstratives and possessives, plus useful questions (¿Hay…? ¿Cuántos…?
 * ¿Dónde está…? ¿Cómo es…? ¿Qué es esto? ¿De quién es…?).
 * Contrast: Hay dos sillas; están junto a mi mesa. Mistake: *La silla hay aquí.
 * Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 344,
  level: 'A1',
  title: 'Microproducción A1: describir y pedir información',
  subtitle: 'Describir una casa, decir qué hay y dónde están las cosas, y hacer las preguntas útiles para encontrarlas.',
  legend: [
    { tone: 'blue', label: 'HAY · qué cosas hay, cuántas (there is / there are)' },
    { tone: 'teal', label: 'ESTAR · dónde está una cosa concreta, cómo está (where it is)' },
    { tone: 'orange', label: 'SER · qué es, cómo es, de quién es (what it is, what it is like)' },
    { tone: 'violet', label: 'PREGUNTAS · pedir información (asking for information)' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Esta es mi casa', coach: 'Ser, hay, estar: tres herramientas. Three tools.',
      steps: [
        { title: 'Una visita · A tour', blocks: [
          { kind: 'lead', text: 'Es domingo por la tarde. Carmen viaja una semana por trabajo. Su amigo Daniel va a cuidar su apartamento y a su gata, Luna. Carmen enseña la casa: «**Esta es** mi casa». Daniel pregunta: «¿**Dónde está** mi habitación?». Hoy juntas todo lo que ya sabes para **describir** un lugar y **pedir información**.', en: 'It is Sunday afternoon. Carmen is travelling for a week for work. Her friend Daniel is going to look after her flat and her cat, Luna. Carmen shows him around: “This is my home”. Daniel asks: “Where is my room?”. Today you put together everything you know to describe a place and ask for information.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases de Carmen y tu alumno repite. Después tu alumno dice qué frase habla de cómo es, cuál de qué hay y cuál de dónde está.', self: 'Lee las tres frases en voz alta. ¿Cuál dice cómo es, cuál qué hay y cuál dónde está? (Which one says what it is like, what there is, where it is?)' } },
          { kind: 'compare', title: 'Tres frases de Carmen · Three sentences from Carmen', columns: [
            { tone: 'orange', label: 'SER · cómo es', sentence: 'El salón [[es|orange]] pequeño y luminoso.', idea: 'Describe: qué es, cómo es.', en: 'The living room is small and bright.' },
            { tone: 'blue', label: 'HAY · qué hay', sentence: 'En el salón [[hay|blue]] un sofá y dos lámparas.', idea: 'Presenta cosas: qué hay, cuántas.', en: 'In the living room there is a sofa and two lamps.' },
            { tone: 'teal', label: 'ESTAR · dónde está', sentence: 'El sofá [[está|teal]] junto a la ventana.', idea: 'Sitúa una cosa concreta: dónde está.', en: 'The sofa is next to the window.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«En el salón hay un sofá» dice…', options: ['de quién es el sofá.', 'qué cosa existe en el salón.', 'cómo es el sofá.'], answer: 1, why: '«Hay» presenta una cosa: dice qué hay en un lugar.', en: '“En el salón hay un sofá” tells you…' },
            { prompt: '«El sofá está junto a la ventana» dice…', options: ['cuántos sofás hay.', 'dónde está el sofá.', 'cómo es el sofá.'], answer: 1, why: '«Está» + lugar = dónde está una cosa concreta (el sofá).', en: '“El sofá está junto a la ventana” tells you…' },
            { prompt: 'Daniel quiere saber cómo es el salón. ¿Qué responde Carmen?', options: ['Está a la izquierda.', 'Hay una mesa.', 'Es pequeño y luminoso.'], answer: 2, why: 'Para describir (cómo es) usamos ser: es pequeño.', en: 'Daniel wants to know what the living room is like. What does Carmen say?' },
          ] },
        ] },
        { title: 'Tres verbos, tres preguntas · Three verbs, three questions', mascot: '/brand/mascot/studying.webp', coach: 'Cada pregunta tiene su verbo.', blocks: [
          { kind: 'table', title: 'Pregunta → verbo · Question → verb', head: ['Pregunta', 'Verbo', 'Ejemplo', 'English'], rows: [
            ['¿Qué es? ¿Cómo es? ¿De quién es?', '[[es · son|orange]]', 'Es un apartamento. Las habitaciones son grandes.', 'what it is / what it is like / whose'],
            ['¿Qué hay? ¿Cuántos hay?', '[[hay|blue]] (una sola forma)', 'Hay una terraza. Hay tres ventanas.', 'there is / there are'],
            ['¿Dónde está? ¿Dónde están?', '[[está · están|teal]]', 'La terraza está al final del pasillo.', 'where it is'],
            ['¿Cómo está?', '[[está · están|teal]]', 'La ventana está abierta.', 'its state now (open, clean…)'],
          ], note: '**Hay** no cambia: «hay una ventana», «hay tres ventanas». **Está / están** concuerdan con la cosa: «la ventana está», «las ventanas están».' },
          { kind: 'concept', tone: 'blue', label: 'HAY', question: '¿Qué hay? ¿Cuántos hay?', en: 'there is / there are: something new, or how many', formula: ['hay + un / una + nombre', 'hay + dos, tres, muchos… + nombres', 'hay + nombre en plural (sin artículo)'],
            meaning: 'Con **hay** presentas una cosa que la otra persona todavía no conoce, o dices cuántas hay. Después de hay va **un, una**, un número, una cantidad o un plural sin artículo.',
            examples: [
              { es: 'En la terraza [[hay|blue]] una mesa pequeña.', en: 'There is a small table on the terrace.' },
              { es: 'En el pasillo [[hay|blue]] dos armarios.', en: 'There are two cupboards in the hallway.' },
              { es: 'En la nevera [[hay|blue]] fruta y leche.', en: 'There is fruit and milk in the fridge.' },
            ] },
          { kind: 'concept', tone: 'teal', label: 'ESTAR + LUGAR', question: '¿Dónde está?', en: 'to be (location): where a known thing is', formula: ['el / la / mi / tu / este… + nombre + está', 'los / las / mis / tus / estos… + nombres + están'],
            meaning: 'Con **estar** dices dónde está una cosa **concreta**, una cosa que ya conocemos: con el, la, mi, tu, este… o con un nombre propio.',
            examples: [
              { es: 'La mesa [[está|teal]] en la terraza.', en: 'The table is on the terrace.' },
              { es: 'Mis libros [[están|teal]] en ese armario.', en: 'My books are in that cupboard.' },
              { es: 'Luna [[está|teal]] en la cocina.', en: 'Luna is in the kitchen.' },
            ],
            note: 'Ser también describe la casa: «El baño **es** blanco». Pero el lugar de una cosa va con **estar**: «El baño **está** a la derecha».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En el pasillo ___ una planta.', options: ['es', 'está', 'hay'], answer: 2, why: '«Una planta» es nueva para la otra persona: hay + una.', en: 'There is a plant in the hallway.' },
            { prompt: 'La planta ___ al lado de la puerta.', options: ['hay', 'es', 'está'], answer: 2, why: '«La planta» es concreta: dónde está → está.', en: 'The plant is next to the door.' },
          ] },
        ] },
        { title: 'Primero hay, después está · First hay, then está', mascot: '/brand/mascot/standing.webp', coach: 'Hay dos sillas; están junto a mi mesa.', blocks: [
          { kind: 'lead', text: 'Muchas veces usamos las dos formas, una después de la otra. Primero presentas la cosa con **hay**; después, la cosa ya es conocida y dices dónde **está**: «**Hay** dos sillas; **están** junto a mi mesa».', en: 'We often use both forms, one after the other. First you introduce the thing with hay; then the thing is known and you say where it is: “There are two chairs; they are next to my table”.' },
          { kind: 'table', title: 'Tres pares · Three pairs', head: ['HAY · algo nuevo', 'ESTAR · algo concreto'], rows: [
            ['[[Hay|blue]] una llave en la mesa. (There is a key on the table.)', 'La llave [[está|teal]] en la mesa. (The key is on the table.)'],
            ['En la cocina [[hay|blue]] dos sillas. (There are two chairs in the kitchen.)', 'Las sillas [[están|teal]] en la cocina. (The chairs are in the kitchen.)'],
            ['¿[[Hay|blue]] un baño aquí? (Is there a bathroom here?)', '¿Dónde [[está|teal]] el baño? (Where is the bathroom?)'],
          ], note: 'Fíjate en la palabra antes del nombre: **un, una, dos** → hay. **El, la, mi, tu, este** → está / están.' },
          { kind: 'decide', title: '¿Ser, hay o estar?', steps: [
            { q: '¿Dices qué es una cosa, cómo es o de quién es? (blanco, grande, de Carmen)', yes: 'Usa **ser**: «La cocina es pequeña».', no: 'next' },
            { q: '¿Presentas una cosa nueva o dices cuántas hay? (un, una, dos, muchos)', yes: 'Usa **hay**: «Hay una lámpara».', no: 'next' },
            { q: '¿Dices dónde está una cosa concreta? (el, la, mi, tu, este + nombre)', yes: 'Usa **estar**: «La lámpara está en el salón».', no: 'Para el estado de una cosa ahora (abierta, limpia, rota), también **estar**: «La puerta está abierta».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En el baño ___ dos toallas. ___ en el armario.', options: ['hay · Están', 'están · Hay', 'hay · Hay'], answer: 0, why: 'Primero presentas las toallas (hay dos); después ya son concretas: están en el armario.', en: 'There are two towels in the bathroom. They are in the cupboard.' },
            { prompt: 'La cocina ___ pequeña, pero ___ muy bonita.', options: ['está · es', 'es · es', 'hay · es'], answer: 1, why: 'Pequeña y bonita describen la cocina: ser, las dos veces.', en: 'The kitchen is small, but it is very nice.' },
            { prompt: 'Daniel busca el baño. ¿Qué pregunta?', options: ['¿Dónde es el baño?', '¿Dónde hay el baño?', '¿Dónde está el baño?'], answer: 2, why: '«El baño» es concreto: ¿dónde está?', en: 'Daniel is looking for the bathroom. What does he ask?' },
          ] },
        ] },
        { title: 'Preguntas útiles · Useful questions', mascot: '/brand/mascot/speaking.webp', coach: 'Pregunta bien, encuentra rápido.', blocks: [
          { kind: 'table', title: 'Para pedir información · To ask for information', head: ['Quieres saber…', 'Pregunta', 'Respuesta'], rows: [
            ['qué es (what)', '[[¿Qué es esto?|violet]]', 'Es una lámpara.'],
            ['cómo es (what it is like)', '[[¿Cómo es tu habitación?|violet]]', 'Es grande y tranquila.'],
            ['si existe (is there…?)', '[[¿Hay una farmacia cerca?|violet]]', 'Sí, hay una en la esquina.'],
            ['cuántos (how many)', '[[¿Cuántas habitaciones hay?|violet]]', 'Hay dos.'],
            ['dónde (where)', '[[¿Dónde están mis llaves?|violet]]', 'Están en esa mesa.'],
            ['de quién (whose)', '[[¿De quién es este abrigo?|violet]]', 'Es de Daniel. Es su abrigo.'],
          ], note: 'Demostrativos: **este** armario, **esta** mesa, **estos** libros, **esas** llaves, **aquella** ventana. Posesivos: **mi, tu, su** + singular; **mis, tus, sus** + plural.' },
          { kind: 'tip', icon: '🌎', title: '¿Dónde hay…? también existe', text: 'Con una cosa **no concreta** (una, cualquiera) puedes decir «¿Dónde **hay** una farmacia?». Con una cosa **concreta** dices «¿Dónde **está** la farmacia?». Las dos preguntas son correctas.', en: 'With a non-specific thing (any one) you can say “¿Dónde hay una farmacia?”. With a specific thing you say “¿Dónde está la farmacia?”. Both questions are correct.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Daniel quiere saber el número de mantas. ¿Qué pregunta?', options: ['¿Cómo son las mantas?', '¿Dónde están las mantas?', '¿Cuántas mantas hay?'], answer: 2, why: 'Para el número: ¿cuántas… hay?', en: 'Daniel wants to know the number of blankets. What does he ask?' },
            { prompt: 'Daniel ve una caja y no sabe qué es. ¿Qué pregunta?', options: ['¿Qué hay esto?', '¿Qué es esto?', '¿Dónde está esto?'], answer: 1, why: 'Para la identidad de una cosa: ¿qué es esto?', en: 'Daniel sees a box and does not know what it is. What does he ask?' },
            { prompt: '___ llaves están en la mesa.', options: ['Mi', 'Tu', 'Mis'], answer: 2, why: '«Llaves» es plural: mis llaves.', en: 'My keys are on the table.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Un, una o el, la? Mira antes del nombre.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno dice qué falla: el verbo (ser, hay, estar) o la concordancia. Después aparece la corrección.', self: 'Lee cada frase, busca qué falla (el verbo o la concordancia) y toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'La silla hay aquí.', right: 'La silla está aquí.', why: '«La silla» es concreta: para su lugar, **estar**. Hay presenta cosas nuevas: «Aquí hay una silla». (A specific thing → está.)' },
            { wrong: 'Hay la llave en la mesa.', right: 'La llave está en la mesa. / Hay una llave en la mesa.', why: 'Hay no va con el, la, mi, tu. Con «la llave», estar; con «una llave», hay.' },
            { wrong: '¿Dónde es mi habitación?', right: '¿Dónde está mi habitación?', why: 'El lugar de una cosa va con **estar**, no con ser.' },
            { wrong: 'La cocina está grande.', right: 'La cocina es grande.', why: 'Grande describe cómo es la cocina: **ser**.' },
            { wrong: 'Las toallas está en el armario.', right: 'Las toallas están en el armario.', why: 'Las toallas = plural → están. Estar concuerda; hay, no.' },
            { wrong: 'Hay dos silla en la cocina.', right: 'Hay dos sillas en la cocina.', why: 'Dos = plural: sillas, con -s.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Aquí ___ un sofá muy cómodo.', options: ['está', 'es', 'hay'], answer: 2, why: '«Un sofá» = cosa nueva: hay.', en: 'There is a very comfortable sofa here.' },
            { prompt: 'Tus zapatos ___ debajo de la cama.', options: ['hay', 'están', 'son'], answer: 1, why: '«Tus zapatos» = cosa concreta en plural: están.', en: 'Your shoes are under the bed.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno describe una habitación real con tres frases: una con es, una con hay y una con está. Tú repites cada frase con la forma correcta.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La visita', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'Carmen enseña la casa · Carmen shows the flat', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Carmen y tu alumno es Daniel. Después tu alumno toca cada palabra marcada y dice si es ser, hay, estar o una pregunta.', self: 'Lee el diálogo en voz alta. Después toca cada palabra marcada: ¿ser, hay, estar o pregunta? (Which tool is it?)' } },
          { kind: 'explore', title: 'Bienvenido a mi casa', setting: 'Domingo, siete de la tarde. Daniel llega al apartamento de Carmen con su maleta. (Sunday, 7 pm. Daniel arrives at Carmen’s flat with his suitcase.)', lines: [
            { who: 'Carmen', text: '¡Bienvenido, Daniel! [[Esta es mi casa|orange]]. [[Es pequeña|orange]], pero muy luminosa.', en: 'Welcome, Daniel! This is my home. It is small, but very bright.' },
            { who: 'Daniel', text: '¡Es muy bonita! [[¿Dónde está mi habitación?|violet]]', en: 'It is very nice! Where is my room?' },
            { who: 'Carmen', text: '[[Está al final del pasillo|teal]], a la izquierda. [[Hay una cama|blue]] grande y un armario.', en: 'It is at the end of the hallway, on the left. There is a big bed and a wardrobe.' },
            { who: 'Daniel', text: 'Perfecto. [[¿Hay toallas?|violet]]', en: 'Perfect. Are there any towels?' },
            { who: 'Carmen', text: 'Sí, [[están en el armario|teal]] del baño. Y esta es la cocina: [[hay dos sillas|blue]]; están junto a mi mesa.', en: 'Yes, they are in the bathroom cupboard. And this is the kitchen: there are two chairs; they are next to my table.' },
            { who: 'Daniel', text: '¿Y mi llave? ¿[[Cuántas llaves hay|violet]]?', en: 'And my key? How many keys are there?' },
            { who: 'Carmen', text: 'Hay dos: una para mí y una para ti. [[Tu llave|teal]] está en esa mesa, al lado de la puerta.', en: 'There are two: one for me and one for you. Your key is on that table, next to the door.' },
            { who: 'Daniel', text: '¿Y Luna? No veo a Luna.', en: 'And Luna? I can’t see Luna.' },
            { who: 'Carmen', text: 'Mira, [[está debajo del sofá|teal]]. [[Es muy tranquila|orange]].', en: 'Look, she is under the sofa. She is very calm.' },
            { who: 'Daniel', text: 'Una pregunta más: [[¿qué es esto?|violet]]', en: 'One more question: what is this?' },
            { who: 'Carmen', text: '[[Es el router|orange]] del wifi. ¡Ay, la contraseña! No sé dónde está… Mañana te mando un mensaje.', en: 'It is the wifi router. Oh, the password! I don’t know where it is… I will send you a message tomorrow.' },
          ], notes: {
            'Esta es mi casa': 'Presentar con **ser** + demostrativo: **esta** (casa es femenino). La frase para enseñar un lugar.',
            'Es pequeña': '**Ser** para describir cómo es la casa. Pequeña concuerda con casa (femenino).',
            '¿Dónde está mi habitación?': 'Pregunta por el lugar de una cosa concreta (**mi** habitación): ¿dónde **está**?',
            'Está al final del pasillo': '**Estar** + lugar: la habitación ya es conocida, por eso no es «hay».',
            'Hay una cama': '**Hay** + **una**: Carmen presenta una cosa nueva para Daniel.',
            '¿Hay toallas?': 'Pregunta de existencia: **¿hay** + plural sin artículo? Daniel no sabe si hay toallas.',
            'están en el armario': 'Ahora las toallas son conocidas: **están** (plural) en el armario. Primero hay, después están.',
            'hay dos sillas': 'Hay + número: dice **cuántas** sillas. Después, «están junto a mi mesa»: la frase clave de la clase.',
            'Cuántas llaves hay': '¿**Cuántas** + nombre + **hay**? Cuántas concuerda con llaves (femenino plural).',
            'Tu llave': 'Posesivo **tu** + llave: una cosa concreta, por eso «tu llave **está**», no «hay tu llave».',
            'está debajo del sofá': '**Estar** + lugar. Luna es concreta (un nombre propio). Debajo de + el = **del**.',
            'Es muy tranquila': '**Ser** para el carácter de Luna: cómo es, normalmente.',
            '¿qué es esto?': 'Para una cosa que no conoces: **¿qué es esto?** Esto = this thing (you don’t know its name).',
            'Es el router': '**Ser** para la identidad: qué es. Con ser sí puedes usar el / la: «Es el router». Con hay, no.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Dónde está la habitación de Daniel?', options: ['Al final del pasillo, a la izquierda.', 'Debajo del sofá.', 'Al lado de la cocina.'], answer: 0, why: '«Está al final del pasillo, a la izquierda».', en: 'Where is Daniel’s room?' },
            { prompt: '¿Dónde está la llave de Daniel?', options: ['En esa mesa, al lado de la puerta.', 'En el armario del baño.', 'Con Carmen.'], answer: 0, why: '«Tu llave está en esa mesa, al lado de la puerta».', en: 'Where is Daniel’s key?' },
            { prompt: '¿Qué no sabe Carmen?', options: ['Cuántas sillas hay.', 'Dónde está Luna.', 'Dónde está la contraseña del wifi.'], answer: 2, why: '«¡Ay, la contraseña! No sé dónde está…».', en: 'What does Carmen not know?' },
          ] },
        ] },
        { title: '¿Ser, hay o estar? · Which tool?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'La casa de Carmen · Carmen’s flat', categories: [
            { id: 'ser', label: 'SER · qué es, cómo es', tone: 'orange' },
            { id: 'hay', label: 'HAY · qué hay, cuántos', tone: 'blue' },
            { id: 'estar', label: 'ESTAR · dónde está', tone: 'teal' },
          ], items: [
            { text: 'La casa ___ pequeña y luminosa.', answer: 'ser', why: 'Describe cómo es la casa: es.' },
            { text: 'En la habitación ___ una cama grande.', answer: 'hay', why: 'Una cosa nueva: hay una cama.' },
            { text: 'Las toallas ___ en el armario del baño.', answer: 'estar', why: 'Cosa concreta (las toallas) + lugar: están.' },
            { text: 'En la cocina ___ dos sillas.', answer: 'hay', why: 'Número de cosas: hay dos sillas.' },
            { text: 'Luna ___ debajo del sofá.', answer: 'estar', why: 'Luna + lugar: está.' },
            { text: 'Ese aparato ___ el router del wifi.', answer: 'ser', why: 'Identidad, qué es: es el router.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué hay en la habitación de Daniel? ¿Y dónde está la habitación?». Tu alumno responde con las dos formas: «Hay una cama y un armario. Está al final del pasillo».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Un o el? ¿Qué o dónde? Look before the noun.',
      steps: [
        { title: 'Elige la forma · Choose the form', blocks: [
          { kind: 'choice', items: [
            { context: 'Carmen enseña el baño. (Carmen shows the bathroom.)', prompt: 'En el baño ___ una ducha nueva.', options: ['es', 'está', 'hay'], answer: 2, why: '«Una ducha» es nueva para Daniel: hay + una.', en: 'There is a new shower in the bathroom.' },
            { context: 'Daniel busca algo. (Daniel is looking for something.)', prompt: '¿Dónde ___ las tazas?', options: ['es', 'están', 'hay'], answer: 1, why: '«Las tazas» son concretas y plurales: ¿dónde están?', en: 'Where are the cups?' },
            { context: 'Carmen describe el salón. (Carmen describes the living room.)', prompt: 'Las sillas de la cocina ___ de madera.', options: ['están', 'son', 'hay'], answer: 1, why: 'El material describe cómo son las sillas: son de madera.', en: 'The kitchen chairs are made of wood.' },
            { context: 'Carmen señala un armario cerca. (Carmen points at a nearby cupboard.)', prompt: '___ armario es para tu ropa.', options: ['Esta', 'Este', 'Estos'], answer: 1, why: 'Armario es masculino singular: este armario.', en: 'This cupboard is for your clothes.' },
            { context: 'Daniel pregunta por las cosas de Carmen. (Daniel asks about Carmen’s things.)', prompt: '¿Y ___ libros? ¿Dónde están?', options: ['su', 'tus', 'tu'], answer: 1, why: 'Daniel habla con Carmen (tú) y libros es plural: tus libros.', en: 'And your books? Where are they?' },
          ] },
        ] },
        { title: '¿Qué pregunta? · Which question?', blocks: [
          { kind: 'classify', title: '¿Qué necesita saber Daniel? · What does Daniel need to know?', categories: [
            { id: 'hay', label: '¿Hay…? ¿Cuántos… hay?', tone: 'blue' },
            { id: 'estar', label: '¿Dónde está / están…?', tone: 'teal' },
            { id: 'ser', label: '¿Qué es? ¿Cómo es? ¿De quién es?', tone: 'orange' },
          ], items: [
            { text: 'Daniel no sabe si hay un secador en la casa.', answer: 'hay', why: 'No sabe si la cosa existe: ¿hay un secador?' },
            { text: 'Daniel sabe que hay un paraguas, pero no lo encuentra.', answer: 'estar', why: 'La cosa existe y es concreta; busca el lugar: ¿dónde está el paraguas?' },
            { text: 'Daniel quiere saber si la terraza es grande o pequeña.', answer: 'ser', why: 'Descripción: ¿cómo es la terraza?' },
            { text: 'Daniel quiere saber el número de platos.', answer: 'hay', why: 'Cantidad: ¿cuántos platos hay?' },
            { text: 'Daniel ve un abrigo rojo y no sabe si es de Carmen.', answer: 'ser', why: 'Pertenencia: ¿de quién es este abrigo?' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'El secador hay en el baño.', ok: false, options: ['Hay el secador en el baño.', 'El secador es en el baño.', 'El secador está en el baño.'], answer: 2, why: '«El secador» es concreto: su lugar va con estar. Hay no va con el.' },
            { sentence: 'En la nevera hay leche y huevos.', ok: true, why: 'Correcta: hay + nombres sin artículo para decir qué hay.' },
            { sentence: 'Mi habitación está muy grande.', ok: false, options: ['Mi habitación son muy grande.', 'Mi habitación es muy grande.', 'Mi habitación hay muy grande.'], answer: 1, why: 'Grande describe cómo es la habitación: ser, es.' },
            { sentence: 'Los platos está en ese armario.', ok: false, options: ['Los platos son en ese armario.', 'Los platos están en ese armario.', 'Los platos hay en ese armario.'], answer: 1, why: 'Los platos = plural: están. Y el lugar va con estar.' },
            { sentence: '¿De quién es esta bicicleta?', ok: true, why: 'Correcta: ser para la pertenencia; esta concuerda con bicicleta (femenino).' },
          ] },
        ] },
        { title: 'En la escalera · On the stairs', blocks: [
          { kind: 'chat-fill', title: 'Lunes por la mañana · Monday morning', lines: [
            { who: 'Rosa', text: 'Hola, ¿tú ___ Daniel, el amigo de Carmen?', options: ['eres', 'estás', 'hay'], answer: 0, why: 'Identidad, quién eres: ser → eres.' },
            { who: 'Daniel', text: 'Sí, hola. ¿Usted es la vecina de Carmen?' },
            { who: 'Rosa', text: 'Sí, soy Rosa. Mi apartamento ___ en el segundo piso.', options: ['hay', 'es', 'está'], answer: 2, why: '«Mi apartamento» es concreto + lugar: está.' },
            { who: 'Daniel', text: 'Una pregunta: ¿___ un supermercado cerca?', options: ['es', 'está', 'hay'], answer: 2, why: 'Daniel no sabe si existe: ¿hay un supermercado?' },
            { who: 'Rosa', text: 'Sí, ___ dos. El grande está en la plaza.', options: ['son', 'hay', 'están'], answer: 1, why: 'Cantidad: hay dos.' },
            { who: 'Daniel', text: 'Gracias. ¿Y ___ plaza está lejos?', options: ['ese', 'esos', 'esa'], answer: 2, why: 'Plaza es femenino singular: esa plaza.' },
            { who: 'Rosa', text: 'No, está muy cerca, a cinco minutos.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Hay', 'dos', 'lámparas;', 'están', 'en', 'el', 'salón.'], accept: ['Hay dos lámparas; están en el salón.'], en: 'There are two lamps; they are in the living room.' },
            { tiles: ['¿Dónde', 'está', 'mi', 'maleta?'], accept: ['¿Dónde está mi maleta?'], en: 'Where is my suitcase?' },
            { tiles: ['Esta', 'habitación', 'es', 'muy', 'tranquila.'], accept: ['Esta habitación es muy tranquila.'], en: 'This room is very quiet.' },
            { tiles: ['¿Cuántos', 'cuadros', 'hay', 'en', 'el', 'pasillo?'], accept: ['¿Cuántos cuadros hay en el pasillo?'], en: 'How many pictures are there in the hallway?' },
          ] },
        ] },
        { title: 'De hay a estar · From hay to estar', blocks: [
          { kind: 'rewrite', title: 'Cambia la frase · Change the sentence', items: [
            { prompt: 'Hay una bicicleta en la terraza. (→ la bicicleta)', instruction: 'Empieza con «La bicicleta» y di dónde está.', accept: ['La bicicleta está en la terraza'] },
            { prompt: 'Hay tres cojines en el sofá. (→ los cojines)', instruction: 'Empieza con «Los cojines» y di dónde están.', accept: ['Los cojines están en el sofá'] },
            { prompt: 'Daniel no encuentra su cargador. (→ pregunta)', instruction: 'Escribe la pregunta de Daniel con «¿Dónde…?» y «mi».', accept: ['¿Dónde está mi cargador?'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno mira la habitación donde están y dice tres frases: qué hay, dónde está una cosa y cómo es la habitación.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje desde el aeropuerto', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Carmen se acuerda · Carmen remembers', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿por qué manda Carmen el mensaje?). Segunda escucha: tu alumno anota dónde está cada cosa. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles: anota dónde está cada cosa. (Listen once for the gist, once for where each thing is.)' } },
          { kind: 'listen', title: 'Un mensaje de voz de Carmen', channel: 'MENSAJE DE VOZ · DE CARMEN PARA DANIEL', src: '/audio/grammar-live/344.mp3',
            before: 'Es lunes por la mañana. Carmen ya está en el aeropuerto y manda un mensaje de voz a Daniel. ¿Qué cosas de la casa crees que necesita saber Daniel? (Carmen is at the airport and sends Daniel a voice message. What things about the flat do you think Daniel needs to know?)',
            gist: { prompt: '¿Para qué manda Carmen el mensaje?', options: ['Para invitar a Daniel al aeropuerto.', 'Para decir dónde están algunas cosas de la casa.', 'Para preguntar cómo es la habitación de Daniel.'], answer: 1, why: '«Tengo tres cosas importantes»: dice dónde están la comida de Luna, la contraseña y una manta.', en: 'Why does Carmen send the message?' },
            details: [
              { prompt: '¿Dónde está la comida de Luna?', options: ['En la cocina.', 'Encima de la cama.', 'En el armario del pasillo, abajo.'], answer: 2, why: '«No está en la cocina. Está en el armario del pasillo, abajo».', en: 'Where is Luna’s food?' },
              { prompt: '¿Dónde está la contraseña del wifi?', options: ['En un papel amarillo, detrás de la tele.', 'En el móvil de Rosa.', 'En la mesa, al lado de la puerta.'], answer: 0, why: '«Está en un papel amarillo, detrás de la tele».', en: 'Where is the wifi password?' },
              { prompt: '¿Cómo es la manta?', options: ['Grande y verde.', 'Pequeña y amarilla.', 'Grande y azul.'], answer: 2, why: '«Hay una manta grande. Es azul».', en: 'What is the blanket like?' },
              { prompt: '¿Quién es Rosa?', options: ['La vecina de Carmen; tiene otra llave.', 'La hermana de Daniel.', 'Una amiga del aeropuerto.'], answer: 0, why: '«Mi vecina Rosa vive en el segundo piso. Es muy simpática y tiene otra llave».', en: 'Who is Rosa?' },
            ],
            transcript: 'Hola, Daniel, soy Carmen. Ya estoy en el aeropuerto. Perdón, tengo tres cosas importantes. Primero: la comida de Luna no [[está|teal]] en la cocina. [[Está|teal]] en el armario del pasillo, abajo. Luna come dos veces al día. Segundo: la contraseña del wifi [[está|teal]] en un papel amarillo, detrás de la tele. Y tercero: en mi habitación [[hay|blue]] una manta grande. [[Es|orange]] azul y [[está|teal]] encima de la cama, porque por la noche hace frío. Ah, y mi vecina Rosa vive en el segundo piso. [[Es|orange]] muy simpática y tiene otra llave. Si tienes preguntas, puedes llamar o escribir. ¡Gracias y un abrazo!',
            reply: { teacher: 'Tú eres Carmen. Tu alumno es Daniel y responde al mensaje con tres frases: una cosa que ya está bien, una cosa que hay en la casa y una pregunta para Carmen («¿Dónde está…?», «¿Hay…?»).', self: 'Responde a Carmen en voz alta como Daniel: di que todo está bien, di qué hay en la nevera y haz una pregunta («¿Dónde está…?», «¿Hay…?»). (Answer as Daniel with a question.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu casa, tus preguntas', coach: 'Describe y pregunta. Describe and ask.',
      steps: [
        { title: 'Una visita a tu casa · A tour of your home', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con frases reales y cortas sobre su casa. Tú repites su frase con la forma correcta y sigues con la repregunta.', self: 'Lee la pregunta, responde en voz alta sobre tu casa y, si quieres, escribe tu respuesta. (Answer aloud about your own home.)' } },
          { kind: 'talk', cards: [
            { q: '¿Cómo es tu casa? · What is your home like?', followUps: ['¿Es grande o pequeña? (Big or small?)', '¿Cuántas habitaciones hay? (How many rooms are there?)'], phrases: ['Mi casa [[es|orange]] pequeña, pero cómoda.', '[[Hay|blue]] dos habitaciones y un baño.', 'Es un apartamento en el tercer piso.'], hint: 'Ser para describir (es grande, es luminosa); hay para contar (hay dos habitaciones).', example: 'Mi casa es un apartamento pequeño, pero muy luminoso. Hay dos habitaciones, un baño y una cocina.', next: 'Ahora, tu habitación.', teacher: 'Responde tú también con tu casa: así tu alumno oye otra vez es y hay juntos.' },
            { q: '¿Qué hay en tu habitación? · What is there in your room?', followUps: ['¿Dónde está la cama? (Where is the bed?)', '¿Hay una ventana? ¿Cómo es? (Is there a window? What is it like?)'], phrases: ['En mi habitación [[hay|blue]] una cama y una mesa.', 'La cama [[está|teal]] al lado de la ventana.', 'No [[hay|blue]] televisión.'], hint: 'Primero hay (qué cosas); después está (dónde está cada cosa).', example: 'En mi habitación hay una cama, un armario y una mesa pequeña. La mesa está junto a la ventana.', next: 'Ahora, tus cosas.' },
            { q: '¿Dónde están tus llaves ahora? ¿Y tu teléfono? · Where are your keys now? And your phone?', followUps: ['¿Y tu mochila o tu bolso? (And your bag?)', '¿Normalmente están en el mismo lugar? (Are they usually in the same place?)'], phrases: ['Mis llaves [[están|teal]] en mi bolso.', 'Mi teléfono [[está|teal]] en la mesa.', 'No sé dónde [[están|teal]].'], hint: 'Mi + singular, mis + plural; está + singular, están + plural.', example: 'Mis llaves están en la mochila y mi teléfono está aquí, en la mesa.', next: 'Ahora, tú eres el invitado.' },
            { q: 'Eres el invitado en una casa nueva. Pregunta tres cosas útiles. · You are the guest. Ask three useful questions.', followUps: ['¿Y la contraseña del wifi? (And the wifi password?)', '¿Hay algo más importante? (Is there anything else important?)'], phrases: ['[[¿Dónde está el baño?|violet]]', '[[¿Hay toallas?|violet]]', '[[¿Cuántas llaves hay?|violet]]'], hint: '¿Hay…? para saber si existe; ¿Dónde está…? para encontrar una cosa concreta.', example: '¿Dónde está mi habitación? ¿Hay toallas en el baño? ¿Dónde está la contraseña del wifi?', next: 'Ahora, mira a tu alrededor.', teacher: 'Responde como el dueño de la casa con hay y está. Si tu alumno dice «¿Dónde hay el baño?», repites: «¿Dónde está el baño? Está ahí».' },
            { q: 'Mira a tu alrededor: ¿qué es esto? ¿De quién es eso? · Look around you: what is this? Whose is that?', followUps: ['¿Cómo es? (What is it like?)', '¿Y aquello, allí? (And that, over there?)'], phrases: ['[[¿Qué es esto?|violet]] [[Es|orange]] una planta.', 'Este cuaderno [[es|orange]] de mi hermana.', 'Esa silla es azul y [[está|teal]] junto a la puerta.'], hint: 'Este / esta (aquí, cerca), ese / esa (ahí), aquel / aquella (allí, lejos).', example: 'Este es mi cuaderno. Es azul. Esa planta es de mi pareja y aquella lámpara es nueva.', teacher: 'Tú señalas cosas reales y preguntas «¿Qué es esto? ¿De quién es?». Tu alumno responde con ser y un demostrativo.' },
            { q: 'No encuentras tu cargador. Describe el problema y pide ayuda. · You can’t find your charger. Ask for help.', followUps: ['¿Cómo es tu cargador? (What is your charger like?)', '¿Hay otro cargador en la casa? (Is there another one?)'], phrases: ['[[¿Dónde está mi cargador?|violet]]', '[[Es|orange]] negro y pequeño.', '¿[[Hay|blue]] otro cargador en la casa?'], hint: 'Una pregunta con dónde está, una descripción con es y una pregunta con hay.', example: '¿Dónde está mi cargador? Es negro y pequeño. Normalmente está en mi habitación. ¿Hay otro cargador en la casa?', teacher: 'Responde como Carmen: «Hay uno en la cocina. Está al lado de la nevera».' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno enseña su casa y tú eres el invitado que pregunta («¿Dónde está…?», «¿Hay…?», «¿Cómo es…?»).', self: 'Ahora tú eres Carmen: haz las preguntas de Daniel en voz alta y responde como Carmen. (Now ask Daniel’s questions and answer as Carmen.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una nota para tu invitado', coach: 'Es, hay, está. Describe and place.',
      steps: [
        { title: 'Bienvenido a mi casa · Welcome to my home', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos ser, hay y estar y la concordancia (está / están, mi / mis). Después tu alumno lee la nota en voz alta.', self: 'Escribe tu nota y toca «Revisar mi texto». Mira bien: hay para cosas nuevas, está / están para el lugar. (Write your note and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Una nota en la mesa · A note on the table', situation: 'Un amigo va a dormir en tu casa una semana y tú no estás. Escribe una nota para él: cómo es la casa, qué hay y dónde están las cosas útiles. (A friend is staying at your home for a week while you are away. Write a note: what the home is like, what there is and where useful things are.)', task: [
            'Saluda y di cómo es tu casa con **es / son**. (What your home is like.)',
            'Di qué hay en la casa con **hay** + un, una o un número. (What there is.)',
            'Di dónde están tres cosas útiles con **está / están**. (Where three useful things are.)',
            'Usa un posesivo o un demostrativo: mi, tu, este, esa… (A possessive or a demonstrative.)',
            'Termina con una pregunta para tu amigo. (End with a question.)',
          ], starters: ['Hola, …:', '¡Bienvenido a mi casa! Es …', 'En el salón hay …', 'Tu habitación está …', 'Las toallas están …', '¿Necesitas algo más?', 'Un abrazo.'],
            words: ['es', 'son', 'hay', 'está', 'están', 'mi', 'tu', 'este', 'esa', 'al lado de', 'encima de', 'debajo de', 'junto a', 'a la derecha', 'a la izquierda'],
            model: 'Hola, Daniel: ¡Bienvenido a mi casa! [[Es|orange]] pequeña, pero muy luminosa. En el salón [[hay|blue]] un sofá grande y dos lámparas. Tu habitación [[está|teal]] al final del pasillo, a la izquierda. Las toallas [[están|teal]] en el armario del baño y tu llave [[está|teal]] en esa mesa, al lado de la puerta. Mi gata, Luna, [[es|orange]] muy tranquila. Su comida [[está|teal]] en el pasillo. ¿Necesitas algo más? Un abrazo, Carmen.',
            minWords: 40,
            checks: [
              { label: 'Ser para describir: es / son (what it is like)', pattern: '(?<!\\p{L})(?:es|son)(?!\\p{L})', tip: 'Describe tu casa: «Es pequeña, pero muy luminosa».' },
              { label: 'Hay para presentar cosas (there is / there are)', pattern: '(?<!\\p{L})hay(?!\\p{L})', tip: 'Di qué hay: «En el salón hay un sofá».' },
              { label: 'Está / están para el lugar (where things are)', pattern: '(?<!\\p{L})est[aá]n?(?!\\p{L})', tip: 'Di dónde están las cosas: «Las toallas están en el baño».' },
              { label: 'Un posesivo o un demostrativo (mi, tu, este, esa…)', pattern: '(?<!\\p{L})(?:mis?|tus?|sus?|nuestr[oa]s?|est[ea]s?|estos|es[ea]s?|esos|aquel|aquell[oa]s?)(?!\\p{L})', tip: 'Usa mi, tu, su o este, ese: «Tu llave está en esa mesa».' },
              { label: 'Una pregunta (a question)', pattern: '¿[^?]+\\?', tip: 'Termina con una pregunta: «¿Necesitas algo más?».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})hay\\s+(?:el|la|los|las|mis?|tus?|sus?)(?!\\p{L})', why: '**Hay** no va con el, la, mi, tu…: «Hay **una** llave en la mesa» o «**La** llave **está** en la mesa».' },
              { pattern: '(?:^|[.!?:;]\\s*)(?:el|la|los|las|mis?|tus?|sus?)\\s+\\p{L}+\\s+hay(?!\\p{L})', why: 'Con una cosa concreta (la silla, mi llave), el lugar va con **estar**: «La silla **está** aquí», no «la silla hay aquí».' },
              { pattern: '(?<!\\p{L})est[aá]n?\\s+(?:un|una|unos|unas)(?!\\p{L})(?!\\s+poco)', why: 'Para presentar una cosa nueva (un, una) se usa **hay**: «**Hay** una lámpara en el salón».' },
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
            { tone: 'orange', label: 'SER', formula: 'es · son + nombre / adjetivo / de + persona', example: 'Esta es mi casa. Es pequeña. Es de Carmen.', caption: 'qué es, cómo es, de quién es', en: 'what it is, what it is like, whose' },
            { tone: 'blue', label: 'HAY', formula: 'hay + un / una / número / plural sin artículo', example: 'Hay dos sillas en la cocina.', caption: 'presentar cosas nuevas, cuántas', en: 'there is / there are: new things, how many' },
            { tone: 'teal', label: 'ESTAR', formula: 'el / la / mi / este + nombre + está · están', example: 'Las sillas están junto a mi mesa.', caption: 'dónde está una cosa concreta', en: 'where a specific thing is' },
            { tone: 'violet', label: 'PREGUNTAS', formula: '¿Qué es? ¿Cómo es? ¿Hay…? ¿Cuántos… hay? ¿Dónde está…?', example: '¿Dónde está tu habitación?', caption: 'pedir la información útil', en: 'asking for useful information' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Mira la palabra antes del nombre. **Un, una, dos, muchos** → **hay**: «Hay dos sillas». **El, la, mi, tu, este** → **está / están**: «Las sillas están junto a mi mesa». Y para describir, **ser**: «La mesa es grande».', en: 'Look at the word before the noun. Un, una, dos, muchos → hay: “Hay dos sillas”. El, la, mi, tu, este → está / están: “Las sillas están junto a mi mesa”. And to describe, ser: “La mesa es grande”.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'En mi calle ___ una panadería muy buena.', options: ['es', 'está', 'hay'], answer: 2, why: '«Una panadería» = cosa nueva: hay.', en: 'There is a very good bakery on my street.' },
            { prompt: 'La panadería ___ al lado del banco.', options: ['hay', 'es', 'está'], answer: 2, why: '«La panadería» es concreta: está + lugar.', en: 'The bakery is next to the bank.' },
            { prompt: '¿___ ventanas hay en tu habitación?', options: ['Cuántas', 'Cuántos', 'Dónde'], answer: 0, why: 'Cantidad + ventanas (femenino plural): cuántas.', en: 'How many windows are there in your room?' },
            { prompt: 'Mis gafas ___ encima de ese libro.', options: ['está', 'hay', 'están'], answer: 2, why: '«Mis gafas» = concretas y plurales: están.', en: 'My glasses are on top of that book.' },
            { prompt: '¿De quién ___ aquella maleta?', options: ['hay', 'es', 'está'], answer: 1, why: 'Pertenencia: ¿de quién es?', en: 'Whose is that suitcase over there?' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'De la casa al hotel.', blocks: [
          { kind: 'lead', text: 'Ahora Daniel está en un hotel. Él tiene preguntas para la recepcionista. Escribe las preguntas de Daniel.', en: 'Now Daniel is in a hotel. He has questions for the receptionist. Write Daniel’s questions.' },
          { kind: 'rewrite', title: 'En el hotel · At the hotel', items: [
            { prompt: 'Daniel no sabe si el hotel tiene un restaurante.', instruction: 'Escribe la pregunta con «¿Hay…?».', accept: ['¿Hay un restaurante?', '¿Hay un restaurante en el hotel?', '¿Hay restaurante?', '¿Hay restaurante en el hotel?'] },
            { prompt: 'Daniel sabe que hay un ascensor, pero no lo ve.', instruction: 'Escribe la pregunta con «¿Dónde…?».', accept: ['¿Dónde está el ascensor?'] },
            { prompt: 'Daniel quiere saber si su habitación es grande o pequeña.', instruction: 'Escribe la pregunta con «¿Cómo…?».', accept: ['¿Cómo es mi habitación?', '¿Cómo es la habitación?'] },
          ] },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 045 · Pretérito perfecto compuesto: experiencias', text: 'Ya describes un lugar en el presente: qué es, qué hay y dónde está cada cosa. En la clase 045 das un paso más y hablas de tus **experiencias**: «**He estado** en Lima», «¿**Has visitado** México?». Es el paso natural: de describir lo que ves ahora a contar lo que has vivido.', en: 'You can now describe a place in the present: what it is, what there is and where each thing is. In class 045 you take one more step and talk about your experiences: “I have been to Lima”, “Have you visited Mexico?”. It is the natural next step: from describing what you see now to telling what you have lived.', href: '/sistema-verbal/preterito-perfecto-compuesto-indicativo', label: 'Ir a la clase 045' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Cómo es tu casa? ¿Qué hay en tu salón? ¿Dónde está tu teléfono ahora?». Respuesta esperada: una frase con es, una con hay y una con está. Tarea: dejar la nota de Escribir a una persona real.' },
        ] },
      ],
    },
  ],
};
