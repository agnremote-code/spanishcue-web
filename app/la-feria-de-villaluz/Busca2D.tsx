// La feria de Villaluz · the 2D side of "Busca y describe" (AM-3): SVG figures
// drawn from the same Figure record as the 3D person (look-contract lookOf),
// with no text labels, plus a small top-down plan of the candidates as seen
// from the circle. Used in the "mapa sin movimiento" mode and without WebGL.
import { COLOURS, HAIR_COLOURS, lookOf, predicate, type Figure } from './look-contract.mjs';
import { defaultSlots } from './layout.mjs';

const colour = (name: string | undefined, fallback = '#7a7c82') => (name && (COLOURS as Record<string, { hex: string }>)[name]?.hex) || fallback;
const DENIM = '#34507a';

/** What a screen reader hears for a figure: the same features, in Spanish. */
export function figureLabel(f: Figure) {
  const keys = ['age', 'top', 'topColor', 'bottom', 'bottomColor', 'hair', 'hairColor', 'pose', 'holds'];
  const parts = keys.map(k => {
    const value = k === 'bottom' && f.top === 'dress' ? null : (f as Record<string, unknown>)[k];
    if (value == null || value === 'none' || value === 'stand' || (k === 'bottomColor' && (f.top === 'dress' || f.bottom === 'jeans'))) return null;
    if (k === 'topColor') return predicate(`topColor:${value}`, f);
    if (k === 'top') return null;
    return predicate(`${k}:${value}`, f);
  }).filter(Boolean);
  for (const x of f.extras ?? []) parts.push(predicate(`extras:${x}`, f));
  return `Persona que ${parts.join(', ')}`;
}

