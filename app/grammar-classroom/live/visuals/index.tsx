'use client';
import type { VisualKey } from '../types';
import { Barrio3D, LifeLine, TimeAxis, TimeExplorer } from './duration';

/** Topic-specific interactive visuals. A new topic adds its file and its keys here. */
export function LiveVisual({ visual }: { visual: VisualKey }) {
  switch (visual) {
    case 'time-axis-start': return <TimeAxis mode="start" />;
    case 'time-axis-event': return <TimeAxis mode="event" />;
    case 'time-explorer': return <TimeExplorer />;
    case 'life-line': return <LifeLine />;
    case 'barrio-3d': return <Barrio3D />;
  }
}
