import type { LiveLesson } from '../types';

/**
 * Lesson 506 · C2 · Reformulación moderna de tiempos históricos (course unit G206).
 * Builds on G201 (lesson 154: pretérito anterior), G202 (lesson 155: futuro de
 * subjuntivo) and G205 (lesson 156: futuro perfecto de subjuntivo) without repeating
 * their conjugation. C2 step: synthesis and reformulation. Learners recognise historical
 * forms in legal, chronicle, 19th-century novel and present-day press styles and render
 * them in current Spanish by function: -re after a relative or «cuando» → present
 * subjunctive, after «si» → present indicative; hubiere + participle → haya + participle
 * (si + ha + participle); pretérito anterior → indefinido with apenas / en cuanto;
 * -ra with pluperfect / preterite indicative value in literary and journalistic prose
 * (que publicara = que publicó / había publicado; legitimate, often discouraged by style
 * guides); enclitics on finite verbs (díjole → le dijo, hízose → se hizo; véase is still
 * normal); vosotros / os in old texts vs vosotros (Spain) and ustedes (America) today;
 * fixed formulas that are still alive (sea lo que fuere, érase una vez, ¡habrase visto!,
 * adonde fueres…). Receptive: learners recognise and reformulate; they never produce
 * archaic forms. Ampliación: -ra with conditional value (más te valiera, pudiera ser,
 * quisiera) and reverential «vos» in old texts.
 * Scene: Ediciones Candil prepares «Voces de antaño», an anthology of historical texts
 * from the fictional town of Valdeloma, each with a version in current Spanish for
 * readers in Spain and Latin America. Editor Beatriz Salcedo (Madrid) and adapter Hugo
 * Medina (Mexico City) review the versions. Escuchar: Hugo's audio presentation for the
 * publisher's podcast (es-MX-JorgeNeural, ustedes). Escribir: an editor's note.
 */
