// Hand-drawn line icons for the seven things the learner can carry through
// the night, plus the small facts every item view shares (order, emoji, the
// name with its article) and the discreet HUD inventory chip. No three.js
// here: the picker, the cards and the HUD use these without loading WebGL.
//
// Icons are drawn on a 24-unit grid with one stroke weight, round caps and a
// faint fill, the same line language as the HUD.
import type { ReactNode } from 'react';

export type ItemId = 'lapiz' | 'libro' | 'gas' | 'granada' | 'pistola' | 'cuchillo' | 'corazon';

export const ITEM_ORDER: readonly ItemId[] = ['lapiz', 'libro', 'gas', 'granada', 'pistola', 'cuchillo', 'corazon'];

type Meta = {
  /** Shown in caps on the cards. */
  label: string;
  emoji: string;
  /** The name with its article, for «Llevar el lápiz». */
  withArticle: string;
  /** Accent used for the faint fill and the card glow. */
  tone: string;
  /** The heart is a power, not an object. */
  power: boolean;
};

export const ITEM_META: Record<ItemId, Meta> = {
  lapiz: { label: 'LÁPIZ', emoji: '✏️', withArticle: 'el lápiz', tone: '#f2c230', power: false },
  libro: { label: 'LIBRO', emoji: '📖', withArticle: 'el libro', tone: '#4f9a94', power: false },
  gas: { label: 'GAS PIMIENTA', emoji: '🌶️', withArticle: 'el gas pimienta', tone: '#e2463a', power: false },
  granada: { label: 'GRANADA', emoji: '💣', withArticle: 'la granada', tone: '#8aa05a', power: false },
  pistola: { label: 'PISTOLA', emoji: '🔫', withArticle: 'la pistola', tone: '#f08a3c', power: false },
  cuchillo: { label: 'CUCHILLO', emoji: '🔪', withArticle: 'el cuchillo', tone: '#c99a6a', power: false },
  corazon: { label: 'CORAZÓN', emoji: '❤️', withArticle: 'el corazón', tone: '#ff4d6d', power: true },
};

export const isItemId = (value: unknown): value is ItemId => typeof value === 'string' && (ITEM_ORDER as readonly string[]).includes(value);

const LINE = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;

