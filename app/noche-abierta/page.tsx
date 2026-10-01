import type { Metadata } from 'next';
import NocheAbierta from './NocheAbierta';

export const metadata: Metadata = {
  title: 'Noche abierta · Conversación B1 | SPANISHCUE',
  description: 'Un sábado a la noche en un barrio para explorar: diez lugares con juegos de conversación distintos, un imprevisto que cambia el plan y un relato final. Conversación B1 en Modo Play.',
};

export default function Page() { return <NocheAbierta />; }
