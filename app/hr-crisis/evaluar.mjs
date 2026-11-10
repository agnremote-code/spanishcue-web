// HR Crisis · contextual feedback. Speech recognition does not work in the
// site, so «speaking» is free typed production: the student writes what she
// would say and this module reads it like a patient teacher would. It checks
// what the situation asks for (a greeting, a question, the past, a number…),
// spots Portuguese interference and false friends, and returns feedback with
// the reason for every item. Nothing here is multiple choice.

/** Lower case, no accents, single spaces: the text the checks read. */
export function plainText(text) {
  return String(text ?? '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ').trim();
}
export const wordsIn = (text) => (String(text ?? '').match(/[\p{L}\d]+/gu) ?? []).length;

const PAST_IRREGULAR = /\b(fue|fui|fuiste|fuimos|fueron|hubo|tuve|tuvo|tuvimos|tuvieron|hice|hizo|hicimos|hicieron|dije|dijo|dijimos|dijeron|pude|pudo|pudimos|pudieron|vine|vino|vinimos|vinieron|estuve|estuvo|estuvimos|estuvieron|di|dio|dimos|dieron|puse|puso|pusimos|pusieron|quise|quiso|quisieron|supe|supo|supimos|supieron|traje|trajo|trajeron|era|eran|eramos|estaba|estaban|estabamos|habia|habian|tenia|tenian|teniamos|queria|querian|pago|pague|pagaron|cobro|cobraron|llego|llegaron|llegue)\b/;
const PERFECT = /\b(he|has|ha|hemos|han|habeis) (\w+(ado|ido)|hecho|dicho|visto|escrito|puesto|vuelto|roto|abierto|resuelto|descubierto)\b/;
function hasPast(raw, plain) {
  if (PAST_IRREGULAR.test(plain) || PERFECT.test(plain)) return true;
  if (/\b\w{2,}(aste|asteis|aron|ieron|iste|isteis|aban|abamos|abas)\b/.test(plain)) return true;
  if (/\b\w{2,}(aba|ia)\b/.test(plain) && /\b(antes|ayer|cuando|siempre|todos los)\b/.test(plain)) return true;
  // hablé, pagó… (with the accent the student typed)
  const accented = String(raw).toLowerCase().match(/\b[\p{L}]{2,}[éó]\b/gu) ?? [];
  return accented.some(w => !['qué', 'porqué', 'café', 'bebé', 'josé', 'cómo'].includes(w));
}
function hasFuture(raw, plain) {
  if (/\b(voy|vas|va|vamos|vais|van) a [a-z]+(ar|er|ir)(lo|la|los|las|le|les|me|te|se|nos)?\b/.test(plain)) return true;
  if (/\b(habra|habran|sera|seran|seremos)\b/.test(plain) || /\b(pondr|propondr|tendr|mantendr|saldr|vendr|podr|sabr|habr|har|dir|querr|valdr)(e|as|a|emos|eis|an)\b/.test(plain)) return true;
  return /\b[\p{L}]{2,}(ré|rás|rá|réis|rán)\b/u.test(String(raw).toLowerCase()) || /\b\w{3,}(aremos|eremos|iremos|aran|eran|iran)\b/.test(plain);
}
const NOT_CONDITIONAL = new Set(['secretaria', 'libreria', 'panaderia', 'peluqueria', 'cafeteria', 'ingenieria', 'mensajeria', 'tesoreria', 'galeria', 'loteria', 'carniceria', 'conserjeria', 'gerencia', 'consultoria', 'auditoria']);
function hasConditional(plain) {
  return (plain.match(/\b\w+(ar|er|ir|dr|br|rr|har|dir)(ia|ias|iamos|iais|ian)\b/g) ?? []).some(w => !NOT_CONDITIONAL.has(w));
}

const C = (test, ok, miss, tag) => ({ test: typeof test === 'function' ? test : (raw, plain) => test.test(plain), ok, miss, tag });

