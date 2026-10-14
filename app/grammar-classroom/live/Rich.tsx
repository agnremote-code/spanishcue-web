'use client';
import { createContext, Fragment, useContext, type ReactNode } from 'react';

import type { ByMode, Tone, VisualKey } from './types';

export type Mode = 'teacher' | 'self';
export type LiveSettings = { english: boolean; mode: Mode; legend: { tone: Tone; label: string }[]; optionNotes: Record<string, string>; go: (stage: number, step: number) => void; scenes?: Partial<Record<VisualKey, ReactNode>> };
export const LiveContext = createContext<LiveSettings>({ english: false, mode: 'teacher', legend: [], optionNotes: {}, go: () => {} });
export const useLive = () => useContext(LiveContext);

const token = /(\*\*[^*]+\*\*|\[\[[^\]|]+\|[a-z]+\]\])/g;

/** **bold** and [[marked words|tone]]. `onMark` turns marks into buttons (explore). */
export function Rich({ text, marks = true, onMark, active }: { text: string; marks?: boolean; onMark?: (text: string) => void; active?: string }) {
  return <>{text.split(token).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) return <b key={index}>{part.slice(2, -2)}</b>;
    const mark = /^\[\[([^\]|]+)\|([a-z]+)\]\]$/.exec(part);
    if (!mark) return <Fragment key={index}>{part}</Fragment>;
    if (!marks) return <Fragment key={index}>{mark[1]}</Fragment>;
    if (onMark) return <button type="button" key={index} data-mark={mark[1]} aria-pressed={active === mark[1]} className={`gl-mark gl-mark-button gl-tone-${mark[2]}`} onClick={() => onMark(mark[1])}>{mark[1]}</button>;
    return <mark key={index} className={`gl-mark gl-tone-${mark[2]}`}>{mark[1]}</mark>;
  })}</>;
}

/** Plain text of a rich string (for labels and comparisons). */
export const plain = (text: string) => text.replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\[\[([^\]|]+)\|[a-z]+\]\]/g, '$1');

/** Optional English support, shown only when the learner turns it on. */
export function English({ text }: { text?: string }) {
  const { english } = useLive();
  return english && text ? <small className="gl-en" lang="en">{text}</small> : null;
}

/** The variant of a text for the current mode. */
export function useModeText(text?: ByMode) {
  const { mode } = useLive();
  return text ? text[mode] ?? text.both : undefined;
}
