// El consorcio · ambient sound made live with WebAudio, so no audio files are
// downloaded for it: the traffic of Medrano, the hum of the hall, voices
// behind the doors, the wind on the terrace, a tango on the record player,
// the drums of the 1.° C, the drops of the leak, fourteen cats, the hammer of
// the secret works, the party of the 5.° D and the WhatsApp of the consorcio.
// Each sector kind has its own mix; the mix glides when you walk into another
// sector. While a listening plays the whole bed ducks so the voices stay clear.

type Mix = { hum: number; murmur: number; street: number; wind: number; music: number; drip: number; drums: number; meow: number; hammer: number; clink: number; horn: number; steps: number };
const SILENT: Mix = { hum: 0, murmur: 0, street: 0, wind: 0, music: 0, drip: 0, drums: 0, meow: 0, hammer: 0, clink: 0, horn: 0, steps: 0 };
const m = (part: Partial<Mix>): Mix => ({ ...SILENT, ...part });

// Levels are gains (0–1); drip, drums, meow, hammer, clink, horn and steps are
// events per minute.
export const MIXES: Record<string, Mix> = {
  street: m({ street: 0.9, murmur: 0.2, horn: 3, steps: 6 }),
  hall: m({ hum: 0.35, street: 0.3, murmur: 0.15, steps: 4 }),
  patio: m({ hum: 0.1, street: 0.15, wind: 0.2, meow: 1 }),
  corridor: m({ hum: 0.3, murmur: 0.25, street: 0.08, steps: 3, drums: 0.5 }),
  office: m({ hum: 0.25, murmur: 0.1, street: 0.06 }),
  drums: m({ hum: 0.1, drums: 30, street: 0.05 }),
  drip: m({ hum: 0.15, drip: 50, murmur: 0.1 }),
  cats: m({ hum: 0.2, meow: 14, murmur: 0.1 }),
  empty: m({ hum: 0.15, street: 0.12, wind: 0.05 }),
  tango: m({ hum: 0.1, music: 0.65 }),
  party: m({ murmur: 0.55, music: 0.3, clink: 14 }),
  flat: m({ hum: 0.25, murmur: 0.08, street: 0.08 }),
  works: m({ hum: 0.1, hammer: 20, street: 0.06 }),
  terrace: m({ wind: 0.55, street: 0.35, murmur: 0.2, horn: 1.5, clink: 2 }),
};

export type Ambience = {
  start: () => void;
  setKind: (kind: string | null) => void;
  /** 1 = full ambience; lower while a card is open or a voice plays. */
  duck: (level: number) => void;
  setMuted: (muted: boolean) => void;
  /** Music/ambience volume chosen by the teacher, 0–1. */
  setVolume: (volume: number) => void;
  /** The two little pops of a new message in the consorcio's group. */
  chime: () => void;
  dispose: () => void;
};

