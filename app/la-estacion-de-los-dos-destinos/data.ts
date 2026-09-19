export type Exercise = { prompt:string; options:string[]; correct:number; why:string; en?:string };
export type GrammarTable = { id:string; title:string; cue:string; headers:string[]; rows:string[][]; note?:string };
export type Unit = {
 id:string; number:string; title:string; english:string; world:string; level:string; color:string; formula:string;
 question:string; meaning:string; steps:string[]; tables:string[];
 uses:{title:string; explanation:string; example:string}[];
 contrasts:{left:string; right:string; why:string}[];
 errors:{wrong:string; right:string; why:string}[];
 exercises:Exercise[]; speaking:{question:string; starter:string}[];
};
export const hero='/objetos-pronombres/estacion-hero.webp';
export const tables:GrammarTable[]=[
 {id:'roles',title:'Cuatro piezas. Una entrega.',cue:'LEO ENTREGA UNA CARTA A ANA',headers:['Pieza','En esta frase','Trabajo'],rows:[['Sujeto','Leo','Es quien entrega.'],['Verbo','entrega','Nombra la acción.'],['Objeto directo · OD','una carta','Es lo que Leo entrega.'],['Objeto indirecto · OI','a Ana','Es la destinataria de la carta.']],note:'Objeto y complemento significan lo mismo aquí: OD = CD; OI = CI.'},
 {id:'do',title:'Lo, la, los, las',cue:'EL PRONOMBRE SIGUE AL REFERENTE',headers:['Lo que ya conocemos','Pronombre OD','Frase completa','Ahora, más corta'],rows:[['el paquete · masculino singular','lo','Abro el paquete.','Lo abro.'],['la carta · femenino singular','la','Leo la carta.','La leo.'],['los billetes · masculino plural','los','Busco los billetes.','Los busco.'],['las llaves · femenino plural','las','Guardo las llaves.','Las guardo.']],note:'No mires el género de quien habla. Mirá el género y el número de aquello que el pronombre representa.'},
 {id:'io',title:'Le o les: contá destinatarios',cue:'EL GÉNERO NO CAMBIA LE / LES',headers:['Destinatario','Pronombre OI','Ejemplo'],rows:[['Ana / él / ella / usted','le','Le doy una llave.'],['Ana y Leo / ellos / ellas / ustedes','les','Les doy una llave.']],note:'Un destinatario: le. Varios destinatarios: les. La cantidad de llaves no decide entre le y les.'},
 {id:'people',title:'La tabla de personas, sin mezclar funciones',cue:'A QUIÉN REPRESENTA EL PRONOMBRE',headers:['Persona representada','Como OD','Como OI'],rows:[['yo','me','me'],['tú / vos','te','te'],['él / usted masculino','lo','le'],['ella / usted femenino','la','le'],['nosotros / nosotras','nos','nos'],['vosotros / vosotras','os','os'],['ellos / ustedes masculino o grupo mixto','los','les'],['ellas / ustedes femenino','las','les']],note:'Vos usa te. En gran parte de España, vosotros usa os. Ustedes usa los / las como OD y les como OI. Esta tabla presenta el sistema general; el atlas aclara la variante le veo.'},
 {id:'both',title:'Primero OI. Después OD.',cue:'ME / TE / NOS / OS / SE + LO / LA / LOS / LAS',headers:['Frase de partida','OI','OD','Dos pronombres'],rows:[['Leo me da el libro.','me','lo','Leo me lo da.'],['Leo te da la llave.','te','la','Leo te la da.'],['Leo nos da los billetes.','nos','los','Leo nos los da.'],['Leo os da las cartas.','os','las','Leo os las da.'],['Leo le da el libro a Ana.','le → se','lo','Leo se lo da a Ana.'],['Leo les da la llave a Ana y Eva.','les → se','la','Leo se la da a Ana y Eva.']],note:'Se conserva el significado. Le y les cambian de forma delante de lo, la, los y las; no desaparece el destinatario.'},
 {id:'position',title:'Dónde van los pronombres',cue:'MANTENÉ JUNTOS LOS DOS PRONOMBRES',headers:['Estructura','Ejemplo','Posición'],rows:[['Presente','La leo. / No la leo.','Antes del verbo conjugado.'],['Ir a + infinitivo','La voy a leer. / Voy a leerla.','Antes del conjunto o unidos al infinitivo.'],['Poder + infinitivo','Te la puedo dar. / Puedo dártela.','El grupo completo se mueve junto.'],['Estar + gerundio · extra','La estoy leyendo. / Estoy leyéndola.','Antes del conjunto o unidos al gerundio.'],['Imperativo afirmativo · extra','Dámela.','Unidos al final.'],['Imperativo negativo · extra','No me la des.','Antes del verbo.']],note:'No todas las construcciones con dos verbos permiten las dos posiciones. Hay que leerla tiene el pronombre al final; no decimos «La hay que leer».'},
];
export const units:Unit[]=[
 {
 id:'reparto',number:'00',title:'El vestíbulo de las funciones',english:'Who does what?',world:'Primero la escena. Después las etiquetas.',level:'A1 · desde cero',color:'#60d8cf',formula:'LEO + ENTREGA + UNA CARTA + A ANA',question:'¿Qué pasa en esta escena?',
 meaning:'Leo entrega una carta a Ana. Leo hace la entrega. La carta es lo entregado. Ana recibe la carta. Una misma frase tiene participantes con trabajos diferentes: sujeto, objeto directo y objeto indirecto.',
 steps:['Buscá el verbo: entrega. Antes de elegir pronombres, entendé la acción.','En esta entrega, identificá a quien entrega y lo que entrega: Leo y una carta.','Identificá al destinatario: a Ana. Todavía no cambies ninguna palabra.'],tables:['roles'],
 uses:[{title:'Una entrega real',explanation:'La carta y Ana participan de maneras distintas.',example:'Leo entrega una carta a Ana.'},{title:'Una acción sin destinatario',explanation:'También hay frases con OD y sin OI.',example:'Ana abre la puerta. → la puerta = OD.'}],
 contrasts:[{left:'Leo entrega una carta a Ana.',right:'Ana entrega una carta a Leo.',why:'La carta sigue siendo OD. Cambian quien entrega y quien recibe.'},{left:'Ana abre la puerta.',right:'Ana duerme.',why:'Abrir tiene aquí un OD: la puerta. Dormir no tiene OD en esta frase. No hay que inventar piezas.'}],
 errors:[{wrong:'Ana es el sujeto porque es una persona.',right:'En «Leo entrega una carta a Ana», el sujeto es Leo.',why:'Ser persona no te convierte automáticamente en sujeto.'},{wrong:'Todas las frases necesitan OD y OI.',right:'«Ana duerme» no tiene ninguno de los dos.',why:'La estructura depende del verbo y de la frase.'}],
 exercises:[
 {prompt:'Leo entrega una carta a Ana. ¿Quién entrega?',options:['Leo','Ana','La carta'],correct:0,why:'Leo es el sujeto de esta acción.',en:'Leo gives a letter to Ana. Who does the giving?'},
 {prompt:'Leo entrega una carta a Ana. ¿Qué entrega?',options:['Ana','Una carta','Leo'],correct:1,why:'Una carta es el OD: lo entregado.'},
 {prompt:'Leo entrega una carta a Ana. ¿Quién recibe la carta?',options:['Leo','Una carta','Ana'],correct:2,why:'A Ana es el OI: la destinataria.'},
 {prompt:'Ana abre la puerta. ¿Hay un destinatario expresado?',options:['Sí: la puerta','No','Sí: Ana'],correct:1,why:'La puerta es OD y Ana es sujeto. Aquí no hay OI.'},
 ],speaking:[{question:'¿Qué cosas entregás en tu vida diaria?',starter:'Entrego…'},{question:'¿A quién le mandás mensajes?',starter:'Mando mensajes a…'},{question:'Inventá una entrega con un libro y dos personas.',starter:'… entrega un libro a…'}],
 },
 {
 id:'directo',number:'01',title:'El andén del objeto directo',english:'Direct object · things and people',world:'La persona también puede viajar por esta vía.',level:'A1 guiado',color:'#60d8cf',formula:'VER ALGO / VER A ALGUIEN',question:'¿Qué o a quién veo, busco o invito?',
 meaning:'En «Leo ve la estación», la estación es OD. En «Leo ve a Ana», a Ana también es OD: es la persona vista. El OD puede ser una cosa o una persona. Con una persona concreta, en estos ejemplos, aparece la a personal.',
 steps:['Tomá una acción sencilla: ver. Leo ve la estación. La estación es lo visto.','Cambiá la cosa por una persona: Leo ve a Ana. Ana ocupa ahora ese mismo lugar.','Compará con dar: Leo da una carta a Ana. Aquí la carta es lo dado y Ana es su destinataria.'],tables:[],
 uses:[{title:'Objetos y lugares como OD',explanation:'No hace falta que algo cambie físicamente para ser OD.',example:'Veo la estación. / Busco el mapa.'},{title:'Personas como OD',explanation:'La a personal no convierte el complemento en indirecto.',example:'Veo a Ana. / Invito a Leo.'}],
 contrasts:[{left:'Veo a Ana. → Ana es OD.',right:'Doy una carta a Ana. → Ana es OI.',why:'Las dos frases responden a una pregunta con «a quién». Esa pregunta sola no distingue OD de OI: hay que mirar la acción y la función.'},{left:'Veo la estación. → OD.',right:'Voy a la estación. → destino.',why:'La presencia o ausencia de a no basta. Ir a un lugar no convierte ese lugar en OD ni en OI.'}],
 errors:[{wrong:'Hay a; entonces es OI.',right:'«A Ana» es OD en «Veo a Ana».',why:'La a puede marcar un OD de persona.'},{wrong:'OD es una cosa; OI es una persona.',right:'Una persona puede ser OD: «Invito a Ana».',why:'La función depende de la relación con el verbo, no de ser persona o cosa.'}],
 exercises:[
 {prompt:'En «Invito a Ana», ¿qué función tiene a Ana?',options:['OD','OI','Sujeto'],correct:0,why:'Ana es la persona invitada, no la destinataria de otro objeto.',en:'I invite Ana. Ana is the person being invited.'},
 {prompt:'En «Doy un mapa a Ana», ¿cuál es el OD?',options:['a Ana','un mapa','yo'],correct:1,why:'El mapa es lo dado; Ana es la destinataria.'},
 {prompt:'En «Voy a la estación», a la estación es…',options:['OD por ser un lugar','OI por tener a','Un complemento de destino'],correct:2,why:'Ir a un lugar expresa destino. No lo confundas con dar algo a alguien.'},
 {prompt:'¿Qué afirmación sirve?',options:['Toda persona es OI','Toda a marca OI','Hay que mirar la función en la frase'],correct:2,why:'«Veo a Ana» y «Doy una carta a Ana» muestran que la a no decide sola.'},
 ],speaking:[{question:'¿A quién ves todos los días?',starter:'Veo a…'},{question:'¿Qué buscás antes de salir de casa?',starter:'Busco…'},{question:'¿A quién invitás a tu cumpleaños?',starter:'Invito a…'}],
 },
 {
 id:'pronombres-directos',number:'02',title:'El almacén de los nombres cortos',english:'Lo · la · los · las',world:'El referente no desaparece. Cambia cómo lo nombrás.',level:'A1 guiado',color:'#52cbd8',formula:'LA CARTA → LA · LOS PAQUETES → LOS',question:'¿De qué estamos hablando ya?',
 meaning:'«¿Tenés la carta? Sí, la tengo». La representa la carta: no hace falta repetir el nombre. Un pronombre no es una abreviatura del verbo. Mantiene la referencia a algo o alguien que el contexto permite identificar.',
 steps:['Identificá el OD completo: la carta.','Mirá su género y número: femenino singular. Elegí la.','Poné el pronombre delante del verbo en presente: La tengo. El verbo conserva su sujeto.'],tables:['do'],
 uses:[{title:'Una respuesta natural',explanation:'El contexto ya nos dice a qué se refiere la.',example:'¿Leés la carta? Sí, la leo.'},{title:'Una persona conocida',explanation:'El mismo sistema representa personas.',example:'Veo a Ana. → La veo. / Veo a Leo. → Lo veo.'}],
 contrasts:[{left:'La carta está aquí.',right:'La leo.',why:'En la primera, la es un artículo que acompaña al sustantivo carta. En la segunda, la es un pronombre OD que representa la carta.'},{left:'Yo guardo la llave. → La guardo.',right:'Leo guarda la llave. → La guarda.',why:'La sigue siendo femenino singular porque representa la llave. Cambia el verbo, que concuerda con el sujeto.'}],
 errors:[{wrong:'Soy un hombre: lo guardo, aunque hable de la llave.',right:'La llave → la guardo.',why:'El género del hablante no decide el pronombre OD.'},{wrong:'¿Tenés el mapa? Sí, tengo lo.',right:'Sí, lo tengo.',why:'Con este presente, el pronombre va antes del verbo.'}],
 exercises:[
 {prompt:'¿Tenés las llaves? Sí, ___ tengo.',options:['la','las','les'],correct:1,why:'Las llaves es femenino plural: las. Son lo que tengo, no destinatarias.'},
 {prompt:'Veo a Ana. ¿Cómo evitás repetir su nombre?',options:['La veo','Ella veo','Veo la'],correct:0,why:'Ana es OD femenino singular: la. Ella sería un pronombre de sujeto.'},
 {prompt:'En «La carta es azul», la es…',options:['Pronombre OI','Pronombre OD','Artículo'],correct:2,why:'Acompaña al nombre carta. En «La leo», en cambio, la lo representa.'},
 {prompt:'Ana busca los billetes. → Ana ___ busca.',options:['nos','los','les'],correct:1,why:'Los billetes es OD masculino plural. Nos significa a nosotros, no unos objetos masculinos.'},
 ],speaking:[{question:'¿Tenés tu teléfono ahora?',starter:'Sí, lo tengo. / No, no lo tengo.'},{question:'¿Dónde guardás las llaves?',starter:'Las guardo en…'},{question:'¿Ves a tus amigos durante la semana?',starter:'Sí, los veo… / No, no los veo…'}],
 },
 {
 id:'indirecto',number:'03',title:'La ventanilla de los destinatarios',english:'Indirect object · le and les',world:'Lo entregado y quien lo recibe no son la misma pieza.',level:'A1 guiado',color:'#efbe64',formula:'LE / LES + VERBO + ALGO',question:'¿A quién va lo que doy, mando o explico?',
 meaning:'«Le doy una carta a Ana». Una carta es OD: lo que doy. Le representa a Ana, el OI. Para estos verbos de entrega o comunicación, pensá en un destinatario. Le sirve para él, ella o usted; les, para varias personas.',
 steps:['Con dar, mandar o explicar, identificá primero el contenido: una carta, un mensaje, una idea.','Buscá al destinatario y contalo: a Ana → le; a Ana y Leo → les.','Conservá el contenido y probá la frase: Le mando un mensaje. Si hace falta, aclarás: a Ana.'],tables:['io'],
 uses:[{title:'Entregar cosas',explanation:'Le no cambia por el género de quien recibe.',example:'Le doy el mapa a Leo. / Le doy el mapa a Ana.'},{title:'Comunicar información',explanation:'También se reciben palabras e ideas.',example:'Les explico la actividad a mis alumnos.'}],
 contrasts:[{left:'Le doy dos cartas a Ana.',right:'Les doy una carta a Ana y Leo.',why:'Le / les cuenta destinatarios. El número de cartas no decide ese pronombre.'},{left:'Veo a Ana. → La veo.',right:'Mando una carta a Ana. → Le mando una carta.',why:'La primera Ana es OD. La segunda es OI. Ser la misma persona no significa tener la misma función.'}],
 errors:[{wrong:'La doy un mapa a Ana.',right:'Le doy un mapa a Ana.',why:'Ana recibe el mapa: es OI. El femenino de Ana no exige la.'},{wrong:'Le doy una llave a Ana y Leo.',right:'Les doy una llave a Ana y Leo.',why:'En el modelo de concordancia que practicamos, el OI plural pide les.'}],
 exercises:[
 {prompt:'Mando una foto a Ana. → ___ mando una foto.',options:['La','Le','Lo'],correct:1,why:'Ana es destinataria de la foto: OI singular → le.'},
 {prompt:'Doy cinco cartas a Leo. → ___ doy cinco cartas.',options:['Le','Les','Los'],correct:0,why:'Solo hay un destinatario: Leo. Las cinco cartas no cambian le.'},
 {prompt:'Explico la actividad a mis alumnas. → ___ explico la actividad.',options:['Las','La','Les'],correct:2,why:'Las alumnas son destinatarias de la explicación: OI plural → les.'},
 {prompt:'¿«Le doy un mapa a Ana» habla de dos destinatarios?',options:['Sí: le y Ana','No: ambos señalan a Ana','No: le representa el mapa'],correct:1,why:'Le y a Ana se refieren a la misma persona. Esa repetición del OI es normal en español.'},
 ],speaking:[{question:'¿Le mandás fotos a alguien de tu familia?',starter:'Sí, le mando fotos a…'},{question:'¿Qué les explicás a tus alumnos o compañeros?',starter:'Les explico…'},{question:'¿A quién le das un regalo en su cumpleaños?',starter:'Le doy… a…'}],
 },
 {
 id:'personas',number:'04',title:'El puente de me, te y nos',english:'Same form · different jobs',world:'La forma no siempre revela la función.',level:'A1 guiado',color:'#f18c79',formula:'ME / TE / NOS / OS PUEDEN SER OD U OI',question:'¿Me ve o me entrega algo?',
 meaning:'«Ana me ve»: me es la persona vista, el OD. «Ana me da un mapa»: el mapa es OD y me es OI, la persona que lo recibe. Me, te, nos y os tienen la misma forma en las dos funciones. Necesitás entender la frase.',
 steps:['Decidí a quién representa el pronombre: me = yo; te = tú o vos; nos = nosotros; os = vosotros.','Miralo con ver: Ana nos ve. Nosotros somos las personas vistas: nos es OD.','Miralo con dar algo: Ana nos da una llave. Nosotros recibimos la llave: nos es OI.'],tables:['people'],
 uses:[{title:'Hablar de vos y de mí',explanation:'El verbo puede tener un sujeto distinto de la persona representada por el pronombre.',example:'Yo te veo. / Ana me ve.'},{title:'Hablar de un grupo',explanation:'Nos incluye a quien habla; las representa a ellas o a cosas femeninas plurales.',example:'Ana nos ve. / Ana las ve.'}],
 contrasts:[{left:'Ana nos ve.',right:'Ana nos da un mapa.',why:'Nos = OD en la primera: personas vistas. Nos = OI en la segunda: personas que reciben el mapa.'},{left:'Ana nos ve. → a nosotros.',right:'Ana las ve. → a ellas.',why:'Ambos son OD aquí, pero representan personas diferentes. Nos incluye al hablante; las no.'}],
 errors:[{wrong:'Me, te y nos siempre son indirectos.',right:'«Ana me ve» tiene me como OD.',why:'La misma forma puede hacer dos trabajos.'},{wrong:'Nos da el mapa: nosotros damos.',right:'Nos es quien recibe. Da tiene un sujeto singular.',why:'Que el pronombre aparezca primero no lo convierte en sujeto. Nosotros damos usaría damos.'}],
 exercises:[
 {prompt:'«Ana me ve». Me es…',options:['OD','OI','Sujeto'],correct:0,why:'Yo soy la persona vista. Ana es quien ve.'},
 {prompt:'«Ana me da la llave». Me es…',options:['OD','OI','Artículo'],correct:1,why:'La llave es OD; me representa a quien la recibe.'},
 {prompt:'«Nos ve Leo». ¿Quién ve?',options:['Nosotros','Todos','Leo'],correct:2,why:'Leo es el sujeto de ve. Nos representa a las personas vistas, aunque aparezca primero.',en:'Leo sees us. The first pronoun is not the person doing the seeing.'},
 {prompt:'Sos parte del grupo que Ana ve. ¿Qué frase usás?',options:['Ana las ve','Ana nos ve','Ana les da'],correct:1,why:'Nos incluye a quien habla. Las representaría a ellas, no a nosotros.'},
 ],speaking:[{question:'¿Quién te llama durante la semana?',starter:'… me llama.'},{question:'¿Quién te manda mensajes?',starter:'… me manda mensajes.'},{question:'Vos y tus amigos: ¿quién los invita a salir?',starter:'… nos invita a salir.'}],
 },
 {
 id:'combinaciones',number:'05',title:'El intercambiador de las dos vías',english:'Two pronouns · se lo, se la…',world:'Ampliación opcional: primero entendé cada vía.',level:'Puente a A2 · opcional',color:'#ad9af0',formula:'OI + OD + VERBO · LE / LES → SE ANTE LO / LA / LOS / LAS',question:'¿Y si ya conocemos el objeto y el destinatario?',
 meaning:'«Leo le da la carta a Ana» puede quedar en «Leo se la da». La sigue siendo la carta. Se representa a Ana: es la forma que adopta le delante de la. En esta combinación, se no significa automáticamente «a sí mismo».',
 steps:['Partí de la frase completa: Leo le da la carta a Ana. Identificá a Ana como OI y la carta como OD.','La carta pasa a la. El orden es OI + OD, pero no usamos le la.','Le cambia a se: Leo se la da. Si el destinatario no está claro, añadí a Ana.'],tables:['both'],
 uses:[{title:'Con me, te o nos',explanation:'Estas formas se conservan cuando añadís el OD.',example:'Te doy la llave. → Te la doy.'},{title:'Con le o les',explanation:'Ante lo, la, los o las, ambas formas pasan a se.',example:'Les doy el mapa. → Se lo doy.'}],
 contrasts:[{left:'Le doy la carta a Ana.',right:'Se la doy a Ana.',why:'Solo en la segunda reemplazamos también la carta. Se conserva la referencia a Ana; la conserva la referencia a la carta.'},{left:'Se lo doy a Ana.',right:'Se lo doy a Ana y Leo.',why:'Se no muestra singular o plural. Lo representa un objeto masculino singular en las dos frases.'}],
 errors:[{wrong:'Le lo doy.',right:'Se lo doy.',why:'Le + lo se realiza como se lo.'},{wrong:'Doy un mapa a tres personas: se los doy.',right:'Les doy un mapa. → Se lo doy.',why:'Lo representa un mapa, singular. No traslades a lo el plural del destinatario.'}],
 exercises:[
 {prompt:'Te doy la llave. Reemplazá también la llave.',options:['Te la doy','La te doy','Te le doy'],correct:0,why:'Te es OI; la es OD. El orden de esta pareja es OI + OD.'},
 {prompt:'Le doy el mapa a Ana. Reemplazá el mapa.',options:['Le lo doy a Ana','Se lo doy a Ana','Se le doy a Ana'],correct:1,why:'Le cambia a se delante de lo. Lo representa el mapa.'},
 {prompt:'Les doy una carta a Ana y Eva. Reemplazá una carta.',options:['Se las doy','Les la doy','Se la doy'],correct:2,why:'La representa una carta, singular. Se puede representar a varias destinatarias.'},
 {prompt:'«Se lo doy». Sin contexto, ¿sabés si recibe él o ella?',options:['Sí: él, porque dice lo','No: se no indica el género del destinatario','Sí: ella'],correct:1,why:'Lo describe el referente del OD. Para aclarar el OI, podés decir a él, a ella, a Ana…'},
 ],speaking:[{question:'Tenés mi teléfono. ¿Me lo das?',starter:'Sí, te lo doy.'},{question:'La llave es para Ana. ¿Qué hacés?',starter:'Se la doy a Ana.'},{question:'Tus amigos necesitan los billetes. ¿Qué hacés?',starter:'Se los doy.'}],
 },
 {
 id:'posicion',number:'06',title:'El reloj de la posición',english:'Before the verb · attached at the end',world:'Ampliación opcional: la pareja viaja junta.',level:'Puente a A2 · opcional',color:'#80b9ec',formula:'LA LEO · VOY A LEERLA · LA VOY A LEER',question:'¿Delante del verbo o unido al final?',
 meaning:'Con el presente que ya conocés, el pronombre va antes: «La leo» y «No la leo». Con «voy a leer», podés decir «La voy a leer» o «Voy a leerla». En la segunda, la se escribe pegado al infinitivo. No lo pongas entre a y leer.',
 steps:['Empezá por un solo verbo en presente: La leo. Con no: No la leo.','Con ir a + infinitivo, elegí una de las dos posiciones: La voy a leer / Voy a leerla.','Si hay dos pronombres, mové el grupo entero: Te la voy a dar / Voy a dártela.'],tables:['position'],
 uses:[{title:'Lo que hacés ahora',explanation:'El pronombre acompaña al verbo, no al sustantivo.',example:'Lo tengo. / No lo tengo.'},{title:'Un plan cercano',explanation:'En esta construcción, las dos posiciones expresan el mismo plan.',example:'Lo voy a guardar. / Voy a guardarlo.'}],
 contrasts:[{left:'Te la voy a dar.',right:'Voy a dártela.',why:'Te la permanece junto en ambos casos. Al unirlo al infinitivo, la tilde de dártela conserva la acentuación.'},{left:'La leo.',right:'Léela. · extra: una instrucción',why:'La primera informa en presente. La segunda da una instrucción afirmativa a tú; por eso el pronombre aparece detrás.'}],
 errors:[{wrong:'Voy a la leer.',right:'Voy a leerla. / La voy a leer.',why:'No se coloca entre a y el infinitivo.'},{wrong:'Te voy a darla.',right:'Te la voy a dar. / Voy a dártela.',why:'En estas construcciones no se separa la pareja de pronombres.'}],
 exercises:[
 {prompt:'Elegí el presente correcto.',options:['No la leo','No leo la','La no leo'],correct:0,why:'La va antes de leo. La palabra «no» va antes de la: No la leo.'},
 {prompt:'Voy a leer la carta. Reemplazá la carta.',options:['Voy a la leer','Voy a leerla','Voy la a leer'],correct:1,why:'La se une al infinitivo leer: leerla. También sirve «La voy a leer».'},
 {prompt:'Otra forma de decir «Voy a dártela» es…',options:['Te voy a darla','La te voy a dar','Te la voy a dar'],correct:2,why:'Te la se coloca junto antes del conjunto verbal.'},
 {prompt:'¿Cuál es correcta con hay que?',options:['La hay que leer','Hay la que leer','Hay que leerla'],correct:2,why:'Esta construcción exige el pronombre al final del infinitivo. La alternancia no sirve con todos los grupos verbales.'},
 ],speaking:[{question:'¿Vas a leer el mensaje hoy?',starter:'Sí, lo voy a leer… / Voy a leerlo…'},{question:'¿Podés darme la dirección?',starter:'Sí, te la puedo dar.'},{question:'¿Vas a guardar las llaves acá?',starter:'Sí, voy a guardarlas acá.'}],
 },
 {
 id:'llegada',number:'07',title:'La sala de las entregas claras',english:'Understand first · speak next',world:'Volvé al significado cada vez que dudes.',level:'A1 · integración',color:'#74cbb7',formula:'ESCENA → FUNCIÓN → REFERENTE → PRONOMBRE',question:'¿Puedo explicar qué representa cada palabra?',
 meaning:'No adivines por una letra. Identificá el verbo y entendé la escena. Decidí si el referente es OD u OI. Después elegí el pronombre. Con gustar aparece otro caso útil: «A Ana le gusta el café». El café es el sujeto y le señala a quien le gusta; no hay OD.',
 steps:['Decí la frase completa con nombres cuando sea posible: Leo ve a Ana / Leo da la llave a Ana.','Separá la función de la persona: la misma Ana puede ser OD u OI según la frase.','Acortá solo lo que el contexto ya deja claro. Si decís le o se y no se entiende quién, aclaralo.'],tables:[],
 uses:[{title:'Un café cotidiano',explanation:'Gustar no representa una entrega. Le señala a quien experimenta el gusto.',example:'A Ana le gusta el café. / A Ana le gustan los mapas.'},{title:'Una respuesta que se entiende',explanation:'El pronombre necesita un referente recuperable por el contexto.',example:'¿Tenés la dirección? Sí, la tengo.'}],
 contrasts:[{left:'Ana toma el café.',right:'A Ana le gusta el café.',why:'En toma, Ana es sujeto y el café es OD. En gusta, el café es sujeto y a Ana / le es OI. No todas las frases siguen el modelo de una entrega.'},{left:'Llevo un regalo para Ana.',right:'Le doy un regalo a Ana.',why:'Para Ana expresa para quién se destina el regalo. No lo etiquetes automáticamente como OI: en la segunda, a Ana sí es el OI de dar.'}],
 errors:[{wrong:'Le gusta los mapas.',right:'Le gustan los mapas.',why:'Los mapas es el sujeto plural de gustan. Le es OI y no decide la concordancia del verbo.'},{wrong:'Si hay OI, siempre hay un OD escondido.',right:'En «Le gusta el café» no hay OD.',why:'El café es sujeto. La idea de destinatario ayuda con dar o mandar, pero no define todos los OI.'}],
 exercises:[
 {prompt:'A Ana le gustan los libros. ¿Cuál es el sujeto?',options:['Ana','Los libros','Le'],correct:1,why:'Los libros concuerda con gustan. Ana / le expresa quién siente ese gusto.'},
 {prompt:'¿Qué frase significa «Ana sees us»?',options:['Vemos a Ana','Ana nos ve','Ana les da un mapa'],correct:1,why:'Ana realiza la acción de ver. Nos representa a nosotros, OD.'},
 {prompt:'Quiero decir «I give her the key». Elegí.',options:['La doy la llave','Le doy la llave','Ella doy la llave'],correct:1,why:'Ella recibe la llave: OI → le. La llave es el OD.'},
 {prompt:'¿Qué hacés primero cuando dudás entre lo y le?',options:['Miro si la persona es hombre','Busco una a y elijo le','Entiendo la función del referente'],correct:2,why:'Una persona masculina puede ser OD: lo veo; u OI: le doy una llave.'},
 ],speaking:[{question:'¿A quién ves mucho y a quién le escribís mucho?',starter:'Veo a… / Le escribo a…'},{question:'¿Qué objeto tenés siempre con vos?',starter:'Tengo… Lo / La llevo…'},{question:'¿A quién le gusta el mismo café o la misma música que a vos?',starter:'A… le gusta…'}],
 },
];
export const finalDiagnostic:Exercise[]=[
 {prompt:'«Veo a mi hermana». A mi hermana es…',options:['OD','OI','Sujeto'],correct:0,why:'Es la persona vista. La a es personal.'},
 {prompt:'«Le mando la foto a mi hermana». Le representa…',options:['La foto','A mi hermana','A mí'],correct:1,why:'Le representa al destinatario, no al objeto enviado.'},
 {prompt:'La pregunta es por las cartas: «Sí, ___ leo».',options:['les','nos','las'],correct:2,why:'Las cartas es OD femenino plural.'},
 {prompt:'«El profesor nos escucha». ¿A quién escucha?',options:['A nosotros','A ellas','A él mismo'],correct:0,why:'Nos representa al grupo que incluye a quien habla.'},
 {prompt:'«Nos explica una idea». Nos es…',options:['OD','OI','Sujeto'],correct:1,why:'La idea es lo explicado; nosotros somos destinatarios.'},
 {prompt:'«Le doy tres llaves a Ana». ¿Por qué le?',options:['Porque llaves es plural','Porque Ana es mujer','Porque hay una destinataria'],correct:2,why:'Le / les depende del número de destinatarios.'},
 {prompt:'EXTRA · «Les doy el mapa a mis amigos». Dos pronombres:',options:['Se los doy','Se lo doy','Les lo doy'],correct:1,why:'Se representa a mis amigos. Lo representa un mapa, singular.'},
 {prompt:'EXTRA · «Voy a darte la llave». Reemplazá también la llave:',options:['Voy a dártela','Te voy a darla','La te voy a dar'],correct:0,why:'Te la permanece junto. También podés decir «Te la voy a dar».'},
];
export const sources=[
 {title:'RAE y ASALE · Complemento directo',url:'https://www.rae.es/gtg/complemento-directo',note:'Funciones del OD, personas con a personal y límites de las pruebas de sustitución.'},
 {title:'RAE y ASALE · Complemento indirecto',url:'https://www.rae.es/gtg/complemento-indirecto',note:'Destinatarios, experimentantes y distinción entre OI y complementos con para.'},
 {title:'RAE y ASALE · Pronombres personales átonos',url:'https://www.rae.es/dpd/pronombres%20personales%20%C3%A1tonos',note:'Formas, posición y duplicación. Consulta normativa; los ejemplos y las actividades de esta clase son originales.'},
 {title:'RAE y ASALE · Se',url:'https://www.rae.es/dpd/se',note:'Se como variante de le / les delante de lo, la, los, las.'},
 {title:'RAE y ASALE · Leísmo',url:'https://www.rae.es/dpd/le%C3%ADsmo',note:'Variación admitida y distinción respecto de laísmo y loísmo.'},
 {title:'Instituto Cervantes · Inventario A1–A2',url:'https://cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular/niveles/02_gramatica_inventario_a1-a2.htm',note:'La entrada es guiada para A1. El sistema completo y sus combinaciones incluyen contenidos que el PCIC sitúa en A2.'},
 {title:'Paul A. Malovrh · Comprensión de OD y orden de palabras (2006)',url:'https://www.lingref.com/cpp/hls/9/paper1376.pdf',note:'Investigación sobre contexto y la tendencia a interpretar el primer nombre o pronombre como agente. Inspira tareas de comprensión; no demuestra que una única técnica sea la mejor para todos.'},
];
