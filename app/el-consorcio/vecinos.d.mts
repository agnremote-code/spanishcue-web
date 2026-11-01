type Pair = { es: string; en: string };
export type Vecino = { name: string; who: Pair; basic: Pair; basicAsk: Pair; mid: string; midAsk: string; high: string; highAsk: string };
export const VECINOS: Record<string, Vecino>;
