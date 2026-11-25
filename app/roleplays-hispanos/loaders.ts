import type { CountryContent } from './types';

// The roleplays of every country load only in the browser: the server build
// (import.meta.env.SSR) gets no content, which keeps the twenty countries out
// of the Worker bundle (tests/worker-startup).
type Loader = () => Promise<{ default: CountryContent }>;
const SSR = Boolean((import.meta as unknown as { env?: { SSR?: boolean } }).env?.SSR);

export const LOADERS: Record<string, Loader> = SSR ? {} : {
  mexico: () => import('./contenido/mexico'),
  guatemala: () => import('./contenido/guatemala'),
  honduras: () => import('./contenido/honduras'),
  'el-salvador': () => import('./contenido/el-salvador'),
  nicaragua: () => import('./contenido/nicaragua'),
  'costa-rica': () => import('./contenido/costa-rica'),
  panama: () => import('./contenido/panama'),
  cuba: () => import('./contenido/cuba'),
  'republica-dominicana': () => import('./contenido/republica-dominicana'),
  'puerto-rico': () => import('./contenido/puerto-rico'),
  colombia: () => import('./contenido/colombia'),
  venezuela: () => import('./contenido/venezuela'),
  ecuador: () => import('./contenido/ecuador'),
  peru: () => import('./contenido/peru'),
  bolivia: () => import('./contenido/bolivia'),
  chile: () => import('./contenido/chile'),
  paraguay: () => import('./contenido/paraguay'),
  uruguay: () => import('./contenido/uruguay'),
  espana: () => import('./contenido/espana'),
  'guinea-ecuatorial': () => import('./contenido/guinea-ecuatorial'),
};
