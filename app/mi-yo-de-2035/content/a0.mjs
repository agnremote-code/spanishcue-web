// Mi yo de 2035 · A0: you meet yourself ten years from now. Simple questions
// with «voy a…» about your home, work, people and dreams. Bilingual.
const t = (es, en) => ({ es, en });
export default {
  intro: t('Una mañana abres la puerta y está ahí: eres tú, en el año 2035. Tu yo del futuro te hace preguntas. Tú respondes con «voy a…».', 'One morning you open the door and there you are: it is you, in the year 2035. Your future self asks you questions. You answer with “I am going to…”.'),
  categorias: [
    {
      icon: '🏠', title: t('Tu casa en 2035', 'Your home in 2035'),
      questions: [
        t('¿En qué ciudad vas a vivir en 2035?', 'In which city are you going to live in 2035?'),
        t('¿Casa con jardín o piso en el centro para tu futuro?', 'House with a garden or flat in the centre for your future?'),
        t('¿Quién va a desayunar contigo en 2035?', 'Who is going to have breakfast with you in 2035?'),
        t('¿Qué animal va a dormir en tu sofá en 2035?', 'What animal is going to sleep on your sofa in 2035?'),
        t('¿Mar, montaña o calle: qué paisaje tiene tu casa de 2035?', 'Sea, mountains or street: what view does your 2035 home have?'),
      ],
      starters: [t('En 2035 voy a vivir en…', 'In 2035 I am going to live in…'), t('Voy a vivir con…', 'I am going to live with…'), t('Desde mi ventana veo…', 'From my window I see…')],
    },
    {
      icon: '💼', title: t('Tu trabajo en 2035', 'Your job in 2035'),
      questions: [
        t('¿Qué profesión aparece en tu tarjeta de 2035?', 'What profession appears on your 2035 business card?'),
        t('¿Vas a trabajar en casa, en una oficina o en la calle?', 'Are you going to work at home, in an office or outdoors?'),
        t('¿Cuántas horas a la semana quieres trabajar en el futuro?', 'How many hours a week do you want to work in the future?'),
        t('¿Qué robot va a ayudarte en tu trabajo?', 'What robot is going to help you at work?'),
        t('¿Qué idioma nuevo vas a hablar en 2035?', 'What new language are you going to speak in 2035?'),
      ],
      starters: [t('Voy a ser…', 'I am going to be…'), t('Voy a trabajar en…', 'I am going to work at…'), t('Voy a hablar…', 'I am going to speak…')],
    },
    {
      icon: '👨‍👩‍👧', title: t('Tus personas en 2035', 'Your people in 2035'),
      questions: [
        t('¿Qué amigo de hoy va a estar contigo en 2035?', 'Which friend of today is going to be with you in 2035?'),
        t('¿Cuántos años va a tener tu mamá o tu papá en 2035?', 'How old is your mum or dad going to be in 2035?'),
        t('¿Qué persona nueva va a llegar a tu vida?', 'What new person is going to come into your life?'),
        t('¿Dónde vas a celebrar tus cumpleaños futuros?', 'Where are you going to celebrate your future birthdays?'),
        t('¿A quién vas a llamar todos los domingos?', 'Who are you going to call every Sunday?'),
      ],
      starters: [t('Va a estar conmigo…', '… is going to be with me'), t('Va a tener… años', '… is going to be… years old'), t('Voy a llamar a…', 'I am going to call…')],
    },
    {
      icon: '🏃', title: t('Tu cuerpo y tu salud', 'Your body and your health'),
      questions: [
        t('¿Qué deporte vas a practicar a los cuarenta, cincuenta o sesenta años?', 'What sport are you going to do at forty, fifty or sixty?'),
        t('¿Qué comida vas a comer menos en el futuro?', 'What food are you going to eat less in the future?'),
        t('¿Vas a tener el pelo largo, corto o de otro color?', 'Are you going to have long hair, short hair or another colour?'),
        t('¿Cuántas horas de sueño quieres en tu vida de 2035?', 'How many hours of sleep do you want in your 2035 life?'),
        t('¿Qué mala costumbre de hoy vas a dejar?', 'What bad habit of today are you going to stop?'),
      ],
      starters: [t('Voy a practicar…', 'I am going to do…'), t('Voy a comer menos…', 'I am going to eat less…'), t('Voy a dejar…', 'I am going to stop…')],
    },
    {
      icon: '🏙️', title: t('El mundo en 2035', 'The world in 2035'),
      questions: [
        t('¿Vas a tener un coche volador o un patinete eléctrico?', 'Are you going to have a flying car or an electric scooter?'),
        t('¿Qué aparato de hoy no va a existir en 2035?', 'What device of today is not going to exist in 2035?'),
        t('¿Cuánto va a costar un café en tu ciudad en 2035?', 'How much is a coffee going to cost in your city in 2035?'),
        t('¿Cuántos grados va a hacer en agosto en 2035?', 'How many degrees is it going to be in August in 2035?'),
        t('¿Qué país vas a visitar en 2035?', 'Which country are you going to visit in 2035?'),
      ],
      starters: [t('Voy a ir en…', 'I am going to go by…'), t('No va a existir…', '… is not going to exist'), t('Va a costar…', 'It is going to cost…')],
    },
    {
      icon: '🌠', title: t('Tus sueños', 'Your dreams'),
      questions: [
        t('¿Qué sueño de hoy vas a hacer realidad en diez años?', 'What dream of today are you going to make come true in ten years?'),
        t('¿Qué cosa nueva vas a aprender antes de 2035?', 'What new thing are you going to learn before 2035?'),
        t('¿Qué consejo te da tu yo de 2035?', 'What advice does your 2035 self give you?'),
        t('¿Qué foto de tu vida en 2035 quieres ver?', 'What photo of your life in 2035 do you want to see?'),
        t('¿Qué pregunta haces tú a tu yo del futuro?', 'What question do you ask your future self?'),
      ],
      starters: [t('Voy a aprender…', 'I am going to learn…'), t('Mi yo de 2035 me dice…', 'My 2035 self tells me…'), t('Le pregunto…', 'I ask…')],
    },
  ],
};
