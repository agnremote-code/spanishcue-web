// Server composition only: clients receive the single requested lesson as props.
import {lessons} from '../lesson-catalog';
import {grammarTopics} from './catalog';
import {adaptCore} from './adapters';
import {verbalParadigms} from '../verbal-system/paradigms';
import legacy from './content/legacy-contexts.json';
import additions from './content/new-lessons.json';
import type {ClassroomLesson,LessonContext,Level} from './types';

// JSON tuples/literal unions are checked by the classroom content suite.
const contexts={...legacy,...additions} as unknown as Record<string,LessonContext>;
export const classroomIds=Object.keys(contexts).map(Number);
export function getClassroomLesson(id:number):ClassroomLesson|undefined{
  const context=contexts[id];const catalog=lessons.find(x=>x.id===id&&x.category==='Gramática');
  if(!context||!catalog)return undefined;
  const path=catalog.path||`/clase/${id}`;
  const core=adaptCore(id,path,context);
  const outcome=catalog.title.split(': ').slice(1).join(': ');
  return {...context,...core,id,title:catalog.title,level:catalog.level as Level,
    topic:grammarTopics.find(t=>t.id===catalog.grammarTopic)!.label,
    objectives:[outcome.charAt(0).toUpperCase()+outcome.slice(1)+'.','Comprender mensajes sobre esta situación y responder con una intervención oral y un texto breve.'],
    audioSrc:`/audio/${[40,41].includes(id)?'grammar-free':'grammar-classroom'}/${id}.mp3`,originalPath:path,isNew:id>=227,
    paradigm:verbalParadigms[id]};
}
