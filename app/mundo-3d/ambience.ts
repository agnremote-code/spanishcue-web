// Mundo 3D · ambient sound made live with WebAudio (no files to download):
// waves, wind, city traffic and horns, a crowd murmur, birds, crickets, a
// soft guitar or piano loop for the places with music, and the plane. Each
// region kind has its own mix; the bed ducks while a card or a voice is on.
// It only starts after a click (the level button), so autoplay rules hold.
import type { SoundKind } from './types';

type Mix = { waves: number; wind: number; traffic: number; murmur: number; horns: number; birds: number; crickets: number; music: number; gulls: number };
const Z: Mix = { waves: 0, wind: 0, traffic: 0, murmur: 0, horns: 0, birds: 0, crickets: 0, music: 0, gulls: 0 };
const m = (part: Partial<Mix>): Mix => ({ ...Z, ...part });
// Gains 0–1; horns, birds and gulls are events per minute.
export const MIXES: Record<SoundKind, Mix> = {
  sky: m({ wind: 0.35, waves: 0.12 }),
  beach: m({ waves: 0.55, murmur: 0.25, gulls: 5, music: 0.22, wind: 0.08 }),
  city: m({ traffic: 0.55, murmur: 0.35, horns: 9, wind: 0.05 }),
  coast: m({ traffic: 0.3, waves: 0.25, murmur: 0.25, birds: 4, gulls: 2 }),
  ranch: m({ wind: 0.15, murmur: 0.3, crickets: 0.25, music: 0.3, traffic: 0.12 }),
  tropic: m({ waves: 0.45, birds: 14, wind: 0.12, murmur: 0.15 }),
  mountain: m({ wind: 0.4, birds: 5, murmur: 0.1 }),
};

export type Ambience = {
  start: () => void;
  setKind: (kind: SoundKind | null) => void;
  duck: (level: number) => void;
  setMuted: (muted: boolean) => void;
  /** Music/ambience volume chosen by the teacher, 0–1. */
  setVolume: (volume: number) => void;
  /** The plane: 0 silent, 1 full roar. */
  engine: (level: number) => void;
  chime: () => void;
  dispose: () => void;
};

