import type { Metadata } from 'next';
import NocheAbierta from './NocheAbierta';

export const metadata: Metadata = {
  title: 'Noche abierta · Conversación A1–C2 | SPANISHCUE',
  description: 'Un videojuego en 3D: un sábado a la noche en un barrio con diez lugares y un juego de conversación distinto en cada uno. Un solo mundo con seis niveles, de A1 a C2, en Modo Play.',
};

export default function Page() { return <NocheAbierta />; }
