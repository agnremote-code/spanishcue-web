'use client';

// La casa · the 3D runtime: renderer, camera, controls and the SpanishCue
// mascot walking into the reality-show house as the night's surprise. The
// lesson (RealityGame.tsx) owns the state; this component reports circles,
// the housemates you walk up to and where the player is, and follows its
// props. Realistic on computers (photographic surfaces, HDRI light, soft
// shadows, people with real bodies), lighter on phones; ?real=0 turns it off.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import { canUseKeys, followYaw, inputFrom, keyAction, stepPlayer, angleBetween, createFramePacer, skipHiddenMatrices, worldPixelRatio, exposeForQa } from '../noche-abierta/world3d.mjs';
import { animateHero, createHero } from '../noche-abierta/hero3d';
import { BOUNDS, JUMP_SPEED, LANDMARKS, SPAWN, cameraBlockers, ceilingAt, circleStep, sceneById, sceneFraming, sectorAt, solidsFor, spotAt } from './layout.mjs';
import { buildCasa, talking as talkingNow, type Casa, type Npc, type Mover } from './casa3d';
import { createCeilingLight, createRealComposer, loadEnvironment } from '../mundo-real/real3d';
import { enableRealPeople } from '../mundo-real/persona';
import { createBumpClock, pushOut } from '../escucha-3d/bump.mjs';
import { insultFor, shout } from '../escucha-3d/shout';
import { setMood } from '../noche-abierta/people3d';
import { createCharlas } from '../charlas-3d/charlas3d';

export type Pose = { x: number; z: number; heading: number; sector: string | null };
export type WorldProps = {
  level: string;
  sceneId: string | null;
  mood: string | null;
  done: string[];
  paused: boolean;
  intro: boolean;
  onSpot: (id: string) => void;
  onNear: (near: { kind: 'scene' | 'person'; id: string } | null) => void;
  /** A housemate the player walked up to and pressed E on (a key of INVITADOS). */
  onPerson: (id: string) => void;
  /** The housemate whose card is open: they turn to the mascot and talk. */
  personId: string | null;
  onPose: (pose: Pose) => void;
  onFail: () => void;
  /** The night: 0 at 22:00, 1 at 05:30, 2 at dawn after the last confession. */
  night: number;
};

