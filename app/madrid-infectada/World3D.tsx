'use client';

// Madrid infectada · the runtime: renderer, camera, controls and the
// SpanishCue mascot with its mask, pistol and doses. What happens here:
//  · the arrival: the camera flies over a smoking Puerta del Sol while the
//    radio breaks up, a helicopter comes down and the mascot jumps out;
//  · the city: one continuous Madrid (city3d.ts) with the ten places of the
//    story, the streets between them and the survivors to talk to; the
//    Metro entrances go down to the ghost station, which comes out at Sol
//    (west end) or at the Retiro (east end);
//  · the walking dead (horde.mjs): they appear out of sight, shamble, groan,
//    hunt the mascot when it is close and grab it (the vaccine's shield
//    throws them back); the beam of the pistol knocks them down; a figure
//    sometimes watches from the fog and is gone when you come closer;
//  · the vaccination before every circle; the viral clouds; the arrow and
//    the beacon that lead to the next scene; the boat of the finale.
// The lesson (MadridGame.tsx) owns the state; this component follows its
// props and reports what is near and where the mascot is.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import { angleBetween, canUseKeys, escapeSolids, followYaw, inputFrom, keyAction, stepPlayer } from '../noche-abierta/world3d.mjs';
import { animateHero, createHero } from '../noche-abierta/hero3d';
import { animatePerson, setMood, setPose } from '../noche-abierta/people3d';
import { createBumpClock, pushOut } from '../escucha-3d/bump.mjs';
import { insultFor, shout } from '../escucha-3d/shout';
import { canvas, createBubbles, disposeGroup, keepPeopleClear, makeWalker, spotRing, stepWalker, type Box, type Light, type Talker, type Walker } from '../mundo-3d/kit3d';
import { boat as boatModel, buildZone, helicopter, zombieLook, type Zone3D } from './madrid3d';
import { buildCity, type City3D } from './city3d';
import { CITY_BOUNDS, ENCOUNTERS, METRO_EXITS, arrivalOf, encounterSpot, feederSpots, toWorld, turnOf, whereIs, zombieGround } from './city.mjs';
import { createCharlas, onFreeGround } from '../charlas-3d/charlas3d';
import { monumentPlaces } from './charlas';
import { createHorde, knockDown, solidIndex, stepHorde, blockedAt } from './horde.mjs';
import { SPOTS } from './story.mjs';
import { VAX_SECONDS, burstCloud, cloudAt, cloudLive, createBeam, createCloud, fireBeam, gearUp, poseAim, poseVaccination, showShield, stepBeam, stepCloud, type Cloud } from './gear3d';

export type Near = { kind: 'spot' | 'encounter' | 'metro' | 'exit'; id: string; name?: string } | null;
export type Pose = { zone: string; place: string | null; x: number; z: number; heading: number; target: number | null };
export type VaxStage = 'detect' | 'inject' | 'immune' | null;
export type WorldEvent = 'heli' | 'alarm' | 'sparks' | 'pigeons' | 'groan' | 'radio' | 'beam' | 'burst' | 'hit' | 'drop' | 'boat' | 'scream' | 'grab' | 'down' | 'whisper' | 'metro';
/** What the arrow points at: a circle (its id) or a survivor (calle/<id>). */
export type Target = string | null;
export type WorldProps = {
  /** Where the class starts (the saved district, or the Metro). */
  start: string;
  /** A trip asked from the route: bump n to go to the district (or the Metro). */
  go: { zone: string; n: number };
  target: Target;
  /** The arrival over Sol plays once; false skips straight to the mascot. */
  intro: boolean;
  /** The boat leaves Madrid Río at dawn: the end of the mission. */
  finale: boolean;
  /** The open scene: a circle id or calle/<survivor>. */
  spotOpen: string | null;
  /** The level being played: the extra conversation circles ask at this level. */
  level: string;
  /** Keys zone/spot and calle/<survivor> finished at this level. */
  done: string[];
  paused: boolean;
  /** Screen space the open card covers, so the talk is framed beside it. */
  inset: { right: number; bottom: number };
  act: number;
  fire: number;
  onIntroEnd: () => void;
  onFinaleEnd: () => void;
  onNear: (near: Near) => void;
  onSpot: (spot: string) => void;
  onVax: (stage: VaxStage) => void;
  onEvent: (event: WorldEvent, gain?: number) => void;
  onPose: (pose: Pose) => void;
  onFail: () => void;
};

type Api = { joy: { x: number; y: number }; held: Set<string>; clear: () => void; interact: () => void; shoot: () => void; jump: () => void; nitro: { on: boolean } };
type Place = { id: 'city' | 'metro'; scene: Zone3D; rings: Map<string, ReturnType<typeof spotRing>>; bubbles: ReturnType<typeof createBubbles>; clouds: Cloud[]; greeted: Set<string>; index: ReturnType<typeof solidIndex> };
type Zed = { person: Walker['person']; pose: string; seed: number };

