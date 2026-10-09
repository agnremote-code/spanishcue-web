import type {Level,Location} from '../noche-abierta/engine.mjs';
export type DemoPayload = {level:Level;zone:'centro';locations:Location[]};
export function demoContent(level:unknown,district?:unknown):DemoPayload|null;
