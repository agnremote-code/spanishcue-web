'use client';
import type {ClassroomLesson} from '../types';
import TeacherStudio,{type StudioDesign} from '../studio/TeacherStudio';
import DurationScene from './DurationScene';
import './duration.css';
const design:StudioDesign={title:['Desde. Hace.','Tu vida en el tiempo.'],subtitle:['Un barrio, muchas historias. Elige un lugar y descubre qué empezó, qué continúa y qué cambió.','since · for · ago'],cues:[['¿Cuánto tiempo llevas aquí?','since / for'],['Conoce a Elena y su nuevo horario.','horario · schedule'],['El inicio, la duración y el cambio.','starting point · duration · completed event'],['Elige según lo que quieres contar.','still true now / a completed event'],['Escucha a Pablo antes de abrir el texto.','first: the message · then: the details'],['Ahora, tu historia.','Ask and answer.'],['Preséntate al barrio.','Write a message.'],['Una idea, dos perspectivas.','arrival / life here now']],openingTask:['Explora el barrio. El presente de la escena es octubre: mueve el inicio y observa cuánto dura cada historia.','Scene calendar: October = now.'],readingNote:['Lee primero para entender el cambio en la vida de Elena.','cambio · change | tardes libres · free afternoons'],listeningNote:['Compara el lugar del paseo con el lugar de la cita.','paseo · walk | punto de encuentro · meeting point'],closingTask:['Cuenta un cambio terminado y una situación que continúa.','ago / for / since']};
function support(lesson:ClassroomLesson):Record<string,string>{return {
 'El comienzo':'starting point', 'La duración hasta ahora':'duration up to now', 'Un hecho terminado':'completed event',
 'desde + fecha / momento':'since + starting point','presente + desde hace + tiempo / hace + tiempo + que + presente':'for + length of time; the situation is still true','hace + tiempo + verbo en pasado':'ago; a completed event',
 'Señala cuándo empezó algo que continúa.':'It started then and is still true now.', 'Desde hace seis meses, no «desde seis meses».':'for six months',
 [lesson.reading.text]:'horario = schedule · desde entonces = since then · todavía = still · vecina = neighbour · hace dos semanas = two weeks ago',
 [lesson.speaking[0].prompt]:'desde cuándo · since when | cambio reciente · recent change',[lesson.speaking[0].followUp]:'antes · before | ahora · now',
 [lesson.speaking[1].prompt]:'barrio · neighbourhood | desde cuándo · since when',[lesson.speaking[1].followUp]:'aclara el dato · correct the information',
 [lesson.speaking[2].prompt]:'juntos · together | horarios · availability',[lesson.speaking[2].followUp]:'otra posibilidad · another option',
 [lesson.writing.prompt]:'presentarte · introduce yourself | continúa · is still true | cambio reciente · recent change',
 [lesson.listening.title]:'voice message', [lesson.listening.transcript]:'segundo = second floor · hace tres semanas que = for three weeks · desde septiembre = since September · me hice daño = I hurt myself · encontrarnos = meet',
};}
export default function DurationClassroom({lesson}:{lesson:ClassroomLesson}){return <div className="du-immersive"><TeacherStudio immersive lesson={lesson} english={support(lesson)} design={design} scene={<DurationScene/>} grammarVisual={<div className="du-key"><span><b>DESDE</b>inicio · since</span><span><b>DESDE HACE</b>duración · for</span><span><b>HACE</b>hecho pasado · ago</span></div>}/><details className="du-scope"><summary>Alcance de esta clase · A2</summary><p>{lesson.scope}</p></details></div>;}
