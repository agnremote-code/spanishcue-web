'use client';

// Madrid infectada · the plan of the city in a corner of the screen: blocks,
// streets, squares and the river, the white circles (grey when done), the
// survivors (green, grey when done), the Metro (red) and the mascot. Tap it
// to see it big. Drawn from city.mjs, the same data as the 3D city.
import { useEffect, useMemo, useRef, useState } from 'react';
import { CITY_BOUNDS, ENCOUNTERS, RIVER, allSolids, citySpots, metroEntrances, PLACES } from './city.mjs';

const B = CITY_BOUNDS;
const SCALE = 0.5; // pixels per metre on the small map
type Props = { x: number; z: number; heading: number; done: string[]; spotZone: Record<string, string>; target: { x: number; z: number } | null; under: boolean };

function drawBase() {
  const w = Math.round((B.maxX - B.minX) * SCALE), h = Math.round((B.maxZ - B.minZ) * SCALE);
  const c = document.createElement('canvas');
  c.width = w * 2; c.height = h * 2;
  const ctx = c.getContext('2d')!;
  ctx.scale(2, 2);
  const X = (x: number) => (x - B.minX) * SCALE, Y = (z: number) => (B.maxZ - z) * SCALE;
  ctx.fillStyle = '#8f8a80'; ctx.fillRect(0, 0, w, h);
  for (const p of PLACES) { ctx.fillStyle = p.ground === 'park' ? '#7f8c66' : '#a49e90'; ctx.fillRect(X(p.area.x0), Y(p.area.z1), (p.area.x1 - p.area.x0) * SCALE, (p.area.z1 - p.area.z0) * SCALE); }
  for (const s of allSolids()) {
    ctx.fillStyle = s.water ? '#4f6f7a' : s.building?.startsWith('jardin') ? '#4d5e3c' : s.building ? '#3a3632' : '#5a554e';
    ctx.fillRect(X(s.x0), Y(s.z1), Math.max(0.6, (s.x1 - s.x0) * SCALE), Math.max(0.6, (s.z1 - s.z0) * SCALE));
  }
  ctx.fillStyle = '#4f6f7a'; ctx.fillRect(0, Y(RIVER.z1), w, (RIVER.z1 - RIVER.z0) * SCALE);
  return { canvas: c, w, h };
}

export function CityMap({ x, z, heading, done, spotZone, target, under }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);
  const [big, setBig] = useState(false);
  const base = useMemo(() => (typeof document === 'undefined' ? null : drawBase()), []);
  const spots = useMemo(() => citySpots(), []);
  const metro = useMemo(() => metroEntrances(), []);
  useEffect(() => {
    const c = ref.current;
    if (!c || !base) return;
    const k = big ? 2.2 : 1;
    c.width = base.w * k * 2; c.height = base.h * k * 2;
    const ctx = c.getContext('2d')!;
    ctx.scale(k * 2, k * 2);
    ctx.drawImage(base.canvas, 0, 0, base.w, base.h);
    const X = (px: number) => (px - B.minX) * SCALE, Y = (pz: number) => (B.maxZ - pz) * SCALE;
    for (const m of metro) { ctx.save(); ctx.translate(X(m.at.x), Y(m.at.z)); ctx.rotate(Math.PI / 4); ctx.fillStyle = '#d6241f'; ctx.fillRect(-2.2, -2.2, 4.4, 4.4); ctx.restore(); }
    for (const e of ENCOUNTERS) { const isDone = done.includes(`calle/${e.id}`); ctx.fillStyle = isDone ? '#9a9a94' : '#7dffa8'; ctx.beginPath(); ctx.arc(X(e.x), Y(e.z), isDone ? 1.4 : 2, 0, 6.3); ctx.fill(); }
    for (const s of spots) { const isDone = done.includes(`${spotZone[s.id]}/${s.id}`); ctx.strokeStyle = isDone ? '#9a9a94' : '#ffffff'; ctx.lineWidth = 1.4; ctx.beginPath(); ctx.arc(X(s.x), Y(s.z), 3, 0, 6.3); ctx.stroke(); }
    if (target) { ctx.strokeStyle = '#9effc0'; ctx.lineWidth = 1.6; ctx.beginPath(); ctx.arc(X(target.x), Y(target.z), 5.5, 0, 6.3); ctx.stroke(); }
    if (!under) {
      ctx.save(); ctx.translate(X(x), Y(z)); ctx.rotate(heading);
      ctx.fillStyle = '#ffd23a'; ctx.strokeStyle = '#1b1b1b'; ctx.lineWidth = 0.8;
      ctx.beginPath(); ctx.moveTo(0, -5); ctx.lineTo(3.6, 3.6); ctx.lineTo(0, 1.8); ctx.lineTo(-3.6, 3.6); ctx.closePath(); ctx.fill(); ctx.stroke();
      ctx.restore();
    }
  }, [x, z, heading, done, spotZone, target, under, big, base, spots, metro]);
  if (!base) return null;
  return <button type="button" className={`mi-map${big ? ' is-big' : ''}`} onClick={() => setBig(b => !b)} aria-label={big ? 'Cerrar el plano' : 'Ver el plano de Madrid en grande'} aria-pressed={big}>
    <canvas ref={ref} style={{ width: base.w * (big ? 2.2 : 1), height: base.h * (big ? 2.2 : 1) }} />
    {big && <span className="mi-map-key"><i className="k-spot" />Escenas <i className="k-surv" />Sobrevivientes <i className="k-metro" />Metro <i className="k-you" />Tú</span>}
    {under && <span className="mi-map-under">Estás bajo tierra · Metro de Chamberí</span>}
  </button>;
}
