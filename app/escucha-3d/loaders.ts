// Each level is its own chunk: a game only downloads the listenings of the level in use.
import type { ListeningFile } from './types';

type Loader = () => Promise<{ default: unknown }>;
export const LOADERS: Record<string, Record<string, Loader>> = {
  noche: {
    A1: () => import('./content/noche/a1.json'),
    A2: () => import('./content/noche/a2.json'),
    B1: () => import('./content/noche/b1.json'),
    B2: () => import('./content/noche/b2.json'),
    C1: () => import('./content/noche/c1.json'),
    C2: () => import('./content/noche/c2.json'),
  },
  casino: {
    A1: () => import('./content/casino/a1.json'),
    A2: () => import('./content/casino/a2.json'),
    B1: () => import('./content/casino/b1.json'),
    B2: () => import('./content/casino/b2.json'),
    C1: () => import('./content/casino/c1.json'),
    C2: () => import('./content/casino/c2.json'),
  },
  bosque: {
    A1: () => import('./content/bosque/a1.json'),
    A2: () => import('./content/bosque/a2.json'),
    B1: () => import('./content/bosque/b1.json'),
    B2: () => import('./content/bosque/b2.json'),
    C1: () => import('./content/bosque/c1.json'),
    C2: () => import('./content/bosque/c2.json'),
  },
  reino: {
    A0: () => import('./content/reino/a0.json'),
    A1: () => import('./content/reino/a1.json'),
    A2: () => import('./content/reino/a2.json'),
    B1: () => import('./content/reino/b1.json'),
    B2: () => import('./content/reino/b2.json'),
    C1: () => import('./content/reino/c1.json'),
    C2: () => import('./content/reino/c2.json'),
  },
  hospital: {
    A0: () => import('./content/hospital/a0.json'),
    A1: () => import('./content/hospital/a1.json'),
    A2: () => import('./content/hospital/a2.json'),
    B1: () => import('./content/hospital/b1.json'),
    B2: () => import('./content/hospital/b2.json'),
    C1: () => import('./content/hospital/c1.json'),
    C2: () => import('./content/hospital/c2.json'),
  },
  usa: {
    A0: () => import('./content/usa/a0.json'),
    A1: () => import('./content/usa/a1.json'),
    A2: () => import('./content/usa/a2.json'),
    B1: () => import('./content/usa/b1.json'),
  },
  argentina: {
    A0: () => import('./content/argentina/a0.json'),
    A1: () => import('./content/argentina/a1.json'),
    A2: () => import('./content/argentina/a2.json'),
    B1: () => import('./content/argentina/b1.json'),
  },
  mexico: {
    A0: () => import('./content/mexico/a0.json'),
    A1: () => import('./content/mexico/a1.json'),
    A2: () => import('./content/mexico/a2.json'),
    B1: () => import('./content/mexico/b1.json'),
  },
  feria: {
    A2: () => import('./content/feria/a2.json'),
  },
};

export async function loadListenings(game: string, level: string): Promise<ListeningFile | null> {
  const load = LOADERS[game]?.[level];
  if (!load) return null;
  return (await load()).default as ListeningFile;
}
