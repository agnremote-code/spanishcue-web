'use client';
import Link from 'next/link';
import type {Lesson} from '../../lesson-catalog';
import {ConversationFamily} from '../ConversationFamily';
import {CEFR_LEVELS,type CEFRLevel} from '../types';
import {OralBuilder} from '../OralBuilder';
import {museumRooms} from './content';
export default function MuseumConversation({lesson}:{lesson:Lesson}){
 return <ConversationFamily id="clase-203" title={lesson.title} levels={CEFR_LEVELS} defaultLevel="C2">{level=><MuseumExperience key={level} lesson={lesson} level={level}/>}</ConversationFamily>;
}
function MuseumExperience({lesson,level}:{lesson:Lesson;level:CEFRLevel}){
 const a0=level==='A0';const label=(es:string,en:string)=>a0?`${es} · ${en}`:es;
 const rooms=level==='C2'?null:museumRooms(level);
 return <div className="teacher-app"><main className="teacher-main" style={{maxWidth:960}}>
  <Link href="/">← {label('Biblioteca','Library')}</Link>
  <section className="teacher-intro" style={{margin:'30px 0'}}><p>{level} · {label('Conversación','Conversation')} · 45–60 min</p><h1 style={{fontSize:'clamp(32px,5vw,52px)'}}>{label(lesson.title,'The museum of decisions')}</h1><p>{level==='C2'?lesson.subtitle:label('Ocho salas. Elige, explica y escucha otra idea.','Eight rooms. Choose, explain and listen to another idea.')}</p></section>
  <section className="teaching-section"><h2>{label('01 · Para empezar','01 · Start here')}</h2><p>{level==='C2'?lesson.warmup:label('El profesor abre una sala y maneja los controles. Tú escuchas y respondes oralmente. Puedes inventar los detalles.','The teacher opens a room and operates the controls. You listen and answer aloud. You can invent details.')}</p></section>
  <section className="teaching-section"><h2>{label('02 · La idea clave','02 · The key idea')}</h2><p>{level==='C2'?lesson.explanation:level==='A0'?'Primero escucha un modelo. Elige una acción, di la frase y cambia una pieza. Termina preguntando ¿Y tú? · First hear a model. Choose an action, say the sentence and change one piece. Finish by asking And you?':level==='A1'?'Empieza con una frase corta. Usa el modelo y haz una pregunta.':level==='A2'?'Une tu elección con una razón. Acuerda un plan sencillo.':level==='B1'?'Explica una decisión, cuenta una experiencia y considera una alternativa.':level==='B2'?'Defiende tu decisión, escucha una objeción y negocia una condición.':'Interpreta intereses, precisa tu postura y adapta el registro al interlocutor.'}</p></section>
  {[0,1].map(half=><section className="teaching-section" key={half}><h2>{label(half?'04 · A conversar':'03 · Práctica guiada',half?'04 · Conversation':'03 · Guided practice')}</h2>{rooms?rooms.slice(half*4,half*4+4).map(room=><details key={room.id}><summary>{room.id+1} · {label(room.title,room.titleEn)}</summary><p>{room.prompt}</p>{a0&&<p lang="en">{room.promptEn}</p>}{a0?<OralBuilder support={room.support}/>:room.model&&<p><b>Modelo: </b>{room.model}</p>}{room.tip&&<p>💡 {room.tip}</p>}<details><summary>{label('Otra vuelta','Another turn')}</summary><p>{room.followup}</p></details></details>):(half?lesson.speaking:lesson.practice).map((item,index)=><details key={item}><summary>{half?'Ronda':'Actividad'} {index+1}</summary><p>{item}</p></details>)}</section>)}
  <section className="teaching-section"><h2>{label('05 · Para cerrar','05 · Closing')}</h2><p>{level==='C2'?lesson.homework:level==='A0'?'Di una frase de dos salas. Escucha a tu profesor y pregunta ¿Y tú? · Say one sentence from two rooms. Listen to your teacher and ask And you?':level==='A1'?'Di dos elecciones y pregunta a tu profesor.':level==='A2'?'Relaciona dos elecciones con porque y pero.':level==='B1'?'Cuenta qué decisión cambió hoy y explica por qué.':level==='B2'?'Relaciona dos salas y defiende una conclusión con una excepción.':'Sintetiza las tensiones entre dos salas. Reformula tu conclusión para otro interlocutor.'}</p></section>
 </main></div>;
}
