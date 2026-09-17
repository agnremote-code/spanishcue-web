import { headers } from 'next/headers';
import { readOffer } from '../db/offer';
import Library from './Library';
import { lessons } from './lesson-catalog';
import { isFreeLesson, getUserSessionFromHeaders } from './access-policy';

export const dynamic = 'force-dynamic';

export default async function Home({searchParams}: {searchParams:Promise<{vista?:string}>}) {
  const h = await headers();
  const session = getUserSessionFromHeaders(h);
  const preview = (await searchParams).vista === 'profesor';
  const fullAccess = session.isPro && !preview;
  const catalog = lessons.filter(l => fullAccess || !l.path?.startsWith('http')).map(l => ({
    id: l.id,
    title: l.title,
    subtitle: l.subtitle,
    level: l.level,
    levels: l.levels,
    displayLevel: l.displayLevel,
    category: l.category,
    duration: l.duration,
    tag: l.tag,
    image: l.image,
    path: l.path || (l.special ? '/choose-conversation' : `/clase/${l.id}`),
    free: isFreeLesson(l.id)
  }));

  return <Library lessons={catalog} session={session} owner={session.isOwner} fullAccess={fullAccess} offer={await readOffer()} />;
}