// Everything a situation can ask for. `tag` groups the tracking.
export const CHECKS = {
  saludo: C(/\b(hola|buenos dias|buen dia|buenas tardes|buenas noches|buenas)\b/, 'Saludas.', 'Empieza con un saludo: «Hola», «Buenos días».', 'cortesía'),
  presentarse: C(/\b(me llamo|mi nombre es|soy [a-z]+)\b/, 'Dices quién eres.', 'Di tu nombre: «Me llamo…» o «Soy…».', 'presente'),
  nacionalidad: C(/\b(soy de|vengo de|naci en|nacionalidad|soy (brasil|portug|estadoun|britan|frances|italian|aleman|neerland|suec|japon|chin|canad)\w*)/, 'Dices de dónde eres.', 'Di de dónde eres: «Soy de…», «Soy brasileña».', 'presente'),
  trabajo: C(/\b(trabajo (en|como|de|con)|soy (la |el )?(nueva|nuevo|responsable|tecnica|tecnico|directora|director|jefa|jefe|especialista|gerente|coordinadora|coordinador|analista)|recursos humanos|rr\.? ?hh|personal)\b/, 'Explicas tu trabajo.', 'Explica tu puesto: «Trabajo en Recursos Humanos», «Soy la nueva responsable…».', 'vocabulario RR. HH.'),
  motivo: C(/\b(vengo (a|para|por)|tengo una (cita|reunion|entrevista)|estoy aqui (para|por)|para (la|una|las) (entrevista|reunion)|empiezo hoy|primer dia|hoy empiezo|busco|hoy tengo|tengo que (revisar|hacer|ver|organizar|preparar))\b/, 'Dices por qué estás aquí.', 'Explica por qué vienes: «Vengo para las entrevistas», «Hoy es mi primer día».', 'presente'),
  pregunta: C((raw) => /\?/.test(raw), 'Haces una pregunta.', 'Falta una pregunta. En español escrito va entre ¿ y ?.', 'preguntas'),
  cortesia: C(/\b(por favor|gracias|perdon|disculp\w*|podrias|podria|puedes|puede|te importa|le importa|seria posible|quisiera|me gustaria|si no te molesta|si no le molesta|te pido|le pido|os pido|les pido)\b/, 'Hablas con cortesía.', 'Suaviza la frase: «por favor», «¿puedes…?», «¿te importa…?».', 'cortesía'),
  negacion: C(/\b(no|nunca|tampoco|nada|nadie|ningun|ninguna|ninguno|jamas)\b/, 'Usas la negación.', 'La situación pide una negación: «no», «nunca», «tampoco».', 'negación'),
  porque: C(/\b(porque|ya que|puesto que|dado que|debido a|por eso|por lo tanto|asi que|como tiene|como es|para que|asi (nadie|todos|podemos|evitamos))\b/, 'Das una razón.', 'Justifica tu idea con «porque…» o «por eso…».', 'conectores'),
  comparativo: C(/\b(mas|menos) \w+ que\b|\b(mejor|peor|mayor|menor) que\b|\btan \w+ como\b|\bmas (experiencia|preparad\w*|segur\w*|tranquil\w*|clara?|claro)\b/, 'Comparas a los candidatos.', 'Compara: «más… que», «menos… que», «mejor que», «tan… como».', 'comparativos'),
  numero: C(/\d|\b(cero|uno|una|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|once|doce|quince|veinte|treinta|cuarenta|cincuenta|sesenta|setenta|ochenta|noventa|cien|ciento|doscientos|trescientos|cuatrocientos|quinientos|mil)\b/, 'Usas números.', 'Da la cifra exacta (por ejemplo «mil trescientos euros» o «1.300 €»).', 'números'),
  dinero: C((raw, plain) => /€/.test(raw) || /\b(euro|euros|salario|sueldo|nomina|importe|pago|transferencia|cobrar|cobras|cobra|pagar|pagamos|dinero|horas extra)\b/.test(plain), 'Hablas del dinero con las palabras justas.', 'Usa el vocabulario del dinero: «salario», «nómina», «euros», «transferencia».', 'números'),
  fecha: C(/\b(lunes|martes|miercoles|jueves|viernes|sabado|domingo|enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|manana|hoy|esta semana|la semana que viene|la proxima semana|el mes que viene|fin de mes|\d{1,2}\/\d{1,2}|el \d{1,2}|dia \d{1,2})\b/, 'Das una fecha.', 'Di cuándo: «el viernes», «mañana», «el día 15», «a fin de mes».', 'fechas'),
  pasado: C((raw, plain) => hasPast(raw, plain), 'Usas el pasado.', 'Cuenta lo que pasó en pasado: «hubo», «pagamos», «he hablado», «estaba».', 'pasado'),
  futuro: C((raw, plain) => hasFuture(raw, plain), 'Usas el futuro.', 'Habla de lo que va a pasar: «vamos a…», «habrá…», «cambiaremos…».', 'futuro'),
  condicional: C((raw, plain) => hasConditional(plain), 'Usas el condicional.', 'Propón con el condicional: «podríamos…», «sería mejor…», «yo cambiaría…».', 'condicional'),
  subjuntivo: C(/\b(quiero que|queremos que|es importante que|es necesario que|es fundamental que|te pido que|le pido que|les pido que|os pido que|ojala|para que|espero que|es imprescindible que|propondria que|propongo que analicemos|esperamos que|sugiero que|propongo que|recomiendo que|no creo que|antes de que|hasta que|cuando (tengamos|sepamos|termine|terminemos|llegue|haya|este|esten|sea|vuelva))\b/, 'Usas el subjuntivo donde toca.', 'Expresa deseo o necesidad con subjuntivo: «es importante que…», «les pido que…».', 'subjuntivo'),
  empatia: C(/\b(entiendo|comprendo|lo siento|siento (mucho|que)|lamento|es normal|tienes razon|tiene razon|imagino|que mal|que pena|perdon por|disculpa por|disculpe por|te escucho|le escucho|me pongo en tu lugar|se que|gracias por tu paciencia|gracias por su paciencia|tienes motivos|merecen respeto|os entiendo|te entiendo|le entiendo)\b/, 'Muestras empatía.', 'Primero, muestra empatía: «Entiendo», «Lo siento», «Tienes razón».', 'empatía'),
  solucion: C(/\b(propongo|vamos a|podemos|podriamos|solucion|la idea es|te ofrezco|le ofrezco|voy a|hablare|hablo con|cambiamos|cambiar|mover|nueva norma|turnos|horario|compramos|corregimos|corregir|pagamos|devolver|devuelve|organizar|acordar|acuerdo|mi propuesta|instalamos|reunirnos|sentarnos)\b/, 'Propones una solución.', 'Propón una solución concreta: «Propongo…», «Vamos a…», «Podemos…».', 'resolver conflictos'),
  feedback: C(/\b(buen trabajo|gran trabajo|has hecho|hiciste|me gusta|me gusto|felicidades|enhorabuena|gracias por|podrias mejorar|puedes mejorar|te recomiendo|la proxima vez|punto fuerte|has mejorado|lo hiciste bien|lo has hecho bien|agradecer|agradeceros|gracias a (vuestra|su|tu|todos)|habeis estado|habeis trabajado|excelente|brillante|tu trabajo es|he visto a un equipo)\b/, 'Das feedback.', 'Da feedback: algo positivo («Buen trabajo con…») y algo a mejorar («La próxima vez…»).', 'feedback'),
  formal: C(/\b(usted|ustedes|le|les|su|sus|puede|podria|quisiera|estimad[oa]s?)\b/, 'Usas el registro formal.', 'Aquí conviene «usted»: «¿Puede…?», «Le explico…».', 'registro'),
  conectores: C(/\b(sin embargo|ademas|por un lado|por otro lado|en primer lugar|en segundo lugar|por ultimo|no obstante|aun asi|en cambio|por lo tanto|en resumen|de hecho|es decir|mientras que|a pesar de|por eso|en cuanto a|respecto a|aunque|sobre todo|asimismo|a continuacion|en paralelo|mientras tanto|lo cual|de modo que)\b/, 'Organizas el discurso con conectores.', 'Organiza las ideas: «en primer lugar», «sin embargo», «por último».', 'conectores'),
  decision: C(/\b(elijo|he elegido|elegimos|decido|he decidido|hemos decidido|prefiero|contratamos|contrato a|vamos a contratar|recomiendo|mi decision|me quedo con|la mejor opcion|mi eleccion|seleccionamos|apuesto por|propongo|mi propuesta|mi recomendacion|invertiria|propondria)\b/, 'Comunicas una decisión clara.', 'Di tu decisión sin rodeos: «Elijo a…», «He decidido…», «Recomiendo…».', 'decisiones'),
  disculpa: C(/\b(perdon|disculp\w*|lo siento|lo sentimos|lamentamos|lamento|pedimos disculpas|pido disculpas)\b/, 'Pides disculpas.', 'Reconoce el error: «Lo siento», «Pedimos disculpas».', 'cortesía'),
  despedida: C(/\b(saludos|atentamente|un saludo|cordialmente|gracias|un abrazo|quedo a (tu|su) disposicion)\b/, 'Cierras el mensaje.', 'Cierra el correo: «Un saludo», «Atentamente».', 'escritura profesional'),
  calma: C(/\b(tranquil\w*|calma|no te preocupes|no se preocupe|no os preocupeis|no es verdad|es mentira|no es cierto|es un rumor|rumor|nadie (va a ser|sera|esta) despedid\w*|no vamos a despedir|no hay despidos)\b/, 'Calmas a la persona.', 'Tranquiliza: «Tranquilo», «No es verdad», «No te preocupes».', 'resolver conflictos'),
  orden: C(/\b(primero|despues|luego|finalmente|al final|antes|lo mas urgente|prioridad|en primer lugar|segundo|tercero|por ultimo)\b/, 'Ordenas los pasos.', 'Ordena los pasos: «Primero…, después…, al final…».', 'organización'),
  anuncio: C(/\b(equipo|companeros|companeras|a todos|a todas|todo el mundo|os|les informo|os informo|anuncio|queremos contaros|quiero contaros|quiero informar)\b/, 'Te diriges al equipo.', 'Dirígete al grupo: «Equipo…», «Compañeros, os informo…».', 'comunicación interna'),
};

