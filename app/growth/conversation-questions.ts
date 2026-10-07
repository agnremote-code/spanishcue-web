/**
 * Spanish conversation question bank for /spanish-conversation-questions.
 * Original questions written for SpanishCue, graded by CEFR level and tagged by
 * topic. Spanish uses the neutral `tú` register; the English line is a gloss
 * for teachers, not a translation exercise.
 */
import type { ConversationLevelCode } from "./conversation-levels";

export type QuestionTopic =
  | "getting-to-know"
  | "daily-life"
  | "food"
  | "travel"
  | "work-study"
  | "free-time"
  | "people"
  | "home-city"
  | "opinions"
  | "hypotheticals"
  | "memories"
  | "future"
  | "technology"
  | "dilemmas"
  | "language"
  | "society";

export type ConversationQuestion = {
  id: string;
  level: ConversationLevelCode;
  topic: QuestionTopic;
  es: string;
  en: string;
};

export const questionTopics: { slug: QuestionTopic; label: string }[] = [
  { slug: "getting-to-know", label: "Getting to know you" },
  { slug: "daily-life", label: "Daily life & routines" },
  { slug: "food", label: "Food & drink" },
  { slug: "travel", label: "Travel & places" },
  { slug: "work-study", label: "Work & study" },
  { slug: "free-time", label: "Free time & culture" },
  { slug: "people", label: "People & relationships" },
  { slug: "home-city", label: "Home & city" },
  { slug: "opinions", label: "Opinions & debate" },
  { slug: "hypotheticals", label: "Hypotheticals" },
  { slug: "memories", label: "Past & memories" },
  { slug: "future", label: "Plans & future" },
  { slug: "technology", label: "Technology & media" },
  { slug: "dilemmas", label: "Dilemmas & decisions" },
  { slug: "language", label: "Language & learning" },
  { slug: "society", label: "Society & ideas" },
];

const q = (level: ConversationLevelCode, topic: QuestionTopic, es: string, en: string): Omit<ConversationQuestion, "id"> => ({ level, topic, es, en });

