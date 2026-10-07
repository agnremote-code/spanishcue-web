import type { CEFRLevel } from '../conversation-families/types';
import type { OralSupport } from '../conversation-families/OralBuilder';
import { narratives, type Pair } from '../conversation-narratives/data';
import { sceneAtLevel } from '../conversation-narratives/advanced';
import { agencyConsequences } from '../conversation-narratives/consequences';
import { lessonTask } from '../conversation-narratives/pedagogy';
import type { Dossier } from './page';
const join=(pair:Pair,level:CEFRLevel)=>level==='A0'?`${pair[0]} / ${pair[1]}`:pair[0];
const positive:Pair[]=[['Ganas mucho y conoces otros países.','You earn a lot and get to know other countries.'],['El cine funciona. Tienes amigos cerca.','The cinema works. You have friends nearby.'],['Conoces países y haces documentales.','You get to know countries and make documentaries.'],['Tienes dinero y tiempo libre.','You have money and free time.'],['El cine abre. Tu familia tiene ayuda.','The cinema opens. Your family has help.'],['Tienes un trabajo estable y tiempo para el piano.','You have a stable job and time for the piano.']];
const roles:Pair[]=[['Directora del estudio','Studio director'],['Dueño del cine','Cinema owner'],['Documentalista','Documentary maker'],['Fundador de la empresa','Company founder'],['Directora del cine familiar','Family cinema director'],['Coordinadora','Coordinator']];
const sentences:Pair[][]=[
 [['Yo quiero seguir en el estudio.','I want to stay at the studio.'],['Yo quiero trabajar menos.','I want to work less.']],
 [['Yo quiero quedarme con mi pareja.','I want to stay with my partner.'],['Yo quiero viajar.','I want to travel.']],
 [['Yo quiero viajar más.','I want to travel more.'],['Yo necesito una casa.','I need a home.']],
 [['Yo quiero empezar otro proyecto.','I want to start another project.'],['Yo quiero descansar.','I want to rest.']],
 [['Yo quiero ayudar a mi familia.','I want to help my family.'],['Yo quiero aceptar otro trabajo.','I want to accept another job.']],
 [['Yo prefiero un trabajo estable.','I prefer a stable job.'],['Yo quiero cambiar de trabajo.','I want to change jobs.']],
];
const changedEffects:readonly [Pair,Pair][]=[
 [['Tienes las noches libres.','Your evenings are free.'],['Ganas menos dinero.','You earn less money.']],
 [['Tu carrera crece en otro país.','Your career grows in another country.'],['Tu pareja vive lejos de ti.','Your partner lives far away from you.']],
 [['Tus amigos te ven cada semana.','Your friends see you every week.'],['Pierdes algunos viajes de trabajo.','You lose some work trips.']],
 [['Tienes tiempo para descansar.','You have time to rest.'],['Necesitas actividades fuera del trabajo.','You need activities outside work.']],
 [['Puedes hacer el trabajo que quieres.','You can do the job you want.'],['Tu familia necesita otra persona para el cine.','Your family needs someone else for the cinema.']],
 [['Puedes crear proyectos nuevos.','You can create new projects.'],['Tu sueldo cambia cada mes.','Your salary changes every month.']],
];
export const agencyValueEnglish:Record<string,string>={TIEMPO:'TIME',VÍNCULOS:'RELATIONSHIPS',DINERO:'MONEY',LIBERTAD:'FREEDOM',ESTABILIDAD:'STABILITY',RECONOCIMIENTO:'RECOGNITION'};
export function agencySupport(index:number):OralSupport{
 const scene=narratives.agency.scenes[index];
 return {frame:{es:'___',en:'___'},choices:sentences[index].map(([es,en])=>({es,en})),model:{es:scene.model[0],en:scene.model[1]},tip:{es:'Yo = I · tú = you. Quiero + verbo: usa el verbo sin cambiar. El profesor elige; tú dices toda la frase.',en:'Yo means I; tú means you. After quiero, keep the action verb unchanged. The teacher chooses; you say the whole sentence.'}};
}
export function agencyDossiersForLevel(original:readonly Dossier[],level:CEFRLevel):readonly Dossier[]{
 if(level==='C1')return original;
 return original.map((dossier,index)=>{
  const base=narratives.agency.scenes[index];const scene=sceneAtLevel('agency',index,base,level);
  const task=lessonTask('agency',1,scene,level);
  const simple=level==='A0'||level==='A1';
  const question:Pair=simple?['¿Qué quieres? Elige y di una frase.','What do you want? Choose and say a sentence.']:level==='A2'?['¿Qué pasó antes y qué quieres hacer ahora?','What happened before and what do you want to do now?']:level==='B1'?['¿Qué esperabas ganar con esta decisión? Da una razón concreta.','What did you expect to gain from this decision? Give a specific reason.']:level==='B2'?['Compara los beneficios para ti y para otra persona. ¿Qué condición exigirías?','Compare the benefits for you and for another person. What condition would you require?']:['Distingue el relato con que justificas la decisión del criterio que permitiría refutarlo.','Distinguish the story used to justify the decision from the criterion that could disprove it.'];
  const reconsider:Pair=simple?['¿Cambias? Di: «Yo quiero…».','Do you change? Say: “I want…”.']:level==='A2'?['Ahora conoces el problema. Explica un plan diferente.','Now you know the problem. Explain a different plan.']:level==='B1'?['Explica qué parte de tu opinión cambia al conocer este coste.','Explain which part of your opinion changes after learning this cost.']:level==='B2'?['Reconoce un beneficio perdido y negocia una condición para aceptar el coste.','Acknowledge a lost benefit and negotiate a condition for accepting the cost.']:['¿El coste refuta tu criterio o revela una premisa que habías dejado sin examinar? Reformula ante la persona afectada.','Does the cost disprove your criterion or reveal an unexamined premise? Reformulate for the affected person.'];
  return {...dossier,door:join(scene.name,level),signal:join(simple?['Una puerta. Dos vidas posibles.','One door. Two possible lives.']:scene.fact,level),decision:join(scene.fact,level),probe:join(question,level),consequence:join(positive[index],level),consequencePrompt:join(simple?['¿Te gusta esta vida? Sí o no.','Do you like this life? Yes or no.']:['¿Qué permite esta ventaja y quién se beneficia? Añade un ejemplo.','What does this advantage make possible and who benefits? Add an example.'],level),cost:join(scene.hidden,level),reconsider:join(reconsider,level),person:{...dossier.person,role:join(roles[index],level),line:join(base.model,level),teacher:join(simple?['Lee el modelo como si fuera tu vida. Escucha una pregunta corta y responde con sí, no o una frase del caso.','Read the model as if it were your life. Listen to a short question and answer with yes, no or one sentence from the case.']:[task.prompt[0]+' Responde desde el personaje y revela una reserva.',task.prompt[1]+' Answer in character and reveal a qualification.'],level)},rewrite:join(simple?sentences[index][1]:['Eliges otra vida: '+base.options[1][0]+'.','You choose another life: '+base.options[1][1]+'.'],level),ripples:changedEffects[index].map(effect=>join(effect,level)) as [string,string],finalPrompt:join(simple?['¿Mantienes el cambio? Sí o no. Di una frase.','Do you keep the change? Yes or no. Say a sentence.']:level==='A2'?['Explica qué vas a ganar y qué vas a perder.','Explain what you are going to gain and lose.']:level==='B1'?['Relaciona los dos efectos con tu prioridad y justifica tu decisión.','Connect both effects to your priority and justify your decision.']:level==='B2'?['Negocia cuál de los efectos aceptarías y con qué garantía.','Negotiate which effect you would accept and with what guarantee.']:['Formula un criterio que pueda justificar este cambio sin depender de que sus resultados te favorezcan.','Formulate a criterion that can justify this change without depending on whether the results benefit you.'],level)};
 });
}
export function agencyInterview(level:CEFRLevel,index:number,original:readonly string[]):readonly string[]{
 if(level==='C1')return original;
 const name=narratives.agency.scenes[index].name[0];
 const simple:Pair[]=[['¿Qué quieres? / Yo quiero…','What do you want? / I want…'],['¿Tienes tiempo? / Sí, tengo tiempo.','Do you have time? / Yes, I have time.'],['¿Te gusta tu trabajo? / Sí, me gusta.','Do you like your job? / Yes, I like it.'],['¿Quieres cambiar? / Yo quiero…','Do you want to change? / I want…']];
 if(level==='A0'||level==='A1')return simple.map(p=>join(p,level));
 if(level==='A2')return ['¿Cómo era tu vida antes?','¿Qué haces ahora cada día?','¿Qué quieres cambiar el próximo mes?','¿Qué vas a hacer primero?'];
 if(level==='B1')return [`¿Qué te llevó a elegir «${name}»?`,'¿Qué ventaja te sorprendió? Cuenta un ejemplo.','¿Qué problema no esperabas?','¿Qué consejo darías a quien elige ahora?'];
 if(level==='B2')return ['¿Qué alternativa descartaste y qué ventaja tenía?','¿Qué coste aceptarías solo con una condición?','¿Quién interpreta tu decisión de otra manera?','¿Qué garantía necesitarías para cambiar?'];
 return ['¿Qué presupone tu definición del éxito?','¿Qué evidencia pondría en crisis tu interpretación de esta vida?','¿Qué responsabilidad sigues teniendo por costes que no anticipaste?','Reformula tu decisión para alguien que asume el coste sin compartir el beneficio.'];
}
export function agencyFinals(level:CEFRLevel,original:readonly {q:string;f:string;c:string}[]){
 if(level==='C1')return original;
 const a0:Pair[]=[['¿Tiempo o dinero? Yo quiero tiempo.','Time or money? I want time.'],['¿Casa o viajes? Yo necesito una casa.','A home or travel? I need a home.'],['¿Amigos o trabajo hoy? Yo quiero ver a mis amigos.','Friends or work today? I want to see my friends.'],['¿Cambiar o seguir? Yo quiero cambiar.','Change or continue? I want to change.'],['¿Te gusta esta vida? Sí, me gusta.','Do you like this life? Yes, I like it.'],['¿Quieres descansar? Sí, quiero descansar.','Do you want to rest? Yes, I want to rest.'],['¿Quieres otro trabajo? Yo quiero otro trabajo.','Do you want another job? I want another job.'],['¿Quieres ayudar a tu familia? Yo quiero ayudar.','Do you want to help your family? I want to help.'],['¿Qué necesitas hoy? Yo necesito tiempo.','What do you need today? I need time.'],['¿Qué puerta prefieres? Yo prefiero esta puerta.','Which door do you prefer? I prefer this door.']];
 const a2=['Compara dos trabajos y elige uno.','Describe un cambio pequeño que vas a hacer.','Explica por qué necesitas tiempo libre.','Cuenta una decisión de ayer.','Compara tu casa con un lugar que quieres visitar.','Explica qué haces para descansar.','Describe tu trabajo ideal con tres detalles.','Organiza una visita a tu familia.','Di qué necesitas esta semana y por qué.','Compara dos puertas y elige una.'];
 return original.map((item,i)=>({q:level==='A0'||level==='A1'?join(a0[i],level):level==='A2'?a2[i]:level==='B1'?`${a2[i]} Relaciónalo con una experiencia concreta.`:level==='B2'?`${item.q} Defiende una alternativa y negocia una condición.`:`${item.q} Examina la premisa que hace plausible la pregunta y formula un criterio que resista un caso límite.`,f:level==='A0'?join(['Cambia una palabra y repite la frase.','Change one word and repeat the sentence.'],level):level==='A1'?'Añade una frase y pregunta: ¿Y tú?':level==='A2'?'Explica qué vas a hacer después.':level==='B1'?'Añade una razón y un ejemplo.':item.f,c:level==='A0'?join(['El profesor elige otra opción. Di: «Yo prefiero…».','The teacher chooses another option. Say: “I prefer…”.'],level):level==='A1'?'Tu profesor elige otra opción. Escucha y di qué prefieres.':level==='A2'?'Tu profesor propone otro plan. Acuerden un lugar o una hora.':level==='B1'?'Tu profesor cambia un detalle. Explica si cambia tu decisión.':item.c}));
}
export function agencyTask(stage:number,index:number,level:CEFRLevel):string{
 const scene=sceneAtLevel('agency',index,narratives.agency.scenes[index],level);
 const task=lessonTask('agency',stage,scene,level);
 // The original native balance has exactly three priority slots.
 return join([task.prompt[0].replace('Elige dos prioridades.','Elige tres prioridades.'),task.prompt[1].replace('Choose two priorities.','Choose three priorities.')],level);
}
export function agencyLanguage(level:CEFRLevel,original:Record<string,readonly string[]>,index:number):Record<string,readonly string[]>{
 if(level==='C1')return original;
 const scene=narratives.agency.scenes[index];
 const task=lessonTask('agency',1,scene,level);
 return {HIPÓTESIS:level==='A0'?sentences[index].map(p=>join(p,level)):level==='A1'?[scene.model[0],'¿Qué quieres? · ¿Y tú?']:level==='A2'?['Antes… · Ahora… · Voy a…',scene.model[0]]:[task.support[0]],MATIZ:level==='A0'?['Yo = I · tú = you · nosotros = we.','Sí / Yes · No / No · Pero / But']:level==='A1'?['Me gusta… · No me gusta…','Quiero…, pero necesito…']:level==='A2'?['Prefiero… porque…','Es bueno, pero…']:['Reconozco que…; aun así…','Una ventaja de la otra vida sería…'],REVISIÓN:level==='A0'?['Yo quiero cambiar. / I want to change.','Yo quiero seguir. / I want to continue.']:level==='A1'?['Ahora quiero…','No quiero…']:level==='A2'?['Antes quería… Ahora quiero…']:['Ahora revisaría… porque…',agencyConsequences[index][1][0]]};
}
