const prompts = [
  {
    "id": "a0-sobre-ti-0",
    "level": "A0",
    "zone": "sobre-ti",
    "type": "choice",
    "question": "¿Cómo te llamas? / What is your name?",
    "choices": [
      "Alex",
      "Sam"
    ],
    "followUps": [
      "¿Y tú? / And you? Ask your teacher and listen.",
      "Otra respuesta. / Another answer. Say the other complete model."
    ],
    "support": [
      "Me llamo Alex. / My name is Alex.",
      "Me llamo Sam. / My name is Sam.",
      "yo = I · tú = you. Copy one complete model; the verb is ready to use."
    ],
    "teacherNote": "Read the English question. Point to each choice and model its matching sentence. Learner speaks; teacher clicks."
  },
  {
    "id": "a0-sobre-ti-1",
    "level": "A0",
    "zone": "sobre-ti",
    "type": "choice",
    "question": "¿De dónde eres? / Where are you from?",
    "choices": [
      "España / Spain",
      "Canadá / Canada"
    ],
    "followUps": [
      "¿Y tú? / And you? Ask your teacher and listen.",
      "Otra respuesta. / Another answer. Say the other complete model."
    ],
    "support": [
      "Soy de España. / I am from Spain.",
      "Soy de Canadá. / I am from Canada.",
      "yo = I · tú = you. Copy one complete model; the verb is ready to use."
    ],
    "teacherNote": "Read the English question. Point to each choice and model its matching sentence. Learner speaks; teacher clicks."
  },
  {
    "id": "a0-sobre-ti-2",
    "level": "A0",
    "zone": "sobre-ti",
    "type": "choice",
    "question": "¿Dónde vives? / Where do you live?",
    "choices": [
      "ciudad / city",
      "pueblo / village"
    ],
    "followUps": [
      "¿Y tú? / And you? Ask your teacher and listen.",
      "Otra respuesta. / Another answer. Say the other complete model."
    ],
    "support": [
      "Vivo en una ciudad. / I live in a city.",
      "Vivo en un pueblo. / I live in a village.",
      "yo = I · tú = you. Copy one complete model; the verb is ready to use."
    ],
    "teacherNote": "Read the English question. Point to each choice and model its matching sentence. Learner speaks; teacher clicks."
  },
  {
    "id": "a0-vida-real-0",
    "level": "A0",
    "zone": "vida-real",
    "type": "choice",
    "question": "¿Qué bebes? / What do you drink?",
    "choices": [
      "agua / water",
      "té / tea"
    ],
    "followUps": [
      "¿Y tú? / And you? Ask your teacher and listen.",
      "Otra respuesta. / Another answer. Say the other complete model."
    ],
    "support": [
      "Bebo agua. / I drink water.",
      "Bebo té. / I drink tea.",
      "yo = I · tú = you. Copy one complete model; the verb is ready to use."
    ],
    "teacherNote": "Read the English question. Point to each choice and model its matching sentence. Learner speaks; teacher clicks."
  },
  {
    "id": "a0-vida-real-1",
    "level": "A0",
    "zone": "vida-real",
    "type": "choice",
    "question": "¿Cómo vas? / How do you travel?",
    "choices": [
      "a pie / on foot",
      "en autobús / by bus"
    ],
    "followUps": [
      "¿Y tú? / And you? Ask your teacher and listen.",
      "Otra respuesta. / Another answer. Say the other complete model."
    ],
    "support": [
      "Voy a pie. / I walk.",
      "Voy en autobús. / I go by bus.",
      "yo = I · tú = you. Copy one complete model; the verb is ready to use."
    ],
    "teacherNote": "Read the English question. Point to each choice and model its matching sentence. Learner speaks; teacher clicks."
  },
  {
    "id": "a0-vida-real-2",
    "level": "A0",
    "zone": "vida-real",
    "type": "choice",
    "question": "¿Qué comes? / What do you eat?",
    "choices": [
      "pan / bread",
      "fruta / fruit"
    ],
    "followUps": [
      "¿Y tú? / And you? Ask your teacher and listen.",
      "Otra respuesta. / Another answer. Say the other complete model."
    ],
    "support": [
      "Como pan. / I eat bread.",
      "Como fruta. / I eat fruit.",
      "yo = I · tú = you. Copy one complete model; the verb is ready to use."
    ],
    "teacherNote": "Read the English question. Point to each choice and model its matching sentence. Learner speaks; teacher clicks."
  },
  {
    "id": "a0-elige-0",
    "level": "A0",
    "zone": "elige",
    "type": "choice",
    "question": "¿Dónde quieres ir? / Where do you want to go?",
    "choices": [
      "casa / home",
      "parque / park"
    ],
    "followUps": [
      "¿Y tú? / And you? Ask your teacher and listen.",
      "Otra respuesta. / Another answer. Say the other complete model."
    ],
    "support": [
      "Quiero ir a casa. / I want to go home.",
      "Quiero ir al parque. / I want to go to the park.",
      "yo = I · tú = you. Copy one complete model; the verb is ready to use."
    ],
    "teacherNote": "Read the English question. Point to each choice and model its matching sentence. Learner speaks; teacher clicks."
  },
  {
    "id": "a0-elige-1",
    "level": "A0",
    "zone": "elige",
    "type": "choice",
    "question": "¿Qué color prefieres? / What colour do you prefer?",
    "choices": [
      "rojo / red",
      "azul / blue"
    ],
    "followUps": [
      "¿Y tú? / And you? Ask your teacher and listen.",
      "Otra respuesta. / Another answer. Say the other complete model."
    ],
    "support": [
      "Prefiero rojo. / I prefer red.",
      "Prefiero azul. / I prefer blue.",
      "yo = I · tú = you. Copy one complete model; the verb is ready to use."
    ],
    "teacherNote": "Read the English question. Point to each choice and model its matching sentence. Learner speaks; teacher clicks."
  },
  {
    "id": "a0-elige-2",
    "level": "A0",
    "zone": "elige",
    "type": "choice",
    "question": "¿Qué quieres hacer? / What do you want to do?",
    "choices": [
      "leer / read",
      "caminar / walk"
    ],
    "followUps": [
      "¿Y tú? / And you? Ask your teacher and listen.",
      "Otra respuesta. / Another answer. Say the other complete model."
    ],
    "support": [
      "Quiero leer. / I want to read.",
      "Quiero caminar. / I want to walk.",
      "yo = I · tú = you. Copy one complete model; the verb is ready to use."
    ],
    "teacherNote": "Read the English question. Point to each choice and model its matching sentence. Learner speaks; teacher clicks."
  },
  {
    "id": "a0-opinion-0",
    "level": "A0",
    "zone": "opinion",
    "type": "choice",
    "question": "¿Te gusta el bosque? / Do you like the forest?",
    "choices": [
      "sí / yes",
      "no / no"
    ],
    "followUps": [
      "¿Y tú? / And you? Ask your teacher and listen.",
      "Otra respuesta. / Another answer. Say the other complete model."
    ],
    "support": [
      "Sí, me gusta. / Yes, I like it.",
      "No me gusta. / I do not like it.",
      "yo = I · tú = you. Copy one complete model; the verb is ready to use."
    ],
    "teacherNote": "Read the English question. Point to each choice and model its matching sentence. Learner speaks; teacher clicks."
  },
  {
    "id": "a0-opinion-1",
    "level": "A0",
    "zone": "opinion",
    "type": "choice",
    "question": "¿El hongo es bonito? / Is the mushroom pretty?",
    "choices": [
      "bonito / pretty",
      "feo / ugly"
    ],
    "followUps": [
      "¿Y tú? / And you? Ask your teacher and listen.",
      "Otra respuesta. / Another answer. Say the other complete model."
    ],
    "support": [
      "Es bonito. / It is pretty.",
      "Es feo. / It is ugly.",
      "yo = I · tú = you. Copy one complete model; the verb is ready to use."
    ],
    "teacherNote": "Read the English question. Point to each choice and model its matching sentence. Learner speaks; teacher clicks."
  },
  {
    "id": "a0-opinion-2",
    "level": "A0",
    "zone": "opinion",
    "type": "choice",
    "question": "¿Caminar es fácil? / Is walking easy?",
    "choices": [
      "fácil / easy",
      "difícil / difficult"
    ],
    "followUps": [
      "¿Y tú? / And you? Ask your teacher and listen.",
      "Otra respuesta. / Another answer. Say the other complete model."
    ],
    "support": [
      "Es fácil. / It is easy.",
      "Es difícil. / It is difficult.",
      "yo = I · tú = you. Copy one complete model; the verb is ready to use."
    ],
    "teacherNote": "Read the English question. Point to each choice and model its matching sentence. Learner speaks; teacher clicks."
  },
  {
    "id": "a0-suposiciones-0",
    "level": "A0",
    "zone": "suposiciones",
    "type": "choice",
    "question": "Tienes una cesta. ¿Qué quieres? / You have a basket. What do you want?",
    "choices": [
      "pan / bread",
      "fruta / fruit"
    ],
    "followUps": [
      "¿Y tú? / And you? Ask your teacher and listen.",
      "Otra respuesta. / Another answer. Say the other complete model."
    ],
    "support": [
      "Quiero pan. / I want bread.",
      "Quiero fruta. / I want fruit.",
      "yo = I · tú = you. Copy one complete model; the verb is ready to use."
    ],
    "teacherNote": "Read the English question. Point to each choice and model its matching sentence. Learner speaks; teacher clicks."
  },
  {
    "id": "a0-suposiciones-1",
    "level": "A0",
    "zone": "suposiciones",
    "type": "choice",
    "question": "Tienes una casa nueva. ¿Qué necesitas? / You have a new house. What do you need?",
    "choices": [
      "cama / bed",
      "mesa / table"
    ],
    "followUps": [
      "¿Y tú? / And you? Ask your teacher and listen.",
      "Otra respuesta. / Another answer. Say the other complete model."
    ],
    "support": [
      "Necesito una cama. / I need a bed.",
      "Necesito una mesa. / I need a table.",
      "yo = I · tú = you. Copy one complete model; the verb is ready to use."
    ],
    "teacherNote": "Read the English question. Point to each choice and model its matching sentence. Learner speaks; teacher clicks."
  },
  {
    "id": "a0-suposiciones-2",
    "level": "A0",
    "zone": "suposiciones",
    "type": "choice",
    "question": "Tienes tiempo libre. ¿Qué haces? / You have free time. What do you do?",
    "choices": [
      "duermo / I sleep",
      "leo / I read"
    ],
    "followUps": [
      "¿Y tú? / And you? Ask your teacher and listen.",
      "Otra respuesta. / Another answer. Say the other complete model."
    ],
    "support": [
      "Yo duermo. / I sleep.",
      "Yo leo. / I read.",
      "yo = I · tú = you. Copy one complete model; the verb is ready to use."
    ],
    "teacherNote": "Read the English question. Point to each choice and model its matching sentence. Learner speaks; teacher clicks."
  },
  {
    "id": "a0-afirmacion-0",
    "level": "A0",
    "zone": "afirmacion",
    "type": "choice",
    "question": "El hongo es grande. ¿Sí o no? / The mushroom is big. Yes or no?",
    "choices": [
      "sí / yes",
      "no / no"
    ],
    "followUps": [
      "¿Y tú? / And you? Ask your teacher and listen.",
      "Otra respuesta. / Another answer. Say the other complete model."
    ],
    "support": [
      "Sí, es grande. / Yes, it is big.",
      "No, es pequeño. / No, it is small.",
      "yo = I · tú = you. Copy one complete model; the verb is ready to use."
    ],
    "teacherNote": "Read the English question. Point to each choice and model its matching sentence. Learner speaks; teacher clicks."
  },
  {
    "id": "a0-afirmacion-1",
    "level": "A0",
    "zone": "afirmacion",
    "type": "choice",
    "question": "El parque es tranquilo. ¿Sí o no? / The park is quiet. Yes or no?",
    "choices": [
      "sí / yes",
      "no / no"
    ],
    "followUps": [
      "¿Y tú? / And you? Ask your teacher and listen.",
      "Otra respuesta. / Another answer. Say the other complete model."
    ],
    "support": [
      "Sí, es tranquilo. / Yes, it is quiet.",
      "No, hay ruido. / No, there is noise.",
      "yo = I · tú = you. Copy one complete model; the verb is ready to use."
    ],
    "teacherNote": "Read the English question. Point to each choice and model its matching sentence. Learner speaks; teacher clicks."
  },
  {
    "id": "a0-afirmacion-2",
    "level": "A0",
    "zone": "afirmacion",
    "type": "choice",
    "question": "El agua está fría. ¿Sí o no? / The water is cold. Yes or no?",
    "choices": [
      "sí / yes",
      "no / no"
    ],
    "followUps": [
      "¿Y tú? / And you? Ask your teacher and listen.",
      "Otra respuesta. / Another answer. Say the other complete model."
    ],
    "support": [
      "Sí, está fría. / Yes, it is cold.",
      "No, está caliente. / No, it is hot.",
      "yo = I · tú = you. Copy one complete model; the verb is ready to use."
    ],
    "teacherNote": "Read the English question. Point to each choice and model its matching sentence. Learner speaks; teacher clicks."
  },
  {
    "id": "a0-compara-0",
    "level": "A0",
    "zone": "compara",
    "type": "choice",
    "question": "¿Grande o pequeño? / Big or small?",
    "choices": [
      "grande / big",
      "pequeño / small"
    ],
    "followUps": [
      "¿Y tú? / And you? Ask your teacher and listen.",
      "Otra respuesta. / Another answer. Say the other complete model."
    ],
    "support": [
      "Prefiero el grande. / I prefer the big one.",
      "Prefiero el pequeño. / I prefer the small one.",
      "yo = I · tú = you. Copy one complete model; the verb is ready to use."
    ],
    "teacherNote": "Read the English question. Point to each choice and model its matching sentence. Learner speaks; teacher clicks."
  },
  {
    "id": "a0-compara-1",
    "level": "A0",
    "zone": "compara",
    "type": "choice",
    "question": "¿Día o noche? / Day or night?",
    "choices": [
      "día / day",
      "noche / night"
    ],
    "followUps": [
      "¿Y tú? / And you? Ask your teacher and listen.",
      "Otra respuesta. / Another answer. Say the other complete model."
    ],
    "support": [
      "Prefiero el día. / I prefer daytime.",
      "Prefiero la noche. / I prefer night.",
      "yo = I · tú = you. Copy one complete model; the verb is ready to use."
    ],
    "teacherNote": "Read the English question. Point to each choice and model its matching sentence. Learner speaks; teacher clicks."
  },
  {
    "id": "a0-compara-2",
    "level": "A0",
    "zone": "compara",
    "type": "choice",
    "question": "¿Cerca o lejos? / Near or far?",
    "choices": [
      "cerca / near",
      "lejos / far"
    ],
    "followUps": [
      "¿Y tú? / And you? Ask your teacher and listen.",
      "Otra respuesta. / Another answer. Say the other complete model."
    ],
    "support": [
      "Está cerca. / It is near.",
      "Está lejos. / It is far.",
      "yo = I · tú = you. Copy one complete model; the verb is ready to use."
    ],
    "teacherNote": "Read the English question. Point to each choice and model its matching sentence. Learner speaks; teacher clicks."
  },
  {
    "id": "a0-recuerdos-0",
    "level": "A0",
    "zone": "recuerdos",
    "type": "choice",
    "question": "Mira una foto. ¿Quién está? / Look at a photo. Who is there?",
    "choices": [
      "familia / family",
      "amigos / friends"
    ],
    "followUps": [
      "¿Y tú? / And you? Ask your teacher and listen.",
      "Otra respuesta. / Another answer. Say the other complete model."
    ],
    "support": [
      "Es mi familia. / It is my family.",
      "Son mis amigos. / They are my friends.",
      "yo = I · tú = you. Copy one complete model; the verb is ready to use."
    ],
    "teacherNote": "Read the English question. Point to each choice and model its matching sentence. Learner speaks; teacher clicks."
  },
  {
    "id": "a0-recuerdos-1",
    "level": "A0",
    "zone": "recuerdos",
    "type": "choice",
    "question": "¿Dónde está la foto? / Where is the photo?",
    "choices": [
      "casa / home",
      "teléfono / phone"
    ],
    "followUps": [
      "¿Y tú? / And you? Ask your teacher and listen.",
      "Otra respuesta. / Another answer. Say the other complete model."
    ],
    "support": [
      "Está en casa. / It is at home.",
      "Está en mi teléfono. / It is on my phone.",
      "yo = I · tú = you. Copy one complete model; the verb is ready to use."
    ],
    "teacherNote": "Read the English question. Point to each choice and model its matching sentence. Learner speaks; teacher clicks."
  },
  {
    "id": "a0-recuerdos-2",
    "level": "A0",
    "zone": "recuerdos",
    "type": "choice",
    "question": "¿La foto es nueva? / Is the photo new?",
    "choices": [
      "nueva / new",
      "antigua / old"
    ],
    "followUps": [
      "¿Y tú? / And you? Ask your teacher and listen.",
      "Otra respuesta. / Another answer. Say the other complete model."
    ],
    "support": [
      "Es nueva. / It is new.",
      "Es antigua. / It is old.",
      "yo = I · tú = you. Copy one complete model; the verb is ready to use."
    ],
    "teacherNote": "Read the English question. Point to each choice and model its matching sentence. Learner speaks; teacher clicks."
  },
  {
    "id": "a0-futuro-0",
    "level": "A0",
    "zone": "futuro",
    "type": "choice",
    "question": "Mañana: ¿qué quieres hacer? / Tomorrow: what do you want to do?",
    "choices": [
      "caminar / walk",
      "descansar / rest"
    ],
    "followUps": [
      "¿Y tú? / And you? Ask your teacher and listen.",
      "Otra respuesta. / Another answer. Say the other complete model."
    ],
    "support": [
      "Quiero caminar. / I want to walk.",
      "Quiero descansar. / I want to rest.",
      "yo = I · tú = you. Copy one complete model; the verb is ready to use."
    ],
    "teacherNote": "Read the English question. Point to each choice and model its matching sentence. Learner speaks; teacher clicks."
  },
  {
    "id": "a0-futuro-1",
    "level": "A0",
    "zone": "futuro",
    "type": "choice",
    "question": "¿Con quién? / With whom?",
    "choices": [
      "familia / family",
      "amigos / friends"
    ],
    "followUps": [
      "¿Y tú? / And you? Ask your teacher and listen.",
      "Otra respuesta. / Another answer. Say the other complete model."
    ],
    "support": [
      "Con mi familia. / With my family.",
      "Con mis amigos. / With my friends.",
      "yo = I · tú = you. Copy one complete model; the verb is ready to use."
    ],
    "teacherNote": "Read the English question. Point to each choice and model its matching sentence. Learner speaks; teacher clicks."
  },
  {
    "id": "a0-futuro-2",
    "level": "A0",
    "zone": "futuro",
    "type": "choice",
    "question": "¿A qué hora? / At what time?",
    "choices": [
      "a las dos / at two",
      "a las tres / at three"
    ],
    "followUps": [
      "¿Y tú? / And you? Ask your teacher and listen.",
      "Otra respuesta. / Another answer. Say the other complete model."
    ],
    "support": [
      "A las dos. / At two.",
      "A las tres. / At three.",
      "yo = I · tú = you. Copy one complete model; the verb is ready to use."
    ],
    "teacherNote": "Read the English question. Point to each choice and model its matching sentence. Learner speaks; teacher clicks."
  },
  {
    "id": "a0-cambia-0",
    "level": "A0",
    "zone": "cambia",
    "type": "choice",
    "question": "Llueve. ¿Dentro o fuera? / It rains. Inside or outside?",
    "choices": [
      "dentro / inside",
      "fuera / outside"
    ],
    "followUps": [
      "¿Y tú? / And you? Ask your teacher and listen.",
      "Otra respuesta. / Another answer. Say the other complete model."
    ],
    "support": [
      "Estoy dentro. / I am inside.",
      "Estoy fuera. / I am outside.",
      "yo = I · tú = you. Copy one complete model; the verb is ready to use."
    ],
    "teacherNote": "Read the English question. Point to each choice and model its matching sentence. Learner speaks; teacher clicks."
  },
  {
    "id": "a0-cambia-1",
    "level": "A0",
    "zone": "cambia",
    "type": "choice",
    "question": "Ahora tienes hambre. ¿Qué quieres? / Now you are hungry. What do you want?",
    "choices": [
      "pan / bread",
      "fruta / fruit"
    ],
    "followUps": [
      "¿Y tú? / And you? Ask your teacher and listen.",
      "Otra respuesta. / Another answer. Say the other complete model."
    ],
    "support": [
      "Quiero pan. / I want bread.",
      "Quiero fruta. / I want fruit.",
      "yo = I · tú = you. Copy one complete model; the verb is ready to use."
    ],
    "teacherNote": "Read the English question. Point to each choice and model its matching sentence. Learner speaks; teacher clicks."
  },
  {
    "id": "a0-cambia-2",
    "level": "A0",
    "zone": "cambia",
    "type": "choice",
    "question": "Ahora hace frío. ¿Qué necesitas? / Now it is cold. What do you need?",
    "choices": [
      "abrigo / coat",
      "té / tea"
    ],
    "followUps": [
      "¿Y tú? / And you? Ask your teacher and listen.",
      "Otra respuesta. / Another answer. Say the other complete model."
    ],
    "support": [
      "Necesito un abrigo. / I need a coat.",
      "Quiero té. / I want tea.",
      "yo = I · tú = you. Copy one complete model; the verb is ready to use."
    ],
    "teacherNote": "Read the English question. Point to each choice and model its matching sentence. Learner speaks; teacher clicks."
  },
  {
    "id": "a0-contrario-0",
    "level": "A0",
    "zone": "contrario",
    "type": "choice",
    "question": "Tu profesor quiere té. ¿Y tú? / Your teacher wants tea. And you?",
    "choices": [
      "té / tea",
      "agua / water"
    ],
    "followUps": [
      "¿Y tú? / And you? Ask your teacher and listen.",
      "Otra respuesta. / Another answer. Say the other complete model."
    ],
    "support": [
      "Yo quiero té. / I want tea.",
      "Yo quiero agua. / I want water.",
      "yo = I · tú = you. Copy one complete model; the verb is ready to use."
    ],
    "teacherNote": "Read the English question. Point to each choice and model its matching sentence. Learner speaks; teacher clicks."
  },
  {
    "id": "a0-contrario-1",
    "level": "A0",
    "zone": "contrario",
    "type": "choice",
    "question": "Tu profesor camina. ¿Y tú? / Your teacher walks. And you?",
    "choices": [
      "camino / I walk",
      "descanso / I rest"
    ],
    "followUps": [
      "¿Y tú? / And you? Ask your teacher and listen.",
      "Otra respuesta. / Another answer. Say the other complete model."
    ],
    "support": [
      "Yo camino. / I walk.",
      "Yo descanso. / I rest.",
      "yo = I · tú = you. Copy one complete model; the verb is ready to use."
    ],
    "teacherNote": "Read the English question. Point to each choice and model its matching sentence. Learner speaks; teacher clicks."
  },
  {
    "id": "a0-contrario-2",
    "level": "A0",
    "zone": "contrario",
    "type": "choice",
    "question": "Tu profesor prefiere rojo. ¿Y tú? / Your teacher prefers red. And you?",
    "choices": [
      "rojo / red",
      "azul / blue"
    ],
    "followUps": [
      "¿Y tú? / And you? Ask your teacher and listen.",
      "Otra respuesta. / Another answer. Say the other complete model."
    ],
    "support": [
      "Yo prefiero rojo. / I prefer red.",
      "Yo prefiero azul. / I prefer blue.",
      "yo = I · tú = you. Copy one complete model; the verb is ready to use."
    ],
    "teacherNote": "Read the English question. Point to each choice and model its matching sentence. Learner speaks; teacher clicks."
  },
  {
    "id": "a0-final-0",
    "level": "A0",
    "zone": "final",
    "type": "choice",
    "question": "¿Qué quieres ahora? / What do you want now?",
    "choices": [
      "descansar / rest",
      "caminar / walk"
    ],
    "followUps": [
      "¿Y tú? / And you? Ask your teacher and listen.",
      "Otra respuesta. / Another answer. Say the other complete model."
    ],
    "support": [
      "Quiero descansar. / I want to rest.",
      "Quiero caminar. / I want to walk.",
      "yo = I · tú = you. Copy one complete model; the verb is ready to use."
    ],
    "teacherNote": "Read the English question. Point to each choice and model its matching sentence. Learner speaks; teacher clicks."
  },
  {
    "id": "a0-final-1",
    "level": "A0",
    "zone": "final",
    "type": "choice",
    "question": "¿Te gusta el bosque? / Do you like the forest?",
    "choices": [
      "sí / yes",
      "no / no"
    ],
    "followUps": [
      "¿Y tú? / And you? Ask your teacher and listen.",
      "Otra respuesta. / Another answer. Say the other complete model."
    ],
    "support": [
      "Sí, me gusta. / Yes, I like it.",
      "No me gusta. / I do not like it.",
      "yo = I · tú = you. Copy one complete model; the verb is ready to use."
    ],
    "teacherNote": "Read the English question. Point to each choice and model its matching sentence. Learner speaks; teacher clicks."
  },
  {
    "id": "a0-final-2",
    "level": "A0",
    "zone": "final",
    "type": "choice",
    "question": "¿Volvemos mañana? / Shall we return tomorrow?",
    "choices": [
      "sí / yes",
      "no / no"
    ],
    "followUps": [
      "¿Y tú? / And you? Ask your teacher and listen.",
      "Otra respuesta. / Another answer. Say the other complete model."
    ],
    "support": [
      "Sí, mañana. / Yes, tomorrow.",
      "No, gracias. / No, thank you.",
      "yo = I · tú = you. Copy one complete model; the verb is ready to use."
    ],
    "teacherNote": "Read the English question. Point to each choice and model its matching sentence. Learner speaks; teacher clicks."
  }
];

export default prompts;
