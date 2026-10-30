'use client';

// Más allá · the runtime: renderer, camera, controls and the SpanishCue
// mascot (your soul). What happens in the canvas:
//  · the death (intro3d.ts): ten seconds in a hospital room, rendered live;
//  · the Umbral: the black mirror with the two gates and the hourglass;
//  · the Cielo and the Infierno: built when you go through a gate and freed
//    on the way out; the white circles of the twelve encounters.
// The lesson (MasAllaGame.tsx) owns the state; this component follows its
// props and reports what is near, which gate was crossed and where you are.
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
import { createBubbles, disposeGroup, stepWalker, type Box, type Talker, type Walker } from '../mundo-3d/kit3d';
import { talkCircle, type Place3D, type TalkCircle, type VoiceWalker } from './common3d';
import { buildUmbral } from './umbral3d';
import { buildCielo } from './cielo3d';
import { buildInfierno } from './infierno3d';
import { buildIntro, INTRO_SECONDS, type Intro, type IntroBeat } from './intro3d';
import { softGlowTexture } from './figures3d';

export type View = 'intro' | 'umbral' | 'cielo' | 'infierno';
export type Near = { kind: 'spot' | 'portal' | 'exit' | 'final'; id: string } | null;
export type Pose = { place: string; x: number; z: number; heading: number };
export type WorldProps = {
  view: View;
  spotOpen: string | null;
  /** Encounters finished at this level: their circles turn grey. */
  done: string[];
  paused: boolean;
  /** Screen space the open card covers, so the talk is framed beside it. */
  inset: { right: number; bottom: number };
  greetings: Record<string, string[]>;
  /** Bumped by the on-screen prompt button: same as pressing E. */
  act: number;
  onIntroBeat: (beat: IntroBeat | 'end') => void;
  onNear: (near: Near) => void;
  onPortal: (to: string) => void;
  onExit: () => void;
  onFinal: () => void;
  onSpot: (spot: string) => void;
  onPose: (pose: Pose) => void;
  onFail: () => void;
};

type Api = { joy: { x: number; y: number }; held: Set<string>; clear: () => void; interact: () => void; jump: () => void; nitro: { on: boolean } };
type Live = { place: Place3D; rings: Map<string, TalkCircle>; walking: { w: VoiceWalker; ring: TalkCircle }[]; bubbles: ReturnType<typeof createBubbles>; greeted: Set<string> };

