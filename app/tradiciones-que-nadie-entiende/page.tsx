import ClassicConversation from '../conversacion-clasica/ClassicConversation';
import { CONTENT } from './content/index.mjs';

const meta = { slug: 'tradiciones-que-nadie-entiende', title: 'Tradiciones que nadie entiende', kicker: 'Conversación', image: '/conversation-classics/tradiciones-que-nadie-entiende.webp', accent: '#2b8a3e' };

export default function Page() { return <ClassicConversation meta={meta} content={CONTENT} />; }