// ------------------------------------------------------------ interference
// Portuguese words and false friends. Each one says what to write in Spanish
// and, for false friends, why it is dangerous at work.
const PT_WORDS = {
  nao: 'no', voce: 'tú / usted', obrigado: 'gracias', obrigada: 'gracias', eu: 'yo', tenho: 'tengo', estou: 'estoy', sou: 'soy',
  muito: 'muy / mucho', muita: 'mucha', falar: 'hablar', fala: 'habla', com: 'con', entao: 'entonces', tambem: 'también',
  funcionario: 'empleado', funcionarios: 'empleados', funcionaria: 'empleada', demissao: 'despido', ferias: 'vacaciones',
  chefe: 'jefe', ajuda: 'ayuda', ola: 'hola', prazer: 'encantada / mucho gusto', sim: 'sí', agora: 'ahora', hoje: 'hoy', amanha: 'mañana',
  ontem: 'ayer', depois: 'después', ela: 'ella', ele: 'él', sao: 'son', bem: 'bien', cedo: 'temprano', pouco: 'poco',
  coisa: 'cosa', coisas: 'cosas', pessoa: 'persona', pessoas: 'personas', dinheiro: 'dinero', trabalho: 'trabajo',
  trabalhar: 'trabajar', melhor: 'mejor', senhor: 'señor', senhora: 'señora', reuniao: 'reunión',
  obrigatorio: 'obligatorio', ainda: 'todavía', onde: 'dónde', quanto: 'cuánto',
  porem: 'pero / sin embargo', voces: 'ustedes / vosotros', gostaria: 'me gustaría', gosto: 'me gusta',
  minha: 'mi', meu: 'mi', seu: 'su', sua: 'su', isso: 'eso', isto: 'esto', esse: 'ese', essa: 'esa', agradeco: 'agradezco',
};
const FALSE_FRIENDS = [
  { re: /\b(estoy|me siento|me senti|estaba|quede) (muy |un poco |tan )?embarazad[ao]\b/, word: 'embarazada', fix: '«avergonzada» o «incómoda»', why: '«Embarazada» significa grávida. Para «embaraçada» se dice «avergonzada».' },
  { re: /\b(ligar|ligo|ligue|ligamos|ligas|liga|ligaron|ligou)\b(?! con alguien)/, word: 'ligar', fix: '«llamar»', why: 'En español «ligar» es coquetear. Para «ligar para alguém» se dice «llamar a alguien».' },
  { re: /\b(trabajo|estoy|estamos|voy|vamos) (en|a|al) (el |un |mi )?escritorio\b/, word: 'escritorio', fix: '«oficina»', why: 'El «escritorio» es el mueble (la mesa). El lugar de trabajo es la «oficina».' },
  { re: /\besquisit[oa]s?\b|\bexquisit[oa]s? (candidat|persona|comportamiento|situacion)/, word: 'exquisito', fix: '«raro» o «extraño»', why: '«Exquisito» significa delicioso o muy fino. «Esquisito» se dice «raro».' },
  { re: /\bapelido\b|\bapellido (es|era) [a-z]+inho\b/, word: 'apelido', fix: '«apodo»', why: 'El «apellido» es el nombre de familia. El «apelido» portugués es el «apodo».' },
  { re: /\b(tirar|tiro|tiramos|tiras) (una |la |unas |las )?fotos?\b/, word: 'tirar una foto', fix: '«sacar / hacer una foto»', why: 'En español «tirar» es lanzar o echar a la basura.' },
  { re: /\bbrincar\b|\bbrincadeira\b|\bestoy brincando\b/, word: 'brincar', fix: '«bromear» o «jugar»', why: '«Brincar» en español es saltar. «Estou brincando» se dice «estoy bromeando».' },
  { re: /\b(la|una|mi|nuestra) firma (es|tiene|necesita|busca|contrata)\b/, word: 'firma', fix: '«empresa»', why: 'La «firma» es la signatura en un documento. Para la compañía, di «empresa».' },
  { re: /\bacordar(me|se)? (temprano|a las|cedo)\b|\bme acorde a las\b/, word: 'acordar', fix: '«despertarse»', why: '«Acordar» en español es llegar a un acuerdo. «Acordar cedo» es «despertarse temprano».' },
  { re: /\b(un|el|este|ese) rato (en la oficina|de la oficina|en la cocina|en el armario)\b/, word: 'rato', fix: '«ratón»', why: 'Un «rato» es un momento. El animal es un «ratón».' },
  { re: /\bpronto (para|a) (empezar|trabajar|la entrevista)\b/, word: 'pronto', fix: '«listo / lista»', why: '«Pronto» en español significa «enseguida» o «temprano». «Estou pronto» se dice «estoy listo».' },
];
const PATTERNS = [
  { re: /\b\w+coes\b|\b\w+cao\b/, msg: 'Las palabras en «-ção / -ções» terminan en «-ción / -ciones» en español (reunião → reunión, informação → información).' },
  { re: /\b\w+agem\b/, msg: 'Las palabras en «-agem» terminan en «-aje» (mensagem → mensaje, viagem → viaje).' },
  { re: /\b(?!senhor)\w*nh\w*\b/, msg: 'El sonido «nh» se escribe «ñ» en español (senhora → señora, ganhar → ganar).' },
  { re: /\b\w*lh\w*\b/, msg: 'El grupo «lh» suele ser «j» o «ll» en español (trabalho → trabajo, melhor → mejor).' },
];
const SPANISH_OK = new Set(['sao', 'sim', 'bem', 'fala', 'com']);

