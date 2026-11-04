// La boda · ambient sound made live with WebAudio, so no audio files are
// downloaded for it: the wind over the pampa, crickets and frogs at night,
// the murmur of the long tables, glasses, the asado sizzling, the band in
// the tent (a cumbia beat over a warm chord), the chapel bell, a horse and
// the WhatsApp of the family. Each sector kind has its own mix; the mix
// glides when you walk into another sector. While a listening plays the whole
// bed ducks so the voices stay clear.

type Mix = { hum: number; murmur: number; street: number; wind: number; music: number; drip: number; drums: number; meow: number; hammer: number; clink: number; horn: number; steps: number };
const SILENT: Mix = { hum: 0, murmur: 0, street: 0, wind: 0, music: 0, drip: 0, drums: 0, meow: 0, hammer: 0, clink: 0, horn: 0, steps: 0 };
const m = (part: Partial<Mix>): Mix => ({ ...SILENT, ...part });

// Levels are gains (0–1); the rest are events per minute. In this class
// «drip» is a cricket, «meow» a frog, «hammer» the sizzle of the grill,
// «horn» a horse and «steps» the chapel bell.
export const MIXES: Record<string, Mix> = {
  gate: m({ wind: 0.45, murmur: 0.1, music: 0.08, drip: 10, horn: 0.6 }),
  chapel: m({ hum: 0.25, murmur: 0.12, steps: 1.5 }),
  room: m({ hum: 0.2, murmur: 0.15, music: 0.08 }),
  kitchen: m({ hum: 0.35, murmur: 0.2, clink: 18, hammer: 4 }),
  porch: m({ wind: 0.3, murmur: 0.2, music: 0.12, drip: 8 }),
  asado: m({ wind: 0.2, murmur: 0.35, hammer: 14, clink: 4 }),
  tables: m({ wind: 0.15, murmur: 0.6, music: 0.18, clink: 16 }),
  garden: m({ wind: 0.35, murmur: 0.15, music: 0.12, drip: 12 }),
  party: m({ murmur: 0.5, music: 0.6, drums: 26, clink: 8 }),
  stage: m({ murmur: 0.3, music: 0.8, drums: 34 }),
  bar: m({ murmur: 0.45, music: 0.45, drums: 20, clink: 26 }),
  farm: m({ wind: 0.4, horn: 2.5, drip: 14, music: 0.06 }),
  pond: m({ wind: 0.35, meow: 10, drip: 22, music: 0.05 }),
  field: m({ wind: 0.4, drip: 16, music: 0.08, murmur: 0.05 }),
};

export type Ambience = {
  start: () => void;
  setKind: (kind: string | null) => void;
  /** 1 = full ambience; lower while a card is open or a voice plays. */
  duck: (level: number) => void;
  setMuted: (muted: boolean) => void;
  /** Music/ambience volume chosen by the teacher, 0–1. */
  setVolume: (volume: number) => void;
  /** The two little pops of a new message in the family's group. */
  chime: () => void;
  dispose: () => void;
};

