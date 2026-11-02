// Vuelo cancelado · ambient sound made live with WebAudio, so no audio files
// are downloaded for it: the air conditioning, the crowd, the rain on the
// glass, jets on the runway, trolley wheels, the security beep, the PA chime
// and the thunder. Each sector kind has its own mix; the mix glides when you
// walk into another sector. While a listening plays the whole bed ducks so
// the voices stay clear.

type Mix = { hvac: number; murmur: number; rain: number; rumble: number; organ: number; beep: number; clink: number; wheels: number; jet: number; tannoy: number };
const SILENT: Mix = { hvac: 0, murmur: 0, rain: 0, rumble: 0, organ: 0, beep: 0, clink: 0, wheels: 0, jet: 0, tannoy: 0 };
const m = (part: Partial<Mix>): Mix => ({ ...SILENT, ...part });

// Levels are gains (0–1); beep, clink, wheels, jet and tannoy (the far PA
// mumbling a gate number) are events per minute.
export const MIXES: Record<string, Mix> = {
  kerb: m({ rain: 0.95, rumble: 0.6, murmur: 0.1, wheels: 3, jet: 1 }),
  hall: m({ hvac: 0.3, murmur: 0.55, rain: 0.25, wheels: 4, tannoy: 2 }),
  checkin: m({ hvac: 0.3, murmur: 0.7, beep: 6, wheels: 5, tannoy: 2 }),
  queue: m({ hvac: 0.25, murmur: 0.85, wheels: 3, tannoy: 1.5 }),
  shops: m({ hvac: 0.3, murmur: 0.45, clink: 6, tannoy: 1 }),
  lobby: m({ hvac: 0.3, murmur: 0.4, rain: 0.15, wheels: 2, tannoy: 1.5 }),
  security: m({ hvac: 0.35, murmur: 0.5, beep: 14, clink: 10 }),
  office: m({ hvac: 0.4, murmur: 0.15, beep: 2 }),
  belts: m({ hvac: 0.25, murmur: 0.5, rumble: 0.35, beep: 3, wheels: 5 }),
  customs: m({ hvac: 0.35, murmur: 0.3, beep: 4 }),
  arrivals: m({ hvac: 0.25, murmur: 0.65, rain: 0.2, wheels: 4, tannoy: 1 }),
  shop: m({ hvac: 0.3, murmur: 0.3, clink: 8 }),
  vip: m({ hvac: 0.2, murmur: 0.2, clink: 10, rain: 0.1 }),
  smoke: m({ hvac: 0.55, murmur: 0.2 }),
  chapel: m({ hvac: 0.1, organ: 0.55, rain: 0.1 }),
  food: m({ hvac: 0.25, murmur: 0.6, clink: 22 }),
  rest: m({ hvac: 0.3, murmur: 0.1, rain: 0.35, jet: 1, tannoy: 0.5 }),
  gate: m({ hvac: 0.25, murmur: 0.4, rain: 0.45, jet: 2.5, tannoy: 2 }),
  concourse: m({ hvac: 0.3, murmur: 0.35, rain: 0.3, wheels: 3, jet: 1.5, tannoy: 2 }),
};

export type Ambience = {
  start: () => void;
  setKind: (kind: string | null) => void;
  /** 1 = full ambience; lower while a card is open or a voice plays. */
  duck: (level: number) => void;
  setMuted: (muted: boolean) => void;
  /** Music/ambience volume chosen by the teacher, 0–1. */
  setVolume: (volume: number) => void;
  /** The PA «ding-dong» before an announcement. */
  chime: () => void;
  /** Thunder rolling in `delay` seconds after the flash. */
  thunder: (delay?: number, strength?: number) => void;
  dispose: () => void;
};

