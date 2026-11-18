/**
 * Clase de nivelación (ID 262): data for the phonetics and countries sections.
 * Plain data so the audio generator (scripts/generate-nivelacion-audio.py) and the
 * page read the same source. Every text is original SpanishCue material.
 *
 * Voices are native male Edge voices on purpose: this is a pronunciation class, so the
 * base voice is Mexican (seseo, [ʝ]), Spain shows /θ/, Argentina shows the «sh» of Y/LL,
 * and each country card is read by a voice from that country.
 */
export const AUDIO_ROOT = '/audio/nivelacion';
export const BASE_VOICE = 'es-MX-JorgeNeural';
const SPAIN = 'es-ES-AlvaroNeural';
const RIVER = 'es-AR-TomasNeural';

/** The 27 letters with their names. `say` is what the voice reads. */
export const alphabet = [
  ['A', 'a'], ['B', 'be'], ['C', 'ce'], ['D', 'de'], ['E', 'e'], ['F', 'efe'], ['G', 'ge'], ['H', 'hache'], ['I', 'i'],
  ['J', 'jota'], ['K', 'ka'], ['L', 'ele'], ['M', 'eme'], ['N', 'ene'], ['Ñ', 'eñe'], ['O', 'o'], ['P', 'pe'], ['Q', 'cu'],
  ['R', 'erre'], ['S', 'ese'], ['T', 'te'], ['U', 'u'], ['V', 'uve'], ['W', 'uve doble'], ['X', 'equis'], ['Y', 'ye'], ['Z', 'zeta'],
].map(([letter, name], index) => ({ letter, name, clip: `abc-${String(index + 1).padStart(2, '0')}` }));

/** English reference for each Spanish vowel. */
export const vowels = [
  { letter: 'A', color: '#f4a52d', mouth: 'Boca bien abierta, lengua abajo.', mouthEn: 'Mouth wide open, tongue low.', like: 'Como la a de «father».', likeEn: 'Like the a in “father”.',
    syllables: 'ma, pa, la, sa, ta, na', words: ['casa', 'mapa', 'mañana', 'banana'], phrase: 'La gata blanca baila salsa hasta la mañana.', phraseEn: 'The white cat dances salsa until morning.' },
  { letter: 'E', color: '#30bda2', mouth: 'Boca media, labios relajados. No termina en «i».', mouthEn: 'Mouth half open, relaxed lips. It never ends in an “ee” sound.', like: 'Como la e de «bed», sin deslizar.', likeEn: 'Like the e in “bed”, with no glide.',
    syllables: 'me, pe, le, se, te, ne', words: ['mesa', 'verde', 'leche', 'tener'], phrase: 'El jefe de Pepe bebe té verde en el tren.', phraseEn: 'Pepe’s boss drinks green tea on the train.' },
  { letter: 'I', color: '#e6c229', mouth: 'Sonrisa pequeña, lengua arriba y adelante.', mouthEn: 'A small smile, tongue high and forward.', like: 'Como «see», pero más corta.', likeEn: 'Like “see”, but shorter.',
    syllables: 'mi, pi, li, si, ti, ni', words: ['vino', 'libro', 'amigo', 'difícil'], phrase: 'Mi tía Lili vive sin prisa y dice que sí.', phraseEn: 'My aunt Lili lives without hurry and says yes.' },
  { letter: 'O', color: '#2e9ed9', mouth: 'Labios redondos y quietos. No termina en «u».', mouthEn: 'Round lips that stay still. It never ends in an “oo” sound.', like: 'Como el inicio de «go», sin la u final.', likeEn: 'Like the start of “go”, without the final glide.',
    syllables: 'mo, po, lo, so, to, no', words: ['poco', 'todo', 'ocho', 'color'], phrase: 'Rodolfo compró dos toros rojos por poco.', phraseEn: 'Rodolfo bought two red bulls for very little.' },
  { letter: 'U', color: '#e8657a', mouth: 'Labios redondos y cerrados, lengua atrás.', mouthEn: 'Round, almost closed lips, tongue back.', like: 'Como «food», estable y sin «y» delante.', likeEn: 'Like “food”, steady, with no “y” before it.',
    syllables: 'mu, pu, lu, su, tu, nu', words: ['luna', 'uno', 'mucho', 'música'], phrase: 'Lulú sube su cucurucho a la luna.', phraseEn: 'Lulú takes her ice-cream cone up to the moon.' },
].map(v => ({ ...v, id: `vocal-${v.letter.toLowerCase()}` }));