export function createAmbience(): Ambience {
  let ctx: AudioContext | null = null;
  let master: GainNode, ducker: GainNode;
  let layers: Record<'hum' | 'murmur' | 'street' | 'wind' | 'music', GainNode>;
  let noise: AudioBuffer, white: AudioBuffer;
  let mix: Mix = MIXES.gate;
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
    // The hum of a room full of people: the fridge, the lamps, the walls.
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
    // A far-away road over the pampa: a low roll that comes and goes.
    const road = c.createBiquadFilter(); road.type = 'lowpass'; road.frequency.value = 420;
    const roadGain = c.createGain(); roadGain.gain.value = 0.55;
    const wave = c.createOscillator(); wave.frequency.value = 0.05;
    const waveGain = c.createGain(); waveGain.gain.value = 0.25;
    wave.connect(waveGain).connect(roadGain.gain); wave.start();
    loop(c, noise, road, roadGain); roadGain.connect(layers.street);
    // Wind over the pampa: airy white noise, gusting.
    const air = c.createBiquadFilter(); air.type = 'bandpass'; air.frequency.value = 700; air.Q.value = 0.4;
    const windGain = c.createGain(); windGain.gain.value = 0.12;
    const gust = c.createOscillator(); gust.frequency.value = 0.11;
    const gustGain = c.createGain(); gustGain.gain.value = 0.08;
    gust.connect(gustGain).connect(windGain.gain); gust.start();
    loop(c, white, air, windGain); windGain.connect(layers.wind);
    // The band in the tent through the canvas: a warm major chord on an
    // organ that swells and breathes (the beat comes from «drums»).
    const tone0 = c.createBiquadFilter(); tone0.type = 'lowpass'; tone0.frequency.value = 1400;
    tone0.connect(layers.music);
    const swell = c.createGain(); swell.gain.value = 0.7; swell.connect(tone0);
    const sway = c.createOscillator(); sway.frequency.value = 0.25;
    const swayGain = c.createGain(); swayGain.gain.value = 0.3;
    sway.connect(swayGain).connect(swell.gain); sway.start();
    for (const f of [196, 246.9, 293.7, 392]) {
      const o = c.createOscillator(); o.type = 'triangle'; o.frequency.value = f; o.detune.value = (Math.random() - 0.5) * 10;
      const g = c.createGain(); g.gain.value = f > 300 ? 0.014 : 0.022;
      o.connect(g).connect(swell); o.start();
    }
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
  // A frog by the pond: two low croaks.
  function croak() {
    for (let i = 0; i < 2; i++) tone(140 + Math.random() * 40, 0.12, 0.05, 'square', i * 0.18, -40);
  }
  // A cricket: a fast high trill.
  function cricket() {
    const f = 4200 + Math.random() * 600;
    for (let i = 0; i < 5; i++) tone(f, 0.03, 0.012, 'sine', i * 0.05);
  }
  // A horse: a neigh sliding down, through the nose.
  function neigh() {
    if (!ctx) return;
    const c = ctx, t = c.currentTime, len = 1.1;
    const o = c.createOscillator(); o.type = 'sawtooth';
    o.frequency.setValueAtTime(700, t); o.frequency.linearRampToValueAtTime(900, t + 0.2); o.frequency.exponentialRampToValueAtTime(300, t + len);
    const vib = c.createOscillator(); vib.frequency.value = 18; const vg = c.createGain(); vg.gain.value = 60; vib.connect(vg).connect(o.frequency); vib.start(t); vib.stop(t + len);
    const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 1100; bp.Q.value = 2;
    const g = c.createGain(); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.035, t + 0.08); g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    o.connect(bp).connect(g).connect(ducker); o.start(t); o.stop(t + len + 0.05);
  }
  // The band's beat: a cumbia bar (kick, güiro scrape, snare on the off-beat).
  function drumBar() {
    const beat = 0.27;
    for (let i = 0; i < 8; i++) {
      if (i % 4 === 0) tone(70, 0.18, 0.1, 'sine', i * beat, -30);
      if (i % 2 === 1) burst(2400, 0.1, 0.08, i * beat, 1.5, white);
      burst(6000, 0.08, 0.025, i * beat + beat / 2, 4, white);
    }
  }
  // The chapel bell: one deep strike with its overtones.
  function bell() {
    for (const [f, l] of [[220, 0.05], [440, 0.025], [660, 0.015]] as [number, number][]) tone(f, 2.6, l, 'sine');
  }

  // Random events, checked four times a second.
  function events() {
    if (!ctx || muted || ctx.state !== 'running') return;
    const chance = (perMinute: number) => Math.random() < perMinute / 240;
    if (chance(mix.drip)) cricket();
    if (chance(mix.drums)) drumBar();
    if (chance(mix.meow)) croak();
    if (chance(mix.hammer)) burst(3000, 0.6, 0.05, 0, 0.5, white);
    if (chance(mix.clink)) burst(3800 + Math.random() * 1500, 0.12, 0.2);
    if (chance(mix.horn)) neigh();
    if (chance(mix.steps)) bell();
  }

  function chime() {
    if (!ctx || muted) return;
    // Two little pops, up: a message in the group.
    tone(880, 0.14, 0.06, 'sine', 0, 300); tone(1318.5, 0.18, 0.05, 'sine', 0.13, 200);
  }

  return {
    start,
    setKind: (kind) => { mix = (kind && MIXES[kind]) || MIXES.field; apply(); },
    duck: (level) => { if (ctx) ducker.gain.setTargetAtTime(level, ctx.currentTime, 0.25); },
    setMuted: (on) => { muted = on; if (ctx) master.gain.setTargetAtTime(on ? 0 : 0.5 * volume, ctx.currentTime, 0.2); },
    setVolume: (value) => { volume = value; if (ctx) master.gain.setTargetAtTime(muted ? 0 : 0.5 * volume, ctx.currentTime, 0.2); },
    chime,
    dispose: () => { window.clearInterval(timer); void ctx?.close(); ctx = null; },
  };
}
