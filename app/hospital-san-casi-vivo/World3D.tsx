'use client';

// Hospital San Casi Vivo · the 3D runtime: renderer, camera, controls and the
// SpanishCue mascot walking the hospital. The lesson (HospitalGame.tsx) owns
// the state; this component reports circles, the elevator, the stairs and
// where the player is, and follows its props.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import { canUseKeys, followYaw, inputFrom, keyAction, stepPlayer, angleBetween } from '../noche-abierta/world3d.mjs';
import { animateHero, createHero } from '../noche-abierta/hero3d';
import { CEILING, ELEVATOR, ELEVATOR_ARRIVAL, SPAWN, STAIRS_ARRIVAL, atElevator, atStairs, cameraBlockers, circleStep, floorById, sceneById, sceneFraming, sectorAt, solidsFor, spotAt } from './layout.mjs';
import { buildHospital, talking as talkingNow, type Hospital } from './hospital3d';

export type Pose = { floor: number; x: number; z: number; heading: number; sector: string | null };
export type WorldProps = {
  floor: number;
  /** How the last floor change happens: the elevator doors or a walk up the stairs. */
  via: 'lift' | 'stairs';
  sceneId: string | null;
  mood: string | null;
  done: string[];
  paused: boolean;
  intro: boolean;
  onSpot: (id: string) => void;
  onLift: (via: 'lift' | 'stairs') => void;
  onNear: (near: { kind: 'scene' | 'lift' | 'stairs'; id: string } | null) => void;
  onPose: (pose: Pose) => void;
  onFail: () => void;
};

type Api = { joy: { x: number; y: number }; held: Set<string>; clear: () => void; interact: () => void; jump: () => void; nitro: { on: boolean } };
const SITTING = new Set(['sit', 'lean', 'lie', 'sleep']);