/** Words that look the same in English: the vowels show the difference. */
export const cognates = ['banana', 'chocolate', 'animal', 'hospital', 'doctor', 'idea', 'radio', 'popular'];

/**
 * Consonant cards. `clips` are the playable rows: [key, label, text, voice?].
 * `u` marks the letters to underline in the label (plain substring match, case-insensitive).
 */
export const consonants = [
  { id: 'b-v', nav: 'B · V', letters: [['B', 'be'], ['V', 'uve']], equals: true, ipa: '/b/', color: '#77b94a',
    rule: 'La **B** y la **V** suenan igual. No existe en español el sonido de la «v» inglesa.', ruleEn: 'B and V sound the same. Spanish has no English “v” sound: the lips touch, the teeth stay out of it.',
    tip: 'Entre vocales el sonido es más suave: los labios casi no se tocan (la**b**io, u**v**a).', tipEn: 'Between vowels it gets softer: the lips barely touch.',
    rows: [['silabas', 'ba, be, bi, bo, bu · va, ve, vi, vo, vu', 'ba, be, bi, bo, bu. va, ve, vi, vo, vu.'], ['palabras', 'beso, vaso, boca, vaca, abuelo, uva, nube', 'beso. vaso. boca. vaca. abuelo. uva. nube.'], ['frase', 'Un barco viejo viaja bien con buen viento.', 'Un barco viejo viaja bien con buen viento.']], u: 'bv' },
  { id: 'c-z', nav: 'C · Z · S', letters: [['C', 'ce'], ['Z', 'zeta']], equals: true, ipa: '/s/ · /θ/', color: '#e8657a',
    rule: 'La **C** de **ce, ci** y la **Z** de **za, zo, zu** suenan igual entre sí. En el mundo hispano hay dos maneras de decirlas.', ruleEn: 'C in “ce, ci” and Z in “za, zo, zu” share one sound. The Spanish-speaking world says it in two ways.',
    tip: 'Las dos son correctas. Tú eliges una y la mantienes.', tipEn: 'Both are correct. You choose one and stay consistent.',
    rows: [['seseo', '① /s/ · Toda Latinoamérica, Canarias y parte de Andalucía: suenan como la S.', 'cena. cielo. zapato. zona. azul. Cecilia cocina cinco cerezas y zanahorias azules.'], ['distincion', '② /θ/ · Centro y norte de España: como la «th» de «think».', 'cena. cielo. zapato. zona. azul. Cecilia cocina cinco cerezas y zanahorias azules.', SPAIN], ['palabras', 'cena, cielo, zapato, zona, azul, cinco', 'cena. cielo. zapato. zona. azul. cinco.']], u: 'cz' },
  { id: 'c-k-q', nav: 'C · K · Q', letters: [['C', 'ce'], ['K', 'ka'], ['Q', 'cu']], equals: true, ipa: '/k/', color: '#f4a52d',
    rule: 'El sonido /k/ se escribe **ca, co, cu** y **que, qui**. En «que, qui» la **u** no suena. La **K** aparece en pocas palabras, casi todas de otras lenguas.', ruleEn: 'The /k/ sound is written “ca, co, cu” and “que, qui”. The u in “que, qui” is silent. K is rare and mostly appears in borrowed words.',
    tip: 'Sin aire: pon la mano delante de la boca. En «casa» no debe salir un soplo como en «cat».', tipEn: 'No puff of air: hold a hand in front of your mouth. “casa” has none of the breath of “cat”.',
    rows: [['silabas', 'ca, que, qui, co, cu', 'ca, que, qui, co, cu.'], ['palabras', 'casa, cosa, cuna, queso, quince, kilo, koala', 'casa. cosa. cuna. queso. quince. kilo. koala.'], ['frase', '¿Quién quiere queso con café en casa de Carlos?', '¿Quién quiere queso con café en casa de Carlos?']], u: 'ckq' },
  { id: 'ch', nav: 'CH', letters: [['CH', 'che']], ipa: '/tʃ/', color: '#30bda2',
    rule: '**C + H** forman un solo sonido, el de «chair». No es una letra del abecedario: es un dígrafo, dos letras para un sonido.', ruleEn: 'C + H make one sound, as in “chair”. It is not a letter of the alphabet: it is a digraph, two letters for one sound.',
    tip: 'Nunca suena como «sh» ni como «k»: «chef» y «chocolate» empiezan igual.', tipEn: 'It never sounds like “sh” or “k”.',
    rows: [['silabas', 'cha, che, chi, cho, chu', 'cha, che, chi, cho, chu.'], ['palabras', 'chico, noche, leche, mucho, chocolate', 'chico. noche. leche. mucho. chocolate.'], ['frase', 'Ocho chicos chilenos comen churros con chocolate.', 'Ocho chicos chilenos comen churros con chocolate.']], u: 'ch' },
  { id: 'd-t-p', nav: 'D · T · P', letters: [['D', 'de'], ['T', 'te'], ['P', 'pe']], ipa: '/d/ /t/ /p/', color: '#9d70d4',
    rule: 'La **T** y la **D** se hacen con la lengua en los dientes, no detrás. La **P** y la **T** salen sin aire. Entre vocales la **D** es muy suave, parecida a la «th» de «this».', ruleEn: 'T and D touch the teeth, not the ridge behind them. P and T have no puff of air. Between vowels D is very soft, close to the “th” in “this”.',
    tip: '«Todo» no suena como «toe-doe»: la segunda sílaba es suave, casi «to-tho».', tipEn: 'In “todo” the second syllable is soft.',
    rows: [['silabas', 'da, de, di, do, du · ta, te, ti, to, tu · pa, pe, pi, po, pu', 'da, de, di, do, du. ta, te, ti, to, tu. pa, pe, pi, po, pu.'], ['palabras', 'dedo, nada, todo, tomate, papá, poco, puerta', 'dedo. nada. todo. tomate. papá. poco. puerta.'], ['frase', 'Tu tío Pedro te da todo el pan de la tienda.', 'Tu tío Pedro te da todo el pan de la tienda.']], u: 'dtp' },
  { id: 'g-gu', nav: 'G · GU', letters: [['G', 'ge'], ['GU', 'ge + u']], ipa: '/g/', color: '#2e9ed9',
    rule: 'El sonido /g/ de «go» se escribe **ga, go, gu** y **gue, gui**. En «gue, gui» la **u** no suena. Con diéresis sí suena: **güe, güi**.', ruleEn: 'The /g/ of “go” is written “ga, go, gu” and “gue, gui”. The u in “gue, gui” is silent; with two dots (ü) it is pronounced.',
    tip: 'Guitarra = «gi-ta-rra», sin «u». Pingüino = «pin-gwi-no».', tipEn: 'Guitarra has no “w” sound. Pingüino does.',
    rows: [['silabas', 'ga, gue, gui, go, gu · güe, güi', 'ga, gue, gui, go, gu. güe, güi.'], ['palabras', 'gato, guerra, guitarra, gota, gusto, pingüino, vergüenza', 'gato. guerra. guitarra. gota. gusto. pingüino. vergüenza.'], ['frase', 'El gato de Guille toca la guitarra con ganas.', 'El gato de Guille toca la guitarra con ganas.']], u: 'g' },
  { id: 'g-j', nav: 'G · J', letters: [['G', 'ge'], ['J', 'jota']], equals: true, ipa: '/x/', color: '#f1754d',
    rule: 'La **J** siempre, y la **G** en **ge, gi**, tienen el mismo sonido: fuerte, desde la garganta, parecido a una «h» inglesa con más fricción.', ruleEn: 'J always, and G in “ge, gi”, share one sound: strong, from the throat, like an English “h” with more friction.',
    tip: 'La «j» nunca suena como en «jump». «Jirafa» y «gigante» empiezan igual.', tipEn: 'J never sounds like the j in “jump”.',
    rows: [['silabas', 'ja, je, ji, jo, ju · ge, gi', 'ja, je, ji, jo, ju. ge, gi.'], ['palabras', 'gente, gigante, jamón, jefe, jirafa, joven, jugo', 'gente. gigante. jamón. jefe. jirafa. joven. jugo.'], ['frase', 'El jefe gigante juega al ajedrez con Jorge.', 'El jefe gigante juega al ajedrez con Jorge.']], u: 'gj' },
  { id: 'h', nav: 'H', letters: [['H', 'hache']], ipa: 'muda', color: '#8894a8',
    rule: 'La **H** no suena nunca. Se escribe, pero no se pronuncia.', ruleEn: 'H is always silent. You write it, you never say it.',
    tip: 'El sonido de la «h» inglesa se escribe con J: «jamón», no «hamón». Solo con la C forma un sonido: CH.', tipEn: 'The English “h” sound is spelled with J in Spanish. Only with C does H make a sound: CH.',
    rows: [['silabas', 'ha, he, hi, ho, hu', 'ha, he, hi, ho, hu.'], ['palabras', 'hola, hora, hijo, hotel, ahora, huevo', 'hola. hora. hijo. hotel. ahora. huevo.'], ['frase', 'Hoy Hugo hace helado en el hotel.', 'Hoy Hugo hace helado en el hotel.']], u: 'h' },
  { id: 'll-y', nav: 'LL · Y', letters: [['Y', 'ye'], ['LL', 'elle']], equals: true, ipa: '/ʝ/', color: '#e6c229',
    rule: 'La **Y** y la **LL** suenan igual en casi todo el mundo hispano, parecido a la «y» de «yes» con más fuerza. Sola o al final de palabra, la **y** suena como la vocal **i**: «y», «hoy», «muy».', ruleEn: 'Y and LL sound the same almost everywhere, like the y in “yes” with more force. Alone or at the end of a word, y sounds like the vowel i.',
    tip: 'En Argentina y Uruguay suenan como «sh»: «yo» ≈ «sho», «calle» ≈ «cashe».', tipEn: 'In Argentina and Uruguay they sound like “sh”.',
    rows: [['palabras', 'yo, ayer, playa, llave, calle, lluvia, pollo', 'yo. ayer. playa. llave. calle. lluvia. pollo.'], ['frase', 'Yo llego a la playa cuando llueve en la calle.', 'Yo llego a la playa cuando llueve en la calle.'], ['rioplatense', '🇦🇷 🇺🇾 La misma frase con el sonido rioplatense.', 'yo. ayer. playa. llave. calle. lluvia. pollo. Yo llego a la playa cuando llueve en la calle.', RIVER]], u: 'yl' },
  { id: 'n', nav: 'Ñ', letters: [['Ñ', 'eñe']], ipa: '/ɲ/', color: '#e8657a',
    rule: 'La **Ñ** es una letra propia, distinta de la N. Suena como «ny» en «canyon».', ruleEn: 'Ñ is its own letter, different from N. It sounds like the “ny” in “canyon”.',
    tip: 'Cambia el significado: «ano» y «año» son palabras muy distintas.', tipEn: 'It changes the meaning: “ano” and “año” are very different words.',
    rows: [['silabas', 'ña, ñe, ñi, ño, ñu', 'ña, ñe, ñi, ño, ñu.'], ['palabras', 'año, niño, mañana, España, señor, montaña', 'año. niño. mañana. España. señor. montaña.'], ['frase', 'El niño español sueña con la montaña cada mañana.', 'El niño español sueña con la montaña cada mañana.']], u: 'ñ' },
  { id: 'r-rr', nav: 'R · RR', letters: [['R', 'erre']], ipa: '/ɾ/ · /r/', color: '#77b94a',
    rule: 'Hay dos erres. La **suave** es un solo toque de la lengua, como la «tt» de «butter» en inglés americano. La **fuerte** vibra varias veces: se escribe **RR**, y también es fuerte la **R** al inicio de palabra y después de **l, n, s**.', ruleEn: 'There are two r sounds. The soft one is a single tap, like the “tt” in American “butter”. The strong one trills: it is written RR, and R is also strong at the start of a word and after l, n, s.',
    tip: 'Cambia el significado: pero / perro · caro / carro · ahora / ahorra.', tipEn: 'It changes the meaning: pero / perro · caro / carro.',
    rows: [['suave', '① Suave: pero, caro, toro, María, tres, puerta', 'pero. caro. toro. María. tres. puerta.'], ['fuerte', '② Fuerte: perro, carro, rosa, rico, Enrique, alrededor', 'perro. carro. rosa. rico. Enrique. alrededor.'], ['pares', 'pero · perro — caro · carro — ahora · ahorra', 'pero, perro. caro, carro. ahora, ahorra.'], ['frase', 'El perro de Rosa corre rápido por la carretera.', 'El perro de Rosa corre rápido por la carretera.']], u: 'r' },
  { id: 'w-x', nav: 'W · X', letters: [['W', 'uve doble'], ['X', 'equis']], ipa: '/w/ · /ks/', color: '#374f76',
    rule: 'La **W** solo aparece en palabras de otras lenguas y suena como «u» o «gu». La **X** suena **/ks/** entre vocales y al final, **/s/** al inicio de palabra, y como **J** en algunos nombres: México, Texas, Oaxaca.', ruleEn: 'W only appears in borrowed words and sounds like “u” or “gu”. X is /ks/ between vowels and at the end, /s/ at the start of a word, and like Spanish J in some names: México, Texas, Oaxaca.',
    tip: '«México» se pronuncia «Méjico», pero se escribe con X.', tipEn: '“México” is pronounced with the J sound and written with X.',
    rows: [['w', 'W: web, wifi, kiwi, sándwich, Washington', 'web. wifi. kiwi. sándwich. Washington.'], ['x', 'X: examen, taxi, éxito, texto · xilófono · México, Texas', 'examen. taxi. éxito. texto. xilófono. México. Texas.'], ['frase', 'El taxi de México llega al examen sin wifi.', 'El taxi de México llega al examen sin wifi.']], u: 'wx' },
];

