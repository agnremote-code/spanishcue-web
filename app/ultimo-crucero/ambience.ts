// Último crucero · ambient sound made live with WebAudio, so no audio files
// are downloaded for it: the sea against the hull, the wind and the rain on
// deck (stronger as the storm grows), the engines below, the murmur of the
// ballroom with a slow bolero on the piano, glasses at the bar, pans in the
// kitchen, the creak of an old ship, the thunder after every lightning flash
// and the ding-dong of the loudspeakers. Each sector kind has its own mix;
// the mix glides when you walk into another sector. While a listening plays
// the whole bed ducks so the voices stay clear.

type Mix = { hum: number; murmur: number; sea: number; wind: number; music: number; creak: number; clink: number; pans: number; bell: number };
const SILENT: Mix = { hum: 0, murmur: 0, sea: 0, wind: 0, music: 0, creak: 0, clink: 0, pans: 0, bell: 0 };
const m = (part: Partial<Mix>): Mix => ({ ...SILENT, ...part });

// Levels are gains (0–1); creak, clink, pans and bell are events per minute.
export const MIXES: Record<string, Mix> = {
  deck: m({ sea: 0.7, wind: 0.7, music: 0.04, creak: 3, bell: 1 }),
  bridge: m({ hum: 0.25, sea: 0.3, wind: 0.3, creak: 4 }),
  radio: m({ hum: 0.35, sea: 0.2, wind: 0.2, creak: 3 }),
  engine: m({ hum: 0.9, sea: 0.15, creak: 6 }),
  corridor: m({ hum: 0.25, murmur: 0.1, sea: 0.25, music: 0.08, creak: 8 }),
  room: m({ hum: 0.2, murmur: 0.08, sea: 0.25, music: 0.06, creak: 6 }),
  kitchen: m({ hum: 0.35, murmur: 0.2, sea: 0.15, clink: 10, pans: 12, creak: 3 }),
  salon: m({ hum: 0.1, murmur: 0.55, sea: 0.12, music: 0.6, clink: 16, creak: 3 }),
};

export type Ambience = {
  start: () => void;
  setKind: (kind: string | null) => void;
  /** 0 calm, 1 the worst of the storm, 2 dawn: wind, rain and sea follow it. */
  setStorm: (phase: number) => void;
  /** 1 = full ambience; lower while a card is open or a voice plays. */
  duck: (level: number) => void;
  setMuted: (muted: boolean) => void;
  /** Music/ambience volume chosen by the teacher, 0–1. */
  setVolume: (volume: number) => void;
  /** The ding-dong of the ship's loudspeakers. */
  chime: () => void;
  /** Thunder after a lightning flash (k: how close it was, 0–1). */
  thunder: (k: number) => void;
  dispose: () => void;
};

