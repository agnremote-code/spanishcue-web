import { notFound } from 'next/navigation';
import ClassicConversation from '../conversacion-clasica/ClassicConversation';
import { loadClassicContent } from '../conversacion-clasica/content';

const meta = { slug: 'tradiciones-que-nadie-entiende', title: 'Tradiciones que nadie entiende', kicker: 'Conversación', image: '/conversation-classics/tradiciones-que-nadie-entiende.webp', accent: '#2b8a3e' };

export default async function Page() {
  const content = await loadClassicContent(meta.slug);
  if (!content) notFound();
  return <ClassicConversation meta={meta} content={content} />;
}