/** One sentence in seven accents. It holds Y, LL, J, C/Z, final S and both R sounds. */
export const accentSentence = 'Yo me llamo Julio. Ayer cené pollo con arroz en la calle Zaragoza, cerca de las dos plazas.';
export const accents = [
  { id: 'es', flag: 'es', name: 'España', sub: 'centro y norte', voice: SPAIN, traits: ['**C/Z** con /θ/: «cené», «Zaragoza» y «plazas» suenan con la lengua entre los dientes.', 'La **S** suena más «silbada».', 'Usan **vosotros**: «¿Vosotros **queréis** café?».'], en: 'C/Z with /θ/, a sharper S, and “vosotros” for informal plural “you”.' },
  { id: 'mx', flag: 'mx', name: 'México', sub: 'centro', voice: BASE_VOICE, traits: ['**Seseo**: C, Z y S suenan igual.', 'Consonantes muy claras; las vocales sin acento pueden sonar breves.', 'Plural siempre con **ustedes**.'], en: 'C, Z and S sound the same; very clear consonants; “ustedes” for every plural “you”.' },
  { id: 'ar', flag: 'ar', name: 'Argentina y Uruguay', sub: 'rioplatense', voice: RIVER, traits: ['**Y / LL** suenan «sh»: «yo», «llamo», «pollo», «calle».', 'Se usa **vos**: «vos **tenés**», «vos **querés**», «vos **sos**».', 'La **S** antes de consonante se aspira: «las dos» ≈ «lah dos».'], en: 'Y/LL sound like “sh”; “vos” replaces “tú” with its own verb forms; S before a consonant turns into a soft breath.' },
  { id: 'cu', flag: 'cu', name: 'Caribe', sub: 'Cuba, República Dominicana, Puerto Rico', voice: 'es-CU-ManuelNeural', traits: ['La **S** final se aspira o desaparece: «las dos plazas» ≈ «la do plaza».', 'Ritmo rápido y muy musical.', 'A veces la **R** final se acerca a una **L**.'], en: 'Final S turns into a breath or disappears; fast, musical rhythm.' },
  { id: 'co', flag: 'co', name: 'Colombia', sub: 'Bogotá', voice: 'es-CO-GonzaloNeural', traits: ['Pronunciación pausada y muy clara: se oyen todas las **S**.', '**Usted** se usa mucho, incluso entre amigos y familia.', 'Un acento cómodo para empezar a entrenar el oído.'], en: 'Slow, very clear pronunciation; “usted” is common even with friends.' },
  { id: 'cl', flag: 'cl', name: 'Chile', sub: '', voice: 'es-CL-LorenzoNeural', traits: ['Habla muy rápida; la **S** final se aspira.', 'La **CH** puede sonar más suave.', 'Vocabulario propio: «¿**cachái**?» = ¿entiendes?'], en: 'Very fast speech, aspirated final S, and its own slang.' },
  { id: 'pe', flag: 'pe', name: 'Perú', sub: 'Lima', voice: 'es-PE-AlexNeural', traits: ['Consonantes firmes y vocales completas.', 'Ritmo regular, sin aspirar la **S**.', 'Otro acento claro para los primeros meses.'], en: 'Firm consonants, full vowels, steady rhythm.' },
];

