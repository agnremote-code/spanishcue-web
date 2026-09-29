'use client';

import { memo, type KeyboardEvent, type ReactNode } from 'react';
import { BUILDINGS, PALETTES, PLACES, PROPS, VIEWBOX, depthOf, iso, lit, points, type Building, type Prop } from './scene.mjs';

type Place = { id: string; name: string; short: string };
type Props = {
  places: Place[];
  visited: string[];
  done: string[];
  position: string | null;
  standing: { gx: number; gy: number };
  focus: string | null;
  weather: 'clear' | 'rain';
  busOut: boolean;
  interactive: boolean;
  onOpen: (id: string) => void;
  showLabels?: boolean;
  showWalker?: boolean;
};

const face = (corners: [number, number, number][]) => points(corners.map(([gx, gy, z]) => iso(gx, gy, z)));

function Windows({ b, side }: { b: Building; side: 'left' | 'right' }) {
  if (!b.windows) return null;
  const length = side === 'left' ? b.x1 - b.x0 : b.y1 - b.y0;
  const cols = Math.max(1, Math.round(length / 0.62));
  const rows = Math.max(1, Math.floor((b.h - 18) / 26));
  const cells: ReactNode[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const u0 = ((c + 0.28) / cols) * length;
      const u1 = ((c + 0.72) / cols) * length;
      const z0 = 14 + r * 26;
      const z1 = z0 + 14;
      const at = (u: number, z: number): [number, number, number] => side === 'left' ? [b.x0 + u, b.y1, z] : [b.x1, b.y0 + u, z];
      const on = lit(b.x0 * 31 + b.y0 * 17 + r * 7 + c * 3 + (side === 'left' ? 1 : 2), b.windows);
      cells.push(<polygon key={`${side}-${r}-${c}`} className={on ? 'na-window is-lit' : 'na-window'} points={face([at(u0, z0), at(u1, z0), at(u1, z1), at(u0, z1)])} />);
      if (b.balconies && on && r > 0 && c % 2 === 0) {
        cells.push(<polyline key={`${side}-${r}-${c}-b`} className="na-balcony" points={face([at(u0 - 0.05, z0 - 2), at(u1 + 0.05, z0 - 2)])} />);
      }
    }
  }
  return <g>{cells}</g>;
}

function BuildingShape({ b }: { b: Building }) {
  const p = PALETTES[b.palette];
  const { x0, y0, x1, y1, h } = b;
  const awning = b.awning;
  return <g className={`na-building na-building-${b.palette}`}>
    <polygon points={face([[x0, y1, 0], [x1, y1, 0], [x1, y1, h], [x0, y1, h]])} fill={p.left} />
    <polygon points={face([[x1, y0, 0], [x1, y1, 0], [x1, y1, h], [x1, y0, h]])} fill={p.right} />
    <polygon points={face([[x0, y0, h], [x1, y0, h], [x1, y1, h], [x0, y1, h]])} fill={p.top} />
    <polyline className="na-edge" points={face([[x0, y1, h], [x1, y1, h], [x1, y0, h]])} stroke={p.trim} />
    <Windows b={b} side="left" />
    <Windows b={b} side="right" />
    {b.storefront === 'right' && <>
      <polygon className="na-shopglow" points={face([[x1 + 0.9, y0 - 0.2, 0], [x1 + 0.9, y1 + 0.2, 0], [x1, y1, 0], [x1, y0, 0]])} />
      <polygon className="na-storefront" points={face([[x1, y0 + 0.12, 4], [x1, y1 - 0.12, 4], [x1, y1 - 0.12, 30], [x1, y0 + 0.12, 30]])} />
    </>}
    {awning && <>
      <polygon className="na-doorlight" points={face([[x0 + 0.2, y1, 4], [x1 - 0.2, y1, 4], [x1 - 0.2, y1, 30], [x0 + 0.2, y1, 30]])} />
      <polygon points={face([[x0 + 0.08, y1, 38], [x1 - 0.08, y1, 38], [x1 - 0.08, y1 + 0.42, 30], [x0 + 0.08, y1 + 0.42, 30]])} fill={awning.color} />
      {Array.from({ length: Math.round((x1 - x0) / 0.25) }, (_, i) => {
        const a = x0 + 0.08 + i * 0.25;
        return i % 2 ? null : <polygon key={i} points={face([[a, y1, 38], [a + 0.12, y1, 38], [a + 0.12, y1 + 0.42, 30], [a, y1 + 0.42, 30]])} fill={awning.stripe} opacity=".55" />;
      })}
    </>}
    {b.sign && (() => {
      const at = b.storefront === 'right' ? iso(x1, (y0 + y1) / 2, 36) : iso((x0 + x1) / 2, y1, h - 6);
      const skew = b.storefront === 'right' ? -26.6 : 26.6;
      return <text className="na-sign" x={at.x} y={at.y} transform={`skewY(${skew})`} style={{ transformBox: 'fill-box', transformOrigin: 'center' }} textAnchor="middle">{b.sign}</text>;
    })()}
    {b.rooftop && <Rooftop b={b} />}
  </g>;
}

