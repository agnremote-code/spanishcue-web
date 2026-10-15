// Hospital San Casi Vivo · ambient sound made live with WebAudio, so no audio
// files are downloaded for it: fluorescent hum, crowd murmur, monitors, phones,
// cups, the laundry and the morgue's cold drone. Each sector kind has its own
// mix; the mix glides when you walk into another sector. While a listening
// plays the whole bed ducks so the voices stay clear.

type Mix = { hum: number; murmur: number; rumble: number; drone: number; beep: number; phone: number; clink: number; wheels: number; scream: number };
const SILENT: Mix = { hum: 0, murmur: 0, rumble: 0, drone: 0, beep: 0, phone: 0, clink: 0, wheels: 0, scream: 0 };
const m = (part: Partial<Mix>): Mix => ({ ...SILENT, ...part });

// Levels are gains (0–1); beep, phone, clink, wheels and scream (a distant
// cry somewhere down the corridor) are events per minute.
export const MIXES: Record<string, Mix> = {
  lobby: m({ hum: 0.25, murmur: 0.45, phone: 3, wheels: 2, scream: 1.5 }),
  crowd: m({ hum: 0.2, murmur: 0.8, phone: 1, wheels: 1, scream: 2 }),
  ward: m({ hum: 0.3, murmur: 0.3, beep: 50, wheels: 3, scream: 1 }),
  bay: m({ hum: 0.1, murmur: 0.2, rumble: 0.5, wheels: 5, scream: 2 }),
  trauma: m({ hum: 0.35, murmur: 0.35, beep: 110, wheels: 4, scream: 4 }),
  cafe: m({ hum: 0.15, murmur: 0.6, clink: 18 }),
  office: m({ hum: 0.35, murmur: 0.2, phone: 6 }),
  corridor: m({ hum: 0.35, murmur: 0.15, wheels: 4, scream: 1.5 }),
  street: m({ rumble: 0.7, murmur: 0.15 }),
  lab: m({ hum: 0.45, beep: 12, rumble: 0.15 }),
  rest: m({ hum: 0.2, murmur: 0.1, clink: 4 }),
  surgery: m({ hum: 0.4, beep: 72, rumble: 0.1 }),
  room: m({ hum: 0.25, beep: 30, murmur: 0.1 }),
  nurses: m({ hum: 0.3, murmur: 0.3, phone: 4, beep: 20 }),
  icu: m({ hum: 0.35, beep: 90, rumble: 0.12 }),
  laundry: m({ hum: 0.2, rumble: 0.6 }),
  morgue: m({ hum: 0.15, drone: 0.6 }),
  basement: m({ hum: 0.3, drone: 0.2, rumble: 0.2 }),
  birth: m({ hum: 0.25, murmur: 0.3, beep: 40, scream: 6 }),
};

export type Ambience = {
  start: () => void;
  setKind: (kind: string | null) => void;
  /** 1 = full ambience; lower while a card is open or a voice plays. */
  duck: (level: number) => void;
  setMuted: (muted: boolean) => void;
  chime: () => void;
  /** A human-sounding scream: near (volume 1) or far down the corridor. */
  scream: (volume?: number) => void;
  dispose: () => void;
};