/**
 * Spanish-speaking countries. Population: rounded official figures and estimates for 2024–2025
 * (millions). `m`/`f` are the gentilicio for a man / a woman. `voice` is a native voice of the country.
 */
export const DATA_YEAR = '2024–2025';
export const countries = [
  { id: 'ar', name: 'Argentina', art: '', capital: 'Buenos Aires', m: 'argentino', f: 'argentina', people: '46 millones', money: 'peso argentino', region: 'América del Sur', fact: 'Es el octavo país más grande del mundo.', voice: RIVER },
  { id: 'bo', name: 'Bolivia', art: '', capital: 'Sucre', capitalNote: 'El gobierno trabaja en La Paz.', m: 'boliviano', f: 'boliviana', people: '11 millones', money: 'boliviano', region: 'América del Sur', fact: 'Tiene 37 lenguas oficiales, entre ellas el quechua y el aimara.', voice: 'es-BO-MarceloNeural' },
  { id: 'cl', name: 'Chile', art: '', capital: 'Santiago', m: 'chileno', f: 'chilena', people: '19 millones', money: 'peso chileno', region: 'América del Sur', fact: 'Mide más de 4000 kilómetros de norte a sur.', voice: 'es-CL-LorenzoNeural' },
  { id: 'co', name: 'Colombia', art: '', capital: 'Bogotá', m: 'colombiano', f: 'colombiana', people: '53 millones', money: 'peso colombiano', region: 'América del Sur', fact: 'Tiene costa en dos océanos: el Pacífico y el Atlántico.', voice: 'es-CO-GonzaloNeural' },
  { id: 'cr', name: 'Costa Rica', art: '', capital: 'San José', m: 'costarricense', f: 'costarricense', people: '5 millones', money: 'colón', region: 'América Central', fact: 'No tiene ejército desde 1948. A su gente le dicen «ticos».', voice: 'es-CR-JuanNeural' },
  { id: 'cu', name: 'Cuba', art: '', capital: 'La Habana', m: 'cubano', f: 'cubana', people: '10 millones', money: 'peso cubano', region: 'Caribe', fact: 'Es la isla más grande del Caribe.', voice: 'es-CU-ManuelNeural' },
  { id: 'ec', name: 'Ecuador', art: '', capital: 'Quito', m: 'ecuatoriano', f: 'ecuatoriana', people: '18 millones', money: 'dólar estadounidense', region: 'América del Sur', fact: 'Las islas Galápagos son parte del país.', voice: 'es-EC-LuisNeural' },
  { id: 'sv', name: 'El Salvador', art: '', capital: 'San Salvador', m: 'salvadoreño', f: 'salvadoreña', people: '6 millones', money: 'dólar estadounidense', region: 'América Central', fact: 'Es el país más pequeño de América continental.', voice: 'es-SV-RodrigoNeural' },
  { id: 'es', name: 'España', art: '', capital: 'Madrid', m: 'español', f: 'española', people: '49 millones', money: 'euro', region: 'Europa', fact: 'También son oficiales el catalán, el gallego y el euskera en sus regiones.', voice: SPAIN },
  { id: 'gt', name: 'Guatemala', art: '', capital: 'Ciudad de Guatemala', m: 'guatemalteco', f: 'guatemalteca', people: '18 millones', money: 'quetzal', region: 'América Central', fact: 'Allí se hablan más de veinte lenguas mayas.', voice: 'es-GT-AndresNeural' },
  { id: 'gq', name: 'Guinea Ecuatorial', art: '', capital: 'Ciudad de la Paz', capitalNote: 'Capital oficial desde enero de 2026. Antes era Malabo.', m: 'ecuatoguineano', f: 'ecuatoguineana', people: '2 millones', money: 'franco CFA', region: 'África', fact: 'Es el único país de África con el español como lengua oficial.', voice: 'es-GQ-JavierNeural' },
  { id: 'hn', name: 'Honduras', art: '', capital: 'Tegucigalpa', m: 'hondureño', f: 'hondureña', people: '11 millones', money: 'lempira', region: 'América Central', fact: 'En Copán hay una gran ciudad maya.', voice: 'es-HN-CarlosNeural' },
  { id: 'mx', name: 'México', art: '', capital: 'Ciudad de México', m: 'mexicano', f: 'mexicana', people: '132 millones', money: 'peso mexicano', region: 'América del Norte', fact: 'Es el país con más hablantes de español del mundo.', voice: BASE_VOICE },
  { id: 'ni', name: 'Nicaragua', art: '', capital: 'Managua', m: 'nicaragüense', f: 'nicaragüense', people: '7 millones', money: 'córdoba', region: 'América Central', fact: 'Tiene el lago más grande de América Central.', voice: 'es-NI-FedericoNeural' },
  { id: 'pa', name: 'Panamá', art: '', capital: 'Ciudad de Panamá', m: 'panameño', f: 'panameña', people: '4,5 millones', money: 'balboa (también circula el dólar)', region: 'América Central', fact: 'Su canal une el océano Atlántico con el Pacífico.', voice: 'es-PA-RobertoNeural' },
  { id: 'py', name: 'Paraguay', art: '', capital: 'Asunción', m: 'paraguayo', f: 'paraguaya', people: '6 millones', money: 'guaraní', region: 'América del Sur', fact: 'Casi todo el país habla dos lenguas: español y guaraní.', voice: 'es-PY-MarioNeural' },
  { id: 'pe', name: 'Perú', art: '', capital: 'Lima', m: 'peruano', f: 'peruana', people: '34 millones', money: 'sol', region: 'América del Sur', fact: 'Machu Picchu está en los Andes peruanos.', voice: 'es-PE-AlexNeural' },
  { id: 'pr', name: 'Puerto Rico', art: '', capital: 'San Juan', m: 'puertorriqueño', f: 'puertorriqueña', people: '3 millones', money: 'dólar estadounidense', region: 'Caribe', fact: 'Es un territorio de Estados Unidos. A su gente también le dicen «boricuas».', voice: 'es-PR-VictorNeural' },
  { id: 'do', name: 'República Dominicana', art: 'la ', capital: 'Santo Domingo', m: 'dominicano', f: 'dominicana', people: '11 millones', money: 'peso dominicano', region: 'Caribe', fact: 'Comparte la isla La Española con Haití.', voice: 'es-DO-EmilioNeural' },
  { id: 'uy', name: 'Uruguay', art: '', capital: 'Montevideo', m: 'uruguayo', f: 'uruguaya', people: '3,5 millones', money: 'peso uruguayo', region: 'América del Sur', fact: 'Fue sede y campeón del primer Mundial de fútbol, en 1930.', voice: 'es-UY-MateoNeural' },
  { id: 've', name: 'Venezuela', art: '', capital: 'Caracas', m: 'venezolano', f: 'venezolana', people: '28 millones', money: 'bolívar', region: 'América del Sur', fact: 'Tiene la cascada más alta del mundo: el Salto Ángel.', voice: 'es-VE-SebastianNeural' },
];

