'use client';
import { createContext, Fragment, useContext } from 'react';

import type { Tone } from './types';

export type LiveSettings = { english: boolean; teacher: boolean; legend: { tone: Tone; label: string }[] };
export const LiveContext = createContext<LiveSettings>({ english: false, teacher: false, legend: [] });
export const useLive = () => useContext(LiveContext);

const token = /(\*\*[^*]+\*\*|\[\[[^\]|]+\|[a-z]+\]\])/g;

/** **bold** and [[marked words|tone]]; marks can be switched off for discovery. */
export function Rich({ text, marks = true }: { text: string; marks?: boolean }) {
  return <>{text.split(token).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) return <b key={index}>{part.slice(2, -2)}</b>;
    const mark = /^\[\[([^\]|]+)\|([a-z]+)\]\]$/.exec(part);
    if (mark) return marks ? <mark key={index} className={`gl-mark gl-tone-${mark[2]}`}>{mark[1]}</mark> : <Fragment key={index}>{mark[1]}</Fragment>;
    return <Fragment key={index}>{part}</Fragment>;
  })}</>;
}

/** Plain text of a rich string (for labels and comparisons). */
export const plain = (text: string) => text.replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\[\[([^\]|]+)\|[a-z]+\]\]/g, '$1');

export function English({ text }: { text?: string }) {
  const { english } = useLive();
  return english && text ? <small className="gl-en" lang="en">{text}</small> : null;
}