const INTRO_END = 11.5;
const FINALE_END = 12;
const DETECT = 0.5;
const smooth = (a: number, b: number, t: number) => { const k = Math.min(1, Math.max(0, (t - a) / (b - a))); return k * k * (3 - 2 * k); };
const lerp = (a: number, b: number, k: number) => a + (b - a) * k;
const GREET = ['¡Eh! ¡Aquí!', '¿Estás sano?', 'Ven, que no muerdo.', '¿Llevas vacunas?', 'Por fin alguien.', 'Psst… acércate.', 'No hagas ruido…', '¿Los has visto?', '¡Por aquí, rápido!'];
const keyOf = (spotZone: Map<string, string>, id: string) => (id.startsWith('calle/') ? id : `${spotZone.get(id) ?? ''}/${id}`);

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
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, low ? 1.1 : 1.6));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.shadowMap.enabled = !low;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.domElement.tabIndex = 0;
    renderer.domElement.setAttribute('aria-label', 'Madrid infectada en 3D. Flechas o WASD para caminar, espacio para saltar, F para disparar a la nube o a un zombi, E para hablar o bajar al metro.');
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(58, 1, 0.1, 160);
    let hero: ReturnType<typeof createHero>;
    let gear: ReturnType<typeof gearUp>;
    let city: City3D;
    try { hero = createHero(!low); gear = gearUp(hero); city = keepPeopleClear(buildCity({ low, shadows: !low })) as City3D; }
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
    Object.assign(sun.shadow.camera, { left: -20, right: 20, top: 20, bottom: -20, near: 1, far: 100 });
    sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.03;
    scene.add(hemi, sun, sun.target);
    const beam = createBeam(scene);
    scene.fog = new THREE.Fog('#555555', 6, 70);

    let composer: EffectComposer | null = null;
    if (!low) {
      composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));
      composer.addPass(new UnrealBloomPass(new THREE.Vector2(512, 512), 0.35, 0.45, 0.88));
      composer.addPass(new OutputPass());
    }

    // ------------------------------------------------------------ the city, built once
    scene.add(city.group);
    const spotZone = new Map<string, string>(SPOTS.map(s => [s.id, s.zone]));
    const cityPlace: Place = {
      id: 'city', scene: city, rings: new Map(), bubbles: createBubbles(city.group), greeted: new Set(), index: solidIndex(city.solids),
      clouds: city.nests.map((n, i) => createCloud(city.group, n, 1000 + i * 77, low)),
    };
    for (const s of city.spots) cityPlace.rings.set(s.id, spotRing(city.group, s.x, s.z));
    // A speech mark over every survivor you can talk to; it fades when the talk is done.
    const markTex = canvas(128, 128, ctx => {
      ctx.fillStyle = 'rgba(255,255,255,0.95)'; ctx.beginPath(); ctx.roundRect(8, 10, 112, 80, 26); ctx.fill();
      ctx.beginPath(); ctx.moveTo(40, 86); ctx.lineTo(30, 116); ctx.lineTo(66, 88); ctx.fill();
      ctx.fillStyle = '#1b2a22'; for (const x of [38, 64, 90]) { ctx.beginPath(); ctx.arc(x, 50, 8, 0, 6.3); ctx.fill(); }
    });
    const marks = new Map<string, THREE.Sprite>();
    for (const [id, tk] of city.encounters) {
      const m = new THREE.Sprite(new THREE.SpriteMaterial({ map: markTex, color: '#b8ffcf', transparent: true, depthWrite: false, fog: false }));
      m.scale.set(0.55, 0.55, 1); m.position.set(tk.x, tk.seated ? 1.8 : 2.45, tk.z); city.group.add(m); marks.set(id, m);
    }

    // ------------------------------------------------------------ the walking dead
    const ground = zombieGround().filter((p: { x: number; z: number }) => !blockedAt(p.x, p.z, cityPlace.index.near(p.x, p.z, 1), 0.6));
    const feeders = feederSpots();
    const horde = createHorde(low ? 16 : 28, feeders, 7);
    const keepAway = [
      ...city.spots.map(s => ({ x: s.x, z: s.z, r: 2.4 })),
      ...ENCOUNTERS.map(e => ({ ...encounterSpot(e), r: 2.4 })),
      ...city.metro.map(m => ({ x: m.x, z: m.z, r: 2.2 })),
    ];
    const hordeWorld = { index: cityPlace.index, bounds: CITY_BOUNDS, ground, people: city.talkers.map(t => ({ x: t.x, z: t.z })), keepAway };
    const zeds: Zed[] = horde.list.map(z => {
      const w = makeWalker(city.group, [{ x: z.x, z: z.z }, { x: z.x, z: z.z }], z.seed, 0.5, zombieLook(z.seed) as never, false);
      setMood(w.person, z.seed % 4 === 0 ? 'terror' : 'pain');
      w.person.root.visible = false;
      return { person: w.person, pose: 'walk', seed: z.seed };
    });
    // The watcher: someone standing still at the end of a street, gone when you come closer.
    const watcherRig = makeWalker(city.group, [{ x: 0, z: 0 }, { x: 0, z: 0 }], 4444, 0, { ...zombieLook(4444), skin: '#c8ccc4', top: 'coat', topColor: '#1a1a1c', extras: [] } as never, false);
    setPose(watcherRig.person, 'stand'); setMood(watcherRig.person, 'neutral'); watcherRig.person.root.visible = false;
    let watcher: { x: number; z: number; t: number } | null = null, nextWatch = 25 + Math.random() * 20;

    // ------------------------------------------------------------ state
    let place: Place = cityPlace;
    // Conversation circles: every survivor without a story and every monument.
    const clearAt = (x: number, z: number) => !blockedAt(x, z, cityPlace.index.near(x, z, 1), 0.6);
    const monuments = monumentPlaces().map(pl => onFreeGround(pl, clearAt));
    const charlas = createCharlas({
      parent: scene, host: mount.current!.parentElement ?? mount.current!, world: 'madrid', level: () => live.current.level,
      people: function* () {
        for (const [i, tk] of place.scene.talkers.entries()) if (!tk.spot) yield { key: `${place.id}:${i}`, x: tk.x, z: tk.z, y: tk.person.root.position.y };
      },
      places: () => (place.id === 'city' ? monuments : []),
    });
    let metro: Place | null = null;
    let travel: { t: number; swapped: boolean; to: () => void } | null = null;
    let player = { x: 0, z: 0, heading: 0, speed: 0, y: 0, vy: 0, jumpHeld: false };
    let yaw = 0, pitch = 0.34, zoom = low ? 6 : 6.4, turn = 0;
    const held = new Set<string>();
    const joy = { x: 0, y: 0 };
    const touchNitro = { on: false };
    let jumpUntil = -1, drag: { id: number; x: number; y: number } | null = null, lastDrag = -10;
    let clock = 0, previous = 0, frame = 0, disposed = false, poseAt = 0, cullAt = 0;
    let nearKey = '', near: Near = null, acted = live.current.act, fired = live.current.fire, wentN = live.current.go.n, snap = false;
    let inside: string | null = null, still = 0, spent: string | null = null, openSpot: string | null = null, doneKey = '';
    let vax: { t: number; spot: string | null; stage: VaxStage } | null = null;
    let lastVaxFor: string | null = null, doses = 0, shieldFlash = 0, aimUntil = -1, shotCool = 0;
    let introT = live.current.intro ? (reduced ? INTRO_END - 1.2 : 0) : -1;
    let introBeat = 0;
    let finaleT = -1;
    let swoop = 0;
    let nextEvent = 12 + Math.random() * 8;
    let district = 'sol', placeName: string | null = null;
    const mayYell = createBumpClock();
    const angry: (Talker | Walker)[] = [];
    const look = new THREE.Vector3(), desired = new THREE.Vector3(), mid = new THREE.Vector3(), from = new THREE.Vector3(), viewDir = new THREE.Vector3();

    // Light: the mood of the district, blended as you walk.
    const cur = { fog: new THREE.Color(), near: 6, far: 70, sky: new THREE.Color(), ground: new THREE.Color(), hemi: 1, sunColor: new THREE.Color(), sun: 1.6, exposure: 1, at: [-14, 30, 10] as [number, number, number] };
    const tmp = new THREE.Color();
    function setLight(L: Light, k = 1) {
      cur.fog.lerp(tmp.set(L.fog[0]), k); cur.near = lerp(cur.near, L.fog[1], k); cur.far = lerp(cur.far, L.fog[2], k);
      cur.sky.lerp(tmp.set(L.hemi[0]), k); cur.ground.lerp(tmp.set(L.hemi[1]), k); cur.hemi = lerp(cur.hemi, L.hemi[2], k);
      cur.sunColor.lerp(tmp.set(L.sun.color), k); cur.sun = lerp(cur.sun, L.sun.intensity, k); cur.exposure = lerp(cur.exposure, L.exposure, k);
      cur.at = L.sun.at;
      const fog = scene.fog as THREE.Fog;
      fog.color.copy(cur.fog); fog.near = cur.near; fog.far = cur.far;
      scene.background = cur.fog;
      hemi.color.copy(cur.sky); hemi.groundColor.copy(cur.ground); hemi.intensity = cur.hemi;
      sun.color.copy(cur.sunColor); sun.intensity = cur.sun;
      renderer.toneMappingExposure = cur.exposure;
      if (Math.abs(camera.far - (cur.far + 24)) > 1) { camera.far = cur.far + 24; camera.updateProjectionMatrix(); }
    }
    setLight(city.moodOf('sol'));

    // The flyers: a helicopter for the arrival and the fly-bys, the boat of the finale.
    const heli = helicopter();
    heli.group.visible = false;
    const searchlight = new THREE.Mesh(new THREE.ConeGeometry(3.2, 14, 20, 1, true), new THREE.MeshBasicMaterial({ color: '#fff6d8', transparent: true, opacity: 0.08, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending }));
    searchlight.position.set(-1.5, -6, 0);
    heli.group.add(searchlight);
    scene.add(heli.group);
    let flyBy: { t: number; ax: number; az: number; bx: number; bz: number; y: number } | null = null;
    let finaleBoat: THREE.Group | null = null;

    // The way to the next scene: a chevron at the mascot's feet and a beam of light over the place.
    const arrow = new THREE.Mesh(new THREE.ConeGeometry(0.32, 0.9, 3), new THREE.MeshBasicMaterial({ color: '#c8ffd8', transparent: true, opacity: 0.85, depthWrite: false, fog: false }));
    arrow.rotation.x = Math.PI / 2; const arrowRig = new THREE.Group(); arrowRig.add(arrow); arrow.position.z = 1.7; scene.add(arrowRig);
    const beacon = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 60, 12, 1, true), new THREE.MeshBasicMaterial({ color: '#9effc0', transparent: true, opacity: 0.22, depthWrite: false, fog: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending }));
    beacon.position.y = 30; scene.add(beacon);

    // Particles: sparks, birds, the pistol's flash, dust.
    type Bit = { obj: THREE.Object3D; v: THREE.Vector3; life: number; kind: 'spark' | 'bird' | 'puff' };
    const bits: Bit[] = [];
    const sparkMat = new THREE.MeshBasicMaterial({ color: '#ffd37a' });
    const sparkGeo = new THREE.BoxGeometry(0.05, 0.05, 0.05);
    const birdMat = new THREE.MeshBasicMaterial({ color: '#141416', side: THREE.DoubleSide });
    const birdGeo = new THREE.PlaneGeometry(0.4, 0.16);
    const puffTex = canvas(64, 64, ctx => { const g = ctx.createRadialGradient(32, 32, 2, 32, 32, 31); g.addColorStop(0, 'rgba(255,255,255,0.9)'); g.addColorStop(1, 'rgba(255,255,255,0)'); ctx.fillStyle = g; ctx.fillRect(0, 0, 64, 64); });
    const dustMat = new THREE.SpriteMaterial({ map: puffTex, color: '#b8ae98', transparent: true, opacity: 0.6, depthWrite: false });
    const sparks = (at: THREE.Vector3, n: number) => { for (let i = 0; i < n; i++) { const m = new THREE.Mesh(sparkGeo, sparkMat); m.position.copy(at); scene.add(m); bits.push({ obj: m, v: new THREE.Vector3((Math.random() - 0.5) * 3, 1 + Math.random() * 2, (Math.random() - 0.5) * 3), life: 0.8 + Math.random() * 0.6, kind: 'spark' }); } };
    const crows = (x: number, z: number) => { for (let i = 0; i < (low ? 6 : 12); i++) { const m = new THREE.Mesh(birdGeo, birdMat); m.position.set(x + (Math.random() - 0.5) * 3, 0.3, z + (Math.random() - 0.5) * 3); scene.add(m); const a = Math.random() * Math.PI * 2; bits.push({ obj: m, v: new THREE.Vector3(Math.cos(a) * 4, 3 + Math.random() * 2, Math.sin(a) * 4), life: 3.5, kind: 'bird' }); } };
    const dust = (x: number, z: number, n: number) => { for (let i = 0; i < n; i++) { const s = new THREE.Sprite(dustMat); s.position.set(x + (Math.random() - 0.5), 0.3, z + (Math.random() - 0.5)); s.scale.setScalar(0.8); scene.add(s); bits.push({ obj: s, v: new THREE.Vector3((Math.random() - 0.5) * 3, 0.6, (Math.random() - 0.5) * 3), life: 1.2, kind: 'puff' }); } };

    function placeHero() {
      hero.root.position.set(player.x, player.y, player.z);
      hero.root.rotation.y = player.heading;
      const at = cur.at;
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
    function setPlayer(x: number, z: number, heading: number) {
      player = { ...player, x, z, heading, speed: 0, y: 0, vy: 0 };
      yaw = heading; spent = null; inside = null;
      camera.position.set(x - Math.sin(yaw) * zoom, place.scene.under ? 2.6 : 3.6, z - Math.cos(yaw) * zoom);
    }
    /** Fade out, do `to`, fade in. */
    function travelTo(to: () => void) { if (!travel) travel = { t: 0, swapped: false, to }; }
    function enterMetro(at: 'spawn' | 'gate' = 'spawn') {
      if (!metro) {
        const built = keepPeopleClear(buildZone('metro', { low, shadows: !low, labels: { back: '← SALIDA · SOL', gate: 'SALIDA · EL RETIRO →' } })) as Zone3D;
        const rings = new Map<string, ReturnType<typeof spotRing>>();
        for (const s of built.spots) rings.set(s.id, spotRing(built.group, s.x, s.z));
        metro = { id: 'metro', scene: built, rings, bubbles: createBubbles(built.group), clouds: built.nests.map((n, i) => createCloud(built.group, n, 1500 + i * 77, low)), greeted: new Set(), index: solidIndex(built.solids) };
        scene.add(built.group);
      }
      city.group.visible = false;
      place = metro; doneKey = '';
      setLight(metro.scene.light);
      const s = metro.scene;
      if (at === 'gate' && s.gate) setPlayer(s.gate.x - 2, s.gate.z, -Math.PI / 2); else setPlayer(s.spawn.x, s.spawn.z, s.spawn.heading);
      live.current.onEvent('metro');
    }
    function leaveMetro(where: { x: number; z: number; heading: number }) {
      if (metro) { disposeGroup(metro.scene.group); metro = null; }
      city.group.visible = true;
      place = cityPlace; doneKey = '';
      setLight(city.moodOf(whereIs(where.x, where.z).zone));
      setPlayer(where.x, where.z, where.heading);
      for (const z of horde.list) if (z.kind === 'walker') z.state = 'off';
    }
    function goTo(zone: string) {
      if (zone === 'metro') { travelTo(() => enterMetro()); return; }
      const a = arrivalOf(zone);
      travelTo(() => { if (place.id === 'metro') leaveMetro(a); else { setPlayer(a.x, a.z, a.heading); for (const z of horde.list) if (z.kind === 'walker') z.state = 'off'; } });
    }
    function interact() {
      const p = live.current;
      if (p.paused || p.spotOpen || travel || introT >= 0 || finaleT >= 0 || vax || !near) return;
      if (near.kind === 'spot') { spent = near.id; startVax(near.id); }
      else if (near.kind === 'encounter') p.onSpot(`calle/${near.id}`);
      else if (near.kind === 'metro') travelTo(() => enterMetro());
      else if (near.kind === 'exit') { const e = METRO_EXITS[near.id as 'west' | 'east']; travelTo(() => leaveMetro(e)); }
    }
    // The beam: at the nearest cloud or zombie in reach, else straight ahead.
    function shoot(auto = false) {
      if (introT >= 0 || finaleT >= 0 || shotCool > 0) return;
      const p = live.current;
      if (!auto && (p.paused || p.spotOpen)) return;
      shotCool = 0.4;
      let target: { at: THREE.Vector3; hit: () => void } | null = null, best = auto ? 5 : 16;
      for (const c of place.clouds) { if (!cloudLive(c)) continue; const d = Math.hypot(c.x - player.x, c.z - player.z); if (d < best) { best = d; target = { at: cloudAt(c), hit: () => { burstCloud(c); live.current.onEvent('burst'); } }; } }
      if (place.id === 'city') horde.list.forEach((z, i) => {
        if (z.state === 'off' || z.state === 'down' || z.state === 'rise' || !zeds[i].person.root.visible) return;
        // A zombie coming for you comes first.
        const d = Math.hypot(z.x - player.x, z.z - player.z) - (z.state === 'chase' ? 4 : 0);
        if (d < best) { best = d; target = { at: new THREE.Vector3(z.x, 1.3, z.z), hit: () => { knockDown(z); live.current.onEvent('down'); } }; }
      });
      const t = target as { at: THREE.Vector3; hit: () => void } | null;
      if (t) player.heading = Math.atan2(t.at.x - player.x, t.at.z - player.z);
      placeHero();
      hero.root.updateMatrixWorld(true);
      aimUntil = clock + 0.6;
      gear.muzzle.getWorldPosition(from);
      const to = t ? t.at : from.clone().add(new THREE.Vector3(Math.sin(player.heading) * 14, 1.5, Math.cos(player.heading) * 14));
      fireBeam(beam, from, to);
      gear.muzzleMat.emissiveIntensity = 3;
      p.onEvent('beam');
      if (t) window.setTimeout(() => { if (!disposed) t.hit(); }, 120);
    }
    // Browser tests (?qa3d) can place the mascot and read where it is.
    let qaCam: { p: THREE.Vector3; l: THREE.Vector3 } | null = null;
    if (params.has('qa3d')) {
      (window as unknown as { __mi3d?: unknown }).__mi3d = {
        place: (x: number, z: number, heading = 0) => setPlayer(x, z, heading),
        where: () => ({ x: player.x, z: player.z, y: player.y, cam: camera.position.toArray().map(v => Math.round(v * 10) / 10), scene: place.id, zone: district, place: placeName, near, vax: vax?.stage ?? null, clouds: place.clouds.map(c => c.state), zombies: horde.list.filter(z => z.state !== 'off').map(z => ({ s: z.state, d: Math.round(Math.hypot(z.x - player.x, z.z - player.z)) })) }),
        shoot: () => shoot(),
        metro: (on: boolean) => { if (on) enterMetro(); else leaveMetro(METRO_EXITS.west); },
        camera: (x: number, y: number, z: number, lx: number, ly: number, lz: number) => { qaCam = { p: new THREE.Vector3(x, y, z), l: new THREE.Vector3(lx, ly, lz) }; },
        free: () => { qaCam = null; },
      };
    }
    api.current = { joy, held, clear, interact, shoot: () => shoot(), jump: () => { jumpUntil = clock + 0.15; }, nitro: touchNitro };

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
    function clearArm(x: number, z: number, cx: number, cz: number, h: number) {
      const solids = place.index.near((x + cx) / 2, (z + cz) / 2, Math.hypot(cx - x, cz - z) / 2 + 1) as Box[];
      for (let i = 1; i <= 12; i++) {
        const k = i / 12, px = x + (cx - x) * k, pz = z + (cz - z) * k;
        if (solids.some(b => (b.top == null || b.top > h) && px > b.x0 - 0.2 && px < b.x1 + 0.2 && pz > b.z0 - 0.2 && pz < b.z1 + 0.2)) return Math.max(0.2, (i - 1) / 12);
      }
      return 1;
    }

    // The start: the arrival over Sol, the saved district, or the Metro.
    {
      const start = live.current.start;
      if (start === 'metro' && introT < 0) enterMetro();
      else { const a = arrivalOf(start === 'metro' ? 'sol' : start) as { x: number; z: number; heading: number }; setPlayer(a.x, a.z, a.heading); setLight(city.moodOf(start)); }
      camera.position.set(player.x - Math.sin(yaw) * 22, 24, player.z - Math.cos(yaw) * 22); swoop = 1.6;
    }
    if (introT >= 0) { hero.root.visible = false; heli.group.visible = true; }

    // ------------------------------------------------------------ where the arrow points
    function targetPoint(id: Target): { x: number; z: number } | null {
      if (!id) return null;
      const inMetro = place.id === 'metro';
      if (id.startsWith('calle/')) {
        const e = ENCOUNTERS.find(x => x.id === id.slice(6));
        if (!e) return null;
        if (inMetro) return metroExitFor(e);
        return { x: e.x, z: e.z };
      }
      if (spotZone.get(id) === 'metro') {
        if (inMetro) { const s = place.scene.spots.find(x => x.id === id); return s ? { x: s.x, z: s.z } : null; }
        let best: { x: number; z: number } | null = null, d = Infinity;
        for (const m of city.metro) { const dd = Math.hypot(m.x - player.x, m.z - player.z); if (dd < d) { d = dd; best = m; } }
        return best;
      }
      const s = city.spots.find(x => x.id === id);
      if (!s) return null;
      return inMetro ? metroExitFor(s) : { x: s.x, z: s.z };
    }
    function metroExitFor(p: { x: number; z: number }) {
      const m = place.scene;
      const east = Math.hypot(p.x - METRO_EXITS.east.x, p.z - METRO_EXITS.east.z) < Math.hypot(p.x - METRO_EXITS.west.x, p.z - METRO_EXITS.west.z);
      return east ? m.gate : m.back;
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
      if (p.fire !== fired) { fired = p.fire; shoot(); }
      if (p.go.n !== wentN) { wentN = p.go.n; goTo(p.go.zone); }
      shotCool = Math.max(0, shotCool - dt);
      const Z = place;
      const S = Z.scene;
      const inCity = Z.id === 'city';

      // A trip: fade out, move, fade in.
      if (travel) {
        travel.t += dt;
        const k = travel.t;
        if (fade.current) fade.current.style.opacity = String(travel.swapped ? Math.max(0, 1 - (k - 0.4) / 0.5) : Math.min(1, k / 0.4));
        if (!travel.swapped && k >= 0.4) { try { travel.to(); } catch (error) { console.error(error); } travel.swapped = true; vax = null; }
        if (travel.swapped && travel.t >= 0.9) { travel = null; if (fade.current) fade.current.style.opacity = '0'; }
      }

      // ---------------------------------------------------- the arrival
      if (introT >= 0) {
        introT += Math.min(0.25, raw);
        const t = introT, s = city.spawn;
        const hx = s.x + lerp(60, 0, smooth(0, 6.2, t)) + lerp(0, -70, smooth(8.2, 11.5, t));
        const hz = s.z + lerp(-50, 0, smooth(0, 6.2, t)) + lerp(0, 30, smooth(8.2, 11.5, t));
        const hy = lerp(34, 7.5, smooth(1.5, 6.2, t)) + lerp(0, 25, smooth(8.2, 11.5, t));
        heli.group.position.set(hx, hy, hz);
        heli.group.rotation.set(Math.sin(t * 0.9) * 0.05, Math.PI * 0.75 + smooth(6, 8, t) * 0.6, -0.12 * (1 - smooth(5, 6.4, t)));
        heli.rotor.rotation.y += dt * 22;
        if (introBeat === 0) { introBeat = 1; p.onEvent('heli'); }
        if (t > 6.6 && introBeat === 1) { introBeat = 2; hero.root.visible = true; }
        if (introBeat >= 2) {
          const k = smooth(6.6, 7.45, t);
          player = { ...player, x: s.x, z: s.z, heading: s.heading, y: Math.max(0, (1 - k) * 6.2 - Math.sin(k * Math.PI) * -1.2), speed: 0 };
          if (t > 7.45 && introBeat === 2) { introBeat = 3; player.y = 0; dust(s.x, s.z, low ? 6 : 12); showShield(gear, 0.2); shieldFlash = 0.8; p.onEvent('drop'); }
        }
        let cx: number, cy: number, cz: number, lx: number, ly: number, lz: number;
        if (t < 6.2) {
          const a = t * 0.11 + 0.6;
          cx = s.x + Math.cos(a) * lerp(70, 26, smooth(0, 6.2, t)); cz = s.z + Math.sin(a) * lerp(70, 26, smooth(0, 6.2, t)); cy = lerp(62, 26, smooth(0, 6.2, t));
          lx = s.x; ly = lerp(0, 4, smooth(2, 6.2, t)); lz = s.z;
          if (t > 3) { lx = lerp(s.x, hx, smooth(3, 5.5, t)); ly = lerp(ly, hy, smooth(3, 5.5, t)); lz = lerp(s.z, hz, smooth(3, 5.5, t)); }
        } else {
          const k = smooth(6.4, 9.5, t);
          const a = 0.6 + 6.2 * 0.11;
          cx = lerp(s.x + Math.cos(a) * 26, s.x - Math.sin(s.heading) * 6.4, k); cz = lerp(s.z + Math.sin(a) * 26, s.z - Math.cos(s.heading) * 6.4, k); cy = lerp(26, 3.6, k);
          lx = lerp(hx, s.x, smooth(6.2, 7.4, t)); ly = lerp(hy, 1.3, smooth(6.2, 7.4, t)); lz = lerp(hz, s.z, smooth(6.2, 7.4, t));
        }
        // Over the roofs the fog lifts a little, so the city shows how big it is.
        (scene.fog as THREE.Fog).far = lerp(cur.far, 150, 1 - smooth(5, 8, t)); camera.far = Math.max(camera.far, (scene.fog as THREE.Fog).far + 20); camera.updateProjectionMatrix();
        camera.position.set(cx, cy, cz);
        camera.lookAt(lx, ly, lz);
        if (t >= INTRO_END) { introT = -1; heli.group.visible = false; hero.root.visible = true; player.y = 0; yaw = player.heading; setLight(city.moodOf('sol')); p.onIntroEnd(); }
      } else if (!p.intro && heli.group.visible && !flyBy) { heli.group.visible = false; hero.root.visible = true; }
      if (introT < 0 && !hero.root.visible && finaleT < 0) hero.root.visible = true;
      if (p.intro === false && introT >= 0) { introT = -1; heli.group.visible = false; hero.root.visible = true; setPlayer(city.spawn.x, city.spawn.z, city.spawn.heading); setLight(city.moodOf('sol')); }

      // Circles and survivors that are done turn grey.
      const dk = `${Z.id}|${p.done.join()}`;
      if (dk !== doneKey) {
        doneKey = dk;
        for (const [id, ring] of Z.rings) {
          const isDone = p.done.includes(keyOf(spotZone, id));
          ring.material.color.set(isDone ? '#8fa79a' : '#ffffff');
          ring.material.opacity = isDone ? 0.5 : 0.95;
          ring.gem.visible = !isDone;
        }
        for (const [id, m] of marks) { const isDone = p.done.includes(`calle/${id}`); m.material.color.set(isDone ? '#8a948e' : '#b8ffcf'); m.material.opacity = isDone ? 0.45 : 1; }
      }

      // A card opened from the list puts the mascot on its circle (and still vaccinates).
      if (p.spotOpen !== openSpot) {
        openSpot = p.spotOpen;
        if (openSpot) {
          if (openSpot.startsWith('calle/')) {
            const e = ENCOUNTERS.find(x => x.id === openSpot!.slice(6));
            if (e && inCity) { const at = encounterSpot(e); if (Math.hypot(at.x - player.x, at.z - player.z) > 4) { snap = true; player = { ...player, x: at.x, z: at.z, heading: at.heading, speed: 0, y: 0, vy: 0 }; yaw = at.heading; } }
          } else {
            const s = S.spots.find(x => x.id === openSpot);
            if (s) { if (Math.hypot(s.x - player.x, s.z - player.z) > 12) snap = true; player = { ...player, x: s.x, z: s.z, heading: s.heading, speed: 0, y: 0, vy: 0 }; yaw = s.heading; spent = s.id; inside = s.id; }
            if (lastVaxFor !== openSpot && !vax) { vax = { t: DETECT, spot: null, stage: 'inject' }; lastVaxFor = openSpot; p.onVax('inject'); }
          }
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
      const free = !cinematic && !travel && !p.paused && !p.spotOpen && !vax;
      const nearSolids = Z.index.near(player.x, player.z, 7) as Box[];
      const before = player.heading;
      if (free) {
        const input = inputFrom(held);
        const ix = input.x + joy.x, iy = input.y + joy.y;
        const nitro = input.nitro || touchNitro.on;
        const jumping = input.jump || clock < jumpUntil;
        const next = stepPlayer(player, { x: ix, y: iy, yaw, sprint: input.sprint, nitro, jump: jumping, jumpSpeed: 8.4 }, dt, nearSolids, S.bounds);
        player = { ...player, x: next.x, z: next.z, heading: next.heading, speed: next.speed, y: next.y, vy: next.vy, jumpHeld: next.jumpHeld };
        // People are solid; whoever you run into turns and tells you so.
        const bodies: (Talker | Walker)[] = S.talkers.filter(t => Math.abs(t.x - player.x) < 3 && Math.abs(t.z - player.z) < 3);
        const out = pushOut(player.x, player.z, bodies, (x: number, z: number) => !nearSolids.some(b => (b.top == null || player.y < b.top) && x > b.x0 - 0.35 && x < b.x1 + 0.35 && z > b.z0 - 0.35 && z < b.z1 + 0.35));
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
      } else if (!travel && introT < 0) { player.speed = 0; }
      turn = dt > 0 ? angleBetween(before, player.heading) / dt : 0;
      placeHero();
      for (let i = angry.length - 1; i >= 0; i--) {
        const who = angry[i];
        if (clock < (who.angryUntil ?? 0)) continue;
        setMood(who.person, 'baseMood' in who ? who.baseMood : 'neutral');
        angry.splice(i, 1);
      }

      // ---------------------------------------------------- where am I, what is near
      let found: Near = null;
      if (!cinematic && !travel) {
        const here = S.spots.find(s => Math.hypot(s.x - player.x, s.z - player.z) < 1.45) ?? null;
        const id = here?.id ?? null;
        if (id !== inside) { inside = id; still = 0; if (!id) spent = null; }
        if (id && !p.spotOpen && !p.paused && !vax && id !== spent) {
          still = player.speed < 0.3 ? still + dt : 0;
          if (still > 0.6) { spent = id; still = 0; startVax(id); }
        }
        if (id) found = { kind: 'spot', id };
        else if (inCity) {
          for (const e of ENCOUNTERS) {
            const at = encounterSpot(e);
            if (Math.hypot(at.x - player.x, at.z - player.z) < 2.1 || Math.hypot(e.x - player.x, e.z - player.z) < 1.6) { found = { kind: 'encounter', id: e.id }; break; }
          }
          if (!found) for (const m of city.metro) if (Math.hypot(m.x - player.x, m.z - player.z) < 2.2) { found = { kind: 'metro', id: m.name, name: m.name }; break; }
        } else {
          if (S.gate && Math.hypot(S.gate.x - player.x, S.gate.z - player.z) < 2.4) found = { kind: 'exit', id: 'east' };
          else if (S.back && Math.hypot(S.back.x - player.x, S.back.z - player.z) < 2.4) found = { kind: 'exit', id: 'west' };
        }
        if (!found) {
          // Someone with a story calls you over.
          for (const tk of S.talkers) {
            if (!tk.spot || Z.greeted.has(tk.spot) || p.done.includes(keyOf(spotZone, tk.spot))) continue;
            if (Math.abs(tk.x - player.x) < 6 && Math.abs(tk.z - player.z) < 6 && Math.hypot(tk.x - player.x, tk.z - player.z) < 5.5) { Z.greeted.add(tk.spot); Z.bubbles.say(tk, GREET[(Z.greeted.size * 7 + tk.seed) % GREET.length], 3.2); }
          }
        }
      }
      charlas.update(player, dt, !found && free);
      const nk = found ? `${found.kind}:${found.id}` : '';
      if (nk !== nearKey) { nearKey = nk; near = found; p.onNear(found); }
      const goal = targetPoint(p.target);
      if (clock - poseAt > 0.25 && !cinematic) {
        poseAt = clock;
        if (inCity) { const w = whereIs(player.x, player.z); district = w.zone; placeName = w.place; } else { district = 'metro'; placeName = 'Estación de Chamberí'; }
        city.focus(player.x, player.z);
        p.onPose({ zone: district, place: placeName, x: player.x, z: player.z, heading: player.heading, target: goal ? Math.round(Math.hypot(goal.x - player.x, goal.z - player.z)) : null });
      }
      if (inCity && introT < 0 && finaleT < 0) setLight(city.moodOf(district), Math.min(1, dt * 0.8));

      // The arrow at the feet and the beam over the next scene.
      const showWay = Boolean(goal) && !cinematic && !p.spotOpen && !vax;
      arrowRig.visible = showWay && Math.hypot(goal!.x - player.x, goal!.z - player.z) > 3;
      beacon.visible = showWay;
      if (goal && showWay) {
        arrowRig.position.set(player.x, player.y + 0.12, player.z);
        arrowRig.rotation.y = Math.atan2(goal.x - player.x, goal.z - player.z);
        arrow.position.z = 1.6 + Math.sin(clock * 4) * 0.12;
        beacon.position.set(goal.x, 30, goal.z);
        (beacon.material as THREE.MeshBasicMaterial).opacity = 0.16 + Math.sin(clock * 2.2) * 0.06;
      }

      // ---------------------------------------------------- the clouds
      const calm = Boolean(p.spotOpen) || Boolean(vax) || cinematic || p.paused || Boolean(travel);
      for (const c of Z.clouds) {
        if (Math.abs(c.x - player.x) > 60 || Math.abs(c.z - player.z) > 60) continue;
        stepCloud(c, dt, player, Z.index.near(c.x, c.z, 3) as Box[], calm);
        if (!cloudLive(c) || calm) continue;
        const d = Math.hypot(c.x - player.x, c.z - player.z);
        if (c.state === 'hunt' && d < 4.2 && shotCool <= 0) shoot(true);
        else if (d < 1.4 && shieldFlash <= 0) {
          shieldFlash = 0.7; c.vx = -(player.x - c.x) * 2; c.vz = -(player.z - c.z) * 2; c.state = 'drift'; c.cool = 6;
          p.onEvent('hit');
        }
      }

      // ---------------------------------------------------- the walking dead
      if (inCity) {
        camera.getWorldDirection(viewDir);
        const vl = Math.hypot(viewDir.x, viewDir.z) || 1;
        const events = stepHorde(horde, hordeWorld, player, { x: viewDir.x / vl, z: viewDir.z / vl }, cinematic ? 0 : dt, calm);
        for (const e of events) {
          const gain = Math.max(0.08, Math.min(1, 1 - e.d / 20));
          if (e.type === 'groan') p.onEvent('groan', gain);
          else if (e.type === 'scream') p.onEvent('scream', gain);
          else if (e.type === 'grab') {
            const z = horde.list[e.id];
            const a = Math.atan2(player.x - z.x, player.z - z.z);
            const out = escapeSolids(player.x + Math.sin(a) * 1.4, player.z + Math.cos(a) * 1.4, nearSolids, S.bounds);
            player.x = out.x; player.z = out.z; player.speed = 0;
            shieldFlash = 0.8; showShield(gear, 0.2);
            p.onEvent('grab');
          }
        }
        const cullR = cur.far + 6;
        horde.list.forEach((z, i) => {
          const r = zeds[i];
          const d = Math.hypot(z.x - player.x, z.z - player.z);
          const show = z.state !== 'off' && d < cullR;
          r.person.root.visible = show;
          if (!show) return;
          const pose = z.state === 'feed' || z.state === 'rise' ? 'crouch' : z.state === 'down' ? 'fallen' : 'walk';
          if (pose !== r.pose) { r.pose = pose; setPose(r.person, pose); }
          r.person.root.position.set(z.x, 0, z.z);
          r.person.root.rotation.y = z.heading;
          if (d < 45) {
            animatePerson(r.person, dt, Math.abs(z.speed) * 1.4);
            const parts = r.person.parts;
            if (pose === 'walk') {
              // Arms forward, the head hanging, a twitch now and then.
              parts.armL.rotation.x = -1.3 + Math.sin(clock * 1.3 + r.seed) * 0.1; parts.armR.rotation.x = -1.15 + Math.sin(clock * 1.1 + r.seed) * 0.12;
              parts.head.rotation.z = 0.3 + Math.sin(clock * 0.7 + r.seed) * 0.08 + (Math.sin(clock * 9 + r.seed) > 0.97 ? 0.4 : 0);
              parts.torso.rotation.x = 0.18;
            } else if (pose === 'crouch' && z.state === 'feed') parts.head.rotation.x = 0.5 + Math.sin(clock * 6 + r.seed) * 0.12;
          }
        });

        // The watcher at the end of the street.
        if (!calm) nextWatch -= dt;
        if (!watcher && nextWatch <= 0) {
          nextWatch = 35 + Math.random() * 30;
          const fx = viewDir.x / vl, fz = viewDir.z / vl;
          const spot = ground.find((g: { x: number; z: number }) => { const dx = g.x - player.x, dz = g.z - player.z, d = Math.hypot(dx, dz); return d > 28 && d < 38 && (dx * fx + dz * fz) / d > 0.85 && Math.random() < 0.5; });
          if (spot) watcher = { x: spot.x, z: spot.z, t: 0 };
        }
        if (watcher) {
          watcher.t += dt;
          const d = Math.hypot(watcher.x - player.x, watcher.z - player.z);
          const w = watcherRig.person;
          w.root.visible = !(Math.sin(clock * 31) > 0.9 && watcher.t > 7);
          w.root.position.set(watcher.x, 0, watcher.z); w.root.rotation.y = Math.atan2(player.x - watcher.x, player.z - watcher.z);
          if (d < 17 || watcher.t > 11 || calm) { if (d < 17) p.onEvent('whisper', 0.6); watcher = null; w.root.visible = false; }
        }
      } else {
        for (const w of S.zombies) if (Math.hypot(w.x - player.x, w.z - player.z) < 70) stepWalker(w, dt);
        for (const w of S.zombies) { const parts = w.person.parts; parts.armL.rotation.x = -1.25 + Math.sin(clock * 1.3 + w.seed) * 0.08; parts.armR.rotation.x = -1.15 + Math.sin(clock * 1.1 + w.seed) * 0.1; }
      }
      if (shieldFlash > 0 && !vax) { shieldFlash = Math.max(0, shieldFlash - dt); showShield(gear, shieldFlash > 0 ? 1 - shieldFlash / 0.8 : 0); }
      stepBeam(beam, dt);
      gear.muzzleMat.emissiveIntensity = Math.max(0.2, gear.muzzleMat.emissiveIntensity - dt * 8);

      // ---------------------------------------------------- micro-events
      if (!cinematic && !calm) {
        nextEvent -= dt;
        if (nextEvent <= 0) {
          nextEvent = 12 + Math.random() * 12;
          const roll = Math.random();
          if (roll < 0.18 && inCity) {
            const a = Math.random() * Math.PI * 2;
            flyBy = { t: 0, ax: player.x + Math.cos(a) * 80, az: player.z + Math.sin(a) * 80, bx: player.x - Math.cos(a) * 80, bz: player.z - Math.sin(a) * 80, y: 30 + Math.random() * 8 };
            heli.group.visible = true; p.onEvent('heli');
          } else if (roll < 0.34 && S.sparks.length) {
            let at = S.sparks[0], best = Infinity;
            for (let i = 0; i < 6; i++) { const s = S.sparks[Math.floor(Math.random() * S.sparks.length)]; const d = Math.hypot(s.x - player.x, s.z - player.z); if (d < best) { best = d; at = s; } }
            sparks(at, low ? 10 : 22); p.onEvent('sparks');
          } else if (roll < 0.46 && S.alarms.length) {
            let alarm = S.alarms[0], best = Infinity;
            for (const a of S.alarms) { const d = Math.hypot(a.at.x - player.x, a.at.z - player.z); if (d < best && d > 6) { best = d; alarm = a; } }
            alarm.lights.forEach(m => { m.userData.alarmUntil = clock + 5; });
            p.onEvent('alarm');
          } else if (roll < 0.6 && inCity) {
            crows(player.x + Math.sin(player.heading) * 6, player.z + Math.cos(player.heading) * 6); p.onEvent('pigeons');
          } else if (roll < 0.82) p.onEvent('scream', 0.25);
          else p.onEvent('radio');
        }
      }
      for (const alarm of S.alarms) for (const m of alarm.lights) {
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

      // ---------------------------------------------------- the finale (on the Manzanares, in Madrid Río)
      const rio = (x: number, z: number) => toWorld('rio', x, z) as { x: number; z: number };
      const rioTurn = turnOf('rio');
      if (p.finale && finaleT < 0 && inCity && !p.spotOpen) {
        finaleT = 0;
        finaleBoat = boatModel();
        const at = rio(22, 23.2);
        finaleBoat.position.set(at.x, -0.3, at.z);
        city.group.add(finaleBoat);
        p.onEvent('boat');
      }
      if (finaleT >= 0 && finaleBoat) {
        finaleT += Math.min(0.25, raw);
        const t = finaleT;
        const k = smooth(1.5, FINALE_END - 0.5, t);
        // Downstream under the Puente de Segovia, between two of its piers.
        const bx = 22 - k * 72, bz = 23.2 + Math.min(1, k * 4) * 3.3;
        const at = rio(bx, bz);
        finaleBoat.position.set(at.x, -0.3 + Math.sin(t * 1.6) * 0.06, at.z);
        finaleBoat.rotation.set(Math.sin(t * 1.2) * 0.03, Math.PI + rioTurn, Math.sin(t * 0.9) * 0.04);
        const deck = rio(bx + 0.8, bz);
        player = { ...player, x: deck.x, z: deck.z, y: finaleBoat.position.y + 0.25, heading: -Math.PI / 2 + rioTurn, speed: 0 };
        const light = smooth(0.5, 9, t);
        renderer.toneMappingExposure = lerp(cur.exposure, 1.35, light);
        sun.intensity = lerp(cur.sun, 2.6, light);
        hemi.intensity = lerp(cur.hemi, 1.15, light);
        (scene.fog as THREE.Fog).far = lerp(cur.far, 140, light); camera.far = Math.max(camera.far, (scene.fog as THREE.Fog).far + 20); camera.updateProjectionMatrix();
        const cam = rio(bx + 9 - t * 0.3, bz - 12 - t * 0.4), lookAt = rio(bx - 2, bz + 2);
        camera.position.set(cam.x, 3.6 + t * 0.5, cam.z);
        camera.lookAt(lookAt.x, 1, lookAt.z);
        if (t >= FINALE_END) { finaleT = -2; p.onFinaleEnd(); }
      }
      if (!p.finale && finaleT !== -1) {
        // Back on the pier after the ending (or when the finale is replayed later).
        if (finaleBoat) { finaleBoat.removeFromParent(); finaleBoat = null; }
        finaleT = -1; setLight(city.moodOf('rio'));
        const pier = rio(22, 17.6);
        setPlayer(pier.x, pier.z, Math.PI + rioTurn);
      }

      // ---------------------------------------------------- life, and what the fog hides
      S.animate(clock, dt);
      Z.bubbles.update(clock);
      for (const [, ring] of Z.rings) { ring.gem.rotation.y += dt * 1.6; ring.gem.position.y = 2.5 + Math.sin(clock * 2) * 0.12; }
      for (const [, m] of marks) m.position.y = (m.userData.y ??= m.position.y) + Math.sin(clock * 2.4 + m.position.x) * 0.06;
      const cullR = cur.far + 8;
      if (inCity && clock - cullAt > 0.25) {
        cullAt = clock;
        for (const c of city.cull) { const d = Math.max(Math.abs(c.x - player.x), Math.abs(c.z - player.z)) - c.r; c.obj.visible = d < cullR || introT >= 0 || finaleT >= 0; }
        for (const [, m] of marks) m.visible = Math.abs(m.position.x - player.x) < cullR && Math.abs(m.position.z - player.z) < cullR;
      }
      for (const tk of S.talkers) {
        const dx = player.x - tk.x, dz = player.z - tk.z;
        if (Math.abs(dx) > cullR || Math.abs(dz) > cullR) { tk.person.root.visible = introT >= 0; continue; }
        tk.person.root.visible = true;
        const talking = Boolean(p.spotOpen && tk.spot === p.spotOpen);
        const d = Math.hypot(dx, dz), facing = Math.atan2(dx, dz);
        if (talking && !tk.seated) { tk.heading += angleBetween(tk.heading, facing) * Math.min(1, dt * 4); tk.person.root.rotation.y = tk.heading; }
        tk.person.look = d < 6 || talking ? Math.max(-1.1, Math.min(1.1, angleBetween(tk.heading, facing))) : null;
        if (d < 36) animatePerson(tk.person, dt, 0, talking);
      }
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
          const tk = S.talkers.find(t => t.spot === p.spotOpen);
          const ox = tk ? tk.x : player.x + Math.sin(player.heading) * 1.8, oz = tk ? tk.z : player.z + Math.cos(player.heading) * 1.8;
          mid.set((player.x + ox) / 2, 1.3, (player.z + oz) / 2);
          const side = Math.atan2(ox - player.x, oz - player.z) + Math.PI / 2;
          const dist = Math.max(3, Math.hypot(ox - player.x, oz - player.z) * 0.9 + 1.6);
          let cx = mid.x + Math.sin(side) * dist, cz = mid.z + Math.cos(side) * dist;
          if (clearArm(mid.x, mid.z, cx, cz, 2) < 0.9) { cx = mid.x - Math.sin(side) * dist; cz = mid.z - Math.cos(side) * dist; }
          desired.set(cx, 2.1, cz);
          const roof = S.ceilings?.find(c => cx > c.x0 && cx < c.x1 && cz > c.z0 && cz < c.z1);
          if (roof) desired.y = Math.min(desired.y, roof.y - 0.35);
          if (snap) { camera.position.copy(desired); look.copy(mid); snap = false; }
          camera.position.lerp(desired, 1 - Math.exp(-dt * 3));
          look.lerp(mid, 1 - Math.exp(-dt * 4));
          camera.lookAt(look);
          const ix = Math.min(W * 0.4, p.inset.right) / 2, iy = Math.min(H * 0.5, p.inset.bottom) / 2;
          if (ix || iy) camera.setViewOffset(W, H, ix, iy, W, H); else camera.clearViewOffset();
        } else {
          if (camera.view) camera.clearViewOffset();
          const vk = vax ? smooth(0, 0.4, vax.t) : 0;
          const camYaw = yaw + vk * angleBetween(yaw, player.heading + Math.PI * 0.8);
          const dist = lerp(zoom, 3.4, vk);
          const cx = player.x - Math.sin(camYaw) * Math.cos(pitch) * dist;
          const cz = player.z - Math.cos(camYaw) * Math.cos(pitch) * dist;
          const k = clearArm(player.x, player.z, cx, cz, 3);
          desired.set(player.x + (cx - player.x) * k, Math.max(player.y + 1.2, player.y + 1.6 + Math.sin(pitch) * dist * Math.max(0.6, k) - vk * 0.6), player.z + (cz - player.z) * k);
          const roof = S.ceilings?.find(c => player.x > c.x0 && player.x < c.x1 && player.z > c.z0 && player.z < c.z1);
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
      charlas.dispose();
      window.clearTimeout(touchTimer);
      observer.disconnect();
      window.removeEventListener('keydown', onKeyDown); window.removeEventListener('keyup', onKeyUp); window.removeEventListener('blur', onBlur);
      el.removeEventListener('pointerdown', onDown); el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerup', onUp); el.removeEventListener('pointercancel', onUp); el.removeEventListener('wheel', onWheel);
      if (metro) disposeGroup(metro.scene.group);
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
      <button type="button" aria-label="Disparar a la nube o a un zombi" onPointerDown={() => api.current?.shoot()}>✦<small>Disparar</small></button>
      <button type="button" aria-label="Saltar" onPointerDown={() => api.current?.jump()}>↑<small>Saltar</small></button>
      <button type="button" aria-label="Nitro: mantén pulsado para correr muy rápido" onPointerDown={() => { if (api.current) api.current.nitro.on = true; }} onPointerUp={nitroOff} onPointerCancel={nitroOff} onPointerLeave={nitroOff}>»<small>Nitro</small></button>
    </div>}
  </div>;
}
