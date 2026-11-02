import { notFound } from 'next/navigation';
import ClassicConversation from '../conversacion-clasica/ClassicConversation';
import { loadClassicContent } from '../conversacion-clasica/content';

const meta = { slug: 'el-restaurante-imposible', title: 'El restaurante imposible', kicker: 'Conversación', image: '/conversation-classics/el-restaurante-imposible.webp', accent: '#e8590c' };

export default async function Page() {
  const content = await loadClassicContent(meta.slug);
  if (!content) notFound();
  return <ClassicConversation meta={meta} content={content} />;
}