/** Portuguese interference and false friends in a text. */
export function interference(raw) {
  const plain = plainText(raw);
  const words = plain.match(/[a-z]+/g) ?? [];
  const out = [];
  const seen = new Set();
  for (const w of words) {
    if (seen.has(w) || !(w in PT_WORDS)) continue;
    // A few Portuguese words are also Spanish strings in context («ola» is a wave, «com» in an email): skip them in long texts.
    if (SPANISH_OK.has(w) && words.length > 6) continue;
    seen.add(w);
    out.push({ kind: 'portugués', word: w, fix: `«${PT_WORDS[w]}»`, why: `«${w}» es portugués. En español: ${PT_WORDS[w]}.` });
  }
  for (const f of FALSE_FRIENDS) if (f.re.test(plain)) out.push({ kind: 'falso amigo', word: f.word, fix: f.fix, why: f.why });
  for (const p of PATTERNS) {
    const m = plain.match(p.re);
    if (m && !seen.has(m[0]) && !/^(senor|senora|ninguno|ninguna|ningun)$/.test(m[0]) && !(m[0] in PT_WORDS)) { seen.add(m[0]); out.push({ kind: 'portugués', word: m[0], fix: '', why: p.msg }); }
  }
  // Common learner slips in Spanish itself.
  if (/\b(yo )?soy de acuerdo\b/.test(plain)) out.push({ kind: 'gramática', word: 'soy de acuerdo', fix: '«estoy de acuerdo»', why: 'Con «de acuerdo» se usa «estar».' });
  if (/\b(la|una) problema\b/.test(plain)) out.push({ kind: 'gramática', word: 'la problema', fix: '«el problema»', why: '«Problema» es masculino: el problema, un problema.' });
  if (/\b(la|una) (sistema|tema|programa)\b/.test(plain)) out.push({ kind: 'gramática', word: plain.match(/\b(la|una) (sistema|tema|programa)\b/)[0], fix: '«el sistema / el tema / el programa»', why: 'Estas palabras en «-ma» son masculinas.' });
  if (/\bme llamo es\b/.test(plain)) out.push({ kind: 'gramática', word: 'me llamo es', fix: '«me llamo…» o «mi nombre es…»', why: 'Elige una de las dos estructuras.' });
  if (/\b(soy|es|eres|son) (cansad|nervios|enfadad|preocupad|content)[oa]s?\b/.test(plain)) out.push({ kind: 'gramática', word: 'ser + estado', fix: '«estoy cansada / nerviosa…»', why: 'Para los estados de ánimo se usa «estar».' });
  if (/\?/.test(raw) && !/¿/.test(raw)) out.push({ kind: 'ortografía', word: '¿', fix: '¿…?', why: 'En español la pregunta se abre con «¿».' });
  return out;
}

