import type { LiveLesson } from '../types';

/**
 * Lesson 346 · A2 · Participios regulares e irregulares frecuentes (course unit G046).
 * One scene runs through the class: Friday, five in the afternoon, at the
 * neighbourhood cultural centre. Tomorrow a photo exhibition opens. Nuria, the
 * coordinator, checks the task list with Lucía, Raúl and Óscar: what has the
 * team already done today? Ana is the photographer; Elena is the director;
 * Pilar is a new volunteer. In the voice message Nuria (Spain voice, tú) tells
 * Elena what is done and what is pending. Content: haber + participio with
 * -ado / -ido and the eight frequent irregulars abierto, dicho, escrito, hecho,
 * puesto, visto, vuelto, roto. Contrast: He escrito (perfect, today) / Escribí
 * (indefinido, only receptive: class 047). Mistake: *He escribido. The
 * participle after haber never changes (*hemos abiertas). Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 346,
  level: 'A2',
  title: 'Participios regulares e irregulares frecuentes',
  subtitle: 'Contar qué tareas ya has hecho hoy con haber + participio, regular (-ado, -ido) o irregular (abierto, escrito, hecho…).',
  legend: [
    { tone: 'blue', label: 'PARTICIPIO REGULAR · -ado, -ido (limpiado, comido)' },
    { tone: 'orange', label: 'PARTICIPIO IRREGULAR · abierto, dicho, escrito, hecho… (special forms)' },
    { tone: 'violet', label: 'INDEFINIDO · ayer escribí (only to recognise: class 047)' },
  ],
  optionNotes: {
    escribido: 'Escribir tiene participio irregular: **escrito**. «Escribido» no existe.',
    abrido: 'Abrir tiene participio irregular: **abierto**.',
    hacido: 'Hacer tiene participio irregular: **hecho**.',
    ponido: 'Poner tiene participio irregular: **puesto**.',
    vido: 'Ver tiene participio irregular: **visto**.',
    volvido: 'Volver tiene participio irregular: **vuelto**.',
    rompido: 'Romper tiene participio irregular: **roto**.',
    dicido: 'Decir tiene participio irregular: **dicho**.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Ya está hecho', coach: '¿Qué has hecho hoy? What have you done today?',
      steps: [
        { title: 'La lista de Nuria · Nuria’s list', blocks: [
          { kind: 'lead', text: 'Es viernes, a las cinco de la tarde, en el centro cultural del barrio. Mañana abre una exposición de fotos. Nuria, la coordinadora, revisa la lista de tareas: «**He abierto** la puerta y **he escrito** a Ana». Para contar lo que ya has hecho hoy necesitas **haber + participio**.', en: 'It is Friday, five in the afternoon, at the neighbourhood cultural centre. A photo exhibition opens tomorrow. Nuria, the coordinator, checks the task list: “I have opened the door and I have written to Ana”. To say what you have already done today you need haber + past participle.' },
          { kind: 'guide', text: { teacher: 'Tú lees las dos frases de Nuria y tu alumno repite. Después tu alumno dice qué participio sigue la regla (-ado) y cuáles tienen una forma especial.', self: 'Lee las dos frases en voz alta. ¿Qué participio sigue la regla? ¿Cuáles tienen una forma especial? (Which participle follows the rule? Which ones are special?)' } },
          { kind: 'compare', title: 'Dos tipos de participio · Two kinds of participle', columns: [
            { tone: 'blue', label: 'REGULAR · -ado, -ido', sentence: 'Lucía ha [[limpiado|blue]] la sala.', idea: 'La regla normal: limpiar → limpiado.', en: 'Lucía has cleaned the room.' },
            { tone: 'orange', label: 'IRREGULAR · forma especial', sentence: 'He [[abierto|orange]] la puerta y he [[escrito|orange]] a Ana.', idea: 'Verbos muy frecuentes con una forma propia.', en: 'I have opened the door and I have written to Ana.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«He escrito a Ana» habla de…', options: ['una tarea que Nuria ya ha hecho hoy', 'una tarea para mañana', 'lo que Nuria hace todos los días'], answer: 0, why: 'Haber + participio: la tarea ya está hecha, hoy.', en: '“He escrito a Ana” is about…' },
            { prompt: '¿Qué participio sigue la regla normal?', options: ['limpiado', 'escrito', 'abierto'], answer: 0, why: 'Limpiar → limpi**ado**: -ar → -ado. Abierto y escrito son formas especiales.', en: 'Which participle follows the normal rule?' },
          ] },
        ] },
        { title: 'La regla: -ado, -ido · The rule', mascot: '/brand/mascot/studying.webp', coach: '-ar → -ado. -er, -ir → -ido.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'PARTICIPIO REGULAR', question: '¿Cómo se forma?', en: 'how to make a regular past participle', formula: ['haber (he, has, ha, hemos, han) + participio', '-ar → -ado · -er / -ir → -ido'],
            meaning: 'Quitas -ar, -er o -ir y pones **-ado** (verbos en -ar) o **-ido** (verbos en -er y en -ir). Haber cambia con la persona; el participio, no.',
            examples: [
              { es: 'Raúl ha [[llamado|blue]] a la imprenta.', en: 'Raúl has called the print shop.' },
              { es: 'Hemos [[vendido|blue]] veinte entradas.', en: 'We have sold twenty tickets.' },
              { es: '¿Has [[recibido|blue]] el paquete de Ana?', en: 'Have you received Ana’s parcel?' },
              { es: 'Óscar ya ha [[salido|blue]] para el banco.', en: 'Óscar has already left for the bank.' },
            ],
            note: 'Ir también es regular aquí: **ido**. «Esta mañana he ido a la tienda».' },
          { kind: 'table', title: 'Verbos de la lista de hoy · Verbs on today’s list', head: ['Infinitivo', 'Participio', 'Ejemplo · Example'], rows: [
            ['limpi**ar** (to clean)', '[[limpiado|blue]]', 'He limpiado el suelo. (I have cleaned the floor.)'],
            ['compr**ar** (to buy)', '[[comprado|blue]]', 'Hemos comprado marcos. (We have bought frames.)'],
            ['vend**er** (to sell)', '[[vendido|blue]]', 'Han vendido el catálogo. (They have sold the catalogue.)'],
            ['recib**ir** (to receive)', '[[recibido|blue]]', 'Ha recibido las fotos. (She has received the photos.)'],
            ['ir (to go)', '[[ido|blue]]', 'Raúl ha ido a la tienda. (Raúl has gone to the shop.)'],
          ], note: 'El participio no cambia con la persona: yo he limpiado, ellas han limpiado.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Preparar → ___', options: ['preparado', 'preparando', 'preparido'], answer: 0, why: '-ar → -ado: preparado. «Preparando» es el gerundio.', en: 'to prepare → prepared' },
            { prompt: 'Vivir → ___', options: ['vivido', 'vivado', 'vivo'], answer: 0, why: '-ir → -ido: vivido.', en: 'to live → lived' },
            { prompt: 'Lucía y Raúl ___ cajas para las fotos.', options: ['ha pedido', 'han pedido', 'han pedidas'], answer: 1, why: 'Ellos → han. El participio no cambia: pedido.', en: 'Lucía and Raúl have asked for boxes for the photos.' },
          ] },
        ] },
        { title: 'Ocho participios especiales · Eight special participles', mascot: '/brand/mascot/standing.webp', coach: 'Ocho formas. Eight forms to learn by heart.', blocks: [
          { kind: 'table', title: 'Los ocho frecuentes · The frequent eight', head: ['Infinitivo', 'Participio', 'Ejemplo · Example'], rows: [
            ['abrir (to open)', '[[abierto|orange]]', 'He abierto la sala. (I have opened the room.)'],
            ['escribir (to write)', '[[escrito|orange]]', 'Has escrito a Ana. (You have written to Ana.)'],
            ['poner (to put)', '[[puesto|orange]]', 'Hemos puesto las sillas. (We have put out the chairs.)'],
            ['ver (to see)', '[[visto|orange]]', 'Ana ha visto el espacio. (Ana has seen the space.)'],
            ['volver (to come back)', '[[vuelto|orange]]', 'Óscar ha vuelto del banco. (Óscar is back from the bank.)'],
            ['romper (to break)', '[[roto|orange]]', 'Alguien ha roto un vaso. (Someone has broken a glass.)'],
            ['decir (to say)', '[[dicho|orange]]', 'Elena ha dicho que sí. (Elena has said yes.)'],
            ['hacer (to do, to make)', '[[hecho|orange]]', 'Raúl ha hecho los carteles. (Raúl has made the posters.)'],
          ], note: 'Seis terminan en **-to** (abierto, escrito, puesto, visto, vuelto, roto) y dos en **-cho** (dicho, hecho).' },
          { kind: 'tip', icon: '💡', title: 'Familias de verbos · Verb families', text: 'Los verbos de la misma familia siguen el mismo modelo: describir → **descrito**, devolver → **devuelto**, deshacer → **deshecho**. Si conoces escrito, vuelto y hecho, ya conoces estos.', en: 'Verbs from the same family follow the same pattern: describir → descrito, devolver → devuelto, deshacer → deshecho. If you know escrito, vuelto and hecho, you already know these.' },
          { kind: 'decide', title: '¿Qué participio? · Which participle?', steps: [
            { q: '¿El verbo es abrir, decir, escribir, hacer, poner, ver, volver o romper (o de su familia)?', yes: 'Forma especial: **abierto, dicho, escrito, hecho, puesto, visto, vuelto, roto**.', no: 'next' },
            { q: '¿El verbo termina en -ar?', yes: 'Usa **-ado**: limpiar → limpiado.', no: 'Verbos en -er / -ir: usa **-ido**: vender → vendido, salir → salido.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Poner → ___', options: ['puesto', 'pongo', 'ponido'], answer: 0, why: 'Poner es uno de los ocho: puesto.', en: 'to put → put' },
            { prompt: 'Volver → ___', options: ['vuelto', 'volvido', 'vuelvo'], answer: 0, why: 'Volver es irregular: vuelto. «Vuelvo» es presente.', en: 'to come back → come back' },
            { prompt: 'Decir → ___', options: ['decidido', 'decido', 'dicho'], answer: 2, why: 'Decir → dicho. «Decidido» es el participio de otro verbo: decidir (to decide).', en: 'to say → said' },
          ] },
        ] },
        { title: 'Hoy, siempre, ayer · Today, always, yesterday', mascot: '/brand/mascot/speaking.webp', coach: 'Ya está hecho: haber + participio.', blocks: [
          { kind: 'table', title: 'Tres pares · Three pairs', head: ['PRESENTE · rutina (routine)', 'HABER + PARTICIPIO · ya hecho hoy (done today)'], rows: [
            ['Lucía abre la sala todos los días. (Lucía opens the room every day.)', 'Hoy Lucía ya ha [[abierto|orange]] la sala. (Today she has already opened it.)'],
            ['Raúl hace carteles los lunes. (Raúl makes posters on Mondays.)', 'Esta semana Raúl ha [[hecho|orange]] seis carteles. (This week he has made six.)'],
            ['Ana vuelve de Valencia en tren. (Ana comes back from Valencia by train.)', 'Ana ya ha [[vuelto|orange]] de Valencia. (Ana is already back.)'],
          ], note: 'Con **hoy, esta mañana, esta semana, ya, todavía no**: haber + participio. Lo viste en la clase 045.' },
          { kind: 'compare', title: 'He escrito / Escribí', columns: [
            { tone: 'orange', label: 'HOY · haber + participio', sentence: 'Hoy he [[escrito|orange]] a Ana.', idea: 'Un tiempo que incluye ahora: hoy, esta semana, ya.', en: 'I have written to Ana today.' },
            { tone: 'violet', label: 'AYER · indefinido (clase 047)', sentence: 'Ayer [[escribí|violet]] a Ana.', idea: 'Un tiempo terminado: ayer. Hoy solo lo reconoces; lo practicas en la clase 047.', en: 'I wrote to Ana yesterday.' },
          ] },
          { kind: 'tip', icon: '🌎', title: 'Vas a oír también «Hoy escribí»', text: 'En muchos países de América se dice también «Hoy **escribí** a Ana». En España es más frecuente «Hoy **he escrito**». Las dos formas son correctas; hoy practicas haber + participio.', en: 'In many Latin American countries people also say “Hoy escribí a Ana”. In Spain “Hoy he escrito” is more common. Both are correct; today you practise haber + participle.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Esta mañana Óscar ___ las luces de la sala.', options: ['ha ponido', 'ha puesto', 'pone todos los días'], answer: 1, why: '«Esta mañana» es parte de hoy: ha puesto. «Ponido» no existe.', en: 'This morning Óscar has switched on the lights in the room.' },
            { prompt: '¿Qué frase cuenta una tarea ya hecha hoy?', options: ['Raúl va a hacer los carteles.', 'Raúl hace los carteles.', 'Raúl ya ha hecho los carteles.'], answer: 2, why: '«Ya» + haber + participio: la tarea está hecha.', en: 'Which sentence tells about a task already done today?' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Escrito, no escribido.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno dice qué falla: el participio o la persona de haber. Después aparece la corrección.', self: 'Lee cada frase, busca qué falla (el participio o haber) y toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'He escribido a la fotógrafa.', right: 'He escrito a la fotógrafa.', why: 'Escribir no sigue la regla -ido: su participio es **escrito**. (Writing “escribido” applies the regular rule to an irregular verb.)' },
            { wrong: 'Óscar ha rompido un marco.', right: 'Óscar ha roto un marco.', why: 'Romper es irregular: **roto**. (Not “rompido”.)' },
            { wrong: 'Lucía ha abierta la sala.', right: 'Lucía ha abierto la sala.', why: 'Con haber, el participio **no cambia**: siempre -o, aunque la persona o la cosa sea femenina o plural.' },
            { wrong: 'Hemos ponido las sillas.', right: 'Hemos puesto las sillas.', why: 'Poner es irregular: **puesto**.' },
            { wrong: '¿Has vido la sala nueva?', right: '¿Has visto la sala nueva?', why: 'Ver es irregular: **visto**.' },
          ] },
          { kind: 'tip', icon: '🔑', title: '«Está abierta» no es lo mismo', text: 'Vas a ver también «La sala **está abierta**». Con **estar**, el participio funciona como adjetivo y cambia (abierta, abiertas). Con **haber**, nunca cambia: «Lucía **ha abierto** la sala».', en: 'You will also see “La sala está abierta”. With estar, the participle works as an adjective and changes. With haber it never changes.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Nuria ___ las invitaciones.', options: ['ha escribido', 'ha escritas', 'ha escrito'], answer: 2, why: 'Escribir → escrito, y con haber no cambia.', en: 'Nuria has written the invitations.' },
            { prompt: 'Las chicas ___ las ventanas.', options: ['han abierto', 'han abrido', 'han abiertas'], answer: 0, why: 'Con haber el participio no cambia: han abierto.', en: 'The girls have opened the windows.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice los ocho participios de memoria y después tres tareas reales que ya ha hecho hoy («Hoy he…»). Tú repites cada frase con la forma correcta.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La reunión de las cinco', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'Revisamos la lista · Checking the list', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Nuria y tu alumno es Lucía, Raúl y Óscar. Después tu alumno toca cada palabra marcada y dice el infinitivo.', self: 'Lee el diálogo en voz alta. Después toca cada palabra marcada y di el infinitivo: abierto → abrir. (Tap each marked word and say the infinitive.)' } },
          { kind: 'explore', title: '¿Qué hemos hecho hoy?', setting: 'Viernes, cinco de la tarde. Centro cultural del barrio. Mañana abre la exposición de fotos de Ana y Nuria revisa la lista con su equipo. (Friday, 5 pm. Ana’s photo exhibition opens tomorrow and Nuria goes through the list with her team.)', lines: [
            { who: 'Nuria', text: 'Bueno, equipo, vamos a revisar la lista. Lucía, ¿[[has abierto|orange]] la sala grande?', en: 'Right, team, let’s check the list. Lucía, have you opened the big room?' },
            { who: 'Lucía', text: 'Sí, la [[he abierto|orange]] a las nueve y [[he limpiado|blue]] el suelo.', en: 'Yes, I opened it at nine and I have cleaned the floor.' },
            { who: 'Nuria', text: 'Perfecto. Raúl, ¿y los carteles?', en: 'Perfect. Raúl, what about the posters?' },
            { who: 'Raúl', text: 'Ya los [[he hecho|orange]]. Están en la entrada.', en: 'I have already made them. They are at the entrance.' },
            { who: 'Nuria', text: '¡Qué bien! ¿Alguien [[ha escrito|orange]] a Ana, la fotógrafa?', en: 'Great! Has anyone written to Ana, the photographer?' },
            { who: 'Óscar', text: 'Sí, yo. Ana [[ha contestado|blue]] y [[ha dicho|orange]] que viene a las seis.', en: 'Yes, me. Ana has answered and has said she is coming at six.' },
            { who: 'Nuria', text: 'Genial. ¿Y las fotos? ¿Ya [[han puesto|orange]] las fotos en las paredes?', en: 'Great. And the photos? Have you put the photos on the walls yet?' },
            { who: 'Lucía', text: 'Todavía no. Pero [[hemos preparado|blue]] los marcos.', en: 'Not yet. But we have prepared the frames.' },
            { who: 'Óscar', text: 'Bueno… casi todos. Yo [[he roto|orange]] un marco. ¡Lo siento!', en: 'Well… almost all of them. I have broken a frame. Sorry!' },
            { who: 'Raúl', text: 'No pasa nada. Esta mañana [[he ido|blue]] a la tienda y [[he comprado|blue]] dos marcos más.', en: 'No problem. This morning I went to the shop and bought two more frames.' },
            { who: 'Nuria', text: '¡Problema solucionado! Por cierto, ¿alguien [[ha visto|orange]] mis llaves?', en: 'Problem solved! By the way, has anyone seen my keys?' },
            { who: 'Lucía', text: 'Sí, las [[has puesto|orange]] en la caja de los carteles.', en: 'Yes, you have put them in the poster box.' },
          ], notes: {
            'has abierto': 'Nuria pregunta por una tarea de **hoy**: has + **abierto**. Abrir es irregular (no «abrido»).',
            'he abierto': 'Lucía responde con yo: **he** abierto. «La» es la sala: la he abierto.',
            'he limpiado': 'Regular: limpi**ar** → limpi**ado**.',
            'he hecho': 'Hacer → **hecho**, uno de los dos participios en -cho.',
            'ha escrito': 'Escribir → **escrito**, nunca «escribido». Es el error más frecuente de hoy.',
            'ha contestado': 'Regular: contest**ar** → contest**ado**.',
            'ha dicho': 'Decir → **dicho**, el otro participio en -cho.',
            'han puesto': 'Nuria habla al equipo (ustedes): **han** + puesto. Poner → **puesto**.',
            'hemos preparado': 'Regular: prepar**ar** → prepar**ado**. «Todavía no» + «pero hemos…»: lo que no está hecho y lo que sí.',
            'he roto': 'Romper → **roto**, no «rompido». Un pequeño accidente de hoy.',
            'he ido': 'Ir → **ido**: forma regular. «Esta mañana» es parte de hoy.',
            'he comprado': 'Regular: compr**ar** → compr**ado**.',
            'ha visto': 'Ver → **visto**, no «vido». ¿Alguien ha visto…? = Has anyone seen…?',
            'has puesto': 'Tú → **has** + puesto. Mismo participio que «han puesto»: solo cambia haber.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué ha hecho Lucía hoy?', options: ['Ha escrito a Ana.', 'Ha hecho los carteles.', 'Ha abierto la sala y ha limpiado el suelo.'], answer: 2, why: '«La he abierto a las nueve y he limpiado el suelo».', en: 'What has Lucía done today?' },
            { prompt: '¿Qué tarea no está hecha todavía?', options: ['Poner las fotos en las paredes.', 'Hacer los carteles.', 'Escribir a Ana.'], answer: 0, why: '«¿Ya han puesto las fotos?» — «Todavía no».', en: 'Which task is not done yet?' },
            { prompt: '¿Por qué ha ido Raúl a la tienda?', options: ['Para comprar carteles.', 'Para comprar marcos.', 'Para buscar las llaves.'], answer: 1, why: '«He comprado dos marcos más», porque Óscar ha roto uno.', en: 'Why has Raúl gone to the shop?' },
          ] },
        ] },
        { title: '¿Ya o todavía no? · Done or not yet?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'La lista de Nuria · Nuria’s list', categories: [
            { id: 'ya', label: 'YA ESTÁ HECHO · done', tone: 'blue' },
            { id: 'todavia', label: 'TODAVÍA NO · not yet', tone: 'orange' },
          ], items: [
            { text: 'abrir la sala grande', answer: 'ya', why: 'Lucía: «La he abierto a las nueve».' },
            { text: 'hacer los carteles', answer: 'ya', why: 'Raúl: «Ya los he hecho».' },
            { text: 'escribir a Ana', answer: 'ya', why: 'Óscar ha escrito a Ana y ella ha contestado.' },
            { text: 'poner las fotos en las paredes', answer: 'todavia', why: 'Lucía: «Todavía no».' },
            { text: 'comprar marcos nuevos', answer: 'ya', why: 'Raúl: «He comprado dos marcos más».' },
            { text: 'Ana: ver la sala', answer: 'todavia', why: 'Ana viene a las seis: todavía no ha visto la sala.' },
          ] },
          { kind: 'teacher', text: 'Después de clasificar, tu alumno dice cada tarea con haber + participio: «Lucía ha abierto la sala», «Todavía no han puesto las fotos».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Regla o forma especial? Rule or special form?',
      steps: [
        { title: 'Elige el participio · Choose the participle', blocks: [
          { kind: 'choice', items: [
            { context: 'Raúl habla de él. (Raúl talks about himself.)', prompt: 'Esta tarde ___ los folletos de la exposición.', options: ['he haciendo', 'he hecho', 'he hacido'], answer: 1, why: 'Hacer → hecho. «Haciendo» es el gerundio.', en: 'This afternoon I have made the exhibition leaflets.' },
            { context: 'Nuria habla de Ana. (Nuria talks about Ana.)', prompt: 'Ana ya ___ de su viaje.', options: ['ha vuelta', 'ha volvido', 'ha vuelto'], answer: 2, why: 'Volver → vuelto, y con haber siempre en -o.', en: 'Ana is already back from her trip.' },
            { context: 'Lucía habla del equipo. (Lucía talks about the team.)', prompt: 'Nosotros ya ___ las sillas en la sala.', options: ['hemos ponido', 'hemos puesto', 'hemos puestas'], answer: 1, why: 'Poner → puesto; el participio no concuerda con «las sillas».', en: 'We have already put the chairs in the room.' },
            { context: 'Óscar habla de Lucía. (Óscar talks about Lucía.)', prompt: 'Lucía ___ un mensaje a la prensa.', options: ['ha escribiendo', 'ha escribido', 'ha escrito'], answer: 2, why: 'Escribir → escrito, nunca «escribido».', en: 'Lucía has written a message to the press.' },
            { context: 'Nuria pregunta a Óscar. (Nuria asks Óscar.)', prompt: 'Óscar, ¿___ la nueva página web del centro?', options: ['has visto', 'has vido', 'has veído'], answer: 0, why: 'Ver → visto.', en: 'Óscar, have you seen the centre’s new website?' },
          ] },
        ] },
        { title: '¿-ado, -ido o especial? · Which form?', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'classify', title: 'Clasifica el verbo · Sort the verb', categories: [
            { id: 'ado', label: '-ar → -ado', tone: 'blue' },
            { id: 'ido', label: '-er / -ir → -ido', tone: 'blue' },
            { id: 'irr', label: 'Especial · irregular', tone: 'orange' },
          ], items: [
            { text: 'llamar', answer: 'ado', why: 'Llamar → llamado.' },
            { text: 'decir', answer: 'irr', why: 'Decir → dicho.' },
            { text: 'vender', answer: 'ido', why: 'Vender → vendido.' },
            { text: 'salir', answer: 'ido', why: 'Salir → salido.' },
            { text: 'romper', answer: 'irr', why: 'Romper → roto. Termina en -er, pero no hace -ido.' },
            { text: 'volver', answer: 'irr', why: 'Volver → vuelto.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Óscar ha rompido otro marco.', ok: false, options: ['Óscar ha roto otro marco.', 'Óscar ha rompiendo otro marco.', 'Óscar ha rota otro marco.'], answer: 0, why: 'Romper → roto, siempre en -o con haber.' },
            { sentence: 'Ana ha dicho que le gusta la sala.', ok: true, why: 'Correcta: decir → dicho.' },
            { sentence: 'Nosotras hemos abiertas las ventanas.', ok: false, options: ['Nosotras hemos abrido las ventanas.', 'Nosotras hemos abierto las ventanas.', 'Nosotras han abierto las ventanas.'], answer: 1, why: 'Con haber el participio no cambia: abierto. Y nosotras → hemos.' },
            { sentence: 'Raúl y Lucía han vuelto del almacén.', ok: true, why: 'Correcta: ellos → han; volver → vuelto.' },
            { sentence: 'Todavía no hemos vido el vídeo de Ana.', ok: false, options: ['Todavía no hemos veído el vídeo de Ana.', 'Todavía no han vido el vídeo de Ana.', 'Todavía no hemos visto el vídeo de Ana.'], answer: 2, why: 'Ver → visto. No es «vido» ni «veído».' },
          ] },
        ] },
        { title: 'El chat del equipo · The team chat', blocks: [
          { kind: 'chat-fill', title: 'Las siete de la tarde · Seven in the evening', lines: [
            { who: 'Nuria', text: 'Chicos, ¿quién ___ las luces de la sala?', options: ['ha apagado', 'ha apagada', 'ha apagando'], answer: 0, why: 'Apagar (-ar) → apagado. Con haber, en -o.' },
            { who: 'Lucía', text: 'Yo. Y también ___ la puerta con llave.', options: ['he cerrida', 'he cierto', 'he cerrado'], answer: 2, why: 'Cerrar es regular: cerrado. «Cierto» no es participio, aunque se parece a «abierto».' },
            { who: 'Raúl', text: 'Yo ___ los folletos en la mesa de la entrada.', options: ['he puesto', 'he ponido', 'he pongo'], answer: 0, why: 'Poner → puesto.' },
            { who: 'Óscar', text: 'Y yo ya ___ a casa. ¡Estoy muy cansado!', options: ['he vuelto', 'he volvido', 'he vuelvo'], answer: 0, why: 'Volver → vuelto. «Vuelvo» es presente.' },
            { who: 'Nuria', text: 'Gracias, equipo. Hoy ustedes ___ un trabajo fantástico.', options: ['han hacido', 'han hecho', 'ha hecho'], answer: 1, why: 'Ustedes → han; hacer → hecho.' },
            { who: 'Lucía', text: '¡Gracias, Nuria! Hasta mañana.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['ha', 'Ana', 'las', 'visto', 'fotos'], accept: ['Ana ha visto las fotos'], en: 'Ana has seen the photos.' },
            { tiles: ['Todavía', 'no', 'hemos', 'escrito', 'el', 'correo'], accept: ['Todavía no hemos escrito el correo'], en: 'We haven’t written the email yet.' },
            { tiles: ['¿Quién', 'ha', 'roto', 'la', 'taza?'], accept: ['¿Quién ha roto la taza?'], en: 'Who has broken the mug?' },
          ] },
        ] },
        { title: 'Del infinitivo al participio · From infinitive to participle', blocks: [
          { kind: 'rewrite', title: 'Escribe la tarea hecha · Write the finished task', items: [
            { prompt: 'Lucía (abrir) las ventanas de la sala.', instruction: 'Escribe la frase con haber + participio. (Write it with haber + participle.)', accept: ['Lucía ha abierto las ventanas de la sala'] },
            { prompt: 'Yo (decir) la dirección a los artistas.', instruction: 'Escribe la frase con haber + participio.', accept: ['Yo he dicho la dirección a los artistas', 'He dicho la dirección a los artistas'] },
            { prompt: 'Raúl y yo (hacer) un plano de la sala.', instruction: 'Escribe la frase con haber + participio.', accept: ['Raúl y yo hemos hecho un plano de la sala'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno dice una frase con cada uno de los ocho participios especiales sobre su día o su semana.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de voz de Nuria', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Nuria llama a la directora · Nuria calls the director', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno levanta la mano cada vez que oye un participio irregular. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Cuenta los participios irregulares que oyes. (Count the irregular participles you hear.)' } },
          { kind: 'listen', title: 'Un mensaje de voz de Nuria', channel: 'MENSAJE DE VOZ · DE NURIA PARA ELENA', src: '/audio/grammar-live/346.mp3',
            before: 'Son las seis. Nuria deja un mensaje de voz a Elena, la directora del centro. ¿Qué tareas crees que cuenta? ¿Hay algún problema? (Nuria leaves a voice message for Elena, the director. Which tasks do you think she mentions? Is there a problem?)',
            gist: { prompt: '¿Para qué llama Nuria? · Why does Nuria call?', options: ['Para cancelar la exposición.', 'Para pedir más dinero.', 'Para contar qué han hecho hoy para la exposición.'], answer: 2, why: 'Nuria cuenta las tareas hechas y lo que falta para mañana.', en: 'Why does Nuria call?' },
            details: [
              { prompt: '¿Quién ha abierto la sala?', options: ['Raúl.', 'Lucía.', 'Ana.'], answer: 1, why: '«Lucía ha abierto la sala a las nueve».', en: 'Who has opened the room?' },
              { prompt: '¿Qué ha hecho Nuria?', options: ['Ha hecho los carteles.', 'Ha roto un marco.', 'Ha escrito a la prensa.'], answer: 2, why: '«Yo he escrito a la prensa».', en: 'What has Nuria done?' },
              { prompt: '¿Qué ha pasado con el marco?', options: ['Raúl lo ha puesto en la entrada.', 'Ana lo ha vendido.', 'Óscar lo ha roto y han comprado otro.'], answer: 2, why: '«Óscar ha roto un marco, pero ya hemos comprado otro».', en: 'What has happened with the frame?' },
              { prompt: '¿Qué no han hecho todavía?', options: ['Escribir a la prensa.', 'Poner las fotos grandes.', 'Hacer los carteles.'], answer: 1, why: '«Todavía no hemos puesto las fotos grandes».', en: 'What haven’t they done yet?' },
            ],
            transcript: 'Hola, Elena, soy Nuria, del centro cultural. Son las seis y te cuento cómo va todo para mañana. Lucía [[ha abierto|orange]] la sala a las nueve. Raúl [[ha hecho|orange]] los carteles y yo [[he escrito|orange]] a la prensa. Ana, la fotógrafa, [[ha vuelto|orange]] de Valencia esta tarde y ya [[ha visto|orange]] la sala. Le gusta mucho. Un pequeño problema: Óscar [[ha roto|orange]] un marco, pero no pasa nada, ya [[hemos comprado|blue]] otro. Todavía no [[hemos puesto|orange]] las fotos grandes; las ponemos mañana a las ocho. ¿Puedes venir a las diez para ver todo? Llámame, por favor. ¡Hasta luego!',
            reply: { teacher: 'Tú eres Nuria. Tu alumno es Elena y responde al mensaje con tres frases: qué ha escuchado, una pregunta sobre una tarea y a qué hora va mañana.', self: 'Responde a Nuria en voz alta como Elena: «He escuchado tu mensaje…», una pregunta («¿Ya han…?») y a qué hora vas mañana. (Answer as Elena: say you have heard the message, ask a question and say when you are coming.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu lista de hoy', coach: 'Cuenta lo que ya has hecho. Say what you have done.',
      steps: [
        { title: '¿Qué has hecho hoy? · What have you done today?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con frases reales. Tú repites su frase con el participio correcto y sigues con la repregunta.', self: 'Lee la pregunta, responde en voz alta y, si quieres, escribe tu respuesta. Usa haber + participio. (Answer aloud using haber + participle.)' } },
          { kind: 'talk', cards: [
            { q: '¿Qué has hecho hoy? Di tres cosas. · What have you done today? Say three things.', followUps: ['¿Y qué no has hecho todavía? (And what haven’t you done yet?)', '¿Has salido de casa? (Have you gone out?)'], phrases: ['Hoy [[he hecho|orange]] la compra.', '[[He limpiado|blue]] la cocina.', 'Todavía no [[he comido|blue]].'], hint: 'He + participio. Hacer → hecho; -ar → -ado; -er / -ir → -ido.', example: 'Hoy he hecho la compra, he limpiado la cocina y he trabajado cuatro horas. Todavía no he comido.', next: 'Ahora, tus mensajes.', teacher: 'Responde tú también: «Yo hoy he preparado esta clase». Así tu alumno oye otra vez la forma.' },
            { q: '¿Has escrito algún mensaje o correo hoy? ¿A quién? · Have you written any message or email today? To whom?', followUps: ['¿Qué has dicho en el mensaje? (What have you said in the message?)', '¿Ya ha contestado? (Has he / she answered yet?)'], phrases: ['[[He escrito|orange]] a mi jefa.', '[[He dicho|orange]] que llego tarde.', 'Mi hermano ya [[ha contestado|blue]].'], hint: 'Escribir → escrito; decir → dicho.', example: 'Sí, he escrito a mi hermano. He dicho que voy a su casa el sábado. Todavía no ha contestado.', next: 'Ahora, películas y series.' },
            { q: '¿Has visto alguna película o serie esta semana? · Have you watched any film or series this week?', followUps: ['¿Te ha gustado? (Have you liked it?)', '¿La has visto solo o con alguien? (Alone or with someone?)'], phrases: ['Esta semana [[he visto|orange]] una serie nueva.', 'Todavía no [[he visto|orange]] nada.', 'Me [[ha gustado|blue]] mucho.'], hint: 'Ver → visto, no «vido».', example: 'Esta semana he visto una película española con mi pareja. Nos ha gustado mucho.', next: 'Ahora, un accidente.' },
            { q: '¿Has roto algo alguna vez? ¿Qué? · Have you ever broken something? What?', followUps: ['¿Has roto algo esta semana? (This week?)', '¿Qué has hecho después? (What did you do afterwards?)'], phrases: ['Una vez [[he roto|orange]] un vaso.', 'Nunca [[he roto|orange]] un teléfono.', 'Después [[he comprado|blue]] otro.'], hint: 'Romper → roto. Para experiencias: alguna vez, nunca, una vez.', example: 'Sí, muchas veces he roto vasos en casa. Esta semana he roto una taza y he comprado otra.', next: 'Ahora, las cosas de casa.' },
            { q: '¿Dónde has puesto hoy las llaves y el teléfono? · Where have you put your keys and phone today?', followUps: ['¿Siempre los pones ahí? (Do you always put them there?)', '¿Has perdido algo esta semana? (Have you lost anything this week?)'], phrases: ['[[He puesto|orange]] las llaves en la mesa.', 'Hoy [[he perdido|blue]] el teléfono dos veces.', 'Siempre las pongo en la puerta.'], hint: 'Poner → puesto. Compara: siempre las **pongo** (rutina) / hoy las **he puesto** (hoy).', example: 'Hoy he puesto las llaves en la mesa de la cocina. Normalmente las pongo en la puerta.', next: 'Ahora, eres Nuria.' },
            { q: 'Eres Nuria: revisa la lista de tu equipo. Pregunta y responde. · You are Nuria: check your team’s list.', followUps: ['¿Quién ha abierto la sala? (Who has opened the room?)', '¿Ya han puesto las fotos? (Have you put up the photos yet?)'], phrases: ['¿[[Has hecho|orange]] los carteles?', 'Sí, ya los [[he hecho|orange]].', 'No, todavía no [[hemos vuelto|orange]] del almacén.'], hint: 'Pregunta con «¿Has…?» o «¿Ya han…?». Responde con «Sí, ya…» o «Todavía no…».', example: '—¿Has escrito a Ana? —Sí, ya he escrito a Ana. —¿Y han puesto las fotos? —Todavía no.', teacher: 'Tú eres el equipo y respondes con un error a propósito («He escribido a Ana»). Tu alumno, como Nuria, te corrige.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas («¿Qué has hecho hoy?», «¿Has visto…?») y tú respondes.', self: 'Ahora haz tú las preguntas en voz alta y responde como otra persona: tu jefe, tu pareja, un amigo. (Now ask the questions and answer as another person.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje para Pilar', coach: 'Lo hecho y lo que falta. Done and still to do.',
      steps: [
        { title: 'Escribe a la nueva voluntaria · Write to the new volunteer', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos los participios: ¿regla o forma especial? Después tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Mira bien cada participio: ¿-ado, -ido o forma especial? (Write and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Así está todo para mañana · Where things stand for tomorrow', situation: 'Eres Lucía (o eres tú, en tu trabajo). Pilar es una voluntaria nueva y mañana viene a ayudar por primera vez. Escríbele un mensaje: qué ha hecho el equipo hoy y qué falta. (You are Lucía, or yourself at work. Pilar is a new volunteer who comes to help tomorrow for the first time. Write her a message: what the team has done today and what is still to do.)', task: [
            'Saluda a Pilar. (Greet Pilar.)',
            'Cuenta cuatro tareas hechas hoy con **haber + participio**. (Four tasks done today.)',
            'Usa al menos dos participios especiales: abierto, dicho, escrito, hecho, puesto, visto, vuelto, roto. (At least two irregular participles.)',
            'Di una tarea que **todavía no** está hecha. (One task not done yet.)',
            'Termina con una pregunta para Pilar. (End with a question.)',
          ], starters: ['Hola, Pilar:', 'Hoy Raúl ha …', 'Yo he …', 'Ana ya ha …', 'Todavía no hemos …', '¿Puedes …?', 'Un abrazo.'],
            words: ['he', 'has', 'ha', 'hemos', 'han', 'abierto', 'escrito', 'hecho', 'puesto', 'visto', 'vuelto', 'limpiado', 'preparado', 'ya', 'todavía no'],
            model: 'Hola, Pilar: ¡Bienvenida al equipo! Así está todo para mañana. Hoy Raúl [[ha hecho|orange]] los carteles y los [[ha puesto|orange]] en la entrada. Yo [[he limpiado|blue]] la sala y [[he preparado|blue]] los marcos. Ana, la fotógrafa, ya [[ha visto|orange]] el espacio y está muy contenta. Todavía no [[hemos abierto|orange]] las cajas de las fotos grandes. ¿Puedes venir mañana a las ocho para ayudar? Un abrazo, Lucía.',
            minWords: 45,
            checks: [
              { label: 'Haber + participio regular (-ado, -ido)', pattern: '(?<!\\p{L})(?:he|has|ha|hemos|han|habéis)\\s+\\p{L}+(?:ado|ido)(?!\\p{L})', tip: 'Cuenta una tarea con un participio regular: «He limpiado la sala».' },
              { label: 'Haber + participio especial (abierto, hecho, puesto…)', pattern: '(?<!\\p{L})(?:he|has|ha|hemos|han|habéis)\\s+(?:abierto|dicho|escrito|hecho|puesto|visto|vuelto|roto)(?!\\p{L})', tip: 'Usa uno de los ocho: «Raúl ha hecho los carteles».' },
              { label: 'Todavía no (a task not done yet)', pattern: '(?<!\\p{L})todav[ií]a\\s+no(?!\\p{L})', tip: 'Di qué falta: «Todavía no hemos puesto las fotos».' },
              { label: 'Una pregunta para Pilar (a question)', pattern: '¿[^?]+\\?', tip: 'Termina con una pregunta: «¿Puedes venir a las ocho?».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:abrido|escribido|hacido|ponido|vido|volvido|rompido|dicido|veído)(?!\\p{L})', why: 'Este verbo tiene participio especial: **abierto, escrito, hecho, puesto, visto, vuelto, roto, dicho**.' },
              { pattern: '(?<!\\p{L})(?:he|has|ha|hemos|han|habéis)\\s+\\p{L}+(?:ados|adas|ada|idos|idas|ida|tos|tas|ta|chos|chas|cha)(?!\\p{L})', why: 'Con **haber**, el participio no cambia: siempre en -o. «Hemos abiert**o** las cajas», no «abiertas».' },
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
            { tone: 'blue', label: 'REGULAR', formula: '-ar → -ado · -er / -ir → -ido', example: 'He limpiado la sala. Hemos vendido entradas.', caption: 'la regla para casi todos los verbos', en: 'the rule for almost every verb' },
            { tone: 'orange', label: 'LOS OCHO ESPECIALES', formula: 'abierto · dicho · escrito · hecho · puesto · visto · vuelto · roto', example: 'He escrito a Ana. Óscar ha roto un marco.', caption: 'formas que aprendes de memoria', en: 'forms you learn by heart' },
            { tone: 'violet', label: 'INDEFINIDO (clase 047)', formula: 'ayer + escribí, abrí, hablé', example: 'Ayer escribí a Ana.', caption: 'un tiempo terminado: lo estudias en la próxima clase', en: 'a finished time: next class' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Haber cambia con la persona (he, has, ha, hemos, han); el participio **no cambia nunca**. Primero piensa: ¿es uno de los ocho? Si no, -ado o -ido. **Escrito**, nunca «escribido».', en: 'Haber changes with the person; the participle never changes. First think: is it one of the eight? If not, -ado or -ido. Escrito, never “escribido”.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Esta semana mis vecinos ___ dos cartas al ayuntamiento.', options: ['han escritas', 'han escribido', 'han escrito'], answer: 2, why: 'Escribir → escrito; con haber, en -o.', en: 'This week my neighbours have written two letters to the town hall.' },
            { prompt: '¿Quién ___ la ventana? Hace frío.', options: ['ha abrido', 'ha abierta', 'ha abierto'], answer: 2, why: 'Abrir → abierto.', en: 'Who has opened the window? It is cold.' },
            { prompt: 'Hoy mi hijo ___ los deberes solo.', options: ['ha hecho', 'ha haciendo', 'ha hacido'], answer: 0, why: 'Hacer → hecho.', en: 'Today my son has done his homework on his own.' },
            { prompt: 'Este mes ___ tres libros en el mercado.', options: ['he vendo', 'he vendido', 'he vendado'], answer: 1, why: 'Vender (-er) → vendido.', en: 'This month I have sold three books at the market.' },
            { prompt: '¿Ya ___ la nueva exposición?', options: ['has vido', 'has visto', 'has veído'], answer: 1, why: 'Ver → visto.', en: 'Have you seen the new exhibition yet?' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Del centro cultural a casa.', blocks: [
          { kind: 'lead', text: 'Es domingo y Lucía ordena la casa con su compañero de piso, Hugo. Su madre llama: «¿Qué han hecho hoy?». Escribe las respuestas.', en: 'It is Sunday and Lucía is tidying the flat with her flatmate, Hugo. Her mother calls: “What have you done today?”. Write the answers.' },
          { kind: 'rewrite', title: 'En casa · At home', items: [
            { prompt: 'Yo (poner) la lavadora.', instruction: 'Responde como Lucía con haber + participio.', accept: ['Yo he puesto la lavadora', 'He puesto la lavadora'] },
            { prompt: 'Hugo (romper) un vaso.', instruction: 'Responde con él. Empieza con «Hugo».', accept: ['Hugo ha roto un vaso'] },
            { prompt: 'Nosotros (volver) del mercado.', instruction: 'Responde con nosotros.', accept: ['Nosotros hemos vuelto del mercado', 'Hemos vuelto del mercado'] },
          ] },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 047 · Pretérito indefinido regular', text: 'Ya cuentas lo que has hecho **hoy**: «He escrito a Ana». En la clase 047 aprendes a contar lo que pasó **ayer** o la semana pasada con el indefinido: «Ayer **escribí** a Ana». Ya lo has visto en los ejemplos violeta; ahora es el paso natural para hablar de un pasado terminado.', en: 'You can now say what you have done today: “He escrito a Ana”. In class 047 you learn to tell what happened yesterday or last week with the preterite: “Ayer escribí a Ana”. You have already seen it in the violet examples; it is the natural next step to talk about a finished past.', href: '/sistema-verbal/preterito-perfecto-simple-indicativo', label: 'Ir a la clase 047' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué has hecho hoy? ¿Qué no has hecho todavía?». Respuesta esperada: al menos dos participios especiales y uno regular. Tarea: escribir la lista real de tareas de mañana y, al día siguiente, contar qué ha hecho.' },
        ] },
      ],
    },
  ],
};
