// Noche Abierta · the life of the city beyond the ten places: the people of
// the street scenes and their white circles, everyone walking, talking,
// sitting on benches and leaning out of balconies, the cats and dogs, the
// traffic on the new streets and the ambulance or police car a scene calls.
//
// Data and rules live in city.mjs and street.mjs; this file only draws them
// and keeps them moving. People far away are a single baked mesh each (one
// draw call); only the nearest ones get a full animated body, so the city can
// be crowded without costing a draw call per arm.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import {
  AMBULANCE_EVERY, AMBULANCE_ROUTE, ANIMALS, BALCONY_PEOPLE, CITY_PARKED, CITY_TRAFFIC, GROUPS, PLACEMENTS, ROOM_DOORS, SITTERS, STREET_ROOMS,
  castSpots, districtAt, emergencyRoute, groupMembers, makeWalkers, pathLength, placementOf, pointOnPath, stepCityTraffic, stepWalkers, trafficCar,
  type MovingVehicle, type Walker,
} from './city.mjs';
import { ENCOUNTERS, heartsUsed, isAvailable, moodOf, type CastMember, type Change, type Encounter, type ItemId, type Mood, type OpeningFx, type StreetState } from './street.mjs';
import { TRAFFIC, insideBuilding, type Box } from './world3d.mjs';
import { addBlobShadow, animatePerson, createPerson, lookFromCast, randomLook, setMood, setPose, type Person } from './people3d';
import { animateAnimal, createAnimal, type Animal } from './animals3d';
import { makeCar, placeVehicle, type Night } from './build3d';
import { createHeartBurst } from './items3d';
import { balconyHeight } from './district3d';
import { makeMoto } from './events3d';

export type StreetSpot = {
  id: string; x: number; z: number; radius: number; key: 'E'; verb: string; name: string;
  encounter?: string; door?: string; exit?: boolean; kind?: 'escena' | 'rincon';
};
type Ctx = {
  clock: number; player: { x: number; z: number; y: number }; street: StreetState; eventId: string | null;
  open: string | null; walking: boolean; reduced: boolean; room: string | null; level: string;
  // Things that stop the traffic besides people (the taxi you ride).
  blockers?: { x: number; z: number }[];
};

// The ones you only notice up close stay hidden from afar.
const NEAR_RIG = 20;
const FAR_SHOW = 65;
const RING_SHOW = { escena: 60, rincon: 22 };
const GONE: Change[] = ['corre', 'se-va', 'huye'];

const radians = (a: number) => Math.atan2(Math.sin(a), Math.cos(a));
const faceTo = (from: { x: number; z: number }, to: { x: number; z: number }) => Math.atan2(to.x - from.x, to.z - from.z);
const castSizes: Record<string, number> = Object.fromEntries(ENCOUNTERS.map(item => [item.id, item.cast.length]));
export const CAST_SIZES = castSizes;

// One baked mesh for a person seen from afar: every part of the full body,
// in its current pose, merged with its colours into a single geometry.
function bake(person: Person): THREE.Mesh {
  person.root.updateMatrixWorld(true);
  const inverse = new THREE.Matrix4().copy(person.root.matrixWorld).invert();
  const parts: THREE.BufferGeometry[] = [];
  const color = new THREE.Color();
  person.root.traverse(object => {
    const mesh = object as THREE.Mesh;
    if (!mesh.isMesh || !mesh.visible) return;
    const material = (Array.isArray(mesh.material) ? mesh.material[0] : mesh.material) as THREE.MeshStandardMaterial;
    if (!material || material.transparent) return;
    const geometry = mesh.geometry.index ? mesh.geometry.toNonIndexed() : mesh.geometry.clone();
    for (const name of Object.keys(geometry.attributes)) if (name !== 'position' && name !== 'normal') geometry.deleteAttribute(name);
    if (!geometry.attributes.normal) geometry.computeVertexNormals();
    geometry.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inverse, mesh.matrixWorld));
    color.copy(material.color ?? color.set('#888888'));
    const count = geometry.attributes.position.count;
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) colors.set([color.r, color.g, color.b], i * 3);
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    parts.push(geometry);
  });
  const merged = parts.length ? mergeGeometries(parts, false) : new THREE.BufferGeometry();
  for (const part of parts) part.dispose();
  const mesh = new THREE.Mesh(merged ?? new THREE.BufferGeometry(), bakedMaterial());
  mesh.castShadow = false;
  mesh.matrixAutoUpdate = true;
  return mesh;
}
let baked: THREE.MeshStandardMaterial | null = null;
const bakedMaterial = () => (baked ??= new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85 }));

// A vehicle (or several) drawn with one mesh per material instead of one per
// part: same look, a fraction of the draw calls. Sprites are left out.
function compactByMaterial(source: THREE.Object3D): THREE.Group {
  source.updateMatrixWorld(true);
  const inverse = new THREE.Matrix4().copy(source.matrixWorld).invert();
  const byMaterial = new Map<THREE.Material, THREE.BufferGeometry[]>();
  let shadow = false;
  source.traverse(object => {
    const mesh = object as THREE.Mesh;
    if (!mesh.isMesh || Array.isArray(mesh.material)) return;
    const geometry = mesh.geometry.index ? mesh.geometry.toNonIndexed() : mesh.geometry.clone();
    for (const name of Object.keys(geometry.attributes)) if (!['position', 'normal', 'uv'].includes(name)) geometry.deleteAttribute(name);
    if (!geometry.attributes.uv) geometry.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(geometry.attributes.position.count * 2), 2));
    geometry.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inverse, mesh.matrixWorld));
    const list = byMaterial.get(mesh.material) ?? [];
    list.push(geometry);
    byMaterial.set(mesh.material, list);
    shadow ||= mesh.castShadow;
  });
  const out = new THREE.Group();
  for (const [material, parts] of byMaterial) {
    const merged = mergeGeometries(parts, false);
    for (const part of parts) part.dispose();
    if (!merged) continue;
    const mesh = new THREE.Mesh(merged, material);
    mesh.castShadow = shadow && !(material as THREE.MeshStandardMaterial).transparent;
    out.add(mesh);
  }
  return out;
}

// Someone in the city: a full rig when close, a baked silhouette when far.
type Body = {
  key: string; look: ReturnType<typeof lookFromCast>; pose: string; group: THREE.Group;
  rig: Person | null; far: THREE.Mesh | null; x: number; z: number; y: number; heading: number;
  mood: Mood; moodUntil: number; speed: number; seated: boolean; attention: number; blob: boolean; hidden: boolean;
  react?: { mood: Mood; until: number; flee: boolean };
  // A pose that wins over the usual one for a while (hands up, a kiss…).
  override?: { pose: string; until: number };
  // Where the person belongs, to come back after stepping away.
  home?: { x: number; z: number; heading: number };
};
function makeBody(key: string, look: ReturnType<typeof lookFromCast>, pose: string, at: { x: number; z: number; y?: number; heading: number }, seed: number): Body {
  const group = new THREE.Group();
  return {
    key, look, pose, group, rig: null, far: null, x: at.x, z: at.z, y: at.y ?? 0, heading: at.heading, mood: 'neutral', moodUntil: 0, speed: 0, hidden: false,
    seated: ['sit', 'swing', 'sleep', 'ground'].includes(pose), attention: (seed % 10) / 10, blob: (at.y ?? 0) < 0.5,
  };
}