export function FigureSvg({ figure, size = 120 }: { figure: Figure; size?: number }) {
  const { look } = lookOf(figure);
  const child = figure.age === 'child';
  const s = (look.height ?? 1.7) / 1.9; // the tallest adult fills the box
  const top = colour(figure.topColor);
  const bottom = figure.top === 'dress' ? top : figure.bottom === 'jeans' ? DENIM : colour(figure.bottomColor, '#1b1b1e');
  const hair = (HAIR_COLOURS as Record<string, { hex: string }>)[figure.hairColor]?.hex ?? '#1e1612';
  const skin = look.skin;
  const pose = figure.pose ?? 'stand';
  const shortSleeves = figure.top === 'tshirt' || figure.top === 'dress';
  const sleeve = shortSleeves ? skin : top;
  const long = figure.top === 'coat';
  // Body coordinates in a 100 × 200 box, feet at y = 196.
  const head = child ? 15 : 12;
  const shoulderY = child ? 70 : 52;
  const hipY = child ? 128 : 112;
  const sitting = pose === 'sit';
  const legEnd = sitting ? hipY + 34 : 194;
  // Arms: [shoulder → hand] for left (viewer's right) and right (viewer's left).
  const arm = (side: -1 | 1): [number, number] => {
    if (pose === 'wave' && side === -1) return [24, shoulderY - 40];
    if (pose === 'dance') return [50 + side * 34, shoulderY - 30];
    if (pose === 'point' && side === -1) return [6, shoulderY + 4];
    if (pose === 'phone' && side === -1) return [40, shoulderY - 30];
    if (pose === 'guitar' || pose === 'carry' || pose === 'read' || pose === 'arms') return [50 + side * 6, shoulderY + 28];
    return [50 + side * 20, hipY - 2];
  };
  const shoulderX = (side: number) => 50 + side * (child ? 13 : 15);
  return <svg viewBox="0 0 100 200" width={size * 0.5} height={size} role="img" aria-label={figureLabel(figure)} className="fv-figure">
    <g transform={`translate(50 196) scale(${s}) translate(-50 -196)`}>
      {/* backpack behind the body */}
      {figure.extras?.includes('backpack') && <rect x={32} y={shoulderY + 4} width={36} height={40} rx={6} fill="#3a4a3a" />}
      {/* legs */}
      {figure.top !== 'dress' && figure.bottom !== 'skirt' && [-1, 1].map(side => <rect key={side} x={50 + side * 9 - 6} y={hipY} width={12} height={legEnd - hipY} fill={figure.bottom === 'shorts' ? skin : bottom} rx={4} />)}
      {figure.bottom === 'shorts' && figure.top !== 'dress' && <rect x={34} y={hipY - 4} width={32} height={26} fill={bottom} rx={4} />}
      {(figure.top === 'dress' || figure.bottom === 'skirt') && <>
        {[-1, 1].map(side => <rect key={side} x={50 + side * 8 - 5} y={hipY + 30} width={10} height={legEnd - hipY - 30} fill={skin} rx={4} />)}
        <path d={`M36 ${hipY - 6} L64 ${hipY - 6} L72 ${hipY + 40} L28 ${hipY + 40} Z`} fill={bottom} />
      </>}
      {/* torso */}
      <path d={`M${shoulderX(-1) - 3} ${shoulderY} L${shoulderX(1) + 3} ${shoulderY} L${long ? 70 : 64} ${long ? hipY + 44 : hipY + 2} L${long ? 30 : 36} ${long ? hipY + 44 : hipY + 2} Z`} fill={top} />
      {figure.top === 'apron' && <rect x={38} y={shoulderY + 12} width={24} height={hipY - shoulderY + 14} fill="#f4efe6" rx={3} />}
      {figure.top === 'hoodie' && <path d={`M38 ${shoulderY - 2} Q50 ${shoulderY + 14} 62 ${shoulderY - 2}`} stroke="#00000033" strokeWidth={4} fill="none" />}
      {figure.extras?.includes('scarf') && <rect x={38} y={shoulderY - 4} width={24} height={8} rx={4} fill="#a33a2e" />}
      {figure.extras?.includes('bag') && <><line x1={shoulderX(-1)} y1={shoulderY} x2={68} y2={hipY - 6} stroke="#5a3a24" strokeWidth={2.5} /><rect x={64} y={hipY - 10} width={12} height={16} rx={2} fill="#5a3a24" /></>}
      {/* arms */}
      {([-1, 1] as const).map(side => { const [hx, hy] = arm(side); return <g key={side}>
        <line x1={shoulderX(side)} y1={shoulderY + 4} x2={hx} y2={hy} stroke={sleeve} strokeWidth={9} strokeLinecap="round" />
        <circle cx={hx} cy={hy} r={4.5} fill={skin} />
      </g>; })}
      {pose === 'guitar' && <g><ellipse cx={46} cy={shoulderY + 34} rx={13} ry={10} fill="#a8692f" /><rect x={52} y={shoulderY + 14} width={30} height={5} fill="#a8692f" transform={`rotate(-30 52 ${shoulderY + 16})`} /></g>}
      {pose === 'carry' && <rect x={34} y={shoulderY + 22} width={32} height={22} fill="#b88a55" />}
      {pose === 'read' && <rect x={40} y={shoulderY + 20} width={20} height={14} fill="#efe6cf" />}
      {pose === 'phone' && <rect x={38} y={shoulderY - 36} width={6} height={11} fill="#16171b" />}
      {figure.holds === 'umbrella' && <g><line x1={arm(1)[0]} y1={arm(1)[1]} x2={arm(1)[0]} y2={arm(1)[1] + 34} stroke="#1d2230" strokeWidth={3} /><path d={`M${arm(1)[0] - 4} ${arm(1)[1] + 34} l4 -26 l4 26 Z`} fill="#1d2230" /></g>}
      {figure.holds === 'flowers' && <g><path d={`M${arm(-1)[0] - 5} ${arm(-1)[1] + 2} l5 14 l5 -14 Z`} fill="#f1e9dc" /><circle cx={arm(-1)[0]} cy={arm(-1)[1] - 2} r={6} fill="#d23a5a" /></g>}
      {figure.holds === 'suitcase' && <rect x={arm(1)[0] - 9} y={arm(1)[1] + 2} width={18} height={26} rx={2} fill="#2c3a4c" />}
      {figure.holds === 'map' && <rect x={arm(1)[0] - 8} y={arm(1)[1] - 10} width={16} height={20} fill="#e8dfc4" />}
      {/* head and hair */}
      {(figure.hair === 'long' || figure.hair === 'braids') && <rect x={50 - head - 2} y={shoulderY - head * 2 - 6} width={head * 2 + 4} height={head * 2 + 18} rx={head} fill={hair} />}
      <circle cx={50} cy={shoulderY - head - 4} r={head} fill={skin} />
      {figure.hair !== 'bald' && figure.hair !== 'cap' && <path d={`M${50 - head - 1} ${shoulderY - head - 4} A${head + 1} ${head + 1} 0 0 1 ${50 + head + 1} ${shoulderY - head - 4} Z`} fill={hair} />}
      {figure.hair === 'curly' && [-1, 0, 1].map(i => <circle key={i} cx={50 + i * head * 0.7} cy={shoulderY - head * 2 - 2} r={head * 0.45} fill={hair} />)}
      {figure.hair === 'afro' && <circle cx={50} cy={shoulderY - head - 8} r={head * 1.45} fill={hair} opacity={0.98} />}
      {figure.hair === 'afro' && <circle cx={50} cy={shoulderY - head - 2} r={head * 0.8} fill={skin} />}
      {figure.hair === 'ponytail' && <path d={`M${50 + head} ${shoulderY - head - 8} q12 6 6 26`} stroke={hair} strokeWidth={7} fill="none" strokeLinecap="round" />}
      {figure.hair === 'bun' && <circle cx={50} cy={shoulderY - head * 2 - 6} r={head * 0.5} fill={hair} />}
      {figure.hair === 'braids' && [-1, 1].map(side => <line key={side} x1={50 + side * (head + 1)} y1={shoulderY - head} x2={50 + side * (head + 1)} y2={shoulderY + 22} stroke={hair} strokeWidth={5} strokeLinecap="round" />)}
      {figure.hair === 'cap' && <><path d={`M${50 - head - 1} ${shoulderY - head - 4} A${head + 1} ${head + 1} 0 0 1 ${50 + head + 1} ${shoulderY - head - 4} Z`} fill="#1e2026" /><rect x={50} y={shoulderY - head - 6} width={head + 8} height={3} fill="#1e2026" /></>}
      {figure.extras?.includes('glasses') && <g stroke="#111" strokeWidth={1.6} fill="none"><circle cx={45} cy={shoulderY - head - 3} r={3.2} /><circle cx={55} cy={shoulderY - head - 3} r={3.2} /><line x1={48} y1={shoulderY - head - 3} x2={52} y2={shoulderY - head - 3} /></g>}
      {figure.extras?.includes('beard') && <path d={`M${50 - head * 0.8} ${shoulderY - head} Q50 ${shoulderY + 2} ${50 + head * 0.8} ${shoulderY - head} Z`} fill={hair} />}
    </g>
  </svg>;
}

/** The candidates from above, as the class sees them from the circle: the
 * mascot at the bottom, the numbers in their slots. */
export function BuscaPlan({ figures }: { figures: Figure[] }) {
  const slots = defaultSlots(figures.length);
  return <svg viewBox="-5 -3 10 9" className="fv-plan" role="img" aria-label="Plano: tú abajo, las personas delante">
    <rect x={-5} y={-3} width={10} height={9} rx={0.6} className="fv-plan-bg" />
    {figures.map((f, i) => { const slot = f.slot ?? slots[i]; return <g key={f.id} transform={`translate(${slot.x} ${-slot.z})`}>
      <circle r={0.55} className="fv-plan-dot" /><text y={0.22} textAnchor="middle" className="fv-plan-n">{i + 1}</text>
    </g>; })}
    <path d="M0 4.2 L0.7 5.6 L0 5.2 L-0.7 5.6 Z" className="fv-plan-me" />
    <text x={0} y={5.8} textAnchor="middle" className="fv-plan-you" dy={-1.9}>tú</text>
  </svg>;
}