export const lesson: LiveLesson = {
  id: 506,
  level: 'C2',
  title: 'Reformulación moderna de tiempos históricos',
  subtitle: 'Reconocer formas antiguas en leyes, crónicas, novelas y prensa, y reformularlas con precisión en el español actual de España y América.',
  legend: [
    { tone: 'violet', label: 'FORMA HISTÓRICA · hiciere, hubiere hecho, hubo llegado, que publicara, díjole' },
    { tone: 'teal', label: 'ESPAÑOL ACTUAL · haga, haya hecho, llegó, que publicó, le dijo' },
    { tone: 'blue', label: 'TRATAMIENTO · vosotros (España) / ustedes (América)' },
    { tone: 'orange', label: 'FÓRMULA VIVA · sea lo que fuere, érase una vez, ¡habrase visto!' },
  ],
  optionNotes: {
    'habrá abonado': '«Habrá abonado» es futuro compuesto de indicativo: prevé o conjetura. Tras «quien» con valor eventual va el subjuntivo: «haya abonado».',
    'hubiera abonado': '«Hubiera abonado» suele remitir a algo pasado o no cumplido. La ordenanza habla de un plazo que todavía puede cumplirse: «haya abonado».',
    'no lo hagan': 'Detrás de «si» condicional no va el presente de subjuntivo: «si no lo hacen».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Leer el pasado, escribir el presente', coach: 'Reconoces la forma antigua y la dices en español de hoy. Recognise it, then say it today.',
      steps: [
        { title: 'Voces de antaño · Voices from the past', blocks: [
          { kind: 'lead', text: 'Ediciones Candil prepara **Voces de antaño**, una antología de textos de Valdeloma, una villa imaginaria: ordenanzas municipales, una crónica antigua, una novela del siglo XIX y reseñas de prensa reciente. Cada texto aparece dos veces: el original y una versión en **español actual** para lectores de España y de América. Beatriz Salcedo, la editora, trabaja en Madrid; Hugo Medina, el adaptador, en Ciudad de México. Ya conoces el pretérito anterior, el futuro de subjuntivo y el futuro perfecto de subjuntivo. Hoy los juntas con otras formas históricas y aprendes a **reformularlas sin cambiar el sentido**. No vas a usarlas: vas a leerlas y a traducirlas al español de hoy.', en: 'A small publisher is preparing an anthology of historical texts from an imaginary town: bylaws, an old chronicle, a 19th-century novel and recent press reviews, each printed with a version in present-day Spanish for readers in Spain and Latin America. You already know the pretérito anterior and the two subjunctive futures; today you combine them with other historical forms and learn to rephrase them without changing the meaning. The goal is reading and rewording, never using these forms yourself.' },
          { kind: 'guide', text: { teacher: 'Tú lees cada fragmento original en voz alta y tu alumno dice qué palabra le suena antigua antes de mirar la versión actual. Después responde a las preguntas.', self: 'Lee cada original en voz alta y señala la forma que suena antigua. Después compárala con la versión actual. (Spot the old-sounding form before you look at the modern version.)' } },
          { kind: 'table', title: 'Cinco fragmentos, cinco registros · Five excerpts, five registers', head: ['Original', 'Español actual', 'Género · Genre'], rows: [
            ['El que [[hiciere|violet]] fuego en el monte será multado.', 'El que [[haga|teal]] fuego en el monte será multado.', 'ordenanza, siglo XIX · bylaw'],
            ['[[Apenas hubo llegado|violet]], [[díjoles|violet]] que el puerto se cerraba.', '[[Apenas llegó|teal]], [[les dijo|teal]] que el puerto se cerraba.', 'crónica · chronicle'],
            ['Doña Elvira, [[que enviudara|violet]] joven, no salía de casa.', 'Doña Elvira, [[que había enviudado|teal]] joven, no salía de casa.', 'novela, siglo XIX · novel'],
            ['Vecinos: [[si así no lo hiciereis|violet]], perderéis el turno de riego.', 'Vecinos: [[si no lo hacen así|teal]], perderán el turno de riego.', 'proclama · proclamation'],
            ['La autora, [[que publicara|violet]] su primera novela en 1990, presenta hoy su nuevo libro.', 'La autora, [[que publicó|teal]] su primera novela en 1990, presenta hoy su nuevo libro.', 'prensa actual · today’s press'],
          ], note: 'No todo lo antiguo está en textos antiguos: la forma en -ra con valor de pasado de indicativo aparece hoy en periódicos y ensayos.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Cuál de los cinco fragmentos puede aparecer en un periódico de esta semana?', options: ['La autora, que publicara su primera novela en 1990…', 'El que hiciere fuego en el monte será multado.', 'Apenas hubo llegado, díjoles que el puerto se cerraba.'], answer: 0, why: 'La forma en -ra con valor de pasado («que publicara» = que publicó) sigue apareciendo en la prensa escrita actual.', en: 'Which excerpt could appear in this week’s newspaper?' },
            { prompt: 'En «El que hiciere fuego…», ¿qué hace la versión actual?', options: ['Cambia el sentido: el fuego ya se ha hecho.', 'Mantiene la persona eventual con presente de subjuntivo.', 'Lo convierte en una predicción con futuro.'], answer: 1, why: '«El que hiciere» = cualquiera que haga fuego, si lo hace. Hoy esa eventualidad se expresa con «el que haga».', en: 'What does the modern version do with “El que hiciere fuego”?' },
          ] },
        ] },
        { title: 'Las formas en -re: ¿quien, cuando o si? · -re forms: who, when or if?', mascot: '/brand/mascot/studying.webp', coach: 'Mira qué hay delante de la forma en -re. Look at what comes before the -re form.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'DE -RE AL ESPAÑOL ACTUAL', question: '¿La forma en -re va detrás de un relativo («quien», «el que», «donde») o de «cuando», o va detrás de «si»?', en: 'The -re future subjunctive does not have a single modern equivalent: the replacement depends on what introduces it. After a relative or cuando it becomes the present subjunctive (el que haga, cuando llegue). After conditional si, Spanish never uses the present subjunctive, so it becomes the present indicative (si reincide). The compound form follows the same split: haya + participle after quien or cuando, ha + participle after si.', formula: ['quien / el que / cuando / donde + hiciere → haga', 'si + hiciere → si hace', 'quien / cuando + hubiere hecho → haya hecho', 'si + hubiere hecho → si ha hecho'],
            meaning: 'La forma en -re no tiene un único equivalente: depende de lo que la introduce. Detrás de un **relativo** o de **cuando**, pasa a **presente de subjuntivo** («el que haga», «cuando llegue»). Detrás de **si** condicional, el español actual no admite presente de subjuntivo: pasa a **presente de indicativo** («si reincide»). La forma compuesta sigue el mismo reparto: **haya** + participio tras «quien» o «cuando»; **ha** + participio tras «si».',
            examples: [
              { es: 'Quien [[causare|violet]] daños en el puente los pagará → Quien [[cause|teal]] daños en el puente los pagará.', en: 'Whoever causes damage to the bridge will pay for it: any person, if it happens.' },
              { es: 'Si el molinero [[no pagare|violet]] el censo, perderá el molino → Si el molinero [[no paga|teal]] el censo, perderá el molino.', en: 'After si, the modern form is the present indicative, never “si no pague”.' },
              { es: 'Cuando el alguacil [[hubiere levantado|violet]] el acta → Cuando el alguacil [[haya levantado|teal]] el acta.', en: 'Once the constable has drawn up the report: the action must be completed first.' },
              { es: 'Si a los ocho días [[no hubiere comparecido|violet]] → Si a los ocho días [[no ha comparecido|teal]].', en: 'If he has not appeared within eight days: si + present perfect indicative.' },
            ] },
          { kind: 'table', title: 'Reformular según el contexto · Rewording by context', head: ['Contexto', 'Original', 'Español actual'], rows: [
            ['relativo eventual', 'Todo vecino que **arrojare** basuras…', 'Todo vecino que **arroje** basuras…'],
            ['temporal futuro', 'Cuando **llegare** el correo…', 'Cuando **llegue** el correo…'],
            ['condicional', 'Si **reincidiere**, la multa se doblará.', 'Si **reincide**, la multa se doblará.'],
            ['anterior a otra acción', 'Quien **hubiere satisfecho** la cuota…', 'Quien **haya pagado** la cuota…'],
            ['condicional compuesta', 'Si **no hubiere comparecido**…', 'Si **no ha comparecido**…'],
          ], note: 'En textos jurídicos, «satisfacer» una cuota o una deuda significa «pagarla». Al modernizar, vigila también el léxico, no solo el verbo.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Si algún vecino no acudiere al concejo, pagará una multa». Versión actual:', options: ['Si algún vecino no acudirá al concejo, pagará una multa.', 'Si algún vecino no acuda al concejo, pagará una multa.', 'Si algún vecino no acude al concejo, pagará una multa.'], answer: 2, why: 'Detrás de «si» condicional, presente de indicativo: «si no acude».', en: 'If any resident fails to attend the council meeting, he will pay a fine.' },
            { prompt: '«Quien hubiere perdido el resguardo no podrá reclamar». Versión actual:', options: ['Quien habrá perdido el resguardo no podrá reclamar.', 'Quien haya perdido el resguardo no podrá reclamar.', 'Quien hubo perdido el resguardo no podrá reclamar.'], answer: 1, why: 'Relativo eventual + acción anterior: «haya perdido».', en: 'Anyone who has lost the receipt will not be able to make a claim.' },
          ] },
        ] },
        { title: 'Pasados de libro · Bookish pasts', mascot: '/brand/mascot/standing.webp', coach: 'Dos formas del pasado que hoy solo lees. Two past forms you only read today.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'PRETÉRITO ANTERIOR', question: '¿Lees «hubo» + participio detrás de «apenas», «no bien», «luego que», «así que» o «cuando»?', en: 'The pretérito anterior marks an action completed immediately before another past action. It is confined to literary and very formal prose. Today the same immediacy is expressed with the simple past and a connector (apenas, en cuanto, tan pronto como) or with después de + infinitive. Llegado que hubo is an even more archaic variant with the same meaning.', formula: ['apenas / no bien / luego que / así que + hubo + participio', '→ apenas / en cuanto / tan pronto como + indefinido', '→ después de + infinitivo', 'llegado que hubo = en cuanto llegó'],
            meaning: 'Presenta una acción **terminada justo antes** de otra acción pasada. Hoy se limita a la prosa literaria o muy formal. El español actual expresa la misma inmediatez con el **pretérito indefinido** y un conector (apenas, en cuanto, tan pronto como) o con «después de» + infinitivo. «**Llegado que hubo**» es una variante aún más arcaica con el mismo sentido.',
            examples: [
              { es: '[[No bien hubo leído|violet]] la carta, rompió a llorar → [[En cuanto leyó|teal]] la carta, rompió a llorar.', en: 'As soon as she read the letter, she burst into tears.' },
              { es: '[[Llegado que hubo|violet]] el virrey, mandó cerrar el puerto → [[En cuanto llegó|teal]] el virrey, mandó cerrar el puerto.', en: 'As soon as the viceroy arrived, he ordered the port closed.' },
            ] },
          { kind: 'concept', tone: 'violet', label: '-RA CON VALOR DE INDICATIVO', question: '¿Lees una forma en -ra en una oración de relativo que cuenta un hecho pasado, sin hipótesis ni deseo?', en: 'In written Spanish, especially literary and journalistic prose, the -ra form sometimes keeps its original indicative value: pluperfect (que había publicado) or, in the press, a plain past (que publicó). It nearly always appears in relative clauses. It is a legitimate usage, since it is the historical meaning of the form, but several newspaper style guides advise against it, especially when it simply replaces the preterite.', formula: ['que publicara en 1990 = que había publicado / que publicó', 'casi siempre en oraciones de relativo', 'lengua escrita: novela, prensa, ensayo'],
            meaning: 'En la lengua escrita, sobre todo literaria y periodística, la forma en -ra conserva a veces su **valor originario de indicativo**: pluscuamperfecto («que había publicado») o, en la prensa, simple pasado («que publicó»). Aparece casi siempre en **oraciones de relativo**. Es un uso legítimo (es el valor histórico de la forma), pero varios libros de estilo recomiendan evitarlo en las noticias, sobre todo cuando equivale a un simple indefinido.',
            examples: [
              { es: 'El puente, [[que diseñara|violet]] un ingeniero francés, cumple un siglo → [[que diseñó|teal]] / [[que había diseñado|teal]].', en: 'The bridge, designed by a French engineer, turns a hundred: a fact, not a hypothesis.' },
            ] },
          { kind: 'compare', title: 'La misma forma, dos valores · Same form, two values', columns: [
            { tone: 'violet', label: 'PASADO DE INDICATIVO', sentence: 'El teatro, que [[inaugurara|violet]] la reina en 1880, reabre sus puertas.', idea: 'Cuenta un hecho: se puede sustituir por «inauguró» o «había inaugurado».', en: 'It reports a fact: you can replace it with an indicative past without changing the meaning.' },
            { tone: 'neutral', label: 'SUBJUNTIVO NORMAL', sentence: 'El alcalde quería que lo inaugurara la reina.', idea: 'Lo exige «quería que»: no se puede sustituir por un indicativo.', en: 'Here the subjunctive is required by “quería que”: no indicative can replace it.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Apenas hubo cerrado la tienda, empezó a llover». Versión actual:', options: ['Apenas cerraba la tienda, empezó a llover.', 'Apenas cerró la tienda, empezó a llover.', 'Apenas cierre la tienda, empezó a llover.'], answer: 1, why: 'Inmediatez entre dos hechos pasados: «apenas» + indefinido.', en: 'As soon as she closed the shop, it started to rain.' },
            { prompt: '«El cantante, que triunfara en los ochenta, actúa hoy en Valdeloma». ¿Qué significa «triunfara»?', options: ['que triunfaría', 'que triunfó / que había triunfado', 'que quizá triunfe'], answer: 1, why: '-ra con valor de indicativo en prensa: cuenta un hecho pasado.', en: 'The singer, who was a hit in the eighties, performs in Valdeloma today.' },
          ] },
        ] },
        { title: 'Pronombres pospuestos y tratamientos · Enclitics and forms of address', mascot: '/brand/mascot/speaking.webp', coach: 'Díjole, hízose, perderéis: pronombre y persona. Pronoun position and person.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'PRONOMBRE DETRÁS DEL VERBO CONJUGADO', question: '¿El pronombre va pegado detrás de un verbo conjugado en indicativo («díjole», «hízose», «sentose»)?', en: 'In older texts and in literary prose up to the early 20th century, the pronoun was often attached to the end of a conjugated verb. Today, with indicative forms, it goes before the verb as a separate word. Attached pronouns remain normal with infinitives, gerunds, imperatives and subjunctives used as commands (véase, siéntese). A few old formulas survive: érase una vez, ¡habrase visto!', formula: ['díjole → le dijo · hízose → se hizo', 'sentose → se sentó · fuese → se fue', 'normal hoy: véase, siéntese, decírselo, diciéndole'],
            meaning: 'En los textos antiguos y en la prosa literaria hasta principios del siglo XX, el pronombre iba a menudo **pegado detrás del verbo conjugado**. Hoy, con formas de indicativo, va **delante y separado**: «le dijo», «se hizo». Detrás sigue siendo normal con infinitivo, gerundio, imperativo y subjuntivo con valor de mandato («**véase** el anexo», «**siéntese**»). Sobreviven algunas fórmulas: «érase una vez», «¡habrase visto!».',
            examples: [
              { es: '[[Hízose|violet]] un gran silencio en la plaza → [[Se hizo|teal]] un gran silencio en la plaza.', en: 'A great silence fell over the square.' },
              { es: '[[Sentose|violet]] junto a la ventana → [[Se sentó|teal]] junto a la ventana.', en: 'She sat down by the window. Older editions spell it “sentóse”; current spelling rules drop the accent.' },
            ] },
          { kind: 'table', title: 'Vosotros y ustedes, entonces y ahora · Then and now', head: ['Texto o zona', 'Plural', 'Ejemplo'], rows: [
            ['textos antiguos (España y América)', '[[vosotros|blue]], os, vuestro', 'Si así no lo hiciereis, se os retirará el turno.'],
            ['España (mayor parte), hoy', '[[vosotros|blue]] de confianza · [[ustedes|blue]] de respeto', 'Si no lo hacéis así, se os retirará el turno.'],
            ['América, Canarias y parte de Andalucía, hoy', '[[ustedes|blue]] para todo plural', 'Si no lo hacen así, se les retirará el turno.'],
          ], note: 'En América, «vosotros» puede aparecer en algunos registros solemnes heredados (textos religiosos, himnos), pero no en el habla. Una edición para lectores de los dos lados suele elegir «ustedes».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Diéronle las llaves del archivo». Versión actual:', options: ['Dieron le las llaves del archivo.', 'Le dieron las llaves del archivo.', 'Le diéronle las llaves del archivo.'], answer: 1, why: 'Con verbo conjugado en indicativo, el pronombre va delante y separado.', en: 'They gave him the keys to the archive.' },
            { prompt: 'Una edición solo para España moderniza «Si así lo hiciereis, os lo agradecerá la villa». ¿Qué versión es la adecuada?', options: ['Si lo hagáis así, os lo agradecerá la villa.', 'Si lo hacéis así, os lo agradecerá la villa.', 'Si lo hacen así, se lo agradecerá la villa.'], answer: 1, why: 'Para España, «vosotros» de confianza: «si lo hacéis», «os».', en: 'Edition for Spain only: which modern version fits?' },
          ] },
        ] },
        { title: '¿Fósil o fórmula viva? · Fossil or living formula?', mascot: '/autoestudio/mascot/noting.webp', coach: 'Antes de modernizar, comprueba si sigue viva. Check whether it is still alive.', blocks: [
          { kind: 'decide', title: 'Encuentras una forma histórica · You find a historical form', steps: [
            { q: '¿Es una fórmula fija que se usa hoy (sea lo que fuere, érase una vez, adonde fueres…)?', yes: 'Consérvala: es viva y da tono. Puedes explicarla en una nota.', no: 'Sigue: tienes que reformularla.' },
            { q: '¿Es una forma en -re o «hubiere» + participio detrás de «si»?', yes: 'Presente de indicativo («si paga») o «ha» + participio («si ha pagado»).', no: 'Sigue.' },
            { q: '¿Es una forma en -re o «hubiere» + participio detrás de un relativo o de «cuando»?', yes: 'Presente de subjuntivo («quien pague») o «haya» + participio («cuando haya pagado»).', no: 'Sigue.' },
            { q: '¿Es «hubo» + participio, una forma en -ra que cuenta un hecho o un pronombre pegado al verbo?', yes: 'Indefinido con «en cuanto / apenas», «había» + participio o indefinido, y pronombre delante.', no: 'Mira el contexto y consulta una gramática.' },
          ] },
          { kind: 'table', title: 'Fórmulas que siguen vivas · Formulas still in use', head: ['Fórmula', 'Sentido', 'Dónde se oye'], rows: [
            ['[[sea lo que fuere|orange]] · [[sea cual fuere|orange]]', 'sea lo que sea · sea cual sea', 'registro formal, escrito y oral'],
            ['[[adonde fueres, haz lo que vieres|orange]]', 'adáptate a las costumbres del lugar', 'refrán'],
            ['[[érase una vez|orange]]', 'había una vez', 'cuentos'],
            ['[[¡habrase visto!|orange]]', '¡qué descaro!', 'exclamación, a menudo irónica'],
          ], note: 'Estas fórmulas no se reformulan: se entienden y, si hace falta, se glosan. Eso no significa que las formas sean productivas: nadie dice hoy «si fueres a Madrid».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En la crónica se lee: «Sea lo que fuere, la villa no se rindió». ¿Qué hace Hugo?', options: ['La conserva: es una fórmula viva en registro formal.', 'La cambia por «Será lo que sea».', 'La cambia por «Fuera lo que fuera».'], answer: 0, why: '«Sea lo que fuere» sigue en uso hoy en registro formal; se puede glosar como «sea lo que sea».', en: 'Whatever the case, the town did not surrender. What does the adapter do with the formula?' },
            { prompt: '¿Cuál de estas formas con pronombre pospuesto es normal en un texto de hoy?', options: ['Hízose de noche.', 'Véase el capítulo tercero.', 'Díjole que esperase.'], answer: 1, why: '«Véase» es un subjuntivo con valor de mandato: el pronombre detrás es la norma actual.', en: 'Which of these is normal in a present-day text? (See chapter three.)' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Errores al modernizar, no al leer. Mistakes when rewording.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada versión equivocada y tu alumno identifica la forma original que había detrás antes de ver la corrección.', self: 'Lee cada versión equivocada y piensa qué forma antigua había en el original. Después mira la corrección. (Work out the original form first.)' } },
          { kind: 'mistakes', title: '¿Dónde falla la versión actual? · Where does the modern version fail?', items: [
            { wrong: 'Si alguien no cumpla el plazo, perderá la plaza.', right: 'Si alguien no cumple el plazo, perderá la plaza.', why: 'Original: «si alguno no cumpliere». Tras «si» condicional, presente de indicativo, nunca presente de subjuntivo.' },
            { wrong: 'Quien no se presentará a la hora será excluido.', right: 'Quien no se presente a la hora será excluido.', why: 'Original: «quien no se presentare». La tilde importa: «-re» no es «-rá». Relativo eventual: presente de subjuntivo.' },
            { wrong: 'Cuando el secretario lo habrá firmado, se archivará.', right: 'Cuando el secretario lo haya firmado, se archivará.', why: 'Original: «cuando lo hubiere firmado». Tras «cuando» con valor futuro: «haya» + participio.' },
            { wrong: 'La novela que publicaría en 1990 fue su mayor éxito.', right: 'La novela que publicó en 1990 fue su mayor éxito.', why: 'Original: «que publicara en 1990». Es un pasado de indicativo; el condicional lo convierte en un futuro visto desde el pasado.' },
            { wrong: 'Apenas haya terminado la misa, salió a la plaza.', right: 'Apenas terminó la misa, salió a la plaza.', why: 'Original: «apenas hubo terminado». Es un pretérito, no un futuro perfecto de subjuntivo: «apenas terminó».' },
            { wrong: 'Dijo le la verdad al juez.', right: 'Le dijo la verdad al juez.', why: 'Original: «díjole». Hoy el pronombre va delante del verbo conjugado, como palabra separada.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Un corrector propone cambiar «quien hubiere solicitado la plaza» por «quien hubiera solicitado la plaza». ¿Tiene razón?', options: ['Sí: «hubiere» es una errata de «hubiera».', 'No: lo actual es «quien haya solicitado la plaza».', 'Sí: las dos formas significan lo mismo.'], answer: 1, why: '«Hubiere» no es una errata: es futuro perfecto de subjuntivo y equivale hoy a «haya solicitado».', en: 'A proofreader wants to replace “hubiere” with “hubiera”. Is he right?' },
            { prompt: '«Si el arrendatario no hubiere pagado a fin de mes…». Versión actual:', options: ['Si el arrendatario no ha pagado a fin de mes…', 'Si el arrendatario no haya pagado a fin de mes…', 'Si el arrendatario no habrá pagado a fin de mes…'], answer: 0, why: 'Tras «si», la forma compuesta pasa a pretérito perfecto de indicativo: «si no ha pagado».', en: 'If the tenant has not paid by the end of the month…' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno explica con sus palabras por qué «si alguno hiciere» y «el que hiciere» no se modernizan igual.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La revisión de la antología', coach: 'Toca cada expresión marcada. Tap each marked expression.',
      steps: [
        { title: 'Beatriz y Hugo revisan las versiones · Reviewing the modern versions', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Beatriz y tu alumno es Hugo. Después tu alumno toca cada expresión marcada y explica por qué se reformula así.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿forma histórica, versión actual, tratamiento o fórmula viva? (Tap each marked expression.)' } },
          { kind: 'explore', title: 'Voces de antaño, segunda revisión', setting: 'Martes por la mañana en Madrid, primera hora en Ciudad de México. Beatriz, la editora, y Hugo, el adaptador, repasan por videollamada las versiones en español actual. Se tratan de tú. (The editor and the adapter go through the modern versions over a video call.)', lines: [
            { who: 'Beatriz', text: 'Empiezo por la ordenanza de 1868: «Todo vecino que [[arrojare|violet]] basuras a la vía pública será multado». Has puesto [[que arroje|teal]]. Me parece bien.', en: 'I’ll start with the 1868 bylaw. You’ve put the present subjunctive there. That works for me.' },
            { who: 'Hugo', text: 'Es una persona cualquiera, eventual. Pero la frase siguiente no se puede tratar igual: «[[Si reincidiere|violet]], la multa se doblará».', en: 'It’s any person at all, a possible case. But the next sentence can’t be handled the same way: “should he reoffend…”.' },
            { who: 'Beatriz', text: 'Claro, detrás de «si» no cabe el subjuntivo presente: [[si reincide|teal]]. ¿Y lo del alguacil?', en: 'Of course: after “si” the present subjunctive isn’t possible. And the bit about the constable?' },
            { who: 'Hugo', text: '«Cuando el alguacil [[hubiere levantado|violet]] el acta» queda como [[cuando haya levantado|teal]]: primero el acta y después el recurso.', en: '“When the constable shall have drawn up the report” becomes “once he has drawn it up”: first the report, then the appeal.' },
            { who: 'Beatriz', text: 'Perfecto. Vamos con la crónica: «[[Apenas hubo llegado|violet]] el gobernador, mandó juntar a los vecinos y [[díjoles|violet]] que se cerraba el puerto».', en: 'Perfect. On to the chronicle: “No sooner had the governor arrived than he summoned the townspeople and told them the port was closing.”' },
            { who: 'Hugo', text: 'Ahí puse [[En cuanto llegó|teal]] y [[les dijo|teal]]. La inmediatez no se pierde con el indefinido y «en cuanto».', en: 'I went with the simple past and “en cuanto”, and moved the pronoun in front. The sense of immediacy is still there.' },
            { who: 'Beatriz', text: 'En la novela, en cambio: «Doña Elvira, [[que enviudara|violet]] joven, no salía de casa». Un lector de hoy puede creer que es un subjuntivo.', en: 'The novel is trickier: a reader today might think “enviudara” is a subjunctive.' },
            { who: 'Hugo', text: 'Por eso la cambié a [[que había enviudado|teal]]. Es el mismo uso que todavía ves en la prensa: «la autora, que publicara su primera novela en 1990…».', en: 'That’s why I changed it to the pluperfect. It’s the same usage you still see in the papers.' },
            { who: 'Beatriz', text: 'Lo leo casi a diario y siempre me chirría un poco. Ahora, lo difícil: la proclama. «Vecinos: [[si así no lo hiciereis|violet]], perderéis el turno de riego».', en: 'I read it almost every day and it always grates a little. Now for the hard one: the proclamation.' },
            { who: 'Hugo', text: 'Como el libro sale en España y en América, propongo [[si no lo hacen así|blue]], perderán…, y una nota que diga que en España sería [[si no lo hacéis así|blue]].', en: 'Since the book is coming out in Spain and Latin America, I suggest “ustedes” in the text and a note giving the Spanish “vosotros” version.' },
            { who: 'Beatriz', text: 'De acuerdo. ¿Y el «[[sea lo que fuere|orange]]» del final? ¿Lo tocamos?', en: 'Agreed. And the “sea lo que fuere” at the end? Do we touch it?' },
            { who: 'Hugo', text: 'Ese no. Sigue vivo en el registro formal, como [[érase una vez|orange]] en los cuentos. Si lo cambio, el texto pierde su tono.', en: 'Not that one. It’s still alive in formal language, like “once upon a time” in fairy tales. If I change it, the text loses its voice.' },
          ], notes: {
            'arrojare': '**Futuro de subjuntivo** detrás de un relativo («que»): presenta a un vecino cualquiera que pueda arrojar basura.',
            'que arroje': '**Presente de subjuntivo**: el equivalente actual de la forma en -re detrás de un relativo con valor eventual.',
            'Si reincidiere': '**Futuro de subjuntivo** detrás de «si» condicional. Es el contexto que más errores provoca al modernizar.',
            'si reincide': '**Presente de indicativo**: detrás de «si» condicional, el español actual no admite presente de subjuntivo.',
            'hubiere levantado': '**Futuro perfecto de subjuntivo**: una acción que debe estar terminada antes de otra futura.',
            'cuando haya levantado': '**«Haya» + participio**: mantiene la anterioridad («primero el acta») con un tiempo actual.',
            'Apenas hubo llegado': '**Pretérito anterior**: acción terminada justo antes de otra pasada. Hoy solo en prosa literaria o muy formal.',
            'díjoles': '**Pronombre pospuesto** a un verbo conjugado: rasgo de textos antiguos. Lleva tilde porque es esdrújula.',
            'En cuanto llegó': '**Indefinido + conector de inmediatez**: la forma actual de decir lo mismo que «apenas hubo llegado».',
            'les dijo': '**Pronombre delante y separado**: la colocación actual con un verbo conjugado.',
            'que enviudara': '**-ra con valor de pluscuamperfecto de indicativo**: cuenta un hecho anterior, no una hipótesis ni un deseo.',
            'que había enviudado': '**Pluscuamperfecto de indicativo**: el equivalente claro para un lector de hoy.',
            'si así no lo hiciereis': '**Futuro de subjuntivo** con **vosotros**: en los textos antiguos, el plural de confianza también se usaba en América.',
            'si no lo hacen así': '**Ustedes** + presente de indicativo: la opción para una edición dirigida a España y América a la vez.',
            'si no lo hacéis así': '**Vosotros** + presente de indicativo: la versión natural para lectores de la mayor parte de España.',
            'sea lo que fuere': '**Fórmula viva**: se conserva en registro formal. Equivale a «sea lo que sea».',
            'érase una vez': '**Fórmula viva** de los cuentos, con pronombre pospuesto. Nadie la moderniza.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué no reformula Hugo «Si reincidiere» como «si reincida»?', options: ['Porque detrás de «si» condicional se usa hoy el presente de indicativo.', 'Porque la ordenanza ya no está vigente.', 'Porque «reincidir» no tiene subjuntivo.'], answer: 0, why: '«Detrás de “si” no cabe el subjuntivo presente: si reincide».', en: 'Why doesn’t Hugo change “Si reincidiere” to “si reincida”?' },
            { prompt: '¿Qué deciden para la proclama?', options: ['Vosotros en el texto, porque es el original.', 'Ustedes en el texto y una nota con la versión con vosotros.', 'Dejar el original sin versión actual.'], answer: 1, why: '«Propongo “si no lo hacen así” y una nota que diga que en España sería “si no lo hacéis así”».', en: 'What do they decide for the proclamation?' },
            { prompt: '¿Por qué conserva Hugo «sea lo que fuere»?', options: ['Porque no sabe cómo modernizarlo.', 'Porque es un error del original.', 'Porque es una fórmula viva y da tono al texto.'], answer: 2, why: '«Sigue vivo en el registro formal… Si lo cambio, el texto pierde su tono».', en: 'Why does Hugo keep “sea lo que fuere”?' },
          ] },
        ] },
        { title: '¿De qué texto sale? · Which kind of text is it from?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Época y género · Period and genre', categories: [
            { id: 'ley', label: 'TEXTO NORMATIVO · ordenanza, reglamento, código', tone: 'violet' },
            { id: 'cronica', label: 'CRÓNICA O RELATO HISTÓRICO', tone: 'blue' },
            { id: 'novela', label: 'NOVELA DEL SIGLO XIX', tone: 'orange' },
            { id: 'prensa', label: 'PRENSA O ENSAYO ACTUAL', tone: 'teal' },
          ], items: [
            { text: 'El que sustrajere documentos del archivo será sancionado con multa.', answer: 'ley', why: 'Futuro de subjuntivo con «el que» + sanción: fórmula típica de ordenanzas y códigos.' },
            { text: 'Llegado que hubo el virrey, mandó cerrar el puerto y hacer recuento del trigo.', answer: 'cronica', why: '«Llegado que hubo» y una sucesión de hechos públicos: estilo de crónica.' },
            { text: '—¡Qué desgracia, Dios mío! —exclamó doña Remedios, y sentose junto al brasero.', answer: 'novela', why: 'Diálogo con raya, personaje y pronombre pospuesto: narración novelesca del XIX.' },
            { text: 'El arquitecto, que diseñara el estadio en los años setenta, falleció ayer a los noventa años.', answer: 'prensa', why: '-ra con valor de pasado en una necrológica: uso periodístico actual.' },
            { text: 'Si algún vecino no acudiere al concejo, pagará una gallina al común.', answer: 'ley', why: 'Condición con futuro de subjuntivo + sanción: norma local antigua.' },
            { text: 'Y aquel mismo año hízose la paz con los pueblos de la sierra.', answer: 'cronica', why: '«Hízose» y el relato de un acontecimiento colectivo fechado: crónica.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: tu alumno dice en qué detalle (léxico, puntuación, tema) se ha fijado, además del verbo, para decidir el género.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Primero el contexto, después la forma actual. Context first, then the modern form.',
      steps: [
        { title: 'Elige la versión actual · Choose the modern version', blocks: [
          { kind: 'choice', items: [
            { prompt: 'Ordenanza: «El que hallare una res perdida dará aviso al alcalde».', options: ['El que hallara una res perdida dará aviso al alcalde.', 'El que halle una res perdida dará aviso al alcalde.', 'El que hallará una res perdida dará aviso al alcalde.'], answer: 1, why: 'Relativo eventual: presente de subjuntivo. «Hallará» es futuro de indicativo y «hallara» remite al pasado.', en: 'Anyone who finds a stray animal must inform the mayor.' },
            { prompt: 'Contrato: «Si el arrendatario no pagare la renta, será desahuciado».', options: ['Si el arrendatario no pagara la renta, será desahuciado.', 'Si el arrendatario no paga la renta, será desahuciado.', 'Si el arrendatario no pague la renta, será desahuciado.'], answer: 1, why: 'Tras «si» condicional con consecuencia futura: presente de indicativo. «Pagara» + «será» mezcla dos tipos de condicional.', en: 'If the tenant fails to pay the rent, he will be evicted.' },
            { prompt: 'Crónica: «Luego que hubo firmado el acta, el escribano se retiró».', options: ['En cuanto firmó el acta, el escribano se retiró.', 'Mientras firmaba el acta, el escribano se retiró.', 'Cuando firme el acta, el escribano se retiró.'], answer: 0, why: 'Pretérito anterior: dos hechos pasados seguidos. Indefinido + «en cuanto». «Mientras firmaba» los vuelve simultáneos.', en: 'As soon as he had signed the record, the notary withdrew.' },
            { prompt: 'Prensa: «El director, que dirigiera la orquesta durante veinte años, se despidió ayer». ¿Qué significa «dirigiera»?', options: ['dirigiría', 'quizá dirija', 'había dirigido'], answer: 2, why: '-ra con valor de pluscuamperfecto de indicativo: un hecho anterior a la despedida.', en: 'The conductor, who had led the orchestra for twenty years, said goodbye yesterday.' },
            { prompt: 'Novela: «Mirábala con desconfianza y no respondía».', options: ['La miraba con desconfianza y no respondía.', 'La mira con desconfianza y no responde.', 'Mirábala la con desconfianza y no respondía.'], answer: 0, why: 'Pronombre delante del verbo conjugado. El tiempo no cambia: imperfecto.', en: 'He kept looking at her suspiciously and did not answer.' },
          ] },
        ] },
        { title: '¿Sigue viva? · Is it still alive?', blocks: [
          { kind: 'classify', title: 'Fórmula viva o forma de archivo · Living formula or archive form', categories: [
            { id: 'viva', label: 'VIVA HOY · fórmula fija o uso normal', tone: 'orange' },
            { id: 'archivo', label: 'DE ARCHIVO · textos antiguos, jurídicos o literarios', tone: 'violet' },
          ], items: [
            { text: '«Érase una vez un molinero que tenía tres hijos.»', answer: 'viva', why: 'Fórmula de inicio de cuento, plenamente viva.' },
            { text: '«¡Habrase visto! Llegar a estas horas y sin avisar.»', answer: 'viva', why: 'Exclamación fija de reproche, hoy a menudo irónica.' },
            { text: '«Sea lo que fuere, mañana firmamos el contrato.»', answer: 'viva', why: 'Fórmula concesiva viva en registro formal.' },
            { text: '«Díjole el escribano que esperase en el zaguán.»', answer: 'archivo', why: 'Pronombre pospuesto a un indicativo: hoy, «el escribano le dijo».' },
            { text: '«Apenas hubo cenado, se retiró a su cuarto.»', answer: 'archivo', why: 'Pretérito anterior: prosa literaria. Hoy, «apenas cenó».' },
            { text: '«Véanse las notas al final del volumen.»', answer: 'viva', why: 'Subjuntivo con valor de mandato: el pronombre pospuesto es la norma actual.' },
          ] },
        ] },
        { title: '¿Está bien la versión actual? · Is the modern version right?', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Si alguien tiene dudas sobre el plazo, consultará al secretario.', ok: true, why: 'Correcta: «si alguno tuviere dudas» pasa a presente de indicativo tras «si».' },
            { sentence: 'Cuando el notario lo habrá leído, firmarán los testigos.', ok: false, options: ['Cuando el notario lo había leído, firmarán los testigos.', 'Cuando el notario lo haya leído, firmarán los testigos.', 'Cuando el notario lo habría leído, firmarán los testigos.'], answer: 1, why: '«Cuando lo hubiere leído» → «cuando lo haya leído»: tras «cuando» con valor futuro no va el futuro de indicativo.' },
            { sentence: 'La casa donde naciera el pintor será un museo a partir de enero.', ok: true, why: 'Correcta: es el uso literario y periodístico de -ra con valor de pasado (= donde nació). Algunos libros de estilo lo desaconsejan, pero es un uso reconocido.' },
            { sentence: 'Dijo le al alcalde que no quedaba trigo.', ok: false, options: ['Le dijo al alcalde que no quedaba trigo.', 'Le dijole al alcalde que no quedaba trigo.', 'Dijo al alcalde le que no quedaba trigo.'], answer: 0, why: '«Díjole» → «le dijo»: el pronombre va delante del verbo y como palabra separada; no se duplica.' },
            { sentence: 'Quien no se haya inscrito antes del día quince no podrá votar.', ok: true, why: 'Correcta: «quien no se hubiere inscrito» → «haya» + participio tras un relativo eventual.' },
          ] },
        ] },
        { title: 'Mensajes de la editorial · Messages from the publisher', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'chat-fill', title: 'Beatriz y Hugo, por el chat de la editorial · On the publisher’s chat', lines: [
            { who: 'Beatriz', text: 'Hugo, en la crónica pone «No bien hubo desembarcado el obispo, repicaron las campanas». ¿Cómo lo dejamos?' },
            { who: 'Hugo', text: '___', options: ['«En cuanto desembarcó el obispo, repicaron las campanas».', '«Cuando desembarque el obispo, repicaron las campanas».', '«Mientras desembarcaba el obispo, repicaron las campanas».'], answer: 0, why: 'Pretérito anterior: inmediatez entre dos hechos pasados. Indefinido + «en cuanto».' },
            { who: 'Beatriz', text: 'Bien. En la ordenanza: «Quien no hubiere abonado la cuota antes de mayo no podrá votar». Propongo «Quien no ___ la cuota antes de mayo».', options: ['haya abonado', 'habrá abonado', 'hubiera abonado'], answer: 0, why: 'Relativo eventual + acción anterior al plazo: «haya abonado».' },
            { who: 'Hugo', text: 'De acuerdo. Y en la proclama, para la edición única: «Si así no lo hiciereis…» queda «Si ___ así, perderán el turno».', options: ['no lo hiciereis', 'no lo hacen', 'no lo hagan'], answer: 1, why: 'Tras «si», presente de indicativo; con «ustedes», porque la edición es para España y América.' },
            { who: 'Beatriz', text: 'Perfecto. Última: en la reseña dice «la poeta, que ganara el premio en 2004». ¿La cambiamos?' },
            { who: 'Hugo', text: '___', options: ['No: es subjuntivo porque el premio es dudoso.', 'Sí: es un error, debe ser «que ganaría».', 'No hace falta: es un uso aceptado en prensa y equivale a «que ganó».'], answer: 2, why: '-ra con valor de pasado de indicativo: uso reconocido en la prensa, aunque algunos libros de estilo lo desaconsejan.' },
          ] },
        ] },
        { title: 'Construye la versión actual · Build the modern version', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Cuando', 'el', 'juez', 'haya', 'firmado,', 'se', 'cerrará', 'el', 'acta.'], accept: ['Cuando el juez haya firmado, se cerrará el acta.'], en: 'Modern version of “Cuando el juez hubiere firmado, se cerrará el acta”: once the judge has signed, the record will be closed.' },
            { tiles: ['Apenas', 'terminó', 'la', 'misa,', 'le', 'dijo', 'la', 'verdad.'], accept: ['Apenas terminó la misa, le dijo la verdad.'], en: 'Modern version of “Apenas hubo terminado la misa, díjole la verdad”: as soon as mass was over, she told him the truth.' },
            { tiles: ['Quien', 'encuentre', 'la', 'llave', 'deberá', 'devolverla.'], accept: ['Quien encuentre la llave deberá devolverla.'], en: 'Modern version of “Quien hallare la llave…”: whoever finds the key must return it.' },
          ] },
        ] },
        { title: 'Reformula para la antología · Reword for the anthology', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno escribe cada versión y explica en voz alta qué contexto ha decidido la forma (relativo, «cuando», «si», inmediatez, pronombre). Tú confirmas el sentido.', self: 'Escribe cada versión y di en voz alta qué palabra del contexto ha decidido la forma. (Say which word in the context decided the form.)' } },
          { kind: 'rewrite', title: 'Versiones en español actual · Present-day versions', items: [
            { prompt: 'El que no compareciere será multado.', instruction: 'Reformula en español actual (mantén «el que»).', accept: ['El que no comparezca será multado'] },
            { prompt: 'Si el heredero renunciare a la herencia, esta pasará a sus hijos.', instruction: 'Reformula en español actual.', accept: ['Si el heredero renuncia a la herencia, esta pasará a sus hijos', 'Si el heredero renuncia a la herencia, pasará a sus hijos'] },
            { prompt: 'Apenas hubo amanecido, partieron hacia el puerto.', instruction: 'Reformula con un tiempo actual (puedes cambiar el conector).', accept: ['Apenas amaneció, partieron hacia el puerto', 'En cuanto amaneció, partieron hacia el puerto', 'Tan pronto como amaneció, partieron hacia el puerto', 'Nada más amanecer, partieron hacia el puerto'] },
            { prompt: 'Diéronle las llaves y fuese sin decir palabra.', instruction: 'Coloca los pronombres como hoy (ojo: «fuese» es «fue» + «se»).', accept: ['Le dieron las llaves y se fue sin decir palabra', 'Le dieron las llaves y se fue sin decir nada'] },
            { prompt: 'Vosotros, los que esto leyereis, juzgad con benevolencia.', instruction: 'Reformula para lectores de América (ustedes) en español actual.', accept: ['Ustedes, los que lean esto, juzguen con benevolencia', 'Ustedes, los que esto lean, juzguen con benevolencia', 'Ustedes, quienes lean esto, juzguen con benevolencia'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno elige una de las cinco frases y propone dos versiones: una para España y otra para América. Comentan qué cambia y qué no.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Así trabajamos', coach: 'Primero la idea, después los detalles. Gist first, then details.',
      steps: [
        { title: 'La presentación de Hugo · Hugo’s presentation', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota cada pareja «original → versión actual» que menciona Hugo. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles. Anota cada pareja «original → versión actual». (Note each pair: original → modern version.)' } },
          { kind: 'listen', title: 'Voces de antaño: así trabajamos', channel: 'PÓDCAST · EDICIONES CANDIL', src: '/audio/grammar-live/506.mp3',
            before: 'Hugo Medina graba una presentación de la antología para el pódcast de la editorial. ¿Qué crees que va a explicar: la historia de Valdeloma o cómo han modernizado los textos? (What do you think he will explain?)',
            gist: { prompt: '¿De qué habla Hugo? · What is Hugo talking about?', options: ['De la historia de Valdeloma en el siglo XIX.', 'De los errores de la prensa actual.', 'De cómo han pasado los textos antiguos al español actual.'], answer: 2, why: 'Explica, con ejemplos, cómo han reformulado ordenanzas, crónicas, una proclama y la prensa.', en: 'He explains, with examples, how the team turned the old texts into present-day Spanish.' },
            details: [
              { prompt: '¿Cómo aparece cada texto en el libro?', options: ['El original con palabras subrayadas.', 'El original a la izquierda y la versión actual a la derecha.', 'Solo la versión actual, con notas.'], answer: 1, why: '«A la izquierda, el original, tal cual; a la derecha, nuestra versión en español actual».', en: 'How does each text appear in the book?' },
              { prompt: '¿Qué versión eligen para «si así no lo hiciereis»?', options: ['Dejan el original sin cambios.', '«Si no lo hacéis así», para todos.', '«Si no lo hacen así», con una nota para España.'], answer: 2, why: '«Elegimos “si no lo hacen así”, con ustedes, y explicamos en una nota que en España se diría “si no lo hacéis así”».', en: 'Which version do they choose for the proclamation?' },
              { prompt: 'Según Hugo, ¿qué significa «la autora, que publicara su primera novela en 1990»?', options: ['Que publicó o había publicado su primera novela en 1990.', 'Que quizá publique una novela.', 'Que publicaría una novela más tarde.'], answer: 0, why: '«No hay ninguna hipótesis: significa “que publicó” o “que había publicado”».', en: 'According to Hugo, what does the press sentence mean?' },
              { prompt: '¿Qué hacen con «sea lo que fuere»?', options: ['La eliminan del texto.', 'La cambian por «sea lo que sea».', 'La dejan tal cual.'], answer: 2, why: '«Algunas fórmulas siguen vivas, como “sea lo que fuere”, y esas las dejamos tal cual».', en: 'What do they do with “sea lo que fuere”?' },
            ],
            transcript: 'Hola a todos, les habla Hugo Medina, del equipo de Voces de antaño. Les cuento en pocos minutos cómo hemos trabajado. Cada texto aparece dos veces: a la izquierda, el original, tal cual; a la derecha, nuestra versión en español actual. En la ordenanza de 1868 dice: «Todo vecino que [[arrojare|violet]] basuras será multado». Nosotros escribimos «[[que arroje|teal]]», porque hoy esa posibilidad se expresa con presente de subjuntivo. Y donde pone «cuando el alguacil [[hubiere levantado|violet]] el acta», ponemos «[[cuando haya levantado|teal]] el acta». En la crónica, «[[apenas hubo llegado|violet]] el gobernador» pasa a ser «[[en cuanto llegó|teal]]», y «[[díjoles|violet]]» se convierte en «[[les dijo|teal]]». Lo más delicado fue la proclama: «[[si así no lo hiciereis|violet]]». Como el libro se vende en España y en América, elegimos «[[si no lo hacen así|blue]]», con ustedes, y explicamos en una nota que en España se diría «[[si no lo hacéis así|blue]]». Ojo también con la prensa: si leen «la autora, [[que publicara|violet]] su primera novela en 1990», no hay ninguna hipótesis; significa «que publicó» o «que había publicado». Eso sí, algunas fórmulas siguen vivas, como «[[sea lo que fuere|orange]]», y esas las dejamos tal cual. Gracias por escuchar, y nos vemos en la presentación del libro.',
            reply: { teacher: 'Tú eres Beatriz y le preguntas a Hugo por dos decisiones del audio («¿Por qué “que arroje” y no “que arrojará”?», «¿Por qué ustedes en la proclama?»). Tu alumno responde como Hugo.', self: 'Explica en voz alta, como si fueras Hugo, dos decisiones de la antología y por qué las tomaron. (Explain two of the team’s decisions aloud.)' } },
          { kind: 'tip', icon: '🇲🇽', title: 'Un adaptador mexicano · A Mexican adapter', text: 'Hugo saluda con «les habla» y se dirige al público con **ustedes**, como en toda América. Fíjate en cómo lee las formas antiguas con naturalidad, sin cambiar de voz, y en que siempre da la versión actual inmediatamente después: es la mejor manera de presentar un texto histórico a un público general.', en: 'Hugo addresses his listeners as “ustedes”, as everywhere in Latin America. Notice how he reads the old forms naturally and always follows them straight away with the modern version: that is the clearest way to present a historical text to a general audience.' },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Hablar de textos antiguos', coach: 'Explica, reformula y opina. Explain, reword and give your view.',
      steps: [
        { title: 'Decisiones de editor · Editorial decisions', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con frases completas. Si tu alumno usa una forma antigua al hablar, tú repites la idea en español actual y sigues con la repregunta.', self: 'Lee cada pregunta y responde en voz alta. Cuando cites una forma antigua, da siempre su versión actual. (Always give the modern version of any old form you quote.)' } },
          { kind: 'talk', cards: [
            { q: '¿Conservarías el original al lado de la versión actual o publicarías solo la versión moderna? ¿Por qué? · Would you keep the original beside the modern version?', followUps: ['¿Qué se pierde al modernizar?', '¿Para qué lectores harías una edición sin original?'], phrases: ['[[Lo conservaría|teal]] porque…', 'Al modernizar [[se pierde|teal]]…', 'Para un público escolar…'], hint: 'Da tu decisión y un ejemplo concreto de la clase: qué forma cambiarías y qué ganaría o perdería el lector.', example: 'Yo conservaría el original, sobre todo en la crónica. Al modernizar se pierde el ritmo: «apenas hubo llegado el gobernador» suena solemne, y «en cuanto llegó» es más claro pero más plano. Para un público escolar, en cambio, haría una edición solo con la versión actual y algunas notas.', next: 'Ahora, un artículo antiguo.' },
            { q: 'Lee en voz alta este artículo y explica qué dice en español actual: «Quien hallare un objeto perdido lo entregará en el Ayuntamiento. Si no lo hiciere en ocho días, será multado». · Explain this old article in present-day Spanish.', followUps: ['¿Qué forma pasa a subjuntivo y cuál a indicativo? ¿Por qué?', '¿Cómo lo escribirías en un cartel de hoy?'], phrases: ['[[Quien encuentre|teal]]…', '[[Si no lo hace|teal]]…', 'Aquí «hiciere» va detrás de «si», así que…'], hint: 'Tras «quien», presente de subjuntivo; tras «si», presente de indicativo.', example: 'Dice que quien encuentre un objeto perdido tiene que entregarlo en el Ayuntamiento y que, si no lo hace en ocho días, le pondrán una multa. «Hallare» pasa a «encuentre» porque se refiere a una persona cualquiera; «hiciere» pasa a «hace» porque va detrás de «si». En un cartel de hoy pondría: «Si encuentras un objeto perdido, entrégalo en el Ayuntamiento en un plazo de ocho días».' },
            { q: 'Tu profesor lee una frase de crónica: «Apenas hubo llegado a la ciudad, buscó alojamiento». Ahora cuenta tú, en español actual, un recuerdo con dos acciones seguidas. · Tell a memory with two actions in quick succession.', followUps: ['¿Qué fue lo primero que hiciste en cuanto llegaste?', '¿Qué pasó justo después?'], phrases: ['[[En cuanto llegué|teal]]…', '[[Apenas terminé|teal]]…', 'Tan pronto como…'], hint: 'Para la inmediatez, «en cuanto / apenas / tan pronto como» + indefinido.', example: 'Cuando me mudé a Lisboa, en cuanto llegué al piso dejé las maletas y fui a buscar un café. Apenas me senté en la terraza, empezó a llover a cántaros. Tan pronto como paró, volví a casa y caí rendido.', next: 'Ahora, la prensa.' },
            { q: 'Lees en un periódico: «El político, que dimitiera en 2010, vuelve a la vida pública». ¿Te parece elegante, confuso o pedante? · Is this -ra past elegant, confusing or pretentious?', followUps: ['¿Cómo lo escribirías tú?', '¿Hay en tu idioma usos que suenan cultos pero confunden al lector?'], phrases: ['[[Equivale a|teal]] «que dimitió»…', 'A mí [[me suena|teal]]…', 'Yo lo evitaría porque…'], hint: 'Separa el valor de la forma (un pasado de indicativo) de tu opinión sobre el estilo.', example: 'Equivale a «que dimitió» o «que había dimitido». A mí me suena un poco afectado en una noticia, porque un lector rápido puede leerlo como un subjuntivo. En una novela no me molesta, pero en el periódico yo escribiría «que dimitió en 2010».' },
            { q: 'Adaptas «Si así no lo hiciereis, se os retirará el turno de riego» para una edición en España y otra en México. ¿Qué cambias en cada una? · Adapt it for Spain and for Mexico.', followUps: ['¿Qué pronombre usas en cada edición: «os» o «les»?', '¿Y si hay una sola edición para todos?'], phrases: ['[[En España|blue]]: si no lo hacéis así…', '[[En México|blue]]: si no lo hacen así…', 'Para una edición única…'], hint: '«Vosotros» en la mayor parte de España; «ustedes» en América (y en Canarias y parte de Andalucía). El verbo, en presente de indicativo tras «si».', example: 'En la edición española pondría «Si no lo hacéis así, se os retirará el turno de riego». En la mexicana, «Si no lo hacen así, se les retirará el turno de riego». Para una edición única elegiría «ustedes», que se entiende en todas partes, y añadiría una nota con la versión con «vosotros».', teacher: 'Tú preguntas por cada palabra que cambia: el verbo, el pronombre y el orden.' },
            { q: '¿Qué fórmulas antiguas siguen vivas en tu idioma (cuentos, refranes, juramentos)? Compáralas con «érase una vez» o «adonde fueres, haz lo que vieres». · Which old formulas survive in your language?', followUps: ['¿Las usas tú o solo las reconoces?', '¿Qué tono le dan a una conversación?'], phrases: ['En mi idioma [[también se conserva|orange]]…', 'Se parece a «[[érase una vez|orange]]»…', 'Solo se usa en…'], hint: 'Explica la fórmula, su sentido actual y en qué situaciones se usa.', example: 'En inglés también se conserva «once upon a time», que es como «érase una vez». Y «be that as it may» se parece mucho a «sea lo que fuere»: también es un subjuntivo antiguo que sobrevive en una fórmula. Yo los reconozco y a veces los uso, porque dan un tono solemne o irónico.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tú lees un artículo inventado con formas antiguas y tu alumno lo reformula en voz alta, en español actual, para un oyente de España y otro de América.', self: 'Ahora busca un texto antiguo breve (un refrán, una ley, un fragmento de novela) y reformúlalo en voz alta. Grábate y comprueba que no usas ninguna forma de archivo. (Record yourself and check.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Nota del editor', coach: 'Versión actual y decisiones razonadas. Modern version, reasoned choices.',
      steps: [
        { title: 'Un artículo del reglamento del Ateneo · An article from the club rules', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después tu alumno lee en voz alta la versión actual y tú compruebas, frase a frase, que el sentido es el del original.', self: 'Escribe tu texto y toca «Revisar mi texto». Después compara frase a frase tu versión con el original: ¿dice exactamente lo mismo? (Check that the meaning is exactly the same.)' } },
          { kind: 'write', title: 'Versión actual y nota del editor · Modern version and editor’s note', situation: 'Eres Hugo (o el adaptador de la antología). Este es el artículo 7 del reglamento del Ateneo de Valdeloma (1889): «El socio que no hubiere satisfecho la cuota antes del día quince perderá el derecho a la biblioteca. Si alguno faltare al decoro debido, será amonestado por la Junta. Sea cual fuere su antigüedad, ningún socio sacará libros de la sala. Señores socios: si así no lo hiciereis, se os retirará la tarjeta». Escribe su versión en español actual y una nota del editor para lectores de España y América. (Write a modern version of an 1889 club rule and an editor’s note explaining your choices.)', task: [
            'Reformula el artículo completo en español actual, sin cambiar el sentido.',
            'Explica en la nota al menos tres cambios: la forma original, la actual y el motivo.',
            'Di si conservas o cambias «sea cual fuere» y por qué.',
            'Justifica el tratamiento (ustedes o vosotros) para lectores de España y América.',
          ], starters: ['Versión en español actual: «…»', 'Nota del editor. Hemos hecho … cambios.', '«Hubiere satisfecho» es…', 'Como «faltare» va detrás de «si»…', 'Para lectores de los dos lados del Atlántico…'],
            words: ['haya pagado', 'si alguien falta', 'sea cual sea', 'ustedes / vosotros', 'se les retirará', 'futuro perfecto de subjuntivo', 'presente de indicativo', 'fórmula viva'],
            model: 'Versión en español actual: «El socio que no [[haya pagado|teal]] la cuota antes del día quince perderá el derecho a usar la biblioteca. [[Si alguien falta|teal]] al decoro debido, la Junta lo amonestará. Sea cual sea su antigüedad, ningún socio podrá sacar libros de la sala. Señores socios: [[si no lo hacen así|blue]], se les retirará la tarjeta». Nota del editor. Hemos hecho cuatro cambios. «[[Hubiere satisfecho|violet]]» es un futuro perfecto de subjuntivo: hoy decimos «haya pagado», porque la cuota tiene que estar pagada antes del plazo, y «satisfacer» con el sentido de «pagar» ya solo se usa en textos administrativos. «[[Faltare|violet]]» va detrás de «si», así que no pasa a subjuntivo, sino a presente de indicativo. «[[Sea cual fuere|orange]]» sigue vivo en el registro formal, pero lo hemos cambiado por «sea cual sea», más habitual y más claro para un lector joven. Por último, como la antología se lee en España y en América, la advertencia usa «ustedes»; un lector español diría «si no lo hacéis así, se os retirará la tarjeta». El original se reproduce íntegro en la página de la izquierda.',
            minWords: 140,
            checks: [
              { label: '«Haya» + participio para reformular «hubiere satisfecho»', pattern: '(?<!\\p{L})hayan?\\s+(?:\\p{L}+(?:ado|ido|to|cho|so))(?!\\p{L})', tip: 'Reformula «el socio que no hubiere satisfecho la cuota» con «haya» + participio: «que no haya pagado».' },
              { label: 'Tratamiento explícito: ustedes o vosotros', pattern: '(?<!\\p{L})(?:ustedes|vosotros|vosotras)(?!\\p{L})', tip: 'Explica en la nota qué tratamiento eliges para España y América.' },
            ] },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy? What do you take away?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'violet', label: 'FUTUROS DE SUBJUNTIVO', formula: 'quien / cuando + hiciere → haga · hubiere hecho → haya hecho · si + hiciere → hace · si + hubiere hecho → ha hecho', example: 'El que arrojare → el que arroje. Si reincidiere → si reincide.', caption: 'el contexto decide el modo', en: 'After a relative or cuando, use the present (or perfect) subjunctive; after si, the present (or perfect) indicative' },
            { tone: 'teal', label: 'PASADOS LITERARIOS', formula: 'apenas hubo + participio → apenas / en cuanto + indefinido · que publicara → que publicó / había publicado', example: 'Apenas hubo llegado → En cuanto llegó. Que enviudara joven → que había enviudado joven.', caption: '-ra de indicativo: hecho, no hipótesis', en: 'The pretérito anterior becomes a simple past with a connector of immediacy; an -ra form that reports a fact becomes an indicative past' },
            { tone: 'blue', label: 'PRONOMBRES Y TRATAMIENTO', formula: 'díjole → le dijo · hízose → se hizo · hiciereis → hacéis (España) / hacen (América)', example: 'Si así no lo hiciereis, se os retirará… → Si no lo hacen así, se les retirará…', caption: 'véase, siéntese: pospuesto también hoy', en: 'Move pronouns before conjugated indicative verbs and choose vosotros or ustedes according to the readers' },
            { tone: 'orange', label: 'FÓRMULAS VIVAS', formula: 'sea lo que fuere · sea cual fuere · érase una vez · ¡habrase visto! · adonde fueres, haz lo que vieres', example: 'Sea lo que fuere, mañana firmamos.', caption: 'se conservan y, si hace falta, se glosan', en: 'Fixed formulas are kept as they are, and explained if necessary' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Antes de modernizar, haz **tres preguntas**: ¿es una fórmula viva? (si lo es, consérvala); ¿qué hay delante de la forma? (**si** → indicativo; **quien, el que, cuando** → subjuntivo); ¿cuenta un hecho o plantea una posibilidad? (un -ra que cuenta un hecho es un **pasado de indicativo**). Y cambia el pronombre y el tratamiento pensando en **quién va a leer** el texto.', en: 'Before modernising, ask three questions: is it a living formula (then keep it)? What comes before the form (si takes the indicative; quien, el que and cuando take the subjunctive)? Does it report a fact or raise a possibility (an -ra form reporting a fact is an indicative past)? Then adjust pronouns and forms of address to your readers.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco fragmentos, sin ayuda · Five excerpts, no help', items: [
            { prompt: '«Si el comprador no recogiere la mercancía en tres días, perderá la señal».', options: ['Si el comprador no recogerá la mercancía…', 'Si el comprador no recoja la mercancía…', 'Si el comprador no recoge la mercancía…'], answer: 2, why: 'Tras «si» condicional: presente de indicativo.', en: 'If the buyer does not collect the goods within three days, he will lose the deposit.' },
            { prompt: '«Así que hubo cerrado la puerta, encendió el candil».', options: ['Mientras cerraba la puerta, encendió el candil.', 'Cuando haya cerrado la puerta, encendió el candil.', 'En cuanto cerró la puerta, encendió el candil.'], answer: 2, why: 'Pretérito anterior: indefinido + conector de inmediatez.', en: 'As soon as she had closed the door, she lit the oil lamp.' },
            { prompt: '«La actriz, que debutara en este teatro en 1975, vuelve esta noche». «Debutara» significa…', options: ['que debutó / había debutado', 'que debutaría', 'que ojalá debute'], answer: 0, why: '-ra con valor de pasado de indicativo en prensa.', en: 'The actress, who made her debut at this theatre in 1975, returns tonight.' },
            { prompt: '«Quien hubiere extraviado el carné deberá solicitar otro».', options: ['Quien habrá extraviado el carné…', 'Quien haya extraviado el carné…', 'Quien hubo extraviado el carné…'], answer: 1, why: 'Relativo eventual + acción anterior: «haya» + participio.', en: 'Anyone who has lost their card must apply for a new one.' },
            { prompt: '«Hízose de noche y los viajeros buscaron posada».', options: ['Hizo se de noche…', 'Se hacía de noche…', 'Se hizo de noche…'], answer: 2, why: 'Pronombre delante del indefinido; el tiempo no cambia.', en: 'Night fell and the travellers looked for an inn.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, una carta familiar. Now, a family letter.', blocks: [
          { kind: 'lead', text: 'Irene Lozano encuentra en un cajón dos cartas de su tatarabuelo, que emigró a México en 1862: una escrita antes de embarcar y otra al llegar. Quiere copiarlas en español actual para el álbum de la familia, que vive en España. Reformula tres frases.', en: 'Irene finds two letters from her great-great-grandfather, who emigrated to Mexico in 1862: one written before he sailed, one on arrival. She wants to copy them out in present-day Spanish for the family album; the family lives in Spain. Reword three sentences.' },
          { kind: 'rewrite', title: 'Las cartas del tatarabuelo · The old family letters', items: [
            { prompt: 'Cuando recibiereis esta carta, ya habré embarcado.', instruction: 'Reformula para la familia de España (vosotros).', accept: ['Cuando recibáis esta carta, ya habré embarcado'] },
            { prompt: 'Apenas hube llegado a Veracruz, busqué alojamiento cerca del puerto.', instruction: 'Cambia solo el tiempo verbal.', accept: ['Apenas llegué a Veracruz, busqué alojamiento cerca del puerto'] },
            { prompt: 'Díjome el capitán que la travesía duraría veinte días.', instruction: 'Coloca el pronombre como hoy.', accept: ['Me dijo el capitán que la travesía duraría veinte días', 'El capitán me dijo que la travesía duraría veinte días'] },
          ] },
        ] },
        { title: 'Ampliación: -ra con valor de condicional y «vos» antiguo · Extension', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. **1.** La forma en -ra también puede equivaler a un **condicional**, sobre todo con verbos como «querer», «deber», «poder» o «valer»: «**Quisiera** hablar con usted» (cortesía, plenamente actual), «**Debiera** pensarlo mejor» (= debería), «**Pudiera** ser que…» (= podría, culto), «Más te **valiera** callar» (= más te valdría, literario). **2.** En los textos antiguos, «**vos**» era un tratamiento de respeto para **una sola persona**, con formas de plural: «Vos, señora, sois la heredera». Hoy se diría «Usted, señora, es la heredera». El voseo americano actual («vos sos», «vos tenés») procede históricamente de él, pero hoy es un tratamiento de confianza con formas propias.', en: 'For strong students or spare time. 1. The -ra form can also stand for a conditional, especially with querer, deber, poder and valer: “quisiera” is the normal polite form today, “debiera” and “pudiera ser” sound formal, and “más te valiera” is literary. 2. In old texts, “vos” was a respectful form for one person, with plural verb forms. Today you would use “usted”. Present-day American voseo comes historically from it, but it is now an informal form with its own verb endings.' },
          { kind: 'choice', title: 'Registro y matices · Register and nuance', items: [
            { prompt: '«Más te valiera callar». ¿Qué significa?', options: ['Más te valdría callar.', 'Ojalá calles.', 'Más te valió callar.'], answer: 0, why: '-ra con valor de condicional: «valiera» = «valdría». Registro literario.', en: 'What does “Más te valiera callar” mean? (You’d do better to keep quiet.)' },
            { prompt: 'En una carta del siglo XVI: «Vos, señora, sois la legítima heredera». ¿A cuántas personas se dirige?', options: ['A una sola persona, con respeto.', 'A varias personas, con confianza.', 'A varias personas, con respeto.'], answer: 0, why: '«Vos» antiguo de respeto: una persona con formas de plural. Hoy, «usted es».', en: 'How many people is the writer addressing?' },
            { prompt: '«Quisiera hablar con la directora». ¿Es una forma arcaica?', options: ['No: es la forma de cortesía normal hoy.', 'Sí: hoy solo se dice «querría».', 'Sí: es futuro de subjuntivo.'], answer: 0, why: '«Quisiera» es la forma de cortesía habitual en el español actual.', en: 'Is “Quisiera hablar con la directora” archaic?' },
            { prompt: '«Pudiera ser que el manuscrito fuera falso». Versión más neutra:', options: ['Podría ser que el manuscrito fuera falso.', 'Puede que el manuscrito fuere falso.', 'Pudo ser que el manuscrito fuera falso.'], answer: 0, why: '«Pudiera» con valor de condicional = «podría». Registro culto.', en: 'It might be that the manuscript is a forgery: which version is more neutral?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, solo si queda tiempo o para estudiantes fuertes. Extra: tu alumno busca en una novela o en una noticia una forma en -ra que no sea subjuntivo y dice si tiene valor de pasado o de condicional.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 207 · Selección fina de indicativo y subjuntivo según perspectiva', text: 'Ya sabes leer formas históricas y decidir, por el contexto, si su equivalente actual va en indicativo o en subjuntivo. En la clase 207 das el paso contrario: en textos de hoy, eliges tú el modo según la perspectiva del hablante («aunque tiene razón» / «aunque tenga razón»), donde los dos son correctos pero no dicen lo mismo.', en: 'You can now read historical forms and decide from the context whether their modern equivalent takes the indicative or the subjunctive. Class 207 takes the opposite step: in present-day texts, you choose the mood yourself according to the speaker’s perspective, where both moods are correct but say different things.', href: '/gramatica/seleccion-fina-de-indicativo-y-subjuntivo', label: 'Ir a la clase 207' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Por qué “el que hiciere” pasa a “el que haga”, pero “si hiciere” pasa a “si hace”?». Respuesta esperada: tras un relativo eventual va el presente de subjuntivo; tras «si» condicional, el español actual usa el presente de indicativo. Tarea: la nota del editor de Escribir.' },
        ] },
      ],
    },
  ],
};
