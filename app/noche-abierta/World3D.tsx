'use client';

// The walkable 3D neighbourhood. Raw three.js in a client component that the
// lesson loads on demand; the lesson state stays in NocheAbierta and this
// component only turns it into a place: walk up to something, press E, and
// the encounter opens in its own small world.
import * as THREE from 'three';
import { useCallback, useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent, type PointerEvent as ReactPointerEvent } from 'react';
import { LOCATIONS, type Phase } from './engine.mjs';
import {
  BUILDINGS, CAMERA_PRESETS, PLAZA, SPAWN, STAGES, TARGETS, WORLD_BOUNDS,
  canUseKeys, colliders, exitSpot, followCamera, inputFrom, keyAction, nearestTarget, stepPlayer, streetFraming, toMinimap,
  type Box, type Target,
} from './world3d.mjs';
import { buildCity, buildInterior, placePerson, placeVehicle, type City, type Interior } from './build3d';
import { animatePerson, createPerson, type Person } from './people3d';

export type WorldProps = {
  phase: Phase;
  active: string | null;
  last: string | null;
  done: string[];
  event: string | null;
  goTo: { id: string; n: number } | null;
  narrow: boolean;
  reducedMotion: boolean;
  onInteract: (location: string) => void;
  onFail: () => void;
};

type Mode = 'intro' | 'walk' | 'scene' | 'event' | 'final' | 'busy';
type Shot = { pos: THREE.Vector3; look: THREE.Vector3 };
type Prompt = { id: string; key: string; verb: string; name: string };

const names: Record<string, string> = Object.fromEntries(LOCATIONS.map(item => [item.id, item.name]));
const HELP_LINES = ['WASD / FLECHAS · MOVERSE', 'SHIFT · CORRER', 'E · INTERACTUAR', 'F · SUBIR / BAJAR', 'V · CÁMARA', 'M · MAPA', 'ESC · SALIR'];

const faceTo = (from: { x: number; z: number }, to: { x: number; z: number }) => Math.atan2(to.x - from.x, to.z - from.z);
const lerpColor = (a: string, b: string, t: number) => new THREE.Color(a).lerp(new THREE.Color(b), t);
// Raw display colours for the sky shader (no colour management there).
const raw = (a: string, b: string, t: number) => {
  const x = new THREE.Color().setStyle(a, THREE.LinearSRGBColorSpace);
  const y = new THREE.Color().setStyle(b, THREE.LinearSRGBColorSpace);
  return x.lerp(y, t);
};

