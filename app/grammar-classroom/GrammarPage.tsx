import type {Metadata} from 'next';
import type {ReactNode} from 'react';
import {notFound} from 'next/navigation';
import Classroom from './Classroom';
import {getClassroomLesson} from './lessons';

export type GrammarPageProps={searchParams:Promise<Record<string,string|string[]|undefined>>};
export function grammarPageMetadata(id:number):Metadata{
  const lesson=getClassroomLesson(id);
  return lesson?{title:`${lesson.title} · ${lesson.level} | SPANISHCUE`,description:`Clase guiada de 60 minutos: lectura, audio, explicación, conversación y escritura. ${lesson.title}.`}:{};
}
export default function GrammarPage({id,reference=false,children}:{id:number;reference?:boolean;children?:ReactNode}){
  const lesson=getClassroomLesson(id);if(!lesson)notFound();
  if(reference&&children)return <><div className="gc-reference"><a href={lesson.originalPath}>← Volver a la clase guiada de 60 minutos</a><p>Banco de consulta anterior. Contiene actividades adicionales y extensiones fuera del recorrido de hoy.</p></div>{children}</>;
  return <><Classroom key={id} lesson={lesson}/>{children&&<details className="gc-reference"><summary>Material de consulta y ampliación</summary><p>El banco original conserva explicaciones y ejercicios adicionales. Su duración y alcance corresponden al material de referencia, fuera de esta clase de 60 minutos.</p><a href={`${lesson.originalPath}?reference=1`}>Abrir banco de referencia →</a></details>}</>;
}