type EncounterRig = {
  encounter: Encounter; spots: { x: number; z: number; y: number; face: number }[]; bodies: Body[]; animals: Animal[];
  ring: THREE.Mesh; beacon: THREE.Mesh | null; extra: THREE.Group; walk: { t: number; dir: number } | null;
  leaving: { t: number; dir: { x: number; z: number } } | null; lantern: THREE.Object3D | null;
  // The short choreography the object set off when the scene opened.
  fx: { kind: OpeningFx | Change; t: number; rival: Body | null; runners: Body[]; done: boolean } | null;
};
// What the street can ask the rest of the world for.
type Hooks = { fly?: (x: number, z: number) => void; police?: (x: number, z: number) => void };

export function createStreetCrowd(scene: THREE.Scene, night: Night, options: { low: boolean; boxes: Box[] }) {
  const root = new THREE.Group();
  root.name = 'street-life';
  scene.add(root);
  const maxRigs = options.low ? 5 : 8;
  const shadows = false;

  // ---------------------------------------------------------- materials
  const ringGeometry = new THREE.RingGeometry(0.56, 0.74, 40);
  const ringMaterials = {
    escena: new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.6, depthWrite: false, blending: THREE.AdditiveBlending }),
    rincon: new THREE.MeshBasicMaterial({ color: '#f4f1ff', transparent: true, opacity: 0.4, depthWrite: false, blending: THREE.AdditiveBlending }),
    door: new THREE.MeshBasicMaterial({ color: '#ffe2a8', transparent: true, opacity: 0.45, depthWrite: false, blending: THREE.AdditiveBlending }),
  };
  // A soft column of light above a scene, so you can spot it from afar.
  const beamTexture = (() => {
    const canvas = document.createElement('canvas');
    canvas.width = 4; canvas.height = 128;
    const ctx = canvas.getContext('2d')!;
    const g = ctx.createLinearGradient(0, 0, 0, 128);
    g.addColorStop(0, 'rgba(255,255,255,0)');
    g.addColorStop(0.7, 'rgba(255,255,255,.35)');
    g.addColorStop(1, 'rgba(255,255,255,.75)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 4, 128);
    return new THREE.CanvasTexture(canvas);
  })();
  const beamMaterial = new THREE.MeshBasicMaterial({ map: beamTexture, transparent: true, opacity: 0.35, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false });
  const beamGeometry = new THREE.CylinderGeometry(0.42, 0.62, 7, 12, 1, true);
  beamGeometry.translate(0, 3.5, 0);
  const lanternMaterial = new THREE.MeshStandardMaterial({ color: '#ffd9a0', emissive: '#ffb860', emissiveIntensity: 2.4 });
  night.lamps.push(lanternMaterial);

  // ---------------------------------------------------------- bodies
  const bodies: Body[] = [];
  const ensureRig = (body: Body) => {
    if (body.rig) return body.rig;
    const person = createPerson(body.look, shadows);
    if (body.blob) addBlobShadow(person, body.seated ? 1.2 : 1);
    setPose(person, body.pose);
    setMood(person, body.mood);
    person.attention = body.attention;
    body.rig = person;
    body.group.add(person.root);
    return person;
  };
  const ensureFar = (body: Body) => {
    if (body.far) return body.far;
    const person = ensureRig(body);
    animatePerson(person, 0.016, 0, false);
    const saved = person.root.position.clone();
    const savedRotation = person.root.rotation.y;
    person.root.position.set(0, 0, 0);
    person.root.rotation.y = 0;
    body.far = bake(person);
    person.root.position.copy(saved);
    person.root.rotation.y = savedRotation;
    body.group.add(body.far);
    return body.far;
  };
  const placeBody = (body: Body) => {
    body.group.position.set(body.x, body.y, body.z);
    body.group.rotation.y = body.heading;
    if (body.rig) { body.rig.root.position.set(0, 0, 0); body.rig.root.rotation.y = 0; }
  };
  const addBody = (body: Body) => { bodies.push(body); root.add(body.group); placeBody(body); return body; };

  // ---------------------------------------------------------- scenes
  const encounterRigs = new Map<string, EncounterRig>();
  const buildEncounter = (encounter: Encounter) => {
    const place = placementOf(encounter.id);
    if (!place) return null;
    const humans = encounter.cast.filter(member => member.kind !== 'animal');
    const spots = castSpots(encounter.id, Math.max(1, encounter.cast.length)).map(spot => ({ x: spot.x, z: spot.z, y: spot.y ?? place.y, face: spot.face }));
    const group = new THREE.Group();
    root.add(group);
    const rig: EncounterRig = { encounter, spots, bodies: [], animals: [], ring: new THREE.Mesh(ringGeometry, encounter.kind === 'escena' ? ringMaterials.escena : ringMaterials.rincon), beacon: null, extra: group, walk: place.walk ? { t: 0, dir: 1 } : null, leaving: null, lantern: null, fx: null };
    if (!place.nobody) encounter.cast.forEach((member: CastMember, i: number) => {
      const spot = spots[i] ?? spots[0];
      if (member.kind === 'animal') {
        const animal = createAnimal(member.species === 'cat' ? 'cat' : member.species === 'pigeons' ? 'pigeons' : 'dog', member.color ?? '#7a5230', member.size ?? 'small');
        animal.root.position.set(spot.x + 0.4, spot.y, spot.z + 0.5);
        animal.root.rotation.y = spot.face;
        group.add(animal.root);
        rig.animals.push(animal);
        return;
      }
      const seed = hash(`${encounter.id}-${member.id}`);
      const body = addBody(makeBody(`${encounter.id}/${member.id}`, lookFromCast({ ...member, seed }), member.pose, { x: spot.x, z: spot.z, y: spot.y, heading: spot.face }, seed));
      body.attention = 1;
      rig.bodies.push(body);
    });
    if (humans.length && place.behindDoor) rig.bodies.forEach(body => { body.heading = place.face; });
    rig.ring.rotation.x = -Math.PI / 2;
    rig.ring.renderOrder = 2;
    root.add(rig.ring);
    if (encounter.kind === 'escena') {
      rig.beacon = new THREE.Mesh(beamGeometry, beamMaterial);
      root.add(rig.beacon);
    }
    encounterRigs.set(encounter.id, rig);
    return rig;
  };

  // ---------------------------------------------------------- ambient people
  let walkers: Walker[] = makeWalkers();
  const walkerBodies = new Map<string, Body | Animal>();
  for (const walker of walkers) {
    if (walker.animal) {
      const data = ANIMALS.find(item => item.id === walker.id)!;
      const animal = createAnimal(data.species, data.color, data.size ?? 'medium');
      root.add(animal.root);
      walkerBodies.set(walker.id, animal);
      continue;
    }
    const district = districtAt(walker.x, walker.z);
    walkerBodies.set(walker.id, addBody(makeBody(walker.id, randomLook(walker.seed, district), 'walk', { x: walker.x, z: walker.z, heading: walker.heading }, walker.seed)));
  }
  for (const group of GROUPS) groupMembers(group).forEach((member, i) => {
    const seed = hash(`${group.id}-${i}`);
    const look = randomLook(seed, group.district);
    if (group.uniform) look.topColor = group.uniform;
    const pose = group.seated ? 'sit' : group.line ? (i % 2 ? 'phone' : 'stand') : i % 3 === 1 ? 'arms' : 'stand';
    addBody(makeBody(`${group.id}-${i}`, look, pose, { x: member.x, z: member.z, heading: member.face }, seed)).attention = 0.3;
  });
  for (const sitter of SITTERS) {
    const seed = hash(sitter.id);
    addBody(makeBody(sitter.id, randomLook(seed, districtAt(sitter.x, sitter.z)), sitter.tired ? 'sleep' : 'sit', { x: sitter.x, z: sitter.z, heading: sitter.face }, seed));
  }
  for (const person of BALCONY_PEOPLE) {
    const seed = hash(person.id);
    const body = makeBody(person.id, randomLook(seed, districtAt(person.x, person.z)), 'balcony', { x: person.x, z: person.z, y: balconyHeight(person.x, person.z, person.floor), heading: person.face }, seed);
    body.blob = false;
    addBody(body);
  }
  const staticAnimals: Animal[] = ANIMALS.filter(item => !item.route).map(item => {
    const animal = createAnimal(item.species, item.color, item.size ?? 'small');
    animal.root.position.set(item.x!, item.y ?? 0, item.z!);
    animal.root.rotation.y = item.face ?? 0;
    root.add(animal.root);
    return animal;
  });

  // Everyone standing still: obstacles for the people walking.
  const standing = bodies.filter(body => body.pose !== 'walk' && body.y < 0.5).map(body => ({ x: body.x, z: body.z }));

  // ---------------------------------------------------------- traffic
  type Rig = ReturnType<typeof makeCar> | { group: THREE.Group; bike: true; rider: Person; far: THREE.Mesh };
  // The avenue's own cars join the new streets' traffic, so they all wait for each other at crossings.
  let cars: MovingVehicle[] = [
    ...TRAFFIC.map(car => ({ id: car.id, axis: 'x' as const, lane: car.lane, dir: car.dir, x: car.start, z: car.lane, speed: car.speed, cruise: car.speed, kind: car.kind, color: car.color })),
    ...CITY_TRAFFIC.map(entry => trafficCar(entry)),
  ];
  const carRigs = new Map<string, Rig>();
  const movingBoxes: Box[] = [];
  for (const car of cars) {
    if (car.kind === 'bike' || car.kind === 'moto') {
      // A motorbike is a bicycle to the traffic: same lane logic, its own look (events3d).
      const moto = car.kind === 'moto';
      const group = moto ? makeMoto(car.color ?? '#b8252a') : makeBike(car.color ?? '#2b6a8a');
      const rider = createPerson(randomLook(hash(car.id), moto ? 'galpones' : 'centro'), false);
      setPose(rider, 'bike');
      rider.root.position.set(0, moto ? 0.06 : 0, -0.1);
      animatePerson(rider, 0.6, 0, false);
      // From afar the rider is one baked mesh; the full body only up close.
      const far = bake(rider);
      far.position.copy(rider.root.position);
      group.add(rider.root, far);
      root.add(group);
      carRigs.set(car.id, { group, bike: true, rider, far });
      continue;
    }
    const full = makeCar((car.kind === 'taxi' ? 'taxi' : car.kind) as Parameters<typeof makeCar>[0], car.color, night);
    const rig = { ...full, group: compactByMaterial(full.group) };
    root.add(rig.group);
    carRigs.set(car.id, rig);
    const box = { x0: 0, x1: 0, z0: 0, z1: 0, vehicle: car.id, top: 1.6 };
    movingBoxes.push(box);
  }
  // The parked cars never move: all of them in one handful of meshes.
  const parkedAll = new THREE.Group();
  for (const parked of CITY_PARKED) {
    const rig = makeCar(parked.kind as Parameters<typeof makeCar>[0], parked.color, night);
    placeVehicle(rig.group, parked.x, parked.z, parked.heading);
    parkedAll.add(rig.group);
  }
  root.add(compactByMaterial(parkedAll));
  // The car of the woman locked out in the Barrio Viejo, hazards on.
  const lockedOut = PLACEMENTS['viejo-auto']?.car;
  let lockedRig: ReturnType<typeof makeCar> | null = null;
  if (lockedOut) {
    lockedRig = makeCar('broken', '#4a5d6e', night);
    placeVehicle(lockedRig.group, lockedOut.x, lockedOut.z, lockedOut.heading);
    root.add(lockedRig.group);
  }

  // The ambulance now and then, and the ambulance or the police a scene calls.
  const emergency = {
    ambulance: makeEmergency('ambulance', night),
    police: makeEmergency('police', night),
  };
  root.add(emergency.ambulance.group, emergency.police.group);
  type Run = { kind: 'ambulance' | 'police'; points: [number, number][]; s: number; length: number; stopAt: number; wait: number; speed: number; scene?: string };
  let run: Run | null = null;
  const queue: Run[] = [];
  let nextAmbulance = AMBULANCE_EVERY * 0.4;
  const runFrom = (kind: Run['kind'], points: [number, number][], stopAt: number, scene?: string): Run => {
    let s = 0;
    for (let i = 1; i <= stopAt; i++) s += Math.hypot(points[i][0] - points[i - 1][0], points[i][1] - points[i - 1][1]);
    return { kind, points, s: 0, length: pathLength(points), stopAt: stopAt ? s : -1, wait: stopAt ? 14 : 0, speed: 0, scene };
  };
  const emergencyBox: Box = { x0: 0, x1: 0, z0: 0, z1: 0, vehicle: 'emergencia', top: 2.2 };
  movingBoxes.push(emergencyBox);

  // ---------------------------------------------------------- doors
  const doorRings = ROOM_DOORS.map(door => {
    const ring = new THREE.Mesh(ringGeometry, ringMaterials.door);
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(door.x, 0.05, door.z);
    root.add(ring);
    return { door, ring };
  });

  const hearts = createHeartBurst();
  scene.add(hearts.group);
  let heartsSeen = 0;
  let openSeen: string | null = null;
  const closedSeen = new Set<string>();
  const hooks: Hooks = {};

  // Extras for the choreographies: someone who pulls a knife too, and a few
  // people who run when a grenade comes out. Hidden until needed.
  const HIDDEN = { x: 9999, z: 9999 };
  const rival = addBody(makeBody('fx/rival', randomLook(hash('rival'), 'galpones'), 'knife', { ...HIDDEN, heading: 0 }, 7));
  rival.hidden = true;
  const runners = Array.from({ length: 5 }, (_, i) => {
    const body = addBody(makeBody(`fx/runner-${i}`, randomLook(hash(`runner-${i}`), 'centro'), 'run', { ...HIDDEN, heading: 0 }, 11 + i));
    body.hidden = true;
    return body;
  });
  const park = (body: Body) => { body.hidden = true; body.x = HIDDEN.x; body.z = HIDDEN.z; body.override = undefined; body.speed = 0; };
  const stepTo = (body: Body, x: number, z: number, speed: number, dt: number) => {
    const dx = x - body.x, dz = z - body.z;
    const d = Math.hypot(dx, dz);
    if (d < 0.05) { body.speed = 0; return true; }
    const step = Math.min(d, speed * dt);
    const nx = body.x + (dx / d) * step, nz = body.z + (dz / d) * step;
    if (!blockedAt(nx, nz) || d < 1) { body.x = nx; body.z = nz; }
    body.heading = Math.atan2(dx, dz);
    body.speed = speed;
    return d - step < 0.05;
  };
  const scatter = (around: { x: number; z: number }, count: number, time: number) => {
    const free = runners.filter(body => body.hidden).slice(0, count);
    free.forEach((body, i) => {
      const a = (i / Math.max(1, free.length)) * Math.PI * 2 + 0.7;
      let x = around.x + Math.sin(a) * 2.6, z = around.z + Math.cos(a) * 2.6;
      if (blockedAt(x, z)) { x = around.x; z = around.z; }
      body.hidden = false; body.x = x; body.z = z; body.heading = a; body.pose = 'run'; body.speed = 4.4;
      body.react = { mood: 'terror', until: time + 9, flee: true };
      body.override = { pose: 'run', until: time + 9 };
    });
    return free;
  };

  // The object came out and the scene opens on it: the person reacts in the
  // body, not only in words.
  function playFx(id: string, kind: OpeningFx | Change, player: { x: number; z: number }, time: number) {
    const rig = encounterRigs.get(id);
    if (!rig || !rig.bodies.length) return;
    const lead = rig.bodies[0];
    for (const body of rig.bodies) body.home ??= { x: body.x, z: body.z, heading: body.heading };
    rig.fx = { kind, t: 0, rival: null, runners: [], done: false };
    const hold = (body: Body, pose: string, seconds: number) => { body.override = { pose, until: time + seconds }; };
    const anchor = placementOf(id)!;
    switch (kind) {
      case 'manos-arriba': for (const body of rig.bodies) if (!body.seated) hold(body, 'hands-up', 40); break;
      case 'grita': hold(lead, 'scream', 6); for (const body of rig.bodies.slice(1)) hold(body, 'hands-up', 10); break;
      case 'huye': rig.fx.runners = scatter(lead, 3, time); hold(lead, 'scream', 5); break;
      case 'evacuacion': rig.fx.runners = scatter(lead, 5, time); for (const body of rig.bodies) if (!body.seated) hold(body, 'hands-up', 12); hooks.police?.(anchor.x, anchor.z); break;
      case 'helicoptero': rig.fx.runners = scatter(lead, 4, time); hooks.fly?.(anchor.x, anchor.z); break;
      case 'policia': hooks.police?.(anchor.x, anchor.z); for (const body of rig.bodies) if (!body.seated) hold(body, 'hands-up', 14); break;
      case 'duelo-cuchillo': {
        const side = { x: Math.cos(faceTo(player, lead)), z: -Math.sin(faceTo(player, lead)) };
        let x = lead.x + side.x * 2.2, z = lead.z + side.z * 2.2;
        if (blockedAt(x, z)) { x = lead.x - side.x * 2.2; z = lead.z - side.z * 2.2; }
        if (blockedAt(x, z)) { x = lead.x; z = lead.z + 0.9; }
        rival.hidden = false; rival.x = x; rival.z = z; rival.heading = faceTo(rival, player); rival.pose = 'knife';
        rival.react = { mood: 'furious', until: time + 12, flee: false };
        hold(rival, 'knife', 9);
        hold(lead, 'scream', 4);
        rig.fx.rival = rival;
        break;
      }
      case 'defensa': for (const body of rig.bodies) if (!body.seated) hold(body, 'arms', 20); break;
      case 'beso': case 'abrazo': case 'corazon': case 'calma': hearts.play(new THREE.Vector3(lead.x, lead.y, lead.z)); break;
      case 'cae': lead.pose = 'fallen'; lead.seated = true; break;
      case 'pelea': for (const body of rig.bodies.slice(0, 2)) if (!body.seated) hold(body, 'fight', 7); break;
      default: break;
    }
  }

  // One step of a running choreography.
  function stepFx(rig: EncounterRig, player: { x: number; z: number }, time: number, dt: number) {
    const fx = rig.fx;
    if (!fx || fx.done) return;
    fx.t += dt;
    const lead = rig.bodies[0];
    const home = lead.home ?? { x: lead.x, z: lead.z, heading: lead.heading };
    const away = { x: -Math.sin(faceTo(lead, player)), z: -Math.cos(faceTo(lead, player)) };
    switch (fx.kind) {
      case 'retrocede': case 'defensa': case 'grita': case 'huye': case 'evacuacion': case 'helicoptero': case 'duelo-cuchillo': {
        // A step back, then stay there.
        if (fx.t < 1.1 && !lead.seated) stepTo(lead, home.x + away.x * 1.3, home.z + away.z * 1.3, 2.2, dt);
        else lead.speed = 0;
        if (fx.kind === 'duelo-cuchillo' && fx.rival) {
          const r = fx.rival;
          if (fx.t < 6) {
            // Circling at knife's reach, feinting in and out.
            const a = faceTo(player, r) + Math.sin(fx.t * 1.6) * 0.5;
            const reach = 1.9 + Math.sin(fx.t * 3.1) * 0.35;
            stepTo(r, player.x + Math.sin(a) * reach, player.z + Math.cos(a) * reach, 2.6, dt);
            r.heading = faceTo(r, player);
            r.speed = 0;
          } else if (fx.t < 11) {
            // Backs off and keeps the distance, knife down.
            const a = faceTo(player, r);
            stepTo(r, player.x + Math.sin(a) * 5.2, player.z + Math.cos(a) * 5.2, 2.4, dt);
            r.heading = faceTo(r, player);
            r.override = { pose: 'arms', until: time + 60 };
          } else if (fx.t < 30) { r.speed = 0; r.heading = faceTo(r, player); } else { park(r); fx.rival = null; }
        }
        for (const body of fx.runners) {
          if (body.hidden) continue;
          const dir = { x: Math.sin(body.heading), z: Math.cos(body.heading) };
          const nx = body.x + dir.x * 4.4 * dt, nz = body.z + dir.z * 4.4 * dt;
          if (!blockedAt(nx, nz)) { body.x = nx; body.z = nz; } else body.heading += 1.3;
          if (Math.hypot(body.x - lead.x, body.z - lead.z) > 34) park(body);
        }
        if (fx.t > 40 && !fx.rival && fx.runners.every(body => body.hidden)) fx.done = true;
        break;
      }
      case 'curioso': {
        if (fx.t < 1 && !lead.seated) stepTo(lead, home.x - away.x * 0.6, home.z - away.z * 0.6, 1.2, dt); else lead.speed = 0;
        if (fx.t > 2) fx.done = true;
        break;
      }
      case 'beso': case 'abrazo': {
        if (lead.seated) { fx.done = true; break; }
        const pose = fx.kind === 'beso' ? 'kiss' : 'hug';
        if (fx.t < 2.2) {
          // Walks up to you, then the kiss or the hug, then back home.
          const at = { x: player.x - away.x * 0.72, z: player.z - away.z * 0.72 };
          const there = stepTo(lead, at.x, at.z, 1.5, dt);
          lead.heading = faceTo(lead, player);
          if (there) lead.override = { pose, until: time + 2.4 };
        } else if (fx.t < 4.6) {
          lead.speed = 0; lead.heading = faceTo(lead, player);
          lead.override ??= { pose, until: time + 2.2 };
          if (fx.t > 2.4 && fx.t < 2.4 + dt * 1.5) hearts.play(new THREE.Vector3(lead.x, lead.y, lead.z));
        } else if (fx.t < 8) {
          lead.override = undefined;
          if (stepTo(lead, home.x, home.z, 1.2, dt)) { lead.heading = faceTo(lead, player); lead.speed = 0; fx.done = true; }
        } else fx.done = true;
        break;
      }
      case 'pelea': {
        const [a, b] = rig.bodies;
        if (a && b && fx.t < 7) { a.heading = faceTo(a, b); b.heading = faceTo(b, a); }
        if (b && fx.t >= 7 && !fx.done) { b.pose = 'fallen'; b.seated = true; b.override = undefined; fx.done = true; }
        break;
      }
      default: fx.done = fx.t > 3; break;
    }
  }

  // ---------------------------------------------------------- per frame
  const visible = (encounter: Encounter, street: StreetState, eventId: string | null) => {
    if (!isAvailable(street, encounter, eventId) && street.open?.id !== encounter.id) return false;
    const end = street.done[encounter.id];
    if (end && GONE.includes(encounter.ends[end].change)) return false;
    return true;
  };
  const scenePose = (base: string, change: Change | null, mood: Mood) => {
    if (change === 'baila') return 'dance';
    if (change === 'se-sienta') return 'sit';
    if (change === 'duerme') return 'sleep';
    if (change === 'llama') return 'phone';
    if (change === 'abraza') return 'hug';
    if (change === 'manos-arriba') return 'hands-up';
    if (change === 'cae') return 'fallen';
    if (mood === 'love' && base === 'stand') return 'stand';
    return base;
  };

  const spotFor = (rig: EncounterRig) => {
    const place = PLACEMENTS[rig.encounter.id];
    const lead = rig.bodies[0] ?? null;
    if (place.circle.follow && lead) {
      return { x: lead.x + Math.sin(lead.heading) * place.circle.z, z: lead.z + Math.cos(lead.heading) * place.circle.z };
    }
    const p = placementOf(rig.encounter.id)!;
    return p.circle;
  };

  function update(dt: number, ctx: Ctx) {
    const { player, street } = ctx;
    const time = ctx.clock;
    const pulse = ctx.reduced ? 0 : Math.sin(time * 2.6) * 0.14;
    ringMaterials.escena.opacity = 0.55 + pulse;
    ringMaterials.rincon.opacity = 0.34 + pulse * 0.6;
    ringMaterials.door.opacity = 0.42 + pulse * 0.5;

    // The scenes: built when you get near, kept afterwards.
    for (const encounter of ENCOUNTERS) {
      const place = PLACEMENTS[encounter.id];
      if (!place) continue;
      const anchor = placementOf(encounter.id)!;
      const distance = Math.hypot(anchor.x - player.x, anchor.z - player.z);
      let rig = encounterRigs.get(encounter.id) ?? null;
      if (!rig && distance < 110) rig = buildEncounter(encounter);
      if (!rig) continue;
      const show = visible(encounter, street, ctx.eventId);
      const end = street.done[encounter.id] ?? null;
      const change = end ? encounter.ends[end].change : null;
      const isOpen = street.open?.id === encounter.id;

      // A scene that just ended changes the street a little.
      if (end && !closedSeen.has(encounter.id)) {
        closedSeen.add(encounter.id);
        if (change === 'corre' || change === 'se-va') {
          const lead = rig.bodies[0];
          const away = lead ? { x: -Math.sin(faceTo(lead, player)), z: -Math.cos(faceTo(lead, player)) } : { x: 1, z: 0 };
          rig.leaving = { t: 0, dir: away };
        }
        if (change === 'ambulancia' || change === 'policia') {
          const route = emergencyRoute(anchor.x, anchor.z);
          if (route && anchor.y < 1) queue.push(runFrom(change === 'ambulancia' ? 'ambulance' : 'police', route.points, route.stopAt, encounter.id));
        }
        if (change === 'luz' && !rig.lantern) rig.lantern = addLantern(rig, anchor);
        if (change === 'huye') { rig.fx = null; rig.leaving = { t: 0, dir: { x: -Math.sin(faceTo(rig.bodies[0] ?? anchor, player)), z: -Math.cos(faceTo(rig.bodies[0] ?? anchor, player)) } }; scatter(anchor, 3, time).forEach(body => rig.fx?.runners.push(body)); }
        if (change === 'beso' || change === 'pelea' || change === 'cae' || change === 'helicoptero') playFx(encounter.id, change, player, time);
      }
      if (rig.fx) stepFx(rig, player, time, dt);
      const leavingDone = rig.leaving && rig.leaving.t > 7;
      const showBodies = show || Boolean(rig.leaving && !leavingDone);
      const baseMood = moodOf(street, encounter.id);
      // With the heart out, love shows in the eyes.
      const smitten = rig.fx && ['corazon', 'beso', 'abrazo', 'calma'].includes(rig.fx.kind);
      const mood = baseMood === 'love' && smitten ? 'smitten' : baseMood;
      for (const body of rig.bodies) {
        if (body.x > 9000) continue;
        body.hidden = !showBodies;
        body.mood = mood;
        if (change) body.pose = scenePose(body.pose, change, mood);
      }
      for (const animal of rig.animals) animal.root.visible = show;
      if (rig.leaving && !leavingDone) {
        rig.leaving.t += dt;
        const fast = change === 'corre' || change === 'huye' ? 4.6 : 1.4;
        for (const body of rig.bodies) {
          body.pose = change === 'corre' || change === 'huye' ? 'run' : 'walk';
          body.heading = Math.atan2(rig.leaving.dir.x, rig.leaving.dir.z);
          const nx = body.x + rig.leaving.dir.x * fast * dt, nz = body.z + rig.leaving.dir.z * fast * dt;
          if (!blockedAt(nx, nz)) { body.x = nx; body.z = nz; }
          body.speed = fast;
        }
      }

      // Walking scenes stroll along their line and stop when you come close.
      if (rig.walk && place.walk && rig.bodies[0] && show && !end) {
        const lead = rig.bodies[0];
        const near = isOpen || Math.hypot(lead.x - player.x, lead.z - player.z) < 4.5;
        const { from, to, speed } = place.walk;
        const length = Math.hypot(to.x - from.x, to.z - from.z);
        if (!near) {
          rig.walk.t += (rig.walk.dir * speed * dt) / length;
          if (rig.walk.t > 1 || rig.walk.t < 0) { rig.walk.dir *= -1; rig.walk.t = Math.max(0, Math.min(1, rig.walk.t)); }
        }
        const x = from.x + (to.x - from.x) * rig.walk.t, z = from.z + (to.z - from.z) * rig.walk.t;
        lead.x = x; lead.z = z;
        lead.speed = near ? 0 : speed;
        lead.pose = near ? 'stand' : 'walk';
        lead.heading = near ? faceTo(lead, player) : Math.atan2((to.x - from.x) * rig.walk.dir, (to.z - from.z) * rig.walk.dir);
        rig.bodies.slice(1).forEach((body, i) => {
          const side = { x: Math.cos(lead.heading), z: -Math.sin(lead.heading) };
          body.x = lead.x + side.x * 0.75 * (i % 2 ? -1 : 1) * (1 + Math.floor(i / 2));
          body.z = lead.z + side.z * 0.75 * (i % 2 ? -1 : 1) * (1 + Math.floor(i / 2));
          body.heading = lead.heading; body.speed = lead.speed; body.pose = lead.pose;
        });
      } else if (isOpen && rig.bodies.length && !place.behindDoor && !place.balcony && !place.window) {
        // In the middle of a scene, people turn toward you (unless they are sitting or lying).
        for (const body of rig.bodies) if (!body.seated && body.pose !== 'lie' && body.pose !== 'ground') body.heading = turnToward(body.heading, faceTo(body, player), dt * 4);
      }
      for (const body of rig.bodies) body.group.position.set(body.x, body.y, body.z);

      // The circle: only while the scene can be opened, and only up close for the hidden ones.
      const ringShow = show && !end && !isOpen && ctx.walking && distance < RING_SHOW[encounter.kind] && (place.room ? ctx.room === place.room : !ctx.room);
      const spot = spotFor(rig);
      rig.ring.visible = ringShow;
      rig.ring.position.set(spot.x, (anchor.y >= 9 ? anchor.y : 0) + 0.05, spot.z);
      if (rig.beacon) {
        const far = show && !end && !isOpen && distance > 9 && distance < 120 && !place.room;
        rig.beacon.visible = far;
        rig.beacon.position.set(spot.x, 0.05, spot.z);
      }
      if (rig.lantern) rig.lantern.visible = !ctx.room || place.room === ctx.room;
    }

    // A heart used in the open scene: hearts burst from the person.
    const opened = street.open?.id ?? null;
    if (opened !== openSeen) { openSeen = opened; heartsSeen = heartsUsed(street); }
    const used = heartsUsed(street);
    if (opened && used > heartsSeen) {
      heartsSeen = used;
      const lead = encounterRigs.get(opened)?.bodies[0];
      if (lead) hearts.play(new THREE.Vector3(lead.x, lead.y, lead.z));
    }
    hearts.update(dt);

    // People walking: step everyone, draw the nearby ones.
    const people = [{ x: player.x, z: player.z }];
    walkers = stepWalkers(walkers, standing.concat(people), cars, dt, options.boxes);
    for (const walker of walkers) {
      const body = walkerBodies.get(walker.id)!;
      if ('phase' in body && 'species' in body) {
        const animal = body as Animal;
        animal.root.position.set(walker.x, 0, walker.z);
        animal.root.rotation.y = walker.heading;
        const far = Math.hypot(walker.x - player.x, walker.z - player.z) > 60;
        animal.root.visible = !far && !ctx.room;
        if (!far) animateAnimal(animal, dt, walker.speed);
        continue;
      }
      const person = body as Body;
      const flee = person.react && person.react.flee && person.react.until > time;
      person.x = walker.x; person.z = walker.z; person.heading = walker.heading;
      person.speed = flee ? walker.speed * 2.6 : walker.speed;
      if (flee) {
        // A scared walker hurries on (twice as fast along the route).
        walker.s += walker.speed * 1.6 * dt;
      }
      person.pose = person.speed > 3 ? 'run' : person.speed > 0.1 ? 'walk' : 'stand';
      person.group.position.set(person.x, person.y, person.z);
    }
    for (const body of bodies) {
      if (body.react && body.react.until < time) body.react = undefined;
    }

    // Who gets a full body: the nearest ones; then a baked silhouette; then nothing.
    const scored: { body: Body; d: number }[] = [];
    for (const body of bodies) {
      if (body.hidden) { body.group.visible = false; continue; }
      const d = Math.hypot(body.x - player.x, body.z - player.z) + (body.y > 1 && !ctx.room ? 6 : 0);
      scored.push({ body, d });
    }
    scored.sort((a, b) => a.d - b.d);
    let rigs = 0;
    for (const { body, d } of scored) {
      const inRoom = ctx.room ? Math.abs(body.x - player.x) < 40 && Math.abs(body.z - player.z) < 40 : body.x < 300;
      if (!inRoom || d > FAR_SHOW) { body.group.visible = false; continue; }
      body.group.visible = true;
      body.group.rotation.y = body.heading;
      const near = d < NEAR_RIG && rigs < maxRigs;
      if (near) {
        rigs++;
        const rig = ensureRig(body);
        rig.root.visible = true;
        if (body.far) body.far.visible = false;
        const mood = body.react && body.react.until > time ? body.react.mood : body.mood;
        setMood(rig, mood);
        const pose = body.override && body.override.until > time ? body.override.pose : body.pose;
        if (body.override && body.override.until <= time) body.override = undefined;
        setPose(rig, pose);
        const talking = Boolean(ctx.open && body.key.startsWith(`${ctx.open}/`));
        rig.look = !body.seated && body.attention > 0.45 && d < 6 && body.pose !== 'walk' && body.pose !== 'run'
          ? Math.max(-1.1, Math.min(1.1, radians(faceTo(body, player) - body.heading))) : null;
        animatePerson(rig, dt, pose === 'walk' || pose === 'run' || pose === 'bag-run' ? Math.max(body.speed, pose === 'run' ? 3.5 : 0) : 0, talking);
      } else {
        const far = ensureFar(body);
        far.visible = true;
        if (body.rig) body.rig.root.visible = false;
        // Walking silhouettes bob a little so they do not glide.
        far.position.y = body.speed > 0.1 && !ctx.reduced ? Math.abs(Math.sin(time * body.speed * 3.2 + body.attention * 9)) * 0.04 : 0;
      }
    }
    for (const animal of staticAnimals) {
      const d = Math.hypot(animal.root.position.x - player.x, animal.root.position.z - player.z);
      animal.root.visible = d < 50 && !ctx.room;
      if (animal.root.visible) animateAnimal(animal, dt, 0);
    }
    for (const rig of encounterRigs.values()) for (const animal of rig.animals) if (animal.root.visible) animateAnimal(animal, dt, 0);

    // Traffic on the new streets.
    const blockers: { x: number; z: number; axis?: 'x' | 'z'; lane?: number }[] = [...(ctx.blockers ?? [])];
    if (run) {
      const p = pointOnPath(run.points, run.s);
      blockers.push({ x: p.x, z: p.z, axis: Math.abs(p.dx) > 0.5 ? 'x' : 'z', lane: Math.abs(p.dx) > 0.5 ? p.z : p.x });
    }
    cars = stepCityTraffic(cars, people.concat(walkers.filter(w => !w.animal && Math.abs(w.x - player.x) < 90 && Math.abs(w.z - player.z) < 90)), dt, blockers);
    let boxIndex = 0;
    for (const car of cars) {
      const rig = carRigs.get(car.id)!;
      const heading = car.axis === 'z' ? (car.dir > 0 ? Math.PI / 2 : -Math.PI / 2) : (car.dir > 0 ? 0 : Math.PI);
      const d = Math.hypot(car.x - player.x, car.z - player.z);
      rig.group.visible = d < 90 && !ctx.room;
      if ('bike' in rig) {
        rig.group.position.set(car.x, 0, car.z);
        rig.group.rotation.y = -heading + Math.PI / 2;
        const near = d < NEAR_RIG;
        rig.rider.root.visible = near; rig.far.visible = !near;
        if (rig.group.visible) { spinWheels(rig.group, car.speed * dt); if (near) animatePerson(rig.rider, dt, 0, false); }
        continue;
      }
      placeVehicle(rig.group, car.x, car.z, heading);
      const box = movingBoxes[boxIndex++];
      const along = car.axis !== 'z';
      box.x0 = car.x - (along ? 2.15 : 0.9); box.x1 = car.x + (along ? 2.15 : 0.9);
      box.z0 = car.z - (along ? 0.9 : 2.15); box.z1 = car.z + (along ? 0.9 : 2.15);
    }
    if (lockedRig?.hazards) lockedRig.hazards.emissiveIntensity = Math.sin(time * 5.5) > 0 ? 3.2 : 0.15;

    // Emergency runs.
    nextAmbulance -= dt;
    if (!run && queue.length) run = queue.shift()!;
    if (!run && nextAmbulance <= 0) {
      nextAmbulance = AMBULANCE_EVERY;
      run = runFrom('ambulance', AMBULANCE_ROUTE, 0);
    }
    for (const kind of ['ambulance', 'police'] as const) emergency[kind].group.visible = Boolean(run && run.kind === kind) && !ctx.room;
    if (run) {
      const vehicle = emergency[run.kind];
      const atStop = run.stopAt >= 0 && run.s >= run.stopAt - 0.05 && run.wait > 0;
      const p = pointOnPath(run.points, run.s);
      const ahead = cars.some(car => Math.hypot(car.x - (p.x + p.dx * 6), car.z - (p.z + p.dz * 6)) < 3.5) || Math.hypot(player.x - (p.x + p.dx * 4), player.z - (p.z + p.dz * 4)) < 2.2;
      const goal = atStop || ahead ? 0 : run.stopAt >= 0 && run.s < run.stopAt ? Math.min(11, Math.max(2.5, (run.stopAt - run.s) * 0.9)) : 11;
      run.speed += Math.sign(goal - run.speed) * Math.min(Math.abs(goal - run.speed), (goal > run.speed ? 6 : 12) * dt);
      if (atStop) {
        run.wait -= dt;
        // The ambulance takes the patient; the police stay to talk, then leave too.
        if (run.kind === 'ambulance' && run.wait < 4 && run.scene) for (const body of encounterRigs.get(run.scene)?.bodies ?? []) { body.hidden = true; body.x = 9999; }
      } else run.s += run.speed * dt;
      placeVehicle(vehicle.group, p.x, p.z, Math.atan2(p.dz, p.dx));
      vehicle.flash(time, atStop || run.speed > 0.5);
      emergencyBox.x0 = p.x - 2.6; emergencyBox.x1 = p.x + 2.6; emergencyBox.z0 = p.z - 2.6; emergencyBox.z1 = p.z + 2.6;
      if (Math.abs(p.dx) > 0.5) { emergencyBox.z0 = p.z - 1; emergencyBox.z1 = p.z + 1; } else { emergencyBox.x0 = p.x - 1; emergencyBox.x1 = p.x + 1; }
      if (run.s >= run.length - 0.05) { run = null; emergencyBox.x0 = emergencyBox.x1 = emergencyBox.z0 = emergencyBox.z1 = -9999; }
    }

    // Doors into the laundromat and up to the rooftop.
    for (const { door, ring } of doorRings) {
      ring.visible = ctx.walking && !ctx.room && Math.hypot(door.x - player.x, door.z - player.z) < 30;
    }
  }

  const blockedAt = (x: number, z: number) => insideBuilding(x, z, 0.3) || options.boxes.some(b => !b.npc && x > b.x0 - 0.3 && x < b.x1 + 0.3 && z > b.z0 - 0.3 && z < b.z1 + 0.3);
  const addLantern = (rig: EncounterRig, anchor: { x: number; z: number; y: number }) => {
    const lamp = new THREE.Group();
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.16, 12, 8), lanternMaterial);
    const glowSprite = new THREE.Sprite(new THREE.SpriteMaterial({ color: '#ffcf8a', transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false, map: glowMap() }));
    glowSprite.scale.setScalar(2.4);
    lamp.add(bulb, glowSprite);
    lamp.position.set(anchor.x, anchor.y + 2.8, anchor.z);
    rig.extra.add(lamp);
    return lamp;
  };

  // The circles you can walk into right now.
  function spots(ctx: Pick<Ctx, 'street' | 'eventId' | 'room'>): StreetSpot[] {
    const out: StreetSpot[] = [];
    for (const [id, rig] of encounterRigs) {
      const encounter = rig.encounter;
      const place = PLACEMENTS[id];
      if (!visible(encounter, ctx.street, ctx.eventId) || ctx.street.done[id]) continue;
      if (place.room ? ctx.room !== place.room : Boolean(ctx.room)) continue;
      const spot = spotFor(rig);
      out.push({ id: `calle:${id}`, x: spot.x, z: spot.z, radius: encounter.kind === 'escena' ? 1.5 : 1.3, key: 'E', verb: encounter.verb, name: encounter.title, encounter: id, kind: encounter.kind });
    }
    if (!ctx.room) for (const door of ROOM_DOORS) out.push({ id: door.id, x: door.x, z: door.z, radius: door.radius, key: 'E', verb: door.verb, name: door.name, door: door.stage });
    return out;
  }

  // Where the camera stands while a scene is open: beside the two people,
  // on whichever side is clear, looking between them.
  function framing(id: string, player: { x: number; z: number; y: number }, bounds: { minX: number; maxX: number; minZ: number; maxZ: number } | null) {
    const rig = encounterRigs.get(id);
    const lead = rig?.bodies[0];
    const anchor = placementOf(id)!;
    const other = lead ? { x: lead.x, z: lead.z, y: lead.y } : { x: anchor.x, z: anchor.z, y: anchor.y };
    const lookY = (other.y > 1.5 ? (other.y + player.y) / 2 : player.y) + 1.3;
    const mid = { x: (player.x + other.x) / 2, z: (player.z + other.z) / 2 };
    const dx = other.x - player.x, dz = other.z - player.z;
    const length = Math.hypot(dx, dz) || 1;
    const clear = (x: number, z: number) => bounds
      ? x > bounds.minX + 0.4 && x < bounds.maxX - 0.4 && z > bounds.minZ + 0.4 && z < bounds.maxZ - 0.4 && !options.boxes.some(b => !b.npc && !b.vehicle && x > b.x0 - 0.3 && x < b.x1 + 0.3 && z > b.z0 - 0.3 && z < b.z1 + 0.3)
      : !insideBuilding(x, z, 0.4) && !options.boxes.some(b => !b.npc && x > b.x0 - 0.3 && x < b.x1 + 0.3 && z > b.z0 - 0.3 && z < b.z1 + 0.3);
    const tries: [number, number, number][] = [[-dz, dx, 3.4], [dz, -dx, 3.4], [-dz, dx, 2.4], [dz, -dx, 2.4]];
    for (const [sx, sz, reach] of tries) {
      const x = mid.x + (sx / length) * reach - (dx / length) * 1.2;
      const z = mid.z + (sz / length) * reach - (dz / length) * 1.2;
      if (clear(x, z)) return { camera: { x, y: player.y + 1.9, z }, look: { x: mid.x, y: lookY, z: mid.z } };
    }
    // Over the shoulder as a last resort.
    return { camera: { x: player.x - (dx / length) * 2.2, y: player.y + 2.3, z: player.z - (dz / length) * 2.2 }, look: { x: other.x, y: lookY, z: other.z } };
  }

  // Using the object on whoever is closest (Q): returns who reacted.
  function useItem(item: ItemId, player: { x: number; z: number }, reaction: { mood: Mood; flee: boolean; hearts: boolean }, time: number) {
    let best: Body | null = null;
    let bestD = 3.4;
    for (const body of bodies) {
      if (body.key.includes('/') || body.hidden || !body.group.visible || body.y > 1) continue;
      const d = Math.hypot(body.x - player.x, body.z - player.z);
      if (d < bestD) { best = body; bestD = d; }
    }
    if (!best) return null;
    best.react = { mood: reaction.mood, until: time + (reaction.hearts ? 7 : 5), flee: reaction.flee };
    if (reaction.flee && best.pose !== 'walk') best.pose = best.seated ? 'crouch' : 'arms';
    if (reaction.flee) {
      // A weapon out in the street: whoever is near backs off too, hands up or running.
      const weapon = item === 'pistola' || item === 'granada';
      for (const body of bodies) {
        if (body === best || body.key.includes('/') || body.hidden || body.y > 1) continue;
        const d = Math.hypot(body.x - player.x, body.z - player.z);
        if (d > 9) continue;
        body.react = { mood: weapon ? 'terror' : 'scared', until: time + 6, flee: true };
        if (!body.seated && body.pose !== 'walk' && body.pose !== 'run') body.override = { pose: weapon ? 'hands-up' : 'arms', until: time + 6 };
      }
      if (item === 'granada') scatter(player, 3, time);
    }
    if (reaction.hearts) {
      best.override = { pose: 'stand', until: time + 0.1 };
      best.react = { mood: 'smitten', until: time + 7, flee: false };
    }
    if (reaction.hearts) hearts.play(new THREE.Vector3(best.x, best.y, best.z));
    if (!reaction.flee) best.heading = faceTo(best, player);
    return { x: best.x, y: best.y + 2.1, z: best.z, key: best.key };
  }

  function stats() {
    let rigs = 0, far = 0;
    for (const body of bodies) {
      if (!body.group.visible) continue;
      if (body.rig?.root.visible) rigs++;
      else if (body.far?.visible) far++;
    }
    return { rigs, far, walkers: walkers.length, cars: cars.length, scenes: encounterRigs.size };
  }

  function playHearts(at: THREE.Vector3) { hearts.play(at); }

  // Where each scene's lead person stands right now (for the minimap and tests).
  function leadOf(id: string) {
    const body = encounterRigs.get(id)?.bodies[0];
    return body ? { x: body.x, z: body.z, y: body.y } : null;
  }

  // Everyone in a scene looks at you when it opens; the room spots come from STREET_ROOMS.
  void STREET_ROOMS;
  const setHooks = (next: Hooks) => Object.assign(hooks, next);
  return { root, update, spots, framing, useItem, stats, movingBoxes, playHearts, leadOf, playFx, setHooks, cars: () => cars, walkers: () => walkers };
}

