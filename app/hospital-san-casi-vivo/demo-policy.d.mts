import type { SceneText } from './levels.d.mts';
import type { Patient } from './patients.d.mts';
export const DEMO_FREE_FLOORS: readonly number[];
export const DEMO_LOCKED_SCENES: readonly string[];
export const DEMO_HOSPITAL_PATH: string;
export function isFreeScene(id: string): boolean;
export function isFreePerson(id: string): boolean;
export type DemoHospital = { content: Record<string, Record<string, SceneText>>; patients: Record<string, Patient>; locked: string[] };
export function demoHospital(data: { content: Record<string, Record<string, SceneText>>; patients: Record<string, Patient> }): DemoHospital;