export default function World3D(props: WorldProps) {
  const live = useRef(props);
  useEffect(() => { live.current = props; });
  const mount = useRef<HTMLDivElement>(null);
  const knob = useRef<HTMLSpanElement>(null);
  const fade = useRef<HTMLDivElement>(null);
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
    renderer.toneMappingExposure = 1.0;
    renderer.shadowMap.enabled = !low;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.domElement.tabIndex = 0;
    renderer.domElement.setAttribute('aria-label', 'Hospital San Casi Vivo en 3D. Flechas o WASD para caminar, arrastra para mirar, E para hablar.');
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#05070c');
    scene.fog = new THREE.Fog('#0a0e14', 40, 220);
    const camera = new THREE.PerspectiveCamera(58, 1, 0.08, 900);
    let hospital: Hospital;
    let hero: ReturnType<typeof createHero>;
    try { hospital = buildHospital(scene, { low, shadows: !low }); hero = createHero(!low); }
    catch (error) {
      console.error(error);
      renderer.dispose(); renderer.domElement.remove();
      const t = window.setTimeout(() => live.current.onFail(), 0);
      return () => window.clearTimeout(t);
    }
    scene.add(hero.root);
    // A cold clinical reflection so vinyl floors, steel and glass read as such.
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envMap = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = envMap;
    scene.environmentIntensity = 0.3;
    const hemi = new THREE.HemisphereLight('#e8f2ff', '#30343a', 1.05);
    scene.add(hemi);
    // One fluorescent key light follows the mascot so he and the people near
    // him cast real shadows.
    const key = new THREE.DirectionalLight('#f2f8ff', 0.85);
    key.castShadow = !low;
    key.shadow.mapSize.set(1024, 1024);
    Object.assign(key.shadow.camera, { left: -12, right: 12, top: 12, bottom: -12, near: 1, far: 40 });
    key.shadow.bias = -0.0004;
    key.shadow.normalBias = 0.03;
    scene.add(key, key.target);

    let composer: EffectComposer | null = null;
    if (!low) {
      composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));
      composer.addPass(new UnrealBloomPass(new THREE.Vector2(512, 512), 0.2, 0.35, 0.95));
      composer.addPass(new OutputPass());
    }

    // ------------------------------------------------------------ state
    let floor = live.current.floor;
    let solids = solidsFor(floor);
    let walls = cameraBlockers(floor);
    const start = floor === 1 ? { x: SPAWN.x, z: SPAWN.z, heading: SPAWN.heading } : { ...ELEVATOR_ARRIVAL };
    let player = { x: start.x, z: start.z, heading: start.heading, speed: 0, y: 0, vy: 0, jumpHeld: false };
    let yaw = player.heading, pitch = 0.22, zoom = low ? 3.7 : 3.9;
    let turn = 0;
    const held = new Set<string>();
    const joy = { x: 0, y: 0 };
    const touchNitro = { on: false };
    let jumpUntil = -1;
    let drag: { id: number; x: number; y: number } | null = null;
    let lastDrag = -10, clock = 0, previous = 0, frame = 0, disposed = false, poseAt = 0;
    let inside: string | null = null, still = 0, consumed: string | null = null, nearKey = '';
    let atLift: 'lift' | 'stairs' | null = null, liftConsumed = false;
    let openScene: string | null = null;
    let ride: { from: number; to: number; start: number; via: 'lift' | 'stairs' } | null = null;
    let introAt = 0;
    let doneKey = '';
    let moodKey = '';
    const look = new THREE.Vector3();
    const desired = new THREE.Vector3();
    const temp = new THREE.Vector3();

    function showFloor(id: number) {
      floor = id;
      for (const [fid, group] of Object.entries(hospital.floors)) group.visible = Number(fid) === id;
      hospital.exterior.visible = id === 1;
      solids = solidsFor(id);
      walls = cameraBlockers(id);
    }
    showFloor(floor);

    function place() {
      const y = floorById(floor).y;
      hero.root.position.set(player.x, y + (player.y || 0), player.z);
      hero.root.rotation.y = player.heading;
      key.position.set(player.x - 5, y + 12, player.z + 6);
      key.target.position.set(player.x, y, player.z);
    }
    place();

    function clear() { held.clear(); joy.x = 0; joy.y = 0; drag = null; }
    function interact() {
      const p = live.current;
      if (p.paused || p.sceneId || ride || p.intro) return;
      if (inside) { consumed = inside; p.onSpot(inside); return; }
      if (atLift) { liftConsumed = true; p.onLift(atLift); }
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
      pitch = Math.min(0.75, Math.max(0.02, pitch + dy * 0.004));
      lastDrag = clock;
    };
    const onUp = (event: PointerEvent) => { if (drag?.id === event.pointerId) drag = null; };
    const onWheel = (event: WheelEvent) => { event.preventDefault(); zoom = Math.min(6.5, Math.max(2.2, zoom + event.deltaY * 0.004)); };
    canvasEl.addEventListener('pointerdown', onDown);
    canvasEl.addEventListener('pointermove', onMove);
    canvasEl.addEventListener('pointerup', onUp);
    canvasEl.addEventListener('pointercancel', onUp);
    canvasEl.addEventListener('wheel', onWheel, { passive: false });

    let baseFov = 58;
    const resize = () => {
      const w = host.clientWidth || 1, h = host.clientHeight || 1;
      renderer.setSize(w, h, false);
      composer?.setSize(w, h);
      camera.aspect = w / h;
      baseFov = w / h < 0.8 ? 70 : 58;
      camera.fov = baseFov;
      camera.updateProjectionMatrix();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    resize();

    // Shorten the camera arm when a wall stands between it and the mascot.
    function clearArm(x: number, z: number, cx: number, cz: number) {
      let t = 1;
      const b = floorById(floor).bounds;
      for (let i = 1; i <= 12; i++) {
        const k = i / 12;
        const px = x + (cx - x) * k, pz = z + (cz - z) * k;
        const out = px < b.minX + 0.3 || px > b.maxX - 0.3 || pz < b.minZ + 0.3 || pz > b.maxZ - 0.3;
        if (out || walls.some(w => px > w.x0 - 0.25 && px < w.x1 + 0.25 && pz > w.z0 - 0.25 && pz < w.z1 + 0.25)) { t = Math.max(0.15, (i - 1) / 12); break; }
      }
      return t;
    }

    function setLiftDoors(id: number, open: number) {
      const doors = hospital.lift[id];
      if (!doors) return;
      doors.left.position.x = ELEVATOR.x - 0.31 - open * 0.6;
      doors.right.position.x = ELEVATOR.x + 0.31 + open * 0.6;
    }

    // ------------------------------------------------------------ loop
    const loop = (now: number) => {
      if (disposed) return;
      frame = requestAnimationFrame(loop);
      const dt = Math.min(0.05, previous ? (now - previous) / 1000 : 0.016);
      previous = now;
      clock += dt;
      const p = live.current;

      // Circles that are done turn grey and lose their gem.
      const dk = p.done.join();
      if (dk !== doneKey) {
        doneKey = dk;
        for (const spot of hospital.spots) {
          const isDone = p.done.includes(spot.id);
          spot.material.color.set(isDone ? '#8fa0a8' : '#ffffff');
          spot.material.opacity = isDone ? 0.45 : 0.95;
          spot.gem.visible = !isDone;
        }
      }
      const mk = `${p.sceneId}:${p.mood}`;
      if (mk !== moodKey) { moodKey = mk; hospital.setSceneMood(p.sceneId, p.mood); }

      // Changing floors: the elevator doors close and open, or the screen
      // fades while he climbs the stairs.
      if (p.floor !== floor && !ride && !p.sceneId) ride = { from: floor, to: p.floor, start: now / 1000, via: p.via };
      if (ride) {
        const t = now / 1000 - ride.start;
        if (ride.via === 'lift') {
          setLiftDoors(ride.from, t < 1 ? Math.max(0, 1 - t / 0.7) : 0);
          setLiftDoors(ride.to, t < 1.6 ? 0 : Math.min(1, (t - 1.6) / 0.7));
        }
        if (fade.current) fade.current.style.opacity = String(ride.via === 'stairs' ? Math.max(0, 1 - Math.abs(t - 0.9) / 0.9) : t > 0.6 && t < 1.8 ? 0.55 : 0);
        if (t >= 1 && floor !== ride.to) {
          showFloor(ride.to);
          const arrive = ride.via === 'lift' ? { x: ELEVATOR.x, z: ELEVATOR.wallZ + 1.0 } : STAIRS_ARRIVAL;
          player = { ...player, x: arrive.x, z: arrive.z, heading: 0, speed: 0, y: 0, vy: 0 };
        }
        if (ride.via === 'lift' && t > 1.9 && t < 2.6) {
          const k = Math.min(1, (t - 1.9) / 0.7);
          player.z = ELEVATOR.wallZ + 1.0 + (ELEVATOR_ARRIVAL.z - ELEVATOR.wallZ - 1.0) * k;
          player.speed = 2.2;
        }
        if (t >= 2.6) {
          ride = null; player.speed = 0; liftConsumed = true; yaw = 0;
          if (fade.current) fade.current.style.opacity = '0';
          setLiftDoors(floor, 0);
        }
      } else if (atLift === 'lift') {
        setLiftDoors(floor, 1);
      } else {
        setLiftDoors(floor, 0);
      }

      const sceneId = p.sceneId;
      if (sceneId !== openScene) {
        openScene = sceneId;
        if (sceneId) {
          const s = sceneById(sceneId);
          if (s) {
            // A circle opened from the list or the map cuts straight to it.
            if (ride) { setLiftDoors(ride.from, 0); ride = null; if (fade.current) fade.current.style.opacity = '0'; }
            if (s.floor !== floor) showFloor(s.floor);
            const f = sceneFraming(s);
            player = { ...player, x: f.x, z: f.z, heading: f.heading, speed: 0, y: 0, vy: 0 };
            consumed = sceneId;
          }
        }
      }

      // Move.
      const moving = !p.paused && !sceneId && !ride && !p.intro;
      const before = player.heading;
      if (moving) {
        const input = inputFrom(held);
        const ix = input.x + joy.x, iy = input.y + joy.y;
        // Corridors ask for a calmer stroll; Shift runs and N is the nitro.
        const nitro = input.nitro || touchNitro.on;
        const factor = input.sprint || nitro ? 1 : 0.7;
        const next = stepPlayer({ ...player, speed: player.speed / factor }, { x: ix, y: iy, yaw, sprint: input.sprint, nitro, walk: false }, dt * factor, solids, floorById(floor).bounds);
        player = { ...player, x: next.x, z: next.z, heading: next.heading, speed: next.speed * factor };
        const jumping = input.jump || clock < jumpUntil;
        if (jumping && !player.jumpHeld && player.y <= 0) player.vy = 6.4;
        player.jumpHeld = jumping;
        player.y = Math.max(0, player.y + player.vy * dt - 9 * dt * dt);
        player.vy = player.y > 0 ? player.vy - 18 * dt : 0;
        const wantFov = baseFov + (nitro && player.speed > 10 ? 10 : 0);
        if (Math.abs(wantFov - camera.fov) > 0.05) { camera.fov += (wantFov - camera.fov) * Math.min(1, dt * 6); camera.updateProjectionMatrix(); }
        if (clock - lastDrag > 1.2) yaw = followYaw(yaw, player.heading, player.speed, dt);
      } else if (!ride) { player.speed = 0; player.y = 0; player.vy = 0; }
      turn = dt > 0 ? angleBetween(before, player.heading) / dt : 0;
      place();

      // Circles, the elevator and the stairs.
      const here = ride ? null : spotAt(floor, player.x, player.z);
      const circle = circleStep({ inside, still, spent: consumed }, here, sceneId, p.paused || p.intro ? 1 : player.speed, dt);
      inside = circle.inside; still = circle.still; consumed = circle.spent;
      if (circle.open) p.onSpot(circle.open);
      const lift = !sceneId && !ride ? (atElevator(player.x, player.z) ? 'lift' : atStairs(player.x, player.z) ? 'stairs' : null) : null;
      if (lift !== atLift) { atLift = lift; if (!lift) liftConsumed = false; }
      if (atLift && !liftConsumed && player.speed < 0.3 && !p.paused && !p.intro) { liftConsumed = true; p.onLift(atLift); }
      const near = inside ? `scene:${inside}` : atLift ? `${atLift}:${atLift}` : '';
      if (near !== nearKey) { nearKey = near; p.onNear(inside ? { kind: 'scene', id: inside } : atLift ? { kind: atLift, id: atLift } : null); }
      if (clock - poseAt > 0.2) {
        poseAt = clock;
        p.onPose({ floor, x: player.x, z: player.z, heading: player.heading, sector: sectorAt(floor, player.x, player.z)?.id ?? null });
      }

      // People: they glance at the mascot; the one he talks to turns and talks.
      for (const npc of hospital.npcs) {
        if (npc.floor !== floor) continue;
        const isTalking = Boolean(sceneId && npc.scene === sceneId && npc.main);
        if (isTalking) talkingNow.add(npc.person); else talkingNow.delete(npc.person);
        const dx = player.x - npc.x, dz = player.z - npc.z;
        const d = Math.hypot(dx, dz);
        const facing = Math.atan2(dx, dz);
        if (isTalking && !SITTING.has(npc.person.pose) && !npc.lying) {
          npc.heading += angleBetween(npc.heading, facing) * Math.min(1, dt * 4);
          npc.person.root.rotation.y = npc.heading;
        }
        npc.person.look = !npc.lying && (d < 5 || isTalking) ? Math.max(-1.1, Math.min(1.1, angleBetween(npc.heading, facing))) : null;
        if (isTalking) npc.person.attention = 1;
      }
      hospital.animate(clock, dt, floor, player.x, player.z);
      animateHero(hero, dt, player.speed > 0.2 ? player.speed : 0, turn, sceneId ? 'talk' : 'move', reduced);

      // Camera: low ceilings keep it close and under the fluorescent panels.
      const y = floorById(floor).y;
      if (p.intro) {
        introAt += dt;
        const a = introAt * (reduced ? 0.02 : 0.07);
        camera.position.set(Math.sin(a) * 16, 3.2 + Math.sin(introAt * 0.25) * 0.8, 52 + Math.cos(a) * 4);
        camera.lookAt(0, 4.2, 32);
      } else if (sceneId) {
        const s = sceneById(sceneId)!;
        const mid = temp.set((player.x + s.npc.x) / 2, y + 1.35, (player.z + s.npc.z) / 2);
        const side = Math.atan2(s.npc.x - player.x, s.npc.z - player.z) + Math.PI / 2;
        const dist = Math.max(2.6, Math.hypot(s.npc.x - player.x, s.npc.z - player.z) * 0.9 + 1.2);
        let cx = mid.x + Math.sin(side) * dist, cz = mid.z + Math.cos(side) * dist;
        if (clearArm(mid.x, mid.z, cx, cz) < 0.8) { cx = mid.x - Math.sin(side) * dist; cz = mid.z - Math.cos(side) * dist; }
        const k = clearArm(mid.x, mid.z, cx, cz);
        desired.set(mid.x + (cx - mid.x) * k, y + Math.min(CEILING - 0.5, 1.95), mid.z + (cz - mid.z) * k);
        if (camera.position.distanceTo(desired) > 10) { camera.position.copy(desired); look.copy(mid); }
        camera.position.lerp(desired, 1 - Math.exp(-dt * 3));
        look.lerp(mid, 1 - Math.exp(-dt * 4));
        camera.lookAt(look);
      } else {
        const dist = zoom;
        const cx = player.x - Math.sin(yaw) * Math.cos(pitch) * dist;
        const cz = player.z - Math.cos(yaw) * Math.cos(pitch) * dist;
        const k = clearArm(player.x, player.z, cx, cz);
        const outside = floor === 1 && player.z > 32.6;
        const ceiling = outside ? 12 : CEILING - 0.3;
        desired.set(player.x + (cx - player.x) * k, Math.min(y + ceiling, y + 1.55 + Math.sin(pitch) * dist * Math.max(0.55, k)), player.z + (cz - player.z) * k);
        if (camera.position.distanceTo(desired) > 14) camera.position.copy(desired);
        camera.position.lerp(desired, 1 - Math.exp(-dt * (ride ? 2 : 10)));
        look.set(player.x, y + 1.3, player.z);
        camera.lookAt(look);
      }
      if (composer) composer.render(); else renderer.render(scene, camera);
    };
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
  const nitroOn = () => { if (api.current) api.current.nitro.on = true; };
  const nitroOff = () => { if (api.current) api.current.nitro.on = false; };

  return <div className="hs-world">
    <div className="hs-canvas" ref={mount} />
    <div className="hs-fade" ref={fade} aria-hidden="true" />
    {touch && !props.sceneId && !props.intro && <div className="hs-joy" onPointerDown={joyDown} onPointerMove={joyMove} onPointerUp={joyUp} onPointerCancel={joyUp} aria-hidden="true"><span ref={knob} /></div>}
    {touch && !props.sceneId && !props.intro && <div className="hs-touch-actions">
      <button type="button" aria-label="Hablar o usar" onPointerDown={() => api.current?.interact()}>E<small>Usar</small></button>
      <button type="button" aria-label="Saltar" onPointerDown={() => api.current?.jump()}>↑<small>Saltar</small></button>
      <button type="button" aria-label="Nitro: mantén pulsado para correr muy rápido" onPointerDown={nitroOn} onPointerUp={nitroOff} onPointerCancel={nitroOff} onPointerLeave={nitroOff}>»<small>Nitro</small></button>
    </div>}
  </div>;
}
