import type { Metadata } from 'next';
import ReinoGame from './ReinoGame';

export const metadata: Metadata = {
  title: 'El reino de la rosa dormida · RPG de conversación A0–C2 | SpanishCue',
  description: 'Explora Valdoria en tercera persona, aprende magia y conversa en español para despertar un reino encantado. Una aventura 3D con siete niveles, misiones y progreso guardado.',
};

export default function Page() { return <ReinoGame />; }
