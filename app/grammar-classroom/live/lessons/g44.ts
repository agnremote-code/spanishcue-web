import type { LiveLesson } from '../types';

/**
 * Lesson 44 · A1 · Posesivos.
 * Pablo and Elena prepare a meeting and look for their things in the office;
 * Marta's folder adds a third owner, so «su» needs «de + persona».
 */
export const lesson: LiveLesson = {
  id: 44,
  level: 'A1',
  title: 'Posesivos',
  subtitle: 'Decir de quién es cada cosa con mi, tu, su y nuestro, y aclarar el dueño con «de + persona».',
  legend: [
    { tone: 'blue', label: 'Mi, mis · de yo' },
    { tone: 'teal', label: 'Tu, tus · de tú' },
    { tone: 'orange', label: 'Su, sus o de + persona · de él, ella, usted, ellos, ustedes' },
    { tone: 'violet', label: 'Nuestro, nuestra · de nosotros' },
  ],
  optionNotes: {
    mis: '«Mis» es para varias cosas. Mira el sustantivo: ¿es una cosa o varias?',
    tus: '«Tus» es para varias cosas. Mira el sustantivo: ¿es una cosa o varias?',
    sus: '«Sus» es para varias cosas. Mira el sustantivo: ¿es una cosa o varias?',
    nuestro: '«Nuestro» es para un sustantivo masculino singular. Mira la cosa, no las personas.',
    nuestras: '«Nuestras» es para un sustantivo femenino plural. Mira la cosa, no las personas.',
    nuestros: '«Nuestros» es para un sustantivo masculino plural. Mira la cosa, no las personas.',
    'sus mochila': '«Sus» va con varias cosas: «sus mochilas». Con una mochila, «su mochila».',
    'tú libro': '«Tú» con tilde es la persona. El posesivo «tu» no lleva tilde: tu libro.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿De quién es?', coach: 'Mira la persona y después la cosa.',
      steps: [
        { title: 'Mi, tu, su', blocks: [
          { kind: 'lead', text: 'Pablo y Elena preparan una reunión. Hay llaves, teléfonos y carpetas en la mesa. ¿**De quién** es cada cosa? Para decirlo, usamos los **posesivos**.', en: 'Possessives say who something belongs to.' },
          { kind: 'guide', text: { teacher: 'Toma un objeto tuyo y uno del alumno. Di «mi libro», «tu libro». Tu alumno hace lo mismo.', self: 'Toma un objeto tuyo y di en voz alta: «mi teléfono», «mis llaves». Después lee la explicación.' } },
          { kind: 'concept', tone: 'blue', label: 'MI · TU · SU', question: '¿De quién es?', en: 'my · your · his / her / their', formula: ['mi / tu / su + una cosa', 'mis / tus / sus + varias cosas'],
            meaning: '**Mi, tu** y **su** van **antes** del sustantivo. Solo cambian por **número**: una cosa o varias cosas. No cambian por masculino o femenino.',
            examples: [
              { es: '[[mi pasaporte|blue]] · [[mis documentos|blue]]', en: 'my passport · my documents' },
              { es: '[[tu habitación|teal]] · [[tus llaves|teal]]', en: 'your room · your keys' },
              { es: '[[su teléfono|orange]] · [[sus maletas|orange]]', en: 'his/her/their phone · his/her/their suitcases' },
            ] },
          { kind: 'table', title: 'Una persona, una o varias cosas', head: ['Persona', 'Una cosa', 'Varias cosas'], rows: [
            ['yo', '[[mi|blue]] libro', '[[mis|blue]] libros'],
            ['tú', '[[tu|teal]] casa', '[[tus|teal]] casas'],
            ['él, ella, usted', '[[su|orange]] perro', '[[sus|orange]] perros'],
          ], note: '«**Tu**» (posesivo) no lleva tilde. «**Tú**» (la persona) sí: «Tú tienes tu libro».' },
          { kind: 'tip', icon: '!', title: 'La cosa decide, no la persona', text: '«**Mis** llaves»: una persona, varias llaves. La **s** dice que hay varias **cosas**, no varias personas.', en: 'mis = many things, not many owners' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Yo tengo un pasaporte. Es ___ pasaporte.', options: ['mi', 'mis', 'su'], answer: 0, why: 'De yo, una cosa: mi.' },
            { prompt: 'Tú tienes dos entradas. Son ___ entradas.', options: ['tu', 'tus', 'sus'], answer: 1, why: 'De tú, varias cosas: tus.' },
            { prompt: 'Pablo busca ___ llaves.', options: ['su', 'sus', 'mis'], answer: 1, why: 'De Pablo (él), varias llaves: sus.' },
          ] },
        ] },
        { title: 'Nuestro: cuatro formas', mascot: '/brand/mascot/studying.webp', coach: 'Nuestro es como un adjetivo en -o.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'NUESTRO · NUESTRA · NUESTROS · NUESTRAS', question: '¿Es de nosotros?', en: 'our', formula: ['nuestro + masculino · nuestra + femenino', 'nuestros / nuestras + varias cosas'],
            meaning: '**Nuestro** tiene **cuatro formas**, como «nuevo». Concuerda con la **cosa**: masculino o femenino, una o varias.',
            examples: [
              { es: '[[nuestro barrio|violet]]', en: 'our neighbourhood' },
              { es: '[[nuestra familia|violet]]', en: 'our family' },
              { es: '[[nuestros planes|violet]]', en: 'our plans' },
              { es: '[[nuestras fotos|violet]]', en: 'our photos' },
            ] },
          { kind: 'table', title: 'Todas las formas', head: ['Persona', 'Una cosa', 'Varias cosas'], rows: [
            ['yo', '[[mi|blue]]', '[[mis|blue]]'],
            ['tú', '[[tu|teal]]', '[[tus|teal]]'],
            ['él, ella, usted', '[[su|orange]]', '[[sus|orange]]'],
            ['nosotros, nosotras', '[[nuestro|violet]], [[nuestra|violet]]', '[[nuestros|violet]], [[nuestras|violet]]'],
            ['ellos, ellas, ustedes', '[[su|orange]]', '[[sus|orange]]'],
          ], note: 'Para **ustedes** también se usa **su**: «¿Es **su** mesa, señores?».' },
          { kind: 'tip', icon: '🌎', title: 'En España', text: 'Con **vosotros**, en España se usa **vuestro, vuestra, vuestros, vuestras**: «vuestra casa». En América, con ustedes: «**su** casa».', en: 'vuestro = your (plural), used in Spain' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Nosotros vivimos aquí. Es ___ casa.', options: ['nuestro', 'nuestra', 'nuestras'], answer: 1, why: '«Casa»: femenino singular, nuestra.' },
            { prompt: 'Elena y yo tenemos dos perros. Son ___ perros.', options: ['nuestros', 'nuestras', 'nuestro'], answer: 0, why: '«Perros»: masculino plural, nuestros.' },
            { prompt: 'Ana y yo compartimos una sala. Es ___ sala.', options: ['nuestro', 'nuestra', 'su'], answer: 1, why: 'De nosotras, «sala» femenino: nuestra.' },
          ] },
        ] },
        { title: 'Su tiene muchos dueños', mascot: '/autoestudio/mascot/noting.webp', coach: 'Si hay dudas, di el nombre.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'SU · DE + PERSONA', question: '¿De quién es exactamente?', en: 'his / her / your / their', formula: ['su = de él, de ella, de usted', 'su = de ellos, de ellas, de ustedes', 'el / la + cosa + de + persona'],
            meaning: '**Su** puede significar muchas cosas: de él, de ella, de usted, de ellos, de ellas o de ustedes. Si no está claro, usa **de + persona**.',
            examples: [
              { es: 'Es [[su libro|orange]]. (¿De Ana? ¿De Leo?)', en: 'It’s his/her book. (Whose?)' },
              { es: 'Es [[el libro de Ana|orange]].', en: 'It’s Ana’s book.' },
              { es: 'Es [[la casa de ellos|orange]].', en: 'It’s their house.' },
              { es: '¿Es [[su turno|orange]], señora?', en: 'Is it your turn, madam?' },
            ],
            note: 'Repetir «de + nombre» **no es un error**: muchas veces es la forma más clara.' },
          { kind: 'compare', title: 'Dos formas de decirlo', columns: [
            { tone: 'orange', label: 'SU', sentence: 'Ana habla con Luis de [[su casa|orange]].', idea: '¿La casa de Ana o la casa de Luis? No está claro.', en: 'ambiguous' },
            { tone: 'orange', label: 'DE + PERSONA', sentence: 'Ana habla con Luis de [[la casa de Luis|orange]].', idea: 'Ahora está claro: la casa es de Luis.', en: 'clear' },
          ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Hay tres personas en la sala. ¿Qué frase es más clara?', options: ['Es su mochila.', 'Es la mochila de Leo.'], answer: 1, why: '«De Leo» dice exactamente quién es el dueño.' },
            { prompt: 'Hablas con una señora. «¿Es ___ bolso?»', options: ['tu', 'su', 'nuestro'], answer: 1, why: 'Con usted, el posesivo es su.' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/seated.webp', coach: 'Primero la persona, después la cosa.', blocks: [
          { kind: 'decide', title: 'Piensa en una cosa y en su dueño', steps: [
            { q: '¿El dueño es «nosotros» o «nosotras»?', yes: 'Usa **nuestro, nuestra, nuestros, nuestras** según la cosa: «[[nuestra sala|violet]]», «[[nuestros documentos|violet]]».', no: 'next' },
            { q: '¿El dueño es yo o tú?', yes: 'Usa **mi / mis** o **tu / tus**: «[[mi carpeta|blue]]», «[[tus llaves|teal]]».', no: 'next' },
            { q: '¿Está claro quién es el dueño?', yes: 'Usa **su / sus**: «Elena tiene [[su computadora|orange]]».', no: 'Usa **de + persona**: «[[la carpeta de Marta|orange]]».' },
          ] },
          { kind: 'tip', icon: '📚', title: 'Para saber más', text: 'Hay otras formas que van **después** del sustantivo o solas: «Este libro es **mío**», «¿Es **tuyo**?», «un amigo **mío**». No es necesario aprenderlas ahora.', en: 'mine · yours · a friend of mine' },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Estos errores son muy comunes.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno encuentra el error antes de que muestres la corrección.', self: 'Lee cada frase, busca el error y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'Mis hermana vive en Lima.', right: 'Mi hermana vive en Lima.', why: 'Una hermana: mi. «Mis» es para varias cosas o personas.' },
            { wrong: 'Pablo y Elena buscan su llaves.', right: 'Pablo y Elena buscan sus llaves.', why: 'Varias llaves: sus. La forma depende de las cosas, no de las personas.' },
            { wrong: 'Es nuestro casa.', right: 'Es nuestra casa.', why: '«Casa» es femenino: nuestra.' },
            { wrong: '¿Dónde está tú libro?', right: '¿Dónde está tu libro?', why: 'El posesivo «tu» no lleva tilde.' },
            { wrong: 'Es la libro de mí.', right: 'Es mi libro.', why: 'Con «yo», usa el posesivo: mi libro.' },
            { wrong: 'Nuestros fotos están aquí.', right: 'Nuestras fotos están aquí.', why: '«Fotos» es femenino: nuestras.' },
          ] },
          { kind: 'teacher', text: 'Pon en la mesa objetos tuyos y del alumno. El alumno dice de quién es cada uno: «mi libro», «tus llaves», «nuestra mesa».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Los posesivos en situaciones reales', coach: 'Toca los posesivos marcados.',
      steps: [
        { title: 'Antes de la reunión', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada posesivo y dice quién es el dueño.', self: 'Lee el diálogo en voz alta. Después toca cada posesivo marcado: ¿quién es el dueño?' } },
          { kind: 'explore', title: '¿Dónde están mis llaves?', setting: 'Pablo y Elena preparan una reunión en la oficina. Pablo no encuentra sus cosas.', lines: [
            { who: 'Pablo', text: 'Elena, ¿ves [[mis llaves|blue]]? No las encuentro.', en: 'Elena, do you see my keys? I can’t find them.' },
            { who: 'Elena', text: 'No. ¿Están en [[tu mochila|teal]]?', en: 'No. Are they in your backpack?' },
            { who: 'Pablo', text: 'No, y tampoco encuentro [[mi teléfono|blue]].' },
            { who: 'Elena', text: 'Tranquilo. Vamos a [[nuestra sala|violet]] primero.' },
            { who: 'Pablo', text: 'Sí, pero [[nuestros documentos|violet]] están en otra oficina.' },
            { who: 'Elena', text: 'No, están aquí, con [[mi computadora|blue]].' },
            { who: 'Pablo', text: '¡Ah, perfecto! ¿Y esta carpeta azul es [[su carpeta|orange]]?' },
            { who: 'Elena', text: '¿De quién? ¿De Marta o del jefe?' },
            { who: 'Pablo', text: 'Perdón: ¿es [[la carpeta de Marta|orange]]?' },
            { who: 'Elena', text: 'Sí, es de ella. ¡Mira! [[Tus llaves|teal]] están debajo.' },
          ], notes: {
            'mis llaves': 'De Pablo (yo), y son **varias** llaves: **mis**.',
            'tu mochila': 'Elena habla con Pablo (tú). Una mochila: **tu**, sin tilde.',
            'mi teléfono': 'De Pablo (yo), un teléfono: **mi**.',
            'nuestra sala': 'La sala es de los dos (nosotros). «Sala» es femenino singular: **nuestra**.',
            'nuestros documentos': 'Los documentos son de los dos. Masculino plural: **nuestros**.',
            'mi computadora': 'De Elena (yo), una computadora: **mi**. «Mi» no cambia por género.',
            'su carpeta': '«Su» puede ser de Marta, del jefe… Por eso Elena no entiende.',
            'la carpeta de Marta': 'Con **de + persona**, el dueño está claro.',
            'Tus llaves': 'Elena habla con Pablo: las llaves de Pablo son **tus** llaves.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Dónde están los documentos?', options: ['En otra oficina.', 'Con la computadora de Elena.', 'En la mochila de Pablo.'], answer: 1, why: '«Están aquí, con mi computadora».' },
            { prompt: '¿Por qué Elena pregunta «¿De quién?»?', options: ['Porque «su carpeta» no está claro.', 'Porque la carpeta es de Pablo.', 'Porque no ve la carpeta.'], answer: 0, why: '«Su» puede ser de Marta o del jefe.' },
          ] },
        ] },
        { title: 'En el hotel', blocks: [
          { kind: 'explore', title: 'La llegada al hotel', setting: 'Elena y su hermano Luis llegan a un hotel. Hablan con el recepcionista.', lines: [
            { who: 'Recepcionista', text: 'Buenas tardes. ¿Me da [[su pasaporte|orange]], por favor?' },
            { who: 'Elena', text: 'Sí, claro. Aquí está [[mi pasaporte|blue]], y este es [[el pasaporte de mi hermano|orange]].' },
            { who: 'Recepcionista', text: 'Gracias. [[Su habitación|orange]] es la 204. Está en el segundo piso.' },
            { who: 'Luis', text: '¿Y [[nuestras maletas|violet]]?' },
            { who: 'Recepcionista', text: 'Un compañero sube [[sus maletas|orange]] ahora.' },
            { who: 'Elena', text: 'Muchas gracias. Luis, ¿tienes [[tu teléfono|teal]]?' },
            { who: 'Luis', text: 'Sí, pero no tengo [[mis libros|blue]]. ¡Están en el taxi!' },
          ], notes: {
            'su pasaporte': 'El recepcionista habla de **usted** con Elena: **su** pasaporte.',
            'mi pasaporte': 'De Elena (yo): **mi**.',
            'el pasaporte de mi hermano': 'Con «de + persona», el recepcionista sabe exactamente de quién es.',
            'Su habitación': 'De **ustedes** (Elena y Luis): **su** habitación.',
            'nuestras maletas': 'De Elena y Luis (nosotros). «Maletas» es femenino plural: **nuestras**.',
            'sus maletas': 'De ustedes, varias maletas: **sus**.',
            'tu teléfono': 'Elena habla con su hermano de **tú**: **tu** teléfono.',
            'mis libros': 'De Luis (yo), varios libros: **mis**.',
          } },
          { kind: 'teacher', text: 'Pregunta: «¿Qué cosas llevas siempre en tu bolso o mochila?». El alumno responde con «mi» y «mis».' },
        ] },
        { title: '¿Quién es el dueño?', blocks: [
          { kind: 'classify', title: 'Clasifica las expresiones de las dos conversaciones', categories: [
            { id: 'yo', label: 'Es de quien habla', tone: 'blue' },
            { id: 'tu', label: 'Es de quien escucha', tone: 'teal' },
            { id: 'nos', label: 'Es de los dos o del grupo', tone: 'violet' },
            { id: 'otro', label: 'Es de otra persona', tone: 'orange' },
          ], items: [
            { text: 'Pablo: «¿Ves mis llaves?»', answer: 'yo', why: 'Mis: las llaves son de Pablo, que habla.' },
            { text: 'Elena: «¿Están en tu mochila?»', answer: 'tu', why: 'Tu: la mochila es de Pablo, que escucha.' },
            { text: 'Elena: «Vamos a nuestra sala.»', answer: 'nos', why: 'Nuestra: la sala es de los dos.' },
            { text: 'Pablo: «¿Es la carpeta de Marta?»', answer: 'otro', why: 'De Marta: otra persona.' },
            { text: 'Luis: «¿Y nuestras maletas?»', answer: 'nos', why: 'Nuestras: de Elena y Luis.' },
            { text: 'Elena: «Este es el pasaporte de mi hermano.»', answer: 'otro', why: 'Es de Luis, no de Elena ni del recepcionista.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Persona primero, cosa después.',
      steps: [
        { title: 'Elige el posesivo', blocks: [
          { kind: 'choice', items: [
            { context: 'Hablas de tu madre.', prompt: '___ madre es profesora.', options: ['Mi', 'Mis', 'Su'], answer: 0, why: 'De yo, una persona: mi.' },
            { context: 'Le preguntas a un amigo.', prompt: '¿Dónde están ___ zapatos?', options: ['tu', 'tus', 'nuestro'], answer: 1, why: 'De tú, varios zapatos: tus.' },
            { context: 'Tú y tu pareja tienen un perro.', prompt: '___ perro se llama Max.', options: ['Nuestra', 'Nuestro', 'Nuestros'], answer: 1, why: '«Perro»: masculino singular, nuestro.' },
            { context: 'Ana tiene dos gatos.', prompt: '___ gatos se llaman Tito y Lola.', options: ['Su', 'Sus', 'Mis'], answer: 1, why: 'De Ana, varios gatos: sus.' },
            { context: 'En el médico, la recepcionista habla con usted.', prompt: '¿Cuál es ___ nombre, por favor?', options: ['tu', 'su', 'mi'], answer: 1, why: 'Con usted: su.' },
            { context: 'Tus compañeros y tú tienen clase los lunes.', prompt: '___ clases son por la mañana.', options: ['Nuestros', 'Nuestras', 'Nuestra'], answer: 1, why: '«Clases»: femenino plural, nuestras.' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '«Mis llaves.» ¿Qué significa la **s**?', options: ['Hay varios dueños.', 'Hay varias llaves.'], answer: 1, why: 'La s indica varias cosas, no varios dueños.' },
            { prompt: '«Elena habla con Ana de su trabajo.» ¿De quién es el trabajo?', options: ['De Elena.', 'De Ana.', 'No está claro.'], answer: 2, why: '«Su» puede ser de Elena o de Ana.' },
            { prompt: '¿Qué frase dice que la sala es **de los dos**?', options: ['Es mi sala.', 'Es nuestra sala.', 'Es tu sala.'], answer: 1, why: 'Nuestra: de nosotros.' },
            { prompt: '«¿Es su maleta, señor?» ¿Con quién habla?', options: ['Con un amigo, de tú.', 'Con un señor, de usted.'], answer: 1, why: 'Su = de usted.' },
            { prompt: '¿Qué frase es más clara?', options: ['Luis busca su teléfono y el de Ana.', 'Luis busca el teléfono de Ana.'], answer: 1, why: 'Con «de Ana», el dueño está claro.' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'Elena llama a Pablo', lines: [
            { who: 'Elena', text: 'Pablo, ¿dónde estás? ___ reunión empieza ahora.', options: ['Nuestro', 'Nuestra', 'Mis'], answer: 1, why: 'La reunión es de los dos. «Reunión», femenino: nuestra.' },
            { who: 'Pablo', text: 'Estoy en el taxi. Tengo ___ documentos.', options: ['nuestros', 'nuestras', 'nuestro'], answer: 0, why: '«Documentos»: masculino plural.' },
            { who: 'Elena', text: '¿Y tienes ___ computadora?', options: ['tus', 'tu', 'tú'], answer: 1, why: 'De tú, una computadora: tu, sin tilde.' },
            { who: 'Pablo', text: 'Sí. Pero no tengo ___ llaves.', options: ['mi', 'mis', 'su'], answer: 1, why: '«Llaves» es plural: mis.' },
            { who: 'Elena', text: '¿Y la carpeta? ¿Tienes la carpeta ___?', options: ['de Marta', 'su', 'sus'], answer: 0, why: 'Con «de + persona», el dueño está claro.' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Mis padre trabaja en un banco.', ok: false, options: ['Mi padre trabaja en un banco.', 'Mí padre trabaja en un banco.', 'Mis padres trabaja en un banco.'], answer: 0, why: 'Un padre: mi.' },
            { sentence: 'Nuestras fotos están en el teléfono.', ok: true, why: 'Correcta: «fotos», femenino plural.' },
            { sentence: 'Es nuestro mesa.', ok: false, options: ['Es nuestra mesa.', 'Es nuestros mesa.', 'Es nuestras mesa.'], answer: 0, why: '«Mesa» es femenino: nuestra.' },
            { sentence: 'Ellos viven con su abuela.', ok: true, why: 'Correcta: de ellos, una abuela: su.' },
            { sentence: '¿Tienes tú pasaporte?', ok: false, options: ['¿Tienes tu pasaporte?', '¿Tienes tus pasaporte?', '¿Tienes su pasaportes?'], answer: 0, why: 'El posesivo «tu» no lleva tilde.' },
            { sentence: 'Pablo busca su llaves.', ok: false, options: ['Pablo busca sus llaves.', 'Pablo busca mi llaves.', 'Pablo busca nuestro llaves.'], answer: 0, why: 'Varias llaves: sus.' },
          ] },
        ] },
        { title: 'Construye y transforma', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['Mis', 'llaves', 'están', 'en', 'mi', 'bolso'], accept: ['Mis llaves están en mi bolso', 'En mi bolso están mis llaves'], en: 'My keys are in my bag.' },
            { tiles: ['Nuestra', 'sala', 'está', 'cerca', 'de', 'la', 'entrada'], accept: ['Nuestra sala está cerca de la entrada'], en: 'Our room is near the entrance.' },
            { tiles: ['Es', 'la', 'carpeta', 'de', 'Marta'], accept: ['Es la carpeta de Marta', 'La carpeta es de Marta'], en: 'It’s Marta’s folder.' },
            { tiles: ['¿Dónde', 'está', 'tu', 'teléfono?'], accept: ['¿Dónde está tu teléfono?'], en: 'Where is your phone?' },
          ] },
          { kind: 'rewrite', title: 'Escribe con un posesivo', items: [
            { prompt: 'Tengo un libro.', instruction: 'Empieza con «Es…».', accept: ['Es mi libro'] },
            { prompt: 'Nosotros tenemos dos bicicletas.', instruction: 'Empieza con «Son…».', accept: ['Son nuestras bicicletas'] },
            { prompt: 'Tú tienes unas fotos.', instruction: 'Empieza con «Son…».', accept: ['Son tus fotos'] },
            { prompt: 'Ana habla con Luis sobre su casa. (La casa es de Luis.)', instruction: 'Aclara el dueño con «de + persona».', accept: ['Ana habla con Luis sobre la casa de Luis', 'Ana habla con Luis sobre la casa de él'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Las cosas de la sala', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'Las cosas de la sala', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno anota cada objeto y su dueño.', self: 'Escucha una vez para la idea general. Después escucha otra vez y anota cada objeto y su dueño. Puedes bajar la velocidad.' } },
          { kind: 'listen', title: 'Pablo, desde la sala', channel: 'MENSAJE DE VOZ · PARA ELENA', src: '/audio/grammar-classroom/44.mp3',
            before: 'Un compañero está en la sala de reuniones y le deja un mensaje a Elena. ¿Qué cosas crees que hay en la sala?',
            gist: { prompt: '¿Para qué es el mensaje?', options: ['Para decir dónde están las cosas y pedir el teléfono de Elena.', 'Para cancelar la reunión.', 'Para buscar a Marta.'], answer: 0, why: 'Dice dónde están la mochila, las llaves y los documentos, y pregunta: «¿Puedes traer también tu teléfono?».' },
            details: [
              { prompt: '¿Dónde está la mochila de Elena?', options: ['En la sala.', 'En el bolso.', 'En la mesa de Marta.'], answer: 0, why: '«Tu mochila está en nuestra sala».' },
              { prompt: '¿Dónde están las llaves de quien habla?', options: ['En la sala.', 'Dentro de su bolso.', 'En la mesa.'], answer: 1, why: '«Mis llaves están dentro de mi bolso».' },
              { prompt: '¿De quién es la carpeta de la mesa?', options: ['De Elena.', 'De quien habla.', 'De Marta.'], answer: 2, why: '«No es mi carpeta. Es la carpeta de Marta».' },
              { prompt: '¿Dónde están los documentos?', options: ['En la computadora de Elena.', 'En la carpeta.', 'En el teléfono.'], answer: 0, why: '«Nuestros documentos están en tu computadora».' },
              { prompt: '¿Para qué necesita el teléfono de Elena?', options: ['Para llamar a Marta.', 'Para una foto del grupo.', 'Para ver los documentos.'], answer: 1, why: '«Necesitamos una foto del grupo».' },
            ],
            transcript: 'Hola, Elena. [[Tu mochila|teal]] está en [[nuestra sala|violet]]. [[Mis llaves|blue]] están dentro de [[mi bolso|blue]], así que todo bien. Hay una carpeta en la mesa, pero no es [[mi carpeta|blue]]. Es [[la carpeta de Marta|orange]]. [[Nuestros documentos|violet]] están en [[tu computadora|teal]]. ¿Puedes traer también [[tu teléfono|teal]]? Necesitamos una foto del grupo.',
            reply: { teacher: 'El alumno responde en voz alta como si fuera Elena: dice qué lleva a la sala con «mi», «mis» y «nuestro».', self: 'Responde al mensaje como si fueras Elena: ¿qué llevas a la sala? Usa «mi», «mis» y una forma de «nuestro».' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tus cosas y tu gente', coach: 'Habla de lo tuyo y de lo de otros.',
      steps: [
        { title: 'Tus cosas y tu gente', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Pregunta por objetos y personas de otros («¿Y la casa de tu hermana?») para provocar «su» y «de + persona».', self: 'Responde cada pregunta en voz alta. Usa al menos un posesivo en cada respuesta.' } },
          { kind: 'talk', cards: [
            { q: '¿Qué llevas siempre en tu bolso o mochila?', followUps: ['¿Dónde están tus llaves ahora?', '¿Qué es lo más importante?', '¿Llevas algo de otra persona?'], phrases: ['Siempre llevo [[mi|blue]] teléfono.', '[[Mis|blue]] llaves están en…', 'Llevo [[el libro de|orange]] mi hermana.'], hint: 'Una cosa: «mi». Varias cosas: «mis».', example: 'Siempre llevo mi teléfono, mis llaves y mi cartera. Hoy también llevo el libro de mi hermana.', next: 'Ahora, tu casa.' },
            { q: '¿Cómo es tu casa? ¿Con quién vives?', followUps: ['¿Cuál es tu lugar favorito?', '¿Cómo es la cocina de tu casa?', '¿Tienes tu propia habitación?'], phrases: ['[[Mi|blue]] casa es…', '[[Nuestra|violet]] cocina es…', '[[Mi|blue]] habitación tiene…'], hint: 'Si vives con otras personas, usa «nuestro / nuestra» para las cosas de todos.', example: 'Vivo con mi pareja. Nuestra casa es pequeña, pero nuestra cocina es grande. Mi lugar favorito es el balcón.', next: 'Ahora, tu familia.' },
            { q: 'Háblame de tu familia.', followUps: ['¿Dónde viven tus padres?', '¿Cómo se llama tu hermano o tu hermana?', '¿Tus abuelos viven cerca?'], phrases: ['[[Mis|blue]] padres viven en…', '[[Mi|blue]] hermana se llama…', '[[Su|orange]] casa es…'], hint: 'Para hablar de la casa de tus padres: «su casa» o «la casa de mis padres».', example: 'Mis padres viven en Quito. Su casa es grande y tiene un jardín. Mi hermana se llama Paula y su hijo tiene cinco años.', next: 'Ahora, tu trabajo o tu clase.' },
            { q: '¿Qué cosas compartes en tu trabajo o en tu clase?', followUps: ['¿Tienes tu propia mesa?', '¿Qué es de todos?', '¿Qué no compartes?'], phrases: ['[[Nuestra|violet]] sala es…', 'Compartimos [[nuestra|violet]] cocina.', '[[Mi|blue]] mesa está junto a…'], hint: 'Lo de todos: «nuestro, nuestra». Lo tuyo: «mi, mis».', example: 'En mi trabajo compartimos nuestra cocina y nuestra sala de reuniones. Mi mesa está junto a la ventana.', next: 'Ahora, un problema real.' },
            { q: 'En una oficina, hay una mochila en tu silla. No es tuya. ¿Qué dices?', followUps: ['¿Cómo preguntas de quién es?', '¿Y si hay tres personas en la sala?', '¿Y si la dueña es tu jefa?'], phrases: ['¿De quién es esta mochila?', '¿Es [[tu|teal]] mochila?', '¿Es [[la mochila de|orange]] Ana?'], hint: 'Si hay muchas personas, «su» no está claro: usa «de + persona».', example: '¿De quién es esta mochila? ¿Es tu mochila, Leo? ¿No? Entonces es la mochila de Ana.', next: 'Para terminar, algo especial.' },
            { q: '¿Cuál es tu objeto más especial y de quién era antes?', followUps: ['¿Dónde está ahora?', '¿Tu familia tiene un objeto especial?', '¿Quién lo va a tener en el futuro?'], phrases: ['[[Mi|blue]] objeto especial es…', 'Era [[de|orange]] mi abuelo.', 'Es [[nuestro|violet]] recuerdo de familia.'], hint: '«Era de…» significa que antes tenía otro dueño.', example: 'Mi objeto especial es un reloj. Era de mi abuelo. Ahora está en mi habitación. Es nuestro recuerdo de familia.', teacher: '«Era» es una fórmula fija aquí: no hace falta explicar el pasado.' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno le pregunta al profesor por su familia y por las cosas de su casa.', self: 'Esta semana, ordena tu bolso o tu mesa y di en voz alta de quién es cada cosa.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una nota para tu compañera', coach: 'Que el dueño quede claro.',
      steps: [
        { title: 'Una nota para tu compañera', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Usen la revisión automática y después revisen juntos cada posesivo: ¿persona correcta? ¿Concuerda con la cosa?', self: 'Escribe tu nota y toca «Revisar mi texto». Después mira cada posesivo: ¿es de la persona correcta? ¿Una cosa o varias?' } },
          { kind: 'write', title: '¿Dónde están las cosas?', situation: 'Mañana hay una reunión. Tu compañera no encuentra sus cosas. Escríbele una nota para explicar dónde están.', task: [
            'Di dónde están **tus cosas** (mi, mis).',
            'Di dónde están **sus cosas** (tu, tus).',
            'Habla de algo **compartido** (nuestro, nuestra…).',
            'Aclara el dueño de un objeto con **de + persona**.',
          ], starters: ['Hola, …:', 'Tu bolso está en…', 'Mis llaves están…', 'Nuestra sala…', 'Los documentos de…', '¿Puedes traer tu…?'],
            words: ['la mochila', 'las llaves', 'el teléfono', 'la computadora', 'la carpeta', 'los documentos', 'la sala', 'la mesa'],
            model: 'Hola, Elena: [[tu bolso|teal]] está en [[nuestra sala|violet]]. [[Mis llaves|blue]] están en [[mi mochila|blue]]. [[Los documentos de Marta|orange]] están en [[nuestra mesa|violet]]. [[Nuestra computadora|violet]] está junto a la ventana. ¿Puedes traer [[tu carpeta|teal]] para la reunión?',
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
            { tone: 'blue', label: 'MI · TU · SU', formula: 'mi / mis · tu / tus · su / sus', example: 'mi pasaporte · tus llaves', caption: 'Solo cambian por número.', en: 'my · your · his / her / their' },
            { tone: 'violet', label: 'NUESTRO', formula: 'nuestro · nuestra · nuestros · nuestras', example: 'nuestra sala · nuestros documentos', caption: 'Concuerda con la cosa.', en: 'our' },
            { tone: 'orange', label: 'DE + PERSONA', formula: 'el / la + cosa + de + persona', example: 'la carpeta de Marta', caption: 'Cuando «su» no está claro.', en: 'Marta’s folder' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Persona y cosa', text: 'La **persona** decide la palabra (mi, tu, su, nuestro). La **cosa** decide la forma: una o varias; con nuestro, también masculino o femenino.', en: 'The owner picks the word; the thing picks the form.' },
        ] },
        { title: 'Desafío final', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: 'Nosotros compartimos unas fotos. Son ___ fotos.', options: ['nuestros', 'nuestras', 'nuestra'], answer: 1, why: '«Fotos»: femenino plural.' },
            { prompt: 'Yo vivo con ___ abuelos.', options: ['mi', 'mis', 'sus'], answer: 1, why: 'De yo, varios abuelos: mis.' },
            { prompt: '¿Dónde está ___ maleta, señor López?', options: ['tu', 'su', 'mi'], answer: 1, why: 'Con usted: su.' },
            { prompt: 'Hay tres personas. ¿Qué frase es más clara?', options: ['Es su bolso.', 'Es el bolso de Carmen.'], answer: 1, why: '«De Carmen» aclara el dueño.' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Completa para varias fotos compartidas: … fotos». Respuesta: «Nuestras fotos».' },
        ] },
      ],
    },
  ],
};
