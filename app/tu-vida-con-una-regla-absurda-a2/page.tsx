import type { Metadata } from 'next';
import ConversationWorld from '../conversation-worlds/ConversationWorld';
export const metadata: Metadata = {title:'Tu vida con una regla absurda · A2 | SPANISHCUE',description:'15 reglas divertidas y 45 preguntas A2 sobre tu vida diaria. Español rioplatense y ayuda opcional en inglés.'};
export default function Page(){return <ConversationWorld mode="rules" level="A2"/>;}
