'use client';

// El ascensor del cerro · the 3D runtime: renderer, camera, controls and the
// SpanishCue mascot on the cerro. Same controls as the other worlds (WASD or
// arrows, Space, Shift, N, touch joystick and buttons). The lesson
// (AscensorGame.tsx) owns the state; this component reports circles, rides
// and where the player is, and follows its props.
//
// Heights. The mascot walks on three flat terraces (layout.mjs). Between them
// it rides: the funicular (a scripted cabin-and-camera move, ~5 s, input
// locked) or the stairway (a scripted walk up or down the flight). Both are
// skippable (E, Space, Esc or the button) and cut straight to the arrival for
// reduced-motion users. No physics is added to the shared movement kit:
// stepPlayer runs in x/z exactly as in the other worlds, and the height comes
// from the terrace under the mascot.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import { canUseKeys, followYaw, inputFrom, keyAction, stepPlayer, angleBetween } from '../noche-abierta/world3d.mjs';
import { animateHero, createHero } from '../noche-abierta/hero3d';
import {
  BOUNDS, FUNICULAR, LINKS, SOLIDS, SPAWN, TERRACE_ARRIVAL, circleById, circleStep, clampCamera, framing, groundY, isClearGround, linkAt, linkById, ridePose,
  rideSeconds, spotAt, terraceAt, walksInto, type Link, type TerraceId,
} from './layout.mjs';
import { createBumpClock, pushOut } from '../escucha-3d/bump.mjs';
import { insultFor, shout } from '../escucha-3d/shout';
import { buildCerro, type Cerro } from './cerro3d';

export type Pose = { x: number; z: number; heading: number; terrace: TerraceId };
/** A move the teacher asks for from the list: ride a link, or jump to a terrace. */
export type Travel = { n: number; link?: string; terrace?: TerraceId };
export type WorldProps = {
  circleId: string | null;
  done: string[];
  paused: boolean;
  intro: boolean;
  travel: Travel | null;
  onSpot: (id: string) => void;
  onNear: (id: string | null) => void;
  onPose: (pose: Pose) => void;
  onRide?: (link: string | null) => void;
  onFail: () => void;
  onStats?: (stats: { calls: number; dpr: number; fps: number; people: number }) => void;
};

type Api = { joy: { x: number; y: number }; held: Set<string>; clear: () => void; interact: () => void; jump: () => void; nitro: { on: boolean }; skip: () => void };
const POSE_KEY = 'spanishcue:el-ascensor-del-cerro:pose:v1';
const RIDE_TEXT: Record<string, string> = {
  'ascensor-sube': 'Don Lorenzo te sube en la cabina de prueba',
  'ascensor-baja': 'Don Lorenzo te baja en la cabina de prueba',
};

function savedPose() {
  try {
    const data = JSON.parse(window.localStorage.getItem(POSE_KEY) ?? '');
    if (Number.isFinite(data?.x) && Number.isFinite(data?.z) && Number.isFinite(data?.heading) && isClearGround(data.x, data.z) && !spotAt(data.x, data.z) && !linkAt(data.x, data.z)) return { x: data.x as number, z: data.z as number, heading: data.heading as number };
  } catch { /* first visit or private mode */ }
  return { x: SPAWN.x, z: SPAWN.z, heading: SPAWN.heading };
}

/** A soft sky dome: blue overhead, hazy near the sea. One draw call. */
function skyDome() {
  const geometry = new THREE.SphereGeometry(320, 24, 12);
  const top = new THREE.Color('#7fb2d6'), mid = new THREE.Color('#bfd6e2'), low = new THREE.Color('#e9dcc6');
  const pos = geometry.attributes.position, colours = new Float32Array(pos.count * 3);
  const c = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    const h = pos.getY(i) / 320;
    if (h > 0.15) c.copy(mid).lerp(top, Math.min(1, (h - 0.15) / 0.6)); else c.copy(low).lerp(mid, Math.max(0, (h + 0.05) / 0.2));
    colours.set([c.r, c.g, c.b], i * 3);
  }
  geometry.setAttribute('color', new THREE.BufferAttribute(colours, 3));
  return new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide, fog: false, depthWrite: false }));
}

