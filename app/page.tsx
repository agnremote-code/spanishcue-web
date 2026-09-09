import { headers } from 'next/headers';
import { readOffer } from '../db/offer';
import Library from './Library';
import { lessons } from './lesson-catalog';
import { isFreeLesson, ownerFromHeaders } from './access-policy';
export const dynamic = 'force-dynamic';
export default async function Home({searchParams}: {searchParams:Promise<{vista?:string}>}) {
  const h=await headers();
  const owner=ownerFromHeaders(h);
  const preview=(await searchParams).vista==='profesor';
  const fullAccess=owner&&!preview;
  const catalog=lessons.filter(l=>fullAccess||!l.path?.startsWith('http')).map(l=>({id:l.id,title:l.title,subtitle:l.subtitle,level:l.level,levels:l.levels,displayLevel:l.displayLevel,category:l.category,duration:l.duration,tag:l.tag,image:l.image,path:l.path||(l.special?'/choose-conversation':`/clase/${l.id}`),free:isFreeLesson(l.id)}));
  return <Library lessons={catalog} owner={owner} fullAccess={fullAccess} offer={await readOffer()} />;
}
