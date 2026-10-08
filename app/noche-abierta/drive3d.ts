// Noche abierta · the cars and motorbikes parked along the kerb that the
// learner can take. One mesh per vehicle (the same models as the parked and
// moving cars), shown only when the player is within sight, plus one collider
// each so they are solid on foot and when another one is driven into them.

import * as THREE from 'three';
import { makeCar, placeVehicle, type Night } from './build3d';
import { makeMoto } from './events3d';
import { DRIVABLES, SPECS } from './drive.mjs';
import type { Box } from './world3d.mjs';

export type DriveKind = keyof typeof SPECS;
export type Drivable = {
  id: string;
  kind: DriveKind;
  group: THREE.Group;
  state: { x: number; z: number; heading: number; speed: number };
  box: Box;
  taken: boolean;
};

const SHOW_DISTANCE = 120;
const AWAY = 1e6;

export function createDrivables(scene: THREE.Scene, night: Night, options: { boxes: Box[] }) {
  const root = new THREE.Group();
  root.name = 'drivables';
  scene.add(root);
  const items: Drivable[] = [];
  const byId = new Map<string, Drivable>();

  const fit = (item: Drivable) => {
    const spec = SPECS[item.kind];
    const { x, z, heading } = item.state;
    const c = Math.abs(Math.cos(heading)), s = Math.abs(Math.sin(heading));
    const long = spec.half, wide = spec.seat === 'moto' ? 0.42 : 0.95;
    const hx = c * long + s * wide, hz = s * long + c * wide;
    Object.assign(item.box, { x0: x - hx, x1: x + hx, z0: z - hz, z1: z + hz });
  };

  for (const def of DRIVABLES) {
    const group = def.kind === 'moto' ? makeMoto(def.color) : (() => {
      const rig = makeCar(def.kind as Parameters<typeof makeCar>[0], def.color, night);
      // A taxi you take comes without its driver.
      rig.driver?.root.removeFromParent();
      return rig.group;
    })();
    group.name = def.id;
    placeVehicle(group, def.x, def.z, def.heading);
    root.add(group);
    const item: Drivable = {
      id: def.id, kind: def.kind as DriveKind, group,
      state: { x: def.x, z: def.z, heading: def.heading, speed: 0 },
      box: { x0: 0, x1: 0, z0: 0, z1: 0, vehicle: def.id, top: def.kind === 'moto' ? 1.1 : 1.5 },
      taken: false,
    };
    fit(item);
    options.boxes.push(item.box);
    items.push(item);
    byId.set(def.id, item);
  }

  return {
    root, items,
    get: (id: string) => byId.get(id) ?? null,
    // Driving it: it stops being a solid thing in the street (the learner's own
    // body check replaces it).
    take(item: Drivable) {
      item.taken = true;
      Object.assign(item.box, { x0: AWAY, x1: AWAY, z0: AWAY, z1: AWAY });
    },
    // Left where it stopped.
    leave(item: Drivable) {
      item.taken = false;
      item.state.speed = 0;
      placeVehicle(item.group, item.state.x, item.state.z, item.state.heading);
      fit(item);
    },
    place(item: Drivable) {
      placeVehicle(item.group, item.state.x, item.state.z, item.state.heading);
    },
    // Far ones are not drawn at all.
    update(player: { x: number; z: number }) {
      for (const item of items) {
        const near = item.taken || Math.hypot(item.state.x - player.x, item.state.z - player.z) < SHOW_DISTANCE;
        if (item.group.visible !== near) item.group.visible = near;
      }
    },
  };
}
