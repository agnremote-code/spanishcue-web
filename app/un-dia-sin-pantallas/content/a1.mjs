// Un día sin pantallas · A1: your screen habits today, and a plan to live
// with fewer screens. Bilingual.
const t = (es, en) => ({ es, en });
export default {
  intro: t('Antes del día sin pantallas, miras tus costumbres: cuántas horas usas el móvil, qué redes abres, qué haces cuando no hay internet. Después preparas tu plan.', 'Before the day without screens, you look at your habits: how many hours you use your phone, which social networks you open, what you do when there is no internet. Then you prepare your plan.'),
  categorias: [
    {
      icon: '⏱️', title: t('Tus horas de pantalla', 'Your screen hours'),
      questions: [
        t('¿Qué dice tu teléfono sobre tus horas de uso esta semana?', 'What does your phone say about your hours of use this week?'),
        t('¿Cuántas pantallas hay en tu casa?', 'How many screens are there in your home?'),
        t('¿Qué pantalla usas más: móvil, ordenador o televisión?', 'Which screen do you use most: phone, computer or TV?'),
        t('¿A qué hora del día usas más el teléfono?', 'At what time of the day do you use your phone most?'),
        t('¿Miras el móvil en la cama antes de dormir?', 'Do you look at your phone in bed before sleeping?'),
      ],
      starters: [t('Mi teléfono dice…', 'My phone says…'), t('En mi casa hay…', 'In my home there are…'), t('Uso más…', 'I use … most')],
    },
    {
      icon: '📲', title: t('Las redes sociales', 'Social media'),
      questions: [
        t('¿Qué red social abres sin pensar?', 'Which social network do you open without thinking?'),
        t('¿Qué tipo de videos ves en las redes?', 'What kind of videos do you watch on social media?'),
        t('¿Publicas fotos tuyas o solo miras las de otros?', 'Do you post photos of yourself or only look at other people’s?'),
        t('¿A cuántas personas sigues que no conoces?', 'How many people do you follow that you do not know?'),
        t('¿Qué cuenta de las redes te hace sentir bien?', 'Which social media account makes you feel good?'),
      ],
      starters: [t('Abro… sin pensar', 'I open… without thinking'), t('Veo videos de…', 'I watch videos about…'), t('Sigo a…', 'I follow…')],
    },
    {
      icon: '💻', title: t('Trabajo y estudios', 'Work and studies'),
      questions: [
        t('¿Cuántas horas trabajas o estudias delante de una pantalla?', 'How many hours do you work or study in front of a screen?'),
        t('¿Qué tarea de tu trabajo puedes hacer con papel y lápiz?', 'What task in your job can you do with pencil and paper?'),
        t('¿Tomas apuntes a mano o en el ordenador?', 'Do you take notes by hand or on the computer?'),
        t('¿Qué haces en tus descansos del trabajo o de clase?', 'What do you do in your work or class breaks?'),
        t('¿Qué pasa en tu trabajo un día sin internet?', 'What happens at your work on a day without internet?'),
      ],
      starters: [t('Trabajo… horas delante de…', 'I work… hours in front of…'), t('Tomo apuntes…', 'I take notes…'), t('En mis descansos…', 'In my breaks…')],
    },
    {
      icon: '👨‍👩‍👧', title: t('La familia y las pantallas', 'Family and screens'),
      questions: [
        t('¿Hay móviles en la mesa cuando come tu familia?', 'Are there phones on the table when your family eats?'),
        t('¿A qué edad tienen teléfono los niños de tu familia?', 'At what age do the children in your family get a phone?'),
        t('¿Qué persona mayor de tu familia usa mucho el móvil?', 'Which older person in your family uses their phone a lot?'),
        t('¿Qué veías en la tele de pequeño o pequeña?', 'What did you watch on TV as a child?'),
        t('¿Qué regla de pantallas tiene tu casa?', 'What screen rule does your home have?'),
      ],
      starters: [t('En mi casa, en la mesa,…', 'At home, at the table,…'), t('Tienen teléfono a los…', 'They get a phone at…'), t('La regla es…', 'The rule is…')],
    },
    {
      icon: '🎸', title: t('Otras cosas para hacer', 'Other things to do'),
      questions: [
        t('¿Qué hobby sin pantalla quieres empezar?', 'What screen-free hobby do you want to start?'),
        t('¿Qué deporte haces sin auriculares?', 'What sport do you do without headphones?'),
        t('¿Qué haces con tus amigos sin mirar el teléfono?', 'What do you do with your friends without looking at your phone?'),
        t('¿Qué instrumento o canción aprendes sin videos?', 'What instrument or song do you learn without videos?'),
        t('¿Qué lugar de tu ciudad no tiene buena señal?', 'What place in your city has bad signal?'),
      ],
      starters: [t('Quiero empezar…', 'I want to start…'), t('Con mis amigos…', 'With my friends…'), t('Sin señal está…', '… has no signal')],
    },
    {
      icon: '📵', title: t('Tu plan', 'Your plan'),
      questions: [
        t('¿Qué aplicación borras para usar menos el móvil?', 'What app do you delete to use your phone less?'),
        t('¿Dónde dejas el teléfono por la noche?', 'Where do you leave your phone at night?'),
        t('¿Sábado o domingo: cuándo apagas todo?', 'Saturday or Sunday: when do you switch everything off?'),
        t('¿Qué persona hace el reto contigo?', 'Who does the challenge with you?'),
        t('¿Qué premio te das si cumples tu plan?', 'What prize do you give yourself if you keep to your plan?'),
      ],
      starters: [t('Borro…', 'I delete…'), t('Dejo el teléfono en…', 'I leave my phone in…'), t('Lo apago todo el…', 'I switch everything off on…')],
    },
  ],
};
