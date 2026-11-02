// Mi yo de 2035 · A1: a letter to yourself in 2035, about your routine,
// your plans, your town and the technology around you. Bilingual.
const t = (es, en) => ({ es, en });
export default {
  intro: t('Hoy escribes una carta a tu yo de 2035. Antes de escribir, hablas: cómo es tu vida hoy, qué quieres cambiar y qué esperas del futuro.', 'Today you write a letter to your 2035 self. Before writing, you talk: what your life is like today, what you want to change and what you hope for in the future.'),
  categorias: [
    {
      icon: '✉️', title: t('Querido yo de 2035', 'Dear 2035 me'),
      questions: [
        t('¿Qué cosa de tu vida de hoy quieres recordar en 2035?', 'What thing in your life today do you want to remember in 2035?'),
        t('¿Qué foto de esta semana guardas para tu yo del futuro?', 'What photo from this week do you save for your future self?'),
        t('¿Qué canción de este año es tu canción de hoy?', 'What song from this year is your song for today?'),
        t('¿Qué preocupación de hoy va a ser pequeña en 2035?', 'What worry of today is going to be small in 2035?'),
        t('¿Cómo empiezas una carta a ti mismo o a ti misma?', 'How do you start a letter to yourself?'),
      ],
      starters: [t('Querido yo:…', 'Dear me:…'), t('Hoy mi canción es…', 'Today my song is…'), t('No te preocupes por…', 'Do not worry about…')],
    },
    {
      icon: '📅', title: t('Tu rutina de hoy y de mañana', 'Your routine today and tomorrow'),
      questions: [
        t('¿Qué parte de tu rutina actual vas a cambiar pronto?', 'What part of your current routine are you going to change soon?'),
        t('¿Qué hábito sano empiezas este mes?', 'What healthy habit are you starting this month?'),
        t('¿Cuánto tiempo libre tienes hoy y cuánto quieres en el futuro?', 'How much free time do you have today and how much do you want in the future?'),
        t('¿Cómo imaginas un domingo perfecto de 2035?', 'How do you imagine a perfect Sunday in 2035?'),
        t('¿Planchar, fregar o cocinar: qué va a hacer tu robot?', 'Ironing, washing up or cooking: what is your robot going to do?'),
      ],
      starters: [t('Voy a cambiar…', 'I am going to change…'), t('Este mes empiezo…', 'This month I start…'), t('Ahora tengo… y quiero…', 'Now I have… and I want…')],
    },
    {
      icon: '🎯', title: t('Tus planes', 'Your plans'),
      questions: [
        t('¿Qué título, curso o diploma quieres tener en 2035?', 'What degree, course or diploma do you want to have in 2035?'),
        t('¿Cuánto dinero quieres ahorrar al mes para tu futuro?', 'How much money do you want to save a month for your future?'),
        t('¿Qué viaje grande planeas antes de 2035?', 'What big trip are you planning before 2035?'),
        t('¿En qué idioma vas a hablar con tus hijos o sobrinos?', 'In what language are you going to speak with your children or nephews and nieces?'),
        t('¿Qué plan tienes para el próximo verano?', 'What plan do you have for next summer?'),
      ],
      starters: [t('Quiero tener…', 'I want to have…'), t('Voy a ahorrar…', 'I am going to save…'), t('Planeo ir a…', 'I am planning to go to…')],
    },
    {
      icon: '📱', title: t('La tecnología de tu futuro', 'The technology of your future'),
      questions: [
        t('¿Qué aplicación de hoy vas a seguir usando en 2035?', 'What app of today are you going to keep using in 2035?'),
        t('¿Vas a tener un asistente con inteligencia artificial en casa?', 'Are you going to have an AI assistant at home?'),
        t('¿Qué invento futuro no quieres en tu casa?', 'What future invention do you not want in your home?'),
        t('¿Cuántas horas al día miras pantallas hoy y cuántas en 2035?', 'How many hours a day do you look at screens today and how many in 2035?'),
        t('¿Qué invento quieres ver antes de 2035?', 'What invention do you want to see before 2035?'),
      ],
      starters: [t('Voy a seguir usando…', 'I am going to keep using…'), t('Me da miedo…', '… scares me'), t('Quiero ver…', 'I want to see…')],
    },
    {
      icon: '🌳', title: t('Tu barrio y tu planeta', 'Your neighbourhood and your planet'),
      questions: [
        t('¿Qué tienda de tu barrio va a seguir abierta en 2035?', 'Which shop in your neighbourhood is going to still be open in 2035?'),
        t('¿Qué cambio necesita tu ciudad en los próximos diez años?', 'What change does your city need in the next ten years?'),
        t('¿Qué botella, bolsa o envase reutilizas cada semana?', 'What bottle, bag or container do you reuse every week?'),
        t('¿Cómo va a ser el invierno en tu ciudad en el futuro?', 'What is winter going to be like in your city in the future?'),
        t('¿Qué parque o plaza quieres ver en tu barrio?', 'What park or square do you want to see in your neighbourhood?'),
      ],
      starters: [t('Va a seguir abierta…', '… is going to still be open'), t('Mi ciudad necesita…', 'My city needs…'), t('Quiero ver…', 'I want to see…')],
    },
    {
      icon: '💛', title: t('Lo importante', 'What matters'),
      questions: [
        t('¿Qué persona de hoy quieres tener cerca en 2035?', 'Who from today do you want to have close in 2035?'),
        t('¿Qué costumbre tuya de hoy va a seguir igual en 2035?', 'What habit of yours today is going to stay the same in 2035?'),
        t('¿Qué alegría pequeña de hoy va a durar hasta 2035?', 'What small joy of today is going to last until 2035?'),
        t('¿Qué secreto de hoy cuentas en tu carta?', 'What secret of today do you tell in your letter?'),
        t('¿Cómo terminas tu carta al futuro?', 'How do you end your letter to the future?'),
      ],
      starters: [t('Quiero tener cerca a…', 'I want to have … close'), t('No quiero perder…', 'I do not want to lose…'), t('Un abrazo de…', 'A hug from…')],
    },
  ],
};
