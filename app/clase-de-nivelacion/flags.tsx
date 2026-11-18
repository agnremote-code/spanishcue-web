import type { ReactNode } from 'react';

/** Simplified flags drawn for this class (60 × 40). Coats of arms are reduced to a small mark. */
const star = (cx: number, cy: number, r: number, fill: string, key?: string | number) => {
  const points = Array.from({ length: 10 }, (_, i) => {
    const radius = i % 2 ? r * 0.4 : r;
    const angle = -Math.PI / 2 + (i * Math.PI) / 5;
    return `${(cx + radius * Math.cos(angle)).toFixed(2)},${(cy + radius * Math.sin(angle)).toFixed(2)}`;
  }).join(' ');
  return <polygon key={key} points={points} fill={fill} />;
};
const rows = (colors: string[], weights?: number[]) => {
  const total = (weights ?? colors.map(() => 1)).reduce((a, b) => a + b, 0);
  let y = 0;
  return colors.map((color, i) => {
    const h = ((weights?.[i] ?? 1) / total) * 40;
    const rect = <rect key={i} x="0" y={y} width="60" height={h + 0.2} fill={color} />;
    y += h;
    return rect;
  });
};
const cols = (colors: string[]) => colors.map((color, i) => <rect key={i} x={(i * 60) / colors.length} y="0" width={60 / colors.length + 0.2} height="40" fill={color} />);
const sun = (cx: number, cy: number, r: number) => <g>{Array.from({ length: 12 }, (_, i) => <line key={i} x1={cx} y1={cy} x2={cx + r * 1.7 * Math.cos((i * Math.PI) / 6)} y2={cy + r * 1.7 * Math.sin((i * Math.PI) / 6)} stroke="#f6b40e" strokeWidth="0.9" />)}<circle cx={cx} cy={cy} r={r} fill="#f6b40e" /></g>;
const seal = (color: string, r = 4) => <circle cx="30" cy="20" r={r} fill={color} stroke="#ffffffb0" strokeWidth="0.8" />;

const art: Record<string, ReactNode> = {
  ar: <>{rows(['#74acdf', '#fff', '#74acdf'])}{sun(30, 20, 3.4)}</>,
  bo: <>{rows(['#d52b1e', '#f9e300', '#007934'])}{seal('#b0762b', 3)}</>,
  cl: <>{rows(['#fff', '#d52b1e'])}<rect width="20" height="20" fill="#0039a6" />{star(10, 10, 6, '#fff')}</>,
  co: rows(['#fcd116', '#003893', '#ce1126'], [2, 1, 1]),
  cr: rows(['#002b7f', '#fff', '#ce1126', '#fff', '#002b7f'], [1, 1, 2, 1, 1]),
  cu: <>{rows(['#002a8f', '#fff', '#002a8f', '#fff', '#002a8f'])}<polygon points="0,0 26,20 0,40" fill="#cf142b" />{star(9, 20, 5.5, '#fff')}</>,
  ec: <>{rows(['#ffdd00', '#034ea2', '#ed1c24'], [2, 1, 1])}<ellipse cx="30" cy="20" rx="4.5" ry="5.5" fill="#6aa5d8" stroke="#8a5a1d" strokeWidth="1.2" /></>,
  sv: <>{rows(['#0f47af', '#fff', '#0f47af'])}<circle cx="30" cy="20" r="4.2" fill="none" stroke="#d9a520" strokeWidth="1.4" /><polygon points="30,17 33,22.5 27,22.5" fill="#1f8a4c" /></>,
  es: <>{rows(['#aa151b', '#f1bf00', '#aa151b'], [1, 2, 1])}<rect x="14" y="14.5" width="7" height="10" rx="1.5" fill="#aa151b" stroke="#c8a000" strokeWidth="0.9" /></>,
  gt: <>{cols(['#4997d0', '#fff', '#4997d0'])}<circle cx="30" cy="20" r="5" fill="none" stroke="#3a8f3a" strokeWidth="1.8" /></>,
  gq: <>{rows(['#3e9a00', '#fff', '#e32118'])}<polygon points="0,0 15,20 0,40" fill="#0073ce" /><rect x="29" y="16" width="6" height="8" rx="1" fill="#9aa5ad" /><circle cx="32" cy="18.5" r="2.4" fill="#2f7d1c" /></>,
  hn: <>{rows(['#00bce4', '#fff', '#00bce4'])}{[[30, 20], [23, 17], [37, 17], [23, 23], [37, 23]].map(([x, y], i) => star(x, y, 2.3, '#00bce4', i))}</>,
  mx: <>{cols(['#006847', '#fff', '#ce1126'])}<circle cx="30" cy="20" r="4.6" fill="#8a5a2b" /><path d="M25.5 23.5c2.5 2.2 6.5 2.2 9 0" fill="none" stroke="#2f7d1c" strokeWidth="1.4" /></>,
  ni: <>{rows(['#0067c6', '#fff', '#0067c6'])}<polygon points="30,15.5 35,24 25,24" fill="none" stroke="#c9a227" strokeWidth="1.3" /></>,
  pa: <><rect width="60" height="40" fill="#fff" /><rect x="30" width="30" height="20" fill="#da121a" /><rect y="20" width="30" height="20" fill="#072357" />{star(15, 10, 5.5, '#072357')}{star(45, 30, 5.5, '#da121a')}</>,
  py: <>{rows(['#d52b1e', '#fff', '#0038a8'])}<circle cx="30" cy="20" r="4" fill="#fff" stroke="#2f7d1c" strokeWidth="1.2" />{star(30, 20, 2, '#e6b000')}</>,
  pe: cols(['#d91023', '#fff', '#d91023']),
  pr: <>{rows(['#ed0000', '#fff', '#ed0000', '#fff', '#ed0000'])}<polygon points="0,0 26,20 0,40" fill="#0050f0" />{star(9, 20, 5.5, '#fff')}</>,
  do: <><rect width="60" height="40" fill="#fff" /><rect width="26" height="16" fill="#002d62" /><rect x="34" width="26" height="16" fill="#ce1126" /><rect y="24" width="26" height="16" fill="#ce1126" /><rect x="34" y="24" width="26" height="16" fill="#002d62" /><circle cx="30" cy="20" r="2.6" fill="#2f7d1c" /></>,
  uy: <>{rows(['#fff', '#0038a8', '#fff', '#0038a8', '#fff', '#0038a8', '#fff', '#0038a8', '#fff'])}<rect width="22" height="22.2" fill="#fff" />{sun(11, 11, 3.6)}</>,
  ve: <>{rows(['#ffcc00', '#00247d', '#cf142b'])}{Array.from({ length: 8 }, (_, i) => { const a = Math.PI + ((i + 0.5) * Math.PI) / 8; return star(30 + 9.5 * Math.cos(a), 26 + 7 * Math.sin(a), 1.25, '#fff', i); })}</>,
};

export function Flag({ id, title }: { id: string; title?: string }) {
  return <svg className="nv-flag" viewBox="0 0 60 40" role={title ? 'img' : undefined} aria-label={title} aria-hidden={title ? undefined : true}>{art[id]}</svg>;
}
