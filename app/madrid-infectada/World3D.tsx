'use client';

// Madrid infectada · the runtime: renderer, camera, controls and the
// SpanishCue mascot with its mask, pistol and doses. Four things happen in
// this canvas:
//  · the arrival: the camera flies over a smoking Puerta del Sol while the
//    radio breaks up, a helicopter comes down and the mascot jumps out;
//  · a zone: one of the ten places, built on demand and freed on the way out,
//    joined to the next and the previous zone by green and grey gates;
//  · the vaccination before every conversation: contamination detected, a
//    dose from the backpack, the injection and the shield (it always works);
//  · the viral clouds, which drift, sometimes hunt the mascot and burst
//    under the beam of the pistol, and the micro-events of the city.
// The lesson (MadridGame.tsx) owns the state; this component follows its
// props and reports circles, gates and where the mascot is.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import { angleBetween, canUseKeys, followYaw, inputFrom, keyAction, stepPlayer } from '../noche-abierta/world3d.mjs';
import { animateHero, createHero } from '../noche-abierta/hero3d';
import { animatePerson, setMood } from '../noche-abierta/people3d';
import { createBumpClock, pushOut } from '../escucha-3d/bump.mjs';
import { insultFor, shout } from '../escucha-3d/shout';
import { canvas, createBubbles, disposeGroup, keepPeopleClear, spotRing, stepWalker, type Box, type Talker, type Walker } from '../mundo-3d/kit3d';
import { boat as boatModel, buildZone, helicopter, type Zone3D } from './madrid3d';
import { VAX_SECONDS, burstCloud, cloudAt, cloudLive, createBeam, createCloud, fireBeam, gearUp, poseAim, poseVaccination, showShield, stepBeam, stepCloud, type Cloud } from './gear3d';
import { ZONES } from './story.mjs';

export type Near = { kind: 'spot' | 'gate' | 'back'; id: string } | null;
export type Pose = { zone: string; x: number; z: number; heading: number };
export type VaxStage = 'detect' | 'inject' | 'immune' | null;
export type WorldEvent = 'heli' | 'alarm' | 'sparks' | 'pigeons' | 'groan' | 'radio' | 'beam' | 'burst' | 'hit' | 'drop' | 'boat';
export type WorldProps = {
  zone: string;
  /** The arrival over Sol plays once; false skips straight to the mascot. */
  intro: boolean;
  /** The boat leaves Madrid Río at dawn: the end of the mission. */
  finale: boolean;
  spotOpen: string | null;
  /** Keys zone/spot finished at this level: their circles turn grey. */
  done: string[];
  paused: boolean;
  /** Screen space the open card covers, so the talk is framed beside it. */
  inset: { right: number; bottom: number };
  /** Bumped by the on-screen prompt and shoot buttons. */
  act: number;
  fire: number;
  onIntroEnd: () => void;
  onFinaleEnd: () => void;
  onNear: (near: Near) => void;
  onSpot: (spot: string) => void;
  onGate: (zone: string) => void;
  onVax: (stage: VaxStage) => void;
  onEvent: (event: WorldEvent) => void;
  onPose: (pose: Pose) => void;
  onFail: () => void;
};

type Api = { joy: { x: number; y: number }; held: Set<string>; clear: () => void; interact: () => void; shoot: () => void; jump: () => void; nitro: { on: boolean } };
type Zone = { id: string; scene: Zone3D; rings: Map<string, ReturnType<typeof spotRing>>; bubbles: ReturnType<typeof createBubbles>; clouds: Cloud[]; greeted: Set<string> };

const ZONE_ORDER = ZONES.map(z => z.id);
const INTRO_END = 11.5;
const FINALE_END = 12;
const DETECT = 0.5;
const smooth = (a: number, b: number, t: number) => { const k = Math.min(1, Math.max(0, (t - a) / (b - a))); return k * k * (3 - 2 * k); };
const lerp = (a: number, b: number, k: number) => a + (b - a) * k;
const GREET = ['¡Eh! ¡Aquí!', '¿Estás sano?', 'Ven, que no muerdo.', '¿Llevas vacunas?', 'Por fin alguien.', 'Psst… acércate.'];

