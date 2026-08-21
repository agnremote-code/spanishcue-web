export type Topic={name:string;englishName:string;emoji:string;desc:[string,string];color:string;questions:string[]};
export type ForbiddenBlock={name:string;englishName:string;question:string;challenge:[string,string];color:string};
export type PowerUp={emoji:string;name:string;english:string;phrase:string;translation:string;color:string};

export const topics:Topic[]=[
  {name:"Sexo y Vergüenza",englishName:"Sex and Shame",emoji:"🔥",desc:["Hablar de sexo, límites, respeto y vergüenza.","Talking about sex, boundaries, respect and shame."],color:"#e33b64",questions:["¿Por qué algunas personas sienten vergüenza al hablar de sexo?","¿Es importante hablar de sexo en la escuela?","¿Una persona puede decir que no sin dar una explicación?","¿Qué ayuda a hablar de este tema con respeto?"]},
  {name:"Muerte y Sentido",englishName:"Death and Meaning",emoji:"☠️",desc:["Miedo, vida, familia y cosas importantes.","Fear, life, family and important things."],color:"#48536f",questions:["¿Te da miedo hablar de la muerte?","¿Pensás que la muerte cambia nuestra forma de vivir?","¿Qué cosas querés hacer antes de morir?","¿Es bueno hablar de la muerte con la familia?"]},
  {name:"Amor Prohibido",englishName:"Forbidden Love",emoji:"💘",desc:["Amor, problemas, familia y decisiones.","Love, problems, family and decisions."],color:"#db3e9a",questions:["¿Por qué algunas relaciones son prohibidas?","¿Es posible amar a una persona que no te conviene?","¿Qué hacés si tu familia no acepta a tu pareja?","¿El amor es suficiente para una relación?"]},
  {name:"Derechos Humanos",englishName:"Human Rights",emoji:"⚖️",desc:["Respeto, igualdad, libertad y ayuda.","Respect, equality, freedom and help."],color:"#7956c8",questions:["¿Qué derecho es más importante para vos?","¿Todas las personas tienen los mismos derechos en tu país?","¿Es importante poder decir lo que pensás?","¿Qué puede hacer una persona cuando no respetan sus derechos?"]},
  {name:"Poder y Dinero",englishName:"Power and Money",emoji:"💸",desc:["Trabajo, dinero, felicidad y oportunidades.","Work, money, happiness and opportunities."],color:"#12a979",questions:["¿El dinero hace más feliz a una persona?","¿Preferís un trabajo interesante o un trabajo con buen sueldo?","¿Qué comprás cuando tenés dinero extra?","¿Es fácil ahorrar dinero en tu país?"]},
  {name:"Religión y Culpa",englishName:"Religion and Guilt",emoji:"⛪",desc:["Fe, familia, cambios y conversaciones.","Faith, family, change and conversations."],color:"#6448a7",questions:["¿La religión es importante en tu familia?","¿La fe ayuda en momentos difíciles?","¿Una persona puede cambiar de religión?","¿Es fácil hablar de religión con otras personas?"]},
  {name:"Familia y Lealtad",englishName:"Family and Loyalty",emoji:"🏠",desc:["Familia, ayuda, problemas y decisiones.","Family, support, problems and decisions."],color:"#167bb3",questions:["¿Qué significa ser leal a tu familia?","¿La familia siempre tiene razón?","¿Es importante vivir cerca de la familia?","¿Qué hacés cuando tenés un problema con un familiar?"]},
  {name:"Redes y Narcisismo",englishName:"Social Media and Narcissism",emoji:"📱",desc:["Internet, imagen, likes y vida real.","The internet, image, likes and real life."],color:"#9f42c7",questions:["¿Cuánto tiempo pasás en redes sociales?","¿Mostrás tu vida real en internet?","¿Por qué a muchas personas les gustan los likes?","¿Las redes ayudan a hacer amigos?"]},
  {name:"Moral Hipócrita",englishName:"Double Standards",emoji:"🎭",desc:["Errores, palabras, acciones y respeto.","Mistakes, words, actions and respect."],color:"#b9414f",questions:["¿La gente dice una cosa y hace otra?","¿Juzgamos a otras personas muy rápido?","¿Es fácil aceptar nuestros errores?","¿Qué significa ser una buena persona?"]},
  {name:"Belleza y Privilegio",englishName:"Beauty and Privilege",emoji:"🪞",desc:["Belleza, trato, oportunidades y redes.","Beauty, treatment, opportunities and social media."],color:"#b7831e",questions:["¿La belleza ayuda a conseguir oportunidades?","¿La gente trata mejor a las personas atractivas?","¿Qué significa ser lindo o linda para vos?","¿Las redes cambian nuestra idea de belleza?"]},
  {name:"Fracaso y Vergüenza",englishName:"Failure and Shame",emoji:"🕳️",desc:["Errores, aprendizaje, miedo y nuevos comienzos.","Mistakes, learning, fear and new beginnings."],color:"#4b5363",questions:["¿Cómo te sentís cuando algo sale mal?","¿Qué aprendiste de un error?","¿Es difícil empezar otra vez?","¿Te preocupa lo que otros piensan de tus fracasos?"]},
  {name:"Libertad y Control",englishName:"Freedom and Control",emoji:"🧠",desc:["Decisiones, reglas, deseos y libertad.","Decisions, rules, wishes and freedom."],color:"#247dc5",questions:["¿Qué significa ser libre para vos?","¿Podemos hacer siempre lo que queremos?","¿Qué decisiones tomás solo?","¿Cuándo es bueno tener reglas?"]},
  {name:"Tecnología y Soledad",englishName:"Technology and Loneliness",emoji:"🤖",desc:["Teléfonos, amigos, mensajes y compañía.","Phones, friends, messages and company."],color:"#42707a",questions:["¿Usás el teléfono cuando te sentís solo?","¿La tecnología ayuda a hablar con amigos?","¿Preferís hablar por mensaje o en persona?","¿Podemos tener una amistad con una inteligencia artificial?"]},
  {name:"País, Patria y Fanatismo",englishName:"Country, Homeland and Fanaticism",emoji:"🏳️",desc:["País, cultura, orgullo y diferencias.","Country, culture, pride and differences."],color:"#b73b39",questions:["¿Qué te gusta de tu país?","¿Qué no te gusta de tu país?","¿Es importante sentir orgullo por tu país?","¿Por qué algunas personas creen que su país es el mejor?"]}
];

