type Pair = { es: string; en: string };
export type Invitado = { name: string; who: Pair; basic: Pair; basicAsk: Pair; mid: string; midAsk: string; high: string; highAsk: string };
export const INVITADOS: Record<string, Invitado>;
