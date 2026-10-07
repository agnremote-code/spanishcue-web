'use client';

// The 3D shelf of the object choice: the seven props on small plinths under
// a warm key light and a cool night rim, each turning slowly. The hovered or
// focused one rises, turns faster and glows; the chosen one gets an amber
// ring. One WebGL canvas, loaded on demand by ItemPicker, which keeps the
// accessible controls (the canvas itself is decorative for screen readers).
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { useEffect, useRef } from 'react';
import { createItemModel, disposeItem, type ItemId } from './items3d';
import { ITEM_ORDER } from './ItemIcon';

export type ItemStageProps = {
  selected: ItemId | null;
  focused: ItemId | null;
  onPick: (id: ItemId) => void;
  onFocus: (id: ItemId) => void;
  /** Called when WebGL cannot start; the picker falls back to illustrations. */
  onFail?: () => void;
};

// How each prop is shown: a tilt that reads well while turning, and how big
// it is relative to the plinth.
const DISPLAY: Record<ItemId, { tilt: [number, number, number]; fit: number }> = {
  lapiz: { tilt: [0.25, 0, -0.95], fit: 0.96 },
  libro: { tilt: [0, 0, 0.06], fit: 0.82 },
  gas: { tilt: [0.12, 0, -0.12], fit: 0.8 },
  granada: { tilt: [0.1, 0, 0.14], fit: 0.74 },
  pistola: { tilt: [0, 0, 0.12], fit: 0.94 },
  cuchillo: { tilt: [0, 0, 0.62], fit: 0.98 },
  corazon: { tilt: [0, 0, 0], fit: 0.72 },
};

const SPACING_X = 1.3;
const SPACING_Y = 1.55;
const FOV = 26;

type Slot = {
  id: ItemId;
  root: THREE.Group;
  lift: THREE.Group;
  spin: THREE.Group;
  ring: THREE.Mesh<THREE.TorusGeometry, THREE.MeshBasicMaterial>;
  pool: THREE.Mesh<THREE.CircleGeometry, THREE.MeshBasicMaterial>;
  glow: THREE.Sprite;
  hit: THREE.Mesh;
  pulse: THREE.Object3D | null;
  height: number;
  angle: number;
  speed: number;
  rise: number;
  shine: number;
};

function glowTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 128;
  const ctx = canvas.getContext('2d')!;
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, 'rgba(255,214,150,0.95)');
  g.addColorStop(0.35, 'rgba(240,180,92,0.35)');
  g.addColorStop(1, 'rgba(240,180,92,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export default function ItemStage(props: ItemStageProps) {
  const live = useRef(props);
  useEffect(() => { live.current = props; });
  const mount = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = mount.current;
    if (!host) return;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    } catch {
      live.current.onFail?.();
      return;
    }
    const reducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    const canvas = renderer.domElement;
    canvas.className = 'na-pick-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    host.appendChild(canvas);

    const scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(renderer);
    const room = new RoomEnvironment();
    const envMap = pmrem.fromScene(room, 0.04).texture;
    room.dispose();
    pmrem.dispose();
    scene.environment = envMap;
    scene.environmentIntensity = 0.32;

    // Warm key from the front left, a cool night rim from behind, a dim sky.
    scene.add(new THREE.HemisphereLight('#8aa4d6', '#1d140d', 0.55));
    const key = new THREE.DirectionalLight('#ffd29a', 2.6);
    key.position.set(-3, 6, 6);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    key.shadow.radius = 4;
    key.shadow.bias = -0.0004;
    scene.add(key, key.target);
    const rim = new THREE.DirectionalLight('#7fb4ff', 2.4);
    rim.position.set(4, 3.5, -5);
    scene.add(rim);
    const under = new THREE.PointLight('#f0b45c', 0, 3, 2);
    scene.add(under);

    const camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 60);
    const glowMap = glowTexture();
    const plinthGeometry = new THREE.CylinderGeometry(0.42, 0.47, 0.14, 56);
    const plinthMaterial = new THREE.MeshStandardMaterial({ color: '#1c1714', roughness: 0.55, metalness: 0.25 });
    const topGeometry = new THREE.CylinderGeometry(0.405, 0.405, 0.01, 56);
    const topMaterial = new THREE.MeshStandardMaterial({ color: '#2a231d', roughness: 0.85, metalness: 0 });
    const ringGeometry = new THREE.TorusGeometry(0.418, 0.011, 8, 72);
    const poolGeometry = new THREE.CircleGeometry(0.4, 48);
    const hitGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1.5, 12);
    const hitMaterial = new THREE.MeshBasicMaterial({ visible: false });
    const shared = [plinthGeometry, plinthMaterial, topGeometry, topMaterial, ringGeometry, poolGeometry, hitGeometry, hitMaterial, glowMap];

    const slots: Slot[] = ITEM_ORDER.map(id => {
      const root = new THREE.Group();
      const plinth = new THREE.Mesh(plinthGeometry, plinthMaterial);
      plinth.position.y = -0.07;
      plinth.receiveShadow = true;
      const top = new THREE.Mesh(topGeometry, topMaterial);
      top.position.y = 0.005;
      top.receiveShadow = true;
      const ring = new THREE.Mesh(ringGeometry, new THREE.MeshBasicMaterial({ color: '#f0b45c', transparent: true, opacity: 0.18 }));
      ring.rotation.x = Math.PI / 2;
      ring.position.y = 0.006;
      const pool = new THREE.Mesh(poolGeometry, new THREE.MeshBasicMaterial({ map: glowMap, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
      pool.rotation.x = -Math.PI / 2;
      pool.position.y = 0.012;
      const hit = new THREE.Mesh(hitGeometry, hitMaterial);
      hit.position.y = 0.6;
      hit.userData.item = id;
      root.add(plinth, top, ring, pool, hit);

      // The model, tilted for display and fitted to a common size.
      const shown = DISPLAY[id];
      const model = createItemModel(id);
      const tilt = new THREE.Group();
      tilt.rotation.set(...shown.tilt);
      tilt.add(model);
      tilt.updateMatrixWorld(true);
      const box = new THREE.Box3();
      // Sprites have no geometry worth measuring; fit the solid parts only.
      model.traverse(child => { if ((child as THREE.Mesh).isMesh) box.expandByObject(child); });
      const size = box.getSize(new THREE.Vector3());
      const scale = shown.fit / Math.max(size.x, size.y, size.z);
      const center = box.getCenter(new THREE.Vector3());
      const fitted = new THREE.Group();
      fitted.add(tilt);
      tilt.position.set(-center.x, -center.y, -center.z);
      fitted.scale.setScalar(scale);
      model.traverse(child => { if ((child as THREE.Mesh).isMesh) child.castShadow = true; });
      const height = size.y * scale;
      const spin = new THREE.Group();
      spin.add(fitted);
      const lift = new THREE.Group();
      lift.position.y = 0.09 + height / 2;
      lift.add(spin);
      const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowMap, color: id === 'corazon' ? '#ff7a96' : '#ffcf8a', transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
      glow.scale.setScalar(1.5);
      glow.renderOrder = -1;
      lift.add(glow);
      root.add(lift);
      scene.add(root);
      const pulse = model.userData.pulse ? model : null;
      return { id, root, lift, spin, ring, pool, glow, hit, pulse, height, angle: 0.55 + ITEM_ORDER.indexOf(id) * 0.4, speed: 0.5, rise: 0, shine: 0 };
    });

    // Layout: one row when the stage is wide, otherwise rows of four.
    const layout = () => {
      const width = host.clientWidth || 1;
      const height = host.clientHeight || 1;
      const aspect = width / height;
      renderer.setSize(width, height, false);
      camera.aspect = aspect;
      const cols = aspect >= 2.1 ? 7 : 4;
      const rows = Math.ceil(slots.length / cols);
      slots.forEach((slot, i) => {
        const row = Math.floor(i / cols);
        const inRow = Math.min(cols, slots.length - row * cols);
        const col = i - row * cols;
        slot.root.position.set((col - (inRow - 1) / 2) * SPACING_X, -row * SPACING_Y, row * 0.25);
      });
      const halfW = (cols * SPACING_X) / 2;
      const halfH = (rows * SPACING_Y) / 2 + 0.1;
      const t = Math.tan(THREE.MathUtils.degToRad(FOV / 2));
      const distance = Math.max(halfH / t, halfW / (t * aspect)) + 0.4;
      const midY = -((rows - 1) * SPACING_Y) / 2 + 0.55;
      camera.position.set(0, midY + distance * 0.2, distance);
      camera.lookAt(0, midY, 0);
      camera.updateProjectionMatrix();
      key.target.position.set(0, midY - 0.5, 0);
      key.shadow.camera.left = -halfW - 1;
      key.shadow.camera.right = halfW + 1;
      key.shadow.camera.top = halfH + 2;
      key.shadow.camera.bottom = -halfH - 2;
      key.shadow.camera.updateProjectionMatrix();
    };
    layout();
    const observer = new ResizeObserver(layout);
    observer.observe(host);

    // Pointer: hover focuses, a click (not a drag) picks.
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    let hovered: ItemId | null = null;
    let downAt: { x: number; y: number } | null = null;
    const hitTest = (event: PointerEvent): ItemId | null => {
      const rect = canvas.getBoundingClientRect();
      pointer.set(((event.clientX - rect.left) / rect.width) * 2 - 1, -((event.clientY - rect.top) / rect.height) * 2 + 1);
      raycaster.setFromCamera(pointer, camera);
      const found = raycaster.intersectObjects(slots.map(slot => slot.hit), false)[0];
      return (found?.object.userData.item as ItemId | undefined) ?? null;
    };
    const onMove = (event: PointerEvent) => {
      const id = hitTest(event);
      canvas.style.cursor = id ? 'pointer' : '';
      if (id !== hovered) {
        hovered = id;
        if (id && event.pointerType === 'mouse') live.current.onFocus(id);
      }
    };
    const onLeave = () => { hovered = null; canvas.style.cursor = ''; };
    const onDown = (event: PointerEvent) => { downAt = { x: event.clientX, y: event.clientY }; };
    const onUp = (event: PointerEvent) => {
      if (!downAt || Math.hypot(event.clientX - downAt.x, event.clientY - downAt.y) > 8) { downAt = null; return; }
      downAt = null;
      const id = hitTest(event);
      if (id) live.current.onPick(id);
    };
    canvas.addEventListener('pointermove', onMove);
    canvas.addEventListener('pointerleave', onLeave);
    canvas.addEventListener('pointerdown', onDown);
    canvas.addEventListener('pointerup', onUp);

    const timer = new THREE.Timer();
    timer.connect(document);
    let frame = 0;
    let elapsed = 0;
    const tick = (now?: number) => {
      frame = requestAnimationFrame(tick);
      timer.update(now);
      const dt = Math.min(0.05, timer.getDelta());
      elapsed += dt;
      const still = reducedQuery.matches;
      const { selected, focused } = live.current;
      let chosen: Slot | null = null;
      for (const [i, slot] of slots.entries()) {
        const active = slot.id === focused || slot.id === hovered;
        const picked = slot.id === selected;
        if (picked) chosen = slot;
        const rise = active ? 0.24 : picked ? 0.12 : 0;
        const speed = active ? 2.6 : picked ? 1 : 0.45;
        const ease = still ? 1 : Math.min(1, dt * 7);
        slot.rise += (rise - slot.rise) * ease;
        slot.speed += (speed - slot.speed) * Math.min(1, dt * 4);
        slot.shine += ((active ? 1 : picked ? 0.55 : 0) - slot.shine) * (still ? 1 : Math.min(1, dt * 6));
        if (!still) slot.angle += slot.speed * dt;
        // Reduced motion: a still three-quarter view, the active one turned to face us.
        slot.spin.rotation.y = still ? (active ? 0.2 : 0.55) : slot.angle;
        const bob = still ? 0 : Math.sin(elapsed * 1.5 + i * 0.9) * 0.025;
        slot.lift.position.y = 0.09 + slot.height / 2 + slot.rise + bob;
        slot.glow.material.opacity = slot.shine * 0.55;
        slot.glow.scale.setScalar(1.2 + slot.shine * 0.5);
        slot.ring.material.opacity = picked ? 1 : 0.16 + slot.shine * 0.5;
        slot.ring.material.color.set(picked ? '#ffc56e' : '#f0b45c');
        slot.pool.material.opacity = picked ? 0.4 : slot.shine * 0.3;
        if (slot.pulse) {
          const beat = still ? 0 : Math.pow(Math.max(0, Math.sin(elapsed * 3.2)), 8);
          slot.pulse.scale.setScalar(1 + beat * 0.08);
        }
      }
      // A warm light under the chosen prop.
      if (chosen) {
        under.position.set(chosen.root.position.x, chosen.root.position.y + 0.25, chosen.root.position.z + 0.45);
        under.intensity += (1.4 - under.intensity) * Math.min(1, dt * 6);
      } else under.intensity *= 0.9;
      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(frame);
      timer.dispose();
      observer.disconnect();
      canvas.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('pointerleave', onLeave);
      canvas.removeEventListener('pointerdown', onDown);
      canvas.removeEventListener('pointerup', onUp);
      for (const slot of slots) {
        slot.ring.material.dispose();
        slot.pool.material.dispose();
        slot.glow.material.dispose();
        disposeItem(slot.lift.children[0]);
      }
      for (const item of shared) item.dispose();
      envMap.dispose();
      renderer.dispose();
      canvas.remove();
    };
  }, []);

  return <div className="na-pick-stage" ref={mount} />;
}
