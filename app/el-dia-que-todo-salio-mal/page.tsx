import ClassicConversation from '../conversacion-clasica/ClassicConversation';
import { CONTENT } from './content/index.mjs';

const meta = { slug: 'el-dia-que-todo-salio-mal', title: 'El día que todo salió mal', kicker: 'Conversación', image: '/conversation-classics/el-dia-que-todo-salio-mal.webp', accent: '#5f3dc4' };

export default function Page() { return <ClassicConversation meta={meta} content={CONTENT} />; }
