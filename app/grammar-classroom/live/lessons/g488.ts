import type { LiveLesson } from '../types';

/**
 * Lesson 488 · C1 · Nominalizaciones evaluativas y densidad informativa (course unit G188).
 * Builds on G162 (lesson 116: ellipsis, restrictive/explanatory modifiers, ambiguous «de»)
 * and G183 (lesson 483: nominalisation as one way of leaving out the doer). C1 step: turning
 * whole clauses into noun phrases for dense formal writing (Como subieron los precios… → La
 * subida de los precios provocó…): verb → noun, subject/object → de + N, adverb → adjective,
 * negation → la falta de, connector → causal verb (provocar, explicar, traducirse en); the
 * main suffixes and what they mean (-ción, -miento, -da, -aje, -ncia: action or result;
 * -dad, -eza, -ura: quality; zero suffix: el retraso, el recorte), lexical not predictable
 * (*la llegación, apertura ≠ abertura); evaluative nominalisations that carry stance
 * (el despilfarro de, una chapuza, un acierto, la torpeza de + inf., el escándalo de) and
 * neuter «lo + adj. + de» (lo grave del asunto; Lo importante son los datos); keeping
 * genitive chains readable; the risks of nominal style (empty verbs: se procedió a la
 * realización de → se realizó; lost agent; ambiguity). Audit gap 33: generic article and
 * absence of article (el + sing. = the kind, los + pl. = members, un + sing. = what any
 * member is expected to be, not with kind predicates; la + abstract noun in general
 * statements; bare nouns after the verb for unspecified quantity, in headlines and lists,
 * and after sin / con / de in classifying phrases; no bare preverbal subject in running
 * text). Ampliación: «lo + adj. + que» (lo caros que están) and epithets (el bueno de Raúl,
 * un desastre de obra).
 * Scene: Valencia (Spain), the fictional Observatorio Ciudadano de Movilidad prepares its
 * annual report on bus line 7. Coordinator Elena Montoya edits the chapter written by the
 * analyst Raúl Ferrer, who also writes an opinion column for a local paper. Escuchar: Raúl
 * reads his column on local radio (es-ES-AlvaroNeural). Escribir: a two-paragraph text,
 * neutral summary + opinion, on a public service.
 */
