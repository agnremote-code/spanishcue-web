import { notFound } from 'next/navigation';
import ClassicConversation from '../conversacion-clasica/ClassicConversation';
import { loadClassicContent } from '../conversacion-clasica/content';

const meta = { slug: 'un-dia-sin-pantallas', title: 'Un día sin pantallas', kicker: 'Conversación', image: '/conversation-classics/un-dia-sin-pantallas.webp', accent: '#0c8599' };

export default async function Page() {
  const content = await loadClassicContent(meta.slug);
  if (!content) notFound();
  return <ClassicConversation meta={meta} content={content} />;
}
