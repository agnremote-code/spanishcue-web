import type { Metadata } from 'next';
import ConversationWorld from '../conversation-worlds/ConversationWorldFamily';
export const metadata: Metadata = {title:'La máquina que elimina cosas del mundo · B1 | SPANISHCUE',description:'30 decisiones, preguntas de conversación B1 y consecuencias inesperadas. Primero elige Sí o No; después, descubre el giro.'};
export default function Page(){return <ConversationWorld mode="machine"/>;}
