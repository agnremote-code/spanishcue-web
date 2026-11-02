import ClassicConversation from '../conversacion-clasica/ClassicConversation';
import { CONTENT } from './content/index.mjs';

const meta = { slug: 'el-billete-ganador', title: 'El billete ganador', kicker: 'Conversación', image: '/conversation-classics/el-billete-ganador.webp', accent: '#e0a100' };

export default function Page() { return <ClassicConversation meta={meta} content={CONTENT} />; }
