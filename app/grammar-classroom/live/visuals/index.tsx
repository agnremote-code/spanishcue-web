'use client';
import type { Where } from '../Blocks';
import type { VisualKey } from '../types';
import { BarrioMission, TimeCompare } from './duration';

/** Topic-specific interactive visuals. A new topic adds its file and its keys here. */
export function LiveVisual({ visual, where }: { visual: VisualKey; where: Where }) {
  switch (visual) {
    case 'time-compare': return <TimeCompare where={where} />;
    case 'barrio-mission': return <BarrioMission where={where} />;
  }
}