export default function World3D(props: WorldProps) {
  const live = useRef(props);
  useEffect(() => { live.current = props; });
  const mount = useRef<HTMLDivElement>(null);
  const fade = useRef<HTMLDivElement>(null);
  const knob = useRef<HTMLSpanElement>(null);
  const joyPointer = useRef<number | null>(null);
  const api = useRef<Api | null>(null);
  const [touch, setTouch] = useState(false);

  useEffect(() => { if (props.paused || props.spotOpen) api.current?.clear(); }, [props.paused, props.spotOpen]);

  useEffect(() => {
    const host = mount.current;
    if (!host) return;
    const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams();
    const low = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 760 || params.get('calidad') === 'baja';
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let renderer: THREE.WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: !low, powerPreference: 'high-performance' }); }
    catch { const t = window.setTimeout(() => live.current.onFail(), 0); return () => window.clearTimeout(t); }
    const touchTimer = window.setTimeout(() => setTouch(window.matchMedia('(pointer: coarse)').matches), 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, low ? 1.15 : 1.75));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.shadowMap.enabled = !low;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.domElement.tabIndex = 0;
    renderer.domElement.setAttribute('aria-label', 'Madrid infectada en 3D. Flechas o WASD para caminar, espacio para saltar, F para disparar a la nube, E para hablar o cruzar.');
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(58, 1, 0.1, 900);
    let hero: ReturnType<typeof createHero>;
    let gear: ReturnType<typeof gearUp>;
    try { hero = createHero(!low); gear = gearUp(hero); }
    catch (error) {
      console.error(error);
      renderer.dispose(); renderer.domElement.remove();
      const t = window.setTimeout(() => live.current.onFail(), 0);
      return () => window.clearTimeout(t);
    }
    scene.add(hero.root);
    const hemi = new THREE.HemisphereLight('#9fb0c8', '#5a4a3a', 0.9);
    const sun = new THREE.DirectionalLight('#ffc39a', 1.7);
    sun.castShadow = !low;
    sun.shadow.mapSize.set(1024, 1024);
    Object.assign(sun.shadow.camera, { left: -18, right: 18, top: 18, bottom: -18, near: 1, far: 90 });
    sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.03;
    scene.add(hemi, sun, sun.target);
    const beam = createBeam(scene);

    let composer: EffectComposer | null = null;
    if (!low) {
      composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));
      composer.addPass(new UnrealBloomPass(new THREE.Vector2(512, 512), 0.35, 0.45, 0.88));
      composer.addPass(new OutputPass());
    }

    // ------------------------------------------------------------ state
    let zone: Zone | null = null;
    let wanted = live.current.zone;
    let transition: { to: string; t: number; swapped: boolean; from: string | null } | null = null;
    let player = { x: 0, z: 0, heading: 0, speed: 0, y: 0, vy: 0, jumpHeld: false };
    let yaw = 0, pitch = 0.34, zoom = low ? 6 : 6.4, turn = 0;
    const held = new Set<string>();
    const joy = { x: 0, y: 0 };
    const touchNitro = { on: false };
    let jumpUntil = -1, drag: { id: number; x: number; y: number } | null = null, lastDrag = -10;
    let clock = 0, previous = 0, frame = 0, disposed = false, poseAt = 0;
    let nearKey = '', near: Near = null, acted = live.current.act, fired = live.current.fire, snap = false;
    let inside: string | null = null, still = 0, spent: string | null = null, openSpot: string | null = null, doneKey = '';
    // The vaccination: who it is for and how far it has run (detect, then inject).
    let vax: { t: number; spot: string | null; stage: VaxStage } | null = null;
    let lastVaxFor: string | null = null, doses = 0, shieldFlash = 0, aimUntil = -1, shotCool = 0;
    let introT = live.current.intro ? (reduced ? INTRO_END - 1.2 : 0) : -1;
    let introBeat = 0;
    let finaleT = -1;
    let swoop = 0;
    let nextEvent = 14 + Math.random() * 10;
    const mayYell = createBumpClock();
    const angry: (Talker | Walker)[] = [];
    const look = new THREE.Vector3(), desired = new THREE.Vector3(), mid = new THREE.Vector3(), from = new THREE.Vector3();

    // The flyers: a helicopter for the arrival and the fly-bys, the boat of the finale.
    const heli = helicopter();
    heli.group.visible = false;
    const searchlight = new THREE.Mesh(new THREE.ConeGeometry(3.2, 14, 20, 1, true), new THREE.MeshBasicMaterial({ color: '#fff6d8', transparent: true, opacity: 0.08, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending }));
    searchlight.position.set(-1.5, -6, 0);
    heli.group.add(searchlight);
    scene.add(heli.group);
    let flyBy: { t: number; ax: number; az: number; bx: number; bz: number; y: number } | null = null;
    let finaleBoat: THREE.Group | null = null;

    // Particles: sparks, pigeons, the pistol's flash.
    type Bit = { obj: THREE.Object3D; v: THREE.Vector3; life: number; kind: 'spark' | 'bird' | 'puff' };
    const bits: Bit[] = [];
    const sparkMat = new THREE.MeshBasicMaterial({ color: '#ffd37a' });
    const sparkGeo = new THREE.BoxGeometry(0.05, 0.05, 0.05);
    const birdMat = new THREE.MeshBasicMaterial({ color: '#2a2c30', side: THREE.DoubleSide });
    const birdGeo = new THREE.PlaneGeometry(0.34, 0.14);
    const puffTex = canvas(64, 64, ctx => { const g = ctx.createRadialGradient(32, 32, 2, 32, 32, 31); g.addColorStop(0, 'rgba(255,255,255,0.9)'); g.addColorStop(1, 'rgba(255,255,255,0)'); ctx.fillStyle = g; ctx.fillRect(0, 0, 64, 64); });
    const dustMat = new THREE.SpriteMaterial({ map: puffTex, color: '#b8ae98', transparent: true, opacity: 0.6, depthWrite: false });
    const sparks = (at: THREE.Vector3, n: number) => { for (let i = 0; i < n; i++) { const m = new THREE.Mesh(sparkGeo, sparkMat); m.position.copy(at); scene.add(m); bits.push({ obj: m, v: new THREE.Vector3((Math.random() - 0.5) * 3, 1 + Math.random() * 2, (Math.random() - 0.5) * 3), life: 0.8 + Math.random() * 0.6, kind: 'spark' }); } };
    const pigeons = (x: number, z: number) => { for (let i = 0; i < (low ? 6 : 12); i++) { const m = new THREE.Mesh(birdGeo, birdMat); m.position.set(x + (Math.random() - 0.5) * 3, 0.3, z + (Math.random() - 0.5) * 3); scene.add(m); const a = Math.random() * Math.PI * 2; bits.push({ obj: m, v: new THREE.Vector3(Math.cos(a) * 4, 3 + Math.random() * 2, Math.sin(a) * 4), life: 3.5, kind: 'bird' }); } };
    const dust = (x: number, z: number, n: number) => { for (let i = 0; i < n; i++) { const s = new THREE.Sprite(dustMat); s.position.set(x + (Math.random() - 0.5), 0.3, z + (Math.random() - 0.5)); s.scale.setScalar(0.8); scene.add(s); bits.push({ obj: s, v: new THREE.Vector3((Math.random() - 0.5) * 3, 0.6, (Math.random() - 0.5) * 3), life: 1.2, kind: 'puff' }); } };

    function place() {
      hero.root.position.set(player.x, player.y, player.z);
      hero.root.rotation.y = player.heading;
      const at = zone?.scene.light.sun.at ?? [-14, 30, 10];
      sun.position.set(player.x + at[0], player.y + at[1], player.z + at[2]);
      sun.target.position.set(player.x, 0, player.z);
    }
    function clear() { held.clear(); joy.x = 0; joy.y = 0; drag = null; }
    function startVax(spot: string | null) {
      if (vax) return;
      vax = { t: reduced ? DETECT : 0, spot, stage: 'detect' };
      lastVaxFor = spot;
      live.current.onVax('detect');
    }
    function interact() {
      const p = live.current;
      if (p.paused || p.spotOpen || transition || introT >= 0 || finaleT >= 0 || vax || !near) return;
      if (near.kind === 'spot') { spent = near.id; startVax(near.id); }
      else p.onGate(near.id);
    }
    // The beam: at the nearest cloud in reach, else straight ahead into the air.
    function shoot(auto = false) {
      if (!zone || introT >= 0 || finaleT >= 0 || shotCool > 0) return;
      const p = live.current;
      if (!auto && (p.paused || p.spotOpen)) return;
      shotCool = 0.45;
      let target: Cloud | null = null, best = auto ? 5 : 16;
      for (const c of zone.clouds) { if (!cloudLive(c)) continue; const d = Math.hypot(c.x - player.x, c.z - player.z); if (d < best) { best = d; target = c; } }
      if (target) player.heading = Math.atan2(target.x - player.x, target.z - player.z);
      place();
      hero.root.updateMatrixWorld(true);
      aimUntil = clock + 0.6;
      gear.muzzle.getWorldPosition(from);
      const to = target ? cloudAt(target) : from.clone().add(new THREE.Vector3(Math.sin(player.heading) * 14, 1.5, Math.cos(player.heading) * 14));
      fireBeam(beam, from, to);
      gear.muzzleMat.emissiveIntensity = 3;
      p.onEvent('beam');
      if (target) { const c = target; window.setTimeout(() => { if (!disposed) { burstCloud(c); live.current.onEvent('burst'); } }, 120); }
    }
    // Browser tests (?qa3d) can place the mascot and read where it is.
    if (params.has('qa3d')) {
      (window as unknown as { __mi3d?: unknown }).__mi3d = {
        place: (x: number, z: number, heading = 0) => { player = { ...player, x, z, heading, speed: 0, y: 0, vy: 0 }; yaw = heading; },
        where: () => ({ x: player.x, z: player.z, y: player.y, zone: zone?.id ?? null, near, vax: vax?.stage ?? null, clouds: zone?.clouds.map(c => c.state) ?? [] }),
        shoot: () => shoot(),
        camera: (x: number, y: number, z: number, lx: number, ly: number, lz: number) => { qaCam = { p: new THREE.Vector3(x, y, z), l: new THREE.Vector3(lx, ly, lz) }; },
        free: () => { qaCam = null; },
      };
    }
    let qaCam: { p: THREE.Vector3; l: THREE.Vector3 } | null = null;
    api.current = { joy, held, clear, interact, shoot: () => shoot(), jump: () => { jumpUntil = clock + 0.15; }, nitro: touchNitro };

    // ------------------------------------------------------------ zones
    function buildIt(id: string, cameFrom: string | null) {
      if (zone) { disposeGroup(zone.scene.group); zone = null; }
      const built = keepPeopleClear(buildZone(id, { low, shadows: !low })) as Zone3D;
      const rings = new Map<string, ReturnType<typeof spotRing>>();
      for (const s of built.spots) rings.set(s.id, spotRing(built.group, s.x, s.z));
      const clouds = built.nests.map((n, i) => createCloud(built.group, n, 1000 + i * 77 + id.length * 13, low));
      scene.add(built.group);
      zone = { id, scene: built, rings, bubbles: createBubbles(built.group), clouds, greeted: new Set() };
      doneKey = '';
      const L = built.light;
      const sky = canvas(16, 512, ctx => { const g = ctx.createLinearGradient(0, 0, 0, 512); g.addColorStop(0, L.sky[0]); g.addColorStop(1, L.sky[1]); ctx.fillStyle = g; ctx.fillRect(0, 0, 16, 512); });
      sky.mapping = THREE.EquirectangularReflectionMapping;
      scene.background = sky;
      built.group.userData.sky = sky;
      scene.fog = new THREE.Fog(L.fog[0], L.fog[1], L.fog[2]);
      hemi.color.set(L.hemi[0]); hemi.groundColor.set(L.hemi[1]); hemi.intensity = L.hemi[2];
      sun.color.set(L.sun.color); sun.intensity = L.sun.intensity;
      renderer.toneMappingExposure = L.exposure;
      // Arriving from the next zone, the mascot stands by the gate that leads back to it.
      const back = cameFrom && ZONE_ORDER.indexOf(cameFrom) > ZONE_ORDER.indexOf(id) && built.gate ? built.gate : null;
      // Otherwise a few steps past the way back, so its sign does not fill the view.
      const fwd = { x: built.spawn.x + Math.sin(built.spawn.heading) * 4.5, z: built.spawn.z + Math.cos(built.spawn.heading) * 4.5 };
      const clearFwd = !built.solids.some(b => fwd.x > b.x0 - 0.6 && fwd.x < b.x1 + 0.6 && fwd.z > b.z0 - 0.6 && fwd.z < b.z1 + 0.6);
      const at = back ? { x: back.x + (built.spawn.x - back.x) * 0.12, z: back.z + (built.spawn.z - back.z) * 0.12 } : clearFwd && built.back ? fwd : built.spawn;
      const heading = back ? Math.atan2(built.spawn.x - back.x, built.spawn.z - back.z) : built.spawn.heading;
      player = { ...player, x: at.x, z: at.z, heading, speed: 0, y: 0, vy: 0 };
      yaw = heading; spent = null; inside = null;
      // Outdoors the camera drops in from above; under a roof it starts behind the mascot.
      const roofed = built.ceilings?.some(c => at.x > c.x0 && at.x < c.x1 && at.z > c.z0 && at.z < c.z1);
      if (roofed) { camera.position.set(at.x - Math.sin(yaw) * zoom, 2.6, at.z - Math.cos(yaw) * zoom); swoop = 0; }
      else { camera.position.set(at.x - Math.sin(yaw) * 22, 24, at.z - Math.cos(yaw) * 22); swoop = 1.6; }
    }

    // ------------------------------------------------------------ input
    const onKeyDown = (event: KeyboardEvent) => {
      if (!canUseKeys(event.target as HTMLElement) || event.metaKey || event.ctrlKey || event.altKey) return;
      if (live.current.paused || live.current.spotOpen) return;
      if (event.code === 'KeyE' || event.code === 'Enter') { event.preventDefault(); interact(); return; }
      if (event.code === 'KeyF') { event.preventDefault(); shoot(); return; }
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
      yaw -= dx * 0.006; pitch = Math.min(1.1, Math.max(0.05, pitch + dy * 0.004)); lastDrag = clock;
    };
    const onUp = (e: PointerEvent) => { if (drag?.id === e.pointerId) drag = null; };
    const onWheel = (e: WheelEvent) => { e.preventDefault(); zoom = Math.min(10, Math.max(2.6, zoom + e.deltaY * 0.006)); };
    el.addEventListener('pointerdown', onDown); el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerup', onUp); el.addEventListener('pointercancel', onUp);
    el.addEventListener('wheel', onWheel, { passive: false });

    let baseFov = 58, W = 1, H = 1;
    const resize = () => {
      W = host.clientWidth || 1; H = host.clientHeight || 1;
      renderer.setSize(W, H, false); composer?.setSize(W, H);
      camera.aspect = W / H; baseFov = W / H < 0.8 ? 70 : 58; camera.fov = baseFov; camera.updateProjectionMatrix();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    resize();

    // A wall between the camera and the mascot shortens the arm.
    function clearArm(solids: Box[], x: number, z: number, cx: number, cz: number, h: number) {
      for (let i = 1; i <= 12; i++) {
        const k = i / 12, px = x + (cx - x) * k, pz = z + (cz - z) * k;
        if (solids.some(b => (b.top == null || b.top > h) && px > b.x0 - 0.2 && px < b.x1 + 0.2 && pz > b.z0 - 0.2 && pz < b.z1 + 0.2)) return Math.max(0.2, (i - 1) / 12);
      }
      return 1;
    }

    // The first zone is built at once; the arrival flies over it.
    buildIt(wanted, null);
    if (introT >= 0) { hero.root.visible = false; heli.group.visible = true; }

    // ------------------------------------------------------------ loop
    const loop = (now: number) => {
      if (disposed) return;
      frame = requestAnimationFrame(loop);
      const raw = previous ? (now - previous) / 1000 : 0.016;
      const dt = Math.min(0.05, raw);
      previous = now; clock += dt;
      const p = live.current;
      if (p.act !== acted) { acted = p.act; interact(); }
      if (p.fire !== fired) { fired = p.fire; shoot(); }
      shotCool = Math.max(0, shotCool - dt);

      // A new zone: fade out, rebuild, fade in.
      if (p.zone !== wanted && !transition) { transition = { to: p.zone, t: 0, swapped: false, from: zone?.id ?? null }; wanted = p.zone; }
      if (transition) {
        transition.t += dt;
        const k = transition.t;
        if (fade.current) fade.current.style.opacity = String(transition.swapped ? Math.max(0, 1 - (k - 0.4) / 0.5) : Math.min(1, k / 0.4));
        if (!transition.swapped && k >= 0.4) {
          try { buildIt(transition.to, transition.from); } catch (error) { console.error(error); }
          transition.swapped = true; vax = null;
        }
        if (transition.swapped && transition.t >= 0.9) { transition = null; if (fade.current) fade.current.style.opacity = '0'; }
      }
      if (!zone) { renderer.render(scene, camera); return; }
      const Z = zone;

      // ---------------------------------------------------- the arrival
      if (introT >= 0) {
        introT += Math.min(0.25, raw);
        const t = introT, s = Z.scene.spawn;
        // The helicopter comes from the north-east, hovers over the spawn and leaves.
        const hx = s.x + lerp(60, 0, smooth(0, 6.2, t)) + lerp(0, -70, smooth(8.2, 11.5, t));
        const hz = s.z + lerp(-50, 0, smooth(0, 6.2, t)) + lerp(0, 30, smooth(8.2, 11.5, t));
        const hy = lerp(30, 7.5, smooth(1.5, 6.2, t)) + lerp(0, 25, smooth(8.2, 11.5, t));
        heli.group.position.set(hx, hy, hz);
        heli.group.rotation.set(Math.sin(t * 0.9) * 0.05, Math.PI * 0.75 + smooth(6, 8, t) * 0.6, -0.12 * (1 - smooth(5, 6.4, t)));
        heli.rotor.rotation.y += dt * 22;
        if (introBeat === 0) { introBeat = 1; p.onEvent('heli'); }
        // The jump: out of the side door at 6.6 s, down to the street at 7.4 s.
        if (t > 6.6 && introBeat === 1) { introBeat = 2; hero.root.visible = true; }
        if (introBeat >= 2) {
          const k = smooth(6.6, 7.45, t);
          player = { ...player, x: s.x, z: s.z, heading: s.heading, y: Math.max(0, (1 - k) * 6.2 - Math.sin(k * Math.PI) * -1.2), speed: 0 };
          if (t > 7.45 && introBeat === 2) { introBeat = 3; player.y = 0; dust(s.x, s.z, low ? 6 : 12); showShield(gear, 0.2); shieldFlash = 0.8; p.onEvent('drop'); }
        }
        // Camera: high over the smoking square, a long descent, then behind the mascot.
        let cx: number, cy: number, cz: number, lx: number, ly: number, lz: number;
        if (t < 6.2) {
          const a = t * 0.11 + 0.6;
          cx = s.x + Math.cos(a) * lerp(70, 26, smooth(0, 6.2, t)); cz = s.z + Math.sin(a) * lerp(70, 26, smooth(0, 6.2, t)); cy = lerp(58, 14, smooth(0, 6.2, t));
          lx = s.x; ly = lerp(0, 4, smooth(2, 6.2, t)); lz = s.z;
          if (t > 3) { lx = lerp(s.x, hx, smooth(3, 5.5, t)); ly = lerp(ly, hy, smooth(3, 5.5, t)); lz = lerp(s.z, hz, smooth(3, 5.5, t)); }
        } else {
          const k = smooth(6.4, 9.5, t);
          const a = 0.6 + 6.2 * 0.11;
          cx = lerp(s.x + Math.cos(a) * 26, s.x - Math.sin(s.heading) * 6.4, k); cz = lerp(s.z + Math.sin(a) * 26, s.z - Math.cos(s.heading) * 6.4, k); cy = lerp(14, 3.6, k);
          lx = lerp(hx, s.x, smooth(6.2, 7.4, t)); ly = lerp(hy, 1.3, smooth(6.2, 7.4, t)); lz = lerp(hz, s.z, smooth(6.2, 7.4, t));
        }
        camera.position.set(cx, cy, cz);
        camera.lookAt(lx, ly, lz);
        if (t >= INTRO_END) { introT = -1; heli.group.visible = false; hero.root.visible = true; player.y = 0; yaw = player.heading; p.onIntroEnd(); }
      } else if (!p.intro && heli.group.visible && !flyBy) { heli.group.visible = false; hero.root.visible = true; }
      if (introT < 0 && !hero.root.visible && finaleT < 0) hero.root.visible = true;
      if (p.intro === false && introT >= 0) { introT = -1; heli.group.visible = false; hero.root.visible = true; player = { ...player, ...Z.scene.spawn, heading: Z.scene.spawn.heading, y: 0 }; yaw = player.heading; }

      // Circles that are done turn grey.
      const dk = p.done.join();
      if (dk !== doneKey) {
        doneKey = dk;
        for (const [id, ring] of Z.rings) {
          const isDone = p.done.includes(`${Z.id}/${id}`);
          ring.material.color.set(isDone ? '#8fa79a' : '#ffffff');
          ring.material.opacity = isDone ? 0.5 : 0.95;
          ring.gem.visible = !isDone;
        }
      }

      // A card opened from the list puts the mascot on its circle (and still vaccinates).
      if (p.spotOpen !== openSpot) {
        openSpot = p.spotOpen;
        if (openSpot) {
          const s = Z.scene.spots.find(x => x.id === openSpot);
          if (s) { if (Math.hypot(s.x - player.x, s.z - player.z) > 12) snap = true; player = { ...player, x: s.x, z: s.z, heading: s.heading, speed: 0, y: 0, vy: 0 }; yaw = s.heading; spent = s.id; inside = s.id; }
          if (lastVaxFor !== openSpot && !vax) { vax = { t: DETECT, spot: null, stage: 'inject' }; lastVaxFor = openSpot; p.onVax('inject'); }
        }
      }

      // ---------------------------------------------------- the vaccination
      if (vax) {
        vax.t += dt;
        if (vax.stage === 'detect' && vax.t >= DETECT) { vax.stage = 'inject'; p.onVax('inject'); }
        if (vax.stage === 'inject' && vax.t >= DETECT + 0.8) { vax.stage = 'immune'; p.onVax('immune'); }
        if (vax.t >= DETECT + VAX_SECONDS + 0.1) {
          const spot = vax.spot;
          vax = null; doses += 1;
          p.onVax(null);
          if (spot) p.onSpot(spot);
        }
      }

      // ---------------------------------------------------- moving
      const cinematic = introT >= 0 || finaleT >= 0;
      const free = !cinematic && !transition && !p.paused && !p.spotOpen && !vax;
      const solids = Z.scene.solids;
      const before = player.heading;
      if (free) {
        const input = inputFrom(held);
        const ix = input.x + joy.x, iy = input.y + joy.y;
        const nitro = input.nitro || touchNitro.on;
        const jumping = input.jump || clock < jumpUntil;
        const next = stepPlayer(player, { x: ix, y: iy, yaw, sprint: input.sprint, nitro, jump: jumping, jumpSpeed: 8.4 }, dt, solids, Z.scene.bounds);
        player = { ...player, x: next.x, z: next.z, heading: next.heading, speed: next.speed, y: next.y, vy: next.vy, jumpHeld: next.jumpHeld };
        // People are solid; whoever you run into turns and tells you so.
        const bodies: (Talker | Walker)[] = [...Z.scene.talkers];
        const out = pushOut(player.x, player.z, bodies, (x: number, z: number) => !solids.some(b => (b.top == null || player.y < b.top) && x > b.x0 - 0.35 && x < b.x1 + 0.35 && z > b.z0 - 0.35 && z < b.z1 + 0.35));
        if (player.y < 1) { player.x = out.x; player.z = out.z; }
        const who = out.hit >= 0 && player.y < 1 ? bodies[out.hit] : null;
        if (who && next.speed > 1.2 && mayYell(who, clock)) {
          const line = insultFor(who.body, who.seed);
          Z.bubbles.say(who, line.text, 3, true);
          shout(line, 1);
          setMood(who.person, 'furious');
          who.angryUntil = clock + 3.4;
          if (!angry.includes(who)) angry.push(who);
          player.speed *= 0.3;
        }
        const wantFov = baseFov + (nitro && player.speed > 10 ? 10 : 0);
        if (Math.abs(wantFov - camera.fov) > 0.05) { camera.fov += (wantFov - camera.fov) * Math.min(1, dt * 6); camera.updateProjectionMatrix(); }
        if (clock - lastDrag > 1.2) yaw = followYaw(yaw, player.heading, player.speed, dt);
      } else if (!transition && introT < 0) { player.speed = 0; }
      turn = dt > 0 ? angleBetween(before, player.heading) / dt : 0;
      place();
      for (let i = angry.length - 1; i >= 0; i--) {
        const who = angry[i];
        if (clock < (who.angryUntil ?? 0)) continue;
        setMood(who.person, 'baseMood' in who ? who.baseMood : 'neutral');
        angry.splice(i, 1);
      }

      // ---------------------------------------------------- what is near
      let found: Near = null;
      if (!cinematic && !transition) {
        const here = Z.scene.spots.find(s => Math.hypot(s.x - player.x, s.z - player.z) < 1.45) ?? null;
        const id = here?.id ?? null;
        if (id !== inside) { inside = id; still = 0; if (!id) spent = null; }
        if (id && !p.spotOpen && !p.paused && !vax && id !== spent) {
          still = player.speed < 0.3 ? still + dt : 0;
          if (still > 0.6) { spent = id; still = 0; startVax(id); }
        }
        const nextId = ZONE_ORDER[ZONE_ORDER.indexOf(Z.id) + 1];
        const prevId = ZONE_ORDER[ZONE_ORDER.indexOf(Z.id) - 1];
        if (id) found = { kind: 'spot', id };
        else if (Z.scene.gate && nextId && Math.hypot(Z.scene.gate.x - player.x, Z.scene.gate.z - player.z) < 2.4) found = { kind: 'gate', id: nextId };
        else if (Z.scene.back && prevId && Math.hypot(Z.scene.back.x - player.x, Z.scene.back.z - player.z) < 2.4) found = { kind: 'back', id: prevId };
        else {
          // Someone with a story calls you over.
          for (const tk of Z.scene.talkers) {
            if (!tk.spot || Z.greeted.has(tk.spot) || p.done.includes(`${Z.id}/${tk.spot}`)) continue;
            if (Math.hypot(tk.x - player.x, tk.z - player.z) < 5) { Z.greeted.add(tk.spot); Z.bubbles.say(tk, GREET[(Z.greeted.size + Z.id.length) % GREET.length], 3.2); }
          }
        }
      }
      const nk = found ? `${found.kind}:${found.id}` : '';
      if (nk !== nearKey) { nearKey = nk; near = found; p.onNear(found); }
      if (clock - poseAt > 0.25 && !cinematic) { poseAt = clock; p.onPose({ zone: Z.id, x: player.x, z: player.z, heading: player.heading }); }

      // ---------------------------------------------------- the clouds
      const calm = Boolean(p.spotOpen) || Boolean(vax) || cinematic || p.paused;
      for (const c of Z.clouds) {
        stepCloud(c, dt, player, solids, calm);
        if (!cloudLive(c) || calm) continue;
        const d = Math.hypot(c.x - player.x, c.z - player.z);
        // Close and hunting: the pistol fires on its own (the student is never cornered).
        if (c.state === 'hunt' && d < 4.2 && shotCool <= 0) shoot(true);
        else if (d < 1.4 && shieldFlash <= 0) {
          // A touch: immunity holds, the shield flashes and the cloud is pushed away.
          shieldFlash = 0.7; c.vx = -(player.x - c.x) * 2; c.vz = -(player.z - c.z) * 2; c.state = 'drift'; c.cool = 6;
          p.onEvent('hit');
        }
      }
      if (shieldFlash > 0 && !vax) { shieldFlash = Math.max(0, shieldFlash - dt); showShield(gear, shieldFlash > 0 ? 1 - shieldFlash / 0.8 : 0); }
      stepBeam(beam, dt);
      gear.muzzleMat.emissiveIntensity = Math.max(0.2, gear.muzzleMat.emissiveIntensity - dt * 8);

      // ---------------------------------------------------- micro-events
      if (!cinematic && !calm) {
        nextEvent -= dt;
        if (nextEvent <= 0) {
          nextEvent = 15 + Math.random() * 14;
          const roll = Math.random();
          if (roll < 0.22 && !Z.scene.under) {
            const a = Math.random() * Math.PI * 2;
            flyBy = { t: 0, ax: player.x + Math.cos(a) * 80, az: player.z + Math.sin(a) * 80, bx: player.x - Math.cos(a) * 80, bz: player.z - Math.sin(a) * 80, y: 26 + Math.random() * 8 };
            heli.group.visible = true; p.onEvent('heli');
          } else if (roll < 0.42 && Z.scene.sparks.length) {
            const at = Z.scene.sparks[Math.floor(Math.random() * Z.scene.sparks.length)];
            sparks(at, low ? 10 : 22); p.onEvent('sparks');
          } else if (roll < 0.58 && Z.scene.alarms.length) {
            const alarm = Z.scene.alarms[Math.floor(Math.random() * Z.scene.alarms.length)];
            alarm.lights.forEach(m => { m.userData.alarmUntil = clock + 5; });
            p.onEvent('alarm');
          } else if (roll < 0.74 && !Z.scene.under) {
            pigeons(player.x + Math.sin(player.heading) * 5, player.z + Math.cos(player.heading) * 5); p.onEvent('pigeons');
          } else if (roll < 0.88) p.onEvent('groan');
          else p.onEvent('radio');
        }
      }
      for (const alarm of Z.scene.alarms) for (const m of alarm.lights) {
        const until = (m.userData.alarmUntil as number | undefined) ?? 0;
        m.emissiveIntensity = clock < until ? (Math.sin(clock * 18) > 0 ? 2.6 : 0.1) : 0.35;
      }
      if (flyBy) {
        flyBy.t += dt / 9;
        const k = flyBy.t;
        heli.group.position.set(lerp(flyBy.ax, flyBy.bx, k), flyBy.y, lerp(flyBy.az, flyBy.bz, k));
        heli.group.rotation.set(0, Math.atan2(flyBy.ax - flyBy.bx, flyBy.az - flyBy.bz) + Math.PI / 2, 0.12);
        heli.rotor.rotation.y += dt * 22;
        if (k >= 1) { flyBy = null; heli.group.visible = false; }
      }

      // ---------------------------------------------------- the finale
      if (p.finale && finaleT < 0 && Z.id === 'rio' && !p.spotOpen) {
        finaleT = 0;
        finaleBoat = boatModel();
        finaleBoat.position.set(22, -0.3, 23.2);
        Z.scene.group.add(finaleBoat);
        p.onEvent('boat');
      }
      if (finaleT >= 0 && finaleBoat) {
        finaleT += Math.min(0.25, raw);
        const t = finaleT;
        const k = smooth(1.5, FINALE_END - 0.5, t);
        // Downstream (west) under the Puente de Segovia, between two of its piers.
        finaleBoat.position.set(22 - k * 72, -0.3 + Math.sin(t * 1.6) * 0.06, 23.2 + Math.min(1, k * 4) * 3.3);
        finaleBoat.rotation.set(Math.sin(t * 1.2) * 0.03, Math.PI, Math.sin(t * 0.9) * 0.04);
        // The mascot steps onto the boat and stays on its deck.
        player = { ...player, x: finaleBoat.position.x + 0.8, z: finaleBoat.position.z, y: finaleBoat.position.y + 0.25, heading: -Math.PI / 2, speed: 0 };
        // Dawn breaks over the river.
        const light = smooth(0.5, 9, t);
        renderer.toneMappingExposure = lerp(Z.scene.light.exposure, 1.35, light);
        sun.intensity = lerp(Z.scene.light.sun.intensity, 2.6, light);
        hemi.intensity = lerp(Z.scene.light.hemi[2], 1.15, light);
        const bx = finaleBoat.position.x, bz = finaleBoat.position.z;
        camera.position.set(bx + 9 - t * 0.3, 3.6 + t * 0.5, bz - 12 - t * 0.4);
        camera.lookAt(bx - 2, 1, bz + 2);
        if (t >= FINALE_END) { finaleT = -2; p.onFinaleEnd(); }
      }
      if (!p.finale && finaleT !== -1) {
        // Back to the pier after the ending (or when the finale is replayed later).
        if (finaleBoat) { finaleBoat.removeFromParent(); finaleBoat = null; }
        { finaleT = -1; renderer.toneMappingExposure = Z.scene.light.exposure; sun.intensity = Z.scene.light.sun.intensity; hemi.intensity = Z.scene.light.hemi[2]; player = { ...player, x: 22, z: 17.6, y: 0, heading: Math.PI }; }
      }

      // ---------------------------------------------------- life
      Z.scene.animate(clock, dt);
      Z.bubbles.update(clock);
      for (const [, ring] of Z.rings) { ring.gem.rotation.y += dt * 1.6; ring.gem.position.y = 2.5 + Math.sin(clock * 2) * 0.12; }
      for (const tk of Z.scene.talkers) {
        const talking = Boolean(p.spotOpen && tk.spot === p.spotOpen);
        const dx = player.x - tk.x, dz = player.z - tk.z, d = Math.hypot(dx, dz), facing = Math.atan2(dx, dz);
        if (talking && !tk.seated) { tk.heading += angleBetween(tk.heading, facing) * Math.min(1, dt * 4); tk.person.root.rotation.y = tk.heading; }
        tk.person.look = d < 6 || talking ? Math.max(-1.1, Math.min(1.1, angleBetween(tk.heading, facing))) : null;
        if (d < 40) animatePerson(tk.person, dt, 0, talking);
      }
      for (const w of Z.scene.zombies) if (Math.hypot(w.x - player.x, w.z - player.z) < 70) stepWalker(w, dt);
      for (let i = bits.length - 1; i >= 0; i--) {
        const b = bits[i];
        b.life -= dt;
        if (b.life <= 0) { b.obj.removeFromParent(); bits.splice(i, 1); continue; }
        if (b.kind === 'spark') { b.v.y -= 9 * dt; b.obj.position.addScaledVector(b.v, dt); }
        else if (b.kind === 'bird') { b.obj.position.addScaledVector(b.v, dt); b.obj.rotation.x = Math.sin(clock * 30 + i) * 0.8; b.obj.lookAt(b.obj.position.clone().add(b.v)); }
        else { b.obj.position.addScaledVector(b.v, dt); b.obj.scale.multiplyScalar(1 + dt * 1.2); (b.obj as THREE.Sprite).material.opacity = 0.6 * Math.min(1, b.life); }
      }
      if (hero.root.visible) {
        animateHero(hero, dt, player.speed > 0.2 ? player.speed : 0, turn, p.spotOpen && !vax ? 'talk' : 'move', reduced);
        if (vax) {
          const vt = Math.max(0, vax.t - DETECT);
          poseVaccination(hero, gear, vt, doses);
        } else {
          gear.syringe.visible = false;
          const k = clock < aimUntil ? Math.min(1, (aimUntil - clock) * 3) : 0;
          if (k > 0) poseAim(hero, k);
        }
      }

      // ---------------------------------------------------- camera
      if (qaCam) { camera.position.copy(qaCam.p); camera.lookAt(qaCam.l); }
      else if (!cinematic) {
        if (p.spotOpen && !vax) {
          const tk = Z.scene.talkers.find(t => t.spot === p.spotOpen);
          const ox = tk ? tk.x : player.x + Math.sin(player.heading) * 1.8, oz = tk ? tk.z : player.z + Math.cos(player.heading) * 1.8;
          mid.set((player.x + ox) / 2, 1.3, (player.z + oz) / 2);
          const side = Math.atan2(ox - player.x, oz - player.z) + Math.PI / 2;
          const dist = Math.max(3, Math.hypot(ox - player.x, oz - player.z) * 0.9 + 1.6);
          let cx = mid.x + Math.sin(side) * dist, cz = mid.z + Math.cos(side) * dist;
          if (clearArm(solids, mid.x, mid.z, cx, cz, 2) < 0.9) { cx = mid.x - Math.sin(side) * dist; cz = mid.z - Math.cos(side) * dist; }
          desired.set(cx, 2.1, cz);
          const roof = Z.scene.ceilings?.find(c => cx > c.x0 && cx < c.x1 && cz > c.z0 && cz < c.z1);
          if (roof) desired.y = Math.min(desired.y, roof.y - 0.35);
          if (snap) { camera.position.copy(desired); look.copy(mid); snap = false; }
          camera.position.lerp(desired, 1 - Math.exp(-dt * 3));
          look.lerp(mid, 1 - Math.exp(-dt * 4));
          camera.lookAt(look);
          const ix = Math.min(W * 0.4, p.inset.right) / 2, iy = Math.min(H * 0.5, p.inset.bottom) / 2;
          if (ix || iy) camera.setViewOffset(W, H, ix, iy, W, H); else camera.clearViewOffset();
        } else {
          if (camera.view) camera.clearViewOffset();
          // During the vaccination the camera comes round to the mascot's front.
          const vk = vax ? smooth(0, 0.4, vax.t) : 0;
          const camYaw = yaw + vk * angleBetween(yaw, player.heading + Math.PI * 0.8);
          const dist = lerp(zoom, 3.4, vk);
          const cx = player.x - Math.sin(camYaw) * Math.cos(pitch) * dist;
          const cz = player.z - Math.cos(camYaw) * Math.cos(pitch) * dist;
          const k = clearArm(solids, player.x, player.z, cx, cz, 3);
          desired.set(player.x + (cx - player.x) * k, Math.max(player.y + 1.2, player.y + 1.6 + Math.sin(pitch) * dist * Math.max(0.6, k) - vk * 0.6), player.z + (cz - player.z) * k);
          const roof = Z.scene.ceilings?.find(c => player.x > c.x0 && player.x < c.x1 && player.z > c.z0 && player.z < c.z1);
          if (roof) desired.y = Math.min(desired.y, roof.y - 0.35);
          const rate = swoop > 0 ? 2.2 : 9;
          swoop = Math.max(0, swoop - dt);
          if (camera.position.distanceTo(desired) > 60 && swoop <= 0) camera.position.copy(desired);
          camera.position.lerp(desired, 1 - Math.exp(-dt * rate));
          look.set(player.x, player.y + 1.25 - vk * 0.2, player.z);
          camera.lookAt(look);
        }
      }
      if (composer) composer.render(); else renderer.render(scene, camera);
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
      if (zone) disposeGroup(zone.scene.group);
      disposeGroup(scene);
      composer?.dispose();
      renderer.dispose();
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
  const controls = touch && !props.spotOpen && !props.intro && !props.finale && !props.paused;
  const nitroOff = () => { if (api.current) api.current.nitro.on = false; };

  return <div className="mi-world">
    <div className="mi-canvas" ref={mount} />
    <div className="mi-fade" ref={fade} aria-hidden="true" />
    {controls && <div className="mi-joy" onPointerDown={joyDown} onPointerMove={joyMove} onPointerUp={joyUp} onPointerCancel={joyUp} aria-hidden="true"><span ref={knob} /></div>}
    {controls && <div className="mi-touch">
      <button type="button" aria-label="Disparar a la nube" onPointerDown={() => api.current?.shoot()}>✦<small>Disparar</small></button>
      <button type="button" aria-label="Saltar" onPointerDown={() => api.current?.jump()}>↑<small>Saltar</small></button>
      <button type="button" aria-label="Nitro: mantén pulsado para correr muy rápido" onPointerDown={() => { if (api.current) api.current.nitro.on = true; }} onPointerUp={nitroOff} onPointerCancel={nitroOff} onPointerLeave={nitroOff}>»<small>Nitro</small></button>
    </div>}
  </div>;
}
