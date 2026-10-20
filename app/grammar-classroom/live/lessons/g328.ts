import type { LiveLesson } from '../types';

/**
 * Lesson 328 · A1 · Contracciones al y del (course unit G028).
 * One scene runs through the class: Ingrid Larsen, a Danish tourist on holiday
 * in Valparaíso, Chile, plans three trips across the city with Carolina, the
 * receptionist of her (fictional) hotel: del hotel al puerto, del puerto al
 * mercado and del mercado al cerro Alegre (by the old funicular, «el ascensor»).
 * Felipe is the walking-tour guide. Content: a + el = al, de + el = del; no
 * contraction with la / los / las, with other prepositions (en el, con el) or
 * without an article (a casa); «a él» / «de él» (pronoun with an accent) never
 * contract. Receptive only: «a él» / «de él» (pronouns after a preposition come
 * in class 033) and proper names with «El» (a El Salvador).
 * Carolina and Ingrid use tú; the listening clip is Carolina's voice message.
 */
export const lesson: LiveLesson = {
  id: 328,
  level: 'A1',
  title: 'Contracciones al y del',
  subtitle: 'Explicar trayectos por una ciudad con «del … al …» y saber cuándo a y de no se unen con el artículo.',
  legend: [
    { tone: 'blue', label: 'AL · a + el · adónde (to the)' },
    { tone: 'teal', label: 'DEL · de + el · de dónde, de quién (from / of the)' },
    { tone: 'orange', label: 'Sin contracción · a la, de los, en el… (no contraction)' },
    { tone: 'violet', label: 'ÉL con tilde · el pronombre (he / him)' },
  ],
  optionNotes: {
    'a el': '«A el» no se escribe en español: a + el se unen siempre → **al**. Solo «a él» (con tilde, el pronombre: him) queda separado.',
    'de el': '«De el» no se escribe en español: de + el se unen siempre → **del**. Solo «de él» (con tilde, el pronombre: him / his) queda separado.',
    al: '«Al» = a + **el**. Solo funciona delante de una palabra masculina singular con «el». Con la, los, las o sin artículo, no hay «al».',
    del: '«Del» = de + **el**. Solo funciona delante de una palabra masculina singular con «el». Con la, los, las o sin artículo, no hay «del».',
    'a la': '«A la» va con una palabra femenina singular (la plaza). Si la palabra lleva «el», a + el = al.',
    'de la': '«De la» va con una palabra femenina singular (la estación). Si la palabra lleva «el», de + el = del.',
    'a los': '«A los» va con una palabra masculina plural (los miradores). Con una sola cosa con «el»: al.',
    'de los': '«De los» va con una palabra masculina plural (los cerros). Con una sola cosa con «el»: del.',
    'en el': '«En el» = in / at the, solo con una palabra masculina con «el» (en el hotel); «en» nunca se une. Después de «cerca» va «de», y para un destino (ir, caminar, subir) va «a» → al.',
    'De el': '«De el» no se escribe en español: de + el se unen siempre → **Del**.',
    'De la': '«De la» va con una palabra femenina singular (la estación). Si la palabra lleva «el», de + el = del.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Del hotel al puerto', coach: 'Dos palabras pequeñas, muchos trayectos. Two small words, many trips.',
      steps: [
        { title: 'Tres trayectos · Three trips', blocks: [
          { kind: 'lead', text: 'Ingrid es de Dinamarca y está de vacaciones en Valparaíso, Chile. Mañana hace tres trayectos: **del** hotel **al** puerto, **del** puerto **al** mercado y **del** mercado **al** cerro Alegre. Para decir adónde va y de dónde sale, necesita dos palabras pequeñas: **al** y **del**.', en: 'Ingrid is from Denmark and is on holiday in Valparaíso, Chile. Tomorrow she makes three trips: from the hotel to the port, from the port to the market and from the market to Cerro Alegre (a hill). To say where she is going and where she leaves from, she needs two small words: al and del.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases en voz alta y tu alumno las repite. Después, tu alumno dice qué palabras pequeñas ve antes de «puerto» y «hotel».', self: 'Lee las tres frases en voz alta. Mira las palabras marcadas: ¿qué tienen en común? (Read aloud and look at the marked words.)' } },
          { kind: 'compare', title: 'Tu objetivo de hoy · Your goal today', columns: [
            { tone: 'blue', label: 'AL · to the', sentence: 'Voy [[al|blue]] puerto.', idea: 'Adónde vas: a + el puerto.', en: 'I am going to the port.' },
            { tone: 'teal', label: 'DEL · from the', sentence: 'Salgo [[del|teal]] hotel.', idea: 'De dónde sales: de + el hotel.', en: 'I leave the hotel. (I go out from the hotel.)' },
            { tone: 'orange', label: 'A LA · no change', sentence: 'Camino [[a la|orange]] plaza.', idea: 'Con «la», nada cambia.', en: 'I walk to the square.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Voy al puerto»: ¿qué significa «al»?', options: ['from the', 'in the', 'to the'], answer: 2, why: '«Al» = a + el: to the. Dice adónde vas.', en: '“Voy al puerto”: what does “al” mean?' },
            { prompt: '«Salgo del hotel»: ¿qué significa «del»?', options: ['from the', 'to the', 'with the'], answer: 0, why: '«Del» = de + el: from the. Dice de dónde sales.', en: '“Salgo del hotel”: what does “del” mean?' },
            { prompt: '«Camino a la plaza»: ¿por qué no dice «al plaza»?', options: ['Porque «plaza» va con «la», no con «el».', 'Porque «plaza» es un verbo.', 'Porque «al» es solo para personas.'], answer: 0, why: 'La plaza: con «la» no hay contracción → a la plaza.', en: '“Camino a la plaza”: why not “al plaza”?' },
          ] },
        ] },
        { title: 'a + el = al · de + el = del', mascot: '/brand/mascot/studying.webp', coach: 'Dos palabras se unen en una. Two words become one.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'AL', question: '¿Adónde? ¿A quién?', en: 'to the', formula: ['a + el = al', 'ir · caminar · llegar · subir + al + lugar'],
            meaning: 'Cuando la preposición **a** va delante del artículo **el**, las dos palabras se unen y se escribe **al**. Es obligatorio: en español no escribimos «a el».',
            examples: [
              { es: 'Ingrid va [[al|blue]] puerto a pie.', en: 'Ingrid goes to the port on foot.' },
              { es: 'Llego [[al|blue]] mercado a las once.', en: 'I get to the market at eleven.' },
              { es: 'Subimos [[al|blue]] cerro en el ascensor.', en: 'We go up to the hill in the funicular.' },
              { es: 'Ingrid saluda [[al|blue]] guía.', en: 'Ingrid says hello to the guide.' },
            ],
            note: 'También con personas: saludo **al** guía, pregunto **al** recepcionista (a + el guía).' },
          { kind: 'concept', tone: 'teal', label: 'DEL', question: '¿De dónde? ¿De quién?', en: 'from the · of the', formula: ['de + el = del', 'salir · venir · volver + del + lugar', 'nombre + del + nombre (posesión)'],
            meaning: 'Cuando la preposición **de** va delante del artículo **el**, se escribe **del**. Sirve para el origen de un movimiento (from) y para decir de quién o de qué es algo (of).',
            examples: [
              { es: 'Salgo [[del|teal]] hotel a las nueve.', en: 'I leave the hotel at nine.' },
              { es: 'Vuelvo [[del|teal]] mercado con fruta.', en: 'I come back from the market with fruit.' },
              { es: 'Es el mapa [[del|teal]] guía.', en: 'It is the guide’s map.' },
              { es: 'El ascensor está cerca [[del|teal]] mercado.', en: 'The funicular is near the market.' },
            ],
            note: '«Cerca de» (near) y «lejos de» (far from) también llevan «de»: cerca **del** puerto, lejos **del** centro.' },
          { kind: 'table', title: 'a / de + artículo · a / de + article', head: ['', '+ el', '+ la', '+ los', '+ las'], rows: [
            ['**a**', '[[al|blue]] puerto', '[[a la|orange]] plaza', '[[a los|orange]] miradores', '[[a las|orange]] tiendas'],
            ['**de**', '[[del|teal]] hotel', '[[de la|orange]] estación', '[[de los|orange]] cerros', '[[de las|orange]] playas'],
          ], note: 'Solo **dos** contracciones en todo el español: **al** y **del**. Todas las demás combinaciones quedan separadas.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Voy ___ centro.', options: ['a el', 'a la', 'al'], answer: 2, why: 'El centro → a + el = al centro.', en: 'I am going to the centre.' },
            { prompt: 'Salgo ___ museo a las dos.', options: ['de el', 'de la', 'del'], answer: 2, why: 'El museo → de + el = del museo.', en: 'I leave the museum at two.' },
            { prompt: 'Vengo ___ estación.', options: ['de el', 'de la', 'del'], answer: 1, why: 'La estación es femenina → de la, sin contracción.', en: 'I am coming from the station.' },
          ] },
        ] },
        { title: 'Solo con «el» · Only with «el»', mascot: '/brand/mascot/standing.webp', coach: '¿Hay «el» justo después? Is «el» right after it?', blocks: [
          { kind: 'lead', text: 'La contracción solo pasa con **a** o **de** + **el**. Con otras preposiciones (en, con, por), con la, los, las o sin artículo, todo queda igual.', en: 'Contraction only happens with “a” or “de” + “el”. With other prepositions (en, con, por), with la, los, las, or with no article, everything stays the same.' },
          { kind: 'decide', title: '¿Al / del o separado? · Contract or not?', steps: [
            { q: '¿Después de «a» o «de» viene el artículo **el**, sin tilde? (Is the next word the article el?)', yes: 'Une las dos palabras: **a + el = al**, **de + el = del**. «Voy al puerto», «Salgo del hotel».', no: 'next' },
            { q: '¿Viene **la**, **los** o **las**? (la, los or las?)', yes: 'No hay contracción: «a la plaza», «de los miradores», «a las tiendas».', no: 'next' },
            { q: '¿Viene **él** con tilde, el pronombre? (he / him)', yes: 'Tampoco hay contracción: «a él», «de él».', no: 'Sin artículo no hay contracción: «Voy a casa», «Soy de Dinamarca».' },
          ] },
          { kind: 'compare', title: 'Otras preposiciones · Other prepositions', columns: [
            { tone: 'blue', label: 'A + EL', sentence: 'Voy [[al|blue]] mercado.', idea: 'Se une: al.', en: 'I am going to the market.' },
            { tone: 'orange', label: 'EN + EL', sentence: 'Estoy [[en el|orange]] mercado.', idea: 'No se une: en el.', en: 'I am at the market.' },
            { tone: 'orange', label: 'CON + EL', sentence: 'Hablo [[con el|orange]] guía.', idea: 'No se une: con el.', en: 'I talk with the guide.' },
          ] },
          { kind: 'tip', icon: '💡', title: 'A casa · Home', text: '«Casa» muchas veces va sin artículo: «Vuelvo **a casa**», «Salgo **de casa**». Sin «el», no hay contracción.', en: '“Casa” often goes without an article: “Vuelvo a casa” (I go back home), “Salgo de casa” (I leave home). No “el”, so no contraction.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Mañana voy ___ miradores del cerro.', options: ['al', 'a el', 'a los'], answer: 2, why: 'Los miradores: plural → a los, sin contracción.', en: 'Tomorrow I am going to the viewpoints on the hill.' },
            { prompt: 'Ingrid está ___ hotel ahora.', options: ['al', 'del', 'en el'], answer: 2, why: 'Estar + lugar: en el hotel. «En» nunca se une con «el».', en: 'Ingrid is at the hotel now.' },
            { prompt: 'Por la noche, vuelvo ___.', options: ['al casa', 'a el casa', 'a casa'], answer: 2, why: 'Volver a casa: sin artículo, sin contracción.', en: 'At night I go back home.' },
            { prompt: 'El autobús sale ___ plaza Sotomayor.', options: ['de el', 'de la', 'del'], answer: 1, why: 'La plaza: femenina → de la.', en: 'The bus leaves from Plaza Sotomayor.' },
          ] },
        ] },
        { title: 'el y él · the and him', mascot: '/brand/mascot/speaking.webp', coach: 'Mira la tilde. Look at the accent.', blocks: [
          { kind: 'lead', text: '**el** (sin tilde) es el artículo: el guía, el puerto. **él** (con tilde) es el pronombre: he / him. Con el artículo hay contracción; con el pronombre, **nunca**.', en: '“el” without an accent is the article (the). “él” with an accent is the pronoun (he / him). The article contracts; the pronoun never does.' },
          { kind: 'compare', title: 'Artículo o pronombre · Article or pronoun', columns: [
            { tone: 'blue', label: 'AL · article', sentence: 'Pregunto [[al|blue]] guía.', idea: 'a + el guía: se une.', en: 'I ask the guide.' },
            { tone: 'violet', label: 'A ÉL · pronoun', sentence: '—¿A quién preguntas? —[[A él|violet]].', idea: 'a + él (him): no se une.', en: '“Who are you asking?” “Him.”' },
            { tone: 'teal', label: 'DEL · article', sentence: 'Es el mapa [[del|teal]] guía.', idea: 'de + el guía: se une.', en: 'It is the guide’s map.' },
            { tone: 'violet', label: 'DE ÉL · pronoun', sentence: 'El mapa es [[de él|violet]].', idea: 'de + él (his): no se une.', en: 'The map is his.' },
          ] },
          { kind: 'tip', icon: '🌎', title: 'Una excepción: El Salvador', text: 'Cuando **El** es parte de un nombre propio, en la escritura no se une: «Viajo **a El Salvador**». Es una excepción; hoy solo la reconoces.', en: 'When “El” is part of a proper name, it is not joined in writing: “Viajo a El Salvador” (I travel to El Salvador). It is an exception; today you only need to recognise it.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '—¿De quién es la gorra? —Es ___, de Felipe.', options: ['del', 'de el', 'de él'], answer: 2, why: 'Felipe = él (him, his): de él, con tilde y separado.', en: '“Whose cap is it?” “It is his, Felipe’s.”' },
            { prompt: 'Ingrid saluda ___ recepcionista.', options: ['al', 'a él', 'a el'], answer: 0, why: 'El recepcionista: artículo → a + el = al.', en: 'Ingrid says hello to the receptionist.' },
            { prompt: '¿«Del» puede ser «de + él»?', options: ['Sí, siempre.', 'Sí, con personas.', 'No: «del» es solo de + el (artículo).'], answer: 2, why: 'El pronombre «él» nunca se une: de él.', en: 'Can “del” be “de + él”?' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Hay «el» sin tilde? Is there an «el»?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y preguntas: «¿Hay el, la, los o las?». Tu alumno responde y después aparece la corrección.', self: 'Lee cada frase, busca el error y toca para ver la corrección. Pregúntate: ¿qué artículo viene después?' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Voy a el puerto.', right: 'Voy al puerto.', why: 'a + el se une siempre: al. («A el» no se escribe.)' },
            { wrong: 'Salgo de el hotel a las nueve.', right: 'Salgo del hotel a las nueve.', why: 'de + el se une siempre: del.' },
            { wrong: 'Camino al plaza Sotomayor.', right: 'Camino a la plaza Sotomayor.', why: 'Plaza es femenina (la plaza): a la, sin contracción.' },
            { wrong: 'Vuelvo del miradores.', right: 'Vuelvo de los miradores.', why: 'Miradores es plural (los miradores): de los. «Del» es solo singular.' },
            { wrong: 'Voy al casa.', right: 'Voy a casa.', why: '«Casa» aquí va sin artículo: no hay «el», no hay «al».' },
            { wrong: 'Estoy al mercado.', right: 'Estoy en el mercado.', why: '«Al» es movimiento (to). Dónde estás: estar en el. Y «en el» nunca se une.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Cuál es correcta? · Which one is correct?', options: ['Subo a el cerro.', 'Subo al la terraza.', 'Subo al cerro.'], answer: 2, why: 'El cerro → al cerro.', en: 'Which one is correct?' },
            { prompt: '¿Cuál es correcta? · Which one is correct?', options: ['Vengo de las tiendas.', 'Vengo del tiendas.', 'Vengo de el tiendas.'], answer: 0, why: 'Las tiendas: femenino plural → de las.', en: 'Which one is correct?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice un trayecto real de su ciudad con «del … al …», con dos lugares masculinos (del trabajo al gimnasio, del centro al parque).' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'En la recepción del hotel', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'El plan de Ingrid · Ingrid’s plan', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Carolina, la recepcionista. Después, tu alumno toca cada expresión marcada y dice si hay contracción y por qué.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿hay contracción o no? ¿Por qué?' } },
          { kind: 'explore', title: 'Buenos días, Carolina', setting: 'Por la mañana, en la recepción de un hotel pequeño de Valparaíso. Ingrid pregunta a Carolina cómo ir a tres lugares de la ciudad. (In the morning at a small hotel in Valparaíso. Ingrid asks Carolina how to get to three places in the city.)', lines: [
            { who: 'Ingrid', text: 'Buenos días, Carolina. Hoy quiero ir [[al puerto|blue]]. ¿Está lejos?', en: 'Good morning, Carolina. Today I want to go to the port. Is it far?' },
            { who: 'Carolina', text: 'No, está cerca. [[Del hotel|teal]] [[al puerto|blue]] son diez minutos a pie.', en: 'No, it is close. From the hotel to the port it is ten minutes on foot.' },
            { who: 'Ingrid', text: '¡Perfecto! Y después, ¿cómo voy [[al mercado|blue]]?', en: 'Perfect! And then, how do I get to the market?' },
            { who: 'Carolina', text: 'Caminas [[a la plaza|orange]] Sotomayor y tomas el autobús. Son cinco minutos.', en: 'You walk to Plaza Sotomayor and take the bus. It is five minutes.' },
            { who: 'Ingrid', text: '¿Y el mercado está cerca [[del ascensor|teal]]?', en: 'And is the market near the funicular?' },
            { who: 'Carolina', text: 'Sí, muy cerca. [[Del mercado|teal]] [[al cerro Alegre|blue]] subes en el ascensor. ¡Es muy bonito!', en: 'Yes, very close. From the market you go up to Cerro Alegre in the funicular. It is very pretty!' },
            { who: 'Ingrid', text: '¿Y para volver [[de los miradores|orange]] por la noche?', en: 'And to come back from the viewpoints at night?' },
            { who: 'Carolina', text: 'Mejor un taxi. Mira, ¿ves [[al señor|blue]] de la gorra? Es Felipe, el guía. El mapa grande es [[de él|violet]].', en: 'Better a taxi. Look, do you see the man in the cap? That is Felipe, the guide. The big map is his.' },
            { who: 'Ingrid', text: '¿El mapa [[del guía|teal]]? ¡Genial! Hablo con él ahora.', en: 'The guide’s map? Great! I will talk to him now.' },
            { who: 'Carolina', text: '¡Buen viaje, Ingrid! Y a las ocho, cena [[en el hotel|orange]].', en: 'Have a good trip, Ingrid! And at eight, dinner at the hotel.' },
          ], notes: {
            'al puerto': 'Ir a + **el** puerto → **al** puerto. El destino del trayecto (to the port).',
            'Del hotel': 'De + **el** hotel → **del** hotel. El punto de salida (from the hotel). La pareja «del … al …» describe un trayecto.',
            'al mercado': 'Ir a + **el** mercado → **al** mercado. Otro destino.',
            'a la plaza': '**La** plaza es femenina: «a la», sin contracción. Solo «el» se une con a.',
            'del ascensor': 'Cerca de + **el** ascensor → cerca **del** ascensor. «Cerca de» lleva de.',
            'Del mercado': 'De + **el** mercado → **del** mercado. Ahora el mercado es el punto de salida.',
            'al cerro Alegre': 'Subir a + **el** cerro → **al** cerro Alegre. «Alegre» es parte del nombre, pero el artículo «el» va antes de «cerro», y se une.',
            'de los miradores': '**Los** miradores: plural. «De los», sin contracción. «Del» es solo singular.',
            'al señor': 'Ver a una persona lleva «a»: a + **el** señor → **al** señor. La contracción también funciona con personas.',
            'de él': '**Él** con tilde es el pronombre (his = de Felipe). El pronombre nunca se une: de él.',
            'del guía': 'El mapa de + **el** guía → **del** guía: de quién es (the guide’s).',
            'en el hotel': '«En» + el: no hay contracción. Solo a y de se unen con el.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Cuántos minutos hay del hotel al puerto?', options: ['Diez, a pie.', 'Cinco, en autobús.', 'Quince, en taxi.'], answer: 0, why: '«Del hotel al puerto son diez minutos a pie».', en: 'How many minutes is it from the hotel to the port?' },
            { prompt: '¿Cómo sube Ingrid del mercado al cerro Alegre?', options: ['En el ascensor.', 'A pie.', 'En taxi.'], answer: 0, why: '«Del mercado al cerro Alegre subes en el ascensor».', en: 'How does Ingrid go up from the market to Cerro Alegre?' },
            { prompt: '¿De quién es el mapa grande?', options: ['De Ingrid.', 'De Felipe, el guía.', 'De Carolina.'], answer: 1, why: '«Es Felipe, el guía. El mapa grande es de él».', en: 'Whose is the big map?' },
          ] },
        ] },
        { title: 'Los trayectos de Ingrid · Ingrid’s trips', mascot: '/autoestudio/mascot/noting.webp', coach: '¿Se une o no? Join or not?', blocks: [
          { kind: 'classify', title: '¿Qué forma? · Which form?', categories: [
            { id: 'al', label: 'AL · a + el', tone: 'blue' },
            { id: 'del', label: 'DEL · de + el', tone: 'teal' },
            { id: 'no', label: 'Sin contracción · a la, de los…', tone: 'orange' },
          ], items: [
            { text: 'Ingrid camina (a + el) puerto.', answer: 'al', why: 'El puerto, destino: al puerto.' },
            { text: 'Sale (de + el) hotel a las nueve.', answer: 'del', why: 'El hotel, salida: del hotel.' },
            { text: 'Toma el autobús en (la) plaza.', answer: 'no', why: '«En la plaza»: en no se une, y «la» tampoco.' },
            { text: 'El ascensor está cerca (de + el) mercado.', answer: 'del', why: 'Cerca de + el mercado: del mercado.' },
            { text: 'Ingrid saluda (a + el) guía.', answer: 'al', why: 'A + el guía (persona): al guía.' },
            { text: 'Vuelve (de + los) miradores.', answer: 'no', why: 'Plural: de los miradores.' },
            { text: 'Sube (a + el) cerro Alegre.', answer: 'al', why: 'El cerro, destino: al cerro.' },
            { text: 'El mapa es (de + él), de Felipe.', answer: 'no', why: 'Él con tilde, pronombre: de él, separado.' },
          ] },
          { kind: 'teacher', text: 'Pregunta: «¿Qué palabras van siempre en pareja para describir un trayecto?». Respuesta esperada: del … al … (del hotel al puerto).' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Hay «el» después? Is «el» next?',
      steps: [
        { title: 'Elige la forma · Choose the form', blocks: [
          { kind: 'choice', items: [
            { context: 'Ingrid escribe su plan. (Ingrid writes her plan.)', prompt: 'A las diez voy ___ museo de bellas artes.', options: ['a el', 'a la', 'al'], answer: 2, why: 'El museo → a + el = al museo.', en: 'At ten I am going to the fine arts museum.' },
            { context: 'Un amigo pregunta de dónde viene. (A friend asks where she is coming from.)', prompt: 'Vengo ___ restaurante del puerto.', options: ['de el', 'de la', 'del'], answer: 2, why: 'El restaurante → de + el = del restaurante.', en: 'I am coming from the restaurant at the port.' },
            { context: 'Ingrid busca la parada. (Ingrid looks for the bus stop.)', prompt: 'La parada está cerca ___ catedral.', options: ['de el', 'de la', 'del'], answer: 1, why: 'La catedral es femenina → de la, sin contracción.', en: 'The bus stop is near the cathedral.' },
            { context: 'Por la tarde, otro paseo. (In the afternoon, another walk.)', prompt: 'Después camino ___ playas del norte.', options: ['a las', 'al', 'a los'], answer: 0, why: 'Las playas: femenino plural → a las.', en: 'Afterwards I walk to the beaches in the north.' },
            { context: 'Ingrid habla de Felipe. (Ingrid talks about Felipe.)', prompt: 'Felipe es muy simpático. Tengo el teléfono ___.', options: ['del', 'de el', 'de él'], answer: 2, why: 'Él con tilde = Felipe (his): de él, sin contracción.', en: 'Felipe is very nice. I have his phone number.' },
          ] },
        ] },
        { title: '¿Se une o no? · Join or not?', blocks: [
          { kind: 'classify', title: 'Completa mentalmente y clasifica · Complete in your head and sort', categories: [
            { id: 'si', label: 'Se une · al / del', tone: 'blue' },
            { id: 'no', label: 'No se une · separado', tone: 'orange' },
          ], items: [
            { text: 'a + el parque', answer: 'si', why: 'a + el = al parque.' },
            { text: 'de + la estación', answer: 'no', why: 'Femenino: de la estación.' },
            { text: 'en + el taxi', answer: 'no', why: '«En» nunca se une: en el taxi.' },
            { text: 'de + el aeropuerto', answer: 'si', why: 'de + el = del aeropuerto.' },
            { text: 'a + él (el pronombre)', answer: 'no', why: 'Él con tilde: a él, separado.' },
            { text: 'de + los cerros', answer: 'no', why: 'Plural: de los cerros.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'El taxi va a el aeropuerto.', ok: false, options: ['El taxi va a la aeropuerto.', 'El taxi va del aeropuerto.', 'El taxi va al aeropuerto.'], answer: 2, why: 'El aeropuerto, destino: a + el = al.' },
            { sentence: 'Salgo de la oficina de turismo a las cuatro.', ok: true, why: 'Correcta: la oficina es femenina → de la, sin contracción.' },
            { sentence: 'Ingrid vuelve del playa con arena en los zapatos.', ok: false, options: ['Ingrid vuelve de la playa con arena en los zapatos.', 'Ingrid vuelve de el playa con arena en los zapatos.', 'Ingrid vuelve al playa con arena en los zapatos.'], answer: 0, why: 'La playa es femenina: de la playa. «Del» solo va con «el».' },
            { sentence: 'Pregunto el precio al conductor.', ok: true, why: 'Correcta: a + el conductor (persona) = al conductor.' },
            { sentence: 'Esta mochila es del, de Felipe.', ok: false, options: ['Esta mochila es de el, de Felipe.', 'Esta mochila es al, de Felipe.', 'Esta mochila es de él, de Felipe.'], answer: 2, why: 'Hablas de una persona (his): de él, con tilde y separado. «Del» necesita un nombre después: del guía.' },
          ] },
        ] },
        { title: 'Completa la conversación · Complete the chat', blocks: [
          { kind: 'chat-fill', title: 'Ingrid y Felipe, en la plaza', lines: [
            { who: 'Ingrid', text: 'Hola, Felipe. Soy Ingrid, ___ hotel Brisa.', options: ['al', 'del', 'de el'], answer: 1, why: 'Ingrid viene de + el hotel: del hotel.' },
            { who: 'Felipe', text: '¡Hola, Ingrid! ¿Adónde quieres ir hoy?' },
            { who: 'Ingrid', text: 'Primero ___ cerro Concepción y después a la biblioteca.', options: ['al', 'a la', 'a el'], answer: 0, why: 'El cerro, destino: al cerro.' },
            { who: 'Felipe', text: 'Muy bien. ___ cerro sale un autobús a la biblioteca.', options: ['De la', 'Del', 'De el'], answer: 1, why: 'Salir de + el cerro: del cerro.' },
            { who: 'Ingrid', text: '¿Y el autobús para ___ entrada de la biblioteca?', options: ['al', 'en la', 'en el'], answer: 1, why: 'La entrada es femenina y «en» no se une: en la entrada.' },
            { who: 'Felipe', text: 'Sí, justo en la puerta. ¡Buen paseo!' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['al', 'Voy', 'mercado', 'pie', 'a'], accept: ['Voy al mercado a pie', 'Voy a pie al mercado'], en: 'I go to the market on foot.' },
            { tiles: ['del', 'Salgo', 'hotel', 'nueve', 'las', 'a'], accept: ['Salgo del hotel a las nueve', 'A las nueve salgo del hotel'], en: 'I leave the hotel at nine.' },
            { tiles: ['del', 'El', 'ascensor', 'está', 'cerca', 'puerto'], accept: ['El ascensor está cerca del puerto'], en: 'The funicular is near the port.' },
            { tiles: ['la', 'Camino', 'a', 'plaza'], accept: ['Camino a la plaza'], en: 'I walk to the square.' },
          ] },
        ] },
        { title: 'Escríbelo en español · Write it in Spanish', blocks: [
          { kind: 'rewrite', title: 'Tus trayectos · Your trips', items: [
            { prompt: 'I am going to the port.', instruction: 'Escribe la frase en español. (port = el puerto)', accept: ['Voy al puerto', 'Yo voy al puerto'] },
            { prompt: 'The bus leaves from the centre.', instruction: 'Escribe la frase en español. (to leave = salir · the centre = el centro)', accept: ['El autobús sale del centro'] },
            { prompt: 'I come back from the market at six.', instruction: 'Escribe la frase en español. (to come back = volver: vuelvo)', accept: ['Vuelvo del mercado a las seis', 'A las seis vuelvo del mercado', 'Yo vuelvo del mercado a las seis'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de Carolina', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Carolina te deja un mensaje · Carolina leaves a message', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿de qué habla Carolina?). Segunda escucha: tu alumno dibuja los trayectos con flechas: del … al …. Después, las preguntas.', self: 'Escucha una vez para la idea general. En la segunda escucha, dibuja los trayectos con flechas: del … al …. (Listen once for the gist, then draw the trips with arrows.)' } },
          { kind: 'listen', title: 'Mensaje de voz de la recepción', channel: 'MENSAJE DE VOZ · CAROLINA, RECEPCIÓN DEL HOTEL', src: '/audio/grammar-live/328.mp3',
            before: 'Carolina, la recepcionista, deja un mensaje de voz para Ingrid. ¿Qué crees que explica? (Carolina, the receptionist, leaves Ingrid a voice message. What do you think she explains?)',
            gist: { prompt: '¿De qué habla Carolina? · What is Carolina talking about?', options: ['Del precio del hotel.', 'De los trayectos de Ingrid para mañana.', 'De la cena de hoy.'], answer: 1, why: '«Mañana tienes tres trayectos».', en: 'What is Carolina talking about?' },
            details: [
              { prompt: '¿Cómo va Ingrid del hotel al puerto?', options: ['A pie, diez minutos.', 'En taxi, quince minutos.', 'En autobús, cinco minutos.'], answer: 0, why: '«Del hotel al puerto: diez minutos a pie».', en: 'How does Ingrid get from the hotel to the port?' },
              { prompt: '¿Dónde toma Ingrid el autobús?', options: ['En el puerto.', 'En el mercado.', 'En la plaza Sotomayor.'], answer: 2, why: '«Tomas el autobús en la plaza Sotomayor».', en: 'Where does Ingrid take the bus?' },
              { prompt: '¿Dónde está el ascensor?', options: ['Cerca del mercado.', 'Cerca del hotel.', 'Lejos del cerro.'], answer: 0, why: '«El ascensor está cerca del mercado».', en: 'Where is the funicular?' },
              { prompt: '¿Cómo vuelve Ingrid del cerro al hotel?', options: ['En el ascensor.', 'En taxi, quince minutos.', 'A pie, diez minutos.'], answer: 1, why: '«Para volver, mejor un taxi: del cerro al hotel son quince minutos».', en: 'How does Ingrid get back from the hill to the hotel?' },
            ],
            transcript: 'Hola, Ingrid. Soy Carolina, de la recepción. Mañana tienes tres trayectos. Primero, [[del hotel|teal]] [[al puerto|blue]]: diez minutos a pie. Después, [[del puerto|teal]] [[al mercado|blue]]: tomas el autobús en [[la plaza|orange]] Sotomayor. Por la tarde, vas [[al cerro|blue]] Alegre en el ascensor. El ascensor está cerca [[del mercado|teal]]. Para volver, mejor un taxi: [[del cerro|teal]] [[al hotel|blue]] son quince minutos. La cena es a las ocho. ¡Buen viaje!',
            reply: { teacher: 'Tú eres Carolina. Tu alumno responde al mensaje como Ingrid: repite un trayecto con «del … al …» y hace una pregunta sobre otro lugar: «¿Y cómo voy del mercado al museo?».', self: 'Responde a Carolina en voz alta: repite un trayecto («Primero voy del hotel al puerto…») y pregunta por otro lugar («¿Y cómo voy del … al …?»). (Answer aloud: repeat one trip and ask about another place.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tus trayectos', coach: 'Del punto A al punto B. From A to B.',
      steps: [
        { title: 'Habla de tus trayectos · Talk about your trips', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces la pregunta y tu alumno responde con frases completas con al / del. Si dice «a el» o «de el», tú repites la frase bien y tu alumno la repite.', self: 'Lee la pregunta, responde en voz alta con al / del y, si quieres, escribe tu respuesta. (Read the question and answer aloud with al / del.)' } },
          { kind: 'talk', cards: [
            { q: '¿Cómo vas de tu casa al trabajo o a la clase? · How do you get from home to work or class?', followUps: ['¿A pie, en autobús o en metro? (On foot, by bus or by metro?)', '¿Cuántos minutos son? (How many minutes?)'], phrases: ['Voy de casa [[al|blue]] trabajo en …', 'Son … minutos.', 'Llego [[al|blue]] trabajo a las …'], hint: '«De casa» va sin artículo. El trabajo → al trabajo.', example: 'Voy de casa al trabajo en metro. Son veinte minutos. Llego al trabajo a las ocho y media.', next: 'Ahora, a qué hora sales.' },
            { q: '¿A qué hora sales del trabajo o de la clase? · What time do you leave work or class?', followUps: ['¿Y adónde vas después? (Where do you go afterwards?)', '¿Vuelves a casa directamente? (Do you go straight home?)'], phrases: ['Salgo [[del|teal]] trabajo a las …', 'Salgo [[de la|orange]] clase a las …', 'Después voy [[al|blue]] gimnasio / [[a la|orange]] tienda.'], hint: 'El trabajo → del trabajo. La clase → de la clase.', example: 'Salgo del trabajo a las cinco. Después voy al gimnasio y vuelvo a casa a las siete.', next: 'Ahora, el fin de semana.' },
            { q: '¿Adónde vas el fin de semana? · Where do you go at the weekend?', followUps: ['¿Al parque, al mercado o a la playa? (Park, market or beach?)', '¿Con quién vas? (Who do you go with?)'], phrases: ['Voy [[al|blue]] parque / [[al|blue]] mercado.', 'Voy [[a la|orange]] playa / [[a los|orange]] museos.', 'Vuelvo [[del|teal]] … por la tarde.'], hint: 'Masculino singular: al. Femenino o plural: a la, a los, a las.', example: 'El sábado voy al mercado con mi pareja. El domingo vamos a la playa y volvemos del centro en autobús.', next: 'Ahora, tu barrio.' },
            { q: '¿Qué hay cerca de tu casa? · What is near your home?', followUps: ['¿Y cerca del trabajo? (And near your work?)', '¿Qué está lejos del centro? (What is far from the centre?)'], phrases: ['Cerca de mi casa hay un parque.', 'El supermercado está cerca [[del|teal]] metro.', 'Mi casa está lejos [[del|teal]] centro.'], hint: '«Cerca de», «lejos de» + el → cerca del, lejos del.', example: 'Cerca de mi casa hay un parque. El supermercado está cerca del metro, pero mi casa está lejos del centro.', next: 'Ahora, un paseo en tu ciudad.' },
            { q: 'Un turista visita tu ciudad. Explica un trayecto: del … al … · A tourist visits your city. Explain one trip.', followUps: ['¿A pie o en transporte? (On foot or by transport?)', '¿Qué hay cerca? (What is nearby?)', '¿Cuántos minutos son? (How many minutes?)'], phrases: ['[[Del|teal]] hotel [[al|blue]] centro son …', 'Caminas [[a la|orange]] plaza y …', 'El museo está cerca [[del|teal]] …'], hint: 'Elige dos lugares con «el»: del centro al parque, del museo al puerto…', example: 'Del hotel al centro son quince minutos a pie. Caminas a la plaza mayor y tomas el autobús al museo. El museo está cerca del parque.', next: 'Para terminar, tú eres el recepcionista.', teacher: 'Si tu alumno elige lugares femeninos, también está bien: aprovecha para el contraste (de la estación a la plaza).' },
            { q: 'Tú eres recepcionista. Ingrid pregunta: «¿Cómo voy del hotel al estadio?» · You are the receptionist. Answer Ingrid.', followUps: ['¿Está lejos? (Is it far?)', '¿Y para volver? (And to come back?)'], phrases: ['[[Del|teal]] hotel [[al|blue]] estadio …', 'Tomas el autobús en [[la|orange]] …', 'Para volver [[del|teal]] estadio, mejor …'], hint: 'Tres frases: el trayecto, el transporte, la vuelta.', example: 'Del hotel al estadio son veinte minutos. Tomas el autobús en la plaza. Para volver del estadio, mejor un taxi.', teacher: 'Haz las repreguntas como Ingrid. Después, cambien los papeles.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno es Ingrid y te pregunta por tres trayectos («¿Cómo voy del … al …?»); tú respondes.', self: 'Ahora tú eres Ingrid: pregunta en voz alta por tres trayectos («¿Cómo voy del … al …?») y responde como Carolina. (Now you are Ingrid: ask about three trips and answer as Carolina.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Tus trayectos por escrito', coach: 'Del … al …, sin «a el». No «a el».',
      steps: [
        { title: 'Un mensaje para una amiga · A message for a friend', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada «a» y cada «de» delante de un artículo. Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Mira cada «a» y cada «de»: ¿viene «el» después? (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Tres trayectos · Three trips', situation: 'Eres Ingrid. Tu amiga Sara viaja a Valparaíso el mes próximo. Escríbele un mensaje con tus tres trayectos de mañana: así ella puede hacer el mismo paseo. (You are Ingrid. Your friend Sara travels to Valparaíso next month. Write her a message with your three trips for tomorrow, so she can do the same walk.)', task: [
            'Saluda a Sara. (Say hello.)',
            'Describe tres trayectos con **del … al …**. (Three trips: from … to …)',
            'Di cómo vas: a pie, en autobús, en el ascensor, en taxi. (How you get there.)',
            'Di qué está cerca de qué: «cerca del …». (What is near what.)',
            'Termina con una pregunta para Sara. (End with a question.)',
          ], starters: ['Hola, Sara:', 'Primero voy del … al …', 'Después camino a la …', 'Por la tarde subo al …', 'El … está cerca del …', 'Vuelvo al hotel en …', '¿Y tú? ¿Cómo vas de tu casa al …?'],
            words: ['al', 'del', 'a la', 'de la', 'el hotel', 'el puerto', 'el mercado', 'el cerro', 'la plaza', 'cerca de', 'a pie', 'en autobús', 'en taxi', 'un abrazo'],
            model: 'Hola, Sara: Valparaíso es precioso. Estos son mis trayectos de mañana. Primero voy [[del|teal]] hotel [[al|blue]] puerto a pie: son diez minutos. Después camino [[a la|orange]] plaza Sotomayor y tomo el autobús [[al|blue]] mercado. Por la tarde subo [[del|teal]] mercado [[al|blue]] cerro Alegre en el ascensor. El ascensor está cerca [[del|teal]] mercado. Por la noche vuelvo [[al|blue]] hotel en taxi. ¿Y tú? ¿Cómo vas de tu casa [[al|blue]] trabajo? Un abrazo, Ingrid.',
            minWords: 40,
            checks: [
              { label: 'Al · a + el (to the)', pattern: '(?<!\\p{L})al(?!\\p{L})', tip: 'Di adónde vas: «voy al puerto», «subo al cerro».' },
              { label: 'Del · de + el (from the)', pattern: '(?<!\\p{L})del(?!\\p{L})', tip: 'Di de dónde sales: «salgo del hotel», «cerca del mercado».' },
              { label: 'Un trayecto completo: del … al … (from … to …)', pattern: '(?<!\\p{L})del\\s+\\p{L}+(?:\\s+\\p{L}+)?\\s+al(?!\\p{L})', tip: 'Escribe un trayecto con las dos palabras: «del hotel al puerto».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})a\\s+el(?!\\p{L})', why: 'a + el se une: «al». (Solo «a él», con tilde, el pronombre, queda separado.)' },
              { pattern: '(?<!\\p{L})de\\s+el(?!\\p{L})', why: 'de + el se une: «del». (Solo «de él», con tilde, el pronombre, queda separado.)' },
              { pattern: '(?<!\\p{L})(?:al|del)\\s+(?:la|las|los)(?!\\p{L})', why: '«Al» y «del» ya tienen el artículo «el». Con la, los, las: «a la», «de los»…' },
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
            { tone: 'blue', label: 'AL', formula: 'a + el = al', example: 'Voy al puerto. Saludo al guía.', caption: 'adónde, a quién', en: 'to the' },
            { tone: 'teal', label: 'DEL', formula: 'de + el = del', example: 'Salgo del hotel. El mapa del guía.', caption: 'de dónde, de quién', en: 'from the · of the' },
            { tone: 'orange', label: 'SIN CONTRACCIÓN', formula: 'a / de + la, los, las · en el · a casa', example: 'Camino a la plaza. Vuelvo de los miradores.', caption: 'todo lo demás queda separado', en: 'no contraction' },
            { tone: 'violet', label: 'ÉL CON TILDE', formula: 'a él · de él', example: 'El mapa es de él.', caption: 'el pronombre no se une', en: 'him / his' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Solo hay **dos** contracciones: **a + el = al** y **de + el = del**. Mira la palabra que viene después: si es **el** sin tilde, se unen; si es la, los, las, él o no hay artículo, quedan separadas.', en: 'There are only two contractions: a + el = al and de + el = del. Look at the next word: if it is “el” without an accent, they join; if it is la, los, las, él or there is no article, they stay separate.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'El autobús va ___ aeropuerto.', options: ['a el', 'a la', 'al'], answer: 2, why: 'El aeropuerto → al.' },
            { prompt: 'Ingrid vuelve ___ playa a las seis.', options: ['de el', 'de la', 'del'], answer: 1, why: 'La playa → de la.' },
            { prompt: 'El café está cerca ___ puerto.', options: ['del', 'de el', 'en el'], answer: 0, why: 'Cerca de + el puerto → del puerto.' },
            { prompt: 'Las llaves son ___, de Felipe.', options: ['del', 'de el', 'de él'], answer: 2, why: 'Él pronombre: de él, separado.' },
            { prompt: 'Ahora Ingrid está ___ mercado.', options: ['al', 'del', 'en el'], answer: 2, why: 'Estar + lugar: en el. No hay movimiento.' },
          ] },
        ] },
        { title: 'Ahora en otra ciudad · Now in another city', mascot: '/brand/mascot/walking.webp', coach: 'Las mismas palabras, otro viaje.', blocks: [
          { kind: 'lead', text: 'Después de Valparaíso, Ingrid llega a Santiago. Escribe sus frases.', en: 'After Valparaíso, Ingrid arrives in Santiago. Write her sentences.' },
          { kind: 'rewrite', title: 'En Santiago · In Santiago', items: [
            { prompt: 'I go from the airport to the centre.', instruction: 'Escribe la frase en español. (airport = el aeropuerto · centre = el centro)', accept: ['Voy del aeropuerto al centro', 'Yo voy del aeropuerto al centro'] },
            { prompt: 'The hotel is near the park.', instruction: 'Escribe la frase en español. (park = el parque)', accept: ['El hotel está cerca del parque'] },
            { prompt: 'I walk to the square.', instruction: 'Escribe la frase en español. (to walk = caminar · square = la plaza)', accept: ['Camino a la plaza', 'Yo camino a la plaza'] },
          ] },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 029 · Adverbios de lugar, tiempo y modo', text: 'Ya puedes explicar un trayecto: del hotel al puerto, cerca del mercado. Ahora, para dar direcciones completas, necesitas palabras como **aquí**, **allí**, **cerca**, **hoy** o **despacio**. En la clase 029 aprendes los adverbios de lugar, tiempo y modo.', en: 'You can now explain a trip: from the hotel to the port, near the market. To give full directions you now need words like aquí (here), allí (there), cerca (near), hoy (today) or despacio (slowly). In class 029 you learn adverbs of place, time and manner.', href: '/la-torre-de-las-coordenadas', label: 'Ir a la clase 029' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Di tu trayecto de casa al trabajo y del trabajo al lugar favorito de tu ciudad». Respuesta esperada: «Voy de casa al trabajo… Del trabajo voy al…». Tarea para la próxima clase: escribir tres trayectos reales de su ciudad con del … al ….' },
        ] },
      ],
    },
  ],
};
