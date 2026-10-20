import type {Metadata} from 'next';
import type {ReactNode} from 'react';
import {notFound} from 'next/navigation';
import Classroom from './Classroom';
import {coursePosition} from './curriculum';
import LiveClassroom from './live/LiveClassroom';
import {getLiveLessonInfo,loadLiveLesson} from './live/registry';
import type {VisualKey} from './live/types';
import Observatory from './observatory/Observatory';
import ArticleClassroom from './studio/ArticleClassroom';
import AdjectiveScene from './studio/AdjectiveScene';
import ArticleScene from './studio/ArticleScene';
import NounScene from './studio/NounScene';
import {getClassroomLesson} from './lessons';

export type GrammarPageProps={searchParams:Promise<Record<string,string|string[]|undefined>>};
export function grammarPageMetadata(id:number):Metadata{
  const lesson=getClassroomLesson(id)??getLiveLessonInfo(id);
  return lesson?{title:`${lesson.title} · ${lesson.level} | SPANISHCUE`,description:`Clase guiada de 60 minutos: lectura, audio, explicación, conversación y escritura. ${lesson.title}.`}:{};
}
/** Interactive studio scenes kept inside the live class. Passed from the server so they stay out of the shared live-class chunk. */
const liveScenes:Record<number,Partial<Record<VisualKey,ReactNode>>>={40:{'noun-workbench':<NounScene/>},41:{'adjective-workbench':<AdjectiveScene/>},42:{'article-gallery':<ArticleScene/>}};
export default async function GrammarPage({id,reference=false,children}:{id:number;reference?:boolean;children?:ReactNode}){
  const lesson=getClassroomLesson(id);
  // Live-only classes (239 onwards) carry everything in their live lesson: no legacy classroom context.
  const live=await loadLiveLesson(id);if(!lesson){if(!live)notFound();return <LiveClassroom lesson={live} course={coursePosition(id)}/>;}
  if(reference&&children)return <><div className="gc-reference"><a href={lesson.originalPath}>← Volver a la clase guiada de 60 minutos</a><p>Banco de consulta anterior. Contiene actividades adicionales y extensiones fuera del recorrido de hoy.</p></div>{children}</>;
  return <>{live?<LiveClassroom lesson={live} scenes={liveScenes[id]} course={coursePosition(id)}/>:id===42?<ArticleClassroom lesson={lesson}/>:id===43?<Observatory lesson={lesson}/>:<Classroom key={id} lesson={lesson}/>}{children&&<details className="gc-reference"><summary>Material de consulta y ampliación</summary><p>El banco original conserva explicaciones y ejercicios adicionales. Su duración y alcance corresponden al material de referencia, fuera de esta clase de 60 minutos.</p><a href={`${lesson.originalPath}?reference=1`}>Abrir banco de referencia →</a></details>}</>;
}
