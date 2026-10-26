// Each level is its own chunk: a game only downloads the listenings of the level in use.
import type { ListeningFile } from './types';

type Loader = () => Promise<{ default: unknown }>;
// The server build (import.meta.env.SSR) gets no listenings: they only load in the browser,
// and leaving them out keeps the Worker bundle inside its memory budget.
export const LOADERS: Record<string, Record<string, Loader>> = (import.meta as unknown as { env?: { SSR?: boolean } }).env?.SSR ? {} : {
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
  espana: {
    A0: () => import('./content/espana/a0.json'),
    A1: () => import('./content/espana/a1.json'),
    A2: () => import('./content/espana/a2.json'),
    B1: () => import('./content/espana/b1.json'),
  },
  suecia: {
    A0: () => import('./content/suecia/a0.json'),
    A1: () => import('./content/suecia/a1.json'),
    A2: () => import('./content/suecia/a2.json'),
    B1: () => import('./content/suecia/b1.json'),
  },
  uk: {
    A0: () => import('./content/uk/a0.json'),
    A1: () => import('./content/uk/a1.json'),
    A2: () => import('./content/uk/a2.json'),
    B1: () => import('./content/uk/b1.json'),
  },
  irlanda: {
    A0: () => import('./content/irlanda/a0.json'),
    A1: () => import('./content/irlanda/a1.json'),
    A2: () => import('./content/irlanda/a2.json'),
    B1: () => import('./content/irlanda/b1.json'),
  },
  australia: {
    A0: () => import('./content/australia/a0.json'),
    A1: () => import('./content/australia/a1.json'),
    A2: () => import('./content/australia/a2.json'),
    B1: () => import('./content/australia/b1.json'),
  },
  suiza: {
    A0: () => import('./content/suiza/a0.json'),
    A1: () => import('./content/suiza/a1.json'),
    A2: () => import('./content/suiza/a2.json'),
    B1: () => import('./content/suiza/b1.json'),
  },
  israel: {
    A0: () => import('./content/israel/a0.json'),
    A1: () => import('./content/israel/a1.json'),
    A2: () => import('./content/israel/a2.json'),
    B1: () => import('./content/israel/b1.json'),
  },
  indonesia: {
    A0: () => import('./content/indonesia/a0.json'),
    A1: () => import('./content/indonesia/a1.json'),
    A2: () => import('./content/indonesia/a2.json'),
    B1: () => import('./content/indonesia/b1.json'),
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
  ascensor: {
    B2: () => import('./content/ascensor/b2.json'),
  },
  madrid: {
    A0: () => import('./content/madrid/a0.json'),
    A1: () => import('./content/madrid/a1.json'),
    A2: () => import('./content/madrid/a2.json'),
    B1: () => import('./content/madrid/b1.json'),
    B2: () => import('./content/madrid/b2.json'),
    C1: () => import('./content/madrid/c1.json'),
    C2: () => import('./content/madrid/c2.json'),
  },
};

export async function loadListenings(game: string, level: string): Promise<ListeningFile | null> {
  const load = LOADERS[game]?.[level];
  if (!load) return null;
  return (await load()).default as ListeningFile;
}
