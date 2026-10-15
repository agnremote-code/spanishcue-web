export type Body = { x: number; z: number; radius?: number };
export type Voice = { id: string; kind: 'bump' | 'cry'; body: 'm' | 'f'; voice: string; text: string };
export const PERSON_RADIUS: number;
export function pushOut(x: number, z: number, people: Body[], free?: (x: number, z: number) => boolean, radius?: number): { x: number; z: number; hit: number };
export function createBumpClock(each?: number, gap?: number): (key: unknown, t: number) => boolean;
export function bumpLine(lines: Voice[], body: string | undefined, seed: number): Voice;
export function voiceSrc(id: string): string;
