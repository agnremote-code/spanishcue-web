export const DEMO_LEVELS: readonly string[];
export const DEMO_BOUNDS: {minX:number;maxX:number;minZ:number;maxZ:number};
export type DemoGate = {id:string;name:string;x:number;z:number};
export const DEMO_GATES: DemoGate[];
export const PRO_DISTRICTS: string[];
export const EXPERIMENT_ID: string;
export function nearPremiumGate(position:{x:number;z:number},busy:boolean):DemoGate|null;
export function experimentDestination(url:URL,variant:string):string;
