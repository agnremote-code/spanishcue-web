'use client';

import * as THREE from 'three';
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import { canUseKeys, followYaw, inputFrom, keyAction } from '../noche-abierta/world3d.mjs';
import type { GameState } from './engine.mjs';
import { buildWorld } from './world';
import { createPrince } from './characters';
import { nearestInReach, safeCheckpoint, stepRealmPlayer, type Position } from './movement.mjs';

export type WorldProps = {
  state: GameState;
  paused: boolean;
  intro: boolean;
  spell: string;
  onInteract: (npc: string) => void;
  onCollect: (item: string) => void;
  onCast: (target?: string) => void;
  onCheckpoint: (position: Position) => void;
  onIntroEnd: () => void;
  onEndingEnd?: () => void;
  onPosition?: (position: Position) => void;
  onSelectSpell?: (spell: string) => void;
  onDamage?: () => void;
};

const SPELLS = ['lumaria', 'ventaria', 'floralis', 'aurora'];
const SPELL_COLOR: Record<string, string> = { lumaria: '#ffe99c', ventaria: '#b5eeff', floralis: '#ff9cc7', aurora: '#bcb0ff' };
const NPC_NAMES: Record<string, string> = { nox: 'Nox, el cuervo', ines: 'Inés, la posadera', bruno: 'Bruno, el herrero', liora: 'Liora, el hada', aldren: 'Aldren, el guardián', celina: 'Celina, la jardinera', baltasar: 'Baltasar, el bibliotecario', teobaldo: 'Teobaldo, el mayordomo', brum: 'Brum, el dragón', tejedora: 'La Tejedora de Espinas', elara: 'La princesa Elara' };
const ITEM_NAMES: Record<string, string> = { key: 'Llave antigua', rose: 'Rosa encantada', scroll: 'Pergamino real', crystal: 'Cristal del dragón', amulet: 'Amuleto mágico' };
const SPELL_TARGETS: Record<string, Position> = {
  mill: { x: 24, y: 0, z: 7 }, grove: { x: -10, y: 0, z: -7 }, thorns: { x: 0, y: 0, z: -49 }, dragon: { x: -10, y: 8, z: -111 }, altar: { x: 10, y: 8, z: -126 },
};
const TARGET_NAMES: Record<string, string> = { mill: 'Molino detenido', grove: 'Claro de las luciérnagas', thorns: 'Espinas del jardín', dragon: 'Dragón guardián', altar: 'Altar de la rosa' };
const TARGET_SPELL: Record<string, string> = { mill: 'ventaria', grove: 'lumaria', thorns: 'floralis', dragon: 'aurora' };
const ACTION_KEYS = new Set(['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ShiftLeft', 'ShiftRight', 'Space', 'KeyE', 'KeyF', 'KeyR', 'Digit1', 'Digit2', 'Digit3', 'Digit4']);
const positionOf = (p: Position): Position => ({ x: p.x, y: p.y, z: p.z });
const smooth = (n: number) => n * n * (3 - 2 * n);

type Prompt = { kind: 'npc' | 'item' | 'spell'; id: string; name: string; key: string };
type Api = { joy: { x: number; y: number }; held: Set<string>; clear: () => void; action: (type: 'npc' | 'item' | 'spell' | 'nearest') => void; jump: () => void; skip: () => void };

