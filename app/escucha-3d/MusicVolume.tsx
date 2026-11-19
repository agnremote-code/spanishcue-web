'use client';

// Music volume for every 3D conversation world: the sound button (mutes the
// ambience and the shouts), a slider that grades the music from 0 to 100, and
// «Voces», which silences only the people (their yells and cries) and leaves the
// music on. Both choices are shared by all worlds and kept in this browser.
import { useEffect, useState } from 'react';
import { onVoicesOff, setVoicesOff, voicesAreOff } from './shout';

const KEY = 'spanishcue:musica-3d:volumen';

export function useMusicVolume(): [number, (volume: number) => void] {
  const [volume, setVolume] = useState(0.7);
  // Read after the first paint, like the other saved preferences of the worlds.
  useEffect(() => {
    const t = window.setTimeout(() => {
      try {
        const raw = window.localStorage.getItem(KEY), saved = Number(raw);
        if (raw !== null && saved >= 0 && saved <= 1) setVolume(saved);
      } catch { /* The default volume stays usable. */ }
    }, 0);
    return () => window.clearTimeout(t);
  }, []);
  const change = (next: number) => {
    setVolume(next);
    try { window.localStorage.setItem(KEY, String(next)); } catch { /* Not saved, still applied. */ }
  };
  return [volume, change];
}

export default function MusicVolume({ sound, onSound, volume, onVolume }: {
  sound: boolean;
  onSound: (on: boolean) => void;
  volume: number;
  onVolume: (volume: number) => void;
}) {
  const on = sound && volume > 0;
  const [voicesOff, setOff] = useState(false);
  // Read after the first paint (the server cannot know this browser's choice).
  useEffect(() => {
    const t = window.setTimeout(() => setOff(voicesAreOff()), 0);
    const stop = onVoicesOff(setOff);
    return () => { window.clearTimeout(t); stop(); };
  }, []);
  return (
    <span className="cue-music-volume" style={{ display: 'inline-flex', alignItems: 'center', gap: '.3rem', padding: '.18rem .55rem .18rem .2rem', borderRadius: 999, background: 'rgba(12,14,24,.62)', border: '1px solid rgba(255,255,255,.22)', color: '#fff' }}>
      <button type="button" onClick={() => onSound(!sound)} aria-pressed={!sound} aria-label={sound ? 'Silenciar el ambiente' : 'Activar el ambiente'} style={{ background: 'none', border: 0, padding: '.2rem .3rem', fontSize: '1rem', cursor: 'pointer', color: 'inherit' }}>{on ? '🔊' : '🔇'}</button>
      <input
        type="range" min={0} max={100} step={5}
        value={Math.round(volume * 100)}
        onChange={event => { const next = Number(event.target.value) / 100; onVolume(next); if (next > 0 && !sound) onSound(true); }}
        aria-label="Volumen de la música"
        title={`Música: ${Math.round(volume * 100)} %`}
        style={{ width: 78, accentColor: '#f2c14e', cursor: 'pointer' }}
      />
      <button type="button" onClick={() => setVoicesOff(!voicesOff)} aria-pressed={voicesOff} aria-label={voicesOff ? 'Activar las voces de la gente' : 'Silenciar las voces de la gente'} title={voicesOff ? 'Voces de la gente: apagadas' : 'Voces de la gente: encendidas'} style={{ background: 'none', border: 0, borderLeft: '1px solid rgba(255,255,255,.22)', marginLeft: '.15rem', padding: '.2rem .2rem .2rem .45rem', fontSize: '.78rem', fontWeight: 700, cursor: 'pointer', color: 'inherit', opacity: voicesOff ? 0.6 : 1, textDecoration: voicesOff ? 'line-through' : 'none' }}>🗣 Voces</button>
    </span>
  );
}
