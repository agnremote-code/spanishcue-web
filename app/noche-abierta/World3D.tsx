'use client';

// The walkable 3D neighbourhood. Raw three.js in a client component that the
// lesson loads on demand; the lesson state stays in NocheAbierta and this
// component only turns it into a place: run up to something, press E, and
// the activity opens where it happens. The museum and the bar are rooms you
// walk around in; the plaza is full of people you can talk to.
import * as THREE from 'three';
import { useCallback, useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent, type PointerEvent as ReactPointerEvent } from 'react';
import { LOCATIONS, type Phase, type WorldOutcome } from './engine.mjs';
import {
  BUILDINGS, CAMERA_PRESETS, NPCS, PARK_LANE, PLAZA, ROOM_PRESET, SPAWN, STAGES, TARGETS, TRAFFIC, TRAFFIC_LANE, VEHICLE_SIZE, WORLD_BOUNDS,
  angleBetween, canUseKeys, colliders, exitSpot, followCamera, followYaw, inputFrom, keyAction, nearestTarget, roomLayout,
  stepPlayer, stepTraffic, streetFraming, toMinimap,
  type Box, type Hotspot, type MovingCar, type RoomExit, type RoomLayout, type Target,
} from './world3d.mjs';
import { buildCity, buildInterior, makeCar, placePerson, placeVehicle, type City, type Interior } from './build3d';
import { animatePerson } from './people3d';
import { animateHero, createHero } from './hero3d';

export type WorldProps = {
  phase: Phase;
  outcome: WorldOutcome | null;
  onTransition: (busy: boolean) => void;
  active: string | null;
  activity: string | null;
  played: string[];
  last: string | null;
  done: string[];
  event: string | null;
  goTo: { id: string; n: number } | null;
  narrow: boolean;
  reducedMotion: boolean;
  panel: boolean;
  onInteract: (location: string, activity?: string) => void;
  onOpenActivity: (activity: string) => void;
  onLeave: () => void;
  onFail: () => void;
};

type Mode = 'intro' | 'walk' | 'room' | 'scene' | 'event' | 'final' | 'busy';
type Spot = Target | Hotspot | RoomExit;
type Prompt = { id: string; key: string; verb: string; name: string };

const names: Record<string, string> = Object.fromEntries(LOCATIONS.map(item => [item.id, item.name]));
const titles: Record<string, string> = Object.fromEntries(LOCATIONS.flatMap(item => item.activities.map(activity => [`${item.id}/${activity.id}`, activity.title])));
const HELP_LINES = ['WASD / FLECHAS · CORRER', 'SHIFT · MÁS RÁPIDO', 'ALT · CAMINAR', 'ESPACIO · SALTAR', 'E · INTERACTUAR', 'ARRASTRAR · GIRAR LA CÁMARA', 'V · CÁMARA', 'M · MAPA', 'ESC · SALIR'];
const CARD_WIDTH = 440;

const faceTo = (from: { x: number; z: number }, to: { x: number; z: number }) => Math.atan2(to.x - from.x, to.z - from.z);
const raw = (a: string, b: string, t: number, out: THREE.Color) => {
  out.setStyle(a, THREE.LinearSRGBColorSpace);
  return out.lerp(new THREE.Color().setStyle(b, THREE.LinearSRGBColorSpace), t);
};
const tint = (a: string, b: string, t: number, out: THREE.Color) => out.set(a).lerp(new THREE.Color(b), t);

function nightTarget(phase: Phase, done: number, event: boolean) {
  if (phase === 'cierre') return 1;
  if (phase === 'llegada') return 0.04;
  return Math.min(0.95, 0.12 + done * 0.12 + (event ? 0.15 : 0));
}

