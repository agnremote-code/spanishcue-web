'use client';

// HR Crisis · the 3D runtime: renderer, camera, controls and Tizia walking
// through Caos y Asociados. The lesson (HrGame.tsx) owns the state; this
// component reports the mission circle the mascot stands in and where she
// is, and follows its props (open circles, the task on screen, her mood).
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import { canUseKeys, followYaw, inputFrom, keyAction, stepPlayer, angleBetween } from '../noche-abierta/world3d.mjs';
import { BOUNDS, CAST, CEILING, JUMP_SPEED, SPAWN, SPOTS, cameraBlockers, circleStep, roomAt, solidsFor, spotAt, spotFraming } from './oficina.mjs';
import { buildOficina, talking as talkingNow, type Npc, type Mover } from './oficina3d';
import { animateTizia, createTizia, type TiziaGesture, type TiziaMood } from './tizia3d';
import { createBumpClock, pushOut } from '../escucha-3d/bump.mjs';
import { insultFor, shout } from '../escucha-3d/shout';
import { setMood } from '../noche-abierta/people3d';
import { createCharlas } from '../charlas-3d/charlas3d';

export type Pose = { x: number; z: number; heading: number; room: string | null };
export type WorldProps = {
  pais: string;
  level: string;
  open: string[];
  done: string[];
  taskId: string | null;
  paused: boolean;
  intro: boolean;
  mood: TiziaMood;
  /** Bumped by the lesson to play a gesture once (feedback, a decision…). */
  gesture: { g: TiziaGesture; n: number };
  onSpot: (id: string) => void;
  onNear: (id: string | null) => void;
  onPose: (pose: Pose) => void;
  onFail: () => void;
};

type Api = { joy: { x: number; y: number }; held: Set<string>; clear: () => void; interact: () => void; jump: () => void; nitro: { on: boolean } };

const PLACES = [
  { id: 'cafetera', x: 5.3, z: 8.4, r: 1.1, title: 'La máquina de café rota', intro: 'Echa humo y tiene un cartel: «FUERA DE SERVICIO».', themes: ['trabajo', 'comida'] },
  { id: 'loro', x: 21.6, z: -15.5, r: 1.1, title: 'El loro del director', intro: 'Se llama Señor Pérez y grita «¡despedido!» a todo el mundo.', themes: ['animales', 'poder'] },
  { id: 'impresora', x: -6.8, z: 4, r: 1.0, title: 'La impresora que escupe papeles', intro: 'Imprime sola desde el lunes. Nadie sabe qué.', themes: ['tecnologia', 'trabajo'] },
  { id: 'ventanal', x: -2, z: -16.2, r: 1.1, title: 'La pizarra de las reuniones', intro: '«Hoy: 12 reuniones, 0 soluciones».', themes: ['tiempo', 'dinero'] },
];

