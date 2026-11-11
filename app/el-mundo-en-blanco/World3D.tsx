'use client';

// El mundo en blanco · the runtime: renderer, camera, controls and the
// SpanishCue mascot, who carries the only pencil left. What happens in the
// canvas:
//  · the arrival: the camera comes down over a white, silent sheet;
//  · the walk: twelve brush circles, one paper being beside each;
//  · the ink: when an encounter closes, colour floods out from its circle
//    (papel3d INK wells), the sky takes a little more dusk and the great
//    inkwell fills; with the twelfth, the whole sheet is painted.
// The lesson (MundoGame.tsx) owns the state; this component follows its
// props and reports what is near and where you are.
import * as THREE from 'three';
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import { angleBetween, canUseKeys, followYaw, inputFrom, keyAction, stepPlayer } from '../noche-abierta/world3d.mjs';
import { animateHero, createHero } from '../noche-abierta/hero3d';
import { createBumpClock, pushOut } from '../escucha-3d/bump.mjs';
import { insultFor, shout } from '../escucha-3d/shout';
import { createBubbles, disposeGroup, type Box, type Talker } from '../mundo-3d/kit3d';
import { CAST, SPOTS } from './story.mjs';
import { FINAL, INK_REACH, SPAWN } from './layout.mjs';
import { INK, canvasTexture, createPencil, createSky, inkBlack } from './papel3d';
import { buildMundo, type Mundo } from './mundo3d';
import type { Ser } from './seres3d';

export type Near = { kind: 'spot' | 'final'; id: string } | null;
export type Pose = { x: number; z: number; heading: number };
export type WorldProps = {
  /** The arrival is playing: the camera flies, nobody moves. */
  intro: boolean;
  spotOpen: string | null;
  /** Encounters closed at this level: their ink is back. */
  done: string[];
  paused: boolean;
  /** Screen space the open card covers, so the talk is framed beside it. */
  inset: { right: number; bottom: number };
  /** What each being says when you come near, by encounter id. */
  greetings: Record<string, string>;
  /** Bumped by the on-screen prompt button: same as pressing E. */
  act: number;
  onIntroEnd: () => void;
  onNear: (near: Near) => void;
  onFinal: () => void;
  onSpot: (spot: string) => void;
  onPose: (pose: Pose) => void;
  onFail: () => void;
};

type Api = { joy: { x: number; y: number }; held: Set<string>; clear: () => void; interact: () => void; jump: () => void; nitro: { on: boolean } };
export const INTRO_SECONDS = 9;
const ease = (k: number) => k * k * (3 - 2 * k);

/** A circle painted with one stroke of the brush: where an encounter waits. */
function brushTexture() {
  return canvasTexture(256, 256, ctx => {
    ctx.clearRect(0, 0, 256, 256);
    ctx.strokeStyle = '#ffffff'; ctx.lineCap = 'round';
    for (let i = 0; i < 90; i++) {
      const a0 = (i / 90) * Math.PI * 1.9 + 0.2, a1 = a0 + 0.09;
      ctx.lineWidth = 8 + Math.sin(i * 0.21) * 5 + (i > 78 ? (78 - i) * 0.5 : 0);
      ctx.globalAlpha = 0.75 + Math.sin(i * 1.7) * 0.2;
      ctx.beginPath(); ctx.arc(128, 128, 100 + Math.sin(i * 0.5) * 2.5, a0, a1); ctx.stroke();
    }
  });
}

