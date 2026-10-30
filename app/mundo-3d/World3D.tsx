'use client';

// Mundo 3D · the runtime: renderer, camera, controls and the SpanishCue
// mascot. Three things happen in one canvas:
//  · the arrival: a jet flies through the clouds, lands on the floating
//    airport, the welcome sign rises and the camera climbs to show the map;
//  · the map: islands around the airport, joined by bridges and portals;
//  · a region: the zone of one state, built on demand and freed on the way out.
// The lesson (CountryGame.tsx) owns the state; this component follows its
// props and reports gates, circles, portals and where the player is.
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
import { HUB, ISLAND_RADIUS, MAP_SPAWN, OCEAN_Y, PLANE_PARK, buildMap, cloudTexture, islandAt, onGround } from './map3d';
import { createCharlas } from '../charlas-3d/charlas3d';
import { canvas, createBubbles, disposeGroup, keepPeopleClear, spotRing, stepWalker, type Box, type RegionScene, type SceneBuilder, type Talker, type Walker } from './kit3d';
import type { CountryInfo } from './types';

export type View = 'intro' | 'map' | `region:${string}`;
export type Near = { kind: 'gate' | 'spot' | 'exit' | 'door'; id: string; label?: string } | null;
export type Pose = { region: string | null; island: string | null; x: number; z: number; heading: number };
export type WorldProps = {
  country: CountryInfo;
  /** The level being played: the extra conversation circles ask at this level. */
  level: string;
  rings: Record<string, number[][][]>;
  loadScene: (id: string) => Promise<SceneBuilder>;
  view: View;
  spotOpen: string | null;
  /** Keys region/spot finished at this level: their circles turn grey. */
  done: string[];
  paused: boolean;
  /** Screen space the open card covers, so the talk is framed beside it. */
  inset: { right: number; bottom: number };
  greetings: string[];
  /** Bumped by the on-screen prompt button: same as pressing E. */
  act: number;
  onIntroBeat: (beat: 'engine' | 'touchdown' | 'sign' | 'end') => void;
  onNear: (near: Near) => void;
  onGate: (region: string) => void;
  onSpot: (spot: string) => void;
  onExit: () => void;
  onRegionReady: (region: string) => void;
  onPose: (pose: Pose) => void;
  onFail: () => void;
};

type Api = { joy: { x: number; y: number }; held: Set<string>; clear: () => void; interact: () => void; jump: () => void; nitro: { on: boolean } };
type Region = { id: string; scene: RegionScene; rings: Map<string, ReturnType<typeof spotRing>>; bubbles: ReturnType<typeof createBubbles>; exitVeil: THREE.Mesh; greeted: Set<string> };

const INTRO_END = 14.2;
const smooth = (a: number, b: number, t: number) => { const k = Math.min(1, Math.max(0, (t - a) / (b - a))); return k * k * (3 - 2 * k); };
const lerp = (a: number, b: number, k: number) => a + (b - a) * k;

