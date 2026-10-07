import type { Point } from './city.mjs';

export type EventKind = 'ladron' | 'persecucion' | 'pelea' | 'caido' | 'incendio' | 'helicoptero' | 'protesta' | 'choque' | 'borracho';
export type Band = 'A' | 'B' | 'C';
export type Stretch = { from: Point; to: Point; length: number; heading: number };
export type Burnable = { kind: 'car' | 'dumpster'; x: number; z: number; heading: number; color: string; car: string | null; d: number };
export type CrashSpot = { x: number; z: number; heading: number; axis: 'x' | 'z'; lane: number; side: 1 | -1; d: number };
export type PavementSpot = { x: number; z: number; heading: number; side: Point };

export const EVENT_KINDS: EventKind[];
export const EVENT_TIMING: { near: number; far: number; hide: number; maxActive: number; everyMin: number; everyMax: number; minLength: number; maxLength: number };
export const EVENT_FLAVOUR: Record<string, Record<EventKind, number>>;
export const EVENT_SHOUTS: Record<EventKind | 'policia', Record<Band, string[]>>;
export function bandOf(level: string): Band;
export function shoutLine(kind: EventKind | 'policia', level: string, time: number): string | null;
export function pickEventKind(district: string, active: string[], rand: () => number): EventKind | null;
export function sidewalkStretch(x: number, z: number, length: number, rand: () => number): Stretch | null;
export function squareSpot(x: number, z: number, rand: () => number): (Point & { district: string }) | null;
export function burnable(x: number, z: number, rand: () => number): Burnable | null;
export function crashSpot(x: number, z: number, rand: () => number): CrashSpot | null;
export function pavementSpot(x: number, z: number, rand: () => number): PavementSpot | null;
export function pointNear(player: Point, near: number, far: number, rand: () => number, free?: ((x: number, z: number) => boolean) | null, tries?: number): Point | null;
export function districtCentre(x: number, z: number): Point & { id: string };
export { pathLength, pointOnPath } from './city.mjs';
