// Noche abierta · A0: preguntas de conversación general, bilingües.
const t = (es, en) => ({ es, en });

export const STREET = {
  "centro-desmayo": {
    topics: ["familia", "ayuda"],
    A0: [
      t("¿Tienes hermanos? ¿Cuántos?", "Do you have brothers or sisters? How many?"),
      t("¿Vives cerca de tus padres?", "Do you live near your parents?"),
      t("¿Ayudas a tus vecinos?", "Do you help your neighbours?"),
      t("¿Quién te ayuda cuando estás mal?", "Who helps you when you feel bad?"),
      t("¿Llamas a tu familia todos los días?", "Do you call your family every day?"),
    ],
  },
  "centro-diarios": {
    topics: ["costumbres", "trabajo"],
    A0: [
      t("¿Desayunas en casa o en un café?", "Do you have breakfast at home or at a café?"),
      t("¿Lees libros o revistas?", "Do you read books or magazines?"),
      t("¿A qué hora terminas de trabajar?", "What time do you finish work?"),
      t("¿Conoces a la gente de tu barrio?", "Do you know the people in your neighbourhood?"),
      t("¿Qué haces antes de dormir?", "What do you do before bed?"),
    ],
  },
  "centro-cine": {
    topics: ["tiempo-libre", "suenos"],
    A0: [
      t("¿Vas al cine? ¿Con quién?", "Do you go to the cinema? Who with?"),
      t("¿Películas de amor o de risa?", "Love films or funny films?"),
      t("¿Te gustan las cosas raras?", "Do you like strange things?"),
      t("¿Qué haces los sábados?", "What do you do on Saturdays?"),
      t("¿Escribes, dibujas o cantas?", "Do you write, draw or sing?"),
    ],
  },
  "centro-choque": {
    topics: ["conflictos", "ciudad"],
    A0: [
      t("¿Hay mucho tráfico en tu ciudad?", "Is there a lot of traffic in your city?"),
      t("¿Te enojas fácilmente?", "Do you get angry easily?"),
      t("¿Dices «perdón» fácilmente?", "Do you say “sorry” easily?"),
      t("¿Caminas mucho por tu ciudad?", "Do you walk a lot around your city?"),
      t("¿Gritas en el coche?", "Do you shout in the car?"),
    ],
  },
  "centro-patineta": {
    topics: ["tiempo-libre", "humor"],
    A0: [
      t("¿Haces videos con tu teléfono?", "Do you make videos with your phone?"),
      t("¿Te gusta el deporte?", "Do you like sport?"),
      t("¿Te ríes mucho? ¿De qué?", "Do you laugh a lot? About what?"),
      t("¿Eres una persona tranquila o activa?", "Are you a calm person or an active person?"),
      t("¿Subes fotos a internet?", "Do you post photos online?"),
    ],
  },
  "alto-galeria": {
    topics: ["cultura", "personalidad"],
    A0: [
      t("¿Te gusta el arte?", "Do you like art?"),
      t("¿Hay museos en tu ciudad?", "Are there museums in your city?"),
      t("¿Qué hay en las paredes de tu casa?", "What is on the walls of your home?"),
      t("¿Eres creativo o creativa?", "Are you creative?"),
      t("¿Qué es bonito para ti?", "What is beautiful to you?"),
    ],
  },
  "sur-vecino": {
    topics: ["relaciones", "conflictos"],
    A0: [
      t("¿Cómo son tus vecinos?", "What are your neighbours like?"),
      t("¿Haces fiestas en tu casa?", "Do you have parties at your place?"),
      t("¿Duermes bien en tu casa?", "Do you sleep well at home?"),
      t("¿Haces algo especial en tu cumpleaños?", "Do you do something special on your birthday?"),
      t("¿Qué te molesta en casa?", "What bothers you at home?"),
    ],
  },
  "alto-portero": {
    topics: ["prejuicios", "trabajo"],
    A0: [
      t("¿Qué ropa te gusta?", "What clothes do you like?"),
      t("¿Miras la ropa de otras personas?", "Do you look at other people’s clothes?"),
      t("¿Hay uniforme en tu trabajo?", "Is there a uniform at your job?"),
      t("¿Ropa elegante o cómoda?", "Smart clothes or comfortable clothes?"),
      t("¿Trabajas de noche o de día?", "Do you work at night or during the day?"),
    ],
  },
  "sur-estacionamiento": {
    topics: ["errores", "familia"],
    A0: [
      t("¿Pierdes cosas? ¿Qué cosas?", "Do you lose things? What things?"),
      t("¿Tu memoria es buena o mala?", "Is your memory good or bad?"),
      t("¿Tienes abuelos? ¿Dónde viven?", "Do you have grandparents? Where do they live?"),
      t("¿Dónde está tu teléfono ahora?", "Where is your phone now?"),
      t("¿Hablas con las personas mayores?", "Do you talk with older people?"),
    ],
  },
  "alto-vinoteca": {
    topics: ["comida", "costumbres"],
    A0: [
      t("¿Bebes vino? ¿Cuándo?", "Do you drink wine? When?"),
      t("¿Vino tinto o blanco?", "Red wine or white wine?"),
      t("¿Qué bebida es típica en tu país?", "What drink is typical in your country?"),
      t("¿Cenas tarde o temprano?", "Do you have dinner late or early?"),
      t("¿Prefieres dulce o salado?", "Do you prefer sweet or salty?"),
    ],
  },
  "alto-pareja": {
    topics: ["amor", "conflictos"],
    A0: [
      t("¿Tienes pareja?", "Do you have a partner?"),
      t("¿Eres celoso o celosa?", "Are you jealous?"),
      t("¿Discutes mucho? ¿Con quién?", "Do you argue a lot? Who with?"),
      t("¿Miras el teléfono de tu pareja?", "Do you look at your partner’s phone?"),
      t("¿Qué te pone triste?", "What makes you sad?"),
    ],
  },
  "sur-balcon": {
    topics: ["mala-suerte", "confianza"],
    A0: [
      t("¿Vives en una casa o en un apartamento?", "Do you live in a house or an apartment?"),
      t("¿Tienes balcón? ¿Qué hay?", "Do you have a balcony? What is on it?"),
      t("¿Hoy es un día bueno o malo?", "Is today a good day or a bad one?"),
      t("¿Quién tiene una llave de tu casa?", "Who has a key to your home?"),
      t("¿Eres una persona con suerte?", "Are you a lucky person?"),
    ],
  },
  "mercado-inspectores": {
    topics: ["trabajo", "comida"],
    A0: [
      t("¿Tu trabajo es divertido?", "Is your job fun?"),
      t("¿Trabajas los sábados?", "Do you work on Saturdays?"),
      t("¿Comes en la calle? ¿Qué comes?", "Do you eat on the street? What do you eat?"),
      t("¿Cuántas horas trabajas?", "How many hours do you work?"),
      t("¿Quieres tener tu propio negocio?", "Do you want to have your own business?"),
    ],
  },
  "sur-ventana": {
    topics: ["familia", "comida"],
    A0: [
      t("¿Quién cocina mejor en tu familia?", "Who is the best cook in your family?"),
      t("¿Comes con tu familia los domingos?", "Do you eat with your family on Sundays?"),
      t("¿Qué comida te hace feliz?", "What food makes you happy?"),
      t("¿Invitas a amigos a cenar?", "Do you invite friends for dinner?"),
      t("¿Tienes hambre ahora?", "Are you hungry now?"),
    ],
  },
  "alto-turista": {
    topics: ["viajes", "ciudad"],
    A0: [
      t("¿Te pierdes mucho?", "Do you get lost a lot?"),
      t("¿Preguntas el camino o miras el mapa?", "Do you ask the way or look at the map?"),
      t("¿Tu ciudad es grande o pequeña?", "Is your city big or small?"),
      t("¿Te gusta viajar en grupo?", "Do you like travelling in a group?"),
      t("¿Hay muchos turistas en tu ciudad?", "Are there many tourists in your city?"),
    ],
  },
  "alto-fiesta": {
    topics: ["amistad", "tiempo-libre"],
    A0: [
      t("¿Vas a muchas fiestas?", "Do you go to a lot of parties?"),
      t("¿Prefieres fiestas grandes o pequeñas?", "Do you prefer big parties or small parties?"),
      t("¿Cuántos buenos amigos tienes?", "How many good friends do you have?"),
      t("¿Bailas cuando hay música?", "Do you dance when there is music?"),
      t("¿Sales los viernes?", "Do you go out on Fridays?"),
    ],
  },
  "mercado-flores": {
    topics: ["amor", "relaciones"],
    A0: [
      t("¿Regalas flores? ¿A quién?", "Do you give flowers? To whom?"),
      t("¿Te gustan los regalos?", "Do you like presents?"),
      t("¿Quién es importante para ti?", "Who is important to you?"),
      t("¿Eres romántico o romántica?", "Are you romantic?"),
      t("¿Tienes plantas en casa?", "Do you have plants at home?"),
    ],
  },
  "mercado-adivina": {
    topics: ["suenos", "decisiones"],
    A0: [
      t("¿Lees tu horóscopo?", "Do you read your horoscope?"),
      t("¿Cuál es tu signo?", "What is your star sign?"),
      t("¿Cuál es tu gran sueño?", "What is your big dream?"),
      t("¿Eres optimista o pesimista?", "Are you an optimist or a pessimist?"),
      t("¿Sorpresas: sí o no?", "Surprises: yes or no?"),
    ],
  },
  "sur-perro": {
    topics: ["amistad", "costumbres"],
    A0: [
      t("¿Perros o gatos?", "Dogs or cats?"),
      t("¿Tu familia tiene animales?", "Does your family have animals?"),
      t("¿Hablas con los animales?", "Do you talk to animals?"),
      t("¿Paseas por tu barrio?", "Do you go for walks in your neighbourhood?"),
      t("¿Quién es tu mejor amigo o amiga?", "Who is your best friend?"),
    ],
  },
  "alto-feliz": {
    topics: ["cambios", "emociones"],
    A0: [
      t("¿Estudias algo ahora?", "Are you studying anything now?"),
      t("¿Vives lejos de tu familia?", "Do you live far from your family?"),
      t("¿Es fácil para ti decir adiós?", "Is it easy for you to say goodbye?"),
      t("¿Te gustan los cambios?", "Do you like change?"),
      t("¿Qué te da miedo?", "What are you afraid of?"),
    ],
  },
};

export { PLACES } from "./a0-places.mjs";
