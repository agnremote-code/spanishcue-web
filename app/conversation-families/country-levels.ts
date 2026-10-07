import type { CEFRLevel } from './types';
export type CountryPair = { es: string; en: string };
export type CountryContext = { name: string; scene?: boolean; source?: CountryPair[]; places?: CountryPair[]; words?: CountryPair[] };
const p = (es: string, en: string): CountryPair => ({ es:es.replace(/\ba el\b/g,"al").replace(/\bde el\b/g,"del"), en });
export const COUNTRY_LEVELS = ['A0','A1','A2','B1','B2','C1','C2'] as const;
/** Level adaptation stays inside each country's native map, places and answer builder. */
export function countrySupport(level: CEFRLevel, context: CountryContext) {
 const place = context.places?.[0] ?? p(context.name, context.name);
 const starters: Record<CEFRLevel, CountryPair[]> = {
 A0:[p('Yo quiero ir.','I want to go.'),p('Me gusta.','I like it.'),p('No, gracias.','No, thank you.'),p('¿Y tú?','And you?')],
 A1:[p('Quiero visitar…','I want to visit…'),p('Prefiero…','I prefer…'),p('Voy con…','I go with…'),p('Me gusta porque…','I like it because…')],
 A2:[p('Primero vamos a…','First we are going to…'),p('Necesitamos…','We need…'),p('Ayer visité…','Yesterday I visited…'),p('¿Podemos cambiar…?','Can we change…?')],
 B1:[p('Elegiría… porque…','I would choose… because…'),p('En mi experiencia…','In my experience…'),p('Si fuera posible…','If it were possible…'),p('Propongo que…','I suggest that…')],
 B2:[p('Aunque reconozco que…','Although I acknowledge that…'),p('La ventaja compensa…','The benefit offsets…'),p('Pondría como condición…','I would set the condition…'),p('Un contraejemplo sería…','A counterexample would be…')],
 C1:[p('Conviene matizar la idea de que…','We should qualify the idea that…'),p('Desde la perspectiva de…','From the perspective of…'),p('La medida sería viable siempre que…','The measure would be viable provided that…'),p('La evidencia no permite concluir que…','The evidence does not allow us to conclude that…')],
 C2:[p('Esa formulación presupone que…','That wording presupposes that…'),p('Concedo el argumento, si bien…','I concede the argument, although…'),p('Reformularía esa premisa como…','I would reframe that premise as…'),p('Cabe distinguir entre…','We should distinguish between…')],
 };
 const tips: Record<CEFRLevel, CountryPair> = {
 A0:p('Escucha. Señala una opción. Repite una frase completa. Tu profesor puede leer primero.','Listen. Point to an option. Repeat one complete sentence. Your teacher can read first.'),
 A1:p('Di una preferencia y pregunta «¿y tú?». Usa el banco de palabras.','State a preference and ask “and you?”. Use the word bank.'),
 A2:p('Une dos o tres frases. Añade una hora, una razón y una alternativa.','Link two or three sentences. Add a time, a reason and an alternative.'),
 B1:p('Explica tu elección, cuenta una experiencia y responde a tu compañero.','Explain your choice, recount an experience and respond to your partner.'),
 B2:p('Contrasta dos opciones, responde a una objeción y acuerda una condición.','Compare two options, respond to an objection and agree on a condition.'),
 C1:p('Distingue hechos e hipótesis. Adapta el registro a visitantes y residentes.','Distinguish facts from hypotheses. Adapt your register to visitors and residents.'),
 C2:p('Detecta presupuestos, reformula sin perder matices y media entre posiciones.','Identify assumptions, rephrase without losing nuance and mediate between positions.'),
 };
 const challenge: Record<CEFRLevel, CountryPair> = {
 A0:p(`Di «Quiero ir a ${place.es}». Luego pregunta «¿y tú?».`,`Say “I want to go to ${place.en}”. Then ask “and you?”.`),
 A1:p(`Invita a un compañero a ${place.es}. Pregunta con quién va.`,`Invite a partner to ${place.en}. Ask who they are going with.`),
 A2:p(`Acuerda una visita a ${place.es}; cambia el horario porque llueve.`,`Agree on a visit to ${place.en}; change the time because it is raining.`),
 B1:p(`Propón una visita a ${place.es} y explica cómo resolverías un desacuerdo.`,`Suggest visiting ${place.en} and explain how you would resolve a disagreement.`),
 B2:p(`Negocia una norma para visitar ${place.es}: defiende una ventaja y admite un coste.`,`Negotiate a rule for visiting ${place.en}: defend a benefit and acknowledge a cost.`),
 C1:p(`Presenta la misma propuesta sobre ${place.es} a residentes y visitantes con registros distintos.`,`Present the same proposal about ${place.en} to residents and visitors using different registers.`),
 C2:p(`Media una disputa sobre ${place.es}; reformula ambas posiciones y cuestiona una premisa compartida.`,`Mediate a dispute about ${place.en}; rephrase both positions and challenge a shared premise.`),
 };
 if(context.scene){
  const tasks:Record<CEFRLevel,CountryPair>={
   A0:p('Lee una respuesta preparada. Repite y cambia los roles.','Read a prepared response. Repeat and swap roles.'),
   A1:p('Responde con una frase y haz una pregunta corta.','Answer in one sentence and ask a short question.'),
   A2:p('Resuelve la situación y pide una aclaración.','Resolve the situation and ask for clarification.'),
   B1:p('Explica tu preferencia y acuerda una alternativa con tu compañero.','Explain your preference and agree on an alternative with your partner.'),
   B2:p('Negocia una condición y responde a una objeción con cortesía.','Negotiate a condition and respond politely to an objection.'),
   C1:p('Cambia el registro para otra audiencia sin cambiar la intención.','Change register for another audience without changing your intention.'),
   C2:p('Explica una intención implícita y media en un malentendido cultural.','Explain an implicit intention and mediate a cultural misunderstanding.'),
  };
  challenge[level]=p(`Escena: ${context.name}. ${tasks[level].es}`,`Scene: ${place.en}. ${tasks[level].en}`);
 }
 const connectors = level==='A0' ? [p('Sí.','Yes.'),p('No.','No.'),p('¿Y tú?','And you?')] : level==='A1' ? [p('y','and'),p('pero','but'),p('porque','because')] : level==='A2' ? [p('primero','first'),p('después','then'),p('por eso','so')] : [p('sin embargo','however'),p('por una parte','on the one hand'),p('aun así','even so')];
 return {starters:starters[level],connectors,tip:tips[level],challenge:challenge[level],closing:[challenge[level],p(`¿Qué puedes decir ahora sobre ${context.name}? Usa una frase del nivel ${level}.`,`What can you say about ${context.name} now? Use a sentence at level ${level}.`)]};
}
export function countryActivity(level: CEFRLevel, context: CountryContext, index=0) {
 const place=context.places?.[index % context.places.length] ?? p(context.name,context.name);
 const support=countrySupport(level,{...context,places:[place]});
 const localWord=context.words?.length?context.words[index%context.words.length]:undefined;
 const prompts: Record<CEFRLevel, CountryPair[]> = {
 A0:[p(`Mira ${place.es}. ¿Quieres ir? Sí o no.`,`Look at ${place.en}. Do you want to go? Yes or no.`),p(`En ${place.es}: ¿agua o café?`,`At ${place.en}: water or coffee?`),p(`En ${place.es}: ¿solo o con una amiga?`,`At ${place.en}: alone or with a friend?`),p(`Para ${place.es}: ¿hoy o mañana?`,`For ${place.en}: today or tomorrow?`),p(`Mira ${place.es}. ¿Te gusta?`,`Look at ${place.en}. Do you like it?`)],
 A1:[p(`¿Quieres visitar ${place.es}? ¿Con quién?`,`Do you want to visit ${place.en}? With whom?`),p(`Estás en ${place.es}. ¿Qué quieres comer o beber?`,`You are at ${place.en}. What do you want to eat or drink?`),p(`¿Prefieres visitar ${place.es} por la mañana o por la tarde?`,`Do you prefer visiting ${place.en} in the morning or afternoon?`),p(`¿Cómo vas a ${place.es}: a pie o en autobús?`,`How do you get to ${place.en}: on foot or by bus?`),p(`Describe ${place.es} con dos palabras y pregunta qué opina tu compañero.`,`Describe ${place.en} in two words and ask what your partner thinks.`)],
 A2:[p(`Organiza una tarde en ${place.es}. Acuerden una hora y una actividad.`,`Plan an afternoon at ${place.en}. Agree on a time and an activity.`),p(`Quieres llegar a ${place.es}. Pide indicaciones y confirma lo que entiendes.`,`You want to get to ${place.en}. Ask for directions and confirm what you understand.`),p(`Imagina que ayer visitaste ${place.es}. Cuenta qué hiciste y qué te gustó.`,`Imagine you visited ${place.en} yesterday. Say what you did and enjoyed.`),p(`Llueve durante tu visita a ${place.es}. Explica el problema y propón otro plan.`,`It rains during your visit to ${place.en}. Explain the problem and suggest another plan.`),p(`Tu compañero tiene poco tiempo en ${place.es}. Recomienda una actividad y explica por qué.`,`Your partner has little time at ${place.en}. Recommend an activity and explain why.`)],
 B1:[p(`¿Qué cambiaría en tu rutina si pasaras un mes cerca de ${place.es}? Da ejemplos.`,`What would change in your routine if you spent a month near ${place.en}? Give examples.`),p(`Compara ${place.es} con un lugar que conoces. ¿Qué experiencia recomendarías?`,`Compare ${place.en} with somewhere you know. What experience would you recommend?`),p(`Tu compañero no quiere visitar ${place.es}. Escucha su razón y propón un acuerdo.`,`Your partner does not want to visit ${place.en}. Listen to their reason and suggest a compromise.`),p(`Imagina un problema de transporte en ${place.es}. Cuenta lo ocurrido y cómo lo resolviste.`,`Imagine a transport problem at ${place.en}. Describe what happened and how you solved it.`),p(`¿Cómo pueden los visitantes cuidar ${place.es}? Propón dos medidas y explica sus efectos.`,`How can visitors care for ${place.en}? Propose two measures and explain their effects.`)],
 B2:[p(`En ${place.es} se propone limitar visitas. Defiende una postura, responde a una objeción y fija una excepción.`,`A visitor limit is proposed at ${place.en}. Defend a position, respond to an objection and set an exception.`),p(`Compara invertir en transporte o promoción de ${place.es}. Negocia prioridades con un presupuesto limitado.`,`Compare investing in transport or promotion at ${place.en}. Negotiate priorities on a limited budget.`),p(`¿Qué ganaría y perdería ${place.es} con más turismo? Sopesa beneficios y costes para dos grupos.`,`What would ${place.en} gain and lose with more tourism? Weigh benefits and costs for two groups.`),p(`Cuestiona una recomendación de viaje sobre ${place.es} sin descalificar a quien la propone.`,`Challenge a travel recommendation about ${place.en} without dismissing the person making it.`),p(`Propón una alternativa a una norma impopular en ${place.es}. Justifica cómo medirías su resultado.`,`Propose an alternative to an unpopular rule at ${place.en}. Explain how you would measure its outcome.`)],
 C1:[p(`Redacta oralmente una propuesta para ${place.es}: matiza riesgos, distingue hipótesis de hechos y anticipa críticas.`,`Deliver a proposal for ${place.en}: qualify risks, distinguish hypotheses from facts and anticipate criticism.`),p(`Explica un conflicto de uso de ${place.es} a residentes y luego a visitantes. Adapta el registro sin cambiar el fondo.`,`Explain a conflict over the use of ${place.en} to residents, then visitors. Adapt your register without changing the substance.`),p(`Analiza quién queda fuera de una campaña sobre ${place.es}. Propón criterios de representación y sus límites.`,`Analyse who is left out of a campaign about ${place.en}. Propose representation criteria and their limits.`),p(`Formula condiciones para una inversión en ${place.es}; negocia una concesión sin abandonar tu prioridad.`,`Set conditions for investment at ${place.en}; negotiate a concession without abandoning your priority.`),p(`Sintetiza dos opiniones opuestas sobre ${place.es} y presenta una conclusión provisional con reservas.`,`Synthesise opposing views about ${place.en} and present a provisional conclusion with caveats.`)],
 C2:[p(`«${place.es} pertenece a todo el mundo». Examina los presupuestos de esa frase y media entre dos interpretaciones incompatibles.`,`“${place.en} belongs to everyone.” Examine that statement's assumptions and mediate between incompatible interpretations.`),p(`Reformula con tacto una crítica irónica sobre ${place.es}; conserva su matiz para una audiencia que desconoce el contexto.`,`Tactfully rephrase an ironic criticism of ${place.en}; preserve its nuance for an audience unfamiliar with the context.`),p(`Desmonta una falsa disyuntiva sobre conservar o transformar ${place.es}. Construye una tercera posición y sométela a crítica.`,`Dismantle a false choice between preserving and changing ${place.en}. Build a third position and subject it to criticism.`),p(`En una negociación sobre ${place.es}, identifica un desacuerdo implícito y reformúlalo de modo que ambas partes lo reconozcan.`,`In a negotiation about ${place.en}, identify an implicit disagreement and reframe it so both sides recognise it.`),p(`Defiende y luego cuestiona el mismo relato sobre ${place.es}. Explica qué cambia al elegir otras palabras.`,`Defend and then challenge the same narrative about ${place.en}. Explain what changes when different words are chosen.`)],
 };
 const a0Choices=[ [p('Sí, quiero ir.','Yes, I want to go.'),p('No, gracias.','No, thank you.')], [p('Quiero agua.','I want water.'),p('Quiero café.','I want coffee.')], [p('Voy solo.','I am going alone.'),p('Voy con una amiga.','I am going with a friend.')], [p('Quiero ir hoy.','I want to go today.'),p('Quiero ir mañana.','I want to go tomorrow.')], [p('Sí, me gusta.','Yes, I like it.'),p('No me gusta.','I do not like it.')] ];
 if(level==='A0'&&index%5===1&&localWord){
  prompts.A0[1]=p(`En ${place.es}: «${localWord.es}». ¿Te interesa?`,`At ${place.en}: “${localWord.en}”. Are you interested?`);
  a0Choices[1]=[p('Sí, me interesa.','Yes, I am interested.'),p('No, no me interesa.','No, I am not interested.')];
 }
 const choices=level==='A0'?a0Choices[index%5]:support.starters;
 const models: Record<CEFRLevel,CountryPair>={
 A0:choices[0],
 A1:p(`Quiero visitar ${place.es} con una amiga. ¿Y tú?`,`I want to visit ${place.en} with a friend. And you?`),
 A2:p(`Primero vamos a ${place.es}. Si llueve, podemos cambiar el plan.`,`First we are going to ${place.en}. If it rains, we can change the plan.`),
 B1:p(`Elegiría ${place.es} porque quiero conocer otro ritmo de vida. Si no estamos de acuerdo, podemos combinar dos planes.`,`I would choose ${place.en} because I want to experience a different pace of life. If we disagree, we can combine two plans.`),
 B2:p(`Limitaría las visitas a ${place.es}, aunque reconozco que reduciría algunos ingresos. Aceptaría una excepción si beneficia a la comunidad.`,`I would limit visits to ${place.en}, although I acknowledge that this would reduce some income. I would accept an exception if it benefits the community.`),
 C1:p(`La propuesta para ${place.es} sería viable siempre que se consulte a sus residentes; sin esos datos, sus ventajas siguen siendo una hipótesis.`,`The proposal for ${place.en} would be viable provided residents are consulted; without that information, its benefits remain a hypothesis.`),
 C2:p(`Decir que ${place.es} pertenece a todos confunde acceso con capacidad de decisión. Reformularía el acuerdo para reconocer ambas aspiraciones sin equipararlas.`,`Saying that ${place.en} belongs to everyone confuses access with decision-making power. I would reframe the agreement to recognise both aspirations without equating them.`),
 };
 const prompt=prompts[level][index%5];
 const source=context.source?.length?context.source[index%context.source.length]:undefined;
 const groundedPrompt=source&&['B2','C1','C2'].includes(level)?p(`Punto de partida: ${source.es} ${prompt.es}`,`Starting point: ${source.en} ${prompt.en}`):prompt;
 return { ...groundedPrompt,starter:choices[0],choices,spark:support.challenge,tip:support.tip,model:models[level] };
}