export const forbiddenBlocks:ForbiddenBlock[]=[
  {name:"Una Cena Difícil",englishName:"A Difficult Dinner",question:"¿Qué tema nunca hablás durante una cena familiar?",challenge:["Explicá por qué es un tema difícil y da un ejemplo.","Explain why it is a difficult topic and give an example."],color:"#303646"},
  {name:"Sexo y Respeto",englishName:"Sex and Respect",question:"¿Qué necesitamos para hablar de sexo con respeto?",challenge:["Da tu opinión y una razón simple.","Give your opinion and one simple reason."],color:"#a6293e"},
  {name:"La Vida",englishName:"Life",question:"Si tenés un año libre, ¿qué querés hacer?",challenge:["Mencioná tres planes y explicá uno.","Mention three plans and explain one."],color:"#60305f"},
  {name:"Amor Difícil",englishName:"Difficult Love",question:"¿Qué hacés si amás a una persona, pero la relación es difícil?",challenge:["Hablá de la emoción y después de una solución.","Talk about the emotion and then a solution."],color:"#9c3259"},
  {name:"Derechos",englishName:"Rights",question:"¿Qué derecho necesita más protección en tu país?",challenge:["Elegí un derecho y da un ejemplo.","Choose one right and give an example."],color:"#73376b"},
  {name:"Una Decisión Personal",englishName:"A Personal Decision",question:"¿Qué decisión importante querés tomar sin la opinión de otras personas?",challenge:["Explicá la decisión con porque y para.","Explain the decision using because and in order to."],color:"#553d91"}
];

export const powerUps:PowerUp[]=[
  {emoji:"🔥",name:"Fuego de opinión",english:"Opinion fire",phrase:"Para mí…",translation:"For me…",color:"#ffcc4d"},
  {emoji:"✅",name:"Sello de acuerdo",english:"Agreement seal",phrase:"Estoy de acuerdo porque…",translation:"I agree because…",color:"#65c8ff"},
  {emoji:"❌",name:"Escudo de desacuerdo",english:"Disagreement shield",phrase:"No estoy de acuerdo porque…",translation:"I disagree because…",color:"#65df9a"},
  {emoji:"🧩",name:"Pieza de razón",english:"Reason piece",phrase:"La razón es que…",translation:"The reason is that…",color:"#b19aff"},
  {emoji:"💡",name:"Luz de ejemplo",english:"Example light",phrase:"Por ejemplo…",translation:"For example…",color:"#ff8fc8"},
  {emoji:"↔️",name:"Puente de contraste",english:"Contrast bridge",phrase:"Entiendo, pero…",translation:"I understand, but…",color:"#ffad69"},
  {emoji:"⏸️",name:"Pausa para pensar",english:"Thinking pause",phrase:"Necesito pensar un momento.",translation:"I need a moment to think.",color:"#ff7878"},
  {emoji:"🚀",name:"Salto final",english:"Final leap",phrase:"En conclusión…",translation:"In conclusion…",color:"#f7e45c"}
];

export const supportPhrases:[string,string][]=[
  ["Para mí…","For me…"],
  ["Pienso que…","I think that…"],
  ["Estoy de acuerdo porque…","I agree because…"],
  ["No estoy de acuerdo porque…","I disagree because…"],
  ["Depende de…","It depends on…"],
  ["Por ejemplo…","For example…"],
  ["Entiendo, pero…","I understand, but…"],
  ["¿Me repetís la pregunta?","Can you repeat the question?"]
];

export const feedbackLabels:[string,string][]=[
  ["Habló con frases completas","Spoke in complete sentences"],
  ["Dio una opinión","Gave an opinion"],
  ["Usó porque","Used because"],
  ["Dio un ejemplo","Gave an example"],
  ["Hizo una pregunta","Asked a question"],
  ["Tema favorito","Favourite topic"],
  ["Vocabulario nuevo","New vocabulary"],
  ["Gramática para practicar","Grammar to practise"],
  ["Frase para reutilizar","Phrase to reuse"],
  ["Próximo tema","Next topic"]
];
