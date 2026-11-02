import ClassicConversation from '../conversacion-clasica/ClassicConversation';
import { CONTENT } from './content/index.mjs';

const meta = { slug: 'speed-dating-de-personajes', title: 'Speed dating de personajes', kicker: 'Conversación', image: '/conversation-classics/speed-dating-de-personajes.webp', accent: '#d6336c' };

export default function Page() { return <ClassicConversation meta={meta} content={CONTENT} />; }
