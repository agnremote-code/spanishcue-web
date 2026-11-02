import ClassicConversation from '../conversacion-clasica/ClassicConversation';
import { CONTENT } from './content/index.mjs';

const meta = { slug: 'resenas-de-una-estrella', title: 'Reseñas de una estrella', kicker: 'Conversación', image: '/conversation-classics/resenas-de-una-estrella.webp', accent: '#f08c00' };

export default function Page() { return <ClassicConversation meta={meta} content={CONTENT} />; }
