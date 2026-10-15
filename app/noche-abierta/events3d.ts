// Noche Abierta · ambient urban events: something can happen on any corner.
//
// A thief and the one running after him, a police chase, a fight with a ring
// of people filming it, someone hurt on the pavement and the ambulance that
// comes, a car on fire, a helicopter with its searchlight, a protest with
// signs and a banner, two drivers arguing after a crash, a drunk shouting
// at everyone. Each is a small state machine over a pool of people and
// vehicles that is built once and reused; events happen 40–110 m from the
// learner while they walk, two at a time at most, and vanish when they end.
//
// The data (what happens where, what people shout, by level band) lives in
// events.mjs. Rendering follows streetlife.ts: people get the full rig only
// up close and a baked mesh beyond; vehicles are merged by material.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { districtAt, emergencyRoute, pathLength, pointOnPath } from './city.mjs';
import { insideBuilding, type Box } from './world3d.mjs';
import { PERSON_MOODS, PERSON_POSES, addBlobShadow, animatePerson, createPerson, randomLook, setMood, setPose, type Look, type Person } from './people3d';
import { box, canvas, glow, makeCar, placeVehicle, solid, type Night } from './build3d';
import {
  EVENT_TIMING, burnable, crashSpot, districtCentre, pavementSpot, pickEventKind, pointNear, shoutLine, sidewalkStretch, squareSpot,
  type EventKind,
} from './events.mjs';

export type EventCtx = {
  clock: number; player: { x: number; z: number; y: number }; walking: boolean; room: string | null; level: string;
  // Moving traffic (crowd.cars()), to keep crashes away from it. Optional.
  cars?: { x: number; z: number }[];
  reduced?: boolean;
};
export type Shout = { x: number; y: number; z: number; text: string; kind: string };
export type StreetEventsDeps = {
  low: boolean; boxes: Box[];
  makePerson?: (look: Look, pose: string) => Person;
};

// Full rigs only this close; a baked silhouette beyond; nothing past `hide`.
const NEAR_RIG = 26;
const TAU = Math.PI * 2;
const radians = (a: number) => Math.atan2(Math.sin(a), Math.cos(a));
const dist = (a: { x: number; z: number }, b: { x: number; z: number }) => Math.hypot(a.x - b.x, a.z - b.z);
const faceTo = (from: { x: number; z: number }, to: { x: number; z: number }) => Math.atan2(to.x - from.x, to.z - from.z);
const poseOr = (pose: string, fallback: string) => ((PERSON_POSES as readonly string[]).includes(pose) ? pose : fallback);
const moodOr = (mood: string, fallback: string) => ((PERSON_MOODS as readonly string[]).includes(mood) ? mood : fallback);

function hash(text: string) {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) { h ^= text.charCodeAt(i); h = Math.imul(h, 16777619); }
  return Math.abs(h);
}
function rng(seed: number) {
  let s = seed % 2147483647 || 7;
  return () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
}

// ---------------------------------------------------------------- baking (as in streetlife.ts)

let bakedMaterial: THREE.MeshStandardMaterial | null = null;
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
  bakedMaterial ??= new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85 });
  const mesh = new THREE.Mesh(merged ?? new THREE.BufferGeometry(), bakedMaterial);
  mesh.castShadow = false;
  return mesh;
}

// One mesh per material instead of one per part (sprites and lights stay).
function compactByMaterial(source: THREE.Object3D): THREE.Group {
  source.updateMatrixWorld(true);
  const inverse = new THREE.Matrix4().copy(source.matrixWorld).invert();
  const byMaterial = new Map<THREE.Material, THREE.BufferGeometry[]>();
  const keep: THREE.Object3D[] = [];
  source.traverse(object => {
    const mesh = object as THREE.Mesh;
    if ((object as THREE.Sprite).isSprite || (object as THREE.Light).isLight) { keep.push(object); return; }
    if (!mesh.isMesh || Array.isArray(mesh.material)) return;
    const geometry = mesh.geometry.index ? mesh.geometry.toNonIndexed() : mesh.geometry.clone();
    for (const name of Object.keys(geometry.attributes)) if (!['position', 'normal', 'uv'].includes(name)) geometry.deleteAttribute(name);
    if (!geometry.attributes.uv) geometry.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(geometry.attributes.position.count * 2), 2));
    geometry.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inverse, mesh.matrixWorld));
    const list = byMaterial.get(mesh.material) ?? [];
    list.push(geometry);
    byMaterial.set(mesh.material, list);
  });
  const out = new THREE.Group();
  for (const [material, parts] of byMaterial) {
    const merged = mergeGeometries(parts, false);
    for (const part of parts) part.dispose();
    if (!merged) continue;
    out.add(new THREE.Mesh(merged, material));
  }
  for (const object of keep) {
    const world = new THREE.Matrix4().multiplyMatrices(inverse, object.matrixWorld);
    object.removeFromParent();
    world.decompose(object.position, object.quaternion, object.scale);
    out.add(object);
  }
  return out;
}

// ---------------------------------------------------------------- textures

let glowTexture: THREE.CanvasTexture | null = null;
function glowMap() {
  return (glowTexture ??= canvas(64, 64, c => {
    const g = c.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.4, 'rgba(255,255,255,.35)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    c.fillStyle = g; c.fillRect(0, 0, 64, 64);
  }));
}
let flameTexture: THREE.CanvasTexture | null = null;
function flameMap() {
  return (flameTexture ??= canvas(64, 128, c => {
    c.clearRect(0, 0, 64, 128);
    const g = c.createRadialGradient(32, 92, 4, 32, 72, 54);
    g.addColorStop(0, 'rgba(255,250,210,1)'); g.addColorStop(0.25, 'rgba(255,190,60,.95)'); g.addColorStop(0.55, 'rgba(255,90,20,.55)'); g.addColorStop(1, 'rgba(120,20,0,0)');
    c.fillStyle = g;
    c.beginPath(); c.moveTo(32, 4); c.quadraticCurveTo(62, 60, 54, 100); c.quadraticCurveTo(44, 126, 32, 126); c.quadraticCurveTo(20, 126, 10, 100); c.quadraticCurveTo(2, 60, 32, 4); c.fill();
  }));
}
let smokeTexture: THREE.CanvasTexture | null = null;
function smokeMap() {
  return (smokeTexture ??= canvas(64, 64, c => {
    const g = c.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(70,66,64,.75)'); g.addColorStop(0.6, 'rgba(70,66,64,.3)'); g.addColorStop(1, 'rgba(70,66,64,0)');
    c.fillStyle = g; c.fillRect(0, 0, 64, 64);
  }));
}

// ---------------------------------------------------------------- vehicles

// A motorbike along +x, wheels named so they can spin (like makeBike in
// streetlife.ts): wheels, frame, tank, seat, headlight. The rider is added
// by whoever places it, in the `bike` pose.
export function makeMoto(color: string) {
  const group = new THREE.Group();
  const paint = solid(color, 0.35, 0.5);
  const dark = solid('#1a1a1c', 0.7);
  const chrome = solid('#9aa3ab', 0.3, 0.8);
  const wheel = new THREE.CylinderGeometry(0.3, 0.3, 0.1, 14);
  for (const x of [-0.6, 0.62]) {
    const w = new THREE.Mesh(wheel, dark);
    w.rotation.x = Math.PI / 2;
    w.position.set(x, 0.3, 0);
    w.name = 'wheel';
    group.add(w);
    group.add(box(0.5, 0.16, 0.16, paint, x, 0.5, 0, false));
  }
  // Frame, engine, tank and seat.
  group.add(box(0.9, 0.08, 0.12, dark, 0, 0.42, 0, false));
  group.add(box(0.5, 0.3, 0.34, chrome, 0.02, 0.45, 0, false));
  const tank = box(0.5, 0.26, 0.3, paint, 0.2, 0.74, 0, false);
  tank.rotation.z = -0.1;
  group.add(tank);
  group.add(box(0.48, 0.1, 0.3, dark, -0.3, 0.74, 0, false));
  group.add(box(0.3, 0.06, 0.28, paint, -0.56, 0.78, 0, false));
  // Fork, handlebars, headlight, exhaust.
  const fork = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.6, 6), chrome);
  fork.position.set(0.5, 0.6, 0);
  fork.rotation.z = 0.4;
  group.add(fork);
  const bars = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.6, 6), dark);
  bars.rotation.x = Math.PI / 2;
  bars.position.set(0.36, 0.92, 0);
  group.add(bars);
  group.add(box(0.1, 0.16, 0.16, glow('#fff1c9', 1.6), 0.62, 0.78, 0, false));
  group.add(box(0.06, 0.08, 0.1, glow('#ff3a2a', 1), -0.76, 0.62, 0, false));
  const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.045, 0.7, 8), chrome);
  pipe.rotation.z = Math.PI / 2;
  pipe.position.set(-0.3, 0.28, 0.17);
  group.add(pipe);
  return group;
}