function Rooftop({ b }: { b: Building }) {
  const { x0, y0, x1, y1, h } = b;
  const bulbs: ReactNode[] = [];
  for (let i = 0; i <= 10; i++) {
    const t = i / 10;
    const a = iso(x0 + 0.1 + (x1 - x0 - 0.2) * t, y0 + 0.2 + (y1 - y0 - 0.4) * t, h + 22 - Math.sin(t * Math.PI * 3) * 6);
    bulbs.push(<circle key={i} cx={a.x} cy={a.y} r="2.2" className="na-bulb" />);
  }
  const rail = [[x0, y1, h], [x1, y1, h], [x1, y0, h]] as [number, number, number][];
  const railTop = rail.map(([gx, gy]) => [gx, gy, h + 10]) as [number, number, number][];
  return <g>
    <polyline className="na-rail" points={face(railTop)} />
    {rail.map(([gx, gy], i) => { const a = iso(gx, gy, h); const c = iso(gx, gy, h + 10); return <line key={i} className="na-rail" x1={a.x} y1={a.y} x2={c.x} y2={c.y} />; })}
    <polyline className="na-string" points={points(Array.from({ length: 11 }, (_, i) => { const t = i / 10; return iso(x0 + 0.1 + (x1 - x0 - 0.2) * t, y0 + 0.2 + (y1 - y0 - 0.4) * t, h + 22 - Math.sin(t * Math.PI * 3) * 6); }))} />
    {[0, 1].map(end => {
      const gx = end ? x1 - 0.1 : x0 + 0.1;
      const gy = end ? y1 - 0.2 : y0 + 0.2;
      const base = iso(gx, gy, h);
      const top = iso(gx, gy, h + 24);
      return <line key={end} className="na-pole thin" x1={base.x} y1={base.y} x2={top.x} y2={top.y} />;
    })}
    {bulbs}
    <Figure gx={(x0 + x1) / 2 - 0.2} gy={(y0 + y1) / 2 + 0.3} z={h} tone="#d9a57a" />
    <Figure gx={(x0 + x1) / 2 + 0.3} gy={(y0 + y1) / 2 + 0.9} z={h} tone="#8fa7b5" />
  </g>;
}

function Figure({ gx, gy, z = 0, tone }: { gx: number; gy: number; z?: number; tone: string }) {
  const a = iso(gx, gy, z);
  return <g className="na-figure">
    <ellipse cx={a.x} cy={a.y} rx="6" ry="2.6" className="na-shadow" />
    <path d={`M${a.x - 4.5},${a.y} L${a.x - 3.5},${a.y - 17} Q${a.x},${a.y - 21} ${a.x + 3.5},${a.y - 17} L${a.x + 4.5},${a.y} Z`} fill="#2b2f36" />
    <circle cx={a.x} cy={a.y - 22} r="4" fill={tone} />
  </g>;
}

