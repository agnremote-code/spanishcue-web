// Speed dating de personajes · A1: six new people, five questions each about
// your routine, your city, your people and your plans. Bilingual.
const t = (es, en) => ({ es, en });
export default {
  intro: t('Segunda noche de citas rápidas. Hoy conoces a seis personas con vidas muy distintas. Ellas preguntan; tú cuentas tu vida.', 'Second night of speed dating. Today you meet six people with very different lives. They ask; you tell them about your life.'),
  categorias: [
    {
      icon: '🌙', title: t('Rocío, la enfermera de noche de Madrid', 'Rocío, the night nurse from Madrid'),
      questions: [
        t('¿Qué te despierta en mitad de la noche?', 'What wakes you up in the middle of the night?'),
        t('¿Qué cena rápida preparas después de un día horrible?', 'What quick dinner do you make after a horrible day?'),
        t('¿Qué remedio casero usa tu familia para el resfriado?', 'What home remedy does your family use for a cold?'),
        t('¿Qué parte de tu semana te da más energía?', 'What part of your week gives you the most energy?'),
        t('¿Qué trabajo de noche puedes hacer tú? ¿Cuál no?', 'What night job could you do? Which one not?'),
      ],
      starters: [t('Normalmente duermo…', 'I normally sleep…'), t('Cuando llego a casa…', 'When I get home…'), t('Me cuida…', '… looks after me')],
    },
    {
      icon: '🚕', title: t('Ramón, el taxista que conoce todas las calles', 'Tomás, the taxi driver who knows every street'),
      questions: [
        t('¿Qué esquina de tu ciudad tiene una historia para ti?', 'Which corner of your city has a story for you?'),
        t('¿Qué rincón de tu barrio solo conocen los vecinos?', 'What spot in your neighbourhood do only the locals know?'),
        t('¿Qué hablas con un taxista o un conductor?', 'What do you talk about with a taxi driver or a driver?'),
        t('¿Qué haces en un atasco de una hora?', 'What do you do in a one-hour traffic jam?'),
        t('¿Qué pasajero o vecino del metro recuerdas?', 'Which passenger or neighbour on the metro do you remember?'),
      ],
      starters: [t('En mi ciudad hay…', 'In my city there is…'), t('Te recomiendo…', 'I recommend…'), t('Paso más o menos…', 'I spend about…')],
    },
    {
      icon: '🎒', title: t('Aisha, la estudiante de intercambio en Guadalajara', 'Aisha, the exchange student in Guadalajara'),
      questions: [
        t('¿En qué ciudad del mundo vives un año gratis?', 'In which city in the world would you live for a year for free?'),
        t('¿Qué cosa de tu cultura sorprende a los extranjeros?', 'What thing in your culture surprises foreigners?'),
        t('¿Qué palabra en español es tu favorita y por qué?', 'What is your favourite Spanish word and why?'),
        t('¿Qué echas de menos cuando estás lejos de casa?', 'What do you miss when you are far from home?'),
        t('¿Qué regla de tu casa es importante para compartir piso?', 'What house rule is important for sharing a flat?'),
      ],
      starters: [t('Quiero vivir en…', 'I want to live in…'), t('En mi país es normal…', 'In my country it is normal…'), t('Echo de menos…', 'I miss…')],
    },
    {
      icon: '👴', title: t('Don Ernesto, el jubilado que aprende a usar el celular', 'Don Ernesto, the retiree learning to use his mobile'),
      questions: [
        t('¿Qué abuelo o abuela de tu familia usa emojis raros?', 'Which grandfather or grandmother in your family uses strange emojis?'),
        t('¿Qué aplicación borras y no echas de menos?', 'What app could you delete and not miss?'),
        t('¿Qué carta, nota o tarjeta guardas en un cajón?', 'What letter, note or card do you keep in a drawer?'),
        t('¿Qué cosa antigua todavía usas en tu casa?', 'What old thing do you still use at home?'),
        t('¿Qué aprendes ahora que antes no sabías?', 'What are you learning now that you did not know before?'),
      ],
      starters: [t('Me pide ayuda…', '… asks me for help'), t('Todavía uso…', 'I still use…'), t('Ahora aprendo…', 'Now I am learning…')],
    },
    {
      icon: '🪴', title: t('Luna, la chica de las cien plantas', 'Luna, the girl with a hundred plants'),
      questions: [
        t('¿Cuántas plantas viven en tu casa y quién las riega?', 'How many plants live in your home and who waters them?'),
        t('¿Qué haces para cuidar el planeta en tu día a día?', 'What do you do to look after the planet day to day?'),
        t('¿Qué serie miras un domingo gris con una manta?', 'What series do you watch on a grey Sunday under a blanket?'),
        t('¿Qué estación del año te pone de buen humor?', 'What season of the year puts you in a good mood?'),
        t('¿Qué prenda vieja de tu armario no tiras nunca?', 'What old piece of clothing in your wardrobe do you never throw away?'),
      ],
      starters: [t('En mi casa hay…', 'In my home there are…'), t('Para cuidar el planeta…', 'To look after the planet…'), t('Hoy hace…', 'Today it is…')],
    },
    {
      icon: '💌', title: t('El final de la noche', 'The end of the night'),
      questions: [
        t('¿Con qué persona de hoy compartes un taxi?', 'Which person from today would you share a taxi with?'),
        t('¿Qué plan barato propones para una segunda cita?', 'What cheap plan do you suggest for a second date?'),
        t('¿Qué detalle te hace sonreír en una persona?', 'What detail in a person makes you smile?'),
        t('¿Qué dices de ti en una aplicación de citas?', 'What do you say about yourself on a dating app?'),
        t('¿Qué noche especial de tu vida termina con un amanecer?', 'What special night of your life ends with a sunrise?'),
      ],
      starters: [t('Comparto un taxi con…', 'I share a taxi with…'), t('Propongo…', 'I suggest…'), t('Me hace sonreír…', '… makes me smile')],
    },
  ],
};
