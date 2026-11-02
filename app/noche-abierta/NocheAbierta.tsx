'use client';

// The PRO class: the game (./NocheGame.tsx) with every street scene of every
// district registered. The free class registers its own subset (./NocheDemo.tsx).
import { registerFullStreet } from './street.mjs';
import NocheGame, { type NocheDemo } from './NocheGame';
import type { NightState } from './engine.mjs';

registerFullStreet();

export type { NocheDemo };
export default function NocheAbierta({ initial }: { initial?: NightState }) { return <NocheGame initial={initial} />; }
