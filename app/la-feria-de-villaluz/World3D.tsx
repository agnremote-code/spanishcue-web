'use client';

// La feria de Villaluz · the 3D runtime: renderer, camera, controls and the
// SpanishCue mascot at the fair. Same controls as the other worlds (WASD or
// arrows, Space, Shift, N, touch joystick and buttons). The lesson
// (FeriaGame.tsx) owns the state; this component reports circles and where
// the player is, and follows its props. While a Busca card is open the camera
// faces the candidates from behind the mascot and drag-look is off, so
// "a la izquierda" means screen-left for everyone (risk 3).
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import { canUseKeys, followYaw, inputFrom, keyAction, stepPlayer, angleBetween } from '../noche-abierta/world3d.mjs';
import { animateHero, createHero } from '../noche-abierta/hero3d';
import { BOUNDS, SOLIDS, SPAWN, buscaCamera, buscaHeading, circleById, circleStep, framing, isClearGround, spotAt } from './layout.mjs';
import { createBumpClock, pushOut } from '../escucha-3d/bump.mjs';
import { insultFor, shout } from '../escucha-3d/shout';
import { buildFair, type Fair, type Placed } from './feria3d';
import { createCharlas } from '../charlas-3d/charlas3d';
import { fairPlaces } from './charlas';

export type Pose = { x: number; z: number; heading: number };
export type WorldProps = {
  circleId: string | null;
  /** The level being played: the extra conversation circles ask at this level. */
  level: string;
  busca: { circle: string; placed: Placed[] } | null;
  reveal: string | null;
  done: string[];
  paused: boolean;
  intro: boolean;
  onSpot: (id: string) => void;
  onNear: (id: string | null) => void;
  onPose: (pose: Pose) => void;
  onFail: () => void;
  onStats?: (stats: { calls: number; dpr: number; fps: number; people: number }) => void;
};

type Api = { joy: { x: number; y: number }; held: Set<string>; clear: () => void; interact: () => void; jump: () => void; nitro: { on: boolean } };
const POSE_KEY = 'spanishcue:la-feria-de-villaluz:pose:v1';

function savedPose(): Pose {
  try {
    const data = JSON.parse(window.localStorage.getItem(POSE_KEY) ?? '');
    if (Number.isFinite(data?.x) && Number.isFinite(data?.z) && Number.isFinite(data?.heading) && Math.abs(data.x) < BOUNDS.maxX && Math.abs(data.z) < BOUNDS.maxZ && !spotAt(data.x, data.z) && isClearGround(data.x, data.z)) return data;
  } catch { /* first visit or private mode */ }
  return { x: SPAWN.x, z: SPAWN.z, heading: SPAWN.heading };
}

