'use client';

import * as THREE from 'three';
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import { PLATFORMS, ZONES, STAGES, OBSTACLES, MICRO_SPOTS, stageAt, spawnPlayer, stepPlayer, respawnAt, RUN_SPEED, type Position, type Player } from './engine.mjs';
import type { CategoryId } from './content/types';
import { buildForest, atmosphereAt } from './forest3d';
import { createForestHero, animateForestHero, breakForestHero, reassembleForestHero } from './hero3d';
import { solveForestCamera, cameraClearDistance, destinationBearing, followYaw, orbitFor, CAMERA_PRESETS, MIN_DISTANCE, MAX_DISTANCE, PITCH_MIN, PITCH_MAX } from './camera';
import './world.css';

export type WorldProps = {
  paused: boolean;
  visited: CategoryId[];
  completed: boolean;
  unlocked: boolean;
  onZone: (zone: CategoryId) => void;
  onFail: () => void;
  onPosition?: (p: Position) => void;
  /** Short conversation moments between stations: which ones are done, where the learner stands, and marking one as said. */
  micro?: string[];
  onMicroSpot?: (spot: string | null) => void;
  onMicroDone?: (spot: string) => void;
  /** The learner landed on the summit: the final conversation opens. */
  onSummit?: () => void;
  /** Start over: when set, this mount ignores the saved spot, begins at the forest floor and clears the flag. */
  fresh?: { current: boolean };
};
const POSITION_KEY = 'spanishcue:bosque:world:v2';
const TOP = 62;
export const STAGE_COLORS = ['#7d9a55', '#a9b85d', '#e5a93a', '#c8405a', '#45c4dc', '#c9b27e', '#7fb069', '#dfe8ea', '#9cc7f2', '#f2c25b'];
// Each new altitude band announces itself: the climb is an expedition with chapters.
const STAGE_INTROS = [
  'El bosque empieza aquí. Sube por los hongos bajos.',
  'Los sombreros crecen. Mira hacia arriba: el camino sigue.',
  'Setas doradas y cremosas. ¿Cuáles se pueden comer?',
  'Rojo, violeta, negro. Bonito… y peligroso.',
  'Aquí los hongos brillan sin sol.',
  'Sombreros gigantes a la altura de los árboles.',
  'Hongos de repisa en troncos enormes.',
  'La niebla tapa el camino. Confía en las luces.',
  'Has atravesado las nubes. El bosque quedó abajo.',
  'La cima. Todo el camino está a tus pies.',
];
const STAGE_HINTS = [
  'Sigue el hongo marcado. Espacio para saltar; en el aire, otra vez para un segundo salto.',
  'Los sombreros suben poco a poco. Arrastra para mirar hacia arriba.',
  'Setas doradas: ¿se comen o no? Busca el globo ¿? para conversar.',
  'Colores intensos, cuidado. Los anillos dorados te impulsan.',
  'Hongos que brillan. Mira atrás: ya estás muy alto.',
  'Sombreros gigantes a la altura de los árboles.',
  'Hongos de repisa en los troncos. Sigue subiendo.',
  'La niebla tapa el camino. Salta con calma, cada hongo está cerca.',
  'Sobre las nubes. Mira hacia abajo: el bosque desapareció.',
  'La cima. Mira todo el camino que recorriste.',
];
const finitePosition = (p: unknown): p is Position => {
  if (!p || typeof p !== 'object') return false;
  const v = p as Position;
  return [v.x, v.y, v.z].every(Number.isFinite) && Math.hypot(v.x, v.z) < 65 && v.y >= 0 && v.y < TOP + 8;
};
function surfaceAt(p: Position) {
  return PLATFORMS.find(s => Math.abs(p.y - s.y) < .1 && Math.hypot(p.x - s.x, p.z - s.z) <= s.r + .15);
}
function restorePlayer(fresh = false): Player {
  const player = spawnPlayer();
  if (fresh) { try { localStorage.removeItem(POSITION_KEY); } catch { /* Storage is optional. */ } return player; }
  try {
    const stored = JSON.parse(localStorage.getItem(POSITION_KEY) || 'null');
    if (stored?.version !== 2 || !finitePosition(stored.position) || !finitePosition(stored.checkpoint)) return player;
    const cp = surfaceAt(stored.checkpoint), surface = surfaceAt(stored.position);
    if (stored.checkpoint.y !== 0 && !cp) return player;
    if (stored.position.y !== 0 && !surface) return player;
    return { ...player, ...stored.position, checkpoint: { ...stored.checkpoint }, platform: surface?.id || 'ground' };
  } catch { return player; }
}

