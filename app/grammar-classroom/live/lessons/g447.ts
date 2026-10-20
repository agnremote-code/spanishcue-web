import type { LiveLesson } from '../types';

/**
 * Lesson 447 · B2 · Cambio de deícticos: aquí/allí, hoy/ese día (course unit G147).
 * Builds on G118 (lesson 418, dijo que / pidió que) and G146 (lesson 233,
 * estilo indirecto: statements, questions, requests and tense shifts). The
 * tense shift is NOT retaught here: this class is about recalculating the
 * deictic words from the reporter's own time and place.
 * Scene: a small documentary crew. Lucía Herrera (director) is filming in a
 * village near Oaxaca; Pablo Medina (producer) and Sonia Ruiz (coordinator)
 * are at the office in Mexico City; Raúl Ortega (sound) arrives from
 * Guadalajara; doña Elvira Mendoza runs the village's community museum.
 * Timeline: Tuesday night Lucía phones Pablo; Wednesday they film in a weaving
 * workshop; Thursday Pablo tells Sonia (Explorar) and Lucía, back in Oaxaca
 * city, leaves Pablo a voice message (Escuchar, Mexican voice, tú/ustedes);
 * Friday Pablo and Sonia travel to Oaxaca; the next Monday Pablo writes a
 * summary from Mexico City (Escribir).
 * Content: time (hoy → ese día / aquel día, mañana → al día siguiente, ayer →
 * el día anterior, la semana que viene → la semana siguiente, ahora →
 * entonces / en ese momento…), recalculated, not translated (mañana can end up
 * as hoy or ayer); place (aquí → allí / allá, este → ese / aquel), persons and
 * possessives (mi → su, te → me, su → tu), movement verbs (venir → ir, traer →
 * llevar) depending on where the reporter is; when NOT to shift (same day,
 * same place). Regional note: allá is preferred in much of Latin America.
 * Ampliación: written chronicle register (la víspera, en aquel entonces,
 * a la mañana siguiente). Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 447,
  level: 'B2',
  title: 'Cambio de deícticos: aquí/allí, hoy/ese día',
  subtitle: 'Contar lo que alguien dijo en otro día y en otro lugar, ajustando hoy, aquí, este, venir y traer a tu momento y a tu lugar.',
  legend: [
    { tone: 'teal', label: 'TIEMPO · hoy → ese día, mañana → al día siguiente (time)' },
    { tone: 'orange', label: 'LUGAR · aquí → allí / allá, este → ese / aquel (place)' },
    { tone: 'violet', label: 'PERSONA · mi → su, te → me (people and possessives)' },
    { tone: 'blue', label: 'MOVIMIENTO · venir → ir, traer → llevar (direction)' },
  ],
  optionNotes: {
    'mañana': '«Mañana» se calcula desde el momento en que hablas tú. Si el día del que se habló ya pasó o es otro, «mañana» apunta a un día equivocado.',
    'viniera y trajera': '«Venir» y «traer» indican movimiento hacia donde está quien habla. Si tú no estás en el destino, lo natural es «ir» y «llevar».',
    'llevarían': '«Llevar» es la perspectiva de quien sale. Si tú estás en el lugar adonde llega la cosa, dices «traer».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Las palabras que dependen de ti', coach: '¿Hoy de quién? ¿Aquí de quién? Whose today, whose here?',
      steps: [
        { title: 'Una llamada desde Oaxaca · A call from Oaxaca', blocks: [
          { kind: 'lead', text: 'Lucía Herrera dirige un documental en un pueblo de Oaxaca. El martes por la noche llama a Pablo Medina, el productor, que está en la oficina de la Ciudad de México. El jueves, Pablo le cuenta la llamada a Sonia Ruiz, la coordinadora. Pablo habla **dos días después** y a **más de 400 kilómetros**: hoy, mañana, aquí, este, venir o traer ya no señalan lo mismo.', en: 'Words like hoy, mañana, aquí, este, venir and traer point to the speaker’s own time and place (linguists call them deictic words). When Pablo reports Lucía’s call two days later and from another city, he has to re-aim each of them from where he stands.' },
          { kind: 'guide', text: { teacher: 'Tú lees las palabras de Lucía y tu alumno lee la versión de Pablo. Después tu alumno señala cada palabra que cambia y dice por qué.', self: 'Lee las palabras de Lucía y la versión de Pablo. Busca cada palabra que cambia y piensa por qué cambia.' } },
          { kind: 'compare', title: 'El mismo mensaje, otro día y otro lugar', columns: [
            { tone: 'teal', label: 'LUCÍA · MARTES, EN OAXACA', sentence: '«[[Mañana|teal]] [[nos|violet]] toca grabar en el taller. [[Vengan|blue]] [[aquí|orange]] el viernes.»', idea: 'Habla desde su día (martes) y su lugar (Oaxaca).', en: 'Lucía speaks from her Tuesday in Oaxaca: “tomorrow” is Wednesday and “here” is Oaxaca.' },
            { tone: 'orange', label: 'PABLO · JUEVES, EN LA CIUDAD DE MÉXICO', sentence: 'Dijo que [[ayer|teal]] [[les|violet]] tocaba grabar en el taller y nos pidió que [[fuéramos|blue]] [[allá|orange]] [[mañana|teal]].', idea: 'El «mañana» del martes era el miércoles: para Pablo, ayer. El viernes, para él, es mañana.', en: 'On Thursday, Lucía’s “tomorrow” (Wednesday) has become “yesterday”, her “Friday” is now “tomorrow”, and Oaxaca is “there”, so coming becomes going.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Pablo cambia «mañana» por «ayer». ¿Por qué?', options: ['Porque lo cuenta el jueves: el «mañana» del martes era el miércoles, y el miércoles, para él, es ayer.', 'Porque en estilo indirecto «mañana» siempre se convierte en «ayer».', 'Porque Lucía se equivocó de día.'], answer: 0, why: 'No hay una regla fija: Pablo vuelve a calcular el día desde su propio jueves.', en: 'Why does Pablo turn “mañana” into “ayer”?' },
            { prompt: '¿Por qué dice Pablo «que fuéramos allá» y no «que viniéramos aquí»?', options: ['Porque Lucía ya no está en Oaxaca.', 'Porque él está en la Ciudad de México: Oaxaca es «allá» y moverse hacia allá es «ir».', 'Porque «venir» no se puede usar en estilo indirecto.'], answer: 1, why: 'El lugar y la dirección se miden desde donde está quien cuenta: Pablo no está en Oaxaca.', en: 'Why does Pablo say “go there” and not “come here”?' },
          ] },
        ] },
        { title: 'El tiempo se recalcula · Time is recalculated', mascot: '/brand/mascot/studying.webp', coach: 'Calcula desde tu día. Count from your own day.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'TIEMPO', question: '¿Cuándo habló la otra persona y cuándo lo cuentas tú?', en: 'When did the other person speak, and when are you reporting it?', formula: ['hoy → ese día · aquel día · el martes', 'mañana → al día siguiente · el miércoles (o hoy / ayer, según cuándo cuentes)', 'ahora → entonces · en ese momento'],
            meaning: '**Hoy, mañana, ayer, ahora, esta semana** se calculan desde el momento en que alguien habla. Al transmitir, no las copies: vuelve a calcular desde **tu** momento. Si ha pasado tiempo, usa una expresión que mire al día de entonces (**ese día, al día siguiente, el día anterior**) o, mejor aún, el **día concreto**.',
            examples: [
              { es: 'Doña Elvira, el miércoles: «Hoy no puedo abrir el archivo». → Lucía, un mes después: Dijo que [[ese día|teal]] no podía abrir el archivo.', en: 'A month later, “today” must be anchored to that day: ese día.' },
              { es: 'Raúl, el lunes: «Llego pasado mañana». → Sonia, en diciembre: Raúl dijo que llegaría [[dos días después|teal]].', en: 'Pasado mañana becomes “two days later” once the date is far behind.' },
              { es: 'Lucía, en marzo: «Ahora estamos sin cobertura». → Pablo, en junio: Dijo que [[en ese momento|teal]] estaban sin cobertura.', en: '“Now” becomes “at that moment” or “then”: the situation belongs to the past.' },
              { es: 'Pablo, el año pasado: «La semana que viene vamos a Oaxaca». → Hoy: Dijo que [[la semana siguiente|teal]] iban a Oaxaca.', en: '“Next week” becomes “the following week” when seen from much later.' },
            ] },
          { kind: 'table', title: 'Expresiones de tiempo · Time expressions', head: ['Lo que se dijo', 'Contado mucho después'], rows: [
            ['hoy · esta mañana · esta noche', '[[ese día|teal]] / [[aquel día|teal]] · [[esa mañana|teal]] · [[esa noche|teal]]'],
            ['ayer · anoche', '[[el día anterior|teal]] · [[la noche anterior|teal]]'],
            ['mañana · pasado mañana', '[[al día siguiente|teal]] · [[dos días después|teal]]'],
            ['anteayer (antier)', '[[dos días antes|teal]]'],
            ['la semana que viene · la semana pasada', '[[la semana siguiente|teal]] · [[la semana anterior|teal]]'],
            ['ahora · ahora mismo', '[[entonces|teal]] · [[en ese momento|teal]] · [[en ese mismo momento|teal]]'],
            ['hace un año · dentro de un mes', '[[un año antes|teal]] · [[un mes después|teal]]'],
          ], note: '«Aquel día» marca más distancia que «ese día» y es frecuente en narraciones. «Antier» es la forma habitual en México y en otras zonas de América. Como complemento de tiempo lo más frecuente es «al día siguiente» («Llegó al día siguiente»).' },
          { kind: 'tip', icon: '🔑', title: 'No es una tabla de traducción · Not a translation table', text: 'Lucía dijo el martes: «Mañana grabamos en el taller». Si Pablo lo cuenta **el martes por la noche**: «dijo que **mañana** grababan». **El miércoles**: «que **hoy** grababan». **El jueves**: «que **ayer** les tocaba grabar». **Un mes después**: «que **al día siguiente** grababan» o «que grababan **el miércoles**». La pregunta es siempre la misma: ¿qué día es ese día **para mí**?', en: 'The same “mañana” can end up as mañana, hoy, ayer or al día siguiente, depending on when you report it. Don’t convert words mechanically: work out which day it was and name it from your own today.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { context: 'Lucía, el martes: «Mañana grabamos en el taller». Pablo lo cuenta el miércoles por la mañana.', prompt: 'Lucía dijo que ___ grababan en el taller.', options: ['ayer', 'el día anterior', 'hoy'], answer: 2, why: 'El «mañana» del martes es el miércoles, el día en que habla Pablo: hoy.', en: 'Lucía said they were filming at the workshop today.' },
            { context: 'Sonia, hace dos años: «Ahora vivo en Puebla».', prompt: 'Sonia me contó que ___ vivía en Puebla.', options: ['ahora', 'mañana', 'entonces'], answer: 2, why: 'El «ahora» de hace dos años ya no es el tuyo: entonces (o en ese momento).', en: 'Sonia told me that she lived in Puebla at the time.' },
          ] },
        ] },
        { title: 'El lugar y los demostrativos · Place and demonstratives', mascot: '/brand/mascot/standing.webp', coach: '¿Estás tú allí? Are you there?', blocks: [
          { kind: 'concept', tone: 'orange', label: 'LUGAR', question: '¿Estás tú en el lugar del que se habló?', en: 'Are you in the place that was being talked about?', formula: ['aquí → allí · allá (si ya no estás en ese lugar)', 'este / esta / esto → ese / esa / eso · aquel / aquella / aquello'],
            meaning: '**Aquí** es el lugar de quien habla y **este** señala algo cercano a quien habla. Si tú cuentas desde otro sitio, ese lugar ya está lejos de ti: **allí / allá**, **ese / aquel**. «Aquel» añade más distancia, en el espacio o en el tiempo, y es típico de los recuerdos.',
            examples: [
              { es: 'Lucía, en Oaxaca: «Aquí hace un calor tremendo». → Pablo, en la capital: Dijo que [[allá|orange]] hacía un calor tremendo.', en: 'From Mexico City, Oaxaca is “there”.' },
              { es: 'Doña Elvira, en el museo: «Esta sala es la más antigua». → Lucía, en el hotel: Dijo que [[esa sala|orange]] era la más antigua.', en: 'This room becomes that room once you are no longer in it.' },
              { es: 'Mi abuela, hace treinta años: «Esta casa la construyó mi padre». → Hoy: Decía que [[aquella casa|orange]] la había construido su padre.', en: 'Aquel adds distance in time: it suits memories.' },
            ] },
          { kind: 'tip', icon: '🌎', title: 'Allí y allá · Allí and allá', text: 'Las dos formas son correctas en todo el mundo hispanohablante. En gran parte de **América**, sobre todo en la conversación, se prefiere **allá**: «¿Qué tal por allá?». En **España** es más frecuente **allí** para un lugar concreto, y **allá** suele expresar dirección o un lugar más vago («más allá», «allá arriba»). **Ahí** señala un lugar cercano a tu oyente o recién mencionado: «—Estoy en el café. —Pues espérame ahí».', en: 'Both allí and allá are correct everywhere. In much of Latin America allá is the usual choice in speech; in Spain allí is more common for a specific place, while allá tends to suggest direction or vaguer distance. Ahí points to a place near your listener or just mentioned.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { context: 'Raúl, desde Guadalajara: «Aquí está lloviendo muchísimo». Sonia lo cuenta en la Ciudad de México.', prompt: 'Raúl dice que ___ está lloviendo muchísimo.', options: ['aquí', 'por aquí', 'allá'], answer: 2, why: 'Sonia no está en Guadalajara: aquí → allá (o allí).', en: 'Raúl says it is raining a lot there.' },
            { context: 'Doña Elvira, en su taller: «Este telar es de mi abuela». Lucía lo cuenta en el hotel.', prompt: 'Me dijo que ___ telar era de su abuela.', options: ['este', 'mi', 'ese'], answer: 2, why: 'Lucía ya no está junto al telar: este → ese (o aquel).', en: 'She told me that loom belonged to her grandmother.' },
          ] },
        ] },
        { title: 'Personas y movimiento · People and movement', mascot: '/brand/mascot/speaking.webp', coach: '¿Quién habla? ¿Hacia dónde? Who speaks? Which way?', blocks: [
          { kind: 'concept', tone: 'violet', label: 'PERSONAS Y POSESIVOS', question: '¿Quién habló, a quién, y a quién se lo cuentas tú?', en: 'Who spoke, to whom, and who are you telling?', formula: ['yo / mi / me → él, ella / su / le, la', 'tú / tu / te → yo / mi / me (si te lo dijeron a ti)', 'su (de una tercera persona) → tu (si hablas con esa persona)'],
            meaning: 'Los pronombres y los posesivos también apuntan a quien habla y a quien escucha. Ajusta cada uno a la nueva conversación. Si «su» resulta ambiguo, aclara: **la de ella**, **la de Raúl**.',
            examples: [
              { es: 'Lucía a Pablo: «Mi cámara no carga bien». → Pablo a Sonia: Dijo que [[su|violet]] cámara no cargaba bien (la de ella).', en: 'Mi becomes su; add “la de ella” if su could be misread.' },
              { es: 'Lucía a Pablo: «Te llamo el sábado». → Pablo: Dijo que [[me|violet]] llamaría el sábado.', en: 'Te, said to you, becomes me when you report it.' },
              { es: 'Lucía a Pablo: «Dile a Sonia que su idea funciona». → Pablo a Sonia: Dijo que [[tu|violet]] idea funciona.', en: 'Talking to Sonia herself, “her idea” becomes “your idea”.' },
            ] },
          { kind: 'concept', tone: 'blue', label: 'VENIR / IR · TRAER / LLEVAR', question: '¿El movimiento va hacia donde estás tú ahora?', en: 'Does the movement go towards where you are now?', formula: ['venir · traer → hacia el lugar donde está quien habla', 'ir · llevar → hacia otro lugar'],
            meaning: 'En español, **venir** y **traer** expresan movimiento hacia el lugar donde está quien habla; **ir** y **llevar**, hacia otro lugar. Al transmitir, decide desde **tu** posición: si tú no estás en el destino, **ir / llevar**; si estás allí, **venir / traer**.',
            examples: [
              { es: 'Lucía, en Oaxaca: «Vengan y traigan las baterías».', en: 'Lucía is at the destination, so she uses venir and traer.' },
              { es: 'Pablo, en la Ciudad de México: Nos pidió que [[fuéramos|blue]] y [[lleváramos|blue]] las baterías.', en: 'Pablo is not there yet: ir and llevar.' },
              { es: 'Pablo, ya en Oaxaca: Nos pidió que [[viniéramos|blue]] y [[trajéramos|blue]] las baterías.', en: 'Once Pablo is in Oaxaca, the destination is “here” again: venir and traer.' },
            ] },
          { kind: 'tip', icon: '💡', title: '«Ya voy», no «ya vengo» · “I’m coming” is «ya voy»', text: 'Si alguien te llama desde otra habitación, respondes **«¡Ya voy!»**: vas hacia el lugar de esa persona, no hacia el tuyo. En muchas zonas, **«ya vengo»** o **«ahorita vengo»** significa «vuelvo enseguida».', en: 'English “I’m coming” moves towards the listener, but Spanish normally uses ir for that: “¡Ya voy!”. In many places “ya vengo” means “I’ll be right back”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { context: 'Sonia (en la oficina de la capital) a Pablo, que está en Oaxaca: «Tráeme un tapete».', prompt: 'Pablo, en Oaxaca, a Lucía: Sonia me pidió que le ___ un tapete.', options: ['trajera', 'traía', 'llevara'], answer: 2, why: 'El tapete va de Oaxaca a la capital, donde Pablo no está: llevar. Sonia dijo «tráeme» porque ella estaba en el destino.', en: 'Sonia asked me to take her a rug.' },
            { context: 'Lucía a Pablo: «Te espero en la plaza».', prompt: 'Pablo a Sonia: Dijo que ___ esperaría en la plaza.', options: ['te', 'la', 'me'], answer: 2, why: 'Lo dijo a Pablo (te) y Pablo lo cuenta sobre sí mismo: me.', en: 'She said she would wait for me in the square.' },
            { context: 'Raúl, en Guadalajara: «¿Les llevo los cables?». Lucía lo cuenta en Oaxaca.', prompt: 'Raúl preguntó si nos ___ los cables.', options: ['llevaba', 'llevamos', 'traía'], answer: 2, why: 'Lucía está en Oaxaca, adonde llegan los cables: traer.', en: 'Raúl asked if he should bring us the cables.' },
          ] },
        ] },
        { title: '¿Cambiar o mantener? · Shift or keep?', mascot: '/brand/mascot/seated.webp', coach: 'Mismo día, mismo lugar: no cambies. Same day, same place: keep.', blocks: [
          { kind: 'decide', title: 'Antes de transmitir, pregúntate', steps: [
            { q: '¿Lo cuentas el mismo día y «hoy», «mañana» o «esta tarde» siguen señalando el mismo momento?', yes: 'Mantén las palabras de tiempo: «Hace un rato dijo que [[mañana|teal]] llega a las diez».', no: 'next' },
            { q: '¿Estás en el mismo lugar que la persona que habló (o en el lugar del que habló)?', yes: 'Mantén **aquí, este, venir, traer**: «Dijo que [[viniéramos|blue]] [[aquí|orange]] a las diez».', no: 'next' },
            { q: '¿Puedes decir el día o el lugar exactos?', yes: 'Hazlo: es lo más claro. «Dijo que llegaba **el viernes**, **a la plaza**».', no: 'Usa expresiones que miren a aquel momento y a aquel lugar: **ese día, al día siguiente, allí / allá, ese / aquel, ir, llevar**.' },
          ] },
          { kind: 'compare', title: 'Cambiar de más también es un error', columns: [
            { tone: 'teal', label: 'HACE UNA HORA, EN LA OFICINA', sentence: 'Sonia dijo que [[hoy|teal]] se queda [[aquí|orange]] hasta las ocho.', idea: 'Mismo día y mismo lugar: «ese día» y «allí» confundirían a tu oyente.', en: 'Same day, same place: keep hoy and aquí. Shifting them would sound as if Sonia meant another day and another place.' },
            { tone: 'orange', label: 'UN MES DESPUÉS, EN OTRA CIUDAD', sentence: 'Sonia dijo que [[ese día|teal]] se quedaba [[allí|orange]] hasta las ocho.', idea: 'Otro día y otro lugar: ahora sí hay que recalcular.', en: 'Different day, different place: now the shift is needed.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { context: 'Hace diez minutos, aquí en la sala, el director: «Hoy no viene nadie aquí».', prompt: '¿Qué versión es adecuada ahora, en la misma sala?', options: ['Dijo que el día anterior no venía nadie allá.', 'Dijo que hoy no venía nadie aquí.', 'Dijo que ese día no iba nadie allí.'], answer: 1, why: 'Mismo día y mismo lugar: hoy, aquí y venir se mantienen.', en: 'Which version fits now, in the same room?' },
            { context: 'Lucía, el lunes pasado, desde Oaxaca: «Vengan cuando quieran».', prompt: 'Pablo ya está en Oaxaca y se lo cuenta a Raúl allí mismo: Lucía nos dijo que ___ cuando quisiéramos.', options: ['fuéramos', 'vendríamos', 'viniéramos'], answer: 2, why: 'Pablo está ahora en el destino: venir se mantiene (pedido: subjuntivo).', en: 'Lucía told us to come whenever we wanted.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'No copies: recalcula. Don’t copy: recalculate.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y su contexto; tu alumno dice qué palabra apunta mal y cuál es la corrección. Después aparece la explicación.', self: 'Lee el contexto entre paréntesis y la frase. ¿Qué palabra apunta a un día, un lugar o una persona equivocados? Toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: '(Pablo, en la Ciudad de México) Lucía nos pidió que viniéramos aquí el viernes.', right: 'Lucía nos pidió que fuéramos allá el viernes.', why: 'Pablo no está en Oaxaca: aquí → allá y venir → ir. (He is not at the destination.)' },
            { wrong: '(Un mes después) Raúl dijo que mañana terminaba el montaje.', right: 'Raúl dijo que al día siguiente terminaba el montaje.', why: 'El «mañana» de hace un mes ya no es el tuyo: al día siguiente, o el día concreto.' },
            { wrong: '(Pablo, todavía en la capital) Lucía me pidió que trajera las baterías.', right: 'Lucía me pidió que llevara las baterías.', why: 'Las baterías van hacia Oaxaca, donde Pablo no está: llevar.' },
            { wrong: '(Pablo a Sonia) Lucía dijo que su idea del mercado funciona de maravilla.', right: 'Lucía dijo que tu idea del mercado funciona de maravilla.', why: 'La idea es de Sonia y Pablo le habla a ella: tu. «Su» haría pensar en la idea de Lucía.' },
            { wrong: '(Hace una hora, en esta oficina) Ana dijo que ese día no vendría allí.', right: 'Ana dijo que hoy no vendría aquí.', why: 'Mismo día y mismo lugar: cambiar hoy y aquí confunde. No todo se desplaza.' },
            { wrong: '(Te llaman desde la cocina) —¡Pablo! —¡Ya vengo!', right: '—¡Pablo! —¡Ya voy!', why: 'Vas hacia el lugar de otra persona: ir. «Ya vengo» suele significar «vuelvo enseguida».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { context: 'Tu amiga, el viernes pasado, por teléfono: «Esta noche vamos al concierto».', prompt: 'Hoy, lunes: Me dijo que ___ iban al concierto.', options: ['esa noche', 'esta noche', 'anoche'], answer: 0, why: '«Esta noche» era la del viernes: esa noche (o el viernes por la noche).', en: 'She told me they were going to the concert that night.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tú dices una frase con hoy, aquí y venir («Hoy ven aquí a las seis»). Tu alumno la transmite dos veces: como si fuera hoy en el mismo lugar, y como si fuera el mes que viene en otra ciudad.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Lo que dijo Lucía', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'Jueves en la oficina · Thursday at the office', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Sonia y tu alumno es Pablo. Después tu alumno toca cada expresión marcada y reconstruye las palabras exactas de Lucía.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada e imagina las palabras exactas de Lucía el martes.' } },
          { kind: 'explore', title: 'Noticias del rodaje', setting: 'Jueves por la mañana, en la oficina de la productora, en la Ciudad de México. Lucía llamó a Pablo el martes por la noche desde un pueblo de Oaxaca. Sonia no ha podido hablar con ella. (Thursday morning at the office in Mexico City. Lucía phoned Pablo on Tuesday night from a village in Oaxaca.)', lines: [
            { who: 'Sonia', text: '¿Has sabido algo de Lucía? Le escribo desde el martes y no contesta.', en: 'Have you heard from Lucía? I’ve been texting her since Tuesday and she doesn’t answer.' },
            { who: 'Pablo', text: 'Me llamó el martes por la noche. Dijo que [[ese día|teal]] habían grabado en el mercado y que [[al día siguiente|teal]] les tocaba el taller de tejido.', en: 'She called me on Tuesday night. She said they had filmed at the market that day and that the next day it was the weaving workshop’s turn.' },
            { who: 'Sonia', text: 'O sea, [[ayer|teal]]. ¿Y qué tal por [[allá|orange]]?', en: 'So, yesterday. And how are things over there?' },
            { who: 'Pablo', text: 'Bien, pero dijo que [[allá|orange]] hacía un calor tremendo y que [[en ese momento|teal]] estaban en un pueblo casi sin cobertura.', en: 'Fine, but she said it was terribly hot there and that at that moment they were in a village with almost no signal.' },
            { who: 'Sonia', text: 'Por eso no contesta. ¿Y qué quiere que hagamos nosotros?', en: 'That’s why she isn’t answering. And what does she want us to do?' },
            { who: 'Pablo', text: 'Nos pidió que [[fuéramos|blue]] [[allá|orange]] el viernes, o sea, [[mañana|teal]], y que [[lleváramos|blue]] las baterías nuevas.', en: 'She asked us to go there on Friday, that is, tomorrow, and to take the new batteries.' },
            { who: 'Sonia', text: '¿Son para la cámara de Raúl?', en: 'Are they for Raúl’s camera?' },
            { who: 'Pablo', text: 'No, para la de ella. Dijo que [[su|violet]] cámara grande no cargaba bien desde el lunes.', en: 'No, for hers. She said her big camera hadn’t been charging properly since Monday.' },
            { who: 'Sonia', text: 'Entendido. ¿Y dónde nos vemos?', en: 'Got it. And where are we meeting?' },
            { who: 'Pablo', text: 'Dijo que nos esperaría en [[ese café de la plaza|orange]], el de la terraza. Ah, y [[me pidió que te dijera|violet]] que [[tu idea|violet]] del mercado funciona de maravilla.', en: 'She said she’d wait for us at that café on the square, the one with the terrace. Oh, and she asked me to tell you that your market idea works brilliantly.' },
            { who: 'Sonia', text: '¡Qué bien! ¿Y desde entonces no te ha escrito?', en: 'Great! And she hasn’t written to you since then?' },
            { who: 'Pablo', text: 'Sí, hace un rato. Dice que [[hoy|teal]] por fin tienen señal y que [[mañana|teal]] nos ve en la plaza.', en: 'Yes, a little while ago. She says they finally have a signal today and that she’ll see us in the square tomorrow.' },
          ], notes: {
            'ese día': 'Lucía dijo «**Hoy** hemos grabado en el mercado» el martes. El jueves, ese «hoy» ya no sirve: **ese día** (o «el martes»).',
            'al día siguiente': 'Lucía dijo «**Mañana** nos toca el taller». Pablo lo cuenta mirando a aquel martes: **al día siguiente**.',
            'ayer': 'Sonia recalcula desde su jueves: el día siguiente al martes es el miércoles, es decir, **ayer**.',
            'allá': 'Lucía dijo «**aquí**». Vista desde la Ciudad de México, Oaxaca es **allá**, la forma preferida en México y en gran parte de América (en España sería frecuente «allí»).',
            'en ese momento': 'Lucía dijo «**Ahora** estamos en un pueblo casi sin cobertura». Ese «ahora» era el del martes: **en ese momento** (o entonces).',
            'fuéramos': 'Lucía dijo «**Vengan**»: ella estaba en el destino. Pablo no lo está, así que **venir → ir**. Es una petición: pidió que + subjuntivo.',
            'mañana': 'En «el viernes, o sea, mañana», Lucía había dicho «el viernes»; el jueves, el viernes es **mañana**: el cambio también va en esta dirección. Al final, Lucía escribió hoy «mañana nos vemos» y Pablo lo cuenta hoy: **se mantiene**.',
            'lleváramos': 'Lucía dijo «**Traigan** las baterías». Para Pablo, las baterías salen de la capital hacia otro lugar: **traer → llevar**.',
            'su': 'Lucía dijo «**mi** cámara» → **su** cámara. Pablo aclara antes «la de ella» porque «su» podría referirse a Raúl.',
            'ese café de la plaza': 'Lucía dijo «Los espero en **este** café». Pablo no está allí: **este → ese**.',
            'me pidió que te dijera': 'Lucía le dijo a Pablo «**Dile a Sonia**…». Ahora Pablo habla con Sonia: el «tú» de Lucía pasa a **me** y Sonia pasa a **te**.',
            'tu idea': 'Lucía dijo «**su** idea» (la de Sonia). Pablo le habla a Sonia: **su → tu**. Y «funciona» queda en presente porque sigue siendo verdad.',
            'hoy': 'El mensaje es de hoy y Pablo lo cuenta hoy: **hoy se mantiene**. Con «dice» en presente, el tiempo verbal tampoco cambia.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué Lucía no contestaba los mensajes de Sonia?', options: ['Porque estaba enfadada con Sonia.', 'Porque estaba en un pueblo casi sin cobertura.', 'Porque su teléfono no cargaba bien.'], answer: 1, why: '«Dijo que en ese momento estaban en un pueblo casi sin cobertura».', en: 'Why wasn’t Lucía answering Sonia’s messages?' },
            { prompt: '¿Cuándo viajan Pablo y Sonia a Oaxaca?', options: ['El viernes, el día siguiente a esta conversación.', 'El martes por la noche.', 'Hoy, jueves.'], answer: 0, why: '«Nos pidió que fuéramos allá el viernes, o sea, mañana».', en: 'When are Pablo and Sonia travelling to Oaxaca?' },
            { prompt: '¿Para quién son las baterías nuevas?', options: ['Para la cámara grande de Lucía.', 'Para la cámara de Raúl.', 'Para el museo del pueblo.'], answer: 0, why: '«No, para la de ella. Dijo que su cámara grande no cargaba bien».', en: 'Who are the new batteries for?' },
          ] },
        ] },
        { title: '¿Qué cambió? · What changed?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Palabras de Lucía → versión de Pablo', categories: [
            { id: 'tiempo', label: 'TIEMPO', tone: 'teal' },
            { id: 'lugar', label: 'LUGAR', tone: 'orange' },
            { id: 'persona', label: 'PERSONA', tone: 'violet' },
            { id: 'movimiento', label: 'MOVIMIENTO', tone: 'blue' },
          ], items: [
            { text: '«Ahora estamos casi sin cobertura» → en ese momento estaban casi sin cobertura', answer: 'tiempo', why: 'Ahora → en ese momento: el momento de Lucía ya pasó.' },
            { text: '«Aquí hace un calor tremendo» → allá hacía un calor tremendo', answer: 'lugar', why: 'Aquí → allá: Pablo está en otra ciudad.' },
            { text: '«Mi cámara no carga bien» → su cámara no cargaba bien', answer: 'persona', why: 'Mi → su: ahora la dueña es una tercera persona.' },
            { text: '«Traigan las baterías» → que lleváramos las baterías', answer: 'movimiento', why: 'Traer → llevar: Pablo no está en el destino.' },
            { text: '«Los espero en este café» → nos esperaría en ese café', answer: 'lugar', why: 'Este → ese: el café está lejos de Pablo.' },
            { text: '«Dile a Sonia…» → me pidió que te dijera', answer: 'persona', why: 'Tú → me, Sonia → te: cambian los participantes de la conversación.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué diría Pablo si contara esta llamada el martes por la noche, recién colgado?». Respuesta esperada: «Dijo que hoy habían grabado en el mercado y que mañana les toca el taller».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Cuándo y dónde estoy yo? When and where am I?',
      steps: [
        { title: 'Elige según el contexto · Choose by context', blocks: [
          { kind: 'choice', items: [
            { context: 'Doña Elvira, el miércoles en el museo: «Esta sala es la más antigua». Lucía lo cuenta el jueves en el hotel.', prompt: 'Doña Elvira me dijo que ___ sala era la más antigua.', options: ['nuestra', 'aquella', 'esta'], answer: 1, why: 'Lucía ya no está en el museo: esta → esa / aquella.', en: 'Doña Elvira told me that room was the oldest one.' },
            { context: 'Raúl, el lunes 10: «Llego a Oaxaca pasado mañana». Sonia lo cuenta un mes después.', prompt: 'Raúl dijo que llegaría a Oaxaca ___.', options: ['dos días después', 'pasado mañana', 'dos días antes'], answer: 0, why: 'Visto desde un mes después: pasado mañana → dos días después (o el miércoles 12).', en: 'Raúl said he would arrive in Oaxaca two days later.' },
            { context: 'Lucía a Pablo, por teléfono: «Ven y trae el micrófono de reserva». Pablo, todavía en la capital, se lo cuenta a Sonia.', prompt: 'Lucía me pidió que ___ el micrófono de reserva.', options: ['viniera y trajera', 'iba y llevaba', 'fuera y llevara'], answer: 2, why: 'Pablo no está en el destino: ir y llevar. Petición: subjuntivo.', en: 'Lucía asked me to go and take the spare microphone.' },
            { context: 'El mismo mensaje. Pablo ya ha llegado a Oaxaca y se lo cuenta a Raúl allí.', prompt: 'Lucía me pidió que ___ el micrófono de reserva.', options: ['viniera y trajera', 'fuera y llevara', 'vendría y traería'], answer: 0, why: 'Ahora Pablo está en el destino: venir y traer. Petición: subjuntivo, no condicional.', en: 'Lucía asked me to come and bring the spare microphone.' },
            { context: 'Sonia, hace cinco minutos, en la oficina: «Ahora no puedo hablar; te llamo esta tarde».', prompt: 'Pablo a Raúl: Sonia dice que ___ no puede hablar y que me llama ___.', options: ['ahora · esta tarde', 'entonces · esa tarde', 'en ese momento · aquella tarde'], answer: 0, why: 'Han pasado cinco minutos: el «ahora» y la tarde siguen siendo los mismos.', en: 'Sonia says she can’t talk now and will call me this afternoon.' },
            { context: 'Doña Elvira, hace un año: «La semana que viene abrimos el museo».', prompt: 'Doña Elvira nos contó que ___ abrían el museo.', options: ['la semana que viene', 'la semana anterior', 'la semana siguiente'], answer: 2, why: 'Hace un año, «la semana que viene» miraba a una semana ya pasada: la semana siguiente.', en: 'Doña Elvira told us they were opening the museum the following week.' },
          ] },
        ] },
        { title: '¿Cambia o se mantiene? · Shift or keep?', blocks: [
          { kind: 'classify', title: 'Lee el contexto y decide', categories: [
            { id: 'cambia', label: 'Tiempo, lugar o movimiento cambian', tone: 'teal' },
            { id: 'mantiene', label: 'Tiempo, lugar y movimiento se mantienen', tone: 'orange' },
          ], items: [
            { text: '(El mismo día, en la misma sala) «Aquí no se puede comer» → Dijo que aquí no se puede comer.', answer: 'mantiene', why: 'Mismo día y mismo lugar: aquí se mantiene.' },
            { text: '(Una semana después) «Hoy cerramos temprano» → Dijo que ese día cerraban temprano.', answer: 'cambia', why: 'Ha pasado una semana: hoy → ese día.' },
            { text: '(Pablo, ya en Oaxaca) «Vengan a Oaxaca» → Nos pidió que viniéramos.', answer: 'mantiene', why: 'Pablo está en el destino: venir se mantiene.' },
            { text: '(Desde la capital) «Te espero en este café» → Dijo que me esperaría en ese café.', answer: 'cambia', why: 'Quien cuenta no está en el café: este → ese.' },
            { text: '(Una hora después) «Mañana te llamo» → Dijo que mañana me llamaba.', answer: 'mantiene', why: 'Mismo día: mañana sigue siendo mañana. Solo cambia la persona (te → me).' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: '(Jueves, en la capital) Lucía dijo que el martes ya estaban aquí, en el pueblo.', ok: false, options: ['Lucía dijo que ese martes ya están aquí, en el pueblo.', 'Lucía dijo que el martes ya estaban allá, en el pueblo.', 'Lucía dijo que el martes ya estaban aquí, en este pueblo.'], answer: 1, why: 'Quien cuenta no está en el pueblo: aquí → allá (o allí).' },
            { sentence: '(Un mes después) Raúl dijo que la semana que viene terminaría el montaje.', ok: false, options: ['Raúl dijo que la semana pasada terminaría el montaje.', 'Raúl dijo que esta semana terminaría el montaje.', 'Raúl dijo que la semana siguiente terminaría el montaje.'], answer: 2, why: 'Un mes después, «la semana que viene» apunta a otra semana: la semana siguiente.' },
            { sentence: '(Viernes, en Oaxaca) Lucía le contó a Raúl que Pablo traería las baterías nuevas.', ok: true, why: 'Correcta: Lucía está en Oaxaca, adonde llegan las baterías: traer.' },
            { sentence: '(Sonia le cuenta a Pablo lo que Lucía dijo de la idea de Pablo) Lucía dijo que su idea era genial, Pablo.', ok: false, options: ['Lucía dijo que tu idea era genial, Pablo.', 'Lucía dijo que mi idea era genial, Pablo.', 'Lucía dijo que esa idea suya era genial, Pablo.'], answer: 0, why: 'Sonia le habla a Pablo, el dueño de la idea: tu. «Su» haría pensar en la idea de Lucía.' },
            { sentence: '(Hace cinco minutos, en esta misma sala) El director dijo que ese día no vendría nadie allí.', ok: false, options: ['El director dijo que hoy no iría nadie allí.', 'El director dijo que hoy no vendría nadie aquí.', 'El director dijo que ese día no vendría nadie aquí.'], answer: 1, why: 'Mismo día y mismo lugar: hoy y aquí se mantienen. Cambiarlos confunde.' },
            { sentence: '(Dos años después) Doña Elvira nos contó que aquel verano habían abierto el museo.', ok: true, why: 'Correcta: «Este verano hemos abierto el museo», contado mucho después: aquel verano.' },
          ] },
        ] },
        { title: 'Viernes en Oaxaca · Friday in Oaxaca', blocks: [
          { kind: 'chat-fill', title: 'Lucía le cuenta a Raúl la llamada de Pablo de ayer', lines: [
            { who: 'Raúl', text: 'Acabo de llegar de Guadalajara. ¿Al final vienen Pablo y Sonia?' },
            { who: 'Lucía', text: 'Sí. Ayer por la tarde Pablo me dijo: «Mañana vamos para allá». O sea, que ___ hoy: llegan a las nueve y media.', options: ['iban', 'vendrán mañana', 'venían'], answer: 2, why: 'Lucía está en Oaxaca, el destino: ir → venir. Y el «mañana» de ayer es hoy.' },
            { who: 'Raúl', text: '¿Y traen lo que pediste?' },
            { who: 'Lucía', text: 'Dijo que ___ las baterías y el micrófono de reserva.', options: ['traerían', 'llevarían', 'traigan'], answer: 0, why: 'Pablo dijo «llevamos»; Lucía está donde llegan las cosas: traer.' },
            { who: 'Raúl', text: '¿Les dijiste dónde nos vemos?' },
            { who: 'Lucía', text: 'Sí. Pablo me dijo «Espéranos en la puerta del café», así que tengo que ___ en la puerta del café a las diez.', options: ['esperarme', 'esperarlos', 'esperarnos'], answer: 1, why: '«Espéranos» (a nosotros) → Lucía habla de Pablo y Sonia: los.' },
            { who: 'Raúl', text: '¿Ya tienen los boletos de vuelta?' },
            { who: 'Lucía', text: 'Sí. Pablo me dijo que ___ los habían comprado.', options: ['al día siguiente', 'ayer', 'hoy'], answer: 1, why: 'Pablo dijo ayer «Hoy hemos comprado los boletos»: ese «hoy» es ayer para Lucía.' },
            { who: 'Raúl', text: '¿Y qué tal el tiempo en la capital?' },
            { who: 'Lucía', text: 'Dijo que ___ estaba lloviendo muchísimo.', options: ['aquí', 'por aquí', 'allá'], answer: 2, why: 'Pablo dijo «aquí» desde la capital; Lucía está en Oaxaca: allá.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Dijo', 'que', 'nos', 'esperaría', 'allí', 'al', 'día', 'siguiente'], accept: ['Dijo que nos esperaría allí al día siguiente', 'Dijo que al día siguiente nos esperaría allí', 'Dijo que nos esperaría al día siguiente allí'], en: 'She said she would wait for us there the next day.' },
            { tiles: ['Me', 'pidió', 'que', 'llevara', 'las', 'baterías', 'a', 'Oaxaca'], accept: ['Me pidió que llevara las baterías a Oaxaca', 'Me pidió que llevara a Oaxaca las baterías'], en: 'He asked me to take the batteries to Oaxaca.' },
            { tiles: ['Explicó', 'que', 'en', 'ese', 'momento', 'estaban', 'sin', 'señal'], accept: ['Explicó que en ese momento estaban sin señal', 'Explicó que estaban sin señal en ese momento'], en: 'She explained that at that moment they had no signal.' },
          ] },
        ] },
        { title: 'Transmite el mensaje · Report the message', blocks: [
          { kind: 'rewrite', title: 'Recalcula tiempo, lugar y personas', items: [
            { prompt: 'Doña Elvira a Lucía y su equipo (miércoles, en el pueblo): «Mañana les abro el archivo». Lo cuenta Lucía una semana después, en la capital.', instruction: 'Empieza con «Doña Elvira dijo que…» y usa una expresión relativa, no el día.', accept: ['Doña Elvira dijo que al día siguiente nos abriría el archivo', 'Doña Elvira dijo que nos abriría el archivo al día siguiente', 'Doña Elvira dijo que al día siguiente nos abría el archivo', 'Doña Elvira dijo que nos abría el archivo al día siguiente', 'Doña Elvira dijo que el día siguiente nos abriría el archivo'] },
            { prompt: 'Raúl te dijo por teléfono desde Guadalajara: «Ahora estoy en el aeropuerto; mañana te llevo los cables». Lo cuentas tres días después, en Oaxaca.', instruction: 'Empieza con «Raúl dijo que en ese momento…».', accept: ['Raúl dijo que en ese momento estaba en el aeropuerto y que al día siguiente me traería los cables', 'Raúl dijo que en ese momento estaba en el aeropuerto y que me traería los cables al día siguiente', 'Raúl dijo que en ese momento estaba en el aeropuerto y que al día siguiente me traía los cables', 'Raúl dijo que en ese momento estaba en el aeropuerto y que me traía los cables al día siguiente', 'Raúl dijo que en ese momento estaba en el aeropuerto y al día siguiente me traería los cables'] },
            { prompt: 'Sonia, hace diez minutos, aquí en la oficina: «Hoy me quedo aquí hasta las ocho».', instruction: 'Cuéntalo ahora, en la misma oficina. Empieza con «Sonia dice que…».', accept: ['Sonia dice que hoy se queda aquí hasta las ocho', 'Sonia dice que se queda aquí hasta las ocho hoy'] },
            { prompt: 'Pablo, un lunes, en la capital: «Esta semana vamos a Oaxaca». Lo cuenta Lucía al año siguiente, en Oaxaca.', instruction: 'Lucía está en Oaxaca. Empieza con «Pablo dijo que esa semana…».', accept: ['Pablo dijo que esa semana venían a Oaxaca', 'Pablo dijo que esa semana vendrían a Oaxaca', 'Pablo dijo que esa semana iban a venir a Oaxaca'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno cuenta un mensaje real que recibió hace tiempo desde otro lugar (una llamada, un audio) y tú preguntas por las palabras exactas para comparar.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio de Lucía', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Lucía cambia el plan · Lucía changes the plan', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno anota cada expresión de tiempo, de lugar y cada verbo de movimiento, y dice desde dónde y cuándo habla Lucía. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles. Anota las expresiones de tiempo y de lugar y piensa: ¿desde dónde y cuándo habla Lucía?' } },
          { kind: 'listen', title: 'Un mensaje de voz de Lucía', channel: 'MENSAJE DE VOZ · JUEVES POR LA NOCHE · DE LUCÍA PARA PABLO', src: '/audio/grammar-live/447.mp3',
            before: 'Es jueves por la noche. Lucía ya ha vuelto del pueblo a la ciudad de Oaxaca y le deja un audio a Pablo sobre lo que le dijo ayer la directora del museo. ¿Qué crees que ha cambiado en el plan? (What do you think has changed in the plan?)',
            gist: { prompt: '¿Para qué manda Lucía el audio?', options: ['Para quejarse de que el museo no les abrió el archivo.', 'Para contar lo que le dijo la directora del museo y darle a Pablo una tarea nueva.', 'Para cancelar el viaje de Pablo y Sonia.'], answer: 1, why: 'Cuenta lo que dijo doña Elvira y le pide a Pablo que vaya al pueblo con la carta.', en: 'Why does Lucía send the voice message?' },
            details: [
              { prompt: '¿Por qué no grabaron el archivo el miércoles?', options: ['Porque no había señal.', 'Porque la cámara no cargaba.', 'Porque la directora no podía abrirlo ese día.'], answer: 2, why: '«Me dijo que ese día no podía abrirnos el archivo».', en: 'Why didn’t they film the archive on Wednesday?' },
              { prompt: '¿Cuándo empieza la feria del tapete?', options: ['La semana siguiente.', 'El viernes: doña Elvira dijo «pasado mañana» el miércoles.', 'El sábado, pasado mañana.'], answer: 1, why: '«Me dijo que pasado mañana… bueno, ahora ya es mañana».', en: 'When does the rug fair start?' },
              { prompt: '¿Qué tiene que hacer Pablo?', options: ['Llamar a doña Elvira por teléfono.', 'Grabar la feria él solo.', 'Ir al pueblo a hablar con el comité y llevar la carta firmada.'], answer: 2, why: '«Me pidió que fueras allá a hablar con su comité y que llevaras la carta».', en: 'What does Pablo have to do?' },
              { prompt: 'Al final Lucía dice «vengan» y «traigan». ¿Por qué no «vayan» y «lleven»?', options: ['Porque es más formal.', 'Porque habla de su propio plan y ella está en Oaxaca, adonde llegan Pablo y Sonia.', 'Porque está transmitiendo palabras de doña Elvira.'], answer: 1, why: 'Ya no transmite: habla desde su lugar, el destino. Venir y traer.', en: 'Why does Lucía say “come” and “bring” at the end?' },
            ],
            transcript: 'Pablo, soy Lucía. ¡Por fin tengo señal! Ya estoy en la ciudad, en el hotel. Te cuento lo de ayer en el pueblo, porque cambia un poco el plan. La directora del museo, doña Elvira, me dijo que [[ese día|teal]] no podía abrirnos el archivo, pero que [[hoy|teal]] ya lo tendría listo. Así que esta mañana volví [[allá|orange]] y grabamos casi dos horas: fotos, cartas, telares antiguos… una maravilla. También me contó que [[pasado mañana|teal]]… bueno, ahora ya es [[mañana|teal]], empieza la feria del tapete y que podemos grabarla. Eso sí, me pidió que tú [[fueras|blue]] [[allá|orange]] a hablar con [[su|violet]] comité y que [[llevaras|blue]] la carta de la productora firmada. Y otra cosa: me dijo que [[aquel|orange]] taller donde grabamos el miércoles es de [[su|violet]] familia. ¡No teníamos ni idea! Lo de mañana no cambia: los espero aquí, en el café de la plaza, a las diez. Vengan directo de la central de autobuses y traigan la carta, ¿sale? Un abrazo.',
            reply: { teacher: 'Tú eres Lucía. Tu alumno es Pablo y responde con un audio desde la capital: confirma la tarea («Doña Elvira quiere que vaya allá…») y cuenta algo que le dijo Sonia hoy.', self: 'Responde a Lucía como si fueras Pablo, desde la capital: confirma qué te pidió doña Elvira y cuenta algo que te dijo Sonia hoy.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Mensajes de otro día, de otro lugar', coach: 'Cuenta desde tu aquí y tu ahora. Report from your here and now.',
      steps: [
        { title: 'Lo que me dijeron · What I was told', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las tarjetas. Tu alumno cuenta y tú preguntas a veces por las palabras exactas («¿Y qué te dijo exactamente?») para comprobar que el día y el lugar se entienden.', self: 'Responde cada tarjeta en voz alta. Después di también las palabras exactas de la otra persona y comprueba qué cambió.' } },
          { kind: 'talk', cards: [
            { q: '¿Recuerdas una llamada o un audio de alguien que estaba lejos? ¿Qué te contó de aquel lugar? · Do you remember a call from someone far away?', followUps: ['¿Dónde estaba y dónde estabas tú?', '¿Qué te dijo exactamente? Usa sus palabras.', '¿Te pidió que fueras o que llevaras algo?'], phrases: ['Me dijo que [[allí / allá|orange]]…', 'Me contó que [[ese día|teal]]…', 'Me pidió que [[fuera|blue]] / [[llevara|blue]]…'], hint: 'Tú no estabas allí: aquí → allí / allá, venir → ir.', example: 'El año pasado mi hermana me llamó desde Montreal. Me dijo que allá ya estaba nevando y que ese día estaban a treinta grados bajo cero. Me pidió que le llevara café de Chiapas cuando fuera a visitarla.', next: 'Ahora, una promesa vieja.', teacher: 'Pregunta después: «¿Y qué te dijo con sus palabras?». Tu alumno pasa del estilo indirecto al directo y comprueba los cambios.' },
            { q: '¿Alguien te prometió hace tiempo «mañana te llamo» o «la semana que viene paso por tu casa»? ¿Cumplió? · An old promise: was it kept?', followUps: ['¿Cuándo te lo dijo?', '¿Qué pasó al día siguiente?', '¿Cómo lo cuentas ahora?'], phrases: ['Me prometió que [[al día siguiente|teal]]…', 'Dijo que [[la semana siguiente|teal]] [[vendría|blue]] / [[iría|blue]]…', '[[Aquel día|teal]]…'], hint: 'La promesa es de hace tiempo: mañana → al día siguiente, la semana que viene → la semana siguiente.', example: 'Hace años, un vecino me prometió que al día siguiente me devolvería la escalera. La semana siguiente todavía no la había traído, así que fui yo a su casa.', next: 'Ahora, recados con movimiento.' },
            { q: 'Cuenta un recado que tuviste que transmitir: alguien te pidió que dijeras a otra persona que viniera o que trajera algo. · A message you had to pass on.', followUps: ['¿Dónde estabas tú cuando lo contaste?', '¿Usaste venir o ir? ¿Por qué?', '¿Llegó bien el mensaje?'], phrases: ['Me pidió que te dijera que…', 'Quería que [[fueras|blue]] / [[vinieras|blue]]…', 'Que [[llevaras|blue]] / [[trajeras|blue]]…'], hint: 'Decide desde tu lugar: si estás en el destino, venir / traer; si no, ir / llevar.', example: 'Mi jefa me llamó desde la otra sede y me pidió que le dijera a Marta que fuera allí el lunes y que llevara los contratos. Marta se confundió de sede, así que la próxima vez daré la dirección exacta.', next: 'Ahora, el mismo día.' },
            { q: 'Cuéntame algo que te dijo alguien hoy, aquí en tu ciudad. ¿Cambias algo al contarlo? · Something said today, here.', followUps: ['¿Por qué mantienes «hoy» o «aquí»?', '¿Y si lo contaras dentro de un mes?', '¿Qué palabras cambiarían entonces?'], phrases: ['Esta mañana me dijo que [[hoy|teal]]…', 'Dice que [[aquí|orange]]…', 'Dentro de un mes diría: «[[ese día|teal]]…»'], hint: 'Mismo día y mismo lugar: no cambies. Compara con la versión de dentro de un mes.', example: 'Esta mañana mi compañero me dijo que hoy cierran la cafetería de aquí abajo a las tres. Dentro de un mes diría: «Me dijo que ese día cerraban la cafetería a las tres».', next: 'Ahora tú eres Pablo.', teacher: 'Tu alumno dice las dos versiones seguidas. Es la mejor prueba de que entiende cuándo no hay que cambiar.' },
            { q: 'Eres Pablo. Raúl estaba en Guadalajara y no sabe nada. Cuéntale la llamada de Lucía del martes y el audio del jueves. · You are Pablo: brief Raúl.', followUps: ['¿Qué les pidió doña Elvira?', '¿Dónde y cuándo se ven?', '¿De quién era aquel taller?'], phrases: ['Lucía dijo que [[ese día|teal]]…', 'Nos pidió que [[fuéramos|blue]] [[allá|orange]] y que [[lleváramos|blue]]…', 'Doña Elvira le contó que [[aquel|orange]] taller…'], hint: 'Raúl está en Guadalajara y tú en la capital: nadie está en Oaxaca. Allá, ir, llevar.', example: 'Raúl, el martes Lucía me dijo que ese día habían grabado en el mercado y nos pidió que fuéramos allá el viernes con baterías nuevas. El jueves me mandó un audio: la directora del museo le había dicho que aquel taller era de su familia y que quería que yo fuera al pueblo con la carta firmada.', teacher: 'Haz de Raúl e interrumpe: «¿Y eso cuándo fue exactamente?». Tu alumno aclara con el día concreto.' },
            { q: '¿Qué frases te decían en casa cuando eras pequeño o pequeña? Cuéntalo desde hoy. · Things your family used to say.', followUps: ['¿Dónde vivías entonces?', '¿Quién lo decía?', '¿Lo dices tú ahora?'], phrases: ['Mi abuela decía que en [[aquella|orange]] casa…', '[[Entonces|teal]]…', 'Siempre nos pedía que [[fuéramos|blue]]…'], hint: 'Un recuerdo lejano: este → aquel, ahora → entonces.', example: 'Mi abuelo decía que en aquella casa nadie se iba a dormir sin cenar. Entonces vivíamos en Veracruz y nos pedía que fuéramos al mercado con él todos los sábados.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tú cuentas un mensaje que recibiste en otro lugar y otro día, y tu alumno pregunta por las palabras exactas («¿Qué te dijo exactamente?») y detecta qué cambió.', self: 'Esta semana, cuando recibas un audio o una llamada desde otro lugar, cuéntaselo a alguien dos días después y fíjate en hoy, aquí, venir y traer.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'El resumen de la semana', coach: 'Que tu lectora sepa qué día y qué lugar. Make every day and place clear.',
      steps: [
        { title: 'Un correo desde la capital · An email from the capital', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Revisan juntos cada expresión de tiempo y de lugar: ¿se entiende sin conocer las palabras originales?', self: 'Escribe tu correo y toca «Revisar mi texto». Después lee cada «ese día», «allá» o «llevara» y comprueba que tu lectora entiende a qué día y lugar se refiere.' } },
          { kind: 'write', title: 'Lo que pasó en Oaxaca', situation: 'Es lunes. Eres Pablo y has vuelto a la Ciudad de México. Carmen Vidal, la productora ejecutiva, estuvo de viaje toda la semana pasada y no sabe nada del rodaje. Escríbele un correo con lo que dijeron Lucía y doña Elvira. (O escribe sobre un viaje tuyo: lo que te dijeron allí, contado desde tu ciudad.) · You are back in Mexico City: write to the executive producer about what was said in Oaxaca.', task: [
            'Transmite al menos tres mensajes con dijo / contó / pidió / prometió que…',
            'Recalcula dos expresiones de tiempo (ese día, el día anterior, en ese momento, esta semana…).',
            'Sitúa el lugar desde la capital: allí / allá, ese / aquel.',
            'Usa un verbo de movimiento ajustado (fuéramos, llevara…) y un posesivo o pronombre cambiado.',
            'Termina con una petición clara para Carmen.',
          ], starters: ['Hola, Carmen:', 'Te resumo la semana en Oaxaca.', 'El martes, Lucía me dijo que ese día…', 'Nos pidió que fuéramos allá…', 'La directora del museo nos contó que…', 'Prometió que…', '¿Puedes…?'],
            words: ['ese día', 'el día anterior', 'en ese momento', 'allá', 'aquel', 'fuéramos', 'llevara', 'su', 'esta semana', 'prometió'],
            model: 'Hola, Carmen: Te resumo la semana en Oaxaca. El martes, Lucía me llamó desde un pueblo casi sin cobertura. Me dijo que [[ese día|teal]] habían grabado en el mercado y nos pidió que [[fuéramos|blue]] [[allá|orange]] el viernes con baterías nuevas, porque [[su|violet]] cámara grande no cargaba bien. Al llegar, nos contó que la directora del museo le había abierto el archivo [[el día anterior|teal]] y que [[aquel|orange]] taller donde habían grabado era de [[su|violet]] familia. Doña Elvira nos invitó a grabar la feria del tapete y me pidió que [[llevara|blue]] la carta de la productora firmada; se la di el sábado. [[En ese momento|teal]] el comité no podía darnos una respuesta, pero prometió que nos escribiría [[esta semana|teal]]. ¿Puedes revisar si la carta necesita también tu firma? Un abrazo, Pablo',
            minWords: 110,
            checks: [
              { label: 'Un verbo para transmitir: dijo, contó, pidió… (a reporting verb)', pattern: '(?<!\\p{L})(?:dijo|contó|conto|pidió|pidio|explicó|explico|prometió|prometio|aseguró|aseguro|comentó|comento)(?!\\p{L})', tip: 'Transmite lo que dijeron: «Lucía me dijo que…», «Nos pidió que…».' },
              { label: 'Una expresión de tiempo recalculada (time expression)', pattern: '(?<!\\p{L})(?:ese\\s+día|ese\\s+dia|aquel\\s+día|aquel\\s+dia|al\\s+día\\s+siguiente|al\\s+dia\\s+siguiente|el\\s+día\\s+(?:siguiente|anterior)|el\\s+dia\\s+(?:siguiente|anterior)|la\\s+víspera|la\\s+semana\\s+(?:siguiente|anterior)|en\\s+ese\\s+momento|entonces|esa\\s+(?:mañana|tarde|noche|semana))(?!\\p{L})', tip: 'Mira el día desde hoy: «ese día», «el día anterior», «en ese momento».' },
              { label: 'Un lugar visto desde lejos: allí, allá, ese, aquel (place)', pattern: '(?<!\\p{L})(?:allí|alli|allá|alla|aquel|aquella|aquellos|aquellas)(?!\\p{L})', tip: 'Desde la capital, Oaxaca y el pueblo están lejos: «allá», «aquel taller».' },
              { label: 'Un verbo de movimiento ajustado: fuera, llevara… (movement verb)', pattern: '(?<!\\p{L})(?:fuera|fueras|fuéramos|fueramos|fueran|fuese|fuésemos|fuesemos|llevara|llevaras|lleváramos|llevaramos|llevaran|llevase|viniera|vinieras|viniéramos|vinieramos|vinieran|trajera|trajeras|trajéramos|trajeramos|trajeran)(?!\\p{L})', tip: 'Decide desde tu lugar: «nos pidió que fuéramos allá», «que llevara la carta».' },
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
            { tone: 'teal', label: 'TIEMPO', formula: 'hoy → ese día · mañana → al día siguiente · ahora → entonces', example: '«Mañana grabamos» (martes) → el jueves: «dijo que ayer les tocaba grabar».', caption: 'Recalcula desde tu día; el día concreto es lo más claro.', en: 'Recalculate from your own day; naming the actual day is clearest.' },
            { tone: 'orange', label: 'LUGAR', formula: 'aquí → allí / allá · este → ese / aquel', example: '«Aquí hace calor» → Dijo que allá hacía calor.', caption: 'Si ya no estás en ese lugar, ese lugar está lejos de ti.', en: 'If you are no longer there, that place is now far from you.' },
            { tone: 'violet', label: 'PERSONA', formula: 'mi → su · te → me · su → tu', example: '«Dile a Sonia que su idea funciona» → Dijo que tu idea funciona.', caption: 'Ajusta cada pronombre a la nueva conversación.', en: 'Adjust every pronoun and possessive to the new conversation.' },
            { tone: 'blue', label: 'MOVIMIENTO', formula: 'venir → ir · traer → llevar (si no estás en el destino)', example: '«Vengan y traigan las baterías» → Nos pidió que fuéramos y lleváramos las baterías.', caption: 'Si estás en el destino, venir y traer se mantienen.', en: 'If you are at the destination, venir and traer stay.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'No traduzcas palabras: **recalcula referencias**. Pregúntate: ¿qué día era ese «hoy» **para mí**? ¿Estoy yo en ese «aquí»? ¿Quién es ahora «tú»? Si lo cuentas el **mismo día** y en el **mismo lugar**, no cambies nada: cambiar de más también confunde.', en: 'Don’t translate words: recalculate references. Ask yourself which day that “today” is for you, whether you are in that “here”, and who “you” is now. Same day and same place? Change nothing: over-shifting is just as confusing.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { context: 'Tu jefe, el lunes: «Mañana no vengo a la oficina». Lo cuentas el miércoles, en la oficina.', prompt: 'Dijo que ___ no venía a la oficina.', options: ['mañana', 'ese día', 'el martes'], answer: 2, why: 'Su «mañana» era el martes; el miércoles, el día concreto es lo claro. «Venir» se mantiene: estás en la oficina.', en: 'He said he wasn’t coming to the office on Tuesday.' },
            { context: 'Tu hermana, desde Lima: «Aquí todo está carísimo». Lo cuentas en tu ciudad.', prompt: 'Dice que ___ todo está carísimo.', options: ['este', 'allá', 'aquí'], answer: 1, why: 'Tú no estás en Lima: aquí → allá (o allí).', en: 'She says everything is really expensive there.' },
            { context: 'Tu vecino, ayer, en tu casa: «Te traigo la escalera el sábado». Lo cuentas hoy en tu casa.', prompt: 'Dijo que me ___ la escalera el sábado.', options: ['trajera', 'traería', 'llevaría'], answer: 1, why: 'La escalera viene a tu casa, donde estás: traer. Es una afirmación: condicional.', en: 'He said he would bring me the ladder on Saturday.' },
            { context: 'Lucía, hace dos años: «Ahora vivo en este barrio».', prompt: 'Lucía me contó que ___ vivía en ___ barrio.', options: ['ahora · este', 'en ese momento · este', 'entonces · aquel'], answer: 2, why: 'Un recuerdo de hace dos años: ahora → entonces, este → aquel.', en: 'Lucía told me she lived in that neighbourhood at the time.' },
            { context: 'Esta mañana, Sonia: «Esta tarde te mando el guion». Lo cuentas a mediodía.', prompt: 'Sonia dijo que ___ me mandaba el guion.', options: ['la tarde anterior', 'esta tarde', 'esa tarde'], answer: 1, why: 'Mismo día: «esta tarde» sigue siendo la misma. No hay que cambiar.', en: 'Sonia said she would send me the script this afternoon.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, una boda en Cartagena.', blocks: [
          { kind: 'lead', text: 'Hace un mes, tu amiga Valeria te llamó desde Cartagena para invitarte a su boda. Hoy, en tu ciudad, le cuentas la llamada a tu pareja.', en: 'A month ago your friend Valeria called you from Cartagena to invite you to her wedding. Today, in your own city, you tell your partner about the call: recalculate time, place, people and movement.' },
          { kind: 'rewrite', title: 'La llamada de Valeria · Valeria’s call', items: [
            { prompt: 'Valeria: «La boda es aquí, en esta iglesia, el sábado 12».', instruction: 'Empieza con «Valeria dijo que la boda era…».', accept: ['Valeria dijo que la boda era allá en esa iglesia el sábado 12', 'Valeria dijo que la boda era allí en esa iglesia el sábado 12', 'Valeria dijo que la boda era allá en aquella iglesia el sábado 12', 'Valeria dijo que la boda era allí en aquella iglesia el sábado 12', 'Valeria dijo que la boda era el sábado 12 allá en esa iglesia', 'Valeria dijo que la boda era en esa iglesia el sábado 12', 'Valeria dijo que la boda era en aquella iglesia el sábado 12'] },
            { prompt: 'Valeria: «Ven el viernes y trae tu vestido azul».', instruction: 'Todavía no estás en Cartagena. Empieza con «Me pidió que…».', accept: ['Me pidió que fuera el viernes y que llevara mi vestido azul', 'Me pidió que fuera el viernes y llevara mi vestido azul', 'Me pidió que fuese el viernes y que llevase mi vestido azul', 'Me pidió que fuese el viernes y llevase mi vestido azul', 'Me pidió que fuera allá el viernes y que llevara mi vestido azul', 'Me pidió que fuera allí el viernes y que llevara mi vestido azul'] },
            { prompt: 'Valeria: «Mañana te mando la invitación».', instruction: 'Empieza con «Valeria dijo que al día siguiente…».', accept: ['Valeria dijo que al día siguiente me mandaría la invitación', 'Valeria dijo que al día siguiente me mandaba la invitación', 'Valeria dijo que al día siguiente me enviaría la invitación'] },
          ] },
        ] },
        { title: 'Ampliación · El registro de la crónica · Extension: chronicle style', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional: el tiempo en la escritura formal. Optional: time in formal writing.', blocks: [
          { kind: 'lead', text: 'En crónicas, biografías y noticias, el narrador cuenta desde muy lejos. Además de **ese día** y **al día siguiente**, son frecuentes: **la víspera** (el día anterior, sobre todo antes de una fecha señalada), **a la mañana siguiente**, **dos días más tarde**, **en aquel momento**, **en aquel entonces** (en aquella época).', en: 'Chronicles, biographies and news reports tell events from far away in time. Besides ese día and al día siguiente, they often use la víspera (the day before, especially before a special date), a la mañana siguiente (the next morning), dos días más tarde, en aquel momento and en aquel entonces (back then).' },
          { kind: 'choice', title: 'Elige la expresión · Choose the expression', items: [
            { prompt: 'Crónica: «El alcalde llegó al pueblo ___ de la feria, el jueves por la noche».', options: ['la víspera', 'ayer', 'mañana'], answer: 0, why: 'La víspera: el día anterior a una fecha señalada, contado desde el relato y no desde hoy.', en: 'Chronicle: the mayor arrived the day before the fair.' },
            { prompt: 'Biografía: «Se mudó a Oaxaca muy joven. ___ nadie conocía su trabajo».', options: ['Hoy', 'En aquel entonces', 'Ahora'], answer: 1, why: 'En aquel entonces: en aquella época. «Ahora» y «hoy» señalan el momento del lector.', en: 'Biography: back then nobody knew her work.' },
          ] },
          { kind: 'rewrite', title: 'De la declaración a la crónica · From statement to chronicle', items: [
            { prompt: 'Doña Elvira a la prensa, hace años: «Hoy abrimos el archivo y mañana empieza la feria».', instruction: 'Empieza con «Doña Elvira anunció que aquel día…».', accept: ['Doña Elvira anunció que aquel día abrían el archivo y que al día siguiente empezaba la feria', 'Doña Elvira anunció que aquel día abrían el archivo y al día siguiente empezaba la feria', 'Doña Elvira anunció que aquel día abrían el archivo y que al día siguiente empezaría la feria', 'Doña Elvira anunció que aquel día abrían el archivo y al día siguiente empezaría la feria'] },
            { prompt: 'Lucía, en una entrevista antigua: «Ahora mismo estamos grabando aquí, en el mercado».', instruction: 'Empieza con «Lucía explicó que en aquel momento…».', accept: ['Lucía explicó que en aquel momento estaban grabando allí en el mercado', 'Lucía explicó que en aquel momento estaban grabando allá en el mercado', 'Lucía explicó que en aquel momento estaban grabando en el mercado'] },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos que van rápido o si sobra tiempo. «La víspera» y «en aquel entonces» son propias de la narración escrita o cuidada; en la conversación basta con «el día anterior» y «entonces».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 148 · Pasiva perifrástica: ser + participio', text: 'Ya transmites mensajes de otro día y de otro lugar con las referencias bien ajustadas: «dijo que al día siguiente», «que fuéramos allá». En la clase 148 das otro paso hacia el lenguaje de las crónicas y las noticias: la pasiva con **ser + participio** («El archivo **fue abierto** al día siguiente»), que pone el foco en lo que pasó y no en quién lo hizo. Es el paso natural: los textos que informan combinan las dos herramientas.', en: 'You can now report messages from another day and another place with the references correctly adjusted. Class 148 takes you further into the language of chronicles and news: the passive with ser + participle (“the archive was opened the next day”), which puts the focus on what happened rather than on who did it. It is the natural next step, because informative texts combine both tools.', href: '/gramatica/pasiva-impersonal-informar', label: 'Ir a la clase 148' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Hay que cambiar siempre hoy por ese día?». Respuesta esperada: no; solo si ha cambiado el día desde el que hablas. Tarea: escribir el correo de Escribir sobre un viaje real y marcar cada palabra de tiempo y de lugar que se ha recalculado.' },
        ] },
      ],
    },
  ],
};
