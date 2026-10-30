'use client';

// The free class: the same NocheGame as PRO. The free street scenes and
// the locked shells (./demo-policy.mjs) arrive as a public JSON file, so no
// PRO scene text is ever part of a public chunk.
import { useEffect, useState } from 'react';
import NocheGame from './NocheGame';
import { registerStreet } from './street-core.mjs';
import { registerStreetTalk } from './talk/core.mjs';
import { DEMO_FREE_DISTRICTS, DEMO_STREET_PATH, type DemoStreet } from './demo-policy.mjs';
import { DISTRICTS } from './street-core.mjs';

const LOCKED_DISTRICTS = Object.keys(DISTRICTS).filter(id => !DEMO_FREE_DISTRICTS.includes(id));

export default function NocheDemo({ signedIn, home }: { signedIn: boolean; home?: string }) {
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    let active = true;
    fetch(DEMO_STREET_PATH)
      .then(response => { if (!response.ok) throw new Error('load'); return response.json() as Promise<DemoStreet>; })
      .then(data => {
        if (!active) return;
        registerStreet({ encounters: data.encounters, a0: data.a0, a1Words: data.a1Words });
        registerStreetTalk({ street: data.talk, a0: data.talkA0 });
        setReady(true);
      })
      .catch(() => { if (active) setFailed(true); });
    return () => { active = false; };
  }, [attempt]);
  if (ready) return <NocheGame demo={{ signedIn, home, lockedDistricts: LOCKED_DISTRICTS }} />;
  return <main className="na-root na-demo-loading" data-lesson="noche-abierta">
    <p role="status">{failed ? 'No se pudo cargar la ciudad.' : 'Preparando la noche…'}</p>
    {failed && <button type="button" className="na-primary" onClick={() => { setFailed(false); setAttempt(value => value + 1); }}>Intentar de nuevo</button>}
  </main>;
}