export function createAmbience(): Ambience {
  let ctx: AudioContext | null = null;
  let master: GainNode, ducker: GainNode, engineGain: GainNode;
  let layers: Record<'waves' | 'wind' | 'traffic' | 'murmur' | 'crickets' | 'music', GainNode>;
  let noise: AudioBuffer;
  let mix: Mix = MIXES.sky;
  let muted = false, volume = 1, timer = 0, beat = 0, waveLfo: OscillatorNode | null = null;

  function noiseBuffer(c: AudioContext) {
    const buffer = c.createBuffer(1, c.sampleRate * 4, c.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < data.length; i++) { last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02; data[i] = last * 3.5; }
    return buffer;
  }
  function bed(c: AudioContext, type: BiquadFilterType, freq: number, q: number, out: AudioNode) {
    const src = c.createBufferSource(); src.buffer = noise; src.loop = true; src.loopStart = Math.random();
    const f = c.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
    src.connect(f).connect(out); src.start();
    return f;
  }
  function blip(freq: number, dur: number, gain: number, type: OscillatorType = 'sine', glide = 0) {
    if (!ctx) return;
    const c = ctx, o = c.createOscillator(), g = c.createGain();
    o.type = type; o.frequency.value = freq;
    if (glide) o.frequency.exponentialRampToValueAtTime(Math.max(40, freq + glide), c.currentTime + dur);
    g.gain.setValueAtTime(0.0001, c.currentTime);
    g.gain.exponentialRampToValueAtTime(gain, c.currentTime + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + dur);
    o.connect(g).connect(ducker); o.start(); o.stop(c.currentTime + dur + 0.05);
  }
  function glideTo(next: Mix) {
    mix = next;
    if (!ctx) return;
    const t = ctx.currentTime;
    for (const key of Object.keys(layers) as (keyof typeof layers)[]) layers[key].gain.setTargetAtTime(next[key] * 0.5, t, 0.8);
  }
  // A pentatonic pluck every beat for the music places: never a recognisable song.
  const SCALE = [220, 247.5, 277.2, 330, 370, 440, 495];
  function tick() {
    if (!ctx) return;
    const perSecond = (n: number) => Math.random() < n / 60 / 4;
    if (perSecond(mix.horns)) { blip(392 + Math.random() * 60, 0.28, 0.05, 'square'); }
    if (perSecond(mix.birds)) { const f = 2200 + Math.random() * 1600; blip(f, 0.09, 0.025, 'sine', 600); window.setTimeout(() => blip(f * 1.1, 0.08, 0.02, 'sine', -400), 120); }
    if (perSecond(mix.gulls)) { blip(1400, 0.35, 0.02, 'sawtooth', -700); }
    if (mix.music > 0.01) {
      beat++;
      if (beat % 2 === 0) blip(SCALE[Math.floor(Math.random() * SCALE.length)], 0.5, 0.035 * mix.music * 2, 'triangle');
      if (beat % 8 === 0) blip(110, 0.7, 0.04 * mix.music * 2, 'sine');
    }
  }

  return {
    start() {
      if (ctx) { void ctx.resume(); return; }
      const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AC) return;
      try { ctx = new AC(); } catch { ctx = null; return; }
      const c = ctx;
      noise = noiseBuffer(c);
      master = c.createGain(); master.gain.value = muted ? 0 : 0.6 * volume;
      ducker = c.createGain(); ducker.gain.value = 1;
      ducker.connect(master).connect(c.destination);
      const gain = () => { const g = c.createGain(); g.gain.value = 0; g.connect(ducker); return g; };
      layers = { waves: gain(), wind: gain(), traffic: gain(), murmur: gain(), crickets: gain(), music: gain() };
      // Waves: low noise that swells and falls.
      const swell = c.createGain(); swell.gain.value = 0.6; swell.connect(layers.waves);
      bed(c, 'lowpass', 520, 0.5, swell);
      waveLfo = c.createOscillator(); waveLfo.frequency.value = 0.11;
      const depth = c.createGain(); depth.gain.value = 0.45; waveLfo.connect(depth).connect(swell.gain); waveLfo.start();
      bed(c, 'bandpass', 380, 0.4, layers.wind);
      bed(c, 'lowpass', 180, 0.8, layers.traffic);
      bed(c, 'bandpass', 900, 1.2, layers.murmur);
      bed(c, 'highpass', 5200, 6, layers.crickets);
      layers.music.gain.value = 0; layers.music.connect(ducker);
      engineGain = c.createGain(); engineGain.gain.value = 0; engineGain.connect(master);
      bed(c, 'lowpass', 300, 1.5, engineGain);
      glideTo(mix);
      timer = window.setInterval(tick, 250);
    },
    setKind(kind) { glideTo(kind ? MIXES[kind] : Z); },
    duck(level) { if (ctx) ducker.gain.setTargetAtTime(level, ctx.currentTime, 0.3); },
    setMuted(value) { muted = value; if (ctx) master.gain.setTargetAtTime(value ? 0 : 0.6 * volume, ctx.currentTime, 0.1); },
    setVolume(value) { volume = value; if (ctx) master.gain.setTargetAtTime(muted ? 0 : 0.6 * volume, ctx.currentTime, 0.1); },
    engine(level) { if (ctx) engineGain.gain.setTargetAtTime(level * 0.9, ctx.currentTime, 0.4); },
    chime() { blip(660, 0.5, 0.06, 'sine'); window.setTimeout(() => blip(880, 0.7, 0.05, 'sine'), 160); },
    dispose() { window.clearInterval(timer); waveLfo?.stop(); void ctx?.close(); ctx = null; },
  };
}
