// Más allá · the death, rendered live in ten seconds. A hospital room at
// night: the bed, the ventilator breathing, the heart monitor drawing its
// green line, the city behind the window. You are old; your family is around
// you, holding your hand. The beeps slow down, the line goes flat, the room
// goes quiet, and your soul rises out of the body, through the ceiling, into
// the light. The runtime asks `frame(t)` for the camera and the beats.
import * as THREE from 'three';
import { box, canvas, cylinder, random, solid } from '../mundo-3d/kit3d';
import { createPerson, setMood, setPose, animatePerson, addBlobShadow, type Person } from '../noche-abierta/people3d';
import { makeSoul, animateFigure, softGlowTexture } from './figures3d';
import { particles } from './common3d';

export const INTRO_SECONDS = 10;
/** When the heart beats (seconds): slower and slower, then the flat line. */
export const BEATS = [0.25, 1.05, 1.9, 2.8, 3.8, 4.95, 6.3];
export const FLATLINE = 7.05;
export type IntroBeat = 'beep' | 'breath' | 'flat' | 'soul' | 'light';

const smooth = (a: number, b: number, t: number) => { const k = Math.min(1, Math.max(0, (t - a) / (b - a))); return k * k * (3 - 2 * k); };
const lerp = (a: number, b: number, k: number) => a + (b - a) * k;
/** The chairs: seat height, and how far behind the sitter's root the seat centre is. */
export const CHAIR = { seat: 0.36, back: 0.08 };
/** The blanket over her legs (world space): a half-ellipse tube along z, resting on the mattress. */
export const BLANKET = { y: 0.83, z: -0.72, len: 0.86, rx: 0.45, ry: 0.42 };
const BLANKET_TOP = BLANKET.y + BLANKET.ry;
/** Where the soul first shows: clear of the blanket and of her body. */
const SOUL_Y = BLANKET_TOP + 0.06;