/**
 * Reads one answer against a rubric.
 * @param {string} raw what the student wrote
 * @param {{ need?: string[]; extra?: string[]; min?: number }} rubric
 */
export function evaluate(raw, rubric) {
  const plain = plainText(raw);
  const words = wordsIn(raw);
  const need = rubric.need ?? [];
  const extra = rubric.extra ?? [];
  const ok = [], miss = [], bonus = [];
  for (const key of need) {
    const check = CHECKS[key];
    if (!check) continue;
    (check.test(raw, plain) ? ok : miss).push({ key, text: check.test(raw, plain) ? check.ok : check.miss, tag: check.tag });
  }
  for (const key of extra) {
    const check = CHECKS[key];
    if (check?.test(raw, plain)) bonus.push({ key, text: check.ok, tag: check.tag });
  }
  const issues = interference(raw);
  const serious = issues.filter(i => i.kind !== 'ortografía');
  const short = words < (rubric.min ?? 1);
  let verdict = 'otra';
  if (!miss.length && !short) verdict = serious.length ? 'casi' : 'bien';
  else if (ok.length >= Math.ceil(need.length / 2) && words >= Math.ceil((rubric.min ?? 1) / 2)) verdict = 'casi';
  return { words, short, ok, miss, bonus, issues, verdict };
}

