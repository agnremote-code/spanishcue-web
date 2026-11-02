import { notFound } from 'next/navigation';
import ClassicConversation from '../conversacion-clasica/ClassicConversation';
import { loadClassicContent } from '../conversacion-clasica/content';

const meta = { slug: 'el-tribunal-de-las-cosas-pequenas', title: 'El tribunal de las cosas pequeñas', kicker: 'Conversación', image: '/conversation-classics/el-tribunal-de-las-cosas-pequenas.webp', accent: '#495057' };

export default async function Page() {
  const content = await loadClassicContent(meta.slug);
  if (!content) notFound();
  return <ClassicConversation meta={meta} content={content} />;
}
