import type { Practice } from './data';
export type Product = 'bottles' | 'apples';

export function isCorrect(item: Practice, selection: number | undefined): boolean {
  return Number.isInteger(selection) && selection! >= 0 && selection! < item.options.length && selection === item.answer;
}
export function completeSentence(item: Practice, selection: number): string {
  const option = item.options[selection];
  if (option === undefined) return item.prompt;
  return item.prompt.includes('___') ? item.prompt.replace('___', option) : `${item.prompt} ${option}`;
}
export function adjustCount(count: number, change: number): number {
  return Math.max(0, Math.min(8, count + change));
}
export function quantityStatus(count: number, target: number) {
  return { kind: count === target ? 'exact' : count < target ? 'short' : 'excess', difference: Math.abs(count - target) } as const;
}
export function quantityPhrase(product: Product, count: number): string {
  const numeral = ['cero', 'una', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho'][count];
  const noun = product === 'bottles' ? 'botella' : 'manzana';
  return `${numeral} ${noun}${count === 1 ? '' : 's'}`;
}
