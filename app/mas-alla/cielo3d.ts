// Más allá · El Cielo. Not a postcard: a sea of clouds that holds you up,
// lit from below by a sun that does not burn, with islands floating far away
// and shafts of light falling slowly. In the south the Puertas de Perla, wide
// open, and Gabriel reading files at his lectern; the garden where Lucía
// plants what she never had time for; the Archivo, shelves of marble as tall
// as cathedrals with the book of every life; the silver river of forgetting
// where Don Ernesto fishes; in the north the Cumbre: the endless banquet that
// Mateo serves and the mirador, a hole in the clouds through which the Earth
// is seen, small and blue.
import * as THREE from 'three';
import { box, canvas, cylinder, random, solid, type Light } from '../mundo-3d/kit3d';
import { carved, finishPlace, lightWaterMaterial, particles, populate, skyDome, cloudTexture, slabTexture, type Place3D } from './common3d';
import { softGlowTexture } from './figures3d';

export function buildCielo({ low, shadows }: { low: boolean; shadows: boolean }): Place3D {
  const group = new THREE.Group();
  const r = random(2026);
  const anims: ((t: number, dt: number) => void)[] = [];

  // ---------------------------------------------------------------- sky
  group.add(skyDome([[0, '#2f5fb4'], [0.3, '#7fa6e0'], [0.47, '#f6dcae'], [0.53, '#ffc98a'], [0.6, '#f3e2c4'], [1, '#fff4dc']], 430, (ctx, w, h) => {
    // Thin high clouds and a halo where the sun is.
    for (let i = 0; i < 40; i++) { ctx.fillStyle = `rgba(255,255,255,${0.05 + r() * 0.1})`; ctx.beginPath(); ctx.ellipse(r() * w, h * (0.18 + r() * 0.26), 60 + r() * 160, 6 + r() * 12, 0, 0, Math.PI * 2); ctx.fill(); }
    const g = ctx.createRadialGradient(w * 0.5, h * 0.46, 0, w * 0.5, h * 0.46, h * 0.4);
    g.addColorStop(0, 'rgba(255,255,240,.95)'); g.addColorStop(0.2, 'rgba(255,236,190,.5)'); g.addColorStop(1, 'rgba(255,236,190,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
  }));
  const sunDisc = new THREE.Sprite(new THREE.SpriteMaterial({ map: softGlowTexture(), color: '#fff6d8', transparent: true, depthWrite: false, fog: false, toneMapped: false, blending: THREE.AdditiveBlending }));
  sunDisc.scale.set(120, 120, 1); sunDisc.position.set(0, 70, -300);
  group.add(sunDisc);

  // ---------------------------------------------------------------- the floor of clouds
  const cloudFloor = cloudTexture(11);
  cloudFloor.repeat.set(5, 3.5);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(240, 164), new THREE.MeshStandardMaterial({ map: cloudFloor, roughness: 0.6, metalness: 0.05 }));
  floor.rotation.x = -Math.PI / 2; floor.position.z = 38; floor.receiveShadow = true;
  group.add(floor);
  // Puffs of cloud: soft lumps along the edges and all over the floor, and
  // a sea of them far below the world, beyond the bounds.
  const puffGeo = new THREE.IcosahedronGeometry(1, 2);
  const puffMat = new THREE.MeshStandardMaterial({ color: '#ffffff', emissive: '#fff1de', emissiveIntensity: 0.45, roughness: 1, flatShading: false });
  const puffCount = low ? 260 : 620;
  const puffs = new THREE.InstancedMesh(puffGeo, puffMat, puffCount);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), v = new THREE.Vector3(), s = new THREE.Vector3();
  for (let i = 0; i < puffCount; i++) {
    let x: number, z: number, y: number, size: number;
    if (i < puffCount * 0.45) {
      // The rim: a bank of cloud all round the world.
      const a = r() * Math.PI * 2, d = 66 + r() * 30;
      x = Math.sin(a) * d * 1.05; z = Math.cos(a) * d + 3; y = -1 + r() * 4; size = 4 + r() * 7;
      // Nothing hides the view of the Earth beyond the mirador.
      if (z < -38) y -= 34;
    } else if (i < puffCount * 0.75) {
      // Low lumps on the floor, kept off the paths and away from the people.
      const a = r() * Math.PI * 2, d = 44 + r() * 20;
      x = Math.sin(a) * d; z = Math.cos(a) * d + 3; y = -0.6; size = 0.8 + r() * 1.6;
      if (Math.abs(x) < 10 && z > 20) x += x < 0 ? -12 : 12;
      if (z < -38) z = -38 - r() * 4;
    } else {
      // The sea of clouds far below.
      const a = r() * Math.PI * 2, d = 110 + r() * 200;
      x = Math.sin(a) * d; z = Math.cos(a) * d; y = -26 - r() * 18; size = 10 + r() * 22;
    }
    v.set(x, y, z); s.set(size * (1.2 + r() * 0.6), size * (0.45 + r() * 0.25), size * (1 + r() * 0.5));
    q.setFromEuler(new THREE.Euler(0, r() * 6, 0));
    puffs.setMatrixAt(i, m4.compose(v, q, s));
  }
  puffs.receiveShadow = true;
  group.add(puffs);

  // Paths of gold-veined marble from the gate to every place.
  const marbleTex = slabTexture(23);
  marbleTex.repeat.set(1, 10);
  const marble = new THREE.MeshStandardMaterial({ map: marbleTex, roughness: 0.35, metalness: 0.05 });
  const path = (x0: number, z0: number, x1: number, z1: number, w = 3.2) => {
    const len = Math.hypot(x1 - x0, z1 - z0);
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, 0.06, len), marble);
    m.position.set((x0 + x1) / 2, 0.03, (z0 + z1) / 2); m.rotation.y = Math.atan2(x1 - x0, z1 - z0); m.receiveShadow = true;
    group.add(m);
  };
  path(0, 60, 0, -46, 4.2);
  path(0, 30, -24, 26); path(0, 18, 24, 16); path(-2, -2, -20, -2); path(0, -30, -22, -30); path(0, -30, 24, -36);

  // ---------------------------------------------------------------- the Puertas de Perla
  const pearl = new THREE.MeshPhysicalMaterial({ color: '#f7f1ea', roughness: 0.18, metalness: 0.1, clearcoat: 1, clearcoatRoughness: 0.15, iridescence: 0.8, iridescenceIOR: 1.3, sheen: 0.4, sheenColor: new THREE.Color('#ffd9f0') });
  const gold = new THREE.MeshStandardMaterial({ color: '#e8bf5a', metalness: 1, roughness: 0.22, emissive: '#6a4a10', emissiveIntensity: 0.25 });
  for (const side of [-1, 1]) {
    const px = side * 5.75;
    const col = cylinder(1.15, 1.35, 16, pearl, px, 8, 37.25, 32); group.add(col);
    group.add(cylinder(1.6, 1.6, 0.8, gold, px, 0.4, 37.25, 32));
    group.add(cylinder(1.6, 1.2, 0.9, gold, px, 16.3, 37.25, 32));
    const orb = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 16), pearl); orb.position.set(px, 17.8, 37.25); group.add(orb);
    // The two open leaves of the gate: golden bars with scrollwork.
    const leaf = new THREE.Group();
    for (let i = 0; i < 7; i++) leaf.add(cylinder(0.07, 0.07, 11, gold, 0.45 + i * 0.55, 5.6, 0, 8));
    for (const y of [1.2, 5.6, 10.2]) leaf.add(box(4, 0.16, 0.16, gold, 2.1, y, 0, false));
    for (let i = 0; i < 3; i++) { const ring = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.06, 8, 24), gold); ring.position.set(0.9 + i * 1.2, 8, 0); leaf.add(ring); }
    leaf.position.set(side * 4.4, 0, 37.25); leaf.rotation.y = side > 0 ? Math.PI - 1.15 : 1.15;
    if (side > 0) leaf.scale.x = 1;
    group.add(leaf);
  }
  const arch = new THREE.Mesh(new THREE.TorusGeometry(5.75, 0.45, 16, 64, Math.PI), gold);
  arch.position.set(0, 16, 37.25); group.add(arch);
  const arch2 = new THREE.Mesh(new THREE.TorusGeometry(6.6, 0.18, 10, 64, Math.PI), pearl);
  arch2.position.set(0, 16, 37.25); group.add(arch2);
  const gateSign = carved('EL CIELO', { w: 7, h: 1.4, bg: 'rgba(0,0,0,0)', fg: '#fff3cf', glowColor: '#ffd27a' });
  gateSign.position.set(0, 19.4, 37.3); group.add(gateSign);
  const gateSign2 = gateSign.clone(); gateSign2.rotation.y = Math.PI; gateSign2.position.z = 37.2; group.add(gateSign2);
  // Gabriel's lectern with the open file.
  group.add(box(0.6, 1.1, 0.8, gold, 3, 0.55, 42, shadows));
  const file = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 0.5), new THREE.MeshBasicMaterial({ map: canvas(256, 180, ctx => { ctx.fillStyle = '#fbf6e8'; ctx.fillRect(0, 0, 256, 180); ctx.fillStyle = '#7a5a2a'; ctx.font = 'italic 18px Georgia'; for (let i = 0; i < 9; i++) ctx.fillRect(16, 20 + i * 17, 90 + ((i * 53) % 120), 3); ctx.fillText('Expediente', 140, 24); }), toneMapped: false }));
  file.position.set(3, 1.16, 42); file.rotation.x = -Math.PI / 2 + 0.35; file.rotation.z = Math.PI / 2; group.add(file);

  // ---------------------------------------------------------------- shafts of light
  const rayMat = new THREE.MeshBasicMaterial({ map: canvas(64, 256, ctx => { const g = ctx.createLinearGradient(0, 0, 0, 256); g.addColorStop(0, 'rgba(255,250,230,0)'); g.addColorStop(0.3, 'rgba(255,246,214,.5)'); g.addColorStop(1, 'rgba(255,246,214,0)'); ctx.fillStyle = g; ctx.fillRect(0, 0, 64, 256); }), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, toneMapped: false, fog: false });
  const rays: THREE.Mesh[] = [];
  for (const [x, z, w] of [[0, 40, 9], [-24, 26, 7], [24, 16, 8], [-20, -2, 6], [-22, -30, 8], [24, -36, 9], [40, 10, 12], [-42, -10, 12]] as [number, number, number][]) {
    const ray = new THREE.Mesh(new THREE.ConeGeometry(w, 60, 24, 1, true), rayMat.clone());
    ray.position.set(x, 30, z); ray.rotation.z = 0.12; group.add(ray); rays.push(ray);
  }
  anims.push(t => rays.forEach((ray, i) => { (ray.material as THREE.MeshBasicMaterial).opacity = 0.09 + Math.sin(t * 0.35 + i * 1.9) * 0.05; ray.rotation.y = t * 0.02 + i; }));

  // ---------------------------------------------------------------- floating islands
  const grass = solid('#b9d98a', 0.9), rock = solid('#d8cfc0', 0.95);
  const islands: { g: THREE.Group; y: number; p: number }[] = [];
  for (let i = 0; i < (low ? 5 : 9); i++) {
    const g = new THREE.Group();
    const size = 6 + r() * 10;
    const under = new THREE.Mesh(new THREE.ConeGeometry(size, size * 1.6, 9), rock); under.rotation.x = Math.PI; under.position.y = -size * 0.8; g.add(under);
    const top = new THREE.Mesh(new THREE.CylinderGeometry(size, size * 0.96, 1, 9), grass); g.add(top);
    // A small temple of columns on top.
    for (let k = 0; k < 6; k++) { const a = (k / 6) * Math.PI * 2; g.add(cylinder(0.25, 0.25, 3.2, pearl, Math.sin(a) * 2.2, 2.1, Math.cos(a) * 2.2, 10)); }
    const dome = new THREE.Mesh(new THREE.SphereGeometry(2.6, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), gold); dome.position.y = 3.7; g.add(dome);
    // Little waterfalls of light off the edge.
    const fall = new THREE.Mesh(new THREE.PlaneGeometry(1.2, size * 2), new THREE.MeshBasicMaterial({ map: softGlowTexture() ?? undefined, color: '#e8f4ff', transparent: true, opacity: 0.5, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false }));
    fall.position.set(size * 0.95, -size, 0); g.add(fall);
    const a = r() * Math.PI * 2, d = 95 + r() * 110;
    const y = 10 + r() * 40;
    g.position.set(Math.sin(a) * d, y, Math.cos(a) * d);
    group.add(g); islands.push({ g, y, p: r() * 6 });
  }
  anims.push(t => islands.forEach(i => { i.g.position.y = i.y + Math.sin(t * 0.25 + i.p) * 1.5; i.g.rotation.y = t * 0.01 + i.p; }));

  // ---------------------------------------------------------------- the garden (Lucía)
  const blossom = [new THREE.MeshStandardMaterial({ color: '#ffe4ef', emissive: '#ffd0e2', emissiveIntensity: 0.25, roughness: 0.8 }), new THREE.MeshStandardMaterial({ color: '#fff6e8', emissive: '#fff0d0', emissiveIntensity: 0.25, roughness: 0.8 })];
  const bark = solid('#8a6a52', 0.9);
  for (const [x, z] of [[-30, 30], [-28, 21], [-19, 32], [-33, 25], [-17, 20], [-26, 34]] as [number, number][]) {
    group.add(cylinder(0.22, 0.34, 3.4, bark, x, 1.7, z, 8));
    for (let k = 0; k < 6; k++) {
      const b = new THREE.Mesh(new THREE.IcosahedronGeometry(1.2 + r() * 0.8, 1), blossom[k % 2]);
      b.position.set(x + (r() - 0.5) * 2.4, 3.6 + r() * 1.8, z + (r() - 0.5) * 2.4); b.castShadow = shadows; group.add(b);
    }
  }
  // Flowers: tiny glowing heads in beds around the garden.
  const flowerGeo = new THREE.SphereGeometry(0.09, 6, 4);
  const flowerColors = ['#ff8fb0', '#ffd36b', '#b28dff', '#ffffff', '#8fd6ff', '#ff6b6b'];
  for (let c = 0; c < flowerColors.length; c++) {
    const n = low ? 60 : 140;
    const flowers = new THREE.InstancedMesh(flowerGeo, new THREE.MeshStandardMaterial({ color: flowerColors[c], emissive: flowerColors[c], emissiveIntensity: 0.5 }), n);
    for (let i = 0; i < n; i++) {
      const a = r() * Math.PI * 2, d = 3 + r() * 11;
      const x = -25 + Math.sin(a) * d, z = 26 + Math.cos(a) * d;
      if (Math.hypot(x + 24, z - 26) < 3.4) { flowers.setMatrixAt(i, m4.makeScale(0, 0, 0)); continue; }
      flowers.setMatrixAt(i, m4.makeTranslation(x, 0.25 + r() * 0.2, z));
    }
    group.add(flowers);
  }
  // The fountain of light.
  group.add(cylinder(1.6, 1.8, 0.7, pearl, -31, 0.35, 16, 28));
  const jet = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.35, 3.2, 12, 1, true), new THREE.MeshBasicMaterial({ color: '#dff2ff', transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }));
  jet.position.set(-31, 2.2, 16); group.add(jet);
  anims.push(t => { jet.scale.y = 1 + Math.sin(t * 3) * 0.08; });

  // ---------------------------------------------------------------- the Archivo (Uriel)
  const shelfWood = new THREE.MeshStandardMaterial({ color: '#efe8da', roughness: 0.4 });
  const spines = canvas(512, 512, ctx => {
    ctx.fillStyle = '#3a2a1e'; ctx.fillRect(0, 0, 512, 512);
    const cols = ['#7a2a2a', '#2a4a7a', '#2a6a4a', '#8a6a2a', '#5a2a6a', '#e8dcc0', '#1e1e24', '#a84a2a', '#3a5a6a'];
    for (let row = 0; row < 8; row++) {
      let x = 0;
      while (x < 512) { const w = 10 + r() * 16; const h = 48 + r() * 12; ctx.fillStyle = cols[Math.floor(r() * cols.length)]; ctx.fillRect(x, row * 64 + 64 - h, w - 1, h); ctx.fillStyle = 'rgba(232,191,90,.75)'; ctx.fillRect(x + 2, row * 64 + 64 - h + 8, w - 5, 2); x += w; }
      ctx.fillStyle = '#efe8da'; ctx.fillRect(0, row * 64 + 60, 512, 4);
    }
  }, true);
  spines.repeat.set(3, 2);
  const booksMat = new THREE.MeshStandardMaterial({ map: spines, roughness: 0.8 });
  for (const [x0, x1, z0, z1] of [[28, 29, 6, 26], [31.5, 32.5, 6, 26], [35, 36, 6, 26]]) {
    const h = 14;
    const m = new THREE.Mesh(new THREE.BoxGeometry(x1 - x0, h, z1 - z0), [booksMat, booksMat, shelfWood, shelfWood, shelfWood, shelfWood]);
    m.position.set((x0 + x1) / 2, h / 2, (z0 + z1) / 2); m.castShadow = shadows; group.add(m);
  }
  for (const [z0, z1] of [[4.5, 5.5], [26.5, 27.5]]) group.add(box(3, 9, z1 - z0, shelfWood, 25.5, 4.5, (z0 + z1) / 2, shadows));
  // Books flying in a slow spiral above the Archivo.
  const flying: { m: THREE.Mesh; a: number; rad: number; y: number }[] = [];
  const pageMat = new THREE.MeshStandardMaterial({ color: '#fbf6e8', emissive: '#fff2d0', emissiveIntensity: 0.5, side: THREE.DoubleSide });
  for (let i = 0; i < (low ? 14 : 30); i++) {
    const b = new THREE.Group();
    const cover = new THREE.MeshStandardMaterial({ color: ['#7a2a2a', '#2a4a7a', '#2a6a4a', '#8a6a2a'][i % 4], roughness: 0.6 });
    const l = box(0.5, 0.04, 0.7, cover, -0.24, 0, 0, false); l.rotation.z = 0.5; b.add(l);
    const rr = box(0.5, 0.04, 0.7, cover, 0.24, 0, 0, false); rr.rotation.z = -0.5; b.add(rr);
    b.add(box(0.4, 0.06, 0.62, pageMat, 0, 0.06, 0, false));
    group.add(b);
    flying.push({ m: b as unknown as THREE.Mesh, a: r() * 6.28, rad: 3 + r() * 7, y: 6 + r() * 10 });
  }
  anims.push(t => flying.forEach((f, i) => { const a = f.a + t * (0.12 + (i % 5) * 0.02); f.m.position.set(30 + Math.sin(a) * f.rad, f.y + Math.sin(t + i) * 0.6, 16 + Math.cos(a) * f.rad); f.m.rotation.y = -a; f.m.rotation.z = Math.sin(t * 4 + i) * 0.25; }));
  // A floating giant open book: the book of your life.
  const big = new THREE.Group();
  const bigPage = new THREE.MeshStandardMaterial({ map: canvas(512, 360, ctx => { ctx.fillStyle = '#fbf6e8'; ctx.fillRect(0, 0, 512, 360); ctx.fillStyle = '#6a4a1e'; ctx.font = 'italic 30px Georgia'; ctx.textAlign = 'center'; ctx.fillText('Capítulo I', 128, 50); ctx.fillText('Capítulo XII', 384, 50); for (let i = 0; i < 12; i++) { ctx.fillRect(30, 80 + i * 22, 196 - ((i * 37) % 60), 3); ctx.fillRect(286, 80 + i * 22, 196 - ((i * 53) % 70), 3); } }), emissive: '#fff4dc', emissiveIntensity: 0.4, side: THREE.DoubleSide });
  const pages = new THREE.Mesh(new THREE.PlaneGeometry(4, 2.8), bigPage); pages.rotation.x = -0.5; big.add(pages);
  big.position.set(22, 4, 10); group.add(big);
  anims.push(t => { big.position.y = 4 + Math.sin(t * 0.8) * 0.3; big.rotation.y = Math.sin(t * 0.2) * 0.3; });

  // ---------------------------------------------------------------- the river of forgetting (Ernesto)
  const waterMat = lightWaterMaterial();
  for (const [x0, x1] of [[-58, -4], [0, 14]] as [number, number][]) {
    const w = new THREE.Mesh(new THREE.PlaneGeometry(x1 - x0, 5), waterMat);
    w.rotation.x = -Math.PI / 2; w.position.set((x0 + x1) / 2, 0.08, -7.5); group.add(w);
  }
  // The river runs on into the clouds at both ends.
  const mist = new THREE.Mesh(new THREE.PlaneGeometry(10, 5), new THREE.MeshBasicMaterial({ map: softGlowTexture() ?? undefined, color: '#eaf4ff', transparent: true, opacity: 0.8, depthWrite: false, toneMapped: false }));
  mist.position.set(14, 1.5, -7.5); mist.rotation.y = Math.PI / 2; group.add(mist);
  anims.push(t => { waterMat.uniforms.uTime.value = t; });
  // The bridge of light over the gap.
  const bridgeMat = new THREE.MeshStandardMaterial({ color: '#fff4dc', emissive: '#ffe2a0', emissiveIntensity: 0.6, roughness: 0.3, transparent: true, opacity: 0.9 });
  const bridge = new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.12, 6.4), bridgeMat); bridge.position.set(-2, 0.12, -7.5); group.add(bridge);
  for (const side of [-4.2, 0.2]) for (let k = 0; k < 5; k++) group.add(cylinder(0.05, 0.05, 1, gold, side, 0.6, -10.2 + k * 1.35, 6));
  for (const side of [-4.2, 0.2]) { const rail = cylinder(0.06, 0.06, 6.2, gold, side, 1.1, -7.5, 6); rail.rotation.x = Math.PI / 2; group.add(rail); }
  // Ernesto's stool, rod and bucket.
  group.add(cylinder(0.3, 0.3, 0.12, solid('#8a6a52'), -20, 0.06, -4.6, 10));

  // ---------------------------------------------------------------- the Cumbre: banquet (Mateo) and mirador (Azael)
  const cloth = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.75, emissive: '#fff6ea', emissiveIntensity: 0.15 });
  const table = box(6.5, 0.85, 6, cloth, -27.75, 0.425, -30, shadows); group.add(table);
  for (let i = 0; i < 8; i++) {
    const x = -30.4 + (i % 4) * 1.5, z = i < 4 ? -32.2 : -27.8;
    group.add(cylinder(0.22, 0.22, 0.03, gold, x, 0.87, z, 16));
    const candle = cylinder(0.04, 0.04, 0.3, solid('#fff8e8'), x + 0.5, 1, z, 6); group.add(candle);
    const flame = new THREE.Sprite(new THREE.SpriteMaterial({ map: softGlowTexture(), color: '#ffcf70', transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false })); flame.scale.setScalar(0.3); flame.position.set(x + 0.5, 1.22, z); group.add(flame);
  }
  // Fruit and bread that never run out.
  for (let i = 0; i < 22; i++) { const f = new THREE.Mesh(new THREE.SphereGeometry(0.1 + r() * 0.06, 8, 6), solid(['#d8433a', '#e8a33a', '#7ab64a', '#8a3a8a'][i % 4], 0.5)); f.position.set(-30.8 + r() * 5.8, 0.95, -30.6 + r() * 1.2); group.add(f); }
  for (const z of [-34.2, -25.8]) for (let k = 0; k < 4; k++) { const x = -30.4 + k * 1.5; if (k === 1 || k === 3) continue; group.add(box(0.5, 0.5, 0.5, gold, x, 0.25, z + (z < -30 ? -0.35 : 0.35), false)); }
  // Columns and a ring of light over the Cumbre.
  for (const [x, z] of [[-8, -32], [8, -32], [-8, -40], [8, -40]] as [number, number][]) { group.add(cylinder(0.6, 0.7, 12, pearl, x, 6, z, 24)); group.add(cylinder(0.9, 0.9, 0.5, gold, x, 12.2, z, 24)); }
  const crown = new THREE.Mesh(new THREE.TorusGeometry(10, 0.25, 12, 80), new THREE.MeshBasicMaterial({ color: '#fff0c0', toneMapped: false }));
  crown.rotation.x = Math.PI / 2; crown.position.set(0, 12.8, -36); group.add(crown);
  // The mirador: the world ends in a balustrade over the void, and the Earth far below.
  const balusters = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.08, 0.12, 1, 8), pearl, 130);
  for (let i = 0; i < 130; i++) balusters.setMatrixAt(i, m4.makeTranslation(-58 + i * 0.9, 0.5, -42.5));
  group.add(balusters);
  group.add(box(116, 0.14, 0.3, gold, 0, 1.05, -42.5, false));
  const edge = new THREE.Mesh(new THREE.BoxGeometry(116, 3, 1.2), new THREE.MeshStandardMaterial({ color: '#f4f1ea', emissive: '#fff1de', emissiveIntensity: 0.3 }));
  edge.position.set(0, -1.5, -43.4); group.add(edge);
  const earthTex = canvas(512, 256, ctx => {
    ctx.fillStyle = '#1f5fa8'; ctx.fillRect(0, 0, 512, 256);
    ctx.fillStyle = '#4f8a44';
    for (let i = 0; i < 18; i++) { ctx.beginPath(); ctx.ellipse(r() * 512, 40 + r() * 176, 20 + r() * 60, 10 + r() * 34, r() * 3, 0, Math.PI * 2); ctx.fill(); }
    ctx.fillStyle = 'rgba(255,255,255,.6)';
    for (let i = 0; i < 30; i++) { ctx.beginPath(); ctx.ellipse(r() * 512, r() * 256, 20 + r() * 50, 3 + r() * 6, r(), 0, Math.PI * 2); ctx.fill(); }
  });
  const earth = new THREE.Mesh(new THREE.SphereGeometry(9, 48, 24), new THREE.MeshStandardMaterial({ map: earthTex, roughness: 0.8, emissive: '#1a3a6a', emissiveIntensity: 0.6, fog: false }));
  earth.position.set(24, -46, -120); earth.scale.setScalar(2.4); group.add(earth);
  const atmo = new THREE.Sprite(new THREE.SpriteMaterial({ map: softGlowTexture(), color: '#7fb8ff', transparent: true, opacity: 0.7, depthWrite: false, blending: THREE.AdditiveBlending, fog: false, toneMapped: false }));
  atmo.scale.setScalar(64); atmo.position.copy(earth.position); group.add(atmo);
  anims.push(t => { earth.rotation.y = t * 0.05; });

  // ---------------------------------------------------------------- the way back
  const portal = new THREE.Mesh(new THREE.TorusGeometry(2, 0.12, 10, 48), new THREE.MeshBasicMaterial({ color: '#ffffff', toneMapped: false }));
  portal.position.set(0, 2.2, 58.5); group.add(portal);
  const backSign = carved('AL UMBRAL', { w: 3, h: 0.6, bg: 'rgba(0,0,0,0)', fg: '#7a5a2a' }); backSign.position.set(0, 4.7, 58.4); backSign.rotation.y = Math.PI; group.add(backSign);

  // ---------------------------------------------------------------- motes of gold everywhere
  const motes = particles(low ? 260 : 700, { color: '#ffe8a8', size: 0.1, area: 60, height: [0.3, 14], rise: 0.25, sway: 0.4, opacity: 0.85 });
  group.add(motes.points);
  let px = 0, pz = 50;
  group.userData.follow = (x: number, z: number) => { px = x; pz = z; };
  anims.push((t, dt) => motes.update(t, dt, px, pz));

  const { talkers, walkers } = populate(group, 'cielo', true, shadows);
  const light: Light = {
    sky: ['#a9c8f0', '#fff4dc'],
    fog: ['#e6c9a0', 80, 320],
    sun: { color: '#ffe2b0', intensity: 2.5, at: [-30, 22, 26] },
    hemi: ['#bcd0ff', '#c89a5e', 0.62],
    exposure: 0.82,
  };
  return finishPlace('cielo', group, light, talkers, walkers, [], (t, dt) => { for (const a of anims) a(t, dt); });
}

