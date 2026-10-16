import type {Level,Location} from '../noche-abierta/engine.mjs';
export type DemoLocation = Location & {locked:boolean;premiumCount:number};
export type DemoPayload = {level:Level;zone:'centro';locations:DemoLocation[]};
export function demoContent(level:unknown,district?:unknown):DemoPayload|null;