export default function World3D(props: WorldProps) {
  const live = useRef(props);
  useEffect(() => { live.current = props; });
  const container = useRef<HTMLDivElement>(null);
  const mount = useRef<HTMLDivElement>(null);
  const fader = useRef<HTMLDivElement>(null);
  const promptEl = useRef<HTMLButtonElement>(null);
  const minimap = useRef<HTMLCanvasElement>(null);
  const knob = useRef<HTMLSpanElement>(null);
  const api = useRef<{ interact: (key: 'E' | 'F') => void; cycleCamera: () => void; held: Set<string>; joy: { x: number; y: number } } | null>(null);
  const [journey, setJourney] = useState('');
  const [prompt, setPrompt] = useState<Prompt | null>(null);
  const [mapOpen, setMapOpen] = useState(!props.narrow);
  const [help, setHelp] = useState(false);
  const [mode, setMode] = useState<Mode>('intro');
  const mapRef = useRef(mapOpen);
  useEffect(() => { mapRef.current = mapOpen; }, [mapOpen]);

  // Show the controls briefly the first time the learner starts moving.
  const helpShown = useRef(false);
  useEffect(() => {
    if (mode !== 'walk' || helpShown.current) return;
    helpShown.current = true;
    // Showing the help is a reaction to the world entering walk mode.
    setHelp(true);
    const hide = window.setTimeout(() => setHelp(false), 6500);
    return () => window.clearTimeout(hide);
  }, [mode]);

  useEffect(() => {
    const host = mount.current;
    const box = container.current;
    if (!host || !box) return;
    const low = live.current.narrow || window.matchMedia('(pointer: coarse)').matches;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: !low, powerPreference: 'high-performance' });
    } catch {
      live.current.onFail();
      return;
    }
    let pixelRatio = Math.min(window.devicePixelRatio || 1, low ? 1.25 : 1.75);
    renderer.setPixelRatio(pixelRatio);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.shadowMap.enabled = !low;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    host.appendChild(renderer.domElement);
    const lostContext = (event: Event) => { event.preventDefault(); live.current.onFail(); };
    renderer.domElement.addEventListener('webglcontextlost', lostContext);

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog('#9a7f86', 45, 170);
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 900);

    // Sky: a gradient dome with a glow where the sun went down, and stars later.
    const sky = new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false,
      uniforms: { top: { value: new THREE.Color() }, horizon: { value: new THREE.Color() }, glow: { value: new THREE.Color() }, sunDir: { value: new THREE.Vector3(-1, 0.1, -0.3).normalize() } },
      vertexShader: 'varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
      fragmentShader: 'uniform vec3 top; uniform vec3 horizon; uniform vec3 glow; uniform vec3 sunDir; varying vec3 vDir; void main(){ float h = clamp(vDir.y, -0.2, 1.0); vec3 c = mix(horizon, top, smoothstep(0.0, 0.5, h)); float s = max(dot(normalize(vDir), sunDir), 0.0); c += glow * pow(s, 5.0) * (1.0 - smoothstep(0.0, 0.45, h)); gl_FragColor = vec4(c, 1.0); }',
    });
    const dome = new THREE.Mesh(new THREE.SphereGeometry(500, 32, 16), sky);
    dome.renderOrder = -1;
    scene.add(dome);
    const dotPositions: number[] = [];
    for (let i = 0; i < 420; i++) {
      const a = Math.random() * Math.PI * 2, y = 0.15 + Math.random() * 0.85;
      const r = Math.sqrt(1 - y * y);
      dotPositions.push(Math.cos(a) * r * 480, y * 480, Math.sin(a) * r * 480);
    }
    const dotGeometry = new THREE.BufferGeometry();
    dotGeometry.setAttribute('position', new THREE.Float32BufferAttribute(dotPositions, 3));
    const dotMaterial = new THREE.PointsMaterial({ color: '#f4efe0', size: 1.6, sizeAttenuation: false, transparent: true, opacity: 0, fog: false, depthWrite: false });
    dome.add(new THREE.Points(dotGeometry, dotMaterial));

    const hemi = new THREE.HemisphereLight('#b8c6e0', '#5a4636', 0.9);
    scene.add(hemi);
    const sun = new THREE.DirectionalLight('#ffb27a', 2.2);
    sun.castShadow = !low;
    sun.shadow.mapSize.set(2048, 2048);
    Object.assign(sun.shadow.camera, { left: -26, right: 26, top: 26, bottom: -26, near: 1, far: 200 });
    sun.shadow.bias = -0.0004;
    sun.shadow.normalBias = 0.03;
    scene.add(sun, sun.target);
    const indoorLights = [new THREE.PointLight('#ffc27a', 0, 16, 1.4), new THREE.PointLight('#ffc27a', 0, 12, 1.6)];
    scene.add(...indoorLights);

    const city: City = buildCity({ shadows: !low, crowd: !low });
    scene.add(city.root);
    const interiors = new Map<string, Interior>();
    const rings = new Map<string, Map<string, THREE.Mesh>>();
    const ringGeometry = new THREE.RingGeometry(0.5, 0.64, 32);

    const hero = createHero(!low);
    scene.add(hero.root);
    const boxes: Box[] = colliders();
    const taxiBox = boxes.find(item => item.vehicle === 'taxi')!;
    const taxiRig = city.cars.get('taxi')!;
    const taxi = { x: taxiRig.group.position.x, z: taxiRig.group.position.z, heading: Math.PI, goal: null as null | { x: number; z: number; heading: number } };
    const targetById = new Map(TARGETS.map(item => [item.id, item]));

    // Moving traffic on the avenue. Each car is also a moving obstacle.
    let traffic: MovingCar[] = TRAFFIC.map(car => ({ id: car.id, lane: car.lane, dir: car.dir, x: car.start, speed: car.speed, cruise: car.speed }));
    const trafficRigs = TRAFFIC.map(car => {
      const rig = makeCar(car.kind, car.color, city.night);
      scene.add(rig.group);
      return rig;
    });
    const trafficBoxes: Box[] = TRAFFIC.map(() => ({ x0: 0, x1: 0, z0: 0, z1: 0, vehicle: 'trafico', top: 1.6 }));
    boxes.push(...trafficBoxes);

    // Rain for the rainy-night event.
    const DROPS = low ? 500 : 1400;
    const rainPositions = new Float32Array(DROPS * 6);
    for (let i = 0; i < DROPS; i++) {
      const x = (Math.random() - 0.5) * 50, y = Math.random() * 22, z = (Math.random() - 0.5) * 50;
      rainPositions.set([x, y, z, x + 0.05, y + 0.55, z + 0.02], i * 6);
    }
    const rainGeometry = new THREE.BufferGeometry();
    rainGeometry.setAttribute('position', new THREE.BufferAttribute(rainPositions, 3));
    const rainMaterial = new THREE.LineBasicMaterial({ color: '#b9c9d8', transparent: true, opacity: 0 });
    const rain = new THREE.LineSegments(rainGeometry, rainMaterial);
    rain.frustumCulled = false;
    scene.add(rain);

    const sim = {
      player: { x: SPAWN.x, z: SPAWN.z, heading: SPAWN.heading, speed: 0, y: 0, vy: 0, jumpHeld: false, moving: false },
      y: 0,
      turn: 0,
      mode: 'intro' as Mode,
      held: new Set<string>(),
      joy: { x: 0, y: 0 },
      preset: 1,
      yaw: SPAWN.heading,
      dragging: false,
      dragX: 0,
      dragAt: -10,
      shot: { pos: new THREE.Vector3(), look: new THREE.Vector3() },
      camLook: new THREE.Vector3(),
      snap: true,
      night: nightTarget(live.current.phase, live.current.done.length, Boolean(live.current.event)),
      painted: { night: -1, event: '' as string | null, indoor: '' as string | null },
      scene: null as Target | null,
      room: null as RoomLayout | null,
      focus: null as Hotspot | null,
      indoor: null as string | null,
      riding: false,
      target: null as Spot | null,
      promptId: '',
      seen: { outcome: '' as string, active: null as string | null, activity: null as string | null, goTo: live.current.goTo?.n ?? 0, phase: '' as string },
      clock: 0,
      frames: 0,
      fpsAt: 0,
      fps: 60,
      slow: 0,
      mapAt: 0,
      offset: 0,
      offsetY: 0,
    };
    // Start where the learner last was, or at the bus stop.
    const lastTarget = live.current.last ? TARGETS.find(t => t.location === live.current.last) : null;
    if (lastTarget && live.current.phase !== 'llegada') Object.assign(sim.player, exitSpot(lastTarget));
    sim.yaw = sim.player.heading;
    placePerson(hero, sim.player.x, sim.player.z, sim.player.heading);

    let disposed = false;
    const setModeBoth = (next: Mode) => {
      if (disposed) return;
      sim.mode = next; box.dataset.mode = next; setMode(next);
      live.current.onTransition(next === 'busy');
      if (next === 'busy') { sim.held.clear(); sim.joy.x = sim.joy.y = 0; sim.target = null; }
      else setJourney('');
    };
    const reduced = () => live.current.reducedMotion;
    const wait = (ms: number) => new Promise<void>((resolve, reject) => window.setTimeout(() => disposed ? reject(new Error('World disposed')) : resolve(), reduced() ? 0 : ms));
    const animate = async (ms: number, update: (t: number) => void) => {
      if (reduced()) { update(1); return; }
      const start = performance.now();
      let t = 0;
      while (t < 1) { await wait(16); t = Math.min(1, (performance.now() - start) / ms); update(t); }
    };
    const walkSegment = async (x: number, z: number) => {
      const from = { ...sim.player };
      const distance = Math.hypot(x - from.x, z - from.z);
      const heading = faceTo(from, { x, z });
      await animate(Math.max(300, distance / 3.4 * 1000), t => {
        placePlayer(from.x + (x - from.x) * t, from.z + (z - from.z) * t, heading, sim.y);
        sim.player.speed = reduced() ? 0 : 3.4;
        followShot();
      });
      sim.player.speed = 0;
    };
    const fade = async (to: number, ms: number) => {
      const el = fader.current;
      if (!el) return;
      el.style.transition = reduced() ? 'none' : `opacity ${ms}ms ease`;
      el.style.opacity = String(to);
      await wait(ms);
    };
    let chain = Promise.resolve();
    const queue = (task: () => Promise<void>) => { chain = chain.then(() => disposed ? undefined : task()).catch(() => { if (!disposed) live.current.onFail(); }); };

    const targetFor = (location: string, activity?: string | null): Target | null => {
      const base = (activity && TARGETS.find(item => item.location === location && item.activity === activity)) || TARGETS.find(item => item.location === location);
      if (!base) return null;
      if (base.id !== 'taxi') return base;
      return { ...base, x: taxi.x, z: taxi.z < 0 ? -4.6 : 4.6 };
    };
    const liveTargets = (): Spot[] => TARGETS.map(item => (item.id === 'taxi' ? targetFor('taxi')! : item));
    const roomSpots = (): Spot[] => (sim.room ? [...sim.room.hotspots, sim.room.exit] : []);

    const placePlayer = (x: number, z: number, heading: number, y = 0) => {
      Object.assign(sim.player, { x, z, heading, speed: 0, y: 0, vy: 0, jumpHeld: false, moving: false });
      sim.y = y;
      placePerson(hero, x, z, heading, y);
    };
    const setShot = (px: number, py: number, pz: number, lx: number, ly: number, lz: number, snap = false) => {
      sim.shot.pos.set(px, py, pz);
      sim.shot.look.set(lx, ly, lz);
      if (snap) sim.snap = true;
    };
    const followShot = (snap = false) => {
      const f = followCamera(sim.player, sim.room ? ROOM_PRESET : CAMERA_PRESETS[sim.preset], sim.yaw, sim.room?.bounds ?? null);
      setShot(f.x, f.y + sim.y + (sim.player.y || 0), f.z, f.look.x, f.look.y + sim.y + (sim.player.y || 0), f.look.z, snap);
    };
    const showIndoor = (stage: string | null) => {
      sim.indoor = stage;
      for (const [id, interior] of interiors) interior.group.visible = id === stage;
      city.root.visible = !stage;
      for (const rig of trafficRigs) rig.group.visible = !stage;
      const interior = stage ? interiors.get(stage) : null;
      // One lamp from the room, one soft fill from the camera side so faces read.
      const [lamp, fill] = indoorLights;
      const spot = interior?.lamp.spots[0];
      lamp.intensity = spot ? (sim.room ? 9 : 6) : 0;
      fill.intensity = stage ? 3.5 : 0;
      if (spot) { lamp.position.copy(spot).setY(Math.min(spot.y, sim.room ? 3.4 : 2.3)); lamp.color.set(interior!.lamp.color); }
      const view = stage ? STAGES[stage]?.camera : null;
      if (view) { fill.position.set(view.x, 2.3, view.z - 1); fill.color.set('#ffe8cc'); }
    };
    const npcFacing = (id: string | undefined, heading: number | null) => {
      for (const rig of city.npcs.values()) {
        if (rig.data.id !== id) continue;
        rig.heading = heading ?? rig.data.facing;
        rig.person.root.rotation.y = rig.heading;
      }
    };
    const ensureInterior = (stage: string) => {
      if (interiors.has(stage)) return;
      const interior = buildInterior(stage, !low);
      if (!interior) return;
      interiors.set(stage, interior);
      scene.add(interior.group);
      const layout = roomLayout(stage);
      if (!layout) return;
      // Soft rings on the floor where something can be done.
      const set = new Map<string, THREE.Mesh>();
      for (const spot of [...layout.hotspots, layout.exit]) {
        const ring = new THREE.Mesh(ringGeometry, new THREE.MeshBasicMaterial({ color: spot === layout.exit ? '#8fd6a2' : '#ffc46b', transparent: true, opacity: 0.4, depthWrite: false, blending: THREE.AdditiveBlending }));
        ring.rotation.x = -Math.PI / 2;
        ring.position.set(spot.x, 0.04, spot.z);
        interior.group.add(ring);
        set.set(spot.id, ring);
      }
      rings.set(stage, set);
    };

    // Run to a place: used by the places list; the learner still presses E.
    const teleport = (location: string) => queue(async () => {
      const target = targetFor(location);
      if (!target || sim.mode !== 'walk') return;
      setModeBoth('busy');
      await fade(1, 240);
      const spot = { x: target.x, z: target.z };
      const npc = target.npc ? NPCS.find(item => item.id === target.npc) : null;
      const door = BUILDINGS.find(b => b.location === target.location && b.door);
      const heading = npc ? faceTo(spot, npc) : door ? (door.door!.side === 'south' ? Math.PI : 0) : target.id === 'taxi' ? faceTo(spot, taxi) : Math.PI;
      placePlayer(spot.x, spot.z, heading);
      sim.yaw = heading;
      followShot(true);
      await fade(0, 320);
      setModeBoth('walk');
    });

    const enter = async (location: string, activity: string | null) => {
      const target = targetFor(location, activity);
      if (!target) return;
      setModeBoth('busy');
      sim.scene = target;
      setJourney(target.stage === 'terraza' ? 'Entrada al edificio → ascensor → terraza' : `Entrando · ${names[location]}`);
      const layout = roomLayout(target.stage);
      const stage = STAGES[target.stage];
      if (layout) {
        // A room you walk around in: through the door, then free to move.
        setShot(target.x + 1, 2.2, target.z + (target.z < 0 ? 2.4 : -2.4), target.x, 1.7, target.z + (target.z < 0 ? -1.2 : 1.2));
        await wait(320);
        await fade(1, 260);
        ensureInterior(target.stage);
        sim.room = layout;
        showIndoor(target.stage);
        placePlayer(layout.spawn.x, layout.spawn.z, layout.spawn.heading);
        sim.yaw = layout.spawn.heading;
        followShot(true);
        await fade(0, 380);
        box.dataset.location = location; box.dataset.stage = target.stage;
        setModeBoth('room');
        if (live.current.activity) focusHotspot(live.current.activity);
        return;
      }
      if (stage) {
        // Camera moves in toward the door, the screen fades, the room appears.
        setShot(target.x + 1.2, 2.2, target.z + (target.z < 0 ? 2.4 : -2.4), target.x, 1.7, target.z + (target.z < 0 ? -1.2 : 1.2));
        const door = BUILDINGS.find(b => b.location === location && b.door);
        if (door) {
          if (Math.hypot(sim.player.x - target.x, sim.player.z - target.z) > 4) {
            await fade(1, 180); placePlayer(target.x, target.z, door.door!.side === 'south' ? Math.PI : 0); await fade(0, 180);
          }
          await walkSegment(target.x, door.door!.side === 'south' ? door.z1 + 0.35 : door.z0 - 0.35);
        } else await wait(340);
        await fade(1, 260);
        if (stage.size) ensureInterior(target.stage);
        showIndoor(stage.size ? target.stage : null);
        placePlayer(stage.spot.x, stage.spot.z, stage.spot.heading, stage.roof ?? 0);
        setShot(stage.camera.x, stage.camera.y, stage.camera.z, stage.look.x, stage.look.y, stage.look.z, true);
        await fade(0, 400);
      } else if (target.stage === 'taxi') {
        await fade(1, 240);
        hero.seated = true;
        taxiRig.passenger.add(hero.root);
        hero.root.position.set(0, 0, 0);
        hero.root.rotation.y = Math.PI / 2;
        hero.root.scale.setScalar(0.92);
        sim.riding = true;
        taxi.goal = null;
        sim.snap = true;
        await fade(0, 340);
      } else {
        // In the street: face each other, the camera finds a two-shot.
        const spot = { x: sim.player.x, z: sim.player.z };
        if (Math.hypot(spot.x - target.x, spot.z - target.z) > target.radius + 0.5) { spot.x = target.x; spot.z = target.z; }
        const npc = target.npc ? NPCS.find(item => item.id === target.npc) : null;
        if (target.location === 'restaurante') {
          hero.seated = true;
          placePlayer(13.4, -4.72, Math.PI);
        } else {
          placePlayer(spot.x, spot.z, npc ? faceTo(spot, npc) : faceTo(spot, { x: target.x, z: target.z - 1.5 }));
        }
        if (npc) {
          // Everyone in the group turns toward the learner.
          for (const rig of city.npcs.values()) if (rig.data.activity && rig.data.activity === npc.activity && !rig.person.seated) npcFacing(rig.data.id, faceTo(rig, sim.player));
          if (!npc.activity) npcFacing(npc.id, faceTo(npc, sim.player));
        }
        const framing = streetFraming(target, sim.player);
        setShot(framing.camera.x, framing.camera.y, framing.camera.z, framing.look.x, framing.look.y, framing.look.z, reduced());
        await wait(260);
      }
      box.dataset.location = location;
      box.dataset.stage = target.stage;
      setModeBoth('scene');
    };

    const exit = async (location: string) => {
      const target = sim.scene ?? targetFor(location);
      sim.scene = null;
      if (!target) return;
      setModeBoth('busy');
      const stage = STAGES[target.stage];
      if (stage || target.stage === 'taxi') {
        await fade(1, 240);
        if (target.stage === 'taxi') {
          sim.riding = false;
          // Leaving early still means you got there: the taxi arrives under the fade.
          if (taxi.goal) { taxi.x = taxi.goal.x; taxi.goal = null; placeVehicle(taxiRig.group, taxi.x, taxi.z, taxi.heading); }
          taxiBox.x0 = taxi.x - VEHICLE_SIZE.length / 2; taxiBox.x1 = taxi.x + VEHICLE_SIZE.length / 2;
          taxiBox.z0 = taxi.z - VEHICLE_SIZE.width / 2; taxiBox.z1 = taxi.z + VEHICLE_SIZE.width / 2;
          hero.seated = false;
          hero.root.scale.setScalar(1);
          scene.add(hero.root);
          const side = taxi.z < 0 ? -4.9 : 4.9;
          placePlayer(taxi.x, side, taxi.z < 0 ? Math.PI : 0);
        } else {
          sim.room = null;
          sim.focus = null;
          showIndoor(null);
          const out = exitSpot(target);
          placePlayer(out.x, out.z, out.heading);
        }
        sim.yaw = sim.player.heading;
        followShot(true);
        await fade(0, 360);
      } else {
        hero.seated = false;
        if (target.location === 'restaurante') placePlayer(13.4, -3.9, 0);
        for (const rig of city.npcs.values()) npcFacing(rig.data.id, null);
        sim.yaw = sim.player.heading;
      }
      box.dataset.location = target.location;
      setModeBoth(phaseMode(live.current.phase));
    };

    // A decision is enacted before the consequence card appears. The same
    // hero is reparented out of the cab and then enters the chosen place.
    const enact = async (outcome: WorldOutcome) => {
      if (!sim.riding) { await exit(sim.scene?.location ?? 'taxi'); await enter('taxi', null); }
      setModeBoth('busy');
      setJourney(outcome.label);
      taxi.goal = null;
      if (outcome.travel === 'wait') { await wait(500); setModeBoth('scene'); return; }
      const drive = async (x: number, z: number) => {
        const from = { x: taxi.x, z: taxi.z };
        const distance = Math.hypot(x - from.x, z - from.z);
        if (distance < 0.05) return;
        const heading = Math.atan2(z - from.z, x - from.x);
        const before = taxi.heading;
        await animate(350, t => { taxi.heading = before + angleBetween(before, heading) * t; });
        await animate(Math.max(600, distance / 12 * 1000), t => {
          taxi.x = from.x + (x - from.x) * t; taxi.z = from.z + (z - from.z) * t;
        });
        placeVehicle(taxiRig.group, taxi.x, taxi.z, taxi.heading);
      };
      if (outcome.travel === 'turn') {
        const endX = taxi.x < 25 ? taxi.x + 12 : taxi.x - 12;
        const lane = endX > taxi.x ? TRAFFIC_LANE : -TRAFFIC_LANE;
        await drive(taxi.x, lane);
        await drive(endX, lane);
        await drive(endX, endX > 25 ? PARK_LANE : -PARK_LANE);
        const turnFrom = taxi.heading;
        const parkedHeading = lane > 0 ? 0 : Math.PI;
        await animate(350, t => { taxi.heading = turnFrom + angleBetween(turnFrom, parkedHeading) * t; });
        placeVehicle(taxiRig.group, taxi.x, taxi.z, taxi.heading);
        box.dataset.location = 'taxi'; setModeBoth('scene'); return;
      }
      const plaza = outcome.location === 'plaza';
      const recital = outcome.key.endsWith('/caminar');
      const target: Target = plaza ? {
        id: recital ? 'plaza-recital' : 'plaza-mercado', location: 'plaza', stage: 'calle',
        x: recital ? 14 : 29, z: 26.6, radius: 1.6, key: 'E', verb: 'MIRAR',
      } : targetFor(outcome.location)!;
      const north = outcome.location === 'terraza';
      // Both drop-offs use the avenue, on the same side as their destination.
      if (outcome.travel === 'ride') {
        const dropX = plaza ? 10 : target.x;
        const lane = dropX > taxi.x ? TRAFFIC_LANE : -TRAFFIC_LANE;
        await drive(taxi.x, lane);
        await drive(dropX, lane);
        await drive(dropX, north ? -PARK_LANE : PARK_LANE);
        const turnFrom = taxi.heading;
        const parkedHeading = north ? Math.PI : 0;
        await animate(350, t => { taxi.heading = turnFrom + angleBetween(turnFrom, parkedHeading) * t; });
        placeVehicle(taxiRig.group, taxi.x, taxi.z, taxi.heading);
      }
      setJourney(outcome.travel === 'ride' ? `Llegamos · ${names[outcome.location]} · bajando del taxi` : `Bajando del taxi · a pie hacia ${names[outcome.location]}`);
      await wait(350);
      sim.riding = false; hero.seated = false; hero.root.scale.setScalar(1); scene.add(hero.root);
      const dropNorth = taxi.z < 0;
      placePlayer(taxi.x, taxi.z + (dropNorth ? -1.25 : 1.25), dropNorth ? Math.PI : 0);
      sim.yaw = sim.player.heading;
      followShot(true);
      await walkSegment(taxi.x, dropNorth ? -4.6 : 5.4);
      if (dropNorth !== north) {
        setJourney('A pie · cruzando la avenida hacia el destino');
        await walkSegment(0, dropNorth ? -4.6 : 5.4);
        await walkSegment(0, north ? -4.6 : 5.4);
      }
      // The west edge of the plaza avoids its fountain and seated people.
      await walkSegment(plaza ? 10 : target.x, north ? -4.6 : 5.4);
      if (plaza) {
        await walkSegment(10, target.z);
        await walkSegment(target.x, target.z);
        sim.scene = target;
        placePlayer(target.x, target.z, 0);
        setShot(target.x - 2, 2.6, target.z - 3, target.x, 1.25, 29);
        box.dataset.location = 'plaza'; box.dataset.stage = target.id;
        setModeBoth('scene');
      } else {
        await walkSegment(target.x, target.z);
        await enter(outcome.location, null);
      }
    };

    // Inside a room: walk up to a piece or a person and the card opens; the
    // camera frames them while you talk, then gives you the room back.
    const focusHotspot = (activity: string) => {
      const spot = sim.room?.hotspots.find(item => item.activity === activity);
      if (!spot) return;
      sim.focus = spot;
      const near = Math.hypot(sim.player.x - spot.x, sim.player.z - spot.z) < spot.radius + 0.6;
      if (!near) placePlayer(spot.x, spot.z, faceTo(spot, spot.at));
      else { sim.player.heading = faceTo(sim.player, spot.at); sim.player.speed = 0; }
      const mid = { x: (sim.player.x + spot.at.x) / 2, z: (sim.player.z + spot.at.z) / 2 };
      const away = faceTo(spot.at, sim.player);
      const side = away + 0.7;
      const room = sim.room!.bounds;
      const cx = Math.max(room.minX + 0.6, Math.min(room.maxX - 0.6, mid.x + Math.sin(side) * 3.2));
      const cz = Math.max(room.minZ + 0.6, Math.min(room.maxZ - 0.6, mid.z + Math.cos(side) * 3.2));
      setShot(cx, 1.9, cz, mid.x, 1.25, mid.z);
      setModeBoth('scene');
    };
    const unfocus = () => {
      sim.focus = null;
      if (!sim.room) return;
      sim.yaw = sim.player.heading;
      setModeBoth(phaseMode(live.current.phase));
    };

    const phaseMode = (phase: Phase): Mode => phase === 'llegada' ? 'intro' : phase === 'evento' ? 'event' : phase === 'cierre' ? 'final'
      : phase === 'encuentro' ? (sim.room && !live.current.activity ? 'room' : 'scene') : 'walk';

    const interact = (key: 'E' | 'F') => {
      const target = sim.target;
      if (!target) return;
      const p = live.current;
      if (sim.mode === 'walk' && p.phase === 'ciudad') {
        const street = target as Target;
        if (key === 'F' && street.key !== 'F') return;
        p.onInteract(street.location, street.activity);
      } else if (sim.mode === 'room' && p.phase === 'encuentro' && !p.activity) {
        if ('exit' in target) p.onLeave();
        else if ('activity' in target && target.activity) p.onOpenActivity(target.activity);
      }
    };
    const cycleCamera = () => { sim.preset = (sim.preset + 1) % CAMERA_PRESETS.length; };
    api.current = { interact, cycleCamera, held: sim.held, joy: sim.joy };

    // Mouse drag orbits the camera around the avatar.
    const canvas = renderer.domElement;
    const down = (event: PointerEvent) => {
      box.focus({ preventScroll: true });
      if (event.pointerType !== 'mouse') return;
      sim.dragging = true;
      sim.dragX = event.clientX;
    };
    const move = (event: PointerEvent) => {
      if (!sim.dragging) return;
      sim.yaw -= (event.clientX - sim.dragX) * 0.0065;
      sim.dragX = event.clientX;
      sim.dragAt = sim.clock;
    };
    const up = () => { sim.dragging = false; };
    canvas.addEventListener('pointerdown', down);
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    // A key pressed while nothing has focus (after a click outside) still moves you.
    const stray = (event: KeyboardEvent) => {
      if (document.activeElement && document.activeElement !== document.body) return;
      if ((sim.mode !== 'walk' && sim.mode !== 'room') || !keyAction(event.code)) return;
      box.focus({ preventScroll: true });
      box.dispatchEvent(new KeyboardEvent('keydown', { key: event.key, code: event.code, bubbles: true }));
      event.preventDefault();
    };
    window.addEventListener('keydown', stray);

    const resize = () => {
      const width = host.clientWidth || 1, height = host.clientHeight || 1;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    resize();

    // Colours change slowly with the night; repaint only when they move.
    const sunDir = new THREE.Vector3();
    const dirDusk = new THREE.Vector3(-1, 0.22, -0.35);
    const dirNight = new THREE.Vector3(0.4, 0.9, 0.3);
    const paintNight = (t: number) => {
      const p = live.current;
      const rainy = p.event === 'lluvia';
      if (Math.abs(t - sim.painted.night) < 0.002 && sim.painted.event === p.event && sim.painted.indoor === sim.indoor) return;
      sim.painted = { night: t, event: p.event, indoor: sim.indoor };
      raw('#3d5a8a', '#060a16', t, sky.uniforms.top.value);
      raw('#f0a068', '#1e2a44', t, sky.uniforms.horizon.value);
      raw('#ffb070', '#2a2238', t, sky.uniforms.glow.value);
      if (rainy) { sky.uniforms.top.value.multiplyScalar(0.6); sky.uniforms.horizon.value.multiplyScalar(0.7); }
      tint('#b58a7c', '#131a28', t, (scene.fog as THREE.Fog).color);
      (scene.fog as THREE.Fog).far = rainy ? 110 : 170;
      dotMaterial.opacity = Math.max(0, t - 0.35) * (rainy ? 0 : 1.2);
      const indoor = Boolean(sim.indoor);
      hemi.intensity = indoor ? (sim.room ? 1.7 : 0.9) : 0.95 - t * 0.5;
      tint('#c9d2e6', '#3a4870', t, hemi.color);
      tint('#6a5040', '#1a1612', t, hemi.groundColor);
      // Rooms you walk in are lit from inside, not by the night sky.
      if (sim.room) { hemi.color.set('#d9cbb4'); hemi.groundColor.set('#4a3a2c'); }
      sun.intensity = (indoor ? 0.15 : 1) * (2.4 - t * 2.1);
      tint('#ffaa6a', '#8fa6d8', t, sun.color);
      sunDir.copy(dirDusk).lerp(dirNight, t).normalize();
      sky.uniforms.sunDir.value.copy(sunDir);
      for (const m of city.night.windows) m.emissiveIntensity = 0.12 + t * 1.3;
      for (const m of city.night.lamps) m.emissiveIntensity = 0.4 + t * 3.2;
      for (const m of city.night.signs) m.emissiveIntensity = 0.3 + t * 1.2;
      for (const m of city.night.headlights) m.emissiveIntensity = 0.4 + t * 2.6;
      for (const m of city.night.pools) m.opacity = 0.05 + t * 0.5;
      for (const light of city.night.lights) light.intensity = 1 + t * 22;
      city.asphalt.roughness = rainy ? 0.35 : 0.9;
      city.asphalt.color.set(rainy ? '#1d2024' : '#2a2d31');
      city.busSign.emissive.set(p.event === 'transporte' ? '#c0342b' : '#2f9aa8');
    };

    const promptAnchor = new THREE.Vector3();
    const markerTargets = [...city.markers.keys()].map(id => [id, targetById.get(id)!] as const);
    let raf = 0;
    let last = performance.now();
    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now;
      sim.clock += dt;
      const p = live.current;

      // Follow the lesson: places open and close, activities inside rooms
      // open and close, the phase moves on.
      if (p.active !== sim.seen.active) {
        const previous = sim.seen.active;
        sim.seen.active = p.active;
        sim.seen.activity = p.activity;
        sim.seen.outcome = p.outcome?.key ?? '';
        queue(async () => {
          if (previous) await exit(previous);
          if (p.active) await enter(p.active, p.activity);
          if (p.outcome) await enact(p.outcome);
        });
      } else if ((p.outcome?.key ?? '') !== sim.seen.outcome) {
        sim.seen.outcome = p.outcome?.key ?? '';
        sim.seen.activity = p.activity;
        queue(async () => {
          if (p.outcome) await enact(p.outcome);
          else { await exit(sim.scene?.location ?? 'taxi'); await enter('taxi', p.activity); }
        });
      } else if (p.activity !== sim.seen.activity) {
        sim.seen.activity = p.activity;
        if (sim.room) queue(async () => { if (live.current.activity) focusHotspot(live.current.activity); else unfocus(); });
      }
      if (p.goTo && p.goTo.n !== sim.seen.goTo) { sim.seen.goTo = p.goTo.n; teleport(p.goTo.id); }
      if (p.phase !== sim.seen.phase) {
        sim.seen.phase = p.phase;
        if (!p.active) queue(async () => {
          if (sim.mode === 'intro' && p.phase === 'ciudad') { sim.yaw = sim.player.heading; followShot(); }
          setModeBoth(phaseMode(live.current.phase));
        });
      }

      // Movement: camera-relative, in the street or inside a room.
      const walking = sim.mode === 'walk' || sim.mode === 'room';
      if (walking) {
        const input = inputFrom(sim.held);
        if (Math.abs(sim.joy.x) > 0.12 || Math.abs(sim.joy.y) > 0.12) {
          input.x = sim.joy.x;
          input.y = sim.joy.y;
          input.sprint = Math.hypot(sim.joy.x, sim.joy.y) > 0.98;
        }
        const before = sim.player.heading;
        const next = stepPlayer(sim.player, { ...input, yaw: sim.yaw }, dt, sim.room ? sim.room.solids : boxes, sim.room?.bounds);
        sim.held.delete("jump");
        Object.assign(sim.player, next);
        sim.turn = dt > 0 ? angleBetween(before, next.heading) / dt : 0;
        placePerson(hero, next.x, next.z, next.heading, sim.y + next.y);
        if (!sim.dragging && sim.clock - sim.dragAt > 1.2) sim.yaw = followYaw(sim.yaw, next.heading, next.speed, dt);
        followShot();
        sim.target = nearestTarget(sim.player, sim.room ? roomSpots() : liveTargets());
      } else {
        sim.turn = 0;
        if (sim.mode !== 'busy') sim.target = null;
      }
      const promptId = sim.target ? sim.target.id : '';
      if (promptId !== sim.promptId) {
        sim.promptId = promptId;
        box.dataset.target = promptId;
        const t = sim.target;
        const activity = t && 'activity' in t && t.activity ? titles[`${t.location}/${t.activity}`] : null;
        setPrompt(t ? { id: t.id, key: t.key, verb: t.verb, name: 'exit' in t ? 'Volver a la calle' : activity ?? names[t.location] ?? t.location } : null);
      }
      animateHero(hero, dt, walking || sim.mode === 'busy' ? sim.player.speed : 0, sim.turn, hero.seated ? 'seated' : sim.mode === 'scene' ? 'talk' : 'move', reduced());

      // Camera per mode.
      if (sim.mode === 'intro') {
        // Title screen: a slow, wide crane shot up the street, the night city in front.
        const drift = reduced() ? 0 : Math.sin(sim.clock * 0.07);
        setShot(SPAWN.x - 5 + drift, 4.8 + drift * 0.3, SPAWN.z + 6, SPAWN.x - 9.5 + drift * 2, 3, SPAWN.z - 36);
      } else if (sim.mode === 'final') {
        const a = reduced() ? 0.7 : 0.7 + sim.clock * 0.05;
        setShot(Math.sin(a) * 40, 26, Math.cos(a) * 40, 0, 2, -2);
      } else if (sim.mode === 'event') {
        const f = followCamera(sim.player, CAMERA_PRESETS[2], sim.yaw + 0.5);
        setShot(f.x, f.y + 1.5, f.z, sim.player.x, 2.2, sim.player.z);
      }
      if (sim.riding) {
        if (taxi.goal) {
          const dx = taxi.goal.x - taxi.x;
          const step = Math.sign(dx) * Math.min(Math.abs(dx), 6 * dt * Math.min(1, Math.abs(dx) / 6 + 0.25));
          taxi.x += step;
          if (Math.abs(dx) < 0.02) taxi.goal = null;
        }
        placeVehicle(taxiRig.group, taxi.x, taxi.z, taxi.heading);
        const hx = Math.abs(Math.cos(taxi.heading)) * 2.15 + Math.abs(Math.sin(taxi.heading)) * 0.9;
        const hz = Math.abs(Math.sin(taxi.heading)) * 2.15 + Math.abs(Math.cos(taxi.heading)) * 0.9;
        taxiBox.x0 = taxi.x - hx; taxiBox.x1 = taxi.x + hx;
        taxiBox.z0 = taxi.z - hz; taxiBox.z1 = taxi.z + hz;
        sim.player.x = taxi.x; sim.player.z = taxi.z;
        const ahead = Math.cos(taxi.heading);
        const side = taxi.z < 0 ? 1 : -1;
        setShot(taxi.x + ahead * 2.6, 2.3, taxi.z + side * 6.2, taxi.x - ahead * 0.2, 0.95, taxi.z);
      }
      if (sim.snap) {
        camera.position.copy(sim.shot.pos);
        sim.camLook.copy(sim.shot.look);
        sim.snap = false;
      } else {
        const k = walking ? 1 - Math.exp(-dt * 10) : sim.riding ? 1 - Math.exp(-dt * 8) : 1 - Math.exp(-dt * 3.2);
        const instant = reduced() && !walking;
        camera.position.lerp(sim.shot.pos, instant ? 1 : k);
        sim.camLook.lerp(sim.shot.look, instant ? 1 : Math.min(1, k * 1.5));
      }
      if (sim.mode === 'scene' && !reduced() && !sim.riding) camera.position.y += Math.sin(sim.clock * 0.6) * 0.002;
      camera.lookAt(sim.camLook);
      // With the card open on a wide screen, frame the scene in the space
      // left of it. On a phone the card is a bottom sheet, so the scene moves up.
      const framing = p.panel || sim.mode === 'final';
      const width = sim.mode === 'final' ? Math.min(560, host.clientWidth * 0.52) : Math.min(CARD_WIDTH, host.clientWidth - 32);
      const panelX = framing && !p.narrow ? (width + 16) / 2 : 0;
      const panelY = framing && p.narrow ? host.clientHeight * 0.3 : 0;
      const ease = reduced() ? 1 : Math.min(1, dt * 4);
      sim.offset += (panelX - sim.offset) * ease;
      sim.offsetY += (panelY - sim.offsetY) * ease;
      if (Math.abs(sim.offset) > 0.5 || Math.abs(sim.offsetY) > 0.5) camera.setViewOffset(host.clientWidth, host.clientHeight, sim.offset, sim.offsetY, host.clientWidth, host.clientHeight);
      else if (camera.view?.enabled) camera.clearViewOffset();
      dome.position.copy(camera.position);

      // The night gets darker as the evening moves on.
      const goal = nightTarget(p.phase, p.done.length, Boolean(p.event));
      sim.night += (goal - sim.night) * Math.min(1, dt * 0.8);
      paintNight(sim.night);
      const focus = sim.indoor ? hero.root.position : sim.shot.look;
      sun.target.position.set(focus.x, 0, focus.z);
      sun.position.set(focus.x + sunDir.x * 90, sunDir.y * 90, focus.z + sunDir.z * 90);

      // Living street: walkers, people who notice you, traffic, hazards, water.
      const talking = sim.mode === 'scene' ? sim.scene : null;
      if (!sim.indoor) {
        for (const rig of city.npcs.values()) {
          const walk = rig.data.walk;
          if (walk) {
            const pos = walk.axis === 'x' ? rig.x : rig.z;
            let nextPos = pos + rig.dir * walk.speed * dt;
            if (nextPos > walk.to || nextPos < walk.from) { rig.dir *= -1; nextPos = Math.max(walk.from, Math.min(walk.to, nextPos)); }
            if (walk.axis === 'x') rig.x = nextPos; else rig.z = nextPos;
            rig.heading = walk.axis === 'x' ? (rig.dir > 0 ? Math.PI / 2 : -Math.PI / 2) : (rig.dir > 0 ? 0 : Math.PI);
            placePerson(rig.person, rig.x, rig.z, rig.heading);
          }
          const inScene = Boolean(talking && ((talking.npc && rig.data.activity && rig.data.activity === talking.activity) || talking.npc === rig.data.id || (!talking.npc && talking.location === rig.data.location)));
          const distance = Math.hypot(rig.x - sim.player.x, rig.z - sim.player.z);
          rig.person.look = !walk && distance < 4.5 && (walking || inScene)
            ? Math.max(-1.1, Math.min(1.1, angleBetween(rig.heading, faceTo(rig, sim.player)))) : null;
          animatePerson(rig.person, dt, walk ? walk.speed : 0, inScene);
        }
        for (const person of city.rooftop) animatePerson(person, dt, 0, talking?.location === 'terraza');
        if (taxiRig.driver) animatePerson(taxiRig.driver, dt, 0, sim.riding);
        traffic = stepTraffic(traffic, sim.player, dt, [{ x: taxi.x, z: taxi.z }]);
        traffic.forEach((car, i) => {
          placeVehicle(trafficRigs[i].group, car.x, car.lane, car.dir > 0 ? 0 : Math.PI);
          const b = trafficBoxes[i];
          b.x0 = car.x - VEHICLE_SIZE.length / 2; b.x1 = car.x + VEHICLE_SIZE.length / 2;
          b.z0 = car.lane - VEHICLE_SIZE.width / 2; b.z1 = car.lane + VEHICLE_SIZE.width / 2;
        });
        const broken = city.cars.get('auto-roto');
        if (broken?.hazards) broken.hazards.emissiveIntensity = Math.sin(sim.clock * 5.5) > 0 ? 3.2 : 0.15;
        broken?.smoke?.forEach(sprite => {
          const phase = (sim.clock * 0.25 + (sprite.userData.phase as number)) % 1;
          sprite.position.set(1.5 + phase * 0.4, 1.1 + phase * 2.2, Math.sin(phase * 6) * 0.2);
          sprite.scale.setScalar(0.5 + phase * 1.3);
          sprite.material.opacity = (1 - phase) * 0.45;
        });
        city.water.emissiveIntensity = 0.3 + Math.sin(sim.clock * 2) * 0.05;
        const doneSet = new Set(p.done);
        for (const [id, target] of markerTargets) {
          const marker = city.markers.get(id)!;
          const isDone = doneSet.has(target.location);
          const pos = id === 'taxi' ? targetFor('taxi')! : target;
          marker.ring.position.set(pos.x, 0.06, pos.z);
          marker.ring.visible = sim.mode === 'walk' || sim.mode === 'intro';
          marker.material.color.set(isDone ? '#bfe0b0' : '#ffc46b');
          marker.material.opacity = (isDone ? 0.24 : 0.42) + (reduced() ? 0 : Math.sin(sim.clock * 2.4) * 0.1);
          marker.lantern.visible = isDone && !target.activity;
          marker.lantern.position.set(pos.x + 0.9, 2.7, pos.z);
        }
      } else {
        for (const [id, interior] of interiors) {
          if (!interior.group.visible) continue;
          const open = sim.mode === 'scene' ? p.activity : null;
          const speaking = new Set(open && interior.roles?.[open] ? interior.roles[open] : []);
          interior.people.forEach((person, i) => {
            person.look = null;
            animatePerson(person, dt, 0, speaking.size ? speaking.has(person) : !sim.room && i === 0 && sim.mode === 'scene');
          });
          const set = rings.get(id);
          if (set && sim.room) {
            const played = new Set(p.played);
            for (const spot of sim.room.hotspots) {
              const ring = set.get(spot.id)!;
              ring.visible = sim.mode === 'room';
              (ring.material as THREE.MeshBasicMaterial).color.set(played.has(spot.activity) ? '#bfe0b0' : '#ffc46b');
              (ring.material as THREE.MeshBasicMaterial).opacity = (played.has(spot.activity) ? 0.22 : 0.4) + (reduced() ? 0 : Math.sin(sim.clock * 2.4 + spot.x) * 0.1);
            }
            set.get(sim.room.exit.id)!.visible = sim.mode === 'room';
          }
        }
        if (sim.room) {
          const fill = indoorLights[1];
          fill.position.set(camera.position.x, 2.6, camera.position.z);
        }
      }

      // Rain.
      const raining = p.event === 'lluvia' && !sim.indoor;
      rainMaterial.opacity += ((raining ? 0.55 : 0) - rainMaterial.opacity) * Math.min(1, dt * 2);
      if (sim.indoor) rainMaterial.opacity = 0;
      rain.visible = rainMaterial.opacity > 0.01;
      if (rain.visible) {
        rain.position.set(camera.position.x, 0, camera.position.z);
        const fall = (reduced() ? 6 : 16) * dt;
        for (let i = 0; i < DROPS; i++) {
          const o = i * 6;
          rainPositions[o + 1] -= fall; rainPositions[o + 4] -= fall;
          if (rainPositions[o + 1] < 0) { rainPositions[o + 1] += 22; rainPositions[o + 4] += 22; }
        }
        rainGeometry.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);

      // The prompt floats over the thing you can use.
      const el = promptEl.current;
      if (el && sim.target) {
        const t = sim.target;
        const high = 'npc' in t && t.npc ? 2.25 : 'at' in t ? 2.1 : 2.4;
        promptAnchor.set('at' in t ? t.at.x : t.x, high, 'at' in t ? t.at.z : t.z).project(camera);
        const visible = promptAnchor.z < 1 && Math.abs(promptAnchor.x) < 1.1 && Math.abs(promptAnchor.y) < 1.1;
        el.style.opacity = visible ? '1' : '0';
        el.style.transform = `translate(${((promptAnchor.x + 1) / 2) * host.clientWidth}px, ${((1 - promptAnchor.y) / 2) * host.clientHeight}px) translate(-50%, -100%)`;
      }

      // Minimap, a few times a second.
      if (mapRef.current && minimap.current && now - sim.mapAt > 120 && !sim.indoor) {
        sim.mapAt = now;
        drawMap(minimap.current, sim.player, liveTargets() as Target[], p.done, sim.target?.id ?? null, traffic);
      }

      if (sim.frames % 4 === 0 || sim.fps < 15) box.dataset.player = `${sim.player.x.toFixed(2)},${sim.player.z.toFixed(2)},${sim.player.heading.toFixed(3)},${sim.player.speed.toFixed(2)},${sim.yaw.toFixed(3)}`;

      // Frame rate: lower the resolution, then shadows, if the machine struggles.
      sim.frames++;
      if (now - sim.fpsAt > 2000) {
        sim.fps = Math.round((sim.frames * 1000) / (now - sim.fpsAt || 1));
        sim.frames = 0;
        sim.fpsAt = now;
        box.dataset.fps = String(sim.fps);
        box.dataset.calls = String(renderer.info.render.calls);
        if (sim.fps < 30 && document.visibilityState === 'visible') {
          sim.slow++;
          if (sim.slow === 2 && pixelRatio > 1) { pixelRatio = 1; renderer.setPixelRatio(1); resize(); }
          if (sim.slow === 4 && sun.castShadow) sun.castShadow = false;
        }
      }
    };
    setModeBoth(phaseMode(live.current.phase));
    sim.seen.phase = live.current.phase;
    if (sim.mode === 'intro') setShot(SPAWN.x - 5, 4.8, SPAWN.z + 6, SPAWN.x - 9.5, 3, SPAWN.z - 36, true);
    else followShot(true);
    raf = requestAnimationFrame(frame);
    box.dataset.ready = 'true';

    return () => {
      cancelAnimationFrame(raf);
      disposed = true;
      observer.disconnect();
      canvas.removeEventListener('pointerdown', down);
      canvas.removeEventListener('webglcontextlost', lostContext);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
      window.removeEventListener('keydown', stray);
      api.current = null;
      scene.traverse(object => {
        const mesh = object as THREE.Mesh;
        mesh.geometry?.dispose();
        const material = mesh.material as THREE.Material | THREE.Material[] | undefined;
        for (const m of Array.isArray(material) ? material : material ? [material] : []) {
          for (const value of Object.values(m)) if (value instanceof THREE.Texture) value.dispose();
          m.dispose();
        }
      });
      renderer.dispose();
      canvas.remove();
    };
  }, []);

  const onKeyDown = useCallback((event: ReactKeyboardEvent<HTMLDivElement>) => {
    const controls = api.current;
    if (!controls || !canUseKeys(event.target as HTMLElement)) return;
    if (event.key === 'Escape') {
      if (live.current.phase === 'ciudad') container.current?.blur();
      return;
    }
    if (event.target !== container.current && event.code !== 'KeyE' && event.code !== 'KeyF') return;
    const action = keyAction(event.code);
    if (!action) return;
    event.preventDefault();
    // The lesson listens for F on the window to leave the taxi: this press opens it.
    event.stopPropagation();
    if (action === 'interact') { if (!event.repeat) controls.interact('E'); return; }
    if (action === 'vehicle') { if (!event.repeat) controls.interact('F'); return; }
    if (action === 'camera') { if (!event.repeat) controls.cycleCamera(); return; }
    if (action === 'map') { if (!event.repeat) setMapOpen(value => !value); return; }
    if (action === 'jump' && event.repeat) return;
    controls.held.add(action);
  }, []);
  const onKeyUp = useCallback((event: ReactKeyboardEvent<HTMLDivElement>) => {
    const action = keyAction(event.code);
    if (action) api.current?.held.delete(action);
  }, []);
  const releaseKeys = useCallback(() => { api.current?.held.clear(); }, []);

  // Touch: a virtual stick and a big action button.
  const stick = useRef<{ id: number; x: number; y: number } | null>(null);
  const stickMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const origin = stick.current;
    const controls = api.current;
    if (!origin || origin.id !== event.pointerId || !controls) return;
    const dx = event.clientX - origin.x, dy = event.clientY - origin.y;
    const length = Math.min(1, Math.hypot(dx, dy) / 48);
    const angle = Math.atan2(dy, dx);
    controls.joy.x = Math.cos(angle) * length;
    controls.joy.y = -Math.sin(angle) * length;
    if (knob.current) knob.current.style.transform = `translate(${Math.cos(angle) * length * 36}px, ${Math.sin(angle) * length * 36}px)`;
  };
  const stickEnd = () => {
    stick.current = null;
    if (api.current) { api.current.joy.x = 0; api.current.joy.y = 0; }
    if (knob.current) knob.current.style.transform = '';
  };

  const walking = mode === 'walk' || mode === 'room';
  const touch = props.narrow;
  return <div ref={container} className={`na-world${touch ? ' is-touch' : ''}`} tabIndex={0} role="application"
    aria-label="Barrio en 3D" aria-describedby="na-world-help" data-mode={mode}
    onKeyDown={onKeyDown} onKeyUp={onKeyUp} onBlur={releaseKeys}>
    <div className="na-world-canvas" ref={mount} />
    <div className="na-fade" ref={fader} aria-hidden="true" />
    {journey && <p className="na-journey" role="status" aria-live="polite">{journey}</p>}
    <p id="na-world-help" className="na-sr">Barrio en 3D. Corré con W, A, S y D o con las flechas; Shift va más rápido, Alt camina y la barra espaciadora salta. Acercate a un lugar o a una persona y tocá E para interactuar, F para subir o bajar del taxi. Arrastrá con el mouse para girar la cámara. V cambia la cámara, M muestra el mapa y Escape sale. La lista de Lugares te lleva a cada sitio.</p>
    <p className="na-sr" aria-live="polite">{prompt && walking ? `Cerca de ${prompt.name}. Tocá ${prompt.key} para ${prompt.verb.toLowerCase()}.` : ''}</p>
    {prompt && walking && <button ref={promptEl} type="button" tabIndex={-1} className="na-prompt3d" onClick={() => api.current?.interact(prompt.key as 'E' | 'F')}>
      <kbd>{prompt.key}</kbd><span>{prompt.verb}</span><small>{prompt.name}</small>
    </button>}
    {walking && !touch && <div className={`na-controls${help ? ' is-open' : ''}`} aria-hidden={!help}>
      {HELP_LINES.map(line => <span key={line}>{line}</span>)}
    </div>}
    {walking && <div className="na-world-tools">
      {!touch && <button type="button" className="na-chip" aria-pressed={help} onClick={() => setHelp(value => !value)}>Controles</button>}
      {mode === 'walk' && <button type="button" className="na-chip" aria-pressed={mapOpen} onClick={() => setMapOpen(value => !value)}>Mapa</button>}
      <button type="button" className="na-chip" onClick={() => { api.current?.held.add("jump"); container.current?.focus({ preventScroll: true }); }}>Saltar ↑</button>
      <button type="button" className="na-chip" onClick={() => api.current?.cycleCamera()}>Cámara</button>
    </div>}
    {mapOpen && mode === 'walk' && <canvas ref={minimap} className="na-minimap" width={176} height={176} aria-label="Mapa del barrio" role="img" />}
    {touch && walking && <div className="na-touch">
      <div className="na-stick" aria-label="Mover" role="presentation"
        onPointerDown={event => { event.currentTarget.setPointerCapture(event.pointerId); stick.current = { id: event.pointerId, x: event.clientX, y: event.clientY }; }}
        onPointerMove={stickMove} onPointerUp={stickEnd} onPointerCancel={stickEnd}>
        <span ref={knob} />
      </div>
      <button type="button" className="na-act" disabled={!prompt} onClick={() => prompt && api.current?.interact(prompt.key as 'E' | 'F')}>
        {prompt ? prompt.verb : 'Interactuar'}
      </button>
    </div>}
  </div>;
}