export type StreetCrowd = ReturnType<typeof createStreetCrowd>;

function turnToward(from: number, to: number, rate: number) {
  return from + radians(to - from) * Math.min(1, rate);
}

function hash(text: string) {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) { h ^= text.charCodeAt(i); h = Math.imul(h, 16777619); }
  return Math.abs(h);
}

let glowTexture: THREE.CanvasTexture | null = null;
function glowMap() {
  if (glowTexture) return glowTexture;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 64;
  const ctx = canvas.getContext('2d')!;
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.4, 'rgba(255,255,255,.35)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  glowTexture = new THREE.CanvasTexture(canvas);
  return glowTexture;
}

// A bicycle along +x, wheels named so they can spin.
function makeBike(color: string) {
  const group = new THREE.Group();
  const frame = new THREE.MeshStandardMaterial({ color, roughness: 0.5, metalness: 0.4 });
  const dark = new THREE.MeshStandardMaterial({ color: '#1a1a1c', roughness: 0.7 });
  const wheel = new THREE.TorusGeometry(0.33, 0.035, 6, 20);
  for (const x of [-0.52, 0.52]) {
    const w = new THREE.Mesh(wheel, dark);
    w.position.set(x, 0.35, 0);
    w.name = 'wheel';
    group.add(w);
  }
  const bar = (x0: number, y0: number, x1: number, y1: number) => {
    const length = Math.hypot(x1 - x0, y1 - y0);
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, length, 6), frame);
    mesh.position.set((x0 + x1) / 2, (y0 + y1) / 2, 0);
    mesh.rotation.z = Math.atan2(y1 - y0, x1 - x0) - Math.PI / 2;
    group.add(mesh);
  };
  bar(-0.52, 0.35, -0.05, 0.72); bar(-0.05, 0.72, 0.42, 0.72); bar(0.52, 0.35, 0.42, 0.9); bar(-0.52, 0.35, 0.05, 0.38); bar(0.05, 0.38, -0.05, 0.72); bar(0.05, 0.38, 0.42, 0.72);
  const seat = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.05, 0.12), dark);
  seat.position.set(-0.08, 0.86, 0);
  const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.5, 6), dark);
  handle.rotation.x = Math.PI / 2;
  handle.position.set(0.42, 0.95, 0);
  const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), new THREE.MeshStandardMaterial({ color: '#fff6dc', emissive: '#fff1c4', emissiveIntensity: 2 }));
  lamp.position.set(0.5, 0.86, 0);
  group.add(seat, handle, lamp);
  return group;
}
function spinWheels(group: THREE.Group, distance: number) {
  for (const child of group.children) if (child.name === 'wheel') child.rotation.z -= distance / 0.33;
}