export default function World3D(props: WorldProps) {
  const live = useRef(props);
  useEffect(() => { live.current = props; });
  const mount = useRef<HTMLDivElement>(null);
  const knob = useRef<HTMLSpanElement>(null);
  const joyPointer = useRef<number | null>(null);
  const api = useRef<Api | null>(null);
  const [touch, setTouch] = useState(false);
  const [riding, setRiding] = useState<string | null>(null);
  const [linkNear, setLinkNear] = useState<string | null>(null);

  useEffect(() => { if (props.paused || props.circleId) api.current?.clear(); }, [props.paused, props.circleId]);

  useEffect(() => {
    const host = mount.current;
    if (!host) return;
    const low = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 760;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let renderer: THREE.WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: !low, powerPreference: 'high-performance' }); }
    catch { const t = window.setTimeout(() => live.current.onFail(), 0); return () => window.clearTimeout(t); }
    const touchTimer = window.setTimeout(() => setTouch(window.matchMedia('(pointer: coarse)').matches), 0);
    const dpr = Math.min(window.devicePixelRatio || 1, low ? 1.25 : 1.75);
    renderer.setPixelRatio(dpr);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.shadowMap.enabled = !low;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.domElement.tabIndex = 0;
    renderer.domElement.setAttribute('aria-label', 'El ascensor del cerro en 3D. Flechas o WASD para caminar, arrastra para mirar, E para abrir un círculo o subir al ascensor.');
    host.appendChild(renderer.domElement);
    const lost = (event: Event) => { event.preventDefault(); live.current.onFail(); };
    renderer.domElement.addEventListener('webglcontextlost', lost);

    const scene = new THREE.Scene();
    // Late afternoon over the bay, with a little sea haze.
    scene.background = new THREE.Color('#bfd6e2');
    scene.fog = new THREE.Fog('#c9d6dc', 70, 240);
    const camera = new THREE.PerspectiveCamera(58, 1, 0.1, 700);
    let cerro: Cerro;
    let hero: ReturnType<typeof createHero>;
    try { cerro = buildCerro(scene, { low, shadows: !low }); hero = createHero(!low); }
    catch (error) {
      console.error(error);
      renderer.dispose(); renderer.domElement.remove();
      const t = window.setTimeout(() => live.current.onFail(), 0);
      return () => window.clearTimeout(t);
    }
    scene.add(skyDome());
    scene.add(hero.root);
    const hemi = new THREE.HemisphereLight('#d6e6f2', '#6a5a48', 1.05);
    scene.add(hemi);
    const sun = new THREE.DirectionalLight('#fff0d6', 1.9);
    sun.castShadow = !low;
    sun.shadow.mapSize.set(1024, 1024);
    Object.assign(sun.shadow.camera, { left: -16, right: 16, top: 16, bottom: -16, near: 1, far: 80 });
    sun.shadow.bias = -0.0004;
    sun.shadow.normalBias = 0.03;
    scene.add(sun, sun.target);

    let composer: EffectComposer | null = null;
    if (!low) {
      composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));
      composer.addPass(new UnrealBloomPass(new THREE.Vector2(512, 512), 0.25, 0.4, 0.9));
      composer.addPass(new OutputPass());
    }

    // ------------------------------------------------------------ state
    const start = savedPose();
    let player = { x: start.x, z: start.z, heading: start.heading, speed: 0, y: 0, vy: 0, jumpHeld: false };
    let yaw = player.heading, pitch = 0.26, zoom = low ? 4.6 : 4.8;
    let turn = 0;
    const held = new Set<string>();
    const joy = { x: 0, y: 0 };
    const touchNitro = { on: false };
    let jumpUntil = -1;
    let drag: { id: number; x: number; y: number } | null = null;
    let lastDrag = -10, clock = 0, previous = 0, frame = 0, disposed = false, poseAt = 0, savedAt = 0;
    const mayYell = createBumpClock();
    let inside: string | null = null, still = 0, consumed: string | null = null, nearKey = '';
    let linkHere: string | null = null, linkSpent: string | null = null;
    let openCircle: string | null = null;
    let doneKey = '';
    let travelN = live.current.travel?.n ?? 0;
    let frames = 0, fpsAt = 0;
    // The funicular: cabin A (rail 0) is at sA; cabin B at 1 − sA. They start
    // with A down at the port.
    let sA = 0;
    let ride: { link: Link; start: number; seconds: number; rail: 0 | 1 } | null = null;
    const look = new THREE.Vector3();
    const desired = new THREE.Vector3();
    const temp = new THREE.Vector3();
    let heroY = groundY(player.x, player.z);

    function place() {
      hero.root.position.set(player.x, heroY + (ride ? 0 : player.y || 0), player.z);
      hero.root.rotation.y = player.heading;
      sun.position.set(player.x - 22, heroY + 30, player.z + 26);
      sun.target.position.set(player.x, heroY, player.z);
    }
    place();

    function clear() { held.clear(); joy.x = 0; joy.y = 0; drag = null; }

    function setLink(id: string | null) {
      if (id === linkHere) return;
      linkHere = id;
      setLinkNear(id);
    }

    function finishRide() {
      if (!ride) return;
      const link = ride.link;
      if (link.kind === 'funicular') sA = (ride.rail === 0) === (link.to === 'alto') ? 1 : 0;
      cerro.setCabins(sA);
      player = { ...player, x: link.exit.x, z: link.exit.z, heading: link.exit.heading, speed: 0, y: 0, vy: 0 };
      yaw = link.exit.heading;
      heroY = groundY(player.x, player.z);
      ride = null;
      linkSpent = null;
      setRiding(null);
      live.current.onRide?.(null);
      camera.position.set(player.x - Math.sin(yaw) * zoom, heroY + 3.2, player.z - Math.cos(yaw) * zoom);
    }

    function startRide(id: string) {
      const link = linkById(id);
      const p = live.current;
      if (!link || ride || p.paused || p.circleId || p.intro) return;
      clear();
      // The cabin at the departure station carries you.
      const atBottom: 0 | 1 = sA === 0 ? 0 : 1;
      const rail: 0 | 1 = link.kind !== 'funicular' ? 0 : link.from === 'puerto' ? atBottom : (atBottom === 0 ? 1 : 0);
      ride = { link, start: clock, seconds: rideSeconds(link), rail };
      linkSpent = id;
      setRiding(id);
      p.onRide?.(id);
      if (reduced) finishRide();
    }

    function interact() {
      const p = live.current;
      if (ride) { finishRide(); return; }
      if (p.paused || p.circleId || p.intro) return;
      if (inside) { consumed = inside; p.onSpot(inside); return; }
      if (linkHere) startRide(linkHere);
    }
    const jump = () => { jumpUntil = clock + 0.15; };
    api.current = { joy, held, clear, interact, jump, nitro: touchNitro, skip: finishRide };

    // ------------------------------------------------------------ input
    const onKeyDown = (event: KeyboardEvent) => {
      if (!canUseKeys(event.target as HTMLElement) || event.metaKey || event.ctrlKey || event.altKey) return;
      if (ride && (event.code === 'Space' || event.code === 'KeyE' || event.code === 'Enter' || event.code === 'Escape')) { event.preventDefault(); finishRide(); return; }
      if (live.current.paused || live.current.circleId || ride) return;
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
    const onDown = (event: PointerEvent) => {
      if (event.button !== 0 && event.pointerType === 'mouse') return;
      drag = { id: event.pointerId, x: event.clientX, y: event.clientY };
      canvasEl.setPointerCapture?.(event.pointerId);
    };
    const onMove = (event: PointerEvent) => {
      if (!drag || drag.id !== event.pointerId) return;
      const dx = event.clientX - drag.x, dy = event.clientY - drag.y;
      drag.x = event.clientX; drag.y = event.clientY;
      yaw -= dx * 0.006;
      pitch = Math.min(0.85, Math.max(0.02, pitch + dy * 0.004));
      lastDrag = clock;
    };
    const onUp = (event: PointerEvent) => { if (drag?.id === event.pointerId) drag = null; };
    const onWheel = (event: WheelEvent) => { event.preventDefault(); zoom = Math.min(8, Math.max(2.6, zoom + event.deltaY * 0.004)); };
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
        for (const spot of cerro.spots) {
          const isDone = p.done.includes(spot.id);
          spot.material.color.set(isDone ? '#8fa0a8' : '#ffffff');
          spot.material.opacity = isDone ? 0.45 : 0.95;
          spot.gem.visible = !isDone;
        }
      }

      // A circle opened from the list cuts straight to it, at its height.
      const circleId = p.circleId;
      if (circleId !== openCircle) {
        openCircle = circleId;
        const f = circleId ? framing(circleId) : null;
        if (f) {
          if (ride) finishRide();
          player = { ...player, x: f.x, z: f.z, heading: f.heading, speed: 0, y: 0, vy: 0 };
          consumed = circleId;
        }
      }
      // The teacher list: ride from a station, or go to a terrace.
      if (p.travel && p.travel.n !== travelN) {
        travelN = p.travel.n;
        const link = p.travel.link ? linkById(p.travel.link) : null;
        if (ride) finishRide();
        if (link) {
          player = { ...player, x: link.at.x, z: link.at.z, heading: link.enter, speed: 0, y: 0, vy: 0 };
          heroY = groundY(player.x, player.z);
          startRide(link.id);
        } else if (p.travel.terrace) {
          const a = TERRACE_ARRIVAL[p.travel.terrace];
          player = { ...player, x: a.x, z: a.z, heading: a.heading, speed: 0, y: 0, vy: 0 };
          yaw = a.heading;
        }
      }
      // Anything that pauses the world (a card, the list) ends a ride at once.
      if (ride && (p.paused || circleId)) finishRide();

      // Move, or ride.
      const moving = !p.paused && !circleId && !p.intro && !ride;
      const before = player.heading;
      if (ride) {
        const t = (clock - ride.start) / ride.seconds;
        const rp = ridePose(ride.link, t, FUNICULAR.rails[ride.rail]);
        if (rp) {
          player.x = rp.x; player.z = rp.z; player.heading = rp.heading; heroY = rp.y;
          player.speed = ride.link.kind === 'escalera' && t > 0.04 && t < 0.96 ? 2.2 : 0;
          if (rp.cabin != null) { sA = ride.rail === 0 ? rp.cabin : 1 - rp.cabin; cerro.setCabins(sA); }
        }
        if (t >= 1) finishRide();
      } else if (moving) {
        const input = inputFrom(held);
        const ix = input.x + joy.x, iy = input.y + joy.y;
        const nitro = input.nitro || touchNitro.on;
        const factor = input.sprint || nitro ? 1 : 0.75;
        const jumping = input.jump || clock < jumpUntil;
        const next = stepPlayer({ ...player, speed: player.speed / factor }, { x: ix, y: iy, yaw, sprint: input.sprint, nitro, walk: false, jump: jumping, jumpSpeed: 7.6 }, dt * factor, SOLIDS, BOUNDS);
        player = { ...player, x: next.x, z: next.z, heading: next.heading, speed: next.speed * factor, y: next.y, vy: next.vy, jumpHeld: next.jumpHeld };
        heroY = groundY(player.x, player.z);
        // People are solid, as in every 3D world: the mascot bumps into them
        // (never walks through them), and whoever it crashes into yells.
        if (player.y < 1.2) {
          const bodies = cerro.bodies().filter(b => Math.abs(b.y - heroY) < 1 && Math.abs(b.x - player.x) < 2 && Math.abs(b.z - player.z) < 2);
          const free = (x: number, z: number) => x > BOUNDS.minX + 0.4 && x < BOUNDS.maxX - 0.4 && z > BOUNDS.minZ + 0.4 && z < BOUNDS.maxZ - 0.4
            && !SOLIDS.some(b => (b.top == null || player.y < b.top) && x > b.x0 - 0.35 && x < b.x1 + 0.35 && z > b.z0 - 0.35 && z < b.z1 + 0.35);
          const out = pushOut(player.x, player.z, bodies, free);
          player.x = out.x; player.z = out.z;
          const who = out.hit >= 0 ? bodies[out.hit] : null;
          if (who && player.speed > 1.2 && mayYell(who.key, clock)) { shout(insultFor(who.body, who.seed), 1); player.speed *= 0.3; }
        }
        const wantFov = baseFov + (nitro && player.speed > 10 ? 10 : 0);
        if (Math.abs(wantFov - camera.fov) > 0.05) { camera.fov += (wantFov - camera.fov) * Math.min(1, dt * 6); camera.updateProjectionMatrix(); }
        if (clock - lastDrag > 1.2) yaw = followYaw(yaw, player.heading, player.speed, dt);
      } else { player.speed = 0; player.y = 0; player.vy = 0; heroY = groundY(player.x, player.z); }
      turn = dt > 0 ? angleBetween(before, player.heading) / dt : 0;
      place();

      // White circles and ride markers.
      if (!ride) {
        const here = spotAt(player.x, player.z);
        const circle = circleStep({ inside, still, spent: consumed }, here, circleId, p.paused || p.intro ? 1 : player.speed, dt);
        inside = circle.inside; still = circle.still; consumed = circle.spent;
        if (circle.open) p.onSpot(circle.open);
        const near = inside ?? '';
        if (near !== nearKey) { nearKey = near; p.onNear(inside); }
        const lk = linkAt(player.x, player.z);
        if (!lk) linkSpent = null;
        setLink(p.paused || circleId || p.intro ? null : lk);
        if (lk && moving && lk !== linkSpent && walksInto(linkById(lk), player.heading, player.speed)) startRide(lk);
      } else setLink(null);
      if (clock - poseAt > 0.2) { poseAt = clock; p.onPose({ x: player.x, z: player.z, heading: player.heading, terrace: terraceAt(player.x, player.z).id }); }
      if (clock - savedAt > 2 && !circleId && !ride) {
        savedAt = clock;
        try { window.localStorage.setItem(POSE_KEY, JSON.stringify({ x: Math.round(player.x * 10) / 10, z: Math.round(player.z * 10) / 10, heading: Math.round(player.heading * 100) / 100 })); } catch { /* private mode */ }
      }

      // The host of the open circle turns to the mascot.
      for (const npc of cerro.npcs) {
        const dx = player.x - npc.x, dz = player.z - npc.z;
        const facing = Math.atan2(dx, dz);
        const talking = npc.id === circleId;
        if (talking) { npc.heading += angleBetween(npc.heading, facing) * Math.min(1, dt * 4); npc.person.root.rotation.y = npc.heading; }
        npc.person.look = (Math.hypot(dx, dz) < 5 && Math.abs(npc.y - heroY) < 1) || talking ? Math.max(-1.1, Math.min(1.1, angleBetween(npc.heading, facing))) : null;
      }
      // Low mode: only the host of the open circle is live.
      cerro.focus(circleId);
      cerro.animate(reduced ? 0 : clock, dt, player.x, player.z);
      animateHero(hero, dt, player.speed > 0.2 ? player.speed : 0, turn, circleId ? 'talk' : 'move', reduced);

      // Camera.
      if (p.intro) {
        // From the bay, looking up the cerro.
        const a = clock * (reduced ? 0.01 : 0.05);
        camera.position.set(Math.sin(a) * 16, 22 + Math.sin(clock * 0.2) * 0.8, 64 + Math.cos(a) * 4);
        camera.lookAt(-2, 10, -8);
      } else if (ride) {
        // Beside the rail (funicular) or above the flight (stairs), on the
        // downhill side, where nothing stands between the camera and the rider.
        const off = ride.link.kind === 'funicular' ? { x: -8.5, y: 4.2, z: 7.5 } : { x: -5, y: 5, z: 7 };
        desired.set(player.x + off.x, heroY + off.y, player.z + off.z);
        if (camera.position.distanceTo(desired) > 18) camera.position.copy(desired);
        camera.position.lerp(desired, 1 - Math.exp(-dt * 4));
        temp.set(player.x, heroY + 1.3, player.z);
        if (look.distanceTo(temp) > 18) look.copy(temp);
        look.lerp(temp, 1 - Math.exp(-dt * 6));
        camera.lookAt(look);
      } else if (circleId) {
        const c = circleById(circleId)!;
        const gy = groundY(c.spot.x, c.spot.z);
        const mid = temp.set((player.x + c.npc.x) / 2, gy + 1.35, (player.z + c.npc.z) / 2);
        const side = Math.atan2(c.npc.x - player.x, c.npc.z - player.z) + Math.PI / 2;
        const dist = Math.max(2.8, Math.hypot(c.npc.x - player.x, c.npc.z - player.z) * 0.9 + 1.4);
        // Of the two sides, the one with more room (downhill, away from walls).
        const sx = mid.x + Math.sin(side) * dist, sz = mid.z + Math.cos(side) * dist;
        const ox = mid.x - Math.sin(side) * dist, oz = mid.z - Math.cos(side) * dist;
        const pick = sz >= oz ? { x: sx, z: sz } : { x: ox, z: oz };
        const safe = clampCamera(player.x, player.z, pick.x, gy + 2.0, pick.z);
        desired.set(safe.x, safe.y, safe.z);
        if (camera.position.distanceTo(desired) > 12) { camera.position.copy(desired); look.copy(mid); }
        camera.position.lerp(desired, 1 - Math.exp(-dt * 3));
        look.lerp(mid, 1 - Math.exp(-dt * 4));
        camera.lookAt(look);
      } else {
        const cx = player.x - Math.sin(yaw) * Math.cos(pitch) * zoom;
        const cz = player.z - Math.cos(yaw) * Math.cos(pitch) * zoom;
        const safe = clampCamera(player.x, player.z, cx, heroY + (player.y || 0) + 1.55 + Math.sin(pitch) * zoom, cz);
        desired.set(safe.x, safe.y, safe.z);
        if (camera.position.distanceTo(desired) > 14) camera.position.copy(desired);
        camera.position.lerp(desired, 1 - Math.exp(-dt * 10));
        look.set(player.x, heroY + (player.y || 0) + 1.3, player.z);
        camera.lookAt(look);
      }
      if (!moving && Math.abs(camera.fov - baseFov) > 0.05) { camera.fov = baseFov; camera.updateProjectionMatrix(); }
      renderer.info.reset();
      if (composer) composer.render(); else renderer.render(scene, camera);
      frames++;
      if (clock - fpsAt > 1) {
        p.onStats?.({ calls: renderer.info.render.calls, dpr, fps: Math.round(frames / (clock - fpsAt)), people: cerro.people() });
        frames = 0; fpsAt = clock;
      }
    };
    renderer.info.autoReset = false;
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
      canvasEl.removeEventListener('webglcontextlost', lost);
      scene.traverse(o => {
        const m = o as THREE.Mesh;
        if (m.geometry) m.geometry.dispose();
        const mat = m.material as THREE.Material | THREE.Material[] | undefined;
        if (Array.isArray(mat)) mat.forEach(x => x.dispose()); else mat?.dispose();
      });
      composer?.dispose();
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
  const free = !props.circleId && !props.intro && !riding;
  const near = linkNear ? LINKS.find(l => l.id === linkNear) ?? null : null;
  const ridingLink = riding ? linkById(riding) : null;

  return <div className="ac-world" data-ride={riding ?? undefined}>
    <div className="ac-canvas" ref={mount} />
    {ridingLink && <div className="ac-ride" role="status">
      <p><b>{ridingLink.kind === 'funicular' ? 'En el ascensor' : 'Por la escalera'}</b><span>{RIDE_TEXT[ridingLink.id] ?? (ridingLink.to === 'puerto' ? 'Bajando al puerto' : ridingLink.to === 'alto' ? 'Subiendo a lo alto del cerro' : 'Hacia la calle de la escalera')}</span></p>
      <button type="button" onClick={() => api.current?.skip()}>Saltar el viaje <kbd>E</kbd></button>
    </div>}
    {near && free && !props.paused && <div className="ac-prompt ac-prompt-link" role="status">
      <button type="button" onClick={() => api.current?.interact()}><kbd>E</kbd>{near.label}</button>
    </div>}
    {touch && free && <div className="ac-joy" onPointerDown={joyDown} onPointerMove={joyMove} onPointerUp={joyUp} onPointerCancel={joyUp} aria-hidden="true"><span ref={knob} /></div>}
    {touch && free && <div className="ac-touch-actions">
      <button type="button" aria-label="Abrir el círculo o subir" onPointerDown={() => api.current?.interact()}>E<small>Usar</small></button>
      <button type="button" aria-label="Saltar" onPointerDown={() => api.current?.jump()}>↑<small>Saltar</small></button>
      <button type="button" aria-label="Nitro: mantén pulsado para correr muy rápido" onPointerDown={nitroOn} onPointerUp={nitroOff} onPointerCancel={nitroOff} onPointerLeave={nitroOff}>»<small>Nitro</small></button>
    </div>}
  </div>;
}