export default function World3D(props: WorldProps) {
  const live = useRef(props);
  useEffect(() => { live.current = props; });
  const container = useRef<HTMLDivElement>(null);
  const mount = useRef<HTMLDivElement>(null);
  const knob = useRef<HTMLSpanElement>(null);
  const joystickPointer = useRef<number | null>(null);
  const api = useRef<Api | null>(null);
  const [failed, setFailed] = useState(false);
  const [prompt, setPrompt] = useState<Prompt | null>(null);
  const [cinematic, setCinematic] = useState<'intro' | 'dragon' | 'ending' | null>(null);
  const [notice, setNotice] = useState('');

  useEffect(() => {
    if (props.paused) {
      api.current?.clear();
      joystickPointer.current = null;
      if (knob.current) knob.current.style.transform = 'translate(0, 0)';
    }
  }, [props.paused]);

  useEffect(() => {
    const host = mount.current;
    if (!host) return;
    const low = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 760;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let renderer: THREE.WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: !low, powerPreference: 'high-performance', alpha: false }); }
    catch { const fail = window.setTimeout(() => setFailed(true), 0); return () => window.clearTimeout(fail); }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, low ? 1.2 : 1.7));
    renderer.setClearColor('#97aab7');
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;
    renderer.shadowMap.enabled = !low;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.domElement.tabIndex = 0;
    renderer.domElement.setAttribute('aria-label', 'Valdoria en 3D. WASD para caminar; arrastra para mirar; E para hablar.');
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#98aab9');
    scene.fog = new THREE.FogExp2('#a4b7bf', .0075);
    const camera = new THREE.PerspectiveCamera(56, 1, .12, 420);
    let world: ReturnType<typeof buildWorld>;
    let prince: ReturnType<typeof createPrince>;
    try { world = buildWorld(scene); prince = createPrince(); }
    catch {
      renderer.dispose(); renderer.forceContextLoss(); renderer.domElement.remove();
      const fail = window.setTimeout(() => setFailed(true), 0);
      return () => window.clearTimeout(fail);
    }
    scene.add(prince.root);
    const ambient = new THREE.HemisphereLight('#d6eafa', '#4a5f4a', 2.25);
    scene.add(ambient);
    const sun = new THREE.DirectionalLight('#ffe3af', 3.25);
    sun.position.set(-32, 65, -55);
    sun.castShadow = !low;
    sun.shadow.mapSize.set(2048, 2048);
    Object.assign(sun.shadow.camera, { left: -25, right: 25, top: 25, bottom: -25, near: 1, far: 180 });
    sun.shadow.bias = -.00035;
    sun.shadow.normalBias = .03;
    scene.add(sun, sun.target);
    const fill = new THREE.DirectionalLight('#b4d7ff', .6);
    fill.position.set(20, 18, 25);
    scene.add(fill);
    const skyMaterial = new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false,
      uniforms: { dawn: { value: 0 } },
      vertexShader: 'varying vec3 vDir; void main(){vDir=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
      fragmentShader: 'varying vec3 vDir; uniform float dawn; void main(){float h=clamp(vDir.y,0.,1.); vec3 top=mix(vec3(.16,.28,.42),vec3(.26,.49,.68),dawn); vec3 horizon=mix(vec3(.69,.69,.70),vec3(.95,.77,.56),dawn); vec3 c=mix(horizon,top,pow(h,.45)); float glow=pow(max(dot(normalize(vDir),normalize(vec3(-.4,.18,-.8))),0.),22.); c+=vec3(.37,.26,.1)*glow; gl_FragColor=vec4(c,1.);}',
    });
    const sky = new THREE.Mesh(new THREE.SphereGeometry(310, 24, 16), skyMaterial);
    scene.add(sky);

    // One shared particle buffer follows the player; no per-frame allocations.
    const dustCount = low ? 90 : 200;
    const dustPositions = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i++) dustPositions.set([(Math.random() - .5) * 36, Math.random() * 10, (Math.random() - .5) * 36], i * 3);
    const dustGeometry = new THREE.BufferGeometry();
    dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    const dustMaterial = new THREE.PointsMaterial({ size: .06, color: '#ffedb5', transparent: true, opacity: .48, depthWrite: false, blending: THREE.AdditiveBlending });
    const dust = new THREE.Points(dustGeometry, dustMaterial);
    scene.add(dust);

    const spellGroup = new THREE.Group();
    const burstCount = low ? 65 : 150;
    const burstPositions = new Float32Array(burstCount * 3);
    const burstGeometry = new THREE.BufferGeometry();
    burstGeometry.setAttribute('position', new THREE.BufferAttribute(burstPositions, 3));
    const burstMaterial = new THREE.PointsMaterial({ size: .13, color: '#ffe99c', transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
    const burst = new THREE.Points(burstGeometry, burstMaterial);
    burst.frustumCulled = false;
    const ringMaterial = new THREE.MeshBasicMaterial({ color: '#ffe99c', transparent: true, opacity: .7, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending });
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1, .025, 6, 64), ringMaterial);
    ring.rotation.x = Math.PI / 2;
    const shield = new THREE.Mesh(new THREE.SphereGeometry(1.4, 22, 16), new THREE.MeshBasicMaterial({ color: '#aba8ff', transparent: true, opacity: .13, side: THREE.DoubleSide, depthWrite: false, wireframe: true, blending: THREE.AdditiveBlending }));
    const magicLight = new THREE.PointLight('#ffeaa5', 0, 14, 1.5);
    spellGroup.add(burst, ring, magicLight);
    scene.add(spellGroup, shield);
    const lamp = new THREE.PointLight('#ffe4a1', 0, 15, 1.2);
    scene.add(lamp);

    let player = safeCheckpoint(live.current.state.checkpoint, world.floorAt, world.colliders, live.current.state.flags);
    let lastCheckpoint = positionOf(player);
    let observedCheckpoint = `${player.x}:${player.y}:${player.z}`;
    const held = new Set<string>();
    const joy = { x: 0, y: 0 };
    let yaw = Math.PI, pitch = .3, zoom = low ? 5.8 : 7.2;
    let frame = 0, previous = 0, clock = 0, disposed = false, contextFailed = false;
    let drag: { id: number; x: number; y: number } | null = null;
    let lastDrag = -10, castAt = -10, castSpell = '', lampUntil = 0, messageUntil = 0;
    let lastPosition = -1, lastSave = 0, promptId = '', nearestNpc: string | null = null, nearestItem: string | null = null, nearestSpell: string | null = null;
    let jumpUntil = 0, damageAt = -10, dragonSeen = false, victorySeen = Boolean(live.current.state.flags.victory), wasIntro = false;
    let shot: { kind: 'intro' | 'dragon' | 'ending'; start: number; duration: number } | null = null;
    let introDelivered = false;
    const look = new THREE.Vector3(player.x, player.y + 1.3, player.z);
    const targetLook = new THREE.Vector3();
    const desiredCamera = new THREE.Vector3();
    const direction = new THREE.Vector3();
    const targetPoint = new THREE.Vector3();
    const ray = new THREE.Raycaster();
    const avatarPosition = new THREE.Vector3();
    const castOrigin = new THREE.Vector3();
    const cameraNow = new THREE.Vector3();
    camera.position.set(player.x + 1, player.y + 3.4, player.z + zoom);

    function announce(message: string) { setNotice(message); messageUntil = clock + 4.2; }
    function clear() { held.clear(); joy.x = 0; joy.y = 0; drag = null; jumpUntil = 0; }
    function beginShot(kind: 'intro' | 'dragon' | 'ending', duration: number) { clear(); shot = { kind, start: clock, duration: reduced ? Math.min(2, duration) : duration }; setCinematic(kind); }
    function endShot() {
      const kind = shot?.kind;
      shot = null;
      setCinematic(null);
      if (kind === 'intro' && !introDelivered) { introDelivered = true; live.current.onIntroEnd(); }
      if (kind === 'ending') live.current.onEndingEnd?.();
    }
    function cast() {
      const p = live.current;
      if (clock - castAt < .75) return;
      if (!p.state.spells.includes(p.spell)) { announce('Aprende este hechizo conversando con los habitantes del reino.'); return; }
      castAt = clock;
      castSpell = p.spell;
      castOrigin.set(player.x, player.y + 1.2, player.z);
      const target = nearestSpell ? SPELL_TARGETS[nearestSpell] : null;
      targetPoint.set(target?.x ?? player.x + Math.sin(player.heading) * 4, (target?.y ?? player.y) + 1.1, target?.z ?? player.z + Math.cos(player.heading) * 4);
      const color = SPELL_COLOR[p.spell] ?? '#ffe99c';
      burstMaterial.color.set(color); ringMaterial.color.set(color); magicLight.color.set(color);
      if (p.spell === 'lumaria') lampUntil = clock + 24;
      p.onCast(nearestSpell ?? undefined);
      if (nearestSpell) announce(`${p.spell[0].toUpperCase() + p.spell.slice(1)} · ${TARGET_NAMES[nearestSpell]}`);
    }
    function action(type: 'npc' | 'item' | 'spell' | 'nearest') {
      if (live.current.paused || shot || live.current.intro) return;
      if (type === 'spell') { cast(); return; }
      if ((type === 'item' || type === 'nearest') && nearestItem) {
        live.current.onCollect(nearestItem);
        return;
      }
      if ((type === 'npc' || type === 'nearest') && nearestNpc) {
        player.heading = Math.atan2(world.npcPositions[nearestNpc].x - player.x, world.npcPositions[nearestNpc].z - player.z);
        clear();
        live.current.onInteract(nearestNpc);
        return;
      }
      if (type === 'nearest' && nearestSpell) cast();
    }
    api.current = { held, joy, clear, action, jump: () => { if (!live.current.paused && !shot) jumpUntil = clock + .1; }, skip: endShot };

    const keydown = (event: KeyboardEvent) => {
      if (!canUseKeys(event.target) || !ACTION_KEYS.has(event.code) || live.current.paused) return;
      // Keys on a dialog's buttons must keep their normal browser behavior.
      if (event.target instanceof HTMLElement && event.target.closest('[role="dialog"]')) return;
      event.preventDefault();
      if (shot || live.current.intro) { if (!event.repeat && event.code === 'Space') endShot(); return; }
      const actionKey = keyAction(event.code);
      if (actionKey) held.add(actionKey);
      if (event.repeat) return;
      if (event.code === 'KeyE') action('npc');
      if (event.code === 'KeyF') action('item');
      if (event.code === 'KeyR') action('spell');
      if (/^Digit[1-4]$/.test(event.code)) live.current.onSelectSpell?.(SPELLS[Number(event.code.slice(-1)) - 1]);
    };
    const keyup = (event: KeyboardEvent) => { const actionKey = keyAction(event.code); if (actionKey) held.delete(actionKey); };
    const down = (event: PointerEvent) => {
      if (live.current.paused || shot) return;
      renderer.domElement.focus({ preventScroll: true });
      drag = { id: event.pointerId, x: event.clientX, y: event.clientY };
      renderer.domElement.setPointerCapture(event.pointerId);
    };
    const move = (event: PointerEvent) => {
      if (!drag || drag.id !== event.pointerId || live.current.paused || shot) return;
      yaw -= (event.clientX - drag.x) * .005;
      pitch = THREE.MathUtils.clamp(pitch + (event.clientY - drag.y) * .004, -.08, 1.02);
      drag.x = event.clientX; drag.y = event.clientY; lastDrag = clock;
    };
    const up = () => { drag = null; };
    const wheel = (event: WheelEvent) => { if (live.current.paused || shot) return; event.preventDefault(); zoom = THREE.MathUtils.clamp(zoom + event.deltaY * .008, 3.2, 10.5); };
    const preventMenu = (event: Event) => event.preventDefault();
    const hidden = () => { if (document.hidden) { clear(); previous = 0; } };
    const contextLost = (event: Event) => { event.preventDefault(); contextFailed = true; clear(); setFailed(true); };
    const canvas = renderer.domElement;
    canvas.addEventListener('pointerdown', down);
    canvas.addEventListener('pointermove', move);
    canvas.addEventListener('pointerup', up);
    canvas.addEventListener('pointercancel', up);
    canvas.addEventListener('wheel', wheel, { passive: false });
    canvas.addEventListener('contextmenu', preventMenu);
    canvas.addEventListener('webglcontextlost', contextLost);
    window.addEventListener('keydown', keydown);
    window.addEventListener('keyup', keyup);
    window.addEventListener('blur', clear);
    document.addEventListener('visibilitychange', hidden);
    const resize = () => { const w = host.clientWidth || 1, h = host.clientHeight || 1; renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); };
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    resize();

    const render = (now: number) => {
      if (disposed) return;
      frame = window.requestAnimationFrame(render);
      if (document.hidden || contextFailed) { previous = now; return; }
      const dt = previous ? Math.min((now - previous) / 1000, .05) : 1 / 60;
      previous = now;
      clock += dt;
      const p = live.current;
      if (p.intro && !wasIntro) {
        player = safeCheckpoint(p.state.checkpoint, world.floorAt, world.colliders, p.state.flags);
        introDelivered = false; dragonSeen = false; yaw = Math.PI; pitch = .3;
        beginShot('intro', 8.5);
      }
      wasIntro = p.intro;
      if (!p.intro && shot?.kind === 'intro') endShot();
      if (p.state.flags.victory && !victorySeen) { victorySeen = true; beginShot('ending', 9); }
      if (!p.state.flags.victory) victorySeen = false;
      // An explicit reset/new save from the parent replaces the local position.
      const cpKey = `${p.state.checkpoint.x}:${p.state.checkpoint.y}:${p.state.checkpoint.z}`;
      if (cpKey !== observedCheckpoint) {
        observedCheckpoint = cpKey;
        const cp = p.state.checkpoint;
        if (Math.hypot(cp.x - lastCheckpoint.x, cp.z - lastCheckpoint.z) > 2 || Math.abs(cp.y - lastCheckpoint.y) > .6) {
          player = safeCheckpoint(cp, world.floorAt, world.colliders, p.state.flags);
          lastCheckpoint = positionOf(player);
        }
      }
      const canMove = !p.paused && !shot && !p.intro;
      if (canMove) {
        const keys = inputFrom(held);
        player = stepRealmPlayer(player, { x: keys.x + joy.x, y: keys.y - joy.y, sprint: keys.sprint || Math.hypot(joy.x, joy.y) > .88, jump: keys.jump || clock < jumpUntil, yaw }, dt, world.colliders, world.floorAt, p.state.flags);
        if (!drag && clock - lastDrag > 1.8 && !reduced) yaw = followYaw(yaw, player.heading, player.speed, dt * .45);
      } else { player.speed = 0; player.moving = false; }
      avatarPosition.set(player.x, player.y, player.z);
      prince.root.position.copy(avatarPosition);
      prince.root.rotation.y = player.heading;
      prince.update(dt, player.speed, clock, clock - castAt < 1);
      if (player.vy > 0) prince.root.rotation.x = -.06;
      else prince.root.rotation.x *= .85;
      world.update(dt, clock, { flags: p.state.flags, inventory: p.state.inventory }, avatarPosition);
      sun.position.set(player.x - 32, player.y + 65, player.z - 55);
      sun.target.position.copy(avatarPosition);
      dust.position.set(player.x, player.y, player.z);
      dust.rotation.y = reduced ? 0 : Math.sin(clock * .05) * .18;
      sky.position.copy(camera.position);
      skyMaterial.uniforms.dawn.value = THREE.MathUtils.damp(skyMaterial.uniforms.dawn.value, p.state.flags.victory ? 1 : 0, .4, dt);
      lamp.position.set(player.x, player.y + 2, player.z);
      lamp.intensity = THREE.MathUtils.damp(lamp.intensity, clock < lampUntil ? 4.4 : 0, 4, dt);

      if (canMove && !dragonSeen && player.y > 5 && Math.hypot(player.x + 10, player.z + 111) < 20 && !p.state.flags.dragonTrusted) {
        dragonSeen = true; beginShot('dragon', 4.5);
      }
      if (canMove && player.y > 6 && Math.hypot(player.x + 10, player.z + 111) < 6 && !p.state.flags.dragonShield && !p.state.flags.dragonTrusted && clock - damageAt > 7) {
        damageAt = clock;
        player = safeCheckpoint({ x: 11.5, y: 8, z: -105 }, world.floorAt, world.colliders, p.state.flags);
        announce('Brum protege la torre. Usa Aurora para acercarte sin peligro.');
        p.onDamage?.();
      }

      const availableItems: Record<string, Position> = {};
      for (const [id, pos] of Object.entries(world.itemPositions)) {
        if (p.state.inventory.includes(id) || (id === 'key' && !p.state.flags.millRepaired) || (id === 'crystal' && !p.state.flags.dragonTrusted)) continue;
        availableItems[id] = pos;
      }
      nearestNpc = nearestInReach(player, world.npcPositions, 3.9);
      nearestItem = nearestInReach(player, availableItems, 2.7);
      nearestSpell = nearestInReach(player, SPELL_TARGETS, 8);
      const nextPrompt: Prompt | null = nearestItem ? { kind: 'item', id: nearestItem, name: ITEM_NAMES[nearestItem] ?? nearestItem, key: 'F' }
        : nearestNpc ? { kind: 'npc', id: nearestNpc, name: NPC_NAMES[nearestNpc] ?? nearestNpc, key: 'E' }
        : nearestSpell ? { kind: 'spell', id: nearestSpell, name: `${TARGET_NAMES[nearestSpell]}${TARGET_SPELL[nearestSpell] ? ` · ${TARGET_SPELL[nearestSpell]}` : ''}`, key: 'R' } : null;
      const nextId = canMove && nextPrompt ? `${nextPrompt.kind}:${nextPrompt.id}` : '';
      if (nextId !== promptId) { promptId = nextId; setPrompt(nextId ? nextPrompt : null); }
      if (messageUntil > 0 && clock > messageUntil) { setNotice(''); messageUntil = 0; }
      if (clock - lastPosition > .2) { lastPosition = clock; p.onPosition?.(positionOf(player)); }
      if (canMove && clock - lastSave > 5 && Math.abs(player.y - world.floorAt(player.x, player.z)) < .04) {
        lastSave = clock; lastCheckpoint = positionOf(player); observedCheckpoint = `${player.x}:${player.y}:${player.z}`; p.onCheckpoint(lastCheckpoint);
      }

      const age = clock - castAt;
      spellGroup.visible = age < 2.4;
      shield.visible = (castSpell === 'aurora' && age < 3.5) || Boolean(p.state.flags.dragonShield && !p.state.flags.dragonTrusted && player.z < -100);
      shield.position.set(player.x, player.y + 1.05, player.z);
      shield.rotation.y = clock * .3;
      shield.scale.setScalar(1 + Math.sin(clock * 3) * .035);
      if (spellGroup.visible) {
        const progress = Math.min(1, age / .65);
        spellGroup.position.copy(castOrigin).lerp(targetPoint, smooth(progress));
        for (let i = 0; i < burstCount; i++) {
          const a = i * 2.39996 + age * (castSpell === 'ventaria' ? 5 : 1.5);
          const radius = (.2 + (i % 13) / 13) * (1 + age * 1.8);
          const vertical = Math.sin(i * 9.13) * radius;
          burstPositions[i * 3] = Math.cos(a) * radius;
          burstPositions[i * 3 + 1] = castSpell === 'floralis' ? Math.abs(vertical) * age : vertical;
          burstPositions[i * 3 + 2] = Math.sin(a) * radius;
        }
        burstGeometry.attributes.position.needsUpdate = true;
        burstMaterial.opacity = Math.max(0, 1 - age / 2.4);
        ring.scale.setScalar(.4 + age * 2.3);
        ringMaterial.opacity = Math.max(0, .8 - age / 2.2);
        magicLight.intensity = Math.max(0, 6 * (1 - age / 2.4));
      }

      targetLook.set(player.x, player.y + 1.35, player.z);
      if (shot) {
        const t = Math.min(1, (clock - shot.start) / shot.duration);
        const u = smooth(t);
        if (shot.kind === 'intro') {
          desiredCamera.set(THREE.MathUtils.lerp(32, player.x + 1.4, u), THREE.MathUtils.lerp(31, player.y + 3.5, u), THREE.MathUtils.lerp(-38, player.z + 7, u));
          targetLook.set(THREE.MathUtils.lerp(0, player.x, u), THREE.MathUtils.lerp(12, player.y + 1.35, u), THREE.MathUtils.lerp(-78, player.z - 2, u));
        } else if (shot.kind === 'dragon') {
          desiredCamera.set(-10 + Math.sin(t * 1.8 + .5) * 13, 13 + Math.sin(t * Math.PI) * 2, -111 + Math.cos(t * 1.8 + .5) * 13);
          targetLook.set(-10, 12, -111);
        } else {
          desiredCamera.set(THREE.MathUtils.lerp(7, 34, u), THREE.MathUtils.lerp(12, 38, u), THREE.MathUtils.lerp(-118, -76, u));
          targetLook.set(10 - u * 10, 11 + u * 3, -126 + u * 35);
        }
        if (t >= 1) endShot();
      } else {
        const indoor = player.z < -65 && player.z > -102;
        const distance = Math.min(zoom, indoor ? 5.4 : 10.5);
        desiredCamera.set(player.x - Math.sin(yaw) * Math.cos(pitch) * distance, player.y + 1.4 + Math.sin(pitch) * distance, player.z - Math.cos(yaw) * Math.cos(pitch) * distance);
        // Sweep from the shoulders to the camera to shorten its arm at walls.
        direction.copy(desiredCamera).sub(targetLook);
        const maxDistance = direction.length();
        direction.normalize();
        ray.set(targetLook, direction);
        ray.far = maxDistance + .25;
        const visibleMeshes = world.cameraMeshes.filter(mesh => mesh.visible && mesh.parent?.visible !== false);
        const hit = ray.intersectObjects(visibleMeshes, false)[0];
        if (hit && hit.distance < maxDistance + .2) desiredCamera.copy(targetLook).addScaledVector(direction, Math.max(.65, hit.distance - .38));
        desiredCamera.y = Math.max(desiredCamera.y, world.floorAt(desiredCamera.x, desiredCamera.z) + .35);
        // Pull inward immediately, ease outward: collision never lags behind.
        if (camera.position.distanceTo(targetLook) > desiredCamera.distanceTo(targetLook) + .35) camera.position.copy(desiredCamera);
      }
      const ease = reduced ? 1 : 1 - Math.exp(-dt * (shot ? 6 : 10));
      cameraNow.copy(camera.position).lerp(desiredCamera, ease);
      if (!shot) {
        // The interpolated orbit also needs clearance when circling a corner.
        direction.copy(cameraNow).sub(targetLook);
        const distance = direction.length();
        if (distance > .001) {
          ray.set(targetLook, direction.normalize()); ray.far = distance + .25;
          const obstruction = ray.intersectObjects(world.cameraMeshes.filter(mesh => mesh.visible && mesh.parent?.visible !== false), false)[0];
          if (obstruction && obstruction.distance < distance + .2) cameraNow.copy(targetLook).addScaledVector(direction, Math.max(.5, obstruction.distance - .38));
        }
      }
      camera.position.copy(cameraNow);
      look.lerp(targetLook, ease);
      camera.lookAt(look);
      renderer.render(scene, camera);
    };
    frame = window.requestAnimationFrame(render);

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      clear(); api.current = null;
      canvas.removeEventListener('pointerdown', down);
      canvas.removeEventListener('pointermove', move);
      canvas.removeEventListener('pointerup', up);
      canvas.removeEventListener('pointercancel', up);
      canvas.removeEventListener('wheel', wheel);
      canvas.removeEventListener('contextmenu', preventMenu);
      canvas.removeEventListener('webglcontextlost', contextLost);
      window.removeEventListener('keydown', keydown);
      window.removeEventListener('keyup', keyup);
      window.removeEventListener('blur', clear);
      document.removeEventListener('visibilitychange', hidden);
      world.dispose();
      prince.dispose();
      prince.root.removeFromParent();
      const geometries = new Set<THREE.BufferGeometry>();
      const materials = new Set<THREE.Material>();
      scene.traverse(object => {
        const mesh = object as THREE.Mesh;
        if (mesh.geometry) geometries.add(mesh.geometry);
        if (mesh.material) for (const material of Array.isArray(mesh.material) ? mesh.material : [mesh.material]) materials.add(material);
      });
      for (const geometry of geometries) geometry.dispose();
      for (const material of materials) material.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      canvas.remove();
    };
  // All current game state and callbacks enter through live, preserving one GPU scene.
  }, []);

  const moveStick = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (joystickPointer.current !== event.pointerId || props.paused) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const dx = event.clientX - rect.left - rect.width / 2, dy = event.clientY - rect.top - rect.height / 2;
    const scale = Math.min(1, 42 / Math.max(1, Math.hypot(dx, dy)));
    if (api.current) { api.current.joy.x = dx * scale / 42; api.current.joy.y = dy * scale / 42; }
    if (knob.current) knob.current.style.transform = `translate(${dx * scale}px, ${dy * scale}px)`;
  };
  const stopStick = () => {
    joystickPointer.current = null;
    if (api.current) { api.current.joy.x = 0; api.current.joy.y = 0; }
    if (knob.current) knob.current.style.transform = 'translate(0, 0)';
  };

  return <div className="rrw-world" ref={container} data-cinematic={cinematic ?? ''}>
    <div className="rrw-canvas" ref={mount} />
    {!failed && <div className="rrw-vignette" />}
    {failed && <AccessibleRealm {...props} />}
    {!failed && cinematic && !props.intro && <><div className="rrw-letterbox rrw-letterbox-top" /><div className="rrw-letterbox rrw-letterbox-bottom" /><div className="rrw-cinematic-caption"><span>{cinematic === 'dragon' ? 'BRUM · GUARDIÁN DEL ÚLTIMO SUEÑO' : 'EL REINO DESPIERTA'}</span><p>{cinematic === 'dragon' ? 'Una promesa antigua arde en sus ojos.' : 'Donde hubo espinas, vuelve a nacer la vida.'}</p><button type="button" onClick={() => api.current?.skip()}>Omitir escena <kbd>Espacio</kbd></button></div></>}
    {!failed && !props.paused && !cinematic && <>
      {prompt && <button type="button" className="rrw-prompt" onClick={() => api.current?.action(prompt.kind)}><kbd>{prompt.key}</kbd><span><small>{prompt.kind === 'npc' ? 'Conversar' : prompt.kind === 'item' ? 'Recoger' : 'Lanzar magia'}</small>{prompt.name}</span></button>}
      <div className="rrw-mobile-controls">
        <div className="rrw-joystick" role="group" aria-label="Joystick: arrastra para caminar" onPointerDown={event => { joystickPointer.current = event.pointerId; event.currentTarget.setPointerCapture(event.pointerId); moveStick(event); }} onPointerMove={moveStick} onPointerUp={stopStick} onPointerCancel={stopStick}><span ref={knob} /><i>N</i></div>
        <div className="rrw-touch-actions"><button type="button" aria-label="Saltar" onPointerDown={() => api.current?.jump()}>↑<small>Saltar</small></button><button type="button" className="rrw-touch-talk" onClick={() => api.current?.action('nearest')}>◇<small>{prompt?.kind === 'item' ? 'Recoger' : 'Hablar'}</small></button><button type="button" className="rrw-touch-magic" onClick={() => api.current?.action('spell')}>✧<small>Magia</small></button></div>
      </div>
    </>}
    {!props.paused && notice && <p className="rrw-notice" role="status">{notice}</p>}
    <style>{`
      .rrw-world,.rrw-canvas{position:absolute;inset:0;overflow:hidden}.rrw-world{background:#899dab;color:#fff}.rrw-canvas canvas{display:block;width:100%;height:100%;touch-action:none;outline:none}.rrw-vignette{position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at 50% 45%,transparent 48%,rgba(9,18,26,.2) 100%)}.rrw-world button{font:inherit;color:inherit;cursor:pointer}.rrw-prompt{position:absolute;bottom:112px;left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:13px;border:1px solid #d5bb7370;background:#14201ff0;backdrop-filter:blur(12px);border-radius:7px;padding:12px 22px 12px 12px;box-shadow:0 8px 35px #0005;text-align:left;max-width:85vw;z-index:12}.rrw-prompt kbd{display:grid;place-items:center;width:34px;height:34px;border:1px solid #d5bb73aa;border-radius:4px;color:#f6daa0;font-size:17px}.rrw-prompt small{display:block;font-size:10px;color:#d9cba7;text-transform:uppercase;letter-spacing:.18em;margin-bottom:3px}.rrw-prompt span{font-family:Georgia,serif;font-size:16px}.rrw-desktop-hint{position:absolute;bottom:20px;left:26px;display:flex;align-items:center;gap:18px;font-size:10px;letter-spacing:.02em;color:#f3efdfab;pointer-events:none}.rrw-desktop-hint kbd{font:inherit;border:1px solid #ffffff30;border-radius:3px;padding:3px 5px;color:#f5ebd4;margin-right:4px}.rrw-notice{position:absolute;bottom:184px;left:50%;transform:translateX(-50%);background:#101e26df;border:1px solid #d0b57765;color:#f6e3ad;padding:12px 20px;border-radius:7px;max-width:min(540px,86vw);font-size:13px;line-height:1.5;text-align:center;z-index:16;pointer-events:none}.rrw-mobile-controls{display:none}.rrw-letterbox{position:absolute;left:0;right:0;height:9%;background:#080d11;z-index:14;pointer-events:none}.rrw-letterbox-top{top:0}.rrw-letterbox-bottom{bottom:0}.rrw-cinematic-caption{position:absolute;left:10%;right:10%;bottom:13%;text-align:center;text-shadow:0 2px 15px #000;z-index:15}.rrw-cinematic-caption>span{font-size:10px;letter-spacing:.32em;color:#e9d6ac}.rrw-cinematic-caption p{font:italic 23px/1.5 Georgia,serif;max-width:660px;margin:16px auto 22px;color:#fff5dd}.rrw-cinematic-caption button{padding:8px 15px;border:1px solid #d4bc7650;border-radius:4px;background:#0e1728a8;font-size:11px}.rrw-cinematic-caption kbd{font:inherit;opacity:.6;margin-left:8px}.rrw-fallback{position:absolute;inset:0;overflow:auto;background:radial-gradient(ellipse at 70% 15%,#35434b,#101c28 65%);padding:120px max(24px,calc((100% - 900px)/2)) 170px}.rrw-fallback h2{font:32px Georgia,serif;color:#ebd099;margin:0 0 12px}.rrw-fallback>p{font-size:13px;line-height:1.6;color:#bac7c8;max-width:620px}.rrw-fallback-section{border-top:1px solid #c9b57f30;padding-top:18px;margin-top:26px}.rrw-fallback-section h3{font:20px Georgia,serif;color:#e2cc99}.rrw-fallback-actions{display:flex;gap:10px;flex-wrap:wrap}.rrw-fallback-actions button,.rrw-fallback-start{padding:13px 17px;border:1px solid #d0b87770;border-radius:5px;background:#243638;color:#fff3d5}.rrw-fallback-actions button:hover{background:#374e4c}.rrw-fallback button:disabled{opacity:.45;cursor:not-allowed}.rrw-fallback-start{margin-top:20px}.rrw-world button:focus-visible{outline:2px solid #f6d689;outline-offset:4px}
      @media(pointer:coarse),(max-width:760px){.rrw-desktop-hint{display:none}.rrw-mobile-controls{position:absolute;inset:0;display:block;pointer-events:none}.rrw-joystick{position:absolute;bottom:35px;left:25px;width:118px;height:118px;border-radius:50%;border:1px solid #e4d6b044;background:#10212350;box-shadow:inset 0 0 22px #c8edff0c;pointer-events:auto;touch-action:none}.rrw-joystick span{position:absolute;left:35px;top:35px;width:48px;height:48px;border-radius:50%;border:1px solid #f2ddad88;background:#e7debc28;box-shadow:0 3px 15px #0003}.rrw-joystick i{position:absolute;top:7px;left:53px;font:9px Georgia,serif;color:#ecdbb480}.rrw-touch-actions{position:absolute;right:18px;bottom:35px;display:flex;gap:11px;align-items:flex-end;pointer-events:auto}.rrw-touch-actions button{width:54px;height:54px;border-radius:50%;border:1px solid #e5d5a45c;background:#102123b0;font-size:22px;display:flex;flex-direction:column;align-items:center;justify-content:center;touch-action:manipulation;box-shadow:0 4px 18px #0003}.rrw-touch-actions small{font-size:8px;letter-spacing:.04em}.rrw-touch-actions .rrw-touch-magic{width:67px;height:67px;border-color:#e3c88baa;background:#383045c9;color:#f2d6ff;font-size:28px}.rrw-prompt{bottom:184px;max-width:90vw;padding:10px 15px;z-index:10}.rrw-prompt span{font-size:14px}.rrw-prompt kbd{display:none}.rrw-notice{bottom:255px;font-size:12px}.rrw-cinematic-caption p{font-size:18px}.rrw-cinematic-caption{left:6%;right:6%}.rrw-fallback{padding-top:150px}}@media(max-height:500px){.rrw-prompt{bottom:112px}.rrw-joystick,.rrw-touch-actions{bottom:16px}.rrw-notice{bottom:177px}.rrw-cinematic-caption{bottom:11%}.rrw-cinematic-caption p{font-size:17px;margin:8px auto}}
      @media(pointer:coarse),(max-width:760px){.rrw-touch-actions{display:grid;grid-template-columns:54px 67px;grid-template-rows:54px 54px;gap:10px;align-items:center}.rrw-touch-actions>button:first-child{grid-column:1;grid-row:1}.rrw-touch-talk{grid-column:1;grid-row:2}.rrw-touch-magic{grid-column:2;grid-row:1 / span 2}}
      @media(max-width:360px){.rrw-joystick{left:16px;width:102px;height:102px}.rrw-joystick span{left:27px;top:27px}.rrw-joystick i{left:45px}.rrw-touch-actions{right:12px;grid-template-columns:45px 56px;grid-template-rows:45px 45px;gap:7px}.rrw-touch-actions button{width:45px;height:45px}.rrw-touch-actions .rrw-touch-magic{width:56px;height:56px}}
    `}</style>
  </div>;
}