// An ambulance or a police car with a light bar (the look of streetlife's).
function makeEmergencyVehicle(kind: 'ambulance' | 'police', night: Night) {
  const rig = makeCar(kind === 'ambulance' ? 'van' : 'sedan', kind === 'ambulance' ? '#f2f2ee' : '#1f2e4a', night);
  const source = rig.group;
  const red = new THREE.MeshStandardMaterial({ color: '#ff3b30', emissive: '#ff2a1f', emissiveIntensity: 0 });
  const blue = new THREE.MeshStandardMaterial({ color: '#2f7bff', emissive: '#2a6bff', emissiveIntensity: 0 });
  const top = kind === 'ambulance' ? 2.45 : 1.62;
  source.add(box(0.3, 0.14, 0.42, kind === 'ambulance' ? red : blue, 0.6, top, -0.3, false));
  source.add(box(0.3, 0.14, 0.42, red, 0.6, top, 0.3, false));
  if (kind === 'ambulance') source.add(box(4.5, 0.22, 1.94, solid('#d42a24', 0.6), 0, 1.05, 0, false));
  else source.add(box(1.6, 0.42, 1.86, solid('#e8e8e4', 0.5), 0, 0.78, 0, false));
  const light = new THREE.PointLight('#ff3b30', 0, 14, 2);
  light.position.set(0.6, top + 0.4, 0);
  source.add(light);
  const group = compactByMaterial(source);
  group.visible = false;
  return {
    group, kind,
    flash(time: number, on: boolean) {
      const a = on && Math.sin(time * 14) > 0;
      red.emissiveIntensity = on && !a ? 4 : 0.2;
      blue.emissiveIntensity = a ? 4 : 0.2;
      light.intensity = on ? 6 : 0;
      light.color.set(a && kind === 'police' ? '#2f7bff' : '#ff3b30');
    },
  };
}

// A civilian car with hazard lights (for the crash).
function makeHazardCar(kind: 'sedan' | 'coupe', color: string, night: Night) {
  const rig = makeCar(kind, color, night);
  const hazard = glow('#ff9a2a', 0.1);
  for (const [x, z] of [[2.16, 0.84], [2.16, -0.84], [-2.16, 0.84], [-2.16, -0.84]]) rig.group.add(box(0.08, 0.1, 0.14, hazard, x, 0.78, z, false));
  const group = compactByMaterial(rig.group);
  group.visible = false;
  return { group, hazard };
}

// A helicopter: fuselage, tail boom, skids, main and tail rotor, position
// lights, a translucent searchlight cone and the light disc it throws.
function makeHelicopter() {
  const group = new THREE.Group();
  const paint = solid('#2a3340', 0.5, 0.4);
  const dark = solid('#15181c', 0.6, 0.3);
  const glass = new THREE.MeshStandardMaterial({ color: '#8fb4d8', roughness: 0.1, metalness: 0.6, transparent: true, opacity: 0.6 });
  const body = new THREE.Group();
  body.add(box(3.2, 1.5, 1.6, paint, 0, 0, 0, false));
  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.8, 12, 8), glass);
  nose.scale.set(1.1, 0.9, 1);
  nose.position.set(1.7, 0.05, 0);
  body.add(nose);
  body.add(box(4.2, 0.42, 0.42, paint, -3.4, 0.3, 0, false));
  body.add(box(0.1, 1.1, 0.5, paint, -5.4, 0.7, 0, false));
  body.add(box(1.4, 0.08, 0.8, paint, -4.6, 0.75, 0, false));
  for (const z of [-0.7, 0.7]) {
    body.add(box(2.6, 0.08, 0.08, dark, 0, -1.05, z, false));
    for (const x of [-0.7, 0.7]) body.add(box(0.08, 0.4, 0.08, dark, x, -0.85, z, false));
  }
  body.add(box(0.4, 0.5, 0.4, dark, -0.2, 0.95, 0, false));
  const rotor = new THREE.Group();
  rotor.position.set(-0.2, 1.22, 0);
  rotor.add(box(9, 0.05, 0.3, dark, 0, 0, 0, false));
  const blade2 = box(9, 0.05, 0.3, dark, 0, 0, 0, false);
  blade2.rotation.y = Math.PI / 2;
  rotor.add(blade2);
  const tailRotor = new THREE.Group();
  tailRotor.position.set(-5.35, 0.95, 0.3);
  tailRotor.add(box(0.04, 1.4, 0.16, dark, 0, 0, 0, false));
  const tb = box(0.04, 1.4, 0.16, dark, 0, 0, 0, false);
  tb.rotation.x = Math.PI / 2;
  tailRotor.add(tb);
  const red = glow('#ff2a2a', 3), green = glow('#2aff5a', 3), white = glow('#ffffff', 4);
  body.add(box(0.14, 0.14, 0.14, red, 0.4, -0.3, -0.9, false));
  body.add(box(0.14, 0.14, 0.14, green, 0.4, -0.3, 0.9, false));
  body.add(box(0.14, 0.14, 0.14, white, -5.3, 1.3, 0, false));
  const lamp = box(0.5, 0.3, 0.5, glow('#fff6dc', 2.5), 1.2, -0.9, 0, false);
  body.add(lamp);
  const compact = compactByMaterial(body);
  group.add(compact, rotor, tailRotor);
  // The searchlight: a cone of unit length pointing down from the lamp.
  const coneGeometry = new THREE.CylinderGeometry(0.25, 7, 1, 18, 1, true);
  coneGeometry.translate(0, -0.5, 0);
  const coneMaterial = new THREE.MeshBasicMaterial({ color: '#fff0c0', transparent: true, opacity: 0.11, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false });
  const cone = new THREE.Mesh(coneGeometry, coneMaterial);
  cone.position.set(1.2, -1, 0);
  group.add(cone);
  const disc = new THREE.Mesh(new THREE.CircleGeometry(1, 28), new THREE.MeshBasicMaterial({ map: glowMap(), color: '#fff2c8', transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false }));
  disc.rotation.x = -Math.PI / 2;
  disc.scale.setScalar(7);
  disc.renderOrder = 3;
  group.visible = false;
  disc.visible = false;
  return { group, rotor, tailRotor, cone, disc, red, green, white, lamp };
}

// ---------------------------------------------------------------- people pool

type Actor = {
  id: string; group: THREE.Group; look: Look; pose: string; mood: string; rig: Person | null; far: THREE.Mesh | null; farPose: string;
  x: number; z: number; y: number; heading: number; speed: number; used: boolean; hidden: boolean; shout: string | null; talk: boolean;
};

type Run = {
  vehicle: ReturnType<typeof makeEmergencyVehicle>; points: [number, number][]; s: number; length: number; stopAt: number; wait: number; speed: number;
  box: Box; stopped: boolean; done: boolean; at: { x: number; z: number; dx: number; dz: number };
};

type Scene = {
  kind: EventKind | 'policia'; t: number; life: number; x: number; z: number; aux: boolean;
  actors: Actor[]; shouter: () => Actor | null; step: (dt: number, ctx: EventCtx) => boolean; end: () => void;
};

