import { notFound } from 'next/navigation';
import ClassicConversation from '../conversacion-clasica/ClassicConversation';
import { loadClassicContent } from '../conversacion-clasica/content';

const meta = { slug: 'el-consultorio-sentimental', title: 'El consultorio sentimental de la radio', kicker: 'Conversación', image: '/conversation-classics/el-consultorio-sentimental.webp', accent: '#c2255c' };

export default async function Page() {
  const content = await loadClassicContent(meta.slug);
  if (!content) notFound();
  return <ClassicConversation meta={meta} content={content} />;
}
