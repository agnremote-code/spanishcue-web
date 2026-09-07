import type { Metadata } from 'next';
import ConversationWorld from '../conversation-worlds/ConversationWorld';
export const metadata: Metadata = {title:'La máquina que elimina cosas del mundo · B1 | CHESPANISH',description:'30 decisiones, preguntas de conversación B1 y consecuencias inesperadas. Primero elegí Sí o No; después, descubrí el giro.'};
export default function Page(){return <ConversationWorld mode="machine"/>;}
