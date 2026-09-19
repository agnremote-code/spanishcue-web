export type Pair={es:string;en:string};
export type GrammarTable={id:string;title:string;cue:string;formula:string;rows:[string,string,string,string,string][]};
export type Unit={
  id:string;number:string;level:string;title:string;english:string;color:string;world:string;image:string;
  keyQuestion:string;meaning:string;formula:string;formation:string[];
  tables:string[];uses:{title:string;explanation:string;example:string}[];
  contrasts:{left:string;right:string;why:string}[];
  errors:{wrong:string;right:string;why:string}[];
  exercises:{prompt:string;answer:string;why:string}[];
  speaking:{question:string;starter:string}[];
};

const rows=(...items:[string,string,string,string,string][])=>items;
export const tables:GrammarTable[]=[
  {id:"presente",title:"Presente de subjuntivo",cue:"Acción simultánea o posterior",formula:"YO del presente → quitá -o → vocal opuesta",rows:rows(
    ["yo","hable","coma","viva","sea"],["tú","hables","comas","vivas","seas"],["vos","hables / hablés","comas / comás","vivas / vivás","seas"],["él / ella / usted","hable","coma","viva","sea"],["nosotros/as","hablemos","comamos","vivamos","seamos"],["vosotros/as","habléis","comáis","viváis","seáis"],["ellos / ustedes","hablen","coman","vivan","sean"]
  )},
  {id:"perfecto",title:"Pretérito perfecto de subjuntivo",cue:"Acción anterior conectada con ahora",formula:"HAYA + PARTICIPIO",rows:rows(
    ["yo","haya hablado","haya comido","haya vivido","haya sido"],["tú / vos","hayas hablado","hayas comido","hayas vivido","hayas sido"],["él / ella / usted","haya hablado","haya comido","haya vivido","haya sido"],["nosotros/as","hayamos hablado","hayamos comido","hayamos vivido","hayamos sido"],["vosotros/as","hayáis hablado","hayáis comido","hayáis vivido","hayáis sido"],["ellos / ustedes","hayan hablado","hayan comido","hayan vivido","hayan sido"]
  )},
  {id:"imperfecto-ra",title:"Imperfecto de subjuntivo · -RA",cue:"Hipótesis, deseo distante o marco pasado",formula:"ELLOS del indefinido → quitá -RON → -RA",rows:rows(
    ["yo","hablara","comiera","viviera","fuera"],["tú / vos","hablaras","comieras","vivieras","fueras"],["él / ella / usted","hablara","comiera","viviera","fuera"],["nosotros/as","habláramos","comiéramos","viviéramos","fuéramos"],["vosotros/as","hablarais","comierais","vivierais","fuerais"],["ellos / ustedes","hablaran","comieran","vivieran","fueran"]
  )},
  {id:"imperfecto-se",title:"Imperfecto de subjuntivo · -SE",cue:"Alternativa válida, más literaria o formal en muchas regiones",formula:"ELLOS del indefinido → quitá -RON → -SE",rows:rows(
    ["yo","hablase","comiese","viviese","fuese"],["tú / vos","hablases","comieses","vivieses","fueses"],["él / ella / usted","hablase","comiese","viviese","fuese"],["nosotros/as","hablásemos","comiésemos","viviésemos","fuésemos"],["vosotros/as","hablaseis","comieseis","vivieseis","fueseis"],["ellos / ustedes","hablasen","comiesen","viviesen","fuesen"]
  )},
  {id:"pluscuamperfecto",title:"Pluscuamperfecto de subjuntivo",cue:"Pasado anterior, irreal o lamentado",formula:"HUBIERA / HUBIESE + PARTICIPIO",rows:rows(
    ["yo","hubiera hablado","hubiera comido","hubiera vivido","hubiera sido"],["tú / vos","hubieras hablado","hubieras comido","hubieras vivido","hubieras sido"],["él / ella / usted","hubiera hablado","hubiera comido","hubiera vivido","hubiera sido"],["nosotros/as","hubiéramos hablado","hubiéramos comido","hubiéramos vivido","hubiéramos sido"],["vosotros/as","hubierais hablado","hubierais comido","hubierais vivido","hubierais sido"],["ellos / ustedes","hubieran hablado","hubieran comido","hubieran vivido","hubieran sido"]
  )},
  {id:"futuro",title:"Futuro de subjuntivo",cue:"Forma histórica, jurídica o proverbial",formula:"ELLOS del indefinido → quitá -RON → -RE",rows:rows(
    ["yo","hablare","comiere","viviere","fuere"],["tú / vos","hablares","comieres","vivieres","fueres"],["él / ella / usted","hablare","comiere","viviere","fuere"],["nosotros/as","habláremos","comiéremos","viviéremos","fuéremos"],["vosotros/as","hablareis","comiereis","viviereis","fuereis"],["ellos / ustedes","hablaren","comieren","vivieren","fueren"]
  )},
  {id:"futuro-perfecto",title:"Futuro perfecto de subjuntivo",cue:"Anterioridad futura en lenguaje jurídico antiguo",formula:"HUBIERE + PARTICIPIO",rows:rows(
    ["yo","hubiere hablado","hubiere comido","hubiere vivido","hubiere sido"],["tú / vos","hubieres hablado","hubieres comido","hubieres vivido","hubieres sido"],["él / ella / usted","hubiere hablado","hubiere comido","hubiere vivido","hubiere sido"],["nosotros/as","hubiéremos hablado","hubiéremos comido","hubiéremos vivido","hubiéremos sido"],["vosotros/as","hubiereis hablado","hubiereis comido","hubiereis vivido","hubiereis sido"],["ellos / ustedes","hubieren hablado","hubieren comido","hubieren vivido","hubieren sido"]
  )},
];

