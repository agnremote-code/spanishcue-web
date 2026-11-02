// El consultorio sentimental de la radio · A1: listeners’ letters about
// love, friends, family, neighbours and flatmates. You tell your own life
// and give simple advice. Bilingual.
const t = (es, en) => ({ es, en });
export default {
  intro: t('Llegan cartas al consultorio de la radio: una novia celosa, un compañero de piso desordenado, una suegra que llama cada día. Antes de dar un consejo, tú cuentas tu propia vida.', 'Letters arrive at the radio advice show: a jealous girlfriend, a messy flatmate, a mother-in-law who calls every day. Before giving advice, you talk about your own life.'),
  categorias: [
    {
      icon: '💌', title: t('Carta 1 · «Mi novia mira mi móvil»', 'Letter 1 · “My girlfriend looks at my phone”'),
      questions: [
        t('¿Quién conoce la contraseña de tu teléfono?', 'Who knows the password to your phone?'),
        t('¿Qué cosa de tu móvil es privada para ti?', 'What thing on your phone is private for you?'),
        t('¿Cuántos mensajes al día es normal en una pareja?', 'How many messages a day is normal in a couple?'),
        t('¿Qué haces cuando sientes celos?', 'What do you do when you feel jealous?'),
        t('¿Qué consejo das a este oyente?', 'What advice do you give this listener?'),
      ],
      starters: [t('La sabe…', '… knows it'), t('Para mí es privado…', 'For me … is private'), t('Le aconsejo…', 'I advise him…')],
    },
    {
      icon: '🧦', title: t('Carta 2 · «Mi compañero de piso no limpia»', 'Letter 2 · “My flatmate does not clean”'),
      questions: [
        t('¿Qué tarea de la casa haces tú con gusto?', 'What household chore do you do happily?'),
        t('¿Qué cosa sucia no soportas en una casa?', 'What dirty thing can you not stand in a home?'),
        t('¿Con quién compartiste casa y cómo fue?', 'Who did you share a home with and how was it?'),
        t('¿Cómo organizan la limpieza en tu casa?', 'How do you organise the cleaning at home?'),
        t('¿Qué nota escribes en la nevera para un compañero desordenado?', 'What note do you write on the fridge for a messy flatmate?'),
      ],
      starters: [t('Hago con gusto…', 'I happily do…'), t('No soporto…', 'I cannot stand…'), t('En mi casa cada persona…', 'At home each person…')],
    },
    {
      icon: '☎️', title: t('Carta 3 · «Mi suegra me llama cada día»', 'Letter 3 · “My mother-in-law calls me every day”'),
      questions: [
        t('¿Cada cuánto llamas a tus padres o a tus abuelos?', 'How often do you call your parents or grandparents?'),
        t('¿Qué persona de tu familia llama en el peor momento?', 'Who in your family calls at the worst moment?'),
        t('¿A qué hora no contestas el teléfono?', 'At what time do you not answer the phone?'),
        t('¿Qué tema de conversación evitas con tu familia?', 'What conversation topic do you avoid with your family?'),
        t('¿Cómo dices «ahora no puedo» con educación?', 'How do you say “I cannot now” politely?'),
      ],
      starters: [t('Los llamo…', 'I call them…'), t('Siempre llama cuando…', 'He or she always calls when…'), t('Digo: «…»', 'I say: “…”')],
    },
    {
      icon: '🏢', title: t('Carta 4 · «Mi vecino pone música a las dos»', 'Letter 4 · “My neighbour plays music at two”'),
      questions: [
        t('¿Qué ruido de tus vecinos escuchas desde tu casa?', 'What noise from your neighbours do you hear from your home?'),
        t('¿Cómo se llama tu vecino o vecina de al lado?', 'What is your next-door neighbour’s name?'),
        t('¿Qué favor pides tú a un vecino?', 'What favour do you ask a neighbour?'),
        t('¿Qué haces si una fiesta no te deja dormir?', 'What do you do if a party does not let you sleep?'),
        t('¿Qué regalo llevas a un vecino nuevo?', 'What present do you take to a new neighbour?'),
      ],
      starters: [t('Escucho…', 'I hear…'), t('Mi vecino o vecina se llama…', 'My neighbour is called…'), t('Le pido…', 'I ask him or her…')],
    },
    {
      icon: '🌹', title: t('Carta 5 · «Me gusta mi profesor de baile»', 'Letter 5 · “I like my dance teacher”'),
      questions: [
        t('¿En qué gimnasio, coro o club de tu ciudad hay gente simpática?', 'In which gym, choir or club in your city are there friendly people?'),
        t('¿Cómo notas que te pones rojo o roja delante de alguien?', 'How do you notice you are blushing in front of someone?'),
        t('¿Qué clase o curso es bueno para hacer amigos?', 'What class or course is good for making friends?'),
        t('¿Qué dices para invitar a alguien a un café?', 'What do you say to invite someone for a coffee?'),
        t('¿Qué foto pones en un perfil para conocer gente?', 'What photo do you put on a profile to meet people?'),
      ],
      starters: [t('En mi ciudad hay…', 'In my city there is…'), t('Cuando alguien me gusta,…', 'When I like someone,…'), t('Digo: «¿Tomamos…?»', 'I say: “Shall we have…?”')],
    },
    {
      icon: '🎧', title: t('Tu carta a la radio', 'Your letter to the radio'),
      questions: [
        t('¿Qué problema pequeño de tu vida cuentas en la radio?', 'What small problem in your life do you tell on the radio?'),
        t('¿Qué abuelo, tía o amiga tiene la respuesta para todo?', 'Which grandfather, aunt or friend has the answer for everything?'),
        t('¿Qué consejo recibes y no haces nunca?', 'What advice do you get and never follow?'),
        t('¿Qué nombre falso usas en tu carta?', 'What false name do you use in your letter?'),
        t('¿Qué canción pones al final de tu carta?', 'What song do you play at the end of your letter?'),
      ],
      starters: [t('Mi problema es…', 'My problem is…'), t('Tiene la respuesta para todo…', '… has the answer for everything'), t('Firmo como…', 'I sign as…')],
    },
  ],
};
