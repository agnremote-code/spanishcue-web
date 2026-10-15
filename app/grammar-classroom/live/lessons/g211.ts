import type { LiveLesson } from '../types';

/**
 * Lesson 211 · A1 · Y, o, pero, ni.
 * Julia and Pablo plan their free time: the same pair runs through every section.
 */
export const lesson: LiveLesson = {
  id: 211,
  level: 'A1',
  title: 'Y, o, pero, ni',
  subtitle: 'Unir dos ideas para sumar, ofrecer opciones, marcar una dificultad o negar dos cosas.',
  legend: [
    { tone: 'blue', label: 'Y · sumar' },
    { tone: 'teal', label: 'O · elegir' },
    { tone: 'orange', label: 'Pero · contraste' },
    { tone: 'violet', label: 'Ni · negar dos cosas' },
  ],
  optionNotes: {
    y: '«Y» suma dos ideas: las dos son verdaderas.',
    Y: '«Y» suma dos ideas: las dos son verdaderas.',
    e: '«E» es «y» delante de una palabra que empieza con el sonido «i»: «padre e hijo».',
    o: '«O» ofrece una elección: una cosa u otra.',
    O: '«O» ofrece una elección: una cosa u otra.',
    pero: '«Pero» marca un contraste: la segunda idea va en otra dirección.',
    Pero: '«Pero» marca un contraste: la segunda idea va en otra dirección.',
    ni: '«Ni» une dos ideas negativas: «No como carne ni pescado».',
    Ni: '«Ni» une dos ideas negativas: «No como carne ni pescado».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Cuatro palabras para unir ideas', coach: 'Palabras pequeñas, ideas grandes.',
      steps: [
        { title: 'Y: sumar ideas', blocks: [
          { kind: 'lead', text: 'Es viernes por la tarde. Julia termina de trabajar a las seis y llama a su amigo Pablo. Quieren comer juntos. Con cuatro palabras pequeñas, **y**, **o**, **pero** y **ni**, Julia y Pablo organizan su plan.', en: 'Four small words to connect ideas: and, or, but, nor.' },
          { kind: 'guide', text: { teacher: 'Lee cada ejemplo en voz alta y pregunta: «¿Son verdaderas las dos ideas?».', self: 'Lee cada ejemplo en voz alta. Piensa: ¿las dos ideas son verdaderas?' } },
          { kind: 'concept', tone: 'blue', label: 'Y', question: '¿Quieres añadir otra idea?', en: 'and', formula: ['idea + y + idea'],
            meaning: '«Y» **suma** dos ideas. Las dos ideas son verdaderas al mismo tiempo.',
            examples: [
              { es: 'Trabajo en casa [[y|blue]] estudio español.', en: 'I work from home and study Spanish.' },
              { es: 'Pablo compra verduras [[y|blue]] Julia prepara la mesa.', en: 'Pablo buys vegetables and Julia sets the table.' },
              { es: 'La clase es práctica [[y|blue]] divertida.', en: 'The class is practical and fun.' },
              { es: 'Tengo un hermano [[y|blue]] una hermana.', en: 'I have a brother and a sister.' },
            ],
            note: 'Con tres o más cosas, «y» va solo antes de la última: «Compro pan, leche [[y|blue]] fruta».' },
          { kind: 'tip', icon: '!', title: 'Y → e', text: 'Delante de una palabra que empieza con el sonido **i** (i-, hi-), «y» cambia a **e**: «padre **e** hijo», «español **e** inglés».', en: 'y becomes e before an «i» sound.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Julia tiene pasta ___ arroz.', options: ['y', 'o', 'pero'], answer: 0, why: 'Julia tiene las dos cosas: sumamos con «y».' },
            { prompt: 'Hablo español ___ inglés.', options: ['y', 'e', 'o'], answer: 1, why: '«Inglés» empieza con el sonido «i»: «y» cambia a «e».' },
          ] },
        ] },
        { title: 'O: elegir', mascot: '/brand/mascot/studying.webp', coach: 'Una cosa u otra: tú decides.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'O', question: '¿Hay que elegir?', en: 'or', formula: ['opción A + o + opción B'],
            meaning: '«O» presenta **dos opciones**. Normalmente elegimos una.',
            examples: [
              { es: '¿Cocinamos en tu casa [[o|teal]] vamos a una cafetería?', en: 'Shall we cook at your place or go to a café?' },
              { es: '¿Quieres café [[o|teal]] té?', en: 'Do you want coffee or tea?' },
              { es: 'Podemos ver una película [[o|teal]] salir a caminar.', en: 'We can watch a film or go for a walk.' },
              { es: 'Llego a las siete [[o|teal]] a las ocho.', en: 'I arrive at seven or eight.' },
            ] },
          { kind: 'tip', icon: '?', title: 'En preguntas', text: '«O» es muy útil para **proponer** y **preguntar**: «¿Vamos al cine **o** al parque?». La otra persona responde con una de las opciones.', en: 'Use «o» to offer choices.' },
          { kind: 'compare', title: '¿Las dos cosas o una?', columns: [
            { tone: 'blue', label: 'Y', sentence: 'Me gusta el cine [[y|blue]] la música.', idea: 'Me gustan las dos cosas.', en: 'both' },
            { tone: 'teal', label: 'O', sentence: '¿Vamos al cine [[o|teal]] a un concierto?', idea: 'Hay que elegir una opción.', en: 'one of the two' },
          ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '¿Pedimos pizza ___ pasta? Decide tú.', options: ['y', 'o', 'pero'], answer: 1, why: 'Hay que elegir entre dos opciones: «o».' },
            { prompt: 'Los sábados limpio la casa ___ hago la compra.', options: ['o', 'y', 'pero'], answer: 1, why: 'Hago las dos cosas: sumamos con «y».' },
          ] },
        ] },
        { title: 'Pero: un contraste', mascot: '/brand/mascot/speaking.webp', coach: 'Algo bueno, pero algo malo.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'PERO', question: '¿La segunda idea va en otra dirección?', en: 'but', formula: ['idea + , pero + idea contraria'],
            meaning: '«Pero» presenta un **contraste**: la segunda idea es una dificultad, una sorpresa o algo diferente de lo que esperamos.',
            examples: [
              { es: 'La cafetería es cómoda, [[pero|orange]] está lejos.', en: 'The café is comfortable, but it is far away.' },
              { es: 'Julia tiene pasta, [[pero|orange]] no tiene verduras.', en: 'Julia has pasta, but she has no vegetables.' },
              { es: 'El apartamento es pequeño, [[pero|orange]] es cómodo.', en: 'The apartment is small, but it is comfortable.' },
              { es: 'El restaurante es caro, [[pero|orange]] la comida es excelente.', en: 'The restaurant is expensive, but the food is excellent.' },
            ],
            note: 'Antes de «pero» escribimos una **coma**.' },
          { kind: 'compare', title: 'Mismo tema, otro mensaje', columns: [
            { tone: 'blue', label: 'Y', sentence: 'El museo es interesante [[y|blue]] es barato.', idea: 'Dos ideas positivas: se suman.', en: 'and' },
            { tone: 'orange', label: 'PERO', sentence: 'El museo es interesante, [[pero|orange]] cierra temprano.', idea: 'Una idea positiva y una dificultad.', en: 'but' },
          ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'El hotel es bonito, ___ es muy caro.', options: ['y', 'o', 'pero'], answer: 2, why: 'Bonito es positivo; muy caro es una dificultad: contraste.' },
            { prompt: 'Quiero salir, ___ estoy muy cansada.', options: ['pero', 'y', 'o'], answer: 0, why: 'Estar cansada va en contra de salir: contraste con «pero».' },
            { prompt: 'Mi barrio es tranquilo ___ tiene muchos parques.', options: ['pero', 'o', 'y'], answer: 2, why: 'Dos ideas positivas que se suman: «y».' },
          ] },
        ] },
        { title: 'Ni: dos cosas que no', mascot: '/autoestudio/mascot/noting.webp', coach: 'Para decir «no» dos veces.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'NI', question: '¿Niegas dos cosas?', en: 'nor / neither… nor', formula: ['no + verbo + cosa A + ni + cosa B', 'no + verbo + ni + verbo'],
            meaning: '«Ni» une **dos ideas negativas**. Primero va «no» y después «ni».',
            examples: [
              { es: 'No como carne [[ni|violet]] pescado.', en: 'I eat neither meat nor fish.' },
              { es: 'No corro [[ni|violet]] nado.', en: 'I neither run nor swim.' },
              { es: 'Julia no tiene tomates [[ni|violet]] cebollas.', en: 'Julia has no tomatoes or onions.' },
            ] },
          { kind: 'tip', icon: '!', title: 'No digas «no… y»', text: 'Para negar las dos cosas, usa **ni**: «No bebo café **ni** té». Con «y», la frase no es clara.', en: 'I drink neither coffee nor tea.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'No tengo coche ___ bicicleta.', options: ['ni', 'o', 'pero'], answer: 0, why: 'No tengo las dos cosas: «no… ni».' },
            { prompt: 'Hoy no trabajo ___ estudio: ¡descanso!', options: ['y', 'ni', 'pero'], answer: 1, why: 'Dos acciones negativas: «no… ni».' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/seated.webp', coach: 'Una pregunta y ya sabes cuál usar.', blocks: [
          { kind: 'table', title: 'Las cuatro palabras', head: ['Palabra', 'Para qué', 'Ejemplo'], rows: [
            ['[[y|blue]] (e)', 'sumar dos ideas', 'Trabajo [[y|blue]] estudio.'],
            ['[[o|teal]]', 'elegir entre opciones', '¿Café [[o|teal]] té?'],
            ['[[pero|orange]]', 'marcar un contraste', 'Es caro, [[pero|orange]] es bueno.'],
            ['[[ni|violet]]', 'negar dos cosas', 'No como carne [[ni|violet]] pescado.'],
          ], note: 'Antes de «pero» va coma. Antes de «y», «o» y «ni», normalmente no.' },
          { kind: 'decide', title: 'Piensa en tus dos ideas y responde', steps: [
            { q: '¿Las dos ideas son negativas (no… no…)?', yes: 'Usa **no… ni**: «No corro [[ni|violet]] nado».', no: 'next' },
            { q: '¿Hay que elegir una opción?', yes: 'Usa **o**: «¿Cocinamos [[o|teal]] salimos?».', no: 'next' },
            { q: '¿La segunda idea es una dificultad o algo diferente?', yes: 'Usa **pero**: «Es cómoda, [[pero|orange]] está lejos».', no: 'Usa **y**: «Es práctica [[y|blue]] divertida».' },
          ] },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Estos errores son muy comunes.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno busca el error antes de que muestres la corrección.', self: 'Lee cada frase, busca el error y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'Me gusta el cine o la música. (me gustan los dos)', right: 'Me gusta el cine y la música.', why: 'Si las dos cosas son verdaderas, sumamos con «y». «O» abre una elección.' },
            { wrong: 'No corro y nado.', right: 'No corro ni nado.', why: 'Para negar las dos acciones, usa «no… ni».' },
            { wrong: 'Es caro y es muy bueno.', right: 'Es caro, pero es muy bueno.', why: 'Hay un contraste (caro / bueno): usa «pero».' },
            { wrong: 'Hablo francés y inglés.', right: 'Hablo francés e inglés.', why: '«Inglés» empieza con el sonido «i»: «y» cambia a «e».' },
            { wrong: 'Compro pan y leche y huevos y fruta.', right: 'Compro pan, leche, huevos y fruta.', why: 'En una lista, «y» va solo antes de la última cosa.' },
          ] },
          { kind: 'teacher', text: 'Pide dos frases sobre el fin de semana del alumno: una con «y» y otra con «pero». Pregunta: «¿Las dos ideas van en la misma dirección?».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Las palabras en situaciones reales', coach: 'Toca las palabras marcadas.',
      steps: [
        { title: 'El viernes por la tarde', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada expresión y explica por qué se usó.', self: 'Lee la conversación. Después toca cada expresión marcada para descubrir por qué se usó.' } },
          { kind: 'explore', title: 'Una llamada a las seis', setting: 'Julia termina de trabajar y llama a Pablo para organizar la cena.', lines: [
            { who: 'Julia', text: '¡Hola, Pablo! Ya termino de trabajar. ¿Comemos juntos?', en: 'Shall we eat together?' },
            { who: 'Pablo', text: '¡Sí! ¿[[Cocinamos en tu casa o vamos a una cafetería|teal]]?' },
            { who: 'Julia', text: 'Mmm… La cafetería nueva [[es cómoda, pero está lejos|orange]].' },
            { who: 'Pablo', text: 'Entonces cocinamos. ¿Qué tienes en casa?' },
            { who: 'Julia', text: '[[Tengo pasta, pero no tengo verduras|orange]].' },
            { who: 'Pablo', text: '¿Y tomates?' },
            { who: 'Julia', text: '[[No tengo tomates ni cebollas|violet]]. ¡Mi refrigerador está vacío!' },
            { who: 'Pablo', text: 'No pasa nada. [[Yo compro verduras y tú preparas la mesa|blue]].' },
            { who: 'Julia', text: '¡Perfecto! ¿Compras también algo de postre?' },
            { who: 'Pablo', text: 'Sí. ¿[[Helado o fruta|teal]]?' },
            { who: 'Julia', text: '[[Helado y fruta|blue]]. ¡Es viernes!' },
          ], notes: {
            'Cocinamos en tu casa o vamos a una cafetería': 'Pablo propone **dos opciones**. Julia tiene que elegir una: por eso usa «o».',
            'es cómoda, pero está lejos': 'Una idea positiva (cómoda) y una **dificultad** (lejos): contraste con «pero».',
            'Tengo pasta, pero no tengo verduras': 'Tiene una cosa, pero le falta otra: la segunda idea va en otra dirección.',
            'No tengo tomates ni cebollas': 'Julia niega **dos cosas**: «no… ni». No tiene tomates y no tiene cebollas.',
            'Yo compro verduras y tú preparas la mesa': 'Pablo **suma** dos acciones: las dos van a pasar.',
            'Helado o fruta': 'Una pregunta con **dos opciones**: Pablo quiere saber cuál prefiere Julia.',
            'Helado y fruta': '¡Julia no elige! Quiere **las dos cosas**: por eso cambia «o» por «y».',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Por qué no van a la cafetería?', options: ['Porque está lejos.', 'Porque es cara.', 'Porque está cerrada.'], answer: 0, why: '«La cafetería nueva es cómoda, pero está lejos».' },
            { prompt: '¿Qué compra Pablo?', options: ['Pasta.', 'Verduras y postre.', 'Solo helado.'], answer: 1, why: '«Yo compro verduras…» y después compra el postre: helado y fruta.' },
            { prompt: 'Al final, ¿qué postre quiere Julia?', options: ['Helado.', 'Fruta.', 'Helado y fruta.'], answer: 2, why: 'Julia responde «Helado y fruta»: quiere las dos cosas.' },
          ] },
        ] },
        { title: '¿Para qué sirve cada palabra?', blocks: [
          { kind: 'classify', title: 'Clasifica las frases de la conversación', categories: [
            { id: 'sumar', label: 'Sumar (y)', tone: 'blue' },
            { id: 'elegir', label: 'Elegir (o)', tone: 'teal' },
            { id: 'contraste', label: 'Contraste (pero)', tone: 'orange' },
            { id: 'negar', label: 'Negar dos cosas (ni)', tone: 'violet' },
          ], items: [
            { text: 'Yo compro verduras y tú preparas la mesa.', answer: 'sumar', why: 'Dos acciones que van a pasar.' },
            { text: '¿Cocinamos en tu casa o vamos a una cafetería?', answer: 'elegir', why: 'Dos opciones: hay que elegir.' },
            { text: 'Es cómoda, pero está lejos.', answer: 'contraste', why: 'Algo bueno y una dificultad.' },
            { text: 'No tengo tomates ni cebollas.', answer: 'negar', why: 'Niega dos cosas.' },
            { text: '¿Helado o fruta?', answer: 'elegir', why: 'Una pregunta con dos opciones.' },
            { text: 'Tengo pasta, pero no tengo verduras.', answer: 'contraste', why: 'Tiene una cosa; le falta otra.' },
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
            { context: 'Quieres contar dos actividades de tu rutina.', prompt: 'Trabajo por la mañana ___ estudio por la tarde.', options: ['y', 'o', 'pero'], answer: 0, why: 'Las dos actividades son parte de tu rutina: se suman.' },
            { context: 'Ofreces dos planes para esta noche.', prompt: 'Podemos ver una película ___ salir a caminar.', options: ['y', 'o', 'ni'], answer: 1, why: 'Son dos planes posibles: la otra persona elige uno.' },
            { context: 'El precio es alto, pero tu opinión es positiva.', prompt: 'El restaurante es caro, ___ la comida es excelente.', options: ['y', 'pero', 'o'], answer: 1, why: 'Caro es negativo; excelente es positivo: contraste.' },
            { context: 'Describes una clase con dos cosas buenas.', prompt: 'La clase es práctica ___ divertida.', options: ['pero', 'y', 'o'], answer: 1, why: 'Dos cualidades positivas que se suman.' },
            { context: 'No te gustan las dos bebidas.', prompt: 'No bebo café ___ té.', options: ['ni', 'y', 'pero'], answer: 0, why: 'Niegas dos cosas: «no… ni».' },
            { context: 'Tu amigo quiere saber tu preferencia.', prompt: '¿Prefieres la playa ___ la montaña?', options: ['y', 'pero', 'o'], answer: 2, why: 'Una pregunta con dos opciones: «o».' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿Qué frase dice que me gustan **las dos** cosas?', options: ['Me gusta el té o el café.', 'Me gusta el té y el café.'], answer: 1, why: '«Y» suma: me gustan las dos.' },
            { prompt: '¿Qué frase es una **propuesta** para elegir?', options: ['¿Vamos al parque o al cine?', 'Vamos al parque y al cine.'], answer: 0, why: '«O» en una pregunta invita a elegir una opción.' },
            { prompt: '«La casa es grande, pero es vieja.» ¿Qué piensa la persona?', options: ['La casa tiene algo bueno y algo malo.', 'La casa es perfecta.', 'La casa no es grande.'], answer: 0, why: '«Pero» presenta una dificultad: grande (bueno) / vieja (malo).' },
            { prompt: '«No tengo hermanos ni hermanas.» ¿Cuántos hermanos tiene?', options: ['Un hermano.', 'Una hermana.', 'Ninguno.'], answer: 2, why: '«No… ni» niega las dos cosas.' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'Un plan para el domingo', lines: [
            { who: 'Ana', text: '¿Qué hacemos el domingo? ¿Vamos al mercado ___ al parque?', options: ['o', 'y', 'ni'], answer: 0, why: 'Ana ofrece dos opciones.' },
            { who: 'Luis', text: 'El parque es bonito, ___ va a llover.', options: ['y', 'pero', 'o'], answer: 1, why: 'Bonito / va a llover: una dificultad.' },
            { who: 'Ana', text: 'Entonces, el mercado. ¿Tienes bolsas?' },
            { who: 'Luis', text: 'No tengo bolsas ___ carrito.', options: ['y', 'o', 'ni'], answer: 2, why: 'Luis no tiene las dos cosas: «no… ni».' },
            { who: 'Ana', text: 'No importa. Yo llevo las bolsas ___ tú llevas el dinero.', options: ['y', 'pero', 'o'], answer: 0, why: 'Dos acciones que se suman.' },
            { who: 'Luis', text: '¡Trato hecho! Compramos fruta, pan ___ queso.', options: ['o', 'y', 'ni'], answer: 1, why: 'Una lista: «y» antes de la última cosa.' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'No corro y nado.', ok: false, options: ['No corro ni nado.', 'No corro o nado.', 'No corro pero nado.'], answer: 0, why: 'Para negar las dos acciones: «no… ni».' },
            { sentence: 'Mi barrio es tranquilo y bonito.', ok: true, why: 'Correcta: dos ideas positivas que se suman.' },
            { sentence: 'Me gusta el cine o la música, las dos cosas.', ok: false, options: ['Me gusta el cine ni la música, las dos cosas.', 'Me gusta el cine y la música, las dos cosas.', 'Me gusta el cine pero la música, las dos cosas.'], answer: 1, why: 'Si son las dos cosas, sumamos con «y».' },
            { sentence: 'La cafetería es cómoda, pero está lejos.', ok: true, why: 'Correcta: algo bueno y una dificultad.' },
            { sentence: 'Hablo alemán y inglés.', ok: false, options: ['Hablo alemán e inglés.', 'Hablo alemán o inglés.', 'Hablo alemán ni inglés.'], answer: 0, why: 'Delante del sonido «i», «y» cambia a «e».' },
            { sentence: 'Es un trabajo bueno y gano muy poco.', ok: false, options: ['Es un trabajo bueno o gano muy poco.', 'Es un trabajo bueno, pero gano muy poco.', 'Es un trabajo bueno ni gano muy poco.'], answer: 1, why: 'Bueno / gano muy poco: hay una dificultad, así que usamos «pero».' },
          ] },
        ] },
        { title: 'Construye frases', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['vamos', 'Cocinamos', 'o', 'a una cafetería'], accept: ['Cocinamos o vamos a una cafetería'], en: 'We cook or we go to a café.' },
            { tiles: ['pero', 'es caro,', 'El hotel', 'es bonito'], accept: ['El hotel es caro, pero es bonito'], en: 'The hotel is expensive, but it is nice.' },
            { tiles: ['ni', 'No', 'como', 'carne', 'pescado'], accept: ['No como carne ni pescado'], en: 'I eat neither meat nor fish.' },
            { tiles: ['y', 'Yo compro el pan', 'tú preparas la mesa'], accept: ['Yo compro el pan y tú preparas la mesa', 'Tú preparas la mesa y yo compro el pan'], en: 'I buy the bread and you set the table.' },
          ] },
          { kind: 'rewrite', title: 'Une las dos frases', items: [
            { prompt: 'Trabajo en casa. Estudio español.', instruction: 'Une las dos ideas con «y».', accept: ['Trabajo en casa y estudio español'] },
            { prompt: 'El museo es interesante. Cierra temprano.', instruction: 'Une las dos ideas con «pero».', accept: ['El museo es interesante, pero cierra temprano', 'El museo es interesante pero cierra temprano'] },
            { prompt: 'No tengo coche. No tengo bicicleta.', instruction: 'Une las dos ideas con «ni».', accept: ['No tengo coche ni bicicleta', 'No tengo coche ni tengo bicicleta'] },
            { prompt: '¿Quieres té? ¿Quieres café?', instruction: 'Haz una sola pregunta con «o».', accept: ['¿Quieres té o café?', 'Quieres té o café', '¿Quieres té o quieres café?'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Una propuesta para el sábado', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'Una propuesta para el sábado', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno anota las opciones (o) y las dificultades (pero) antes de responder.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Puedes bajar la velocidad.' } },
          { kind: 'listen', title: 'Un mensaje para Julia', channel: 'NOTA DE VOZ · PARA JULIA', src: '/audio/grammar-classroom/211.mp3',
            before: 'Una amiga le deja una nota de voz a Julia sobre el sábado. ¿Qué planes crees que propone?',
            gist: { prompt: '¿Para qué es el mensaje?', options: ['Para proponer un plan en el centro el sábado.', 'Para cancelar una cena.', 'Para pedir una cámara.'], answer: 0, why: '«El sábado tengo tiempo y quiero visitar el centro».' },
            details: [
              { prompt: '¿Cuándo pueden ir?', options: ['Solo por la mañana.', 'Por la mañana o por la tarde.', 'Por la noche.'], answer: 1, why: '«Podemos ir por la mañana o por la tarde».' },
              { prompt: '¿Qué dificultad tiene el museo?', options: ['Es caro.', 'Está lejos.', 'Cierra temprano.'], answer: 2, why: '«El museo es interesante, pero cierra temprano».' },
              { prompt: '¿Dónde pueden comer?', options: ['En una cafetería cerca.', 'En casa de Julia.', 'En el museo.'], answer: 0, why: '«También hay una cafetería cerca y podemos comer allí».' },
              { prompt: '¿Qué lleva la persona que habla?', options: ['La comida.', 'La cámara.', 'Un mapa.'], answer: 1, why: '«Yo llevo la cámara».' },
              { prompt: '¿Quién elige el lugar?', options: ['La persona que habla.', 'Julia.', 'Las dos juntas.'], answer: 1, why: '«…y tú eliges el lugar»: «tú» es Julia.' },
            ],
            transcript: 'Hola, Julia. El sábado tengo tiempo [[y|blue]] quiero visitar el centro. Podemos ir por la mañana [[o|teal]] por la tarde. El museo es interesante, [[pero|orange]] cierra temprano. También hay una cafetería cerca [[y|blue]] podemos comer allí. ¿Prefieres el museo [[o|teal]] un paseo? Yo llevo la cámara [[y|blue]] tú eliges el lugar.',
            reply: { teacher: 'El alumno responde en voz alta como si fuera Julia: ¿museo o paseo? ¿Mañana o tarde? Debe usar «o» o «pero» al menos una vez.', self: 'Responde como si fueras Julia: ¿prefieres el museo o un paseo? Usa «y» y «pero» al menos una vez.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tus planes y tus gustos', coach: 'Une tus ideas con y, o, pero.',
      steps: [
        { title: 'Tus planes y tus gustos', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Sigue lo que el alumno quiere contar, repregunta y comparte también tu experiencia.', self: 'Responde cada pregunta en voz alta, con frases completas. Si quieres, escribe tu respuesta.' } },
          { kind: 'talk', cards: [
            { q: '¿Qué haces después del trabajo o de las clases?', followUps: ['¿Y los fines de semana?', '¿Qué haces con tu familia o tus amigos?'], phrases: ['Ceno [[y|blue]] veo una serie.', 'Leo un libro [[o|teal]] camino un poco.', 'Normalmente…'], hint: 'Une dos actividades con «y». Si cambian según el día, usa «o».', example: 'Después del trabajo ceno y veo una serie. A veces leo un libro o camino un poco.', next: 'Ahora hablemos de la comida.', teacher: 'Si la respuesta es corta, pregunta: «¿Y después?».' },
            { q: '¿Prefieres cocinar o salir a comer?', followUps: ['¿Qué cocinas bien?', '¿Hay un restaurante que te gusta mucho?', '¿Es caro?'], phrases: ['Prefiero cocinar, [[pero|orange]]…', 'Salir es divertido, [[pero|orange]] es caro.', 'Cocino pasta [[y|blue]] arroz.'], hint: 'Elige una opción y explica una dificultad con «pero».', example: 'Prefiero cocinar. Salir es divertido, pero es caro. Cocino pasta y arroz muy bien.', next: 'Hablemos de cosas que no haces.' },
            { q: '¿Hay comidas o bebidas que no tomas?', followUps: ['¿Por qué no te gustan?', '¿Y de niño? ¿Comías de todo?'], phrases: ['No como… [[ni|violet]]…', 'No bebo café [[ni|violet]] té.', 'Me gusta…, [[pero|orange]] no…'], hint: 'Para dos cosas que no tomas: «No como… ni…».', example: 'No bebo café ni refrescos. Me gusta el té, pero no tomo mucho.', next: 'Ahora piensa en tu ciudad.' },
            { q: '¿Cómo es tu barrio o tu ciudad?', followUps: ['¿Qué tiene de bueno?', '¿Hay algo que no te gusta?', '¿Hay parques o tiendas cerca?'], phrases: ['Es tranquilo [[y|blue]] bonito.', 'Es grande, [[pero|orange]] es caro.', 'No tiene… [[ni|violet]]…'], hint: 'Di dos cosas buenas con «y» y una dificultad con «pero».', example: 'Mi barrio es tranquilo y bonito, pero está lejos del centro. No tiene cines ni teatros.', next: 'Ahora, ¡vamos a hacer planes!' },
            { q: 'Este sábado tienes tiempo libre. ¿Qué planes propones?', followUps: ['¿Por la mañana o por la tarde?', '¿Qué problema tiene cada plan?', '¿Al final, qué eliges?'], phrases: ['Podemos… [[o|teal]]…', '…es interesante, [[pero|orange]]…', 'Yo llevo… [[y|blue]] tú…'], hint: 'Ofrece dos planes con «o». Después di una dificultad con «pero».', example: 'Podemos ir al museo o caminar por el centro. El museo es interesante, pero cierra temprano. Yo llevo la cámara y tú eliges el lugar.', next: 'Para terminar, una pregunta sobre ti.', teacher: 'Haz de amigo: elige una opción y tu alumno reparte las tareas con «yo… y tú…».' },
            { q: '¿Qué cosas te gustan de aprender español? ¿Qué es difícil?', followUps: ['¿Qué haces para practicar?', '¿Lees o escuchas en español?'], phrases: ['Me gusta… [[y|blue]]…', 'Es divertido, [[pero|orange]] es difícil.', 'Escucho música [[o|teal]] veo videos.'], hint: 'Une lo que te gusta con «y» y lo difícil con «pero».', example: 'Me gusta hablar y escuchar música en español. Es divertido, pero la gramática es difícil.' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno hace dos preguntas con «o» al profesor («¿Prefieres… o…?»).', self: 'Escribe dos preguntas con «¿Prefieres… o…?» y házselas a alguien esta semana.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una invitación para el sábado', coach: 'Escribe a una persona real.',
      steps: [
        { title: 'Una invitación para el sábado', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Usen la revisión automática y después corrijan juntos lo que la revisión no ve.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Corrige lo que te indique y vuelve a revisarlo.' } },
          { kind: 'write', title: 'Invita a un amigo', situation: 'El sábado tienes tiempo libre. Escribe un mensaje a un amigo o una amiga para hacer algo juntos.', task: [
            'Propón **dos planes** con **o**.',
            'Di algo bueno y una dificultad de un plan con **pero**.',
            'Suma dos ideas con **y**.',
            'Termina con una pregunta.',
          ], starters: ['Hola, …', 'El sábado tengo tiempo y…', 'Podemos… o…', '… es…, pero…', '¿Prefieres… o…?'],
            words: ['el museo', 'el parque', 'una cafetería', 'el cine', 'caminar', 'comer', 'cerca', 'lejos', 'caro', 'temprano'],
            model: 'Hola, Marta. El sábado tengo tiempo [[y|blue]] quiero salir contigo. Podemos ir al cine [[o|teal]] caminar por el parque. El cine es divertido, [[pero|orange]] es caro. No tengo coche [[ni|violet]] bicicleta, pero el parque está cerca. ¿Prefieres la mañana [[o|teal]] la tarde?',
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
            { tone: 'blue', label: 'Y', formula: 'idea + y + idea', example: 'Trabajo en casa y estudio español.', caption: 'Suma: las dos son verdaderas.', en: 'and' },
            { tone: 'teal', label: 'O', formula: 'opción A + o + opción B', example: '¿Cocinamos o salimos?', caption: 'Elige una.', en: 'or' },
            { tone: 'orange', label: 'PERO', formula: 'idea + , pero + contraste', example: 'Es cómoda, pero está lejos.', caption: 'Una dificultad o algo diferente.', en: 'but' },
            { tone: 'violet', label: 'NI', formula: 'no + … + ni + …', example: 'No como carne ni pescado.', caption: 'Niega dos cosas.', en: 'neither… nor' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Una pregunta para elegir', text: '¿Las dos ideas van en la **misma dirección**? Usa **y**. ¿Van en **otra dirección**? Usa **pero**. ¿Hay que **elegir**? Usa **o**. ¿Niegas **dos cosas**? Usa **no… ni**.' },
        ] },
        { title: 'Desafío final', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: '¿Quieres agua ___ jugo?', options: ['y', 'o', 'ni'], answer: 1, why: 'Una pregunta para elegir.' },
            { prompt: 'Mi casa es vieja, ___ es muy bonita.', options: ['y', 'o', 'pero'], answer: 2, why: 'Vieja / bonita: contraste.' },
            { prompt: 'No veo la tele ___ escucho la radio.', options: ['ni', 'y', 'o'], answer: 0, why: 'Dos acciones negativas: «no… ni».' },
            { prompt: 'Los domingos descanso ___ veo a mi familia.', options: ['pero', 'ni', 'y'], answer: 2, why: 'Dos actividades que se suman.' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Me gusta el té y el café» y «¿Quieres té o café?»: ¿qué diferencia hay? La primera suma dos gustos; la segunda pide elegir.' },
        ] },
      ],
    },
  ],
};
