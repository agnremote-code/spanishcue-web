import type { LiveLesson } from '../types';

/**
 * Lesson 155 · C1 · Futuro de subjuntivo (receptive).
 * A museum team digitises an old reading-room regulation: learners recognise
 * the -re forms, tell them apart from the future indicative and modernise them
 * by function, without being asked to produce archaic forms.
 */
export const lesson: LiveLesson = {
  id: 155,
  level: 'C1',
  title: 'Futuro de subjuntivo',
  subtitle: 'Reconocer las formas en -re en reglamentos, leyes, refranes y textos históricos, distinguirlas del futuro de indicativo y reformularlas en español actual.',
  legend: [
    { tone: 'violet', label: 'Futuro de subjuntivo: forma en -re' },
    { tone: 'teal', label: 'Equivalente actual: presente de subjuntivo' },
    { tone: 'blue', label: 'Futuro de indicativo: -rá' },
    { tone: 'orange', label: 'Fórmula o refrán heredado' },
  ],
  optionNotes: {
    'llegará': '«Llegará», con tilde, es futuro de indicativo: afirma o predice. La fuente contempla una situación eventual.',
    'llegara': '«Llegara» es imperfecto de subjuntivo. Moderniza el pasado, no la eventualidad futura de la instrucción.',
    'tuvo': 'El indefinido afirma un hecho pasado. La fuente presenta una persona eventual: cualquiera que tenga dudas.',
    'Quien tendrá dudas, que pregunte': 'Después de «quien» con valor eventual no va el futuro de indicativo, sino el presente de subjuntivo: «quien tenga».',
    'Cuando llegará el catálogo, se colocará en la mesa': 'Después de «cuando» con valor futuro va el presente de subjuntivo: «cuando llegue».',
    'Es una errata: debería decir «llegará»': 'La falta de tilde no es un descuido: «llegare» es otra forma verbal, el futuro de subjuntivo.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Una forma que sobrevive en los textos', coach: 'Hoy aprendemos a leerla, no a usarla al hablar.',
      steps: [
        { title: '¿Qué es «tuviere»? · What is «tuviere»?', blocks: [
          { kind: 'lead', text: 'Un museo digitaliza un reglamento de lectura de principios del siglo XX: «Quien [[tuviere|violet]] dudas, pregunte al encargado. Cuando [[llegare|violet]] un nuevo catálogo, se colocará en la mesa de consulta». No son erratas ni futuros sin tilde: son formas del **futuro de subjuntivo**.', en: 'A museum is digitising a reading-room regulation from the early 20th century. Forms like «tuviere» and «llegare» are not typos or futures missing an accent: they belong to the future subjunctive, a tense you will meet in old rules, laws and proverbs. In this class you learn to read and modernise it, not to use it.' },
          { kind: 'guide', text: { teacher: 'Aclara que el objetivo es receptivo: reconocer, interpretar y modernizar. No pidas al alumno que produzca estas formas en conversación.', self: 'En esta clase vas a aprender a reconocer e interpretar estas formas. No necesitas usarlas al hablar.' } },
          { kind: 'concept', tone: 'violet', label: 'FORMACIÓN', question: '¿Cómo se forma?', en: 'Start from the «ellos» form of the preterite, just as for the imperfect subjunctive («hablara»). That is why preterite irregularities carry over: tuvieron gives tuviere, hicieron gives hiciere, dijeron gives dijere.', formula: ['3.ª persona plural del indefinido − ron + re', 'hablaron → habla-re · tuvieron → tuvie-re · fueron → fue-re'],
            meaning: 'Se parte de «ellos» en pretérito indefinido, igual que el imperfecto de subjuntivo («hablara»). Por eso **los irregulares del indefinido se mantienen**: tuvieron → tuviere; hicieron → hiciere; dijeron → dijere.',
            examples: [
              { es: 'Quien [[tuviere|violet]] dudas, pregunte al encargado.', en: 'Anyone who has questions should ask the attendant.' },
              { es: 'Si alguien [[infringiere|violet]] la norma, será sancionado.', en: 'If anyone breaks the rule, they will be penalised.' },
              { es: 'Cuando [[llegare|violet]] el mensajero, se abrirán las puertas.', en: 'When the messenger arrives, the doors will be opened.' },
            ] },
          { kind: 'table', title: 'Futuro de subjuntivo · Future subjunctive', head: ['Persona', 'hablar', 'comer', 'vivir'], rows: [
            ['yo', 'habla**re**', 'comie**re**', 'vivie**re**'],
            ['tú', 'habla**res**', 'comie**res**', 'vivie**res**'],
            ['él / ella / usted', 'habla**re**', 'comie**re**', 'vivie**re**'],
            ['nosotros / nosotras', 'habl**áremos**', 'com**iéremos**', 'viv**iéremos**'],
            ['vosotros / vosotras', 'habla**reis**', 'comie**reis**', 'vivie**reis**'],
            ['ellos / ellas / ustedes', 'habla**ren**', 'comie**ren**', 'vivie**ren**'],
          ], note: 'Irregulares frecuentes en los textos: **fuere** (ser / ir), **tuviere**, **hiciere**, **pudiere**, **dijere**, **viniere**, **hubiere**. Compuesto: «hubiere + participio».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿De qué forma se parte para obtener «hiciere»?', options: ['hicieron', 'hacen', 'harán'], answer: 0, why: 'Ellos del indefinido (hicieron) − ron + re.', en: 'Which form do you start from to get «hiciere»?' },
            { prompt: '¿Qué forma es futuro de subjuntivo?', options: ['pudiere', 'pudiera', 'podrá'], answer: 0, why: 'La terminación -re es la marca del futuro de subjuntivo.', en: 'Which form is a future subjunctive?' },
            { prompt: '«Fuere» puede corresponder a…', options: ['ser o ir', 'solo ser', 'solo hacer'], answer: 0, why: 'Como «fueron», «fuere» sirve para ser e ir.', en: '«Fuere» can correspond to…' },
          ] },
        ] },
        { title: '«Llegare» no es «llegará» · «Llegare» is not «llegará»', mascot: '/brand/mascot/studying.webp', coach: 'Una tilde cambia el modo.', blocks: [
          { kind: 'compare', title: 'Tres formas que se parecen · Three forms that look alike', columns: [
            { tone: 'violet', label: 'FUTURO DE SUBJUNTIVO', sentence: 'Cuando [[llegare|violet]] el catálogo…', idea: 'Llana, sin tilde. Situación eventual, en un texto antiguo o formal.', en: 'Future subjunctive: stress on the second-to-last syllable, no accent mark. A possible situation, in an old or formal text.' },
            { tone: 'blue', label: 'FUTURO DE INDICATIVO', sentence: 'El catálogo [[llegará|blue]] el lunes.', idea: 'Aguda, con tilde. Afirma o predice un hecho.', en: 'Future indicative: stress on the last syllable, with an accent mark. It states or predicts a fact.' },
            { tone: 'neutral', label: 'IMPERFECTO DE SUBJUNTIVO', sentence: 'Si **llegara** el catálogo…', idea: 'Termina en -ra. Condición hipotética o subjuntivo en pasado.', en: 'Imperfect subjunctive: it ends in -ra. A hypothetical condition, or a subjunctive in the past.' },
          ] },
          { kind: 'tip', icon: '👂', title: 'Lee en voz alta · Read it aloud', text: '«lle-GA-re» lleva el acento en la penúltima sílaba; «lle-ga-RÁ», en la última. Si lees el original en voz alta, el acento te ayuda a reconocer el modo.', en: '«lle-GA-re» is stressed on the second-to-last syllable; «lle-ga-RÁ» on the last. Reading the original aloud, the stress helps you recognise the mood.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En «Cuando llegare un nuevo catálogo», la ausencia de tilde es…', options: ['una marca de otra forma verbal', 'Es una errata: debería decir «llegará»', 'un rasgo regional'], answer: 0, why: '«Llegare» es futuro de subjuntivo; no le falta ninguna tilde.', en: 'In «Cuando llegare un nuevo catálogo», the missing accent mark is…' },
            { prompt: '¿Qué frase **afirma** que el catálogo va a llegar?', options: ['El catálogo llegará el lunes.', 'Cuando llegare el catálogo, se colocará en la mesa.'], answer: 0, why: 'El futuro de indicativo afirma; el de subjuntivo contempla una posibilidad.', en: 'Which sentence states that the catalogue is going to arrive?' },
          ] },
        ] },
        { title: 'Qué significa: lo eventual · What it means: the eventual', mascot: '/autoestudio/mascot/noting.webp', coach: 'Una situación que puede darse.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'EQUIVALENTE ACTUAL', question: '¿Cómo se dice hoy?', en: 'The future subjunctive presents a possible or hypothetical situation looking ahead: anyone who might find themselves in that case, something that may happen. Today it is almost always expressed with the present subjunctive, and after «si» with the present indicative.', formula: ['quien / el que + presente de subjuntivo', 'cuando / si + presente (de subjuntivo o de indicativo)'],
            meaning: 'El futuro de subjuntivo presenta una situación **eventual o hipotética** vista hacia el futuro: una persona cualquiera que pueda encontrarse en ese caso, un hecho que puede ocurrir. Hoy se expresa casi siempre con el **presente de subjuntivo**, y tras «si», con el presente de indicativo.',
            examples: [
              { es: 'Quien [[tuviere|violet]] dudas → Quien [[tenga|teal]] dudas, que pregunte.', en: 'Whoever has questions should ask. (Anyone, not a specific person.)' },
              { es: 'Cuando [[llegare|violet]] un catálogo → Cuando [[llegue|teal]] un catálogo, se colocará en la mesa.', en: 'When a catalogue arrives, it will be placed on the table.' },
              { es: 'Si alguien [[infringiere|violet]] la norma → Si alguien **infringe** la norma, será sancionado.', en: 'If anyone breaks the rule, they will be penalised.' },
              { es: 'El que [[hubiere|violet]] perdido un objeto → Quien [[haya|teal]] perdido un objeto, que lo comunique.', en: 'Anyone who has lost an object should report it.' },
            ],
            note: 'La reformulación no se decide cambiando letras de manera automática: depende de la **función** del verbo en la oración.' },
          { kind: 'tip', icon: '⚠', title: 'No lo conviertas en un hecho · Don’t turn it into a fact', text: '«Quien tuviere dudas» no habla de una persona concreta que ya tiene dudas, sino de **cualquiera** que pueda tenerlas. Evita versiones como «la persona que tuvo dudas» o «todos tendrán dudas».', en: '«Quien tuviere dudas» is not about a particular person who already has questions, but about anyone who might have them. Avoid versions like «the person who had questions» or «everyone will have questions».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Paráfrasis actual de «Quien tuviere dudas, pregunte al encargado»:', options: ['Quien tenga dudas, que pregunte al encargado.', 'La persona que tuvo dudas preguntó al encargado.', 'Todos tendrán dudas y preguntarán al encargado.'], answer: 0, why: 'Mantiene una persona eventual y la instrucción.', en: 'A modern paraphrase of «Quien tuviere dudas, pregunte al encargado»:' },
            { prompt: '«Cuando llegare el catálogo» → «Cuando ___ el catálogo».', options: ['llegue', 'llegará', 'llegó'], answer: 0, why: '«Cuando» con valor futuro pide presente de subjuntivo.', en: 'Modernise the time clause.' },
          ] },
        ] },
        { title: 'Dónde sobrevive · Where it survives', mascot: '/brand/mascot/speaking.webp', coach: 'Leyes, refranes y fórmulas.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'FÓRMULAS Y REFRANES', question: '¿Dónde lo vas a encontrar hoy?', en: 'It survives in fixed formulas, proverbs, some legal texts and historical documents. Today people sometimes use it on purpose, for a solemn or ironic effect.', formula: ['sea cual fuere / sea como fuere / venga lo que viniere', 'adonde fueres, haz lo que vieres'],
            meaning: 'Sobrevive en **fórmulas fijas**, **refranes**, algunos **textos jurídicos** y documentos históricos. A veces se usa hoy con intención **solemne o irónica**.',
            examples: [
              { es: '[[Sea cual fuere|orange]] el motivo, la sala se cierra a las ocho. (= sea cual sea)', en: 'Whatever the reason, the room closes at eight.' },
              { es: '[[Sea como fuere|orange]], tenemos que decidir hoy. (= de todos modos)', en: 'Be that as it may, we have to decide today.' },
              { es: '[[Adonde fueres, haz lo que vieres|orange]]. (= adáptate a las costumbres del lugar)', en: 'When in Rome, do as the Romans do.' },
              { es: 'El que [[causare|violet]] un daño a otro estará obligado a repararlo. (texto legal)', en: 'Whoever causes harm to another is obliged to repair it. (Legal text.)' },
            ] },
          { kind: 'tip', icon: '⚖', title: 'En los textos legales · In legal texts', text: 'Varios códigos legales todavía redactan así: «El que **matare** a otro…», «Si el deudor **no pagare**…». Al leerlos, piensa en «el que mate», «si no paga».', en: 'Several legal codes are still drafted this way («El que matare…», «Si el deudor no pagare…»). When you read them, think «el que mate», «si no paga».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Sea como fuere, mañana empezamos.» ¿Qué significa?', options: ['De todos modos, mañana empezamos.', 'Si es posible, mañana empezamos.', 'Ayer empezamos.'], answer: 0, why: '«Sea como fuere» = sea como sea, de cualquier manera.', en: 'What does «sea como fuere» mean in this sentence?' },
            { prompt: '«Adonde fueres, haz lo que vieres» aconseja…', options: ['adaptarse a las costumbres del lugar', 'no viajar', 'mirar antes de cruzar'], answer: 0, why: 'Es un refrán: donde vayas, haz lo que veas hacer.', en: 'What does this proverb advise?' },
          ] },
        ] },
        { title: 'Cómo leerlo y reformularlo · How to read and reword it', mascot: '/brand/mascot/seated.webp', coach: 'Tres preguntas antes de modernizar.', blocks: [
          { kind: 'decide', title: 'Encuentras una forma en -re en un texto · You find a form ending in -re in a text', steps: [
            { q: '¿Lleva tilde en la última sílaba (-rá)?', yes: 'Es **futuro de indicativo**: «[[llegará|blue]]». Afirma o predice.', no: 'next' },
            { q: '¿Es una fórmula fija o un refrán (sea cual fuere, sea como fuere)?', yes: 'Interprétala en bloque: «[[sea cual fuere|orange]]» = sea cual sea.', no: 'next' },
            { q: '¿Va tras «quien», «el que», «cuando» o «donde»?', yes: 'Moderniza con **presente de subjuntivo**: quien [[tenga|teal]], cuando [[llegue|teal]].', no: 'Si va tras «si», moderniza con **presente de indicativo**: «si alguien infringe la norma».' },
          ] },
          { kind: 'tip', icon: '🗂', title: 'Conservar y explicar · Keep and explain', text: 'Al publicar una fuente, lo habitual es **conservar** la forma original en la imagen o la cita y **explicar** al lado su sentido en español actual.', en: 'When publishing a source, the usual practice is to keep the original form in the image or quotation and explain its meaning in modern Spanish alongside it.' },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Errores de lectura y de modernización.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno explica qué información cambia en cada versión incorrecta antes de que muestres la corrección.', self: 'Lee cada frase, piensa qué falla y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: '«Llegare» es una errata: falta la tilde de «llegará».', right: '«Llegare» es futuro de subjuntivo; «llegará», futuro de indicativo.', why: 'Son formas distintas, con acento y modo distintos.' },
            { wrong: 'Quien tendrá dudas, que pregunte al encargado.', right: 'Quien tenga dudas, que pregunte al encargado.', why: 'La modernización correcta es el presente de subjuntivo.' },
            { wrong: '«Quien tuviere dudas» = «La persona que tuvo dudas».', right: '«Quien tuviere dudas» = «Cualquiera que tenga dudas».', why: 'La fuente no habla de un hecho pasado, sino de una situación eventual.' },
            { wrong: '«Sea cual fuere el motivo» = «El motivo fue cualquiera».', right: '«Sea cual fuere el motivo» = «Sea cual sea el motivo».', why: '«Fuere» no es un pasado: la fórmula admite cualquier motivo.' },
            { wrong: 'Aviso nuevo del museo: «Quien desee visitar la sala, llamare antes».', right: 'Aviso nuevo del museo: «Quien desee visitar la sala, que llame antes».', why: 'No produzcas formas en -re en textos actuales; además, aquí hace falta una instrucción.' },
          ] },
          { kind: 'teacher', text: 'Pide al alumno que busque un refrán o una fórmula con futuro de subjuntivo en su entorno (un juramento, un reglamento, un código) y que lo explique en español actual.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El futuro de subjuntivo en textos reales', coach: 'Toca las expresiones marcadas.',
      steps: [
        { title: 'El reglamento del museo · The museum regulation', blocks: [
          { kind: 'guide', text: { teacher: 'Lean la conversación con papeles. Después, el alumno toca cada expresión y explica qué forma es y cómo se diría hoy.', self: 'Lee la conversación. Antes de tocar cada expresión marcada, decide qué forma es.' } },
          { kind: 'explore', title: 'Digitalizar sin confundir · Digitising without confusion', setting: 'Lucía, editora del museo, y Andrés, un voluntario, revisan el reglamento de la sala de lectura antes de publicarlo en la web. (The museum editor and a volunteer review the reading-room regulation before putting it on the website.)', lines: [
            { who: 'Andrés', text: 'Lucía, en el reglamento hay erratas: «Cuando [[llegare|violet]] un nuevo catálogo». Le falta la tilde.', en: 'Lucía, the regulation has typos: «Cuando llegare un nuevo catálogo». It’s missing the accent.' },
            { who: 'Lucía', text: 'No es una errata. Es futuro de subjuntivo. Si fuera futuro de indicativo diría «[[llegará|blue]]», con otro acento y otro sentido.', en: 'It isn’t a typo. It’s the future subjunctive. If it were the future indicative it would say «llegará», with a different stress and a different meaning.' },
            { who: 'Andrés', text: '¿Y qué sentido tiene?', en: 'So what does it mean?' },
            { who: 'Lucía', text: 'Contempla una llegada posible, no confirmada. Hoy diríamos «cuando [[llegue|teal]] un nuevo catálogo».', en: 'It envisages a possible arrival, not a confirmed one. Today we’d say «cuando llegue un nuevo catálogo».' },
            { who: 'Andrés', text: 'Entonces «Quien [[tuviere|violet]] dudas, pregunte al encargado» sería…', en: 'So «Quien tuviere dudas, pregunte al encargado» would be…' },
            { who: 'Lucía', text: '«Quien [[tenga|teal]] dudas, que pregunte». Cualquier visitante, no uno concreto.', en: '«Quien tenga dudas, que pregunte». Any visitor, not a specific one.' },
            { who: 'Andrés', text: 'Y al final: «[[Sea cual fuere|orange]] el motivo, no se prestarán libros fuera de la sala».', en: 'And at the end: «Whatever the reason, no books will be lent outside the room».' },
            { who: 'Lucía', text: 'Esa es una fórmula fija: sea cual sea el motivo. Todavía se oye en discursos formales.', en: 'That’s a fixed formula: whatever the reason may be. You still hear it in formal speeches.' },
            { who: 'Andrés', text: '¿Cambiamos el texto original, entonces?', en: 'So do we change the original text?' },
            { who: 'Lucía', text: 'No. Dejamos la imagen del reglamento tal cual y, al lado, una explicación en español actual.', en: 'No. We leave the image of the regulation as it is and put an explanation in modern Spanish next to it.' },
          ], notes: {
            'llegare': '**Futuro de subjuntivo**: llana, sin tilde. Presenta una llegada eventual.',
            'llegará': '**Futuro de indicativo**: aguda, con tilde. Afirmaría que el catálogo va a llegar.',
            'llegue': '**Equivalente actual**: presente de subjuntivo tras «cuando» con valor futuro.',
            'tuviere': '**Futuro de subjuntivo** de «tener», formado desde «tuvieron». Habla de cualquier persona que tenga dudas.',
            'tenga': '**Equivalente actual**: presente de subjuntivo tras «quien» con valor eventual.',
            'Sea cual fuere': '**Fórmula heredada**: equivale a «sea cual sea». No habla de un motivo pasado.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué Andrés cree que hay erratas?', options: ['Piensa que a «llegare» le falta la tilde.', 'Piensa que el reglamento está en otro idioma.', 'Piensa que faltan páginas.'], answer: 0, why: '«Le falta la tilde», dice Andrés.', en: 'Why does the volunteer think there are typos?' },
            { prompt: '¿Qué decide Lucía sobre el texto original?', options: ['Conservar la imagen y añadir una explicación actual.', 'Corregir las formas en -re.', 'No publicar el reglamento.'], answer: 0, why: '«Dejamos la imagen del reglamento tal cual y, al lado, una explicación en español actual».', en: 'What does Lucía decide about the original text?' },
            { prompt: '«Quien tuviere dudas» se refiere a…', options: ['cualquier visitante con dudas', 'un visitante concreto', 'el encargado'], answer: 0, why: 'Lucía: «Cualquier visitante, no uno concreto».', en: 'Who does «Quien tuviere dudas» refer to?' },
          ] },
        ] },
        { title: 'En clase de Derecho · In a law class', blocks: [
          { kind: 'explore', title: 'Leer un artículo legal · Reading a legal article', setting: 'Mateo, estudiante de Derecho, le explica a su compañera Ana un artículo de un código civil antiguo. (A law student explains an article from an old civil code to a classmate.)', lines: [
            { who: 'Ana', text: 'No entiendo esta frase: «El que [[causare|violet]] un daño a otro estará obligado a repararlo».', en: 'I don’t understand this sentence: «Whoever causes harm to another shall be obliged to repair it».' },
            { who: 'Mateo', text: 'Es como decir «el que [[cause|teal]] un daño». Cualquier persona, en cualquier caso futuro.', en: 'It’s like saying «el que cause un daño». Anyone, in any future case.' },
            { who: 'Ana', text: '¿Y esta? «Si el deudor no [[pagare|violet]] en el plazo, se cobrarán intereses».', en: 'And this one? «If the debtor fails to pay within the deadline, interest will be charged».' },
            { who: 'Mateo', text: 'Hoy diríamos «si el deudor no paga». Con «si» se moderniza con presente de indicativo.', en: 'Today we’d say «si el deudor no paga». After «si» you modernise with the present indicative.' },
            { who: 'Ana', text: 'Mi abuelo siempre dice «[[adonde fueres, haz lo que vieres|orange]]». ¿Es lo mismo?', en: 'My grandfather always says «adonde fueres, haz lo que vieres». Is it the same thing?' },
            { who: 'Mateo', text: 'La misma forma, pero en un refrán: donde vayas, haz lo que veas.', en: 'The same form, but in a proverb: wherever you go, do what you see others do.' },
            { who: 'Ana', text: 'Entonces no es solo cosa de abogados.', en: 'So it isn’t just a lawyers’ thing.' },
            { who: 'Mateo', text: 'No, pero nadie lo usa para hablar del fin de semana. [[Sea como fuere|orange]], hay que saber leerlo.', en: 'No, but nobody uses it to talk about the weekend. Be that as it may, you need to be able to read it.' },
          ], notes: {
            'causare': '**Futuro de subjuntivo** de «causar», típico de la redacción jurídica tradicional.',
            'cause': '**Equivalente actual**: presente de subjuntivo tras «el que» con valor eventual.',
            'pagare': '**Futuro de subjuntivo** tras «si». Hoy: «si no paga».',
            'adonde fueres, haz lo que vieres': '**Refrán**: dos formas de futuro de subjuntivo (fueres, vieres) que sobreviven fosilizadas.',
            'Sea como fuere': '**Fórmula heredada**: de todos modos, sea como sea. Mateo la usa con un toque irónico.',
          } },
          { kind: 'teacher', text: 'Pregunta: «¿Conoces alguna fórmula de juramento o algún refrán con formas en -re?». Si el alumno no conoce ninguna, menciona «sea lo que fuere» o «venga lo que viniere».' },
        ] },
        { title: '¿Qué forma es? · Which form is it?', blocks: [
          { kind: 'classify', title: 'Clasifica las formas de las dos conversaciones · Classify the forms from the two conversations', categories: [
            { id: 'fsubj', label: 'Futuro de subjuntivo', tone: 'violet' },
            { id: 'actual', label: 'Equivalente actual', tone: 'teal' },
            { id: 'find', label: 'Futuro de indicativo', tone: 'blue' },
          ], items: [
            { text: 'Cuando llegare un nuevo catálogo…', answer: 'fsubj', why: '«Llegare»: forma en -re, sin tilde.' },
            { text: 'El catálogo llegará el lunes.', answer: 'find', why: '«Llegará», con tilde, afirma un hecho futuro.' },
            { text: 'Quien tenga dudas, que pregunte.', answer: 'actual', why: 'Presente de subjuntivo: la versión actual de «tuviere».' },
            { text: 'El que causare un daño a otro…', answer: 'fsubj', why: '«Causare»: futuro de subjuntivo en un texto legal.' },
            { text: 'No se prestarán libros fuera de la sala.', answer: 'find', why: '«Prestarán»: futuro de indicativo.' },
            { text: 'Si el deudor no paga en el plazo…', answer: 'actual', why: 'Presente de indicativo tras «si»: versión actual de «pagare».' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Reconoce la forma y piensa en su función.',
      steps: [
        { title: 'Interpreta según el contexto · Interpret according to the context', blocks: [
          { kind: 'choice', items: [
            { context: 'Reglamento: «Cuando llegare un nuevo catálogo, se colocará en la mesa de consulta».', prompt: '¿Qué presenta «llegare»?', options: ['Una llegada eventual o pendiente.', 'Una llegada ya confirmada.', 'Una promesa en futuro de indicativo.'], answer: 0, why: 'El futuro de subjuntivo contempla una situación posible.', en: 'A regulation. What does «llegare» present?' },
            { context: 'Código antiguo: «El que hallare un objeto perdido deberá entregarlo a la autoridad».', prompt: '¿A quién se refiere?', options: ['A cualquier persona que encuentre un objeto.', 'A una persona concreta que ya lo encontró.', 'A la autoridad.'], answer: 0, why: '«El que hallare» = cualquiera que encuentre.', en: 'An old code. Who does it refer to?' },
            { context: 'Discurso de un rector: «Sea cual fuere el resultado, seguiremos adelante».', prompt: '¿Qué significa «sea cual fuere el resultado»?', options: ['Sea cual sea el resultado.', 'El resultado fue malo.', 'Si el resultado es bueno.'], answer: 0, why: 'Fórmula heredada: admite cualquier resultado.', en: 'A rector’s speech. What does «sea cual fuere el resultado» mean?' },
            { context: 'Contrato antiguo: «Si el inquilino no abonare la renta, el contrato quedará rescindido».', prompt: 'Versión actual de la condición:', options: ['Si el inquilino no paga la renta…', 'Si el inquilino no pagará la renta…', 'Si el inquilino no pagó la renta…'], answer: 0, why: 'Tras «si», el futuro de subjuntivo se moderniza con presente de indicativo.', en: 'An old contract. Choose the modern version of the condition.' },
            { context: 'Un mensaje en el chat del equipo.', prompt: '¿Qué frase es natural hoy?', options: ['Cuando llegue el paquete, avísame.', 'Cuando llegare el paquete, avísame.', 'Cuando llegará el paquete, avísame.'], answer: 0, why: 'En un mensaje actual: «cuando» + presente de subjuntivo.', en: 'A message in the team chat. Which sentence is natural today?' },
            { context: 'Refrán: «Adonde fueres, haz lo que vieres».', prompt: '¿Qué verbos están en futuro de subjuntivo?', options: ['fueres y vieres', 'haz', 'ninguno'], answer: 0, why: '«Fueres» (ir) y «vieres» (ver) terminan en -res; «haz» es imperativo.', en: 'A proverb. Which verbs are in the future subjunctive?' },
          ] },
        ] },
        { title: 'Compara los significados · Compare the meanings', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿Cómo se distinguen «llegare» y «llegará»?', options: ['Solo por una errata: son la misma forma.', '«Llegare» es imperativo y «llegará», presente.', '«Llegare» es futuro de subjuntivo; «llegará», futuro de indicativo.'], answer: 2, why: 'Terminación, acento y modo distintos.', en: 'How do you tell «llegare» and «llegará» apart?' },
            { prompt: '¿Qué paráfrasis mantiene la persona eventual de «Quien tuviere dudas, pregunte al encargado»?', options: ['Quien tenga dudas, que pregunte al encargado.', 'La persona que tuvo dudas ya preguntó al encargado.', 'Todos tendrán dudas y preguntarán al encargado.'], answer: 0, why: 'Las otras afirman un hecho pasado o generalizan.', en: 'Which paraphrase keeps the «anyone who might» meaning of the original?' },
            { prompt: '¿Qué nota ayuda mejor a un visitante con «sea cual fuere el motivo»?', options: ['Fórmula heredada; aquí equivale a «sea cual sea el motivo».', 'Toda forma con «fuere» se cambia por «fue».', 'Demuestra que el motivo ocurrió en el pasado.'], answer: 0, why: 'La modernización depende de la función, no de una sustitución mecánica.', en: 'Which note best helps a visitor with «sea cual fuere el motivo»?' },
            { prompt: '«Cuando hubiere terminado la sesión, se cerrará el acta.» ¿Qué versión actual mantiene el sentido?', options: ['Cuando haya terminado la sesión, se cerrará el acta.', 'Cuando habrá terminado la sesión, se cerrará el acta.', 'Cuando hubo terminado la sesión, se cerrará el acta.'], answer: 0, why: 'El compuesto «hubiere + participio» se moderniza con el pretérito perfecto de subjuntivo: «haya terminado».', en: 'Which modern version keeps the meaning of this compound form?' },
            { prompt: '«Si así no lo hiciereis…» (fórmula de juramento). ¿Qué persona es «hiciereis»?', options: ['vosotros', 'nosotros', 'ellos'], answer: 0, why: 'La terminación -reis corresponde a vosotros.', en: 'An oath formula. Which person is «hiciereis»?' },
          ] },
        ] },
        { title: 'Completa la conversación · Complete the conversation', blocks: [
          { kind: 'chat-fill', title: 'Preparando la nota para visitantes · Preparing the note for visitors', lines: [
            { who: 'Andrés', text: '¿Cómo explicamos «Quien tuviere dudas, pregunte al encargado»?' },
            { who: 'Lucía', text: 'Así: «Quien ___ dudas, que pregunte al encargado».', options: ['tenga', 'tendrá', 'tuvo'], answer: 0, why: 'Presente de subjuntivo: una persona eventual.' },
            { who: 'Andrés', text: '¿Y «Cuando llegare un nuevo catálogo»?' },
            { who: 'Lucía', text: '«Cuando ___ un nuevo catálogo, se colocará en la mesa».', options: ['llegue', 'llegará', 'llegara'], answer: 0, why: '«Cuando» con valor futuro: presente de subjuntivo.' },
            { who: 'Andrés', text: 'Un visitante dirá que «llegare» está mal escrito.' },
            { who: 'Lucía', text: 'Pondremos una nota: «Llegare no es una errata de ___: es otro tiempo verbal».', options: ['llegará', 'llegue', 'llegaba'], answer: 0, why: 'La confusión típica es con el futuro de indicativo, que lleva tilde.' },
            { who: 'Andrés', text: 'Y para «sea cual fuere el motivo»…' },
            { who: 'Lucía', text: 'Paráfrasis: «sea cual ___ el motivo».', options: ['sea', 'fue', 'será'], answer: 0, why: 'La fórmula actual repite el presente de subjuntivo: «sea cual sea».' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Nota del museo: «Llegare» es una errata de «llegará».', ok: false, options: ['Nota del museo: «llegare» es futuro de subjuntivo, no una errata.', 'Nota del museo: «llegare» es imperfecto de subjuntivo.', 'Nota del museo: «llegare» es presente de indicativo.'], answer: 0, why: 'La forma en -re es otro tiempo verbal.' },
            { sentence: 'Versión actual: «Quien tenga dudas, que pregunte al encargado».', ok: true, why: 'Correcta: presente de subjuntivo con valor eventual.' },
            { sentence: 'Versión actual: «Cuando llegará el catálogo, se colocará en la mesa».', ok: false, options: ['Cuando llegue el catálogo, se colocará en la mesa.', 'Cuando llegó el catálogo, se colocará en la mesa.', 'Cuando llegare el catálogo, se colocara en la mesa.'], answer: 0, why: 'Tras «cuando» con valor futuro, presente de subjuntivo.' },
            { sentence: '«Sea como fuere» significa «de todos modos».', ok: true, why: 'Correcta: es una fórmula fija equivalente a «sea como sea».' },
            { sentence: 'Versión actual de «Si alguien infringiere la norma»: «Si alguien infringiera la norma».', ok: false, options: ['Si alguien infringe la norma.', 'Si alguien infringirá la norma.', 'Si alguien infringió la norma.'], answer: 0, why: 'En un reglamento actual, la condición futura va en presente de indicativo.' },
            { sentence: 'Aviso nuevo: «Quien deseare reservar, llame al museo».', ok: false, options: ['Quien desee reservar, que llame al museo.', 'Quien deseará reservar, llame al museo.', 'Quien deseó reservar, llamó al museo.'], answer: 0, why: 'En un aviso actual no se usa el futuro de subjuntivo.' },
          ] },
        ] },
        { title: 'Reformula · Reword', blocks: [
          { kind: 'build', title: 'Ordena la versión actual · Put the modern version in order', items: [
            { tiles: ['Quien', 'tenga', 'dudas', 'que', 'pregunte'], accept: ['Quien tenga dudas que pregunte'], en: 'Anyone who has questions should ask.' },
            { tiles: ['Cuando', 'llegue', 'el', 'catálogo', 'se', 'colocará', 'en', 'la', 'mesa'], accept: ['Cuando llegue el catálogo se colocará en la mesa', 'El catálogo se colocará en la mesa cuando llegue'], en: 'When the catalogue arrives, it will be placed on the table.' },
            { tiles: ['Sea', 'cual', 'sea', 'el', 'motivo'], accept: ['Sea cual sea el motivo'], en: 'Whatever the reason.' },
            { tiles: ['Si', 'el', 'deudor', 'no', 'paga', 'habrá', 'intereses'], accept: ['Si el deudor no paga habrá intereses', 'Habrá intereses si el deudor no paga'], en: 'If the debtor doesn’t pay, there will be interest.' },
          ] },
          { kind: 'rewrite', title: 'Moderniza sin cambiar el sentido · Modernise without changing the meaning', items: [
            { prompt: 'Quien tuviere dudas, pregunte al encargado.', instruction: 'Escríbelo como instrucción actual.', accept: ['Quien tenga dudas, que pregunte al encargado', 'Quien tenga dudas que pregunte al encargado', 'Quien tenga dudas, pregunte al encargado', 'Si tiene dudas, pregunte al encargado', 'Si tienes dudas, pregunta al encargado'] },
            { prompt: 'Cuando llegare un nuevo catálogo, se colocará en la mesa de consulta.', instruction: 'No afirmes que ya llegó.', accept: ['Cuando llegue un nuevo catálogo, se colocará en la mesa de consulta', 'Cuando llegue un nuevo catálogo se colocará en la mesa de consulta'] },
            { prompt: 'El que hallare un objeto perdido deberá entregarlo.', instruction: 'Empieza con «Quien…».', accept: ['Quien halle un objeto perdido deberá entregarlo', 'Quien encuentre un objeto perdido deberá entregarlo', 'Quien halle un objeto perdido, deberá entregarlo', 'Quien encuentre un objeto perdido, deberá entregarlo'] },
            { prompt: 'Sea como fuere, abriremos el lunes.', instruction: 'Usa la fórmula actual.', accept: ['Sea como sea, abriremos el lunes', 'Sea como sea abriremos el lunes', 'De todos modos, abriremos el lunes', 'De todos modos abriremos el lunes'] },
          ] },
        ] },
        { title: 'Clasifica las formas · Classify the forms', blocks: [
          { kind: 'classify', title: '¿Qué tiempo es? · Which tense is it?', categories: [
            { id: 'fsubj', label: 'Futuro de subjuntivo (-re)', tone: 'violet' },
            { id: 'find', label: 'Futuro de indicativo (-rá)', tone: 'blue' },
            { id: 'imp', label: 'Imperfecto de subjuntivo (-ra)', tone: 'neutral' },
          ], items: [
            { text: 'pudiere', answer: 'fsubj', why: 'Terminación -re, desde «pudieron».' },
            { text: 'podrá', answer: 'find', why: 'Futuro de indicativo, con tilde.' },
            { text: 'pudiera', answer: 'imp', why: 'Terminación -ra: imperfecto de subjuntivo.' },
            { text: 'hicieren', answer: 'fsubj', why: 'Terminación -ren, desde «hicieron».' },
            { text: 'harán', answer: 'find', why: 'Futuro de indicativo de «hacer».' },
            { text: 'dijera', answer: 'imp', why: 'Terminación -ra.' },
            { text: 'fueres', answer: 'fsubj', why: 'Terminación -res: tú, futuro de subjuntivo.' },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'La explicación para visitantes', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'La explicación para visitantes · The explanation for visitors', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno anota qué propone la editora para la imagen, para el texto y para el personal.', self: 'Escucha una vez para la idea general. En la segunda, anota qué se conserva y qué se moderniza. Puedes bajar la velocidad.' } },
          { kind: 'listen', title: 'La editora revisa el reglamento · The editor reviews the regulation', channel: 'NOTA DE VOZ · EQUIPO DE DIGITALIZACIÓN', src: '/audio/grammar-classroom/155.mp3',
            before: 'La editora del museo ha revisado la página del reglamento antiguo. ¿Crees que propondrá cambiar el original o explicarlo? (The museum editor has reviewed the page of the old regulation. Do you think she will suggest changing the original or explaining it?)',
            gist: { prompt: '¿Cuál es el objetivo del equipo, según la editora?', options: ['Ayudar a leer el archivo, sin pedir que se usen las formas antiguas.', 'Corregir las erratas del reglamento.', 'Enseñar al personal a hablar con formas antiguas.'], answer: 0, why: '«No necesitamos pedir al personal que la use al hablar. Nuestro objetivo es ayudar a leer el archivo».', en: 'According to the editor, what is the team’s goal?' },
            details: [
              { prompt: '¿Qué debe conservar la imagen?', options: ['«Tuviere» y «llegare».', 'Solo la fecha.', 'Las correcciones modernas.'], answer: 0, why: '«Me parece importante que la imagen conserve tuviere y llegare, porque forman parte de la fuente».', en: 'What should the image keep?' },
              { prompt: '¿Qué formas usaría en el texto para visitantes?', options: ['«Tenga» y «llegue».', '«Tendrá» y «llegará».', '«Tuvo» y «llegó».'], answer: 0, why: '«En el texto para visitantes usaría tenga y llegue dentro de las mismas relaciones».', en: 'Which forms would she use in the text for visitors?' },
              { prompt: 'Según la editora, ¿la primera frase habla de una persona concreta?', options: ['No: permite que cualquier visitante en esa situación pregunte.', 'Sí: de un visitante que ya tenía dudas.', 'Sí: del encargado.'], answer: 0, why: '«No señala a una persona concreta que ya tiene dudas; permite que cualquier visitante en esa situación pregunte».', en: 'According to the editor, is the first sentence about a specific person?' },
              { prompt: '¿Qué dice sobre la ausencia de tilde en «llegare»?', options: ['Que no es un descuido en el original.', 'Que hay que añadirla.', 'Que es un rasgo regional.'], answer: 0, why: '«La ausencia de tilde no es un descuido en el original».', en: 'What does she say about the missing accent in «llegare»?' },
              { prompt: '¿Qué propone si la explicación parece demasiado técnica?', options: ['Añadir un ejemplo actual de la misma situación.', 'Eliminar la explicación.', 'Usar solo el nombre del tiempo verbal.'], answer: 0, why: '«Añadamos un ejemplo actual de la misma situación y dejemos el nombre del tiempo verbal como apoyo».', en: 'What does she suggest if the explanation seems too technical?' },
            ],
            transcript: 'Hola, revisé la página del reglamento. Me parece importante que la imagen conserve [[tuviere|violet]] y [[llegare|violet]], porque forman parte de la fuente. En el texto para visitantes usaría [[tenga|teal]] y [[llegue|teal]] dentro de las mismas relaciones. La primera frase no señala a una persona concreta que ya tiene dudas; permite que cualquier visitante en esa situación pregunte. La segunda contempla la llegada de un catálogo nuevo, no afirma que ya haya llegado. También aclararía la diferencia entre [[llegare|violet]] y [[llegará|blue]], porque la ausencia de tilde no es un descuido en el original. Para la fórmula «[[sea cual fuere|orange]]» podemos dar una paráfrasis breve y comentar su tono heredado. No necesitamos pedir al personal que la use al hablar. Nuestro objetivo es ayudar a leer el archivo. Si la explicación parece demasiado técnica, añadamos un ejemplo actual de la misma situación y dejemos el nombre del tiempo verbal como apoyo para quien quiera profundizar.',
            reply: { teacher: 'El alumno responde en voz alta como Lucía: propone un ejemplo actual para la nota y decide si incluir el nombre del tiempo verbal.', self: 'Responde a la editora en un mensaje breve: propón un ejemplo actual para la nota de los visitantes y di si incluirías el nombre del tiempo verbal.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Textos antiguos, lectores de hoy', coach: 'Una pregunta por vez. Interpreta y opina.',
      steps: [
        { title: 'Textos antiguos, lectores de hoy · Old texts, today’s readers', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. El alumno interpreta y reformula; las formas en -re aparecen solo como citas.', self: 'Responde cada pregunta en voz alta. Explica en español actual y cita las formas antiguas entre comillas.' } },
          { kind: 'talk', cards: [
            { q: '¿Qué documentos antiguos o muy formales lees o has leído: contratos, reglamentos, textos religiosos, leyes? · Which old or very formal documents do you read (contracts, rules, laws)?', followUps: ['¿Qué te costó entender?', '¿Por qué crees que se escriben así?', '¿Te parece necesario ese estilo?'], phrases: ['Me costó entender…', 'Está redactado de forma…', 'Supongo que lo hacen para…'], hint: 'Piensa en un documento concreto: un contrato de alquiler, una normativa, un juramento.', example: 'Cuando firmé el contrato de mi apartamento encontré frases como «si el inquilino no abonare la renta». Al principio pensé que era una errata, pero era un tiempo verbal antiguo.', next: 'Vamos a interpretar una frase.' },
            { q: 'Explica con tus palabras: «Quien tuviere dudas, pregunte al encargado». ¿A quién se dirige? · Explain this sentence in your own words. Who is it addressed to?', followUps: ['¿Cómo lo escribirías en un cartel actual?', '¿Qué cambiaría si dijera «quien tuvo dudas»?', '¿Qué tono tiene el original?'], phrases: ['Se dirige a cualquiera que…', 'Hoy escribiría «quien [[tenga|teal]]…»', 'Suena…'], hint: 'Fíjate en que no habla de una persona concreta.', example: 'Se dirige a cualquier visitante que pueda tener dudas. En un cartel actual pondría «Si tienes dudas, pregunta al encargado». El original suena solemne y algo distante.', next: 'Ahora, los refranes.' },
            { q: '¿Conoces el refrán «Adonde fueres, haz lo que vieres»? ¿Estás de acuerdo con él? · Do you know this proverb? Do you agree with it?', followUps: ['¿Te ha pasado en un viaje?', '¿Hay límites para adaptarse?', '¿Existe un refrán parecido en tu idioma?'], phrases: ['Significa que…', 'Estoy de acuerdo hasta cierto punto…', 'En mi idioma se dice…'], hint: 'Primero explica el refrán en español actual; después da tu opinión con un ejemplo.', example: 'Significa que debes adaptarte a las costumbres del lugar. Estoy de acuerdo hasta cierto punto: en Japón me acostumbré a no dejar propina, pero no haría algo contra mis principios.', next: 'Pasemos a las fórmulas fijas.', teacher: 'Si tu alumno conoce un refrán equivalente en su lengua, lo traduce literalmente y lo compara.' },
            { q: '¿En qué situaciones has oído «sea como fuere» o «sea cual fuere»? ¿Qué efecto produce? · Where have you heard these formulas, and what effect do they have?', followUps: ['¿Quién lo dijo?', '¿Lo dirías tú?', '¿Qué alternativa actual prefieres?'], phrases: ['Lo oí en…', 'Da un tono…', 'Prefiero «[[sea como sea|teal]]»…'], hint: 'Piensa en discursos, noticias o películas de época.', example: 'Lo oí en un discurso de graduación: «sea cual fuere el camino que elijan». Da un tono solemne. Yo diría «sea cual sea», que suena más natural.', next: 'Ahora, una decisión editorial.' },
            { q: 'Si dirigieras un museo, ¿publicarías los documentos antiguos tal cual, modernizados o con las dos versiones? · If you ran a museum, how would you publish old documents?', followUps: ['¿Para qué público?', '¿Qué se pierde al modernizar?', '¿Y si el texto es muy largo?'], phrases: ['Publicaría…', 'Conservaría la fuente y…', 'Para el público general…'], hint: 'Justifica pensando en dos públicos: investigadores y visitantes.', example: 'Publicaría las dos versiones: la imagen original para los investigadores y una explicación breve para el público general. Si el texto fuera muy largo, solo explicaría los fragmentos difíciles.', next: 'Para terminar, el cambio del idioma.' },
            { q: '¿Te parece bien que el idioma pierda formas como el futuro de subjuntivo? ¿Qué otras formas crees que pueden desaparecer? · Is it fine for a language to lose forms like this one?', followUps: ['¿El idioma se empobrece o se simplifica?', '¿Pasa lo mismo en tu lengua?', '¿Quién decide qué se conserva?'], phrases: ['Creo que…', 'Es natural que…', 'Lo que importa es…'], hint: 'Distingue entre lo que se pierde en el habla y lo que se conserva en la escritura.', example: 'Creo que es natural: el idioma cambia con sus hablantes. Pero conviene enseñar a reconocer estas formas, porque si no, perdemos acceso a muchos textos.', teacher: 'Puede cerrarse con una comparación entre lenguas: tiempos o pronombres que ya solo aparecen en textos antiguos.' },
          ], swap: { teacher: 'Al final, el alumno trae una frase con una forma en -re (de un reglamento, una ley o un refrán) y le pide al profesor que la interprete.', self: 'Busca una frase con una forma en -re en un texto real (reglamento, ley, refrán) y escribe su versión actual.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una explicación para visitantes', coach: 'Interpreta, moderniza y justifica.',
      steps: [
        { title: 'Una explicación para visitantes · An explanation for visitors', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribirse en clase o como tarea. Usen la revisión automática y después comprueben que las paráfrasis mantienen la eventualidad de la fuente.', self: 'Escribe tu explicación y toca «Revisar mi texto». Después comprueba: ¿tus paráfrasis presentan situaciones eventuales y no hechos?' } },
          { kind: 'write', title: 'Nota junto a un reglamento antiguo · Note next to an old regulation', situation: 'El museo expone este fragmento: «Quien tuviere dudas, pregunte al encargado. Cuando llegare un nuevo catálogo, se colocará en la mesa de consulta. Sea cual fuere el motivo, no se prestarán libros fuera de la sala». Escribe la nota que acompañará la imagen. (The museum is displaying this passage. Write the note that will go next to the image.)', task: [
            'Identifica las formas en **-re** y explica qué tiempo son.',
            'Explica la diferencia entre «llegare» y «llegará».',
            'Da un **equivalente actual** para cada frase, sin convertirla en un hecho.',
            'Justifica por qué se conserva el original y para quién es la explicación.',
          ], starters: ['«Tuviere» y «llegare» pertenecen al…', 'La primera frase contempla…', 'Hoy diríamos…', '«Llegare» no es una errata de…', 'La fórmula «sea cual fuere» equivale a…', 'Conservamos la imagen original porque…'],
            words: ['eventual', 'fórmula heredada', 'paráfrasis', 'registro', 'fuente', 'equivalente', 'contemplar', 'restringido'],
            model: '«[[Tuviere|violet]]» y «[[llegare|violet]]» pertenecen al futuro de subjuntivo, un tiempo hoy restringido a textos legales, refranes y documentos antiguos. En el reglamento, la primera forma contempla a cualquier visitante que pueda tener dudas; la segunda presenta la llegada eventual de un catálogo, no una llegada confirmada. Hoy escribiríamos «quien [[tenga|teal]] dudas, que pregunte al encargado» y «cuando [[llegue|teal]] un nuevo catálogo, se colocará en la mesa». «Llegare» no es una errata de «[[llegará|blue]]»: son formas de modos distintos. La fórmula «[[sea cual fuere|orange]]» equivale a «sea cual sea». Conservamos la imagen original porque forma parte de la historia del museo, y añadimos esta paráfrasis para que cualquier visitante pueda leerla sin dificultad.',
            minWords: 130 },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'violet', label: 'FUTURO DE SUBJUNTIVO', formula: 'ellos del indefinido − ron + re', example: 'Quien tuviere dudas, pregunte al encargado.', caption: 'Situación eventual. Solo para leer.', en: 'Future subjunctive: a possible situation, looking ahead. For reading only.' },
            { tone: 'teal', label: 'EQUIVALENTE ACTUAL', formula: 'quien / cuando + presente de subjuntivo · si + presente', example: 'Quien tenga dudas, que pregunte.', caption: 'Mantiene la eventualidad.', en: 'Modern equivalent: it keeps the sense of «anyone who might / whenever it may happen».' },
            { tone: 'orange', label: 'FÓRMULAS', formula: 'sea cual fuere · sea como fuere · adonde fueres…', example: 'Sea cual fuere el motivo = sea cual sea el motivo.', caption: 'Se interpretan en bloque.', en: 'Formulas: read them as a whole, like set phrases.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Tres comprobaciones al leer · Three checks when reading', text: '¿Termina en **-re** sin tilde? No es una errata de -rá. ¿Habla de un hecho o de una **situación posible**? Casi siempre, de una posible. ¿Cómo lo dirías hoy? Con **presente de subjuntivo**, o con presente tras «si».', en: 'Does it end in -re with no accent mark? Then it is not a typo for -rá. Does it describe a fact or a possible situation? Almost always a possible one. How would you say it today? With the present subjunctive, or the present after «si».' },
        ] },
        { title: 'Desafío final · Final challenge', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda · Four sentences, no help', items: [
            { prompt: '«El que hiciere trampa será descalificado.» ¿Qué significa?', options: ['Cualquiera que haga trampa será descalificado.', 'Alguien hizo trampa y fue descalificado.', 'Todos harán trampa.'], answer: 0, why: 'Una persona eventual: cualquiera que haga trampa.', en: 'What does this sentence mean?' },
            { prompt: '¿Qué forma es futuro de subjuntivo?', options: ['dijere', 'dirá', 'dijera'], answer: 0, why: 'Terminación -re desde «dijeron».', en: 'Which form is a future subjunctive?' },
            { prompt: 'Versión actual de «Cuando viniere el inspector, se le mostrarán los libros»:', options: ['Cuando venga el inspector, se le mostrarán los libros.', 'Cuando vendrá el inspector, se le mostrarán los libros.', 'Cuando vino el inspector, se le mostrarán los libros.'], answer: 0, why: '«Cuando» con valor futuro: presente de subjuntivo.', en: 'Choose the modern version of this sentence.' },
            { prompt: '¿Dónde es natural hoy el futuro de subjuntivo?', options: ['En refranes y textos legales.', 'En un mensaje a un amigo.', 'En una conversación de trabajo.'], answer: 0, why: 'Sobrevive en fórmulas, refranes y redacción jurídica.', en: 'Where does the future subjunctive sound natural today?' },
          ] },
        ] },
        { title: 'Tus errores y repaso · Your mistakes and review', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué diferencia hay entre “llegare” y “llegará”, y cómo modernizarías “cuando llegare”?». Respuesta: subjuntivo eventual frente a indicativo que afirma; «cuando llegue».' },
        ] },
      ],
    },
  ],
};