export const units:Unit[]=[
  {id:"presente",number:"01",level:"A2",title:"La madriguera del presente",english:"Present subjunctive",color:"#9c7cff",world:"La caída de las vocales opuestas",image:"/subjuntivo/alicia-hero.webp",keyQuestion:"¿La acción subordinada ocurre ahora o después del verbo principal?",meaning:"El presente de subjuntivo aparece cuando una reacción, deseo, duda, valoración o finalidad controla una acción simultánea o futura. Normalmente hay dos cláusulas unidas por «que» y dos sujetos diferentes.",formula:"DISPARADOR + QUE + PRESENTE DE SUBJUNTIVO",formation:["Tomá la forma YO del presente de indicativo: tengo, hago, conozco.","Quitá la -o: teng-, hag-, conozc-.","Agregá la vocal opuesta: -AR → e; -ER/-IR → a."],tables:["presente"],uses:[
    {title:"Deseo e influencia",explanation:"Querer, pedir, necesitar, recomendar o prohibir que otra persona haga algo.",example:"Quiero que abras la puerta."},{title:"Emoción y valoración",explanation:"El hecho puede ser real; lo importante es la reacción.",example:"Me sorprende que el reloj hable."},{title:"Duda o negación",explanation:"La situación no se presenta como información afirmada.",example:"No creo que la reina sepa la verdad."},{title:"Finalidad",explanation:"«Para que» introduce el resultado buscado.",example:"Te doy la llave para que entres."}
  ],contrasts:[
    {left:"Creo que tiene la llave.",right:"No creo que tenga la llave.",why:"Afirmación → indicativo; creencia negada → subjuntivo."},{left:"Busco la puerta que lleva al jardín.",right:"Busco una puerta que lleve al jardín.",why:"Puerta identificada → indicativo; puerta no identificada → subjuntivo."}
  ],errors:[
    {wrong:"Quiero que vienes.",right:"Quiero que vengas.",why:"«Quiero que» exige subjuntivo cuando cambia el sujeto."},{wrong:"Quiero que yo vaya.",right:"Quiero ir.",why:"Si el sujeto es el mismo, normalmente usamos infinitivo."},{wrong:"Espero que vendrás.",right:"Espero que vengas.",why:"La acción es futura, pero el disparador exige presente de subjuntivo."}
  ],exercises:[
    {prompt:"Quiero que vos ___ la verdad. (decir)",answer:"digas",why:"YO digo → dig- + -as."},{prompt:"Es importante que nosotros ___ ahora. (salir)",answer:"salgamos",why:"YO salgo → salg- + -amos."},{prompt:"No creo que ella ___ la llave. (tener)",answer:"tenga",why:"YO tengo → teng- + -a."},{prompt:"Te explico la regla para que la ___. (entender)",answer:"entiendas",why:"«Para que» introduce finalidad y usa subjuntivo."}
  ],speaking:[
    {question:"¿Qué querés que cambie este mes?",starter:"Quiero que…"},{question:"¿Qué te sorprende de tu ciudad?",starter:"Me sorprende que…"},{question:"¿Qué no creés que ocurra pronto?",starter:"No creo que…"},{question:"¿Qué consejo querés que siga un amigo?",starter:"Le recomiendo que…"}
  ]},
  {id:"disparadores",number:"02",level:"A2–B1",title:"La merienda de los disparadores",english:"Triggers and clause logic",color:"#ff6fae",world:"La mesa donde cada taza cambia el modo",image:"/subjuntivo/alicia-hero.webp",keyQuestion:"¿El verbo principal afirma la acción o la filtra?",meaning:"No memorices una lista infinita. Agrupá los disparadores por intención: deseo e influencia, emoción, duda o negación, valoración impersonal y finalidad. Después comprobá si hay cambio de sujeto.",formula:"SUJETO 1 + DISPARADOR + QUE + SUJETO 2 + SUBJUNTIVO",formation:["Detectá el disparador y su intención.","Comprobá si aparece «que» y cambia el sujeto.","Elegí el tiempo del subjuntivo según simultaneidad o anterioridad."],tables:["presente","perfecto"],uses:[
    {title:"Deseo",explanation:"querer, esperar, preferir, desear",example:"Prefiero que tomes té."},{title:"Influencia",explanation:"pedir, permitir, aconsejar, prohibir",example:"La reina exige que todos se callen."},{title:"Emoción",explanation:"alegrarse, molestar, sorprender, temer",example:"Me preocupa que el conejo llegue tarde."},{title:"Valoración",explanation:"es importante, es raro, es posible, conviene",example:"Es posible que la puerta esté cerrada."}
  ],contrasts:[
    {left:"Es evidente que miente.",right:"Es posible que mienta.",why:"Certeza presentada como hecho → indicativo; posibilidad → subjuntivo."},{left:"Te recomiendo salir.",right:"Te recomiendo que salgas.",why:"Infinitivo sin nuevo sujeto; «que» + subjuntivo cuando se explicita otro sujeto."}
  ],errors:[
    {wrong:"Es cierto que sea difícil.",right:"Es cierto que es difícil.",why:"Las expresiones afirmativas de certeza normalmente seleccionan indicativo."},{wrong:"Me gusta que aprender español.",right:"Me gusta aprender español / Me gusta que aprendas español.",why:"Infinitivo con el mismo sujeto; subjuntivo con sujeto diferente."}
  ],exercises:[
    {prompt:"Me alegra que ya ___ la puerta. (encontrar)",answer:"hayas encontrado",why:"La acción de encontrar es anterior a la emoción actual."},{prompt:"La reina prohíbe que nosotros ___. (hablar)",answer:"hablemos",why:"Influencia + cambio de sujeto."},{prompt:"Es obvio que el conejo ___ tarde. (estar)",answer:"está",why:"Certeza afirmada: indicativo."},{prompt:"Temo que no ___ tiempo. (haber)",answer:"haya",why:"Emoción/temor + subjuntivo."}
  ],speaking:[
    {question:"¿Qué esperás que pase esta semana?",starter:"Espero que…"},{question:"¿Qué te molesta que haga la gente?",starter:"Me molesta que…"},{question:"¿Qué considerás importante que aprendan los niños?",starter:"Es importante que…"},{question:"¿Qué prohibirías en una merienda absurda?",starter:"Prohibiría que…"}
  ]},
  {id:"tiempo-relativas",number:"03",level:"B1",title:"El jardín del tiempo y lo desconocido",english:"Time and relative clauses",color:"#55d891",world:"El jardín que todavía no existe",image:"/subjuntivo/wonderland-garden.webp",keyQuestion:"¿Hablo de algo habitual/conocido o futuro/desconocido?",meaning:"Después de «cuando», «hasta que», «en cuanto» y expresiones similares, usamos indicativo para hábitos o hechos ya ocurridos, pero subjuntivo para acciones futuras pendientes. En las relativas, el modo cambia según si el antecedente existe y está identificado.",formula:"FUTURO PENDIENTE / ANTECEDENTE DESCONOCIDO → SUBJUNTIVO",formation:["Preguntá si la acción temporal ya ocurrió, es habitual o todavía está pendiente.","En una relativa, preguntá si el objeto/persona existe y está identificado.","No elijas por la palabra «cuando» o «que» sola: elegí por el significado."],tables:["presente"],uses:[
    {title:"Tiempo futuro",explanation:"La acción todavía no se realizó.",example:"Cuando llegues al jardín, llamame."},{title:"Hábito",explanation:"La acción se repite y se afirma como rutina.",example:"Cuando llego al jardín, tomo té."},{title:"Antecedente desconocido",explanation:"Buscamos algo que quizá no existe.",example:"Necesito una llave que abra cualquier puerta."},{title:"Antecedente conocido",explanation:"Hablamos de algo identificado.",example:"Tengo una llave que abre esa puerta."}
  ],contrasts:[
    {left:"Cuando viene, trae flores.",right:"Cuando venga, traerá flores.",why:"Hábito presente → indicativo; evento futuro pendiente → subjuntivo."},{left:"Hay un camino que llega al castillo.",right:"Busco un camino que llegue al castillo.",why:"Existencia afirmada → indicativo; búsqueda sin identificar → subjuntivo."}
  ],errors:[
    {wrong:"Cuando llegaré, te aviso.",right:"Cuando llegue, te aviso.",why:"Después de «cuando» con referencia futura usamos presente de subjuntivo."},{wrong:"Busco el libro que explica la regla.",right:"Busco un libro que explique la regla.",why:"Si no sabemos cuál es ni si existe, la relativa usa subjuntivo."}
  ],exercises:[
    {prompt:"En cuanto ___ la reina, nos vamos. (aparecer)",answer:"aparezca",why:"Acción futura pendiente."},{prompt:"Cada vez que la reina ___, todos se callan. (aparecer)",answer:"aparece",why:"Hábito: indicativo."},{prompt:"Quiero una casa que ___ un jardín enorme. (tener)",answer:"tenga",why:"Antecedente deseado, no identificado."},{prompt:"Conozco una casa que ___ un jardín enorme. (tener)",answer:"tiene",why:"Antecedente conocido y afirmado."}
  ],speaking:[
    {question:"¿Qué vas a hacer cuando termine esta clase?",starter:"Cuando termine…, voy a…"},{question:"¿Qué buscás que sea difícil de encontrar?",starter:"Busco algo que…"},{question:"¿Qué hacés siempre cuando estás cansado?",starter:"Cuando estoy cansado…"},{question:"Describí una ciudad ideal que todavía no existe.",starter:"Quiero una ciudad que…"}
  ]},
  {id:"imperfecto",number:"04",level:"B1–B2",title:"El espejo del imperfecto",english:"Imperfect subjunctive",color:"#f29a4a",world:"La galería de las versiones alternativas",image:"/subjuntivo/wonderland-garden.webp",keyQuestion:"¿La subordinada depende de un pasado, un condicional o una hipótesis distante?",meaning:"El imperfecto de subjuntivo aparece por concordancia con un verbo principal pasado, en hipótesis con «si», en deseos difíciles con «ojalá» y en fórmulas de cortesía. Las formas en -ra y -se son equivalentes en la mayoría de los usos.",formula:"PASADO / CONDICIONAL / HIPÓTESIS + QUE / SI + IMPERFECTO DE SUBJUNTIVO",formation:["Tomá ELLOS del pretérito indefinido: hablaron, comieron, fueron.","Quitá -ron: habla-, comie-, fue-.","Agregá -ra o -se y sus terminaciones; el acento aparece en nosotros."],tables:["imperfecto-ra","imperfecto-se"],uses:[
    {title:"Concordancia en pasado",explanation:"El verbo principal pasado arrastra la subordinada a un marco pasado.",example:"La reina quería que Alicia se fuera."},{title:"Hipótesis",explanation:"Con «si» crea una condición distante o contraria al presente.",example:"Si tuviera la llave, abriría la puerta."},{title:"Ojalá difícil",explanation:"Expresa un deseo poco probable o contrario a la realidad actual.",example:"Ojalá fuera más fácil."},{title:"Cortesía",explanation:"Quisiera, pudiera y debiera suavizan el mensaje.",example:"Quisiera hacer una pregunta."}
  ],contrasts:[
    {left:"Quiero que vengas.",right:"Quería que vinieras.",why:"Presente principal → presente subjuntivo; pasado principal → imperfecto subjuntivo."},{left:"Si tengo tiempo, voy.",right:"Si tuviera tiempo, iría.",why:"Condición real → indicativo; hipótesis distante → imperfecto subjuntivo."}
  ],errors:[
    {wrong:"Si tendría tiempo, iría.",right:"Si tuviera tiempo, iría.",why:"En la condición hipotética con «si» usamos imperfecto de subjuntivo, no condicional."},{wrong:"Quería que vienes.",right:"Quería que vinieras.",why:"El verbo principal está en pasado y exige concordancia."}
  ],exercises:[
    {prompt:"La reina pidió que todos ___. (salir)",answer:"salieran / saliesen",why:"Verbo principal pasado + subjuntivo."},{prompt:"Si yo ___ más, entendería mejor. (saber)",answer:"supiera / supiese",why:"ELLOS supieron → supie- + -ra/-se."},{prompt:"Ojalá no ___ tan tarde. (ser)",answer:"fuera / fuese",why:"Deseo contrario o difícil en el presente."},{prompt:"Quisiera que me ___ la regla. (explicar)",answer:"explicaras / explicases",why:"Petición cortés con subordinada."}
  ],speaking:[
    {question:"¿Qué harías si tuvieras una puerta a otro mundo?",starter:"Si tuviera…, …ría."},{question:"¿Qué querían tus padres que hicieras?",starter:"Querían que yo…"},{question:"¿Qué cambiarías de tu ciudad?",starter:"Ojalá mi ciudad…"},{question:"Pedí algo de manera muy cortés.",starter:"Quisiera que…"}
  ]},
  {id:"perfectos",number:"05",level:"B2",title:"El juicio de los tiempos perfectos",english:"Perfect subjunctive tenses",color:"#ef4f59",world:"El tribunal de lo que ya ocurrió",image:"/subjuntivo/alicia-hero.webp",keyQuestion:"¿La acción subordinada ocurrió antes del punto desde el que reacciono?",meaning:"Los tiempos perfectos combinan HABER en subjuntivo con un participio. El pretérito perfecto mira un pasado conectado con el presente; el pluscuamperfecto mira un pasado anterior desde otro pasado o imagina una alternativa imposible.",formula:"HAYA + PARTICIPIO · HUBIERA/HUBIESE + PARTICIPIO",formation:["Elegí HAYA si el verbo principal está en presente y la acción subordinada ya terminó.","Elegí HUBIERA/HUBIESE si el marco principal es pasado/condicional o si el pasado ya es irreal.","Conservá el participio invariable: haya llegado; hubieran llegado."],tables:["perfecto","pluscuamperfecto"],uses:[
    {title:"Reacción presente a acción terminada",explanation:"La acción ocurrió antes, pero importa ahora.",example:"Me alegra que hayas venido."},{title:"Duda sobre un resultado reciente",explanation:"No se afirma que la acción haya ocurrido.",example:"Dudo que hayan encontrado la llave."},{title:"Anterioridad en pasado",explanation:"Una acción era anterior a otra reacción pasada.",example:"Me sorprendió que hubieras llegado."},{title:"Pasado irreal",explanation:"Reescribe algo que ya no puede cambiar.",example:"Ojalá hubiera escuchado al conejo."}
  ],contrasts:[
    {left:"Me alegra que vengas.",right:"Me alegra que hayas venido.",why:"Acción simultánea/futura frente a acción ya completada."},{left:"Me sorprendió que vinieras.",right:"Me sorprendió que hubieras venido.",why:"Simultaneidad pasada frente a anterioridad respecto de ese pasado."}
  ],errors:[
    {wrong:"Me alegra que has venido.",right:"Me alegra que hayas venido.",why:"La reacción selecciona subjuntivo en el auxiliar HABER."},{wrong:"Ojalá habría ido.",right:"Ojalá hubiera ido.",why:"«Ojalá» para lamentar un pasado imposible usa pluscuamperfecto de subjuntivo."},{wrong:"Hayan llegados.",right:"Hayan llegado.",why:"El participio no concuerda en los tiempos compuestos con HABER."}
  ],exercises:[
    {prompt:"Dudo que ellos ___ la llave. (encontrar)",answer:"hayan encontrado",why:"Duda presente sobre una acción ya terminada."},{prompt:"Me sorprendió que vos ___. (venir)",answer:"hubieras / hubieses venido",why:"Anterioridad respecto de una reacción pasada."},{prompt:"Ojalá yo no ___ eso. (decir)",answer:"hubiera / hubiese dicho",why:"Lamento sobre un pasado irreversible."},{prompt:"Es posible que la puerta ya ___. (cerrarse)",answer:"se haya cerrado",why:"Posibilidad actual sobre resultado completado."}
  ],speaking:[
    {question:"¿Qué te alegra que haya ocurrido este año?",starter:"Me alegra que haya…"},{question:"¿Qué dudás que alguien haya entendido?",starter:"Dudo que haya…"},{question:"¿Qué te hubiera gustado hacer diferente?",starter:"Ojalá hubiera…"},{question:"¿Qué te sorprendió que hubiera pasado?",starter:"Me sorprendió que hubiera…"}
  ]},
  {id:"secuencia",number:"06",level:"B2–C1",title:"La torre de la concordancia",english:"Sequence of tenses",color:"#4b91e8",world:"La torre que alinea todos los relojes",image:"/subjuntivo/alicia-hero.webp",keyQuestion:"¿Desde qué tiempo principal miro la acción subordinada?",meaning:"La concordancia temporal no es una traducción mecánica. Primero ubicá el verbo principal; después decidí si la subordinada es simultánea/posterior o anterior. Esa combinación selecciona uno de los cuatro tiempos modernos del subjuntivo.",formula:"PRESENTE/FUTURO → PRESENTE o PERFECTO · PASADO/CONDICIONAL → IMPERFECTO o PLUSCUAMPERFECTO",formation:["Ubicá el tiempo del verbo principal.","Decidí si la subordinada ocurre al mismo tiempo/después o antes.","Elegí el casillero correspondiente y conservá el significado."],tables:["presente","perfecto","imperfecto-ra","pluscuamperfecto"],uses:[
    {title:"Principal presente + simultánea/posterior",explanation:"Presente de subjuntivo.",example:"Quiero que vengas."},{title:"Principal presente + anterior",explanation:"Pretérito perfecto de subjuntivo.",example:"Me alegra que hayas venido."},{title:"Principal pasado + simultánea/posterior",explanation:"Imperfecto de subjuntivo.",example:"Quería que vinieras."},{title:"Principal pasado + anterior",explanation:"Pluscuamperfecto de subjuntivo.",example:"Me alegró que hubieras venido."}
  ],contrasts:[
    {left:"Espero que llegue.",right:"Esperaba que llegara.",why:"El punto de referencia cambia de presente a pasado."},{left:"Dudo que haya salido.",right:"Dudaba que hubiera salido.",why:"La anterioridad se mantiene, pero cambia el marco principal."}
  ],errors:[
    {wrong:"Quería que vengas.",right:"Quería que vinieras.",why:"En el sistema estándar, el pasado principal selecciona imperfecto."},{wrong:"Me alegra que hubieras venido.",right:"Me alegra que hayas venido.",why:"Con una reacción presente y un hecho anterior usamos perfecto de subjuntivo."}
  ],exercises:[
    {prompt:"Espero que ___ mañana. (venir)",answer:"vengas",why:"Principal presente + acción posterior."},{prompt:"Esperaba que ___ al día siguiente. (venir)",answer:"vinieras / vinieses",why:"Principal pasado + acción posterior dentro de ese marco."},{prompt:"Dudo que ya ___. (salir)",answer:"haya salido",why:"Principal presente + acción anterior."},{prompt:"Dudaba que ya ___. (salir)",answer:"hubiera / hubiese salido",why:"Principal pasado + acción anterior."}
  ],speaking:[
    {question:"Contá una expectativa actual y una pasada.",starter:"Espero que… / Esperaba que…"},{question:"Reaccioná a algo reciente y a algo anterior.",starter:"Me alegra que haya… / Me alegró que hubiera…"},{question:"Transformá «Quiero que vengas» al pasado.",starter:"Quería que…"},{question:"¿Qué regla te ayuda a elegir el tiempo?",starter:"Primero miro…, después…"}
  ]},
  {id:"futuro",number:"07",level:"C1 · HISTÓRICO",title:"El archivo del futuro perdido",english:"Future subjunctive",color:"#d6b04b",world:"El archivo de formas que casi desaparecieron",image:"/subjuntivo/wonderland-garden.webp",keyQuestion:"¿Estoy leyendo lenguaje jurídico, solemne, proverbial o antiguo?",meaning:"El futuro de subjuntivo y el futuro perfecto de subjuntivo pertenecen al sistema verbal, pero casi no se usan en la conversación moderna. Sobreviven en leyes, fórmulas solemnes, refranes y textos antiguos. En español actual suelen reemplazarse por presente o perfecto de subjuntivo.",formula:"HABLARE · HUBIERE HABLADO → FORMAS HISTÓRICAS / JURÍDICAS",formation:["Reconocé la forma en -re o «hubiere + participio».","No la imites automáticamente en conversación.","Traducila mentalmente a presente/perfecto para entender el texto actual."],tables:["futuro","futuro-perfecto"],uses:[
    {title:"Lenguaje jurídico",explanation:"Define condiciones futuras con tono formal.",example:"Quien incumpliere la norma será sancionado."},{title:"Fórmulas fijas",explanation:"Sobrevive en expresiones heredadas.",example:"Sea lo que fuere."},{title:"Textos antiguos",explanation:"Aparece con frecuencia en literatura y documentos históricos.",example:"Cuando llegare el mensajero…"},{title:"Anterioridad futura jurídica",explanation:"El futuro perfecto marca una acción completada antes de otra futura.",example:"Quien hubiere presentado la solicitud…"}
  ],contrasts:[
    {left:"Cuando llegue, avisaré.",right:"Cuando llegare, avisaré.",why:"La primera es normal hoy; la segunda suena arcaica o jurídica."},{left:"Quien haya terminado puede salir.",right:"Quien hubiere terminado podrá salir.",why:"Perfecto moderno frente a futuro perfecto formal."}
  ],errors:[
    {wrong:"Mañana, cuando llegare, te llamo.",right:"Mañana, cuando llegue, te llamo.",why:"En conversación actual usamos presente de subjuntivo."},{wrong:"El futuro de subjuntivo ya no existe.",right:"Existe, pero su uso productivo es muy limitado.",why:"Sigue vivo en registros jurídicos, solemnes y fosilizados."}
  ],exercises:[
    {prompt:"Modernizá: «Quien tuviere dudas, pregunte».",answer:"Quien tenga dudas, que pregunte.",why:"El presente de subjuntivo reemplaza la forma histórica."},{prompt:"Modernizá: «Cuando hubiere terminado, saldrá».",answer:"Cuando haya terminado, saldrá.",why:"El perfecto de subjuntivo es la opción actual."},{prompt:"Reconocé el registro: «Sea lo que fuere».",answer:"Fórmula fija y solemne",why:"Conserva el futuro de subjuntivo «fuere»."},{prompt:"Completá en registro jurídico: Quien ___ la norma… (incumplir)",answer:"incumpliere",why:"Futuro de subjuntivo formal."}
  ],speaking:[
    {question:"Reformulá una frase jurídica en español cotidiano.",starter:"En español actual diríamos…"},{question:"¿Por qué una lengua conserva formas raras en las leyes?",starter:"Las leyes conservan…"},{question:"Inventá un decreto absurdo de la Reina Roja.",starter:"Quien…, será…"},{question:"Explicá cuándo NO usarías «hablare».",starter:"No usaría «hablare» cuando…"}
  ]},
];

export const irregularGroups=[
  {title:"Seis totalmente irregulares",forms:"sea · esté · vaya · haya · sepa · dé"},
  {title:"Raíz de YO",forms:"tenga · venga · diga · haga · ponga · salga · conozca"},
  {title:"Cambio ortográfico",forms:"busque · llegue · empiece · cruce · escoja"},
  {title:"Cambio de raíz -IR",forms:"pida/pidamos · duerma/durmamos · sienta/sintamos"},
  {title:"Participios irregulares",forms:"hecho · dicho · visto · puesto · vuelto · escrito · roto · abierto"},
];

export const finalDiagnostic=[
  ["¿Solo informo o afirmo un hecho?","INDICATIVO"],
  ["¿Hay deseo, influencia, emoción, duda, valoración o finalidad?","SUBJUNTIVO"],
  ["¿El verbo principal está en presente/futuro?","PRESENTE o PERFECTO"],
  ["¿El verbo principal está en pasado/condicional?","IMPERFECTO o PLUSCUAMPERFECTO"],
  ["¿La acción subordinada es anterior?","TIEMPO PERFECTO"],
  ["¿Es lenguaje jurídico/arcaico con -re?","FUTURO DE SUBJUNTIVO"],
];
