// Tradiciones que nadie entiende · A0: strange customs from around the world
// and from your own home. Bilingual.
const t = (es, en) => ({ es, en });
export default {
  intro: t('En el mundo hay tradiciones muy raras: comer doce uvas, tirar tomates, romper platos. Y en tu casa también hay costumbres raras. Hoy las cuentas.', 'There are very strange traditions in the world: eating twelve grapes, throwing tomatoes, breaking plates. And at your home there are strange customs too. Today you talk about them.'),
  categorias: [
    {
      icon: '🎂', title: t('El cumpleaños', 'The birthday'),
      questions: [
        t('¿Cuántas velas tiene tu próximo pastel?', 'How many candles does your next cake have?'),
        t('¿Quién canta más fuerte en tus cumpleaños?', 'Who sings loudest at your birthdays?'),
        t('¿Qué deseo pides cuando soplas las velas?', 'What wish do you make when you blow out the candles?'),
        t('¿Qué regalo raro recibes en un cumpleaños?', 'What strange present do you get on a birthday?'),
        t('¿Celebras tu cumpleaños en casa, en un bar o en el parque?', 'Do you celebrate your birthday at home, in a bar or in the park?'),
      ],
      starters: [t('Mi pastel tiene…', 'My cake has…'), t('En mi país cantamos…', 'In my country we sing…'), t('Celebro en…', 'I celebrate at…')],
    },
    {
      icon: '🍇', title: t('Las doce uvas de Año Nuevo', 'The twelve grapes of New Year'),
      questions: [
        t('¿Qué comes a las doce de la noche el 31 de diciembre?', 'What do you eat at midnight on 31 December?'),
        t('¿Qué color de ropa llevas en Año Nuevo?', 'What colour of clothes do you wear on New Year?'),
        t('¿Con quién estás a medianoche en Nochevieja?', 'Who are you with at midnight on New Year’s Eve?'),
        t('¿Qué haces el primer día del año?', 'What do you do on the first day of the year?'),
        t('¿Qué promesa de Año Nuevo haces siempre?', 'What New Year’s promise do you always make?'),
      ],
      starters: [t('A medianoche como…', 'At midnight I eat…'), t('Llevo ropa…', 'I wear … clothes'), t('Siempre prometo…', 'I always promise…')],
    },
    {
      icon: '🧂', title: t('Supersticiones', 'Superstitions'),
      questions: [
        t('¿Qué hora del reloj miras para pedir un deseo?', 'What time on the clock do you look at to make a wish?'),
        t('¿Pasas debajo de una escalera sin miedo?', 'Do you walk under a ladder without fear?'),
        t('¿Qué haces si se rompe un espejo?', 'What do you do if a mirror breaks?'),
        t('¿Qué amuleto llevas en la cartera o en el cuello?', 'What lucky charm do you carry in your wallet or around your neck?'),
        t('¿Martes trece o viernes trece: cuál da miedo en tu país?', 'Tuesday the thirteenth or Friday the thirteenth: which one is scary in your country?'),
      ],
      starters: [t('Mi número es…', 'My number is…'), t('Llevo…', 'I carry…'), t('En mi país es…', 'In my country it is…')],
    },
    {
      icon: '💍', title: t('La boda', 'The wedding'),
      questions: [
        t('¿Qué bailan en una boda de tu país?', 'What do they dance at a wedding in your country?'),
        t('¿Qué tiran a los novios cuando salen?', 'What do they throw at the couple when they come out?'),
        t('¿Boda pequeña con diez invitados o boda enorme con trescientos?', 'Small wedding with ten guests or huge wedding with three hundred?'),
        t('¿Qué color no lleva un invitado a una boda?', 'What colour does a guest not wear to a wedding?'),
        t('¿Qué comida hay en las bodas de tu país?', 'What food is there at weddings in your country?'),
      ],
      starters: [t('En mi país bailan…', 'In my country they dance…'), t('Tiran…', 'They throw…'), t('Hay más o menos…', 'There are about…')],
    },
    {
      icon: '🎭', title: t('Fiestas raras del mundo', 'Strange festivals of the world'),
      questions: [
        t('¿Tiras tomates en una fiesta o miras desde lejos?', 'Do you throw tomatoes at a festival or watch from far away?'),
        t('¿Qué fiesta llena de gente las calles de tu ciudad?', 'Which festival fills the streets of your city with people?'),
        t('¿Qué disfraz llevas en Carnaval?', 'What costume do you wear at Carnival?'),
        t('¿Corres delante de toros, de vacas o de nadie?', 'Do you run in front of bulls, cows or nobody?'),
        t('¿Qué fiesta del mundo quieres ver en persona?', 'Which festival in the world do you want to see in person?'),
      ],
      starters: [t('Yo miro desde…', 'I watch from…'), t('En mi ciudad hay…', 'In my city there is…'), t('Quiero ver…', 'I want to see…')],
    },
    {
      icon: '🏡', title: t('Las costumbres de tu casa', 'Your home customs'),
      questions: [
        t('¿Zapatos, zapatillas o calcetines dentro de tu casa?', 'Shoes, slippers or socks inside your home?'),
        t('¿Qué comida hay en tu casa todos los domingos?', 'What food is there at your home every Sunday?'),
        t('¿Cómo saludas a tu familia: con un beso, dos o un abrazo?', 'How do you greet your family: with one kiss, two or a hug?'),
        t('¿Qué palabra rara usa solo tu familia?', 'What strange word does only your family use?'),
        t('¿Qué costumbre de tu casa sorprende a tus amigos?', 'What custom in your home surprises your friends?'),
      ],
      starters: [t('En mi casa…', 'In my home…'), t('Saludo con…', 'I greet with…'), t('Solo mi familia dice…', 'Only my family says…')],
    },
  ],
};
