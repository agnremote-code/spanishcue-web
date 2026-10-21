import type { Option, Text } from './levels.d.mts';
export type DemoScene = { title: Text; line: Text; dialogue: { who: string; line: Text }[]; ask: Text; options: Option[]; talk: Text[]; words: Text[] };
export type HospitalDemoPayload = { scene: string; name: string; role: string; scenes: Record<string, DemoScene> };
export const DEMO_SCENE: string;
export const DEMO_FENCE: { minX: number; maxX: number; minZ: number; maxZ: number };
export function hospitalDemoContent(): HospitalDemoPayload;