export default function World3D(props: WorldProps) {
  const live = useRef(props);
  useEffect(() => { live.current = props; });
  const mount = useRef<HTMLDivElement>(null);
  const knob = useRef<HTMLSpanElement>(null);
  const joyPointer = useRef<number | null>(null);
  const api = useRef<Api | null>(null);
  const [touch, setTouch] = useState(false);

  useEffect(() => { if (props.paused || props.taskId) api.current?.clear(); }, [props.paused, props.taskId]);

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
    renderer.domElement.setAttribute('aria-label', 'La oficina de Caos y Asociados en 3D. Flechas o WASD para caminar, arrastra para mirar, E para hablar, espacio para saltar, N para el nitro.');
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#dfe8ee');
    const camera = new THREE.PerspectiveCamera(60, 1, 0.06, 200);
    let building: ReturnType<typeof buildOficina>;
    let hero: ReturnType<typeof createTizia>;
    try { building = buildOficina(scene, { low, shadows: !low }); hero = createTizia({ pais: live.current.pais }, !low); }
    catch (error) {
      console.error(error);
      renderer.dispose(); renderer.forceContextLoss(); renderer.domElement.remove();
      const t = window.setTimeout(() => live.current.onFail(), 0);
      return () => window.clearTimeout(t);
    }
    scene.add(hero.root);
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envTarget = pmrem.fromScene(new RoomEnvironment(), 0.04);
    scene.environment = envTarget.texture;
    scene.environmentIntensity = 0.35;
    const hemi = new THREE.HemisphereLight('#ffffff', '#8a8070', 1.05);
    scene.add(hemi);
    const key = new THREE.DirectionalLight('#fff6ea', 0.8);
    key.castShadow = !low;
    key.shadow.mapSize.set(1024, 1024);
    Object.assign(key.shadow.camera, { left: -10, right: 10, top: 10, bottom: -10, near: 0.5, far: 30 });
    key.shadow.bias = -0.0004;
    key.shadow.normalBias = 0.03;
    scene.add(key, key.target);
    let composer: EffectComposer | null = null;
    if (!low) {
      composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));
      composer.addPass(new OutputPass());
    }

    // ------------------------------------------------------------ state
    const solids = solidsFor() as { x0: number; x1: number; z0: number; z1: number; top?: number }[];
    const walls = cameraBlockers();
    let player = { x: SPAWN.x, z: SPAWN.z, heading: SPAWN.heading, speed: 0, y: 0, vy: 0, jumpHeld: false };
    let yaw = player.heading, pitch = 0.3, zoom = low ? 3.6 : 3.8;
    const held = new Set<string>();
    const joy = { x: 0, y: 0 };
    const touchNitro = { on: false };
    let jumpUntil = -1;
    let drag: { id: number; x: number; y: number } | null = null;
    let lastDrag = -10, clock = 0, previous = 0, frame = 0, disposed = false, poseAt = 0;
    let inside: string | null = null, still = 0, consumed: string | null = null, nearKey = '';
    let openTask: string | null = null;
    let spotsKey = '';
    let gestureN = live.current.gesture.n;
    let moodNow = '';
    let introAt = 0;
    const mayYell = createBumpClock();
    const angry: (Npc | Mover)[] = [];
    const look = new THREE.Vector3();
    const desired = new THREE.Vector3();
    const temp = new THREE.Vector3();

    function place() {
      hero.root.position.set(player.x, player.y || 0, player.z);
      hero.root.rotation.y = player.heading;
      key.position.set(player.x - 4, 9, player.z + 5);
      key.target.position.set(player.x, 0, player.z);
    }
    place();

    function clear() { held.clear(); joy.x = 0; joy.y = 0; drag = null; }
    function interact() {
      const p = live.current;
      if (p.paused || p.taskId || p.intro) return;
      if (inside) { consumed = inside; p.onSpot(inside); }
    }
    const jump = () => { jumpUntil = clock + 0.15; };
    if (new URLSearchParams(window.location.search).has('qa3d')) {
      (window as unknown as { __hr3d?: unknown }).__hr3d = {
        place: (x: number, z: number, heading = 0) => { player = { ...player, x, z, heading, speed: 0, y: 0, vy: 0 }; yaw = heading; },
        where: () => ({ x: player.x, z: player.z, y: player.y }),
        look: (y: number, pt: number, d: number) => { yaw = y; pitch = pt; zoom = d; lastDrag = clock + 1000; },
        scene, hero,
      };
    }
    api.current = { joy, held, clear, interact, jump, nitro: touchNitro };

    const charlas = createCharlas({
      parent: scene, host: host.parentElement ?? host, world: 'oficina', level: () => live.current.level,
      people: function* () {
        for (const n of building.npcs) if (!n.cast) yield { key: n.key, x: n.x, z: n.z };
        for (const m of building.movers) yield { key: m.key, x: m.x, z: m.z };
      },
      places: PLACES,
    });

    // ------------------------------------------------------------ input
    const onKeyDown = (event: KeyboardEvent) => {
      if (!canUseKeys(event.target as HTMLElement) || event.metaKey || event.ctrlKey || event.altKey) return;
      if (live.current.paused || live.current.taskId || charlas.isOpen()) return;
      if ((event.code === 'KeyE' || event.code === 'Enter') && inside) { event.preventDefault(); interact(); return; }
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
      pitch = Math.min(0.8, Math.max(0.02, pitch + dy * 0.004));
      lastDrag = clock;
    };
    const onUp = (event: PointerEvent) => { if (drag?.id === event.pointerId) drag = null; };
    const onWheel = (event: WheelEvent) => { event.preventDefault(); zoom = Math.min(6, Math.max(2.2, zoom + event.deltaY * 0.004)); };
    canvasEl.addEventListener('pointerdown', onDown);
    canvasEl.addEventListener('pointermove', onMove);
    canvasEl.addEventListener('pointerup', onUp);
    canvasEl.addEventListener('pointercancel', onUp);
    canvasEl.addEventListener('wheel', onWheel, { passive: false });

    let baseFov = 60;
    const resize = () => {
      const w = host.clientWidth || 1, h = host.clientHeight || 1;
      renderer.setSize(w, h, false);
      composer?.setSize(w, h);
      camera.aspect = w / h;
      baseFov = w / h < 0.8 ? 72 : 60;
      camera.fov = baseFov;
      camera.updateProjectionMatrix();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    resize();

    function clearArm(x: number, z: number, cx: number, cz: number) {
      let t = 1;
      for (let i = 1; i <= 12; i++) {
        const k = i / 12;
        const px = x + (cx - x) * k, pz = z + (cz - z) * k;
        if (walls.some(w => px > w.x0 - 0.2 && px < w.x1 + 0.2 && pz > w.z0 - 0.2 && pz < w.z1 + 0.2)) { t = Math.max(0.15, (i - 1) / 12); break; }
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

      const sk = `${p.open.join()}|${p.done.join()}`;
      if (sk !== spotsKey) { spotsKey = sk; building.setSpots(p.open, p.done); }
      if (p.mood !== moodNow) { moodNow = p.mood; hero.setMood(p.mood); }
      if (p.gesture.n !== gestureN) { gestureN = p.gesture.n; hero.gesture(p.gesture.g, p.gesture.g === 'celebrate' ? 2.4 : 2.2); }

      const taskId = p.taskId;
      if (taskId !== openTask) {
        // Closing a task leaves the circle spent until the mascot walks out.
        if (!taskId && openTask) consumed = openTask;
        openTask = taskId;
        if (taskId) {
          const f = spotFraming(taskId);
          if (f) { player = { ...player, x: f.x, z: f.z, heading: f.heading, speed: 0, y: 0, vy: 0 }; consumed = taskId; }
          hero.gesture('wave', 1.6);
        }
      }

      const moving = !p.paused && !taskId && !p.intro && !charlas.isOpen();
      if (moving) {
        const input = inputFrom(held);
        const ix = input.x + joy.x, iy = input.y + joy.y;
        const nitro = input.nitro || touchNitro.on;
        const factor = input.sprint || nitro ? 1 : 0.7;
        const jumping = input.jump || clock < jumpUntil;
        const next = stepPlayer({ ...player, speed: player.speed / factor }, { x: ix, y: iy, yaw, sprint: input.sprint, nitro, walk: false, jump: jumping, jumpSpeed: JUMP_SPEED }, dt * factor, solids, BOUNDS);
        player = { ...player, x: next.x, z: next.z, heading: next.heading, speed: next.speed * factor, y: next.y, vy: next.vy, jumpHeld: next.jumpHeld };
        // People are solid; whoever you crash into turns, glares and yells.
        if (player.y < 1.2) {
          const bodies = building.bodies();
          const free = (x: number, z: number) => x > BOUNDS.minX + 0.4 && x < BOUNDS.maxX - 0.4 && z > BOUNDS.minZ + 0.4 && z < BOUNDS.maxZ - 0.4
            && !solids.some(b => (b.top == null || player.y < b.top) && x > b.x0 - 0.35 && x < b.x1 + 0.35 && z > b.z0 - 0.35 && z < b.z1 + 0.35);
          const out = pushOut(player.x, player.z, bodies, free);
          player.x = out.x; player.z = out.z;
          const who: Npc | Mover | null = out.hit >= 0 ? bodies[out.hit].who : null;
          if (who && (next.speed > 1.2 || ('moving' in who && who.moving)) && mayYell(who, clock)) {
            const line = insultFor(who.body ?? 'm', who.seed);
            building.say(who, line.text, 3.2, true);
            shout(line, 1);
            setMood(who.person, 'furious');
            who.angryUntil = clock + 3.5;
            if (!angry.includes(who)) angry.push(who);
            if ('seated' in who && !who.seated) { who.heading = Math.atan2(player.x - who.x, player.z - who.z); who.person.root.rotation.y = who.heading; }
            hero.gesture('facepalm', 1.4);
            player.speed *= 0.3;
          }
        }
        const wantFov = baseFov + (nitro && player.speed > 10 ? 10 : 0);
        if (Math.abs(wantFov - camera.fov) > 0.05) { camera.fov += (wantFov - camera.fov) * Math.min(1, dt * 6); camera.updateProjectionMatrix(); }
        if (clock - lastDrag > 1.2) yaw = followYaw(yaw, player.heading, player.speed, dt);
      } else { player.speed = 0; player.y = 0; player.vy = 0; }
      place();
      for (let i = angry.length - 1; i >= 0; i--) {
        const who = angry[i];
        if (clock < (who.angryUntil ?? 0)) continue;
        setMood(who.person, 'baseMood' in who ? who.baseMood : 'neutral');
        angry.splice(i, 1);
      }

      // Mission circles (only the open ones).
      const here = spotAt(player.x, player.z, p.open);
      const circle = circleStep({ inside, still, spent: consumed }, here, taskId, p.paused || p.intro ? 1 : player.speed, dt);
      inside = circle.inside; still = circle.still; consumed = circle.spent;
      if (circle.open) p.onSpot(circle.open);
      if ((inside ?? '') !== nearKey) { nearKey = inside ?? ''; p.onNear(inside); }
      charlas.update(player, dt, moving && !inside);
      if (clock - poseAt > 0.2) {
        poseAt = clock;
        p.onPose({ x: player.x, z: player.z, heading: player.heading, room: roomAt(player.x, player.z)?.id ?? null });
      }

      // People glance at Tizia; the one in the open task turns and talks.
      const spot = taskId ? SPOTS[taskId as keyof typeof SPOTS] : null;
      for (const npc of building.npcs) {
        const isTalking = Boolean(spot && 'npc' in spot && (npc.cast === spot.npc || ('also' in spot && npc.cast === spot.also)));
        if (isTalking) talkingNow.add(npc.person); else talkingNow.delete(npc.person);
        const dx = player.x - npc.x, dz = player.z - npc.z;
        const facing = Math.atan2(dx, dz);
        if (isTalking && !npc.seated) {
          npc.heading += angleBetween(npc.heading, facing) * Math.min(1, dt * 4);
          npc.person.root.rotation.y = npc.heading;
        }
        npc.person.look = (Math.hypot(dx, dz) < 5 || isTalking) ? Math.max(-1.1, Math.min(1.1, angleBetween(npc.heading, facing))) : null;
        if (isTalking) npc.person.attention = 1;
      }
      building.animate(clock, dt, player.x, player.z);
      animateTizia(hero, dt, player.speed > 0.2 ? player.speed : 0, Boolean(taskId), reduced);

      // Camera: always below the 3.2 m ceiling.
      if (p.intro) {
        introAt += dt;
        const a = introAt * (reduced ? 0.02 : 0.08);
        // Tizia on the right third of the frame, clear of the title text on the left.
        const wide = host.clientWidth > 720 ? 1 : 0;
        camera.position.set(Math.sin(a) * 1.2 + wide * 0.6, 1.5, 12.3 + Math.cos(a) * 0.3);
        camera.lookAt(player.x + wide * 1.5, 1.15, player.z);
      } else if (taskId) {
        const who = spot && 'npc' in spot ? CAST[spot.npc as keyof typeof CAST] : null;
        const tx = who ? who.x : player.x + Math.sin(player.heading) * 1.5, tz = who ? who.z : player.z + Math.cos(player.heading) * 1.5;
        const mid = temp.set((player.x + tx) / 2, 1.3, (player.z + tz) / 2);
        const side = Math.atan2(tx - player.x, tz - player.z) + Math.PI / 2;
        const dist = Math.max(2.4, Math.hypot(tx - player.x, tz - player.z) * 0.9 + 1.1);
        let cx = mid.x + Math.sin(side) * dist, cz = mid.z + Math.cos(side) * dist;
        if (clearArm(mid.x, mid.z, cx, cz) < 0.8) { cx = mid.x - Math.sin(side) * dist; cz = mid.z - Math.cos(side) * dist; }
        const k = clearArm(mid.x, mid.z, cx, cz);
        desired.set(mid.x + (cx - mid.x) * k, Math.min(CEILING - 0.35, 1.85), mid.z + (cz - mid.z) * k);
        if (camera.position.distanceTo(desired) > 10) { camera.position.copy(desired); look.copy(mid); }
        camera.position.lerp(desired, 1 - Math.exp(-dt * 3));
        look.lerp(mid, 1 - Math.exp(-dt * 4));
        camera.lookAt(look);
      } else {
        const dist = zoom;
        const cx = player.x - Math.sin(yaw) * Math.cos(pitch) * dist;
        const cz = player.z - Math.cos(yaw) * Math.cos(pitch) * dist;
        const k = clearArm(player.x, player.z, cx, cz);
        desired.set(player.x + (cx - player.x) * k, Math.min(CEILING - 0.3, 1.5 + Math.sin(pitch) * dist * Math.max(0.55, k)), player.z + (cz - player.z) * k);
        if (camera.position.distanceTo(desired) > 14) camera.position.copy(desired);
        camera.position.lerp(desired, 1 - Math.exp(-dt * 10));
        look.set(player.x, 1.2 + (player.y || 0) * 0.5, player.z);
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
      charlas.dispose();
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
          for (const value of Object.values(x)) if ((value as THREE.Texture | null)?.isTexture) (value as THREE.Texture).dispose();
          x.dispose();
        }
      });
      for (const pass of composer?.passes ?? []) pass.dispose();
      composer?.dispose();
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

  return <div className="hr-world">
    <div className="hr-canvas" ref={mount} />
    {touch && !props.taskId && !props.intro && <div className="hr-joy" onPointerDown={joyDown} onPointerMove={joyMove} onPointerUp={joyUp} onPointerCancel={joyUp} aria-hidden="true"><span ref={knob} /></div>}
    {touch && !props.taskId && !props.intro && <div className="hr-touch-actions">
      <button type="button" aria-label="Hablar o usar" onPointerDown={() => api.current?.interact()}>E<small>Usar</small></button>
      <button type="button" aria-label="Saltar" onPointerDown={() => api.current?.jump()}>↑<small>Saltar</small></button>
      <button type="button" aria-label="Nitro: mantén pulsado para correr muy rápido" onPointerDown={nitroOn} onPointerUp={nitroOff} onPointerCancel={nitroOff} onPointerLeave={nitroOff}>»<small>Nitro</small></button>
    </div>}
  </div>;
}
