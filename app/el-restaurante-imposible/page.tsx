import ClassicConversation from '../conversacion-clasica/ClassicConversation';
import { CONTENT } from './content/index.mjs';

const meta = { slug: 'el-restaurante-imposible', title: 'El restaurante imposible', kicker: 'Conversación', image: '/conversation-classics/el-restaurante-imposible.webp', accent: '#e8590c' };

export default function Page() { return <ClassicConversation meta={meta} content={CONTENT} />; }
