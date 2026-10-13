import type { LiveLesson } from '../types';

/**
 * Lesson 151 · B2 · Pretérito pluscuamperfecto de subjuntivo.
 * Core: hubiera / hubiese + participio for an earlier action after a past
 * reaction, unreal past conditions (with habría + participio) and regrets.
 * One story runs through the class: an exhibition prepared with an old catalogue.
 */
export const lesson: LiveLesson = {
  id: 151,
  level: 'B2',
  title: 'Pluscuamperfecto de subjuntivo',
  subtitle: 'Reaccionar a lo que había pasado antes, imaginar cómo habría sido el pasado con otra decisión y expresar arrepentimiento.',
  legend: [
    { tone: 'blue', label: 'Reacción pasada a algo anterior' },
    { tone: 'teal', label: 'Pasado irreal: si hubiera…, habría…' },
    { tone: 'orange', label: 'Lamento: ojalá hubiera…' },
  ],
  optionNotes: {
    'habría sabido': 'Después de «si» no va el condicional: «Si lo hubiera sabido…».',
    'habríamos salido': 'Después de «si» no va el condicional: «Si hubiéramos salido…».',
    'habría ocurrido': 'Después de «ojalá» no va el condicional: «Ojalá no hubiera ocurrido».',
    supiera: '«Supiera» habla del presente («si supiera ahora»). Para un pasado que no ocurrió: «hubiera sabido».',
    tuviera: '«Tuviera» mira el presente. Para el pasado: «hubiera tenido».',
    usaran: '«Usaran» presenta el uso al mismo tiempo que la reacción. Si fue antes, se usa «hubieran usado».',
    'hayan salido': 'El perfecto de subjuntivo depende de un verbo en presente. Con «dudaba» (pasado) se usa «hubieran salido».',
    'hayas venido': 'El perfecto de subjuntivo depende de un verbo en presente. Con «me sorprendió» se usa «hubieras venido».',
    'hubieran llegados': 'Con «haber», el participio no cambia: «hubieran llegado».',
    'hubiera hacido': 'El participio de «hacer» es irregular: «hecho».',
    'hubiera decido': 'El participio de «decir» es irregular: «dicho».',
    'hubiera abrido': 'El participio de «abrir» es irregular: «abierto».',
    'hubiera vido': 'El participio de «ver» es irregular: «visto».',
    'había sabido': 'El pluscuamperfecto de indicativo afirma un hecho. Después de «si» irreal se usa el subjuntivo: «hubiera sabido».',
    'habías estudiado': 'El indicativo afirma. Después de «si» irreal se usa «hubieras estudiado».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Valorar un pasado alternativo', coach: 'El pasado no cambia, pero podemos imaginarlo.',
      steps: [
        { title: 'Un pasado que ya no se puede cambiar', blocks: [
          { kind: 'lead', text: 'Después de una exposición, el equipo de Elena descubrió que dos compañeros habían trabajado con una versión antigua del catálogo. Ahora analizan qué pasó y **qué habría pasado** si hubieran actuado de otra forma. Para eso necesitan el **pluscuamperfecto de subjuntivo**.' },
          { kind: 'guide', text: { teacher: 'Lean las dos columnas. Pregunta: «¿En cuál de las dos frases ya sabemos el resultado? ¿Elena pidió la confirmación?».', self: 'Lee las dos columnas. ¿En cuál de las dos frases ya no se puede hacer nada? ¿Elena pidió la confirmación?' } },
          { kind: 'compare', title: 'Futuro posible o pasado imaginado', columns: [
            { tone: 'neutral', label: 'TODAVÍA ES POSIBLE', sentence: 'Si **pido** una confirmación, **detecto** los errores antes.', idea: 'Una condición real para la próxima vez.' },
            { tone: 'teal', label: 'PASADO IRREAL', sentence: '[[Si hubiera pedido|teal]] una confirmación, [[habría detectado|teal]] la confusión antes.', idea: 'No pidió la confirmación y no detectó la confusión. Elena imagina otro pasado.' },
          ] },
          { kind: 'tip', icon: '🔄', title: 'Lo que dice y lo que significa', text: '«Si hubiera pedido…, habría detectado…» **afirma lo contrario**: no lo pidió y no lo detectó. Es la forma de **reescribir mentalmente** el pasado.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '«Si hubiéramos salido antes, habríamos llegado a tiempo.» ¿Qué pasó en realidad?', options: ['Salieron tarde y no llegaron a tiempo.', 'Salieron antes y llegaron a tiempo.', 'Todavía no han salido.'], answer: 0, why: 'La condición irreal afirma lo contrario de lo que pasó.' },
            { prompt: '«Ojalá hubiéramos reservado media hora para revisar.» ¿La reservaron?', options: ['No.', 'Sí.'], answer: 0, why: '«Ojalá» + pluscuamperfecto de subjuntivo lamenta algo que no ocurrió.' },
          ] },
        ] },
        { title: 'Cómo se forma', mascot: '/brand/mascot/studying.webp', coach: 'Hubiera + participio; habría + participio.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'FORMACIÓN', question: '¿Cómo se forma?', formula: ['hubiera / hubieras / hubiera / hubiéramos / hubierais / hubieran + participio', 'variante: hubiese / hubieses / hubiese / hubiésemos / hubieseis / hubiesen + participio'],
            meaning: 'Se forma con **haber en imperfecto de subjuntivo** y el **participio**. En las frases con «si», la consecuencia suele ir en **condicional compuesto**: habría + participio.',
            examples: [
              { es: 'Me sorprendió que [[hubieran usado|blue]] la versión antigua.' },
              { es: '[[Si hubiera sabido|teal]] la verdad, no [[habría ido|teal]].' },
              { es: '[[Ojalá no hubiera dicho|orange]] eso.' },
            ] },
          { kind: 'table', title: 'Pluscuamperfecto de subjuntivo', head: ['', 'haber', 'participio'], rows: [
            ['yo', '**hubiera** / **hubiese**', 'habl**ado** · com**ido** · viv**ido**'],
            ['tú', '**hubieras** / **hubieses**', 'habl**ado** · com**ido** · viv**ido**'],
            ['él / ella / usted', '**hubiera** / **hubiese**', 'habl**ado** · com**ido** · viv**ido**'],
            ['nosotros / nosotras', '**hubiéramos** / **hubiésemos**', 'habl**ado** · com**ido** · viv**ido**'],
            ['vosotros / vosotras', '**hubierais** / **hubieseis**', 'habl**ado** · com**ido** · viv**ido**'],
            ['ellos / ellas / ustedes', '**hubieran** / **hubiesen**', 'habl**ado** · com**ido** · viv**ido**'],
          ], note: 'Las formas en -ra y en -se son equivalentes. «Nosotros» lleva tilde: **hubiéramos**.' },
          { kind: 'table', title: 'Para la consecuencia: condicional compuesto', head: ['', 'haber', 'ejemplo'], rows: [
            ['yo', '**habría**', 'habría visto'],
            ['tú', '**habrías**', 'habrías llegado'],
            ['él / ella / usted', '**habría**', 'habría detectado'],
            ['nosotros / nosotras', '**habríamos**', 'habríamos ganado'],
            ['vosotros / vosotras', '**habríais**', 'habríais podido'],
            ['ellos / ellas / ustedes', '**habrían**', 'habrían hecho'],
          ], note: 'Participios irregulares: hecho, dicho, visto, escrito, puesto, vuelto, abierto, roto, muerto, descubierto, resuelto.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Si nosotros ___ antes, habríamos encontrado sitio.', options: ['hubiéramos llegado', 'habríamos llegado', 'hubiéramos llegados'], answer: 0, why: '«Si» + hubiéramos + participio invariable.' },
            { prompt: 'Si me lo hubieras contado, te ___.', options: ['habría ayudado', 'hubiera ayudado ayer', 'había ayudado'], answer: 0, why: 'La consecuencia irreal en pasado: condicional compuesto.' },
          ] },
        ] },
        { title: 'Una reacción pasada a algo anterior', mascot: '/brand/mascot/speaking.webp', coach: 'Me sorprendió… lo que ya había pasado.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'ANTERIORIDAD EN EL PASADO', question: '¿Qué te sorprendió que hubiera pasado?', formula: ['me sorprendió / me molestó / no creía / era una pena + que + hubiera + participio'],
            meaning: 'Una **reacción, duda o valoración en pasado** sobre algo que había ocurrido **antes**. Es el equivalente en subjuntivo del pluscuamperfecto de indicativo («habían usado»).',
            examples: [
              { es: 'A Elena [[le sorprendió que|blue]] algunos compañeros [[hubieran usado|blue]] la versión antigua.' },
              { es: 'No había comprobado [[que|blue]] todos lo [[hubieran descargado|blue]].' },
              { es: '[[Me molestó que|blue]] no [[hubiéramos comprobado|blue]] la versión antes.' },
              { es: '[[Dudaba de que|blue]] [[hubieran terminado|blue]] a tiempo.' },
            ] },
          { kind: 'compare', title: 'Al mismo tiempo o antes', columns: [
            { tone: 'neutral', label: 'IMPERFECTO DE SUBJUNTIVO', sentence: 'Me sorprendió que **usaran** el catálogo antiguo.', idea: 'La sorpresa y el uso se ven en el mismo momento.' },
            { tone: 'blue', label: 'PLUSCUAMPERFECTO DE SUBJUNTIVO', sentence: 'Me sorprendió que [[hubieran usado|blue]] el catálogo antiguo.', idea: 'Lo usaron **antes**; la sorpresa llegó después, al descubrirlo.' },
          ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Me sorprendió que ___ a la reunión después de todo lo que pasó.', options: ['hubieras venido', 'hayas venido', 'habías venido'], answer: 0, why: 'Una reacción en pasado sobre algo anterior: hubieras + participio.' },
            { prompt: 'Dudaba que ya ___ de la oficina.', options: ['hubieran salido', 'hayan salido', 'habían salido'], answer: 0, why: 'Duda en pasado + acción anterior: pluscuamperfecto de subjuntivo.' },
          ] },
        ] },
        { title: 'Condiciones irreales en el pasado', mascot: '/autoestudio/mascot/noting.webp', coach: 'Si hubiera…, habría…', blocks: [
          { kind: 'concept', tone: 'teal', label: 'PASADO IRREAL', question: '¿Qué habría pasado si…?', formula: ['si + hubiera + participio, + habría + participio'],
            meaning: 'Imagina una **condición que no se cumplió** en el pasado y su **consecuencia**, que tampoco ocurrió. Sirve para analizar errores, justificar decisiones o imaginar otras vidas.',
            examples: [
              { es: '[[Si yo hubiera abierto|teal]] la carpeta completa, [[habría visto|teal]] el archivo final.' },
              { es: '[[Si hubiéramos revisado|teal]] una muestra, [[habríamos evitado|teal]] el trabajo extra.' },
              { es: '[[Si lo hubiera sabido|teal]], te [[habría llamado|teal]].' },
            ],
            note: 'En la consecuencia, en la lengua hablada también se oye «hubiera»: «Si lo hubiera sabido, te **hubiera** llamado». Es correcto. Lo que **nunca** va después de «si» es el condicional.' },
          { kind: 'tip', icon: '🔀', title: 'También verás mezclas', text: 'La condición puede ser pasada y la consecuencia, presente: «[[Si hubiera estudiado|teal]] Medicina, ahora **sería** médica». No hace falta dominar todas las combinaciones hoy: céntrate en «si hubiera…, habría…».' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Si lo ___, te habría llamado.', options: ['hubiera sabido', 'habría sabido', 'supiera'], answer: 0, why: 'La condición irreal en pasado: si + hubiera + participio.' },
            { prompt: 'Si hubieras estudiado más, ___ el examen.', options: ['habrías aprobado', 'aprobarías ayer', 'habías aprobado'], answer: 0, why: 'La consecuencia irreal en pasado: habrías + participio.' },
          ] },
        ] },
        { title: 'Lamentar', mascot: '/brand/mascot/seated.webp', coach: 'Ojalá lo hubiera hecho de otra manera.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'LAMENTO', question: '¿Qué te habría gustado que pasara?', formula: ['ojalá + hubiera + participio', 'me habría gustado / habría preferido + que + hubiera + participio'],
            meaning: 'Expresa **arrepentimiento** o pena por algo del pasado que **ya no se puede cambiar**.',
            examples: [
              { es: '[[Ojalá hubiéramos reservado|orange]] media hora para revisar los archivos.' },
              { es: '[[Ojalá hubiéramos repartido|orange]] la revisión desde el principio.' },
              { es: '[[Ojalá no hubiera dicho|orange]] eso.' },
              { es: '[[Me habría gustado que|orange]] me lo [[hubieras contado|orange]] antes.' },
            ] },
          { kind: 'compare', title: 'Tres «ojalá»', columns: [
            { tone: 'neutral', label: 'OJALÁ + PRESENTE', sentence: 'Ojalá **llegue** a tiempo.', idea: 'Todavía es posible.' },
            { tone: 'neutral', label: 'OJALÁ + IMPERFECTO', sentence: 'Ojalá **llegara** a tiempo.', idea: 'Lo veo difícil, ahora o en el futuro.' },
            { tone: 'orange', label: 'OJALÁ + PLUSCUAMPERFECTO', sentence: '[[Ojalá hubiera llegado|orange]] a tiempo.', idea: 'Ya no es posible: no llegó.' },
          ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'El tren se fue dos minutos antes de que llegara. ¡Ojalá ___ antes de casa!', options: ['hubiera salido', 'habría salido', 'salga'], answer: 0, why: 'Un lamento sobre un pasado que no se puede cambiar.' },
            { prompt: 'Me habría gustado que mis padres ___ mi graduación.', options: ['hubieran visto', 'hayan visto', 'habrían visto'], answer: 0, why: '«Me habría gustado que» + pluscuamperfecto de subjuntivo.' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/kneeling.webp', coach: 'Reacción, condición irreal o lamento.', blocks: [
          { kind: 'decide', title: 'Piensa en tu frase y responde', steps: [
            { q: '¿Reaccionas, dudas o valoras en pasado algo que había ocurrido antes?', yes: 'Usa **que + hubiera + participio**: «[[Me sorprendió que|blue]] [[hubieran usado|blue]]…».', no: 'next' },
            { q: '¿Imaginas una condición del pasado que no se cumplió?', yes: 'Usa **si + hubiera + participio** y **habría + participio**: «[[Si hubiera pedido|teal]]…, [[habría detectado|teal]]…».', no: 'next' },
            { q: '¿Lamentas algo del pasado que ya no se puede cambiar?', yes: 'Usa **ojalá + hubiera + participio**: «[[Ojalá hubiéramos revisado|orange]]…».', no: 'Si la acción es presente o futura, usa el imperfecto de subjuntivo: «Si **tuviera** tiempo…», «Ojalá **fuera**…».' },
          ] },
          { kind: 'table', title: 'Del presente al pasado', head: ['situación', 'hipótesis'], rows: [
            ['No tengo tiempo (ahora).', '**Si tuviera** tiempo, **iría**.'],
            ['No tuve tiempo (ayer).', '[[Si hubiera tenido|teal]] tiempo, [[habría ido|teal]].'],
            ['No sé su número (ahora).', 'Ojalá **supiera** su número.'],
            ['No supe su número (en ese momento).', '[[Ojalá hubiera sabido|orange]] su número.'],
          ] },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Estos errores son muy comunes en B2.', blocks: [
          { kind: 'guide', text: { teacher: 'Pide al alumno que encuentre el error y que diga qué pasó en realidad en cada frase.', self: 'Lee cada frase, busca el error y piensa qué pasó en realidad. Después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'Si habría sabido la verdad, no habría ido.', right: 'Si hubiera sabido la verdad, no habría ido.', why: 'Después de «si» no va el condicional.' },
            { wrong: 'Si tuviera tiempo ayer, te habría ayudado.', right: 'Si hubiera tenido tiempo ayer, te habría ayudado.', why: '«Ayer» es pasado: la condición irreal va en pluscuamperfecto de subjuntivo.' },
            { wrong: 'Ojalá no habría pasado el accidente.', right: 'Ojalá no hubiera pasado el accidente.', why: 'Después de «ojalá» no va el condicional.' },
            { wrong: 'Me sorprendió que hayan cancelado el concierto.', right: 'Me sorprendió que hubieran cancelado el concierto.', why: 'Con una reacción en pasado sobre algo anterior: hubieran + participio.' },
            { wrong: 'Si hubiéramos salidos antes, habríamos llegado.', right: 'Si hubiéramos salido antes, habríamos llegado.', why: 'El participio no cambia.' },
            { wrong: 'Si lo hubieras dicho, te habría creído. (Y me lo dijiste.)', right: 'Como me lo dijiste, te creí.', why: 'El pasado irreal solo funciona si la condición **no** ocurrió.' },
          ] },
          { kind: 'teacher', text: 'Pide al alumno que cuente un pequeño error real de su semana y lo analice con tres frases: una reacción («Me molestó que…»), una condición irreal («Si hubiera…, habría…») y un lamento («Ojalá…»).' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El pluscuamperfecto de subjuntivo en situaciones reales', coach: 'Toca las formas marcadas.',
      steps: [
        { title: 'Una revisión sin culpas', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada forma marcada y explica qué pasó en realidad.', self: 'Lee el diálogo. Después toca cada forma marcada para descubrir por qué se usó y qué pasó en realidad.' } },
          { kind: 'explore', title: 'Después de la exposición', setting: 'La exposición ya se inauguró. Elena, Joaquín y Lucía revisan por qué dos compañeros prepararon sus paneles con un catálogo antiguo.', lines: [
            { who: 'Elena', text: 'Antes de empezar: esto no es una búsqueda de culpables. Quiero entender qué falló.' },
            { who: 'Joaquín', text: 'De acuerdo. A mí, la verdad, [[me sorprendió que|blue]] Pablo y Ana [[hubieran trabajado|blue]] con las fotos anteriores.' },
            { who: 'Elena', text: 'Yo envié el archivo final, pero no comprobé [[que|blue]] todos lo [[hubieran descargado|blue]].' },
            { who: 'Lucía', text: 'El enlace también confundía: llevaba a una carpeta con dos versiones.' },
            { who: 'Elena', text: 'Exacto. [[Si hubiera pedido|teal]] una confirmación, [[habría detectado|teal]] la confusión el lunes.' },
            { who: 'Joaquín', text: 'Y [[si hubiéramos revisado|teal]] juntos una muestra, ellos no [[habrían tenido|teal]] que rehacer los paneles la noche anterior.' },
            { who: 'Lucía', text: 'Fue una noche larguísima. [[Ojalá hubiéramos reservado|orange]] media hora para revisar los archivos.' },
            { who: 'Elena', text: 'Totalmente. A mí [[me habría gustado que|orange]] alguien me [[hubiera avisado|orange]] antes.' },
            { who: 'Joaquín', text: 'Bueno, la exposición salió bien. Pero propongo una carpeta única y una lista de recepción.' },
            { who: 'Elena', text: 'De acuerdo. Así la próxima vez nadie tendrá que pasar la noche en vela.' },
          ], notes: {
            'me sorprendió que': 'Una **reacción en pasado**: Joaquín se sorprendió cuando lo supo.',
            'hubieran trabajado': 'Trabajaron con las fotos antiguas **antes** de la sorpresa.',
            que: 'Elena no comprobó algo que **debía haber ocurrido antes**: la descarga.',
            'hubieran descargado': 'Una acción anterior, no afirmada: no sabía si la habían descargado.',
            'Si hubiera pedido': 'Una **condición irreal**: Elena **no** pidió la confirmación.',
            'habría detectado': 'La **consecuencia** que tampoco ocurrió.',
            'si hubiéramos revisado': 'Otra condición que **no se cumplió**: no revisaron la muestra.',
            'habrían tenido': 'Lo que **no habría pasado**: rehacer los paneles.',
            'Ojalá hubiéramos reservado': 'Un **lamento**: no reservaron ese tiempo y ya no se puede cambiar.',
            'me habría gustado que': 'Otro **lamento**, más formal.',
            'hubiera avisado': 'Nadie avisó a Elena: algo que ya no puede ocurrir.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Elena pidió una confirmación de descarga?', options: ['No, y por eso no detectó la confusión.', 'Sí, pero nadie respondió.', 'Sí, el lunes.'], answer: 0, why: '«Si hubiera pedido una confirmación, habría detectado la confusión»: no la pidió.' },
            { prompt: '¿Qué tuvieron que hacer Pablo y Ana?', options: ['Rehacer los paneles la noche anterior.', 'Cancelar la exposición.', 'Enviar el catálogo a todos.'], answer: 0, why: '«Ellos no habrían tenido que rehacer los paneles la noche anterior»: los rehicieron.' },
          ] },
        ] },
        { title: 'Otra vida posible', blocks: [
          { kind: 'explore', title: 'Una propuesta rechazada', setting: 'Hace cinco años, a Clara le ofrecieron un trabajo en Santiago de Chile y no lo aceptó. Lo habla con su amigo Bruno.', lines: [
            { who: 'Bruno', text: '¿Todavía piensas en lo de Santiago?' },
            { who: 'Clara', text: 'A veces. [[Si hubiera aceptado|teal]] ese trabajo, [[habría conocido|teal]] otra cultura.' },
            { who: 'Bruno', text: 'Pero en ese momento tu madre estaba enferma.' },
            { who: 'Clara', text: 'Sí. [[No me habría perdonado que|blue]] [[le hubiera pasado|blue]] algo estando yo tan lejos.' },
            { who: 'Bruno', text: 'Además, aquí conociste a Leo.' },
            { who: 'Clara', text: 'Es verdad. [[Si me hubiera ido|teal]], no lo [[habría conocido|teal]].' },
            { who: 'Bruno', text: '¿Y te arrepientes?' },
            { who: 'Clara', text: 'No mucho. Solo [[ojalá hubiera aprovechado|orange]] mejor la oportunidad de estudiar allí un verano.' },
            { who: 'Bruno', text: 'Nunca es tarde para un verano en Chile.' },
          ], notes: {
            'Si hubiera aceptado': 'Clara **no** aceptó el trabajo: imagina otra vida.',
            'habría conocido': 'La consecuencia imaginada: no conoció esa cultura (de esa forma).',
            'No me habría perdonado que': 'Una **valoración** en condicional compuesto sobre algo imaginado.',
            'le hubiera pasado': 'Algo que **habría podido pasar antes** de su regreso.',
            'Si me hubiera ido': 'Otra condición irreal: Clara se quedó.',
            'ojalá hubiera aprovechado': 'Un **lamento** pequeño: no aprovechó esa oportunidad.',
          } },
          { kind: 'teacher', text: 'Pregunta al alumno: «¿Hay alguna decisión de tu vida que te haga pensar “¿qué habría pasado si…?”». Recuerda que la respuesta puede ser ligera.' },
        ] },
        { title: 'Reacción, irreal o lamento', blocks: [
          { kind: 'classify', title: 'Clasifica las frases de las dos conversaciones', categories: [
            { id: 'reaccion', label: 'Reacción pasada', tone: 'blue' },
            { id: 'irreal', label: 'Condición irreal', tone: 'teal' },
            { id: 'lamento', label: 'Lamento', tone: 'orange' },
          ], items: [
            { text: 'Me sorprendió que hubieran trabajado con las fotos anteriores.', answer: 'reaccion', why: 'Una sorpresa en pasado sobre algo anterior.' },
            { text: 'Si hubiera pedido una confirmación, habría detectado la confusión.', answer: 'irreal', why: 'Si + hubiera…, habría…' },
            { text: 'Ojalá hubiéramos reservado media hora.', answer: 'lamento', why: 'Ojalá + hubiéramos: no lo hicieron.' },
            { text: 'Si me hubiera ido, no lo habría conocido.', answer: 'irreal', why: 'Una condición que no se cumplió.' },
            { text: 'Me habría gustado que alguien me hubiera avisado.', answer: 'lamento', why: 'Un deseo sobre un pasado que no cambia.' },
            { text: 'No comprobé que todos lo hubieran descargado.', answer: 'reaccion', why: 'Una acción anterior que depende de un verbo en pasado.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Pregúntate siempre: ¿qué pasó en realidad?',
      steps: [
        { title: 'Elige según el contexto', blocks: [
          { kind: 'choice', items: [
            { context: 'No sabías que Ana estaba en el hospital.', prompt: 'Si lo ___, la habría visitado.', options: ['hubiera sabido', 'habría sabido', 'supiera'], answer: 0, why: 'Una condición que no se cumplió en el pasado.' },
            { context: 'Saliste tarde y perdiste el avión.', prompt: 'Si hubiera salido antes, no ___ el avión.', options: ['habría perdido', 'hubiera perdiendo', 'había perdido'], answer: 0, why: 'La consecuencia irreal: habría + participio.' },
            { context: 'Le dijiste algo hiriente a tu hermano.', prompt: 'Ojalá no le ___ eso.', options: ['hubiera dicho', 'habría dicho', 'hubiera decido'], answer: 0, why: 'Un lamento: ojalá + hubiera + participio irregular «dicho».' },
            { context: 'Tu jefe descubrió que el equipo ya había terminado el informe.', prompt: 'Le sorprendió que ya lo ___.', options: ['hubiéramos terminado', 'hayamos terminado', 'habíamos terminados'], answer: 0, why: 'Una reacción en pasado sobre algo anterior.' },
            { context: 'No estudiaste para el examen y suspendiste.', prompt: 'Si ___ más, habrías aprobado.', options: ['hubieras estudiado', 'habías estudiado', 'estudiaras ahora'], answer: 0, why: 'Si + pluscuamperfecto de subjuntivo.' },
            { context: 'Tu amiga no vino a tu fiesta.', prompt: 'Me habría gustado que ___.', options: ['hubiera venido', 'haya venido', 'habría venido'], answer: 0, why: '«Me habría gustado que» + hubiera + participio.' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '«Si hubiera tenido dinero, habría comprado la casa.» ¿Qué pasó?', options: ['No tenía dinero y no la compró.', 'Tenía dinero y la compró.', 'Todavía puede comprarla.'], answer: 0, why: 'El pasado irreal afirma lo contrario.' },
            { prompt: '¿Qué frase habla del **presente**?', options: ['Si tuviera dinero, compraría la casa.', 'Si hubiera tenido dinero, habría comprado la casa.'], answer: 0, why: '«Si tuviera…, compraría…»: una hipótesis sobre ahora.' },
            { prompt: '¿En qué frase el uso del catálogo fue **antes** de la sorpresa?', options: ['Me sorprendió que hubieran usado el catálogo antiguo.', 'Me sorprendió que usaran el catálogo antiguo.'], answer: 0, why: '«Hubieran usado» marca la anterioridad.' },
            { prompt: '¿Qué «ojalá» habla de algo que **ya no se puede cambiar**?', options: ['Ojalá hubiera llamado.', 'Ojalá llame.', 'Ojalá llamara.'], answer: 0, why: 'Ojalá + pluscuamperfecto de subjuntivo: un pasado cerrado.' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'Unas vacaciones complicadas', lines: [
            { who: 'Irene', text: '¿Qué tal las vacaciones en la costa?' },
            { who: 'Martín', text: 'Un desastre. Llovió seis días de siete. Si ___ la previsión, habríamos ido a otro sitio.', options: ['hubiéramos mirado', 'habríamos mirado', 'miráramos'], answer: 0, why: 'Una condición irreal en pasado: no miraron la previsión.' },
            { who: 'Irene', text: '¡Qué mala suerte! ¿Y el hotel?' },
            { who: 'Martín', text: 'Me molestó que no nos ___ que la piscina estaba cerrada.', options: ['hubieran avisado', 'hayan avisado', 'habrían avisado'], answer: 0, why: 'Una reacción pasada sobre algo anterior.' },
            { who: 'Irene', text: 'Vaya. Si me lo hubieras preguntado, te ___ un hotel buenísimo.', options: ['habría recomendado', 'hubiera recomendando', 'había recomendado'], answer: 0, why: 'La consecuencia irreal: habría + participio.' },
            { who: 'Martín', text: 'Ojalá te lo ___.', options: ['hubiera preguntado', 'habría preguntado', 'pregunte'], answer: 0, why: 'Un lamento: ojalá + hubiera + participio.' },
            { who: 'Irene', text: 'Bueno, la próxima vez organizamos juntos el viaje.' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Si habría estudiado más, habría aprobado.', ok: false, options: ['Si hubiera estudiado más, habría aprobado.', 'Si estudiaría más, habría aprobado.', 'Si había estudiado más, aprobaría.'], answer: 0, why: 'Después de «si», nunca el condicional.' },
            { sentence: 'Ojalá hubiéramos salido antes.', ok: true, why: 'Correcta: un lamento con tilde en «hubiéramos».' },
            { sentence: 'Me molestó que no me hayan invitado a la boda.', ok: false, options: ['Me molestó que no me hubieran invitado a la boda.', 'Me molestó que no me habían invitado a la boda.', 'Me molestó que no me habrían invitado a la boda.'], answer: 0, why: 'Reacción en pasado sobre algo anterior: hubieran + participio.' },
            { sentence: 'Si lo hubiera visto, te lo habría dicho.', ok: true, why: 'Correcta: condición irreal + consecuencia, con participios irregulares.' },
            { sentence: 'Si hubiera abrido la carpeta, habría visto el archivo.', ok: false, options: ['Si hubiera abierto la carpeta, habría visto el archivo.', 'Si habría abierto la carpeta, hubiera visto el archivo.', 'Si hubiera abiertos la carpeta, habría visto el archivo.'], answer: 0, why: 'El participio de «abrir» es «abierto».' },
            { sentence: 'Ojalá no habría llovido en la boda.', ok: false, options: ['Ojalá no hubiera llovido en la boda.', 'Ojalá no ha llovido en la boda.', 'Ojalá no llovería en la boda.'], answer: 0, why: 'Después de «ojalá», nunca el condicional.' },
          ] },
        ] },
        { title: 'Construye frases', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['Si', 'lo', 'hubiera', 'sabido', 'te', 'habría', 'llamado'], accept: ['Si lo hubiera sabido te habría llamado', 'Te habría llamado si lo hubiera sabido'] },
            { tiles: ['Ojalá', 'no', 'hubiera', 'dicho', 'eso'], accept: ['Ojalá no hubiera dicho eso'] },
            { tiles: ['Me', 'sorprendió', 'que', 'hubieras', 'venido'], accept: ['Me sorprendió que hubieras venido'] },
            { tiles: ['Si', 'hubiéramos', 'salido', 'antes', 'habríamos', 'llegado'], accept: ['Si hubiéramos salido antes habríamos llegado', 'Habríamos llegado si hubiéramos salido antes'] },
          ] },
        ] },
        { title: 'Reescribe el pasado', blocks: [
          { kind: 'rewrite', title: 'Escribe la frase con el pluscuamperfecto de subjuntivo', items: [
            { prompt: 'No sabía nada, por eso fui.', instruction: 'Imagina el contrario: «Si hubiera sabido…».', accept: ['Si hubiera sabido, no habría ido', 'Si lo hubiera sabido, no habría ido', 'Si hubiera sabido algo, no habría ido', 'No habría ido si lo hubiera sabido', 'Si hubiera sabido, no hubiera ido'] },
            { prompt: 'Dije eso. Me arrepiento.', instruction: 'Expresa el lamento con «Ojalá…».', accept: ['Ojalá no hubiera dicho eso', 'Ojalá no hubiese dicho eso'] },
            { prompt: 'No reservamos mesa y no pudimos cenar allí.', instruction: 'Empieza con «Si hubiéramos…».', accept: ['Si hubiéramos reservado mesa, habríamos podido cenar allí', 'Si hubiéramos reservado mesa, habríamos cenado allí', 'Si hubiéramos reservado mesa, hubiéramos podido cenar allí'] },
            { prompt: 'Me sorprendió: Luis había terminado antes que nadie.', instruction: 'Empieza con «Me sorprendió que…».', accept: ['Me sorprendió que Luis hubiera terminado antes que nadie', 'Me sorprendió que Luis hubiese terminado antes que nadie'] },
            { prompt: 'No me avisaste. (Me habría gustado.)', instruction: 'Empieza con «Me habría gustado que…».', accept: ['Me habría gustado que me hubieras avisado', 'Me habría gustado que me hubieses avisado'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Una revisión sin culpas', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'Una revisión sin culpas', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno anota cada forma con «hubiera / hubiéramos» y explica qué pasó en realidad.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Puedes bajar la velocidad y leer la transcripción al final.' } },
          { kind: 'listen', title: 'Un compañero del equipo', channel: 'NOTA DE VOZ · PARA ELENA', src: '/audio/grammar-classroom/151.mp3',
            before: 'Un compañero le deja a Elena una nota de voz después de la reunión de revisión. ¿Crees que va a buscar un culpable?',
            gist: { prompt: '¿Cuál es la actitud de quien habla?', options: ['Quiere aprender del error y repartir las comprobaciones.', 'Quiere saber quién tuvo la culpa.', 'Quiere cancelar la próxima exposición.'], answer: 0, why: '«La idea es aprender de lo ocurrido. No hace falta guardar cada error como una acusación».' },
            details: [
              { prompt: '¿Qué le pareció útil?', options: ['Que hubieran revisado el problema con calma.', 'Que Elena hubiera enviado otro enlace.', 'Que la exposición se hubiera retrasado.'], answer: 0, why: '«Me pareció útil que hubiéramos revisado el problema ayer con calma».' },
              { prompt: '¿Qué le molestó cuando vio los paneles antiguos?', options: ['Que no hubieran comprobado la versión antes.', 'Que los paneles estuvieran rotos.', 'Que nadie hubiera venido.'], answer: 0, why: '«Me molestó que no hubiéramos comprobado la versión antes».' },
              { prompt: '¿Qué habría visto si hubiera abierto la carpeta completa?', options: ['El archivo final.', 'Las fotos antiguas.', 'La lista de recepción.'], answer: 0, why: '«Si yo hubiera abierto la carpeta completa, habría visto el archivo final».' },
              { prompt: '¿Qué lamenta?', options: ['No haber repartido la revisión desde el principio.', 'Haber participado en la exposición.', 'Haber enviado el enlace.'], answer: 0, why: '«Ojalá hubiéramos repartido la revisión desde el principio».' },
              { prompt: '¿Qué dos comprobaciones propone?', options: ['Que cada participante confirme la descarga y que otro compañero revise una muestra.', 'Que Elena revise todo sola.', 'Que se envíen dos enlaces.'], answer: 0, why: '«Que cada participante confirme la descarga y que otro compañero revise una muestra».' },
            ],
            transcript: 'Hola, Elena. [[Me pareció útil que|blue]] [[hubiéramos revisado|blue]] el problema ayer con calma. Cuando vi los paneles antiguos, [[me molestó que|blue]] no [[hubiéramos comprobado|blue]] la versión antes, pero ahora entiendo que el enlace podía confundir. [[Si yo hubiera abierto|teal]] la carpeta completa, [[habría visto|teal]] el archivo final. No quiero que todo el control dependa de una persona. [[Ojalá hubiéramos repartido|orange]] la revisión desde el principio. Para la próxima exposición podemos asignar dos comprobaciones: que cada participante confirme la descarga y que otro compañero revise una muestra. La idea es aprender de lo ocurrido. No hace falta guardar cada error como una acusación, sino entender qué paso nos [[habría permitido|teal]] detectarlo a tiempo.',
            reply: { teacher: 'El alumno responde al compañero en voz alta, como si fuera Elena: una reacción («Me alegró que…»), una condición irreal («Si yo hubiera…, habría…») y una propuesta para la próxima vez.', self: 'Responde al compañero como si fueras Elena: reconoce tu parte con «Si yo hubiera…, habría…» y acepta su propuesta.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Otros pasados posibles', coach: 'Mira atrás con calma y sin culpas.',
      steps: [
        { title: 'Otros pasados posibles', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Sigue lo que el alumno quiere contar, sin forzar temas dolorosos, y comparte también tus experiencias. Anima a matizar las respuestas.', self: 'Responde cada pregunta en voz alta y desarrolla cada respuesta con dos o tres frases. Si quieres, escríbela antes.' } },
          { kind: 'talk', cards: [
            { q: 'Piensa en un pequeño error reciente en tu trabajo o tus estudios. ¿Qué pasó?', followUps: ['¿Qué te sorprendió o te molestó en ese momento?', '¿Qué habría evitado el problema?', '¿Qué cambiaste después?'], phrases: ['[[Me molestó que|blue]] no [[hubiera…|blue]]', '[[Si hubiera comprobado|teal]]…, [[habría…|teal]]', 'Desde entonces…'], hint: 'Cuenta el hecho, tu reacción y una condición irreal. Habla del proceso, no de culpables.', example: 'La semana pasada envié un presupuesto con un precio antiguo. Me molestó que nadie lo hubiera revisado. Si hubiera comprobado la última versión, habría evitado la confusión. Ahora uso una lista de control.', next: 'Ahora, una decisión más grande.', teacher: 'Si el alumno culpa a una persona, reformula hacia el proceso: «¿Qué paso del proceso habría ayudado?».' },
            { q: '¿Hay alguna decisión importante de tu vida en la que piensas «¿qué habría pasado si…?»?', followUps: ['¿Qué decidiste en ese momento?', '¿Cómo sería tu vida ahora?', '¿Volverías a decidir lo mismo?'], phrases: ['[[Si hubiera aceptado|teal]]…, [[habría…|teal]]', '[[Si me hubiera quedado|teal]]…', 'Ahora **estaría**…'], hint: 'Puedes mezclar: «Si hubiera estudiado Medicina, ahora sería médica».', example: 'Si hubiera aceptado una beca en Alemania, habría aprendido alemán. Quizá ahora viviría en Berlín. Pero estoy contento con mi decisión: aquí tengo a mi familia.', next: 'Hablemos de sorpresas del pasado.' },
            { q: '¿Qué te sorprendió descubrir sobre alguien de tu familia o un amigo?', followUps: ['¿Cuándo te enteraste?', '¿Por qué te sorprendió que lo hubiera hecho?', '¿Cambió tu forma de verlo?'], phrases: ['[[Me sorprendió que|blue]] mi abuela [[hubiera…|blue]]', 'No sabía que…', 'Nunca [[habría imaginado|teal]]…'], hint: 'Reacción en pasado + que + hubiera + participio.', example: 'Me sorprendió que mi abuelo hubiera sido actor de teatro de joven. Nunca lo habría imaginado: era muy tímido.', next: 'Ahora algo más ligero: un viaje.' },
            { q: 'Cuéntame un viaje o una salida que salió mal. ¿Qué habrías hecho diferente?', followUps: ['¿Qué falló?', '¿Qué habría pasado si hubieras planeado otra cosa?', '¿Te ríes ahora de esa historia?'], phrases: ['[[Si hubiéramos mirado|teal]]…', '[[Ojalá hubiera llevado|orange]]…', 'Al final…'], hint: 'Combina condiciones irreales y lamentos ligeros.', example: 'Fuimos a la montaña sin mirar el tiempo. Si hubiéramos mirado la previsión, habríamos ido otro día. ¡Ojalá hubiera llevado un impermeable! Ahora nos reímos mucho.', next: 'Hablemos de lo que te habría gustado.' },
            { q: '¿Qué te habría gustado que alguien te hubiera dicho cuando tenías quince años?', followUps: ['¿Quién te lo podría haber dicho?', '¿Lo habrías escuchado?', '¿Se lo dices tú ahora a alguien?'], phrases: ['[[Me habría gustado que|orange]] alguien me [[hubiera dicho|orange]]…', 'Seguramente no le [[habría hecho|teal]] caso.', 'Ahora le digo a…'], hint: '«Me habría gustado que» + hubiera + participio.', example: 'Me habría gustado que alguien me hubiera dicho que equivocarse es normal. Seguramente no le habría hecho caso, pero ahora se lo digo a mi sobrina.', next: 'Para terminar, una mirada positiva.' },
            { q: '¿Qué error del pasado terminó siendo algo bueno?', followUps: ['¿Qué habría pasado sin ese error?', '¿Qué aprendiste de él?', '¿Lo cambiarías hoy?'], phrases: ['[[Si no hubiera…|teal]], nunca [[habría…|teal]]', 'Menos mal que…', 'No lo cambiaría.'], hint: 'Imagina qué habría pasado sin el error.', example: 'Me equivoqué de tren en un viaje por Italia. Si no me hubiera equivocado, nunca habría conocido a mi mejor amiga. No lo cambiaría por nada.', teacher: 'Cierra con una pregunta de reflexión: «¿Para qué sirve imaginar otros pasados? ¿Para aprender, para lamentar o para agradecer?».' },
          ], swap: { teacher: 'Al final, cambien los papeles: el profesor cuenta un error o una decisión, y el alumno reacciona y plantea un «¿qué habría pasado si…?».', self: 'Elige una decisión de tu vida y escribe tres frases: una reacción («Me sorprendió que…»), una condición irreal y un lamento o un agradecimiento. Dilas en voz alta.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un informe de aprendizaje', coach: 'Analiza un error sin buscar culpables.',
      steps: [
        { title: 'Un informe de aprendizaje', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Usen la revisión automática y después revisen juntos que cada condición irreal corresponda a algo que de verdad no ocurrió.', self: 'Escribe tu informe y toca «Revisar mi texto». Después lee cada «si hubiera…» y comprueba que describe algo que no pasó.' } },
          { kind: 'write', title: 'Lo que aprendimos de un error', situation: 'En tu trabajo, tus estudios o una actividad de grupo hubo un error (una entrega, una reserva, un viaje, un evento). Ya pasó, y ahora escribes un breve informe para aprender de lo ocurrido.', task: [
            'Cuenta qué pasó y **una reacción** en pasado: me sorprendió / me molestó que + hubiera + participio.',
            'Explica **qué habría evitado** el problema: si + hubiera + participio, + habría + participio.',
            'Expresa **un lamento** con ojalá o me habría gustado que.',
            'Termina con **una mejora concreta** para la próxima vez.',
          ], starters: ['El pasado viernes…', 'Me sorprendió que…', 'Si hubiéramos…, habríamos…', 'Ojalá…', 'Me habría gustado que…', 'Para la próxima vez propongo…'],
            words: ['me sorprendió que', 'me molestó que', 'si hubiera', 'habría', 'ojalá', 'me habría gustado que', 'sin embargo', 'por eso', 'la próxima vez'],
            model: 'La exposición salió bien, pero no sin esfuerzo. [[Me sorprendió que|blue]] dos compañeros [[hubieran usado|blue]] el catálogo antiguo: yo había enviado el archivo final, pero no había comprobado la descarga. [[Si hubiéramos pedido|teal]] una confirmación, [[habríamos detectado|teal]] la confusión el lunes y nadie [[habría tenido|teal]] que rehacer los paneles la noche anterior. [[Ojalá hubiéramos reservado|orange]] media hora para revisar una muestra. Sin embargo, el problema no fue de una persona, sino del proceso. Por eso, para la próxima vez propongo una carpeta única y dos comprobaciones repartidas: que cada participante confirme la descarga y que otro compañero revise una muestra.',
            minWords: 100 },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy?',
      steps: [
        { title: 'Lo esencial', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'REACCIÓN PASADA', formula: 'me sorprendió / dudaba + que + hubiera + participio', example: 'Me sorprendió que hubieran usado el catálogo antiguo.', caption: 'Una acción anterior a una reacción pasada.' },
            { tone: 'teal', label: 'PASADO IRREAL', formula: 'si + hubiera + participio, + habría + participio', example: 'Si hubiera pedido una confirmación, habría detectado el error.', caption: 'Una condición y una consecuencia que no ocurrieron.' },
            { tone: 'orange', label: 'LAMENTO', formula: 'ojalá + hubiera + participio', example: 'Ojalá hubiéramos reservado media hora.', caption: 'Un pasado que ya no se puede cambiar.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La regla de oro', text: '**hubiera / hubiese + participio** invariable. Después de **si** y de **ojalá**, nunca el condicional. Y recuerda: «si hubiera…» siempre significa que **no** pasó.' },
        ] },
        { title: 'Desafío final', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: 'Si ___ el mapa, no nos habríamos perdido.', options: ['hubiéramos llevado', 'habríamos llevado', 'lleváramos ahora'], answer: 0, why: 'Una condición irreal en el pasado: si + hubiéramos + participio.' },
            { prompt: 'Ojalá ___ a mi abuela antes de que se mudara.', options: ['hubiera visitado', 'habría visitado', 'visite'], answer: 0, why: 'Un lamento sobre algo que ya no se puede cambiar.' },
            { prompt: 'Le molestó que nadie le ___ la verdad.', options: ['hubiera dicho', 'haya dicho', 'habría dicho'], answer: 0, why: 'Una reacción en pasado sobre algo anterior.' },
            { prompt: 'Si me hubieras avisado, ___ a buscarte.', options: ['habría ido', 'hubiera ido mañana', 'iba'], answer: 0, why: 'La consecuencia irreal: habría + participio.' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: ¿qué afirma y qué imagina «Si hubiera confirmado, habría detectado el error»? Afirma que no confirmó y que no detectó el error; imagina un pasado distinto con otro resultado.' },
        ] },
      ],
    },
  ],
};
