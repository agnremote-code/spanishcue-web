'use client';
import {useState} from 'react';
import type {CEFRLevel} from '../conversation-families/types';
import type {Pair,Scene} from './data';
import {lessonTask} from './pedagogy';
import {oralBlocks} from './oral';
/** Optional scaffolding inside a lesson's original stage and visual container. */
export function NativeStageSupport({kind,stage,scene,level,className,model}:{kind:string;stage:number;scene:Scene;level:CEFRLevel;className:string;model?:Pair}){
 const [teacher,setTeacher]=useState(false),[showModel,setShowModel]=useState(level==='A0');
 const task=lessonTask(kind,stage,scene,level),blocks=oralBlocks(kind,stage,scene,scene.options[0]);
 const models:Record<CEFRLevel,Pair>={
 A0:(kind==='gala'&&(stage===1||stage===6))?scene.model:[blocks.map(item=>item[0]).join(' '),blocks.map(item=>item[1]).join(' ')],
 A1:scene.model,
 A2:kind==='gala'?['Primero saludé a una invitada. Después voy a devolver su invitación.','First I greeted a guest. Next I am going to return her invitation.']:['Primero elegí una película. Después voy a confirmar la hora con mi amiga.','First I chose a film. Next I am going to confirm the time with my friend.'],
 B1:[`Elegí esta opción por la situación de ${scene.name[0]}. Si aparece otro problema, podemos cambiar el plan.`,`I chose this option because of the situation involving ${scene.name[1]}. If another problem arises, we can change the plan.`],
 B2:[`Reconozco una ventaja en la otra opción; aun así, prefiero «${scene.options[0][0]}», siempre que acordemos las condiciones antes.`,`I acknowledge a benefit of the other option; even so, I prefer “${scene.options[0][1]}”, provided we agree on the conditions first.`],
 C1:[`Mi supuesto inicial sobre ${scene.name[0]} era incompleto. De haber conocido ese dato, habría formulado otra propuesta; ahora necesito revisar la prioridad de la otra persona.`,`My initial assumption about ${scene.name[1]} was incomplete. Had I known that fact, I would have made another proposal; now I need to reconsider the other person's priority.`],
 C2:[`El hecho «${scene.fact[0]}» admite más de una lectura. Ante otro interlocutor, conservaría ese hecho y distinguiría explícitamente la intención atribuida de lo que sabemos.`,`The fact “${scene.fact[1]}” allows more than one reading. For another audience, I would preserve that fact and explicitly distinguish attributed intention from what we know.`],
 };
 const ready=model??models[level];
 return <aside className={className} data-native-stage-support={level}>
  <div><b>Apoyo oral · Speaking support · {level}</b><p data-native-task>{task.prompt[0]}<br/>{task.prompt[1]}</p><p>{task.support[0]}<br/>{task.support[1]}</p><p>{task.expected[0]}<br/>{task.expected[1]}</p>
  {level==='A0'&&<p>{blocks.map((pair,index)=><span key={index}><b>{pair[0]}</b> / {pair[1]}{' · '}</span>)}</p>}
  <button type="button" aria-pressed={showModel} onClick={()=>setShowModel(!showModel)}>Modelo · Model</button>{showModel&&<p><b>{ready[0]}</b><br/>{ready[1]}</p>}
  <button type="button" aria-expanded={teacher} onClick={()=>setTeacher(!teacher)}>Guía docente · Teacher guide</button>{teacher&&<p>{level==='A0'?'Lee primero la frase completa y su traducción. El alumno repite; tú manejas las tarjetas, pistas y botones. Después cambia los roles. / Read the complete sentence and translation first. The learner repeats; you operate cards, clues and buttons. Then swap roles.':'Interpreta al personaje y cambia una condición. Pide que el alumno reformule su respuesta según el objetivo del nivel. / Play the character and change one condition. Ask the learner to rephrase according to the level objective.'}</p>}</div>
 </aside>;
}
