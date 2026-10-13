import type { LiveLesson } from '../types';

/**
 * Lesson 45 · A1 · Cantidades.
 * Luis prepares an afternoon snack for six friends; Carmen goes to the market
 * and asks what is missing.
 */
export const lesson: LiveLesson = {
  id: 45,
  level: 'A1',
  title: 'Cantidades',
  subtitle: 'Organizar una compra con números exactos, con poco, mucho y bastante, y con todo + el / la.',
  legend: [
    { tone: 'blue', label: 'Cantidad exacta · dos, una botella de' },
    { tone: 'teal', label: 'Poco, mucho, bastante · cantidad aproximada' },
    { tone: 'orange', label: 'Todo, toda + el / la · el grupo completo' },
  ],
  optionNotes: {
    uno: '«Uno» va solo. Delante de un sustantivo masculino es «un»: un kilo.',
    un: '«Un» va con sustantivos masculinos. Mira el sustantivo.',
    mucho: '«Mucho» va con un sustantivo masculino singular (mucho tiempo) o con un verbo (trabajo mucho).',
    mucha: '«Mucha» va con un sustantivo femenino singular: mucha fruta.',
    muchos: '«Muchos» va con un sustantivo masculino plural: muchos tomates.',
    pocas: '«Pocas» va con un sustantivo femenino plural: pocas servilletas.',
    pocos: '«Pocos» va con un sustantivo masculino plural: pocos platos.',
    poca: '«Poca» va con un sustantivo femenino singular: poca leche.',
    bastantes: '«Bastantes» es plural. Mira el sustantivo: ¿es singular?',
    'todos días': 'Falta el artículo: todos **los** días.',
    'toda semana': 'Falta el artículo: toda **la** semana.',
    muchas: '«Muchas» va con un sustantivo femenino plural: muchas tazas.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Cuánto hay? ¿Cuánto necesitas?', coach: 'Una merienda para seis: ¿qué compramos?',
      steps: [
        { title: 'Cantidades exactas', blocks: [
          { kind: 'lead', text: 'Mañana vienen seis amigos a casa de Luis. Luis necesita **pan**, **agua** y **fruta**. ¿Cuánto compra? Primero, con números exactos.', en: 'Exact quantities: numbers and containers.' },
          { kind: 'guide', text: { teacher: 'Pregunta al alumno qué hay en su cocina ahora. Acepta respuestas simples: «dos manzanas», «un paquete de café».', self: 'Piensa en tu cocina. ¿Qué hay? Di en voz alta dos cosas con un número: «dos manzanas».' } },
          { kind: 'concept', tone: 'blue', label: 'NÚMERO + SUSTANTIVO', question: '¿Cuántos? ¿Cuántas?', en: 'exact quantities', formula: ['número + sustantivo', 'un / una + envase + de + producto'],
            meaning: 'Para una cantidad **exacta**, usa un número. **Uno** cambia a **un** o **una** delante del sustantivo. Para cosas que no contamos (agua, pan, café), usa un **envase** o una **medida**: una botella de, un kilo de.',
            examples: [
              { es: '[[dos cafés|blue]] · [[seis personas|blue]]', en: 'two coffees · six people' },
              { es: '[[un kilo de tomates|blue]]', en: 'a kilo of tomatoes' },
              { es: '[[una botella de agua|blue]]', en: 'a bottle of water' },
              { es: '[[una bolsa de pan|blue]] · [[un paquete de servilletas|blue]]', en: 'a bag of bread · a pack of napkins' },
            ] },
          { kind: 'table', title: 'Envases y medidas', head: ['Envase o medida', 'Ejemplo'], rows: [
            ['un kilo de', '[[un kilo de manzanas|blue]]'],
            ['medio kilo de', '[[medio kilo de queso|blue]]'],
            ['una botella de', '[[dos botellas de agua|blue]]'],
            ['una bolsa de', '[[una bolsa de pan|blue]]'],
            ['un paquete de', '[[un paquete de café|blue]]'],
            ['una docena de (12)', '[[una docena de huevos|blue]]'],
          ], note: 'El envase cambia en plural: «dos **botellas** de agua». El producto no: «de agua».' },
          { kind: 'tip', icon: '1️⃣', title: 'Uno, un, una', text: '«¿Cuántas botellas?» «**Una**.» Pero con el sustantivo: «**una** botella», «**un** kilo». También en números grandes: «veinti**ún** platos», «veinti**una** botellas».', en: 'uno alone · un / una + noun' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Necesito ___ botella de agua.', options: ['un', 'una', 'uno'], answer: 1, why: '«Botella» es femenino: una botella.' },
            { prompt: 'Compro ___ kilo de tomates.', options: ['uno', 'un', 'una'], answer: 1, why: 'Delante de un sustantivo masculino: un kilo.' },
            { prompt: '¿Qué frase es correcta?', options: ['dos botellas de agua', 'dos botella de aguas'], answer: 0, why: 'El envase va en plural; el producto, no.' },
          ] },
        ] },
        { title: 'Poco, mucho, bastante', mascot: '/brand/mascot/studying.webp', coach: '¿Hay poco, mucho o bastante?', blocks: [
          { kind: 'concept', tone: 'teal', label: 'POCO · MUCHO · BASTANTE', question: '¿Cuánto, más o menos?', en: 'a little · a lot · enough', formula: ['poco / poca / pocos / pocas', 'mucho / mucha / muchos / muchas', 'bastante / bastantes'],
            meaning: 'Para una cantidad **aproximada**. **Poco** y **mucho** tienen cuatro formas: concuerdan con el sustantivo. **Bastante** (= suficiente) solo cambia en plural.',
            examples: [
              { es: 'Tengo [[muchas tazas|teal]], pero [[pocos platos|teal]].', en: 'I have lots of cups, but few plates.' },
              { es: 'Hay [[mucha fruta|teal]] en el mercado.', en: 'There is a lot of fruit at the market.' },
              { es: 'Tengo [[poco tiempo|teal]] hoy.', en: 'I have little time today.' },
              { es: 'Hay [[bastante café|teal]] y [[bastantes sillas|teal]].', en: 'There is enough coffee and enough chairs.' },
            ] },
          { kind: 'table', title: 'Las formas', head: ['', 'masc. singular', 'fem. singular', 'masc. plural', 'fem. plural'], rows: [
            ['poco', '[[poco|teal]] pan', '[[poca|teal]] leche', '[[pocos|teal]] platos', '[[pocas|teal]] servilletas'],
            ['mucho', '[[mucho|teal]] café', '[[mucha|teal]] fruta', '[[muchos|teal]] vasos', '[[muchas|teal]] tazas'],
            ['bastante', '[[bastante|teal]] pan', '[[bastante|teal]] agua', '[[bastantes|teal]] vasos', '[[bastantes|teal]] sillas'],
          ] },
          { kind: 'tip', icon: '!', title: 'Con un verbo, no cambia', text: 'Después de un verbo, **mucho** y **poco** no cambian: «Luis trabaja **mucho**». «Ana duerme **poco**». «Ellas comen **mucho**».', en: 'With verbs: always mucho / poco.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Hay ___ tomates en la caja.', options: ['muchos', 'mucho', 'mucha'], answer: 0, why: '«Tomates»: masculino plural, muchos.' },
            { prompt: 'Solo tengo cinco minutos. Tengo ___ tiempo.', options: ['pocas', 'poco', 'pocos'], answer: 1, why: '«Tiempo»: masculino singular, poco.' },
            { prompt: 'Mi hermano estudia ___.', options: ['mucho', 'muchos', 'mucha'], answer: 0, why: 'Después de un verbo: mucho, sin cambios.' },
          ] },
        ] },
        { title: 'Todo + el, la, los, las', mascot: '/autoestudio/mascot/noting.webp', coach: 'Todo nunca va solo delante del sustantivo.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'TODO + ARTÍCULO', question: '¿El grupo completo?', en: 'all · every', formula: ['todo / toda / todos / todas + el / la / los / las + sustantivo'],
            meaning: '**Todo** habla del **grupo completo**. Concuerda con el sustantivo y necesita un **artículo** (el, la, los, las) en medio.',
            examples: [
              { es: '[[todo el pan|orange]]', en: 'all the bread' },
              { es: '[[toda la semana|orange]]', en: 'all week' },
              { es: '[[todos los días|orange]]', en: 'every day' },
              { es: '[[todas las servilletas|orange]]', en: 'all the napkins' },
            ] },
          { kind: 'tip', icon: '🔑', title: 'Todos los días', text: '«**Todos los** días» significa «cada día». No digas «todos días»: el artículo es obligatorio.', en: 'todos los días = every day' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Trabajo ___ días.', options: ['todos', 'todos los', 'todo'], answer: 1, why: 'Todos + los + días.' },
            { prompt: '___ la fruta está en la mesa.', options: ['Todo', 'Toda', 'Todas'], answer: 1, why: '«Fruta»: femenino singular, toda la fruta.' },
            { prompt: '___ las tiendas cierran a las seis.', options: ['Todos', 'Todas', 'Toda'], answer: 1, why: '«Tiendas»: femenino plural, todas las tiendas.' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/seated.webp', coach: '¿Exacto, aproximado o todo?', blocks: [
          { kind: 'decide', title: 'Piensa en una cosa de tu lista de compras', steps: [
            { q: '¿Sabes el número exacto?', yes: 'Usa **un número** o **un envase**: «[[cuatro manzanas|blue]]», «[[una botella de agua|blue]]».', no: 'next' },
            { q: '¿Hablas del grupo completo?', yes: 'Usa **todo + artículo**: «[[todas las servilletas|orange]]».', no: 'Usa **poco, mucho** o **bastante** y mira el sustantivo: «[[pocos platos|teal]]», «[[mucha fruta|teal]]».' },
          ] },
          { kind: 'compare', title: 'Tres formas de hablar de los platos', columns: [
            { tone: 'blue', label: 'EXACTO', sentence: 'Tengo [[cuatro platos|blue]].', idea: 'Sé el número.', en: 'four plates' },
            { tone: 'teal', label: 'APROXIMADO', sentence: 'Tengo [[pocos platos|teal]].', idea: 'No es suficiente.', en: 'few plates' },
            { tone: 'orange', label: 'COMPLETO', sentence: '[[Todos los platos|orange]] están limpios.', idea: 'El grupo completo.', en: 'all the plates' },
          ] },
          { kind: 'tip', icon: '📚', title: 'Para saber más', text: 'Más adelante vas a aprender: «**demasiado** café» (más de lo necesario), «**otro** plato» (uno más) y «**más** platos **que** vasos». No es necesario aprenderlo ahora.', en: 'too much · another · more… than' },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Estos errores son muy comunes.', blocks: [
          { kind: 'guide', text: { teacher: 'Pide al alumno que encuentre el error antes de mostrar la corrección.', self: 'Lee cada frase, busca el error y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'Necesito uno kilo de tomates.', right: 'Necesito un kilo de tomates.', why: 'Delante de un sustantivo masculino: un.' },
            { wrong: 'Hay mucho personas en la tienda.', right: 'Hay muchas personas en la tienda.', why: '«Personas» es femenino plural: muchas.' },
            { wrong: 'Voy al mercado todos días.', right: 'Voy al mercado todos los días.', why: '«Todos» necesita el artículo: todos los días.' },
            { wrong: 'Ana trabaja muchas.', right: 'Ana trabaja mucho.', why: 'Con un verbo, «mucho» no cambia.' },
            { wrong: 'Compro dos botellas de aguas.', right: 'Compro dos botellas de agua.', why: 'El envase va en plural; el producto, no.' },
            { wrong: 'Hay bastantes pan.', right: 'Hay bastante pan.', why: '«Pan» es singular: bastante.' },
          ] },
          { kind: 'teacher', text: 'Pide una lista de cinco productos de la cocina del alumno: dos con número exacto, dos con poco / mucho y una con todo.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Las cantidades en situaciones reales', coach: 'Toca las cantidades marcadas.',
      steps: [
        { title: 'Una merienda para seis', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada cantidad y explica la forma.', self: 'Lee el diálogo en voz alta. Después toca cada cantidad marcada y mira por qué tiene esa forma.' } },
          { kind: 'explore', title: '¿Qué falta?', setting: 'Luis prepara una merienda para mañana. Su amiga Carmen lo ayuda por teléfono.', lines: [
            { who: 'Carmen', text: 'Luis, ¿cuántas personas vienen mañana?', en: 'Luis, how many people are coming tomorrow?' },
            { who: 'Luis', text: '[[Seis personas|blue]], contigo.', en: 'Six people, including you.' },
            { who: 'Carmen', text: '¿Y tienes todo?' },
            { who: 'Luis', text: 'Tengo [[muchas tazas|teal]], pero [[pocos platos|teal]]. Solo tengo [[cuatro|blue]].' },
            { who: 'Carmen', text: '¿Y café?' },
            { who: 'Luis', text: 'Hay [[bastante café|teal]]. No necesito más.' },
            { who: 'Carmen', text: 'Bien. Yo llevo fruta: [[tres manzanas|blue]] y [[cuatro naranjas|blue]].' },
            { who: 'Luis', text: 'Perfecto. Yo compro [[una bolsa de pan|blue]] y [[dos botellas de agua|blue]].' },
            { who: 'Carmen', text: '¿Y las servilletas?' },
            { who: 'Luis', text: '[[Todas las servilletas|orange]] ya están en la mesa.' },
            { who: 'Carmen', text: '¡Muy bien! Tú siempre preparas [[todo|orange]] muy temprano.' },
          ], notes: {
            'Seis personas': 'Un número exacto: **seis**.',
            'muchas tazas': '«Tazas» es femenino plural: **muchas**.',
            'pocos platos': '«Platos» es masculino plural: **pocos**. Para seis personas, no es suficiente.',
            cuatro: 'Número exacto: Luis tiene **cuatro** platos y necesita seis.',
            'bastante café': '«Café» es singular: **bastante**. Significa «suficiente».',
            'tres manzanas': 'Las manzanas se cuentan: número + sustantivo.',
            'cuatro naranjas': 'Número + sustantivo: **cuatro naranjas**.',
            'una bolsa de pan': 'El pan no se cuenta fácilmente: usamos un envase, **una bolsa de**.',
            'dos botellas de agua': 'El agua no se cuenta: **botellas de**. El envase va en plural.',
            'Todas las servilletas': 'El grupo completo: **todas + las + servilletas**.',
            todo: '«Todo» solo, sin sustantivo, significa «todas las cosas».',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Qué necesita Luis?', options: ['Más platos.', 'Más café.', 'Más tazas.'], answer: 0, why: 'Tiene pocos platos: solo cuatro para seis personas.' },
            { prompt: '¿Qué lleva Carmen?', options: ['Pan y agua.', 'Manzanas y naranjas.', 'Servilletas.'], answer: 1, why: '«Tres manzanas y cuatro naranjas».' },
          ] },
        ] },
        { title: 'En el mercado', blocks: [
          { kind: 'explore', title: 'En el puesto de fruta', setting: 'Carmen compra en el mercado. Habla con el vendedor.', lines: [
            { who: 'Vendedor', text: 'Buenos días. ¿Qué necesita?' },
            { who: 'Carmen', text: 'Buenos días. [[Un kilo de manzanas|blue]], por favor.' },
            { who: 'Vendedor', text: 'Hoy tengo [[muchas naranjas|teal]] y muy buenas.' },
            { who: 'Carmen', text: 'Bueno, también [[medio kilo de naranjas|blue]].' },
            { who: 'Vendedor', text: '¿Algo más? ¿Huevos?' },
            { who: 'Carmen', text: 'Sí, [[una docena|blue]]. ¿Tiene fresas?' },
            { who: 'Vendedor', text: 'Hoy hay [[pocas fresas|teal]]. Las vendo [[todas las mañanas|orange]] muy temprano.' },
            { who: 'Carmen', text: 'Entonces no. Es [[bastante|teal]] para hoy. ¿Cuánto es?' },
            { who: 'Vendedor', text: 'Son [[siete dólares|blue]].' },
          ], notes: {
            'Un kilo de manzanas': 'Una medida exacta: **un kilo de**. «Kilo» es masculino: **un**.',
            'muchas naranjas': '«Naranjas»: femenino plural, **muchas**.',
            'medio kilo de naranjas': '**Medio kilo** = 500 gramos. No lleva «un»: «medio kilo».',
            'una docena': '**Una docena** = doce. Se usa mucho con los huevos.',
            'pocas fresas': '«Fresas»: femenino plural, **pocas**.',
            'todas las mañanas': '**Todas + las + mañanas** = cada mañana.',
            bastante: 'Solo, sin sustantivo: «es suficiente».',
            'siete dólares': 'Número exacto: el precio.',
          } },
          { kind: 'teacher', text: 'Pregunta: «¿Qué compras todas las semanas? ¿Cuánto?». El alumno responde con números y envases.' },
        ] },
        { title: '¿Exacto, aproximado o completo?', blocks: [
          { kind: 'classify', title: 'Clasifica las cantidades de las dos conversaciones', categories: [
            { id: 'exacta', label: 'Exacta', tone: 'blue' },
            { id: 'aprox', label: 'Aproximada', tone: 'teal' },
            { id: 'todo', label: 'El grupo completo', tone: 'orange' },
          ], items: [
            { text: 'seis personas', answer: 'exacta', why: 'Un número.' },
            { text: 'pocos platos', answer: 'aprox', why: 'Poco: no sabemos el número exacto.' },
            { text: 'todas las servilletas', answer: 'todo', why: 'Todas las servilletas, sin excepción.' },
            { text: 'un kilo de manzanas', answer: 'exacta', why: 'Una medida exacta.' },
            { text: 'muchas naranjas', answer: 'aprox', why: 'Mucho: una cantidad grande, no exacta.' },
            { text: 'todas las mañanas', answer: 'todo', why: 'Cada mañana: el grupo completo.' },
            { text: 'bastante café', answer: 'aprox', why: 'Suficiente, pero sin número.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Mira el sustantivo antes de elegir.',
      steps: [
        { title: 'Elige según el contexto', blocks: [
          { kind: 'choice', items: [
            { context: 'La caja está llena de tomates.', prompt: 'Hay ___ tomates en la caja.', options: ['muchos', 'mucho', 'mucha'], answer: 0, why: '«Tomates»: masculino plural.' },
            { context: 'Solo hay un poco de leche.', prompt: 'Hay ___ leche en casa.', options: ['poca', 'pocos', 'poco'], answer: 0, why: '«Leche» es femenino singular: poca.' },
            { context: 'Para seis personas hay seis sillas.', prompt: 'Tenemos ___ sillas.', options: ['bastante', 'bastantes', 'mucho'], answer: 1, why: '«Sillas» es plural: bastantes.' },
            { context: 'Trabajas de lunes a domingo.', prompt: 'Trabajo ___ los días.', options: ['todos', 'todas', 'todo'], answer: 0, why: '«Días» es masculino plural: todos los días.' },
            { context: 'Compras pan.', prompt: 'Quiero ___ bolsa de pan.', options: ['un', 'una', 'uno'], answer: 1, why: '«Bolsa» es femenino: una.' },
            { context: 'Tu amigo duerme cuatro horas.', prompt: 'Mi amigo duerme ___.', options: ['poco', 'pocas', 'pocos'], answer: 0, why: 'Después de un verbo: poco, sin cambios.' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '«Hay bastante pan.» ¿Necesitas comprar más?', options: ['Sí.', 'No.'], answer: 1, why: '«Bastante» = suficiente.' },
            { prompt: '«Hay pocos platos.» ¿Qué significa?', options: ['No hay suficientes platos.', 'Hay muchos platos.'], answer: 0, why: '«Pocos»: menos de lo necesario.' },
            { prompt: '¿Qué frase significa «cada día»?', options: ['Trabajo todo el día.', 'Trabajo todos los días.'], answer: 1, why: '«Todos los días» = cada día. «Todo el día» = un día completo, de la mañana a la noche.' },
            { prompt: '¿Qué frase da una cantidad **exacta**?', options: ['Compro muchas manzanas.', 'Compro un kilo de manzanas.'], answer: 1, why: '«Un kilo de»: una medida exacta.' },
            { prompt: '«Como toda la fruta.» ¿Queda fruta?', options: ['Sí, un poco.', 'No, nada.'], answer: 1, why: '«Toda la fruta»: completa.' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'Carmen llama a Luis desde el mercado', lines: [
            { who: 'Carmen', text: 'Luis, hay ___ fruta hoy en el mercado.', options: ['mucho', 'mucha', 'muchas'], answer: 1, why: '«Fruta»: femenino singular.' },
            { who: 'Luis', text: '¡Qué bien! Compra ___ kilo de manzanas.', options: ['un', 'uno', 'una'], answer: 0, why: '«Kilo» es masculino: un.' },
            { who: 'Carmen', text: 'Muy bien. ¿Y agua?' },
            { who: 'Luis', text: 'Sí, dos ___ de agua, por favor.', options: ['botella', 'botellas', 'botellas de'], answer: 1, why: 'Dos: el envase va en plural.' },
            { who: 'Carmen', text: '¿Tenemos ___ servilletas?', options: ['bastante', 'bastantes', 'mucho'], answer: 1, why: '«Servilletas» es plural: bastantes.' },
            { who: 'Luis', text: 'Sí, ___ las servilletas están en la mesa.', options: ['todos', 'todas', 'toda'], answer: 1, why: '«Servilletas»: femenino plural.' },
            { who: 'Carmen', text: 'Perfecto. ¡Hasta mañana!' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Tengo mucho tazas.', ok: false, options: ['Tengo muchas tazas.', 'Tengo mucha tazas.', 'Tengo muchos tazas.'], answer: 0, why: '«Tazas»: femenino plural, muchas.' },
            { sentence: 'Voy al gimnasio todas las semanas.', ok: true, why: 'Correcta: todas + las + semanas.' },
            { sentence: 'Necesito uno paquete de café.', ok: false, options: ['Necesito un paquete de café.', 'Necesito una paquete de café.', 'Necesito unos paquete de café.'], answer: 0, why: 'Delante de un sustantivo masculino: un.' },
            { sentence: 'Mis hijos comen muchos.', ok: false, options: ['Mis hijos comen mucho.', 'Mis hijos comen muchas.', 'Mis hijos comen mucha.'], answer: 0, why: 'Después de un verbo: mucho, sin cambios.' },
            { sentence: 'Hay bastante agua para todos.', ok: true, why: 'Correcta: «agua» es singular.' },
            { sentence: 'Estudio español todos días.', ok: false, options: ['Estudio español todos los días.', 'Estudio español todo días.', 'Estudio español todas los días.'], answer: 0, why: 'Falta el artículo: todos los días.' },
          ] },
        ] },
        { title: 'Construye y transforma', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['Tengo', 'muchas', 'tazas', 'pero', 'pocos', 'platos'], accept: ['Tengo muchas tazas pero pocos platos'], en: 'I have many cups but few plates.' },
            { tiles: ['Compro', 'dos', 'botellas', 'de', 'agua'], accept: ['Compro dos botellas de agua'], en: 'I buy two bottles of water.' },
            { tiles: ['Todas', 'las', 'tiendas', 'cierran', 'a', 'las', 'seis'], accept: ['Todas las tiendas cierran a las seis', 'A las seis cierran todas las tiendas'], en: 'All the shops close at six.' },
            { tiles: ['Hay', 'bastante', 'café', 'en', 'la', 'cocina'], accept: ['Hay bastante café en la cocina', 'En la cocina hay bastante café'], en: 'There is enough coffee in the kitchen.' },
          ] },
          { kind: 'rewrite', title: 'Cambia la cantidad', items: [
            { prompt: 'Hay mucho pan.', instruction: 'Cambia «pan» por «galletas».', accept: ['Hay muchas galletas'] },
            { prompt: 'Tengo poca agua.', instruction: 'Cambia «agua» por «vasos».', accept: ['Tengo pocos vasos'] },
            { prompt: 'Como fruta cada día.', instruction: 'Usa «todos los…».', accept: ['Como fruta todos los días', 'Todos los días como fruta'] },
            { prompt: 'Compro una botella de agua.', instruction: 'Compra tres.', accept: ['Compro tres botellas de agua'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Antes de salir del mercado', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'Antes de salir del mercado', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno escribe la lista de la compra con las cantidades.', self: 'Escucha una vez para la idea general. Después escucha otra vez y escribe la lista de la compra con las cantidades. Puedes bajar la velocidad.' } },
          { kind: 'listen', title: 'Carmen, desde el mercado', channel: 'MENSAJE DE VOZ · PARA LUIS', src: '/audio/grammar-classroom/45.mp3',
            before: 'Carmen está en el mercado y le deja un mensaje a Luis. ¿Qué crees que pregunta?',
            gist: { prompt: '¿Por qué Carmen espera una respuesta?', options: ['Para saber si compra platos o servilletas.', 'Para saber a qué hora es la merienda.', 'Para saber cuántas personas vienen.'], answer: 0, why: 'Pregunta por los platos y las servilletas y dice: «espero tu respuesta antes de comprar el resto».' },
            details: [
              { prompt: '¿Cuántas manzanas lleva Carmen?', options: ['Dos.', 'Cuatro.', 'Seis.'], answer: 1, why: '«Llevo solo cuatro manzanas».' },
              { prompt: '¿Cuántas botellas de agua compra?', options: ['Una.', 'Dos.', 'Cuatro.'], answer: 1, why: '«También compro dos botellas de agua».' },
              { prompt: '¿Qué ve Carmen en la foto de Luis?', options: ['Pocas servilletas.', 'Muchos platos.', 'Bastante fruta.'], answer: 0, why: '«En tu foto veo pocas servilletas».' },
              { prompt: '¿Cómo es la fruta del mercado hoy?', options: ['Hay poca.', 'Hay bastante.', 'No hay.'], answer: 1, why: '«Hay bastante fruta».' },
              { prompt: '¿A qué hora cierran las tiendas?', options: ['A las cinco.', 'A las seis.', 'A las siete.'], answer: 1, why: '«Todas las tiendas cierran a las seis».' },
            ],
            transcript: 'Luis, estoy en el mercado. Hay [[bastante fruta|teal]], pero llevo solo [[cuatro manzanas|blue]]. También compro [[dos botellas de agua|blue]]. ¿Tenemos [[suficientes platos|teal]]? En tu foto veo [[pocas servilletas|teal]]. Puedo comprar [[un paquete|blue]]. [[Todas las tiendas|orange]] cierran a las seis, así que espero tu respuesta antes de comprar el resto.',
            reply: { teacher: 'El alumno responde en voz alta como si fuera Luis: dice qué hay en casa y qué necesita Carmen comprar.', self: 'Responde a Carmen como si fueras Luis: ¿tienes suficientes platos? ¿Necesitas servilletas? Usa un número y «poco», «mucho» o «bastante».' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu cocina y tus compras', coach: 'Habla de tu compra real.',
      steps: [
        { title: 'Tu cocina y tus compras', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Cuando el alumno dice «mucho» o «poco», pregunta por el número exacto, y al revés.', self: 'Responde cada pregunta en voz alta. Usa números exactos y también «poco», «mucho» o «bastante».' } },
          { kind: 'talk', cards: [
            { q: '¿Qué hay en tu cocina ahora?', followUps: ['¿Hay mucha fruta?', '¿Qué hay poco?', '¿Cuántos huevos tienes?'], phrases: ['Hay [[mucho|teal]] arroz.', 'Hay [[pocas|teal]] verduras.', 'Tengo [[seis huevos|blue]].'], hint: 'Mira el sustantivo: «mucho arroz», «muchas verduras».', example: 'En mi cocina hay mucho arroz y bastante café, pero hay poca fruta. Tengo seis huevos.', next: 'Ahora, tu compra de la semana.' },
            { q: '¿Qué compras todas las semanas?', followUps: ['¿Cuánto compras?', '¿Dónde compras?', '¿Compras en el mercado o en el supermercado?'], phrases: ['[[Todas las semanas|orange]] compro…', '[[Un kilo de|blue]]…', '[[Dos botellas de|blue]]…'], hint: 'Para cosas que no se cuentan, usa un envase: «una bolsa de», «un paquete de».', example: 'Todas las semanas compro un kilo de tomates, dos botellas de leche y una bolsa de pan.', next: 'Ahora, imagina una fiesta.', teacher: 'Si el alumno no sabe un envase, ofrece «una caja de», «una lata de».' },
            { q: 'Vienen cuatro amigos a tu casa. ¿Qué preparas?', followUps: ['¿Qué tienes ya?', '¿Qué necesitas comprar?', '¿Hay bastantes sillas?'], phrases: ['Necesito [[cuatro|blue]]…', 'Tengo [[bastante|teal]]…', 'No tengo [[muchas|teal]]…'], hint: 'Primero di lo que tienes, después lo que necesitas.', example: 'Tengo bastante café y muchas tazas. Necesito comprar una bolsa de pan y dos botellas de agua. No tengo muchas sillas.', next: 'Ahora, tu tiempo.' },
            { q: '¿Tienes mucho o poco tiempo libre?', followUps: ['¿Qué haces todos los días?', '¿Trabajas mucho?', '¿Duermes bastante?'], phrases: ['Tengo [[poco tiempo|teal]].', 'Trabajo [[mucho|teal]].', '[[Todos los días|orange]]…'], hint: 'Con un verbo: «trabajo mucho», «duermo poco». Con un sustantivo: «poco tiempo».', example: 'Tengo poco tiempo libre. Trabajo mucho y estudio español todos los días. Duermo bastante, siete horas.', next: 'Ahora, tu ciudad.' },
            { q: '¿Cómo es tu barrio? ¿Hay muchas tiendas?', followUps: ['¿Hay bastantes parques?', '¿Qué hay poco?', '¿Las tiendas abren todos los días?'], phrases: ['Hay [[muchas|teal]] tiendas.', 'Hay [[pocos|teal]] parques.', '[[Todas las tiendas|orange]] cierran…'], hint: '«Tiendas» es femenino: muchas, pocas, todas las tiendas.', example: 'En mi barrio hay muchas tiendas y bastantes restaurantes, pero hay pocos parques. Todas las tiendas cierran a las ocho.', next: 'Para terminar, una pregunta divertida.' },
            { q: '¿Qué cosa tienes en cantidad en tu casa? ¿Y qué cosa falta siempre?', followUps: ['¿Por qué tienes tantos?', '¿Qué compras siempre y nunca hay?', '¿Cuántos tienes exactamente?'], phrases: ['Tengo [[muchos|teal]] libros.', 'Siempre hay [[pocas|teal]]…', 'Tengo [[treinta|blue]]…'], hint: 'Puedes exagerar un poco: «Tengo muchísimos libros».', example: 'Tengo muchos libros: más o menos doscientos. Pero en mi casa siempre hay pocas cucharas. ¡No sé dónde están!', teacher: '«Tantos» y «muchísimos» aparecen solo como palabras útiles; no hace falta explicarlas.' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno le pregunta al profesor qué compra todas las semanas y cuánto.', self: 'Antes de tu próxima compra, escribe la lista en español con números y envases.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'La lista para la merienda', coach: 'Lo que tienes y lo que necesitas.',
      steps: [
        { title: 'La lista para la merienda', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Usen la revisión automática y después revisen juntos cada cantidad: ¿la forma concuerda con el sustantivo?', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después mira cada cantidad: ¿concuerda con el sustantivo?' } },
          { kind: 'write', title: 'Organiza la compra', situation: 'El sábado preparas una merienda para seis personas. Escribe un mensaje al grupo para organizar la compra.', task: [
            'Di qué tienes **en cantidad** (mucho, bastante).',
            'Di qué tienes **poco** y qué necesitas.',
            'Usa al menos **dos cantidades exactas** (números o envases).',
            'Usa **todo + el / la / los / las** una vez.',
          ], starters: ['Hola a todos:', 'Tenemos muchas…', 'Hay bastante…', 'Tengo pocos…', 'Necesitamos…', 'Todas las… están…', '¿Quién trae…?'],
            words: ['un kilo de', 'una bolsa de', 'dos botellas de', 'un paquete de', 'tazas', 'platos', 'servilletas', 'pan', 'fruta', 'café'],
            model: 'Hola a todos: tenemos [[muchas tazas|teal]] y [[bastante café|teal]], pero hay [[pocos platos|teal]]. Necesitamos [[seis platos|blue]] y [[dos botellas de agua|blue]]. [[Todas las servilletas|orange]] están en la mesa. Ana trae [[cuatro manzanas|blue]]. Yo compro [[una bolsa de pan|blue]].',
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
            { tone: 'blue', label: 'EXACTO', formula: 'número + sustantivo · envase + de', example: 'dos botellas de agua · un kilo de tomates', caption: 'Uno → un / una delante del sustantivo.', en: 'exact' },
            { tone: 'teal', label: 'POCO · MUCHO · BASTANTE', formula: 'concuerda con el sustantivo', example: 'muchas tazas · pocos platos · bastante café', caption: 'Con un verbo no cambia: trabajo mucho.', en: 'approximate' },
            { tone: 'orange', label: 'TODO + ARTÍCULO', formula: 'todo / toda / todos / todas + el / la / los / las', example: 'todas las servilletas · todos los días', caption: 'El grupo completo.', en: 'all · every' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Mira el sustantivo', text: 'Casi todas las palabras de cantidad **concuerdan** con el sustantivo. Y «todo» siempre necesita **el, la, los** o **las**.', en: 'Quantity words agree with the noun.' },
        ] },
        { title: 'Desafío final', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: 'Hay ___ platos para seis personas. Necesito más.', options: ['pocas', 'pocos', 'poco'], answer: 1, why: '«Platos»: masculino plural.' },
            { prompt: 'Compro ___ kilo de naranjas.', options: ['uno', 'un', 'una'], answer: 1, why: '«Kilo» es masculino: un.' },
            { prompt: 'Voy al mercado ___ los sábados.', options: ['todo', 'todos', 'todas'], answer: 1, why: '«Sábados»: masculino plural.' },
            { prompt: 'Hay ___ agua para todos. No compres más.', options: ['bastante', 'bastantes', 'pocos'], answer: 0, why: '«Agua» es singular: bastante.' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Di que hay pocas unidades de “plato”». Respuesta: «Hay pocos platos».' },
        ] },
      ],
    },
  ],
};
