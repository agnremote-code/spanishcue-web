import type {CEFRLevel} from '../conversation-families/types';
import {narratives,type Pair} from '../conversation-narratives/data';
import {sceneAtLevel} from '../conversation-narratives/advanced';
import {lessonTask} from '../conversation-narratives/pedagogy';
type Evidence={kind:string;source:string;text:string;prompt:string};
type CaseFile={id:string;number:string;title:string;desk:string;opening:string;phases:[Evidence,Evidence,Evidence,Evidence];teacher:string;close:string;registers?:{name:string;text:string;effect:string}[]};
const evidence:readonly (readonly Pair[])[]=[
 [['Inés ya no trabaja en Lumen.','Inés no longer works at Lumen.'],['La empresa dice: «Inés quiere cambiar».','The company says: “Inés wants a change.”'],['Un chat dice: «Inés no tiene poder aquí».','A chat says: “Inés has no power here.”'],['Inés tiene otra empresa. Ella habla de dinero con Lumen.','Inés has another company. She talks about money with Lumen.']],
 [['El actor sale después de una broma.','The actor leaves after a joke.'],['El guion dice: «El actor sale ahora».','The script says: “The actor leaves now.”'],['El actor escribe: «No me gusta esa broma».','The actor writes: “I do not like that joke.”'],['La presentadora cambia una parte de la broma.','The presenter changes part of the joke.']],
 [['La cena llega setenta minutos tarde.','Dinner arrives seventy minutes late.'],['El hotel dice: «Todos tienen comida».','The hotel says: “Everyone has food.”'],['El refrigerador no funciona. Dos platos cambian.','The refrigerator does not work. Two dishes change.'],['La comida es segura. La cena llega tarde.','The food is safe. Dinner arrives late.']],
 [['La universidad cambia la fecha.','The university changes the date.'],['La universidad dice: «Queremos un lugar seguro».','The university says: “We want a safe place.”'],['Un correo dice: «No queremos problemas en las noticias».','An email says: “We do not want problems in the news.”'],['El invitado cambia el título. No quiere preguntas.','The guest changes the title. He does not want questions.']],
 [['La directora dice: «Vienen por la foto».','The director says: “They come for the photo.”'],['La pregunta es sobre el público.','The question is about the audience.'],['Ella mira a los patrocinadores.','She looks at the sponsors.'],['Tenemos la pregunta y el gesto. No sabemos con seguridad.','We have the question and the gesture. We do not know for sure.']],
];
const sources:Pair[]=[['TITULAR','HEADLINE'],['MENSAJE','MESSAGE'],['DATO NUEVO','NEW FACT'],['COMPROBACIÓN','CHECK']];
export function ministryCopy(level:CEFRLevel,pair:Pair){return level==='A0'?pair.join(' · '):pair[0];}
export function ministryScene(level:CEFRLevel,index:number){return sceneAtLevel('ministry',index,narratives.ministry.scenes[index],level);}
export function ministryCases(native:CaseFile[],level:CEFRLevel):CaseFile[]{
 if(level==='C2')return native;
 const say=(pair:Pair)=>ministryCopy(level,pair);
 return native.map((item,index)=>{
  const base=narratives.ministry.scenes[index],scene=ministryScene(level,index),task=lessonTask('ministry',1,scene,level);
  const phases=evidence[index].map((fact,i):Evidence=>{
   const text=(level==='B2'||level==='C1')&&i===2?scene.fact:(level==='B1'||level==='B2'||level==='C1')&&i===3?scene.hidden:fact;
   const prompt:Pair=level==='A0'?['Lee con el profesor. Di: «Yo sé esto» o «Yo no sé». Después repite una pieza.','Read with your teacher. Say: “I know this” or “I do not know”. Then repeat one chunk.']:level==='A1'?['¿Quién habla? Di qué pasa en una frase. ¿Es igual a tu primera idea?','Who is speaking? Say what happens in one sentence. Is it the same as your first idea?']:level==='A2'?['Cuenta qué pasó antes y qué sabes ahora. Haz una pregunta a la persona.','Tell what happened before and what you know now. Ask the person a question.']:level==='B1'?['¿Qué cambia este dato? Explica tu interpretación y una razón. Tu profesor propone otra explicación.','What does this fact change? Explain your reading and a reason. Your teacher offers another explanation.']:level==='B2'?['Compara dos explicaciones de este dato. Concede un punto a la otra lectura y especifica qué te haría cambiar.','Compare two explanations of this evidence. Concede one point to the other reading and specify what would change your mind.']:['Distingue el hecho de la intención atribuida. Revisa un supuesto y explica qué habría cambiado sin este dato.','Distinguish the fact from attributed intent. Revisit an assumption and explain what would have changed without this evidence.'];
   return {kind:say(sources[i]),source:say(['ARCHIVO '+item.number,'FILE '+item.number]),text:say(text),prompt:say(prompt)};
  }) as CaseFile['phases'];
  const close=level==='A0'?say(['Di: «Yo no sé». Elige una opción y lee su traducción con el profesor.','Say: “I do not know”. Choose an option and read its translation with your teacher.']):say(task.prompt);
  return {...item,title:say(base.name),desk:say(['VERSIONES DEL MISMO HECHO','VERSIONS OF THE SAME EVENT']),opening:say(base.fact),phases,
   teacher:say(level==='A0'?['Lee cada dato en español e inglés. Pulsa una pieza; el alumno la dice. Acepta «no sé». No pidas una explicación sin ofrecer el modelo.','Read each fact in Spanish and English. Click one chunk; the learner says it. Accept “I do not know”. Do not request an explanation without offering the model.']:['Presenta una interpretación distinta del mismo dato. Pide que el alumno revise su primera idea con el apoyo de su nivel.','Offer another reading of the same evidence. Ask the learner to revisit their first idea using the support for their level.']),close,
   registers:item.registers?[
    {name:say(['CON UN AMIGO','WITH A FRIEND']),text:say(['La cena llega tarde. Quiero una solución.','Dinner arrives late. I want a solution.']),effect:say(['La persona dice lo que quiere.','The person says what they want.'])},
    {name:say(['CON EL HOTEL','WITH THE HOTEL']),text:say(['Perdón, la cena llega tarde. ¿Puede ayudarnos?','Excuse me, dinner arrives late. Can you help us?']),effect:say(['La persona pide ayuda con cortesía.','The person asks for help politely.'])},
    {name:say(['EN LAS NOTICIAS','IN THE NEWS']),text:say(['La cena empieza setenta minutos tarde. Dos platos cambian.','Dinner starts seventy minutes late. Two dishes change.']),effect:say(['La noticia cuenta dos hechos.','The news reports two facts.'])},
    {name:say(['RESPUESTA DEL HOTEL','HOTEL RESPONSE']),text:say(['Sentimos el retraso. Ofrecemos una solución.','We are sorry about the delay. We offer a solution.']),effect:say(['El hotel acepta el problema y ofrece ayuda.','The hotel accepts the problem and offers help.'])},
   ]:undefined};
 });
}
export function ministryCouncil(level:CEFRLevel){
 const say=(p:Pair)=>ministryCopy(level,p);
 return narratives.ministry.scenes.flatMap((base,index)=>{
  const scene=ministryScene(level,index),task=lessonTask('ministry',3,scene,level);
  return [{q:say(level==='A0'?['¿Qué sabes? Lee: «'+base.fact[0]+'».','What do you know? Read: “'+base.fact[1]+'”.']:level==='A1'?['¿Qué pasa en «'+base.name[0]+'»? Di dos frases.','What happens in “'+base.name[1]+'”? Say two sentences.']:task.prompt),f:say(level==='A0'?['Di: «Yo no sé». Pide: «Otra vez, por favor».','Say: “I do not know”. Ask: “Again, please”.']:['Compara tu idea con la primera prueba del caso. ¿Qué cambió?','Compare your idea with the first piece of evidence. What changed?']),c:say(level==='A0'?['El profesor lee otra opción. Escucha y repite una palabra.','The teacher reads another option. Listen and repeat one word.']:['Tu profesor propone: «'+scene.options[1][0]+'». Responde usando un dato.','Your teacher proposes: “'+scene.options[1][1]+'”. Respond using a fact.'])}];
 });
}
export const ministryReadings:readonly Pair[]=[['Habla del público.','She is talking about the audience.'],['Habla de los patrocinadores.','She is talking about the sponsors.'],['No está claro.','It is unclear.']];
export function ministryObjection(level:CEFRLevel,position:'A'|'B'|'M',index:number){
 const pairs:Record<'A'|'B'|'M',Pair[]>={A:[['Ella mira a los patrocinadores.','She looks at the sponsors.'],['¿La mirada cambia tu idea?','Does her gaze change your idea?'],['Di una cosa que no sabes.','Say one thing you do not know.']],B:[['La pregunta es sobre el público.','The question is about the audience.'],['¿La pregunta cambia tu idea?','Does the question change your idea?'],['Di una cosa que no sabes.','Say one thing you do not know.']],M:[['Elige el dato más importante.','Choose the most important fact.'],['¿Qué pregunta quieres hacer?','What question do you want to ask?'],['Cuenta las dos posibilidades.','Tell both possibilities.']]};
 return ministryCopy(level,pairs[position][index]);
}