function PropShape({ p, weather, busOut }: { p: Prop; weather: Props['weather']; busOut: boolean }) {
  const a = iso(p.gx, p.gy);
  switch (p.type) {
    case 'lamp':
    case 'farol': {
      const tall = p.type === 'farol' ? 70 : 52;
      const top = iso(p.gx, p.gy, tall);
      return <g>
        <ellipse cx={a.x} cy={a.y} rx={p.type === 'farol' ? 58 : 40} ry={p.type === 'farol' ? 29 : 20} className="na-pool" />
        <line x1={a.x} y1={a.y} x2={top.x} y2={top.y} className="na-pole" />
        <circle cx={top.x} cy={top.y} r={p.type === 'farol' ? 26 : 16} className="na-halo" />
        <path d={`M${top.x - 5},${top.y} h10 l-2,-7 h-6 Z`} className="na-lamp" />
      </g>;
    }
    case 'person':
      return <Figure gx={p.gx} gy={p.gy} tone={p.tone || '#d6a77c'} />;
    case 'tree': {
      const t = iso(p.gx, p.gy, 30);
      return <g>
        <ellipse cx={a.x} cy={a.y} rx="16" ry="7" className="na-shadow" />
        <line x1={a.x} y1={a.y} x2={t.x} y2={t.y + 8} className="na-trunk" />
        <ellipse cx={t.x} cy={t.y} rx="19" ry="17" fill="#27402f" />
        <ellipse cx={t.x - 5} cy={t.y - 6} rx="11" ry="9" fill="#3b5a3d" />
        <ellipse cx={t.x + 6} cy={t.y + 2} rx="8" ry="6" fill="#4f6c42" opacity=".8" />
      </g>;
    }
    case 'bench':
      return <polygon className="na-bench" points={face([[p.gx - 0.35, p.gy, 6], [p.gx + 0.35, p.gy, 6], [p.gx + 0.35, p.gy + 0.14, 6], [p.gx - 0.35, p.gy + 0.14, 6]])} />;
    case 'tables':
      return <g>{[-0.45, 0.15, 0.7].map((d, i) => {
        const t = iso(p.gx + d, p.gy, 9);
        return <g key={i}><ellipse cx={t.x} cy={t.y} rx="7" ry="3.2" className="na-table" /><line x1={t.x} y1={t.y} x2={t.x} y2={t.y + 9} className="na-pole thin" /></g>;
      })}</g>;
    case 'stall':
      return <g>
        <polygon className="na-stall" points={face([[p.gx - 0.3, p.gy, 12], [p.gx + 0.3, p.gy, 12], [p.gx + 0.3, p.gy + 0.25, 12], [p.gx - 0.3, p.gy + 0.25, 12]])} />
        {[0, 1, 2, 3].map(i => { const f = iso(p.gx - 0.2 + i * 0.13, p.gy + 0.1, 15); return <circle key={i} cx={f.x} cy={f.y} r="2.6" fill={['#e0785f', '#f0c05a', '#e79bb0', '#f5efe0'][i]} />; })}
      </g>;
    case 'fountain': {
      const w = weather === 'rain';
      return <g>
        <ellipse cx={a.x} cy={a.y} rx="44" ry="22" className="na-basin" />
        <ellipse cx={a.x} cy={a.y - 3} rx="36" ry="17" className={w ? 'na-water is-rain' : 'na-water'} />
        <rect x={a.x - 3} y={a.y - 24} width="6" height="22" className="na-basin" />
        <ellipse cx={a.x} cy={a.y - 25} rx="10" ry="4" className="na-basin" />
      </g>;
    }
    case 'shelter': {
      const b: Building = { id: 'shelter', x0: p.gx, y0: p.gy, x1: p.gx + 0.28, y1: p.gy + 1.1, h: 26, palette: 'slate', windows: 0 };
      const s = iso(p.gx + 0.28, p.gy + 0.55, 30);
      return <g>
        <polygon className="na-glass" points={face([[b.x1, b.y0, 0], [b.x1, b.y1, 0], [b.x1, b.y1, 22], [b.x1, b.y0, 22]])} />
        <polygon className="na-roofline" points={face([[b.x0 - 0.05, b.y0 - 0.05, 26], [b.x1 + 0.1, b.y0 - 0.05, 26], [b.x1 + 0.1, b.y1 + 0.05, 26], [b.x0 - 0.05, b.y1 + 0.05, 26]])} />
        <rect x={s.x - 3} y={s.y - 16} width="22" height="12" rx="2" className={busOut ? 'na-busign is-out' : 'na-busign'} />
      </g>;
    }
    case 'taxi':
    case 'car': {
      const taxi = p.type === 'taxi';
      const x0 = p.gx, y0 = p.gy, x1 = p.gx + 1.1, y1 = p.gy + 0.55;
      const body = taxi ? { top: '#b88a2c', left: '#e3ad3f', right: '#a57a26' } : { top: '#2f3a44', left: '#4a5866', right: '#34404b' };
      const head = iso(x1 + 0.05, y0 + 0.28, 6);
      return <g>
        {taxi && <ellipse cx={head.x + 26} cy={head.y + 14} rx="34" ry="12" className="na-headlight" />}
        <polygon points={face([[x0, y1, 0], [x1, y1, 0], [x1, y1, 10], [x0, y1, 10]])} fill={body.left} />
        <polygon points={face([[x1, y0, 0], [x1, y1, 0], [x1, y1, 10], [x1, y0, 10]])} fill={body.right} />
        <polygon points={face([[x0, y0, 10], [x1, y0, 10], [x1, y1, 10], [x0, y1, 10]])} fill={body.top} />
        <polygon points={face([[x0 + 0.25, y0 + 0.06, 18], [x1 - 0.3, y0 + 0.06, 18], [x1 - 0.3, y1 - 0.06, 18], [x0 + 0.25, y1 - 0.06, 18]])} fill={body.top} />
        <polygon className="na-carglass" points={face([[x0 + 0.25, y1 - 0.06, 10], [x1 - 0.3, y1 - 0.06, 10], [x1 - 0.3, y1 - 0.06, 18], [x0 + 0.25, y1 - 0.06, 18]])} />
        {taxi && (() => { const s = iso((x0 + x1) / 2 - 0.02, (y0 + y1) / 2, 23); return <rect x={s.x - 6} y={s.y - 3} width="12" height="5" rx="1.5" className="na-taxisign" />; })()}
      </g>;
    }
    default:
      return null;
  }
}

