type Pair = { es: string; en: string };
export type Patient = { name: string; who: Pair; basic: Pair; basicAsk: Pair; mid: string; midAsk: string; high: string; highAsk: string };
export const PATIENTS: Record<string, Patient>;
