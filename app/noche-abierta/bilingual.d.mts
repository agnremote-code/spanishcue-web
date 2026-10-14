export const BI_BREAK: string;
export function bi(pair: string | { es: string; en: string }): string;
export function isBilingual(text: unknown): text is string;
export function esOf(text: unknown): string;
export function enOf(text: unknown): string;