function nightTarget(phase: Phase, done: number, event: boolean) {
  if (phase === 'cierre') return 1;
  if (phase === 'llegada') return 0.04;
  return Math.min(0.95, 0.12 + done * 0.17 + (event ? 0.15 : 0));
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
  const [prompt, setPrompt] = useState<Prompt | null>(null);
  const [mapOpen, setMapOpen] = useState(!props.narrow);
  const [help, setHelp] = useState(false);
  const [mode, setMode] = useState<Mode>('intro');
  const mapRef = useRef(mapOpen);
  useEffect(() => { mapRef.current = mapOpen; }, [mapOpen]);

  // Show the controls briefly the first time the learner starts walking.
  const helpShown = useRef(false);
  useEffect(() => {
    if (mode !== 'walk' || helpShown.current) return;
    helpShown.current = true;
    // Showing the help is a reaction to the world entering walk mode.
    setHelp(true);
    const timer = window.setTimeout(() => setHelp(false), 7000);
    return () => window.clearTimeout(timer);
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
    const starPositions: number[] = [];
    for (let i = 0; i < 420; i++) {
      const a = Math.random() * Math.PI * 2, y = 0.15 + Math.random() * 0.85;
      const r = Math.sqrt(1 - y * y);
      starPositions.push(Math.cos(a) * r * 480, y * 480, Math.sin(a) * r * 480);
    }
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({ color: '#f4efe0', size: 1.6, sizeAttenuation: false, transparent: true, opacity: 0, fog: false, depthWrite: false });
    const stars = new THREE.Points(starGeometry, starMaterial);
    dome.add(stars);

    const hemi = new THREE.HemisphereLight('#b8c6e0', '#5a4636', 0.9);
    scene.add(hemi);
    const sun = new THREE.DirectionalLight('#ffb27a', 2.2);
    sun.castShadow = !low;
    sun.shadow.mapSize.set(2048, 2048);
    Object.assign(sun.shadow.camera, { left: -30, right: 30, top: 30, bottom: -30, near: 1, far: 200 });
    sun.shadow.bias = -0.0004;
    sun.shadow.normalBias = 0.03;
    scene.add(sun, sun.target);
    const indoorLights = [new THREE.PointLight('#ffc27a', 0, 14, 1.6), new THREE.PointLight('#ffc27a', 0, 10, 1.6)];
    scene.add(...indoorLights);

    const city: City = buildCity({ shadows: !low, crowd: !low });
    scene.add(city.root);
    const interiors = new Map<string, Interior>();

    const player: Person = createPerson({ shirt: '#c96b3c', pants: '#2b3444', hair: '#2a1d14', skin: '#d8a47f', shoes: '#e8e2d6' }, !low);
    scene.add(player.root);
    const boxes: Box[] = colliders();
    const taxiBox = boxes.find(item => item.vehicle === 'taxi')!;
    const taxiRig = city.cars.get('taxi')!;
    const taxi = { x: taxiRig.group.position.x, z: taxiRig.group.position.z, heading: Math.PI, goal: null as null | { x: number; z: number; heading: number } };

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
      player: { x: SPAWN.x, z: SPAWN.z, heading: SPAWN.heading, speed: 0, moving: false },
      y: 0,
      mode: 'intro' as Mode,
      held: new Set<string>(),
      joy: { x: 0, y: 0 },
      preset: 1,
      yaw: 0,
      dragging: false,
      dragX: 0,
      shot: { pos: new THREE.Vector3(), look: new THREE.Vector3() } as Shot,
      camLook: new THREE.Vector3(),
      snap: true,
      night: nightTarget(live.current.phase, live.current.done.length, Boolean(live.current.event)),
      scene: null as Target | null,
      indoor: null as string | null,
      riding: false,
      target: null as Target | null,
      promptId: '',
      seen: { active: null as string | null, goTo: live.current.goTo?.n ?? 0, phase: '' as string },
      clock: 0,
      frames: 0,
      fpsAt: 0,
      fps: 60,
      slow: 0,
      mapAt: 0,
      offset: 0,
    };
    // Start where the learner last was, or at the bus stop.
    const lastTarget = live.current.last ? TARGETS.find(t => t.location === live.current.last) : null;
    if (lastTarget && live.current.phase !== 'llegada') Object.assign(sim.player, exitSpot(lastTarget));
    placePerson(player, sim.player.x, sim.player.z, sim.player.heading);

    const setModeBoth = (next: Mode) => { sim.mode = next; box.dataset.mode = next; setMode(next); };
    const reduced = () => live.current.reducedMotion;
    const wait = (ms: number) => new Promise<void>(resolve => window.setTimeout(resolve, reduced() ? 0 : ms));
    const fade = async (to: number, ms: number) => {
      const el = fader.current;
      if (!el) return;
      el.style.transition = reduced() ? 'none' : `opacity ${ms}ms ease`;
      el.style.opacity = String(to);
      await wait(ms);
    };
    let chain = Promise.resolve();
    const queue = (task: () => Promise<void>) => { chain = chain.then(task).catch(() => undefined); };

    const targetFor = (location: string): Target | null => {
      const base = TARGETS.find(item => item.location === location);
      if (!base) return null;
      if (base.id !== 'taxi') return base;
      return { ...base, x: taxi.x, z: taxi.z < 0 ? -4.6 : 4.6 };
    };
    const liveTargets = () => TARGETS.map(item => (item.id === 'taxi' ? targetFor('taxi')! : item));

    const placePlayer = (x: number, z: number, heading: number, y = 0) => {
      Object.assign(sim.player, { x, z, heading, speed: 0, moving: false });
      sim.y = y;
      placePerson(player, x, z, heading, y);
    };
    const followShot = (): Shot => {
      const f = followCamera(sim.player, CAMERA_PRESETS[sim.preset], sim.yaw);
      return { pos: new THREE.Vector3(f.x, f.y + sim.y, f.z), look: new THREE.Vector3(f.look.x, f.look.y + sim.y, f.look.z) };
    };
    const setShot = (shot: Shot, snap = false) => {
      sim.shot = shot;
      if (snap) sim.snap = true;
    };
    const showIndoor = (stage: string | null) => {
      sim.indoor = stage;
      for (const [id, interior] of interiors) interior.group.visible = id === stage;
      city.root.visible = !stage;
      const interior = stage ? interiors.get(stage) : null;
      indoorLights.forEach((light, i) => {
        const point = interior?.lamp.points[i];
        light.intensity = point ? 6 : 0;
        if (point) { light.position.copy(point).setY(Math.min(point.y, 2.6)); light.color.set(interior!.lamp.color); }
      });
    };
    const npcFacing = (id: string | undefined, heading: number | null) => {
      const rig = id ? city.npcs.get(id) : null;
      if (!rig) return;
      rig.heading = heading ?? rig.data.facing;
      rig.person.root.rotation.y = rig.heading;
    };

    // Walk up to a place: used by the places list; the learner still presses E.
    const teleport = (location: string) => queue(async () => {
      const target = targetFor(location);
      if (!target || sim.mode !== 'walk') return;
      setModeBoth('busy');
      await fade(1, 260);
      const spot = { x: target.x, z: target.z };
      const npc = target.npc ? city.npcs.get(target.npc) : null;
      const door = BUILDINGS.find(b => b.location === target.location && b.door);
      const heading = npc ? faceTo(spot, npc) : door ? (door.door!.side === 'south' ? Math.PI : 0) : target.id === 'taxi' ? faceTo(spot, taxi) : Math.PI;
      placePlayer(spot.x, spot.z, heading);
      sim.yaw = 0;
      setShot(followShot(), true);
      await fade(0, 360);
      setModeBoth('walk');
    });

    const enter = (location: string) => queue(async () => {
      const target = targetFor(location);
      if (!target) return;
      setModeBoth('busy');
      sim.scene = target;
      const stage = STAGES[target.stage];
      if (stage) {
        // Camera moves in toward the door, the screen fades, the room appears.
        const door = new THREE.Vector3(target.x, 1.7, target.z + (target.z < 0 ? -1.2 : 1.2));
        setShot({ pos: new THREE.Vector3(target.x + 1.2, 2.2, target.z + (target.z < 0 ? 2.4 : -2.4)), look: door });
        await wait(380);
        await fade(1, 280);
        if (stage.size && !interiors.has(target.stage)) {
          const interior = buildInterior(target.stage, !low);
          if (interior) { interiors.set(target.stage, interior); scene.add(interior.group); }
        }
        showIndoor(stage.size ? target.stage : null);
        placePlayer(stage.spot.x, stage.spot.z, stage.spot.heading, stage.roof ?? 0);
        setShot({ pos: new THREE.Vector3(stage.camera.x, stage.camera.y, stage.camera.z), look: new THREE.Vector3(stage.look.x, stage.look.y, stage.look.z) }, true);
        await fade(0, 420);
      } else if (target.stage === 'taxi') {
        await fade(1, 260);
        player.seated = true;
        taxiRig.passenger.add(player.root);
        player.root.position.set(0, 0, 0);
        player.root.rotation.y = Math.PI / 2;
        player.root.scale.setScalar(0.92);
        sim.riding = true;
        taxi.goal = taxi.x > 0 ? { x: -28, z: -2.4, heading: Math.PI } : { x: 14, z: 2.4, heading: 0 };
        if (taxi.goal.z !== taxi.z) {
          taxi.z = taxi.goal.z;
          taxi.heading = taxi.goal.heading;
          taxi.x = taxi.goal.x > 0 ? -12 : 26;
        }
        sim.snap = true;
        await fade(0, 360);
      } else {
        // In the street: face each other, the camera finds a two-shot.
        const spot = { x: sim.player.x, z: sim.player.z };
        if (Math.hypot(spot.x - target.x, spot.z - target.z) > target.radius + 0.5) { spot.x = target.x; spot.z = target.z; }
        const npc = target.npc ? city.npcs.get(target.npc) : null;
        if (target.location === 'restaurante') {
          player.seated = true;
          placePlayer(13.4, -4.72, Math.PI);
        } else {
          placePlayer(spot.x, spot.z, npc ? faceTo(spot, npc) : faceTo(spot, { x: target.x, z: target.z - 1.5 }));
        }
        if (npc) npcFacing(target.npc, faceTo(npc, sim.player));
        const framing = streetFraming(target, sim.player);
        setShot({ pos: new THREE.Vector3(framing.camera.x, framing.camera.y, framing.camera.z), look: new THREE.Vector3(framing.look.x, framing.look.y, framing.look.z) }, reduced());
        await wait(300);
      }
      setModeBoth('scene');
    });

    const exit = (location: string) => queue(async () => {
      const target = targetFor(location) ?? sim.scene;
      sim.scene = null;
      if (!target) return;
      setModeBoth('busy');
      const stage = STAGES[target.stage];
      if (stage || target.stage === 'taxi') {
        await fade(1, 260);
        if (target.stage === 'taxi') {
          sim.riding = false;
          // Leaving early still means you got there: the taxi arrives under the fade.
          if (taxi.goal) { taxi.x = taxi.goal.x; taxi.goal = null; placeVehicle(taxiRig.group, taxi.x, taxi.z, taxi.heading); }
          taxiBox.x0 = taxi.x - 2.15; taxiBox.x1 = taxi.x + 2.15;
          taxiBox.z0 = taxi.z - 0.9; taxiBox.z1 = taxi.z + 0.9;
          player.seated = false;
          player.root.scale.setScalar(1);
          scene.add(player.root);
          const side = taxi.z < 0 ? -4.9 : 4.9;
          placePlayer(taxi.x, side, taxi.z < 0 ? Math.PI : 0);
        } else {
          showIndoor(null);
          const out = exitSpot(target);
          placePlayer(out.x, out.z, out.heading);
        }
        sim.yaw = 0;
        setShot(followShot(), true);
        await fade(0, 380);
      } else {
        player.seated = false;
        if (target.location === 'restaurante') placePlayer(13.4, -3.9, 0);
        npcFacing(target.npc, null);
      }
      setModeBoth(phaseMode(live.current.phase));
    });

    const phaseMode = (phase: Phase): Mode => phase === 'llegada' ? 'intro' : phase === 'evento' ? 'event' : phase === 'cierre' ? 'final' : phase === 'encuentro' ? 'scene' : 'walk';

    const interact = (key: 'E' | 'F') => {
      if (sim.mode !== 'walk' || live.current.phase !== 'ciudad') return;
      const target = sim.target;
      if (!target) return;
      if (key === 'F' && target.key !== 'F') return;
      live.current.onInteract(target.location);
    };
    const cycleCamera = () => { sim.preset = (sim.preset + 1) % CAMERA_PRESETS.length; };
    api.current = { interact, cycleCamera, held: sim.held, joy: sim.joy };

    // Pointer drag orbits the follow camera a little.
    const canvas = renderer.domElement;
    const down = (event: PointerEvent) => {
      box.focus({ preventScroll: true });
      if (event.pointerType !== 'mouse') return;
      sim.dragging = true;
      sim.dragX = event.clientX;
    };
    const move = (event: PointerEvent) => {
      if (!sim.dragging) return;
      sim.yaw = Math.max(-2.6, Math.min(2.6, sim.yaw - (event.clientX - sim.dragX) * 0.006));
      sim.dragX = event.clientX;
    };
    const up = () => { sim.dragging = false; };
    canvas.addEventListener('pointerdown', down);
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);

    const resize = () => {
      const width = host.clientWidth || 1, height = host.clientHeight || 1;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    resize();

    const applyNight = (t: number) => {
      const rainy = live.current.event === 'lluvia';
      sky.uniforms.top.value.copy(raw('#3d5a8a', '#060a16', t));
      sky.uniforms.horizon.value.copy(raw('#f0a068', '#1e2a44', t));
      sky.uniforms.glow.value.copy(raw('#ffb070', '#2a2238', t));
      if (rainy) { sky.uniforms.top.value.multiplyScalar(0.6); sky.uniforms.horizon.value.multiplyScalar(0.7); }
      (scene.fog as THREE.Fog).color.copy(lerpColor('#b58a7c', '#131a28', t));
      (scene.fog as THREE.Fog).far = rainy ? 110 : 170;
      starMaterial.opacity = Math.max(0, t - 0.35) * (rainy ? 0 : 1.2);
      const indoor = Boolean(sim.indoor);
      hemi.intensity = indoor ? 0.9 : 0.95 - t * 0.5;
      hemi.color.copy(lerpColor('#c9d2e6', '#3a4870', t));
      hemi.groundColor.copy(lerpColor('#6a5040', '#1a1612', t));
      sun.intensity = (indoor ? 0.15 : 1) * (2.4 - t * 2.1);
      sun.color.copy(lerpColor('#ffaa6a', '#8fa6d8', t));
      const dir = new THREE.Vector3(-1, 0.22, -0.35).lerp(new THREE.Vector3(0.4, 0.9, 0.3), t).normalize();
      sky.uniforms.sunDir.value.copy(dir);
      const focus = sim.indoor ? player.root.position : sim.shot.look;
      sun.target.position.set(focus.x, 0, focus.z);
      sun.position.set(focus.x + dir.x * 90, dir.y * 90, focus.z + dir.z * 90);
      for (const m of city.night.windows) m.emissiveIntensity = 0.12 + t * 1.3;
      for (const m of city.night.lamps) m.emissiveIntensity = 0.4 + t * 3.2;
      for (const m of city.night.signs) m.emissiveIntensity = 0.3 + t * 1.2;
      for (const m of city.night.pools) m.opacity = 0.05 + t * 0.5;
      for (const light of city.night.lights) light.intensity = 1 + t * 22;
      city.asphalt.roughness = rainy ? 0.35 : 0.9;
      city.asphalt.color.set(rainy ? '#1d2024' : '#2a2d31');
      city.busSign.emissive.set(live.current.event === 'transporte' ? '#c0342b' : '#2f9aa8');
    };

    let raf = 0;
    let last = performance.now();
    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now;
      sim.clock += dt;
      const p = live.current;

      // Follow the lesson: encounters open and close, the phase moves on.
      if (p.active !== sim.seen.active) {
        const previous = sim.seen.active;
        sim.seen.active = p.active;
        if (previous) exit(previous);
        if (p.active) enter(p.active);
      }
      if (p.goTo && p.goTo.n !== sim.seen.goTo) { sim.seen.goTo = p.goTo.n; teleport(p.goTo.id); }
      if (p.phase !== sim.seen.phase) {
        sim.seen.phase = p.phase;
        if (!p.active) queue(async () => {
          if (sim.mode === 'intro' && p.phase === 'ciudad') { sim.yaw = 0; setShot(followShot()); }
          setModeBoth(phaseMode(live.current.phase));
        });
      }

      // Movement.
      if (sim.mode === 'walk') {
        const input = inputFrom(sim.held);
        if (Math.abs(sim.joy.x) > 0.12 || Math.abs(sim.joy.y) > 0.12) {
          input.forward = Math.max(-1, Math.min(1, sim.joy.y));
          input.turn = Math.max(-1, Math.min(1, -sim.joy.x * 1.2));
          input.run = Math.hypot(sim.joy.x, sim.joy.y) > 0.92 && sim.joy.y > 0.6;
        }
        const next = stepPlayer(sim.player, input, dt, boxes);
        Object.assign(sim.player, next);
        placePerson(player, next.x, next.z, next.heading);
        if (!sim.dragging && next.moving) sim.yaw *= Math.exp(-dt * 1.4);
        setShot(followShot());
        const target = nearestTarget(sim.player, liveTargets());
        sim.target = target;
      } else if (sim.mode !== 'busy') {
        sim.target = null;
      }
      const promptId = sim.target ? sim.target.id : '';
      if (promptId !== sim.promptId) {
        sim.promptId = promptId;
        box.dataset.target = promptId;
        const t = sim.target;
        setPrompt(t ? { id: t.id, key: t.key, verb: t.verb, name: names[t.location] ?? t.location } : null);
      }
      animatePerson(player, dt, sim.mode === 'walk' ? sim.player.speed : 0, sim.mode === 'scene');

      // Camera per mode.
      if (sim.mode === 'intro') {
        const a = reduced() ? 2.4 : 2.4 + sim.clock * 0.12;
        setShot({ pos: new THREE.Vector3(sim.player.x + Math.sin(a) * 6.5, 1.9, sim.player.z + Math.cos(a) * 6.5), look: new THREE.Vector3(sim.player.x, 1.5, sim.player.z) });
      } else if (sim.mode === 'final') {
        const a = reduced() ? 0.7 : 0.7 + sim.clock * 0.05;
        setShot({ pos: new THREE.Vector3(Math.sin(a) * 40, 26, Math.cos(a) * 40), look: new THREE.Vector3(0, 2, -2) });
      } else if (sim.mode === 'event') {
        const f = followCamera(sim.player, CAMERA_PRESETS[2], 0.5);
        setShot({ pos: new THREE.Vector3(f.x, f.y + 1.5, f.z), look: new THREE.Vector3(sim.player.x, 2.2, sim.player.z) });
      }
      if (sim.riding) {
        if (taxi.goal) {
          const dx = taxi.goal.x - taxi.x;
          const step = Math.sign(dx) * Math.min(Math.abs(dx), 4.2 * dt * Math.min(1, Math.abs(dx) / 6 + 0.25));
          taxi.x += step;
          if (Math.abs(dx) < 0.02) taxi.goal = null;
        }
        placeVehicle(taxiRig.group, taxi.x, taxi.z, taxi.heading);
        const ahead = Math.cos(taxi.heading);
        const side = taxi.z < 0 ? 1 : -1;
        setShot({ pos: new THREE.Vector3(taxi.x + ahead * 2.6, 2.3, taxi.z + side * 6.2), look: new THREE.Vector3(taxi.x - ahead * 0.2, 0.95, taxi.z) }, false);
      }
      if (sim.snap) {
        camera.position.copy(sim.shot.pos);
        sim.camLook.copy(sim.shot.look);
        sim.snap = false;
      } else {
        const k = sim.mode === 'walk' ? 1 - Math.exp(-dt * 5) : sim.riding ? 1 - Math.exp(-dt * 8) : 1 - Math.exp(-dt * 2.6);
        camera.position.lerp(sim.shot.pos, reduced() && sim.mode !== 'walk' ? 1 : k);
        sim.camLook.lerp(sim.shot.look, reduced() && sim.mode !== 'walk' ? 1 : Math.min(1, k * 1.6));
      }
      if (sim.mode === 'scene' && !reduced() && !sim.riding) {
        camera.position.y += Math.sin(sim.clock * 0.6) * 0.002;
      }
      camera.lookAt(sim.camLook);
      // With the conversation panel open on a wide screen, frame the scene in
      // the space left of it.
      const panel = sim.mode === 'scene' && !p.narrow ? (Math.min(420, host.clientWidth * 0.4) + 16) / 2 : 0;
      sim.offset += (panel - sim.offset) * (reduced() ? 1 : Math.min(1, dt * 4));
      if (Math.abs(sim.offset) > 0.5) camera.setViewOffset(host.clientWidth, host.clientHeight, sim.offset, 0, host.clientWidth, host.clientHeight);
      else if (camera.view?.enabled) camera.clearViewOffset();
      dome.position.copy(camera.position);

      // The night gets darker as the evening moves on.
      const goal = nightTarget(p.phase, p.done.length, Boolean(p.event));
      sim.night += (goal - sim.night) * Math.min(1, dt * 0.8);
      applyNight(sim.night);

      // Living street: walkers, idle people, talking, hazards, smoke, water.
      const talking = sim.mode === 'scene' ? sim.scene : null;
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
        const inScene = Boolean(talking && (talking.npc === rig.data.id || (talking.location === rig.data.location && talking.location !== 'auto')));
        animatePerson(rig.person, dt, walk ? walk.speed : 0, inScene);
      }
      for (const person of city.rooftop) animatePerson(person, dt, 0, talking?.location === 'terraza');
      for (const interior of interiors.values()) if (interior.group.visible) interior.people.forEach((person, i) => animatePerson(person, dt, 0, i === 0 && sim.mode === 'scene'));
      if (taxiRig.driver) animatePerson(taxiRig.driver, dt, 0, sim.riding);
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
      for (const [id, marker] of city.markers) {
        const target = TARGETS.find(item => item.id === id)!;
        const isDone = doneSet.has(target.location);
        const pos = id === 'taxi' ? targetFor('taxi')! : target;
        marker.ring.position.set(pos.x, 0.06, pos.z);
        marker.ring.visible = sim.mode === 'walk' || sim.mode === 'intro';
        marker.material.color.set(isDone ? '#bfe0b0' : '#ffc46b');
        marker.material.opacity = (isDone ? 0.28 : 0.45) + (reduced() ? 0 : Math.sin(sim.clock * 2.4) * 0.12);
        marker.lantern.visible = isDone;
        marker.lantern.position.set(pos.x + 0.9, 2.7, pos.z);
      }

      // Rain.
      const raining = p.event === 'lluvia' && !sim.indoor;
      rainMaterial.opacity += ((raining ? 0.55 : 0) - rainMaterial.opacity) * Math.min(1, dt * 2);
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

      // Prompt follows the thing you can use.
      const el = promptEl.current;
      if (el && sim.target) {
        const anchor = new THREE.Vector3(sim.target.x, sim.target.npc ? 2.3 : 2.5, sim.target.z).project(camera);
        const visible = anchor.z < 1 && Math.abs(anchor.x) < 1.1 && Math.abs(anchor.y) < 1.1;
        el.style.opacity = visible ? '1' : '0';
        el.style.transform = `translate(${((anchor.x + 1) / 2) * host.clientWidth}px, ${((1 - anchor.y) / 2) * host.clientHeight}px) translate(-50%, -100%)`;
      }

      // Minimap, a few times a second.
      if (mapRef.current && minimap.current && now - sim.mapAt > 120) {
        sim.mapAt = now;
        drawMap(minimap.current, sim.player, liveTargets(), p.done, sim.target?.id ?? null);
      }

      if (sim.frames % 4 === 0) box.dataset.player = `${sim.player.x.toFixed(2)},${sim.player.z.toFixed(2)},${sim.player.heading.toFixed(3)}`;

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
    if (sim.mode === 'intro') setShot({ pos: new THREE.Vector3(SPAWN.x + 4, 1.9, SPAWN.z + 5), look: new THREE.Vector3(SPAWN.x, 1.5, SPAWN.z) }, true);
    else setShot(followShot(), true);
    raf = requestAnimationFrame(frame);
    box.dataset.ready = 'true';

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      canvas.removeEventListener('pointerdown', down);
      canvas.removeEventListener('webglcontextlost', lostContext);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
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
    controls.held.add(action);
  }, []);
  const onKeyUp = useCallback((event: ReactKeyboardEvent<HTMLDivElement>) => {
    const action = keyAction(event.code);
    if (action) api.current?.held.delete(action);
  }, []);
  const releaseKeys = useCallback(() => { api.current?.held.clear(); }, []);

  // Touch: a virtual stick and big buttons.
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

  const walking = mode === 'walk';
  const touch = props.narrow;
  return <div ref={container} className={`na-world${touch ? ' is-touch' : ''}`} tabIndex={0} role="application"
    aria-label="Barrio en 3D" aria-describedby="na-world-help" data-mode={mode}
    onKeyDown={onKeyDown} onKeyUp={onKeyUp} onBlur={releaseKeys}>
    <div className="na-world-canvas" ref={mount} />
    <div className="na-fade" ref={fader} aria-hidden="true" />
    <p id="na-world-help" className="na-sr">Barrio en 3D. Caminá con W, A, S y D o con las flechas; Shift para correr. Acercate a un lugar y tocá E para interactuar, F para subir o bajar del taxi. V cambia la cámara, M muestra el mapa y Escape sale del barrio. La lista de Lugares te lleva a cada sitio.</p>
    <p className="na-sr" aria-live="polite">{prompt && walking ? `Cerca de ${prompt.name}. Tocá ${prompt.key} para ${prompt.verb.toLowerCase()}.` : ''}</p>
    {prompt && walking && <button ref={promptEl} type="button" tabIndex={-1} className="na-prompt3d" onClick={() => api.current?.interact(prompt.key as 'E' | 'F')}>
      <kbd>{prompt.key}</kbd><span>{prompt.verb}</span><small>{prompt.name}</small>
    </button>}
    {walking && !touch && <div className={`na-controls${help ? ' is-open' : ''}`} aria-hidden={!help}>
      {HELP_LINES.map(line => <span key={line}>{line}</span>)}
    </div>}
    {walking && <div className="na-world-tools">
      {!touch && <button type="button" className="na-chip" aria-pressed={help} onClick={() => setHelp(value => !value)}>Controles</button>}
      <button type="button" className="na-chip" aria-pressed={mapOpen} onClick={() => setMapOpen(value => !value)}>Mapa</button>
      <button type="button" className="na-chip" onClick={() => api.current?.cycleCamera()}>Cámara</button>
    </div>}
    {mapOpen && walking && <canvas ref={minimap} className="na-minimap" width={176} height={176} aria-label="Mapa del barrio" role="img" />}
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

function drawMap(el: HTMLCanvasElement, player: { x: number; z: number; heading: number }, targets: Target[], done: string[], current: string | null) {
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
  for (const target of targets) {
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