// An ambulance or a police car with a light bar.
function makeEmergency(kind: 'ambulance' | 'police', night: Night) {
  const rig = makeCar(kind === 'ambulance' ? 'van' : 'sedan', kind === 'ambulance' ? '#f2f2ee' : '#1f2e4a', night);
  const group = rig.group;
  const red = new THREE.MeshStandardMaterial({ color: '#ff3b30', emissive: '#ff2a1f', emissiveIntensity: 0 });
  const blue = new THREE.MeshStandardMaterial({ color: '#2f7bff', emissive: '#2a6bff', emissiveIntensity: 0 });
  const top = kind === 'ambulance' ? 2.45 : 1.62;
  const left = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.14, 0.42), kind === 'ambulance' ? red : blue);
  const right = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.14, 0.42), red);
  left.position.set(0.6, top, -0.3);
  right.position.set(0.6, top, 0.3);
  group.add(left, right);
  if (kind === 'ambulance') {
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(4.5, 0.22, 1.94), new THREE.MeshStandardMaterial({ color: '#d42a24', roughness: 0.6 }));
    stripe.position.set(0, 1.05, 0);
    group.add(stripe);
  } else {
    const doors = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.42, 1.86), new THREE.MeshStandardMaterial({ color: '#e8e8e4', roughness: 0.5 }));
    doors.position.set(0, 0.78, 0);
    group.add(doors);
  }
  const glow = new THREE.PointLight('#ff3b30', 0, 14, 2);
  glow.position.set(0.6, top + 0.4, 0);
  group.add(glow);
  group.visible = false;
  return {
    group,
    flash(time: number, on: boolean) {
      const a = on && Math.sin(time * 14) > 0;
      const b = on && Math.sin(time * 14) <= 0;
      left.material.emissiveIntensity = a ? 4 : 0.2;
      right.material.emissiveIntensity = b ? 4 : 0.2;
      glow.intensity = on ? 6 : 0;
      glow.color.set(a && kind === 'police' ? '#2f7bff' : '#ff3b30');
    },
  };
}