// ------------------------------------------------------------ interviews
// What a typed interview question is about. `illegal` questions (age,
// children, religion…) are discrimination: the candidate is uncomfortable and
// the coach explains why.
export const INTENTS = [
  { id: 'ilegal', re: /\b(edad|cuantos anos (tiene|tienes)|que edad|hijos|hijas|embarazad|casad[oa]|soltera?o?|novi[oa]|religion|pareja|marido|esposa|planea[s]? tener|quiere[s]? tener (hijos|familia)|de que partido)\b/ },
  { id: 'nombre', re: /\b(como (te llamas|se llama)|su nombre|tu nombre|presentate|presentese|hablame de ti|hableme de usted|quien eres|quien es usted|cuentame (sobre|de) ti|cuenteme (sobre|de) usted)\b/ },
  { id: 'experiencia', re: /\b(experiencia|donde (trabajas|trabaja|trabajaste|trabajo|trabajabas|trabajaba)|empleo anterior|ultimo (trabajo|empleo|puesto)|a que te dedicas|a que se dedica|puesto anterior|trabajas ahora|trabaja ahora|cuantos anos (trabaj|llev))/ },
  { id: 'estudios', re: /\b(estudi\w*|formacion|titulo|universidad|carrera|curso|master|certificad)/ },
  { id: 'idiomas', re: /\b(idioma|idiomas|lengua|lenguas|ingles|portugues|frances|aleman|hablas|habla (otros|otro|algun))/ },
  { id: 'fortalezas', re: /\b(fortaleza|fortalezas|punto fuerte|puntos fuertes|cualidad|cualidades|virtud|por que (deberiamos|tendriamos que|debemos) contratar|que (te|le) hace (buen|buena|ideal)|que (puedes|puede) aportar|que aporta)/ },
  { id: 'debilidades', re: /\b(debilidad|debilidades|defecto|defectos|punto debil|puntos debiles|que (tienes|tiene) que mejorar|que (puedes|puede) mejorar|area de mejora)/ },
  { id: 'disponibilidad', re: /\b(cuando (puede|puedes|podria|podrias) (empezar|incorporar)|disponib\w*|empezar|incorporarse|incorporarte|horario|turno|jornada|viajar)/ },
  { id: 'salario', re: /\b(salario|sueldo|cuanto (quiere|quieres|quisiera|espera|esperas|pide|pides) (ganar|cobrar)?|pretension|expectativas? (salarial|economica)|ganar|cobrar|banda salarial)/ },
  { id: 'motivacion', re: /\b(por que (quiere|quieres|le gustaria|te gustaria|elegiste|eligio|esta empresa|nuestra empresa|este puesto)|motiva\w*|que (te|le) interesa|por que (te|le) interesa|que sabe[s]? de (nosotros|la empresa))/ },
  { id: 'conflicto', re: /\b(conflicto|conflictos|situacion dificil|problema dificil|alguna vez|un ejemplo|cuentame una situacion|cuenteme una situacion|como reaccion|como resolv|como gestion|bajo presion|estres)/ },
];
export function intentOf(question) {
  const plain = plainText(question);
  for (const i of INTENTS) if (i.re.test(plain)) return i.id;
  return null;
}
/** How a question is written: ¿…?, an interrogative word or a verb first. */
export function questionForm(raw) {
  const t = String(raw ?? '').trim();
  const notes = [];
  if (!/\?$/.test(t)) notes.push('Una pregunta termina con «?».');
  else if (!/^¿/.test(t)) notes.push('En español la pregunta empieza con «¿».');
  return notes;
}

