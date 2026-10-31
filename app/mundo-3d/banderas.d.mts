export const FLAG_RATIO: Record<string, number>;
export const FLAG_COLORS: Record<string, string[]>;
export function hasFlag(id: string): boolean;
export function drawFlag(ctx: CanvasRenderingContext2D, id: string, w: number, h: number): boolean;