const BUILDERS: Record<string, (o: { low: boolean; shadows: boolean }) => Place3D> = { umbral: buildUmbral, cielo: buildCielo, infierno: buildInfierno };

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
    const params = new URLSearchParams(window.location.search);
    const low = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 760 || params.get('calidad') === 'baja';
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let renderer: THREE.WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: !low, powerPreference: 'high-performance', preserveDrawingBuffer: params.has('qa3d') }); }
    catch { const t = window.setTimeout(() => live.current.onFail(), 0); return () => window.clearTimeout(t); }
    const touchTimer = window.setTimeout(() => setTouch(window.matchMedia('(pointer: coarse)').matches), 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, low ? 1.2 : 1.75));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.shadowMap.enabled = !low;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.domElement.tabIndex = 0;
    renderer.domElement.setAttribute('aria-label', 'Más allá en 3D. Flechas o WASD para caminar, espacio para saltar, E para hablar o cruzar.');
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(58, 1, 0.05, 900);
    let hero: ReturnType<typeof createHero>;
    try { hero = createHero(!low); }
    catch (error) {
      console.error(error);
      renderer.dispose(); renderer.domElement.remove();
      const t = window.setTimeout(() => live.current.onFail(), 0);
      return () => window.clearTimeout(t);
    }
    // Your soul shines a little: a soft light that walks with you.
    const soulGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: softGlowTexture(), color: '#fff2d8', transparent: true, opacity: 0.14, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false }));
    soulGlow.scale.set(2.2, 3, 1); soulGlow.position.y = 1; hero.root.add(soulGlow);
    const soulLight = new THREE.PointLight('#fff1d6', 1.6, 6, 2); soulLight.position.y = 1.6; hero.root.add(soulLight);
    scene.add(hero.root);
    const hemi = new THREE.HemisphereLight('#ffffff', '#444444', 1);
    const sun = new THREE.DirectionalLight('#ffffff', 2);
    sun.castShadow = !low;
    sun.shadow.mapSize.set(1024, 1024);
    Object.assign(sun.shadow.camera, { left: -18, right: 18, top: 18, bottom: -18, near: 1, far: 90 });
    sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.03;
    scene.add(hemi, sun, sun.target);

    let composer: EffectComposer | null = null;
    let bloom: UnrealBloomPass | null = null;
    if (!low) {
      composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));
      bloom = new UnrealBloomPass(new THREE.Vector2(512, 512), 0.5, 0.5, 0.82);
      composer.addPass(bloom);
      composer.addPass(new OutputPass());
    }

    // ------------------------------------------------------------ state
    let view: View | null = null;
    let current: Live | null = null;
    let intro: Intro | null = null;
    let introT = 0, introDone = false;
    let transition: { to: View; t: number; swapped: boolean; color: string } | null = null;
    let player = { x: 0, z: 0, heading: 0, speed: 0, y: 0, vy: 0, jumpHeld: false };
    let yaw = 0, pitch = 0.3, zoom = low ? 6 : 6.4, turn = 0;
    const held = new Set<string>();
    const joy = { x: 0, y: 0 };
    const touchNitro = { on: false };
    let jumpUntil = -1, drag: { id: number; x: number; y: number } | null = null, lastDrag = -10;
    let clock = 0, previous = 0, frame = 0, disposed = false, poseAt = 0, swoop = 0;
    let nearKey = '', near: Near = null, acted = live.current.act, snap = false;
    let inside: string | null = null, still = 0, spent: string | null = null, openSpot: string | null = null, doneKey = '', portalCool = 0;
    const mayYell = createBumpClock();
    const angry: (Talker | Walker)[] = [];
    const look = new THREE.Vector3(), desired = new THREE.Vector3(), mid = new THREE.Vector3();

    function place() {
      hero.root.position.set(player.x, player.y, player.z);
      hero.root.rotation.y = player.heading;
      sun.position.set(player.x - 14, player.y + 30, player.z + 10);
      sun.target.position.set(player.x, 0, player.z);
    }
    function clear() { held.clear(); joy.x = 0; joy.y = 0; drag = null; }
    function interact() {
      const p = live.current;
      if (p.paused || p.spotOpen || transition || view === 'intro' || !near) return;
      if (near.kind === 'portal') p.onPortal(near.id);
      else if (near.kind === 'exit') p.onExit();
      else if (near.kind === 'final') p.onFinal();
      else { spent = near.id; p.onSpot(near.id); }
    }
    if (params.has('qa3d')) {
      (window as unknown as { __ma3d?: unknown }).__ma3d = {
        place: (x: number, z: number, heading = 0) => { player = { ...player, x, z, heading, speed: 0, y: 0, vy: 0 }; yaw = heading; },
        where: () => ({ x: player.x, z: player.z, y: player.y, place: current?.place.id ?? null, near }),
        look: (y: number, p: number, d: number) => { yaw = y; pitch = p; zoom = d; lastDrag = clock + 1000; },
        seek: (t: number) => { introT = t; },
        scene,
      };
    }
    api.current = { joy, held, clear, interact, jump: () => { jumpUntil = clock + 0.15; }, nitro: touchNitro };

    // ------------------------------------------------------------ places
    function applyLight(pl: Place3D) {
      const L = pl.light;
      scene.background = new THREE.Color(L.fog[0]);
      scene.fog = new THREE.Fog(L.fog[0], L.fog[1], L.fog[2]);
      hemi.color.set(L.hemi[0]); hemi.groundColor.set(L.hemi[1]); hemi.intensity = L.hemi[2];
      sun.color.set(L.sun.color); sun.intensity = L.sun.intensity;
      renderer.toneMappingExposure = L.exposure;
      if (bloom) { bloom.strength = pl.id === 'cielo' ? 0.38 : pl.id === 'infierno' ? 0.55 : 0.45; bloom.threshold = pl.id === 'cielo' ? 0.9 : 0.82; }
    }
    function enter(id: string, from: string | null) {
      if (current) { disposeGroup(current.place.group); current = null; }
      if (intro) { disposeGroup(intro.group); intro = null; }
      const built = BUILDERS[id]({ low, shadows: !low });
      const rings = new Map<string, TalkCircle>();
      const flames = id === 'infierno';
      for (const s of built.spots) rings.set(s.id, talkCircle(built.group, s.x, s.z, { flames, voice: false }));
      for (const v of built.voices) rings.set(v.id, talkCircle(built.group, v.x, v.z, { flames, voice: true }));
      const walking: Live['walking'] = [];
      for (const w of built.walkers as VoiceWalker[]) if (w.voice) { const ring = talkCircle(built.group, w.x, w.z, { flames, voice: true }); rings.set(w.voice, ring); walking.push({ w, ring }); }
      scene.add(built.group);
      current = { place: built, rings, walking, bubbles: createBubbles(built.group), greeted: new Set() };
      doneKey = '';
      applyLight(built);
      // Back in the Umbral you come out in front of the gate you crossed.
      const gate = from ? built.portals.find(g => g.to === from) : null;
      const at = gate ? { x: gate.x * 0.7, z: gate.z + 4.5, heading: Math.PI } : built.spawn;
      player = { ...player, x: at.x, z: at.z, heading: at.heading, speed: 0, y: 0, vy: 0 };
      yaw = at.heading; spent = null; inside = null; portalCool = 1.2;
      hero.root.visible = true;
      camera.position.set(at.x - Math.sin(yaw) * 22, 18, at.z - Math.cos(yaw) * 22);
      swoop = 1.8;
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
    const el = renderer.domElement;
    const onDown = (e: PointerEvent) => { if (e.button !== 0 && e.pointerType === 'mouse') return; drag = { id: e.pointerId, x: e.clientX, y: e.clientY }; el.setPointerCapture?.(e.pointerId); };
    const onMove = (e: PointerEvent) => {
      if (!drag || drag.id !== e.pointerId) return;
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      drag.x = e.clientX; drag.y = e.clientY;
      yaw -= dx * 0.006; pitch = Math.min(1.1, Math.max(0.02, pitch + dy * 0.004)); lastDrag = clock;
    };
    const onUp = (e: PointerEvent) => { if (drag?.id === e.pointerId) drag = null; };
    const onWheel = (e: WheelEvent) => { e.preventDefault(); zoom = Math.min(11, Math.max(2.6, zoom + e.deltaY * 0.006)); };
    el.addEventListener('pointerdown', onDown); el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerup', onUp); el.addEventListener('pointercancel', onUp);
    el.addEventListener('wheel', onWheel, { passive: false });

    let baseFov = 58, W = 1, H = 1;
    const resize = () => {
      W = host.clientWidth || 1; H = host.clientHeight || 1;
      renderer.setSize(W, H, false); composer?.setSize(W, H);
      camera.aspect = W / H; baseFov = W / H < 0.8 ? 70 : 58; if (view !== 'intro') camera.fov = baseFov; camera.updateProjectionMatrix();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    resize();

    function clearArm(solids: Box[], x: number, z: number, cx: number, cz: number, h: number) {
      for (let i = 1; i <= 12; i++) {
        const k = i / 12, px = x + (cx - x) * k, pz = z + (cz - z) * k;
        if (solids.some(b => (b.top == null || b.top > h) && px > b.x0 - 0.2 && px < b.x1 + 0.2 && pz > b.z0 - 0.2 && pz < b.z1 + 0.2)) return Math.max(0.2, (i - 1) / 12);
      }
      return 1;
    }
    const setFade = (opacity: number, color?: string) => { if (!fade.current) return; if (color) fade.current.style.background = color; fade.current.style.opacity = String(opacity); };

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
      if (p.view !== view && !transition) {
        if (view === null && p.view === 'intro') {
          view = 'intro';
          try { intro = buildIntro(low, !low); } catch (error) { console.error(error); intro = null; }
          if (intro) { scene.add(intro.group); hero.root.visible = false; scene.background = new THREE.Color('#05070a'); scene.fog = null; renderer.toneMappingExposure = 1; if (bloom) { bloom.strength = 0.55; bloom.threshold = 0.8; } introT = reduced ? INTRO_SECONDS - 1.2 : 0; }
          else p.onIntroBeat('end');
        } else if (view === null) { view = p.view; enter(p.view, null); }
        else transition = { to: p.view, t: 0, swapped: false, color: view === 'intro' ? '#ffffff' : p.view === 'infierno' ? '#1a0402' : p.view === 'cielo' ? '#fff6e6' : '#000000' };
      }
      if (transition) {
        const quick = view === 'intro';
        transition.t += Math.min(0.25, raw);
        const k = transition.t, half = quick ? 0.05 : 0.45;
        setFade(transition.swapped ? Math.max(0, 1 - (k - half) / 0.7) : Math.min(1, k / half), transition.color);
        if (!transition.swapped && k >= half) {
          const from = view;
          try { enter(transition.to, from === 'intro' ? null : from); } catch (error) { console.error(error); }
          view = transition.to; transition.swapped = true; transition.t = half;
        }
        if (transition && transition.swapped && transition.t >= half + 0.7) { transition = null; setFade(0); }
      }

      // ---------------------------------------------------- the death
      if (view === 'intro' && intro) {
        // Wall-clock time, so a slow device still dies in ten seconds.
        introT += Math.min(0.25, raw);
        const f = intro.frame(Math.min(introT, INTRO_SECONDS), Math.min(0.25, raw));
        for (const b of f.beats) p.onIntroBeat(b);
        camera.position.copy(f.cam); camera.lookAt(f.look);
        if (Math.abs(camera.fov - f.fov) > 0.01) { camera.fov = f.fov; camera.updateProjectionMatrix(); }
        setFade(f.flash, '#ffffff');
        if (introT >= INTRO_SECONDS && !introDone) { introDone = true; p.onIntroBeat('end'); }
        if (composer) composer.render(); else renderer.render(scene, camera);
        return;
      }

      const pl = current?.place ?? null;
      // Circles that are done turn grey.
      if (current) {
        const dk = p.done.join();
        if (dk !== doneKey) {
          doneKey = dk;
          for (const [id, ring] of current.rings) ring.setDone(p.done.includes(id));
        }
      }
      // A card opened from the list puts the mascot on its circle.
      if (p.spotOpen !== openSpot) {
        openSpot = p.spotOpen;
        if (openSpot && pl) {
          const mover = current?.walking.find(m => m.w.voice === openSpot)?.w;
          // A walker's card: the mascot steps in front of them.
          const s = pl.spots.find(x => x.id === openSpot) ?? pl.voices.find(x => x.id === openSpot)
            ?? (mover ? { id: openSpot, x: mover.x + Math.sin(mover.heading) * 1.5, z: mover.z + Math.cos(mover.heading) * 1.5, heading: mover.heading + Math.PI } : null);
          if (s) { if (Math.hypot(s.x - player.x, s.z - player.z) > 12) snap = true; player = { ...player, x: s.x, z: s.z, heading: s.heading, speed: 0, y: 0, vy: 0 }; yaw = s.heading; spent = s.id; inside = s.id; }
        }
      }

      // ---------------------------------------------------- moving
      const free = Boolean(pl) && !transition && !p.paused && !p.spotOpen;
      const solids = pl?.solids ?? [];
      const before = player.heading;
      if (free && pl) {
        const input = inputFrom(held);
        const nitro = input.nitro || touchNitro.on;
        const jumping = input.jump || clock < jumpUntil;
        const next = stepPlayer(player, { x: input.x + joy.x, y: input.y + joy.y, yaw, sprint: input.sprint, nitro, jump: jumping, jumpSpeed: 8.4 }, dt, solids, pl.bounds);
        player = { ...player, x: next.x, z: next.z, heading: next.heading, speed: next.speed, y: next.y, vy: next.vy, jumpHeld: next.jumpHeld };
        // People are solid; whoever you run into turns and tells you so.
        const bodies: (Talker | Walker)[] = [...pl.talkers, ...pl.walkers];
        const out = pushOut(player.x, player.z, bodies, (x: number, z: number) => !solids.some(b => (b.top == null || player.y < b.top) && x > b.x0 - 0.35 && x < b.x1 + 0.35 && z > b.z0 - 0.35 && z < b.z1 + 0.35));
        if (player.y < 1) { player.x = out.x; player.z = out.z; }
        const who = out.hit >= 0 && player.y < 1 ? bodies[out.hit] : null;
        if (who && (next.speed > 1.2 || ('moving' in who && who.moving)) && mayYell(who, clock)) {
          const line = insultFor(who.body, who.seed);
          current!.bubbles.say(who, line.text, 3, true);
          shout(line, 1);
          setMood(who.person, 'furious');
          who.angryUntil = clock + 3.4;
          if (!angry.includes(who)) angry.push(who);
          player.speed *= 0.3;
        }
        const wantFov = baseFov + (nitro && player.speed > 10 ? 10 : 0);
        if (Math.abs(wantFov - camera.fov) > 0.05) { camera.fov += (wantFov - camera.fov) * Math.min(1, dt * 6); camera.updateProjectionMatrix(); }
        if (clock - lastDrag > 1.2) yaw = followYaw(yaw, player.heading, player.speed, dt);
      } else if (!transition) player.speed = 0;
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
      portalCool = Math.max(0, portalCool - dt);
      if (pl && current && !transition) {
        const here = pl.spots.find(s => Math.hypot(s.x - player.x, s.z - player.z) < 1.45)
          ?? pl.voices.find(s => Math.hypot(s.x - player.x, s.z - player.z) < 1.2)
          ?? current.walking.map(m => ({ id: m.w.voice!, x: m.w.x, z: m.w.z })).find(s => Math.hypot(s.x - player.x, s.z - player.z) < 1.7) ?? null;
        const id = here?.id ?? null;
        if (id !== inside) { inside = id; still = 0; if (!id) spent = null; }
        if (id && !p.spotOpen && !p.paused && id !== spent) {
          still = player.speed < 0.3 ? still + dt : 0;
          if (still > 0.6) { spent = id; still = 0; p.onSpot(id); }
        }
        const gate = pl.portals.find(g => Math.hypot(g.x - player.x, g.z - player.z) < g.r) ?? null;
        if (id) found = { kind: 'spot', id };
        else if (gate) {
          found = { kind: 'portal', id: gate.to };
          // Walking into a gate crosses it.
          if (portalCool <= 0 && Math.hypot(gate.x - player.x, gate.z - player.z) < 1.1 && !p.paused) { portalCool = 3; p.onPortal(gate.to); }
        } else if (pl.final && Math.hypot(pl.final.x - player.x, pl.final.z - player.z) < pl.final.r) found = { kind: 'final', id: 'final' };
        else if (Math.hypot(pl.exit.x - player.x, pl.exit.z - player.z) < 2.4) found = { kind: 'exit', id: 'umbral' };
        else {
          const lines = p.greetings[pl.id] ?? [];
          for (const tk of pl.talkers) {
            if (!tk.spot || current.greeted.has(tk.spot) || p.done.includes(tk.spot) || !lines.length) continue;
            if (Math.hypot(tk.x - player.x, tk.z - player.z) < 6) { current.greeted.add(tk.spot); current.bubbles.say(tk, lines[current.greeted.size % lines.length], 3.4); }
          }
        }
      }
      const nk = found ? `${found.kind}:${found.id}` : '';
      if (nk !== nearKey) { nearKey = nk; near = found; p.onNear(found); }
      if (pl && clock - poseAt > 0.25) { poseAt = clock; p.onPose({ place: pl.id, x: player.x, z: player.z, heading: player.heading }); }

      // ---------------------------------------------------- life
      if (pl && current) {
        (pl.group.userData.follow as ((x: number, z: number) => void) | undefined)?.(player.x, player.z);
        pl.animate(clock, dt);
        pl.face(camera);
        current.bubbles.update(clock);
        for (const [, ring] of current.rings) ring.animate(clock, dt);
        for (const tk of pl.talkers) {
          const talking = Boolean(p.spotOpen && tk.spot === p.spotOpen);
          const dx = player.x - tk.x, dz = player.z - tk.z, d = Math.hypot(dx, dz), facing = Math.atan2(dx, dz);
          if (talking && !tk.seated) { tk.heading += angleBetween(tk.heading, facing) * Math.min(1, dt * 4); tk.person.root.rotation.y = tk.heading; }
          tk.person.look = d < 6 || talking ? Math.max(-1.1, Math.min(1.1, angleBetween(tk.heading, facing))) : null;
          if (d < 45) animatePerson(tk.person, dt, 0, talking);
        }
        for (const w of pl.walkers as VoiceWalker[]) {
          const d = Math.hypot(w.x - player.x, w.z - player.z);
          // Someone with a voice waits for you when you come close, and while you talk.
          const blocked = d < 1.1 || Boolean(w.voice && (w.voice === p.spotOpen || (d < 2.2 && !p.done.includes(w.voice))));
          if (d < 50) stepWalker(w, dt, blocked);
          if (w.voice === p.spotOpen && !w.moving) { w.heading += angleBetween(w.heading, Math.atan2(player.x - w.x, player.z - w.z)) * Math.min(1, dt * 4); w.person.root.rotation.y = w.heading; }
        }
        for (const m of current.walking) m.ring.group.position.set(m.w.x, 0, m.w.z);
      }
      soulGlow.material.opacity = 0.12 + Math.sin(clock * 2) * 0.03;
      if (hero.root.visible) animateHero(hero, dt, player.speed > 0.2 ? player.speed : 0, turn, p.spotOpen ? 'talk' : 'move', reduced);

      // ---------------------------------------------------- camera
      if (pl) {
        if (p.spotOpen) {
          const tk = pl.talkers.find(t => t.spot === p.spotOpen) ?? current?.walking.find(m => m.w.voice === p.spotOpen)?.w;
          const ox = tk ? tk.x : player.x + Math.sin(player.heading) * 1.8, oz = tk ? tk.z : player.z + Math.cos(player.heading) * 1.8;
          mid.set((player.x + ox) / 2, 1.35, (player.z + oz) / 2);
          const side = Math.atan2(ox - player.x, oz - player.z) + Math.PI / 2;
          const dist = Math.max(3, Math.hypot(ox - player.x, oz - player.z) * 0.9 + 1.7);
          let cx = mid.x + Math.sin(side) * dist, cz = mid.z + Math.cos(side) * dist;
          if (clearArm(solids, mid.x, mid.z, cx, cz, 2) < 0.9) { cx = mid.x - Math.sin(side) * dist; cz = mid.z - Math.cos(side) * dist; }
          desired.set(cx, 2.05, cz);
          if (snap) { camera.position.copy(desired); look.copy(mid); snap = false; }
          camera.position.lerp(desired, 1 - Math.exp(-dt * 3));
          look.lerp(mid, 1 - Math.exp(-dt * 4));
          camera.lookAt(look);
          const ix = Math.min(W * 0.4, p.inset.right) / 2, iy = Math.min(H * 0.5, p.inset.bottom) / 2;
          if (ix || iy) camera.setViewOffset(W, H, ix, iy, W, H); else camera.clearViewOffset();
        } else {
          if (camera.view) camera.clearViewOffset();
          const dist = zoom;
          const cx = player.x - Math.sin(yaw) * Math.cos(pitch) * dist;
          const cz = player.z - Math.cos(yaw) * Math.cos(pitch) * dist;
          const k = clearArm(solids, player.x, player.z, cx, cz, 3);
          desired.set(player.x + (cx - player.x) * k, Math.max(player.y + 1.2, player.y + 1.6 + Math.sin(pitch) * dist * Math.max(0.6, k)), player.z + (cz - player.z) * k);
          const rate = swoop > 0 ? 2.2 : 9;
          swoop = Math.max(0, swoop - dt);
          if (camera.position.distanceTo(desired) > 60 && swoop <= 0) camera.position.copy(desired);
          camera.position.lerp(desired, 1 - Math.exp(-dt * rate));
          look.set(player.x, player.y + 1.25, player.z);
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
      if (current) disposeGroup(current.place.group);
      if (intro) disposeGroup(intro.group);
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

  return <div className="ma-world">
    <div className="ma-canvas" ref={mount} />
    <div className="ma-fade" ref={fade} aria-hidden="true" />
    {controls && <div className="ma-joy" onPointerDown={joyDown} onPointerMove={joyMove} onPointerUp={joyUp} onPointerCancel={joyUp} aria-hidden="true"><span ref={knob} /></div>}
    {controls && <div className="ma-touch">
      <button type="button" aria-label="Saltar" onPointerDown={() => api.current?.jump()}>↑<small>Saltar</small></button>
      <button type="button" aria-label="Nitro: mantén pulsado para correr muy rápido" onPointerDown={() => { if (api.current) api.current.nitro.on = true; }} onPointerUp={() => { if (api.current) api.current.nitro.on = false; }} onPointerCancel={() => { if (api.current) api.current.nitro.on = false; }} onPointerLeave={() => { if (api.current) api.current.nitro.on = false; }}>»<small>Nitro</small></button>
    </div>}
  </div>;
}