export function buildIntro(low: boolean, shadows: boolean) {
  const group = new THREE.Group();
  const r = random(1931);
  const people: Person[] = [];

  // ---------------------------------------------------------------- the room
  const wall = solid('#c9cfc6', 0.9), floorMat = new THREE.MeshStandardMaterial({ map: canvas(256, 256, ctx => { ctx.fillStyle = '#b8b4a6'; ctx.fillRect(0, 0, 256, 256); for (let i = 0; i < 900; i++) { ctx.fillStyle = `rgba(${r() < 0.5 ? '60,60,50' : '240,240,230'},.08)`; ctx.fillRect(r() * 256, r() * 256, 3, 3); } ctx.strokeStyle = 'rgba(0,0,0,.12)'; for (let k = 0; k <= 4; k++) { ctx.beginPath(); ctx.moveTo(k * 64, 0); ctx.lineTo(k * 64, 256); ctx.moveTo(0, k * 64); ctx.lineTo(256, k * 64); ctx.stroke(); } }, true), roughness: 0.55 });
  (floorMat.map as THREE.Texture).repeat.set(3, 3);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(7, 6), floorMat); floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; group.add(floor);
  group.add(box(7, 3, 0.1, wall, 0, 1.5, -3, shadows));
  group.add(box(0.1, 3, 6, wall, -3.5, 1.5, 0, shadows));
  group.add(box(0.1, 3, 6, wall, 3.5, 1.5, 0, shadows));
  const ceilingMat = new THREE.MeshStandardMaterial({ color: '#e8e8e2', roughness: 0.9, transparent: true, opacity: 1 });
  const ceiling = new THREE.Mesh(new THREE.PlaneGeometry(7, 6), ceilingMat); ceiling.rotation.x = Math.PI / 2; ceiling.position.y = 3; group.add(ceiling);
  const panel = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.6), new THREE.MeshBasicMaterial({ color: '#fff6e8', transparent: true, toneMapped: false })); panel.rotation.x = Math.PI / 2; panel.position.set(0, 2.99, -0.4); group.add(panel);
  // The window: the city at night.
  const city = canvas(512, 256, ctx => {
    const g = ctx.createLinearGradient(0, 0, 0, 256); g.addColorStop(0, '#0b1426'); g.addColorStop(1, '#2a2a3a'); ctx.fillStyle = g; ctx.fillRect(0, 0, 512, 256);
    for (let i = 0; i < 26; i++) { const x = r() * 512, w = 20 + r() * 50, h = 60 + r() * 150; ctx.fillStyle = '#121620'; ctx.fillRect(x, 256 - h, w, h); for (let k = 0; k < 30; k++) if (r() < 0.35) { ctx.fillStyle = r() < 0.7 ? '#ffd890' : '#bfe0ff'; ctx.fillRect(x + 3 + (k % 4) * (w / 4), 256 - h + 6 + Math.floor(k / 4) * 12, 4, 5); } }
    ctx.fillStyle = 'rgba(255,255,255,.85)'; ctx.beginPath(); ctx.arc(420, 50, 14, 0, Math.PI * 2); ctx.fill();
  });
  const win = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 1.3), new THREE.MeshBasicMaterial({ map: city, toneMapped: false })); win.position.set(-3.44, 1.7, -0.6); win.rotation.y = Math.PI / 2; group.add(win);
  const frameM = solid('#e8e8e2', 0.5);
  for (const [y, h] of [[1.05, 0.08], [2.35, 0.08]] as [number, number][]) group.add(box(0.12, h, 2.5, frameM, -3.42, y, -0.6, false));
  group.add(box(0.12, 1.35, 0.08, frameM, -3.42, 1.7, -0.6, false));
  const curtain = box(0.06, 2.6, 0.9, solid('#7a8a9a', 0.95), -3.38, 1.6, 1.0, false); group.add(curtain);
  // Flowers and a framed photo on the bedside table.
  group.add(box(0.5, 0.7, 0.45, solid('#d8d4c8', 0.6), 1.55, 0.35, -2.2, shadows));
  group.add(cylinder(0.07, 0.06, 0.22, new THREE.MeshPhysicalMaterial({ color: '#d0e8ff', transmission: 0.6, transparent: true, roughness: 0.1 }), 1.45, 0.81, -2.2, 10));
  for (let i = 0; i < 7; i++) { const f = new THREE.Mesh(new THREE.SphereGeometry(0.05, 6, 5), solid(['#f6d84a', '#ffffff', '#e85a7a'][i % 3])); f.position.set(1.45 + (r() - 0.5) * 0.16, 1.02 + r() * 0.1, -2.2 + (r() - 0.5) * 0.16); group.add(f); }
  const photo = new THREE.Mesh(new THREE.PlaneGeometry(0.2, 0.15), new THREE.MeshBasicMaterial({ map: canvas(128, 96, ctx => { ctx.fillStyle = '#d8c8a8'; ctx.fillRect(0, 0, 128, 96); ctx.fillStyle = '#5a4a3a'; for (const x of [30, 64, 98]) { ctx.beginPath(); ctx.arc(x, 40, 12, 0, 6.3); ctx.fill(); ctx.fillRect(x - 14, 54, 28, 40); } }) }));
  photo.position.set(1.68, 0.8, -2.16); photo.rotation.y = -0.4; group.add(photo);

  // ---------------------------------------------------------------- the bed
  const bed = new THREE.Group();
  const metal = solid('#d8dcdc', 0.4, 0.6);
  bed.add(box(1.05, 0.5, 2.1, metal, 0, 0.32, 0, shadows));
  // The mattress top (0.83) is where her body rests; nothing of the bed goes through her.
  bed.add(box(1.0, 0.34, 2.05, solid('#f2f2ee', 0.95), 0, 0.66, 0, shadows));
  bed.add(box(1.1, 0.7, 0.06, metal, 0, 0.75, -1.06, false));
  bed.add(box(1.1, 0.45, 0.06, metal, 0, 0.62, 1.06, false));
  // The pillow stands against the headboard, just behind her head.
  bed.add(box(0.6, 0.15, 0.24, solid('#ffffff', 0.95), 0, 0.905, -0.9, false));
  // The blanket is a soft tent over her legs: hollow, so her body stays under it, never inside it.
  const blanketMat = new THREE.MeshStandardMaterial({ color: '#9ab0c8', roughness: 0.95, side: THREE.DoubleSide });
  const shell = new THREE.CylinderGeometry(BLANKET.rx, BLANKET.rx, BLANKET.len, 22, 1, true, Math.PI / 2, Math.PI);
  shell.rotateX(Math.PI / 2); shell.scale(1, BLANKET.ry / BLANKET.rx, 1);
  const blanket = new THREE.Mesh(shell, blanketMat); blanket.name = 'blanket';
  blanket.position.set(0, BLANKET.y, BLANKET.z - -1.3); bed.add(blanket);
  const cap = new THREE.Mesh(new THREE.CircleGeometry(BLANKET.rx, 22, 0, Math.PI).scale(1, BLANKET.ry / BLANKET.rx, 1), blanketMat);
  cap.position.set(0, BLANKET.y, BLANKET.z + BLANKET.len / 2 - -1.3); bed.add(cap);
  bed.position.set(0, 0, -1.3);
  group.add(bed);

  // ---------------------------------------------------------------- you, at eighty-nine
  const look = { body: 'f', age: 'elderly', build: 'slim', top: 'shirt', topColor: '#dfe6ee', bottom: 'pants', bottomColor: '#dfe6ee', hairStyle: 'bun', hairColor: '#ece9e2', skin: '#eac0a0', seed: 89 };
  const you = createPerson(look as never, shadows);
  setPose(you, 'lie'); setMood(you, 'sleepy');
  you.root.position.set(0, 0.86, -1.17); you.root.rotation.y = 0;
  you.attention = 0;
  group.add(you.root); people.push(you);
  // The soul: the same body, made of light, rising out of it.
  const soul = createPerson(look as never, false);
  makeSoul(soul, 89, true);
  setPose(soul, 'lie'); setMood(soul, 'smile');
  soul.root.visible = false;
  group.add(soul.root);

  // ---------------------------------------------------------------- the family
  const family: { look: Record<string, unknown>; x: number; z: number; h: number; pose: string }[] = [
    // Your daughter, holding your hand.
    { look: { body: 'f', age: 'adult', top: 'sweater', topColor: '#8a4a4a', bottom: 'jeans', bottomColor: '#2a3040', hairStyle: 'long', hairColor: '#5a3a22', skin: '#eac0a0' }, x: 1.1, z: -1.25, h: -Math.PI / 2, pose: 'sit' },
    // Your husband, very old too, on the other side.
    { look: { body: 'm', age: 'elderly', build: 'slim', top: 'sweater', topColor: '#5a6a5a', bottom: 'pants', bottomColor: '#3a3a3a', hairStyle: 'short', hairColor: '#e0ddd6', skin: '#e0ac85', extras: ['glasses'] }, x: -1.1, z: -1.6, h: Math.PI / 2, pose: 'sit' },
    // Your son, standing behind his sister, a hand on her shoulder.
    { look: { body: 'm', age: 'adult', top: 'jacket', topColor: '#2a3a50', bottom: 'jeans', bottomColor: '#2a2f3a', hairStyle: 'short', hairColor: '#3d2a1c', skin: '#e0ac85', extras: ['beard'] }, x: 1.55, z: -0.85, h: -Math.PI / 2 - 0.3, pose: 'stand' },
    // Your granddaughter, crying in her mother's arms… and your grandson at the foot of the bed.
    { look: { body: 'f', age: 'teen', top: 'hoodie', topColor: '#c8b0d8', bottom: 'jeans', bottomColor: '#3a4a6a', hairStyle: 'ponytail', hairColor: '#7a4a22', skin: '#eac0a0' }, x: 1.75, z: -0.2, h: -Math.PI / 2 - 0.5, pose: 'cry' },
    { look: { body: 'm', age: 'young', top: 'tshirt', topColor: '#3a3a3a', bottom: 'jeans', bottomColor: '#30364a', hairStyle: 'curly', hairColor: '#2b1d14', skin: '#d29a72' }, x: -0.4, z: 0.6, h: Math.PI, pose: 'stand' },
  ];
  const kin: Person[] = [];
  family.forEach((f, i) => {
    const p = createPerson({ ...f.look, seed: 300 + i } as never, shadows);
    setPose(p, f.pose); setMood(p, 'sad');
    p.root.position.set(f.x, 0, f.z); p.root.rotation.y = f.h;
    p.attention = 0;
    if (!shadows) addBlobShadow(p);
    group.add(p.root); people.push(p); kin.push(p);
  });
  // Two open chairs for the ones who sit: a thin seat under the hips, legs at the corners, so their legs pass free.
  const wood = solid('#6a5a4a', 0.7);
  for (const f of family.filter(f => f.pose === 'sit')) {
    const cx = f.x + Math.sign(f.x) * CHAIR.back, cz = f.z;
    group.add(box(0.44, 0.04, 0.44, wood, cx, CHAIR.seat - 0.02, cz, false));
    for (const [dx, dz] of [[-0.19, -0.19], [-0.19, 0.19], [0.19, -0.19], [0.19, 0.19]]) group.add(box(0.04, CHAIR.seat - 0.04, 0.04, wood, cx + dx, (CHAIR.seat - 0.04) / 2, cz + dz, false));
    group.add(box(0.04, 0.5, 0.44, wood, cx + Math.sign(f.x) * 0.2, CHAIR.seat + 0.25, cz, false));
  }

  // ---------------------------------------------------------------- the machines
  // Heart monitor on its arm, beside the bed.
  const ecg = document.createElement('canvas'); ecg.width = 512; ecg.height = 288;
  const ecgCtx = ecg.getContext('2d')!;
  const ecgTex = new THREE.CanvasTexture(ecg); ecgTex.colorSpace = THREE.SRGBColorSpace;
  const monitor = new THREE.Group();
  monitor.add(box(0.62, 0.42, 0.12, solid('#2a2e30', 0.5), 0, 0, 0, false));
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.54, 0.31), new THREE.MeshBasicMaterial({ map: ecgTex, toneMapped: false })); screen.position.z = 0.061; monitor.add(screen);
  monitor.position.set(-1.25, 1.65, -2.6); monitor.rotation.y = 0.45; group.add(monitor);
  group.add(cylinder(0.025, 0.025, 1.4, metal, -1.35, 0.95, -2.75, 6));
  const screenGlow = new THREE.PointLight('#5aff9a', 1.2, 3, 2); screenGlow.position.set(-1.1, 1.65, -2.3); group.add(screenGlow);
  // The ventilator: a cart with its bellows breathing in a glass column.
  const vent = new THREE.Group();
  vent.add(box(0.5, 1.0, 0.45, solid('#e8e8e4', 0.5), 0, 0.5, 0, shadows));
  vent.add(box(0.42, 0.22, 0.04, new THREE.MeshBasicMaterial({ color: '#1a3a4a', toneMapped: false }), 0, 0.82, 0.23, false));
  const column = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.5, 16, 1, true), new THREE.MeshPhysicalMaterial({ color: '#e8f4ff', transmission: 0.7, transparent: true, opacity: 0.5, roughness: 0.05, side: THREE.DoubleSide })); column.position.y = 1.27; vent.add(column);
  const bellows = cylinder(0.09, 0.09, 0.4, solid('#7ab0d8', 0.5), 0, 1.2, 0, 14); vent.add(bellows);
  vent.position.set(-1.3, 0, -0.5); group.add(vent);
  const tube = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([new THREE.Vector3(-1.3, 1.05, -0.5), new THREE.Vector3(-0.75, 1.12, -0.8), new THREE.Vector3(-0.38, 1.16, -1.5), new THREE.Vector3(-0.06, 1.12, -1.95)]), 20, 0.022, 6), solid('#cfe4f0', 0.3)); group.add(tube);
  // The IV drip.
  group.add(cylinder(0.02, 0.02, 2, metal, 0.75, 1, -2.4, 6));
  group.add(box(0.16, 0.24, 0.05, new THREE.MeshPhysicalMaterial({ color: '#f0f8ff', transmission: 0.5, transparent: true }), 0.75, 1.9, -2.4, false));

  // ---------------------------------------------------------------- light
  const lamp = new THREE.PointLight('#ffcf9a', 2.2, 6, 2); lamp.position.set(1.4, 1.3, -2.3); group.add(lamp);
  const moon = new THREE.DirectionalLight('#9ab8e8', 0.9); moon.position.set(-8, 4, -1); moon.target.position.set(0, 0, -1); group.add(moon, moon.target);
  const room = new THREE.HemisphereLight('#c8d0e0', '#4a4038', 0.55); group.add(room);
  // The light from above, at the end.
  const heaven = new THREE.PointLight('#fff4dc', 0, 18, 1.2); heaven.position.set(0, 5, -2); group.add(heaven);
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 1.4, 8, 24, 1, true), new THREE.MeshBasicMaterial({ map: softGlowTexture() ?? undefined, color: '#fff4dc', transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false }));
  shaft.position.set(0, 4.5, -2.2); group.add(shaft);
  const motes = particles(low ? 60 : 160, { color: '#ffeeb8', size: 0.06, area: 3, height: [0.8, 6], rise: 0.7, sway: 0.2, opacity: 0 });
  motes.points.position.set(0, 0, -2.2); group.add(motes.points);

  // ---------------------------------------------------------------- the trace on the monitor
  let lastBeat = -1, x = 0;
  const trace: number[] = new Array(512).fill(144);
  function drawMonitor(t: number, dt: number) {
    // The pen moves 140 px per second; the beat is the classic P-QRS-T.
    const since = (() => { let s = 99; for (const b of BEATS) if (t >= b) s = t - b; return s; })();
    const flat = t >= FLATLINE;
    const step = Math.max(1, Math.round(140 * dt));
    for (let i = 0; i < step; i++) {
      const u = since + (i / step) * dt;
      let y = 0;
      if (!flat && u < 0.4) {
        y += 6 * Math.exp(-(((u - 0.04) / 0.02) ** 2));
        y -= 8 * Math.exp(-(((u - 0.085) / 0.006) ** 2));
        y += 70 * Math.exp(-(((u - 0.1) / 0.008) ** 2));
        y -= 18 * Math.exp(-(((u - 0.115) / 0.008) ** 2));
        y += 12 * Math.exp(-(((u - 0.26) / 0.04) ** 2));
      }
      trace[x] = 150 - y + (flat ? 0 : Math.sin(t * 40 + i) * 0.6);
      x = (x + 1) % 512;
    }
    ecgCtx.fillStyle = '#031208'; ecgCtx.fillRect(0, 0, 512, 288);
    ecgCtx.strokeStyle = 'rgba(40,120,60,.25)'; ecgCtx.lineWidth = 1;
    for (let gx = 0; gx < 512; gx += 32) { ecgCtx.beginPath(); ecgCtx.moveTo(gx, 0); ecgCtx.lineTo(gx, 288); ecgCtx.stroke(); }
    for (let gy = 0; gy < 288; gy += 32) { ecgCtx.beginPath(); ecgCtx.moveTo(0, gy); ecgCtx.lineTo(512, gy); ecgCtx.stroke(); }
    ecgCtx.strokeStyle = flat ? '#ff4a3a' : '#5aff8a'; ecgCtx.lineWidth = 3; ecgCtx.beginPath();
    for (let i = 0; i < 512; i++) { const k = (x + i) % 512; if (i === 0) ecgCtx.moveTo(i, trace[k]); else if (i < 500) ecgCtx.lineTo(i, trace[k]); }
    ecgCtx.stroke();
    // The rate falls with every beat.
    const n = BEATS.filter(b => t >= b).length;
    const rate = flat ? 0 : [72, 72, 68, 62, 55, 46, 38, 30][n] ?? 30;
    ecgCtx.fillStyle = flat ? '#ff4a3a' : '#5aff8a'; ecgCtx.font = '700 64px ui-monospace, monospace'; ecgCtx.textAlign = 'right';
    ecgCtx.fillText(String(rate), 500, 70);
    ecgCtx.font = '700 22px ui-monospace, monospace'; ecgCtx.fillText('FC', 500, 100);
    ecgCtx.fillStyle = flat ? '#ff4a3a' : '#7ad8ff'; ecgCtx.textAlign = 'left'; ecgCtx.font = '700 28px ui-monospace, monospace';
    ecgCtx.fillText(flat ? 'SpO2 --' : `SpO2 ${Math.max(60, 94 - n * 4)}`, 14, 270);
    if (flat && Math.floor(t * 2) % 2 === 0) { ecgCtx.fillStyle = '#ff4a3a'; ecgCtx.font = '800 26px ui-monospace, monospace'; ecgCtx.fillText('ASISTOLIA', 14, 36); }
    ecgTex.needsUpdate = true;
    if (n > 0 && BEATS[n - 1] !== lastBeat) lastBeat = BEATS[n - 1];
  }

  // ---------------------------------------------------------------- the ten seconds
  let breathAt = 0.1;
  const out = { cam: new THREE.Vector3(), look: new THREE.Vector3(), fov: 42, flash: 0 };
  return {
    group,
    /** Everyone in the room, the soul included (checked by the no-ghost QA). */
    people: [...people, soul],
    /** Advances the film to `t`; returns the camera and what sounds now. */
    frame(t: number, dt: number) {
      const beats: IntroBeat[] = [];
      for (const b of BEATS) if (t - dt < b && t >= b) beats.push('beep');
      if (t - dt < FLATLINE && t >= FLATLINE) beats.push('flat');
      if (t - dt < 7.4 && t >= 7.4) beats.push('soul');
      if (t - dt < 9.2 && t >= 9.2) beats.push('light');
      // The ventilator breathes slower and slower, and stops with the heart.
      const breathEvery = 1.6 + t * 0.16;
      if (t < FLATLINE && t >= breathAt) { beats.push('breath'); breathAt = t + breathEvery; }
      const phase = t < FLATLINE ? Math.max(0, Math.sin(((t - breathAt + breathEvery) / breathEvery) * Math.PI)) : 0;
      bellows.scale.y = 0.55 + phase * 0.6; bellows.position.y = 1.08 + bellows.scale.y * 0.2;
      drawMonitor(t, dt);

      // The family: grief grows; at the end they hold each other.
      for (const p of kin) animatePerson(p, dt, 0, false);
      if (t > FLATLINE && kin[1].pose !== 'cry') { setPose(kin[1], 'cry', true); setPose(kin[2], 'cry'); setMood(kin[0], 'sad'); }
      animatePerson(you, dt * (t < FLATLINE ? 1 - t / 9 : 0), 0, false);

      // The soul: it shows at 7.2 s and rises, standing up as it goes.
      const k = smooth(7.2, 9.8, t);
      if (t > 7.15) {
        soul.root.visible = true;
        const up = smooth(7.2, 8.4, t);
        // It appears just above the blanket, never through it, and rises from there.
        soul.root.position.set(0, SOUL_Y + k * 3.9, -1.17 - up * 0.5);
        if (up > 0.5 && soul.pose !== 'stand') setPose(soul, 'stand');
        soul.root.rotation.x = 0;
        animatePerson(soul, dt, 0, false);
        animateFigure(soul, t);
      }
      ceilingMat.opacity = 1 - smooth(8.1, 9, t);
      ceiling.visible = ceilingMat.opacity > 0.02; panel.visible = ceiling.visible;
      heaven.intensity = smooth(7.3, 9.6, t) * 60;
      (shaft.material as THREE.MeshBasicMaterial).opacity = smooth(7.3, 8.6, t) * 0.75;
      (motes.points.material as THREE.PointsMaterial).opacity = smooth(7.4, 8.4, t) * 0.9;
      motes.update(t, dt, 0, 0);
      lamp.intensity = 2.2 * (1 - smooth(7, 8.5, t) * 0.6);

      // The camera: in from the door, down to the hands, the monitor, then up with the soul.
      let cx: number, cy: number, cz: number, lx: number, ly: number, lz: number;
      if (t < 3.2) {
        const a = smooth(0, 3.2, t);
        cx = lerp(2.6, 1.9, a); cy = lerp(1.75, 1.45, a); cz = lerp(2.6, 1.2, a);
        lx = lerp(0, 0.2, a); ly = lerp(1.0, 0.9, a); lz = lerp(-1.6, -1.8, a);
      } else if (t < 5.6) {
        // The hands: your daughter holds yours.
        const a = smooth(3.2, 5.6, t);
        cx = lerp(1.9, -0.45, a); cy = lerp(1.45, 1.42, a); cz = lerp(1.2, -0.45, a);
        lx = lerp(0.2, 0.25, a); ly = lerp(0.9, 0.95, a); lz = lerp(-1.8, -1.85, a);
      } else if (t < 7.3) {
        // The monitor over your shoulder, and the line going flat.
        const a = smooth(5.6, 6.4, t);
        cx = lerp(-0.45, 0.55, a); cy = lerp(1.42, 1.6, a); cz = lerp(-0.45, -0.9, a);
        lx = lerp(0.25, -0.8, a); ly = lerp(0.95, 1.3, a); lz = lerp(-1.85, -2.3, a);
      } else {
        // Up with the soul, into the light.
        const a = smooth(7.3, 10, t);
        cx = lerp(0.55, 1.6, a); cy = lerp(1.6, 2.6 + a * 3.2, a); cz = lerp(-0.9, 0.6, a);
        lx = lerp(-0.8, 0, smooth(7.3, 8, t)); ly = lerp(1.3, 6.5, a); lz = lerp(-2.3, -1.6, a);
      }
      out.cam.set(cx, cy, cz); out.look.set(lx, ly, lz);
      out.fov = t < 3.2 ? 46 : t < 7.3 ? 38 : 38 + smooth(7.3, 10, t) * 18;
      out.flash = smooth(9.1, 9.9, t);
      return { ...out, beats };
    },
  };
}
export type Intro = ReturnType<typeof buildIntro>;
