// Charlas 3D · conversation circles for every person and every landmark of a
// 3D world. A world creates one controller, tells it where its people are
// (every frame) and which places stand out, and calls update() from its loop.
// The controller draws the circles, shows «E · Hablar», opens the question
// card and keeps the world's keys still while the card is open.

import * as THREE from 'three';
import { createElement } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { charlaFor } from './charlas.mjs';
import CharlaCard, { type Charla } from './CharlaCard';
import type { CharlaPlace } from './lugar';

export { onFreeGround, type CharlaPlace } from './lugar';

export type CharlaPerson = { key: string; x: number; z: number; y?: number };
type Options = {
  parent: THREE.Object3D;
  host: HTMLElement;
  world: string;
  level: () => string;
  people?: () => Iterable<CharlaPerson>;
  /** Fixed landmarks, or a getter when they change (a new region, an event). */
  places?: CharlaPlace[] | (() => CharlaPlace[]);
  /** Ring colours: people and places. */
  colors?: { person?: string; place?: string };
};

const PERSON_RADIUS = 1.7;
const SHOW = 26;
const POOL = 40;

export function createCharlas(o: Options) {
  const extraPlaces: CharlaPlace[] = [];
  const placesNow = () => [...(typeof o.places === 'function' ? o.places() : o.places ?? []), ...extraPlaces];
  const personGeo = new THREE.RingGeometry(0.62, 0.78, 36);
  const placeGeo = new THREE.RingGeometry(1.5, 1.82, 44);
  const personMat = new THREE.MeshBasicMaterial({ color: o.colors?.person ?? '#62e6ff', transparent: true, opacity: 0.75, depthWrite: false });
  const placeMat = new THREE.MeshBasicMaterial({ color: o.colors?.place ?? '#62e6ff', transparent: true, opacity: 0.85, depthWrite: false });
  const bubble = bubbleTexture();
  const bubbleMat = new THREE.SpriteMaterial({ map: bubble, transparent: true, depthWrite: false });
  const group = new THREE.Group();
  group.name = 'charlas';
  o.parent.add(group);

  const pool: THREE.Mesh[] = [];
  for (let i = 0; i < POOL; i++) {
    const m = new THREE.Mesh(personGeo, personMat);
    m.rotation.x = -Math.PI / 2; m.visible = false; m.renderOrder = 2;
    group.add(m); pool.push(m);
  }
  const placeMeshes = new Map<CharlaPlace, { ring: THREE.Mesh; tag: THREE.Sprite }>();
  const meshFor = (p: CharlaPlace) => {
    let m = placeMeshes.get(p);
    if (!m) {
      const ring = new THREE.Mesh(p.r ? new THREE.RingGeometry(p.r * 0.82, p.r, 44) : placeGeo, placeMat);
      ring.rotation.x = -Math.PI / 2; ring.renderOrder = 2;
      const tag = new THREE.Sprite(bubbleMat);
      tag.scale.set(0.9, 0.9, 1);
      group.add(ring, tag);
      m = { ring, tag };
      placeMeshes.set(p, m);
    }
    return m;
  };

  // ---------------------------------------------------------------- UI
  const box = document.createElement('div');
  box.className = 'charlas-ui';
  o.host.appendChild(box);
  const root: Root = createRoot(box);
  let near: { key: string; title: string; place?: CharlaPlace } | null = null;
  let open: Charla | null = null;
  let disposed = false;
  const render = () => {
    if (disposed) return;
    root.render(createElement(CharlaCard, { near: near ? near.title : null, charla: open, onOpen: openNear, onClose: close }));
  };
  function openNear() {
    if (!near || open) return;
    const c = charlaFor({ world: o.world, key: near.key, level: o.level(), place: near.place });
    open = { ...c, key: near.key };
    // The world's held keys are cleared the way a lost focus clears them.
    window.dispatchEvent(new Event('blur'));
    render();
  }
  function close() { open = null; render(); }

  // While the card is open, keys belong to the card; E opens it when near.
  const onKey = (e: KeyboardEvent) => {
    if (open) {
      if (e.key === 'Escape') close();
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag !== 'BUTTON' || (e.key !== 'Enter' && e.key !== ' ')) e.stopImmediatePropagation();
      return;
    }
    if (near && (e.key === 'e' || e.key === 'E') && !e.repeat) { e.stopImmediatePropagation(); openNear(); }
  };
  window.addEventListener('keydown', onKey, true);
  render();

  let clock = 0;
  return {
    addPlaces(list: CharlaPlace[]) { extraPlaces.push(...list); },
    isOpen: () => Boolean(open),
    /** free: the world lets the learner talk now and has no target of its own. */
    update(player: { x: number; z: number; y?: number }, dt: number, free: boolean) {
      clock += dt;
      const pulse = 0.55 + Math.sin(clock * 3) * 0.2;
      personMat.opacity = pulse + 0.15;
      placeMat.opacity = pulse + 0.25;
      // The nearest circle wins, measured against each circle's own size.
      let best: typeof near = null, bestD = 1;
      let used = 0;
      if (o.people) for (const p of o.people()) {
        const d = Math.hypot(p.x - player.x, p.z - player.z);
        if (d > SHOW || used >= POOL) continue;
        const m = pool[used++];
        m.visible = free;
        m.position.set(p.x, (p.y ?? 0) + 0.05, p.z);
        if (d / PERSON_RADIUS < bestD) { bestD = d / PERSON_RADIUS; best = { key: `${o.world}:p:${p.key}`, title: '' }; }
      }
      for (let i = used; i < POOL; i++) pool[i].visible = false;
      const list = placesNow();
      for (const [p, m] of placeMeshes) if (!list.includes(p)) { m.ring.visible = false; m.tag.visible = false; }
      for (const p of list) {
        const on = !p.when || p.when();
        const d = Math.hypot(p.x - player.x, p.z - player.z);
        const show = on && d < SHOW * 2.5;
        const m = show || placeMeshes.has(p) ? meshFor(p) : null;
        if (m) {
          // The bubble marks the place from afar; close up it would cover the view.
          m.ring.visible = show && free; m.tag.visible = show && free && d > (p.r ?? 1.82) + 3;
          m.ring.position.set(p.x, (p.y ?? 0) + 0.06, p.z);
          m.tag.position.set(p.x, (p.y ?? 0) + 3.1 + Math.sin(clock * 2 + p.x) * 0.15, p.z);
        }
        const reach = p.r ?? 1.82;
        if (on && d / reach < bestD) { bestD = d / reach; best = { key: `${o.world}:l:${p.id}`, title: p.title, place: p }; }
      }
      if (!free || open) best = null;
      if (best && !best.place) best.title = charlaFor({ world: o.world, key: best.key, level: o.level() }).title;
      if ((best?.key ?? null) !== (near?.key ?? null)) { near = best; render(); }
    },
    dispose() {
      disposed = true;
      window.removeEventListener('keydown', onKey, true);
      o.parent.remove(group);
      personGeo.dispose(); placeGeo.dispose(); personMat.dispose(); placeMat.dispose(); bubbleMat.dispose(); bubble.dispose();
      for (const { ring } of placeMeshes.values()) if (ring.geometry !== placeGeo) ring.geometry.dispose();
      const r = root;
      queueMicrotask(() => { r.unmount(); box.remove(); });
    },
  };
}

export type Charlas = ReturnType<typeof createCharlas>;

function bubbleTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  if (g) {
    g.fillStyle = '#62e6ff';
    g.beginPath(); g.ellipse(32, 27, 26, 20, 0, 0, Math.PI * 2); g.fill();
    g.beginPath(); g.moveTo(18, 40); g.lineTo(12, 58); g.lineTo(30, 44); g.fill();
    g.fillStyle = '#0d2a33';
    for (const x of [20, 32, 44]) { g.beginPath(); g.arc(x, 27, 4, 0, Math.PI * 2); g.fill(); }
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
