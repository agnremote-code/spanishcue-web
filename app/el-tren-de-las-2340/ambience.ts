// El tren de las 23:40 · ambient sound made live with WebAudio, so no audio
// files are downloaded for it: the roll of the wheels and the clack of the
// rail joints, the diesel of the locomotive, the murmur of the dining car,
// a soft piano chord in the bar, the wind of the high Andes, a dog in the
// luggage van, snores behind the cabin doors, the station bell and the long
// horn of the train. Each sector kind has its own mix; the mix glides when you
// walk into another sector. While a listening plays the whole bed ducks so
// the voices stay clear.

type Mix = { hum: number; murmur: number; street: number; wind: number; music: number; clack: number; bark: number; snore: number; clink: number; horn: number; steps: number; bell: number };
const SILENT: Mix = { hum: 0, murmur: 0, street: 0, wind: 0, music: 0, clack: 0, bark: 0, snore: 0, clink: 0, horn: 0, steps: 0, bell: 0 };
const m = (part: Partial<Mix>): Mix => ({ ...SILENT, ...part });

// Levels are gains (0–1): hum is the diesel, street the roll of the wheels.
// clack, bark, snore, clink, horn, steps and bell are events per minute.
export const MIXES: Record<string, Mix> = {
  station: m({ hum: 0.25, murmur: 0.45, wind: 0.08, steps: 8, bell: 1.2, horn: 0.6 }),
  cab: m({ hum: 0.75, street: 0.7, wind: 0.2, clack: 40, horn: 1.5 }),
  engine: m({ hum: 1, street: 0.6, clack: 30 }),
  van: m({ hum: 0.2, street: 0.8, clack: 44, bark: 4 }),
  sleeper: m({ hum: 0.1, street: 0.65, clack: 40, snore: 3, steps: 1 }),
  cabin: m({ hum: 0.08, street: 0.5, clack: 34, snore: 6 }),
  dining: m({ hum: 0.08, street: 0.5, murmur: 0.45, clack: 34, clink: 12 }),
  kitchen: m({ hum: 0.2, street: 0.45, murmur: 0.2, clack: 30, clink: 22 }),
  bar: m({ hum: 0.05, street: 0.45, murmur: 0.5, music: 0.45, clack: 30, clink: 10 }),
  dome: m({ street: 0.55, wind: 0.3, clack: 36, murmur: 0.1 }),
  snow: m({ wind: 0.85, hum: 0.3, murmur: 0.1, bell: 0.6, steps: 2 }),
  dawn: m({ wind: 0.15, hum: 0.2, murmur: 0.35, steps: 6, bell: 1, horn: 0.5 }),
};

export type Ambience = {
  start: () => void;
  setKind: (kind: string | null) => void;
  /** 1 = full ambience; lower while a card is open or a voice plays. */
  duck: (level: number) => void;
  setMuted: (muted: boolean) => void;
  /** Music/ambience volume chosen by the teacher, 0–1. */
  setVolume: (volume: number) => void;
  /** The ding-dong before the loudspeakers speak. */
  chime: () => void;
  dispose: () => void;
};

