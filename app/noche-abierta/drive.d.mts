import type { Box, Bounds } from './world3d.mjs';

export type DriveSpec = { label: string; max: number; reverse: number; accel: number; brake: number; wheelbase: number; steer: number; radius: number; half: number; seat: 'car' | 'moto' };
export const SPECS: { sedan: DriveSpec; coupe: DriveSpec; taxi: DriveSpec; van: DriveSpec; moto: DriveSpec };
export type DrivableDef = { id: string; kind: keyof typeof SPECS; color: string; x: number; z: number; heading: number };
export const DRIVABLES: readonly DrivableDef[];
export const BOARD_RADIUS: number;
export const OWNER_SHOUT_AFTER: number;
export const POLICE_AFTER: number;
export type VehicleState = { x: number; z: number; heading: number; speed: number };
export function nearestDrivable<T extends { id: string; x: number; z: number }>(player: { x: number; z: number }, list?: readonly T[], taken?: string | null): T | null;
export function dismountSpot(state: VehicleState, spec: DriveSpec, free: (x: number, z: number) => boolean): { x: number; z: number };
export function bodyClear(x: number, z: number, heading: number, spec: DriveSpec, boxes: Box[], bounds?: Bounds): boolean;
export function stepVehicle(state: VehicleState, input: { x?: number; y?: number; brake?: boolean; boost?: boolean }, dt: number, spec: DriveSpec, boxes?: Box[], bounds?: Bounds): { x: number; z: number; heading: number; speed: number; hit: number; steer: number };
export function playerHeading(heading: number): number;