// ------------------------------------------------------------ tracking
// The notebook: recurring mistakes, vocabulary gaps and how each grammar
// area is going. Stored with the progress; nothing is sent anywhere.
export function emptyStats() {
  return { tags: {}, issues: {}, vocab: [], attempts: 0 };
}
export function recordAnswer(stats, result, text, vocabulary = []) {
  const s = { tags: { ...stats.tags }, issues: { ...stats.issues }, vocab: [...stats.vocab], attempts: stats.attempts + 1 };
  for (const item of result.ok ?? []) { const t = s.tags[item.tag] ?? { ok: 0, miss: 0 }; s.tags[item.tag] = { ...t, ok: t.ok + 1 }; }
  for (const item of result.bonus ?? []) { const t = s.tags[item.tag] ?? { ok: 0, miss: 0 }; s.tags[item.tag] = { ...t, ok: t.ok + 1 }; }
  for (const item of result.miss ?? []) { const t = s.tags[item.tag] ?? { ok: 0, miss: 0 }; s.tags[item.tag] = { ...t, miss: t.miss + 1 }; }
  for (const issue of result.issues ?? []) {
    const key = `${issue.kind}: ${issue.word}`;
    const prev = s.issues[key] ?? { count: 0, fix: issue.fix, why: issue.why, kind: issue.kind };
    s.issues[key] = { ...prev, count: prev.count + 1 };
  }
  const plain = plainText(text);
  for (const word of vocabulary) {
    const w = plainText(word);
    if (w && plain.includes(w) && !s.vocab.includes(word)) s.vocab.push(word);
  }
  return s;
}
/** The three most repeated mistakes, most frequent first. */
export function recurring(stats, n = 3) {
  return Object.entries(stats.issues).sort((a, b) => b[1].count - a[1].count).slice(0, n).map(([key, v]) => ({ key, ...v }));
}