export default function World3D(props: WorldProps) {
  const live = useRef(props);
  useEffect(() => { live.current = props; });
  const mount = useRef<HTMLDivElement>(null);
  const knob = useRef<HTMLSpanElement>(null);
  const joyPointer = useRef<number | null>(null);
  const api = useRef<Api | null>(null);
  const [touch, setTouch] = useState(false);

  useEffect(() => { if (props.paused || props.spotOpen) api.current?.clear(); }, [props.paused, props.spotOpen]);

  useEffect(() => {
    const host = mount.current;
    if (!host) return;
    const params = new URLSearchParams(window.location.search);
    const low = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 760 || params.get('calidad') === 'baja';
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let renderer: THREE.WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: low, powerPreference: 'high-performance', preserveDrawingBuffer: params.has('qa3d') }); }
    catch { const t = window.setTimeout(() => live.current.onFail(), 0); return () => window.clearTimeout(t); }
    const touchTimer = window.setTimeout(() => setTouch(window.matchMedia('(pointer: coarse)').matches), 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, low ? 1.2 : 1.75));
    renderer.toneMapping = THREE.NoToneMapping;
    renderer.shadowMap.enabled = !low;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.domElement.tabIndex = 0;
    renderer.domElement.setAttribute('aria-label', 'El mundo en blanco en 3D. Flechas o WASD para caminar, espacio para saltar, E para hablar.');
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(56, 1, 0.1, 900);
    let hero: ReturnType<typeof createHero>;
    let mundo: Mundo;
    try { hero = createHero(!low); mundo = buildMundo({ low, shadows: !low }); }
    catch (error) {
      console.error(error);
      renderer.dispose(); renderer.domElement.remove();
      const t = window.setTimeout(() => live.current.onFail(), 0);
      return () => window.clearTimeout(t);
    }
    scene.add(hero.root, mundo.group);
    const sky = createSky();
    scene.add(sky.dome);
    const hemi = new THREE.HemisphereLight('#ffffff', '#cfc6b4', 1.55);
    const sun = new THREE.DirectionalLight('#fff3de', 2.5);
    sun.castShadow = !low;
    sun.shadow.mapSize.set(2048, 2048);
    Object.assign(sun.shadow.camera, { left: -26, right: 26, top: 26, bottom: -26, near: 1, far: 110 });
    sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.04;
    scene.add(hemi, sun, sun.target);
    const blankFog = new THREE.Color('#f1ede2'), duskFog = new THREE.Color('#f6cfae');
    scene.fog = new THREE.Fog(blankFog.clone(), 70, 300);
    scene.background = blankFog.clone();
    let pencil: ReturnType<typeof createPencil> | null = null;
    if (!low) { try { pencil = createPencil(renderer); } catch (error) { console.error(error); pencil = null; } }

    // ------------------------------------------------------------ circles, drops and footprints
    const brush = brushTexture();
    const rings = new Map<string, { mat: THREE.MeshBasicMaterial; mesh: THREE.Mesh; drop: THREE.Mesh; ser: Ser }>();
    for (const s of mundo.spots) {
      const ser = mundo.seres.find(x => x.id === s.id)!;
      const mat = new THREE.MeshBasicMaterial({ map: brush, color: '#1d1a24', transparent: true, opacity: 0.9, depthWrite: false });
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(3.3, 3.3), mat);
      mesh.rotation.x = -Math.PI / 2; mesh.position.set(s.x, 0.06, s.z); mesh.renderOrder = 2;
      const drop = new THREE.Mesh(new THREE.OctahedronGeometry(0.2, 0), inkBlack());
      drop.scale.set(0.8, 1.5, 0.8); drop.position.set(s.x, 2.5, s.z);
      mundo.group.add(mesh, drop);
      rings.set(s.id, { mat, mesh, drop, ser });
    }
    const STEPS = 40;
    const prints = new THREE.InstancedMesh(new THREE.CircleGeometry(0.11, 7), new THREE.MeshBasicMaterial({ color: '#1d1a24', transparent: true, opacity: 0.8, depthWrite: false }), STEPS);
    prints.frustumCulled = false; prints.renderOrder = 1;
    const born = new Float32Array(STEPS).fill(-100), printAt = Array.from({ length: STEPS }, () => new THREE.Vector3(0, -5, 0));
    let nextPrint = 0, walked = 0, foot = 1;
    mundo.group.add(prints);
    const bubbles = createBubbles(mundo.group);
    const greeted = new Set<string>();

    // ------------------------------------------------------------ state
    let player = { x: SPAWN.x, z: SPAWN.z, heading: SPAWN.heading, speed: 0, y: 0, vy: 0, jumpHeld: false };
    let yaw = SPAWN.heading, pitch = 0.3, zoom = low ? 6.4 : 7, turn = 0;
    const held = new Set<string>();
    const joy = { x: 0, y: 0 };
    const touchNitro = { on: false };
    let jumpUntil = -1, drag: { id: number; x: number; y: number } | null = null, lastDrag = -10;
    let clock = 0, previous = 0, frame = 0, disposed = false, poseAt = 0, swoop = 0;
    let nearKey = '', near: Near = null, acted = live.current.act, snap = false;
    let inside: string | null = null, still = 0, spent: string | null = null, openSpot: string | null = null;
    let introT = live.current.intro ? 0 : -1, introDone = !live.current.intro;
    let inkReady = false, inkAll = 0, skyInk = 0, wellInk = 0;
    const radius = new Float32Array(SPOTS.length);
    const mayYell = createBumpClock();
    const look = new THREE.Vector3(), desired = new THREE.Vector3(), mid = new THREE.Vector3();
    const m4 = new THREE.Matrix4(), q4 = new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2, 0, 0)), s4 = new THREE.Vector3();
    SPOTS.forEach((s, i) => { const at = mundo.spots.find(x => x.id === s.id)!; INK.wells.value[i].set(at.x, at.z, 0); });
    INK.all.value = 0;

    function place() {
      hero.root.position.set(player.x, player.y, player.z);
      hero.root.rotation.y = player.heading;
      sun.position.set(player.x - 16, player.y + 34, player.z + 14);
      sun.target.position.set(player.x, 0, player.z);
    }
    function clear() { held.clear(); joy.x = 0; joy.y = 0; drag = null; }
    function interact() {
      const p = live.current;
      if (p.paused || p.spotOpen || p.intro || !near) return;
      if (near.kind === 'final') p.onFinal();
      else { spent = near.id; p.onSpot(near.id); }
    }
    if (params.has('qa3d')) {
      (window as unknown as { __mb3d?: unknown }).__mb3d = {
        place: (x: number, z: number, heading = 0) => { player = { ...player, x, z, heading, speed: 0, y: 0, vy: 0 }; yaw = heading; },
        where: () => ({ x: player.x, z: player.z, y: player.y, near }),
        look: (y: number, p: number, d: number) => { yaw = y; pitch = p; zoom = d; lastDrag = clock + 1000; },
        ink: (k: number) => { INK.all.value = k; inkAll = k; },
        scene, camera,
      };
    }
    api.current = { joy, held, clear, interact, jump: () => { jumpUntil = clock + 0.15; }, nitro: touchNitro };
    camera.position.set(SPAWN.x, 16, SPAWN.z + 22);
    swoop = 1.6;

    // ------------------------------------------------------------ input
    const onKeyDown = (event: KeyboardEvent) => {
      if (!canUseKeys(event.target as HTMLElement) || event.metaKey || event.ctrlKey || event.altKey) return;
      if (live.current.paused || live.current.spotOpen || live.current.intro) return;
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
    const el = renderer.domElement;
    const onDown = (e: PointerEvent) => { if (e.button !== 0 && e.pointerType === 'mouse') return; drag = { id: e.pointerId, x: e.clientX, y: e.clientY }; el.setPointerCapture?.(e.pointerId); };
    const onMove = (e: PointerEvent) => {
      if (!drag || drag.id !== e.pointerId) return;
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      drag.x = e.clientX; drag.y = e.clientY;
      yaw -= dx * 0.006; pitch = Math.min(1.1, Math.max(0.02, pitch + dy * 0.004)); lastDrag = clock;
    };
    const onUp = (e: PointerEvent) => { if (drag?.id === e.pointerId) drag = null; };
    const onWheel = (e: WheelEvent) => { e.preventDefault(); zoom = Math.min(13, Math.max(2.8, zoom + e.deltaY * 0.006)); };
    el.addEventListener('pointerdown', onDown); el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerup', onUp); el.addEventListener('pointercancel', onUp);
    el.addEventListener('wheel', onWheel, { passive: false });

    let baseFov = 56, W = 1, H = 1;
    const resize = () => {
      W = host.clientWidth || 1; H = host.clientHeight || 1;
      renderer.setSize(W, H, false); pencil?.setSize(W, H);
      camera.aspect = W / H; baseFov = W / H < 0.8 ? 70 : 56; camera.fov = baseFov; camera.updateProjectionMatrix();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    resize();

    const solids: Box[] = mundo.solids;
    function clearArm(x: number, z: number, cx: number, cz: number, h: number) {
      for (let i = 1; i <= 12; i++) {
        const k = i / 12, px = x + (cx - x) * k, pz = z + (cz - z) * k;
        if (solids.some(b => (b.top == null || b.top > h) && px > b.x0 - 0.2 && px < b.x1 + 0.2 && pz > b.z0 - 0.2 && pz < b.z1 + 0.2)) return Math.max(0.2, (i - 1) / 12);
      }
      return 1;
    }

    // ------------------------------------------------------------ loop
    const loop = (now: number) => {
      if (disposed) return;
      frame = requestAnimationFrame(loop);
      const raw = previous ? (now - previous) / 1000 : 0.016;
      const dt = Math.min(0.05, raw);
      previous = now; clock += dt;
      const p = live.current;
      if (p.act !== acted) { acted = p.act; interact(); }

      // ---------------------------------------------------- the ink
      let total = 0;
      SPOTS.forEach((s, i) => {
        const want = p.done.includes(s.id) ? INK_REACH : 0;
        if (!inkReady) radius[i] = want;
        else if (radius[i] < want) radius[i] = Math.min(want, radius[i] + dt * (2.2 + (want - radius[i]) * 0.55));
        else if (radius[i] > want) radius[i] = Math.max(want, radius[i] - dt * 30);
        INK.wells.value[i].z = radius[i];
        total += radius[i] / INK_REACH;
        const ring = rings.get(s.id)!;
        const closed = want > 0;
        ring.drop.visible = !closed;
        ring.mat.opacity = closed ? 0.55 : 0.9;
        ring.mat.color.set(closed ? CAST[s.cast[0]].ink : '#1d1a24');
        ring.mesh.rotation.z = clock * (closed ? 0.05 : 0.25) + i;
        ring.drop.position.y = 2.5 + ring.ser.y * 0.3 + Math.sin(clock * 2 + i) * 0.12;
        ring.drop.rotation.y = clock * 1.4;
      });
      inkReady = true;
      const share = total / SPOTS.length, full = p.done.length >= SPOTS.length;
      inkAll += ((full && share > 0.995 ? 1 : 0) - inkAll) * Math.min(1, dt * 0.6);
      INK.all.value = inkAll < 0.002 ? 0 : inkAll;
      skyInk += (share - skyInk) * Math.min(1, dt * 0.8);
      wellInk += (share - wellInk) * Math.min(1, dt * 1.2);
      sky.uniforms.uInk.value = skyInk > 0.997 ? 1 : skyInk; sky.uniforms.uTime.value = clock;
      mundo.setInk(wellInk);
      (scene.fog as THREE.Fog).color.copy(blankFog).lerp(duskFog, skyInk);
      (scene.background as THREE.Color).copy((scene.fog as THREE.Fog).color);
      if (pencil) { pencil.uniforms.uTime.value = clock; pencil.uniforms.uInk.value = skyInk; }

      // ---------------------------------------------------- the arrival
      if (p.intro && !introDone) {
        if (introT < 0) introT = 0;
        introT += Math.min(0.25, raw) * (reduced ? 6 : 1);
        const k = ease(Math.min(1, introT / INTRO_SECONDS));
        place();
        // From above the mountain, down the whole sheet, to behind the mascot.
        desired.set(Math.sin(k * 1.4) * 26 * (1 - k), 46 * (1 - k) + 3.4, -62 + (SPAWN.z + 68.5) * k);
        look.set(0, 1.2 + 6 * (1 - k), -30 + (SPAWN.z + 26) * k);
        camera.position.copy(desired); camera.lookAt(look);
        mundo.animate(clock, dt, null, player.x, player.z);
        animateHero(hero, dt, 0, 0, 'move', reduced);
        if (introT >= INTRO_SECONDS) { introDone = true; swoop = 1.2; p.onIntroEnd(); }
        if (pencil) pencil.render(scene, camera); else renderer.render(scene, camera);
        return;
      }
      if (!p.intro) introDone = true;

      // A card opened from the list puts the mascot on its circle.
      if (p.spotOpen !== openSpot) {
        openSpot = p.spotOpen;
        const s = openSpot ? mundo.spots.find(x => x.id === openSpot) : null;
        if (s) { if (Math.hypot(s.x - player.x, s.z - player.z) > 12) snap = true; player = { ...player, x: s.x, z: s.z, heading: s.heading, speed: 0, y: 0, vy: 0 }; yaw = s.heading; spent = s.id; inside = s.id; }
      }

      // ---------------------------------------------------- moving
      const free = !p.paused && !p.spotOpen;
      const before = player.heading, bx = player.x, bz = player.z;
      if (free) {
        const input = inputFrom(held);
        const nitro = input.nitro || touchNitro.on;
        const jumping = input.jump || clock < jumpUntil;
        const next = stepPlayer(player, { x: input.x + joy.x, y: input.y + joy.y, yaw, sprint: input.sprint, nitro, jump: jumping, jumpSpeed: 8.4 }, dt, solids, mundo.bounds);
        player = { ...player, x: next.x, z: next.z, heading: next.heading, speed: next.speed, y: next.y, vy: next.vy, jumpHeld: next.jumpHeld };
        // Paper people are solid too; whoever you run into tells you so.
        const out = pushOut(player.x, player.z, mundo.bodies, (x: number, z: number) => !solids.some(b => (b.top == null || player.y < b.top) && x > b.x0 - 0.35 && x < b.x1 + 0.35 && z > b.z0 - 0.35 && z < b.z1 + 0.35));
        if (player.y < 1) { player.x = out.x; player.z = out.z; }
        const who = out.hit >= 0 && player.y < 1 ? mundo.bodies[out.hit].ser : null;
        if (who && next.speed > 1.2 && mayYell(who, clock)) {
          const line = insultFor(who.body, who.seed);
          bubbles.say(who as unknown as Talker, line.text, 3, true);
          shout(line, 1);
          player.speed *= 0.3;
        }
        const wantFov = baseFov + (nitro && player.speed > 10 ? 10 : 0);
        if (Math.abs(wantFov - camera.fov) > 0.05) { camera.fov += (wantFov - camera.fov) * Math.min(1, dt * 6); camera.updateProjectionMatrix(); }
        if (clock - lastDrag > 1.2) yaw = followYaw(yaw, player.heading, player.speed, dt);
      } else player.speed = 0;
      turn = dt > 0 ? angleBetween(before, player.heading) / dt : 0;
      place();

      // The pencil leaves a dotted line wherever you walk; it dries in a few seconds.
      walked += Math.hypot(player.x - bx, player.z - bz);
      if (walked > 0.62 && player.y < 0.05) {
        walked = 0; foot = -foot;
        printAt[nextPrint].set(player.x + Math.cos(player.heading) * 0.13 * foot, 0.045, player.z - Math.sin(player.heading) * 0.13 * foot);
        born[nextPrint] = clock; nextPrint = (nextPrint + 1) % STEPS;
      }
      for (let i = 0; i < STEPS; i++) {
        const age = clock - born[i], k = age > 7 ? 0 : 1 - age / 7;
        prints.setMatrixAt(i, m4.compose(printAt[i], q4, s4.setScalar(Math.max(0.0001, k))));
      }
      prints.instanceMatrix.needsUpdate = true;

      // ---------------------------------------------------- what is near
      let found: Near = null;
      const here = mundo.spots.find(s => Math.hypot(s.x - player.x, s.z - player.z) < 1.5) ?? null;
      const id = here?.id ?? null;
      if (id !== inside) { inside = id; still = 0; if (!id) spent = null; }
      if (id && !p.spotOpen && !p.paused && id !== spent) {
        still = player.speed < 0.3 ? still + dt : 0;
        if (still > 0.6) { spent = id; still = 0; p.onSpot(id); }
      }
      if (id) found = { kind: 'spot', id };
      else if (Math.hypot(FINAL.x - player.x, FINAL.z - player.z) < FINAL.r) found = { kind: 'final', id: 'final' };
      else for (const s of mundo.seres) {
        if (greeted.has(s.id) || p.done.includes(s.id) || !p.greetings[s.id]) continue;
        if (Math.hypot(s.x - player.x, s.z - player.z) < 8) { greeted.add(s.id); bubbles.say(s as unknown as Talker, p.greetings[s.id], 3.6); }
      }
      const nk = found ? `${found.kind}:${found.id}` : '';
      if (nk !== nearKey) { nearKey = nk; near = found; p.onNear(found); }
      if (clock - poseAt > 0.25) { poseAt = clock; p.onPose({ x: player.x, z: player.z, heading: player.heading }); }

      // ---------------------------------------------------- life
      mundo.animate(clock, dt, p.spotOpen, player.x, player.z);
      bubbles.update(clock);
      animateHero(hero, dt, player.speed > 0.2 ? player.speed : 0, turn, p.spotOpen ? 'talk' : 'move', reduced);

      // ---------------------------------------------------- camera
      if (p.spotOpen) {
        const ser = mundo.seres.find(s => s.id === p.spotOpen);
        const ox = ser ? ser.x : player.x, oz = ser ? ser.z : player.z, up = ser ? ser.y : 0;
        const span = Math.hypot(ox - player.x, oz - player.z);
        mid.set((player.x + ox) / 2, 1.3 + up * 0.5, (player.z + oz) / 2);
        const side = Math.atan2(ox - player.x, oz - player.z) + Math.PI / 2;
        const dist = Math.max(3.4, span * 0.95 + 2 + up * 0.9);
        let cx = mid.x + Math.sin(side) * dist, cz = mid.z + Math.cos(side) * dist;
        if (clearArm(mid.x, mid.z, cx, cz, 2) < 0.9) { cx = mid.x - Math.sin(side) * dist; cz = mid.z - Math.cos(side) * dist; }
        desired.set(cx, 2.1 + up * 0.25, cz);
        if (snap) { camera.position.copy(desired); look.copy(mid); snap = false; }
        camera.position.lerp(desired, 1 - Math.exp(-dt * 3));
        look.lerp(mid, 1 - Math.exp(-dt * 4));
        camera.lookAt(look);
        const ix = Math.min(W * 0.4, p.inset.right) / 2, iy = Math.min(H * 0.5, p.inset.bottom) / 2;
        if (ix || iy) camera.setViewOffset(W, H, ix, iy, W, H); else camera.clearViewOffset();
      } else {
        if (camera.view) camera.clearViewOffset();
        const cx = player.x - Math.sin(yaw) * Math.cos(pitch) * zoom;
        const cz = player.z - Math.cos(yaw) * Math.cos(pitch) * zoom;
        const k = clearArm(player.x, player.z, cx, cz, 3);
        desired.set(player.x + (cx - player.x) * k, Math.max(player.y + 1.2, player.y + 1.7 + Math.sin(pitch) * zoom * Math.max(0.6, k)), player.z + (cz - player.z) * k);
        const rate = swoop > 0 ? 2.2 : 9;
        swoop = Math.max(0, swoop - dt);
        camera.position.lerp(desired, 1 - Math.exp(-dt * rate));
        look.set(player.x, player.y + 1.3, player.z);
        camera.lookAt(look);
      }
      if (pencil) pencil.render(scene, camera); else renderer.render(scene, camera);
    };
    frame = requestAnimationFrame(loop);

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      window.clearTimeout(touchTimer);
      observer.disconnect();
      window.removeEventListener('keydown', onKeyDown); window.removeEventListener('keyup', onKeyUp); window.removeEventListener('blur', onBlur);
      el.removeEventListener('pointerdown', onDown); el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerup', onUp); el.removeEventListener('pointercancel', onUp); el.removeEventListener('wheel', onWheel);
      scene.traverse(o => { if ((o as THREE.InstancedMesh).isInstancedMesh) (o as THREE.InstancedMesh).dispose(); });
      disposeGroup(scene);
      pencil?.dispose();
      sun.shadow.map?.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      renderer.domElement.remove();
      api.current = null;
    };
  }, []);

  const joyDown = (e: ReactPointerEvent<HTMLDivElement>) => { joyPointer.current = e.pointerId; e.currentTarget.setPointerCapture(e.pointerId); joyMove(e); };
  const joyMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (joyPointer.current !== e.pointerId || !api.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    let x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    let y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    const len = Math.hypot(x, y);
    if (len > 1) { x /= len; y /= len; }
    api.current.joy.x = x; api.current.joy.y = -y;
    if (knob.current) knob.current.style.transform = `translate(${x * 34}px, ${y * 34}px)`;
  };
  const joyUp = () => { joyPointer.current = null; if (api.current) { api.current.joy.x = 0; api.current.joy.y = 0; } if (knob.current) knob.current.style.transform = 'translate(0, 0)'; };
  const controls = touch && !props.spotOpen && !props.intro && !props.paused;

  return <div className="mb-world">
    <div className="mb-canvas" ref={mount} />
    {controls && <div className="mb-joy" onPointerDown={joyDown} onPointerMove={joyMove} onPointerUp={joyUp} onPointerCancel={joyUp} aria-hidden="true"><span ref={knob} /></div>}
    {controls && <div className="mb-touch">
      <button type="button" aria-label="Saltar" onPointerDown={() => api.current?.jump()}>↑<small>Saltar</small></button>
      <button type="button" aria-label="Nitro: mantén pulsado para correr muy rápido" onPointerDown={() => { if (api.current) api.current.nitro.on = true; }} onPointerUp={() => { if (api.current) api.current.nitro.on = false; }} onPointerCancel={() => { if (api.current) api.current.nitro.on = false; }} onPointerLeave={() => { if (api.current) api.current.nitro.on = false; }}>»<small>Nitro</small></button>
    </div>}
  </div>;
}
