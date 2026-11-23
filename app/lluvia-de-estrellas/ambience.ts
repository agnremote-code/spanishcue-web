// Lluvia de estrellas · ambient sound made live with WebAudio, so no audio
// files are downloaded for it: the cold wind of the high desert, the
// crackle of the campfire with a slow guitar, the murmur of the campers,
// pans in the kitchen tent, the hum of the generator, the llamas, the hush
// of the salt flat, a soft shimmer for every big fireball and the ding-dong
// of the campsite loudspeaker. Each sector kind has its own mix; the mix
// glides when you walk into another sector. While a listening plays the
// whole bed ducks so the voices stay clear.

type Mix = { wind: number; murmur: number; fire: number; hum: number; music: number; pans: number; llama: number; drip: number };
const SILENT: Mix = { wind: 0, murmur: 0, fire: 0, hum: 0, music: 0, pans: 0, llama: 0, drip: 0 };
const m = (part: Partial<Mix>): Mix => ({ ...SILENT, ...part });

// Levels are gains (0–1); fire, pans, llama and drip are events per minute.
export const MIXES: Record<string, Mix> = {
  wind: m({ wind: 0.6, murmur: 0.05, music: 0.05 }),
  camp: m({ wind: 0.4, murmur: 0.25, music: 0.08, fire: 6 }),
  fire: m({ wind: 0.25, murmur: 0.45, music: 0.5, fire: 70 }),
  kitchen: m({ wind: 0.2, murmur: 0.35, pans: 14, fire: 10 }),
  radio: m({ wind: 0.45, hum: 0.12, murmur: 0.1 }),
  engine: m({ wind: 0.35, hum: 0.7 }),
  animals: m({ wind: 0.4, llama: 6, murmur: 0.08 }),
  water: m({ wind: 0.35, drip: 30, murmur: 0.12 }),
  dome: m({ wind: 0.1, hum: 0.25, murmur: 0.1 }),
  night: m({ wind: 0.5, murmur: 0.04 }),
};

export type Ambience = {
  start: () => void;
  setKind: (kind: string | null) => void;
  /** 0 early evening, 1 deep night, 2 the peak at the lookout: the camp grows quiet, the wind stays. */
  setSky: (phase: number) => void;
  /** 1 = full ambience; lower while a card is open or a voice plays. */
  duck: (level: number) => void;
  setMuted: (muted: boolean) => void;
  /** Music/ambience volume chosen by the teacher, 0–1. */
  setVolume: (volume: number) => void;
  /** The ding-dong of the campsite loudspeaker. */
  chime: () => void;
  /** A soft shimmer when a big fireball crosses the sky (k: brightness, 0–1). */
  shimmer: (k: number) => void;
  dispose: () => void;
};

// A slow, open guitar figure in A minor (Hz), for the campfire.
const ARPEGGIO = [110, 164.81, 220, 261.63, 329.63, 261.63, 220, 164.81, 98, 146.83, 196, 246.94, 293.66, 246.94, 196, 146.83];

