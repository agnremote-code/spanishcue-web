import ClassicConversation from '../conversacion-clasica/ClassicConversation';
import { CONTENT } from './content/index.mjs';

const meta = { slug: 'el-tribunal-de-las-cosas-pequenas', title: 'El tribunal de las cosas pequeñas', kicker: 'Conversación', image: '/conversation-classics/el-tribunal-de-las-cosas-pequenas.webp', accent: '#495057' };

export default function Page() { return <ClassicConversation meta={meta} content={CONTENT} />; }