export function createAmbience(): Ambience {
  let ctx: AudioContext | null = null;
  let master: GainNode, ducker: GainNode;
  let layers: Record<'hum' | 'murmur' | 'rumble' | 'drone', GainNode>;
  let noise: AudioBuffer;
  let mix: Mix = MIXES.lobby;
  let muted = false, timer = 0;

  function noiseBuffer(c: AudioContext) {
    const buffer = c.createBuffer(1, c.sampleRate * 4, c.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < data.length; i++) { last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02; data[i] = last * 3.5; }
    return buffer;
  }
  function loop(c: AudioContext, filter: BiquadFilterNode, out: AudioNode) {
    const src = c.createBufferSource(); src.buffer = noise; src.loop = true;
    src.connect(filter).connect(out); src.start();
  }

  function start() {
    if (ctx) { void ctx.resume(); return; }
    const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;
    const c = new AC();
    ctx = c;
    noise = noiseBuffer(c);
    master = c.createGain(); master.gain.value = muted ? 0 : 0.5;
    ducker = c.createGain(); ducker.gain.value = 1;
    ducker.connect(master).connect(c.destination);
    const gain = () => { const g = c.createGain(); g.gain.value = 0; g.connect(ducker); return g; };
    layers = { hum: gain(), murmur: gain(), rumble: gain(), drone: gain() };
    // Fluorescent hum: 100 Hz mains buzz with its harmonics, kept low.
    for (const [f, v] of [[100, 0.05], [200, 0.025], [300, 0.012]] as const) {
      const o = c.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f;
      const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 420;
      const g = c.createGain(); g.gain.value = v;
      o.connect(lp).connect(g).connect(layers.hum); o.start();
    }
    // Murmur: voices are noise in the speech band, slowly breathing.
    const band = c.createBiquadFilter(); band.type = 'bandpass'; band.frequency.value = 520; band.Q.value = 0.8;
    const breathe = c.createGain(); breathe.gain.value = 0.6;
    const lfo = c.createOscillator(); lfo.frequency.value = 0.23;
    const lfoGain = c.createGain(); lfoGain.gain.value = 0.25;
    lfo.connect(lfoGain).connect(breathe.gain); lfo.start();
    breathe.connect(layers.murmur);
    loop(c, band, breathe);
    // Rumble: traffic, engines, the laundry.
    const low = c.createBiquadFilter(); low.type = 'lowpass'; low.frequency.value = 160;
    loop(c, low, layers.rumble);
    // The morgue: two cold sines a breath apart.
    for (const f of [55, 55.6, 110.3]) {
      const o = c.createOscillator(); o.type = 'sine'; o.frequency.value = f;
      const g = c.createGain(); g.gain.value = f > 100 ? 0.04 : 0.12;
      o.connect(g).connect(layers.drone); o.start();
    }
    apply();
    timer = window.setInterval(events, 250);
  }

  function apply() {
    if (!ctx) return;
    const t = ctx.currentTime;
    for (const key of ['hum', 'murmur', 'rumble', 'drone'] as const) layers[key].gain.setTargetAtTime(mix[key] * 0.6, t, 0.8);
  }

  function tone(freq: number, length: number, volume: number, type: OscillatorType = 'sine', at = 0) {
    if (!ctx) return;
    const c = ctx, t = c.currentTime + at;
    const o = c.createOscillator(); o.type = type; o.frequency.value = freq;
    const g = c.createGain();
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(volume, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + length);
    o.connect(g).connect(ducker); o.start(t); o.stop(t + length + 0.05);
  }
  function burst(freq: number, length: number, volume: number, at = 0) {
    if (!ctx) return;
    const c = ctx, t = c.currentTime + at;
    const src = c.createBufferSource(); src.buffer = noise;
    const f = c.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = freq; f.Q.value = 6;
    const g = c.createGain();
    g.gain.setValueAtTime(volume, t); g.gain.exponentialRampToValueAtTime(0.0001, t + length);
    src.connect(f).connect(g).connect(ducker); src.start(t, Math.random() * 3); src.stop(t + length + 0.05);
  }

  // Random events, checked four times a second.
  function events() {
    if (!ctx || muted || ctx.state !== 'running') return;
    const chance = (perMinute: number) => Math.random() < perMinute / 240;
    if (chance(mix.beep)) tone(Math.random() < 0.85 ? 980 : 1240, 0.12, 0.05);
    if (chance(mix.phone)) for (let i = 0; i < 4; i++) { tone(820, 0.08, 0.035, 'square', i * 0.1); tone(640, 0.08, 0.03, 'square', i * 0.1 + 0.05); }
    if (chance(mix.clink)) burst(3800 + Math.random() * 1500, 0.12, 0.25);
    if (chance(mix.wheels)) { const len = 1.4 + Math.random(); burst(1800, len, 0.05); burst(240, len, 0.08); }
    if (chance(mix.scream)) scream(0.18 + Math.random() * 0.2);
  }

  // A scream: a voice-like sawtooth that jumps up, wavers and falls, through
  // vowel formants ("aaah"), with breath noise on top.
  function scream(volume = 1) {
    if (!ctx || muted) return;
    const c = ctx, t = c.currentTime;
    const len = 0.9 + Math.random() * 0.9;
    const base = 330 + Math.random() * 280;
    const o = c.createOscillator(); o.type = 'sawtooth';
    o.frequency.setValueAtTime(base * 0.7, t);
    o.frequency.exponentialRampToValueAtTime(base * 1.25, t + 0.12);
    o.frequency.exponentialRampToValueAtTime(base, t + len * 0.6);
    o.frequency.exponentialRampToValueAtTime(base * 0.55, t + len);
    const vib = c.createOscillator(); vib.frequency.value = 6 + Math.random() * 3;
    const vibGain = c.createGain(); vibGain.gain.value = base * 0.04;
    vib.connect(vibGain).connect(o.frequency);
    const g = c.createGain();
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.16 * volume, t + 0.06);
    g.gain.setValueAtTime(0.16 * volume, t + len * 0.7); g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    for (const [f, q, v] of [[850, 7, 1], [1250, 8, 0.7], [2900, 9, 0.35]] as const) {
      const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = f; bp.Q.value = q;
      const fg = c.createGain(); fg.gain.value = v;
      o.connect(bp).connect(fg).connect(g);
    }
    // Far screams lose their highs.
    const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 900 + 5000 * volume;
    g.connect(lp).connect(ducker);
    o.start(t); vib.start(t); o.stop(t + len + 0.05); vib.stop(t + len + 0.05);
    burst(1600, len * 0.8, 0.04 * volume);
  }

  function chime() {
    if (!ctx || muted) return;
    tone(659, 0.9, 0.06); tone(523, 1.1, 0.06, 'sine', 0.45); tone(392, 1.4, 0.06, 'sine', 0.9);
  }

  return {
    start,
    setKind: (kind) => { mix = (kind && MIXES[kind]) || MIXES.corridor; apply(); },
    duck: (level) => { if (ctx) ducker.gain.setTargetAtTime(level, ctx.currentTime, 0.25); },
    setMuted: (on) => { muted = on; if (ctx) master.gain.setTargetAtTime(on ? 0 : 0.5, ctx.currentTime, 0.2); },
    chime,
    scream,
    dispose: () => { window.clearInterval(timer); void ctx?.close(); ctx = null; },
  };
}