export default function World3D(props: WorldProps) {
  const live = useRef(props);
  useEffect(() => { live.current = props; });
  const host = useRef<HTMLDivElement>(null), mapCanvas = useRef<HTMLCanvasElement>(null), largeMap = useRef<HTMLCanvasElement>(null), stick = useRef<HTMLSpanElement>(null);
  const api = useRef<{ lookAhead: () => void; clear: () => void; jump: () => void; interact: () => void; view: () => void; joy: { x: number; y: number } } | null>(null);
  const joyPointer = useRef<number | null>(null);
  const [mapOpen, setMapOpen] = useState(false), [place, setPlace] = useState('Suelo del bosque'), [stage, setStage] = useState({ name: STAGES[0].name, index: 0, altitude: 0 });
  const [ouch, setOuch] = useState(0);
  const [hint, setHint] = useState(STAGE_HINTS[0]), [activeZone, setActiveZone] = useState<CategoryId | null>(null), [banner, setBanner] = useState<{ index: number; key: number } | null>(null);
  const [destination, setDestination] = useState({ name: ZONES[0].place, short: ZONES[0].short, distance: 15, rise: 0, bearing: 0 }), [view, setView] = useState(1);
  const mapPanel = useRef<HTMLDivElement>(null);
  useEffect(() => { if (!mapOpen) return; const previous = document.activeElement as HTMLElement | null; const panel = mapPanel.current; const gameCanvas = host.current?.querySelector('canvas'); panel?.focus(); const trap = (e: KeyboardEvent) => { if (e.key === 'Tab') { e.preventDefault(); panel?.querySelector<HTMLButtonElement>('button')?.focus(); } }; document.addEventListener('keydown', trap); return () => { document.removeEventListener('keydown', trap); (gameCanvas ?? previous)?.focus({ preventScroll: true }); }; }, [mapOpen]);
  const mapOpenRef = useRef(false);
  useEffect(() => { mapOpenRef.current = mapOpen; if (mapOpen) api.current?.clear(); }, [mapOpen]);
  useEffect(() => { if (props.paused) { api.current?.clear(); joyPointer.current = null; if (stick.current) stick.current.style.transform = 'translate(0, 0)'; } }, [props.paused]);

  useEffect(() => {
    const mount = host.current; if (!mount) return;
    const low = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 760;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let renderer: THREE.WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: !low, alpha: false, powerPreference: 'high-performance' }); } catch { live.current.onFail(); return; }
    let ratio = Math.min(window.devicePixelRatio || 1, low ? 1.25 : 1.75);
    renderer.setPixelRatio(ratio); renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.1; renderer.shadowMap.enabled = !low; renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.domElement.setAttribute('aria-label', 'Bosque tridimensional. Usa WASD o flechas para moverte, espacio para saltar y arrastra para mirar.'); renderer.domElement.tabIndex = 0; mount.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const air = atmosphereAt(0);
    scene.background = air.horizon.clone(); scene.fog = new THREE.FogExp2(air.fog.getHex(), air.density);
    const camera = new THREE.PerspectiveCamera(56, 1, .1, 620);
    const skyUniforms = { top: { value: air.top.clone() }, horizon: { value: air.horizon.clone() } };
    const skyMaterial = new THREE.ShaderMaterial({ side: THREE.BackSide, depthWrite: false, fog: false, uniforms: skyUniforms, vertexShader: 'varying vec3 v;void main(){v=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}', fragmentShader: 'uniform vec3 top;uniform vec3 horizon;varying vec3 v;void main(){float h=clamp(normalize(v).y,-.2,1.);gl_FragColor=vec4(mix(horizon,top,pow(max(h,0.),.55)),1.);}' });
    const sky = new THREE.Mesh(new THREE.SphereGeometry(560, 24, 12), skyMaterial); scene.add(sky);
    const hemi = new THREE.HemisphereLight('#eaf2d6', '#4a5a3c', air.hemi); scene.add(hemi);
    const sun = new THREE.DirectionalLight('#ffe4b0', air.sun); sun.castShadow = !low; sun.shadow.mapSize.set(2048, 2048); Object.assign(sun.shadow.camera, { left: -24, right: 24, top: 24, bottom: -24, near: 1, far: 150 }); sun.shadow.normalBias = .05; sun.shadow.bias = -.0002; scene.add(sun, sun.target);
    const forest = buildForest({ low, reducedMotion }); scene.add(forest.root);
    const hero = createForestHero(!low); scene.add(hero.root, hero.shadow, hero.puff, hero.blood, hero.splat, hero.debris);
    const fresh = live.current.fresh;
    let player = restorePlayer(fresh?.current), alive = true, frame = 0, lastTime = 0, elapsed = 0, uiTime = 0, saveTime = 0, frames = 0, slowTime = 0, solidTime = 99;
    if (fresh) fresh.current = false;
    const firstZone = ZONES[0];
    // Start looking along the route toward the first landmark, the climb visible ahead.
    let yaw = Math.atan2(player.x - firstZone.x, player.z - firstZone.z), pitch = .38, distance = CAMERA_PRESETS[1].distance, preset = 1, jumpQueued = false, dragAt = -10;
    hero.heading = yaw + Math.PI;
    let dying: { phase: 'fall' | 'impact'; t: number; safe: Position } | null = null, summitReached = false, orbitTimer = 0;
    let currentZone: CategoryId | null = null, currentMicro: string | null = null, previousRespawns = player.respawns, toastUntil = 0, lastStage = -1, highestStage = stageAt(player.y), lookTimer = 0, lookYaw = 0, lookPitch = .35, bannerUntil = 0;
    const obstacles = [...OBSTACLES, ...forest.obstacles];
    // The route is fixed: the next cap is the one after the last cap the learner stood on.
    const route = PLATFORMS.filter(p => !p.id.startsWith('side'));
    const nextCapOf = (cp: Position) => {
      const here = PLATFORMS.find(p => Math.abs(p.x - cp.x) < .01 && Math.abs(p.z - cp.z) < .01 && Math.abs(p.y - cp.y) < .01);
      if (!here) return route[0];
      const i = route.indexOf(here);
      if (i >= 0) return route[i + 1] ?? null;
      // From a detour, the route resumes at the cap after its station.
      const zoneIndex = Number(here.id.split('-')[1]), station = route.findIndex(p => p.zone === ZONES[zoneIndex]?.id);
      return route[station + 1] ?? null;
    };
    let nextCap = nextCapOf(player.checkpoint);
    const known = new Set<string>(live.current.visited);
    const held = new Set<string>(), joy = { x: 0, y: 0 };
    const look = new THREE.Vector3(player.x, player.y + 1.5, player.z), pvec = new THREE.Vector3();
    let nearSolids: THREE.Object3D[] = forest.solids;
    const clear = () => { held.clear(); joy.x = 0; joy.y = 0; jumpQueued = false; };
    const toast = (message: string) => { setHint(message); toastUntil = elapsed + 5; };
    const interact = () => {
      if (live.current.paused || mapOpenRef.current) return;
      const zone = ZONES.find(z => z.id === currentZone);
      if (!zone && currentMicro) { live.current.onMicroDone?.(currentMicro); toast('¡Bien dicho! Sigue subiendo: el próximo momento te espera más arriba.'); return; }
      if (!zone) { toast('Busca el globo ¿? (parada) o … (momento rápido) para conversar.'); return; }
      if (zone.id === 'final' && !live.current.unlocked) { toast('El mirador se abre al llegar a la cima o tras 10 preguntas en 3 paradas.'); return; }
      clear(); renderer.domElement.focus({ preventScroll: true }); live.current.onZone(zone.id);
    };
    const setPreset = (next: number) => { preset = (next + CAMERA_PRESETS.length) % CAMERA_PRESETS.length; distance = CAMERA_PRESETS[preset].distance; setView(preset); };
    // Q: the camera turns to frame the next station for a moment, then gives the view back.
    const lookAhead = () => { const pending = ZONES.filter(z => !live.current.visited.includes(z.id)), next = pending.find(z => z.y >= player.y - 3) ?? pending[0] ?? ZONES[ZONES.length - 1]; lookYaw = Math.atan2(player.x - next.x, player.z - next.z); lookPitch = next.y - player.y > 4 ? -.05 : .3; lookTimer = 2.4; };
    api.current = { lookAhead, clear, jump: () => { if (!live.current.paused && !mapOpenRef.current) jumpQueued = true; }, interact, view: () => { setPreset(preset + 1); canvas.focus({ preventScroll: true }); }, joy };
    const usable = (event: KeyboardEvent) => { const t = event.target as HTMLElement | null; return !t?.closest('input,textarea,select,a,[contenteditable="true"],[role="dialog"]'); };
    const keydown = (event: KeyboardEvent) => {
      const code = event.code;
      if (!live.current.paused && !mapOpenRef.current && event.target instanceof HTMLElement && event.target.closest('button') && ['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(code)) renderer.domElement.focus({ preventScroll: true });
      if (mapOpenRef.current && code === 'Escape') { event.preventDefault(); setMapOpen(false); clear(); return; }
      if (mapOpenRef.current && code === 'KeyM' && usable(event)) { event.preventDefault(); setMapOpen(false); clear(); return; }
      if ((code === 'Space' && event.target instanceof HTMLElement && event.target.closest('button')) || !usable(event) || live.current.paused || mapOpenRef.current) return;
      if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space', 'ShiftLeft', 'ShiftRight', 'KeyE', 'KeyV', 'KeyM', 'KeyR', 'KeyF', 'KeyQ', 'Equal', 'Minus', 'NumpadAdd', 'NumpadSubtract'].includes(code)) event.preventDefault();
      if (event.repeat) return;
      held.add(code);
      if (code === 'Space') jumpQueued = true;
      if (code === 'KeyE') interact();
      if (code === 'KeyV') setPreset(preset + 1);
      if (code === 'KeyQ') lookAhead();
      if (code === 'KeyM') setMapOpen(v => !v);
      if (code === 'Equal' || code === 'NumpadAdd') distance = Math.max(MIN_DISTANCE, distance / 1.2);
      if (code === 'Minus' || code === 'NumpadSubtract') distance = Math.min(MAX_DISTANCE, distance * 1.2);
    };
    const keyup = (event: KeyboardEvent) => held.delete(event.code);
    // Drag to orbit and tilt, wheel or pinch to zoom.
    const pointers = new Map<number, { x: number; y: number }>();
    let pinch = 0;
    const pointerdown = (event: PointerEvent) => { if (live.current.paused || mapOpenRef.current) return; pointers.set(event.pointerId, { x: event.clientX, y: event.clientY }); renderer.domElement.setPointerCapture?.(event.pointerId); renderer.domElement.focus({ preventScroll: true }); if (pointers.size === 2) { const [a, b] = [...pointers.values()]; pinch = Math.hypot(a.x - b.x, a.y - b.y); } };
    const pointermove = (event: PointerEvent) => {
      const last = pointers.get(event.pointerId); if (!last || live.current.paused) return;
      if (pointers.size === 2) {
        pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
        const [a, b] = [...pointers.values()], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (pinch > 0 && d > 0) distance = THREE.MathUtils.clamp(distance * pinch / d, MIN_DISTANCE, MAX_DISTANCE);
        pinch = d; return;
      }
      yaw -= (event.clientX - last.x) * .0055; pitch = THREE.MathUtils.clamp(pitch + (event.clientY - last.y) * .0042, PITCH_MIN, PITCH_MAX);
      pointers.set(event.pointerId, { x: event.clientX, y: event.clientY }); dragAt = elapsed;
    };
    const pointerend = (event?: PointerEvent) => { if (event) pointers.delete(event.pointerId); else pointers.clear(); pinch = 0; };
    const wheel = (event: WheelEvent) => { if (live.current.paused || mapOpenRef.current) return; event.preventDefault(); distance = THREE.MathUtils.clamp(distance * Math.exp(event.deltaY * .0012), MIN_DISTANCE, MAX_DISTANCE); };
    const blur = () => { clear(); pointerend(); joyPointer.current = null; if (stick.current) stick.current.style.transform = 'translate(0, 0)'; };
    const visibility = () => { if (document.hidden) blur(); };
    const contextLost = (event: Event) => { event.preventDefault(); alive = false; cancelAnimationFrame(frame); live.current.onFail(); };
    window.addEventListener('keydown', keydown); window.addEventListener('keyup', keyup); window.addEventListener('blur', blur); document.addEventListener('visibilitychange', visibility);
    const canvas = renderer.domElement;
    const onUp = (e: Event) => pointerend(e as PointerEvent), onCancel = () => blur();
    canvas.addEventListener('pointerdown', pointerdown); canvas.addEventListener('pointermove', pointermove); canvas.addEventListener('pointerup', onUp); canvas.addEventListener('pointercancel', onCancel); canvas.addEventListener('lostpointercapture', onUp); canvas.addEventListener('wheel', wheel, { passive: false }); canvas.addEventListener('webglcontextlost', contextLost);
    const resize = () => { const w = mount.clientWidth, h = mount.clientHeight; if (!w || !h) return; renderer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix(); };
    const observer = new ResizeObserver(resize); observer.observe(mount); resize();
    const drawMap = (target: HTMLCanvasElement | null, expanded: boolean) => {
      if (!target) return; const c = target.getContext('2d'); if (!c) return;
      const w = target.width, h = target.height, bar = expanded ? 120 : 26, pad = expanded ? 30 : 10, size = Math.min(w - bar - pad, h) - pad * 2, scale = size / 104, cx = pad + size / 2, cy = h / 2;
      const x = (v: number) => cx + v * scale, z = (v: number) => cy + v * scale;
      c.clearRect(0, 0, w, h); c.fillStyle = '#132820'; c.fillRect(0, 0, w, h);
      // Top view: the spiral, coloured by stage, so later turns read as higher.
      c.lineWidth = expanded ? 3 : 1.6; c.lineCap = 'round';
      for (let i = 1; i < route.length; i++) { const a = route[i - 1], b = route[i]; c.strokeStyle = STAGE_COLORS[b.stage]; c.globalAlpha = .35 + .65 * (b.y / TOP); c.beginPath(); c.moveTo(x(a.x), z(a.z)); c.lineTo(x(b.x), z(b.z)); c.stroke(); }
      c.globalAlpha = 1;
      const pendingZones = ZONES.filter(zn => !live.current.visited.includes(zn.id)), next = pendingZones.find(zn => zn.y >= player.y - 3) ?? pendingZones[0];
      for (const zone of ZONES) {
        const visited = live.current.visited.includes(zone.id), final = zone.id === 'final';
        c.beginPath(); c.arc(x(zone.x), z(zone.z), expanded ? (final ? 8 : 6) : (final ? 4 : 3), 0, Math.PI * 2);
        c.fillStyle = visited ? '#f2cd6b' : final ? '#fff3c4' : '#d5e3d2'; c.fill();
        if (zone === next) { c.strokeStyle = '#ffe9a6'; c.lineWidth = 2; c.beginPath(); c.arc(x(zone.x), z(zone.z), expanded ? 11 : 6, 0, Math.PI * 2); c.stroke(); }
        if (expanded) { c.font = '11px system-ui'; c.textAlign = zone.x < 0 ? 'right' : 'left'; c.fillStyle = visited ? '#f5e3b0' : '#c5d4c7'; c.fillText(`${zone.place} · ${Math.round(zone.y)} m`, x(zone.x) + (zone.x < 0 ? -12 : 12), z(zone.z) + 4); }
      }
      c.strokeStyle = '#f9e4a9'; c.lineWidth = 1.5; c.strokeRect(x(player.checkpoint.x) - 3.5, z(player.checkpoint.z) - 3.5, 7, 7);
      c.save(); c.translate(x(player.x), z(player.z)); c.rotate(-hero.heading); c.beginPath(); c.moveTo(0, 7); c.lineTo(-4, -4); c.lineTo(4, -4); c.closePath(); c.fillStyle = '#ffffff'; c.fill(); c.restore();
      // Side view: altitude is the real progress of the climb.
      const bx = w - bar + (expanded ? 14 : 6), bw = expanded ? 14 : 10, top = pad + 4, bottom = h - pad - 4, ay = (v: number) => bottom - (v / TOP) * (bottom - top);
      for (let i = 0; i < STAGES.length; i++) { const from = Math.max(0, STAGES[i].from), to = STAGES[i + 1]?.from ?? TOP; c.fillStyle = STAGE_COLORS[i]; c.globalAlpha = i === stageAt(player.y) ? 1 : .5; c.fillRect(bx, ay(to), bw, ay(from) - ay(to)); if (expanded) { c.globalAlpha = 1; c.font = '10px system-ui'; c.textAlign = 'left'; c.fillStyle = i === stageAt(player.y) ? '#fff5d6' : '#a9bcae'; c.fillText(STAGES[i].name, bx + bw + 6, (ay(from) + ay(to)) / 2 + 3); } }
      c.globalAlpha = 1;
      for (const zone of ZONES) { c.fillStyle = live.current.visited.includes(zone.id) ? '#f2cd6b' : '#20382d'; c.fillRect(bx - 2, ay(zone.y) - 1, bw + 4, 2); }
      c.fillStyle = '#ffffff'; c.beginPath(); c.moveTo(bx - 3, ay(player.y)); c.lineTo(bx - 9, ay(player.y) - 4); c.lineTo(bx - 9, ay(player.y) + 4); c.closePath(); c.fill();
      if (expanded) { c.font = '12px system-ui'; c.fillStyle = '#e8eedf'; c.textAlign = 'center'; c.fillText(`${Math.round(player.y)} m`, bx + bw / 2, h - 8); }
    };
    const save = () => { if (!player.grounded) return; try { localStorage.setItem(POSITION_KEY, JSON.stringify({ version: 2, position: { x: player.x, y: player.y, z: player.z }, checkpoint: player.checkpoint })); } catch { /* Storage is optional in private browsing. */ } };
    camera.position.set(player.x + Math.sin(yaw) * distance, player.y + 4, player.z + Math.cos(yaw) * distance);
    const desired = new THREE.Vector3();
    const tick = (time: number) => {
      if (!alive) return; frame = requestAnimationFrame(tick); const raw = Math.min((time - lastTime) / 1000 || .016, 1), dt = Math.min(raw, .05); lastTime = time; elapsed += dt;
      let speed = 0;
      if (!live.current.paused && !mapOpenRef.current && !document.hidden) {
        const ix = (held.has('KeyD') || held.has('ArrowRight') ? 1 : 0) - (held.has('KeyA') || held.has('ArrowLeft') ? 1 : 0) + joy.x;
        const iz = (held.has('KeyS') || held.has('ArrowDown') ? 1 : 0) - (held.has('KeyW') || held.has('ArrowUp') ? 1 : 0) + joy.y;
        let dx = Math.cos(yaw) * ix + Math.sin(yaw) * iz, dz = -Math.sin(yaw) * ix + Math.cos(yaw) * iz;
        // Air assist: while flying toward the next cap, steering bends gently to its centre.
        if (!player.grounded && nextCap && (dx || dz)) {
          const tx = nextCap.x - player.x, tz = nextCap.z - player.z, d = Math.hypot(tx, tz), m = Math.hypot(dx, dz);
          if (d < nextCap.r + 7 && (dx * tx + dz * tz) / (m * d || 1) > .35) { dx = dx / m * .62 + tx / d * .38; dz = dz / m * .62 + tz / d * .38; const k = Math.hypot(dx, dz) || 1; dx = dx / k * Math.min(1, m); dz = dz / k * Math.min(1, m); }
        }
        // A fixed maximum substep keeps landings stable on slow touch devices.
        let remaining = dt; const beforeX = player.x, beforeZ = player.z, safe = { ...player.checkpoint };
        // A bad fall is staged: the hero keeps falling, hits, says ouch, falls apart, and is rebuilt on the last cap.
        if (dying) { dx = 0; dz = 0; jumpQueued = false; }
        if (!dying || dying.phase === 'fall') while (remaining > 0) { const step = Math.min(remaining, 1 / 90); player = stepPlayer(player, { x: dx, z: dz, jump: jumpQueued, run: held.has('ShiftLeft') || held.has('ShiftRight') || Math.hypot(joy.x, joy.y) > .85, stagedFalls: true }, step, PLATFORMS, obstacles); jumpQueued = false; remaining -= step; if (!dying && player.falling) { dying = { phase: 'fall', t: 0, safe }; } }
        if (dying) {
          dying.t += dt;
          if (dying.phase === 'fall' && (player.grounded || dying.t > 1.3 || player.y < -6)) {
            dying = { phase: 'impact', t: 0, safe: dying.safe };
            breakForestHero(hero, player, reducedMotion); setOuch(o => o + 1);
            try { if ('speechSynthesis' in window) { const u = new SpeechSynthesisUtterance('¡Auch!'); u.lang = 'es-ES'; u.rate = 1.15; u.pitch = 1.4; window.speechSynthesis.cancel(); window.speechSynthesis.speak(u); } } catch { /* Speech is optional. */ }
          } else if (dying.phase === 'impact' && dying.t > 1.8) {
            player = respawnAt({ ...player, checkpoint: dying.safe }); reassembleForestHero(hero); dying = null;
            camera.position.set(player.x + Math.sin(yaw) * distance, player.y + 4, player.z + Math.cos(yaw) * distance);
          }
        }
        speed = Math.hypot(player.x - beforeX, player.z - beforeZ) / dt;
        if (held.has('KeyR')) pitch = Math.max(PITCH_MIN, pitch - dt * 1.4);
        if (held.has('KeyF')) pitch = Math.min(PITCH_MAX, pitch + dt * 1.4);
        // Like La Noche Abierta: the orbit settles behind a hero running away from the camera.
        if (lookTimer > 0) { lookTimer -= dt; const k = 1 - Math.exp(-dt * 4.5); yaw += Math.atan2(Math.sin(lookYaw - yaw), Math.cos(lookYaw - yaw)) * k; pitch += (lookPitch - pitch) * k; dragAt = elapsed; }
        else if (elapsed - dragAt > 1.4 && !reducedMotion) yaw = followYaw(yaw, player.yaw, speed, dt, RUN_SPEED);
        const floor = PLATFORMS.find(p => p.id === player.platform); currentZone = player.grounded ? (floor?.zone ?? null) : null;
        const micro = player.grounded ? (floor?.micro ?? null) : null;
        nextCap = nextCapOf(player.checkpoint);
        // Standing still on the route, the camera turns to show the next jump.
        if (player.grounded && speed < .2 && nextCap && elapsed - dragAt > 2.2 && lookTimer <= 0 && !reducedMotion) {
          const want = Math.atan2(player.x - nextCap.x, player.z - nextCap.z);
          yaw += Math.atan2(Math.sin(want - yaw), Math.cos(want - yaw)) * (1 - Math.exp(-dt * 1.6));
        }
        if (micro !== currentMicro) { currentMicro = micro; live.current.onMicroSpot?.(micro); }
        // Landing establishes a checkpoint; only E or the visible button opens a conversation.
        if (player.respawns > previousRespawns) { previousRespawns = player.respawns; toast('De vuelta al hongo anterior. Consejo: en el aire, pulsa Saltar otra vez para un segundo salto.'); }
        // Reaching the summit: celebration, a slow panoramic orbit and the final conversation unlocked.
        if (!summitReached && player.grounded && player.platform === 'zone-final') {
          summitReached = true; live.current.onSummit?.(); forest.celebrate('final'); setBanner({ index: -1, key: elapsed }); bannerUntil = elapsed + 5; orbitTimer = reducedMotion ? 0 : 6; distance = Math.max(distance, 14);
          toast('¡Llegaste a la cima! Pulsa E para la conversación final.');
        }
        if (orbitTimer > 0) { orbitTimer -= dt; if (speed < .2) { yaw += dt * .55; pitch += (.42 - pitch) * Math.min(1, dt * 2); dragAt = elapsed; } else orbitTimer = 0; }
      }
      animateForestHero(hero, dt, player, speed, reducedMotion, live.current.paused);
      // Completed stations react: lantern, halo and a burst of spores.
      for (const zone of live.current.visited) if (!known.has(zone)) { known.add(zone); forest.celebrate(zone); }
      // Never smooth the look target through a landing surface or a recovery jump.
      const orbit = orbitFor(pitch);
      look.set(player.x, player.y + 1.5 + orbit.lift, player.z);
      scene.updateMatrixWorld(false);
      solidTime += dt;
      if (solidTime > .3) { solidTime = 0; const reach = distance + 8; nearSolids = forest.solids.filter(o => { const s = o as THREE.Mesh; if (!s.geometry.boundingSphere) s.geometry.computeBoundingSphere(); const c = s.geometry.boundingSphere!; const wx = o.position.x + c.center.x, wy = o.position.y + c.center.y, wz = o.position.z + c.center.z; return Math.hypot(wx - player.x, wy - player.y, wz - player.z) < reach + c.radius * Math.max(o.scale.x, o.scale.y, o.scale.z); }); }
      const head = desired.set(player.x, player.y + 1.5, player.z);
      const solved = solveForestCamera(head, yaw, orbit.elevation, distance, nearSolids);
      const candidate = camera.position.clone().lerp(solved, reducedMotion ? 1 : 1 - Math.exp(-dt * 10));
      const safe = cameraClearDistance(head, candidate, nearSolids);
      if (safe < candidate.distanceTo(head) - .01 || candidate.y < head.y - .2 || candidate.distanceTo(head) > distance + 2.5) camera.position.copy(solved);
      else camera.position.copy(candidate);
      if (camera.position.y < .35 && Math.hypot(camera.position.x, camera.position.z) < 66) camera.position.y = .35;
      camera.lookAt(look);
      forest.setView(camera.position, head, true);
      // The air changes with altitude.
      atmosphereAt(Math.max(player.y, camera.position.y - 2), air);
      (scene.fog as THREE.FogExp2).color.copy(air.fog); (scene.fog as THREE.FogExp2).density = air.density;
      skyUniforms.top.value.copy(air.top); skyUniforms.horizon.value.copy(air.horizon); (scene.background as THREE.Color).copy(air.horizon);
      hemi.intensity = air.hemi; sun.intensity = air.sun; sky.position.copy(camera.position);
      pvec.set(player.x, player.y, player.z);
      // Guide forward: the first pending station at or above the learner, else the lowest pending one.
      const pending = ZONES.filter(z => !live.current.visited.includes(z.id));
      const nextZone = pending.find(z => z.y >= player.y - 3) ?? pending[0] ?? null;
      forest.update(reducedMotion ? 0 : elapsed, pvec, { visited: live.current.visited, next: nextZone?.id ?? null, unlocked: live.current.unlocked, micro: live.current.micro ?? [], nextCap: nextCap?.id ?? null });
      sun.position.set(player.x - 30, player.y + 62, player.z + 26); sun.target.position.set(player.x, player.y, player.z);
      renderer.render(scene, camera);
      // HUD, saving and the frame-rate monitor run on wall-clock time, so a slow device still sees current guidance.
      uiTime += raw; saveTime += raw; frames++; slowTime += raw;
      if (uiTime > .2) {
        uiTime = 0; drawMap(mapCanvas.current, false); if (mapOpenRef.current) drawMap(largeMap.current, true);
        setActiveZone(currentZone);
        const refuge = ZONES.find(z => z.id === currentZone), stageIndex = stageAt(player.y);
        setPlace(refuge ? refuge.place : STAGES[stageIndex].name);
        setStage({ name: STAGES[stageIndex].name, index: stageIndex, altitude: Math.round(player.y) });
        const next = nextZone ?? ZONES[ZONES.length - 1];
        setDestination({ name: next.place, short: next.short, distance: Math.round(Math.hypot(next.x - player.x, next.z - player.z)), rise: Math.round(next.y - player.y), bearing: destinationBearing(next.x - player.x, next.z - player.z, yaw) });
        if (stageIndex !== lastStage && player.grounded) { if (lastStage >= 0 && stageIndex > lastStage && elapsed > toastUntil) toast(STAGE_HINTS[stageIndex]); lastStage = stageIndex; }
        // A new chapter of the climb: a title card the first time each stage is reached.
        if (stageIndex > highestStage && player.grounded) { highestStage = stageIndex; if (!summitReached) { setBanner({ index: stageIndex, key: elapsed }); bannerUntil = elapsed + 3.6; } }
        if (bannerUntil && elapsed > bannerUntil) { bannerUntil = 0; setBanner(null); }
        if (elapsed > toastUntil) setHint(currentZone ? 'Punto de regreso guardado. Pulsa E para conversar.' : currentMicro ? 'Momento rápido: responde en voz alta y pulsa E.' : STAGE_HINTS[stageIndex]);
        live.current.onPosition?.({ x: player.x, y: player.y, z: player.z });
      }
      if (saveTime > 2) { saveTime = 0; save(); }
      if (slowTime > 4) { if (frames / slowTime < 35 && ratio > .85) { ratio = Math.max(.85, ratio - .2); renderer.setPixelRatio(ratio); resize(); } frames = 0; slowTime = 0; }
    };
    frame = requestAnimationFrame(tick);
    return () => { alive = false; save(); cancelAnimationFrame(frame); clear(); api.current = null; observer.disconnect(); window.removeEventListener('keydown', keydown); window.removeEventListener('keyup', keyup); window.removeEventListener('blur', blur); document.removeEventListener('visibilitychange', visibility); canvas.removeEventListener('pointerdown', pointerdown); canvas.removeEventListener('pointermove', pointermove); canvas.removeEventListener('pointerup', onUp); canvas.removeEventListener('pointercancel', onCancel); canvas.removeEventListener('lostpointercapture', onUp); canvas.removeEventListener('wheel', wheel); canvas.removeEventListener('webglcontextlost', contextLost); forest.dispose(); hero.dispose(); sky.geometry.dispose(); skyMaterial.dispose(); sun.shadow.map?.dispose(); renderer.dispose(); canvas.remove(); };
  }, []);

  const updateJoy = (event: ReactPointerEvent<HTMLDivElement>) => { if (joyPointer.current !== event.pointerId || props.paused || mapOpen) return; const rect = event.currentTarget.getBoundingClientRect(); const x = (event.clientX - rect.left - rect.width / 2) / (rect.width * .33), y = (event.clientY - rect.top - rect.height / 2) / (rect.height * .33), length = Math.max(1, Math.hypot(x, y)); if (api.current) { api.current.joy.x = x / length; api.current.joy.y = y / length; } if (stick.current) stick.current.style.transform = `translate(${x / length * 30}px, ${y / length * 30}px)`; };
  const endJoy = () => { joyPointer.current = null; if (api.current) { api.current.joy.x = 0; api.current.joy.y = 0; } if (stick.current) stick.current.style.transform = 'translate(0, 0)'; };
  const pendingRefuge = activeZone && !props.visited.includes(activeZone);
  const done = props.visited.filter(z => ZONES.some(zone => zone.id === z)).length, microDone = (props.micro ?? []).filter(id => MICRO_SPOTS.some(m => m.id === id)).length;
  return <div className={`bfg-world${props.paused || mapOpen ? ' bfg-world-paused' : ''}`} style={{ '--stage': STAGE_COLORS[stage.index] } as React.CSSProperties}>
    <div className="bfg-world-canvas" ref={host} />
    <div className="bfg-world-vignette" />
    <div className="bfg-world-location"><span>{place} · <b>{stage.altitude} m</b></span><strong>{!pendingRefuge && <span className="bfg-world-bearing" aria-hidden="true" style={{ transform: `rotate(${destination.bearing}rad)` }}>↑</span>}{pendingRefuge ? 'Parada de conversación' : `Destino: ${destination.name}`}</strong><small>{pendingRefuge ? ZONES.find(z => z.id === activeZone)?.place : `${destination.short} · ${destination.distance} m${destination.rise > 1 ? ` · ↑ ${destination.rise} m más arriba` : ''}`}</small></div>
    <div className="bfg-world-climb" aria-label={`Ascenso: ${stage.name}, ${stage.altitude} metros, ${done} de ${ZONES.length} paradas, ${microDone} de ${MICRO_SPOTS.length} momentos`}><span style={{ height: `${Math.min(100, stage.altitude / TOP * 100)}%` }} />{ZONES.map(z => <i key={z.id} className={props.visited.includes(z.id) ? 'done' : z.y > stage.altitude + 1 ? '' : 'passed'} style={{ bottom: `${z.y / TOP * 100}%` }} />)}<small>{done}/{ZONES.length} paradas<br />{microDone}/{MICRO_SPOTS.length} momentos</small></div>
    {banner && (banner.index < 0
      ? <div className="bfg-world-banner bfg-world-banner-summit" key={banner.key} role="status"><span>56 METROS · LA CIMA</span><strong>¡Llegaste a la cima!</strong><small>Mira todo el camino. Pulsa E: la conversación final te espera.</small></div>
      : <div className="bfg-world-banner" key={banner.key} role="status"><span>ETAPA {banner.index + 1} DE {STAGES.length}</span><strong>{STAGES[banner.index].name}</strong><small>{STAGE_INTROS[banner.index]}</small></div>)}
    {ouch > 0 && <div className="bfg-world-ouch" key={ouch} aria-live="assertive">¡Auch!</div>}
    <div className="bfg-world-tools"><button onClick={() => setMapOpen(v => !v)} aria-label="Abrir mapa del bosque" aria-expanded={mapOpen}>Mapa <kbd>M</kbd></button><button onClick={() => api.current?.lookAhead()} aria-label="Mirar hacia el destino">Ver destino <kbd>Q</kbd></button><button onClick={() => api.current?.view()} aria-label="Cambiar distancia de cámara" aria-pressed={view !== 1}>Cámara · {CAMERA_PRESETS[view].label} <kbd>V</kbd></button></div>
    <button className="bfg-world-minimap" onClick={() => setMapOpen(true)} aria-label="Ampliar mapa: paradas, altura y posición"><canvas width={190} height={160} ref={mapCanvas} /><span>▲ Tú · ● Paradas · ▮ Altura</span></button>
    <div className="bfg-world-interaction">
      {activeZone && <button className="bfg-world-converse" disabled={props.paused || mapOpen || (activeZone === 'final' && !props.unlocked)} onClick={() => api.current?.interact()}><kbd>E</kbd><span>{activeZone === 'final' && !props.unlocked ? 'Mirador cerrado' : props.visited.includes(activeZone) ? 'Volver a conversar' : 'Conversar'}</span></button>}
      <p className="bfg-world-hint" role="status">{activeZone === 'final' && !props.unlocked ? 'Sube hasta la cima (o habla sobre 10 preguntas en 3 paradas) para abrir el mirador.' : hint}</p>
    </div>
    {mapOpen && <div className="bfg-world-map" ref={mapPanel} tabIndex={-1} role="dialog" aria-modal="true" aria-label="Mapa del bosque"><div className="bfg-world-map-heading"><div><span>TU ASCENSO</span><strong>Del suelo del bosque a las nubes</strong></div><button onClick={() => setMapOpen(false)} aria-label="Cerrar mapa">✕</button></div><canvas ref={largeMap} width={640} height={520} /><p>▲ Tú · □ Regreso · ● Pendiente · <span>●</span> Conversada · ◯ Siguiente</p><small>Vista desde arriba: las vueltas interiores están más altas. La barra muestra tu altura real.</small></div>}
    <div className="bfg-world-touch" aria-label="Controles táctiles"><div className="bfg-world-joystick" role="group" aria-label="Control táctil de movimiento" onPointerDown={e => { if (props.paused || mapOpen) return; joyPointer.current = e.pointerId; e.currentTarget.setPointerCapture(e.pointerId); updateJoy(e); }} onPointerMove={updateJoy} onPointerUp={endJoy} onPointerCancel={endJoy} onLostPointerCapture={endJoy}><span ref={stick} /></div><div className="bfg-world-touch-actions"><button disabled={props.paused || mapOpen} onPointerDown={e => { e.preventDefault(); api.current?.jump(); }} aria-label="Saltar">↑<small>Saltar</small></button></div></div>
  </div>;
}
