import type { CEFRLevel } from './types';
import type { Scenario, Pair } from '../argento-roleplays/data';
const pair=(es:string,en:string):Pair=>[es,en];
const firstTurns: Record<string,[Pair,Pair]>={
 'Saludos':[pair('Hola. ¿Todo bien?','Hi. Everything okay?'),pair('Sí, todo bien. ¿Y tú?','Yes, all good. And you?')],
 'Kiosco':[pair('¿Agua o gaseosa?','Water or soda?'),pair('Agua, por favor.','Water, please.')],
 'Café porteño':[pair('¿Café o té?','Coffee or tea?'),pair('Café, por favor.','Coffee, please.')],
 'Asado':[pair('¿Quieres comer?','Do you want to eat?'),pair('Sí, por favor.','Yes, please.')],
 'Mate':[pair('¿Quieres mate?','Do you want mate?'),pair('Sí, gracias.','Yes, thank you.')],
 'Bar':[pair('¿Quieres agua?','Do you want water?'),pair('Sí, agua, por favor.','Yes, water, please.')],
 'Bondi y subte':[pair('¿Vas en autobús o en metro?','Are you going by bus or subway?'),pair('Voy en metro.','I am going by subway.')],
 'Hacer planes':[pair('¿Hoy o mañana?','Today or tomorrow?'),pair('Mañana, por favor.','Tomorrow, please.')],
 'Previa y juntada':[pair('¿Quieres venir?','Do you want to come?'),pair('Sí, quiero ir.','Yes, I want to go.')],
 'Feria y compras':[pair('¿Quieres una bolsa?','Do you want a bag?'),pair('No, gracias.','No, thank you.')],
 'Fútbol':[pair('¿Te gusta el fútbol?','Do you like football?'),pair('Sí, me gusta.','Yes, I like it.')],
 'Laburo':[pair('¿Trabajas hoy?','Are you working today?'),pair('Sí, trabajo hoy.','Yes, I am working today.')],
 'Cita':[pair('¿Te gusta este lugar?','Do you like this place?'),pair('Sí, me gusta. ¿Y tú?','Yes, I like it. And you?')],
 'Taxi / Uber':[pair('¿Vas a Palermo?','Are you going to Palermo?'),pair('Sí, a Palermo, por favor.','Yes, to Palermo, please.')],
 'Pedir ayuda':[pair('¿Necesitas ayuda?','Do you need help?'),pair('Sí, por favor. Busco el metro.','Yes, please. I am looking for the subway.')],
};
/** Keep the native Argentine scene and its people at every level. */
export function roleplayForLevel(scene:Scenario,level:CEFRLevel):Scenario {
 if(level==='A1')return scene;
 if(level==='A0'){
  const [question,answer]=firstTurns[scene.title];
  const exchanges:[Pair,Pair][]=[
   [question,answer],
   [pair('¿Otra vez?','Again?'),pair('Sí, otra vez, por favor.','Yes, again, please.')],
   [pair('¿Está bien?','Is that okay?'),pair('Sí, está bien.','Yes, that is okay.')],
   [pair('¿Algo más?','Anything else?'),pair('No, gracias.','No, thank you.')],
   [pair('¿Entiendes?','Do you understand?'),pair('Más despacio, por favor.','More slowly, please.')],
   [question,answer],
   [pair('¿Terminamos?','Shall we finish?'),pair('Sí. Muchas gracias.','Yes. Thank you very much.')],
  ];
  return {...scene,dialogue:exchanges.flatMap(([q,a])=>[['P',...q],['V',...a]] as Scenario['dialogue']),prompts:exchanges.slice(0,6).map(([q])=>q),resources:exchanges.map(([,a])=>a)};
 }
 const goals:Record<Exclude<CEFRLevel,'A0'|'A1'>,Pair>={
 A2:pair('Responde y pide una aclaración antes de acordar el siguiente paso.','Respond and ask for clarification before agreeing on the next step.'),
 B1:pair('Explica una experiencia relacionada y propone una alternativa si tu compañero no está de acuerdo.','Explain a related experience and suggest an alternative if your partner disagrees.'),
 B2:pair('Negocia una condición, responde a una objeción y conserva un tono cordial.','Negotiate a condition, respond to an objection and keep a friendly tone.'),
 C1:pair('Reformula el mensaje para una persona de otra generación; conserva la intención y ajusta el registro.','Rephrase the message for a person from another generation; preserve the intention and adapt the register.'),
 C2:pair('Identifica una intención implícita, responde con tacto y explica qué matiz se perdería en una traducción literal.','Identify an implicit intention, respond tactfully and explain what nuance a literal translation would lose.'),
 };
 const goal=goals[level];
 const levelModels:Record<Exclude<CEFRLevel,'A0'|'A1'>,Pair[]>={
  A2:[pair('No entiendo la última parte. ¿Puedes repetirla, por favor?','I do not understand the last part. Can you repeat it, please?'),pair('Primero quiero confirmar el horario.','First I want to confirm the time.')],
  B1:[pair('Prefiero otra opción porque tengo poco tiempo. ¿Podemos cambiar el plan?','I prefer another option because I have little time. Can we change the plan?'),pair('Una vez me pasó algo parecido.','Something similar happened to me once.')],
  B2:[pair('Entiendo tu objeción. Aceptaría esa condición si confirmamos los detalles antes.','I understand your objection. I would accept that condition if we confirm the details first.'),pair('Podemos ceder en ese punto sin cambiar lo esencial.','We can compromise on that point without changing what matters.')],
  C1:[pair('Si te he entendido bien, tu prioridad es el tiempo; reformulemos el acuerdo teniendo eso en cuenta.','If I have understood you correctly, time is your priority; let us reframe the agreement with that in mind.'),pair('En un contexto más formal, expresaría la misma intención de otra manera.','In a more formal context, I would express the same intention differently.')],
  C2:[pair('Interpreto tu respuesta como una invitación, aunque su sentido literal permitiría otra lectura; prefiero confirmar la intención antes de responder.','I interpret your answer as an invitation, although its literal meaning could allow another reading; I would rather confirm the intention before replying.'),pair('La familiaridad del tono no implica necesariamente confianza previa.','The familiar tone does not necessarily imply an existing close relationship.')],
 };
 return {...scene,prompts:scene.prompts.map(prompt=>pair(`${prompt[0]} ${goal[0]}`,`${prompt[1]} ${goal[1]}`)),resources:[...levelModels[level],...scene.resources]};
}
