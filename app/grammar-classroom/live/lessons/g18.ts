import type { LiveLesson } from '../types';

/**
 * Lesson 18 · B1 · Imperfecto e indefinido (con el perfecto compuesto para el balance de hoy).
 * One story runs through the class: Marta's photography course in another city.
 */
export const lesson: LiveLesson = {
  id: 18,
  level: 'B1',
  title: 'Imperfecto e indefinido',
  subtitle: 'Contar una experiencia pasada: describir la escena, narrar los hechos y hacer un balance de lo que ha cambiado hasta hoy.',
  legend: [
    { tone: 'blue', label: 'Indefinido · un hecho cerrado que hace avanzar la historia' },
    { tone: 'teal', label: 'Imperfecto · la escena, un hábito o una acción en curso' },
    { tone: 'orange', label: 'Perfecto compuesto · un balance que llega hasta hoy' },
  ],
  optionNotes: {
    tuvo: '«Tuvo» presenta un hecho cerrado. Para describir cómo era un lugar se usa el imperfecto.',
    hacía: '«Hacía» describe un hábito o una acción en curso, no un hecho que hace avanzar la historia.',
    'he hecho': 'El perfecto compuesto no combina con un período cerrado como «el sábado pasado» o «en 2019».',
    'ha tenido': 'El perfecto compuesto hace un balance hasta hoy; aquí se describe una escena del pasado.',
    busqué: '«Busqué» presenta la búsqueda como un hecho completo; aquí la acción estaba en curso cuando pasó otra cosa.',
    'he buscado': 'El perfecto compuesto no sirve para una acción que estaba en curso en un momento del pasado.',
    preparaba: 'El imperfecto describe una acción en curso o repetida, no un resultado que llega hasta hoy.',
    'había preparado': 'El pluscuamperfecto necesita otro momento pasado de referencia, y aquí no lo hay.',
    era: '«Era» describe. Aquí la historia necesita un hecho que pasa en un momento concreto.',
    fue: '«Fue» cierra la situación como un hecho. Para describir la escena se usa el imperfecto.',
    llovió: '«Llovió» presenta la lluvia como un hecho completo. Si es el fondo de otra acción, va en imperfecto.',
    llovía: '«Llovía» describe el fondo. Aquí la lluvia es un hecho nuevo que cambia la historia.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Dos tiempos para una historia', coach: 'Una historia tiene escena y tiene hechos.',
      steps: [
        { title: 'Escena y hechos', blocks: [
          { kind: 'lead', text: 'Marta hizo un curso de fotografía en otra ciudad. Para contarlo, necesita dos cosas: **pintar la escena** (cómo era todo) y **contar los hechos** (qué pasó). El español usa un tiempo verbal para cada cosa.' },
          { kind: 'guide', text: { teacher: 'Lean las dos columnas en voz alta. Pregunta: «Si quito la columna de la izquierda, ¿la historia avanza? ¿Y si quito la de la derecha?».', self: 'Lee las dos columnas. Piensa: ¿cuál hace avanzar la historia y cuál solo la describe?' } },
          { kind: 'compare', title: 'El mismo día, dos tipos de información', columns: [
            { tone: 'teal', label: 'LA ESCENA · IMPERFECTO', sentence: 'El centro [[estaba|teal]] cerca del río y las salas [[tenían|teal]] mucha luz.', idea: 'Describe cómo eran las cosas. No dice cuándo empezaron ni cuándo terminaron.' },
            { tone: 'blue', label: 'LOS HECHOS · INDEFINIDO', sentence: 'Un día [[empezó|blue]] a llover y el profesor [[cambió|blue]] la actividad.', idea: 'Cuenta qué pasó. Cada hecho está cerrado y lleva al siguiente.' },
          ] },
          { kind: 'tip', icon: '🎬', title: 'Piensa en una película', text: 'El **imperfecto** es el decorado: el lugar, el tiempo, la gente, lo que pasaba siempre. El **indefinido** es la acción: lo que pasa en una escena concreta y hace avanzar la trama.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '«Las calles **eran** tranquilas.» ¿Qué hace esta frase?', options: ['Describe la escena.', 'Cuenta un hecho nuevo.'], answer: 0, why: '«Eran» describe cómo eran las calles; la historia no avanza.' },
            { prompt: '«El profesor **cambió** la actividad.» ¿Qué hace esta frase?', options: ['Describe la escena.', 'Cuenta un hecho nuevo.'], answer: 1, why: '«Cambió» es un hecho cerrado: algo pasa y la historia avanza.' },
          ] },
        ] },
        { title: 'El indefinido: los hechos', mascot: '/brand/mascot/studying.webp', coach: 'Hechos cerrados, uno detrás de otro.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'INDEFINIDO', question: '¿Qué pasó?', formula: ['indefinido + marco cerrado (ayer, el mes pasado, en 2020, un día…)'],
            meaning: 'Presenta una acción **completa**, con principio y final. Sirve para contar **una secuencia de hechos**: primero esto, después aquello.',
            examples: [
              { es: 'El mes pasado [[fui|blue]] a un curso de fotografía.' },
              { es: 'Un día [[empezó|blue]] a llover y [[entramos|blue]] en una estación antigua.' },
              { es: 'El último día [[presenté|blue]] mis fotos.' },
              { es: '[[Estuve|blue]] tres semanas en esa ciudad.' },
            ],
            note: 'Un período largo también puede ir en indefinido si lo ves cerrado: «[[Estuve|blue]] tres semanas allí» (y ya no estoy).' },
          { kind: 'table', title: 'Formas regulares del indefinido', head: ['', 'trabajar', 'conocer', 'interrumpir'], rows: [
            ['yo', 'trabaj**é**', 'conoc**í**', 'interrump**í**'],
            ['tú', 'trabaj**aste**', 'conoc**iste**', 'interrump**iste**'],
            ['él / ella / usted', 'trabaj**ó**', 'conoc**ió**', 'interrump**ió**'],
            ['nosotros / nosotras', 'trabaj**amos**', 'conoc**imos**', 'interrump**imos**'],
            ['vosotros / vosotras', 'trabaj**asteis**', 'conoc**isteis**', 'interrump**isteis**'],
            ['ellos / ellas / ustedes', 'trabaj**aron**', 'conoc**ieron**', 'interrump**ieron**'],
          ], note: 'Los verbos en -er y en -ir tienen las mismas terminaciones. Cuidado con el acento: «trabajo» (presente) y «trabajó» (indefinido) son dos formas distintas.' },
          { kind: 'table', title: 'Irregulares muy frecuentes', head: ['infinitivo', 'yo', 'él / ella / usted', 'ellos / ellas / ustedes'], rows: [
            ['ser / ir', '**fui**', '**fue**', '**fueron**'],
            ['hacer', '**hice**', '**hizo**', '**hicieron**'],
            ['tener', '**tuve**', '**tuvo**', '**tuvieron**'],
            ['estar', '**estuve**', '**estuvo**', '**estuvieron**'],
            ['poder', '**pude**', '**pudo**', '**pudieron**'],
            ['decir', '**dije**', '**dijo**', '**dijeron**'],
            ['dar', '**di**', '**dio**', '**dieron**'],
          ], note: 'Estos irregulares no llevan tilde: «hice», «tuvo», «dijo». «Ser» e «ir» comparten las formas; el contexto dice cuál es.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'El sábado pasado ___ tres fotos y volví a casa.', options: ['hice', 'hacía', 'he hecho'], answer: 0, why: 'Un hecho en un día cerrado, dentro de una secuencia: indefinido.' },
            { prompt: 'Ayer el profesor nos ___ una idea muy buena.', options: ['daba', 'dio', 'ha dado'], answer: 1, why: '«Ayer» es un marco cerrado y dar una idea es un hecho completo.' },
          ] },
        ] },
        { title: 'El imperfecto: la escena y los hábitos', mascot: '/autoestudio/mascot/noting.webp', coach: 'El imperfecto pinta el fondo.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'IMPERFECTO', question: '¿Cómo era? ¿Qué pasaba normalmente?', formula: ['imperfecto: -aba (verbos en -ar) · -ía (verbos en -er / -ir)'],
            meaning: 'No marca el principio ni el final de la acción. Sirve para **describir** lugares, personas y situaciones, y para contar **costumbres** del pasado: lo que pasaba normalmente.',
            examples: [
              { es: 'Las salas [[tenían|teal]] mucha luz y [[hacía|teal]] calor.' },
              { es: 'La profesora [[era|teal]] muy paciente.' },
              { es: 'Cada mañana [[caminábamos|teal]] hasta el mercado.' },
              { es: 'Durante las clases [[solía|teal]] sentarme junto a la ventana.' },
            ],
            note: 'Palabras que suelen acompañar al hábito: **cada** mañana, **siempre**, **normalmente**, **todos los** días, **a menudo**, **soler** + infinitivo.' },
          { kind: 'table', title: 'Formas del imperfecto', head: ['', 'caminar', 'tener', 'salir'], rows: [
            ['yo', 'camin**aba**', 'ten**ía**', 'sal**ía**'],
            ['tú', 'camin**abas**', 'ten**ías**', 'sal**ías**'],
            ['él / ella / usted', 'camin**aba**', 'ten**ía**', 'sal**ía**'],
            ['nosotros / nosotras', 'camin**ábamos**', 'ten**íamos**', 'sal**íamos**'],
            ['vosotros / vosotras', 'camin**abais**', 'ten**íais**', 'sal**íais**'],
            ['ellos / ellas / ustedes', 'camin**aban**', 'ten**ían**', 'sal**ían**'],
          ], note: 'La forma de «yo» y la de «él / ella / usted» son iguales: el contexto o el sujeto aclaran quién es.' },
          { kind: 'tip', icon: '✨', title: 'Solo tres irregulares', text: '**ser**: era, eras, era, éramos, erais, eran · **ir**: iba, ibas, iba, íbamos, ibais, iban · **ver**: veía, veías, veía, veíamos, veíais, veían. Todos los demás verbos son regulares en imperfecto.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'La sala ___ ventanas grandes; así era el lugar.', options: ['tuvo', 'tenía', 'ha tenido'], answer: 1, why: 'Describe cómo era la sala: imperfecto.' },
            { prompt: 'De niña, ___ al parque todos los domingos con mi abuelo.', options: ['fui', 'iba', 'he ido'], answer: 1, why: '«Todos los domingos» indica un hábito del pasado: imperfecto.' },
          ] },
        ] },
        { title: 'Una acción en curso y un hecho que la interrumpe', mascot: '/brand/mascot/speaking.webp', coach: '¿Qué pasaba cuando pasó algo?', blocks: [
          { kind: 'concept', tone: 'teal', label: 'IMPERFECTO + CUANDO + INDEFINIDO', question: '¿Qué estabas haciendo cuando pasó?', formula: ['imperfecto (acción en curso) + cuando + indefinido (hecho nuevo)'],
            meaning: 'El imperfecto muestra una acción **en desarrollo**, sin final. El indefinido presenta el **hecho** que ocurre en medio de esa acción y la interrumpe o la cambia.',
            examples: [
              { es: '[[Buscaba|teal]] una imagen cuando una compañera me [[mostró|blue]] una ventana.' },
              { es: '[[Caminábamos|teal]] por el mercado cuando [[empezó|blue]] a llover.' },
              { es: 'Mientras el profesor [[hablaba|teal]], [[sonó|blue]] mi teléfono.' },
            ],
            note: 'Con **mientras** solemos usar el imperfecto: «Mientras [[hablaba|teal]]…». Con **cuando** va el hecho nuevo: «… cuando [[sonó|blue]]».' },
          { kind: 'compare', title: 'Un cambio de tiempo, un cambio de historia', columns: [
            { tone: 'teal', label: 'IMPERFECTO', sentence: 'Cuando llegué, el grupo [[cenaba|teal]].', idea: 'El grupo ya estaba cenando: yo llegué en medio de la cena.' },
            { tone: 'blue', label: 'INDEFINIDO', sentence: 'Cuando llegué, el grupo [[cenó|blue]].', idea: 'Primero llegué; después el grupo empezó a cenar. Son dos hechos seguidos.' },
          ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Yo ___ una imagen cuando empezó a llover. La búsqueda estaba en curso.', options: ['busqué', 'buscaba', 'he buscado'], answer: 1, why: 'Una acción en desarrollo interrumpida por otro hecho: imperfecto.' },
            { prompt: 'Mientras ___ las fotos, se apagó la luz.', options: ['editaba', 'edité'], answer: 0, why: '«Mientras» presenta una acción en curso: imperfecto.' },
          ] },
        ] },
        { title: 'El perfecto compuesto: el balance de hoy', mascot: '/brand/mascot/seated.webp', coach: 'Del pasado a hoy: ¿qué ha cambiado?', blocks: [
          { kind: 'concept', tone: 'orange', label: 'PERFECTO COMPUESTO', question: '¿Qué has hecho hasta hoy?', formula: ['haber en presente + participio', 'he / has / ha / hemos / habéis / han + -ado / -ido'],
            meaning: 'Hace un **balance** desde el presente: experiencias o resultados que todavía importan hoy. Va con marcos que llegan hasta ahora: **hoy, esta semana, este año, desde entonces, todavía no, ya**.',
            examples: [
              { es: 'Desde entonces [[he practicado|orange]] más en mi barrio.' },
              { es: 'Esta semana [[he enseñado|orange]] las fotos a dos amigos.' },
              { es: 'Todavía no [[he elegido|orange]] la mejor foto.' },
            ] },
          { kind: 'table', title: 'Haber y participios', head: ['', 'haber', 'participio'], rows: [
            ['yo', '**he**', 'practic**ado**'],
            ['tú', '**has**', 'aprend**ido**'],
            ['él / ella / usted', '**ha**', 'eleg**ido**'],
            ['nosotros / nosotras', '**hemos**', '**hecho**'],
            ['vosotros / vosotras', '**habéis**', '**visto**'],
            ['ellos / ellas / ustedes', '**han**', '**escrito**'],
          ], note: 'Participios irregulares frecuentes: hacer → **hecho**, ver → **visto**, escribir → **escrito**, decir → **dicho**, poner → **puesto**, volver → **vuelto**, abrir → **abierto**, romper → **roto**.' },
          { kind: 'tip', icon: '🌎', title: 'Vas a escuchar las dos opciones', text: 'En España, el balance de hoy o de esta semana se dice casi siempre con perfecto compuesto: «Esta semana **he hecho** fotos». En gran parte de América es muy normal decir «Esta semana **hice** fotos». Las dos formas son correctas. Lo que no cambia: con un período cerrado («ayer», «el mes pasado», «en 2020») se usa el indefinido.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'En un balance con perfecto compuesto: Esta semana ya ___ una carpeta de imágenes.', options: ['he preparado', 'preparaba', 'había preparado'], answer: 0, why: '«Esta semana» llega hasta hoy: haber en presente + participio.' },
            { prompt: '¿Qué frase **no** es correcta?', options: ['El mes pasado fui a un curso.', 'El mes pasado he ido a un curso.', 'Este mes he ido a un curso.'], answer: 1, why: '«El mes pasado» es un período cerrado: no combina con el perfecto compuesto.' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/kneeling.webp', coach: 'Tres preguntas y ya sabes qué tiempo usar.', blocks: [
          { kind: 'decide', title: 'Piensa en una frase de tu historia y responde', steps: [
            { q: '¿Describes cómo era algo, una costumbre o una acción que estaba en curso?', yes: 'Usa el **imperfecto**: «Las calles [[eran|teal]] tranquilas» · «Cada día [[caminábamos|teal]]».', no: 'next' },
            { q: '¿El hecho está en un período cerrado (ayer, el mes pasado, en 2020)?', yes: 'Usa el **indefinido**: «El mes pasado [[fui|blue]] a un curso».', no: 'next' },
            { q: '¿Haces un balance hasta hoy (esta semana, desde entonces, todavía no)?', yes: 'Usa el **perfecto compuesto**: «Desde entonces [[he practicado|orange]] más». En gran parte de América también se usa el indefinido.', no: 'Si cuentas un hecho completo en una secuencia, usa el **indefinido**: «[[Entramos|blue]] en una estación».' },
          ] },
          { kind: 'table', title: 'Marcadores que ayudan', head: ['imperfecto', 'indefinido', 'perfecto compuesto'], rows: [
            ['siempre, normalmente, cada día', 'ayer, anoche, el mes pasado', 'hoy, esta semana, este año'],
            ['antes, de niño, en esa época', 'en 2020, un día, de repente', 'ya, todavía no, nunca'],
            ['mientras…', 'cuando + hecho nuevo', 'desde entonces, hasta ahora'],
          ], note: 'Los marcadores ayudan, pero la última palabra la tiene lo que quieres contar: ¿escena, hecho o balance?' },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Estos errores aparecen mucho en B1.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno busca el error y dice qué quería contar (escena, hecho o balance) antes de que muestres la corrección.', self: 'Lee cada frase, busca el error y piensa qué quería contar la persona. Después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'El hotel fue muy bonito y tuvo una piscina.', right: 'El hotel era muy bonito y tenía una piscina.', why: 'Es una descripción del lugar: imperfecto.' },
            { wrong: 'Ayer caminaba por el parque, compraba pan y volvía a casa.', right: 'Ayer caminé por el parque, compré pan y volví a casa.', why: 'Es una secuencia de hechos completos: indefinido.' },
            { wrong: 'Cuando era niño, fui a la playa cada verano.', right: 'Cuando era niño, iba a la playa cada verano.', why: '«Cada verano» marca un hábito: imperfecto.' },
            { wrong: 'Leí un libro cuando sonó el teléfono (y no lo terminé).', right: 'Leía un libro cuando sonó el teléfono.', why: 'La lectura estaba en curso cuando llegó la llamada: imperfecto.' },
            { wrong: 'El año pasado he ido a México.', right: 'El año pasado fui a México.', why: '«El año pasado» es un período cerrado: indefinido.' },
            { wrong: 'Ayer hizó mucho frío.', right: 'Ayer hizo mucho frío.', why: 'Los indefinidos irregulares como «hizo», «tuvo» o «dijo» no llevan tilde.' },
          ] },
          { kind: 'teacher', text: 'Pide al alumno que cuente en tres frases el día de ayer: una de escena, una de hecho y una que se interrumpe. Pregunta en cada una: «¿Escena o hecho?».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Historias en situaciones reales', coach: 'Toca las formas marcadas.',
      steps: [
        { title: 'Un curso fuera de la ciudad', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada forma marcada y explica si es escena, hecho o balance.', self: 'Lee el diálogo. Después toca cada forma marcada para descubrir por qué se usó ese tiempo.' } },
          { kind: 'explore', title: 'En la cafetería', setting: 'Marta vuelve de un curso de fotografía en otra ciudad y se encuentra con su amigo Sergio.', lines: [
            { who: 'Sergio', text: '¡Marta! ¿Qué tal el curso de fotografía?' },
            { who: 'Marta', text: 'Increíble. [[Fui|blue]] tres semanas a una ciudad pequeña, junto a un río.' },
            { who: 'Sergio', text: '¿Y cómo era el lugar?' },
            { who: 'Marta', text: 'El centro [[estaba|teal]] cerca del río y las salas [[tenían|teal]] mucha luz.' },
            { who: 'Sergio', text: '¿Qué hacían en las clases?' },
            { who: 'Marta', text: 'Cada mañana [[caminábamos|teal]] hasta el mercado para practicar con la gente.' },
            { who: 'Sergio', text: '¿Pasó algo especial?' },
            { who: 'Marta', text: 'Sí. Un día [[empezó|blue]] a llover y el profesor [[cambió|blue]] la actividad: [[entramos|blue]] en una estación antigua.' },
            { who: 'Marta', text: 'Yo [[buscaba|teal]] una imagen de la entrada cuando una compañera me [[mostró|blue]] una ventana preciosa. Esa foto fue la de mi presentación.' },
            { who: 'Sergio', text: '¿Y ahora? ¿Sigues haciendo fotos?' },
            { who: 'Marta', text: 'Muchas. Desde entonces [[he practicado|orange]] en el barrio y esta semana [[he preparado|orange]] una carpeta con mis mejores imágenes.' },
            { who: 'Sergio', text: '¡Quiero verla!' },
          ], notes: {
            Fui: 'Un viaje **completo**: Marta ya volvió. Indefinido para el hecho principal.',
            estaba: 'Describe **dónde** estaba el centro: es parte de la escena, no un hecho.',
            tenían: 'Describe **cómo** eran las salas. Imperfecto de descripción.',
            caminábamos: '**Cada mañana**: un hábito durante el curso. Imperfecto.',
            empezó: '**Un día**: algo nuevo y concreto pasa y rompe la rutina. Indefinido.',
            cambió: 'Otro hecho de la secuencia: llueve → el profesor cambia la actividad.',
            entramos: 'El siguiente paso de la historia, completo. Indefinido.',
            buscaba: 'Una acción **en curso**: Marta estaba buscando cuando pasó otra cosa.',
            mostró: 'El hecho que **interrumpe** la búsqueda. Indefinido después de «cuando».',
            'he practicado': '**Desde entonces** hasta hoy: un balance que llega al presente.',
            'he preparado': '**Esta semana** incluye hoy: Marta presenta el resultado como parte de su presente.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Por qué entraron en una estación?', options: ['Porque empezó a llover.', 'Porque el mercado estaba cerrado.', 'Porque Marta buscaba una ventana.'], answer: 0, why: '«Un día empezó a llover y el profesor cambió la actividad».' },
            { prompt: '¿Qué hacía Marta cuando su compañera le mostró la ventana?', options: ['Caminaba hasta el mercado.', 'Buscaba una imagen de la entrada.', 'Preparaba su carpeta.'], answer: 1, why: '«Yo buscaba una imagen de la entrada cuando una compañera me mostró una ventana».' },
          ] },
        ] },
        { title: 'Perdón por llegar tarde', blocks: [
          { kind: 'explore', title: '¿Qué te pasó?', setting: 'Diego llega una hora tarde a una reunión de trabajo. Su jefa, Carolina, le pregunta qué pasó.', lines: [
            { who: 'Carolina', text: 'Diego, ¿qué te pasó? Te esperamos una hora.' },
            { who: 'Diego', text: 'Lo siento mucho. [[Salía|teal]] de casa cuando me [[llamó|blue]] mi vecina.' },
            { who: 'Carolina', text: '¿Qué quería?' },
            { who: 'Diego', text: 'Su perro [[estaba|teal]] enfermo y ella no [[tenía|teal]] coche. Así que la [[llevé|blue]] al veterinario.' },
            { who: 'Carolina', text: 'Vaya. ¿Y el perro?' },
            { who: 'Diego', text: 'Bien, no [[fue|blue]] nada grave. Pero cuando [[llegué|blue]] a la parada, el autobús ya no estaba.' },
            { who: 'Carolina', text: 'Bueno, tranquilo. Normalmente eres muy puntual.' },
            { who: 'Diego', text: 'Gracias. En mi otro trabajo siempre [[llegaba|teal]] el primero.' },
            { who: 'Carolina', text: 'Lo sé. Y este mes no [[has faltado|orange]] ni un día.' },
          ], notes: {
            Salía: 'Una acción **en curso**: Diego estaba saliendo cuando sonó el teléfono.',
            llamó: 'El hecho que **interrumpe**: la llamada de la vecina.',
            estaba: 'Describe la **situación** del perro en ese momento.',
            tenía: 'Otra información de **fondo**: explica por qué Diego tuvo que ayudar.',
            llevé: 'Un hecho completo que hace avanzar la historia.',
            fue: 'Valora el hecho completo: al final, no fue nada grave.',
            llegué: 'Otro paso de la secuencia de hechos.',
            llegaba: '**Siempre**, en su otro trabajo: un hábito del pasado.',
            'has faltado': '**Este mes** llega hasta hoy: Carolina hace un balance.',
          } },
          { kind: 'teacher', text: 'Pide al alumno que invente otra excusa para Diego con la estructura «Estaba… cuando…». Ejemplo: «Estaba en el metro cuando se paró el tren».' },
        ] },
        { title: '¿Escena, hecho o balance?', blocks: [
          { kind: 'classify', title: 'Clasifica las frases de las dos conversaciones', categories: [
            { id: 'escena', label: 'Escena, hábito o acción en curso', tone: 'teal' },
            { id: 'hecho', label: 'Hecho cerrado', tone: 'blue' },
            { id: 'balance', label: 'Balance hasta hoy', tone: 'orange' },
          ], items: [
            { text: 'Las salas tenían mucha luz.', answer: 'escena', why: 'Describe el lugar.' },
            { text: 'Un día empezó a llover.', answer: 'hecho', why: 'Un hecho nuevo y concreto.' },
            { text: 'Esta semana he preparado una carpeta.', answer: 'balance', why: '«Esta semana» llega hasta hoy.' },
            { text: 'Salía de casa…', answer: 'escena', why: 'Una acción en curso que se interrumpe.' },
            { text: 'La llevé al veterinario.', answer: 'hecho', why: 'Un paso completo de la historia.' },
            { text: 'Siempre llegaba el primero.', answer: 'escena', why: '«Siempre»: un hábito del pasado.' },
            { text: 'Este mes no has faltado ni un día.', answer: 'balance', why: 'Un balance del mes, que todavía no terminó.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Antes de elegir, pregúntate: ¿escena, hecho o balance?',
      steps: [
        { title: 'Elige según el contexto', blocks: [
          { kind: 'choice', items: [
            { context: 'Describes tu primer apartamento.', prompt: 'Mi primer apartamento ___ muy pequeño, pero luminoso.', options: ['era', 'fue', 'ha sido'], answer: 0, why: 'Describes cómo era el lugar: imperfecto.' },
            { context: 'Cuentas lo que pasó en una excursión.', prompt: 'A las nueve salimos del hotel y a las diez ___ al volcán.', options: ['llegábamos', 'llegamos', 'hemos llegado'], answer: 1, why: 'Una secuencia de hechos con horas concretas: indefinido.' },
            { context: 'Hablas de tu infancia.', prompt: 'De pequeño, mi padre me ___ cuentos todas las noches.', options: ['leía', 'leyó', 'ha leído'], answer: 0, why: '«Todas las noches» es un hábito: imperfecto.' },
            { context: 'Explicas por qué no contestaste el teléfono.', prompt: '___ cuando me llamaste, por eso no contesté.', options: ['Me duché', 'Me duchaba', 'Me he duchado'], answer: 1, why: 'La ducha estaba en curso cuando llegó la llamada: imperfecto.' },
            { context: 'Cuentas una tarde concreta.', prompt: 'Estábamos en la terraza cuando de repente ___ .', options: ['llovía', 'llovió', 'ha llovido'], answer: 1, why: '«De repente» introduce un hecho nuevo que interrumpe la escena: indefinido.' },
            { context: 'Haces un balance de tu año con perfecto compuesto.', prompt: 'Este año ___ tres libros en español.', options: ['he leído', 'leía', 'había leído'], answer: 0, why: '«Este año» llega hasta hoy: haber en presente + participio.' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿Qué frase dice que **la cena ya había empezado** cuando llegué?', options: ['Cuando llegué, cenaban.', 'Cuando llegué, cenaron.'], answer: 0, why: 'El imperfecto muestra la cena en curso. Con «cenaron», la cena empieza después de la llegada.' },
            { prompt: '¿Qué frase habla de **una costumbre**?', options: ['Los sábados íbamos al mercado.', 'El sábado fuimos al mercado.'], answer: 0, why: '«Los sábados» + imperfecto: algo que pasaba normalmente. «El sábado fuimos» es un hecho único.' },
            { prompt: '«Leía una novela cuando sonó el timbre.» ¿Terminé la novela en ese momento?', options: ['No, la lectura estaba en curso.', 'Sí, la terminé antes del timbre.'], answer: 0, why: 'El imperfecto no marca el final: el timbre interrumpe la lectura.' },
            { prompt: '¿Qué frase presenta la experiencia como un **balance que llega hasta hoy**?', options: ['Desde el curso he cambiado mi forma de mirar.', 'En el curso cambié mi forma de mirar.', 'En el curso cambiaba mi forma de mirar.'], answer: 0, why: '«Desde el curso» + perfecto compuesto conecta el pasado con el presente.' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'Un fin de semana en la montaña', lines: [
            { who: 'Lucía', text: '¿Qué tal el fin de semana?' },
            { who: 'Andrés', text: 'Muy bien. El sábado ___ a la montaña con mi hermana.', options: ['íbamos', 'fuimos', 'hemos ido'], answer: 1, why: '«El sábado» es un día cerrado y la excursión es un hecho completo.' },
            { who: 'Lucía', text: '¿Y qué tiempo hacía?' },
            { who: 'Andrés', text: 'Al principio ___ sol y no hacía frío.', options: ['hacía', 'hizo', 'ha hecho'], answer: 0, why: 'Describe el tiempo, el fondo de la historia: imperfecto.' },
            { who: 'Andrés', text: 'Pero cuando ___ a la cima, empezó a nevar.', options: ['llegamos', 'llegábamos', 'hemos llegado'], answer: 0, why: 'Un paso concreto de la secuencia: llegamos y entonces empezó a nevar.' },
            { who: 'Lucía', text: '¡Qué miedo! ¿Y qué hicieron?' },
            { who: 'Andrés', text: 'Mientras ___ , encontramos un refugio pequeño.', options: ['bajamos', 'bajábamos', 'hemos bajado'], answer: 1, why: '«Mientras» presenta una acción en curso: imperfecto.' },
            { who: 'Andrés', text: 'Y desde ese día ___ un poco más prudente.', options: ['he sido', 'era', 'había sido'], answer: 0, why: '«Desde ese día» hasta hoy: un balance con perfecto compuesto.' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'La casa de mis abuelos fue grande y tuvo un jardín.', ok: false, options: ['La casa de mis abuelos era grande y tenía un jardín.', 'La casa de mis abuelos ha sido grande y ha tenido un jardín.', 'La casa de mis abuelos era grande y tuvo un jardín.'], answer: 0, why: 'Describe la casa: los dos verbos van en imperfecto.' },
            { sentence: 'Ayer me levanté a las siete, desayuné y me fui a trabajar.', ok: true, why: 'Correcta: una secuencia de hechos completos en un día cerrado.' },
            { sentence: 'Cuando vivía en Lima, iba a la playa cada domingo.', ok: true, why: 'Correcta: una etapa y un hábito, los dos en imperfecto.' },
            { sentence: 'Preparé la cena cuando se fue la luz, y no pude terminarla.', ok: false, options: ['Preparaba la cena cuando se fue la luz, y no pude terminarla.', 'Preparaba la cena cuando se iba la luz, y no podía terminarla.', 'He preparado la cena cuando se fue la luz.'], answer: 0, why: 'La cena estaba en curso cuando llegó el corte: imperfecto + cuando + indefinido.' },
            { sentence: 'En 2019 he estado en Chile por primera vez.', ok: false, options: ['En 2019 estaba en Chile por primera vez.', 'En 2019 estuve en Chile por primera vez.', 'En 2019 había estado en Chile por primera vez.'], answer: 1, why: '«En 2019» es un período cerrado: indefinido.' },
            { sentence: 'El profesor nos dió una idea para mejorar las fotos.', ok: false, options: ['El profesor nos dio una idea para mejorar las fotos.', 'El profesor nos daba una idea para mejorar las fotos.', 'El profesor nos ha dió una idea.'], answer: 0, why: '«Dio» no lleva tilde: es una palabra de una sola sílaba.' },
          ] },
        ] },
        { title: 'Clasifica los usos', blocks: [
          { kind: 'classify', title: '¿Para qué se usa cada verbo marcado en negrita?', categories: [
            { id: 'descripcion', label: 'Describir', tone: 'teal' },
            { id: 'habito', label: 'Hábito', tone: 'violet' },
            { id: 'hecho', label: 'Hecho cerrado', tone: 'blue' },
          ], items: [
            { text: 'La playa **estaba** casi vacía.', answer: 'descripcion', why: 'Describe cómo estaba la playa.' },
            { text: 'Todos los veranos **alquilábamos** una casa.', answer: 'habito', why: '«Todos los veranos»: se repetía.' },
            { text: 'Un día **perdimos** las llaves.', answer: 'hecho', why: '«Un día»: un hecho único.' },
            { text: 'Mi tía **tenía** el pelo largo y rojo.', answer: 'descripcion', why: 'Describe a una persona.' },
            { text: 'Normalmente **cenábamos** a las diez.', answer: 'habito', why: '«Normalmente»: una costumbre.' },
            { text: 'Ese verano **conocí** a mi mejor amiga.', answer: 'hecho', why: 'Conocer a alguien pasa una vez: hecho cerrado.' },
          ] },
        ] },
        { title: 'Construye y transforma', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['Llovía', 'mucho', 'cuando', 'salimos', 'del', 'cine'], accept: ['Llovía mucho cuando salimos del cine', 'Cuando salimos del cine llovía mucho'] },
            { tiles: ['De', 'niña', 'jugaba', 'al', 'fútbol', 'cada', 'tarde'], accept: ['De niña jugaba al fútbol cada tarde', 'Cada tarde jugaba al fútbol de niña'] },
            { tiles: ['Desde', 'entonces', 'he', 'practicado', 'más'], accept: ['Desde entonces he practicado más', 'He practicado más desde entonces'] },
            { tiles: ['Mientras', 'cocinaba', 'llegó', 'mi', 'hermano'], accept: ['Mientras cocinaba llegó mi hermano', 'Llegó mi hermano mientras cocinaba'] },
          ] },
          { kind: 'rewrite', title: 'Une las dos frases en una historia', items: [
            { prompt: 'La sala era tranquila. Una compañera entró.', instruction: 'Une las frases con «cuando».', accept: ['La sala era tranquila cuando una compañera entró', 'La sala estaba tranquila cuando una compañera entró', 'Cuando una compañera entró, la sala era tranquila', 'La sala era tranquila cuando entró una compañera'] },
            { prompt: 'Yo veía una serie. Me llamó mi madre.', instruction: 'Une las frases con «cuando».', accept: ['Veía una serie cuando me llamó mi madre', 'Yo veía una serie cuando me llamó mi madre', 'Veía una serie cuando mi madre me llamó', 'Yo veía una serie cuando mi madre me llamó'] },
            { prompt: 'Desde el curso: practicar más y preparar una carpeta.', instruction: 'Escribe un balance con perfecto compuesto (yo).', accept: ['Desde el curso he practicado más y he preparado una carpeta', 'Desde el curso he practicado más y preparado una carpeta'] },
            { prompt: 'Ayer: caminar por el centro y comprar un libro.', instruction: 'Cuenta los dos hechos en indefinido (yo).', accept: ['Ayer caminé por el centro y compré un libro', 'Ayer caminé por el centro y después compré un libro'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'La experiencia de una compañera', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'La experiencia de una compañera', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno anota los verbos que oye y dice si son escena, hecho o balance.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Puedes bajar la velocidad y leer la transcripción al final.' } },
          { kind: 'listen', title: 'Una compañera del curso', channel: 'NOTA DE VOZ · PARA MARTA', src: '/audio/grammar-classroom/18.mp3',
            before: 'Una compañera del curso de fotografía le manda una nota de voz a Marta. ¿Qué crees que va a recordar del curso?',
            gist: { prompt: '¿De qué habla sobre todo la compañera?', options: ['De lo que vivió en el curso y de cómo la cambió.', 'De un problema con el profesor.', 'De un curso nuevo que va a empezar.'], answer: 0, why: 'Recuerda el curso y dice: «Desde entonces he cambiado mi forma de mirar los edificios».' },
            details: [
              { prompt: '¿Qué hizo antes de empezar el curso?', options: ['Visitó el barrio del centro.', 'Compró una cámara nueva.', 'Fue a la estación.'], answer: 0, why: '«Yo llegué un día antes y visité el barrio del centro».' },
              { prompt: '¿Cómo eran las calles?', options: ['Tranquilas, con muchas tiendas pequeñas.', 'Ruidosas y llenas de turistas.', 'Muy modernas.'], answer: 0, why: '«Las calles eran tranquilas y había muchas tiendas pequeñas».' },
              { prompt: '¿Dónde se sentaba normalmente durante las clases?', options: ['Junto a la puerta.', 'Junto a la ventana.', 'Al lado del profesor.'], answer: 1, why: '«Durante las clases solía sentarme junto a la ventana».' },
              { prompt: '¿Qué todavía no ha hecho esta semana?', options: ['Hacer fotos cerca de casa.', 'Elegir las mejores fotos.', 'Hablar con el grupo.'], answer: 1, why: '«Esta semana he hecho fotos cerca de casa, aunque todavía no he elegido las mejores».' },
              { prompt: '¿Por qué pudieron trabajar sin prisa en la estación?', options: ['Porque llovía mucho afuera.', 'Porque no había clase.', 'Porque llegaron temprano.'], answer: 0, why: '«Llovía mucho afuera y pudimos trabajar sin prisa»: la lluvia es el fondo de la escena.' },
            ],
            transcript: 'Hola, ¿recuerdas el curso? Yo [[llegué|blue]] un día antes y [[visité|blue]] el barrio del centro. Las calles [[eran|teal]] tranquilas y [[había|teal]] muchas tiendas pequeñas. Durante las clases [[solía|teal]] sentarme junto a la ventana. El último día [[presenté|blue]] tres fotos y el profesor me [[dio|blue]] una idea para mejorarlas. Desde entonces [[he cambiado|orange]] mi forma de mirar los edificios. Esta semana [[he hecho|orange]] fotos cerca de casa, aunque todavía no [[he elegido|orange]] las mejores. Me gustó la actividad de la estación: [[llovía|teal]] mucho afuera y [[pudimos|blue]] trabajar sin prisa. Quiero volver a practicar con el grupo.',
            reply: { teacher: 'El alumno responde a la compañera en voz alta, como si fuera Marta: un recuerdo del curso (escena + hecho) y algo que ha cambiado desde entonces.', self: 'Responde a la compañera como si fueras Marta: cuenta un recuerdo del curso con «estaba… cuando…» y algo que has hecho desde entonces.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Experiencias que te cambiaron', coach: 'Pinta la escena, cuenta los hechos, haz el balance.',
      steps: [
        { title: 'Experiencias que te cambiaron', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Tu alumno cuenta su historia y tú repreguntas para que aparezcan los tres tiempos. Comparte también una experiencia tuya.', self: 'Responde cada pregunta en voz alta, como en una conversación. Si quieres, escribe tu respuesta antes de decirla.' } },
          { kind: 'talk', cards: [
            { q: 'Cuando eras niño o niña, ¿cómo eran los veranos en tu familia?', followUps: ['¿Dónde pasabas las vacaciones?', '¿Qué hacían normalmente por la tarde?', '¿Quién organizaba todo?'], phrases: ['Cuando [[era|teal]] pequeño…', 'Todos los veranos [[íbamos|teal]] a…', 'Normalmente [[pasábamos|teal]] el día…'], hint: 'Aquí describes y cuentas costumbres: usa el imperfecto.', example: 'Cuando era pequeña, todos los veranos íbamos a casa de mis abuelos. La casa tenía un patio enorme y por la tarde jugábamos allí hasta la noche.', next: 'Ahora piensa en un verano que fue diferente.' },
            { q: '¿Recuerdas un día en que pasó algo inesperado en un viaje?', followUps: ['¿Dónde estabas y qué hacías?', '¿Qué pasó exactamente?', '¿Cómo terminó?'], phrases: ['[[Estábamos|teal]] en… cuando…', 'De repente [[empezó|blue]]…', 'Al final [[decidimos|blue]]…'], hint: 'Empieza con la escena en imperfecto y después cuenta el hecho con «cuando» o «de repente» en indefinido.', example: 'Estábamos en un mercado de Oaxaca cuando de repente empezó a llover muchísimo. Entramos en un café pequeño y allí conocimos a una familia muy simpática.', next: 'Hablemos de algo que aprendiste fuera de la escuela.', teacher: 'Si el alumno solo usa indefinido, pregunta: «¿Y cómo era el lugar? ¿Qué hacías en ese momento?».' },
            { q: '¿Hiciste alguna vez un curso o un taller fuera de tu rutina?', followUps: ['¿Cómo era el profesor o la profesora?', '¿Qué hacían en cada clase?', '¿Qué fue lo más difícil?'], phrases: ['El año pasado [[hice|blue]] un curso de…', 'La profesora [[era|teal]]…', 'Cada clase [[empezaba|teal]] con…'], hint: 'El curso completo va en indefinido; las clases de cada día, en imperfecto.', example: 'El año pasado hice un taller de cerámica. La profesora era muy paciente y cada clase empezaba con un té. Lo más difícil fue el primer jarrón.', next: 'Y desde entonces, ¿qué ha cambiado?' },
            { q: '¿Qué ha cambiado en tu vida desde esa experiencia?', followUps: ['¿Qué haces ahora que antes no hacías?', '¿Qué has aprendido de ti?', '¿Has vuelto a ese lugar?'], phrases: ['Desde entonces [[he empezado|orange]] a…', 'Este año [[he probado|orange]]…', 'Todavía no [[he vuelto|orange]]…'], hint: 'Para el balance hasta hoy usa el perfecto compuesto. En gran parte de América también puedes usar el indefinido: «Desde entonces empecé a…».', example: 'Desde entonces he empezado a hacer tazas para mis amigos. Este año he regalado más de diez. Todavía no he vuelto al taller, pero quiero hacerlo.', next: 'Ahora, una pequeña historia de mala suerte.' },
            { q: 'Cuéntame un día en que todo salió mal.', followUps: ['¿Qué estabas haciendo cuando empezó el problema?', '¿Qué hiciste para solucionarlo?', '¿Ahora te ríes de esa historia?'], phrases: ['[[Iba|teal]] al trabajo cuando…', 'Primero [[perdimos|blue]]… y después…', 'Al final todo [[salió|blue]] bien.'], hint: 'Alterna: una frase de escena (imperfecto), dos o tres hechos (indefinido).', example: 'Iba a una entrevista importante cuando se rompió mi zapato. Entré en una tienda, compré otros zapatos y llegué justo a tiempo. ¡Me dieron el trabajo!', next: 'Para terminar, una mirada a tu historia con el español.' },
            { q: '¿Cómo era tu español cuando empezaste y qué has conseguido desde entonces?', followUps: ['¿Qué te costaba más al principio?', '¿Qué momento te hizo sentir orgulloso u orgullosa?', '¿Qué no has hecho todavía en español?'], phrases: ['Al principio no [[entendía|teal]]…', 'Un día [[pude|blue]]…', 'Desde entonces [[he aprendido|orange]]…'], hint: 'Usa los tres tiempos: cómo era (imperfecto), un momento clave (indefinido), el balance de hoy (perfecto compuesto).', example: 'Al principio no entendía casi nada y me daba vergüenza hablar. Un día pude pedir la comida en un restaurante sin ayuda. Desde entonces he ganado mucha confianza.', teacher: 'Cierra con una pregunta de balance: «¿Qué tiempo verbal has usado más hoy? ¿Por qué?».' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno le pregunta al profesor por un viaje o un curso y le pide la escena, los hechos y el balance.', self: 'Elige una de tus respuestas y cuéntala otra vez en voz alta, ahora sin mirar las frases de apoyo.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje a un amigo', coach: 'Escribe sobre una experiencia real.',
      steps: [
        { title: 'Un mensaje a un amigo', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Usen la revisión automática y después revisen juntos si cada verbo es escena, hecho o balance.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después, relee cada verbo y pregúntate: ¿escena, hecho o balance?' } },
          { kind: 'write', title: 'Cuéntale tu experiencia', situation: 'Un amigo te pregunta por un curso, una excursión o un viaje que hiciste hace poco. Escríbele un mensaje.', task: [
            'Describe el lugar y el ambiente con el **imperfecto**.',
            'Cuenta dos o tres **hechos** concretos con el indefinido, y uno que interrumpe una acción en curso.',
            'Explica qué **ha cambiado** desde entonces con el perfecto compuesto.',
            'Termina con una invitación o una pregunta para tu amigo.',
          ], starters: ['El mes pasado fui a…', 'El lugar era…', 'Cada mañana…', 'Un día, mientras…, …', 'Desde entonces he…', '¿Te gustaría…?'],
            words: ['de repente', 'cuando', 'mientras', 'al final', 'cada día', 'normalmente', 'desde entonces', 'todavía no', 'esta semana'],
            model: 'Hola, Pablo: El mes pasado [[fui|blue]] a un curso de fotografía en una ciudad pequeña. El centro [[estaba|teal]] cerca del río y las salas [[tenían|teal]] mucha luz. Cada mañana [[caminábamos|teal]] hasta el mercado para hacer fotos de la gente. Un día [[llovió|blue]] muchísimo y el profesor nos [[llevó|blue]] a una estación antigua. Yo [[buscaba|teal]] una buena imagen de la entrada cuando una compañera me [[mostró|blue]] una ventana preciosa: esa foto fue la de mi presentación. Desde entonces [[he practicado|orange]] mucho en mi barrio y esta semana [[he preparado|orange]] una carpeta con mis mejores fotos. ¿Quieres verlas el sábado?',
            minWords: 70 },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy?',
      steps: [
        { title: 'Lo esencial', blocks: [
          { kind: 'recap', items: [
            { tone: 'teal', label: 'IMPERFECTO', formula: '-aba / -ía', example: 'Las salas tenían mucha luz. Cada mañana caminábamos.', caption: 'La escena, los hábitos y las acciones en curso.' },
            { tone: 'blue', label: 'INDEFINIDO', formula: '-é, -ó / -í, -ió + marco cerrado', example: 'Un día empezó a llover y entramos en una estación.', caption: 'Los hechos cerrados que hacen avanzar la historia.' },
            { tone: 'orange', label: 'PERFECTO COMPUESTO', formula: 'haber en presente + participio', example: 'Desde entonces he practicado más.', caption: 'El balance que llega hasta hoy.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Una pregunta para elegir', text: 'Antes de cada verbo, pregúntate: ¿es **escena** (imperfecto), **hecho** (indefinido) o **balance hasta hoy** (perfecto compuesto)? Y recuerda: «Estaba… **cuando** pasó…».' },
        ] },
        { title: 'Desafío final', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: 'Cuando ___ quince años, quería ser fotógrafa.', options: ['tuve', 'tenía', 'he tenido'], answer: 1, why: 'La edad es una descripción del pasado: imperfecto.' },
            { prompt: 'Anoche ___ una película y después fui a dormir.', options: ['veía', 'vi', 'he visto'], answer: 1, why: '«Anoche» + una secuencia de hechos: indefinido.' },
            { prompt: 'Hablaba por teléfono cuando ___ el autobús.', options: ['pasaba', 'pasó', 'ha pasado'], answer: 1, why: 'El hecho que interrumpe la acción en curso: indefinido.' },
            { prompt: 'En un balance con perfecto compuesto: Este mes todavía no ___ al gimnasio.', options: ['he ido', 'iba', 'había ido'], answer: 0, why: '«Este mes» y «todavía no» llegan hasta hoy: perfecto compuesto.' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Cuando llegué, cenaban» y «Cuando llegué, cenaron»: ¿qué diferencia hay? En la primera, la cena ya estaba en curso; en la segunda, empezó después de la llegada.' },
        ] },
      ],
    },
  ],
};
