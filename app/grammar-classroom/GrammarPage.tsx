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
import {isFreeLesson} from '../access-policy';
import {lessons as catalogLessons} from '../lesson-catalog';
import {SITE_NAME,SITE_ORIGIN} from '../seo';
import {serializeJsonLd} from '../growth/schema';

export type GrammarPageProps={searchParams:Promise<Record<string,string|string[]|undefined>>};
/** Catalog facts for a FREE grammar class, the only grammar pages that are
 *  search landing pages. PRO classes keep the neutral metadata below. */
export function freeGrammarClass(id:number){
  if(!isFreeLesson(id))return undefined;
  const entry=catalogLessons.find(l=>l.id===id&&l.category==='Gramática');
  return entry?.path?entry:undefined;
}
const clip=(text:string,max:number)=>text.length<=max?text:`${text.slice(0,max-1).replace(/[\s,;:.]+\S*$/,'')}…`;
export function grammarPageMetadata(id:number):Metadata{
  const lesson=getClassroomLesson(id)??getLiveLessonInfo(id);
  if(!lesson)return {};
  const free=freeGrammarClass(id);
  if(free){
    const lead=`Clase gratis de español ${free.level}, lista para proyectar, con teoría, audio y práctica: `;
    const subtitle=free.subtitle.charAt(0).toLowerCase()+free.subtitle.slice(1);
    return {title:`${lesson.title} · clase gratis ${free.level} | SPANISHCUE`,description:`${lead}${clip(subtitle,160-lead.length)}`};
  }
  return {title:`${lesson.title} · ${lesson.level} | SPANISHCUE`,description:`Clase guiada de 60 minutos: lectura, audio, explicación, conversación y escritura. ${lesson.title}.`};
}
/** LearningResource + BreadcrumbList for free classes: only facts the catalog states. */
function FreeClassSchema({id}:{id:number}){
  const free=freeGrammarClass(id);if(!free)return null;
  const url=`${SITE_ORIGIN}${free.path}`;
  const data=[{'@context':'https://schema.org','@type':'LearningResource',name:free.title,description:free.subtitle,url,inLanguage:'es',educationalLevel:`MCER ${free.level}`,learningResourceType:'Clase interactiva',isAccessibleForFree:true,teaches:free.goals.length?free.goals:undefined,timeRequired:'PT60M',audience:{'@type':'EducationalAudience',educationalRole:'teacher'},provider:{'@type':'Organization','@id':`${SITE_ORIGIN}/#organization`,name:SITE_NAME,url:SITE_ORIGIN}},
    {'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:SITE_NAME,item:`${SITE_ORIGIN}/`},{'@type':'ListItem',position:2,name:'Material ELE',item:`${SITE_ORIGIN}/material-ele`},{'@type':'ListItem',position:3,name:free.title,item:url}]}];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:serializeJsonLd(data)}}/>;
}
/** Interactive studio scenes kept inside the live class. Passed from the server so they stay out of the shared live-class chunk. */
const liveScenes:Record<number,Partial<Record<VisualKey,ReactNode>>>={40:{'noun-workbench':<NounScene/>},41:{'adjective-workbench':<AdjectiveScene/>},42:{'article-gallery':<ArticleScene/>}};
export default async function GrammarPage({id,reference=false,children}:{id:number;reference?:boolean;children?:ReactNode}){
  const lesson=getClassroomLesson(id);
  // Live-only classes (239 onwards) carry everything in their live lesson: no legacy classroom context.
  const live=await loadLiveLesson(id);if(!lesson){if(!live)notFound();return <><FreeClassSchema id={id}/><LiveClassroom lesson={live} course={coursePosition(id)}/></>;}
  if(reference&&children)return <><div className="gc-reference"><a href={lesson.originalPath}>← Volver a la clase guiada de 60 minutos</a><p>Banco de consulta anterior. Contiene actividades adicionales y extensiones fuera del recorrido de hoy.</p></div>{children}</>;
  return <><FreeClassSchema id={id}/>{live?<LiveClassroom lesson={live} scenes={liveScenes[id]} course={coursePosition(id)}/>:id===42?<ArticleClassroom lesson={lesson}/>:id===43?<Observatory lesson={lesson}/>:<Classroom key={id} lesson={lesson}/>}{children&&<details className="gc-reference"><summary>Material de consulta y ampliación</summary><p>El banco original conserva explicaciones y ejercicios adicionales. Su duración y alcance corresponden al material de referencia, fuera de esta clase de 60 minutos.</p><a href={`${lesson.originalPath}?reference=1`}>Abrir banco de referencia →</a></details>}</>;
}
