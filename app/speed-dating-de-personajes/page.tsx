import { notFound } from 'next/navigation';
import ClassicConversation from '../conversacion-clasica/ClassicConversation';
import { loadClassicContent } from '../conversacion-clasica/content';

const meta = { slug: 'speed-dating-de-personajes', title: 'Speed dating de personajes', kicker: 'Conversación', image: '/conversation-classics/speed-dating-de-personajes.webp', accent: '#d6336c' };

export default async function Page() {
  const content = await loadClassicContent(meta.slug);
  if (!content) notFound();
  return <ClassicConversation meta={meta} content={content} />;
}