export function createAmbience(): Ambience {
  let ctx: AudioContext | null = null;
  let master: GainNode, ducker: GainNode;
  let layers: Record<'hum' | 'murmur' | 'street' | 'wind' | 'music', GainNode>;
  let noise: AudioBuffer, white: AudioBuffer;
  let mix: Mix = MIXES.station;
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
    // The diesel of the locomotive, felt through the whole train.
    for (const [f, level] of [[38, 0.07], [76, 0.035], [114, 0.012]] as [number, number][]) {
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
    // The wheels on the rails: a low roll that swells on the curves.
    const road = c.createBiquadFilter(); road.type = 'lowpass'; road.frequency.value = 420;
    const roadGain = c.createGain(); roadGain.gain.value = 0.55;
    const wave = c.createOscillator(); wave.frequency.value = 0.05;
    const waveGain = c.createGain(); waveGain.gain.value = 0.25;
    wave.connect(waveGain).connect(roadGain.gain); wave.start();
    loop(c, noise, road, roadGain); roadGain.connect(layers.street);
    // The wind of the high Andes: airy white noise, gusting.
    const air = c.createBiquadFilter(); air.type = 'bandpass'; air.frequency.value = 700; air.Q.value = 0.4;
    const windGain = c.createGain(); windGain.gain.value = 0.12;
    const gust = c.createOscillator(); gust.frequency.value = 0.11;
    const gustGain = c.createGain(); gustGain.gain.value = 0.08;
    gust.connect(gustGain).connect(windGain.gain); gust.start();
    loop(c, white, air, windGain); windGain.connect(layers.wind);
    // The bar's old piano: a soft minor chord that breathes, with the
    // crackle of the speaker it comes through.
    const reed = c.createBiquadFilter(); reed.type = 'lowpass'; reed.frequency.value = 1800;
    reed.connect(layers.music);
    const bellows = c.createGain(); bellows.gain.value = 0.7; bellows.connect(reed);
    const sway = c.createOscillator(); sway.frequency.value = 0.5;
    const swayGain = c.createGain(); swayGain.gain.value = 0.3;
    sway.connect(swayGain).connect(bellows.gain); sway.start();
    for (const f of [196, 233.1, 293.7, 392]) {
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
  // Tango in the luggage van: two short barks.
  function bark() {
    if (!ctx) return;
    for (let i = 0; i < 2; i++) { tone(420, 0.12, 0.05, 'sawtooth', i * 0.22, -200); burst(900, 0.1, 0.05, i * 0.22, 2); }
  }
  // Somebody snoring behind a cabin door: a long low breath in, a rattle out.
  function snore() {
    if (!ctx) return;
    const c = ctx, t = c.currentTime;
    const o = c.createOscillator(); o.type = 'sawtooth'; o.frequency.setValueAtTime(55, t); o.frequency.linearRampToValueAtTime(70, t + 1.2);
    const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 400;
    const g = c.createGain(); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.05, t + 0.5); g.gain.linearRampToValueAtTime(0.0001, t + 1.3);
    o.connect(lp).connect(g).connect(ducker); o.start(t); o.stop(t + 1.4);
  }

  // Random events, checked four times a second.
  function events() {
    if (!ctx || muted || ctx.state !== 'running') return;
    const chance = (perMinute: number) => Math.random() < perMinute / 240;
    // The rail joints: ta-tac … ta-tac, the two bogies of the car.
    if (chance(mix.clack)) { burst(260, 0.09, 0.16, 0, 4); burst(240, 0.09, 0.13, 0.13, 4); burst(260, 0.09, 0.12, 0.62, 4); burst(240, 0.09, 0.1, 0.75, 4); }
    if (chance(mix.bark)) bark();
    if (chance(mix.snore)) snore();
    if (chance(mix.clink)) burst(3800 + Math.random() * 1500, 0.12, 0.2);
    // The long horn of the train, two notes, far ahead.
    if (chance(mix.horn)) { tone(311, 1.6, 0.03, 'sawtooth'); tone(370, 1.6, 0.025, 'sawtooth'); }
    // The station bell.
    if (chance(mix.bell)) for (let i = 0; i < 3; i++) tone(1046, 0.9, 0.04, 'sine', i * 0.45);
    // Footsteps on the platform or down the aisle.
    if (chance(mix.steps)) for (let i = 0; i < 6; i++) burst(500, 0.06, 0.06, i * 0.5, 3);
  }

  function chime() {
    if (!ctx || muted) return;
    // Ding-dong: the loudspeakers are about to speak.
    tone(784, 0.5, 0.06, 'sine'); tone(622, 0.7, 0.05, 'sine', 0.42);
  }

  return {
    start,
    setKind: (kind) => { mix = (kind && MIXES[kind]) || MIXES.sleeper; apply(); },
    duck: (level) => { if (ctx) ducker.gain.setTargetAtTime(level, ctx.currentTime, 0.25); },
    setMuted: (on) => { muted = on; if (ctx) master.gain.setTargetAtTime(on ? 0 : 0.5 * volume, ctx.currentTime, 0.2); },
    setVolume: (value) => { volume = value; if (ctx) master.gain.setTargetAtTime(muted ? 0 : 0.5 * volume, ctx.currentTime, 0.2); },
    chime,
    dispose: () => { window.clearInterval(timer); void ctx?.close(); ctx = null; },
  };
}
