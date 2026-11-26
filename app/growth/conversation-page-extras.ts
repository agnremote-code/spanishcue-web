/**
 * SEO plan step 6, batch L2c: the one hand-written element of each English
 * conversation page. Text approved word for word by the owner in the SEO
 * thread on 2026-11-26 (decision card, «Sí, publicalo tal cual»).
 */
export type ConversationExtra = {
  id: string;
  title: string;
  intro: string;
  table: { caption: string; head: string[]; rows: string[][] };
  closing: string;
};

export const conversationQuestionsExtra: ConversationExtra = {
  id: "model-answers",
  title: "What a good answer sounds like at each level",
  intro: "Knowing what answer to expect is what lets you push for more without asking for the impossible. Here is one question per level from the bank above, a model answer of the right length, and the follow-up that gets the next sentence.",
  table: {
    caption: "What a good answer sounds like at each level",
    head: ["Level", "Question", "Model answer", "Follow-up", "What to listen for"],
    rows: [
      ["A1", "¿A qué hora te levantas normalmente?", "Normalmente me levanto a las siete. Los sábados, a las diez.", "¿Y qué haces primero?", "The time with «a las», and one contrast (normalmente, los sábados)."],
      ["A2", "¿Qué hiciste ayer por la tarde?", "Ayer por la tarde fui al supermercado y después vi una serie con mi hermana. Estaba cansado y me acosté temprano.", "¿Qué serie? ¿Te gustó?", "Two past tenses: what happened (fui, vi) and how things were (estaba)."],
      ["B1", "¿Es mejor vivir en una ciudad grande o en un pueblo? Explica tu respuesta.", "Para mí, depende de la edad. Cuando eres joven, la ciudad tiene más trabajo y más vida, pero si tienes hijos, un pueblo es más tranquilo.", "¿Y dentro de diez años?", "An opinion with a reason and a «pero»: B1 is where answers start to have structure."],
      ["B2", "¿Debería la universidad ser gratuita para todos? Argumenta a favor y en contra.", "Por un lado, si fuera gratuita, más gente podría estudiar. Por otro, alguien tendría que pagarla. No creo que sea justo que la paguen quienes no la usan, aunque entiendo el argumento contrario.", "¿Quién debería pagarla, entonces?", "Both sides, a hypothesis (si fuera…, podría) and the subjunctive after a negated opinion (no creo que sea)."],
      ["C1", "¿Hasta qué punto la nostalgia distorsiona cómo juzgamos el presente?", "Bastante, diría yo. Recordamos lo bueno y olvidamos lo incómodo, de modo que el pasado siempre sale ganando. Ahora bien, la nostalgia también sirve para notar lo que hemos perdido de verdad.", "¿Me das un ejemplo de algo que sí se perdió?", "Hedging (diría yo), a consequence connector and a counter-argument with «ahora bien»."],
      ["C2", "¿Qué palabra del español te parece intraducible y cómo la explicarías sin traducirla?", "«Sobremesa». No es solo quedarse en la mesa después de comer: es ese rato sin prisa en el que la conversación importa más que la comida.", "¿Hay algo parecido en tu cultura?", "Explaining through an example and a connotation, not a dictionary definition."],
    ],
  },
  closing: "If the answer you get is shorter than the model, don't move to the next question: ask the follow-up. If it is longer, you chose the right question.",
};

export const conversationActivitiesExtra: ConversationExtra = {
  id: "online-or-group",
  title: "One-to-one online or a group: what changes",
  intro: "Most speaking activities are written for a classroom of teenagers. With adults, and especially one-to-one on a video call, five things change.",
  table: {
    caption: "One-to-one online or a group: what changes",
    head: ["", "One-to-one online", "Group"],
    rows: [
      ["Talk time", "You are the only partner, so you talk more than you think. Aim for the learner speaking at least two thirds of the time: answer briefly and hand the turn back.", "Pair work does the job; your role is to set the task and listen."],
      ["The partner", "You play the other role (the landlord, the airline agent) and swap roles halfway.", "Learners play the roles; you add a complication mid-task."],
      ["Materials", "One shared screen: the learner must be able to read everything without zooming.", "Printed cards or a projected board."],
      ["Correction", "Note errors and go through three at the end, so the conversation doesn't stop.", "Note errors while you listen to the pairs and review the most common ones with the whole group."],
      ["The ending", "A real outcome: a decision, a plan or a ranking the learner defends.", "Groups compare their outcomes and vote."],
    ],
  },
  closing: "The activities on the level pages work in both formats. When you teach online, follow the left column.",
};
