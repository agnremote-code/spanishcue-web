export const WORLD: Readonly<{ width: number; height: number; minX: number; maxX: number; floorY: number; speed: number }>;
export function clamp(value: number, min: number, max: number): number;
export function stepMotion(input: { x: number; direction: number; target: number | null }, seconds: number): { x: number; moving: boolean; facing: number; arrived: boolean };
export function cameraOffset(x: number, viewportWidth: number, scale: number): number;
export function canHandleKeys(target: EventTarget | null): boolean;
export function nearestStop<T extends { x: number }>(x: number, stops: readonly T[], radius?: number): T | null;