function Ground() {
  const block = (x0: number, y0: number, x1: number, y1: number, cls: string) =>
    <polygon className={cls} points={face([[x0, y0, 0], [x1, y0, 0], [x1, y1, 0], [x0, y1, 0]])} />;
  const dashes: ReactNode[] = [];
  for (let i = 0; i < 12; i++) {
    if (i >= 4 && i < 8) continue;
    dashes.push(<polyline key={`a${i}`} className="na-lane" points={face([[i + 0.2, 6, 0], [i + 0.65, 6, 0]])} />);
    dashes.push(<polyline key={`c${i}`} className="na-lane" points={face([[6, i + 0.2, 0], [6, i + 0.65, 0]])} />);
  }
  const zebra: ReactNode[] = [];
  for (let i = 0; i < 6; i++) {
    const t = 5.15 + i * 0.3;
    zebra.push(<polygon key={`z1${i}`} className="na-zebra" points={face([[4.7, t, 0], [5, t, 0], [5, t + 0.15, 0], [4.7, t + 0.15, 0]])} />);
    zebra.push(<polygon key={`z2${i}`} className="na-zebra" points={face([[t, 7.0, 0], [t + 0.15, 7.0, 0], [t + 0.15, 7.3, 0], [t, 7.3, 0]])} />);
  }
  return <g>
    {block(-3, -3, 12, 12, 'na-asphalt')}
    {block(0, 0, 5, 5, 'na-sidewalk')}
    {block(7, 0, 12, 5, 'na-sidewalk')}
    {block(0, 7, 5, 12, 'na-sidewalk')}
    {block(7, 7, 12, 12, 'na-sidewalk')}
    {block(7.35, 7.35, 11.65, 11.65, 'na-grass')}
    <polygon className="na-path" points={face([[7.35, 9.25, 0], [11.65, 9.25, 0], [11.65, 9.75, 0], [7.35, 9.75, 0]])} />
    <polygon className="na-path" points={face([[9.25, 7.35, 0], [9.75, 7.35, 0], [9.75, 11.65, 0], [9.25, 11.65, 0]])} />
    {dashes}
    {zebra}
  </g>;
}

function Label({ place, done, here, hasVisit, dim }: { place: Place; done: boolean; here: boolean; hasVisit: boolean; dim: boolean }) {
  const at = PLACES[place.id].label;
  const text = place.name;
  const status = here ? 'Estás acá' : done ? 'Ya fuiste' : hasVisit ? 'Pasaste' : '';
  const width = Math.max(text.length * 8.1, status.length * 6.6) + 30;
  const height = status ? 42 : 30;
  return <g className={`na-label${done ? ' is-done' : ''}${here ? ' is-here' : ''}${dim ? ' is-dim' : ''}`} transform={`translate(${at.x.toFixed(1)} ${at.y.toFixed(1)})`}>
    <line x1="0" y1={height / 2} x2="0" y2={height / 2 + 12} className="na-label-stem" />
    <rect x={-width / 2} y={-height / 2} width={width} height={height} rx="9" />
    <text x="0" y={status ? -2 : 5} textAnchor="middle" className="na-label-name">{text}</text>
    {status && <text x="0" y="13" textAnchor="middle" className="na-label-status">{done ? '✓ ' : ''}{status}</text>}
  </g>;
}

function Walker({ gx, gy }: { gx: number; gy: number }) {
  const a = iso(gx, gy);
  return <g className="na-walker" style={{ transform: `translate(${a.x.toFixed(1)}px, ${a.y.toFixed(1)}px)` }} aria-hidden="true">
    <ellipse cx="0" cy="0" rx="13" ry="5.5" className="na-walker-ring" />
    <path d="M-6,0 L-4.8,-22 Q0,-27 4.8,-22 L6,0 Z" className="na-walker-body" />
    <circle cx="0" cy="-29" r="5.6" className="na-walker-head" />
    <g transform="translate(0 -52)"><rect x="-17" y="-10" width="34" height="18" rx="9" className="na-walker-tag" /><text x="0" y="3.5" textAnchor="middle">Vos</text></g>
  </g>;
}