const bank: Omit<ConversationQuestion, "id">[] = [
  // ── A1 ────────────────────────────────────────────────────────────────────
  q("A1", "getting-to-know", "¿Cómo te llamas? ¿Cómo se escribe tu apellido?", "What is your name? How do you spell your surname?"),
  q("A1", "getting-to-know", "¿De dónde eres? ¿Dónde vives ahora?", "Where are you from? Where do you live now?"),
  q("A1", "getting-to-know", "¿Cuántos años tienes? ¿Cuándo es tu cumpleaños?", "How old are you? When is your birthday?"),
  q("A1", "getting-to-know", "¿Tienes hermanos? ¿Cómo se llaman?", "Do you have brothers or sisters? What are their names?"),
  q("A1", "getting-to-know", "¿Tienes mascota? ¿Cómo es?", "Do you have a pet? What is it like?"),
  q("A1", "daily-life", "¿A qué hora te levantas normalmente?", "What time do you usually get up?"),
  q("A1", "daily-life", "¿Qué haces por la mañana antes de salir de casa?", "What do you do in the morning before leaving home?"),
  q("A1", "daily-life", "¿Trabajas o estudias? ¿Qué días?", "Do you work or study? Which days?"),
  q("A1", "daily-life", "¿Cómo vas al trabajo o a la escuela: en coche, en autobús, a pie?", "How do you get to work or school: by car, by bus, on foot?"),
  q("A1", "daily-life", "¿A qué hora cenas? ¿Con quién?", "What time do you have dinner? Who with?"),
  q("A1", "food", "¿Qué desayunas normalmente?", "What do you usually have for breakfast?"),
  q("A1", "food", "¿Cuál es tu comida favorita? ¿Y tu bebida favorita?", "What is your favourite food? And your favourite drink?"),
  q("A1", "food", "¿Te gusta cocinar? ¿Qué cocinas?", "Do you like cooking? What do you cook?"),
  q("A1", "food", "¿Prefieres comer en casa o en un restaurante?", "Do you prefer eating at home or in a restaurant?"),
  q("A1", "travel", "¿Qué ciudad quieres visitar? ¿Por qué?", "Which city do you want to visit? Why?"),
  q("A1", "travel", "¿Prefieres la playa o la montaña?", "Do you prefer the beach or the mountains?"),
  q("A1", "travel", "¿Qué llevas siempre en la maleta?", "What do you always pack in your suitcase?"),
  q("A1", "free-time", "¿Qué haces los fines de semana?", "What do you do at the weekend?"),
  q("A1", "free-time", "¿Qué música escuchas? ¿Tienes un cantante favorito?", "What music do you listen to? Do you have a favourite singer?"),
  q("A1", "free-time", "¿Practicas algún deporte? ¿Cuándo?", "Do you play any sport? When?"),
  q("A1", "free-time", "¿Ves series o películas? ¿Cuál es tu favorita?", "Do you watch series or films? Which is your favourite?"),
  q("A1", "home-city", "¿Cómo es tu casa? ¿Cuántas habitaciones tiene?", "What is your home like? How many rooms does it have?"),
  q("A1", "home-city", "¿Qué hay cerca de tu casa: un parque, un supermercado, una estación?", "What is there near your home: a park, a supermarket, a station?"),
  q("A1", "home-city", "¿Qué te gusta de tu barrio? ¿Qué no te gusta?", "What do you like about your neighbourhood? What don't you like?"),
  q("A1", "people", "¿Cómo es tu mejor amigo o amiga?", "What is your best friend like?"),
  q("A1", "language", "¿Por qué estudias español? ¿Qué palabra en español te gusta?", "Why are you studying Spanish? Which Spanish word do you like?"),

  // ── A2 ────────────────────────────────────────────────────────────────────
  q("A2", "memories", "¿Qué hiciste ayer por la tarde?", "What did you do yesterday afternoon?"),
  q("A2", "memories", "¿Cómo fue tu último cumpleaños? ¿Qué hiciste?", "How was your last birthday? What did you do?"),
  q("A2", "memories", "¿Dónde vivías cuando eras pequeño? ¿Cómo era tu casa?", "Where did you live when you were little? What was your house like?"),
  q("A2", "memories", "¿Cuál fue el primer viaje que recuerdas?", "What is the first trip you remember?"),
  q("A2", "memories", "¿Qué hacías los veranos cuando eras niño?", "What did you do in the summers when you were a child?"),
  q("A2", "travel", "¿Cuál es el mejor lugar que has visitado? ¿Por qué te gustó?", "What is the best place you have visited? Why did you like it?"),
  q("A2", "travel", "¿Prefieres viajar en tren, en avión o en coche? ¿Por qué?", "Do you prefer travelling by train, plane or car? Why?"),
  q("A2", "travel", "¿Qué problema tuviste alguna vez en un viaje?", "What problem did you once have on a trip?"),
  q("A2", "future", "¿Qué vas a hacer este fin de semana?", "What are you going to do this weekend?"),
  q("A2", "future", "¿Dónde quieres estar dentro de cinco años?", "Where do you want to be in five years?"),
  q("A2", "future", "¿Qué quieres aprender este año?", "What do you want to learn this year?"),
  q("A2", "food", "¿Qué plato típico de tu país le recomiendas a un visitante?", "Which typical dish from your country would you recommend to a visitor?"),
  q("A2", "food", "¿Hay algo que no comes nunca? ¿Por qué?", "Is there anything you never eat? Why?"),
  q("A2", "food", "¿Cuál fue la última comida especial que compartiste con alguien?", "What was the last special meal you shared with someone?"),
  q("A2", "work-study", "¿Cómo es un día normal en tu trabajo o en tus estudios?", "What is a normal day like at your job or in your studies?"),
  q("A2", "work-study", "¿Qué es lo mejor y lo peor de tu trabajo?", "What is the best and the worst thing about your job?"),
  q("A2", "work-study", "¿Prefieres trabajar solo o en equipo? ¿Por qué?", "Do you prefer working alone or in a team? Why?"),
  q("A2", "home-city", "¿Qué es más tranquilo: tu barrio o el centro de la ciudad?", "Which is quieter: your neighbourhood or the city centre?"),
  q("A2", "home-city", "¿Qué cambiaste en tu casa recientemente?", "What did you change in your home recently?"),
  q("A2", "home-city", "¿Qué lugar de tu ciudad le enseñas primero a un amigo que la visita?", "Which place in your city do you show a visiting friend first?"),
  q("A2", "people", "¿Cómo conociste a tu mejor amigo o amiga?", "How did you meet your best friend?"),
  q("A2", "people", "¿Con quién hablas cuando tienes un problema? ¿Por qué con esa persona?", "Who do you talk to when you have a problem? Why that person?"),
  q("A2", "free-time", "¿Qué hiciste la última vez que tuviste un día libre?", "What did you do the last time you had a day off?"),
  q("A2", "free-time", "¿Qué libro, serie o película te gustó mucho? ¿De qué trata?", "Which book, series or film did you really like? What is it about?"),
  q("A2", "technology", "¿Cuántas horas al día usas el móvil? ¿Para qué lo usas más?", "How many hours a day do you use your phone? What do you use it for most?"),
  q("A2", "daily-life", "¿Qué haces cuando no puedes dormir?", "What do you do when you cannot sleep?"),

  // ── B1 ────────────────────────────────────────────────────────────────────
  q("B1", "opinions", "¿Es mejor vivir en una ciudad grande o en un pueblo? Explica tu respuesta.", "Is it better to live in a big city or a small town? Explain your answer."),
  q("B1", "opinions", "¿Qué opinas de la gente que cambia de trabajo cada dos años?", "What do you think of people who change jobs every two years?"),
  q("B1", "opinions", "¿Crees que los exámenes miden bien lo que sabe una persona?", "Do you think exams measure well what a person knows?"),
  q("B1", "opinions", "¿Qué es más importante en una amistad: la sinceridad o la lealtad?", "What matters more in a friendship: honesty or loyalty?"),
  q("B1", "hypotheticals", "Si pudieras vivir un año en otro país, ¿cuál elegirías y qué harías allí?", "If you could live a year in another country, which would you choose and what would you do there?"),
  q("B1", "hypotheticals", "Si tuvieras un día entero sin obligaciones, ¿cómo lo organizarías?", "If you had a whole day with no obligations, how would you organise it?"),
  q("B1", "hypotheticals", "¿Qué harías si tu vecino pusiera música muy alta todas las noches?", "What would you do if your neighbour played loud music every night?"),
  q("B1", "hypotheticals", "Si ganaras un premio de diez mil euros, ¿lo gastarías o lo ahorrarías?", "If you won a ten-thousand-euro prize, would you spend it or save it?"),
  q("B1", "memories", "Cuéntame una anécdota divertida que te pasó con un amigo.", "Tell me a funny story that happened to you with a friend."),
  q("B1", "memories", "¿Qué estabas haciendo cuando recibiste una noticia importante?", "What were you doing when you received an important piece of news?"),
  q("B1", "memories", "¿Hubo algún profesor que cambió tu manera de ver una materia? ¿Cómo era?", "Was there a teacher who changed how you saw a subject? What were they like?"),
  q("B1", "work-study", "¿Qué habilidades necesita alguien para hacer bien tu trabajo?", "What skills does someone need to do your job well?"),
  q("B1", "work-study", "¿Prefieres un jefe exigente y claro o uno relajado y poco claro?", "Do you prefer a demanding, clear boss or a relaxed, unclear one?"),
  q("B1", "work-study", "¿Qué consejo le darías a alguien en su primer día en tu empresa?", "What advice would you give someone on their first day at your company?"),
  q("B1", "travel", "¿Qué hay que saber antes de visitar tu país?", "What should people know before visiting your country?"),
  q("B1", "travel", "¿Alguna vez un viaje salió completamente diferente de lo planeado? ¿Qué pasó?", "Did a trip ever turn out completely different from the plan? What happened?"),
  q("B1", "people", "¿Qué cualidades valoras más en una pareja o en un amigo cercano?", "Which qualities do you value most in a partner or a close friend?"),
  q("B1", "people", "¿Cómo reaccionas cuando alguien llega siempre tarde?", "How do you react when someone is always late?"),
  q("B1", "free-time", "¿Qué actividad te relaja más y por qué funciona para ti?", "Which activity relaxes you most and why does it work for you?"),
  q("B1", "free-time", "¿Hay algún hobby que dejaste y te gustaría recuperar?", "Is there a hobby you gave up and would like to take up again?"),
  q("B1", "technology", "¿Qué aplicación del móvil te ha cambiado la vida para bien o para mal?", "Which phone app has changed your life for better or worse?"),
  q("B1", "technology", "¿Crees que los niños deberían tener móvil antes de los doce años?", "Do you think children should have a phone before the age of twelve?"),
  q("B1", "dilemmas", "Un amigo te pide dinero prestado por tercera vez. ¿Qué haces?", "A friend asks to borrow money for the third time. What do you do?"),
  q("B1", "dilemmas", "Te ofrecen un trabajo mejor pagado en otra ciudad. ¿Qué tienes en cuenta para decidir?", "You are offered a better-paid job in another city. What do you weigh up before deciding?"),
  q("B1", "dilemmas", "¿Es mejor decir una verdad incómoda o callarse para no herir a alguien?", "Is it better to tell an uncomfortable truth or stay quiet so as not to hurt someone?"),
  q("B1", "future", "¿Cómo te imaginas tu vida dentro de diez años?", "How do you imagine your life in ten years?"),
  q("B1", "future", "¿Qué te gustaría haber conseguido antes de cumplir cincuenta años?", "What would you like to have achieved before turning fifty?"),
  q("B1", "language", "¿Qué es lo más difícil del español para ti? ¿Cómo lo practicas?", "What is the hardest thing about Spanish for you? How do you practise it?"),
  q("B1", "language", "¿Qué le recomendarías a alguien que tiene miedo de hablar en otro idioma?", "What would you recommend to someone who is afraid of speaking another language?"),
  q("B1", "society", "¿Qué fiesta o tradición de tu país te gusta más y cuál menos? ¿Por qué?", "Which festival or tradition from your country do you like most and least? Why?"),

  // ── B2 ────────────────────────────────────────────────────────────────────
  q("B2", "opinions", "¿Hasta qué punto es responsabilidad de las empresas cuidar la salud mental de sus empleados?", "To what extent are companies responsible for their employees' mental health?"),
  q("B2", "opinions", "¿Debería la universidad ser gratuita para todos? Argumenta a favor y en contra.", "Should university be free for everyone? Argue for and against."),
  q("B2", "opinions", "¿Crees que la gente lee menos que antes o simplemente lee de otra manera?", "Do you think people read less than before, or simply read differently?"),
  q("B2", "opinions", "¿Es posible ser buen líder sin ser carismático?", "Is it possible to be a good leader without being charismatic?"),
  q("B2", "society", "¿Qué cambios ha vivido tu ciudad en los últimos diez años? ¿Han sido positivos?", "What changes has your city gone through in the last ten years? Have they been positive?"),
  q("B2", "society", "¿Deberían los restaurantes y tiendas poder rechazar el pago en efectivo?", "Should restaurants and shops be allowed to refuse cash payments?"),
  q("B2", "society", "¿Qué tradición de tu país crees que desaparecerá y cuál sobrevivirá? ¿Por qué?", "Which tradition from your country do you think will disappear and which will survive? Why?"),
  q("B2", "hypotheticals", "Si pudieras cambiar una ley de tu país, ¿cuál sería y qué consecuencias tendría?", "If you could change one law in your country, which would it be and what consequences would it have?"),
  q("B2", "hypotheticals", "¿Qué harías si descubrieras que un compañero de trabajo miente en su currículum?", "What would you do if you discovered a colleague had lied on their CV?"),
  q("B2", "hypotheticals", "Imagina que mañana desaparece internet durante un mes. ¿Qué cambiaría primero?", "Imagine the internet disappeared tomorrow for a month. What would change first?"),
  q("B2", "work-study", "¿Qué es más útil para encontrar trabajo hoy: un título o una buena red de contactos?", "What is more useful for finding a job today: a degree or a good network?"),
  q("B2", "work-study", "¿Cómo le explicarías a tu jefe que necesitas más tiempo para un proyecto?", "How would you explain to your boss that you need more time for a project?"),
  q("B2", "work-study", "¿El teletrabajo mejora la vida de las personas o solo la de algunas? Matiza.", "Does remote work improve people's lives, or only some people's? Give nuance."),
  q("B2", "technology", "¿Qué deberíamos exigir a las plataformas que recopilan nuestros datos?", "What should we demand of platforms that collect our data?"),
  q("B2", "technology", "¿Las aplicaciones de traducción hacen innecesario aprender idiomas? Defiende tu postura.", "Do translation apps make learning languages unnecessary? Defend your position."),
  q("B2", "people", "¿Qué diferencias ves entre la forma de relacionarse de tus padres y la tuya?", "What differences do you see between how your parents relate to people and how you do?"),
  q("B2", "people", "¿Es posible mantener una amistad con alguien que tiene valores muy diferentes a los tuyos?", "Is it possible to keep a friendship with someone whose values are very different from yours?"),
  q("B2", "dilemmas", "Tu empresa te pide hacer algo legal pero que te parece injusto. ¿Cómo reaccionas?", "Your company asks you to do something legal but that seems unfair to you. How do you react?"),
  q("B2", "dilemmas", "Un familiar mayor quiere seguir viviendo solo, pero ya no es seguro. ¿Qué harías?", "An elderly relative wants to keep living alone, but it is no longer safe. What would you do?"),
  q("B2", "travel", "¿El turismo masivo beneficia o perjudica a las ciudades? ¿Depende de qué?", "Does mass tourism benefit or harm cities? What does it depend on?"),
  q("B2", "travel", "¿Qué es un viaje auténtico para ti? ¿Existe realmente?", "What is an authentic trip for you? Does it really exist?"),
  q("B2", "memories", "¿Qué decisión de tu pasado parecía pequeña y resultó muy importante?", "Which decision in your past seemed small and turned out to be very important?"),
  q("B2", "free-time", "¿El arte debería ser accesible para todos aunque pierda calidad? Argumenta.", "Should art be accessible to everyone even if it loses quality? Make your case."),
  q("B2", "language", "¿Qué expresiones del español te parecen más difíciles de usar con naturalidad?", "Which Spanish expressions do you find hardest to use naturally?"),
  q("B2", "future", "¿Qué profesiones crees que serán imprescindibles dentro de veinte años?", "Which professions do you think will be essential in twenty years?"),
  q("B2", "food", "¿Debería la escuela enseñar a cocinar como enseña matemáticas? ¿Por qué?", "Should schools teach cooking the way they teach maths? Why?"),

  // ── C1 ────────────────────────────────────────────────────────────────────
  q("C1", "society", "¿Qué debate público de tu país te parece mal planteado y cómo lo replantearías?", "Which public debate in your country do you think is badly framed, and how would you reframe it?"),
  q("C1", "society", "¿Hasta qué punto la nostalgia distorsiona cómo juzgamos el presente?", "To what extent does nostalgia distort how we judge the present?"),
  q("C1", "society", "¿Qué responsabilidad tienen los medios en la polarización? ¿Y los lectores?", "How responsible are the media for polarisation? And readers?"),
  q("C1", "hypotheticals", "Si hubieras elegido otra carrera, ¿en qué habría cambiado tu forma de pensar?", "If you had chosen a different career, how would your way of thinking have changed?"),
  q("C1", "hypotheticals", "¿Qué habría pasado en tu país si cierta decisión histórica no se hubiera tomado?", "What would have happened in your country if a certain historical decision had not been made?"),
  q("C1", "hypotheticals", "De haber sabido lo que sabes ahora, ¿qué consejo te habrías dado a los veinte años?", "Had you known what you know now, what advice would you have given yourself at twenty?"),
  q("C1", "opinions", "¿Cuál es el argumento más sólido en contra de una opinión que defiendes con convicción?", "What is the strongest argument against an opinion you hold with conviction?"),
  q("C1", "opinions", "¿Se puede criticar una cultura sin caer en el prejuicio? ¿Dónde está el límite?", "Can you criticise a culture without falling into prejudice? Where is the line?"),
  q("C1", "opinions", "¿La ironía ayuda o perjudica a un debate serio? Da ejemplos.", "Does irony help or hurt a serious debate? Give examples."),
  q("C1", "work-study", "¿Qué aspecto de tu profesión suele malinterpretar la gente de fuera?", "Which aspect of your profession do outsiders usually misunderstand?"),
  q("C1", "work-study", "¿Cómo moderarías una reunión en la que dos colegas no se ponen de acuerdo?", "How would you moderate a meeting in which two colleagues cannot agree?"),
  q("C1", "language", "¿En qué medida el idioma que hablamos condiciona lo que pensamos?", "To what extent does the language we speak shape what we think?"),
  q("C1", "language", "¿Qué pierde un texto cuando se traduce y qué puede ganar?", "What does a text lose when it is translated, and what can it gain?"),
  q("C1", "language", "¿Qué diferencia hay entre hablar bien un idioma y sonar natural en él?", "What is the difference between speaking a language well and sounding natural in it?"),
  q("C1", "people", "Resume la postura de alguien con quien no estás de acuerdo sin caricaturizarla.", "Summarise the position of someone you disagree with without caricaturing it."),
  q("C1", "people", "¿Qué conflicto resolviste mejor de lo que esperabas? ¿Qué aprendiste del proceso?", "Which conflict did you resolve better than expected? What did you learn from the process?"),
  q("C1", "technology", "¿La inteligencia artificial cambia qué significa ser creativo? Argumenta con matices.", "Does artificial intelligence change what it means to be creative? Argue with nuance."),
  q("C1", "technology", "¿Qué deberíamos enseñar a los adolescentes sobre la información que consumen?", "What should we teach teenagers about the information they consume?"),
  q("C1", "memories", "¿Qué recuerdo tuyo sospechas que has reconstruido con el tiempo?", "Which memory of yours do you suspect you have reconstructed over time?"),
  q("C1", "free-time", "¿Qué obra, canción o película te enseñó más sobre la cultura hispanohablante que cualquier clase?", "Which work, song or film taught you more about Hispanic culture than any lesson?"),
  q("C1", "dilemmas", "¿Denunciarías una irregularidad en tu empresa si eso te costara el puesto?", "Would you report wrongdoing at your company if it cost you your job?"),
  q("C1", "future", "¿Qué le dirías a alguien que afirma que el futuro siempre es peor que el pasado?", "What would you say to someone who claims the future is always worse than the past?"),

  // ── C2 ────────────────────────────────────────────────────────────────────
  q("C2", "language", "¿Qué palabra del español te parece intraducible y cómo la explicarías sin traducirla?", "Which Spanish word seems untranslatable to you and how would you explain it without translating it?"),
  q("C2", "language", "¿Qué diferencia hay entre ser educado, ser cortés y ser amable? Da ejemplos.", "What is the difference between being polite, being courteous and being kind? Give examples."),
  q("C2", "language", "¿Qué registro del español dominas peor: el muy formal o el muy coloquial? ¿Cómo lo notas?", "Which register of Spanish do you handle worse: very formal or very colloquial? How do you notice?"),
  q("C2", "language", "¿Hasta qué punto una lengua pertenece también a quienes la aprendieron de adultos?", "To what extent does a language also belong to those who learned it as adults?"),
  q("C2", "opinions", "Defiende con seriedad, sin ironía, una opinión que consideras equivocada.", "Seriously defend, without irony, an opinion you consider wrong."),
  q("C2", "opinions", "¿Qué matiz pierde una idea compleja cuando se simplifica para el gran público?", "What nuance does a complex idea lose when it is simplified for a general audience?"),
  q("C2", "opinions", "¿Hay opiniones que no merecen ser debatidas? ¿Quién decide cuáles?", "Are there opinions that do not deserve debate? Who decides which ones?"),
  q("C2", "society", "¿Qué convención social de un país hispanohablante te costó más entender y cómo la explicarías ahora?", "Which social convention of a Spanish-speaking country was hardest for you to understand, and how would you explain it now?"),
  q("C2", "society", "¿Qué refrán o dicho popular expresa una idea que hoy te parece discutible?", "Which saying or proverb expresses an idea you now find questionable?"),
  q("C2", "society", "¿Cómo cambia la fuerza de un argumento cuando lo expresas con ironía en lugar de con indignación?", "How does the force of an argument change when you express it with irony rather than indignation?"),
  q("C2", "free-time", "¿Qué estilo de humor funciona en tu lengua y fracasa en español, o al revés? ¿Por qué?", "Which kind of humour works in your language and fails in Spanish, or the other way round? Why?"),
  q("C2", "free-time", "¿Puede una obra ser importante y a la vez mala? Pon un ejemplo y defiéndelo.", "Can a work be important and bad at the same time? Give an example and defend it."),
  q("C2", "work-study", "Describe tu trabajo como lo contaría un abogado, un poeta y un adolescente.", "Describe your job the way a lawyer, a poet and a teenager would tell it."),
  q("C2", "work-study", "¿Qué decisión profesional defenderías ante un comité escéptico y con qué argumentos?", "Which professional decision would you defend before a sceptical committee, and with what arguments?"),
  q("C2", "hypotheticals", "Si tuvieras que eliminar una palabra del diccionario para siempre, ¿cuál sería y qué se perdería?", "If you had to strike one word from the dictionary for ever, which would it be and what would be lost?"),
  q("C2", "hypotheticals", "¿Cómo sería tu personalidad si solo pudieras expresarte en tu segunda lengua?", "What would your personality be like if you could only express yourself in your second language?"),
  q("C2", "people", "¿Qué le debes a las personas que te enseñaron algo sin proponérselo?", "What do you owe the people who taught you something without meaning to?"),
  q("C2", "memories", "¿Qué momento de tu vida contarías de manera distinta según quién te escuche? ¿Por qué?", "Which moment in your life would you tell differently depending on who is listening? Why?"),
  q("C2", "technology", "¿Qué conversaciones hemos dejado de tener desde que todo puede consultarse al instante?", "Which conversations have we stopped having since everything can be looked up instantly?"),
  q("C2", "dilemmas", "¿Cuándo es legítimo no decir toda la verdad? Pon un caso y defiéndelo con rigor.", "When is it legitimate not to tell the whole truth? Give a case and defend it rigorously."),
];

export const conversationQuestions: ConversationQuestion[] = bank.map((item, index) => ({
  id: `${item.level.toLowerCase()}-${String(index + 1).padStart(3, "0")}`,
  ...item,
}));

export function questionsForLevel(level: ConversationLevelCode): ConversationQuestion[] {
  return conversationQuestions.filter((question) => question.level === level);
}

export const questionCountByLevel: Record<ConversationLevelCode, number> = conversationQuestions.reduce(
  (counts, question) => ({ ...counts, [question.level]: counts[question.level] + 1 }),
  { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 } as Record<ConversationLevelCode, number>,
);
