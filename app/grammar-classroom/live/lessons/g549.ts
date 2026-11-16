import type { LiveLesson } from '../types';

/**
 * Lesson 549 · A2 · Números, dinero y monedas del mundo hispano (course unit G249,
 * extension requested by the owner on 2026-11-16; studied after G070).
 * One scene: Lucía, a Mexican traveller, crosses the Spanish-speaking world (Madrid,
 * Ciudad de México, Lima, Santiago, Buenos Aires) and has to count, pay and bargain in
 * a different currency at every stop. In the voice message Lucía (Mexican voice) tells
 * her friend Marta about her first day with Argentine pesos.
 * Content: cien / ciento, hundreds with gender (doscientas libras), mil, un millón de;
 * asking and saying prices (¿cuánto cuesta / cuestan?, ¿cuánto es?); paying (en
 * efectivo, con tarjeta, el cambio / el vuelto) and asking for a discount; currencies
 * country by country, with a full step on Argentina (billetes, luca, mango, plata).
 * Mistakes: *un mil pesos, *ciento pesos, *doscientos libras, *un millón pesos,
 * *ciento y veinte, *¿cuánto cuesta los zapatos? Instructions use tú; the Argentine
 * lines keep vos on purpose (regional pedagogy). Prices are examples, not real quotes.
 */