/** Where the jet is at time t of the arrival (x east along the runway). */
export function planeAt(t: number) {
  const touch = 7.4;
  if (t < touch) {
    const s = (touch - t) / touch;
    return { x: -14 - 30 * (touch - t), y: 1.85 + 55 * Math.pow(s, 1.6), pitch: 0.05 + 0.12 * Math.min(1, (touch - t) / 1.2) * (t > touch - 1.2 ? 1 : 0.4), roll: Math.sin(t * 0.9) * 0.08 * s, air: true };
  }
  const u = Math.min(1, (t - touch) / 2.4);
  return { x: -14 + (PLANE_PARK.x + 14) * (1 - (1 - u) * (1 - u)), y: 1.85, pitch: 0, roll: 0, air: false };
}

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
    const low = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 760;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let renderer: THREE.WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: !low, powerPreference: 'high-performance' }); }
    catch { const t = window.setTimeout(() => live.current.onFail(), 0); return () => window.clearTimeout(t); }
    const touchTimer = window.setTimeout(() => setTouch(window.matchMedia('(pointer: coarse)').matches), 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, low ? 1.25 : 1.75));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.shadowMap.enabled = !low;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.domElement.tabIndex = 0;
    renderer.domElement.setAttribute('aria-label', `${live.current.country.name.es} en 3D. Flechas o WASD para caminar, espacio para saltar, E para entrar o hablar.`);
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(58, 1, 0.1, 1600);
    let map: ReturnType<typeof buildMap>;
    let hero: ReturnType<typeof createHero>;
    try {
      map = buildMap(live.current.country, live.current.rings, { low });
      hero = createHero(!low);
    } catch (error) {
      console.error(error);
      renderer.dispose(); renderer.domElement.remove();
      const t = window.setTimeout(() => live.current.onFail(), 0);
      return () => window.clearTimeout(t);
    }
    scene.add(map.group, hero.root);
    const hemi = new THREE.HemisphereLight('#dfefff', '#5a6a48', 0.9);
    const sun = new THREE.DirectionalLight('#fff4e0', 2.1);
    sun.castShadow = !low;
    sun.shadow.mapSize.set(1024, 1024);
    Object.assign(sun.shadow.camera, { left: -16, right: 16, top: 16, bottom: -16, near: 1, far: 80 });
    sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.03;
    scene.add(hemi, sun, sun.target);

    let composer: EffectComposer | null = null;
    if (!low) {
      composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));
      composer.addPass(new UnrealBloomPass(new THREE.Vector2(512, 512), 0.25, 0.4, 0.92));
      composer.addPass(new OutputPass());
    }

    const mapLight = () => {
      scene.background = map.sky;
      scene.fog = new THREE.Fog('#cfe4f4', 90, 420);
      hemi.color.set('#dfefff'); hemi.groundColor.set('#5a6a48'); hemi.intensity = 0.9;
      sun.color.set('#fff4e0'); sun.intensity = 2.1;
      renderer.toneMappingExposure = 1;
    };
    mapLight();

    // The map solids: the airport buildings, the parked plane, the gates,
    // the welcome sign's posts and every landmark.
    const mapSolids: Box[] = [
      ...map.layout.solids,
      ...map.islandSolids.map(s => ({ x0: s.x - s.r, x1: s.x + s.r, z0: s.z - s.r, z1: s.z + s.r })),
      { x0: -7.8, x1: -7.2, z0: 9.2, z1: 9.8 }, { x0: 3.2, x1: 3.8, z0: 9.2, z1: 9.8 },
    ];
    const WIDE = { minX: -400, maxX: 400, minZ: -400, maxZ: 400 };
    const regions = live.current.country.regions;

    // ------------------------------------------------------------ state
    let view: View | null = null;
    let region: Region | null = null;
    let loading: string | null = null;
    let transition: { to: View; t: number; swapped: boolean } | null = null;
    let player = { x: MAP_SPAWN.x, z: MAP_SPAWN.z, heading: MAP_SPAWN.heading, speed: 0, y: 0, vy: 0, jumpHeld: false };
    let falling: { vx: number; vz: number; vy: number } | null = null;
    let safe = { x: MAP_SPAWN.x, z: MAP_SPAWN.z };
    let yaw = MAP_SPAWN.heading, pitch = 0.32, zoom = low ? 6 : 6.4, turn = 0;
    const held = new Set<string>();
    const joy = { x: 0, y: 0 };
    const touchNitro = { on: false };
    let jumpUntil = -1, drag: { id: number; x: number; y: number } | null = null, lastDrag = -10;
    let clock = 0, previous = 0, frame = 0, disposed = false, poseAt = 0;
    let introT = 0, introBeat = 0;
    let swoop = 0;
    let nearKey = '', near: Near = null, acted = live.current.act, snap = false;
    let inside: string | null = null, still = 0, spent: string | null = null, openSpot: string | null = null;
    let doneKey = '';
    const mayYell = createBumpClock();
    const angry: (Talker | Walker)[] = [];
    const look = new THREE.Vector3(), desired = new THREE.Vector3(), mid = new THREE.Vector3();

    // Particles: tyre smoke on the runway and confetti at the sign.
    type Bit = { obj: THREE.Object3D; v: THREE.Vector3; life: number; spin: number };
    const bits: Bit[] = [];
    const smokeMat = new THREE.SpriteMaterial({ map: cloudTexture(), transparent: true, opacity: 0.7, depthWrite: false });
    const puff = (x: number, y: number, z: number) => { const s = new THREE.Sprite(smokeMat); s.position.set(x, y, z); s.scale.setScalar(1.2); scene.add(s); bits.push({ obj: s, v: new THREE.Vector3(-2 + Math.random(), 0.8, (Math.random() - 0.5)), life: 1.4, spin: 0 }); };
    const confettiGeo = new THREE.PlaneGeometry(0.18, 0.1);
    const confettiMats = ['#c8323c', '#ffffff', '#1f3b73', '#ffd36b'].map(c => new THREE.MeshBasicMaterial({ color: c, side: THREE.DoubleSide }));
    const confetti = (x: number, y: number, z: number, n: number) => { for (let i = 0; i < n; i++) { const m = new THREE.Mesh(confettiGeo, confettiMats[i % 4]); m.position.set(x + (Math.random() - 0.5) * 12, y + Math.random() * 3, z + (Math.random() - 0.5) * 2); scene.add(m); bits.push({ obj: m, v: new THREE.Vector3((Math.random() - 0.5) * 2, 1 + Math.random() * 2, -Math.random() * 2), life: 3 + Math.random() * 1.5, spin: 3 + Math.random() * 5 }); } };

    function place() {
      hero.root.position.set(player.x, player.y, player.z);
      hero.root.rotation.y = player.heading;
      sun.position.set(player.x - 14, player.y + 30, player.z + 10);
      sun.target.position.set(player.x, 0, player.z);
    }
    function clear() { held.clear(); joy.x = 0; joy.y = 0; drag = null; }
    function interact() {
      const p = live.current;
      if (p.paused || p.spotOpen || transition || view === 'intro') return;
      if (!near) return;
      if (near.kind === 'gate') p.onGate(near.id);
      else if (near.kind === 'exit') p.onExit();
      else if (near.kind === 'door') goThrough(Number(near.id));
      else { spent = near.id; p.onSpot(near.id); }
    }
    // A door (a lift, a staircase, a chairlift) takes the mascot to another part of the zone.
    function goThrough(i: number) {
      const d = region?.scene.doors?.[i];
      if (!d) return;
      player = { ...player, x: d.to.x, z: d.to.z, heading: d.to.heading, speed: 0, y: 0, vy: 0 };
      yaw = d.to.heading; safe = { x: d.to.x, z: d.to.z }; spent = null; inside = null;
      camera.position.set(d.to.x - Math.sin(yaw) * 7, 4, d.to.z - Math.cos(yaw) * 7);
      if (fade.current) { fade.current.style.background = '#000000'; fade.current.style.opacity = '0.85'; window.setTimeout(() => { if (fade.current) { fade.current.style.opacity = '0'; fade.current.style.background = ''; } }, 220); }
    }
    // Browser tests (?qa3d) can place the mascot and read where it is; nothing else changes.
    if (typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('qa3d')) {
      (window as unknown as { __mw3d?: unknown }).__mw3d = {
        place: (x: number, z: number, heading = 0) => { player = { ...player, x, z, heading, speed: 0, y: 0, vy: 0 }; yaw = heading; safe = { x, z }; },
        where: () => ({ x: player.x, z: player.z, y: player.y, region: region?.id ?? null, near }),
      };
    }
    api.current = { joy, held, clear, interact, jump: () => { jumpUntil = clock + 0.15; }, nitro: touchNitro };

    // ------------------------------------------------------------ regions
    function frontOfGate(id: string) {
      const gate = map.layout.gates.find(g => g.region === id)!;
      return { x: gate.x + Math.sin(gate.heading) * 3.4, z: gate.z + Math.cos(gate.heading) * 3.4, heading: gate.heading };
    }
    function showMap(from: string | null) {
      if (region) { disposeGroup(region.scene.group); region = null; }
      map.group.visible = true;
      mapLight();
      const at = from ? frontOfGate(from) : MAP_SPAWN;
      player = { ...player, x: at.x, z: at.z, heading: at.heading, speed: 0, y: 0, vy: 0 };
      yaw = at.heading; safe = { x: at.x, z: at.z };
      spent = null; inside = null;
    }
    function buildRegion(id: string, builder: SceneBuilder) {
      const built = keepPeopleClear(builder({ low, shadows: !low }));
      const rings = new Map<string, ReturnType<typeof spotRing>>();
      for (const s of built.spots) rings.set(s.id, spotRing(built.group, s.x, s.z));
      // Doors glow blue on the ground, so they read as a way somewhere else.
      for (const d of built.doors ?? []) {
        const ring = new THREE.Mesh(new THREE.RingGeometry(0.9, 1.15, 32), new THREE.MeshBasicMaterial({ color: '#5fb4ff', transparent: true, opacity: 0.9, depthWrite: false }));
        ring.rotation.x = -Math.PI / 2; ring.position.set(d.x, 0.045, d.z); built.group.add(ring);
        const disc = new THREE.Mesh(new THREE.CircleGeometry(0.9, 32), new THREE.MeshBasicMaterial({ color: '#5fb4ff', transparent: true, opacity: 0.18, depthWrite: false }));
        disc.rotation.x = -Math.PI / 2; disc.position.set(d.x, 0.04, d.z); built.group.add(disc);
      }
      // The way back: an arch that says MAPA.
      const arch = new THREE.Group();
      const post = new THREE.MeshStandardMaterial({ color: '#f3efe6', roughness: 0.6 });
      for (const s of [-1.6, 1.6]) { const m = new THREE.Mesh(new THREE.BoxGeometry(0.35, 3.4, 0.35), post); m.position.set(s, 1.7, 0); arch.add(m); }
      const tex = canvas(256, 64, ctx => { ctx.fillStyle = '#16336b'; ctx.fillRect(0, 0, 256, 64); ctx.fillStyle = '#fff'; ctx.font = '800 32px "Helvetica Neue", Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('MAPA · MAP', 128, 34); });
      const top = new THREE.Mesh(new THREE.BoxGeometry(3.8, 0.7, 0.2), new THREE.MeshStandardMaterial({ map: tex }));
      top.position.y = 3.5; arch.add(top);
      const veil = new THREE.Mesh(new THREE.PlaneGeometry(2.9, 3.2), new THREE.MeshBasicMaterial({ color: '#7fb2ff', transparent: true, opacity: 0.3, side: THREE.DoubleSide, depthWrite: false }));
      veil.position.y = 1.6; arch.add(veil);
      arch.position.set(built.exit.x, 0, built.exit.z);
      arch.rotation.y = Math.atan2(built.spawn.x - built.exit.x, built.spawn.z - built.exit.z);
      built.group.add(arch);
      scene.add(built.group);
      region = { id, scene: built, rings, bubbles: createBubbles(built.group), exitVeil: veil, greeted: new Set() };
      doneKey = '';
      map.group.visible = false;
      const L = built.light;
      const sky = canvas(16, 512, ctx => { const g = ctx.createLinearGradient(0, 0, 0, 512); g.addColorStop(0, L.sky[0]); g.addColorStop(1, L.sky[1]); ctx.fillStyle = g; ctx.fillRect(0, 0, 16, 512); });
      sky.mapping = THREE.EquirectangularReflectionMapping;
      scene.background = sky;
      built.group.userData.sky = sky;
      scene.fog = new THREE.Fog(L.fog[0], L.fog[1], L.fog[2]);
      hemi.color.set(L.hemi[0]); hemi.groundColor.set(L.hemi[1]); hemi.intensity = L.hemi[2];
      sun.color.set(L.sun.color); sun.intensity = L.sun.intensity;
      renderer.toneMappingExposure = L.exposure;
      player = { ...player, x: built.spawn.x, z: built.spawn.z, heading: built.spawn.heading, speed: 0, y: 0, vy: 0 };
      yaw = built.spawn.heading; spent = null; inside = null;
      // The camera swoops down from above the zone.
      camera.position.set(built.spawn.x - Math.sin(yaw) * 26, 30, built.spawn.z - Math.cos(yaw) * 26);
      swoop = 1.8;
      live.current.onRegionReady(id);
    }

    // ------------------------------------------------------------ input
    const onKeyDown = (event: KeyboardEvent) => {
      if (!canUseKeys(event.target as HTMLElement) || event.metaKey || event.ctrlKey || event.altKey) return;
      if (live.current.paused || live.current.spotOpen) return;
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
    // Every person without a story and every landmark has a conversation circle.
    const charlas = createCharlas({
      parent: scene, host: mount.current!.parentElement ?? mount.current!, world: 'pais', level: () => live.current.level,
      people: function* () {
        if (!region) return;
        for (const [i, tk] of region.scene.talkers.entries()) if (!tk.spot) yield { key: `${region.id}:t${i}`, x: tk.x, z: tk.z };
        for (const [i, w] of region.scene.walkers.entries()) yield { key: `${region.id}:w${i}`, x: w.x, z: w.z };
      },
      places: () => region?.scene.places?.map(pl => pl.id.includes(':') ? pl : Object.assign(pl, { id: `${region!.id}:${pl.id}` })) ?? [],
    });
    const el = renderer.domElement;
    const onDown = (e: PointerEvent) => { if (e.button !== 0 && e.pointerType === 'mouse') return; drag = { id: e.pointerId, x: e.clientX, y: e.clientY }; el.setPointerCapture?.(e.pointerId); };
    const onMove = (e: PointerEvent) => {
      if (!drag || drag.id !== e.pointerId) return;
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      drag.x = e.clientX; drag.y = e.clientY;
      yaw -= dx * 0.006; pitch = Math.min(1.1, Math.max(0.05, pitch + dy * 0.004)); lastDrag = clock;
    };
    const onUp = (e: PointerEvent) => { if (drag?.id === e.pointerId) drag = null; };
    const onWheel = (e: WheelEvent) => { e.preventDefault(); zoom = Math.min(region ? 9 : 16, Math.max(2.6, zoom + e.deltaY * 0.006)); };
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

    // ------------------------------------------------------------ loop
    const loop = (now: number) => {
      if (disposed) return;
      frame = requestAnimationFrame(loop);
      const raw = previous ? (now - previous) / 1000 : 0.016;
      const dt = Math.min(0.05, raw);
      previous = now; clock += dt;
      const p = live.current;
      if (p.act !== acted) { acted = p.act; interact(); }

      // What the lesson wants on screen.
      if (p.view !== view && !transition && !loading) {
        if (view === null) {
          view = p.view;
          if (view === 'intro') { introT = reduced ? INTRO_END - 1.6 : 0; hero.root.visible = false; map.plane.position.set(-200, 50, PLANE_PARK.z); }
          else if (view.startsWith('region:')) transition = { to: view, t: 0.45, swapped: false };
          else { map.sign.visible = true; showMap(null); }
        } else if (view === 'intro' && p.view === 'map') {
          // The arrival ends (or is skipped): the mascot steps out of the plane.
          view = 'map'; map.sign.visible = true; map.sign.position.y = 0; map.plane.position.set(PLANE_PARK.x, 1.85, PLANE_PARK.z); map.plane.rotation.set(0, 0, 0);
          hero.root.visible = true; showMap(null);
        } else transition = { to: p.view, t: 0, swapped: false };
      }
      if (transition) {
        transition.t += dt;
        const k = transition.t;
        if (fade.current) fade.current.style.opacity = String(transition.swapped ? Math.max(0, 1 - (k - 0.45) / 0.55) : Math.min(1, k / 0.45));
        if (!transition.swapped && k >= 0.45) {
          const to = transition.to;
          if (to.startsWith('region:')) {
            const id = to.slice(7);
            if (region?.id !== id && loading !== id) {
              loading = id;
              const tr = transition;
              p.loadScene(id).then(builder => {
                if (disposed) return;
                if (region) disposeGroup(region.scene.group);
                region = null;
                try { buildRegion(id, builder); } catch (error) { console.error(error); }
                loading = null; tr.swapped = true; tr.t = 0.45; view = to;
              }).catch(() => { loading = null; tr.swapped = true; view = 'map'; });
            }
          } else {
            const from = region?.id ?? null;
            showMap(from); view = to; transition.swapped = true; transition.t = 0.45;
          }
        }
        if (transition && transition.swapped && transition.t >= 1) { transition = null; if (fade.current) fade.current.style.opacity = '0'; }
      }

      // ---------------------------------------------------- the arrival
      if (view === 'intro') {
        // The arrival keeps wall-clock time, so a slow device still lands in ~14 s.
        introT += Math.min(0.25, raw);
        const t = introT;
        const plane = planeAt(Math.min(t, 9.8));
        map.plane.position.set(plane.x, plane.y, PLANE_PARK.z);
        map.plane.rotation.set(plane.roll, 0, plane.pitch);
        if (introBeat === 0 && t > 0.1) { introBeat = 1; p.onIntroBeat('engine'); }
        if (introBeat === 1 && t > 7.4) { introBeat = 2; p.onIntroBeat('touchdown'); for (let i = 0; i < 6; i++) puff(plane.x - 1, 0.4, PLANE_PARK.z + (i % 2 ? 1 : -1)); }
        if (introBeat === 2 && t > 7.4 && t < 8.6 && Math.random() < 0.4) puff(plane.x - 0.6, 0.3, PLANE_PARK.z + (Math.random() - 0.5) * 2);
        if (introBeat === 2 && t > 9.7) { introBeat = 3; p.onIntroBeat('sign'); map.sign.visible = true; confetti(-2, 9, 9.5, low ? 40 : 90); if (fade.current) fade.current.style.background = '#ffffff'; }
        // The flash of the cut to the sign.
        if (fade.current && t > 9.4 && t < 10.6) fade.current.style.opacity = String(Math.max(0, 1 - Math.abs(t - 9.75) / 0.6) * 0.85);
        if (fade.current && t >= 10.6 && fade.current.style.background) { fade.current.style.opacity = '0'; fade.current.style.background = ''; }
        map.sign.position.y = -6 + 6 * smooth(9.7, 10.9, t);
        // Camera: behind the jet, then beside it on the approach, low by the
        // runway, the sign, and a long climb that reveals the islands.
        let cx: number, cy: number, cz: number, lx: number, ly: number, lz: number;
        if (t < 9.6) {
          const a = smooth(2.5, 6.4, t), b = smooth(6.6, 7.8, t);
          const ax = plane.x + lerp(-17, 9, a), ay = plane.y + lerp(5.5, 1.8, a), az = PLANE_PARK.z + lerp(9, 15, a);
          cx = lerp(ax, plane.x * 0.35 - 4, b); cy = lerp(ay, 2.4, b); cz = lerp(az, 13, b);
          lx = plane.x + 6 * (1 - b); ly = plane.y + 0.5; lz = PLANE_PARK.z;
        } else if (t < 11) {
          cx = -2; cy = 4.2 + (t - 9.6) * 0.3; cz = -5.5; lx = -2; ly = 4.8; lz = 9.5;
        } else {
          const k = smooth(11, INTRO_END - 0.4, t);
          cx = lerp(-2, 4, k); cy = lerp(4.6, 92, k); cz = lerp(-5.5, -104, k); lx = lerp(-2, -4, k); ly = lerp(4.8, -2, k); lz = lerp(9.5, 6, k);
        }
        camera.position.set(cx, cy, cz);
        camera.lookAt(lx, ly, lz);
        if (t >= INTRO_END && introBeat === 3) { introBeat = 4; p.onIntroBeat('end'); }
      }

      // Circles that are done turn grey.
      if (region) {
        const dk = p.done.join();
        if (dk !== doneKey) {
          doneKey = dk;
          for (const [id, ring] of region.rings) {
            const isDone = p.done.includes(`${region.id}/${id}`);
            ring.material.color.set(isDone ? '#9aa8b0' : '#ffffff');
            ring.material.opacity = isDone ? 0.5 : 0.95;
            ring.gem.visible = !isDone;
          }
        }
      }

      // A card opened from the list puts the mascot on its circle.
      if (p.spotOpen !== openSpot) {
        openSpot = p.spotOpen;
        if (openSpot && region) {
          const s = region.scene.spots.find(x => x.id === openSpot);
          if (s) { if (Math.hypot(s.x - player.x, s.z - player.z) > 12) snap = true; player = { ...player, x: s.x, z: s.z, heading: s.heading, speed: 0, y: 0, vy: 0 }; yaw = s.heading; spent = s.id; inside = s.id; }
        }
      }

      // ---------------------------------------------------- moving
      const free = view !== 'intro' && !transition && !p.paused && !p.spotOpen;
      const solids = region ? region.scene.solids : mapSolids;
      const bounds = region ? region.scene.bounds : WIDE;
      const before = player.heading;
      if (falling) {
        falling.vy -= 22 * dt;
        player.x += falling.vx * dt; player.z += falling.vz * dt; player.y += falling.vy * dt;
        if (player.y < OCEAN_Y + 2 && fade.current) fade.current.style.opacity = String(Math.min(1, (OCEAN_Y + 2 - player.y) / 3));
        if (player.y < OCEAN_Y - 2) {
          falling = null;
          player = { ...player, x: safe.x, z: safe.z, y: 0, vy: 0, speed: 0 };
          if (fade.current) fade.current.style.opacity = '0';
        }
      } else if (free) {
        const input = inputFrom(held);
        const ix = input.x + joy.x, iy = input.y + joy.y;
        const nitro = input.nitro || touchNitro.on;
        const jumping = input.jump || clock < jumpUntil;
        const next = stepPlayer(player, { x: ix, y: iy, yaw, sprint: input.sprint, nitro, jump: jumping, jumpSpeed: 8.4 }, dt, solids, bounds);
        const prev = { x: player.x, z: player.z };
        player = { ...player, x: next.x, z: next.z, heading: next.heading, speed: next.speed, y: next.y, vy: next.vy, jumpHeld: next.jumpHeld };
        if (!region) {
          // The map floats: walking off a bridge or an island means a fall.
          const ground = onGround(map.layout, regions, player.x, player.z, 0.15);
          if (ground && player.y < 0.05) safe = { x: prev.x, z: prev.z };
          if (!ground && player.y < 0.02) {
            const step = Math.max(0.0001, dt);
            falling = { vx: (player.x - prev.x) / step * 0.6, vz: (player.z - prev.z) / step * 0.6, vy: 0 };
          }
        } else {
          // People are solid; whoever you run into turns and tells you so.
          const bodies: (Talker | Walker)[] = [...region.scene.talkers, ...region.scene.walkers];
          const out = pushOut(player.x, player.z, bodies, (x: number, z: number) => !solids.some(b => (b.top == null || player.y < b.top) && x > b.x0 - 0.35 && x < b.x1 + 0.35 && z > b.z0 - 0.35 && z < b.z1 + 0.35));
          if (player.y < 1) { player.x = out.x; player.z = out.z; }
          const who = out.hit >= 0 && player.y < 1 ? bodies[out.hit] : null;
          if (who && (next.speed > 1.2 || ('moving' in who && who.moving)) && mayYell(who, clock)) {
            const line = insultFor(who.body, who.seed);
            region.bubbles.say(who, line.text, 3, true);
            shout(line, 1);
            setMood(who.person, 'furious');
            who.angryUntil = clock + 3.4;
            if (!angry.includes(who)) angry.push(who);
            player.speed *= 0.3;
          }
        }
        const wantFov = baseFov + (nitro && player.speed > 10 ? 10 : 0);
        if (Math.abs(wantFov - camera.fov) > 0.05) { camera.fov += (wantFov - camera.fov) * Math.min(1, dt * 6); camera.updateProjectionMatrix(); }
        if (clock - lastDrag > 1.2) yaw = followYaw(yaw, player.heading, player.speed, dt);
      } else if (!transition) { player.speed = 0; }
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
      if (view !== 'intro' && !transition && !falling) {
        if (region) {
          const here = region.scene.spots.find(s => Math.hypot(s.x - player.x, s.z - player.z) < 1.45) ?? null;
          const id = here?.id ?? null;
          if (id !== inside) { inside = id; still = 0; if (!id) spent = null; }
          if (id && !p.spotOpen && !p.paused && id !== spent) {
            still = player.speed < 0.3 ? still + dt : 0;
            if (still > 0.6) { spent = id; still = 0; p.onSpot(id); }
          }
          const door = id ? -1 : (region.scene.doors ?? []).findIndex(d => Math.hypot(d.x - player.x, d.z - player.z) < 1.4);
          if (id) found = { kind: 'spot', id };
          else if (door >= 0) found = { kind: 'door', id: String(door), label: region.scene.doors![door].label };
          else if (Math.hypot(region.scene.exit.x - player.x, region.scene.exit.z - player.z) < 2.2) found = { kind: 'exit', id: 'map' };
          else {
            // Someone with a story waves you over.
            for (const tk of region.scene.talkers) {
              if (!tk.spot || region.greeted.has(tk.spot) || p.done.includes(`${region.id}/${tk.spot}`)) continue;
              if (Math.hypot(tk.x - player.x, tk.z - player.z) < 5) {
                region.greeted.add(tk.spot);
                region.bubbles.say(tk, p.greetings[region.greeted.size % p.greetings.length], 3.2);
              }
            }
          }
        } else {
          for (const g of map.layout.gates) if (Math.hypot(g.x - player.x, g.z - player.z) < 2.6) found = { kind: 'gate', id: g.region };
          // Portals on the apron: step in, come out at the island's gate.
          for (const portal of map.layout.portals) {
            if (Math.hypot(portal.x - player.x, portal.z - player.z) < 1.05 && player.y < 0.5) {
              const at = frontOfGate(portal.region);
              player = { ...player, x: at.x, z: at.z, heading: at.heading + Math.PI, speed: 0 };
              yaw = at.heading + Math.PI; safe = { x: at.x, z: at.z };
              if (fade.current) { fade.current.style.background = '#ffffff'; fade.current.style.opacity = '0.8'; window.setTimeout(() => { if (fade.current) { fade.current.style.opacity = '0'; fade.current.style.background = ''; } }, 160); }
              camera.position.set(at.x - Math.sin(yaw) * 9, 6, at.z - Math.cos(yaw) * 9);
            }
          }
        }
      }
      charlas.update(player, dt, Boolean(region) && !found && !falling && !transition && !p.paused && !p.spotOpen && view !== 'intro');
      const nk = found ? `${found.kind}:${found.id}` : '';
      if (nk !== nearKey) { nearKey = nk; near = found; p.onNear(found); }
      if (clock - poseAt > 0.25 && view !== 'intro') {
        poseAt = clock;
        p.onPose({ region: region?.id ?? null, island: region ? null : islandAt(regions, player.x, player.z)?.id ?? null, x: player.x, z: player.z, heading: player.heading });
      }

      // ---------------------------------------------------- life
      map.animate(clock, dt);
      if (region) {
        region.scene.animate(clock, dt);
        region.bubbles.update(clock);
        region.exitVeil.rotation.y = 0;
        (region.exitVeil.material as THREE.MeshBasicMaterial).opacity = 0.2 + Math.sin(clock * 2.4) * 0.1;
        for (const [, ring] of region.rings) { ring.gem.rotation.y += dt * 1.6; ring.gem.position.y = 2.5 + Math.sin(clock * 2) * 0.12; }
        for (const tk of region.scene.talkers) {
          const talking = Boolean(p.spotOpen && tk.spot === p.spotOpen);
          const dx = player.x - tk.x, dz = player.z - tk.z, d = Math.hypot(dx, dz), facing = Math.atan2(dx, dz);
          if (talking && !tk.seated) { tk.heading += angleBetween(tk.heading, facing) * Math.min(1, dt * 4); tk.person.root.rotation.y = tk.heading; }
          tk.person.look = d < 6 || talking ? Math.max(-1.1, Math.min(1.1, angleBetween(tk.heading, facing))) : null;
          if (d < 40) animatePerson(tk.person, dt, 0, talking);
        }
        for (const w of region.scene.walkers) {
          const blocked = Math.hypot(w.x - player.x, w.z - player.z) < 1.1;
          if (Math.hypot(w.x - player.x, w.z - player.z) < 45) stepWalker(w, dt, blocked);
        }
      }
      for (let i = bits.length - 1; i >= 0; i--) {
        const b = bits[i];
        b.life -= dt;
        if (b.life <= 0) { b.obj.removeFromParent(); bits.splice(i, 1); continue; }
        if (b.obj instanceof THREE.Sprite) { b.obj.position.addScaledVector(b.v, dt); b.obj.scale.multiplyScalar(1 + dt * 0.9); (b.obj.material as THREE.SpriteMaterial).opacity = 0.6 * Math.min(1, b.life); }
        else { b.v.y -= 2.2 * dt; b.obj.position.addScaledVector(b.v, dt); b.obj.rotation.x += b.spin * dt; b.obj.rotation.y += b.spin * 0.7 * dt; }
      }
      if (hero.root.visible) animateHero(hero, dt, player.speed > 0.2 ? player.speed : 0, turn, p.spotOpen ? 'talk' : 'move', reduced);

      // ---------------------------------------------------- camera
      if (view !== 'intro') {
        if (p.spotOpen && region) {
          const tk = region.scene.talkers.find(t => t.spot === p.spotOpen);
          const ox = tk ? tk.x : player.x + Math.sin(player.heading) * 1.8, oz = tk ? tk.z : player.z + Math.cos(player.heading) * 1.8;
          mid.set((player.x + ox) / 2, 1.3, (player.z + oz) / 2);
          const side = Math.atan2(ox - player.x, oz - player.z) + Math.PI / 2;
          const dist = Math.max(3, Math.hypot(ox - player.x, oz - player.z) * 0.9 + 1.6);
          let cx = mid.x + Math.sin(side) * dist, cz = mid.z + Math.cos(side) * dist;
          if (clearArm(region.scene.solids, mid.x, mid.z, cx, cz, 2) < 0.9) { cx = mid.x - Math.sin(side) * dist; cz = mid.z - Math.cos(side) * dist; }
          desired.set(cx, 2.1, cz);
          // A card opened from the list jumps across the zone: cut, do not fly through walls.
          if (snap) { camera.position.copy(desired); look.copy(mid); snap = false; }
          camera.position.lerp(desired, 1 - Math.exp(-dt * 3));
          look.lerp(mid, 1 - Math.exp(-dt * 4));
          camera.lookAt(look);
          // Keep the pair beside the card (desktop) or above it (phone).
          const ix = Math.min(W * 0.4, p.inset.right) / 2, iy = Math.min(H * 0.5, p.inset.bottom) / 2;
          if (ix || iy) camera.setViewOffset(W, H, ix, iy, W, H); else camera.clearViewOffset();
        } else {
          if (camera.view) camera.clearViewOffset();
          const dist = zoom;
          const cx = player.x - Math.sin(yaw) * Math.cos(pitch) * dist;
          const cz = player.z - Math.cos(yaw) * Math.cos(pitch) * dist;
          const k = region ? clearArm(region.scene.solids, player.x, player.z, cx, cz, 3) : 1;
          desired.set(player.x + (cx - player.x) * k, Math.max(player.y + 1.2, player.y + 1.6 + Math.sin(pitch) * dist * Math.max(0.6, k)), player.z + (cz - player.z) * k);
          // Under a roof (a subway platform, a lobby) the camera stays below it.
          const roof = region?.scene.ceilings?.find(c => player.x > c.x0 && player.x < c.x1 && player.z > c.z0 && player.z < c.z1);
          if (roof) desired.y = Math.min(desired.y, roof.y - 0.35);
          const rate = swoop > 0 ? 2.2 : falling ? 3 : 9;
          swoop = Math.max(0, swoop - dt);
          if (camera.position.distanceTo(desired) > 60 && swoop <= 0 && !falling) camera.position.copy(desired);
          camera.position.lerp(desired, 1 - Math.exp(-dt * rate));
          look.set(player.x, Math.max(player.y, falling ? 0 : player.y) + 1.25, player.z);
          camera.lookAt(look);
        }
      }
      if (composer) composer.render(); else renderer.render(scene, camera);
    };
    frame = requestAnimationFrame(loop);

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      charlas.dispose();
      window.clearTimeout(touchTimer);
      observer.disconnect();
      window.removeEventListener('keydown', onKeyDown); window.removeEventListener('keyup', onKeyUp); window.removeEventListener('blur', onBlur);
      el.removeEventListener('pointerdown', onDown); el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerup', onUp); el.removeEventListener('pointercancel', onUp); el.removeEventListener('wheel', onWheel);
      if (region) disposeGroup(region.scene.group);
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
  const controls = touch && !props.spotOpen && props.view !== 'intro' && !props.paused;

  return <div className="mw-world">
    <div className="mw-canvas" ref={mount} />
    <div className="mw-fade" ref={fade} aria-hidden="true" />
    {controls && <div className="mw-joy" onPointerDown={joyDown} onPointerMove={joyMove} onPointerUp={joyUp} onPointerCancel={joyUp} aria-hidden="true"><span ref={knob} /></div>}
    {controls && <div className="mw-touch">
      <button type="button" aria-label="Saltar" onPointerDown={() => api.current?.jump()}>↑<small>Saltar</small></button>
      <button type="button" aria-label="Nitro: mantén pulsado para correr muy rápido" onPointerDown={() => { if (api.current) api.current.nitro.on = true; }} onPointerUp={() => { if (api.current) api.current.nitro.on = false; }} onPointerCancel={() => { if (api.current) api.current.nitro.on = false; }} onPointerLeave={() => { if (api.current) api.current.nitro.on = false; }}>»<small>Nitro</small></button>
    </div>}
  </div>;
}

export { HUB, ISLAND_RADIUS };
