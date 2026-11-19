import type { Metadata } from 'next';
import Nivelacion from './Nivelacion';

export const metadata: Metadata = {
  title: 'Clase de nivelación · primera clase de prueba | SPANISHCUE',
  description: 'Una clase de prueba completa para profes de español: ficha del alumno, evaluación fonética con audio, países y nacionalidades, y un cierre con plan de clases.',
};

export default function Page() {
  return <Nivelacion />;
}