export function createAmbience(): Ambience {
  let ctx: AudioContext | null = null;
  let master: GainNode, ducker: GainNode;
  let layers: Record<'wind' | 'murmur' | 'hum' | 'music', GainNode>;
  let noise: AudioBuffer, white: AudioBuffer;
  let mix: Mix = MIXES.wind;
  let muted = false, volume = 1, timer = 0, sky = 0;
  let note = 0;

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
  function tone(freq: number, type: OscillatorType, gain: number, attack: number, decay: number, out: AudioNode, at = 0) {
    if (!ctx) return;
    const t = ctx.currentTime + at;
    const o = ctx.createOscillator(); o.type = type; o.frequency.value = freq;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(gain, t + attack); g.gain.exponentialRampToValueAtTime(0.0001, t + attack + decay);
    o.connect(g).connect(out); o.start(t); o.stop(t + attack + decay + 0.05);
  }
  function burst(duration: number, freq: number, q: number, gain: number, out: AudioNode) {
    if (!ctx) return;
    const t = ctx.currentTime;
    const src = ctx.createBufferSource(); src.buffer = white;
    const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = freq; f.Q.value = q;
    const g = ctx.createGain(); g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    src.connect(f).connect(g).connect(out); src.start(t, Math.random() * 2); src.stop(t + duration + 0.05);
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
    layers = { wind: gain(), murmur: gain(), hum: gain(), music: gain() };
    // The wind: low noise through a slowly sweeping filter.
    const windF = c.createBiquadFilter(); windF.type = 'lowpass'; windF.frequency.value = 380;
    const lfo = c.createOscillator(); lfo.frequency.value = 0.07; const lfoG = c.createGain(); lfoG.gain.value = 220; lfo.connect(lfoG).connect(windF.frequency); lfo.start();
    loop(c, noise, windF, layers.wind);
    // The murmur of people: band-passed noise.
    const mur = c.createBiquadFilter(); mur.type = 'bandpass'; mur.frequency.value = 520; mur.Q.value = 0.8;
    loop(c, noise, mur, layers.murmur);
    // The generator hum.
    const o = c.createOscillator(); o.type = 'sawtooth'; o.frequency.value = 50; const hf = c.createBiquadFilter(); hf.type = 'lowpass'; hf.frequency.value = 160; o.connect(hf).connect(layers.hum); o.start();
    apply();
    timer = window.setInterval(tick, 250);
  }
  function apply() {
    if (!ctx) return;
    const t = ctx.currentTime;
    // After lights-out the camp grows quiet; at the peak, nobody speaks.
    const quiet = sky > 1 ? 0.25 : 1 - Math.min(1, sky) * 0.5;
    layers.wind.gain.setTargetAtTime(mix.wind * 0.5, t, 1.2);
    layers.murmur.gain.setTargetAtTime(mix.murmur * 0.25 * quiet, t, 1.2);
    layers.hum.gain.setTargetAtTime(mix.hum * 0.08 * (sky >= 0.34 ? 0.2 : 1), t, 1.2);
    layers.music.gain.setTargetAtTime(mix.music * 0.35, t, 1.2);
  }
  function tick() {
    if (!ctx || muted) return;
    const per = (n: number) => Math.random() < n / 240; // events per minute at 4 ticks a second
    if (per(mix.fire)) burst(0.05 + Math.random() * 0.08, 1800 + Math.random() * 2400, 2, 0.12, layers.music);
    if (per(mix.pans)) tone(900 + Math.random() * 1300, 'triangle', 0.05, 0.002, 0.5, ducker);
    if (per(mix.llama)) { const f = 420 + Math.random() * 120; tone(f, 'sine', 0.04, 0.2, 0.6, ducker); tone(f * 1.01, 'sine', 0.03, 0.25, 0.6, ducker, 0.05); }
    if (per(mix.drip)) tone(1400 + Math.random() * 900, 'sine', 0.03, 0.002, 0.12, ducker);
    // The guitar at the fire: one note every tick, with rests.
    if (mix.music > 0.2 && Math.random() < 0.7) { tone(ARPEGGIO[note % ARPEGGIO.length], 'triangle', 0.09, 0.005, 1.6, layers.music); note++; }
  }
  function chime() {
    if (!ctx || muted) return;
    tone(784, 'sine', 0.12, 0.01, 0.9, ducker); tone(523.25, 'sine', 0.12, 0.01, 1.2, ducker, 0.45);
  }
  function shimmer(k: number) {
    if (!ctx || muted) return;
    [1318.5, 1567.98, 2093].forEach((f, i) => tone(f, 'sine', 0.02 + k * 0.03, 0.3, 1.8, ducker, i * 0.12));
  }
  return {
    start,
    setKind: (kind) => { mix = (kind && MIXES[kind]) || MIXES.wind; apply(); },
    setSky: (phase) => { sky = phase; apply(); },
    duck: (level) => { if (ctx) ducker.gain.setTargetAtTime(level, ctx.currentTime, 0.3); },
    setMuted: (value) => { muted = value; if (ctx) master.gain.setTargetAtTime(muted ? 0 : 0.5 * volume, ctx.currentTime, 0.2); },
    setVolume: (value) => { volume = Math.max(0, Math.min(1, value)); if (ctx) master.gain.setTargetAtTime(muted ? 0 : 0.5 * volume, ctx.currentTime, 0.2); },
    chime,
    shimmer,
    dispose: () => { window.clearInterval(timer); void ctx?.close(); ctx = null; },
  };
}
