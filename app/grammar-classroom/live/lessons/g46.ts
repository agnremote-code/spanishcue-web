import type { LiveLesson } from '../types';

/**
 * Lesson 46 · A1 · Pronombres personales y reflexivos.
 * Lucía and her brother Diego share a flat with two different timetables:
 * subject pronouns for contrast, me / te / se / nos for daily routines.
 */
export const lesson: LiveLesson = {
  id: 46,
  level: 'A1',
  title: 'Pronombres personales y reflexivos',
  subtitle: 'Decir quién hace qué con yo, tú, él o ella, y contar tu rutina con me, te, se y nos.',
  legend: [
    { tone: 'blue', label: 'Pronombre sujeto · yo, tú, él, ella, usted…' },
    { tone: 'teal', label: 'Verbo reflexivo · me levanto, te duchas, se acuesta' },
  ],
  optionNotes: {
    me: '«Me» va con «yo»: me levanto, me llamo.',
    te: '«Te» va con «tú»: te levantas, te llamas.',
    se: '«Se» va con él, ella, usted, ellos, ellas o ustedes.',
    nos: '«Nos» va con «nosotros» o «nosotras»: incluye a la persona que habla.',
    'nos acostamos': '«Nos» incluye a la persona que habla. Aquí no habla ninguno de ellos.',
    'se acuesta': '«Se acuesta» es para una persona. Aquí hay dos.',
    'Me trabajo en la oficina; se trabaja en casa': '«Trabajar» no es reflexivo, y «me» o «se» no son sujetos.',
    'La trabajo en la oficina; le trabaja en casa': '«La» y «le» no son sujetos. Para el contraste, usa yo, tú, él…',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Quién hace qué?', coach: 'El verbo ya dice quién es.',
      steps: [
        { title: 'Yo, tú, él, ella', blocks: [
          { kind: 'lead', text: 'Lucía vive con su hermano Diego. **Ella** trabaja en una oficina. **Él** trabaja en casa. Para decir **quién** hace algo, usamos los pronombres sujeto.', en: 'Subject pronouns say who does the action.' },
          { kind: 'guide', text: { teacher: 'Señala a personas o fotos y pide el pronombre: «yo», «tú», «él», «ella». Después lean la tabla.', self: 'Lee la tabla en voz alta, con el verbo. Señala con el dedo: yo (tú mismo), tú, él, ella.' } },
          { kind: 'table', title: 'Los pronombres sujeto', head: ['Persona', 'Pronombre', 'Ejemplo: hablar'], rows: [
            ['1.ª singular', '[[yo|blue]]', 'habl**o**'],
            ['2.ª singular', '[[tú|blue]]', 'habl**as**'],
            ['3.ª singular', '[[él|blue]], [[ella|blue]], [[usted|blue]]', 'habl**a**'],
            ['1.ª plural', '[[nosotros|blue]], [[nosotras|blue]]', 'habl**amos**'],
            ['2.ª plural (España)', '[[vosotros|blue]], [[vosotras|blue]]', 'habl**áis**'],
            ['3.ª plural', '[[ellos|blue]], [[ellas|blue]], [[ustedes|blue]]', 'habl**an**'],
          ], note: '**Usted** y **ustedes** usan la forma de él / ellos. En América, para hablar con varias personas se usa **ustedes**; en España, también **vosotros**.' },
          { kind: 'tip', icon: '🌎', title: 'Tú y usted', text: '**Tú** para amigos, familia y compañeros. **Usted** para personas mayores, clientes o situaciones formales: «¿**Usted** vive aquí?»..', en: 'tú = informal · usted = formal' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Lucía trabaja en una oficina. ___ trabaja en una oficina.', options: ['Él', 'Ella', 'Ellos'], answer: 1, why: 'Lucía es una mujer: ella.' },
            { prompt: 'Diego y yo vivimos juntos. ___ vivimos juntos.', options: ['Ellos', 'Nosotros', 'Ustedes'], answer: 1, why: '«Diego y yo» incluye a la persona que habla: nosotros.' },
            { prompt: 'Hablas con un señor mayor que no conoces. ¿___ vive aquí?', options: ['Tú', 'Usted', 'Él'], answer: 1, why: 'Situación formal: usted.' },
          ] },
        ] },
        { title: '¿Con o sin pronombre?', mascot: '/brand/mascot/studying.webp', coach: 'Normalmente, sin pronombre.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'SUJETO OMITIDO O EXPRESO', question: '¿Digo «yo» o no?', en: 'subject pronouns are often dropped', formula: ['verbo solo: Trabajo en casa.', 'pronombre + verbo: para contrastar o aclarar'],
            meaning: 'En español, el verbo ya dice quién es: «trabaj**o**» = yo. Por eso, normalmente **no** usamos el pronombre. Lo usamos para **contrastar** dos personas, para dar **énfasis** o para **aclarar**.',
            examples: [
              { es: 'Trabajo en casa.', en: 'I work at home.' },
              { es: '[[Yo|blue]] cocino; [[tú|blue]] lavas los platos.', en: 'I cook; you wash the dishes. (contrast)' },
              { es: '¿[[Usted|blue]] vive aquí?', en: 'Do you live here? (polite, clear)' },
              { es: '[[Ella|blue]] se levanta a las siete y [[él|blue]], a las ocho.', en: 'She gets up at seven and he at eight.' },
            ] },
          { kind: 'compare', title: 'Dos formas correctas', columns: [
            { tone: 'neutral', label: 'NORMAL', sentence: 'Vivo en Bogotá.', idea: 'Información simple. El verbo ya dice «yo».', en: 'I live in Bogotá.' },
            { tone: 'blue', label: 'CONTRASTE', sentence: '[[Yo|blue]] vivo en Bogotá, y [[tú|blue]], en Lima.', idea: 'Dos personas diferentes: el pronombre marca la diferencia.', en: 'I live in Bogotá, and you in Lima.' },
          ] },
          { kind: 'tip', icon: '!', title: 'No repitas «yo» en cada frase', text: '«Yo me levanto. Yo me ducho. Yo desayuno.» suena raro. Mejor: «Me levanto, me ducho y desayuno».', en: 'Don’t repeat «yo» in every sentence.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '¿Qué frase marca un **contraste** entre dos personas?', options: ['Trabajo en la oficina.', 'Yo trabajo en la oficina; él trabaja en casa.'], answer: 1, why: '«Yo» y «él» marcan la diferencia entre dos personas.' },
            { prompt: '«Estudiamos español.» ¿Quién estudia?', options: ['Ellos.', 'Nosotros.', 'Tú.'], answer: 1, why: 'La terminación -amos dice «nosotros».' },
          ] },
        ] },
        { title: 'Me levanto: los verbos reflexivos', mascot: '/autoestudio/mascot/noting.webp', coach: 'Me, te, se: la acción vuelve a la persona.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'VERBOS REFLEXIVOS', question: '¿Lo haces para ti?', en: 'reflexive verbs', formula: ['me / te / se / nos / os / se + verbo', 'levantarse → me levanto'],
            meaning: 'Con verbos como **levantarse**, **ducharse** o **llamarse**, la acción **vuelve** a la misma persona. Antes del verbo va **me, te, se, nos, os** o **se**, según la persona.',
            examples: [
              { es: '[[Me levanto|teal]] a las siete.', en: 'I get up at seven.' },
              { es: '¿Cómo [[te llamas|teal]]?', en: 'What’s your name?' },
              { es: 'Lucía [[se prepara|teal]] para trabajar.', en: 'Lucía gets ready for work.' },
              { es: '[[Nos acostamos|teal]] tarde.', en: 'We go to bed late.' },
            ] },
          { kind: 'table', title: 'Levantarse', head: ['Persona', 'Pronombre reflexivo', 'Verbo'], rows: [
            ['yo', '[[me|teal]]', 'levanto'],
            ['tú', '[[te|teal]]', 'levantas'],
            ['él, ella, usted', '[[se|teal]]', 'levanta'],
            ['nosotros, nosotras', '[[nos|teal]]', 'levantamos'],
            ['vosotros, vosotras', '[[os|teal]]', 'levantáis'],
            ['ellos, ellas, ustedes', '[[se|teal]]', 'levantan'],
          ], note: 'En el diccionario, el verbo termina en **-se**: levantar**se**, duchar**se**, llamar**se**.' },
          { kind: 'tip', icon: '⏰', title: 'Verbos de la rutina', text: 'levantarse · ducharse · lavarse · peinarse · vestirse · prepararse · sentarse · acostarse · quedarse. Algunos cambian la vocal: acostarse → **me acuesto**, sentarse → **me siento**, vestirse → **me visto**.', en: 'get up · shower · wash · comb · get dressed · get ready · sit down · go to bed · stay' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Yo ___ levanto a las siete.', options: ['se', 'me', 'te'], answer: 1, why: 'Con yo: me.' },
            { prompt: '¿Tú ___ duchas antes de desayunar?', options: ['me', 'se', 'te'], answer: 2, why: 'Con tú: te.' },
            { prompt: 'Diego ___ levanta a las ocho.', options: ['se', 'te', 'nos'], answer: 0, why: 'Con él: se.' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/seated.webp', coach: 'Primero la persona, después la forma.', blocks: [
          { kind: 'decide', title: 'Piensa en una frase de tu rutina', steps: [
            { q: '¿Quieres contrastar dos personas o aclarar quién es?', yes: 'Usa el pronombre sujeto: «[[Yo|blue]] me levanto temprano; [[tú|blue]], tarde».', no: 'No hace falta: «Me levanto temprano».' },
            { q: '¿El verbo es reflexivo (levantarse, ducharse, llamarse…)?', yes: 'Pon **me, te, se, nos** antes del verbo: «[[nos sentamos|teal]]».', no: 'Solo el verbo: «Trabajo», «Desayunamos».' },
          ] },
          { kind: 'compare', title: '«Se» para una persona y para varias', columns: [
            { tone: 'teal', label: 'UNA PERSONA', sentence: 'Diego [[se acuesta|teal]] a las doce.', idea: 'Se + verbo en singular.', en: 'Diego goes to bed at twelve.' },
            { tone: 'teal', label: 'VARIAS PERSONAS', sentence: 'Lucía y Diego [[se acuestan|teal]] a las once.', idea: 'Se + verbo en plural.', en: 'Lucía and Diego go to bed at eleven.' },
          ] },
          { kind: 'tip', icon: '📚', title: 'Para saber más', text: 'Hay otros pronombres: «**Lo** veo», «**Le** escribo», y preguntas como «¿**Quién**…?». Los vas a estudiar en otras clases.', en: 'Other pronouns come in other lessons.' },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Estos errores son muy comunes.', blocks: [
          { kind: 'guide', text: { teacher: 'Pide al alumno que encuentre el error antes de mostrar la corrección.', self: 'Lee cada frase, busca el error y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'Yo levanto a las siete.', right: 'Me levanto a las siete.', why: '«Levantarse» es reflexivo: necesita «me».' },
            { wrong: 'Tú se duchas por la mañana.', right: 'Tú te duchas por la mañana.', why: 'Con tú: te.' },
            { wrong: 'Me llamo es Lucía.', right: 'Me llamo Lucía.', why: '«Me llamo» ya tiene el verbo: no necesita «es».' },
            { wrong: 'Lucía y Diego se acuesta a las once.', right: 'Lucía y Diego se acuestan a las once.', why: 'Dos personas: verbo en plural.' },
            { wrong: 'Me acosto a las doce.', right: 'Me acuesto a las doce.', why: '«Acostarse» cambia la vocal: me acuesto.' },
            { wrong: 'Yo trabajo. Yo como. Yo duermo.', right: 'Trabajo, como y duermo.', why: 'No repitas «yo»: el verbo ya dice quién es.' },
          ] },
          { kind: 'teacher', text: 'Di un verbo en infinitivo y una persona («ducharse, tú»). El alumno dice la forma: «te duchas».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Los pronombres en situaciones reales', coach: 'Toca las expresiones marcadas.',
      steps: [
        { title: 'Dos horarios diferentes', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada expresión y explica quién hace la acción.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y mira quién hace la acción.' } },
          { kind: 'explore', title: 'El baño a las siete', setting: 'Lucía y su hermano Diego viven juntos. Es domingo por la noche y organizan la semana.', lines: [
            { who: 'Lucía', text: 'Diego, mañana [[me levanto|teal]] a las siete.', en: 'Diego, tomorrow I get up at seven.' },
            { who: 'Diego', text: '¿Tan temprano?', en: 'So early?' },
            { who: 'Lucía', text: 'Sí. [[Yo|blue]] trabajo en la oficina; [[tú|blue]] trabajas en casa.' },
            { who: 'Diego', text: 'Es verdad. Entonces [[me ducho|teal]] después de ti.' },
            { who: 'Lucía', text: 'Perfecto. [[Me preparo|teal]] rápido y salgo a las ocho.' },
            { who: 'Diego', text: '¿Y a qué hora [[te acuestas|teal]] hoy?' },
            { who: 'Lucía', text: 'A las once. ¿Y [[tú|blue]]?' },
            { who: 'Diego', text: '[[Yo|blue]], a las doce. Pero mañana [[nos sentamos|teal]] juntos a cenar, ¿no?' },
            { who: 'Lucía', text: 'Sí, a las nueve. [[Nos vemos|teal]] en la cocina.' },
          ], notes: {
            'me levanto': '«Levantarse» es reflexivo. Con yo: **me** levanto.',
            Yo: 'Lucía usa «yo» para **contrastar**: ella trabaja en la oficina y Diego, en casa.',
            'tú': '«Tú» marca la diferencia con la otra persona. Sin contraste, no hace falta.',
            'me ducho': '«Ducharse», con yo: **me** ducho.',
            'Me preparo': '«Prepararse», con yo: **me** preparo.',
            'te acuestas': '«Acostarse», con tú: **te** acuestas. La o cambia a **ue**.',
            'nos sentamos': '«Sentarse», con nosotros: **nos** sentamos. Incluye a Diego y a Lucía.',
            'Nos vemos': '«Verse», con nosotros: los dos se ven. **Nos** vemos.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Quién se levanta a las siete?', options: ['Lucía.', 'Diego.', 'Los dos.'], answer: 0, why: '«Diego, mañana me levanto a las siete», dice Lucía.' },
            { prompt: '¿Por qué Lucía dice «yo» y «tú»?', options: ['Para contrastar dónde trabaja cada uno.', 'Porque es obligatorio.'], answer: 0, why: 'El pronombre marca la diferencia: oficina / casa.' },
          ] },
        ] },
        { title: 'El primer día de clase', blocks: [
          { kind: 'explore', title: 'Nuevos compañeros', setting: 'Diego empieza un curso de fotografía. Habla con otros estudiantes.', lines: [
            { who: 'Diego', text: 'Hola, ¿cómo [[te llamas|teal]]?' },
            { who: 'Paula', text: '[[Me llamo|teal]] Paula. ¿Y [[tú|blue]]?' },
            { who: 'Diego', text: 'Diego. Mucho gusto. ¿Eres de aquí?' },
            { who: 'Paula', text: 'No, [[yo|blue]] soy de Chile, pero vivo aquí. Y él es Marco; [[él|blue]] es de Perú.' },
            { who: 'Marco', text: 'Hola. Perdón, ¿[[usted|blue]] es el profesor?' },
            { who: 'Diego', text: '¡No, no! Soy estudiante, como [[ustedes|blue]].' },
            { who: 'Marco', text: '¡Ah, perdón! El profesor [[se llama|teal]] Andrés, ¿no?' },
            { who: 'Paula', text: 'Sí. ¡Mira, ya llega! [[Nos sentamos|teal]] aquí, ¿no?' },
          ], notes: {
            'te llamas': '«Llamarse», con tú: **te** llamas. Es la pregunta normal para el nombre.',
            'Me llamo': '«Llamarse», con yo: **me** llamo. No digas «me llamo es».',
            'tú': '«¿Y tú?» devuelve la pregunta: aquí el pronombre es necesario.',
            yo: 'Paula contrasta su origen (Chile) con el lugar donde vive.',
            'él': '«Él» aclara de quién habla Paula: de Marco.',
            usted: 'Marco cree que Diego es el profesor: usa **usted**, la forma formal.',
            ustedes: '**Ustedes**: Paula y Marco, varias personas.',
            'se llama': '«Llamarse», con él: **se** llama.',
            'Nos sentamos': '«Sentarse», con nosotros: **nos** sentamos.',
          } },
          { kind: 'teacher', text: 'Practiquen una presentación en grupo: «Me llamo… Yo soy de…, y él / ella es de…».' },
        ] },
        { title: '¿Me, te, se o nos?', blocks: [
          { kind: 'classify', title: 'Clasifica las frases de las dos conversaciones', categories: [
            { id: 'me', label: 'me · yo', tone: 'teal' },
            { id: 'te', label: 'te · tú', tone: 'teal' },
            { id: 'se', label: 'se · él, ella, usted…', tone: 'teal' },
            { id: 'nos', label: 'nos · nosotros', tone: 'teal' },
          ], items: [
            { text: 'Mañana ___ levanto a las siete.', answer: 'me', why: 'Lucía habla de ella: me levanto.' },
            { text: '¿A qué hora ___ acuestas?', answer: 'te', why: 'Diego pregunta a Lucía (tú): te acuestas.' },
            { text: 'El profesor ___ llama Andrés.', answer: 'se', why: 'Él: se llama.' },
            { text: 'Mañana ___ sentamos juntos a cenar.', answer: 'nos', why: 'Diego y Lucía (nosotros): nos sentamos.' },
            { text: '¿Cómo ___ llamas?', answer: 'te', why: 'Pregunta a otra persona (tú): te llamas.' },
            { text: '___ ducho después de ti.', answer: 'me', why: 'Diego habla de él mismo: me ducho.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Quién es? Elige la forma.',
      steps: [
        { title: 'Elige según la persona', blocks: [
          { kind: 'choice', items: [
            { context: 'Tu rutina.', prompt: 'Yo ___ levanto a las siete.', options: ['se', 'me', 'te'], answer: 1, why: 'Con yo: me.' },
            { context: 'Le preguntas a tu amiga.', prompt: '¿A qué hora ___ acuestas?', options: ['te', 'se', 'nos'], answer: 0, why: 'Con tú: te.' },
            { context: 'Lucía y Diego.', prompt: 'Lucía y su hermano ___ a las once.', options: ['se acuestan', 'se acuesta', 'nos acostamos'], answer: 0, why: 'Dos personas, sin incluir al que habla: se acuestan.' },
            { context: 'Tu familia y tú.', prompt: 'Los domingos ___ levantamos tarde.', options: ['se', 'nos', 'me'], answer: 1, why: 'Con nosotros: nos.' },
            { context: 'Un cliente en un hotel.', prompt: '¿Cómo ___ llama usted?', options: ['te', 'se', 'me'], answer: 1, why: 'Con usted: se.' },
            { context: 'Lucía quiere contrastar.', prompt: '¿Qué frase sirve?', options: ['Yo trabajo en la oficina; él trabaja en casa', 'Me trabajo en la oficina; se trabaja en casa', 'La trabajo en la oficina; le trabaja en casa'], answer: 0, why: '«Yo» y «él» son sujetos y marcan el contraste.' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '«Se levanta a las seis.» ¿Quién puede ser?', options: ['Yo.', 'Mi madre.', 'Tú.'], answer: 1, why: '«Se levanta»: él, ella o usted.' },
            { prompt: '¿Qué frase pone **énfasis** en la persona?', options: ['Cocino yo hoy.', 'Cocino hoy.'], answer: 0, why: '«Cocino yo»: yo, y no otra persona.' },
            { prompt: '«Nos acostamos tarde.» ¿Incluye a la persona que habla?', options: ['Sí.', 'No.'], answer: 0, why: '«Nos»: nosotros, con la persona que habla.' },
            { prompt: '«Lavo la ropa» y «Me lavo». ¿Qué frase es reflexiva?', options: ['Lavo la ropa.', 'Me lavo.'], answer: 1, why: '«Me lavo»: la acción vuelve a la misma persona.' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'Una mañana en casa', lines: [
            { who: 'Diego', text: 'Lucía, ¿___ duchas ahora?', options: ['te', 'me', 'se'], answer: 0, why: 'Diego pregunta a Lucía (tú): te.' },
            { who: 'Lucía', text: 'Sí, y ahora ___ preparo un café.', options: ['me', 'te', 'nos'], answer: 0, why: 'Lucía habla de ella: me.' },
            { who: 'Diego', text: 'Perfecto. ___ me ducho ahora.', options: ['Yo', 'Me', 'Mí'], answer: 0, why: 'El pronombre sujeto «yo» marca el turno: ahora él.' },
            { who: 'Lucía', text: 'El gato ___ sienta siempre en mi silla.', options: ['me', 'se', 'te'], answer: 1, why: 'El gato (él): se.' },
            { who: 'Diego', text: 'Jaja. Esta noche ___ quedamos en casa, ¿no?', options: ['se', 'nos', 'me'], answer: 1, why: 'Los dos (nosotros): nos.' },
            { who: 'Lucía', text: 'Sí. Hoy cocino ___; tú lavas los platos.', options: ['yo', 'me', 'mí'], answer: 0, why: '«Cocinar» no es reflexivo. «Yo» y «tú» contrastan las dos tareas.' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Me levanto a las siete y me ducho.', ok: true, why: 'Correcta: con yo, me.' },
            { sentence: 'Mi hermano te acuesta muy tarde.', ok: false, options: ['Mi hermano se acuesta muy tarde.', 'Mi hermano me acuesta muy tarde.', 'Mi hermano se acuestan muy tarde.'], answer: 0, why: 'Con él: se acuesta.' },
            { sentence: 'Nosotros se sentamos aquí.', ok: false, options: ['Nosotros nos sentamos aquí.', 'Nosotros se sientan aquí.', 'Nosotros te sentamos aquí.'], answer: 0, why: 'Con nosotros: nos.' },
            { sentence: 'Me llamo es Paula.', ok: false, options: ['Me llamo Paula.', 'Se llamo Paula.', 'Mi llamo Paula.'], answer: 0, why: '«Me llamo» + nombre, sin «es».' },
            { sentence: 'Ustedes se levantan temprano.', ok: true, why: 'Correcta: con ustedes, se + verbo en plural.' },
            { sentence: 'Yo levanto a las ocho.', ok: false, options: ['Me levanto a las ocho.', 'Se levanto a las ocho.', 'Yo levanta a las ocho.'], answer: 0, why: '«Levantarse» es reflexivo: me levanto.' },
          ] },
        ] },
        { title: 'Construye y transforma', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['Me', 'levanto', 'a', 'las', 'siete'], accept: ['Me levanto a las siete', 'A las siete me levanto'], en: 'I get up at seven.' },
            { tiles: ['¿Cómo', 'te', 'llamas?'], accept: ['¿Cómo te llamas?'], en: 'What’s your name?' },
            { tiles: ['Yo', 'trabajo', 'en', 'casa', 'y', 'ella', 'en', 'la', 'oficina'], accept: ['Yo trabajo en casa y ella en la oficina'], en: 'I work at home and she works at the office.' },
            { tiles: ['Nos', 'acostamos', 'a', 'las', 'once'], accept: ['Nos acostamos a las once', 'A las once nos acostamos'], en: 'We go to bed at eleven.' },
          ] },
          { kind: 'rewrite', title: 'Cambia la persona', items: [
            { prompt: 'Yo me levanto a las siete y me preparo para trabajar.', instruction: 'Escribe la frase con «Tú».', accept: ['Tú te levantas a las siete y te preparas para trabajar'] },
            { prompt: 'Nos sentamos en la cocina y nos acostamos a las once.', instruction: 'Habla de «Lucía y su hermano».', accept: ['Lucía y su hermano se sientan en la cocina y se acuestan a las once'] },
            { prompt: 'Me ducho por la mañana.', instruction: 'Habla de «Diego».', accept: ['Diego se ducha por la mañana'] },
            { prompt: '¿Cómo te llamas?', instruction: 'Pregunta con «usted».', accept: ['¿Cómo se llama usted?', '¿Cómo se llama?', '¿Usted cómo se llama?'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'La mañana del sábado', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'La mañana del sábado', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno hace dos columnas: «Diego» y «Lucía», y anota qué hace cada uno.', self: 'Escucha una vez para la idea general. Después escucha otra vez y haz dos columnas: lo que hace Diego y lo que hace Lucía. Puedes bajar la velocidad.' } },
          { kind: 'listen', title: 'Diego, el sábado', channel: 'MENSAJE DE VOZ · PARA LUCÍA', src: '/audio/grammar-classroom/46.mp3',
            before: 'Es sábado. Diego le deja un mensaje a su hermana Lucía. ¿Qué crees que le propone?',
            gist: { prompt: '¿Qué propone Diego?', options: ['Comer juntos y después sentarse en la terraza.', 'Ir a una cena por la noche.', 'Levantarse temprano el sábado.'], answer: 0, why: '«Podemos comer juntos a la una. Después nos sentamos en la terraza».' },
            details: [
              { prompt: '¿Cuándo se levanta Diego hoy?', options: ['Temprano.', 'Tarde.', 'A la una.'], answer: 1, why: '«Hoy me levanto tarde».' },
              { prompt: '¿Qué hace Diego en casa?', options: ['Se prepara un café y trabaja un poco.', 'Cocina para Lucía.', 'Duerme.'], answer: 0, why: '«Me preparo un café y trabajo un poco en casa».' },
              { prompt: '¿Quién se levanta temprano los sábados?', options: ['Diego.', 'Lucía.', 'Los dos.'], answer: 1, why: '«Tú te levantas temprano los sábados, ¿verdad?».' },
              { prompt: '¿De qué hablan en la terraza?', options: ['De la cena.', 'De la semana.', 'Del trabajo de Diego.'], answer: 1, why: '«…nos sentamos en la terraza y hablamos de la semana».' },
              { prompt: '¿Quién tiene una cena por la noche?', options: ['Diego.', 'Lucía.', 'Los dos.'], answer: 1, why: '«Por la noche yo me quedo en casa; tú tienes una cena». «Tú» es Lucía.' },
            ],
            transcript: 'Hola, Lucía. Hoy [[me levanto|teal]] tarde. [[Me preparo|teal]] un café y trabajo un poco en casa. [[Tú|blue]] [[te levantas|teal]] temprano los sábados, ¿verdad? Podemos comer juntos a la una. Después [[nos sentamos|teal]] en la terraza y hablamos de la semana. Por la noche [[yo|blue]] [[me quedo|teal]] en casa; [[tú|blue]] tienes una cena.',
            reply: { teacher: 'El alumno responde en voz alta como si fuera Lucía: acepta o no la propuesta y cuenta su sábado con dos verbos reflexivos.', self: 'Responde a Diego como si fueras Lucía: ¿comes con él? ¿A qué hora te levantas el sábado? Usa «me» y «nos».' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu rutina y la de los demás', coach: 'Cuenta tu día, paso a paso.',
      steps: [
        { title: 'Tu rutina y la de los demás', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Comparte también tu rutina para provocar contrastes: «Yo me levanto a las seis, ¿y tú?».', self: 'Responde cada pregunta en voz alta. Usa verbos reflexivos y, cuando compares, los pronombres yo, tú, él, ella.' } },
          { kind: 'talk', cards: [
            { q: '¿Cómo te llamas y de dónde eres?', followUps: ['¿Dónde vives ahora?', '¿Cómo se llama tu mejor amigo o amiga?', '¿De dónde es?'], phrases: ['[[Me llamo|teal]]…', '[[Yo|blue]] soy de…', 'Mi amiga [[se llama|teal]]…'], hint: 'Para el nombre: «Me llamo + nombre», sin «es».', example: 'Me llamo Kenji. Soy de Japón, pero vivo en Madrid. Mi mejor amiga se llama Yuki. Ella es de Osaka.', next: 'Ahora, tus mañanas.' },
            { q: '¿A qué hora te levantas normalmente?', followUps: ['¿Te levantas rápido o despacio?', '¿Te duchas por la mañana o por la noche?', '¿Qué desayunas?'], phrases: ['[[Me levanto|teal]] a las…', '[[Me ducho|teal]]…', 'Después [[me visto|teal]] y…'], hint: 'Cuenta tu mañana en pasos: «Me levanto, me ducho, me visto y desayuno».', example: 'Me levanto a las siete. Primero me ducho, después me visto y desayuno un café con pan.', next: 'Ahora, compara con otra persona.', teacher: 'Pide la hora exacta y un paso más: «¿Y después?».' },
            { q: '¿Con quién vives? ¿Tienen la misma rutina?', followUps: ['¿Quién se levanta primero?', '¿Quién se acuesta más tarde?', '¿Qué hacen juntos?'], phrases: ['[[Yo|blue]] me levanto a las…; [[él|blue]] / [[ella|blue]]…', 'Mi pareja [[se acuesta|teal]]…', '[[Nos sentamos|teal]] juntos…'], hint: 'Para comparar dos personas, usa los pronombres: «Yo…; ella…».', example: 'Vivo con mi pareja. Yo me levanto a las seis; él se levanta a las ocho. Por la noche nos sentamos juntos a cenar.', next: 'Ahora, tu fin de semana.' },
            { q: '¿Tu sábado es diferente?', followUps: ['¿Te levantas tarde?', '¿Te quedas en casa o sales?', '¿Con quién te ves?'], phrases: ['El sábado [[me levanto|teal]] tarde.', '[[Me quedo|teal]] en casa.', '[[Nos vemos|teal]] con amigos.'], hint: 'Compara: «Los lunes me levanto a las siete; el sábado, a las diez».', example: 'Sí. El sábado me levanto a las diez y me quedo en casa por la mañana. Por la tarde nos vemos con amigos.', next: 'Ahora, las personas de tu vida.' },
            { q: 'Piensa en una persona de tu familia. ¿Cómo es su día?', followUps: ['¿A qué hora se levanta?', '¿Dónde trabaja o estudia?', '¿Qué hace por la noche?'], phrases: ['Mi madre [[se levanta|teal]]…', '[[Ella|blue]] trabaja en…', '[[Se acuesta|teal]] a las…'], hint: 'Para otra persona: «se» + verbo con -a o -e: «se levanta», «se acuesta».', example: 'Mi abuela se levanta muy temprano, a las cinco. Ella no trabaja, pero camina en el parque. Se acuesta a las nueve.', next: 'Para terminar, imagina un día perfecto.' },
            { q: '¿Cómo es tu día perfecto?', followUps: ['¿A qué hora te levantas?', '¿Con quién estás?', '¿Dónde te sientas a comer?'], phrases: ['[[Me levanto|teal]] sin despertador.', '[[Nos sentamos|teal]] en…', '[[Me acuesto|teal]] tarde.'], hint: 'Usa el presente: «En mi día perfecto, me levanto a las diez…».', example: 'En mi día perfecto me levanto sin despertador, a las diez. Desayuno con mi familia y nos sentamos en la playa. Me acuesto tarde.', teacher: 'Es una pregunta abierta: deja hablar al alumno y corrige solo los pronombres reflexivos.' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno le pregunta al profesor por su rutina y la compara con la suya.', self: 'Escribe tu rutina de mañana en cinco pasos y léela en voz alta. Después cuéntala para otra persona: «Mi hermano se levanta…».' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje para organizar la casa', coach: 'Tu horario y el de la otra persona.',
      steps: [
        { title: 'Un mensaje para organizar la casa', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Usen la revisión automática y después revisen juntos cada reflexivo: ¿me, te, se o nos?', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después revisa cada verbo reflexivo: ¿el pronombre es de la persona correcta?' } },
          { kind: 'write', title: 'Nuestra semana', situation: 'Vives con otra persona: tu pareja, un amigo o un familiar. Escríbele un mensaje para organizar las mañanas y proponer un momento juntos.', task: [
            'Explica **tu horario** de la mañana con verbos reflexivos (me levanto, me ducho…).',
            'Di qué hace **la otra persona** (tú te levantas…).',
            'Usa **yo** y **tú** una vez para **contrastar**.',
            'Propón un momento **juntos** con «nos».',
          ], starters: ['Hola, …:', 'Yo me levanto a las…', 'Tú te levantas…', 'Me ducho…', 'Podemos…', 'Nos sentamos…'],
            words: ['me levanto', 'me ducho', 'me preparo', 'te levantas', 'nos sentamos', 'nos vemos', 'temprano', 'tarde', 'juntos'],
            model: 'Hola, Diego: [[yo|blue]] [[me levanto|teal]] a las siete y [[me preparo|teal]] para trabajar. [[Tú|blue]] [[te levantas|teal]] a las ocho, así que [[me ducho|teal]] primero. Podemos desayunar juntos el sábado. [[Nos sentamos|teal]] en la cocina y hablamos antes de salir.',
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
            { tone: 'blue', label: 'PRONOMBRE SUJETO', formula: 'yo, tú, él, ella, usted, nosotros, ellos, ustedes', example: 'Yo trabajo en casa; tú, en la oficina.', caption: 'Solo para contrastar, dar énfasis o aclarar.', en: 'I, you, he, she…' },
            { tone: 'teal', label: 'REFLEXIVOS', formula: 'me · te · se · nos · os · se + verbo', example: 'Me levanto a las siete.', caption: 'Para la rutina: levantarse, ducharse, acostarse.', en: 'I get up' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'El verbo ya lo dice', text: 'Normalmente no necesitas «yo»: «**Me levanto**». Pero el reflexivo **sí** es necesario: «Yo levanto» no es correcto.', en: 'Drop «yo», keep «me».' },
        ] },
        { title: 'Desafío final', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: 'Tú ___ levantas muy temprano.', options: ['se', 'te', 'me'], answer: 1, why: 'Con tú: te.' },
            { prompt: 'Mis padres ___ a las diez.', options: ['se acuesta', 'se acuestan', 'nos acostamos'], answer: 1, why: 'Ellos: se + verbo en plural.' },
            { prompt: 'Mi hermana y yo ___ quedamos en casa.', options: ['nos', 'se', 'me'], answer: 0, why: '«Mi hermana y yo» = nosotras: nos.' },
            { prompt: '¿Qué frase marca un contraste?', options: ['Me levanto temprano.', 'Yo me levanto temprano; él, tarde.'], answer: 1, why: '«Yo» y «él» contrastan dos personas.' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Cambia “me levanto” para hablar de tú». Respuesta: «Tú te levantas».' },
        ] },
      ],
    },
  ],
};