function AccessibleRealm(props: WorldProps) {
  const { flags, inventory, spells, dialogue } = props.state;
  const areas = [
    { name: 'Colina del amanecer', open: true, npcs: ['nox'], items: [] as string[], targets: [] as string[] },
    { name: 'Aldea de los Susurros', open: (dialogue.nox ?? 0) >= 3, npcs: ['ines', 'bruno'], items: ['key'], targets: ['mill'] },
    { name: 'Bosque encantado', open: inventory.includes('key'), npcs: ['liora'], items: [], targets: ['grove'] },
    { name: 'Puente de las Espinas', open: Boolean(flags.forestLit), npcs: ['aldren'], items: [], targets: [] },
    { name: 'Jardines reales', open: Boolean(flags.bridgeOpen), npcs: ['celina'], items: ['rose'], targets: ['thorns'] },
    { name: 'Castillo de Valdoria', open: Boolean(flags.castleOpen), npcs: ['baltasar', 'teobaldo'], items: ['scroll'], targets: [] },
    { name: 'Guarida del dragón', open: Boolean(flags.historyKnown), npcs: ['brum'], items: ['crystal'], targets: ['dragon'] },
    { name: 'Torre de la princesa', open: Boolean(flags.dragonTrusted) && inventory.includes('crystal'), npcs: ['tejedora', 'elara'], items: [], targets: ['altar'] },
  ];
  return <div className="rrw-fallback">
    <h2>La aventura continúa</h2>
    <p>Este navegador no pudo abrir el mundo 3D. Puedes recorrer la historia, conversar y resolver todos los desafíos en este modo accesible.</p>
    {props.intro && <button type="button" className="rrw-fallback-start" onClick={props.onIntroEnd}>Comenzar la aventura</button>}
    {!props.intro && areas.filter(area => area.open).map(area => <section key={area.name} className="rrw-fallback-section"><h3>{area.name}</h3><div className="rrw-fallback-actions">
      {area.npcs.map(id => <button type="button" key={id} disabled={props.paused} onClick={() => props.onInteract(id)}>Hablar con {NPC_NAMES[id]}</button>)}
      {area.items.filter(id => !inventory.includes(id) && (id !== 'key' || flags.millRepaired) && (id !== 'crystal' || flags.dragonTrusted)).map(id => <button type="button" key={id} disabled={props.paused} onClick={() => props.onCollect(id)}>Recoger {ITEM_NAMES[id]}</button>)}
      {area.targets.map(id => <button type="button" key={id} disabled={props.paused || !spells.includes(props.spell)} onClick={() => props.onCast(id)}>Usar {props.spell || 'magia'} · {TARGET_NAMES[id]}</button>)}
    </div></section>)}
  </div>;
}
