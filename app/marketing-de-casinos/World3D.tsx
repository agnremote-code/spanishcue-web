'use client';

// El Gran Meridiano · the 3D runtime: renderer, bloom, camera, controls and
// the heroine walking the casino. The lesson (CasinoGame.tsx) owns the state;
// this component reports circles and the elevator and follows its props.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import { canUseKeys, followYaw, inputFrom, keyAction, stepPlayer, angleBetween } from '../noche-abierta/world3d.mjs';
import { CEILING, ELEVATOR, ELEVATOR_ARRIVAL, SPAWN, atElevator, cameraBlockers, floorById, circleStep, sceneById, sceneFraming, solidsFor, spotAt } from './layout.mjs';
import { buildCasino, talking as talkingNow, type Casino } from './casino3d';
import { animatePerson } from '../noche-abierta/people3d';

export type WorldProps = {
  floor: number;
  sceneId: string | null;
  done: string[];
  paused: boolean;
  intro: boolean;
  onSpot: (id: string) => void;
  onElevator: () => void;
  onNear: (near: { kind: 'scene' | 'elevator'; id: string } | null) => void;
  onFloorShown: (floor: number) => void;
  onFail: () => void;
};

type Api = { joy: { x: number; y: number }; held: Set<string>; clear: () => void; interact: () => void; jump: () => void; nitro: { on: boolean } };
const SITTING = new Set(['sit', 'lean', 'cook', 'guitar', 'lie']);