export const lesson: LiveLesson = {
  id: 549,
  level: 'A2',
  title: 'Números, dinero y monedas del mundo hispano',
  subtitle: 'Decir precios, pagar y pedir descuento en pesos, euros, soles y dólares, con una parada especial en Argentina.',
  legend: [
    { tone: 'teal', label: 'NÚMEROS · cien, doscientas, mil, un millón de (numbers)' },
    { tone: 'orange', label: 'PRECIOS · ¿cuánto cuesta?, cuesta, son… (prices)' },
    { tone: 'violet', label: 'PAGAR · en efectivo, con tarjeta, el vuelto (paying)' },
    { tone: 'blue', label: 'MONEDAS · peso, euro, sol, dólar (currencies)' },
  ],
  optionNotes: {
    'un mil pesos': 'Delante de «mil» no se dice «un»: **mil pesos**.',
    'ciento pesos': 'Justo delante del nombre se dice **cien**: cien pesos. «Ciento» solo sigue con otro número: ciento veinte.',
    'un millón pesos': '«Millón» necesita **de** delante del nombre: un millón **de** pesos.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Cuánto cuesta?', coach: 'Cada país, su moneda. Each country, its currency.',
      steps: [
        { title: 'El viaje de Lucía · Lucía’s trip', blocks: [
          { kind: 'lead', text: 'Lucía es mexicana y este año viaja por cinco ciudades: Madrid, Ciudad de México, Lima, Santiago y Buenos Aires. En cada lugar cambia la moneda: paga un café con **dos euros** en Madrid, con **cincuenta pesos** en México, con **ocho soles** en Lima y con **tres mil quinientos pesos** en Buenos Aires. Hoy aprendes a decir números grandes, preguntar precios, pagar y pedir descuento en cualquier país hispano.', en: 'Lucía is Mexican and this year she travels through five cities: Madrid, Mexico City, Lima, Santiago and Buenos Aires. The currency changes in each place: she pays for a coffee with two euros in Madrid, fifty pesos in Mexico, eight soles in Lima and three thousand five hundred pesos in Buenos Aires. Today you learn to say big numbers, ask prices, pay and ask for a discount in any Spanish-speaking country.' },
          { kind: 'tip', icon: '🧾', title: 'Precios de ejemplo · Example prices', text: 'Los precios de esta clase son **ejemplos para practicar**. Los precios reales cambian con el tiempo, sobre todo en países con inflación alta.', en: 'The prices in this class are examples for practice. Real prices change over time, especially in countries with high inflation.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases y tu alumno repite. Después tu alumno dice qué parte de cada frase es el número, cuál es la moneda y cuál es la forma de pagar.', self: 'Lee las tres frases en voz alta. ¿Dónde está el número, dónde la moneda y dónde la forma de pagar? (Find the number, the currency and the way of paying.)' } },
          { kind: 'compare', title: 'Tres cosas que necesitas · Three things you need', columns: [
            { tone: 'teal', label: 'EL NÚMERO', sentence: 'Son [[tres mil quinientos|teal]] pesos.', idea: 'Números grandes: cientos, miles, millones.', en: 'It’s three thousand five hundred pesos.' },
            { tone: 'orange', label: 'EL PRECIO', sentence: '¿[[Cuánto cuesta|orange]] el café?', idea: 'Preguntar y decir cuánto cuesta algo.', en: 'How much is the coffee?' },
            { tone: 'violet', label: 'EL PAGO', sentence: 'Pago [[en efectivo|violet]].', idea: 'Decir cómo pagas: en efectivo, con tarjeta.', en: 'I’m paying in cash.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Con qué moneda paga Lucía en Lima?', options: ['Con soles.', 'Con euros.', 'Con pesos.'], answer: 0, why: 'En Perú la moneda es el sol: ocho soles.', en: 'Which currency does Lucía pay with in Lima?' },
            { prompt: '«Pago en efectivo» quiere decir que pago…', options: ['con billetes y monedas.', 'con la tarjeta del banco.', 'mañana.'], answer: 0, why: 'En efectivo = con billetes y monedas (cash).', en: '“Pago en efectivo” means that I pay…' },
          ] },
        ] },
        { title: 'Cien, doscientos, mil, un millón · Big numbers', mascot: '/brand/mascot/studying.webp', coach: 'Cien pesos, ciento veinte pesos.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'CIENTOS', question: '¿Cómo digo 100, 120, 200, 500?', en: 'How do I say 100, 120, 200, 500?', formula: ['100 → cien · 101–199 → ciento + número', '200–900 + nombre masculino → doscientos pesos', '200–900 + nombre femenino → doscientas libras'],
            meaning: '**Cien** va solo o justo delante del nombre: cien pesos. Si sigue otro número, es **ciento**: ciento veinte pesos. De 200 a 900 el número **concuerda con el nombre**: doscient**os** euros, doscient**as** libras. Tres formas son irregulares: **quinientos** (500), **setecientos** (700) y **novecientos** (900).',
            examples: [
              { es: 'El libro cuesta [[cien|teal]] pesos y la revista, [[ciento veinte|teal]].', en: 'The book costs one hundred pesos and the magazine, one hundred and twenty.' },
              { es: 'Cambié [[quinientos|teal]] dólares y [[doscientas|teal]] libras.', en: 'I exchanged five hundred dollars and two hundred pounds.' },
              { es: 'El hotel cuesta [[setecientos cincuenta|teal]] soles por semana.', en: 'The hotel costs seven hundred and fifty soles a week.' },
            ],
            note: 'La **y** solo va entre decenas y unidades: cuarenta **y** cinco, ciento cuarenta **y** cinco. No se dice «ciento y cinco»: se dice **ciento cinco**.' },
          { kind: 'concept', tone: 'teal', label: 'MILES Y MILLONES', question: '¿Cómo digo 1.000, 2.500, 1.000.000?', en: 'How do I say 1,000, 2,500, 1,000,000?', formula: ['1.000 → mil (sin «un») · 2.000 → dos mil', '1.000.000 → un millón de + nombre', '2.000.000 → dos millones de + nombre'],
            meaning: '**Mil** no cambia y no lleva «un»: mil pesos, tres mil pesos, veinte mil pesos. **Millón** sí tiene plural y necesita **de** delante del nombre: un millón **de** pesos, dos millones **de** pesos. Si después del millón hay más números, no hay «de»: un millón quinientos mil pesos.',
            examples: [
              { es: 'El café cuesta [[tres mil quinientos|teal]] pesos.', en: 'The coffee costs three thousand five hundred pesos.' },
              { es: 'El alquiler es de [[un millón de|teal]] pesos chilenos.', en: 'The rent is one million Chilean pesos.' },
              { es: 'Tengo [[veintiún|teal]] euros y [[veintiuna|teal]] libras.', en: 'I have twenty-one euros and twenty-one pounds.' },
            ],
            note: '**Uno** pierde la -o delante de un nombre masculino: veinti**ún** euros, treinta y **un** pesos. Con nombre femenino es **una**: veinti**una** libras.' },
          { kind: 'table', title: 'Los números del dinero · Money numbers', head: ['Número', 'Se dice', 'Ejemplo'], rows: [
            ['100', '[[cien|teal]]', 'cien euros'],
            ['150', '[[ciento cincuenta|teal]]', 'ciento cincuenta soles'],
            ['200', '[[doscientos / doscientas|teal]]', 'doscientos pesos · doscientas libras'],
            ['500', '[[quinientos / quinientas|teal]]', 'quinientos dólares'],
            ['700 · 900', '[[setecientos|teal]] · [[novecientos|teal]]', 'novecientos pesos'],
            ['1.000', '[[mil|teal]]', 'mil pesos'],
            ['15.000', '[[quince mil|teal]]', 'quince mil pesos'],
            ['1.000.000', '[[un millón de|teal]]', 'un millón de guaraníes'],
          ], note: 'En España y en casi toda Sudamérica se escribe 1.500,50 (punto para los miles, coma para los decimales). En México y Centroamérica se escribe 1,500.50.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El taxi cuesta 1.000 pesos: «Son ___».', options: ['un mil pesos', 'mil pesos', 'miles pesos'], answer: 1, why: 'Mil no lleva «un» ni plural: mil pesos.', en: 'The taxi costs 1,000 pesos: “It’s a thousand pesos.”' },
            { prompt: 'La chaqueta cuesta 200 libras: «Cuesta ___ libras».', options: ['doscientos', 'doscientas', 'dos cientos'], answer: 1, why: 'Las libras: femenino → doscientas.', en: 'The jacket costs 200 pounds.' },
            { prompt: 'El boleto cuesta 120 soles: «Cuesta ___ soles».', options: ['cien veinte', 'ciento y veinte', 'ciento veinte'], answer: 2, why: 'Con otro número detrás: ciento. Sin «y»: ciento veinte.', en: 'The ticket costs 120 soles.' },
          ] },
        ] },
        { title: 'Preguntar y decir precios · Asking and saying prices', mascot: '/brand/mascot/speaking.webp', coach: '¿Cuánto cuesta? ¿Cuánto cuestan?', blocks: [
          { kind: 'concept', tone: 'orange', label: 'PRECIOS', question: '¿Cómo pregunto y digo un precio?', en: 'How do I ask and say a price?', formula: ['¿Cuánto cuesta + cosa singular?', '¿Cuánto cuestan + cosas en plural?', '¿Cuánto es? → total · Son + precio'],
            meaning: 'El verbo **costar** concuerda con la cosa: «¿Cuánto **cuesta** la mochila?», «¿Cuánto **cuestan** los zapatos?». Para el total de toda la compra preguntas **¿Cuánto es?** y te responden **Son…** También oyes **¿Cuánto vale?** y **¿Qué precio tiene?**',
            examples: [
              { es: '—¿[[Cuánto cuesta|orange]] esta camiseta? —[[Cuesta|orange]] quince euros.', en: '“How much is this T-shirt?” “It’s fifteen euros.”' },
              { es: '—¿[[Cuánto cuestan|orange]] las entradas? —[[Cuestan|orange]] doscientos pesos cada una.', en: '“How much are the tickets?” “They’re two hundred pesos each.”' },
              { es: '—¿[[Cuánto es|orange]] todo? —[[Son|orange]] cuarenta soles.', en: '“How much is everything?” “It’s forty soles.”' },
            ],
            note: 'Los decimales se dicen con **con**: 2,50 € = dos euros **con** cincuenta. En la calle también oyes la forma corta: «dos cincuenta».' },
          { kind: 'table', title: 'Caro y barato · Expensive and cheap', head: ['Quieres decir…', 'Dices…'], rows: [
            ['El precio es alto.', 'Es [[caro|orange]] · Es [[cara|orange]] · Está muy caro.'],
            ['El precio es bajo.', 'Es [[barato|orange]] · Es [[barata|orange]] · Está barato.'],
            ['El precio está bien.', 'Está bien de precio · Es un buen precio.'],
            ['Tiene un precio más bajo hoy.', 'Está [[de oferta|orange]] · Tiene [[descuento|orange]].'],
          ], note: 'Caro y barato concuerdan con la cosa: la mochila es cara, los zapatos son baratos.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Cuánto ___ estos zapatos?', options: ['cuesta', 'cuestan', 'cuestas'], answer: 1, why: 'Los zapatos: plural → cuestan.', en: 'How much are these shoes?' },
            { prompt: 'En la caja, con toda tu compra: «¿___?».', options: ['Cuánto es', 'Cuántos son', 'Cuánto está'], answer: 0, why: 'Para el total: ¿Cuánto es?', en: 'At the till, with all your shopping: “How much is it?”' },
            { prompt: '3,50 € se dice…', options: ['tres euros y cincuenta', 'tres euros con cincuenta', 'tres coma cincuenta euro'], answer: 1, why: 'Los decimales del precio van con «con»: tres euros con cincuenta.', en: '€3.50 is said…' },
          ] },
        ] },
        { title: 'Pagar y pedir descuento · Paying and asking for a discount', mascot: '/brand/mascot/standing.webp', coach: 'En efectivo, con tarjeta. Cash or card.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'PAGAR', question: '¿Cómo digo cómo pago?', en: 'How do I say how I pay?', formula: ['pagar en efectivo', 'pagar con tarjeta · con el teléfono', 'pagar por transferencia'],
            meaning: 'Cada forma de pago tiene su preposición: **en** efectivo, **con** tarjeta, **por** transferencia. Para saber si puedes, preguntas **¿Aceptan tarjeta?** o **¿Se puede pagar con tarjeta?** El dinero que te devuelven es **el cambio**; en casi toda América se dice **el vuelto** y en España también **la vuelta**.',
            examples: [
              { es: '¿Puedo pagar [[con tarjeta|violet]]?', en: 'Can I pay by card?' },
              { es: 'Solo aceptamos pagos [[en efectivo|violet]].', en: 'We only take cash.' },
              { es: 'Aquí tiene [[el vuelto|violet]]: doscientos pesos.', en: 'Here is your change: two hundred pesos.' },
            ],
            note: '**Cambio** también es el dinero en billetes pequeños y monedas: «¿Tiene cambio de mil pesos?» = ¿puede darme billetes más pequeños?' },
          { kind: 'table', title: 'En la tienda y en el mercado · At the shop and the market', head: ['Situación', 'Frase útil'], rows: [
            ['Quieres pagar en un restaurante.', '[[La cuenta|violet]], por favor. · ¿Me cobra, por favor?'],
            ['Quieres un precio mejor.', '¿[[Me hace un descuento|violet]]? · ¿Es el último precio?'],
            ['Compras varias cosas.', 'Si llevo dos, ¿[[me hace precio|violet]]?'],
            ['Quieres dejar dinero extra al camarero.', 'Dejar [[propina|violet]]: «Quédese con el vuelto».'],
            ['Necesitas otra moneda.', 'Quiero [[cambiar|violet]] dólares. · ¿A cuánto está el dólar?'],
          ], note: 'Con vendedores y camareros que no conoces, **usted** es la forma más segura: ¿Me hace…?, ¿Me cobra…?, ¿Tiene…?' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'No tengo billetes. ¿Puedo pagar ___ tarjeta?', options: ['en', 'con', 'por'], answer: 1, why: 'Con tarjeta. En efectivo. Por transferencia.', en: 'I have no notes. Can I pay by card?' },
            { prompt: 'Pagas 800 pesos con un billete de mil. Te devuelven 200 pesos: es…', options: ['la propina.', 'el vuelto.', 'el descuento.'], answer: 1, why: 'El vuelto (o el cambio) es el dinero que te devuelven.', en: 'You pay 800 pesos with a 1,000 note. You get 200 pesos back: it is…' },
            { prompt: 'En un mercado quieres pagar menos. Preguntas:', options: ['¿Me hace un descuento?', '¿Me hace una cuenta?', '¿Me cambia la propina?'], answer: 0, why: 'Para pedir un precio más bajo: ¿Me hace un descuento?', en: 'At a market you want to pay less. You ask:' },
          ] },
        ] },
        { title: 'Monedas por país · Currencies by country', mascot: '/brand/mascot/walking.webp', coach: 'Peso, euro, sol, dólar…', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno elige tres países de la tabla y dice una frase con cada moneda: «En Perú pago con soles». Tú preguntas por el país de tu alumno y su moneda.', self: 'Elige tres países de la tabla y di una frase con cada moneda: «En Perú pago con soles». (Choose three countries and say a sentence with each currency.)' } },
          { kind: 'table', title: 'España y México · Spain and Mexico', head: ['País', 'Moneda', 'En la calle se oye…'], rows: [
            ['España', '[[el euro|blue]] (€) · 1 euro = 100 céntimos', '«¿Cuánto es?» · «¿Me cobras?» · la vuelta · «pasta» = dinero'],
            ['México', '[[el peso mexicano|blue]] ($) · 1 peso = 100 centavos', '«¿Cuánto cuesta?» · «¿A cómo está?» · el cambio · «lana» = dinero'],
          ], note: 'En México y en otros países el símbolo **$** quiere decir pesos, no dólares. Para los dólares se escribe US$ o «dólares».' },
          { kind: 'table', title: 'Sudamérica · South America', head: ['País', 'Moneda', 'En la calle se oye…'], rows: [
            ['Colombia', '[[el peso colombiano|blue]]', '«¿Cuánto vale?» · precios en miles · «plata» = dinero'],
            ['Perú', '[[el sol|blue]] · plural: soles', '«¿Cuánto está?» · el vuelto · «plata» = dinero'],
            ['Chile', '[[el peso chileno|blue]]', 'precios en miles · «una luca» = mil pesos'],
            ['Argentina', '[[el peso argentino|blue]]', '«¿Cuánto sale?» · «una luca» = mil pesos · «plata» = dinero'],
            ['Uruguay', '[[el peso uruguayo|blue]]', '«¿Cuánto sale?» · el vuelto'],
            ['Bolivia · Paraguay · Venezuela', '[[el boliviano|blue]] · [[el guaraní|blue]] · [[el bolívar|blue]]', '«plata» = dinero'],
          ] },
          { kind: 'table', title: 'Centroamérica y el Caribe · Central America and the Caribbean', head: ['País', 'Moneda'], rows: [
            ['Guatemala · Honduras · Nicaragua', '[[el quetzal|blue]] · [[el lempira|blue]] · [[el córdoba|blue]]'],
            ['Costa Rica', '[[el colón|blue]] · plural: colones'],
            ['Cuba · República Dominicana', '[[el peso cubano|blue]] · [[el peso dominicano|blue]]'],
            ['Ecuador · El Salvador · Panamá · Puerto Rico', '[[el dólar|blue]] estadounidense (en Panamá, también el balboa)'],
          ], note: '**Peso** es el nombre de la moneda en siete países hispanos, pero cada peso tiene un valor distinto: por eso se dice «pesos mexicanos», «pesos chilenos», «pesos argentinos».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En Perú pagas con…', options: ['pesos.', 'soles.', 'bolívares.'], answer: 1, why: 'La moneda de Perú es el sol.', en: 'In Peru you pay with…' },
            { prompt: 'En Chile, «diez lucas» son…', options: ['diez pesos.', 'diez mil pesos.', 'diez dólares.'], answer: 1, why: 'Una luca = mil pesos: diez lucas = diez mil pesos.', en: 'In Chile, “diez lucas” is…' },
            { prompt: '¿En qué país se paga con dólares estadounidenses?', options: ['En Ecuador.', 'En Colombia.', 'En Bolivia.'], answer: 0, why: 'Ecuador usa el dólar como moneda oficial.', en: 'In which country do you pay with US dollars?' },
          ] },
        ] },
        { title: 'Argentina: pesos, billetes y lucas · Argentina', mascot: '/brand/mascot/pointing.webp', coach: '¿Cuánto sale? Son diez lucas.', blocks: [
          { kind: 'lead', text: 'En Argentina la moneda es **el peso argentino**. Los precios son números grandes: un café cuesta miles de pesos, así que casi todo se paga con **billetes** y casi no se usan monedas. Los billetes más comunes son los de **mil, dos mil, diez mil y veinte mil pesos**. Mucha gente también ahorra en **dólares** y pregunta todos los días: «¿A cuánto está el dólar?».', en: 'In Argentina the currency is the Argentine peso. Prices are big numbers: a coffee costs thousands of pesos, so almost everything is paid with notes and coins are hardly used. The most common notes are the one thousand, two thousand, ten thousand and twenty thousand peso notes. Many people also save in dollars and ask every day: “What is the dollar at?”.' },
          { kind: 'guide', text: { teacher: 'Tú lees cada palabra de la tabla y tu alumno la repite y dice el número completo: «cinco lucas» → «cinco mil pesos». Después leen juntos el diálogo del quiosco.', self: 'Lee cada palabra de la tabla en voz alta y di el número completo: «cinco lucas» → «cinco mil pesos». (Read each word aloud and say the full number.)' } },
          { kind: 'table', title: 'El dinero en la calle · Money in the street', head: ['En Argentina se dice…', 'Quiere decir…', 'Ejemplo'], rows: [
            ['[[la plata|blue]] · la guita', 'el dinero', 'No tengo plata. (I have no money.)'],
            ['[[una luca|blue]]', 'mil pesos', 'Son veinte lucas. = Son veinte mil pesos.'],
            ['[[un mango|blue]]', 'un peso', 'No tengo un mango. = No tengo nada de dinero.'],
            ['[[un palo|blue]]', 'un millón de pesos', 'El auto cuesta treinta palos.'],
            ['¿[[Cuánto sale|orange]]?', '¿Cuánto cuesta?', '¿Cuánto sale el alfajor?'],
            ['[[el vuelto|violet]]', 'el cambio que te devuelven', 'Acá tenés el vuelto.'],
          ], note: 'Estas palabras son coloquiales: se usan con amigos y en la calle. En un banco o en un texto formal se dice «dinero», «mil pesos», «un millón de pesos».' },
          { kind: 'tip', icon: '🧉', title: 'Vos en Argentina · “Vos” in Argentina', text: 'En Argentina se usa **vos** en lugar de «tú», con formas propias: **tenés** (tienes), **querés** (quieres), **pagás** (pagas). Tú puedes hablar con «tú» o «usted» y todos te entienden; lo importante es **reconocer** estas formas cuando las oyes.', en: 'In Argentina people use vos instead of tú, with its own forms: tenés (tienes), querés (quieres), pagás (pagas). You can speak with tú or usted and everyone understands you; what matters is recognising these forms when you hear them.' },
          { kind: 'explore', title: 'En el quiosco · At the kiosk', setting: 'Un quiosco en Buenos Aires. Lucía compra agua y un alfajor. (A kiosk in Buenos Aires. Lucía buys water and an alfajor.)', lines: [
            { who: 'Lucía', text: 'Hola. ¿[[Cuánto cuesta|orange]] el agua?', en: 'Hi. How much is the water?' },
            { who: 'Quiosquero', text: 'El agua [[sale|orange]] [[dos mil|teal]] y el alfajor, [[mil quinientos|teal]].', en: 'The water is two thousand and the alfajor, one thousand five hundred.' },
            { who: 'Lucía', text: 'Las dos cosas, por favor. ¿[[Cuánto es|orange]]?', en: 'Both things, please. How much is it?' },
            { who: 'Quiosquero', text: 'Son [[tres lucas y media|blue]]. ¿Pagás [[en efectivo|violet]]?', en: 'It’s three and a half “lucas”. Are you paying cash?' },
            { who: 'Lucía', text: 'Sí. Solo tengo un billete de [[diez mil|teal]].', en: 'Yes. I only have a ten thousand note.' },
            { who: 'Quiosquero', text: 'No hay problema. Acá tenés [[el vuelto|violet]]: [[seis mil quinientos|teal]].', en: 'No problem. Here is your change: six thousand five hundred.' },
          ], notes: {
            'Cuánto cuesta': 'Lucía pregunta con **¿Cuánto cuesta?**: se entiende en todos los países.',
            'sale': 'En Argentina y Uruguay **salir** se usa como «costar»: sale dos mil = cuesta dos mil.',
            'dos mil': '2.000: **dos mil**, sin plural en «mil».',
            'mil quinientos': '1.500: **mil quinientos**, sin «un» delante de mil.',
            'Cuánto es': 'El total de toda la compra: **¿Cuánto es?**',
            'tres lucas y media': 'Una luca = mil pesos. Tres lucas y media = **tres mil quinientos pesos**.',
            'en efectivo': 'Con billetes: **en** efectivo. «Pagás» es la forma de vos de «pagas».',
            'diez mil': '10.000: **diez mil**.',
            'el vuelto': 'El dinero que te devuelven. «Tenés» es la forma de vos de «tienes».',
            'seis mil quinientos': '10.000 − 3.500 = 6.500: **seis mil quinientos**.',
          } },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Son quince lucas» quiere decir…', options: ['Son quince pesos.', 'Son quince mil pesos.', 'Son quince millones de pesos.'], answer: 1, why: 'Una luca = mil pesos.', en: '“Son quince lucas” means…' },
            { prompt: 'En Buenos Aires oyes: «¿Cuánto sale?». Es lo mismo que…', options: ['¿Cuánto cuesta?', '¿Cuándo sales?', '¿Cuánto tienes?'], answer: 0, why: 'En Argentina, salir = costar.', en: 'In Buenos Aires you hear: “¿Cuánto sale?”. It is the same as…' },
            { prompt: '«No tengo un mango» quiere decir…', options: ['No tengo fruta.', 'No tengo dinero.', 'No tengo cambio de mil.'], answer: 1, why: 'Un mango = un peso. No tengo un mango = no tengo nada de dinero.', en: '“No tengo un mango” means…' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Dónde está el error? Where is the mistake?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla. Después aparece la corrección y tu alumno la lee en voz alta.', self: 'Lee cada frase y busca el error. Toca para ver la corrección y léela en voz alta. (Find the mistake, then read the correction aloud.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'El taxi cuesta un mil pesos.', right: 'El taxi cuesta mil pesos.', why: 'Mil no lleva «un». (No “un” before mil.)' },
            { wrong: 'Tengo ciento pesos.', right: 'Tengo cien pesos.', why: 'Justo delante del nombre: cien. (Cien right before the noun.)' },
            { wrong: 'Cambié doscientos libras.', right: 'Cambié doscientas libras.', why: 'Las libras → doscientas. (Hundreds agree with the noun.)' },
            { wrong: 'La casa cuesta un millón pesos.', right: 'La casa cuesta un millón de pesos.', why: 'Millón + de + nombre. (Millón needs “de”.)' },
            { wrong: 'Son ciento y veinte euros.', right: 'Son ciento veinte euros.', why: 'La «y» solo va entre decenas y unidades. (“Y” only between tens and units.)' },
            { wrong: '¿Cuánto cuesta los zapatos?', right: '¿Cuánto cuestan los zapatos?', why: 'Los zapatos → cuestan. (The verb agrees with the thing.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El alquiler cuesta 1.000.000 de pesos chilenos: «Cuesta ___».', options: ['un millón pesos', 'un millón de pesos', 'mil mil pesos'], answer: 1, why: 'Un millón de + nombre.', en: 'The rent is 1,000,000 Chilean pesos.' },
            { prompt: 'Tengo 500 pesos: «Tengo ___ pesos».', options: ['cinco cientos', 'quinientos', 'cincocientos'], answer: 1, why: '500 es irregular: quinientos.', en: 'I have 500 pesos.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: di tres precios en voz alta (por ejemplo 150, 2.500 y 1.000.000) con monedas distintas. Tu alumno los escribe en cifras y después dice el precio de tres cosas de su país.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'En el mercado de San Telmo', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'Una mochila de cuero · A leather backpack', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres el vendedor y tu alumno es Lucía. Después tu alumno toca cada palabra marcada y explica el número o la frase.', self: 'Lee el diálogo en voz alta. Después toca cada palabra marcada: ¿qué número es?, ¿para qué sirve la frase? (What number is it? What is the phrase for?)' } },
          { kind: 'explore', title: 'Domingo en San Telmo', setting: 'El mercado de San Telmo, en Buenos Aires. Un puesto de mochilas y carteras de cuero. El vendedor habla de vos. (San Telmo market, Buenos Aires. A stall with leather backpacks and bags. The seller uses vos.)', lines: [
            { who: 'Lucía', text: 'Buenas tardes. ¿[[Cuánto cuesta|orange]] esta mochila?', en: 'Good afternoon. How much is this backpack?' },
            { who: 'Vendedor', text: 'Esa sale [[noventa mil|teal]] pesos. Es de cuero, hecha a mano.', en: 'That one is ninety thousand pesos. It’s leather, handmade.' },
            { who: 'Lucía', text: 'Es un poco [[cara|orange]]. ¿Y aquella pequeña?', en: 'It’s a bit expensive. And that small one?' },
            { who: 'Vendedor', text: 'La chica cuesta [[sesenta y cinco mil|teal]].', en: 'The small one costs sixty-five thousand.' },
            { who: 'Lucía', text: 'Prefiero la grande. ¿[[Me hace un descuento|violet]] si pago [[en efectivo|violet]]?', en: 'I prefer the big one. Will you give me a discount if I pay cash?' },
            { who: 'Vendedor', text: 'En efectivo te la dejo en [[ochenta lucas|blue]].', en: 'For cash you can have it for eighty “lucas”.' },
            { who: 'Lucía', text: '¿Ochenta lucas?', en: 'Eighty “lucas”?' },
            { who: 'Vendedor', text: 'Ochenta mil pesos. Una luca son mil pesos.', en: 'Eighty thousand pesos. One “luca” is a thousand pesos.' },
            { who: 'Lucía', text: 'Ah, perfecto. Aquí tiene: cuatro billetes de [[veinte mil|teal]].', en: 'Oh, perfect. Here you are: four twenty-thousand notes.' },
            { who: 'Vendedor', text: 'Justo. ¿Querés bolsa?', en: 'Exact amount. Do you want a bag?' },
            { who: 'Lucía', text: 'No, gracias. ¿[[Aceptan dólares|violet]] también?', en: 'No, thanks. Do you take dollars too?' },
            { who: 'Vendedor', text: 'Sí, pero [[el vuelto|violet]] te lo doy en pesos.', en: 'Yes, but I give you the change in pesos.' },
          ], notes: {
            'Cuánto cuesta': 'Una cosa en singular (la mochila) → **cuesta**.',
            'noventa mil': '90.000: **noventa mil**. «Mil» no cambia en plural.',
            'cara': 'La mochila → **cara** (femenino). Un poco cara = el precio es alto para mí.',
            'sesenta y cinco mil': '65.000: la **y** va entre decenas y unidades: sesenta **y** cinco mil.',
            'Me hace un descuento': 'Lucía habla de **usted** con el vendedor: ¿Me hace…? Así pide un precio más bajo.',
            'en efectivo': 'Con billetes: pagar **en** efectivo. Muchas tiendas hacen descuento en efectivo.',
            'ochenta lucas': 'Coloquial en Argentina: ochenta lucas = **ochenta mil pesos**.',
            'veinte mil': '20.000: **veinte mil**. Cuatro billetes de veinte mil = ochenta mil pesos.',
            'Aceptan dólares': 'Para saber si puedes pagar con otra moneda o con tarjeta: **¿Aceptan…?**',
            'el vuelto': 'El dinero que te devuelven. En España: el cambio o la vuelta.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Cuánto cuesta la mochila grande al principio?', options: ['Sesenta y cinco mil pesos.', 'Ochenta mil pesos.', 'Noventa mil pesos.'], answer: 2, why: '«Esa sale noventa mil pesos».', en: 'How much is the big backpack at first?' },
            { prompt: '¿Cuánto paga Lucía al final?', options: ['Ochenta mil pesos.', 'Noventa mil pesos.', 'Ochenta pesos.'], answer: 0, why: '«Te la dejo en ochenta lucas» = ochenta mil pesos.', en: 'How much does Lucía pay in the end?' },
            { prompt: '¿Por qué baja el precio?', options: ['Porque Lucía compra dos mochilas.', 'Porque Lucía paga en efectivo.', 'Porque la mochila es pequeña.'], answer: 1, why: 'El vendedor hace descuento por pagar en efectivo.', en: 'Why does the price go down?' },
            { prompt: '¿Con qué billetes paga Lucía?', options: ['Con ocho billetes de mil.', 'Con cuatro billetes de veinte mil.', 'Con dos billetes de diez mil.'], answer: 1, why: '«Cuatro billetes de veinte mil».', en: 'Which notes does Lucía pay with?' },
          ] },
        ] },
        { title: '¿Para qué sirve? · What is it for?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Precio, pago o moneda · Price, payment or currency', categories: [
            { id: 'precio', label: 'PREGUNTAR O DECIR EL PRECIO', tone: 'orange' },
            { id: 'pago', label: 'PAGAR', tone: 'violet' },
            { id: 'moneda', label: 'HABLAR DE LA MONEDA', tone: 'blue' },
          ], items: [
            { text: '¿Cuánto cuestan estas carteras?', answer: 'precio', why: 'Pregunta el precio de varias cosas.' },
            { text: '¿Aceptan tarjeta?', answer: 'pago', why: 'Pregunta por la forma de pago.' },
            { text: 'En Perú se usan soles.', answer: 'moneda', why: 'Dice cuál es la moneda del país.' },
            { text: 'Son cuarenta y cinco euros.', answer: 'precio', why: 'Dice el total.' },
            { text: 'Quédese con el vuelto.', answer: 'pago', why: 'Deja el cambio como propina.' },
            { text: 'Quiero cambiar dólares a pesos.', answer: 'moneda', why: 'Cambia una moneda por otra.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué compraste esta semana y cuánto costó?». Tu alumno dice dos compras con el precio completo en la moneda de su país.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Números, precios y pagos.',
      steps: [
        { title: 'De ciudad en ciudad · From city to city', blocks: [
          { kind: 'choice', items: [
            { context: 'Madrid. Un bocadillo cuesta 4,50 €. (Madrid. A sandwich costs €4.50.)', prompt: '«Son cuatro euros ___ cincuenta».', options: ['y', 'con', 'de'], answer: 1, why: 'Los decimales del precio: con.', en: '“It’s four euros fifty.”' },
            { context: 'Ciudad de México. Unos tacos cuestan 100 pesos. (Mexico City. Some tacos cost 100 pesos.)', prompt: '«Son ___ pesos».', options: ['ciento', 'cien', 'un cien'], answer: 1, why: 'Justo delante del nombre: cien.', en: '“It’s a hundred pesos.”' },
            { context: 'Lima. Lucía mira dos entradas para un museo. (Lima. Lucía looks at two museum tickets.)', prompt: '¿Cuánto ___ las entradas?', options: ['cuesta', 'cuestan', 'costar'], answer: 1, why: 'Las entradas: plural → cuestan.', en: 'How much are the tickets?' },
            { context: 'Santiago. Un almuerzo cuesta 12.000 pesos chilenos. (Santiago. Lunch costs 12,000 Chilean pesos.)', prompt: '«Son ___ pesos».', options: ['doce mil', 'doce miles', 'doce mil de'], answer: 0, why: 'Mil no tiene plural ni «de»: doce mil pesos.', en: '“It’s twelve thousand pesos.”' },
            { context: 'Buenos Aires. Lucía no tiene billetes. (Buenos Aires. Lucía has no notes.)', prompt: '¿Puedo pagar ___?', options: ['en tarjeta', 'con tarjeta', 'por tarjeta'], answer: 1, why: 'Con tarjeta.', en: 'Can I pay by card?' },
            { context: 'Londres. Una amiga cambia dinero. (London. A friend exchanges money.)', prompt: 'Cambió ___ libras.', options: ['trescientos', 'trescientas', 'tres cientos'], answer: 1, why: 'Las libras → trescientas.', en: 'She exchanged three hundred pounds.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'El pasaje cuesta un mil quinientos pesos.', ok: false, options: ['El pasaje cuesta mil quinientos pesos.', 'El pasaje cuesta uno mil quinientos pesos.', 'El pasaje cuesta mil y quinientos pesos.'], answer: 0, why: 'Mil no lleva «un» ni «y».' },
            { sentence: 'Las entradas cuestan doscientos pesos cada una.', ok: true, why: 'Correcta: los pesos → doscientos; las entradas → cuestan.' },
            { sentence: 'El departamento cuesta dos millones pesos.', ok: false, options: ['El departamento cuesta dos millón de pesos.', 'El departamento cuesta dos millones de pesos.', 'El departamento cuesta dos mil millones pesos.'], answer: 1, why: 'Millones + de + nombre.' },
            { sentence: '¿Puedo pagar con tarjeta o solo en efectivo?', ok: true, why: 'Correcta: con tarjeta, en efectivo.' },
            { sentence: 'Tengo veintiuno euros en la cartera.', ok: false, options: ['Tengo veintiuna euros en la cartera.', 'Tengo veinte y uno euros en la cartera.', 'Tengo veintiún euros en la cartera.'], answer: 2, why: 'Delante de nombre masculino: veintiún.' },
            { sentence: 'Son ciento cincuenta y cinco soles.', ok: true, why: 'Correcta: ciento + cincuenta y cinco.' },
          ] },
        ] },
        { title: 'En el restaurante · At the restaurant', blocks: [
          { kind: 'chat-fill', title: 'La cuenta, por favor · The bill, please', lines: [
            { who: 'Lucía', text: 'Perdone, ___, por favor.', options: ['la cuenta', 'el cuento', 'la cuesta'], answer: 0, why: 'Para pagar en un restaurante: la cuenta.' },
            { who: 'Camarero', text: 'Aquí tiene. ___ treinta y ocho euros.', options: ['Es', 'Son', 'Cuesta'], answer: 1, why: 'Para el total en plural: Son treinta y ocho euros.' },
            { who: 'Lucía', text: '¿Puedo pagar ___ tarjeta?', options: ['en', 'por', 'con'], answer: 2, why: 'Con tarjeta.' },
            { who: 'Camarero', text: 'Lo siento, hoy no funciona la máquina. Solo ___.', options: ['en efectivo', 'con efectivos', 'de efectivo'], answer: 0, why: 'En efectivo.' },
            { who: 'Lucía', text: 'Bueno. Tengo un billete de cincuenta. ¿Tiene ___?', options: ['cambio', 'propina', 'descuento'], answer: 0, why: 'Cambio: billetes pequeños y monedas para devolver.' },
            { who: 'Camarero', text: 'Sí, claro. Aquí tiene: ___ euros.', options: ['doce', 'veintidós', 'ocho'], answer: 0, why: '50 − 38 = 12: doce euros.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['cuestan', '¿Cuánto', 'zapatos?', 'estos'], accept: ['¿Cuánto cuestan estos zapatos?'], en: 'How much are these shoes?' },
            { tiles: ['pesos', 'Son', 'quinientos', 'tres', 'mil'], accept: ['Son tres mil quinientos pesos'], en: 'It’s three thousand five hundred pesos.' },
            { tiles: ['descuento?', '¿Me', 'un', 'hace'], accept: ['¿Me hace un descuento?'], en: 'Will you give me a discount?' },
            { tiles: ['efectivo', 'pagar', 'Prefiero', 'en'], accept: ['Prefiero pagar en efectivo'], en: 'I prefer to pay in cash.' },
            { tiles: ['de', 'un', 'pesos', 'millón', 'Cuesta'], accept: ['Cuesta un millón de pesos'], en: 'It costs a million pesos.' },
          ] },
        ] },
        { title: 'Del número a la palabra · From figures to words', blocks: [
          { kind: 'rewrite', title: 'Escribe el número con letras · Write the number in words', items: [
            { prompt: 'Son 250 pesos.', instruction: 'Escribe la frase con el número en letras.', accept: ['Son doscientos cincuenta pesos'] },
            { prompt: 'Cuesta 1.500 pesos.', instruction: 'Escribe la frase con el número en letras.', accept: ['Cuesta mil quinientos pesos'] },
            { prompt: 'Son 100 euros.', instruction: 'Escribe la frase con el número en letras.', accept: ['Son cien euros'] },
            { prompt: 'Cuesta 20.000 pesos.', instruction: 'Escribe la frase con el número en letras.', accept: ['Cuesta veinte mil pesos'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno hace de vendedor: elige tres objetos de la mesa, les pone precio en una moneda hispana y tú preguntas, pides descuento y pagas.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio de Lucía', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Primer día en Buenos Aires · First day in Buenos Aires', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno anota todos los números que oye. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para anotar los números que oyes. (Listen once for the gist, once to write down the numbers.)' } },
          { kind: 'listen', title: 'Un audio de Lucía para Marta', channel: 'MENSAJE DE VOZ · DE LUCÍA PARA MARTA', src: '/audio/grammar-live/549.mp3',
            before: 'Lucía llega a Buenos Aires y manda un audio a su amiga Marta. ¿Qué crees que cuenta sobre el dinero? (What do you think she says about money?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Lucía cuenta cómo usa el dinero en su primer día en Buenos Aires.', 'Lucía perdió su tarjeta en un taxi.', 'Lucía quiere volver a México porque todo es caro.'], answer: 0, why: 'Habla de cambiar dólares, de los precios, de una compra y de cómo paga.', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Cuánto dinero cambió Lucía?', options: ['Cien dólares.', 'Doscientos dólares.', 'Dos mil dólares.'], answer: 1, why: '«Hoy cambié doscientos dólares».', en: 'How much money did Lucía exchange?' },
              { prompt: '¿Cuánto cuesta un café?', options: ['Tres mil quinientos pesos.', 'Quince mil pesos.', 'Trescientos cincuenta pesos.'], answer: 0, why: '«Un café cuesta tres mil quinientos pesos».', en: 'How much is a coffee?' },
              { prompt: '¿Qué es «una luca»?', options: ['Un billete de cien pesos.', 'Mil pesos.', 'Un café con leche.'], answer: 1, why: '«La gente dice luca para decir mil pesos».', en: 'What is “una luca”?' },
              { prompt: '¿Cuánto pagó Lucía por la mochila?', options: ['Noventa mil pesos.', 'Ochenta mil pesos.', 'Quince mil pesos.'], answer: 1, why: 'Costaba noventa mil, pero «la pagué ochenta mil».', en: 'How much did Lucía pay for the backpack?' },
              { prompt: '¿Cómo pagó el taxi?', options: ['En efectivo.', 'Con dólares.', 'Con tarjeta.'], answer: 2, why: '«No tenían cambio, así que pagué con tarjeta».', en: 'How did she pay for the taxi?' },
            ],
            transcript: 'Hola, Marta, soy Lucía. Ya estoy en Buenos Aires. Hoy cambié [[doscientos|teal]] dólares en una casa de cambio y ahora tengo muchísimos billetes. Aquí todo se cuenta en miles: un café [[cuesta|orange]] [[tres mil quinientos|teal]] pesos y el almuerzo me costó [[quince mil|teal]]. La gente dice «luca» para decir mil pesos: «son [[quince lucas|blue]]». En el mercado de San Telmo vi una mochila de cuero. Costaba [[noventa mil|teal]] pesos, pero pregunté: «¿[[Me hace un descuento|violet]] si pago [[en efectivo|violet]]?». Y la pagué [[ochenta mil|teal]]. En el taxi no tenían cambio, así que pagué [[con tarjeta|violet]]. Mañana viajo a Montevideo y allí hay otra moneda: [[el peso uruguayo|blue]]. ¡Un beso!',
            reply: { teacher: 'Tú eres Lucía. Tu alumno es Marta y responde al audio: comenta un precio, pregunta por otro y cuenta cuánto cuesta un café en su ciudad.', self: 'Responde a Lucía en voz alta como Marta: comenta un precio, pregunta por otro y di cuánto cuesta un café en tu ciudad. (Answer as Marta: react to a price, ask about another and say how much a coffee costs in your city.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu dinero, tu moneda', coach: 'Habla de precios reales. Talk about real prices.',
      steps: [
        { title: 'Habla de tu país · Talk about your country', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con números completos. Repite su frase con la forma correcta y sigue con la repregunta.', self: 'Lee cada pregunta, responde en voz alta con números completos y, si quieres, escribe tu respuesta. (Read each question and answer aloud with full numbers.)' } },
          { kind: 'talk', cards: [
            { q: '¿Cuál es la moneda de tu país? ¿Qué billetes y monedas hay? · What is your country’s currency? Which notes and coins are there?', followUps: ['¿Qué billete usas más? (Which note do you use most?)', '¿Usas monedas? (Do you use coins?)'], phrases: ['La moneda de mi país es [[el…|blue]]', 'Hay billetes de [[cinco, diez, veinte…|teal]]', 'Uso mucho el billete de…'], hint: 'La moneda es… · Hay billetes de…', example: 'La moneda de mi país es la libra. Hay billetes de cinco, diez, veinte y cincuenta libras. Uso mucho el billete de diez.', next: 'Ahora, los precios.' },
            { q: '¿Cuánto cuestan estas cosas en tu ciudad: un café, un menú, el transporte? · How much are these things in your city?', followUps: ['¿Es caro o barato para ti? (Is it expensive or cheap for you?)', '¿Qué es lo más caro? (What is the most expensive thing?)'], phrases: ['Un café [[cuesta|orange]]…', 'Los billetes de metro [[cuestan|orange]]…', 'Es [[caro|orange]] / [[barato|orange]] porque…'], hint: 'Cuesta + singular · Cuestan + plural.', example: 'En mi ciudad un café cuesta tres libras con cincuenta y un menú cuesta quince libras. El transporte es caro: el billete de metro cuesta casi tres libras.', next: 'Ahora, cómo pagas.' },
            { q: '¿Cómo pagas normalmente: en efectivo, con tarjeta, con el teléfono? · How do you usually pay?', followUps: ['¿Cuándo usas efectivo? (When do you use cash?)', '¿Dejas propina? ¿Cuánto? (Do you tip? How much?)'], phrases: ['Casi siempre pago [[con tarjeta|violet]].', 'Pago [[en efectivo|violet]] cuando…', 'Dejo [[propina|violet]] de…'], hint: 'En efectivo · con tarjeta · por transferencia.', example: 'Casi siempre pago con el teléfono. Pago en efectivo solo en el mercado. En los restaurantes dejo propina del diez por ciento.', next: 'Ahora, un mercado.' },
            { q: 'Estás en un mercado de Buenos Aires y quieres un mate de recuerdo. Pregunta el precio, pide descuento y paga. · You are at a market in Buenos Aires and want a mate as a souvenir.', followUps: ['¿Y si llevas dos? (What if you take two?)', '¿Tiene cambio de veinte mil? (Do you have change for twenty thousand?)'], phrases: ['¿[[Cuánto cuesta|orange]] este mate?', '¿[[Me hace un descuento|violet]] si pago en efectivo?', 'Aquí tiene: [[diez mil|teal]] pesos.'], hint: 'Con el vendedor: usted. ¿Me hace…? ¿Tiene…?', example: 'Buenas tardes. ¿Cuánto cuesta este mate? ¿Doce mil? Es un poco caro. ¿Me hace un descuento si pago en efectivo? Perfecto, aquí tiene diez mil pesos.', teacher: 'Haz tú de vendedor: empieza con un precio alto, usa «luca» una vez y baja el precio solo si tu alumno pide descuento.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno es el vendedor, pone los precios y decide si hace descuento.', self: 'Ahora haz tú de vendedor en voz alta: di tres precios y responde a un cliente que pide descuento. (Now be the seller: say three prices and answer a customer who asks for a discount.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Guía de precios', coach: 'Números con letras. Numbers in words.',
      steps: [
        { title: 'Un mensaje para un amigo que viaja · A message for a travelling friend', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos los números con letras y la concordancia de cuesta / cuestan.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después revisa los números: cien, doscientas, mil. (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: '¿Cuánto dinero necesito? · How much money do I need?', situation: 'Un amigo hispano va a visitar tu ciudad y te pregunta cuánto dinero necesita. Escríbele un mensaje con los precios. (A Spanish-speaking friend is going to visit your city and asks how much money he needs. Write him a message with the prices.)', task: [
            'Di cuál es la moneda y qué billetes hay. (Say what the currency is and which notes there are.)',
            'Di cuánto cuestan tres cosas, con los números en letras. (Say how much three things cost, with the numbers in words.)',
            'Di qué es caro y qué es barato. (Say what is expensive and what is cheap.)',
            'Explica cómo se paga: en efectivo, con tarjeta. (Explain how people pay.)',
            'Da un consejo sobre el cambio o la propina. (Give a tip about exchanging money or tipping.)',
          ], starters: ['¡Hola!', 'Aquí la moneda es…', 'Hay billetes de…', 'Un café cuesta…', 'Los taxis cuestan…', 'Es caro / barato…', 'Puedes pagar con…', 'Un consejo: …'],
            words: ['cien', 'doscientos', 'mil', 'un millón de', 'cuesta', 'cuestan', 'caro', 'barato', 'en efectivo', 'con tarjeta', 'el cambio', 'la propina'],
            model: '¡Hola, Diego! Aquí la moneda es el peso mexicano. Hay billetes de [[veinte|teal]], [[cincuenta|teal]], [[cien|teal]], [[doscientos|teal]] y [[quinientos|teal]] pesos. Un café [[cuesta|orange]] [[cincuenta|teal]] pesos y unos tacos [[cuestan|orange]] [[cien|teal]] pesos. El metro es muy barato: [[cuesta|orange]] [[cinco|teal]] pesos. Los hoteles del centro son caros: una noche [[cuesta|orange]] [[mil quinientos|teal]] pesos. En los restaurantes puedes pagar [[con tarjeta|violet]], pero en los mercados solo [[en efectivo|violet]]. Un consejo: cambia dinero en el banco y deja [[propina|violet]] del diez por ciento. ¡Te espero!',
            minWords: 55,
            checks: [
              { label: 'Un precio con cuesta o cuestan (a price with cuesta / cuestan)', pattern: '(?:^|[^\\p{L}])(?:cuestan?|valen?|salen?)\\s+(?:\\p{L}+|\\d)', tip: 'Por ejemplo: «Un café cuesta cincuenta pesos».' },
              { label: 'Un número grande con letras: cien, doscientos, mil… (a big number in words)', pattern: '(?:^|[^\\p{L}])(?:cien(?:to)?|doscient[oa]s|trescient[oa]s|cuatrocient[oa]s|quinient[oa]s|seiscient[oa]s|setecient[oa]s|ochocient[oa]s|novecient[oa]s|mil|mill[oó]n(?:es)?)(?![\\p{L}])', tip: 'Por ejemplo: «cien pesos», «mil quinientos pesos».' },
              { label: 'Una forma de pago: en efectivo, con tarjeta (a way of paying)', pattern: '(?:^|[^\\p{L}])(?:en\\s+efectivo|con\\s+(?:la\\s+)?tarjeta|por\\s+transferencia)(?![\\p{L}])', tip: 'Por ejemplo: «Puedes pagar con tarjeta».' },
            ],
            warnings: [
              { pattern: '(?:^|[^\\p{L}])un\\s+mil(?![\\p{L}])', why: 'Delante de «mil» no va «un»: **mil pesos**.' },
              { pattern: '(?:^|[^\\p{L}])ciento\\s+(?:pesos|euros|d[oó]lares|soles|libras)(?![\\p{L}])', why: 'Justo delante del nombre: **cien** pesos, cien euros.' },
              { pattern: '(?:^|[^\\p{L}])mill[oó]n(?:es)?\\s+(?:pesos|euros|d[oó]lares|soles|libras)(?![\\p{L}])', why: 'Millón + **de** + nombre: un millón **de** pesos.' },
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
            { tone: 'teal', label: 'NÚMEROS', formula: 'cien · ciento veinte · doscientas · mil · un millón de', example: 'Son tres mil quinientos pesos.', caption: 'mil sin «un»; millón con «de»; 200–900 concuerdan', en: 'mil without “un”; millón with “de”; 200–900 agree' },
            { tone: 'orange', label: 'PRECIOS', formula: '¿Cuánto cuesta / cuestan? · ¿Cuánto es? · Son…', example: '¿Cuánto cuestan los zapatos?', caption: 'costar concuerda con la cosa', en: 'costar agrees with the thing' },
            { tone: 'violet', label: 'PAGAR', formula: 'en efectivo · con tarjeta · el cambio / el vuelto', example: '¿Me hace un descuento si pago en efectivo?', caption: 'cada forma de pago con su preposición', en: 'each way of paying has its preposition' },
            { tone: 'blue', label: 'MONEDAS', formula: 'euro · peso · sol · dólar · una luca = mil pesos', example: 'En Argentina, veinte lucas son veinte mil pesos.', caption: 'cada país, su moneda y sus palabras', en: 'each country, its currency and its words' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Tres pasos en cualquier país: **pregunta** (¿Cuánto cuesta? ¿Cuánto es?), **entiende el número** (cien, quinientos, mil, un millón de) y **paga** (en efectivo o con tarjeta, y espera el vuelto). En Argentina, además, cuenta en miles: una luca = mil pesos.', en: 'Three steps in any country: ask (¿Cuánto cuesta? ¿Cuánto es?), understand the number (cien, quinientos, mil, un millón de) and pay (in cash or by card, and wait for your change). In Argentina, also count in thousands: una luca = a thousand pesos.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Seis frases, sin ayuda · Six sentences, no help', items: [
            { prompt: 'El museo cuesta 100 pesos: «Cuesta ___ pesos».', options: ['cien', 'ciento', 'un ciento'], answer: 0, why: 'Justo delante del nombre: cien.', en: 'The museum costs 100 pesos.' },
            { prompt: '¿Cuánto ___ estas gafas de sol?', options: ['cuesta', 'cuestan', 'es'], answer: 1, why: 'Las gafas: plural → cuestan.', en: 'How much are these sunglasses?' },
            { prompt: 'El coche cuesta 2.000.000 de pesos: «Cuesta dos ___ pesos».', options: ['millón de', 'millones', 'millones de'], answer: 2, why: 'Plural: millones, y con «de» delante del nombre.', en: 'The car costs 2,000,000 pesos.' },
            { prompt: 'En el mercado solo puedes pagar ___ efectivo.', options: ['con', 'en', 'por'], answer: 1, why: 'En efectivo.', en: 'At the market you can only pay in cash.' },
            { prompt: 'En Buenos Aires: «Son cinco lucas» = «Son ___ pesos».', options: ['cinco mil', 'quinientos', 'cinco millones de'], answer: 0, why: 'Una luca = mil pesos.', en: 'In Buenos Aires: “Son cinco lucas” = “It’s … pesos”.' },
            { prompt: 'Pagaste 700 libras: «Pagué ___ libras».', options: ['sietecientas', 'setecientos', 'setecientas'], answer: 2, why: '700 es irregular (sete-) y concuerda con libras: setecientas.', en: 'You paid 700 pounds.' },
          ] },
        ] },
        { title: 'Ampliación · Porcentajes y expresiones', mascot: '/autoestudio/mascot/noting.webp', coach: 'Opcional: un paso más. Optional: one step further.', blocks: [
          { kind: 'lead', text: 'Dos ideas para ir más lejos. Primera: los **porcentajes** se dicen con artículo y «por ciento»: «un diez **por ciento** de descuento», «el veinte por ciento de propina»; 100 % es **cien por cien** o **cien por ciento**. Segunda: hay expresiones con dinero que se oyen mucho: **costar un ojo de la cara** (ser muy caro), **estar sin un peso** (no tener dinero; en España «estar sin blanca», en Argentina «no tener un mango») y **salir regalado** (ser muy barato).', en: 'Two ideas to go further. First: percentages take an article and “por ciento”: “un diez por ciento de descuento”, “el veinte por ciento de propina”; 100% is cien por cien or cien por ciento. Second: some money expressions are very common: costar un ojo de la cara (to be very expensive), estar sin un peso (to have no money; in Spain “estar sin blanca”, in Argentina “no tener un mango”) and salir regalado (to be very cheap).' },
          { kind: 'choice', title: 'Para estudiantes rápidos · For fast learners', items: [
            { prompt: '«El hotel cuesta un ojo de la cara». ¿Qué quiere decir?', options: ['El hotel es muy caro.', 'El hotel está cerca.', 'El hotel es muy feo.'], answer: 0, why: 'Costar un ojo de la cara = ser muy caro.', en: '“El hotel cuesta un ojo de la cara”. What does it mean?' },
            { prompt: 'La tienda baja el precio un 10 %: «Hay ___ de descuento».', options: ['diez por cientos', 'un diez por ciento', 'un diez de cien'], answer: 1, why: 'Artículo + número + por ciento: un diez por ciento.', en: 'The shop lowers the price by 10%.' },
          ] },
          { kind: 'teacher', text: 'Este paso es opcional. Pregunta final: «¿Qué cosa te costó un ojo de la cara y qué cosa te salió regalada?». Tu alumno responde con dos frases y los precios completos.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 071 · Alguno, ninguno, mucho, poco, demasiado', text: 'Ya dices números grandes, preguntas precios y pagas en cualquier país: «¿Cuánto cuesta?», «Son tres mil quinientos pesos», «Pago en efectivo». La clase 071 retoma la ruta del curso: «Alguno, ninguno, mucho, poco, demasiado».', en: 'You can now say big numbers, ask prices and pay in any country: “¿Cuánto cuesta?”, “Son tres mil quinientos pesos”, “Pago en efectivo”. Class 071 returns to the main route of the course: “Alguno, ninguno, mucho, poco, demasiado”.', href: '/gramatica/alguno-ninguno-mucho-poco-demasiado', label: 'Ir a la clase 071' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: tu alumno resume en tres frases lo que se lleva de la clase y da un ejemplo propio de cada punto. Tarea: terminar o reescribir el texto de Escribir.' },
        ] },
      ],
    },
  ],
};
