import type { CEFRLevel } from '../conversation-families/types';
export type Pair = [string, string];
export type WorldSeed = { words: Pair[]; situation: Pair; claim: Pair };
export const seed = (a:string, ae:string, b:string, be:string, situation:string, situationEn:string, claim:string, claimEn:string):WorldSeed => ({words:[[a,ae],[b,be]], situation:[situation,situationEn],claim:[claim,claimEn]});
export const worldTools:Record<CEFRLevel,Pair[]> = {
 A0:[['Yo quiero…','I want…'],['Yo no quiero…','I do not want…'],['¿Y tú?','And you?'],['Otra vez, por favor.','Again, please.']],
 A1:[['Prefiero…','I prefer…'],['Tengo…','I have…'],['Me gusta…','I like…'],['¿Y tú?','And you?']],
 A2:[['Voy a… porque…','I am going to… because…'],['Necesito…','I need…'],['Podemos…','We can…'],['¿Cuándo te viene bien?','When works for you?']],
 B1:[['En mi experiencia…','In my experience…'],['La ventaja es…','The advantage is…'],['Si pasa eso, podemos…','If that happens, we can…'],['¿Qué propones tú?','What do you suggest?']],
 B2:[['Aunque entiendo…, considero…','Although I understand…, I think…'],['Aceptaría siempre que…','I would accept provided that…'],['El riesgo sería…','The risk would be…'],['¿Qué objeción plantearías?','What objection would you raise?']],
 C1:[['Conviene distinguir… de…','We should distinguish… from…'],['Eso presupone que…','That presupposes that…'],['Cabe una lectura distinta…','Another reading is possible…'],['Mi afirmación admite esta excepción…','My claim allows this exception…']],
 C2:[['La formulación da por sentado…','The wording takes for granted…'],['No equivale a afirmar que…','That is not equivalent to claiming…'],['Esa salvedad altera el alcance de…','That qualification changes the scope of…'],['En ese registro se insinuaría…','In that register it would imply…']],
};
export const worldGuides:Record<CEFRLevel,Pair> = {
 A0:['Profesor: elige un mundo, lee el modelo y pulsa las piezas. El alumno señala y dice la frase; cambia una palabra y repite. No necesita saber español.','Teacher: choose a world, read the model and click the chunks. The learner points and says the sentence; change one word and repeat. No Spanish knowledge needed.'],
 A1:['Di una preferencia y pregunta por la de tu compañero.','State a preference and ask your partner about theirs.'],
 A2:['Resuelve la situación con un plan y una razón. Cambia un detalle.','Solve the situation with a plan and a reason. Change one detail.'],
 B1:['Cuenta una experiencia, explica una decisión y responde a una alternativa.','Tell an experience, explain a decision and respond to an alternative.'],
 B2:['Negocia una condición, contesta una objeción y revisa el acuerdo.','Negotiate a condition, answer an objection and revise the agreement.'],
 C1:['Distingue dos lecturas, señala un supuesto y delimita tu conclusión.','Distinguish two readings, identify an assumption and qualify your conclusion.'],
 C2:['Examina lo implícito, reformula para otro interlocutor y comprueba qué compromiso cambia.','Examine implications, rephrase for another listener and check what commitment changes.'],
};
export function worldQuestions(s:WorldSeed, level:CEFRLevel):Pair[] {
 const [[a,ae],[b,be]]=s.words;
 switch(level){
 case 'A0': return [[`¿${a} o ${b}? · Di: «Yo quiero ${a}».`,`“${ae}” or “${be}”? Say: “I want ${ae}.”`],[`¿Quieres ${b}? · Di: «Sí, quiero ${b}» o «No, gracias».`,`Do you want ${be}? Say: “Yes, I want ${be}” or “No, thank you”.`],[`¿Y tú? · Di: «Yo quiero ${b}. ¿Y tú?»`,`And you? Say: “I want ${be}. And you?”`],[`Otra vez: «Yo no quiero ${a}. Yo quiero ${b}».`,`Again: “I do not want ${ae}. I want ${be}.”`]];
 case 'A1': return [[`¿Prefieres ${a} o ${b}?`,`Do you prefer ${ae} or ${be}?`],[`¿Quieres ${a} hoy? ¿Y mañana?`,`Do you want ${ae} today? And tomorrow?`],[`Tu compañero prefiere ${b}. ¿Y tú?`,`Your partner prefers ${be}. And you?`],[`Pide ${a} y di gracias. Después pide ${b}.`,`Ask for ${ae} and say thank you. Then ask for ${be}.`]];
 case 'A2': return [[`${s.situation[0]} ¿Qué vas a hacer primero?`,`${s.situation[1]} What are you going to do first?`],[`Elige entre ${a} y ${b}. Explica tu plan para mañana.`,`Choose between ${ae} and ${be}. Explain your plan for tomorrow.`],[`${s.situation[0]} Tu amigo necesita ayuda. ¿Qué le dices?`,`${s.situation[1]} Your friend needs help. What do you say?`],[`Ayer elegiste ${a}; hoy prefieres ${b}. Explica el cambio con una razón sencilla.`,`Yesterday you chose ${ae}; today you prefer ${be}. Give a simple reason for the change.`]];
 case 'B1': return [[`${s.situation[0]} ¿Cómo resolverías el problema?`,`${s.situation[1]} How would you solve the problem?`],[`Relaciona «${s.claim[0]}» con una experiencia concreta. ¿Estás de acuerdo?`,`Connect “${s.claim[1]}” to a concrete experience. Do you agree?`],[`Compara las consecuencias de elegir ${a} o ${b}. ¿Qué aconsejas?`,`Compare the consequences of choosing ${ae} or ${be}. What do you recommend?`],[`${s.situation[0]} Cuenta cómo terminó y qué aprendiste.`,`${s.situation[1]} Tell how it ended and what you learned.`]];
 case 'B2': return [[`${s.situation[0]} Negocia una solución que acepte alguien que prefiere ${b}.`,`${s.situation[1]} Negotiate a solution acceptable to someone who prefers ${be}.`],[`«${s.claim[0]}». Defiende la idea, responde a una objeción y fija un límite.`,`“${s.claim[1]}”. Defend the idea, answer an objection and set a limit.`],[`¿En qué condiciones elegirías ${a} aunque prefieras ${b}? Explica el coste.`,`Under what conditions would you choose ${ae} even though you prefer ${be}? Explain the cost.`],[`${s.situation[0]} Cambia quién decide y revisa las consecuencias de tu acuerdo.`,`${s.situation[1]} Change who decides and revisit the consequences of your agreement.`]];
 case 'C1': return [[`«${s.claim[0]}». ¿Qué supuesto sostiene esa afirmación y qué caso la limitaría?`,`“${s.claim[1]}”. What assumption supports this claim and what case would limit it?`],[`${s.situation[0]} Propón dos lecturas plausibles de las intenciones de los implicados.`,`${s.situation[1]} Offer two plausible readings of the participants’ intentions.`],[`¿Cuándo presentar ${a} y ${b} como opuestos oculta una tercera posibilidad?`,`When does treating ${ae} and ${be} as opposites hide a third possibility?`],[`Reformula «${s.claim[0]}» para conservar su argumento sin generalizar.`,`Rephrase “${s.claim[1]}” to retain its argument without generalizing.`]];
 case 'C2': return [[`«${s.claim[0]}». Construye una lectura literal y otra irónica: ¿qué indicios permitirían distinguirlas sin atribuir intenciones gratuitas?`,`“${s.claim[1]}”. Build a literal and an ironic reading: what evidence distinguishes them without inventing intentions?`],[`${s.situation[0]} Comunica la misma decisión a un amigo y a una institución. ¿Qué presuposición o compromiso introduce cada formulación?`,`${s.situation[1]} Communicate the same decision to a friend and an institution. What presupposition or commitment does each wording introduce?`],[`En la oposición entre ${a} y ${b}, identifica una falsa equivalencia y reconstruye el argumento más sólido que permite.`,`In the opposition between ${ae} and ${be}, identify a false equivalence and reconstruct the strongest argument it allows.`],[`Impugna «${s.claim[0]}» sin caricaturizarla; después delimita el alcance exacto de tu propia objeción.`,`Challenge “${s.claim[1]}” without caricaturing it, then delimit the exact scope of your own objection.`]];
 }
}
export function worldModel(s:WorldSeed,level:CEFRLevel):Pair {
 const [[a,ae],[b,be]]=s.words;
 switch(level){
 case 'A0':return [`Yo quiero ${a}. ¿Y tú?`,`I want ${ae}. And you?`];
 case 'A1':return [`Prefiero ${a}. No quiero ${b}. ¿Y tú?`,`I prefer ${ae}. I do not want ${be}. And you?`];
 case 'A2':return [`Mi elección es ${a} porque lo necesito. ¿Podemos hablar mañana?`,`My choice is ${ae} because I need it. Can we talk tomorrow?`];
 case 'B1':return [`Entre ${a} y ${b}, prefiero la primera opción. Puedo explicar una ventaja y también un problema.`,`Between ${ae} and ${be}, I prefer the first option. I can explain an advantage and also a problem.`];
 case 'B2':return [`Entiendo el argumento de «${s.claim[0]}». Sin embargo, aceptaría esa postura solo con una excepción concreta.`,`I understand the argument in “${s.claim[1]}”. However, I would accept that view only with a specific exception.`];
 case 'C1':return [`La afirmación «${s.claim[0]}» admite dos lecturas. Antes de aceptarla, distinguiría el caso particular de una regla general.`,`The claim “${s.claim[1]}” allows two readings. Before accepting it, I would distinguish the specific case from a general rule.`];
 case 'C2':return [`«${s.claim[0]}» permite una lectura literal, pero el contexto aún no demuestra que esa sea la intención del hablante.`,`“${s.claim[1]}” permits a literal reading, but the context does not yet show that this is the speaker’s intention.`];
 }
}
export function worldClosing(s:WorldSeed,level:CEFRLevel):Pair[]{
 const [[a,ae],[b,be]]=s.words;
 switch(level){
 case 'A0':return [[`Di tu elección: «Yo quiero ${a}» o «Yo quiero ${b}».`,`Say your choice: “I want ${ae}” or “I want ${be}”.`],['Pregunta: «¿Y tú?». Escucha y repite una palabra.','Ask: “And you?” Listen and repeat one word.']];
 case 'A1':return [[`Di una preferencia entre ${a} y ${b}. Pregunta por la de tu compañero.`,`State a preference between ${ae} and ${be}. Ask about your partner’s.`],['¿Qué palabra puedes decir sin mirar? Úsala en otra frase.','Which word can you say without looking? Use it in another sentence.']];
 case 'A2':return [[`Vuelve a esta escena: ${s.situation[0]} Acuerda qué vas a hacer mañana.`,`Return to this scene: ${s.situation[1]} Agree on what you are going to do tomorrow.`],['Explica tu plan y una razón. Tu compañero cambia la hora; responde.','Explain your plan and a reason. Your partner changes the time; respond.']];
 case 'B1':return [[`¿Qué experiencia ayuda a decidir entre ${a} y ${b}?`,`What experience helps you decide between ${ae} and ${be}?`],[`Revisa tu consejo para esta escena: ${s.situation[0]} ¿Qué consecuencia has tenido en cuenta?`,`Revisit your advice for this scene: ${s.situation[1]} What consequence have you considered?`]];
 case 'B2':return [[`¿Qué objeción a «${s.claim[0]}» te hizo revisar una condición de tu acuerdo?`,`What objection to “${s.claim[1]}” made you revise a condition of your agreement?`],[`Acuerda una solución para esta escena y explica qué coste aceptas: ${s.situation[0]}`,`Agree on a solution for this scene and explain what cost you accept: ${s.situation[1]}`]];
 case 'C1':return [[`Delimita la afirmación «${s.claim[0]}» con la excepción más convincente que escuchaste.`,`Qualify “${s.claim[1]}” using the most convincing exception you heard.`],[`Conserva dos lecturas de esta escena y di qué dato permitiría elegir: ${s.situation[0]}`,`Keep two readings of this scene and identify evidence that would let you choose: ${s.situation[1]}`]];
 case 'C2':return [[`Reformula «${s.claim[0]}» para otro interlocutor. Comprueba qué compromiso se mantiene y qué insinuación desaparece.`,`Rephrase “${s.claim[1]}” for another listener. Check what commitment remains and what implication disappears.`],[`¿Qué límite tiene tu interpretación de esta escena y cómo lo harías explícito sin debilitarla artificialmente? ${s.situation[0]}`,`What limits your reading of this scene, and how would you make that explicit without artificially weakening it? ${s.situation[1]}`]];
 }
}
