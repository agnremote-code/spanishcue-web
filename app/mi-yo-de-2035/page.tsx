import { notFound } from 'next/navigation';
import ClassicConversation from '../conversacion-clasica/ClassicConversation';
import { loadClassicContent } from '../conversacion-clasica/content';

const meta = { slug: 'mi-yo-de-2035', title: 'Mi yo de 2035', kicker: 'Conversación', image: '/conversation-classics/mi-yo-de-2035.webp', accent: '#1971c2' };

export default async function Page() {
  const content = await loadClassicContent(meta.slug);
  if (!content) notFound();
  return <ClassicConversation meta={meta} content={content} />;
}