export function createAmbience(): Ambience {
  let ctx: AudioContext | null = null;
  let master: GainNode, ducker: GainNode;
  let layers: Record<'hvac' | 'murmur' | 'rain' | 'rumble' | 'organ', GainNode>;
  let noise: AudioBuffer, white: AudioBuffer;
  let mix: Mix = MIXES.kerb;
  let muted = false, volume = 1, timer = 0;

  function brownBuffer(c: AudioContext) {
    const buffer = c.createBuffer(1, c.sampleRate * 4, c.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < data.length; i++) { last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02; data[i] = last * 3.5; }
    return buffer;
  }
  function whiteBuffer(c: AudioContext) {
    const buffer = c.createBuffer(1, c.sampleRate * 3, c.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    return buffer;
  }
  function loop(c: AudioContext, buffer: AudioBuffer, filter: AudioNode, out: AudioNode) {
    const src = c.createBufferSource(); src.buffer = buffer; src.loop = true;
    src.connect(filter).connect(out); src.start(0, Math.random() * 2);
  }

  function start() {
    if (ctx) { void ctx.resume(); return; }
    const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;
    const c = new AC();
    ctx = c;
    noise = brownBuffer(c);
    white = whiteBuffer(c);
    master = c.createGain(); master.gain.value = muted ? 0 : 0.5 * volume;
    ducker = c.createGain(); ducker.gain.value = 1;
    ducker.connect(master).connect(c.destination);
    const gain = () => { const g = c.createGain(); g.gain.value = 0; g.connect(ducker); return g; };
    layers = { hvac: gain(), murmur: gain(), rain: gain(), rumble: gain(), organ: gain() };
    // Air conditioning: a broad soft hiss with a low fan tone under it.
    const air = c.createBiquadFilter(); air.type = 'lowpass'; air.frequency.value = 900;
    const airGain = c.createGain(); airGain.gain.value = 0.5;
    loop(c, noise, air, airGain); airGain.connect(layers.hvac);
    const fan = c.createOscillator(); fan.type = 'triangle'; fan.frequency.value = 58;
    const fanGain = c.createGain(); fanGain.gain.value = 0.05;
    fan.connect(fanGain).connect(layers.hvac); fan.start();
    // Murmur: voices are noise in the speech band, slowly breathing.
    const band = c.createBiquadFilter(); band.type = 'bandpass'; band.frequency.value = 520; band.Q.value = 0.8;
    const breathe = c.createGain(); breathe.gain.value = 0.6;
    const lfo = c.createOscillator(); lfo.frequency.value = 0.21;
    const lfoGain = c.createGain(); lfoGain.gain.value = 0.25;
    lfo.connect(lfoGain).connect(breathe.gain); lfo.start();
    breathe.connect(layers.murmur);
    loop(c, noise, band, breathe);
    // Rain: bright white noise, a little swell, on the glass and the canopy.
    const hiss = c.createBiquadFilter(); hiss.type = 'highpass'; hiss.frequency.value = 1400;
    const rainGain = c.createGain(); rainGain.gain.value = 0.22;
    const gust = c.createOscillator(); gust.frequency.value = 0.07;
    const gustGain = c.createGain(); gustGain.gain.value = 0.07;
    gust.connect(gustGain).connect(rainGain.gain); gust.start();
    loop(c, white, hiss, rainGain); rainGain.connect(layers.rain);
    // Rumble: buses on the kerb, the baggage belts.
    const low = c.createBiquadFilter(); low.type = 'lowpass'; low.frequency.value = 160;
    loop(c, noise, low, layers.rumble);
    // The chapel: a soft organ chord (C – E – G – C), breathing.
    for (const f of [130.8, 164.8, 196, 261.6]) {
      const o = c.createOscillator(); o.type = 'sine'; o.frequency.value = f;
      const g = c.createGain(); g.gain.value = f > 200 ? 0.035 : 0.06;
      o.connect(g).connect(layers.organ); o.start();
    }
    apply();
    timer = window.setInterval(events, 250);
  }

  function apply() {
    if (!ctx) return;
    const t = ctx.currentTime;
    for (const key of ['hvac', 'murmur', 'rain', 'rumble', 'organ'] as const) layers[key].gain.setTargetAtTime(mix[key] * 0.6, t, 0.8);
  }

  function tone(freq: number, length: number, level: number, type: OscillatorType = 'sine', at = 0) {
    if (!ctx) return;
    const c = ctx, t = c.currentTime + at;
    const o = c.createOscillator(); o.type = type; o.frequency.value = freq;
    const g = c.createGain();
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(level, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + length);
    o.connect(g).connect(ducker); o.start(t); o.stop(t + length + 0.05);
  }
  function burst(freq: number, length: number, level: number, at = 0, q = 6, buffer = noise) {
    if (!ctx) return;
    const c = ctx, t = c.currentTime + at;
    const src = c.createBufferSource(); src.buffer = buffer;
    const f = c.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = freq; f.Q.value = q;
    const g = c.createGain();
    g.gain.setValueAtTime(level, t); g.gain.exponentialRampToValueAtTime(0.0001, t + length);
    src.connect(f).connect(g).connect(ducker); src.start(t, Math.random() * 2); src.stop(t + length + 0.05);
  }
  // A jet on the runway: a long swell of low roar with a whine on top.
  function jet() {
    if (!ctx) return;
    const c = ctx, t = c.currentTime, len = 7 + Math.random() * 4;
    const src = c.createBufferSource(); src.buffer = noise; src.loop = true;
    const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 380;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.32, t + len * 0.45); g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    src.connect(lp).connect(g).connect(ducker); src.start(t); src.stop(t + len + 0.1);
    const o = c.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(1800, t); o.frequency.linearRampToValueAtTime(2400, t + len * 0.5); o.frequency.linearRampToValueAtTime(1500, t + len);
    const og = c.createGain();
    og.gain.setValueAtTime(0.0001, t); og.gain.exponentialRampToValueAtTime(0.008, t + len * 0.5); og.gain.exponentialRampToValueAtTime(0.0001, t + len);
    o.connect(og).connect(ducker); o.start(t); o.stop(t + len + 0.1);
  }

  // Random events, checked four times a second.
  function events() {
    if (!ctx || muted || ctx.state !== 'running') return;
    const chance = (perMinute: number) => Math.random() < perMinute / 240;
    // The arch at security: one long beep, sometimes three.
    if (chance(mix.beep)) { const n = Math.random() < 0.3 ? 3 : 1; for (let i = 0; i < n; i++) tone(1320, 0.18, 0.04, 'square', i * 0.26); }
    if (chance(mix.clink)) burst(3800 + Math.random() * 1500, 0.12, 0.25);
    // Suitcase wheels on the tiles: a rolling rattle passing by.
    if (chance(mix.wheels)) { const len = 1.6 + Math.random() * 1.4; for (let i = 0; i < len * 9; i++) burst(900 + Math.random() * 300, 0.05, 0.05, i / 9); burst(220, len, 0.06); }
    if (chance(mix.jet)) jet();
    // The PA far away: a murmured voice through a small speaker.
    if (chance(mix.tannoy)) { const len = 2 + Math.random() * 2; for (let i = 0; i < len * 4; i++) burst(900 + Math.random() * 600, 0.22, 0.05, i / 4, 4); }
  }

  function chime() {
    if (!ctx || muted) return;
    // Three notes, up and back: the airport «ding-dong-ding».
    tone(523.3, 1.2, 0.07); tone(659.3, 1.2, 0.07, 'sine', 0.42); tone(784, 1.6, 0.07, 'sine', 0.84);
    tone(1046.5, 1.0, 0.02, 'sine', 0); tone(1318.5, 1.0, 0.02, 'sine', 0.42);
  }

  function thunder(delay = 1, strength = 1) {
    if (!ctx || muted) return;
    const c = ctx, t = c.currentTime + delay, len = 3.5 + strength * 2.5;
    const src = c.createBufferSource(); src.buffer = noise; src.loop = true;
    const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.setValueAtTime(900, t); lp.frequency.exponentialRampToValueAtTime(90, t + len);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.9 * strength, t + 0.08);
    g.gain.exponentialRampToValueAtTime(0.35 * strength, t + 0.6);
    g.gain.linearRampToValueAtTime(0.5 * strength, t + 1.1);
    g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    src.connect(lp).connect(g).connect(ducker); src.start(t); src.stop(t + len + 0.1);
  }

  return {
    start,
    setKind: (kind) => { mix = (kind && MIXES[kind]) || MIXES.hall; apply(); },
    duck: (level) => { if (ctx) ducker.gain.setTargetAtTime(level, ctx.currentTime, 0.25); },
    setMuted: (on) => { muted = on; if (ctx) master.gain.setTargetAtTime(on ? 0 : 0.5 * volume, ctx.currentTime, 0.2); },
    setVolume: (value) => { volume = value; if (ctx) master.gain.setTargetAtTime(muted ? 0 : 0.5 * volume, ctx.currentTime, 0.2); },
    chime,
    thunder,
    dispose: () => { window.clearInterval(timer); void ctx?.close(); ctx = null; },
  };
}
