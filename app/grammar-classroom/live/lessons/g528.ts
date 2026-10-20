import type { LiveLesson } from '../types';

/**
 * Lesson 528 · C2 · Reformulación entre registro técnico y cotidiano (course unit G228).
 * Builds on G189 (g489: reformulation markers by function) and G198 / G199 (g498, g499:
 * formal and colloquial style). Here the markers become tools of mediation (CEFR Companion
 * Volume, 2018/2020, cited only as a reference): moving specialised content (medical,
 * technical, financial, legal) to a lay audience and back without losing information.
 * Operations: lexical substitution (hipertensión → tensión alta / presión alta), unpacking
 * nominalisations into clauses with a conjugated verb («se procedió a la evacuación →
 * evacuaron el edificio»), turning passives into actives with an explicit agent when the
 * agent matters, simplifying subordination while keeping conditions (salvo que, aunque),
 * explaining with es decir / o sea / dicho de otro modo / en otras palabras / lo que viene
 * a significar, examples and analogies, and KEEPING hedges and frequencies (puede aumentar
 * el riesgo ≠ causa; «frecuente» = hasta 1 de cada 10). Reverse: an oral or WhatsApp
 * account upgraded into an incident report (exact times only when known, agents named,
 * uncertainty kept). Varieties: tensión alta (very frequent in Spain) / presión alta;
 * ordenador / computadora; móvil / celular. Errors: hedge lost, agent changed, condition
 * dropped, invented precision, empty nominal padding. Ampliación: limits of analogies and
 * register upgrade without inflation.
 * Scene: Hospital Comarcal de Valdeoro. Clara Ibarra (patient communication) adapts the
 * blood-pressure leaflet with the cardiologist Gonzalo Arce, explains it to her father
 * Ernesto, and turns the technician Rubén Salcedo's WhatsApp into an incident report.
 * Escuchar: Clara's voice message to her father (es-ES-ElviraNeural). Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 528,
  level: 'C2',
  title: 'Reformulación entre registro técnico y cotidiano',
  subtitle: 'Pasar un texto especializado a lenguaje cotidiano, y un relato informal a un informe técnico, sin perder ni inventar información.',
  legend: [
    { tone: 'blue', label: 'FORMULACIÓN ESPECIALIZADA · tecnicismo, nominalización, pasiva' },
    { tone: 'teal', label: 'VERSIÓN COTIDIANA · palabra común, verbo conjugado, agente explícito, ejemplo' },
    { tone: 'orange', label: 'REFORMULADOR · es decir, o sea, dicho de otro modo, en otras palabras, lo que viene a significar' },
    { tone: 'violet', label: 'LO QUE NO SE PIERDE · matiz, probabilidad, frecuencia, condición' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Traducir sin traicionar', coach: 'Más claro, igual de exacto. Clearer, just as precise.',
      steps: [
        { title: 'Un prospecto en la mesa de la cocina · A leaflet on the kitchen table', blocks: [
          { kind: 'lead', text: 'Clara Ibarra trabaja en el servicio de comunicación con pacientes del Hospital Comarcal de Valdeoro. Esta semana tiene dos encargos: adaptar el prospecto de un medicamento para la tensión, revisado por el cardiólogo Gonzalo Arce, y convertir en informe oficial el WhatsApp que le ha mandado Rubén Salcedo, técnico de mantenimiento, sobre un apagón en Radiología. Además, a su padre, Ernesto, le acaban de recetar justo ese medicamento. En la clase 189 estudiaste los reformuladores por su función. Hoy los usas para **mediar**: pasar un contenido especializado a lenguaje cotidiano, y al revés, **sin perder ni inventar información**.', en: 'Clara works in patient communication at a district hospital. This week she must adapt a blood-pressure leaflet with a cardiologist and turn a technician’s WhatsApp about a power cut into an official report; meanwhile her own father has just been prescribed that very drug. In class 189 you studied reformulation markers by function; today you use them to mediate: moving specialised content into everyday language and back again without losing or inventing anything.' },
          { kind: 'guide', text: { teacher: 'Tú lees la frase del prospecto y las tres versiones. Tu alumno dice cuál de las dos adaptaciones es fiel y qué ha perdido la otra.', self: 'Lee la frase del prospecto y las tres versiones. ¿Cuál es clara y además fiel? (Which one is both clear and faithful?)' } },
          { kind: 'compare', title: 'Una frase, tres versiones · One sentence, three versions', columns: [
            { tone: 'blue', label: 'PROSPECTO', sentence: '[[La interrupción brusca del tratamiento|blue]] [[puede producir|violet]] un aumento de la tensión arterial.', idea: 'Exacto, pero denso: el sustantivo «interrupción» esconde quién hace qué.', en: 'Accurate but dense: the noun interrupción hides who does what, and the reader has to unpack it.' },
            { tone: 'teal', label: 'BUENA ADAPTACIÓN', sentence: '[[Si deja de tomarlo de golpe|teal]], la tensión [[puede subir|violet]].', idea: 'Verbo conjugado, sujeto claro y el mismo grado de certeza: «puede».', en: 'A conjugated verb, a clear subject (the patient) and the same degree of certainty: puede is kept.' },
            { tone: 'neutral', label: 'MALA ADAPTACIÓN', sentence: 'Si lo deja, le sube la tensión.', idea: 'Clara, pero falsa: desaparecen «de golpe» y «puede».', en: 'Easy to read but no longer true: it drops “suddenly” and turns a possibility into a certainty.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué ha perdido la mala adaptación?', options: ['Solo el tecnicismo «tensión arterial».', 'La condición («de golpe») y la probabilidad («puede»).', 'Nada importante: es más breve.'], answer: 1, why: 'Cambiar «tensión arterial» por «tensión» está bien; lo grave es que ahora parece que dejarlo siempre, y de cualquier manera, sube la tensión.', en: 'Swapping the term is fine; losing the condition and the hedge changes what the leaflet claims.' },
            { prompt: 'Mediar entre registros consiste sobre todo en…', options: ['usar palabras más cortas.', 'cambiar la forma para un nuevo destinatario sin cambiar el contenido.', 'resumir y quitar los detalles técnicos.'], answer: 1, why: 'Se adapta la forma (léxico, sintaxis, ejemplos) al lector; lo que se afirma, con sus matices, se conserva.', en: 'Mediation changes the form for a new reader, not what is being claimed.' },
          ] },
        ] },
        { title: 'Primera herramienta: la palabra · Tool one: the word', mascot: '/brand/mascot/studying.webp', coach: 'Sustituye o explica. Replace or explain.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'SUSTITUIR O EXPLICAR EL TECNICISMO', question: '¿El lector necesita el término técnico o solo su significado?', en: 'You have two options. Replace the term when the reader only needs the meaning (cefalea → headache). Keep it and explain it when the reader will meet it again, at the pharmacy, on a bill, in a contract: then pair it with es decir, o sea (spoken), en otras palabras, dicho de otro modo or lo que viene a significar. Explaining is often better than replacing, because the reader learns the term they will see later.', formula: ['tecnicismo → palabra común: cefalea → dolor de cabeza', 'tecnicismo + reformulador + explicación: la TAE, es decir, lo que cuesta de verdad el préstamo al año', 'tecnicismo + ejemplo o comparación: …, como cuando…'],
            meaning: 'Hay dos caminos. **Sustituir** el término cuando al lector solo le importa el significado («cefalea» → «dolor de cabeza»). **Mantenerlo y explicarlo** cuando el lector lo volverá a encontrar (en la farmacia, en una factura, en un contrato): entonces va seguido de **es decir**, **o sea** (oral), **en otras palabras**, **dicho de otro modo** o **lo que viene a significar** (con «venir a», que indica aproximación: anuncia una explicación más libre, centrada en lo práctico). Muchas veces explicar es mejor que sustituir: el lector aprende la palabra que verá después.',
            examples: [
              { es: 'Tiene [[hipertensión|blue]], [[es decir|orange]], [[la tensión alta|teal]].', en: 'Keeping the term and explaining it: the patient will hear “hipertensión” again at the doctor’s.' },
              { es: 'El préstamo tiene una [[TAE|blue]] del 7 %, [[lo que viene a significar|orange]] que, sumando intereses y comisiones, [[le cuesta, más o menos, un 7 % al año del dinero que todavía debe|teal]].', en: 'Lo que viene a significar introduces a looser, practical gloss of a precise financial term, and más o menos flags that the gloss is approximate.' },
              { es: 'El contrato se puede [[rescindir|blue]]; [[en otras palabras|orange]], [[cualquiera de las dos partes puede darlo por terminado|teal]].', en: 'A legal verb unpacked into what the reader can actually do.' },
            ] },
          { kind: 'table', title: 'Tecnicismos de cuatro campos · Terms from four fields', head: ['Campo', 'Especializado', 'Cotidiano'], rows: [
            ['salud', '[[cefalea|blue]] · [[edema|blue]] · [[vía oral|blue]] · [[en ayunas|blue]]', '[[dolor de cabeza|teal]] · [[hinchazón|teal]] · [[tragado, por la boca|teal]] · [[sin haber comido nada|teal]]'],
            ['técnica', '[[corte del suministro eléctrico|blue]] · [[equipo no operativo|blue]]', '[[se fue la luz|teal]] · [[la máquina no funciona|teal]]'],
            ['finanzas', '[[amortizar|blue]] · [[impago|blue]] · [[comisión de apertura|blue]]', '[[devolver una parte del préstamo|teal]] · [[no pagar a tiempo|teal]] · [[lo que cobra el banco por darte el préstamo|teal]]'],
            ['derecho', '[[arrendatario|blue]] · [[preaviso|blue]] · [[rescindir|blue]]', '[[inquilino|teal]] · [[aviso con antelación|teal]] · [[dar por terminado|teal]]'],
          ], note: 'La sustitución no siempre es exacta: «edema» es una acumulación de líquido; «hinchazón» es lo que el paciente ve. Si la diferencia importa, explica en lugar de sustituir.' },
          { kind: 'tip', icon: '🌎', title: 'Las palabras de cada casa · Each audience’s words', text: 'Lo cotidiano también varía. En España es muy frecuente decir **la tensión alta**; en América se dice sobre todo **la presión alta**, que también se entiende en España. En un manual: **ordenador** en España, **computadora** (o computador, en algunos países) en América; **móvil** en España, **celular** en América. Si escribes para un público mixto, puedes poner las dos: «la tensión (o presión) alta».', en: 'Everyday words vary too. Spain often says la tensión alta, Latin America mainly la presión alta, which is also understood in Spain; ordenador vs computadora, móvil vs celular. For a mixed audience, give both forms.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { context: 'Hoja para pacientes que volverán a ver el término en sus informes médicos.', prompt: '¿Qué opción es mejor para «insuficiencia renal»?', options: ['«problemas»', '«insuficiencia renal, es decir, los riñones no limpian bien la sangre»', '«insuficiencia renal»'], answer: 1, why: 'El paciente volverá a leer el término: conviene mantenerlo y explicarlo. «Problemas» es tan vago que ya no informa.', en: 'Keep the term the reader will meet again and explain it.' },
            { context: 'Manual de un programa traducido para usuarios de México.', prompt: '«Reinicie el ordenador y conecte el móvil» se adapta como…', options: ['«Reinicie el ordenador y conecte el celular.»', '«Reinicie la computadora y conecte el celular.»', '«Reinicie el aparato y conecte el teléfono fijo.»'], answer: 1, why: 'En México se dice «computadora» y «celular»; mezclar las dos variedades en la misma frase suena raro.', en: 'Adapt both words to the audience’s variety and be consistent.' },
          ] },
        ] },
        { title: 'Segunda herramienta: la frase · Tool two: the sentence', mascot: '/brand/mascot/speaking.webp', coach: 'Del sustantivo al verbo. From noun to verb.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'DESHACER NOMINALIZACIONES Y PASIVAS', question: '¿Quién hace qué, y cuándo?', en: 'Technical prose packs actions into nouns (la evacuación, la interrupción) and often hides the agent with passives or se. To make it everyday, turn the noun back into a conjugated verb, which forces you to choose a subject and a tense. If the agent is known and matters, name it. If it is unknown or irrelevant, Spanish uses the third-person plural without a subject (evacuaron el edificio) or impersonal se. Never invent an agent the source does not give. Simplify subordination too, but keep the conditions (si, salvo que, aunque).', formula: ['se procedió a la evacuación del edificio → evacuaron el edificio', 'el paciente será valorado por cardiología → los cardiólogos lo verán', 'la dosis podrá ser modificada → su médico puede cambiarle la dosis', 'salvo indicación médica, no interrumpa… → no lo deje, salvo que su médico se lo diga'],
            meaning: 'El texto técnico **empaqueta acciones en sustantivos** («la evacuación», «la interrupción») y a menudo **oculta al agente** con pasivas o con «se». Para hacerlo cotidiano, vuelve al **verbo conjugado**: eso te obliga a elegir sujeto y tiempo. Si el agente **se conoce y es importante**, nómbralo. Si **no se sabe** o no importa, usa la **tercera persona del plural sin sujeto** («evacuaron el edificio») o el «se» impersonal. **Nunca inventes un agente** que el original no da. Y simplifica la subordinación, pero sin perder las condiciones (**si**, **salvo que**, **aunque**).',
            examples: [
              { es: '[[Se procedió a la evacuación del edificio|blue]]. → [[Evacuaron el edificio|teal]].', en: 'No agent in the source, so none in the version: a subjectless third-person plural.' },
              { es: '[[El paciente será valorado por el servicio de cardiología|blue]]. → [[Lo verá un cardiólogo|teal]].', en: 'The agent was already there (por el servicio…); the active voice simply brings it to the front.' },
              { es: '[[Salvo indicación médica|violet]], no interrumpa el tratamiento aunque se encuentre bien. → No lo deje aunque se encuentre bien, [[salvo que su médico se lo indique|violet]].', en: 'The sentence is unpacked, but the exception is still there.' },
            ] },
          { kind: 'tip', icon: '💡', title: '¿Por qué «la dosis podrá ser modificada»? · Why a hidden agent matters', text: 'En «La dosis podrá ser modificada» no se dice quién la modifica. Para un paciente esa información es esencial: no es él quien decide. Por eso la versión cotidiana necesita el agente: «**Su médico** puede cambiarle la dosis». En cambio, en «Evacuaron el edificio» el agente no aporta nada al lector, y no hace falta inventarlo.', en: 'Whether to name the agent depends on whether the reader needs it: a patient must know the doctor decides; a reader of “the building was evacuated” does not need a name the source never gave.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Tras la detección de la avería, se procedió a la desconexión del equipo». Versión cotidiana fiel:', options: ['«Cuando vieron la avería, desconectaron el equipo.»', '«Rubén vio la avería y desconectó el equipo.»', '«El equipo se averió por la desconexión.»'], answer: 0, why: 'El original no dice quién la detectó: la tercera persona del plural sin sujeto lo respeta. Poner «Rubén» inventa un agente, y «se averió por la desconexión» invierte la causa.', en: 'Unpack the nouns without inventing an agent or reversing the order of events.' },
            { prompt: '«Las solicitudes serán resueltas por la comisión en un plazo de dos meses». ¿Qué versión es cotidiana y completa?', options: ['«Le contestarán pronto.»', '«La comisión le responderá en dos meses como máximo.»', '«Usted resolverá la solicitud en dos meses.»'], answer: 1, why: 'La activa pone delante al agente (la comisión) y conserva el plazo, que es un máximo. «Pronto» pierde el dato y «Usted resolverá» cambia el agente.', en: 'Active voice with the real agent, and the time limit kept.' },
          ] },
        ] },
        { title: 'Tercera herramienta: lo que no se toca · Tool three: what you don’t touch', mascot: '/autoestudio/mascot/noting.webp', coach: 'Simplifica la forma, no la certeza. Simplify the form, not the certainty.', blocks: [
          { kind: 'table', title: 'Matices que deben sobrevivir · Nuances that must survive', head: ['Texto especializado', 'Bien', 'Mal'], rows: [
            ['[[puede aumentar el riesgo de|violet]] infarto', 'hace [[más probable|violet]] un infarto', 'causa infartos'],
            ['efectos adversos [[frecuentes|violet]] (hasta 1 de cada 10 personas)', '[[hasta una de cada diez personas|violet]] los nota', 'casi todo el mundo los nota'],
            ['[[no se ha demostrado|violet]] su eficacia en menores', '[[no se sabe si|violet]] funciona en niños', 'no funciona en niños'],
            ['[[salvo que|violet]] falte poco para la siguiente dosis', 'tómela, [[a no ser que|violet]] ya casi toque la siguiente', 'tómela en cuanto se acuerde'],
            ['el origen [[podría estar|violet]] en el cuadro eléctrico', '[[parece que|violet]] fue el cuadro', 'fue el cuadro'],
          ], note: '«Frecuente» en un prospecto es un término técnico: significa «hasta 1 de cada 10 personas», no «muy a menudo». Y «no se ha demostrado que funcione» no equivale a «se ha demostrado que no funciona».' },
          { kind: 'decide', title: 'Antes de dar por buena tu versión · Before you accept your version', steps: [
            { q: '¿Has mantenido el grado de certeza (puede, podría, es probable, no se ha demostrado)?', yes: 'Bien. Sigue.', no: 'Recupéralo: «puede», «es posible que», «parece que».' },
            { q: '¿Siguen las condiciones y excepciones (si, salvo que, siempre que, aunque)?', yes: 'Bien. Sigue.', no: 'Vuelve a ponerlas, aunque la frase sea más larga.' },
            { q: '¿Queda claro quién hace o decide cada cosa, sin inventar a nadie?', yes: 'Tu versión es fiel.', no: 'Nombra el agente que da el original, o usa la tercera persona del plural si no se sabe.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«El consumo de alcohol puede potenciar el efecto sedante del medicamento». Mejor versión:', options: ['«Con alcohol, el medicamento le dormirá.»', '«Si bebe alcohol, el medicamento puede darle todavía más sueño.»', '«El alcohol no se puede tomar nunca.»'], answer: 1, why: 'Conserva el «puede» y explica «efecto sedante» como «darle sueño». «Le dormirá» lo convierte en certeza y «no se puede tomar nunca» inventa una prohibición.', en: 'Keep the hedge, explain the term, add nothing.' },
            { prompt: '¿Por qué es incorrecto pasar «no se ha demostrado su eficacia» a «no sirve»?', options: ['Porque hay que mantener el verbo «demostrar».', 'Porque «no sirve» es demasiado coloquial.', 'Porque falta de pruebas no es lo mismo que prueba de que no funciona.'], answer: 2, why: 'El original dice que no hay pruebas suficientes; «no sirve» afirma algo que nadie ha comprobado.', en: 'Absence of evidence is not evidence of absence.' },
          ] },
        ] },
        { title: 'El camino de vuelta: del relato al informe · The way back: from chat to report', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Subir de registro sin inflar. Raise the register without padding.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'DEL ORAL AL INFORME TÉCNICO', question: '¿Cómo pasas un mensaje informal a un documento oficial?', en: 'Going up the register reverses the operations: everyday words become the precise term; first-person narrative becomes impersonal or names the agent by role (el personal de mantenimiento); approximate times stay approximate (a eso de las diez → hacia las 10:00), and only exact data become exact; parece que becomes según la valoración inicial or podría. Nominalisation is natural in a report (se produjo un corte), but empty verb + noun chains are padding. The CEFR Companion Volume, used here only as a reference, describes this kind of work as mediation: adapting language and processing a text for a different audience.', formula: ['se ha ido la luz → se produjo un corte del suministro eléctrico', 'los de mantenimiento lo han reiniciado → el personal de mantenimiento reinició el equipo', 'a eso de las diez y diez → hacia las 10:10 (no «a las 10:10»)', 'parece que fue el diferencial → el origen podría estar en el interruptor diferencial'],
            meaning: 'Subir de registro invierte las operaciones: la palabra común pasa al **término preciso**; el relato en primera persona pasa a una construcción **impersonal** o a un **agente nombrado por su función** («el personal de mantenimiento»); una hora aproximada **sigue siendo aproximada** («hacia las 10:10»); y «parece que» pasa a «**según la valoración inicial**» o «**podría**». La nominalización es normal en un informe («se produjo un corte»), pero encadenar verbos vacíos («se procedió a la realización de…») es relleno. El Volumen complementario del MCER (Consejo de Europa, 2018/2020), que aquí solo citamos como referencia, describe este trabajo como **mediación**: adaptar el lenguaje y procesar un texto para otro destinatario.',
            examples: [
              { es: '«[[Se ha ido la luz|teal]] en Radiología» → «[[Se produjo un corte del suministro eléctrico|blue]] en el Servicio de Radiología».', en: 'The everyday expression becomes the technical noun phrase expected in a report.' },
              { es: '«[[Parece que|violet]] fue el diferencial» → «El origen [[podría estar|violet]] en el interruptor diferencial».', en: 'The uncertainty is upgraded in register, not removed.' },
            ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Rubén escribe: «A eso de las once menos cuarto ya iba». En el informe:', options: ['«El equipo funcionó.»', '«El equipo volvió a funcionar a las 10:44 exactamente.»', '«Hacia las 10:45, el equipo ya estaba operativo.»'], answer: 2, why: '«A eso de» es una aproximación y «ya iba» indica que funcionaba en ese momento: «hacia las 10:45, ya estaba operativo». Inventar el minuto exacto es falsa precisión.', en: 'Keep the approximation; don’t invent precision.' },
            { prompt: '¿Cuál es relleno y no registro formal?', options: ['«El personal de mantenimiento reinició el equipo.»', '«Se produjo un corte del suministro.»', '«Se procedió a la realización del reinicio del equipo.»'], answer: 2, why: '«Proceder a la realización de» añade dos sustantivos vacíos: basta con «se reinició el equipo» o con el agente y el verbo.', en: 'Empty verb + noun chains are padding, not formality.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Frequent mistakes', mascot: '/brand/mascot/kneeling.webp', coach: 'Claro no es lo mismo que fiel. Clear isn’t the same as faithful.', blocks: [
          { kind: 'mistakes', title: '¿Qué se ha perdido o inventado? · What was lost or invented?', items: [
            { wrong: '«Puede aumentar el riesgo de hemorragia» → «Provoca hemorragias».', right: '«Puede hacer que sangre con más facilidad».', why: 'Se ha perdido la probabilidad: una posibilidad se ha convertido en un efecto seguro.' },
            { wrong: '«La dosis será ajustada por su médico» → «Ajuste usted la dosis».', right: '«Su médico le ajustará la dosis».', why: 'Al pasar a activa se ha cambiado el agente: ahora decide el paciente.' },
            { wrong: '«No tome una dosis doble para compensar las olvidadas» → «Si se olvida, tome dos».', right: '«Si se le olvida una, no tome dos juntas para compensar».', why: 'La simplificación dice lo contrario del original: hay que leer la negación con atención.' },
            { wrong: '«Preaviso mínimo de treinta días» → «Avise antes».', right: '«Avise por lo menos treinta días antes».', why: 'Se ha perdido el dato que da valor a la frase: el plazo mínimo.' },
            { wrong: '«A eso de las diez» → «A las 10:00».', right: '«Hacia las 10:00» · «En torno a las 10:00».', why: 'Precisión inventada: el original era una aproximación.' },
            { wrong: '«Tiene hipertensión, o sea, que se pone nervioso».', right: '«Tiene hipertensión, es decir, la tensión alta».', why: 'El reformulador presenta una equivalencia falsa: «hipertensión» no tiene nada que ver con los nervios.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Los resultados sugieren una posible relación entre el sueño y la memoria». ¿Qué versión es fiel?', options: ['«Dormir y recordar es lo mismo.»', '«Dormir mejora la memoria.»', '«Parece que puede haber una relación entre cómo dormimos y la memoria.»'], answer: 2, why: '«Sugieren» y «posible» son dos marcas de cautela; la versión fiel conserva al menos esa prudencia. «Dormir mejora la memoria» la convierte en certeza y en causa.', en: 'Two hedges in the source: keep the caution, don’t create a causal claim.' },
            { prompt: '«El arrendatario abonará la fianza a la firma del contrato». ¿Qué versión es correcta?', options: ['«El inquilino paga la fianza cuando firma el contrato.»', '«El dueño paga la fianza al firmar.»', '«Hay que pagar algo en algún momento.»'], answer: 0, why: '«Arrendatario» es el inquilino y «a la firma» significa «en el momento de firmar». «El dueño paga» cambia el agente y «algo en algún momento» ya no informa.', en: 'Translate the legal terms, keep agent and moment.' },
          ] },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La revisión del prospecto', coach: 'Toca lo marcado. Tap the marked expressions.',
      steps: [
        { title: 'En el despacho de Cardiología · In the cardiology office', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Gonzalo y tu alumno es Clara. Después tu alumno toca cada expresión marcada y explica qué operación de reformulación hay detrás.', self: 'Lee el diálogo en voz alta y toca cada expresión marcada. ¿Qué se ha cambiado y qué se ha conservado? (What was changed, and what was kept?)' } },
          { kind: 'explore', title: 'Gonzalo revisa la versión de Clara', setting: 'Hospital Comarcal de Valdeoro, martes a primera hora. Gonzalo Arce, cardiólogo, ha leído la versión para pacientes que Clara ha escrito del prospecto.', lines: [
            { who: 'Gonzalo', text: 'Clara, he leído tu versión. Me gusta que hayas cambiado «[[hipertensión arterial|blue]]» por «[[tensión alta|teal]]»: es como lo dicen los pacientes.', en: 'He approves the lexical substitution because it matches the patients’ own words.' },
            { who: 'Clara', text: 'Y he añadido «presión alta» entre paréntesis, porque atendemos a muchos pacientes latinoamericanos. Ahora, aquí tengo dudas: puse que la pastilla «causa» mareos.', en: 'She has adapted for a mixed audience, and now flags her own doubtful choice.' },
            { who: 'Gonzalo', text: 'Ahí está el problema. El original dice «[[puede producir|violet]] mareo, sobre todo al inicio». Si escribes «causa», el que no se marea pensará que la pastilla no le hace efecto.', en: 'He explains a real consequence of losing the hedge: patients would misread their own experience.' },
            { who: 'Clara', text: 'Tienes razón: quise ser directa y me cargué el matiz. Lo dejo en «[[puede dar mareo|violet]], sobre todo las primeras semanas».', en: 'She admits that being direct cost her the nuance, and restores it in everyday words.' },
            { who: 'Gonzalo', text: 'Bien. ¿Y «[[la interrupción brusca del tratamiento|blue]]»? Es la frase que más me preocupa.', en: 'He asks about the dense nominal phrase, the most important warning in the leaflet.' },
            { who: 'Clara', text: 'La he deshecho: «[[Si deja de tomarla de golpe|teal]], la tensión puede subir». Con el verbo, el paciente ve enseguida qué no debe hacer.', en: 'Unpacking the noun into a conditional clause makes the patient the subject of the action.' },
            { who: 'Gonzalo', text: 'Perfecto. ¿Y «[[la dosis podrá ser modificada|blue]] en función de la respuesta»?', en: 'Next he checks a passive with no stated agent.' },
            { who: 'Clara', text: 'Ahí no se dice quién la cambia, y el paciente tiene que saberlo. He puesto: «[[Su médico puede cambiarle la dosis|teal]] según cómo le vaya».', en: 'She makes the agent explicit because it matters to the reader, and gives an everyday gloss of en función de la respuesta.' },
            { who: 'Gonzalo', text: 'Otra cosa: la gente lee «efectos adversos frecuentes» y se asusta.', en: 'Patients take “frequent” in its everyday sense and get scared.' },
            { who: 'Clara', text: 'Por eso lo explico: «frecuentes, [[es decir|orange]], que pueden afectar [[hasta a una de cada diez personas|violet]]». Ni lo exagero ni lo escondo.', en: 'She keeps the technical word and explains its exact statistical meaning.' },
            { who: 'Gonzalo', text: 'Y la comparación de la manguera, ¿no es demasiado simple?', en: 'He questions whether her analogy oversimplifies.' },
            { who: 'Clara', text: 'Solo la uso para la idea básica: «[[es como el agua de una manguera con demasiada presión|teal]]: con los años, la manguera se estropea». [[Dicho de otro modo|orange]], las arterias se dañan poco a poco.', en: 'She limits the analogy to one idea and then states the literal meaning with a reformulator.' },
          ], notes: {
            'hipertensión arterial': 'Tecnicismo médico. Es correcto, pero en una hoja para pacientes conviene sustituirlo o explicarlo.',
            'tensión alta': 'Sustitución léxica: la expresión cotidiana que usan muchos pacientes en España. En América se dice sobre todo «presión alta».',
            'puede producir': 'Marca de probabilidad del original. Es información, no estilo: no se puede eliminar.',
            'puede dar mareo': 'Versión cotidiana que conserva el «puede»: más sencilla y, a la vez, fiel.',
            'la interrupción brusca del tratamiento': 'Nominalización: «interrupción» empaqueta la acción de dejar el medicamento y oculta quién lo hace.',
            'Si deja de tomarla de golpe': 'Desnominalización: verbo conjugado, sujeto claro (el paciente) y la misma condición («de golpe» = brusca).',
            'la dosis podrá ser modificada': 'Pasiva sin agente: el lector no sabe quién decide el cambio.',
            'Su médico puede cambiarle la dosis': 'Activa con agente explícito: aclara que decide el médico, no el paciente.',
            'es decir': 'Reformulador explicativo: mantiene el término «frecuentes» y aclara su sentido técnico.',
            'hasta a una de cada diez personas': 'Dato que no se pierde: «frecuente» en un prospecto significa exactamente esto, no «casi siempre».',
            'es como el agua de una manguera con demasiada presión': 'Analogía: acerca la idea, pero Clara la limita a un aspecto y después la traduce a lo literal.',
            'Dicho de otro modo': 'Reformulador: vuelve de la comparación al sentido real, para que la imagen no sustituya a la información.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué no acepta Gonzalo «causa mareos»?', options: ['Porque «mareos» es demasiado coloquial.', 'Porque el que no se marea podría pensar que la pastilla no le hace efecto.', 'Porque el medicamento nunca produce mareo.'], answer: 1, why: 'Lo dice él: «el que no se marea pensará que la pastilla no le hace efecto». Perder el «puede» cambia lo que el paciente entiende.', en: 'Why does Gonzalo reject “causes dizziness”?' },
            { prompt: '¿Qué añade Clara al pasar la pasiva a activa?', options: ['Una prohibición nueva.', 'El agente: quién cambia la dosis.', 'Una dosis concreta.'], answer: 1, why: '«Ahí no se dice quién la cambia, y el paciente tiene que saberlo»: añade «su médico».', en: 'What does Clara add when she turns the passive into an active?' },
            { prompt: '¿Cómo usa Clara la comparación de la manguera?', options: ['Como sustituto de la explicación médica.', 'Solo para la idea básica, y después lo dice de forma literal.', 'Para asustar a los pacientes.'], answer: 1, why: 'La limita a una idea y luego reformula con «dicho de otro modo, las arterias se dañan poco a poco».', en: 'How does Clara use the hosepipe comparison?' },
          ] },
        ] },
        { title: 'El resto del borrador · The rest of the draft', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'classify', title: '¿Fiel o no? · Faithful or not?', categories: [
            { id: 'fiel', label: 'Clara y fiel', tone: 'teal' },
            { id: 'pierde', label: 'Pierde o cambia información', tone: 'violet' },
          ], items: [
            { text: '«Vía oral» → «Se toma tragándola con un poco de agua».', answer: 'fiel', why: 'Explica «vía oral» con la acción concreta, sin añadir ni quitar nada relevante.' },
            { text: '«Puede tomarse con o sin alimentos» → «Puede tomarla antes, durante o después de comer».', answer: 'fiel', why: 'Desarrolla «con o sin alimentos» con las situaciones reales.' },
            { text: '«Consulte a su médico si nota hinchazón de tobillos» → «Es normal que se le hinchen los tobillos».', answer: 'pierde', why: 'El original pide consultar; la versión lo convierte en algo sin importancia.' },
            { text: '«No se ha estudiado en menores de 18 años» → «No se sabe si funciona ni si es seguro en menores de 18 años».', answer: 'fiel', why: 'Mantiene la falta de datos sin convertirla en un peligro demostrado.' },
            { text: '«Puede reducir el riesgo de ictus» → «Evita los ictus».', answer: 'pierde', why: '«Reducir el riesgo» no es «evitar»: se ha perdido la probabilidad.' },
            { text: '«Conservar por debajo de 30 °C» → «Guárdelo en un sitio fresco».', answer: 'pierde', why: 'Ha desaparecido el límite concreto: «fresco» es vago. Mejor: «en un sitio donde no pase de 30 grados».' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Adaptar sin traicionar', coach: 'Primero el contenido, luego la forma. Content first, then form.',
      steps: [
        { title: 'Elige la mejor versión · Choose the best version', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees el texto especializado. Tu alumno elige la versión cotidiana y explica qué conserva y qué pierden las otras.', self: 'Lee el original, elige la versión y explica en voz alta qué pierden las otras. (Say what the other options lose.)' } },
          { kind: 'choice', items: [
            { context: 'Prospecto.', prompt: '«Evite la exposición prolongada al sol durante el tratamiento.»', options: ['«Mientras lo tome, no pase mucho tiempo al sol.»', '«Tome el sol con cuidado cuando termine.»', '«No tome el sol nunca.»'], answer: 0, why: '«Prolongada» se convierte en «mucho tiempo» y «durante el tratamiento» en «mientras lo tome». «Nunca» exagera y «cuando termine» cambia el momento.', en: 'While you’re taking it, don’t spend long in the sun: duration and time frame are kept.' },
            { context: 'Carta del banco.', prompt: '«En caso de amortización anticipada, se aplicará una comisión del 1 % sobre el capital amortizado.»', options: ['«No puede devolver el préstamo antes de tiempo.»', '«Si devuelve dinero antes de tiempo, el banco le cobra el 1 % de lo que devuelva.»', '«Si paga antes, le cobran un 1 % de todo el préstamo.»'], answer: 1, why: 'La comisión es sobre lo que se devuelve («capital amortizado»), no sobre el préstamo entero; y devolver antes está permitido.', en: 'The 1 % applies to the amount repaid early, not to the whole loan.' },
            { context: 'Contrato de alquiler.', prompt: '«El arrendador podrá repercutir al arrendatario el importe del impuesto de bienes inmuebles.»', options: ['«El propietario pagará el impuesto y no se lo puede cobrar a nadie.»', '«El propietario puede cobrarle al inquilino lo que paga de impuesto por la vivienda.»', '«El inquilino tiene que pagar siempre el impuesto.»'], answer: 1, why: '«Podrá repercutir» significa que el propietario tiene la opción de pasar el coste al inquilino; «siempre» convierte la posibilidad en obligación.', en: '“Podrá” is an option for the landlord, not an obligation for the tenant.' },
            { context: 'Informe médico.', prompt: '«Se recomienda reducir la ingesta de sal.»', options: ['«Está prohibido tomar sal.»', '«La sal le ha subido la tensión.»', '«Le recomendamos que tome menos sal.»'], answer: 2, why: 'Una recomendación sigue siendo una recomendación; «ingesta» se traduce por «tomar». Las otras inventan una prohibición o una causa.', en: 'A recommendation stays a recommendation.' },
            { context: 'Manual técnico.', prompt: '«Se desaconseja la manipulación del equipo por personal no autorizado.»', options: ['«Cualquiera puede tocar el equipo.»', '«Si usted no está autorizado, es mejor que no toque el equipo.»', '«Si usted no está autorizado, tiene totalmente prohibido acercarse.»'], answer: 1, why: '«Se desaconseja» es un consejo fuerte, no una prohibición; la versión fiel mantiene esa fuerza y deja claro a quién se dirige.', en: 'Keep the force of the advice: discouraged, not forbidden.' },
          ] },
        ] },
        { title: '¿Qué operación es? · Which operation is it?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Las notas de Clara · Clara’s notes', categories: [
            { id: 'lexico', label: 'Cambia una palabra', tone: 'teal' },
            { id: 'sintaxis', label: 'Cambia la estructura (nominalización, pasiva)', tone: 'blue' },
            { id: 'apoyo', label: 'Añade una explicación, un ejemplo o una comparación', tone: 'orange' },
          ], items: [
            { text: '«Cefalea» → «dolor de cabeza».', answer: 'lexico', why: 'Solo se sustituye el término por la palabra común.' },
            { text: '«Tras la toma del comprimido» → «Después de tomar la pastilla».', answer: 'sintaxis', why: 'El sustantivo «toma» vuelve a ser un verbo («tomar»).' },
            { text: '«Hipotensión ortostática, es decir, la tensión baja de golpe al levantarse».', answer: 'apoyo', why: 'Se mantiene el término y se explica con un reformulador.' },
            { text: '«El informe será revisado por la dirección» → «La dirección revisará el informe».', answer: 'sintaxis', why: 'Pasiva → activa con el agente delante.' },
            { text: '«Un ictus, como un atasco en una tubería del cerebro».', answer: 'apoyo', why: 'Se añade una comparación para acercar la idea.' },
            { text: '«Arrendatario» → «inquilino».', answer: 'lexico', why: 'Sustitución léxica del término jurídico.' },
          ] },
        ] },
        { title: 'Simplificaciones peligrosas · Risky simplifications', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'fix', title: '¿Es fiel la versión? · Is the version faithful?', items: [
            { sentence: '«Puede aumentar el riesgo de hemorragia» → «Este medicamento provoca hemorragias.»', ok: false, options: ['«Este medicamento hace sangrar.»', '«Este medicamento provoca muchas hemorragias.»', '«Con este medicamento puede sangrar con más facilidad.»'], answer: 2, why: '«Puede aumentar el riesgo» indica más probabilidad, no un efecto seguro: la versión fiel conserva el «puede».' },
            { sentence: '«Contraindicado durante el embarazo» → «No se debe tomar durante el embarazo.»', ok: true, why: 'Correcto: «contraindicado» significa exactamente que no se debe usar en esa situación.' },
            { sentence: '«La dosis será ajustada por su médico» → «Ajuste la dosis según se encuentre.»', ok: false, options: ['«Su médico le ajustará la dosis.»', '«La dosis se ajusta sola.»', '«Ajústese la dosis usted mismo.»'], answer: 0, why: 'El agente es el médico; la versión errónea le pasa la decisión al paciente.' },
            { sentence: '«El arrendatario deberá notificar su voluntad de rescindir el contrato con un preaviso mínimo de treinta días» → «Si quiere irse, avise al propietario.»', ok: false, options: ['«Tiene treinta días para irse.»', '«Si quiere irse, avise al propietario cuando pueda.»', '«Si quiere dejar la vivienda, tiene que avisar al propietario por lo menos treinta días antes.»'], answer: 2, why: 'Hay que conservar el plazo mínimo, que es lo que obliga al inquilino. «Tiene treinta días para irse» cambia el sentido: no es un plazo para irse.' },
            { sentence: '«Tras la ingesta de alimentos» → «después de comer».', ok: true, why: 'Correcto: «ingesta de alimentos» es simplemente «comer», y «tras» es «después de».' },
          ] },
        ] },
        { title: 'Al teléfono con su padre · On the phone with her father', blocks: [
          { kind: 'chat-fill', title: 'Ernesto lee el prospecto y llama a Clara · Ernesto reads the leaflet and calls Clara', lines: [
            { who: 'Ernesto', text: 'Hija, aquí pone «hipotensión ortostática». ¿Qué es eso?' },
            { who: 'Clara', text: '___ si te levantas muy deprisa, la tensión te baja de golpe y te puedes marear.', options: ['Pues, sin embargo,', 'Pues viene a ser que', 'Pues, en consecuencia,'], answer: 1, why: 'Clara explica el término de forma aproximada y cotidiana: «viene a ser que» reformula; «en consecuencia» y «sin embargo» unen ideas distintas (consecuencia, oposición), no explican un término.' },
            { who: 'Ernesto', text: '¿Y me voy a marear todos los días?' },
            { who: 'Clara', text: 'No, papá. Dice que es frecuente, ___ le puede pasar hasta a una de cada diez personas.', options: ['por tanto, a todos', 'es decir, que', 'o sea, que siempre'], answer: 1, why: '«Frecuente» en un prospecto tiene un sentido técnico; «es decir» introduce la explicación exacta. Las otras opciones exageran.' },
            { who: 'Ernesto', text: 'Pues ya me encuentro bien. ¿La puedo dejar?' },
            { who: 'Clara', text: 'No la dejes por tu cuenta ___. La tensión alta no se nota, pero sigue ahí.', options: ['porque te encuentras bien', 'si te encuentras mal', 'aunque te encuentres bien'], answer: 2, why: 'El prospecto dice «no interrumpa el tratamiento aunque se encuentre bien»: la concesión es la clave del aviso.' },
            { who: 'Ernesto', text: '¿Y si un día se me olvida?' },
            { who: 'Clara', text: 'Tómala cuando te acuerdes, ___ ya sea casi la hora de la siguiente. Y nunca dos juntas.', options: ['porque', 'siempre que', 'salvo que'], answer: 2, why: 'Se conserva la excepción del original («salvo que falte poco para la siguiente dosis»). «Siempre que» la convertiría en condición contraria.' },
          ] },
        ] },
        { title: 'Construye frases fieles · Build faithful sentences', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'build', title: 'Ordena las piezas · Put the pieces in order', items: [
            { tiles: ['Si deja', 'de tomarla', 'de golpe,', 'la tensión', 'puede subir.'], accept: ['Si deja de tomarla de golpe, la tensión puede subir.'], en: 'If you suddenly stop taking it, your blood pressure may go up.' },
            { tiles: ['Su médico', 'puede', 'cambiarle', 'la dosis', 'según', 'cómo le vaya.'], accept: ['Su médico puede cambiarle la dosis según cómo le vaya.'], en: 'Your doctor may change your dose depending on how you get on.' },
            { tiles: ['El origen', 'del corte', 'podría estar', 'en el', 'cuadro eléctrico.'], accept: ['El origen del corte podría estar en el cuadro eléctrico.'], en: 'The cause of the power cut may lie in the electrical panel: report register, uncertainty kept.' },
          ] },
        ] },
        { title: 'En los dos sentidos · Both directions', blocks: [
          { kind: 'rewrite', title: 'Reformula · Reformulate', items: [
            { prompt: 'Se procedió a la evacuación del edificio.', instruction: 'Pásalo a lenguaje cotidiano con un verbo conjugado en pasado y sin inventar quién lo hizo.', accept: ['Evacuaron el edificio', 'Se evacuó el edificio', 'Desalojaron el edificio', 'Se desalojó el edificio'] },
            { prompt: 'El paciente será valorado por el servicio de cardiología.', instruction: 'Pasa la pasiva a activa con el agente como sujeto (futuro).', accept: ['El servicio de cardiología valorará al paciente', 'El servicio de cardiología va a valorar al paciente', 'El servicio de cardiología lo valorará', 'El servicio de cardiología le valorará'] },
            { prompt: 'Se ha ido la luz en Radiología.', instruction: 'Súbelo a registro de informe con «corte del suministro eléctrico» y «producirse», en indefinido.', accept: ['Se produjo un corte del suministro eléctrico en Radiología', 'Se produjo un corte del suministro eléctrico en el Servicio de Radiología', 'Se produjo un corte de suministro eléctrico en Radiología', 'Se produjo un corte de suministro eléctrico en el Servicio de Radiología', 'En Radiología se produjo un corte del suministro eléctrico'] },
            { prompt: 'Tras la verificación del correcto funcionamiento del equipo, se reanudó la actividad.', instruction: 'Pásalo a lenguaje cotidiano: «Cuando comprobaron que…» y después el verbo «volver a + infinitivo».', accept: ['Cuando comprobaron que el equipo funcionaba bien, volvieron a trabajar', 'Cuando comprobaron que el equipo funcionaba, volvieron a trabajar', 'Cuando comprobaron que el equipo funcionaba bien, volvieron a atender a los pacientes', 'Cuando comprobaron que el equipo funcionaba, volvieron a atender a los pacientes', 'Cuando comprobaron que el equipo funcionaba correctamente, volvieron a trabajar'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno explica en voz alta un documento real que haya leído hace poco (una factura, un contrato, un prospecto) a alguien sin formación técnica, y señala qué matiz ha cuidado de no perder.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio para Ernesto', coach: 'Escucha cómo traduce Clara. Listen to how Clara translates.',
      steps: [
        { title: 'El mensaje de voz · The voice message', blocks: [
          { kind: 'guide', text: { teacher: 'Escuchan el audio una vez para la idea general y otra para los detalles. Tu alumno anota cada tecnicismo del prospecto y la versión cotidiana que da Clara.', self: 'Escucha una vez para la idea general y otra para los detalles. Anota cada término técnico y cómo lo explica Clara. (Note each term and Clara’s everyday version.)' } },
          { kind: 'listen', title: 'Clara le explica el prospecto a su padre', channel: 'MENSAJE DE VOZ · CLARA', src: '/audio/grammar-live/528.mp3',
            before: 'Clara le manda un audio a su padre sobre el prospecto. ¿Qué tres cosas crees que le explicará? (Which three things do you think she will explain?)',
            gist: { prompt: '¿Qué hace Clara en el audio? · What is Clara doing in the message?', options: ['Le dice a su padre que el medicamento es peligroso.', 'Le traduce el prospecto a lenguaje sencillo sin quitarle ningún aviso importante.', 'Le pide que cambie de médico.'], answer: 1, why: 'Explica la dosis, el mareo, la frecuencia y qué hacer si se olvida, conservando los matices del prospecto.', en: 'She puts the leaflet into plain words while keeping every important warning.' },
            details: [
              { prompt: '¿Cómo traduce Clara «un comprimido cada veinticuatro horas»?', options: ['Dos pastillas al día.', 'Una pastilla al día, siempre a la misma hora.', 'Una pastilla cuando le suba la tensión.'], answer: 1, why: '«…es decir, una pastilla al día, siempre a la misma hora».', en: 'How does Clara put “one tablet every twenty-four hours”?' },
              { prompt: '¿Qué explica sobre el mareo?', options: ['Que significa que la pastilla no funciona.', 'Que le pasará seguro las primeras semanas.', 'Que puede pasar al levantarse de golpe y que no le ocurre a todo el mundo.'], answer: 2, why: 'Aclara que el prospecto «no dice que te vayas a marear seguro» y que «frecuente» significa que puede pasarle hasta a una de cada diez personas.', en: 'What does she explain about dizziness?' },
              { prompt: '¿Por qué no debe dejar la pastilla aunque se encuentre bien?', options: ['Porque la farmacia no se la volverá a vender.', 'Porque la dosis es doble al principio.', 'Porque la tensión alta no duele, aunque esté ahí.'], answer: 2, why: '«Dicho de otro modo, la tensión alta no duele, pero sigue ahí».', en: 'Why shouldn’t he stop taking the pill even if he feels fine?' },
              { prompt: '¿Qué debe hacer si se le olvida una dosis?', options: ['Esperar una semana.', 'Tomar dos al día siguiente.', 'Tomarla cuando se acuerde, salvo que ya sea casi la hora de la siguiente.'], answer: 2, why: 'Conserva la excepción del prospecto y añade «nunca te tomes dos juntas».', en: 'What should he do if he forgets a dose?' },
            ],
            transcript: 'Papá, soy Clara. Me he leído el prospecto de tu pastilla para la tensión y te lo cuento en sencillo, que está escrito de una manera… Pone «posología: un comprimido cada veinticuatro horas», [[es decir|orange]], una pastilla al día, siempre a la misma hora. Da igual que la tomes con comida o sin comida. Luego habla de «hipotensión ortostática», que [[viene a ser|orange]] que, si te levantas de golpe del sofá o de la cama, la tensión te puede bajar de repente y te puedes marear. [[O sea|orange]], levántate despacio, sobre todo las primeras semanas. Pero ojo: no dice que te vayas a marear seguro. Dice que [[puede pasar|violet]] y que es frecuente, [[lo que viene a significar|orange]] que le puede pasar [[hasta a una de cada diez personas|violet]], no a todo el mundo. Y una cosa importante: aunque te encuentres bien, no la dejes por tu cuenta. [[Dicho de otro modo|orange]], la tensión alta no duele, pero sigue ahí. Solo la doctora puede decirte que la dejes o que cambies la dosis. Si un día se te olvida, tómala cuando te acuerdes, [[salvo que|violet]] ya sea casi la hora de la siguiente; y nunca te tomes dos juntas. Te lo dejo apuntado en la nevera. Un beso.',
            reply: { teacher: 'Tú eres Ernesto y le haces a Clara dos preguntas más sobre el prospecto («¿Puedo tomar una cerveza?», «¿Y si me hincho los tobillos?»). Tu alumno responde como Clara: sencillo, con un reformulador y sin perder ningún «puede».', self: 'Imagina que Ernesto pregunta: «¿Y si se me hinchan los tobillos?». Responde en voz alta como Clara: el prospecto dice «consulte a su médico si nota hinchazón de tobillos». (Answer without losing the instruction.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Mediar en voz alta', coach: 'Explica, comprueba, matiza. Explain, check, qualify.',
      steps: [
        { title: 'Situaciones de mediación · Mediation situations', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces de interlocutor y a veces finges no entender («¿Y eso qué quiere decir?»), para que tu alumno reformule otra vez. Si convierte un «puede» en certeza o inventa un dato, tú lo señalas y lo repite.', self: 'Responde cada tarjeta en voz alta. Después imagina que alguien no te ha entendido y reformula de otra manera. (Answer aloud, then rephrase as if someone had not understood.)' } },
          { kind: 'talk', cards: [
            { q: 'Explica un término técnico de tu trabajo o tus estudios a alguien de tu familia. · Explain a technical term from your field to a relative.', followUps: ['¿Puedes darme un ejemplo de la vida diaria?', '¿Hay algún matiz que se pierda si lo simplificas?'], phrases: ['…, [[es decir|orange]], …', '[[Dicho de otro modo|orange]], …', '…, como cuando…'], hint: 'Término, reformulador, ejemplo o comparación y, si hace falta, un límite: «aunque no es exactamente lo mismo».', example: 'Trabajo en ciberseguridad y paso el día buscando vulnerabilidades, es decir, puntos débiles por donde alguien podría entrar en un sistema. Es como revisar todas las puertas y ventanas de una casa antes de irte de vacaciones, aunque en un sistema las puertas cambian cada semana.' },
            { q: 'Tu tía ha recibido una carta del banco que dice: «Su préstamo presenta dos cuotas impagadas». Explícasela. · Explain a bank letter to your aunt.', followUps: ['¿Qué puede pasar si no paga?', '¿Qué le aconsejarías hacer primero?'], phrases: ['[[lo que viene a significar|orange]] que…', '[[puede|violet]]…', '[[en otras palabras|orange]], …'], hint: 'Traduce «cuotas impagadas» y no conviertas una posibilidad en una amenaza segura.', example: 'Pues que tienes dos cuotas impagadas, en otras palabras, que el banco no ha recibido dos de los pagos del préstamo. Lo que viene a significar que puede cobrarte intereses de demora, o sea, un dinero extra por el retraso. Lo primero es llamar y comprobar si es un error.' },
            { q: 'Eres Clara. Gonzalo te dice: «Pon que el ejercicio reduce el riesgo cardiovascular». ¿Cómo lo dices para los pacientes? · Adapt the doctor’s sentence.', followUps: ['¿Pondrías un ejemplo de ejercicio?', '¿Qué no puedes escribir?'], phrases: ['[[hace menos probable|violet]]…', '[[por ejemplo|teal]], …'], hint: 'Mantén «reduce el riesgo»: no es lo mismo que «evita».', example: 'Moverse cada día hace menos probable tener un problema de corazón. Por ejemplo, caminar media hora a buen paso. No escribiría «evita los infartos», porque nadie puede prometer eso.' },
            { q: 'Has visto o vivido una avería (en casa, en el trabajo, en el tren). Cuéntala primero como a un amigo y después como en un informe. · Tell a breakdown twice: casually, then formally.', followUps: ['¿Qué datos exactos tienes y cuáles son aproximados?', '¿Sabes seguro cuál fue la causa?'], phrases: ['[[se produjo|blue]]…', '[[hacia las|violet]]…', '[[según una primera valoración|violet]], …'], hint: 'En la versión formal, horas aproximadas con «hacia», agentes por su función y la causa con cautela si no es segura.', example: 'A un amigo: «Ayer se paró el tren en mitad del túnel a eso de las ocho y nos tuvieron media hora a oscuras». En un informe: «Hacia las 20:00 se produjo una detención del tren en el interior del túnel. Los pasajeros permanecieron unos treinta minutos sin iluminación. Según la información facilitada por la empresa, la causa podría ser una avería en la catenaria».' },
            { q: 'Un vecino ha leído en internet que «el café causa hipertensión». El artículo original decía «el consumo elevado de café podría asociarse a un aumento de la tensión». ¿Qué le dices? · Correct a bad simplification.', followUps: ['¿Qué significa «asociarse»?', '¿Qué es «elevado»?'], phrases: ['[[no dice que|violet]]…', '[[es decir|orange]], …', '[[podría|violet]]…'], hint: 'Señala las tres cosas que se han perdido: «elevado», «podría» y «asociarse», que no es «causar».', example: 'El artículo no dice eso. Habla de tomar mucho café, no de tomar café, y dice que podría haber una relación, es decir, que las dos cosas aparecen juntas a menudo, no que una provoque la otra.' },
            { q: 'Un compañero de un país donde se habla otra variedad no entiende una palabra técnica que usas a diario. ¿Cómo lo resuelves? · Handle a regional vocabulary gap.', followUps: ['¿Qué palabra usaría él?', '¿Pondrías las dos en un documento?'], phrases: ['…, [[o sea|orange]], lo que tú llamas…', '[[en otras palabras|orange]], …'], hint: 'Ofrece la palabra de su variedad o una explicación neutra, sin presentar ninguna como la correcta.', example: 'Le dije que reiniciara el ordenador y me miró raro. Le expliqué: «el ordenador, o sea, la computadora». En el manual del equipo, en cambio, pusimos «la computadora (u ordenador)», porque lo iba a leer gente de los dos lados.' },
          ], swap: { teacher: 'Al final cambian los papeles: tu alumno lee un texto técnico y tú lo simplificas con algún error a propósito («causa» por «puede causar», un plazo que desaparece, un agente cambiado). Tu alumno lo detecta y lo corrige.', self: 'Graba una de tus explicaciones y escúchala: ¿has mantenido cada «puede», cada plazo y cada excepción? Repítela si se ha perdido algo. (Record one answer and check what survived.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Del WhatsApp al informe', coach: 'Preciso, impersonal y prudente. Precise, impersonal and careful.',
      steps: [
        { title: 'El informe de incidencia · The incident report', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después comparan el informe con el WhatsApp de Rubén línea por línea: ¿falta algún dato?, ¿hay alguno inventado?, ¿se ha mantenido la duda sobre la causa?', self: 'Escribe tu informe y toca «Revisar mi texto». Después compáralo con el WhatsApp: ¿has perdido o inventado algo? (Check nothing was lost or invented.)' } },
          { kind: 'write', title: 'Informe de incidencia técnica · Technical incident report', situation: 'Rubén Salcedo, técnico de mantenimiento, le escribe a Clara por WhatsApp: «Clara, te cuento lo de esta mañana. A eso de las diez y diez se ha ido la luz en todo Radiología. El generador ha saltado enseguida, pero el escáner se ha quedado colgado y había dos pacientes esperando. Los compañeros de la unidad los han pasado a la sala de espera de Urgencias para que no estuvieran a oscuras. Hemos reiniciado el escáner y a eso de las once menos cuarto ya iba. Parece que fue el diferencial del cuadro de la planta, pero lo tiene que confirmar la empresa de mantenimiento.» Clara te pide que redactes el informe de incidencia para la Dirección del hospital. (Turn the technician’s WhatsApp into a formal incident report for hospital management.)', task: [
            'Usa el registro técnico: «corte del suministro eléctrico», «generador de emergencia», «equipo de tomografía computarizada (TC)», «operativo». (Use the technical terms.)',
            'Nombra a los agentes por su función, sin primera persona: «el personal de mantenimiento», «el personal de la unidad». (Name agents by role.)',
            'Conserva las horas aproximadas como aproximadas («hacia», «en torno a»). (Keep approximate times approximate.)',
            'Mantén la duda sobre la causa: «podría», «según una primera valoración», «pendiente de confirmación». (Keep the uncertainty.)',
            'No añadas datos que Rubén no da. (Add nothing the source does not say.)',
          ], starters: ['Hacia las 10:10 se produjo…', 'El generador de emergencia entró en funcionamiento…', 'Los dos pacientes que esperaban…', 'El personal de mantenimiento…', 'Según una primera valoración,…', '…, extremo que deberá confirmar…'],
            words: ['corte del suministro eléctrico', 'generador de emergencia', 'equipo de tomografía computarizada', 'operativo', 'trasladar', 'reiniciar', 'interruptor diferencial', 'pendiente de confirmación'],
            model: 'Asunto: Incidencia eléctrica en el Servicio de Radiología. Hacia las 10:10 de hoy [[se produjo un corte del suministro eléctrico|blue]] que afectó a todo el Servicio de Radiología. El generador de emergencia entró en funcionamiento de inmediato; sin embargo, el equipo de tomografía computarizada (TC) dejó de responder. En ese momento había dos pacientes en espera, que el personal de la unidad trasladó a la sala de espera de Urgencias para que no permanecieran sin iluminación. El personal de mantenimiento reinició el equipo, que hacia las 10:45 ya estaba operativo. [[Según una primera valoración|violet]], el origen del corte [[podría estar|violet]] en el interruptor diferencial del cuadro eléctrico de la planta, extremo que deberá confirmar la empresa responsable del mantenimiento.',
            minWords: 110,
            checks: [
              { label: 'El término técnico «suministro eléctrico»', pattern: '(?<!\\p{L})suministro\\s+eléctrico(?!\\p{L})', tip: 'Sustituye «se ha ido la luz» por «se produjo un corte del suministro eléctrico».' },
              { label: 'Una hora aproximada con «hacia» o «en torno a»', pattern: '(?<!\\p{L})(?:hacia|en\\s+torno\\s+a|alrededor\\s+de|aproximadamente\\s+a)\\s+las\\s+\\d', tip: 'Rubén da horas aproximadas: «hacia las 10:10».' },
              { label: 'Un agente nombrado por su función', pattern: '(?<!\\p{L})personal\\s+de(?:\\s+la)?\\s+(?:mantenimiento|unidad|servicio)(?!\\p{L})', tip: 'Nombra a quien actuó: «el personal de mantenimiento».' },
              { label: 'Una marca de cautela sobre la causa', pattern: '(?<!\\p{L})(?:podría|podrían|posiblemente|probablemente|según\\s+(?:una|la)\\s+(?:primera\\s+)?valoración|pendiente\\s+de\\s+confirma)', tip: 'Rubén dice «parece que»: mantén la duda con «podría» o «según una primera valoración».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:se\\s+(?:ha|había)\\s+ido\\s+la\\s+luz|a\\s+eso\\s+de|colgado|ya\\s+iba)(?!\\p{L})', why: 'Expresión coloquial del WhatsApp. En el informe: **corte del suministro**, **hacia las…**, **dejó de responder**, **estaba operativo**.' },
              { pattern: '(?<!\\p{L})(?:hemos|nosotros|reiniciamos)(?!\\p{L})', why: 'Un informe de incidencia no usa la primera persona: nombra al agente por su función («el personal de mantenimiento»).' },
              { pattern: '(?<!\\p{L})(?:fue\\s+(?:causad[oa]|provocad[oa])|se\\s+debió|lo\\s+causó|lo\\s+provocó)(?!\\p{L})', why: 'Rubén no está seguro de la causa. Si la presentas como segura, cambias la información: usa **podría** o **según una primera valoración**.' },
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
            { tone: 'teal', label: 'LA PALABRA', formula: 'sustituir el tecnicismo · o mantenerlo + es decir / o sea / en otras palabras / lo que viene a significar', example: 'Tiene hipertensión, es decir, la tensión alta.', caption: 'explica si el lector volverá a ver el término', en: 'explain the term rather than replace it when the reader will meet it again' },
            { tone: 'blue', label: 'LA FRASE', formula: 'nominalización → verbo conjugado · pasiva → activa con agente si importa', example: 'Se procedió a la evacuación → Evacuaron el edificio.', caption: 'sin inventar agentes', en: 'never invent an agent the source does not give' },
            { tone: 'violet', label: 'LO QUE NO SE TOCA', formula: 'puede, podría, no se ha demostrado · frecuente = hasta 1 de cada 10 · salvo que, aunque, plazos', example: 'Puede aumentar el riesgo ≠ causa.', caption: 'se simplifica la forma, no la certeza', en: 'simplify the form, never the degree of certainty' },
            { tone: 'orange', label: 'EL CAMINO DE VUELTA', formula: 'palabra común → término · yo / nosotros → agente por su función · «a eso de» → hacia · «parece que» → podría', example: 'Se ha ido la luz → Se produjo un corte del suministro eléctrico.', caption: 'subir de registro sin inflar', en: 'raise the register without padding or false precision' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Antes de dar por buena una reformulación, ponla al lado del original y pregúntate: ¿**afirma lo mismo**, con la **misma certeza**, las **mismas condiciones** y el **mismo agente**? Si la respuesta es sí, cambia todo lo demás: palabras, orden, longitud, ejemplos. Una versión clara pero infiel no es una buena mediación.', en: 'Put your version next to the original: same claim, same certainty, same conditions, same agent? If so, change everything else freely. A clear but unfaithful version is not good mediation.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco casos, sin ayuda · Five cases, no help', items: [
            { prompt: '«Los ensayos indican que el fármaco podría reducir la progresión de la enfermedad.»', options: ['«El medicamento cura la enfermedad.»', '«Según los estudios, el medicamento podría hacer que la enfermedad avance más despacio.»', '«El medicamento no sirve para nada.»'], answer: 1, why: '«Reducir la progresión» es hacer que avance más despacio, no curar; y el «podría» se mantiene.', en: 'Studies suggest the drug may slow the disease down: no cure, hedge kept.' },
            { prompt: '«Se procederá al corte del tráfico en la avenida a partir de las 22:00.»', options: ['«Rubén cortará el tráfico a las diez.»', '«Puede que haya tráfico en la avenida.»', '«Cortarán el tráfico de la avenida desde las diez de la noche.»'], answer: 2, why: 'Se deshace la nominalización con tercera persona del plural; no se inventa agente y se conserva la hora.', en: 'They’ll close the avenue to traffic from 10 p.m.' },
            { prompt: '«El incumplimiento de esta norma podrá ser sancionado.»', options: ['«Si no cumple la norma, le multarán.»', '«Si no cumple la norma, le pueden sancionar.»', '«La norma no se puede incumplir.»'], answer: 1, why: '«Podrá ser sancionado» es una posibilidad: «le pueden sancionar». «Le multarán» lo da por seguro.', en: 'If you break the rule, you may be penalised.' },
            { prompt: 'Rubén: «Creo que el fallo vino del cuadro». En el informe:', options: ['«Rubén cree cosas sobre el cuadro.»', '«El fallo se originó en el cuadro.»', '«El fallo podría tener su origen en el cuadro eléctrico.»'], answer: 2, why: 'Se sube el registro y se mantiene la duda de «creo».', en: 'The fault may have originated in the electrical panel.' },
            { prompt: '¿Qué reformulador presenta una paráfrasis más libre, que resume el sentido práctico?', options: ['«lo que viene a significar»', '«a saber»', '«mejor dicho»'], answer: 0, why: '«Lo que viene a significar» introduce una interpretación aproximada; «a saber» enumera y «mejor dicho» corrige.', en: 'Lo que viene a significar signals an approximate, practical gloss.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, en un ayuntamiento. Now, at the town hall.', blocks: [
          { kind: 'lead', text: 'Nerea Salinas atiende al público en la oficina de vivienda del ayuntamiento. Los vecinos le traen frases de las bases de una ayuda al alquiler que no entienden. Tú las reformulas en lenguaje cotidiano sin perder ningún requisito.', en: 'Nerea works at the town hall’s housing desk. Residents bring her sentences from the rules of a rent subsidy that they can’t follow; you rephrase them in everyday language without losing any requirement.' },
          { kind: 'rewrite', title: 'Las bases de la ayuda · The subsidy rules', items: [
            { prompt: 'La solicitud deberá ser presentada por el interesado antes del 30 de noviembre.', instruction: 'Pasa a activa con «usted» como sujeto y «tener que».', accept: ['Usted tiene que presentar la solicitud antes del 30 de noviembre', 'Tiene que presentar la solicitud antes del 30 de noviembre', 'Usted tendrá que presentar la solicitud antes del 30 de noviembre', 'Tendrá que presentar la solicitud antes del 30 de noviembre'] },
            { prompt: 'Tras la comprobación de la documentación, se procederá al pago de la ayuda.', instruction: 'Pásalo a lenguaje cotidiano: «Cuando comprueben…» y «les pagarán / le pagarán la ayuda».', accept: ['Cuando comprueben la documentación, le pagarán la ayuda', 'Cuando comprueben los documentos, le pagarán la ayuda', 'Cuando comprueben la documentación, les pagarán la ayuda', 'Cuando comprueben los documentos, les pagarán la ayuda', 'Cuando comprueben sus documentos, le pagarán la ayuda'] },
            { prompt: 'La ayuda podrá ser revocada en caso de falsedad en los datos aportados.', instruction: 'Pasa a lenguaje cotidiano con «si», «datos falsos» y «pueden quitarle la ayuda», conservando la posibilidad.', accept: ['Si da datos falsos, pueden quitarle la ayuda', 'Si usted da datos falsos, pueden quitarle la ayuda', 'Si da datos falsos, le pueden quitar la ayuda', 'Si usted da datos falsos, le pueden quitar la ayuda', 'Si aporta datos falsos, pueden quitarle la ayuda', 'Si aporta datos falsos, le pueden quitar la ayuda'] },
          ] },
        ] },
        { title: 'Ampliación · Comparaciones y registro alto sin exceso · Extension', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. Las **analogías** acercan una idea, pero cada una tiene un límite: la manguera explica la presión, no por qué la tensión no duele. Una buena mediación marca ese límite («la comparación no es perfecta: …»). Y al **subir de registro** existe el error contrario a la simplificación: inflar el texto con sustantivos vacíos («se procedió a efectuar la realización de una revisión») o con tecnicismos que el lector final no necesita.', en: 'For strong students or spare time. Analogies bring an idea closer but always break down somewhere, and good mediation says where. When raising the register, the opposite error to oversimplifying is inflation: empty nouns and jargon the final reader does not need.' },
          { kind: 'choice', title: 'Casos más finos · Finer cases', items: [
            { prompt: 'Clara explica un virus informático: «Es como un virus de la gripe: se contagia». ¿Qué límite conviene señalar?', options: ['Que no se transmite solo por estar cerca: hace falta abrir un archivo o un enlace, o que el sistema tenga una vulnerabilidad.', 'Ninguno: la comparación es exacta.', 'Que en un ordenador no hay estornudos.'], answer: 0, why: 'El límite relevante es el mecanismo de contagio, que es lo que el lector necesita para protegerse.', en: 'Mark the limit that matters for the reader’s action.' },
            { prompt: '¿Cuál es la versión formal adecuada de «Revisamos el ascensor y está bien»?', options: ['«Se revisó el ascensor y no se detectaron anomalías.»', '«El ascensor bien.»', '«Se procedió a efectuar la realización de una revisión del ascensor, con resultado satisfactorio.»'], answer: 0, why: 'Registro de informe sin relleno; «no se detectaron anomalías» es además más preciso que «está bien».', en: 'Formal register without padding.' },
            { prompt: 'Una vecina pregunta qué significa «el riesgo relativo se duplica» en una noticia de salud. Respuesta más fiel:', options: ['«Que hay un cincuenta por ciento de probabilidades.»', '«Que te va a pasar seguro.»', '«Que el riesgo es el doble que en el otro grupo; si era muy pequeño, sigue siendo pequeño.»'], answer: 2, why: 'Riesgo relativo compara dos grupos: duplicar un riesgo pequeño no lo convierte en grande. Es un matiz que las malas simplificaciones pierden a menudo.', en: 'Relative risk compares groups: double a tiny risk is still small.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno elige una noticia de salud o de economía, la resume en dos frases para un adolescente y explica qué matiz ha decidido conservar.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 229 · Paráfrasis avanzada preservando compromiso epistémico', text: 'Hoy has visto que, al reformular, lo más fácil de perder es el grado de certeza: un «puede» que se convierte en «causa». En la clase 229 te centras en eso: parafrasear con precisión el compromiso del hablante con lo que dice («es probable que», «todo apunta a que», «no cabe descartar»), sin subirlo ni bajarlo.', en: 'Today you saw that the easiest thing to lose when reformulating is the degree of certainty. Class 229 focuses on exactly that: paraphrasing the speaker’s commitment to what they say precisely, without raising or lowering it.', href: '/gramatica/parafrasis-avanzada-preservando-compromiso-epistemico', label: 'Ir a la clase 229' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué diferencia hay entre “Si lo deja, le sube la tensión” y “Si deja de tomarlo de golpe, la tensión puede subir”?». Respuesta esperada: la primera pierde la condición («de golpe») y la probabilidad («puede»). Tarea: el informe de incidencia de Escribir.' },
        ] },
      ],
    },
  ],
};