export function createAmbience(): Ambience {
  let ctx: AudioContext | null = null;
  let master: GainNode, ducker: GainNode;
  let layers: Record<'hum' | 'murmur' | 'sea' | 'wind' | 'music', GainNode>;
  let noise: AudioBuffer, white: AudioBuffer;
  let mix: Mix = MIXES.deck;
  let muted = false, volume = 1, timer = 0, storm = 0, outside = true;
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
    layers = { hum: gain(), murmur: gain(), sea: gain(), wind: gain(), music: gain() };
    // The engines: a deep throb under everything.
    for (const [f, level] of [[38, 0.07], [76, 0.035], [114, 0.012]] as [number, number][]) {
      const o = c.createOscillator(); o.type = 'sine'; o.frequency.value = f;
      const g = c.createGain(); g.gain.value = level; o.connect(g).connect(layers.hum); o.start();
    }
    const pistons = c.createBiquadFilter(); pistons.type = 'lowpass'; pistons.frequency.value = 220;
    const pistonGain = c.createGain(); pistonGain.gain.value = 0.3;
    const throb = c.createOscillator(); throb.frequency.value = 2.2;
    const throbGain = c.createGain(); throbGain.gain.value = 0.15;
    throb.connect(throbGain).connect(pistonGain.gain); throb.start();
    loop(c, noise, pistons, pistonGain); pistonGain.connect(layers.hum);
    // Voices in the ballroom: noise in the speech band, slowly breathing.
    const band = c.createBiquadFilter(); band.type = 'bandpass'; band.frequency.value = 480; band.Q.value = 0.9;
    const breathe = c.createGain(); breathe.gain.value = 0.55;
    const lfo = c.createOscillator(); lfo.frequency.value = 0.19;
    const lfoGain = c.createGain(); lfoGain.gain.value = 0.25;
    lfo.connect(lfoGain).connect(breathe.gain); lfo.start();
    breathe.connect(layers.murmur);
    loop(c, noise, band, breathe);
    // The sea against the hull: a long low swell that comes and goes.
    const swell = c.createBiquadFilter(); swell.type = 'lowpass'; swell.frequency.value = 380;
    const swellGain = c.createGain(); swellGain.gain.value = 0.6;
    const wave = c.createOscillator(); wave.frequency.value = 0.13;
    const waveGain = c.createGain(); waveGain.gain.value = 0.4;
    wave.connect(waveGain).connect(swellGain.gain); wave.start();
    loop(c, noise, swell, swellGain); swellGain.connect(layers.sea);
    // Wind and rain: airy noise that gusts, and a hiss of drops on top.
    const air = c.createBiquadFilter(); air.type = 'bandpass'; air.frequency.value = 650; air.Q.value = 0.5;
    const windGain = c.createGain(); windGain.gain.value = 0.14;
    const gust = c.createOscillator(); gust.frequency.value = 0.17;
    const gustGain = c.createGain(); gustGain.gain.value = 0.1;
    gust.connect(gustGain).connect(windGain.gain); gust.start();
    loop(c, white, air, windGain); windGain.connect(layers.wind);
    const hiss = c.createBiquadFilter(); hiss.type = 'highpass'; hiss.frequency.value = 3500;
    const hissGain = c.createGain(); hissGain.gain.value = 0.05;
    loop(c, white, hiss, hissGain); hissGain.connect(layers.wind);
    apply();
    timer = window.setInterval(events, 250);
  }

  function apply() {
    if (!ctx) return;
    const t = ctx.currentTime;
    const s = storm > 1 ? Math.max(0.05, 1 - (storm - 1) * 3) * 0.3 : 0.35 + storm * 0.65;
    const level: Record<string, number> = { hum: mix.hum, murmur: mix.murmur, music: mix.music, sea: mix.sea * (0.5 + s), wind: mix.wind * s * (outside ? 1 : 0.4) };
    for (const key of ['hum', 'murmur', 'sea', 'wind', 'music'] as const) layers[key].gain.setTargetAtTime(level[key] * 0.6, t, 0.8);
  }

  function tone(freq: number, length: number, level: number, type: OscillatorType = 'sine', at = 0, slide = 0, out?: AudioNode) {
    if (!ctx) return;
    const c = ctx, t = c.currentTime + at;
    const o = c.createOscillator(); o.type = type; o.frequency.setValueAtTime(freq, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(20, freq + slide), t + length);
    const g = c.createGain();
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(level, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + length);
    o.connect(g).connect(out ?? ducker); o.start(t); o.stop(t + length + 0.05);
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
  // An old ship creaking: a slow, low groan of wood and steel.
  function creak() {
    if (!ctx) return;
    const c = ctx, t = c.currentTime, len = 0.9 + Math.random() * 0.8;
    const o = c.createOscillator(); o.type = 'sawtooth';
    const f = 90 + Math.random() * 70;
    o.frequency.setValueAtTime(f, t); o.frequency.linearRampToValueAtTime(f * 1.25, t + len);
    const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 420; bp.Q.value = 6;
    const g = c.createGain(); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.02, t + 0.2); g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    o.connect(bp).connect(g).connect(ducker); o.start(t); o.stop(t + len + 0.05);
  }
  // The bolero on the piano: a slow minor phrase, one note at a time.
  const PHRASE = [220, 261.6, 329.6, 293.7, 261.6, 246.9, 220, 196, 220, 164.8, 196, 220];
  function piano() {
    if (!ctx || mix.music < 0.05) return;
    const f = PHRASE[note % PHRASE.length]; note++;
    tone(f, 1.6, 0.05 * mix.music, 'triangle', 0, 0, layers.music);
    if (note % 3 === 1) tone(f / 2, 2.2, 0.035 * mix.music, 'sine', 0, 0, layers.music);
  }
  // The ship's bell, swinging with the waves.
  function bell() {
    for (const [f, l] of [[523, 0.03], [1046, 0.012]] as [number, number][]) tone(f, 1.8, l, 'sine');
  }

  // Random events, checked four times a second.
  let beat = 0;
  function events() {
    if (!ctx || muted || ctx.state !== 'running') return;
    const chance = (perMinute: number) => Math.random() < perMinute / 240;
    const s = storm > 1 ? 0.3 : 0.5 + storm;
    if (chance(mix.creak * s)) creak();
    if (chance(mix.clink)) burst(3800 + Math.random() * 1500, 0.12, 0.2);
    if (chance(mix.pans)) burst(1800 + Math.random() * 600, 0.35, 0.12, 0, 3);
    if (chance(mix.bell * (storm > 1 ? 0.3 : 1 + storm * 2))) bell();
    if (++beat % 3 === 0) piano();
  }

  function chime() {
    if (!ctx || muted) return;
    // Ding-dong: the loudspeakers before a message.
    tone(784, 0.6, 0.06, 'sine', 0); tone(622.3, 0.9, 0.06, 'sine', 0.45);
  }
  function thunder(k: number) {
    if (!ctx || muted) return;
    const delay = 0.3 + (1 - k) * 1.8;
    burst(90, 2.6 + k * 1.5, 0.35 + k * 0.4, delay, 0.7);
    burst(180, 1.2, 0.2 + k * 0.2, delay + 0.05, 1.2);
  }

  return {
    start,
    setKind: (kind) => { mix = (kind && MIXES[kind]) || MIXES.deck; outside = kind === 'deck' || !kind; apply(); },
    setStorm: (phase) => { storm = phase; apply(); },
    duck: (level) => { if (ctx) ducker.gain.setTargetAtTime(level, ctx.currentTime, 0.25); },
    setMuted: (on) => { muted = on; if (ctx) master.gain.setTargetAtTime(on ? 0 : 0.5 * volume, ctx.currentTime, 0.2); },
    setVolume: (value) => { volume = value; if (ctx) master.gain.setTargetAtTime(muted ? 0 : 0.5 * volume, ctx.currentTime, 0.2); },
    chime,
    thunder,
    dispose: () => { window.clearInterval(timer); void ctx?.close(); ctx = null; },
  };
}