function drawMap(el: HTMLCanvasElement, player: { x: number; z: number; heading: number }, targets: Target[], done: string[], current: string | null, traffic: MovingCar[]) {
  const ctx = el.getContext('2d');
  if (!ctx) return;
  const size = el.width;
  const at = (x: number, z: number) => { const p = toMinimap(x, z); return [p.u * size, p.v * size] as const; };
  ctx.clearRect(0, 0, size, size);
  ctx.fillStyle = 'rgba(16,20,26,.82)';
  ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = '#39342e';
  const [ax0, az0] = at(WORLD_BOUNDS.minX, -4), [ax1, az1] = at(WORLD_BOUNDS.maxX, 4);
  ctx.fillRect(ax0, az0, ax1 - ax0, az1 - az0);
  const [cx0, cz0] = at(-4, WORLD_BOUNDS.minZ), [cx1, cz1] = at(4, WORLD_BOUNDS.maxZ);
  ctx.fillRect(cx0, cz0, cx1 - cx0, cz1 - cz0);
  ctx.fillStyle = '#2a3a2c';
  const [px0, pz0] = at(PLAZA.x0, PLAZA.z0), [px1, pz1] = at(PLAZA.x1, PLAZA.z1);
  ctx.fillRect(px0, pz0, px1 - px0, pz1 - pz0);
  ctx.fillStyle = '#5b554d';
  for (const b of BUILDINGS) {
    const [x0, z0] = at(b.x0, b.z0), [x1, z1] = at(b.x1, b.z1);
    ctx.fillRect(x0, z0, x1 - x0, z1 - z0);
  }
  ctx.fillStyle = '#8a8f96';
  for (const car of traffic) {
    const [x, z] = at(car.x, car.lane);
    ctx.fillRect(x - 3, z - 1.2, 6, 2.4);
  }
  // One dot per place (the plaza's people share one).
  const seen = new Set<string>();
  for (const target of targets) {
    if (seen.has(target.location) && target.id !== current) continue;
    seen.add(target.location);
    const [x, z] = at(target.x, target.z);
    ctx.beginPath();
    ctx.arc(x, z, target.id === current ? 5 : 3.2, 0, Math.PI * 2);
    ctx.fillStyle = done.includes(target.location) ? '#bfe0b0' : '#f0b45c';
    ctx.fill();
  }
  const [x, z] = at(player.x, player.z);
  ctx.save();
  ctx.translate(x, z);
  ctx.rotate(-player.heading);
  ctx.beginPath();
  ctx.moveTo(0, 7); ctx.lineTo(4.5, -4); ctx.lineTo(-4.5, -4); ctx.closePath();
  ctx.fillStyle = '#ffffff';
  ctx.fill();
  ctx.restore();
}
