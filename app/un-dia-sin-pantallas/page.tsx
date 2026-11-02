import ClassicConversation from '../conversacion-clasica/ClassicConversation';
import { CONTENT } from './content/index.mjs';

const meta = { slug: 'un-dia-sin-pantallas', title: 'Un día sin pantallas', kicker: 'Conversación', image: '/conversation-classics/un-dia-sin-pantallas.webp', accent: '#0c8599' };

export default function Page() { return <ClassicConversation meta={meta} content={CONTENT} />; }