// Each drawing gets the accent colour for its faint fills.
const DRAWINGS: Record<ItemId, (tone: string) => ReactNode> = {
  // A sharpened pencil on the diagonal: graphite, wood, body, ferrule, eraser.
  lapiz: tone => <g transform="rotate(-45 12 12)">
    <path d="M7 9h10v6H7z" fill={tone} fillOpacity=".28" stroke="none" />
    <path d="M2.4 12 7 9h10v6H7z" {...LINE} />
    <path d="M2.4 12 4.2 10.9v2.2z" fill="currentColor" />
    <path d="M7 11.9h10" {...LINE} strokeWidth={1} opacity=".55" />
    <path d="M17 9h2.2v6H17M18.1 9v6" {...LINE} />
    <path d="M19.2 9h1.4a1.6 1.6 0 0 1 1.6 1.6v2.8a1.6 1.6 0 0 1-1.6 1.6h-1.4" {...LINE} fill="#f39bb0" fillOpacity=".35" />
  </g>,
  // A closed hardcover: spine, title band, page edges and the ribbon.
  libro: tone => <>
    <path d="M6.5 3h11a1.5 1.5 0 0 1 1.5 1.5v14a1.5 1.5 0 0 1-1.5 1.5h-11A2.5 2.5 0 0 1 4 17.5v-12A2.5 2.5 0 0 1 6.5 3z" fill={tone} fillOpacity=".25" stroke="none" />
    <path d="M6.5 3h11a1.5 1.5 0 0 1 1.5 1.5v14a1.5 1.5 0 0 1-1.5 1.5h-11A2.5 2.5 0 0 1 4 17.5v-12A2.5 2.5 0 0 1 6.5 3z" {...LINE} />
    <path d="M7.5 3v17" {...LINE} />
    <rect x="10" y="6.5" width="6.5" height="3.6" rx=".6" {...LINE} strokeWidth={1.2} />
    <path d="M14.5 20v3l1-.9 1 .9v-3" {...LINE} strokeWidth={1.2} fill="#e2463a" fillOpacity=".55" />
  </>,
  // A small canister: cap and nozzle, a label with a chili, a soft puff.
  gas: tone => <>
    <rect x="7.5" y="8" width="8" height="13.5" rx="2" fill={tone} fillOpacity=".28" stroke="none" />
    <rect x="7.5" y="8" width="8" height="13.5" rx="2" {...LINE} />
    <path d="M8.5 8V5.2A1.2 1.2 0 0 1 9.7 4h3.6a1.2 1.2 0 0 1 1.2 1.2V8" {...LINE} />
    <path d="M14.5 5.3h1.8" {...LINE} />
    <path d="M7.5 12h8M7.5 18h8" {...LINE} strokeWidth={1} opacity=".6" />
    <path d="M9.6 16.3c1.6.5 3.4-.2 4-1.9-.7.4-1.6.5-2.4.3-.8-.2-1.3.3-1.6 1.6z" fill="currentColor" stroke="none" />
    <path d="M13.2 14.3l.6-.8" {...LINE} strokeWidth={1} />
    <circle cx="19.2" cy="5.2" r="1" fill="currentColor" opacity=".45" />
    <circle cx="21" cy="3.6" r=".7" fill="currentColor" opacity=".3" />
  </>,
  // A stylised prop: egg body with soft segments, fuse, lever and ring.
  granada: tone => <>
    <ellipse cx="11.5" cy="14.5" rx="6" ry="6.8" fill={tone} fillOpacity=".3" stroke="none" />
    <ellipse cx="11.5" cy="14.5" rx="6" ry="6.8" {...LINE} />
    <path d="M5.7 12.6c3.8 1 7.8 1 11.6 0M5.7 16.6c3.8 1 7.8 1 11.6 0M11.5 7.8v13.4" {...LINE} strokeWidth={1} opacity=".6" />
    <rect x="9.8" y="5" width="3.6" height="2.9" rx=".5" {...LINE} />
    <path d="M13.4 5.6c2.6.2 4 1.6 4.4 4.6" {...LINE} />
    <circle cx="7.6" cy="4.6" r="2.2" {...LINE} strokeWidth={1.3} />
  </>,
  // A chunky toy-like pistol in profile, with the bright safety tip.
  pistola: tone => <>
    <path d="M3.5 7h15.5a1.5 1.5 0 0 1 1.5 1.5v2A1.5 1.5 0 0 1 19 12H3.5A1.5 1.5 0 0 1 2 10.5v-2A1.5 1.5 0 0 1 3.5 7z" fill="currentColor" fillOpacity=".14" stroke="none" />
    <path d="M3.5 7h15.5a1.5 1.5 0 0 1 1.5 1.5v2A1.5 1.5 0 0 1 19 12H3.5A1.5 1.5 0 0 1 2 10.5v-2A1.5 1.5 0 0 1 3.5 7z" {...LINE} />
    <path d="M13.5 12l1.6 8.2a1 1 0 0 1-1 1.2h-3.3a1 1 0 0 1-1-.9L9 12" {...LINE} fill={tone} fillOpacity=".22" />
    <path d="M9 12c0 2.6-1.3 3.6-3.4 3.6-.9 0-1.3-.5-1.1-1.4L5 12" {...LINE} />
    <path d="M7 12.4c.3.9.1 1.6-.5 2" {...LINE} strokeWidth={1.1} />
    <rect x="19.6" y="7.6" width="2.6" height="3.8" rx=".8" fill={tone} stroke="none" />
    <path d="M5 9.5h11" {...LINE} strokeWidth={1} opacity=".5" />
  </>,
  // A small utility knife with a riveted wooden handle.
  cuchillo: tone => <g transform="rotate(-30 12 12)">
    <path d="M13.4 10H5.2C3.6 10 2.4 11 2.2 12.3c3 1.7 7 2.2 11.2 2.2z" fill="currentColor" fillOpacity=".12" stroke="none" />
    <path d="M13.4 10H5.2C3.6 10 2.4 11 2.2 12.3c3 1.7 7 2.2 11.2 2.2z" {...LINE} />
    <rect x="13.4" y="9.4" width="1.6" height="5.6" rx=".6" {...LINE} strokeWidth={1.2} />
    <path d="M15 10.2h5.6a1.8 1.8 0 0 1 1.8 1.8v.6a1.8 1.8 0 0 1-1.8 1.8H15z" {...LINE} fill={tone} fillOpacity=".45" />
    <circle cx="17.2" cy="12.3" r=".7" fill="currentColor" />
    <circle cx="20" cy="12.3" r=".7" fill="currentColor" />
  </g>,
  // A plump heart with a shine and a small spark.
  corazon: tone => <>
    <path d="M12 20.3C5.6 16.2 3 12.6 3.4 9.3 3.8 6.3 6.1 4.6 8.4 4.7c1.6.1 2.9 1 3.6 2.4.7-1.4 2-2.3 3.6-2.4 2.3-.1 4.6 1.6 5 4.6.4 3.3-2.2 6.9-8.6 11z" fill={tone} fillOpacity=".4" stroke="none" />
    <path d="M12 20.3C5.6 16.2 3 12.6 3.4 9.3 3.8 6.3 6.1 4.6 8.4 4.7c1.6.1 2.9 1 3.6 2.4.7-1.4 2-2.3 3.6-2.4 2.3-.1 4.6 1.6 5 4.6.4 3.3-2.2 6.9-8.6 11z" {...LINE} />
    <path d="M6.3 9.2c.2-1.2 1-2 2.1-2.1" {...LINE} strokeWidth={1.3} />
    <path d="M20.2 1.8v2.4M19 3h2.4" {...LINE} strokeWidth={1.1} />
  </>,
};