export function createStreetEvents(scene: THREE.Scene, night: Night, deps: StreetEventsDeps) {
  const root = new THREE.Group();
  root.name = 'street-events';
  scene.add(root);
  const maxRigs = deps.low ? 1 : 2;
  const makePerson = deps.makePerson ?? ((look: Look, pose: string) => { const p = createPerson(look, false); setPose(p, pose); return p; });
  const random = rng(4242);

  // -------------------------------------------------------------- actors
  const actors: Actor[] = [];
  const actorFor = (id: string, look: Look, pose: string) => {
    let actor = actors.find(a => a.id === id);
    if (!actor) {
      actor = { id, group: new THREE.Group(), look, pose, mood: 'neutral', rig: null, far: null, farPose: '', x: 0, z: 0, y: 0, heading: 0, speed: 0, used: false, hidden: false, shout: null, talk: false };
      actor.group.visible = false;
      root.add(actor.group);
      actors.push(actor);
    }
    actor.used = true; actor.hidden = false; actor.pose = pose; actor.mood = 'neutral'; actor.speed = 0; actor.shout = null; actor.talk = false; actor.y = 0;
    return actor;
  };
  const ensureRig = (actor: Actor) => {
    if (actor.rig) return actor.rig;
    const person = makePerson(actor.look, actor.pose);
    addBlobShadow(person, 1);
    person.attention = 0.2;
    actor.rig = person;
    actor.group.add(person.root);
    return person;
  };
  const ensureFar = (actor: Actor) => {
    if (actor.far && actor.farPose === actor.pose) return actor.far;
    const person = ensureRig(actor);
    setPose(person, actor.pose);
    setMood(person, actor.mood);
    animatePerson(person, 0.016, 0, false);
    if (actor.far) { actor.far.removeFromParent(); actor.far.geometry.dispose(); }
    actor.far = bake(person);
    actor.farPose = actor.pose;
    actor.group.add(actor.far);
    return actor.far;
  };
  const release = (actor: Actor) => { actor.used = false; actor.group.visible = false; };
  const place = (actor: Actor, x: number, z: number, heading: number) => { actor.x = x; actor.z = z; actor.heading = heading; };
  // Walk toward a point; returns the distance still to go.
  const moveTo = (actor: Actor, tx: number, tz: number, speed: number, dt: number) => {
    const d = Math.hypot(tx - actor.x, tz - actor.z);
    if (d < 0.05) { actor.speed = 0; return 0; }
    const step = Math.min(d, speed * dt);
    actor.x += ((tx - actor.x) / d) * step;
    actor.z += ((tz - actor.z) / d) * step;
    actor.heading = Math.atan2(tx - actor.x, tz - actor.z);
    actor.speed = speed;
    return d - step;
  };

  // -------------------------------------------------------------- vehicles
  const police = makeEmergencyVehicle('police', night);
  const ambulance = makeEmergencyVehicle('ambulance', night);
  const crashCars = [makeHazardCar('sedan', '#4a4a52', night), makeHazardCar('coupe', '#8e2f2a', night)];
  const heli = makeHelicopter();
  root.add(police.group, ambulance.group, crashCars[0].group, crashCars[1].group, heli.group, heli.disc);
  const farBox = (): Box => ({ x0: -9999, x1: -9999, z0: -9999, z1: -9999, vehicle: 'evento', top: 1.6 });
  const movingBoxes: Box[] = [farBox(), farBox(), farBox(), farBox()];
  const [policeBox, ambulanceBox, crashBoxA, crashBoxB] = movingBoxes;
  const clearBox = (b: Box) => { b.x0 = b.x1 = b.z0 = b.z1 = -9999; };
  const setBox = (b: Box, x: number, z: number, heading: number) => {
    const along = Math.abs(Math.cos(heading)) > 0.5;
    b.x0 = x - (along ? 2.3 : 1); b.x1 = x + (along ? 2.3 : 1); b.z0 = z - (along ? 1 : 2.3); b.z1 = z + (along ? 1 : 2.3);
  };
  const runs: Run[] = [];
  const busy = (vehicle: Run['vehicle']) => runs.some(run => run.vehicle === vehicle && !run.done);
  const startRun = (vehicle: Run['vehicle'], x: number, z: number, wait: number): Run | null => {
    const route = emergencyRoute(x, z);
    if (!route || busy(vehicle)) return null;
    let stopAt = 0;
    for (let i = 1; i <= route.stopAt; i++) stopAt += Math.hypot(route.points[i][0] - route.points[i - 1][0], route.points[i][1] - route.points[i - 1][1]);
    const run: Run = { vehicle, points: route.points, s: 0, length: pathLength(route.points), stopAt, wait, speed: 0, box: vehicle === police ? policeBox : ambulanceBox, stopped: false, done: false, at: pointOnPath(route.points, 0) };
    runs.push(run);
    vehicle.group.visible = true;
    return run;
  };
  const stepRuns = (dt: number, ctx: EventCtx) => {
    for (const run of runs) {
      if (run.done) continue;
      const atStop = run.s >= run.stopAt - 0.05 && run.wait > 0;
      const p = pointOnPath(run.points, run.s);
      const ahead = Math.hypot(ctx.player.x - (p.x + p.dx * 4), ctx.player.z - (p.z + p.dz * 4)) < 2.2
        || (ctx.cars ?? []).some(car => Math.hypot(car.x - (p.x + p.dx * 6), car.z - (p.z + p.dz * 6)) < 3.5);
      const goal = atStop || ahead ? 0 : run.s < run.stopAt ? Math.min(12, Math.max(2.5, (run.stopAt - run.s) * 0.9)) : 11;
      run.speed += Math.sign(goal - run.speed) * Math.min(Math.abs(goal - run.speed), (goal > run.speed ? 6 : 14) * dt);
      if (atStop) run.wait -= dt; else run.s += run.speed * dt;
      run.stopped = atStop;
      run.at = p;
      placeVehicle(run.vehicle.group, p.x, p.z, Math.atan2(p.dz, p.dx));
      run.vehicle.flash(ctx.clock, atStop || run.speed > 0.5);
      setBox(run.box, p.x, p.z, Math.atan2(p.dz, p.dx));
      run.vehicle.group.visible = !ctx.room && dist(p, ctx.player) < EVENT_TIMING.hide + 20;
      if (run.s >= run.length - 0.05) { run.done = true; run.vehicle.group.visible = false; clearBox(run.box); }
    }
    for (let i = runs.length - 1; i >= 0; i--) if (runs[i].done) runs.splice(i, 1);
  };
  // Where someone steps out of a stopped vehicle: beside it, toward (x, z).
  const besideRun = (run: Run, toward: { x: number; z: number }, back: number) => {
    const p = run.at;
    const side = { x: -p.dz, z: p.dx };
    const sign = (toward.x - p.x) * side.x + (toward.z - p.z) * side.z >= 0 ? 1 : -1;
    return { x: p.x + side.x * sign * 1.6 - p.dx * back, z: p.z + side.z * sign * 1.6 - p.dz * back };
  };

  // -------------------------------------------------------------- looks
  const look = (id: string, where: string, extras?: Partial<Look>) => ({ ...randomLook(hash(id), where), ...extras });
  const officerLook = (id: string): Look => ({ ...randomLook(hash(id), 'clinica'), top: 'uniform', topColor: '#1f2e4a', bottom: 'pants', bottomColor: '#1a2235', hairStyle: 'cap', hairColor: '#1f2e4a', extras: [] });
  const medicLook = (id: string): Look => ({ ...randomLook(hash(id), 'clinica'), top: 'scrubs', topColor: '#7fb7a8', bottom: 'pants', bottomColor: '#5a8a7a', extras: [] });

  // -------------------------------------------------------------- the free-ground check
  const solids = () => deps.boxes.filter(b => !b.npc && !b.vehicle);
  const free = (x: number, z: number, margin = 0.6) => !insideBuilding(x, z, margin) && !solids().some(b => x > b.x0 - margin && x < b.x1 + margin && z > b.z0 - margin && z < b.z1 + margin);
  const freeOr = (x: number, z: number, cx: number, cz: number) => {
    if (free(x, z)) return { x, z };
    // Slide toward the centre until the ground is free.
    for (let t = 0.2; t <= 1; t += 0.2) { const px = x + (cx - x) * t, pz = z + (cz - z) * t; if (free(px, pz, 0.4)) return { x: px, z: pz }; }
    return { x: cx, z: cz };
  };

  // -------------------------------------------------------------- scenes
  const scenes: Scene[] = [];
  const active = () => scenes.filter(s => !s.aux);
  const finish = (s: Scene) => { for (const a of s.actors) release(a); s.end(); };

  // A thief with a bag, the victim running behind, shouting.
  const ladron = (x: number, z: number): Scene | null => {
    const stretch = sidewalkStretch(x, z, 70, random);
    if (!stretch || !free(stretch.from.x, stretch.from.z, 0.3)) return null;
    const thief = actorFor('ladron', look('ladron', 'viejo', { top: 'hoodie', topColor: '#1b1b1f', extras: [] }), poseOr('bag-run', 'run'));
    const victim = actorFor('victima', look('victima', 'alto'), 'run');
    const back = { x: -Math.sin(stretch.heading) * 6, z: -Math.cos(stretch.heading) * 6 };
    place(thief, stretch.from.x, stretch.from.z, stretch.heading);
    place(victim, stretch.from.x + back.x, stretch.from.z + back.z, stretch.heading);
    victim.mood = 'scared'; victim.shout = 'ladron'; victim.talk = true; thief.mood = moodOr('terror', 'scared');
    const callsPolice = random() < 0.45;
    let called = false;
    const scene: Scene = {
      kind: 'ladron', t: 0, life: 32, x: victim.x, z: victim.z, aux: false, actors: [thief, victim],
      shouter: () => (victim.hidden ? null : victim),
      step(dt) {
        if (!thief.hidden && moveTo(thief, stretch.to.x, stretch.to.z, 5.4, dt) < 0.1) thief.hidden = true;
        const left = victim.pose === 'run' ? moveTo(victim, stretch.to.x, stretch.to.z, 4.4, dt) : 0;
        if (victim.pose === 'run' && (left < 0.1 || (thief.hidden && this.t > 14))) { victim.pose = 'arms'; victim.mood = 'angry'; victim.speed = 0; }
        if (callsPolice && !called && this.t > 6) { called = true; callPolice(victim.x, victim.z); }
        this.x = victim.x; this.z = victim.z;
        return this.t < this.life;
      },
      end() {},
    };
    return scene;
  };

  // Two officers running after someone, who ends cuffed against a wall.
  const persecucion = (x: number, z: number): Scene | null => {
    const stretch = sidewalkStretch(x, z, 55, random);
    if (!stretch || !free(stretch.from.x, stretch.from.z, 0.3)) return null;
    const chased = actorFor('perseguido', look('perseguido', 'galpones', { extras: ['cap'] }), 'run');
    const cop1 = actorFor('agente-1', officerLook('agente-1'), 'run');
    const cop2 = actorFor('agente-2', officerLook('agente-2'), 'run');
    const dir = { x: Math.sin(stretch.heading), z: Math.cos(stretch.heading) };
    place(chased, stretch.from.x, stretch.from.z, stretch.heading);
    place(cop1, stretch.from.x - dir.x * 5, stretch.from.z - dir.z * 5, stretch.heading);
    place(cop2, stretch.from.x - dir.x * 7.5 + dir.z * 0.8, stretch.from.z - dir.z * 7.5 - dir.x * 0.8, stretch.heading);
    chased.mood = moodOr('terror', 'scared'); cop1.mood = 'angry'; cop1.shout = 'persecucion'; cop1.talk = true;
    let caught = false, caughtAt = 0;
    const wallSide = { x: Math.cos(stretch.heading), z: -Math.sin(stretch.heading) };
    const scene: Scene = {
      kind: 'persecucion', t: 0, life: 40, x: chased.x, z: chased.z, aux: false, actors: [chased, cop1, cop2],
      shouter: () => cop1,
      step(dt) {
        if (!caught) {
          const left = moveTo(chased, stretch.to.x, stretch.to.z, 4.8, dt);
          moveTo(cop1, chased.x - dir.x * 1.2, chased.z - dir.z * 1.2, 5.3, dt);
          moveTo(cop2, chased.x - dir.x * 2.6 + dir.z * 0.8, chased.z - dir.z * 2.6 - dir.x * 0.8, 5.2, dt);
          if (left < 0.2 || dist(cop1, chased) < 1.3) {
            caught = true; caughtAt = this.t;
            const toWall = free(chased.x + wallSide.x * 1.2, chased.z + wallSide.z * 1.2, 0.2) ? -1 : 1;
            chased.pose = poseOr('cuffed', 'stand'); chased.heading = Math.atan2(wallSide.x * -toWall, wallSide.z * -toWall); chased.speed = 0; chased.mood = 'sad';
            cop1.pose = poseOr('point', 'arms'); cop1.speed = 0; cop1.heading = faceTo(cop1, chased);
            cop2.pose = 'phone'; cop2.speed = 0; cop2.heading = faceTo(cop2, chased); cop2.mood = 'neutral';
            cop1.x = chased.x - dir.x * 1.1; cop1.z = chased.z - dir.z * 1.1;
            cop2.x = chased.x - dir.x * 1.6 + dir.z * 1.1; cop2.z = chased.z - dir.z * 1.6 - dir.x * 1.1;
            cop1.shout = 'policia';
          }
        }
        this.x = chased.x; this.z = chased.z;
        return caught ? this.t - caughtAt < 16 : this.t < this.life;
      },
      end() {},
    };
    return scene;
  };

  // Two people fighting on a square, a ring of onlookers filming.
  const pelea = (x: number, z: number): Scene | null => {
    const spot = squareSpot(x, z, random) ?? pointNear({ x, z }, 0, 8, random, (px, pz) => free(px, pz, 1.5));
    if (!spot || !free(spot.x, spot.z, 1.5)) return null;
    const a = actorFor('peleador-a', look('peleador-a', 'galpones', { extras: ['beard'] }), poseOr('fight', 'arms'));
    const b = actorFor('peleador-b', look('peleador-b', 'sur', { top: 'tshirt', topColor: '#c0342b' }), poseOr('fight', 'arms'));
    const angle = random() * TAU;
    const dx = Math.sin(angle) * 0.6, dz = Math.cos(angle) * 0.6;
    place(a, spot.x - dx, spot.z - dz, angle);
    place(b, spot.x + dx, spot.z + dz, angle + Math.PI);
    a.mood = moodOr('furious', 'angry'); b.mood = moodOr('furious', 'angry');
    const count = 3 + Math.floor(random() * 3);
    const ring: Actor[] = [];
    for (let i = 0; i < count; i++) {
      const o = actorFor(`mirón-${i}`, look(`mirón-${i}`, ['centro', 'sur', 'galpones', 'mercado', 'costa'][i]), i === 0 ? poseOr('scream', 'arms') : i % 2 ? 'phone' : 'arms');
      const t = angle + Math.PI / 2 + (i / count) * TAU;
      const p = freeOr(spot.x + Math.sin(t) * 3.4, spot.z + Math.cos(t) * 3.4, spot.x, spot.z);
      place(o, p.x, p.z, faceTo(p, spot));
      o.mood = i === 0 ? 'scared' : i % 2 ? 'surprised' : 'worried';
      ring.push(o);
    }
    ring[0].shout = 'pelea'; ring[0].talk = true;
    let fell = false;
    const scene: Scene = {
      kind: 'pelea', t: 0, life: 48, x: spot.x, z: spot.z, aux: false, actors: [a, b, ...ring],
      shouter: () => ring[0],
      step(dt) {
        if (!fell && this.t > 30) {
          fell = true;
          a.pose = poseOr('fallen', 'lie'); a.mood = 'pain'; a.speed = 0;
          b.pose = 'run'; b.mood = 'scared';
          ring[0].pose = 'phone'; ring[0].mood = 'worried';
          if (ring[1]) { ring[1].pose = 'crouch'; }
        }
        if (fell) {
          if (!b.hidden && moveTo(b, spot.x + Math.sin(angle) * 40, spot.z + Math.cos(angle) * 40, 5, dt) < 0.2) b.hidden = true;
          if (!free(b.x, b.z, 0.2)) b.hidden = true;
          if (ring[1] && ring[1].pose === 'crouch') moveTo(ring[1], a.x + Math.sin(angle + Math.PI / 2) * 0.9, a.z + Math.cos(angle + Math.PI / 2) * 0.9, 1.6, dt);
          if (ring[1] && ring[1].speed === 0) ring[1].heading = faceTo(ring[1], a);
        } else {
          // The fighters circle each other a little.
          const sway = Math.sin(this.t * 1.3) * 0.25;
          a.x = spot.x - dx + Math.cos(angle) * sway; a.z = spot.z - dz - Math.sin(angle) * sway;
          b.x = spot.x + dx - Math.cos(angle) * sway; b.z = spot.z + dz + Math.sin(angle) * sway;
          a.heading = faceTo(a, b); b.heading = faceTo(b, a);
        }
        return this.t < this.life;
      },
      end() {},
    };
    return scene;
  };

  // Someone fallen on the pavement, a bystander calling, the ambulance.
  const caido = (x: number, z: number): Scene | null => {
    const spot = pavementSpot(x, z, random);
    if (!spot || !free(spot.x, spot.z, 0.4)) return null;
    const hurt = random() < 0.5;
    const fallen = actorFor('caido', look('caido', 'estacion', { extras: [hurt ? 'blood-head' : 'blood-shirt'] }), poseOr(hurt ? 'injured' : 'fallen', 'lie'));
    const helper = actorFor('auxilio', look('auxilio', 'centro'), 'crouch');
    place(fallen, spot.x, spot.z, spot.heading + (random() - 0.5));
    const beside = freeOr(spot.x + spot.side.x * 0.9, spot.z + spot.side.z * 0.9, spot.x, spot.z);
    place(helper, beside.x, beside.z, faceTo(beside, spot));
    fallen.mood = 'pain'; helper.mood = 'worried'; helper.shout = 'caido'; helper.talk = true;
    const medics = [actorFor('medico-1', medicLook('medico-1'), 'walk'), actorFor('medico-2', medicLook('medico-2'), 'walk')];
    for (const m of medics) { m.hidden = true; place(m, spot.x, spot.z, 0); }
    let run: Run | null = null, phase: 'calling' | 'coming' | 'treating' | 'leaving' = 'calling', phaseAt = 0;
    const scene: Scene = {
      kind: 'caido', t: 0, life: 70, x: spot.x, z: spot.z, aux: false, actors: [fallen, helper, ...medics],
      shouter: () => (phase === 'calling' || phase === 'coming' ? helper : null),
      step(dt) {
        if (phase === 'calling' && this.t > 3) { run = startRun(ambulance, spot.x, spot.z, 30); phase = run ? 'coming' : 'calling'; if (!run && this.t > 20) return false; }
        if (phase === 'coming' && run && run.stopped) {
          phase = 'treating'; phaseAt = this.t;
          medics.forEach((m, i) => { const p = besideRun(run!, spot, i * 1.2); m.hidden = false; place(m, p.x, p.z, faceTo(p, spot)); });
          helper.pose = 'arms'; helper.shout = null; helper.talk = false;
          const away = { x: spot.x + spot.side.x * 2.2, z: spot.z + spot.side.z * 2.2 };
          const p = freeOr(away.x, away.z, spot.x, spot.z);
          helper.x = p.x; helper.z = p.z; helper.heading = faceTo(p, spot);
        }
        if (phase === 'treating') {
          medics.forEach((m, i) => {
            const side = i === 0 ? 1 : -1;
            const goal = { x: spot.x - spot.side.x * side * 0.85, z: spot.z - spot.side.z * side * 0.85 };
            const left = m.pose === 'walk' ? moveTo(m, goal.x, goal.z, 2.2, dt) : 0;
            if (m.pose === 'walk' && left < 0.1) { m.pose = 'crouch'; m.speed = 0; m.heading = faceTo(m, spot); }
          });
          if (this.t - phaseAt > 14) {
            phase = 'leaving';
            fallen.hidden = true;
            for (const m of medics) m.pose = 'walk';
            if (run) run.wait = Math.min(run.wait, 6);
          }
        }
        if (phase === 'leaving') {
          medics.forEach((m, i) => { const p = run ? besideRun(run, spot, i * 1.2) : spot; if (!m.hidden && moveTo(m, p.x, p.z, 2.2, dt) < 0.1) m.hidden = true; });
          if (medics.every(m => m.hidden) && (!run || run.done || run.s > run.stopAt + 2)) return false;
        }
        return this.t < this.life;
      },
      end() { if (run) run.wait = 0; },
    };
    return scene;
  };

  // A parked car or a dumpster on fire; people watching from a distance.
  const flames: THREE.Sprite[] = [];
  const smokes: THREE.Sprite[] = [];
  const fire = new THREE.Group();
  fire.visible = false;
  {
    const material = new THREE.SpriteMaterial({ map: flameMap(), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.9, fog: false });
    for (let i = 0; i < 6; i++) { const s = new THREE.Sprite(material); flames.push(s); fire.add(s); }
    const smokeMaterial = new THREE.SpriteMaterial({ map: smokeMap(), transparent: true, depthWrite: false, opacity: 0.5 });
    for (let i = 0; i < 7; i++) { const s = new THREE.Sprite(smokeMaterial); s.userData.phase = i / 7; smokes.push(s); fire.add(s); }
  }
  const fireLight = new THREE.PointLight('#ff7a2a', 0, 16, 2);
  fire.add(fireLight);
  root.add(fire);
  const incendio = (x: number, z: number): Scene | null => {
    if (fire.visible) return null;
    const b = burnable(x, z, random);
    if (!b) return null;
    const front = b.kind === 'car' ? { x: Math.cos(b.heading) * 1.2, z: Math.sin(b.heading) * 1.2 } : { x: 0, z: 0 };
    const at = { x: b.x + front.x, z: b.z + front.z, y: b.kind === 'car' ? 1.1 : 1.4 };
    fire.position.set(at.x, at.y, at.z);
    fire.visible = true;
    fireLight.position.set(0, 1.4, 0);
    const ring: Actor[] = [];
    const count = 3;
    const base = random() * TAU;
    for (let i = 0; i < count; i++) {
      const o = actorFor(`curioso-${i}`, look(`curioso-${i}`, ['viejo', 'mercado', 'sur'][i]), i === 0 ? poseOr('scream', 'arms') : i === 1 ? 'phone' : 'arms');
      const t = base + (i / count) * TAU;
      let p = { x: at.x + Math.sin(t) * 7.5, z: at.z + Math.cos(t) * 7.5 };
      if (!free(p.x, p.z, 0.4)) p = freeOr(at.x + Math.sin(t + 1) * 7, at.z + Math.cos(t + 1) * 7, at.x, at.z);
      if (dist(p, at) < 4) { p = { x: at.x + Math.sin(t + 2) * 7.5, z: at.z + Math.cos(t + 2) * 7.5 }; }
      place(o, p.x, p.z, faceTo(p, at));
      o.mood = i === 0 ? 'scared' : i === 1 ? 'surprised' : 'worried';
      ring.push(o);
    }
    ring[0].shout = 'incendio'; ring[0].talk = true;
    const life = 55;
    const scene: Scene = {
      kind: 'incendio', t: 0, life, x: at.x, z: at.z, aux: false, actors: ring,
      shouter: () => ring[0],
      step(dt, ctx) {
        const time = ctx.clock;
        const fade = Math.min(1, (life - this.t) / 8);
        flames.forEach((s, i) => {
          const f = Math.sin(time * (9 + i * 1.7) + i * 2.1) * 0.5 + 0.5;
          const w = (0.9 + f * 0.5) * fade, h = (1.6 + f * 0.9 + Math.sin(time * 13 + i) * 0.25) * fade;
          s.scale.set(w, h, 1);
          s.position.set(Math.sin(i * 1.9) * 0.55 + Math.sin(time * 5 + i) * 0.08, h * 0.45 + 0.1, Math.cos(i * 1.9) * 0.4);
          (s.material as THREE.SpriteMaterial).opacity = 0.75 + f * 0.25;
        });
        smokes.forEach((s, i) => {
          const t = (time * 0.22 + (s.userData.phase as number)) % 1;
          s.position.set(Math.sin(time * 0.6 + i) * 0.6 * t, 1.2 + t * 6, Math.cos(time * 0.5 + i) * 0.5 * t);
          s.scale.setScalar((0.8 + t * 3.2) * fade);
        });
        (smokes[0].material as THREE.SpriteMaterial).opacity = 0.45 * fade;
        fireLight.intensity = (3.5 + Math.sin(time * 17) * 0.8 + Math.sin(time * 29) * 0.5) * fade;
        fire.visible = !ctx.room && dist(at, ctx.player) < EVENT_TIMING.hide;
        return this.t < life;
      },
      end() { fire.visible = false; fireLight.intensity = 0; },
    };
    return scene;
  };

  // The helicopter: arrives, circles the district with its searchlight, leaves.
  type Flight = { centre: { x: number; z: number }; t: number; life: number; phase: 'in' | 'orbit' | 'out'; angle: number; from: { x: number; z: number }; pos: THREE.Vector3; target: THREE.Vector3 };
  let flight: Flight | null = null;
  const helicopterLife = 25;
  const startFlight = (x: number, z: number, life: number) => {
    const centre = { x, z };
    if (flight) { flight.centre = centre; flight.life = Math.max(flight.life, flight.t + life); flight.phase = flight.phase === 'out' ? 'orbit' : flight.phase; return; }
    const a = random() * TAU;
    const from = { x: x + Math.sin(a) * 150, z: z + Math.cos(a) * 150 };
    flight = { centre, t: 0, life, phase: 'in', angle: a, from, pos: new THREE.Vector3(from.x, 34, from.z), target: new THREE.Vector3(x, 0, z) };
    heli.group.visible = true;
    heli.disc.visible = true;
  };
  const stepFlight = (dt: number, ctx: EventCtx) => {
    if (!flight) return;
    const f = flight;
    f.t += dt;
    const radius = 24, height = 30, speed = 13;
    const orbitPoint = (angle: number) => new THREE.Vector3(f.centre.x + Math.sin(angle) * radius, height, f.centre.z + Math.cos(angle) * radius);
    let goal: THREE.Vector3;
    if (f.phase === 'in') {
      goal = orbitPoint(f.angle);
      if (f.pos.distanceTo(goal) < 2) f.phase = 'orbit';
    } else if (f.phase === 'orbit') {
      f.angle += (speed / radius) * dt;
      goal = orbitPoint(f.angle);
      if (f.t > f.life) f.phase = 'out';
    } else {
      goal = new THREE.Vector3(f.from.x, 40, f.from.z);
      if (f.pos.distanceTo(goal) < 5 || f.t > f.life + 30) { flight = null; heli.group.visible = false; heli.disc.visible = false; return; }
    }
    const step = Math.min(f.pos.distanceTo(goal), (f.phase === 'orbit' ? speed : 26) * dt);
    const dir = goal.clone().sub(f.pos).normalize();
    f.pos.addScaledVector(dir, step);
    heli.group.position.copy(f.pos);
    const yaw = Math.atan2(dir.x, dir.z);
    heli.group.rotation.set(0, yaw - Math.PI / 2, 0);
    // Bank into the turn while circling.
    const bank = f.phase === 'orbit' ? 0.22 : 0.08;
    heli.group.rotateX(-bank);
    heli.group.rotateZ(-0.06);
    heli.rotor.rotation.y += dt * 28;
    heli.tailRotor.rotation.z += dt * 60;
    // The searchlight wanders around the centre.
    const wander = { x: f.centre.x + Math.sin(f.t * 0.37) * 14 + Math.sin(f.t * 1.1) * 3, z: f.centre.z + Math.cos(f.t * 0.29) * 14 + Math.cos(f.t * 0.9) * 3 };
    f.target.set(wander.x, 0.05, wander.z);
    heli.disc.position.copy(f.target).setY(0.08);
    const lampWorld = new THREE.Vector3();
    heli.cone.getWorldPosition(lampWorld);
    const length = lampWorld.distanceTo(f.target);
    heli.cone.scale.set(1, length, 1);
    // Point the cone (which hangs down -y) at the target, in the group's frame.
    const local = heli.group.worldToLocal(f.target.clone()).sub(heli.cone.position).normalize();
    heli.cone.quaternion.setFromUnitVectors(new THREE.Vector3(0, -1, 0), local);
    const blink = Math.sin(ctx.clock * 6) > 0.6;
    heli.red.emissiveIntensity = blink ? 5 : 0.4;
    heli.green.emissiveIntensity = blink ? 0.4 : 5;
    heli.white.emissiveIntensity = Math.sin(ctx.clock * 9) > 0.92 ? 8 : 0.2;
    const far = dist({ x: f.pos.x, z: f.pos.z }, ctx.player) > 200 || Boolean(ctx.room);
    heli.group.visible = !far;
    heli.disc.visible = !far;
  };
  const helicoptero = (x: number, z: number): Scene | null => {
    if (flight) return null;
    const centre = districtCentre(x, z);
    startFlight(centre.x, centre.z, 38);
    const scene: Scene = {
      kind: 'helicoptero', t: 0, life: 70, x: centre.x, z: centre.z, aux: false, actors: [],
      shouter: () => null,
      step() { return Boolean(flight) && this.t < this.life; },
      end() {},
    };
    return scene;
  };

  // A protest: people with signs and a banner walking slowly, a patrol behind.
  const banner = (() => {
    const map = canvas(512, 128, c => {
      c.fillStyle = '#f4efe2'; c.fillRect(0, 0, 512, 128);
      c.fillStyle = '#c0342b'; c.font = '900 64px "Arial Black", Impact, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
      c.fillText('LUZ PARA EL BARRIO', 256, 66, 490);
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 0.65), new THREE.MeshStandardMaterial({ map, roughness: 0.95, side: THREE.DoubleSide }));
    mesh.visible = false;
    root.add(mesh);
    return mesh;
  })();
  const protesta = (x: number, z: number): Scene | null => {
    let stretch = sidewalkStretch(x, z, 90, random);
    if (!stretch || stretch.length < 40) stretch = sidewalkStretch(x, z, 90, random);
    if (!stretch || stretch.length < 30) return null;
    const count = 8 + Math.floor(random() * 5);
    const dir = { x: Math.sin(stretch.heading), z: Math.cos(stretch.heading) };
    const side = { x: Math.cos(stretch.heading), z: -Math.sin(stretch.heading) };
    const column: Actor[] = [];
    for (let i = 0; i < count; i++) {
      const pose = i < 2 ? 'stand' : i % 3 === 2 ? 'arms' : poseOr('sign', 'wave');
      const o = actorFor(`manifestante-${i}`, look(`manifestante-${i}`, ['sur', 'centro', 'estacion', 'mercado'][i % 4]), pose);
      const row = Math.floor(i / 2), col = i % 2 ? 1 : -1;
      const p = { x: stretch.from.x - dir.x * row * 1.25 + side.x * col * 0.7, z: stretch.from.z - dir.z * row * 1.25 + side.z * col * 0.7 };
      place(o, p.x, p.z, stretch.heading);
      o.mood = i % 2 ? 'angry' : 'neutral';
      column.push(o);
    }
    column[0].shout = 'protesta'; column[0].talk = true;
    const useCar = !busy(police);
    let patrol: Run | null = null;
    let progress = 0;
    const scene: Scene = {
      kind: 'protesta', t: 0, life: 60, x: stretch.from.x, z: stretch.from.z, aux: false, actors: column,
      shouter: () => column[0],
      step(dt, ctx) {
        // They walk, stop to chant, walk again.
        const walking = (this.t % 9) > 3;
        const speed = walking ? 0.75 : 0;
        progress = Math.min(stretch.length, progress + speed * dt);
        column.forEach((o, i) => {
          const row = Math.floor(i / 2), col = i % 2 ? 1 : -1;
          o.x = stretch.from.x + dir.x * (progress - row * 1.25) + side.x * col * 0.7;
          o.z = stretch.from.z + dir.z * (progress - row * 1.25) + side.z * col * 0.7;
          o.heading = stretch.heading;
          // The front two carry the banner; the rest keep their signs up.
          o.speed = walking && o.pose !== 'sign' ? speed : 0;
          if (i < 2) o.pose = walking ? 'walk' : poseOr('scream', 'arms');
          o.talk = !walking;
        });
        banner.visible = !ctx.room && dist(column[0], ctx.player) < EVENT_TIMING.hide;
        banner.position.set((column[0].x + column[1].x) / 2, 1.35, (column[0].z + column[1].z) / 2);
        banner.rotation.y = stretch.heading;
        if (useCar && !patrol && this.t > 2) {
          const route = emergencyRoute(column[column.length - 1].x, column[column.length - 1].z);
          if (route) patrol = startRun(police, column[column.length - 1].x, column[column.length - 1].z, this.life);
        }
        if (patrol && patrol.stopped) {
          // Creep along behind the column.
          patrol.s = Math.min(patrol.length - 0.1, patrol.stopAt + progress * 0.9);
        }
        this.x = column[0].x; this.z = column[0].z;
        return this.t < this.life && progress < stretch.length - 0.1;
      },
      end() { banner.visible = false; if (patrol) patrol.wait = 0; },
    };
    return scene;
  };

  // Two cars nose to tail with the hazards on, the drivers arguing.
  const choque = (x: number, z: number): Scene | null => {
    if (crashCars[0].group.visible) return null;
    const spot = crashSpot(x, z, random);
    if (!spot) return null;
    const dir = { x: Math.cos(spot.heading), z: Math.sin(spot.heading) };
    const a = { x: spot.x + dir.x * 2.5, z: spot.z + dir.z * 2.5 };
    const b = { x: spot.x - dir.x * 2.5, z: spot.z - dir.z * 2.5 };
    if ((ctxCars ?? []).some(car => Math.hypot(car.x - spot.x, car.z - spot.z) < 10)) return null;
    placeVehicle(crashCars[0].group, a.x, a.z, spot.heading);
    placeVehicle(crashCars[1].group, b.x, b.z, spot.heading);
    crashCars[0].group.visible = crashCars[1].group.visible = true;
    setBox(crashBoxA, a.x, a.z, spot.heading);
    setBox(crashBoxB, b.x, b.z, spot.heading);
    // The drivers stand on the kerb side of the gap between the cars: the
    // side of the lane away from the middle of the road.
    const side = spot.axis === 'x' ? { x: 0, z: spot.side } : { x: spot.side, z: 0 };
    const d1 = actorFor('conductor-1', look('conductor-1', 'centro', { top: 'suit', topColor: '#2f2f3a' }), poseOr('point', 'arms'));
    const d2 = actorFor('conductor-2', look('conductor-2', 'alto'), 'arms');
    const mid = { x: spot.x + side.x * 1.7, z: spot.z + side.z * 1.7 };
    place(d1, mid.x + dir.x * 0.7, mid.z + dir.z * 0.7, 0);
    place(d2, mid.x - dir.x * 0.7, mid.z - dir.z * 0.7, 0);
    d1.heading = faceTo(d1, d2); d2.heading = faceTo(d2, d1);
    d1.mood = moodOr('furious', 'angry'); d2.mood = 'angry';
    d1.shout = 'choque'; d1.talk = true; d2.talk = true;
    const scene: Scene = {
      kind: 'choque', t: 0, life: 50, x: spot.x, z: spot.z, aux: false, actors: [d1, d2],
      shouter: () => (Math.floor(scene.t / 4.5) % 2 ? d2 : d1),
      step(dt, ctx) {
        const on = Math.sin(ctx.clock * 5.5) > 0;
        crashCars[0].hazard.emissiveIntensity = on ? 3.2 : 0.15;
        crashCars[1].hazard.emissiveIntensity = on ? 0.15 : 3.2;
        // They take turns pointing.
        const turn = Math.floor(this.t / 4.5) % 2;
        d1.pose = turn ? 'arms' : poseOr('point', 'arms');
        d2.pose = turn ? poseOr('point', 'arms') : 'arms';
        d1.talk = !turn; d2.talk = Boolean(turn);
        d1.shout = turn ? null : 'choque'; d2.shout = turn ? 'choque' : null;
        const far = ctx.room || dist(spot, ctx.player) > EVENT_TIMING.hide;
        crashCars[0].group.visible = crashCars[1].group.visible = !far;
        return this.t < this.life;
      },
      end() { crashCars[0].group.visible = crashCars[1].group.visible = false; clearBox(crashBoxA); clearBox(crashBoxB); },
    };
    return scene;
  };

  // A drunk staggering along the pavement, shouting at whoever passes.
  const borracho = (x: number, z: number): Scene | null => {
    const stretch = sidewalkStretch(x, z, 40, random);
    if (!stretch || !free(stretch.from.x, stretch.from.z, 0.3)) return null;
    const drunk = actorFor('borracho', look('borracho', 'viejo', { extras: ['beard'] }), 'walk');
    place(drunk, stretch.from.x, stretch.from.z, stretch.heading);
    drunk.mood = 'tipsy'; drunk.shout = 'borracho'; drunk.talk = true;
    const side = { x: Math.cos(stretch.heading), z: -Math.sin(stretch.heading) };
    let along = 0, dir = 1;
    const scene: Scene = {
      kind: 'borracho', t: 0, life: 45, x: drunk.x, z: drunk.z, aux: false, actors: [drunk],
      shouter: () => drunk,
      step(dt) {
        const pause = (this.t % 7) < 1.6;
        const speed = pause ? 0 : 0.8;
        along += dir * speed * dt;
        if (along > stretch.length) { along = stretch.length; dir = -1; }
        if (along < 0) { along = 0; dir = 1; }
        const wobble = Math.sin(this.t * 1.7) * 0.5;
        const px = stretch.from.x + Math.sin(stretch.heading) * along + side.x * wobble;
        const pz = stretch.from.z + Math.cos(stretch.heading) * along + side.z * wobble;
        const prev = { x: drunk.x, z: drunk.z };
        drunk.x = px; drunk.z = pz;
        drunk.speed = speed;
        drunk.pose = pause ? 'wave' : 'walk';
        if (speed > 0 && dist(prev, drunk) > 1e-3) drunk.heading = faceTo(prev, drunk) + Math.sin(this.t * 2.3) * 0.25;
        this.x = drunk.x; this.z = drunk.z;
        return this.t < this.life;
      },
      end() {},
    };
    return scene;
  };

  // The patrol a scene or an event calls: it arrives, brakes, two officers
  // step out and keep people back for a while, then it leaves.
  const callPolice = (x: number, z: number) => {
    if (busy(police) || scenes.some(s => s.kind === 'policia')) return false;
    const run = startRun(police, x, z, 26);
    if (!run) return false;
    const cops = [actorFor('patrulla-1', officerLook('patrulla-1'), 'walk'), actorFor('patrulla-2', officerLook('patrulla-2'), 'walk')];
    for (const c of cops) { c.hidden = true; place(c, x, z, 0); }
    let phase: 'coming' | 'out' | 'standing' | 'back' = 'coming', at = 0;
    const scene: Scene = {
      kind: 'policia', t: 0, life: 80, x, z, aux: true, actors: cops,
      shouter: () => (phase === 'standing' ? cops[1] : null),
      step(dt) {
        if (phase === 'coming' && run.stopped) {
          phase = 'out'; at = this.t;
          cops.forEach((c, i) => { const p = besideRun(run, { x, z }, i * 1.4); c.hidden = false; place(c, p.x, p.z, faceTo(p, { x, z })); });
        }
        if (phase === 'out') {
          let arrived = 0;
          cops.forEach((c, i) => {
            const p = besideRun(run, { x, z }, i * 1.4);
            const toward = { x: p.x + (x - p.x) * 0.5, z: p.z + (z - p.z) * 0.5 };
            const goal = freeOr(toward.x, toward.z, p.x, p.z);
            if (moveTo(c, goal.x, goal.z, 2.4, dt) < 0.1) arrived++;
          });
          if (arrived === 2 || this.t - at > 6) {
            phase = 'standing'; at = this.t;
            cops[0].pose = poseOr('point', 'arms'); cops[0].heading = faceTo(cops[0], { x, z }); cops[0].speed = 0;
            cops[1].pose = 'arms'; cops[1].speed = 0; cops[1].heading = radians(faceTo(cops[1], { x, z }) + Math.PI); cops[1].shout = 'policia'; cops[1].talk = true;
          }
        }
        if (phase === 'standing' && this.t - at > 20) { phase = 'back'; for (const c of cops) { c.pose = 'walk'; c.shout = null; c.talk = false; } run.wait = Math.min(run.wait, 5); }
        if (phase === 'back') {
          cops.forEach((c, i) => { const p = besideRun(run, { x, z }, i * 1.4); if (!c.hidden && moveTo(c, p.x, p.z, 2.4, dt) < 0.1) c.hidden = true; });
          if (cops.every(c => c.hidden)) return false;
        }
        return !run.done && this.t < this.life;
      },
      end() { run.wait = 0; },
    };
    scenes.push(scene);
    return true;
  };

  const builders: Record<EventKind, (x: number, z: number) => Scene | null> = { ladron, persecucion, pelea, caido, incendio, helicoptero, protesta, choque, borracho };

  // -------------------------------------------------------------- spawning
  let nextSpawn = 12 + random() * 10;
  let ctxCars: { x: number; z: number }[] | undefined;
  const trigger = (kind: EventKind, x: number, z: number) => {
    if (active().some(s => s.kind === kind)) return false;
    const scene = builders[kind]?.(x, z) ?? null;
    if (!scene) return false;
    scenes.push(scene);
    return true;
  };
  const spawn = (ctx: EventCtx) => {
    const here = districtAt(ctx.player.x, ctx.player.z);
    const kind = pickEventKind(here, active().map(s => s.kind), random);
    if (!kind) return false;
    const point = pointNear(ctx.player, EVENT_TIMING.near, EVENT_TIMING.far, random, (x, z) => free(x, z, 1));
    if (!point) return false;
    const scene = builders[kind](point.x, point.z);
    if (!scene) return false;
    const d = dist(scene, ctx.player);
    if (d < EVENT_TIMING.near * 0.6 || d > EVENT_TIMING.far + 10) { finish(scene); return false; }
    scenes.push(scene);
    return true;
  };

  // -------------------------------------------------------------- per frame
  let lastLevel = 'B1';
  function update(dt: number, ctx: EventCtx) {
    dt = Math.min(dt, 0.1);
    ctxCars = ctx.cars;
    lastLevel = ctx.level;
    const { player } = ctx;
    if (ctx.walking && !ctx.room) {
      nextSpawn -= dt;
      if (nextSpawn <= 0) {
        const ok = active().length < EVENT_TIMING.maxActive && spawn(ctx);
        nextSpawn = ok ? EVENT_TIMING.everyMin + random() * (EVENT_TIMING.everyMax - EVENT_TIMING.everyMin) : 5;
      }
    }
    for (const s of scenes) s.t += dt;
    for (let i = scenes.length - 1; i >= 0; i--) {
      const s = scenes[i];
      if (!s.step(dt, ctx)) { finish(s); scenes.splice(i, 1); }
    }
    stepRuns(dt, ctx);
    stepFlight(dt, ctx);

    // Who gets a full body: the nearest ones; then a baked one; then nothing.
    const scored: { actor: Actor; d: number }[] = [];
    for (const actor of actors) {
      if (!actor.used || actor.hidden || ctx.room) { actor.group.visible = false; continue; }
      const d = dist(actor, player);
      if (d > EVENT_TIMING.hide) { actor.group.visible = false; continue; }
      scored.push({ actor, d });
    }
    scored.sort((a, b) => a.d - b.d);
    let rigs = 0, built = 0;
    for (const { actor, d } of scored) {
      actor.group.visible = true;
      actor.group.position.set(actor.x, actor.y, actor.z);
      actor.group.rotation.y = actor.heading;
      const near = d < NEAR_RIG && rigs < maxRigs && (actor.rig || built < 2);
      if (near) {
        rigs++;
        if (!actor.rig) built++;
        const rig = ensureRig(actor);
        rig.root.visible = true;
        if (actor.far) actor.far.visible = false;
        setMood(rig, moodOr(actor.mood, 'neutral'));
        setPose(rig, actor.pose);
        rig.look = actor.speed < 0.1 && d < 7 && !actor.talk ? Math.max(-1.1, Math.min(1.1, radians(faceTo(actor, player) - actor.heading))) : null;
        animatePerson(rig, dt, actor.speed, actor.talk);
      } else {
        if (!actor.far || actor.farPose !== actor.pose) { if (built >= 2 && !actor.far) { actor.group.visible = false; continue; } built++; }
        const far = ensureFar(actor);
        far.visible = true;
        if (actor.rig) actor.rig.root.visible = false;
        far.position.y = actor.speed > 0.1 && !ctx.reduced ? Math.abs(Math.sin(ctx.clock * actor.speed * 3.2 + hash(actor.id) % 7)) * 0.04 : 0;
      }
    }
  }

  // The nearest shouting person within ~14 m, with a line for the level band.
  const shoutNear = (player: { x: number; z: number }, level: string, time: number): Shout | null => {
    let best: Shout | null = null, bestD = 14;
    for (const s of scenes) {
      const who = s.shouter();
      if (!who || who.hidden || !who.shout || !who.group.visible) continue;
      const d = dist(who, player);
      if (d >= bestD) continue;
      const text = shoutLine(who.shout as EventKind | 'policia', level, time + hash(s.kind) % 5);
      if (!text) continue;
      bestD = d;
      best = { x: who.x, y: who.y + (who.pose === 'crouch' ? 1.4 : 2.1), z: who.z, text, kind: s.kind };
    }
    return best;
  };

  function fly(kind: 'helicopter', x: number, z: number) {
    if (kind !== 'helicopter') return;
    startFlight(x, z, helicopterLife);
  }

  function stats() {
    let rigs = 0, far = 0;
    for (const actor of actors) {
      if (!actor.group.visible) continue;
      if (actor.rig?.root.visible) rigs++; else if (actor.far?.visible) far++;
    }
    return { active: active().length, scenes: scenes.length, rigs, far, kinds: scenes.map(s => s.kind) };
  }

  // Where the emergency vehicles are, for the traffic to wait behind.
  function blockers() {
    return runs.filter(run => !run.done).map(run => ({ x: run.at.x, z: run.at.z, axis: (Math.abs(run.at.dx) > 0.5 ? 'x' : 'z') as 'x' | 'z', lane: Math.abs(run.at.dx) > 0.5 ? run.at.z : run.at.x }));
  }

  function dispose() {
    for (const s of scenes) finish(s);
    scenes.length = 0;
    for (const actor of actors) actor.far?.geometry.dispose();
    for (const run of runs) run.vehicle.group.visible = false;
    runs.length = 0;
    flight = null;
    root.removeFromParent();
    for (const b of movingBoxes) clearBox(b);
  }

  let playerRef = { x: 0, z: 0 }, clockRef = 0;
  return {
    root, movingBoxes,
    update(dt: number, ctx: EventCtx) { playerRef = ctx.player; clockRef = ctx.clock; update(dt, ctx); },
    shout: () => shoutNear(playerRef, lastLevel, clockRef),
    stats, fly, callPolice, trigger, blockers, dispose,
    active: () => scenes.map(s => ({ kind: s.kind, x: s.x, z: s.z, t: s.t })),
  };
}

export type StreetEvents = ReturnType<typeof createStreetEvents>;
