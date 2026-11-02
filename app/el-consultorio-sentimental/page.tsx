import ClassicConversation from '../conversacion-clasica/ClassicConversation';
import { CONTENT } from './content/index.mjs';

const meta = { slug: 'el-consultorio-sentimental', title: 'El consultorio sentimental de la radio', kicker: 'Conversación', image: '/conversation-classics/el-consultorio-sentimental.webp', accent: '#c2255c' };

export default function Page() { return <ClassicConversation meta={meta} content={CONTENT} />; }