export function createAmbience(): Ambience {
  let ctx: AudioContext | null = null;
  let master: GainNode, ducker: GainNode;
  let layers: Record<'hum' | 'murmur' | 'street' | 'wind' | 'music', GainNode>;
  let noise: AudioBuffer, white: AudioBuffer;
  let mix: Mix = MIXES.street;
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
    layers = { hum: gain(), murmur: gain(), street: gain(), wind: gain(), music: gain() };
    // The hum of an old building: the fridge, the fluorescent tube, the pipes.
    for (const [f, level] of [[50, 0.05], [100, 0.025], [150, 0.01]] as [number, number][]) {
      const o = c.createOscillator(); o.type = 'sine'; o.frequency.value = f;
      const g = c.createGain(); g.gain.value = level; o.connect(g).connect(layers.hum); o.start();
    }
    const pipes = c.createBiquadFilter(); pipes.type = 'lowpass'; pipes.frequency.value = 300;
    const pipesGain = c.createGain(); pipesGain.gain.value = 0.25; loop(c, noise, pipes, pipesGain); pipesGain.connect(layers.hum);
    // Voices behind the doors: noise in the speech band, slowly breathing.
    const band = c.createBiquadFilter(); band.type = 'bandpass'; band.frequency.value = 480; band.Q.value = 0.9;
    const breathe = c.createGain(); breathe.gain.value = 0.55;
    const lfo = c.createOscillator(); lfo.frequency.value = 0.19;
    const lfoGain = c.createGain(); lfoGain.gain.value = 0.25;
    lfo.connect(lfoGain).connect(breathe.gain); lfo.start();
    breathe.connect(layers.murmur);
    loop(c, noise, band, breathe);
    // Traffic on Medrano: a low roll that comes and goes with the lights.
    const road = c.createBiquadFilter(); road.type = 'lowpass'; road.frequency.value = 420;
    const roadGain = c.createGain(); roadGain.gain.value = 0.55;
    const wave = c.createOscillator(); wave.frequency.value = 0.05;
    const waveGain = c.createGain(); waveGain.gain.value = 0.25;
    wave.connect(waveGain).connect(roadGain.gain); wave.start();
    loop(c, noise, road, roadGain); roadGain.connect(layers.street);
    // Wind on the terrace: airy white noise, gusting.
    const air = c.createBiquadFilter(); air.type = 'bandpass'; air.frequency.value = 700; air.Q.value = 0.4;
    const windGain = c.createGain(); windGain.gain.value = 0.12;
    const gust = c.createOscillator(); gust.frequency.value = 0.11;
    const gustGain = c.createGain(); gustGain.gain.value = 0.08;
    gust.connect(gustGain).connect(windGain.gain); gust.start();
    loop(c, white, air, windGain); windGain.connect(layers.wind);
    // A tango on the record player: a minor chord on a reedy bandoneón, with
    // its bellows breathing, through the crackle of an old disc.
    const reed = c.createBiquadFilter(); reed.type = 'lowpass'; reed.frequency.value = 1800;
    reed.connect(layers.music);
    const bellows = c.createGain(); bellows.gain.value = 0.7; bellows.connect(reed);
    const sway = c.createOscillator(); sway.frequency.value = 0.5;
    const swayGain = c.createGain(); swayGain.gain.value = 0.3;
    sway.connect(swayGain).connect(bellows.gain); sway.start();
    for (const f of [220, 261.6, 329.6, 440]) {
      const o = c.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f; o.detune.value = (Math.random() - 0.5) * 12;
      const g = c.createGain(); g.gain.value = f > 300 ? 0.012 : 0.02;
      o.connect(g).connect(bellows); o.start();
    }
    const crackle = c.createBiquadFilter(); crackle.type = 'highpass'; crackle.frequency.value = 3000;
    const crackleGain = c.createGain(); crackleGain.gain.value = 0.03; loop(c, white, crackle, crackleGain); crackleGain.connect(layers.music);
    apply();
    timer = window.setInterval(events, 250);
  }

  function apply() {
    if (!ctx) return;
    const t = ctx.currentTime;
    for (const key of ['hum', 'murmur', 'street', 'wind', 'music'] as const) layers[key].gain.setTargetAtTime(mix[key] * 0.6, t, 0.8);
  }

  function tone(freq: number, length: number, level: number, type: OscillatorType = 'sine', at = 0, slide = 0) {
    if (!ctx) return;
    const c = ctx, t = c.currentTime + at;
    const o = c.createOscillator(); o.type = type; o.frequency.setValueAtTime(freq, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(20, freq + slide), t + length);
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
  // A cat: a short rising and falling «miau».
  function meow() {
    if (!ctx) return;
    const c = ctx, t = c.currentTime, len = 0.5 + Math.random() * 0.4, f = 600 + Math.random() * 300;
    const o = c.createOscillator(); o.type = 'triangle';
    o.frequency.setValueAtTime(f, t); o.frequency.linearRampToValueAtTime(f * 1.5, t + len * 0.4); o.frequency.linearRampToValueAtTime(f * 0.8, t + len);
    const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 1200; bp.Q.value = 1.5;
    const g = c.createGain(); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.05, t + 0.06); g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    o.connect(bp).connect(g).connect(ducker); o.start(t); o.stop(t + len + 0.05);
  }
  // The drums of the 1.° C through the wall: kick, snare, the odd crash.
  function drumBar() {
    const beat = 0.24;
    for (let i = 0; i < 8; i++) {
      if (i % 2 === 0) tone(70, 0.18, 0.12, 'sine', i * beat, -30);
      if (i % 4 === 2) burst(1800, 0.12, 0.12, i * beat, 1.2, white);
      burst(7000, 0.04, 0.03, i * beat, 2, white);
    }
    if (Math.random() < 0.3) burst(5000, 1.2, 0.06, 0, 0.6, white);
  }

  // Random events, checked four times a second.
  function events() {
    if (!ctx || muted || ctx.state !== 'running') return;
    const chance = (perMinute: number) => Math.random() < perMinute / 240;
    if (chance(mix.drip)) tone(1400 + Math.random() * 500, 0.12, 0.04, 'sine', 0, -700);
    if (chance(mix.drums)) drumBar();
    if (chance(mix.meow)) meow();
    if (chance(mix.hammer)) { const n = 2 + Math.floor(Math.random() * 4); for (let i = 0; i < n; i++) burst(1200, 0.08, 0.16, i * 0.42, 3); }
    if (chance(mix.clink)) burst(3800 + Math.random() * 1500, 0.12, 0.2);
    // A car horn down in the street, and a colectivo braking.
    if (chance(mix.horn)) { tone(392, 0.35, 0.025, 'square'); tone(494, 0.35, 0.02, 'square'); }
    // Footsteps on the marble.
    if (chance(mix.steps)) for (let i = 0; i < 6; i++) burst(500, 0.06, 0.06, i * 0.5, 3);
  }

  function chime() {
    if (!ctx || muted) return;
    // Two little pops, up: a message in the group.
    tone(880, 0.14, 0.06, 'sine', 0, 300); tone(1318.5, 0.18, 0.05, 'sine', 0.13, 200);
  }

  return {
    start,
    setKind: (kind) => { mix = (kind && MIXES[kind]) || MIXES.hall; apply(); },
    duck: (level) => { if (ctx) ducker.gain.setTargetAtTime(level, ctx.currentTime, 0.25); },
    setMuted: (on) => { muted = on; if (ctx) master.gain.setTargetAtTime(on ? 0 : 0.5 * volume, ctx.currentTime, 0.2); },
    setVolume: (value) => { volume = value; if (ctx) master.gain.setTargetAtTime(muted ? 0 : 0.5 * volume, ctx.currentTime, 0.2); },
    chime,
    dispose: () => { window.clearInterval(timer); void ctx?.close(); ctx = null; },
  };
}