type Api = { joy: { x: number; y: number }; held: Set<string>; clear: () => void; interact: () => void; jump: () => void; nitro: { on: boolean } };
const SITTING = new Set(['sit', 'lean', 'lie', 'sleep']);
const PLACES = LANDMARKS.map(l => ({ ...l, r: 1.1 }));

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
    // Realistic mode on computers, light figures on phones; ?real=0 turns it off and ?real=ao adds occlusion.
    const realParam = new URLSearchParams(window.location.search).get('real');
    const real = !low && realParam !== '0';
    const realAo = real && realParam === 'ao';
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let renderer: THREE.WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: real, powerPreference: 'high-performance' }); }
    catch { const t = window.setTimeout(() => live.current.onFail(), 0); return () => window.clearTimeout(t); }
    const touchTimer = window.setTimeout(() => setTouch(window.matchMedia('(pointer: coarse)').matches), 0);
    const ratioCap = low ? 1.2 : 1.75;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, ratioCap));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.shadowMap.enabled = !low;
    renderer.shadowMap.type = real ? THREE.VSMShadowMap : THREE.PCFSoftShadowMap;
    renderer.domElement.tabIndex = 0;
    renderer.domElement.setAttribute('aria-label', 'La casa del reality en 3D. Flechas o WASD para caminar, arrastra para mirar, E para hablar, espacio para saltar, N para el nitro.');
    host.appendChild(renderer.domElement);

    const scene = skipHiddenMatrices(new THREE.Scene());
    scene.background = new THREE.Color('#0e1430');
    scene.fog = new THREE.Fog('#0e1430', 60, 260);
    const camera = new THREE.PerspectiveCamera(58, 1, 0.06, 600);
    let building: Casa;
    let hero: ReturnType<typeof createHero>;
    // Everyone in the house gets a real body (skin, hair, clothes) that follows the same poses: before any person is built.
    enableRealPeople(real);
    try { building = buildCasa(scene, { low, shadows: !low, real }); hero = createHero(!low); }
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
    let disposed = false;
    let disposeEnv = () => {};
    if (real) void loadEnvironment(renderer, scene, 'oficina_512.hdr', 0.8).then(d => { if (disposed) d(); else disposeEnv = d; });
    const hemi = new THREE.HemisphereLight('#e6eef8', '#2c2a28', real ? 0.35 : 0.9);
    scene.add(hemi);
    // Without the realistic ceiling light, one key light follows the mascot for shadows.
    const key = new THREE.DirectionalLight('#f2f8ff', real ? 0 : 0.75);
    key.castShadow = !low && !real;
    key.shadow.mapSize.set(1024, 1024);
    Object.assign(key.shadow.camera, { left: -12, right: 12, top: 12, bottom: -12, near: 1, far: 40 });
    key.shadow.bias = -0.0004;
    key.shadow.normalBias = 0.03;
    scene.add(key, key.target);
    const ceilingLight = real ? createCeilingLight(scene) : null;

    let composer: EffectComposer | null = null;
    if (!low) {
      if (realAo) composer = createRealComposer(renderer, scene, camera, host.clientWidth || 1, host.clientHeight || 1).composer;
      else {
        composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));
        composer.addPass(new UnrealBloomPass(new THREE.Vector2(512, 512), 0.18, 0.35, 0.95));
        composer.addPass(new OutputPass());
      }
    }
    exposeForQa({ renderer, scene, camera, composer });

    // ------------------------------------------------------------ state
    const solids = solidsFor();
    const walls = cameraBlockers();
    let player = { x: SPAWN.x, z: SPAWN.z, heading: SPAWN.heading, speed: 0, y: 0, vy: 0, jumpHeld: false };
    let yaw = player.heading, pitch = 0.22, zoom = low ? 3.5 : 3.7;
    let turn = 0;
    const held = new Set<string>();
    const joy = { x: 0, y: 0 };
    const touchNitro = { on: false };
    let jumpUntil = -1;
    let drag: { id: number; x: number; y: number } | null = null;
    let lastDrag = -10, clock = 0, previous = 0, frame = 0, poseAt = 0;
    let inside: string | null = null, still = 0, consumed: string | null = null, nearKey = '';
    let openScene: string | null = null;
    let nearPerson: Npc | null = null;
    const mayYell = createBumpClock();
    const angry: (Npc | Mover)[] = [];
    let introAt = 0;
    let doneKey = '';
    let moodKey = '';
    let nightKey = -1;
    const look = new THREE.Vector3();
    const desired = new THREE.Vector3();
    const temp = new THREE.Vector3();

    function place() {
      hero.root.position.set(player.x, player.y || 0, player.z);
      hero.root.rotation.y = player.heading;
      key.position.set(player.x - 5, 12, player.z + 6);
      key.target.position.set(player.x, 0, player.z);
      ceilingLight?.follow(player.x, player.z);
    }
    place();

    // Conversation circles: every housemate without a story of their own, the two who walk, and the places that stand out.
    const charlas = createCharlas({
      parent: scene, host: host.parentElement ?? host, world: 'reality', level: () => live.current.level,
      people: function* () {
        for (const n of building.npcs) if (!n.scene && !n.talk) yield { key: n.key, x: n.x, z: n.z };
        for (const m of building.movers) yield { key: m.key, x: m.x, z: m.z };
      },
      places: PLACES,
    });

    function clear() { held.clear(); joy.x = 0; joy.y = 0; drag = null; }
    function interact() {
      const p = live.current;
      if (p.paused || p.sceneId || p.intro || charlas.isOpen()) return;
      if (inside) { consumed = inside; p.onSpot(inside); return; }
      if (nearPerson?.talk && !p.personId) p.onPerson(nearPerson.talk);
    }
    const jump = () => { jumpUntil = clock + 0.15; };
    if (new URLSearchParams(window.location.search).has('qa3d')) {
      (window as unknown as { __lc3d?: unknown }).__lc3d = {
        place: (x: number, z: number, heading = 0) => { player = { ...player, x, z, heading, speed: 0, y: 0, vy: 0 }; yaw = heading; },
        where: () => ({ x: player.x, z: player.z, y: player.y }),
        look: (y: number, pt: number, d: number) => { yaw = y; pitch = pt; zoom = d; lastDrag = clock + 1000; },
        scene, hero,
      };
    }
    api.current = { joy, held, clear, interact, jump, nitro: touchNitro };

    // ------------------------------------------------------------ input
    const onKeyDown = (event: KeyboardEvent) => {
      if (!canUseKeys(event.target as HTMLElement) || event.metaKey || event.ctrlKey || event.altKey) return;
      if (live.current.paused || live.current.sceneId || charlas.isOpen()) return;
      if ((event.code === 'KeyE' || event.code === 'Enter') && (inside || nearPerson)) { event.preventDefault(); interact(); return; }
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
    const onWheel = (event: WheelEvent) => { event.preventDefault(); zoom = Math.min(6, Math.max(2.2, zoom + event.deltaY * 0.004)); };
    canvasEl.addEventListener('pointerdown', onDown);
    canvasEl.addEventListener('pointermove', onMove);
    canvasEl.addEventListener('pointerup', onUp);
    canvasEl.addEventListener('pointercancel', onUp);
    canvasEl.addEventListener('wheel', onWheel, { passive: false });

    let baseFov = 58;
    const resize = () => {
      const w = host.clientWidth || 1, h = host.clientHeight || 1;
      const ratio = worldPixelRatio(w, h, ratioCap, window.devicePixelRatio);
      if (ratio !== renderer.getPixelRatio()) { renderer.setPixelRatio(ratio); composer?.setPixelRatio(ratio); }
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
      for (let i = 1; i <= 12; i++) {
        const k = i / 12;
        const px = x + (cx - x) * k, pz = z + (cz - z) * k;
        if (walls.some(w => px > w.x0 - 0.25 && px < w.x1 + 0.25 && pz > w.z0 - 0.25 && pz < w.z1 + 0.25)) { t = Math.max(0.15, (i - 1) / 12); break; }
      }
      return t;
    }

    // ------------------------------------------------------------ loop
    const pace = createFramePacer();
    const loop = (now: number) => {
      if (disposed) return;
      frame = requestAnimationFrame(loop);
      // Half pace behind the title card or a panel, and while the mascot stands still.
      if (!pace(now, live.current.intro || live.current.paused || (player.speed < 0.05 && !player.y && clock - lastDrag > 1.5))) return;
      const dt = Math.min(0.05, previous ? (now - previous) / 1000 : 0.016);
      previous = now;
      clock += dt;
      const p = live.current;

      // A circle is grey once every scene it holds is done (the red armchair holds three).
      const dk = p.done.join();
      if (dk !== doneKey) {
        doneKey = dk;
        for (const spot of building.spots) {
          const isDone = spot.ids.every(id => p.done.includes(id));
          spot.material.color.set(isDone ? '#8fa0a8' : '#ffffff');
          spot.material.opacity = isDone ? 0.45 : 0.95;
          spot.gem.visible = !isDone;
        }
      }
      const mk = `${p.sceneId}:${p.mood}`;
      if (mk !== moodKey) { moodKey = mk; building.setSceneMood(p.sceneId, p.mood); }
      if (p.night !== nightKey) { nightKey = p.night; building.setNight(p.night); }
      const openAir = ceilingAt(player.x, player.z) > 10;
      const wantHemi = real ? (openAir ? 0.45 : 0.35) : (openAir ? 0.6 : 0.9);
      hemi.intensity += (wantHemi - hemi.intensity) * Math.min(1, dt * 2);

      const sceneId = p.sceneId;
      if (sceneId !== openScene) {
        openScene = sceneId;
        if (sceneId) {
          const s = sceneById(sceneId);
          if (s) {
            // A circle opened from the list or the map cuts straight to it.
            const f = sceneFraming(s);
            player = { ...player, x: f.x, z: f.z, heading: f.heading, speed: 0, y: 0, vy: 0 };
            consumed = spotAt(f.x, f.z, p.done) ?? sceneId;
          }
        }
      }

      // Move.
      const moving = !p.paused && !sceneId && !p.intro && !p.personId && !charlas.isOpen();
      const before = player.heading;
      if (moving) {
        const input = inputFrom(held);
        const ix = input.x + joy.x, iy = input.y + joy.y;
        // Shift runs and N is the nitro; indoors a calmer stroll.
        const nitro = input.nitro || touchNitro.on;
        const factor = input.sprint || nitro ? 1 : 0.7;
        // Space jumps (low: the ceiling is at 3.2 m); sofas, beds, tables and counters can be climbed on.
        const jumping = input.jump || clock < jumpUntil;
        const next = stepPlayer({ ...player, speed: player.speed / factor }, { x: ix, y: iy, yaw, sprint: input.sprint, nitro, walk: false, jump: jumping, jumpSpeed: openAir ? 7.6 : JUMP_SPEED }, dt * factor, solids, BOUNDS);
        player = { ...player, x: next.x, z: next.z, heading: next.heading, speed: next.speed * factor, y: next.y, vy: next.vy, jumpHeld: next.jumpHeld };
        // People are solid, and nobody likes being run into.
        if (player.y < 1.2) {
          const bodies = building.bodies();
          const free = (x: number, z: number) => x > BOUNDS.minX + 0.4 && x < BOUNDS.maxX - 0.4 && z > BOUNDS.minZ + 0.4 && z < BOUNDS.maxZ - 0.4
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
            if ('baseMood' in who && !who.seated) { who.heading = Math.atan2(player.x - who.x, player.z - who.z); who.person.root.rotation.y = who.heading; }
            player.speed *= 0.3;
          }
        }
        const wantFov = baseFov + (nitro && player.speed > 10 ? 10 : 0);
        if (Math.abs(wantFov - camera.fov) > 0.05) { camera.fov += (wantFov - camera.fov) * Math.min(1, dt * 6); camera.updateProjectionMatrix(); }
        if (clock - lastDrag > 1.2) yaw = followYaw(yaw, player.heading, player.speed, dt);
      } else { player.speed = 0; player.y = 0; player.vy = 0; }
      turn = dt > 0 ? angleBetween(before, player.heading) / dt : 0;
      place();

      for (let i = angry.length - 1; i >= 0; i--) {
        const who = angry[i];
        if (clock < (who.angryUntil ?? 0)) continue;
        setMood(who.person, 'baseMood' in who ? who.baseMood : 'neutral');
        angry.splice(i, 1);
      }

      // Circles.
      const here = spotAt(player.x, player.z, p.done);
      const circle = circleStep({ inside, still, spent: consumed }, here, sceneId, p.paused || p.intro ? 1 : player.speed, dt);
      inside = circle.inside; still = circle.still; consumed = circle.spent;
      if (circle.open) p.onSpot(circle.open);
      // Anyone with a story within reach can be talked to (E).
      nearPerson = null;
      if (!inside && !sceneId) {
        let best = 1.9;
        for (const n of building.npcs) {
          if (!n.talk) continue;
          const d = Math.hypot(n.x - player.x, n.z - player.z);
          if (d < best) { best = d; nearPerson = n; }
        }
      }
      charlas.update(player, dt, moving && !inside && !nearPerson);
      const near = inside ? `scene:${inside}` : nearPerson ? `person:${nearPerson.talk}` : '';
      if (near !== nearKey) { nearKey = near; p.onNear(inside ? { kind: 'scene', id: inside } : nearPerson ? { kind: 'person', id: nearPerson.talk! } : null); }
      if (clock - poseAt > 0.2) {
        poseAt = clock;
        p.onPose({ x: player.x, z: player.z, heading: player.heading, sector: sectorAt(player.x, player.z)?.id ?? null });
      }

      // People: they glance at the mascot; the one he talks to turns and talks.
      for (const npc of building.npcs) {
        if (!npc.person.root.visible) continue;
        const isTalking = Boolean(sceneId && npc.scene === sceneId) || Boolean(p.personId && npc.talk === p.personId);
        if (isTalking) talkingNow.add(npc.person); else talkingNow.delete(npc.person);
        const dx = player.x - npc.x, dz = player.z - npc.z;
        const d = Math.hypot(dx, dz);
        const facing = Math.atan2(dx, dz);
        if (isTalking && !SITTING.has(npc.person.pose) && !npc.seated) {
          npc.heading += angleBetween(npc.heading, facing) * Math.min(1, dt * 4);
          npc.person.root.rotation.y = npc.heading;
        }
        npc.person.look = (d < 5 || isTalking) ? Math.max(-1.1, Math.min(1.1, angleBetween(npc.heading, facing))) : null;
        if (isTalking) npc.person.attention = 1;
      }
      building.animate(clock, dt, player.x, player.z);
      animateHero(hero, dt, player.speed > 0.2 ? player.speed : 0, turn, sceneId ? 'talk' : 'move', reduced);

      // Camera: indoors it stays under the ceiling; in the garden it can rise.
      if (p.intro) {
        introAt += dt;
        const a = introAt * (reduced ? 0.02 : 0.06);
        // The living room seen from the hall, the giant screen glowing.
        const wide = camera.aspect > 1.2;
        camera.position.set((wide ? 2.5 : 1) + Math.sin(a) * 1.2, 2.3 + Math.sin(introAt * 0.25) * 0.15, 13.5 + Math.cos(a) * 0.6);
        camera.lookAt(wide ? -6 : -4, 1.4, 3);
      } else if (sceneId) {
        const s = sceneById(sceneId)!;
        const mid = temp.set((player.x + s.npc.x) / 2, 1.35, (player.z + s.npc.z) / 2);
        const side = Math.atan2(s.npc.x - player.x, s.npc.z - player.z) + Math.PI / 2;
        const dist = Math.max(2.4, Math.hypot(s.npc.x - player.x, s.npc.z - player.z) * 0.9 + 1.1);
        let cx = mid.x + Math.sin(side) * dist, cz = mid.z + Math.cos(side) * dist;
        if (clearArm(mid.x, mid.z, cx, cz) < 0.8) { cx = mid.x - Math.sin(side) * dist; cz = mid.z - Math.cos(side) * dist; }
        const k = clearArm(mid.x, mid.z, cx, cz);
        desired.set(mid.x + (cx - mid.x) * k, Math.min(ceilingAt(mid.x, mid.z) - 0.4, 1.95), mid.z + (cz - mid.z) * k);
        if (camera.position.distanceTo(desired) > 10) { camera.position.copy(desired); look.copy(mid); }
        camera.position.lerp(desired, 1 - Math.exp(-dt * 3));
        look.lerp(mid, 1 - Math.exp(-dt * 4));
        camera.lookAt(look);
      } else {
        const dist = zoom;
        const cx = player.x - Math.sin(yaw) * Math.cos(pitch) * dist;
        const cz = player.z - Math.cos(yaw) * Math.cos(pitch) * dist;
        const k = clearArm(player.x, player.z, cx, cz);
        const ceiling = ceilingAt(player.x, player.z);
        desired.set(player.x + (cx - player.x) * k, Math.min(ceiling, 1.55 + Math.sin(pitch) * dist * Math.max(0.55, k)), player.z + (cz - player.z) * k);
        if (camera.position.distanceTo(desired) > 14) camera.position.copy(desired);
        camera.position.lerp(desired, 1 - Math.exp(-dt * 10));
        look.set(player.x, 1.3 + (player.y || 0) * 0.5, player.z);
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
          // Shared photographic textures (mundo-real) stay cached for the next visit.
          if (!x.userData?.metres) for (const value of Object.values(x)) if ((value as THREE.Texture | null)?.isTexture) (value as THREE.Texture).dispose();
          x.dispose();
        }
      });
      for (const pass of composer?.passes ?? []) pass.dispose();
      composer?.dispose();
      envTarget.dispose();
      pmrem.dispose();
      disposeEnv();
      ceilingLight?.light.shadow.dispose();
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

  return <div className="lc-world">
    <div className="lc-canvas" ref={mount} />
    {touch && !props.sceneId && !props.intro && <div className="lc-joy" onPointerDown={joyDown} onPointerMove={joyMove} onPointerUp={joyUp} onPointerCancel={joyUp} aria-hidden="true"><span ref={knob} /></div>}
    {touch && !props.sceneId && !props.intro && <div className="lc-touch-actions">
      <button type="button" aria-label="Hablar o usar" onPointerDown={() => api.current?.interact()}>E<small>Usar</small></button>
      <button type="button" aria-label="Saltar" onPointerDown={() => api.current?.jump()}>↑<small>Saltar</small></button>
      <button type="button" aria-label="Nitro: mantén pulsado para correr muy rápido" onPointerDown={nitroOn} onPointerUp={nitroOff} onPointerCancel={nitroOff} onPointerLeave={nitroOff}>»<small>Nitro</small></button>
    </div>}
  </div>;
}