export const lesson: LiveLesson = {
  id: 488,
  level: 'C1',
  title: 'Nominalizaciones evaluativas y densidad informativa',
  subtitle: 'Condensar oraciones en grupos nominales, valorar con sustantivos que opinan y decidir cuándo el artículo sobra o hace falta.',
  legend: [
    { tone: 'blue', label: 'NOMINALIZACIÓN · el hecho como sustantivo: la subida de, el descenso de (an event turned into a noun)' },
    { tone: 'violet', label: 'EVALUACIÓN · el sustantivo opina: un despilfarro, un acierto, lo grave de (nouns that carry a judgement)' },
    { tone: 'orange', label: 'RELLENO O VERBO · se procedió a la realización de → se realizó (padding versus the plain verb)' },
    { tone: 'teal', label: 'ARTÍCULO · genérico o ausente: los usuarios, la puntualidad, sin billete (generic article or no article)' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Decir más con menos palabras', coach: 'Un sustantivo puede contener una oración entera. A noun can hold a whole clause.',
      steps: [
        { title: 'Un capítulo con frases de seis líneas · A chapter with six-line sentences', blocks: [
          { kind: 'lead', text: 'Valencia, España. El **Observatorio Ciudadano de Movilidad** prepara su informe anual sobre la línea 7 de autobús. La coordinadora, **Elena Montoya**, revisa el capítulo de **Raúl Ferrer**, un analista que escribe como habla: oraciones largas, encadenadas con «como», «y además», «por eso». Los datos son buenos; el problema es que el lector se pierde. Hoy aprendes a **condensar**: convertir oraciones en grupos nominales, y a saber cuándo no hacerlo.', en: 'Valencia, Spain. A citizens’ transport watchdog is preparing its annual report on bus line 7. The coordinator is editing a chapter by an analyst who writes the way he talks: long clauses chained with “because”, “and also”, “so”. The data are good, but the reader gets lost. Today you learn to condense clauses into noun phrases, and to know when not to.' },
          { kind: 'guide', text: { teacher: 'Tú lees el borrador de Raúl; tu alumno lee la versión de Elena. Después tu alumno cuenta cuántos verbos conjugados tiene cada versión y dice qué palabras han desaparecido.', self: 'Lee las dos versiones en voz alta. ¿Cuántos verbos conjugados tiene cada una? ¿Qué palabras han desaparecido? (How many finite verbs does each one have?)' } },
          { kind: 'compare', title: 'La misma información, dos densidades · Same information, two densities', columns: [
            { tone: 'orange', label: 'BORRADOR DE RAÚL', sentence: 'Como en enero subieron el precio del abono y además las obras del carril bus se retrasaron mucho, muchos viajeros dejaron de usar la línea, y por eso los ingresos bajaron.', idea: 'Cuatro verbos conjugados y tres conectores (como, y además, y por eso): natural al hablar, pesado en un informe.', en: 'Four finite verbs and three connectors: fine in speech, heavy in a report, where the reader wants the causes and effects at a glance.' },
            { tone: 'blue', label: 'VERSIÓN DE ELENA', sentence: '[[La subida del abono|blue]] en enero y [[el retraso de las obras|blue]] del carril bus provocaron [[un descenso de viajeros|blue]] y, con él, [[una caída de los ingresos|blue]].', idea: 'Un solo verbo principal (provocaron): las causas y los efectos son sustantivos.', en: 'One main verb: causes and effects have become nouns, and the causal link is carried by the verb provocar instead of como… por eso.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué ha hecho Elena con «subieron el precio del abono»?', options: ['Lo ha borrado porque no era importante.', 'Lo ha pasado a voz pasiva.', 'Lo ha convertido en un grupo nominal: «la subida del abono».'], answer: 2, why: 'El verbo subir pasa a sustantivo (la subida) y lo que subía pasa a complemento con «de».', en: 'The verb has become a noun, and what went up is now introduced by de.' },
            { prompt: '¿Dónde está ahora la relación de causa?', options: ['En la coma.', 'En el conector «como».', 'En el verbo «provocaron».'], answer: 2, why: 'Al nominalizar, la causa ya no la expresa un conector, sino un verbo que une dos sustantivos: provocar, causar, explicar.', en: 'When you nominalise, a verb such as provocar takes over the job the connector used to do.' },
          ] },
        ] },
        { title: 'De la oración al grupo nominal · From clause to noun phrase', mascot: '/brand/mascot/studying.webp', coach: 'Verbo → nombre; sujeto → de. Verb → noun; subject → de.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'NOMINALIZAR UNA ORACIÓN', question: '¿Qué pasa con cada pieza de la oración cuando el verbo se convierte en sustantivo?', en: 'When a verb becomes a noun, the rest of the clause is rebuilt around it: the subject or object is introduced by de (or becomes su), an adverb becomes an adjective, a negation becomes la falta de or la ausencia de, and the connector (como, por eso) is replaced by a verb linking two noun phrases: provocar, causar, explicar, traducirse en, deberse a.', formula: ['verbo → sustantivo (subir → la subida)', 'sujeto u objeto → de + N / su (la subida de los precios, su llegada)', 'adverbio → adjetivo (rápidamente → la rápida reparación)', 'no + verbo → la falta de / la ausencia de', 'como… / por eso → provocar, explicar, deberse a, traducirse en'],
            meaning: 'Nominalizar no es solo cambiar el verbo por un sustantivo: **toda la oración se reorganiza**. Lo que era sujeto u objeto pasa a complemento con **de**; el adverbio se vuelve **adjetivo**; la negación se expresa con **falta de** o **ausencia de**; y la relación entre los hechos ya no la lleva un conector, sino un **verbo** que une dos grupos nominales. El resultado es más denso y más impersonal: perfecto para informes, resúmenes y titulares.',
            examples: [
              { es: 'Los conductores no se coordinaron → [[La falta de coordinación|blue]] entre los conductores provocó retrasos.', en: 'Negation becomes la falta de: the anchor pattern for reports.' },
              { es: 'Repararon rápidamente la avería → [[La rápida reparación de la avería|blue]] evitó más cortes.', en: 'The adverb rápidamente becomes the adjective rápida, placed before the noun.' },
              { es: 'La frecuencia bajó porque faltaban conductores → [[La reducción de la frecuencia|blue]] se debe a [[la escasez de conductores|blue]].', en: 'The connector porque disappears; deberse a links the effect to its cause.' },
            ],
            note: 'Si hay sujeto y objeto, normalmente solo uno va con «de»: «la compra de autobuses **por parte del** ayuntamiento». El agente puede perderse; en la última etapa de Entender verás cuándo eso es un problema.' },
          { kind: 'table', title: 'Piezas que cambian · Pieces that change', head: ['Oración', 'Grupo nominal', 'Qué cambia'], rows: [
            ['El servicio **llegó** tarde al barrio.', '**la llegada tardía** del servicio al barrio', 'verbo → sustantivo; adverbio → adjetivo'],
            ['La empresa **amplió** el horario.', '**la ampliación del** horario (por parte de la empresa)', 'el objeto pasa a «de»; el agente, a «por parte de» o desaparece'],
            ['**Nadie informó** a los vecinos.', '**la falta de información** a los vecinos', 'negación → falta de / ausencia de'],
            ['El autobús **es fiable**.', '**la fiabilidad del** autobús', 'adjetivo → sustantivo de cualidad'],
            ['**Como** cerraron la calle, el tráfico se desvió.', '**El cierre de** la calle **obligó a desviar** el tráfico.', 'el conector se convierte en verbo'],
          ], note: 'Estos verbos «de enlace» son clave en la escritura formal: provocar, causar, explicar, permitir, impedir, dar lugar a, traducirse en, deberse a, obedecer a.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Los técnicos revisaron a fondo los frenos.» ¿Qué grupo nominal es correcto?', options: ['El revisamiento de los frenos', 'La revisión a fondo de los frenos', 'La revisada a fondo de los frenos'], answer: 1, why: 'Revisar → la revisión; el objeto pasa a «de los frenos»; la locución «a fondo» puede quedarse (o pasar a adjetivo: «la revisión exhaustiva»).', en: 'Revisar becomes la revisión, the object takes de, and the adverbial phrase can stay.' },
            { prompt: '«No hubo mantenimiento y por eso el ascensor se averió.» Versión de informe:', options: ['La avería del ascensor se debe al mantenimiento falta.', 'La avería del ascensor se debe a la falta de mantenimiento.', 'La avería del ascensor se debe a no mantenimiento.'], answer: 1, why: 'La negación se nominaliza con «la falta de»; «deberse a» une el efecto con su causa.', en: 'Negation is nominalised with la falta de, and deberse a links effect and cause.' },
          ] },
        ] },
        { title: 'Sufijos: qué significa cada uno · Suffixes and what they mean', mascot: '/autoestudio/mascot/noting.webp', coach: 'El sufijo no se inventa: se comprueba. You check a suffix; you don’t invent it.', blocks: [
          { kind: 'table', title: 'Sufijos frecuentes · Frequent suffixes', head: ['Sufijo', 'Base', 'Significado', 'Ejemplos'], rows: [
            ['**-ción / -sión**', 'verbo', 'acción o su resultado', 'la reducción, la ampliación, la decisión'],
            ['**-miento**', 'verbo', 'acción, proceso', 'el funcionamiento, el cumplimiento, el encarecimiento'],
            ['**-da** (participio)', 'verbo', 'acción puntual, a menudo un movimiento', 'la llegada, la subida, la caída, la salida'],
            ['**-aje**', 'verbo o nombre', 'acción (a veces técnica) o conjunto', 'el aprendizaje, el montaje, el kilometraje'],
            ['**-ncia**', 'verbo o adjetivo', 'acción o cualidad', 'la permanencia, la frecuencia, la eficiencia'],
            ['**-dad / -idad**', 'adjetivo', 'cualidad', 'la puntualidad, la fiabilidad, la seguridad'],
            ['**-eza**', 'adjetivo', 'cualidad', 'la limpieza, la torpeza, la pobreza'],
            ['**-ura**', 'verbo o adjetivo', 'acción o resultado; cualidad', 'la apertura, la cobertura; la altura'],
            ['**sin sufijo** (-o, -e, -a)', 'verbo', 'acción o resultado', 'el retraso, el recorte, el gasto, la consulta'],
          ], note: 'Muchos sustantivos significan la acción y también su resultado o el lugar: «la construcción» (el proceso y el edificio), «la salida» (salir y la puerta).' },
          { kind: 'tip', icon: '💡', title: 'No es una regla libre · Not a free rule', text: 'El sufijo depende de cada palabra: **llegar → la llegada** (no «*la llegación»), **subir → la subida** (no «*el subimiento»), **encarecer → el encarecimiento**. A veces hay dos sustantivos con sentidos distintos: **la apertura** es la acción de abrir o inaugurar («la apertura de la estación»); **la abertura** es un hueco («una abertura en la valla»). Ante la duda, consulta el diccionario.', en: 'The suffix is fixed word by word, so you cannot apply it freely. Some verbs even have two nouns with different meanings: apertura is the act of opening (an inauguration), abertura is a physical gap. When in doubt, check a dictionary.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«El ___ de los plazos es obligatorio para la empresa.» (cumplir)', options: ['cumplición', 'cumplimiento', 'cumplido'], answer: 1, why: 'Cumplir → el cumplimiento (-miento). «El cumplido» es otra palabra: un elogio.', en: 'Cumplir gives el cumplimiento; un cumplido is a compliment.' },
            { prompt: 'La obra dejó ___ en la valla y por ahí entraba la lluvia.', options: ['una abertura', 'un abrimiento', 'una apertura'], answer: 0, why: 'Un hueco físico es una abertura; la apertura es el acto de abrir o inaugurar.', en: 'A physical gap is una abertura; apertura is the act of opening.' },
          ] },
        ] },
        { title: 'Sustantivos que opinan · Nouns that carry a judgement', mascot: '/brand/mascot/speaking.webp', coach: '¿Informas o valoras? Reporting or judging?', blocks: [
          { kind: 'concept', tone: 'violet', label: 'NOMINALIZACIÓN EVALUATIVA', question: '¿El sustantivo solo nombra el hecho o también dice lo que piensas de él?', en: 'Some nouns name a fact neutrally (el gasto, el retraso, la decisión); others name it and judge it at the same time (el despilfarro, una chapuza, un acierto). They are powerful because the opinion is packed into the noun and taken for granted rather than argued. That is why they belong in opinion pieces, editorials and conversation, and why a neutral report avoids them or attributes them to someone.', formula: ['neutro: el gasto, el retraso, la decisión, el error', 'evaluativo: el despilfarro de + N · una chapuza · un acierto · la torpeza de + inf. · el escándalo de + N', '«lo» neutro + adjetivo + de + N (lo grave del asunto)'],
            meaning: 'Un sustantivo evaluativo **nombra y juzga a la vez**: «el despilfarro» es un gasto que tú consideras inútil; «una chapuza», un trabajo mal hecho; «un acierto», una decisión que salió bien; «la torpeza de» + infinitivo, un error por falta de habilidad o de tacto. La opinión queda dentro del nombre y el lector la recibe como un dato. Por eso son el recurso típico de la columna de opinión y el editorial; en un informe neutro se evitan o se atribuyen: «lo que la oposición **calificó de** despilfarro».',
            examples: [
              { es: 'El gasto en publicidad fue de 200.000 euros → [[El despilfarro en publicidad|violet]] indignó a los vecinos.', en: 'Same fact; the second version also passes judgement.' },
              { es: 'Crear una línea nocturna [[fue un acierto|violet]].', en: 'Un acierto: a decision you consider right.' },
              { es: 'Tuvieron [[la torpeza de|violet]] anunciar la subida en plenas vacaciones.', en: 'La torpeza de + infinitive: a clumsy, tactless decision.' },
              { es: '[[Lo grave del asunto|violet]] es que nadie ha dado explicaciones.', en: 'Neuter lo + adjective + de: the aspect of the matter you single out and evaluate.' },
            ],
            note: '«Chapuza» es muy frecuente en España y de registro coloquial; en un texto formal se diría «una ejecución deficiente».' },
          { kind: 'compare', title: 'Informe o tribuna · Report or opinion column', columns: [
            { tone: 'blue', label: 'INFORME (NEUTRO)', sentence: 'Las obras acumulan [[un retraso de siete meses|blue]] y [[un sobrecoste del 40 %|blue]].', idea: 'Datos medibles: retraso, sobrecoste. El lector saca sus conclusiones.', en: 'Measurable facts. Even negative nouns like sobrecoste are neutral here: they state a figure, not a verdict.' },
            { tone: 'violet', label: 'TRIBUNA (OPINIÓN)', sentence: 'Siete meses de retraso y un 40 % más de gasto: [[un despilfarro|violet]] y, en algunos tramos, [[una chapuza|violet]].', idea: 'El autor firma y valora: el juicio va dentro del sustantivo.', en: 'A signed opinion piece: the verdict is packed into the nouns.' },
          ] },
          { kind: 'tip', icon: '🔑', title: '«Lo» + adjetivo · Neuter lo', text: '**Lo** + adjetivo (+ de + N) convierte una cualidad en «la parte de algo que tiene esa cualidad»: **lo positivo de** la medida, **lo llamativo del** informe, **lo más preocupante de** todo. Es neutro: nunca «*el grave del asunto». Con «ser», el verbo concuerda con lo que sigue si es plural: «Lo importante **son** los datos».', en: 'Lo + adjective turns a quality into “the aspect of something that has that quality”. Lo is neuter, never el. With ser, the verb agrees with a plural complement: lo importante son los datos is correct.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué sustantivo es neutro, apto para un informe técnico?', options: ['el despilfarro', 'el gasto', 'la chapuza'], answer: 1, why: '«El gasto» solo nombra el hecho; «despilfarro» y «chapuza» incluyen un juicio negativo.', en: 'El gasto only names the fact; the other two judge it.' },
            { prompt: '«___ de la medida es que llega a los barrios del sur.»', options: ['Lo positivo', 'La positiva', 'El positivo'], answer: 0, why: 'Lo neutro + adjetivo: «la parte positiva de la medida».', en: 'Neuter lo + adjective: the positive side of the measure.' },
          ] },
        ] },
        { title: 'El artículo genérico y la ausencia de artículo · Generic article and no article', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Hablas de todos, de algunos o de una clase? Everyone, some, or a type?', blocks: [
          { kind: 'concept', tone: 'teal', label: 'GENERALIZAR CON ARTÍCULO', question: '¿Hablas de una especie o clase entera, de sus miembros en general o de lo que se espera de cualquiera de ellos?', en: 'Spanish generalises with an article, unlike English (“Patience is a virtue”, “Users value punctuality”). El + singular names the type as a whole; los + plural speaks about its members in general; un + singular describes what any member is or should be, typical of definitions and norms, but it cannot go with predicates about the whole type, such as be invented, become extinct or be abundant. Abstract and mass nouns in general statements also take the article.', formula: ['el + singular → la clase entera (El tranvía se inventó en el siglo XIX.)', 'los + plural → los miembros en general (Los usuarios valoran la puntualidad.)', 'un + singular → lo que es o debe ser cualquiera (Un conductor debe conocer su línea.)', 'la + abstracto o materia en afirmaciones generales (La paciencia es una virtud.)'],
            meaning: 'En español, para generalizar se usa **artículo**, también con sustantivos abstractos: «**La** puntualidad importa», no «*Puntualidad importa». **El** + singular presenta la clase como un todo; **los** + plural habla de sus miembros; **un** + singular describe lo típico o lo exigible a cualquier miembro (definiciones, normas), pero no sirve con predicados que solo se aplican a la clase entera: «**El** tranvía se inventó…», no «*Un tranvía se inventó…»; «**Los** mamuts se extinguieron», no «*Un mamut se extinguió» con sentido genérico.',
            examples: [
              { es: '[[El autobús|teal]] sigue siendo el transporte más usado de la ciudad.', en: 'The bus as a type of transport.' },
              { es: '[[Los usuarios|teal]] valoran la puntualidad por encima de la rapidez.', en: 'Users in general; in English there is no article here.' },
              { es: '[[Un buen informe|teal]] distingue los datos de las opiniones.', en: 'Un: what any good report should do.' },
              { es: '[[La puntualidad|teal]] es lo que más se valora.', en: 'Abstract noun in a general statement: article required.' },
            ] },
          { kind: 'table', title: 'Sin artículo · No article', head: ['Caso', 'Ejemplo', 'Compara'], rows: [
            ['cantidad no precisada (materia o plural), detrás del verbo', 'Compro [[pan|teal]]. · Hay [[estudiantes|teal]] en la parada. · Faltan [[conductores|teal]].', 'Faltan **los** conductores del turno de noche (unos concretos).'],
            ['titulares, listas, carteles', '[[Vecinos|teal]] denuncian retrasos en la línea 7. · Se buscan [[conductores|teal]].', 'En el cuerpo de la noticia: «**Los** vecinos denuncian…».'],
            ['sin / con / de en grupos que clasifican', 'viajar [[sin billete|teal]] · un autobús [[con rampa|teal]] · una casa [[de madera|teal]] · la parada [[de autobús|teal]]', 'la parada **del** autobús que esperamos (uno concreto)'],
            ['sujeto delante del verbo en un texto corrido', '—', 'Nunca sin determinante: «***Usuarios** se quejan» → «**Los** usuarios se quejan» / «Se quejan **usuarios** de varias líneas».'],
          ], note: 'Como sujeto, el plural sin artículo solo funciona detrás del verbo («Llegaron quejas») o en titulares y enumeraciones.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase está bien en un texto normal (no un titular)?', options: ['La paciencia de los vecinos tiene un límite.', 'Una paciencia de los vecinos tiene un límite.', 'Paciencia de los vecinos tiene un límite.'], answer: 0, why: 'Sustantivo abstracto como sujeto: lleva artículo. Además, «de los vecinos» lo determina.', en: 'An abstract noun as subject needs the article.' },
            { prompt: '¿Qué frase genérica es incorrecta?', options: ['Un ordenador personal se popularizó en los años ochenta.', 'El ordenador personal se popularizó en los años ochenta.', 'Los ordenadores personales se popularizaron en los años ochenta.'], answer: 0, why: '«Popularizarse» se dice de la clase entera: con «un» solo se entiende un aparato concreto.', en: 'A kind-level predicate rejects generic un; that sentence can only mean one specific computer.' },
          ] },
        ] },
        { title: 'Riesgos del estilo nominal · Risks of the nominal style', mascot: '/brand/mascot/kneeling.webp', coach: 'Denso, sí; opaco, no. Dense, yes; opaque, no.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase con el problema; tu alumno dice qué falla (relleno, cadena de «de», ambigüedad, agente perdido, sufijo inventado o artículo) antes de ver la corrección.', self: 'Lee cada frase y di qué falla: ¿relleno, cadena de «de», ambigüedad, agente perdido, sufijo inventado o artículo? Después mira la corrección.' } },
          { kind: 'mistakes', title: '¿Qué falla? · What goes wrong?', items: [
            { wrong: 'Se procedió a la realización de una revisión de las tarifas.', right: 'Se revisaron las tarifas.', why: 'Verbo vacío (proceder a, realizar, efectuar, llevar a cabo) + nominalización: muchas palabras y ninguna información. Si el verbo existe, úsalo.' },
            { wrong: 'El análisis de la evolución de la demanda de los usuarios de la línea de la costa.', right: 'Analizamos cómo ha evolucionado la demanda en la línea de la costa.', why: 'Cinco «de» seguidos: el lector pierde el hilo. Recupera un verbo, usa un adjetivo (costera) o divide la frase.' },
            { wrong: 'La evaluación de los técnicos fue negativa.', right: 'La evaluación que hicieron los técnicos fue negativa. / Los técnicos recibieron una evaluación negativa.', why: 'Ambigua: ¿los técnicos evaluaron o fueron evaluados? Con «de» no se sabe; una relativa o un verbo lo aclaran.' },
            { wrong: 'Se produjo un error en la adjudicación del contrato.', right: 'La concejalía adjudicó el contrato sin comparar ofertas.', why: 'La nominalización borra al responsable. Si sabes quién fue y es relevante, dilo.' },
            { wrong: 'La llegación del nuevo autobús eléctrico se retrasó.', right: 'La llegada del nuevo autobús eléctrico se retrasó.', why: 'Sufijo inventado: llegar → la llegada.' },
            { wrong: 'Usuarios valoran puntualidad por encima de todo.', right: 'Los usuarios valoran la puntualidad por encima de todo.', why: 'Fuera de un titular, el sujeto delante del verbo lleva artículo, y la generalización con un abstracto también.' },
          ] },
          { kind: 'tip', icon: '✍', title: 'Cuatro arreglos para las cadenas de «de» · Four fixes for de-chains', text: '1) **Recupera un verbo**: «el análisis de la evolución de…» → «analizamos cómo evoluciona…». 2) **Usa un adjetivo relacional**: «de la ciudad» → **urbano**; «del presupuesto» → **presupuestario**. 3) **Cambia de preposición**: «el debate **sobre** las tarifas», «la ayuda **para** los jubilados». 4) **Usa el posesivo**: «la línea 7 y **su** frecuencia».', en: 'Four ways to break a chain of de: bring back a verb, use a relational adjective (urbano instead of de la ciudad), switch to another preposition (sobre, para, entre), or use a possessive.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Cuál es la mejor versión de «Se llevó a cabo la realización de una encuesta»?', options: ['Se hizo una encuesta.', 'Se llevó a cabo una encuesta realizada.', 'Se realizó la realización de una encuesta.'], answer: 0, why: 'Dos verbos vacíos seguidos; basta uno: «se hizo» o «se realizó una encuesta».', en: 'Two empty verbs in a row; one plain verb is enough.' },
            { prompt: '«La crítica de los vecinos llegó tarde.» ¿Por qué puede ser ambigua?', options: ['Porque falta el artículo.', 'Porque «crítica» es femenino.', 'Porque no sabemos si los vecinos criticaron o fueron criticados.'], answer: 2, why: 'El complemento con «de» puede corresponder al sujeto o al objeto del verbo criticar.', en: 'De can stand for the subject or the object of the underlying verb.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno resume en una sola frase nominal, con un verbo de enlace (provocar, deberse a, traducirse en), un cambio reciente en su ciudad o su trabajo, y después la convierte en una frase de opinión con un sustantivo evaluativo.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Editar el capítulo', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'La revisión del capítulo · Editing the chapter', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Elena; tu alumno es Raúl. Después tu alumno toca cada expresión marcada y explica por qué Elena la prefiere o en qué texto la colocaría.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y explica en qué tipo de texto encaja: informe, tribuna o titular.' } },
          { kind: 'explore', title: 'Lunes por la mañana en el Observatorio', setting: 'Elena Montoya y Raúl Ferrer revisan en pantalla el capítulo sobre la línea 7. El informe sale el jueves; la tribuna de Raúl en el periódico local, el martes.', lines: [
            { who: 'Elena', text: 'Raúl, los datos están, pero tienes frases de seis líneas. En vez de «como subieron el abono y las obras se retrasaron, la gente dejó de usar la línea…», pon: «[[La subida del abono|blue]] y el retraso de las obras explican [[el descenso de viajeros|blue]]».', en: 'Raúl, the data are all there, but some sentences run to six lines. Instead of a chain of clauses, put the causes and the effect into noun phrases.' },
            { who: 'Raúl', text: 'Vale. Pero en el apartado de metodología me pasé al otro extremo: «[[Se procedió a la realización de|orange]] una encuesta».', en: 'OK. But in the methods section I went to the other extreme: “we proceeded to the carrying-out of a survey”.' },
            { who: 'Elena', text: 'Eso es relleno. Con el verbo basta: «[[Encuestamos|orange]] a 1.200 usuarios en marzo».', en: 'That’s padding. The verb is enough: “We surveyed 1,200 users in March.”' },
            { who: 'Raúl', text: '¿Y lo del carril bus? En la tribuna he puesto que la obra es [[una chapuza|violet]] y [[un despilfarro de dinero público|violet]].', en: 'And the bus lane? In my column I wrote that the works are a botch and a waste of public money.' },
            { who: 'Elena', text: 'En la tribuna, adelante: es opinión y la firmas tú. En el informe, no; ahí escribimos «[[un sobrecoste del 40 %|blue]]» y que el lector juzgue.', en: 'In the column, go ahead: it’s opinion and you sign it. In the report, no; there we give the cost overrun and let readers judge.' },
            { who: 'Raúl', text: 'Entendido. ¿Y la línea nocturna? Para mí fue [[un acierto|violet]].', en: 'Understood. And the night line? I think it was a success.' },
            { who: 'Elena', text: 'Para mí también, pero el informe lo demuestra con un dato: «[[La creación de la línea nocturna|blue]] duplicó los viajes de madrugada».', en: 'So do I, but the report proves it with a figure.' },
            { who: 'Raúl', text: 'Otra cosa. En el resumen puse «Usuarios valoran puntualidad». ¿Está mal?', en: 'Another thing. In the summary I wrote “Users value punctuality”. Is that wrong?' },
            { who: 'Elena', text: 'Suena a titular. En el texto, «[[Los usuarios|teal]] valoran [[la puntualidad|teal]] por encima de todo». En un titular sí vale: «[[Vecinos denuncian retrasos|teal]] en la línea 7».', en: 'It reads like a headline. In running text you need the articles; in a headline the bare noun is fine.' },
            { who: 'Raúl', text: '¿Y esta frase? «La revisión de la evaluación del cumplimiento de los plazos de la obra».', en: 'And this one? A chain of four de-phrases about checking deadlines.' },
            { who: 'Elena', text: 'Cuatro «de» seguidos: nadie llega al final. Mejor: «[[Comprobamos si se cumplieron los plazos|orange]] de la obra».', en: 'Four de-phrases in a row: nobody gets to the end. Bring the verbs back.' },
            { who: 'Raúl', text: 'Tienes razón. Aunque [[lo grave del asunto|violet]] sigue siendo que nadie ha explicado el retraso.', en: 'You’re right. Although the serious part is still that nobody has explained the delay.' },
          ], notes: {
            'La subida del abono': '**Nominalización** de «subieron el abono»: el verbo pasa a sustantivo (-da) y el objeto, a complemento con «de». (Abono: monthly travel pass, in Spain.)',
            'el descenso de viajeros': '**Nominalización** del efecto: «viajeros» va sin artículo porque indica una cantidad, no unos viajeros concretos. El verbo «explican» une causas y efecto.',
            'Se procedió a la realización de': '**Verbo vacío + nominalización**: «proceder a la realización de» no añade nada a «realizar». Es el estilo burocrático que conviene evitar.',
            'Encuestamos': '**Vuelta al verbo**, con plural de autor: el equipo del Observatorio es el agente y no hay motivo para esconderlo.',
            'una chapuza': '**Evaluativo**, coloquial y muy frecuente en España: trabajo mal hecho. Válido en una columna firmada, no en un informe.',
            'un despilfarro de dinero público': '**Evaluativo**: el gasto juzgado como inútil. La opinión va dentro del sustantivo.',
            'un sobrecoste del 40 %': '**Nominalización neutra**: un dato negativo, pero medible. No dice «mal», dice «cuánto».',
            'un acierto': '**Evaluativo positivo**: una decisión que salió bien. En el informe se sustituye por el dato que lo demuestra.',
            'La creación de la línea nocturna': '**Nominalización** como sujeto: el hecho (crear la línea) hace de causa del resultado.',
            'Los usuarios': '**Artículo genérico** con plural: los usuarios en general. En un texto corrido, el sujeto delante del verbo no va sin determinante.',
            'la puntualidad': '**Abstracto en una afirmación general**: lleva artículo, a diferencia del inglés («punctuality»).',
            'Vecinos denuncian retrasos': '**Titular**: el sustantivo sin artículo es típico de los titulares y de las listas; en el cuerpo de la noticia sería «Los vecinos…».',
            'Comprobamos si se cumplieron los plazos': '**Vuelta al verbo** para romper una cadena de cuatro «de»: dos verbos conjugados sustituyen a tres nominalizaciones.',
            'lo grave del asunto': '**Lo + adjetivo + de**: destaca y valora un aspecto del tema. «Lo» es neutro; nunca «el grave».',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué Elena no quiere «chapuza» en el informe?', options: ['Porque es una palabra incorrecta.', 'Porque el informe debe dar datos y dejar que el lector juzgue.', 'Porque la obra ya está terminada.'], answer: 1, why: 'Elena: «En el informe, no; ahí escribimos “un sobrecoste del 40 %” y que el lector juzgue».', en: 'Why does Elena keep chapuza out of the report?' },
            { prompt: '¿Cómo demuestra el informe que la línea nocturna funciona?', options: ['Con un dato: se duplicaron los viajes de madrugada.', 'Con la palabra «acierto».', 'Con la opinión de Raúl.'], answer: 0, why: '«La creación de la línea nocturna duplicó los viajes de madrugada»: el dato sustituye a la valoración.', en: 'How does the report show that the night line works?' },
            { prompt: '¿Cuándo acepta Elena «Vecinos denuncian…» sin artículo?', options: ['En un titular.', 'En el resumen del informe.', 'Nunca.'], answer: 0, why: 'El sujeto sin artículo es propio de los titulares; en el texto corrido hace falta «los».', en: 'When does Elena accept a bare noun as subject?' },
          ] },
        ] },
        { title: 'Mensajes antes de enviar · Messages before sending', mascot: '/brand/mascot/seated.webp', coach: 'Mismo informe, decisiones finas. Same report, fine decisions.', blocks: [
          { kind: 'chat-fill', title: 'Raúl y Elena, por chat · Raúl and Elena, on chat', lines: [
            { who: 'Raúl', text: 'Para la introducción: «___ de la línea 7 se debe a varias causas».', options: ['El perdimiento de viajeros', 'La pérdida de viajeros', 'Que perdió viajeros'], answer: 1, why: 'Hace falta un grupo nominal como sujeto: perder → la pérdida. «El perdimiento» no se usa en este sentido.' },
            { who: 'Elena', text: 'Bien. Y en conclusiones no pongas «es un escándalo»: escribe «___ de las obras supera en un 40 % lo previsto».', options: ['La chapuza', 'El despilfarro', 'El coste'], answer: 2, why: 'En las conclusiones del informe, un sustantivo neutro y medible: el coste. Los otros dos opinan.' },
            { who: 'Raúl', text: 'Hecho. ¿Y en la tribuna? Quiero decir que anunciar la subida en agosto fue poco hábil.' },
            { who: 'Elena', text: 'Ahí puedes: «Tuvieron ___ anunciar la subida en pleno agosto».', options: ['lo torpe de', 'la torpeza que', 'la torpeza de'], answer: 2, why: '«La torpeza de» + infinitivo nombra y juzga la decisión. «Lo torpe de» iría seguido de un nombre: «lo torpe de la decisión».' },
            { who: 'Raúl', text: 'Y para cerrar: «Al final, ___ es la confianza de los usuarios».', options: ['lo importante', 'importante', 'el importante'], answer: 0, why: 'Lo + adjetivo, neutro: «la parte importante». «El importante» se referiría a una persona o cosa masculina.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: tu alumno explica qué palabras del capítulo cambiarían si el texto fuera un titular, un informe o una columna de opinión.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Condensar, valorar, generalizar. Condense, judge, generalise.',
      steps: [
        { title: 'El sustantivo exacto · The right noun', blocks: [
          { kind: 'choice', items: [
            { prompt: '«___ de las tarifas se aprobó en diciembre.» (subir)', options: ['El subimiento', 'La subición', 'La subida'], answer: 2, why: 'Subir → la subida (-da). Los otros sufijos no existen con este verbo.', en: 'The fare rise was approved in December.' },
            { prompt: '«Los vecinos se quejan de ___ de los andenes.» (limpio)', options: ['la limpieza', 'el limpiamiento', 'la limpiedad'], answer: 0, why: 'Limpio / limpiar → la limpieza (-eza): la cualidad y también la acción.', en: 'Residents complain about how clean the platforms are.' },
            { prompt: '«___ de la nueva estación está prevista para mayo.» (abrir, inaugurar)', options: ['La abertura', 'El abrimiento', 'La apertura'], answer: 2, why: 'La acción de abrir o inaugurar es la apertura; la abertura es un hueco.', en: 'The opening of the new station is scheduled for May.' },
            { prompt: '«El informe destaca ___ de la línea nocturna: llega a su hora en el 96 % de los viajes.» (puntual)', options: ['la puntualeza', 'la puntualidad', 'el puntualismo'], answer: 1, why: 'Puntual → la puntualidad (-idad), sustantivo de cualidad.', en: 'The report highlights how punctual the night line is.' },
            { prompt: '«___ del billete sencillo ha sido de veinte céntimos.» (encarecer)', options: ['La encareción', 'La encarecida', 'El encarecimiento'], answer: 2, why: 'Encarecer → el encarecimiento (-miento). «Encarecida» es participio o adjetivo, no el sustantivo de la acción.', en: 'The single ticket has gone up by twenty cents.' },
          ] },
        ] },
        { title: '¿Informe o tribuna? · Report or column?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: '¿Nombra o juzga? · Does it name or judge?', categories: [
            { id: 'neutro', label: 'Neutro: sirve para el informe', tone: 'blue' },
            { id: 'eval', label: 'Evaluativo: es opinión (tribuna)', tone: 'violet' },
          ], items: [
            { text: 'el sobrecoste de las obras', answer: 'neutro', why: 'Es un dato negativo, pero medible: no juzga, cuantifica.' },
            { text: 'el despilfarro en la campaña publicitaria', answer: 'eval', why: 'Despilfarro = gasto que el autor considera inútil.' },
            { text: 'la torpeza de cerrar la avenida en Navidad', answer: 'eval', why: 'Califica la decisión de poco hábil.' },
            { text: 'la supresión de la línea 12', answer: 'neutro', why: 'Nombra el hecho (suprimir la línea) sin valorarlo.' },
            { text: 'el escándalo de las facturas duplicadas', answer: 'eval', why: '«Escándalo» presenta el hecho como indignante.' },
            { text: 'la reducción de la frecuencia nocturna', answer: 'neutro', why: 'Acción descrita sin juicio: -ción de reducir.' },
          ] },
        ] },
        { title: 'Antes de publicar · Before publishing', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Conductores de la línea 7 piden más tiempo en las paradas finales.', ok: false, options: ['Los conductores de la línea 7 piden más tiempo en las paradas finales.', 'Unos conductores de la línea 7 piden el más tiempo en las paradas finales.', 'Conductores de la línea 7 piden más el tiempo en las paradas finales.'], answer: 0, why: 'En el cuerpo de un texto, el sujeto delante del verbo necesita determinante; sin él solo funcionaría como titular.' },
            { sentence: 'Se efectuó la sustitución de las marquesinas en el mes de abril.', ok: false, options: ['Se efectuó la sustitución de marquesinas del mes de abril.', 'Las marquesinas se sustituyeron en abril.', 'Se procedió a efectuar la sustitución de las marquesinas en abril.'], answer: 1, why: 'Verbo vacío (efectuar) + nominalización: el verbo sustituir lo dice con menos palabras. «En el mes de abril» también es relleno.' },
            { sentence: 'Un autobús eléctrico contamina menos que uno diésel.', ok: true, why: 'Correcta: «un» genérico describe lo que es propio de cualquier autobús eléctrico.' },
            { sentence: 'Un autobús de dos pisos desapareció de la ciudad en los años noventa.', ok: false, options: ['El autobús de dos pisos desapareció de la ciudad en los años noventa.', 'Un autobús de los dos pisos desapareció de la ciudad en los años noventa.', 'Autobús de dos pisos desapareció de la ciudad en los años noventa.'], answer: 0, why: '«Desaparecer de la ciudad» se dice de la clase entera: «el» genérico (o «los autobuses de dos pisos»). Con «un» se entiende un solo vehículo.' },
            { sentence: 'Lo preocupante del informe son las quejas por accesibilidad.', ok: true, why: 'Correcta: lo + adjetivo + de; con «ser», el verbo concuerda con el atributo plural («son las quejas»).' },
          ] },
        ] },
        { title: 'Titular y cuerpo · Headline and body', blocks: [
          { kind: 'chat-fill', title: 'Raúl prepara la nota de prensa · Raúl drafts the press note', lines: [
            { who: 'Raúl', text: 'Titular: «___ denuncian esperas de cuarenta minutos en la línea 7».', options: ['Unos usuarios', 'Algún usuario', 'Usuarios'], answer: 2, why: 'En un titular, el plural sin artículo es lo normal y presenta el hecho como general; «unos usuarios» suena a anécdota.' },
            { who: 'Elena', text: 'Bien. Primera línea del cuerpo: «En la parada de la avenida ___ que llevan media hora esperando».', options: ['hay los viajeros', 'están viajeros', 'hay viajeros'], answer: 2, why: '«Hay» presenta algo nuevo y normalmente no admite el artículo definido: hay + plural sin artículo.' },
            { who: 'Raúl', text: '¿Y la conclusión? «Para el Observatorio, ___ no es negociable».', options: ['una accesibilidad', 'la accesibilidad', 'accesibilidad'], answer: 1, why: 'Abstracto en una afirmación general, como sujeto: lleva artículo.' },
            { who: 'Elena', text: 'Añade que uno de cada diez viajeros va ___ porque la máquina no funciona.', options: ['sin un billete', 'sin el billete', 'sin billete'], answer: 2, why: '«Sin» + sustantivo sin artículo para la clase o la situación general (viajar sin billete); «sin el billete» haría pensar en uno concreto olvidado.' },
            { who: 'Raúl', text: 'Y que los autobuses nuevos son ___, pensados para sillas de ruedas.', options: ['de piso bajo', 'de un piso bajo', 'del piso bajo'], answer: 0, why: '«De» + sustantivo sin artículo clasifica: autobuses de piso bajo (un tipo de autobús).' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['El', 'cierre', 'del', 'puente', 'obligó', 'a', 'desviar', 'tres', 'líneas.'], accept: ['El cierre del puente obligó a desviar tres líneas.'], en: 'Closing the bridge forced three lines to be rerouted: a nominal cause linked by a verb.' },
            { tiles: ['Lo', 'llamativo', 'del', 'estudio', 'es', 'la', 'ausencia', 'de', 'quejas.'], accept: ['Lo llamativo del estudio es la ausencia de quejas.'], en: 'What stands out in the study is the absence of complaints.' },
            { tiles: ['Un', 'buen', 'servicio', 'público', 'informa', 'de', 'sus', 'retrasos.'], accept: ['Un buen servicio público informa de sus retrasos.'], en: 'A good public service tells people about its delays: generic un for what any member should do.' },
          ] },
        ] },
        { title: 'En las dos direcciones · Both directions', blocks: [
          { kind: 'rewrite', title: 'Del verbo al nombre y del nombre al verbo · From verb to noun and back', items: [
            { prompt: 'Como las obras se retrasaron, los comercios de la avenida perdieron clientes.', instruction: 'Para el informe: empieza por «El retraso de las obras…» y usa «provocó». (Nominalise the cause.)', accept: ['El retraso de las obras provocó una pérdida de clientes en los comercios de la avenida.', 'El retraso de las obras provocó la pérdida de clientes de los comercios de la avenida.', 'El retraso de las obras provocó una pérdida de clientes de los comercios de la avenida.', 'El retraso de las obras provocó la pérdida de clientes en los comercios de la avenida.', 'El retraso de las obras provocó que los comercios de la avenida perdieran clientes.', 'El retraso de las obras provocó que los comercios de la avenida perdiesen clientes.'] },
            { prompt: 'El ayuntamiento amplió el horario de la línea nocturna y por eso aumentaron los viajes de madrugada.', instruction: 'Empieza por «La ampliación…» y une causa y efecto con un verbo. (Start with La ampliación.)', accept: ['La ampliación del horario de la línea nocturna provocó un aumento de los viajes de madrugada.', 'La ampliación del horario de la línea nocturna provocó un aumento de viajes de madrugada.', 'La ampliación del horario de la línea nocturna aumentó los viajes de madrugada.', 'La ampliación del horario de la línea nocturna hizo aumentar los viajes de madrugada.', 'La ampliación del horario de la línea nocturna se tradujo en un aumento de los viajes de madrugada.', 'La ampliación del horario de la línea nocturna dio lugar a un aumento de los viajes de madrugada.', 'La ampliación del horario de la línea nocturna causó un aumento de los viajes de madrugada.'] },
            { prompt: 'Se procedió a la instalación de nuevas pantallas informativas por parte de la empresa concesionaria.', instruction: 'Recupera el verbo y pon al agente como sujeto: «La empresa concesionaria…». (Back to a verb, agent as subject.)', accept: ['La empresa concesionaria instaló nuevas pantallas informativas.', 'La empresa concesionaria ha instalado nuevas pantallas informativas.', 'La empresa concesionaria instaló pantallas informativas nuevas.'] },
            { prompt: 'Tras la comprobación del incumplimiento de los plazos, se produjo la rescisión del contrato.', instruction: 'Para la web de los vecinos, con verbos: empieza por «Como se comprobó que no…» y termina con «se rescindió el contrato». (Unpack the nouns into verbs.)', accept: ['Como se comprobó que no se habían cumplido los plazos, se rescindió el contrato.', 'Como se comprobó que no se cumplieron los plazos, se rescindió el contrato.', 'Como se comprobó que no se respetaron los plazos, se rescindió el contrato.', 'Como se comprobó que no se habían respetado los plazos, se rescindió el contrato.', 'Como se comprobó que no se cumplían los plazos, se rescindió el contrato.'] },
            { prompt: 'El ayuntamiento gastó 200.000 euros en una campaña que casi nadie vio.', instruction: 'Para la tribuna: valóralo con «despilfarro». Empieza por «La campaña…». (Judge it with an evaluative noun.)', accept: ['La campaña que casi nadie vio fue un despilfarro de 200.000 euros.', 'La campaña que casi nadie vio fue un despilfarro.', 'La campaña que casi nadie vio fue un despilfarro de dinero público.', 'La campaña, que casi nadie vio, fue un despilfarro de 200.000 euros.', 'La campaña que casi nadie vio supuso un despilfarro de 200.000 euros.'] },
          ] },
          { kind: 'teacher', text: 'Si sobra tiempo: tu alumno toma un párrafo de un texto oficial (de su trabajo, de una web pública) y marca las nominalizaciones: cuáles condensan bien, cuáles son relleno y dónde hay cadenas de «de».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'La tribuna de los martes', coach: 'Primero la idea general, luego los detalles. First the gist, then the details.',
      steps: [
        { title: 'Raúl en la radio · Raúl on the radio', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno anota dónde Raúl da datos y dónde opina, y qué sustantivos usa para opinar. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles. Anota dónde Raúl da datos y dónde opina, y con qué sustantivos opina.' } },
          { kind: 'listen', title: 'La tribuna de los martes', channel: 'RADIO LOCAL DE VALENCIA · OPINIÓN · RAÚL FERRER', src: '/audio/grammar-live/488.mp3',
            before: 'Raúl lee su columna de opinión en una radio local. ¿Crees que separará los datos de su opinión? ¿Qué palabras usará para criticar? (Raúl reads his opinion column on local radio. Will he separate facts from opinion? Which words will he use to criticise?)',
            gist: { prompt: '¿Qué hace Raúl en su tribuna?', options: ['Anuncia que el carril bus ya está terminado.', 'Explica cómo comprar el abono por internet.', 'Presenta los datos del informe y después da su opinión sobre la gestión de la línea 7.'], answer: 2, why: 'Raúl dice «Hasta aquí, los hechos. Ahora, la opinión»: primero datos, después valoración.', en: 'What does Raúl do in his column?' },
            details: [
              { prompt: 'Según el informe, ¿qué explica el descenso de viajeros?', options: ['La subida del abono y el retraso de las obras.', 'La falta de conductores.', 'La creación de la línea nocturna.'], answer: 0, why: '«La subida del abono en enero y el retraso de las obras del carril bus explican el descenso de viajeros».', en: 'According to the report, what explains the fall in passengers?' },
              { prompt: 'Para Raúl, ¿qué es lo grave del asunto?', options: ['La falta de explicaciones.', 'El retraso en sí.', 'El precio de los conos.'], answer: 0, why: '«Lo grave del asunto no es el retraso, que en una obra puede pasar; es la falta de explicaciones».', en: 'What does Raúl see as the serious part?' },
              { prompt: '¿Qué califica Raúl de torpeza?', options: ['Publicar el informe en octubre.', 'Anunciar la subida del abono el mismo mes en que cortaban la avenida.', 'Crear la línea nocturna.'], answer: 1, why: '«Tuvieron la torpeza de anunciar la subida del abono el mismo mes en que cortaban la avenida».', en: 'What does Raúl call clumsy?' },
              { prompt: '¿Qué valora positivamente?', options: ['El sobrecoste.', 'La línea nocturna.', 'Las vallas de la obra.'], answer: 1, why: '«La línea nocturna ha sido un acierto».', en: 'What does he praise?' },
            ],
            transcript: 'Buenos días. Soy Raúl Ferrer, del Observatorio Ciudadano de Movilidad, y esta es mi tribuna de los martes. Hoy les hablo de la línea 7. Los datos de nuestro informe son claros: [[la subida del abono|blue]] en enero y el retraso de las obras del carril bus explican [[el descenso de viajeros|blue]], casi un quince por ciento en un año. Hasta aquí, los hechos. Ahora, la opinión. [[Lo grave del asunto|violet]] no es el retraso, que en una obra puede pasar; es la falta de explicaciones. El carril bus iba a estar listo en marzo, y en octubre seguimos con vallas, conos y un sobrecoste del cuarenta por ciento. Llamemos a las cosas por su nombre: es [[un despilfarro de dinero público|violet]] y, en algunos tramos, una auténtica chapuza. Además, tuvieron [[la torpeza de|violet]] anunciar la subida del abono el mismo mes en que cortaban la avenida. Pero no todo es negativo. La línea nocturna ha sido [[un acierto|violet]]: quien trabaja de noche por fin puede volver a casa sin coche. Y es que [[el usuario|teal]] no pide milagros. Pide puntualidad, información y respeto. [[La paciencia|teal]] es una virtud, sí, pero también tiene un límite. Hasta el martes que viene.',
            reply: { teacher: 'Tú eres la portavoz del ayuntamiento y respondes a Raúl en la radio. Tu alumno, como Raúl, defiende su tribuna: separa un dato («el sobrecoste del 40 %») de una valoración («un despilfarro») y explica por qué usa cada uno.', self: 'Responde a Raúl en voz alta como si llamaras a la radio: ¿estás de acuerdo? Usa al menos un dato nominal («el retraso de…», «la falta de…») y una valoración («un acierto», «lo grave de…»).' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Datos y valoraciones', coach: '¿Informas o valoras? Report or judge?',
      steps: [
        { title: 'Del informe a la sobremesa · From the report to the dinner table', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y las de seguimiento. Si tu alumno encadena «de» o usa un verbo vacío, tú repites su frase con un verbo y siguen; si generaliza sin artículo, tú repites la frase con el artículo.', self: 'Lee la situación y responde en voz alta. Antes de hablar, piensa: ¿estoy dando un dato o una opinión? ¿Generalizo con artículo?' } },
          { kind: 'talk', cards: [
            { q: 'Cuenta un problema reciente de un servicio de tu ciudad (transporte, sanidad, limpieza) en dos versiones: una frase nominal de informe y una frase de opinión. · Describe a recent problem in a public service twice: as a report sentence and as an opinion.', followUps: ['¿Qué verbo une la causa y el efecto? (Which linking verb?)', '¿Qué sustantivo cambia entre las dos versiones? (Which noun changes?)', '¿Lo dirías igual en una conversación? (Would you say it the same way in conversation?)'], phrases: ['[[La subida de|blue]]… provocó…', '[[La falta de|blue]]… se tradujo en…', 'Para mí, es [[un despilfarro|violet]]…', '[[Lo grave del asunto|violet]] es que…'], hint: 'Informe: nombres neutros y un verbo de enlace. Opinión: un sustantivo que juzga.', example: 'Informe: «El cierre del centro de salud del barrio obligó a desplazar a tres mil pacientes». Opinión: «Cerrarlo sin alternativa fue un disparate, y lo grave del asunto es que nadie avisó a los vecinos».' },
            { q: '¿Qué valoran las personas que usan un servicio que conoces bien (alumnos, pacientes, clientes)? Generaliza. · What do users of a service you know well value? Generalise.', followUps: ['¿Qué debe hacer un buen profesional de ese sector? (What should a good professional do?)', '¿Qué cosa abstracta importa más: la rapidez, la amabilidad…? (Which quality matters most?)', '¿Has cambiado de opinión con los años? (Have you changed your mind?)'], phrases: ['[[Los pacientes|teal]] valoran…', '[[Un buen profesor|teal]] debe…', '[[La amabilidad|teal]] importa más que…', 'Lo que más se echa de menos es…'], hint: 'Los + plural para los miembros; un + singular para lo exigible; la + abstracto.', example: 'Los alumnos valoran la claridad más que la simpatía. Un buen profesor explica lo mismo de tres maneras distintas, y la paciencia, en este trabajo, es casi más importante que el título.' },
            { q: 'Lee estos titulares y cuéntalos con verbos, como se los contarías a un amigo: «Fuerte subida del alquiler tras la retirada de las ayudas» y «Suspensión temporal del servicio por falta de personal». · Unpack these headlines into everyday sentences.', followUps: ['¿Quién hizo qué? ¿Lo dice el titular? (Who did what?)', '¿Qué información se ha perdido? (What information is lost?)', '¿Qué pregunta harías tú? (What would you ask?)'], phrases: ['O sea, que [[retiraron|orange]] las ayudas y…', 'Han [[suspendido|orange]] el servicio porque…', 'El titular no dice quién…'], hint: 'Al desnominalizar aparecen el sujeto y el tiempo verbal que el titular escondía.', example: 'Pues que han quitado las ayudas al alquiler y los alquileres han subido mucho. Y lo otro: que han suspendido el servicio un tiempo porque no hay personal. Lo que no dice el titular es quién retiró las ayudas ni cuándo vuelve el servicio.' },
            { q: 'Valora una decisión reciente de tu empresa, tu centro de estudios o tu ayuntamiento: ¿un acierto o una torpeza? · Assess a recent decision: a success or a blunder?', followUps: ['¿Qué es lo positivo de la medida? (What is the positive side?)', '¿Y lo más discutible? (And the most debatable?)', '¿Cómo lo dirías en un informe neutro? (How would a neutral report say it?)'], phrases: ['Fue [[un acierto|violet]] + infinitivo…', 'Tuvieron [[la torpeza de|violet]]…', '[[Lo positivo de|violet]] la medida es…', 'En un informe diría «[[la reducción de|blue]]…».'], hint: 'Primero la valoración con un sustantivo; después la versión neutra con un dato.', example: 'Fue un acierto pasar las reuniones a media mañana: lo positivo de la medida es que ya nadie llega tarde. Eso sí, tuvieron la torpeza de anunciarlo un viernes por la tarde. En un informe diría: «El cambio de horario redujo los retrasos en un 30 %».' },
            { q: '¿El estilo nominal ayuda o complica? Piensa en cartas del banco, contratos o avisos oficiales que hayas recibido. · Does nominal style help or hinder? Think of official letters you’ve received.', followUps: ['¿Recuerdas alguna frase incomprensible? (Any baffling sentence?)', '¿Cómo la reescribirías? (How would you rewrite it?)', '¿Pasa lo mismo en tu lengua? (Same in your language?)'], phrases: ['«[[Se procedió a|orange]]…» quiere decir simplemente…', 'Yo diría «[[se revisó|orange]]…»', 'Hay demasiados «de» seguidos…', 'Lo que se pierde es quién…'], hint: 'Densidad sí, opacidad no: verbo vacío, cadenas de «de» y agente perdido son las alarmas.', example: 'Mi banco me escribió: «Se ha procedido a la cancelación de la domiciliación de su recibo». O sea, «hemos cancelado su domiciliación». Lo peor es que no dice quién la canceló ni por qué. En inglés pasa algo parecido, pero en español las cadenas de «de» lo hacen aún más pesado.', next: 'En la clase 189 verás cómo reformular para aclarar: «es decir», «o sea», «mejor dicho».' },
          ], swap: { teacher: 'Al final cambian los papeles: tu alumno es Elena y tú le das tres frases de Raúl (un relleno, una cadena de «de» y una valoración dentro de un informe); tu alumno las corrige y explica cada decisión.', self: 'Ahora eres Elena: escribe tres frases con un problema cada una (relleno, cadena de «de», valoración en un informe) y corrígelas en voz alta explicando por qué.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Resumen y valoración', coach: 'Primero los hechos, después tu opinión. Facts first, then your view.',
      steps: [
        { title: 'Tu texto · Your text', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada párrafo: ¿el resumen es neutro? ¿La opinión usa sustantivos que juzgan? ¿Hay relleno o cadenas de «de»? Después tu alumno lee el texto como si fuera la tribuna de la radio.', self: 'Escribe tu texto y toca «Revisar mi texto». Después revisa cada párrafo: ¿el resumen es neutro? ¿La opinión usa sustantivos que juzgan? ¿Hay relleno o cadenas de «de»?' } },
          { kind: 'write', title: 'Informe y tribuna · Summary and opinion', situation: 'Elena te pide un texto para la web del Observatorio sobre un servicio público de tu ciudad (o sobre la línea 7): un párrafo de resumen neutro y un párrafo de valoración firmado. (Elena asks you for a web text on a public service in your city, or on line 7: one neutral summary paragraph and one signed opinion paragraph.)', task: [
            'Resumen: condensa al menos tres hechos en grupos nominales (la subida de, el descenso de, la falta de…). (At least three nominalisations.)',
            'Incluye una generalización con artículo (los usuarios…, la puntualidad…). (One generic statement with the article.)',
            'Valoración: usa al menos dos sustantivos evaluativos o «lo + adjetivo + de» (un acierto, un despilfarro, lo grave de…). (Two evaluative nouns.)',
            'Evita los verbos vacíos (se procedió a…) y las cadenas de más de tres «de». (No padding, no long de-chains.)',
          ], starters: ['En el último año, …', 'Las causas principales fueron…', '… se tradujo en…', 'Los usuarios valoran…', 'A mi juicio, … ha sido un acierto…', 'Lo grave del asunto es que…'], words: ['la subida de', 'el descenso de', 'la falta de', 'la creación de', 'provocar', 'explicar', 'traducirse en', 'un acierto', 'un despilfarro', 'la torpeza de', 'lo positivo de', 'lo grave de'],
            model: 'Resumen. En el último año, la línea 7 perdió el 15 % de sus viajeros. Las causas principales fueron la subida del abono en enero y el retraso de las obras del carril bus, que acumulan siete meses y un sobrecoste del 40 %. En cambio, la creación de la línea nocturna duplicó los viajes de madrugada. Las encuestas muestran que los usuarios valoran la puntualidad por encima de la rapidez y que la falta de información es su queja más frecuente.\n\nValoración. A mi juicio, la línea nocturna ha sido un acierto, y lo positivo de la medida es que se pensó para quien trabaja de noche. Pero lo grave del asunto es la gestión de las obras: siete meses de retraso sin una sola explicación pública son un despilfarro de tiempo y de dinero. Los vecinos no piden milagros; piden información y obras sin chapuzas.',
            minWords: 130,
            checks: [
              { label: 'Grupos nominales que condensan hechos (la subida de, la creación de…)', pattern: '(?<!\\p{L})(?:la|el|los|las|su)\\s+\\p{L}+(?:ción|sión|miento|ida|ada|aje|ncia|dad|eza|aso|enso)\\s+del?(?!\\p{L})', tip: 'Escribe, por ejemplo: «La subida del abono provocó un descenso de viajeros».' },
              { label: 'Un sustantivo evaluativo (un acierto, un despilfarro, la torpeza de…)', pattern: '(?<!\\p{L})(?:acierto|despilfarro|chapuzas?|torpeza|escándalo|disparate|despropósito|desastre)(?!\\p{L})', tip: 'Escribe, por ejemplo: «La línea nocturna ha sido un acierto».' },
              { label: 'Lo + adjetivo + de (lo grave del asunto, lo positivo de…)', pattern: '(?<!\\p{L})lo\\s+(?:más\\s+)?\\p{L}+\\s+del?(?!\\p{L})', tip: 'Escribe, por ejemplo: «Lo grave del asunto es que nadie lo explicó».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})proced(?:ió|e|en|ieron|erá|erán)\\s+a\\s+(?:la|el|los|las)(?!\\p{L})', why: '«Proceder a» + nominalización suele ser relleno: usa directamente el verbo (se revisaron, se instaló…).' },
              { pattern: '(?<!\\p{L})(?:llev(?:ar|ó|aron|a|an)\\s+a\\s+cabo|efectu(?:ar|ó|aron|a))\\s+(?:la|el|una|un)\\s+\\p{L}+(?:ción|miento)(?!\\p{L})', why: 'Verbo vacío + nominalización: prueba con el verbo correspondiente (llevar a cabo la revisión → revisar).' },
              { pattern: '(?<!\\p{L})del?\\s+(?:(?:la|las|los)\\s+)?\\p{L}+\\s+del?\\s+(?:(?:la|las|los)\\s+)?\\p{L}+\\s+del?\\s+(?:(?:la|las|los)\\s+)?\\p{L}+\\s+del?(?!\\p{L})', why: 'Hay una cadena de cuatro «de» seguidos: recupera un verbo, usa un adjetivo o divide la frase.' },
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
            { tone: 'blue', label: 'NOMINALIZACIÓN', formula: 'verbo → sustantivo · sujeto u objeto → de · adverbio → adjetivo · conector → verbo de enlace', example: 'La subida del abono provocó un descenso de viajeros.', caption: 'densidad para informes', en: 'Turn the clause into a noun phrase and let a linking verb (provocar, explicar, deberse a) carry the relation. The suffix is fixed word by word.' },
            { tone: 'violet', label: 'EVALUACIÓN', formula: 'un acierto · un despilfarro de · la torpeza de + inf. · lo + adj. + de', example: 'Lo grave del asunto es la falta de explicaciones.', caption: 'opinión dentro del nombre', en: 'Evaluative nouns name and judge at the same time: right for opinion pieces, out of place in a neutral report unless attributed.' },
            { tone: 'orange', label: 'VUELTA AL VERBO', formula: 'sin verbos vacíos · máximo tres «de» · agente visible si importa', example: 'Se revisaron las tarifas. · Comprobamos si se cumplieron los plazos.', caption: 'denso, no opaco', en: 'Go back to a verb when the noun adds padding, builds a chain of de or hides who is responsible.' },
            { tone: 'teal', label: 'ARTÍCULO', formula: 'generalizar con artículo · sin artículo: cantidad tras el verbo, titulares, sin / con / de que clasifican', example: 'Los usuarios valoran la puntualidad. · Hay quejas. · Viajar sin billete.', caption: 'el genérico no se omite', en: 'Spanish generalises with the article, even with abstract nouns; bare nouns go after the verb, in headlines and lists, and in classifying phrases.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Antes de nominalizar, tres preguntas: **¿gano claridad o solo palabras?** (fuera los verbos vacíos); **¿se sigue sabiendo quién hizo qué?** (agente y ambigüedad); **¿informo u opino?** (gasto o despilfarro). Y para generalizar, **artículo**: «La paciencia es una virtud».', en: 'Three questions before nominalising: am I gaining clarity or just words? Is it still clear who did what? Am I reporting or judging? And to generalise, use the article.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/portrait.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Informe: «___ entre los dos departamentos provocó retrasos en los pagos.»', options: ['La falta de coordinación', 'La falta de la coordinación de', 'Que no se coordinaron'], answer: 0, why: 'La negación se nominaliza con «la falta de» + sustantivo sin artículo. «Que no se coordinaron entre…» no encaja como sujeto; haría falta «el hecho de que no se coordinaran».', en: 'Report: “A lack of coordination between the two departments delayed payments.”' },
            { prompt: '¿Qué frase es la más adecuada para un informe técnico?', options: ['La reforma fue una chapuza.', 'La reforma costó un 25 % más de lo previsto.', 'La reforma fue un escándalo.'], answer: 1, why: 'Un dato medible, sin valoración: el lector juzga.', en: 'A measurable fact, with no verdict, suits a technical report.' },
            { prompt: '«___ es la base de cualquier servicio público.»', options: ['La confianza', 'Confianza', 'Una confianza'], answer: 0, why: 'Abstracto en una afirmación general y como sujeto: lleva artículo.', en: '“Trust is the basis of any public service.”' },
            { prompt: '«En la estación ___ que esperan el primer tren.»', options: ['hay los turistas', 'hay turistas', 'están turistas'], answer: 1, why: '«Hay» + plural sin artículo para una cantidad no precisada.', en: '“There are tourists at the station waiting for the first train.”' },
            { prompt: 'Mejor versión de «Se llevó a cabo la ampliación de la acera»:', options: ['Se procedió a ampliar la ampliación de la acera.', 'Se amplió la acera.', 'Se llevó a cabo una ampliación ampliada de la acera.'], answer: 1, why: 'Verbo vacío + nominalización: basta el verbo ampliar.', en: 'Empty verb plus nominalisation: the plain verb is enough.' },
          ] },
        ] },
        { title: 'Otra situación · A new situation', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'lead', text: 'Medellín, Colombia. **Mónica Restrepo** coordina el informe anual de la biblioteca de una universidad y recibe tres frases de un practicante que hay que reescribir.', en: 'Medellín, Colombia. Mónica coordinates a university library’s annual report and gets three sentences from an intern that need rewriting.' },
          { kind: 'rewrite', title: 'El informe de la biblioteca · The library report', items: [
            { prompt: 'Como la biblioteca abrió los sábados, aumentaron los préstamos.', instruction: 'Versión de informe: empieza por «La apertura…». (Nominalise the cause.)', accept: ['La apertura de la biblioteca los sábados provocó un aumento de los préstamos.', 'La apertura de la biblioteca los sábados provocó un aumento de préstamos.', 'La apertura de la biblioteca los sábados aumentó los préstamos.', 'La apertura de la biblioteca los sábados hizo aumentar los préstamos.', 'La apertura de la biblioteca los sábados se tradujo en un aumento de los préstamos.', 'La apertura de la biblioteca los sábados se tradujo en un aumento de préstamos.', 'La apertura de la biblioteca los sábados dio lugar a un aumento de los préstamos.'] },
            { prompt: 'Se procedió a la renovación de las sillas de la sala de lectura.', instruction: 'Quita el relleno: se + verbo. (Remove the padding.)', accept: ['Se renovaron las sillas de la sala de lectura.', 'Las sillas de la sala de lectura se renovaron.'] },
            { prompt: 'Estudiantes prefieren silencio en la sala de lectura.', instruction: 'No es un titular: pon los artículos que faltan. (Add the articles for running text.)', accept: ['Los estudiantes prefieren el silencio en la sala de lectura.', 'Los estudiantes prefieren silencio en la sala de lectura.'] },
          ] },
        ] },
        { title: 'Ampliación: lo + adjetivo + que y los epítetos · Extension: lo… que and epithets', mascot: '/brand/mascot/studying.webp', coach: 'Opcional: más evaluación dentro del grupo nominal. Optional: more judgement inside the noun phrase.', blocks: [
          { kind: 'lead', text: 'Dos recursos evaluativos más, frecuentes en la lengua oral y en la columna de opinión. **Lo + adjetivo + que** pondera la intensidad, y el adjetivo **concuerda con el nombre** aunque «lo» sea neutro: «No te imaginas **lo caros que** están los billetes». Y el **epíteto** con «de»: **el / la + adjetivo o nombre + de + N** valora a una persona o cosa ya conocida: «**el bueno de** Raúl», «**la pobre de** Elena», «**un desastre de** obra», «**una maravilla de** parque».', en: 'Two more evaluative devices, common in speech and opinion columns. Lo + adjective + que stresses intensity, and the adjective agrees with the noun even though lo is neuter. The epithet pattern (el bueno de Raúl, un desastre de obra) judges someone or something already known.' },
          { kind: 'choice', title: 'Elige la forma · Choose the form', items: [
            { prompt: '«No te puedes imaginar ___ están los alquileres este año.»', options: ['lo caros que', 'los caros que', 'lo caro que'], answer: 0, why: '«Lo» es neutro, pero el adjetivo concuerda con «los alquileres»: lo caros que.', en: 'Lo stays neuter; the adjective agrees with the noun.' },
            { prompt: '«El bueno de Raúl se quedó hasta las diez revisando el informe.» ¿Qué expresa «el bueno de»?', options: ['Que Raúl es el mejor analista del equipo.', 'Que hay dos Raúl y este es el bueno.', 'Afecto o simpatía del hablante hacia Raúl.'], answer: 2, why: 'El epíteto «el bueno de» + nombre propio no compara ni selecciona: expresa una actitud afectuosa hacia alguien ya conocido.', en: 'El bueno de + name does not compare or pick anyone out; it shows the speaker’s warmth towards someone already known.' },
            { prompt: '¿Qué frase es un epíteto evaluativo?', options: ['Un desastre de reforma.', 'Un billete de ida y vuelta.', 'Una casa de madera.'], answer: 0, why: '«Un desastre de reforma» = una reforma desastrosa. Los otros dos «de» clasifican, no valoran.', en: 'Un desastre de reforma judges; the others just classify.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos fuertes o si sobra tiempo. Extra: tu alumno cuenta una mala experiencia reciente (una mudanza, una obra, un viaje) con dos epítetos («un desastre de…», «el pobre de…») y un «lo + adjetivo + que».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 189 · Conectores de reformulación: es decir, a saber, mejor dicho', text: 'Hoy has condensado información en grupos nominales y has visto que un texto denso a veces necesita una aclaración. El paso natural: **reformular** sin perder el hilo, con «**es decir**», «**a saber**» o «**mejor dicho**»: «Se produjo un sobrecoste, **es decir**, la obra costó un 40 % más».', en: 'Today you packed information into noun phrases and saw that a dense text sometimes needs unpacking. The natural next step is reformulating without losing the thread, with es decir, a saber or mejor dicho.', href: '/gramatica/conectores-de-reformulacion-es-decir-a', label: 'Ir a la clase 189' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Por qué Elena aceptó “Vecinos denuncian retrasos” como titular pero no “Usuarios valoran puntualidad” en el resumen?». Respuesta esperada: el titular admite sustantivos sin artículo; en un texto corrido, el sujeto y la generalización con un abstracto llevan artículo.' },
        ] },
      ],
    },
  ],
};