export default function World3D(props: WorldProps) {
  const live = useRef(props);
  useEffect(() => { live.current = props; });
  const mount = useRef<HTMLDivElement>(null);
  const knob = useRef<HTMLSpanElement>(null);
  const joyPointer = useRef<number | null>(null);
  const api = useRef<Api | null>(null);
  const [touch, setTouch] = useState(false);

  useEffect(() => { if (props.paused || props.sceneId) api.current?.clear(); }, [props.paused, props.sceneId]);

  useEffect(() => {
    const host = mount.current;
    if (!host) return;
    const low = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 760;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let renderer: THREE.WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: !low, powerPreference: 'high-performance' }); }
    catch { const t = window.setTimeout(() => live.current.onFail(), 0); return () => window.clearTimeout(t); }
    const touchTimer = window.setTimeout(() => setTouch(window.matchMedia('(pointer: coarse)').matches), 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, low ? 1.2 : 1.75));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.95;
    renderer.shadowMap.enabled = !low;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.domElement.tabIndex = 0;
    renderer.domElement.setAttribute('aria-label', 'El Gran Meridiano en 3D. Flechas o WASD para caminar, arrastra para mirar, E para hablar.');
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#07060d');
    scene.fog = new THREE.Fog('#0b0812', 60, 420);
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 1600);
    let casino: Casino;
    try { casino = buildCasino(scene, { low, shadows: !low }); }
    catch (error) {
      console.error(error);
      renderer.dispose(); renderer.domElement.remove();
      const t = window.setTimeout(() => live.current.onFail(), 0);
      return () => window.clearTimeout(t);
    }
    // A soft studio reflection so gold, marble and glass read as such.
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envMap = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = envMap;
    scene.environmentIntensity = 0.22;
    const hemi = new THREE.HemisphereLight('#ffd9b0', '#2a1020', 0.9);
    scene.add(hemi);
    // One soft key light follows the heroine so she and the people near her
    // cast real shadows; everything else is lit by warm point lights.
    const key = new THREE.DirectionalLight('#ffe2b8', 0.9);
    key.castShadow = !low;
    key.shadow.mapSize.set(1024, 1024);
    Object.assign(key.shadow.camera, { left: -12, right: 12, top: 12, bottom: -12, near: 1, far: 60 });
    key.shadow.bias = -0.0004;
    key.shadow.normalBias = 0.03;
    scene.add(key, key.target);

    let composer: EffectComposer | null = null;
    if (!low) {
      composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));
      composer.addPass(new UnrealBloomPass(new THREE.Vector2(512, 512), 0.42, 0.45, 0.93));
      composer.addPass(new OutputPass());
    }

    // ------------------------------------------------------------ state
    let floor = live.current.floor;
    let solids = solidsFor(floor);
    let walls = cameraBlockers(floor);
    const start = live.current.floor === 1 ? { x: SPAWN.x, z: SPAWN.z, heading: SPAWN.heading } : { ...ELEVATOR_ARRIVAL };
    let player = { x: start.x, z: start.z, heading: start.heading, speed: 0, y: 0, vy: 0, jumpHeld: false };
    let yaw = player.heading, pitch = 0.26, zoom = low ? 4.6 : 4.9;
    const held = new Set<string>();
    const joy = { x: 0, y: 0 };
    const touchNitro = { on: false };
    let jumpUntil = -1;
    let drag: { id: number; x: number; y: number } | null = null;
    let lastDrag = -10, clock = 0, previous = 0, frame = 0, disposed = false;
    let inside: string | null = null, still = 0, consumed: string | null = null, nearKey = '';
    let atLift = false, liftConsumed = false;
    let openScene: string | null = null;
    let ride: { from: number; to: number; start: number } | null = null;
    let introAt = 0;
    const look = new THREE.Vector3();
    const desired = new THREE.Vector3();
    const temp = new THREE.Vector3();

    function showFloor(id: number) {
      floor = id;
      for (const [fid, group] of Object.entries(casino.floors)) group.visible = Number(fid) === id;
      // From the ground floor the plaza is right outside; upstairs the city
      // is far below and only the terrace sees it.
      casino.exterior.visible = id === 1 || id === 3;
      solids = solidsFor(id);
      walls = cameraBlockers(id);
      live.current.onFloorShown(id);
    }
    showFloor(floor);
    for (const marker of Object.values(casino.elevatorMarkers)) marker.visible = true;

    function place() {
      const y = floorById(floor).y;
      casino.heroine.root.position.set(player.x, y + (player.y || 0), player.z);
      casino.heroine.root.rotation.y = player.heading;
      key.position.set(player.x - 6, y + 14, player.z + 8);
      key.target.position.set(player.x, y, player.z);
    }
    place();

    function clear() { held.clear(); joy.x = 0; joy.y = 0; drag = null; }
    function interact() {
      const p = live.current;
      if (p.paused || p.sceneId || ride || p.intro) return;
      if (inside) { consumed = inside; p.onSpot(inside); return; }
      if (atLift) { liftConsumed = true; p.onElevator(); }
    }
    const jump = () => { jumpUntil = clock + 0.15; };
    api.current = { joy, held, clear, interact, jump, nitro: touchNitro };

    // ------------------------------------------------------------ input
    const onKeyDown = (event: KeyboardEvent) => {
      if (!canUseKeys(event.target as HTMLElement) || event.metaKey || event.ctrlKey || event.altKey) return;
      if (live.current.paused || live.current.sceneId) return;
      if (event.code === 'KeyE' || event.code === 'Enter') { event.preventDefault(); interact(); return; }
      const action = keyAction(event.code);
      if (!action) return;
      event.preventDefault();
      held.add(action);
    };
    const onKeyUp = (event: KeyboardEvent) => { const action = keyAction(event.code); if (action) held.delete(action); };
    const onBlur = () => clear();
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    window.addEventListener('blur', onBlur);
    const canvasEl = renderer.domElement;
    const onDown = (event: PointerEvent) => { if (event.button !== 0 && event.pointerType === 'mouse') return; drag = { id: event.pointerId, x: event.clientX, y: event.clientY }; canvasEl.setPointerCapture?.(event.pointerId); };
    const onMove = (event: PointerEvent) => {
      if (!drag || drag.id !== event.pointerId) return;
      const dx = event.clientX - drag.x, dy = event.clientY - drag.y;
      drag.x = event.clientX; drag.y = event.clientY;
      yaw -= dx * 0.006;
      pitch = Math.min(0.95, Math.max(0.05, pitch + dy * 0.004));
      lastDrag = clock;
    };
    const onUp = (event: PointerEvent) => { if (drag?.id === event.pointerId) drag = null; };
    const onWheel = (event: WheelEvent) => { event.preventDefault(); zoom = Math.min(11, Math.max(2.6, zoom + event.deltaY * 0.004)); };
    canvasEl.addEventListener('pointerdown', onDown);
    canvasEl.addEventListener('pointermove', onMove);
    canvasEl.addEventListener('pointerup', onUp);
    canvasEl.addEventListener('pointercancel', onUp);
    canvasEl.addEventListener('wheel', onWheel, { passive: false });

    let baseFov = 55;
    const resize = () => {
      const w = host.clientWidth || 1, h = host.clientHeight || 1;
      renderer.setSize(w, h, false);
      composer?.setSize(w, h);
      camera.aspect = w / h;
      baseFov = w / h < 0.8 ? 66 : 55;
      camera.fov = baseFov;
      camera.updateProjectionMatrix();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    resize();

    // Shorten the camera arm when a wall stands between it and the heroine.
    function clearArm(x: number, z: number, cx: number, cz: number) {
      let t = 1;
      for (let i = 1; i <= 12; i++) {
        const k = i / 12;
        const px = x + (cx - x) * k, pz = z + (cz - z) * k;
        const b = floorById(floor).bounds;
        const out = floor !== 1 && (px < b.minX + 0.3 || px > b.maxX - 0.3 || pz < b.minZ + 0.3 || (floor === 2 && pz > 19.6));
        if (out || walls.some(w => px > w.x0 - 0.25 && px < w.x1 + 0.25 && pz > w.z0 - 0.25 && pz < w.z1 + 0.25)) { t = Math.max(0.18, (i - 1) / 12); break; }
      }
      return t;
    }

    // ------------------------------------------------------------ loop
    const loop = (now: number) => {
      if (disposed) return;
      frame = requestAnimationFrame(loop);
      const dt = Math.min(0.05, previous ? (now - previous) / 1000 : 0.016);
      previous = now;
      clock += dt;
      const p = live.current;

      // The elevator: doors close, the floor changes, doors open.
      if (p.floor !== floor && !ride) ride = { from: floor, to: p.floor, start: now / 1000 };
      if (ride) {
        const t = now / 1000 - ride.start;
        const doors = casino.doors.find(d => d.floor === (t < 1 ? ride!.from : ride!.to))!;
        const open = t < 1 ? Math.max(0, 1 - t / 0.7) : Math.min(1, Math.max(0, (t - 1.6) / 0.7));
        for (const d of casino.doors) for (const panel of d.panels) { panel.left.position.x = panel.x - 0.53; panel.right.position.x = panel.x + 0.53; }
        for (const panel of doors.panels) { panel.left.position.x = panel.x - 0.53 - open * 1.02; panel.right.position.x = panel.x + 0.53 + open * 1.02; }
        if (t >= 1 && floor !== ride.to) {
          showFloor(ride.to);
          player = { ...player, x: ELEVATOR.doors[0] + 0, z: ELEVATOR.wallZ + 1.2, heading: 0, speed: 0 };
          player.x = 28;
        }
        if (t > 1.7 && t < 2.6) {
          const k = Math.min(1, (t - 1.7) / 0.9);
          player.z = ELEVATOR.wallZ + 1.2 + (ELEVATOR_ARRIVAL.z - ELEVATOR.wallZ - 1.2) * k;
          player.x = 28 + (ELEVATOR_ARRIVAL.x - 28) * k;
          player.speed = 2.4;
        }
        if (t >= 2.6) { ride = null; player.speed = 0; liftConsumed = true; yaw = 0; }
      }

      const sceneId = p.sceneId;
      if (sceneId !== openScene) {
        openScene = sceneId;
        if (sceneId) {
          const s = sceneById(sceneId);
          if (s) {
            if (s.floor !== floor) showFloor(s.floor);
            const f = sceneFraming(s);
            player = { ...player, x: f.x, z: f.z, heading: f.heading, speed: 0 };
            consumed = sceneId;
          }
        }
      }

      // Move.
      const moving = !p.paused && !sceneId && !ride && !p.intro;
      if (moving) {
        const input = inputFrom(held);
        const ix = input.x + joy.x, iy = input.y + joy.y;
        // A stroll by default, Shift runs, N is the nitro. Only the steps are
        // slowed; the jump keeps real time.
        const nitro = input.nitro || touchNitro.on;
        const factor = input.sprint || nitro ? 1 : 0.72;
        const next = stepPlayer({ ...player, speed: player.speed / factor }, { x: ix, y: iy, yaw, sprint: input.sprint, nitro, walk: false }, dt * factor, solids, floorById(floor).bounds);
        player = { ...player, x: next.x, z: next.z, heading: next.heading, speed: next.speed * factor };
        const jump = input.jump || clock < jumpUntil;
        if (jump && !player.jumpHeld && player.y <= 0) player.vy = 7.2;
        player.jumpHeld = jump;
        player.y = Math.max(0, player.y + player.vy * dt - 9 * dt * dt);
        player.vy = player.y > 0 ? player.vy - 18 * dt : 0;
        // A wider lens sells the nitro.
        const wantFov = baseFov + (nitro && player.speed > 10 ? 12 : 0);
        if (Math.abs(wantFov - camera.fov) > 0.05) { camera.fov += (wantFov - camera.fov) * Math.min(1, dt * 6); camera.updateProjectionMatrix(); }
        if (clock - lastDrag > 1.2) yaw = followYaw(yaw, player.heading, player.speed, dt);
      } else if (!ride) { player.speed = 0; player.y = 0; player.vy = 0; }
      place();

      // Circles and the elevator.
      const here = ride ? null : spotAt(floor, player.x, player.z);
      const circle = circleStep({ inside, still, spent: consumed }, here, sceneId, p.paused || p.intro ? 1 : player.speed, dt);
      inside = circle.inside; still = circle.still; consumed = circle.spent;
      if (circle.open) p.onSpot(circle.open);
      const lift = !sceneId && !ride && atElevator(player.x, player.z);
      if (lift !== atLift) { atLift = lift; if (!lift) liftConsumed = false; }
      if (atLift && !liftConsumed && player.speed < 0.3 && !p.paused && !p.intro) { liftConsumed = true; p.onElevator(); }
      const near = inside ? `scene:${inside}` : atLift ? 'elevator:lift' : '';
      if (near !== nearKey) { nearKey = near; p.onNear(inside ? { kind: 'scene', id: inside } : atLift ? { kind: 'elevator', id: 'lift' } : null); }

      // People: NPCs look at Valentina; the one she talks to turns and talks.
      for (const npc of casino.npcs) {
        if (npc.floor !== floor) continue;
        const talking = Boolean(sceneId && npc.scene === sceneId && npc.main);
        if (talking) talkingNow.add(npc.person); else talkingNow.delete(npc.person);
        const dx = player.x - npc.x, dz = player.z - npc.z;
        const d = Math.hypot(dx, dz);
        const facing = Math.atan2(dx, dz);
        if (talking && !SITTING.has(npc.person.pose)) {
          npc.heading += angleBetween(npc.heading, facing) * Math.min(1, dt * 4);
          npc.person.root.rotation.y = npc.heading;
        }
        npc.person.look = !npc.walk && (d < 5 || talking) ? Math.max(-1.1, Math.min(1.1, angleBetween(npc.heading, facing))) : null;
        if (talking) npc.person.attention = 1;
      }
      const walking = player.speed > 0.2;
      casino.heroine.look = null;
      casino.animate(clock, dt, floor);
      animateHeroine(dt, walking, Boolean(sceneId));

      // Camera.
      const y = floorById(floor).y;
      if (p.intro) {
        introAt += dt;
        const a = introAt * (reduced ? 0.02 : 0.06);
        camera.position.set(Math.sin(a) * 34, 9 + Math.sin(introAt * 0.2) * 2, 70 + Math.cos(a) * 14);
        camera.lookAt(0, 12, 18);
      } else if (sceneId) {
        const s = sceneById(sceneId)!;
        const mid = temp.set((player.x + s.npc.x) / 2, y + 1.45, (player.z + s.npc.z) / 2);
        const side = Math.atan2(s.npc.x - player.x, s.npc.z - player.z) + Math.PI / 2;
        const dist = Math.max(3.2, Math.hypot(s.npc.x - player.x, s.npc.z - player.z) * 0.95 + 1.4);
        // Pick the side of the two-shot the walls allow.
        let cx = mid.x + Math.sin(side) * dist, cz = mid.z + Math.cos(side) * dist;
        if (clearArm(mid.x, mid.z, cx, cz) < 0.8) { cx = mid.x - Math.sin(side) * dist; cz = mid.z - Math.cos(side) * dist; }
        const k = clearArm(mid.x, mid.z, cx, cz);
        desired.set(mid.x + (cx - mid.x) * k, Math.min(y + CEILING - 0.6, y + 2.1), mid.z + (cz - mid.z) * k);
        // A scene opened from the list can be across the floor: cut, do not fly through walls.
        if (camera.position.distanceTo(desired) > 12) { camera.position.copy(desired); look.copy(mid); }
        camera.position.lerp(desired, 1 - Math.exp(-dt * 3));
        look.lerp(mid, 1 - Math.exp(-dt * 4));
        camera.lookAt(look);
      } else {
        const dist = zoom;
        const cx = player.x - Math.sin(yaw) * Math.cos(pitch) * dist;
        const cz = player.z - Math.cos(yaw) * Math.cos(pitch) * dist;
        const k = clearArm(player.x, player.z, cx, cz);
        const ceiling = floor === 3 && player.z > 0 ? 40 : CEILING - 0.35;
        desired.set(player.x + (cx - player.x) * k, Math.min(y + ceiling, y + 1.5 + Math.sin(pitch) * dist * Math.max(0.55, k)), player.z + (cz - player.z) * k);
        if (ride) camera.position.lerp(desired, 1 - Math.exp(-dt * 2)); else camera.position.lerp(desired, 1 - Math.exp(-dt * 10));
        look.set(player.x, y + 1.35, player.z);
        camera.lookAt(look);
      }
      if (composer) composer.render(); else renderer.render(scene, camera);
    };
    function animateHeroine(dt: number, walking: boolean, talking: boolean) {
      animateHero(casino.heroine, dt, walking ? player.speed : 0, talking);
    }
    frame = requestAnimationFrame(loop);

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      window.clearTimeout(touchTimer);
      observer.disconnect();
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      window.removeEventListener('blur', onBlur);
      canvasEl.removeEventListener('pointerdown', onDown);
      canvasEl.removeEventListener('pointermove', onMove);
      canvasEl.removeEventListener('pointerup', onUp);
      canvasEl.removeEventListener('pointercancel', onUp);
      canvasEl.removeEventListener('wheel', onWheel);
      scene.traverse(o => {
        const m = o as THREE.Mesh;
        if (m.geometry) m.geometry.dispose();
        const mat = m.material as THREE.Material | THREE.Material[] | undefined;
        if (Array.isArray(mat)) mat.forEach(x => x.dispose()); else mat?.dispose();
      });
      composer?.dispose();
      envMap.dispose();
      pmrem.dispose();
      renderer.dispose();
      renderer.domElement.remove();
      api.current = null;
    };
  }, []);

  const joyDown = (event: ReactPointerEvent<HTMLDivElement>) => { joyPointer.current = event.pointerId; event.currentTarget.setPointerCapture(event.pointerId); joyMove(event); };
  const joyMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (joyPointer.current !== event.pointerId || !api.current) return;
    const rect = event.currentTarget.getBoundingClientRect();
    let x = (event.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    let y = (event.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    const len = Math.hypot(x, y);
    if (len > 1) { x /= len; y /= len; }
    api.current.joy.x = x; api.current.joy.y = -y;
    if (knob.current) knob.current.style.transform = `translate(${x * 34}px, ${y * 34}px)`;
  };
  const joyUp = () => { joyPointer.current = null; if (api.current) { api.current.joy.x = 0; api.current.joy.y = 0; } if (knob.current) knob.current.style.transform = 'translate(0, 0)'; };

  return <div className="gm-world">
    <div className="gm-canvas" ref={mount} />
    {touch && !props.sceneId && !props.intro && <div className="gm-joy" onPointerDown={joyDown} onPointerMove={joyMove} onPointerUp={joyUp} onPointerCancel={joyUp} aria-hidden="true"><span ref={knob} /></div>}
    {touch && !props.sceneId && !props.intro && <div className="gm-touch-actions">
      <button type="button" aria-label="Saltar" onPointerDown={() => api.current?.jump()}>↑<small>Saltar</small></button>
      <button type="button" aria-label="Nitro: mantén pulsado para correr muy rápido" onPointerDown={() => { if (api.current) api.current.nitro.on = true; }} onPointerUp={() => { if (api.current) api.current.nitro.on = false; }} onPointerCancel={() => { if (api.current) api.current.nitro.on = false; }} onPointerLeave={() => { if (api.current) api.current.nitro.on = false; }}>»<small>Nitro</small></button>
    </div>}
  </div>;
}

// Valentina walks with the shared rig; a little sway in the hips reads as
// heels rather than sneakers.
function animateHero(person: Casino['heroine'], dt: number, speed: number, talking: boolean) {
  animatePerson(person, dt, speed, talking);
  if (speed > 0.3) {
    person.parts.hips.rotation.z += Math.sin(person.phase) * 0.06;
    person.parts.torso.rotation.z -= Math.sin(person.phase) * 0.035;
  }
}
