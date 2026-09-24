import type { Metadata } from 'next';
import ConversationWorld from '../conversation-worlds/ConversationWorldFamily';
export const metadata: Metadata = {title:'La máquina que elimina cosas del mundo · A2 | SPANISHCUE',description:'30 decisiones cotidianas, preguntas A2 y sorpresas. Elegí Sí o No, conversá y descubrí qué pasa después.'};
export default function Page(){return <ConversationWorld mode="machine" level="A2"/>;}