/** What the voice of each country says. */
export const countryLine = c => `Hola, soy de ${c.name}. Soy ${c.m}. La capital de mi país es ${c.capital}.`;

const slug = word => word.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z]/gi, '').toLowerCase();
export const wordClip = word => `palabra-${slug(word)}`;
export const src = id => `${AUDIO_ROOT}/${id}.mp3`;

/** Every recording of the class: id, text, voice and rate. */
export function clips() {
  const list = [];
  const add = (id, text, voice = BASE_VOICE, rate = '-12%') => { if (!list.some(c => c.id === id)) list.push({ id, text, voice, rate }); };
  for (const l of alphabet) add(l.clip, `${l.name}.`, BASE_VOICE, '-18%');
  for (const v of vowels) {
    add(`${v.id}-letra`, `${v.letter.toLowerCase()}. ${v.letter.toLowerCase()}. ${v.letter.toLowerCase()}.`, BASE_VOICE, '-20%');
    add(`${v.id}-silabas`, `${v.syllables}.`, BASE_VOICE, '-18%');
    add(`${v.id}-palabras`, `${v.words.join('. ')}.`, BASE_VOICE, '-15%');
    add(`${v.id}-frase`, v.phrase);
  }
  add('vocales-todas', 'a. e. i. o. u.', BASE_VOICE, '-20%');
  for (const word of ['casa', 'mesa', 'vino', 'poco', 'luna', ...cognates]) add(wordClip(word), `${word}.`, BASE_VOICE, '-15%');
  for (const c of consonants) for (const [key, , text, voice] of c.rows) add(`${c.id}-${key}`, text, voice, '-15%');
  for (const a of accents) add(`acento-${a.id}`, accentSentence, a.voice, '-6%');
  for (const c of countries) add(`pais-${c.id}`, countryLine(c), c.voice, '-8%');
  return list;
}
