'use client';

// El tren de las 23:40 · the 3D runtime: renderer, camera, controls and the
// SpanishCue mascot on board El Nocturno de los Andes. The lesson
// (TrenGame.tsx) owns the state; this component reports circles, the doors
// between cars and where the player is, and follows its props. Inside a car
// the camera stays in the corridor, under the roof, and sways with the train.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import { canUseKeys, followYaw, inputFrom, keyAction, stepPlayer, angleBetween } from '../noche-abierta/world3d.mjs';
import { animateHero, createHero } from '../noche-abierta/hero3d';
import { CEILING, OPEN_AIR, SPAWN, arrivalFor, cameraBlockers, circleStep, sceneCamera, floorById, isCar, portalAt, sceneById, sceneFraming, sectorAt, solidsFor, spotAt } from './layout.mjs';
import { buildTrain, talking as talkingNow, type Train, type Npc, type Mover } from './tren3d';
import { createBumpClock, pushOut } from '../escucha-3d/bump.mjs';
import { insultFor, shout } from '../escucha-3d/shout';
import { setMood } from '../noche-abierta/people3d';

export type Pose = { floor: number; x: number; z: number; heading: number; sector: string | null };
export type WorldProps = {
  floor: number;
  sceneId: string | null;
  mood: string | null;
  done: string[];
  paused: boolean;
  intro: boolean;
  onSpot: (id: string) => void;
  onPortal: (id: string) => void;
  onNear: (near: { kind: 'scene' | 'portal' | 'person'; id: string } | null) => void;
  /** Someone the player walked up to and pressed E on (a key of PASAJEROS). */
  onPerson: (id: string) => void;
  /** The person whose card is open: they turn to the mascot and talk. */
  personId: string | null;
  onPose: (pose: Pose) => void;
  onFail: () => void;
  /** The night outside follows the lesson clock. */
  clock: string;
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
    renderer.toneMappingExposure = 0.94;
    renderer.shadowMap.enabled = !low;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.domElement.tabIndex = 0;
    renderer.domElement.setAttribute('aria-label', 'El Nocturno de los Andes en 3D. Flechas o WASD para caminar, arrastra para mirar, E para hablar.');
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#0e1630');
    scene.fog = new THREE.Fog('#0e1630', 120, 700);
    const camera = new THREE.PerspectiveCamera(58, 1, 0.08, 900);
    let building: Train;
    let hero: ReturnType<typeof createHero>;
    try { building = buildTrain(scene, { low, shadows: !low }); hero = createHero(!low); }
    catch (error) {
      console.error(error);
      renderer.dispose(); renderer.forceContextLoss(); renderer.domElement.remove();
      const t = window.setTimeout(() => live.current.onFail(), 0);
      return () => window.clearTimeout(t);
    }
    scene.add(hero.root);
    // A soft reflection so the brass, the varnish and the glass read as such.
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envTarget = pmrem.fromScene(new RoomEnvironment(), 0.04);
    const envMap = envTarget.texture;
    scene.environment = envMap;
    scene.environmentIntensity = 0.3;
    const hemi = new THREE.HemisphereLight('#e8e4f0', '#2c2622', 0.8);
    scene.add(hemi);
    // One key light follows the mascot so he and the people near him cast
    // real shadows.
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
    const start = floor === SPAWN.floor ? { x: SPAWN.x, z: SPAWN.z, heading: SPAWN.heading } : arrivalFor(SPAWN.floor, floor);
    let player = { x: start.x, z: start.z, heading: start.heading, speed: 0, y: 0, vy: 0, jumpHeld: false };
    let yaw = player.heading, pitch = 0.2, zoom = low ? 3.3 : 3.5;
    let turn = 0;
    const held = new Set<string>();
    const joy = { x: 0, y: 0 };
    const touchNitro = { on: false };
    let jumpUntil = -1;
    let drag: { id: number; x: number; y: number } | null = null;
    let lastDrag = -10, clock = 0, previous = 0, frame = 0, disposed = false, poseAt = 0;
    let inside: string | null = null, still = 0, consumed: string | null = null, nearKey = '';
    let atLift: string | null = null, liftConsumed = false;
    let openScene: string | null = null;
    let nearPerson: Npc | null = null;
    const mayYell = createBumpClock();
    const angry: (Npc | Mover)[] = [];
    let ride: { from: number; to: number; start: number } | null = null;
    let introAt = 0;
    let framed: { id: string; x: number; z: number } | null = null;
    let doneKey = '';
    let moodKey = '';
    let nightKey = '';
    const look = new THREE.Vector3();
    const desired = new THREE.Vector3();
    const temp = new THREE.Vector3();

    function showFloor(id: number) {
      floor = id;
      building.setPlace(id);
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
      if (atLift) { liftConsumed = true; p.onPortal(atLift); return; }
      if (nearPerson?.talk && !p.personId) p.onPerson(nearPerson.talk);
    }
    const jump = () => { jumpUntil = clock + 0.15; };
    if (new URLSearchParams(window.location.search).has('qa3d')) {
      (window as unknown as { __et3d?: unknown }).__et3d = {
        place: (x: number, z: number, heading = 0) => { player = { ...player, x, z, heading, speed: 0, y: 0, vy: 0 }; yaw = heading; },
        where: () => ({ x: player.x, z: player.z, y: player.y }),
        look: (y: number, p: number, d: number) => { yaw = y; pitch = p; zoom = d; lastDrag = clock + 1000; },
        scene,
        floor: () => floor,
      };
    }
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
    const onWheel = (event: WheelEvent) => { event.preventDefault(); zoom = Math.min(isCar(floor) ? 4.6 : 7, Math.max(2.0, zoom + event.deltaY * 0.004)); };
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
        // On the platforms the camera may leave the plan; inside a car it never leaves the corridor.
        const out = !OPEN_AIR(floor) && (px < b.minX + 0.35 || px > b.maxX - 0.35 || pz < b.minZ + 0.35 || pz > b.maxZ - 0.35);
        if (out || walls.some(w => px > w.x0 - 0.25 && px < w.x1 + 0.25 && pz > w.z0 - 0.25 && pz < w.z1 + 0.25)) { t = Math.max(0.15, (i - 1) / 12); break; }
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

      // Circles that are done turn grey and lose their gem.
      const dk = p.done.join();
      if (dk !== doneKey) {
        doneKey = dk;
        for (const spot of building.spots) {
          const isDone = p.done.includes(spot.id);
          spot.material.color.set(isDone ? '#8fa0a8' : '#ffffff');
          spot.material.opacity = isDone ? 0.45 : 0.95;
          spot.gem.visible = !isDone;
        }
      }
      const mk = `${p.sceneId}:${p.mood}`;
      if (mk !== moodKey) { moodKey = mk; building.setSceneMood(p.sceneId, p.mood); }
      const nk = p.clock;
      if (nk !== nightKey) { nightKey = nk; building.setNight(p.clock); }
      // On the platforms the light is the night's (or the dawn's); inside, the lamps.
      const wantHemi = OPEN_AIR(floor) ? 0.45 + building.night() * 0.6 : 0.62;
      hemi.intensity += (wantHemi - hemi.intensity) * Math.min(1, dt * 2);

      // Changing cars: the screen fades while he goes through the gangway.
      if (p.floor !== floor && !ride && !p.sceneId) ride = { from: floor, to: p.floor, start: now / 1000 };
      if (ride) {
        const t = now / 1000 - ride.start;
        if (fade.current) fade.current.style.opacity = String(Math.max(0, 1 - Math.abs(t - 0.6) / 0.6));
        if (t >= 0.6 && floor !== ride.to) {
          const arrive = arrivalFor(ride.from, ride.to);
          showFloor(ride.to);
          player = { ...player, x: arrive.x, z: arrive.z, heading: arrive.heading, speed: 0, y: 0, vy: 0 };
          yaw = arrive.heading; liftConsumed = true;
        }
        if (t >= 1.2) { ride = null; liftConsumed = true; if (fade.current) fade.current.style.opacity = '0'; }
      }

      const sceneId = p.sceneId;
      if (sceneId !== openScene) {
        openScene = sceneId;
        if (sceneId) {
          const s = sceneById(sceneId);
          if (s) {
            // A circle opened from the list or the map cuts straight to it.
            if (ride) { ride = null; if (fade.current) fade.current.style.opacity = '0'; }
            if (s.floor !== floor) showFloor(s.floor);
            const f = sceneFraming(s);
            player = { ...player, x: f.x, z: f.z, heading: f.heading, speed: 0, y: 0, vy: 0 };
            consumed = sceneId;
          }
        }
      }

      // Move.
      const moving = !p.paused && !sceneId && !ride && !p.intro && !p.personId;
      const before = player.heading;
      if (moving) {
        const input = inputFrom(held);
        const ix = input.x + joy.x, iy = input.y + joy.y;
        // Corridors ask for a calmer stroll; Shift runs and N is the nitro.
        const nitro = input.nitro || touchNitro.on;
        const factor = input.sprint || nitro ? 1 : 0.7;
        // Space jumps; benches, chairs, tables and boxes can be climbed on.
        const jumping = input.jump || clock < jumpUntil;
        const next = stepPlayer({ ...player, speed: player.speed / factor }, { x: ix, y: iy, yaw, sprint: input.sprint, nitro, walk: false, jump: jumping, jumpSpeed: 7.6 }, dt * factor, solids, floorById(floor).bounds);
        player = { ...player, x: next.x, z: next.z, heading: next.heading, speed: next.speed * factor, y: next.y, vy: next.vy, jumpHeld: next.jumpHeld };
        // People are solid, and nobody likes being run into: whoever you crash
        // into (or who crashes into you) turns, glares and yells at you.
        if (player.y < 1.2) {
          const bodies = building.bodies(floor);
          const bounds = floorById(floor).bounds;
          const free = (x: number, z: number) => x > bounds.minX + 0.4 && x < bounds.maxX - 0.4 && z > bounds.minZ + 0.4 && z < bounds.maxZ - 0.4
            && !solids.some(b => (b.top == null || player.y < b.top) && x > b.x0 - 0.35 && x < b.x1 + 0.35 && z > b.z0 - 0.35 && z < b.z1 + 0.35);
          const out = pushOut(player.x, player.z, bodies, free);
          player.x = out.x; player.z = out.z;
          const who: Npc | Mover | null = out.hit >= 0 ? bodies[out.hit].who : null;
          if (who && (next.speed > 1.2 || ('moving' in who && who.moving)) && mayYell(who, clock)) {
            const line = insultFor(who.body, who.seed);
            building.say(who, line.text, 3.2, true);
            shout(line, 1);
            setMood(who.person, 'furious');
            who.angryUntil = clock + 3.5;
            if (!angry.includes(who)) angry.push(who);
            if ('scene' in who || 'talk' in who) {
              const n = who as Npc;
              if (!n.seated && !n.lying) { n.heading = Math.atan2(player.x - n.x, player.z - n.z); n.person.root.rotation.y = n.heading; }
            }
            player.speed *= 0.3;
          }
        }
        const wantFov = baseFov + (nitro && player.speed > 10 ? 10 : 0);
        if (Math.abs(wantFov - camera.fov) > 0.05) { camera.fov += (wantFov - camera.fov) * Math.min(1, dt * 6); camera.updateProjectionMatrix(); }
        if (clock - lastDrag > 1.2) yaw = followYaw(yaw, player.heading, player.speed, dt);
      } else if (!ride) { player.speed = 0; player.y = 0; player.vy = 0; }
      turn = dt > 0 ? angleBetween(before, player.heading) / dt : 0;
      place();

      for (let i = angry.length - 1; i >= 0; i--) {
        const who = angry[i];
        if (clock < (who.angryUntil ?? 0)) continue;
        setMood(who.person, 'baseMood' in who ? who.baseMood : 'neutral');
        angry.splice(i, 1);
      }

      // Circles and the doors between cars.
      const here = ride ? null : spotAt(floor, player.x, player.z);
      const circle = circleStep({ inside, still, spent: consumed }, here, sceneId, p.paused || p.intro ? 1 : player.speed, dt);
      inside = circle.inside; still = circle.still; consumed = circle.spent;
      if (circle.open) p.onSpot(circle.open);
      const lift = !sceneId && !ride ? portalAt(floor, player.x, player.z)?.id ?? null : null;
      if (lift !== atLift) { atLift = lift; if (!lift) liftConsumed = false; }
      if (atLift && !liftConsumed && player.speed < 0.3 && !p.paused && !p.intro) { liftConsumed = true; p.onPortal(atLift); }
      // Anyone with a story within reach can be talked to (E).
      nearPerson = null;
      if (!inside && !atLift && !sceneId && !ride) {
        let best = 1.7;
        for (const n of building.npcs) {
          if (n.floor !== floor || !n.talk) continue;
          const d = Math.hypot(n.x - player.x, n.z - player.z);
          if (d < best) { best = d; nearPerson = n; }
        }
      }
      const near = inside ? `scene:${inside}` : atLift ? `portal:${atLift}` : nearPerson ? `person:${nearPerson.talk}` : '';
      if (near !== nearKey) { nearKey = near; p.onNear(inside ? { kind: 'scene', id: inside } : atLift ? { kind: 'portal', id: atLift } : nearPerson ? { kind: 'person', id: nearPerson.talk! } : null); }
      if (clock - poseAt > 0.2) {
        poseAt = clock;
        p.onPose({ floor, x: player.x, z: player.z, heading: player.heading, sector: sectorAt(floor, player.x, player.z)?.id ?? null });
      }

      // People: they glance at the mascot; the one he talks to turns and talks.
      for (const npc of building.npcs) {
        if (npc.floor !== floor) continue;
        const isTalking = Boolean(sceneId && npc.scene === sceneId && npc.main) || Boolean(p.personId && npc.talk === p.personId);
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
      building.animate(clock, dt, floor, player.x, player.z);
      animateHero(hero, dt, player.speed > 0.2 ? player.speed : 0, turn, sceneId ? 'talk' : 'move', reduced);

      // Camera: inside a car it stays in the corridor, under the roof, and
      // sways a little with the train; on the platforms it can rise.
      const y = floorById(floor).y;
      const sway = isCar(floor) && !reduced ? Math.sin(clock * 1.7) * 0.025 + Math.sin(clock * 4.3) * 0.008 : 0;
      if (p.intro) {
        introAt += dt;
        const a = introAt * (reduced ? 0.02 : 0.06);
        // The train at the platform of Mendoza, to the right of the title card.
        const wide = camera.aspect > 1.2;
        camera.position.set((wide ? -9 : -2) + Math.sin(a) * 1.5, 1.6 + Math.sin(introAt * 0.25) * 0.15, 7.0 + Math.cos(a) * 0.4);
        camera.lookAt(wide ? -3 : -2, 1.9, -2.2);
      } else if (sceneId) {
        const s = sceneById(sceneId)!;
        const mid = temp.set((player.x + s.npc.x) / 2, y + 1.35, (player.z + s.npc.z) / 2);
        // Beside the two people or over your shoulder, whichever sees the most
        // faces through the walls (a cabin is filmed from the corridor).
        if (!framed || framed.id !== sceneId) framed = { id: sceneId, ...sceneCamera(s, { x: player.x, z: player.z }) };
        desired.set(framed.x, y + Math.min(CEILING - 0.45, 1.85), framed.z + sway);
        if (camera.position.distanceTo(desired) > 10) { camera.position.copy(desired); look.copy(mid); }
        camera.position.lerp(desired, 1 - Math.exp(-dt * 3));
        look.lerp(mid, 1 - Math.exp(-dt * 4));
        camera.lookAt(look);
      } else {
        const dist = zoom;
        const cx = player.x - Math.sin(yaw) * Math.cos(pitch) * dist;
        const cz = player.z - Math.cos(yaw) * Math.cos(pitch) * dist;
        const k = clearArm(player.x, player.z, cx, cz);
        const ceiling = OPEN_AIR(floor) ? 12 : CEILING - 0.32;
        desired.set(player.x + (cx - player.x) * k, Math.min(y + ceiling, y + 1.55 + Math.sin(pitch) * dist * Math.max(0.55, k)), player.z + (cz - player.z) * k + sway);
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
        (o as THREE.DirectionalLight).shadow?.dispose();
        const m = o as THREE.Mesh;
        if (m.geometry) m.geometry.dispose();
        const mat = m.material as THREE.Material | THREE.Material[] | undefined;
        for (const x of Array.isArray(mat) ? mat : mat ? [mat] : []) {
          // Every texture slot (map, emissiveMap, …), then the material.
          for (const value of Object.values(x)) if ((value as THREE.Texture | null)?.isTexture) (value as THREE.Texture).dispose();
          x.dispose();
        }
      });
      // EffectComposer.dispose() frees its own targets, not its passes' (bloom mips).
      for (const pass of composer?.passes ?? []) pass.dispose();
      composer?.dispose();
      // The whole PMREM target, not only its texture: fromScene gives it a depth buffer.
      envTarget.dispose();
      pmrem.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
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

  return <div className="et-world">
    <div className="et-canvas" ref={mount} />
    <div className="et-fade" ref={fade} aria-hidden="true" />
    {touch && !props.sceneId && !props.intro && <div className="et-joy" onPointerDown={joyDown} onPointerMove={joyMove} onPointerUp={joyUp} onPointerCancel={joyUp} aria-hidden="true"><span ref={knob} /></div>}
    {touch && !props.sceneId && !props.intro && <div className="et-touch-actions">
      <button type="button" aria-label="Hablar o usar" onPointerDown={() => api.current?.interact()}>E<small>Usar</small></button>
      <button type="button" aria-label="Saltar" onPointerDown={() => api.current?.jump()}>↑<small>Saltar</small></button>
      <button type="button" aria-label="Nitro: mantén pulsado para correr muy rápido" onPointerDown={nitroOn} onPointerUp={nitroOff} onPointerCancel={nitroOff} onPointerLeave={nitroOff}>»<small>Nitro</small></button>
    </div>}
  </div>;
}
