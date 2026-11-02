import { notFound } from 'next/navigation';
import ClassicConversation from '../conversacion-clasica/ClassicConversation';
import { loadClassicContent } from '../conversacion-clasica/content';

const meta = { slug: 'el-billete-ganador', title: 'El billete ganador', kicker: 'Conversación', image: '/conversation-classics/el-billete-ganador.webp', accent: '#e0a100' };

export default async function Page() {
  const content = await loadClassicContent(meta.slug);
  if (!content) notFound();
  return <ClassicConversation meta={meta} content={content} />;
}
