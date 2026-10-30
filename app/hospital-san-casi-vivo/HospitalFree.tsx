'use client';

// The free class: the same HospitalGame as PRO. The open scenes and people
// and the ids to lock (./demo-policy.mjs) arrive as a public JSON file, so no
// PRO scene text is ever part of a public chunk.
import { useEffect, useState } from 'react';
import HospitalGame from './HospitalGame';
import { registerHospital } from './engine-core.mjs';
import { DEMO_HOSPITAL_PATH, type DemoHospital } from './demo-policy.mjs';
import './hospital.css';

export default function HospitalFree({ signedIn }: { signedIn: boolean }) {
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    let active = true;
    fetch(DEMO_HOSPITAL_PATH)
      .then(response => { if (!response.ok) throw new Error('load'); return response.json() as Promise<DemoHospital>; })
      .then(data => { if (!active) return; registerHospital(data); setReady(true); })
      .catch(() => { if (active) setFailed(true); });
    return () => { active = false; };
  }, [attempt]);
  if (ready) return <HospitalGame demo={{ signedIn }} />;
  return <main className="hs hs-demo-loading">
    <p role="status">{failed ? 'No se pudo abrir el hospital.' : 'Abriendo las puertas de urgencias…'}</p>
    {failed && <button type="button" className="hs-secondary" onClick={() => { setFailed(false); setAttempt(value => value + 1); }}>Intentar de nuevo</button>}
  </main>;
}
