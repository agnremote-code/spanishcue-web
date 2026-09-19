import type { Metadata } from 'next';
import ConversationWorld from '../conversation-worlds/ConversationWorld';
export const metadata: Metadata = {title:'Tu vida con una regla absurda · B1 | SPANISHCUE',description:'15 leyes imposibles y 45 preguntas para imaginar, opinar y conversar en español rioplatense B1.'};
export default function Page(){return <ConversationWorld mode="rules"/>;}