function CityScene({ places, visited, done, position, standing, focus, weather, busOut, interactive, onOpen, showLabels = true, showWalker = true }: Props) {
  const items = [
    ...BUILDINGS.map(b => ({ kind: 'building' as const, depth: depthOf(b), b })),
    ...PROPS.map(p => ({ kind: 'prop' as const, depth: depthOf(p), p })),
  ].sort((a, b) => a.depth - b.depth);
  const pieces = (item: typeof items[number]) => item.kind === 'building'
    ? <BuildingShape key={item.b.id} b={item.b} />
    : <PropShape key={`${item.p.type}-${item.p.gx}-${item.p.gy}`} p={item.p} weather={weather} busOut={busOut} />;
  const placeOf = (item: typeof items[number]) => item.kind === 'building' ? item.b.location : item.p.location;
  const keyHandler = (id: string) => (event: KeyboardEvent<SVGGElement>) => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); onOpen(id); }
  };
  // Each place is drawn once, at the depth of its first piece, so its hit area stays whole.
  const drawn = new Set<string>();
  const layers: ReactNode[] = [];
  for (const item of items) {
    const slot = placeOf(item);
    if (!slot) { layers.push(pieces(item)); continue; }
    if (drawn.has(slot)) continue;
    drawn.add(slot);
    const place = places.find(entry => entry.id === slot)!;
    layers.push(<g key={`place-${slot}`} className={`na-place${focus && focus !== slot ? ' is-dimmed' : ''}${focus === slot ? ' is-focus' : ''}`}
      role={interactive ? 'button' : undefined} tabIndex={interactive ? 0 : -1} aria-label={interactive ? `Ir a ${place.name}${done.includes(slot) ? ', ya fuiste' : ''}` : undefined}
      data-place={slot} onClick={interactive ? () => onOpen(slot) : undefined} onKeyDown={interactive ? keyHandler(slot) : undefined}>
      {items.filter(entry => placeOf(entry) === slot).map(pieces)}
    </g>);
  }
  return <svg className={`na-scene${weather === 'rain' ? ' is-rain' : ''}`} viewBox={`0 0 ${VIEWBOX.width} ${VIEWBOX.height}`} role="group" aria-label="Mapa del barrio" overflow="visible">
    <defs>
      <linearGradient id="na-sky" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2={VIEWBOX.height}><stop offset="0" stopColor="#0e1620" /><stop offset=".55" stopColor="#1d2733" /><stop offset="1" stopColor="#3a2f2c" /></linearGradient>
      <radialGradient id="na-glow"><stop offset="0" stopColor="#ffcf7a" stopOpacity=".55" /><stop offset="1" stopColor="#ffcf7a" stopOpacity="0" /></radialGradient>
      <radialGradient id="na-vignette" gradientUnits="userSpaceOnUse" cx={VIEWBOX.width / 2} cy={VIEWBOX.height * .45} r={VIEWBOX.width * .75}><stop offset=".55" stopColor="#000" stopOpacity="0" /><stop offset="1" stopColor="#05080c" stopOpacity=".7" /></radialGradient>
    </defs>
    <rect x={-VIEWBOX.width} y={-VIEWBOX.height} width={VIEWBOX.width * 3} height={VIEWBOX.height * 3} fill="url(#na-sky)" />
    <circle cx="790" cy="70" r="16" className="na-moon" />
    <Ground />
    {layers}
    {showWalker && <Walker gx={standing.gx} gy={standing.gy} />}
    {showLabels && <g className="na-labels" aria-hidden="true">
      {places.map(place => <Label key={place.id} place={place} done={done.includes(place.id)} here={position === place.id} hasVisit={visited.includes(place.id)} dim={Boolean(focus && focus !== place.id)} />)}
    </g>}
    {weather === 'rain' && <g className="na-rain" aria-hidden="true">{Array.from({ length: 70 }, (_, i) => {
      const x = (i * 97) % VIEWBOX.width; const y = (i * 53) % VIEWBOX.height;
      return <line key={i} x1={x} y1={y} x2={x - 6} y2={y + 18} style={{ animationDelay: `${(i % 7) * -0.13}s` }} />;
    })}</g>}
    <rect x={-VIEWBOX.width} y={-VIEWBOX.height} width={VIEWBOX.width * 3} height={VIEWBOX.height * 3} fill="url(#na-vignette)" pointerEvents="none" />
  </svg>;
}

export default memo(CityScene);
