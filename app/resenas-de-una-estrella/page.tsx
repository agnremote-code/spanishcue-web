import { notFound } from 'next/navigation';
import ClassicConversation from '../conversacion-clasica/ClassicConversation';
import { loadClassicContent } from '../conversacion-clasica/content';

const meta = { slug: 'resenas-de-una-estrella', title: 'Reseñas de una estrella', kicker: 'Conversación', image: '/conversation-classics/resenas-de-una-estrella.webp', accent: '#f08c00' };

export default async function Page() {
  const content = await loadClassicContent(meta.slug);
  if (!content) notFound();
  return <ClassicConversation meta={meta} content={content} />;
}
