import { headers } from 'next/headers';
import Library from './Library';
import { lessons } from './lesson-catalog';
import { fullAccessFromHeaders, isFreeLesson, localLessonPath, ownerFromHeaders, signedInFromHeaders } from './access-policy';
export const dynamic = 'force-dynamic';
export default async function Home({searchParams}: {searchParams:Promise<{vista?:string}>}) {
  const h=await headers();
  const owner=ownerFromHeaders(h);
  const signedIn=signedInFromHeaders(h);
  const preview=(await searchParams).vista==='profesor';
  const fullAccess=fullAccessFromHeaders(h)&&!preview;
  const catalog=lessons.filter(l=>fullAccess||!l.path?.startsWith('http')).map(l=>{
    // Only authorized, inline lessons need their teaching content in the browser.
    const inline=(fullAccess||isFreeLesson(l.id))&&!l.path&&!l.special;
    return {id:l.id,title:l.title,subtitle:l.subtitle,level:l.level,levels:l.levels,displayLevel:l.displayLevel,category:l.category,conversationMode:l.conversationMode,countryCollection:l.countryCollection,verbalSystem:l.verbalSystem,verbalMood:l.verbalMood,temporalPlane:l.temporalPlane,productiveStatus:l.productiveStatus,duration:l.duration,tag:l.tag,image:l.image,path:l.path,special:l.special,href:localLessonPath(l) || '/',free:isFreeLesson(l.id),curriculumOrder:l.curriculumOrder,curriculumSequence:l.curriculumSequence,routeOrder:l.routeOrder,routeSequence:l.routeSequence,
      goals:inline?l.goals:[],warmup:inline?l.warmup:'',explanation:inline?l.explanation:'',practice:inline?l.practice:[],speaking:inline?l.speaking:[],homework:inline?l.homework:''};
  });
  return <Library lessons={catalog} owner={owner} signedIn={signedIn} fullAccess={fullAccess} />;
}
