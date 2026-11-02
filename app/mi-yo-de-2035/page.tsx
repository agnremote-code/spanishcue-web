import ClassicConversation from '../conversacion-clasica/ClassicConversation';
import { CONTENT } from './content/index.mjs';

const meta = { slug: 'mi-yo-de-2035', title: 'Mi yo de 2035', kicker: 'Conversación', image: '/conversation-classics/mi-yo-de-2035.webp', accent: '#1971c2' };

export default function Page() { return <ClassicConversation meta={meta} content={CONTENT} />; }
