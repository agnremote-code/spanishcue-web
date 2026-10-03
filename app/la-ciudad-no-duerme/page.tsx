import type { Metadata } from 'next';
import CityGame from './CityGame';

export const metadata: Metadata = {
  title: 'La ciudad no duerme · Conversación B1 | SPANISHCUE',
  description: 'Recorre un barrio, elige tu camino y habla de lo que pasa. Una clase de conversación B1 con diez lugares, decisiones y encuentros urbanos.',
};

export default function Page() { return <CityGame />; }