/** A crisp inline SVG icon for one item. Decorative unless `title` is given. */
export default function ItemIcon({ id, size = 24, title, tone }: { id: ItemId; size?: number; title?: string; tone?: string }) {
  const meta = ITEM_META[id];
  return <svg className="na-item-icon" data-item={id} width={size} height={size} viewBox="0 0 24 24" role={title ? 'img' : undefined} aria-hidden={title ? undefined : true} aria-label={title} focusable="false">
    {DRAWINGS[id](tone ?? meta.tone)}
  </svg>;
}

/**
 * The discreet HUD inventory: a round chip with the icon. The name opens on
 * hover or focus, and desktop shows the [Q] USAR hint. Pass `onUse` to make
 * the chip use the item; without it the chip is informative only.
 */
export function ItemInventory({ id, onUse, used = false }: { id: ItemId; onUse?: () => void; used?: boolean }) {
  const meta = ITEM_META[id];
  const bare = meta.withArticle.replace(/^(el|la) /, '');
  const name = bare.charAt(0).toUpperCase() + bare.slice(1);
  const label = onUse ? `Llevas ${meta.withArticle}. Usar con la tecla Q` : `Llevas ${meta.withArticle}`;
  const inner = <>
    <span className="na-inv-icon"><ItemIcon id={id} size={22} /></span>
    <span className="na-inv-name">{name}</span>
    {onUse && <kbd className="na-inv-key" aria-hidden="true">[Q] USAR</kbd>}
  </>;
  if (!onUse) return <p className={`na-inv${meta.power ? ' is-power' : ''}`} data-item={id} aria-label={label} title={label}>{inner}</p>;
  return <button type="button" className={`na-inv${meta.power ? ' is-power' : ''}${used ? ' is-used' : ''}`} data-item={id} aria-label={label} title={label} onClick={onUse}>{inner}</button>;
}