export default function World3D(props: WorldProps) {
  const live = useRef(props);
  useEffect(() => { live.current = props; });
  const mount = useRef<HTMLDivElement>(null);
  const knob = useRef<HTMLSpanElement>(null);
  const joyPointer = useRef<number | null>(null);
  const api = useRef<Api | null>(null);
  const fairRef = useRef<Fair | null>(null);
  const [touch, setTouch] = useState(false);

  useEffect(() => { if (props.paused || props.circleId) api.current?.clear(); }, [props.paused, props.circleId]);
  useEffect(() => { fairRef.current?.showBusca(props.busca?.placed ?? null); }, [props.busca]);
  useEffect(() => { fairRef.current?.reveal(props.reveal); }, [props.reveal, props.busca]);

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
    renderer.domElement.setAttribute('aria-label', 'La feria de Villaluz en 3D. Flechas o WASD para caminar, arrastra para mirar, E para abrir un círculo.');
    host.appendChild(renderer.domElement);
    const lost = (event: Event) => { event.preventDefault(); live.current.onFail(); };
    renderer.domElement.addEventListener('webglcontextlost', lost);

    const scene = new THREE.Scene();
    // Dusk: deep blue sky to a warm horizon.
    scene.background = new THREE.Color('#1c2440');
    scene.fog = new THREE.Fog('#2a2a48', 45, 150);
    const camera = new THREE.PerspectiveCamera(58, 1, 0.1, 400);
    let fair: Fair;
    let hero: ReturnType<typeof createHero>;
    try { fair = buildFair(scene, { low, shadows: !low }); hero = createHero(!low); }
    catch (error) {
      console.error(error);
      renderer.domElement.removeEventListener('webglcontextlost', lost);
      renderer.dispose(); renderer.forceContextLoss(); renderer.domElement.remove();
      const t = window.setTimeout(() => live.current.onFail(), 0);
      return () => window.clearTimeout(t);
    }
    fairRef.current = fair;
    fair.showBusca(live.current.busca?.placed ?? null);
    // Conversation circles: everyone in the crowd and the big things of the fair.
    const charlas = createCharlas({
      parent: scene, host: mount.current!.parentElement ?? mount.current!, world: 'feria', level: () => live.current.level,
      people: function* () { for (const b of fair.bodies()) if (b.key.startsWith('crowd-')) yield { key: b.key, x: b.x, z: b.z }; },
      places: fairPlaces(),
    });
    fair.reveal(live.current.reveal);
    scene.add(hero.root);
    const hemi = new THREE.HemisphereLight('#8a9ad8', '#3a2a22', 0.85);
    scene.add(hemi);
    const sun = new THREE.DirectionalLight('#ffb27a', 1.1);
    sun.castShadow = !low;
    sun.shadow.mapSize.set(1024, 1024);
    Object.assign(sun.shadow.camera, { left: -14, right: 14, top: 14, bottom: -14, near: 1, far: 60 });
    sun.shadow.bias = -0.0004;
    sun.shadow.normalBias = 0.03;
    scene.add(sun, sun.target);
    // A soft fill from the camera while a Busca card is open: one directional
    // light for the whole scene, so every candidate gets the same light and
    // the target never stands out (AC4). It always exists (intensity 0 when
    // unused), so turning it on recompiles no shader.
    const fill = new THREE.DirectionalLight('#fff1dc', 0);
    scene.add(fill, fill.target);
    // The last light of the day on the horizon.
    const horizon = new THREE.Mesh(new THREE.CylinderGeometry(170, 170, 60, 32, 1, true), new THREE.MeshBasicMaterial({ color: '#d0805a', side: THREE.BackSide, transparent: true, opacity: 0.35, fog: false }));
    horizon.position.y = 5;
    scene.add(horizon);

    let composer: EffectComposer | null = null;
    if (!low) {
      composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));
      composer.addPass(new UnrealBloomPass(new THREE.Vector2(512, 512), 0.55, 0.45, 0.82));
      composer.addPass(new OutputPass());
    }

    // ------------------------------------------------------------ state
    const start = savedPose();
    let player = { x: start.x, z: start.z, heading: start.heading, speed: 0, y: 0, vy: 0, jumpHeld: false };
    let yaw = player.heading, pitch = 0.24, zoom = low ? 4.2 : 4.4;
    let turn = 0;
    const held = new Set<string>();
    const joy = { x: 0, y: 0 };
    const touchNitro = { on: false };
    let jumpUntil = -1;
    let drag: { id: number; x: number; y: number } | null = null;
    let lastDrag = -10, clock = 0, previous = 0, frame = 0, disposed = false, poseAt = 0, savedAt = 0;
    const mayYell = createBumpClock();
    let inside: string | null = null, still = 0, consumed: string | null = null, nearKey = '';
    let openCircle: string | null = null;
    let doneKey = '';
    let frames = 0, fpsAt = 0;
    const look = new THREE.Vector3();
    const desired = new THREE.Vector3();
    const temp = new THREE.Vector3();

    function place() {
      hero.root.position.set(player.x, player.y || 0, player.z);
      hero.root.rotation.y = player.heading;
      sun.position.set(player.x - 18, 22, player.z + 10);
      sun.target.position.set(player.x, 0, player.z);
    }
    place();

    function clear() { held.clear(); joy.x = 0; joy.y = 0; drag = null; }
    function interact() {
      const p = live.current;
      if (p.paused || p.circleId || p.intro) return;
      if (inside) { consumed = inside; p.onSpot(inside); }
    }
    const jump = () => { jumpUntil = clock + 0.15; };
    api.current = { joy, held, clear, interact, jump, nitro: touchNitro };

    // ------------------------------------------------------------ input
    const onKeyDown = (event: KeyboardEvent) => {
      if (!canUseKeys(event.target as HTMLElement) || event.metaKey || event.ctrlKey || event.altKey) return;
      if (live.current.paused || live.current.circleId) return;
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
      if (live.current.busca) return;
      drag = { id: event.pointerId, x: event.clientX, y: event.clientY };
      canvasEl.setPointerCapture?.(event.pointerId);
    };
    const onMove = (event: PointerEvent) => {
      if (!drag || drag.id !== event.pointerId || live.current.busca) return;
      const dx = event.clientX - drag.x, dy = event.clientY - drag.y;
      drag.x = event.clientX; drag.y = event.clientY;
      yaw -= dx * 0.006;
      pitch = Math.min(0.85, Math.max(0.02, pitch + dy * 0.004));
      lastDrag = clock;
    };
    const onUp = (event: PointerEvent) => { if (drag?.id === event.pointerId) drag = null; };
    const onWheel = (event: WheelEvent) => { event.preventDefault(); zoom = Math.min(8, Math.max(2.4, zoom + event.deltaY * 0.004)); };
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
      // The gem of the Busca circle hides while its card is open: it would
      // float among the candidates in the raised Busca view.
      const dk = `${p.done.join()}|${p.busca?.circle ?? ''}`;
      if (dk !== doneKey) {
        doneKey = dk;
        for (const spot of fair.spots) {
          const isDone = p.done.includes(spot.id);
          spot.material.color.set(isDone ? '#8fa0a8' : '#ffffff');
          spot.material.opacity = isDone ? 0.45 : 0.95;
          spot.gem.visible = !isDone && spot.id !== p.busca?.circle;
        }
      }

      // A circle opened from the list cuts straight to it.
      const circleId = p.circleId;
      if (circleId !== openCircle) {
        openCircle = circleId;
        const f = circleId ? framing(circleId) : null;
        if (f) { player = { ...player, x: f.x, z: f.z, heading: f.heading, speed: 0, y: 0, vy: 0 }; consumed = circleId; }
      }
      const busca = p.busca;
      if (busca) {
        const c = circleById(busca.circle);
        if (c) { player.x = c.spot.x; player.z = c.spot.z; player.heading = buscaHeading(c); yaw = player.heading; }
      }

      // Move.
      const moving = !p.paused && !circleId && !busca && !p.intro;
      const before = player.heading;
      if (moving) {
        const input = inputFrom(held);
        const ix = input.x + joy.x, iy = input.y + joy.y;
        const nitro = input.nitro || touchNitro.on;
        const factor = input.sprint || nitro ? 1 : 0.75;
        const jumping = input.jump || clock < jumpUntil;
        const next = stepPlayer({ ...player, speed: player.speed / factor }, { x: ix, y: iy, yaw, sprint: input.sprint, nitro, walk: false, jump: jumping, jumpSpeed: 7.6 }, dt * factor, SOLIDS, BOUNDS);
        player = { ...player, x: next.x, z: next.z, heading: next.heading, speed: next.speed * factor, y: next.y, vy: next.vy, jumpHeld: next.jumpHeld };
        // People are solid, as in every 3D world: the mascot bumps into them
        // (never walks through them), and whoever it crashes into yells.
        if (player.y < 1.2) {
          const bodies = fair.bodies().filter(b => Math.abs(b.x - player.x) < 2 && Math.abs(b.z - player.z) < 2);
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
      } else { player.speed = 0; player.y = 0; player.vy = 0; }
      turn = dt > 0 ? angleBetween(before, player.heading) / dt : 0;
      place();

      // White circles.
      const here = spotAt(player.x, player.z);
      const circle = circleStep({ inside, still, spent: consumed }, here, circleId, p.paused || p.intro || busca ? 1 : player.speed, dt);
      inside = circle.inside; still = circle.still; consumed = circle.spent;
      if (circle.open && !busca) p.onSpot(circle.open);
      charlas.update(player, dt, !inside && !circleId && !busca && !p.paused && !p.intro);
      const near = inside ?? '';
      if (near !== nearKey) { nearKey = near; p.onNear(inside); }
      if (clock - poseAt > 0.2) { poseAt = clock; p.onPose({ x: player.x, z: player.z, heading: player.heading }); }
      if (clock - savedAt > 2 && !circleId && !busca) {
        savedAt = clock;
        try { window.localStorage.setItem(POSE_KEY, JSON.stringify({ x: Math.round(player.x * 10) / 10, z: Math.round(player.z * 10) / 10, heading: Math.round(player.heading * 100) / 100 })); } catch { /* private mode */ }
      }

      // The host of the open circle turns to the mascot.
      for (const npc of fair.npcs) {
        const dx = player.x - npc.x, dz = player.z - npc.z;
        const facing = Math.atan2(dx, dz);
        const talking = npc.id === circleId && !busca;
        if (talking) { npc.heading += angleBetween(npc.heading, facing) * Math.min(1, dt * 4); npc.person.root.rotation.y = npc.heading; }
        npc.person.look = Math.hypot(dx, dz) < 5 || talking ? Math.max(-1.1, Math.min(1.1, angleBetween(npc.heading, facing))) : null;
      }
      // Low mode: only the host of the open circle is live (T5 bake).
      fair.focus(circleId && !busca ? circleId : null);
      fair.animate(reduced ? 0 : clock, dt, player.x, player.z);
      animateHero(hero, dt, player.speed > 0.2 ? player.speed : 0, turn, circleId && !busca ? 'talk' : 'move', reduced);

      // Camera.
      if (p.intro) {
        const a = clock * (reduced ? 0.01 : 0.05);
        camera.position.set(Math.sin(a) * 26, 9 + Math.sin(clock * 0.2) * 0.6, 30 + Math.cos(a) * 6);
        camera.lookAt(-4, 6, -18);
      } else if (busca) {
        // Behind the mascot, facing the cluster: screen-left = his left.
        // Raised above the mascot and wide enough for every candidate
        // (layout.mjs buscaCamera, D6 framing fix).
        const view = buscaCamera(busca.circle, camera.aspect, busca.placed);
        desired.set(view.position.x, view.position.y, view.position.z);
        if (camera.position.distanceTo(desired) > 12) camera.position.copy(desired);
        camera.position.lerp(desired, 1 - Math.exp(-dt * 5));
        temp.set(view.target.x, view.target.y, view.target.z);
        if (look.distanceTo(temp) > 12) look.copy(temp);
        look.lerp(temp, 1 - Math.exp(-dt * 6));
        camera.lookAt(look);
        if (Math.abs(camera.fov - view.fov) > 0.05) { camera.fov = view.fov; camera.updateProjectionMatrix(); }
        fill.position.copy(camera.position);
        fill.target.position.set(view.target.x, view.target.y, view.target.z);
      } else if (circleId) {
        const c = circleById(circleId)!;
        const mid = temp.set((player.x + c.npc.x) / 2, 1.35, (player.z + c.npc.z) / 2);
        const side = Math.atan2(c.npc.x - player.x, c.npc.z - player.z) + Math.PI / 2;
        const dist = Math.max(2.8, Math.hypot(c.npc.x - player.x, c.npc.z - player.z) * 0.9 + 1.4);
        desired.set(mid.x + Math.sin(side) * dist, 2.0, mid.z + Math.cos(side) * dist);
        if (camera.position.distanceTo(desired) > 12) { camera.position.copy(desired); look.copy(mid); }
        camera.position.lerp(desired, 1 - Math.exp(-dt * 3));
        look.lerp(mid, 1 - Math.exp(-dt * 4));
        camera.lookAt(look);
      } else {
        const cx = player.x - Math.sin(yaw) * Math.cos(pitch) * zoom;
        const cz = player.z - Math.cos(yaw) * Math.cos(pitch) * zoom;
        desired.set(cx, (player.y || 0) + 1.55 + Math.sin(pitch) * zoom, cz);
        if (camera.position.distanceTo(desired) > 14) camera.position.copy(desired);
        camera.position.lerp(desired, 1 - Math.exp(-dt * 10));
        look.set(player.x, (player.y || 0) + 1.3, player.z);
        camera.lookAt(look);
      }
      fill.intensity += ((busca ? 1.1 : 0) - fill.intensity) * Math.min(1, dt * 6);
      if (!busca && !moving && Math.abs(camera.fov - baseFov) > 0.05) { camera.fov = baseFov; camera.updateProjectionMatrix(); }
      renderer.info.reset();
      if (composer) composer.render(); else renderer.render(scene, camera);
      frames++;
      if (clock - fpsAt > 1) {
        p.onStats?.({ calls: renderer.info.render.calls, dpr, fps: Math.round(frames / (clock - fpsAt)), people: fair.people() });
        frames = 0; fpsAt = clock;
      }
    };
    renderer.info.autoReset = false;
    frame = requestAnimationFrame(loop);

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      charlas.dispose();
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
      fair.dispose();
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
      renderer.dispose();
      renderer.forceContextLoss();
      renderer.domElement.remove();
      api.current = null;
      fairRef.current = null;
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
  const free = !props.circleId && !props.busca && !props.intro;

  return <div className="fv-world">
    <div className="fv-canvas" ref={mount} />
    {touch && free && <div className="fv-joy" onPointerDown={joyDown} onPointerMove={joyMove} onPointerUp={joyUp} onPointerCancel={joyUp} aria-hidden="true"><span ref={knob} /></div>}
    {touch && free && <div className="fv-touch-actions">
      <button type="button" aria-label="Abrir el círculo" onPointerDown={() => api.current?.interact()}>E<small>Usar</small></button>
      <button type="button" aria-label="Saltar" onPointerDown={() => api.current?.jump()}>↑<small>Saltar</small></button>
      <button type="button" aria-label="Nitro: mantén pulsado para correr muy rápido" onPointerDown={nitroOn} onPointerUp={nitroOff} onPointerCancel={nitroOff} onPointerLeave={nitroOff}>»<small>Nitro</small></button>
    </div>}
  </div>;
}
