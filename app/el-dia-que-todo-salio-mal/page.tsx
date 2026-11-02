import { notFound } from 'next/navigation';
import ClassicConversation from '../conversacion-clasica/ClassicConversation';
import { loadClassicContent } from '../conversacion-clasica/content';

const meta = { slug: 'el-dia-que-todo-salio-mal', title: 'El día que todo salió mal', kicker: 'Conversación', image: '/conversation-classics/el-dia-que-todo-salio-mal.webp', accent: '#5f3dc4' };

export default async function Page() {
  const content = await loadClassicContent(meta.slug);
  if (!content) notFound();
  return <ClassicConversation meta={meta} content={content} />;
}
