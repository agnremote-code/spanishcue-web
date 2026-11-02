'use client';

// The PRO class: every scene and every person, bundled with the page.
import { registerFullHospital } from './engine.mjs';
import HospitalGame from './HospitalGame';

registerFullHospital();

export default function HospitalPro() { return <HospitalGame />; }
