// El billete ganador · A1: your money today and your money with the prize:
// spending, saving, family, work and small luxuries. Bilingual.
const t = (es, en) => ({ es, en });
export default {
  intro: t('Ganaste un premio de cien mil euros: no es un millón, pero cambia tu vida. Hoy comparas tu dinero de hoy con tu dinero de mañana.', 'You won a prize of one hundred thousand euros: it is not a million, but it changes your life. Today you compare your money today with your money tomorrow.'),
  categorias: [
    {
      icon: '👛', title: t('Tu dinero hoy', 'Your money today'),
      questions: [
        t('¿Cuántas monedas y billetes hay ahora en tu cartera?', 'How many coins and notes are in your wallet now?'),
        t('¿Qué factura del mes te da más miedo?', 'Which monthly bill scares you most?'),
        t('¿Qué haces para ahorrar un poco cada semana?', 'What do you do to save a little every week?'),
        t('¿Qué precio de tu ciudad sorprende a un turista?', 'What price in your city surprises a tourist?'),
        t('¿Qué compra pequeña te hace feliz?', 'What small purchase makes you happy?'),
      ],
      starters: [t('En mi cartera hay…', 'In my wallet there is…'), t('Me da miedo la factura de…', 'The … bill scares me'), t('Para ahorrar…', 'To save…')],
    },
    {
      icon: '🏦', title: t('Guardar o gastar', 'Save or spend'),
      questions: [
        t('¿Qué parte del premio guardas en el banco?', 'What part of the prize do you keep in the bank?'),
        t('¿Pagas deudas o te vas de vacaciones primero?', 'Do you pay debts or go on holiday first?'),
        t('¿Qué gasto de tu casa pagas primero con el premio?', 'What household expense do you pay first with the prize?'),
        t('¿Quién te da consejos de dinero?', 'Who gives you money advice?'),
        t('¿Qué cosa cara compras sin pensar mucho?', 'What expensive thing do you buy without thinking much?'),
      ],
      starters: [t('Guardo…', 'I keep…'), t('Primero pago…', 'First I pay…'), t('Me da consejos…', '… gives me advice')],
    },
    {
      icon: '👨‍👩‍👧‍👦', title: t('La familia y los amigos', 'Family and friends'),
      questions: [
        t('¿Qué hermano, tía o abuelo recibe parte del premio?', 'Which brother, aunt or grandfather gets part of the prize?'),
        t('¿Cuentas el secreto del premio a tus amigos?', 'Do you tell your friends the secret about the prize?'),
        t('¿Qué haces si un primo lejano te pide dinero?', 'What do you do if a distant cousin asks you for money?'),
        t('¿Qué fiesta organizas para celebrar?', 'What party do you organise to celebrate?'),
        t('¿Con quién compartes el premio?', 'Who do you share the prize with?'),
      ],
      starters: [t('Ayudo a…', 'I help…'), t('No se lo cuento a…', 'I do not tell…'), t('Comparto con…', 'I share with…')],
    },
    {
      icon: '💼', title: t('El trabajo', 'Work'),
      questions: [
        t('¿Dejas tu trabajo o tus estudios con cien mil euros?', 'Do you leave your job or studies with one hundred thousand euros?'),
        t('¿Qué le dices a tu jefe el día después del premio?', 'What do you say to your boss the day after the prize?'),
        t('¿Qué curso pagas con el dinero?', 'What course do you pay for with the money?'),
        t('¿Qué negocio pequeño abres?', 'What small business do you open?'),
        t('¿Qué trabajo haces gratis por amor?', 'What work do you do for free, for love?'),
      ],
      starters: [t('Dejo… / No dejo…', 'I leave… / I do not leave…'), t('Le digo…', 'I tell him or her…'), t('Abro…', 'I open…')],
    },
    {
      icon: '🥂', title: t('Pequeños lujos', 'Small luxuries'),
      questions: [
        t('¿Qué restaurante caro de tu ciudad visitas?', 'Which expensive restaurant in your city do you visit?'),
        t('¿Qué concierto o partido ves en primera fila?', 'What concert or match do you watch from the front row?'),
        t('¿Qué servicio pagas para no hacer una tarea de casa?', 'What service do you pay for so as not to do a household chore?'),
        t('¿Qué ropa o zapatos compras de una marca cara?', 'What clothes or shoes do you buy from an expensive brand?'),
        t('¿Qué lujo pequeño tienes ya en tu vida?', 'What small luxury do you already have in your life?'),
      ],
      starters: [t('Voy a…', 'I go to…'), t('Pago para no…', 'I pay so as not to…'), t('Mi lujo pequeño es…', 'My small luxury is…')],
    },
    {
      icon: '🌍', title: t('Ayudar a otros', 'Helping others'),
      questions: [
        t('¿Qué organización de tu ciudad recibe tu ayuda?', 'Which organisation in your city gets your help?'),
        t('¿Qué problema de tu barrio arreglas con dinero?', 'What problem in your neighbourhood do you fix with money?'),
        t('¿Ayudas a animales, a niños o al planeta?', 'Do you help animals, children or the planet?'),
        t('¿Qué haces por una persona mayor de tu edificio?', 'What do you do for an older person in your building?'),
        t('¿Qué cosa buena haces sin dinero cada semana?', 'What good thing do you do without money every week?'),
      ],
      starters: [t('Ayudo a…', 'I help…'), t('En mi barrio arreglo…', 'In my neighbourhood I fix…'), t('Cada semana…', 'Every week…')],
    },
  ],
};
